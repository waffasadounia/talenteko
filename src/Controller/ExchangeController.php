<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Exchange;
use App\Entity\Listing;
use App\Entity\User;
use App\Entity\Notification;
use App\Enum\ExchangeStatus;
use App\Message\NewExchangeCreatedNotification;
use App\Message\ExchangeStatusChangedNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
final class ExchangeController extends AbstractController
{
    #[Route(
        '/exchange/new/{slug}',
        name: 'app_exchange_new',
        methods: ['POST'],
        requirements: ['slug' => '(?!nouvelle$)(?!\d+$)[A-Za-z0-9][A-Za-z0-9\-]*']
    )]
    public function new(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')] Listing $listing,
        EntityManagerInterface $em,
        MessageBusInterface $bus,
        Security $security,
    ): Response {
        /** @var User $user */
        $user = $security->getUser();

        if ($listing->getAuthor() === $user) {
            $this->addFlash('error', 'Vous ne pouvez pas proposer un échange sur votre propre annonce.');
            return $this->redirectToRoute('app_listing_show', ['slug' => $listing->getSlug()]);
        }

        $existing = $em->getRepository(Exchange::class)->findOneBy([
            'listing'   => $listing,
            'requester' => $user,
            'status'    => ExchangeStatus::PENDING,
        ]);

        if ($existing) {
            $this->addFlash('warning', 'Vous avez déjà une demande en attente pour cette annonce.');
            return $this->redirectToRoute('app_listing_show', ['slug' => $listing->getSlug()]);
        }

        $exchange = new Exchange();
        $exchange->setListing($listing);
        $exchange->setRequester($user);
        $exchange->setStatus(ExchangeStatus::PENDING);

        $em->persist($exchange);

        // 📌 Notification DB
        $notif = new Notification();
        $notif->setUser($listing->getAuthor());
        $notif->setType('exchange.new');
        $notif->setContent(sprintf('%s a proposé un échange sur votre annonce "%s".', $user->getDisplayName(), $listing->getTitle()));
        $em->persist($notif);

        $em->flush();

        $bus->dispatch(new NewExchangeCreatedNotification(
            $listing->getAuthor()->getId(),
            $user->getId(),
            $exchange->getId(),
            $listing->getId(),
        ));

        $this->addFlash('success', 'Votre proposition d’échange a été envoyée !');
        return $this->redirectToRoute('app_listing_show', ['slug' => $listing->getSlug()]);
    }

    #[Route('/exchange/{id}', name: 'app_exchange_show', methods: ['GET'])]
    public function show(Exchange $exchange, Security $security): Response
    {
        /** @var User $user */
        $user = $security->getUser();

        if ($exchange->getRequester() !== $user && $exchange->getListing()->getAuthor() !== $user) {
            throw $this->createAccessDeniedException('Vous n’avez pas accès à cet échange.');
        }

        return $this->render('exchange/show.html.twig', [
            'exchange'  => $exchange,
            'listing'   => $exchange->getListing(),
            'requester' => $exchange->getRequester(),
            'status'    => $exchange->getStatus(),
        ]);
    }

    #[Route('/exchange/{id}/accept', name: 'app_exchange_accept', methods: ['POST'])]
    public function accept(Exchange $exchange, EntityManagerInterface $em, Security $security, MessageBusInterface $bus): Response
    {
        /** @var User $user */
        $user = $security->getUser();

        if ($exchange->getListing()->getAuthor() !== $user) {
            throw $this->createAccessDeniedException();
        }

        $exchange->setStatus(ExchangeStatus::ACCEPTED);

        $notif = new Notification();
        $notif->setUser($exchange->getRequester());
        $notif->setType('exchange.accepted');
        $notif->setContent('Votre demande d’échange a été acceptée.');
        $em->persist($notif);

        $em->flush();

        $bus->dispatch(new ExchangeStatusChangedNotification(
            $exchange->getId(),
            $exchange->getRequester()->getId(),
            $exchange->getListing()->getId(),
            $exchange->getStatus(),
        ));

        $this->addFlash('success', 'Vous avez accepté la demande d’échange.');
        return $this->redirectToRoute('app_exchange_show', ['id' => $exchange->getId()]);
    }

    #[Route('/exchange/{id}/decline', name: 'app_exchange_decline', methods: ['POST'])]
    public function decline(Exchange $exchange, EntityManagerInterface $em, Security $security, MessageBusInterface $bus): Response
    {
        /** @var User $user */
        $user = $security->getUser();

        if ($exchange->getListing()->getAuthor() !== $user) {
            throw $this->createAccessDeniedException();
        }

        $exchange->setStatus(ExchangeStatus::DECLINED);

        $notif = new Notification();
        $notif->setUser($exchange->getRequester());
        $notif->setType('exchange.declined');
        $notif->setContent('Votre demande d’échange a été refusée.');
        $em->persist($notif);

        $em->flush();

        $bus->dispatch(new ExchangeStatusChangedNotification(
            $exchange->getId(),
            $exchange->getRequester()->getId(),
            $exchange->getListing()->getId(),
            $exchange->getStatus(),
        ));

        $this->addFlash('info', 'Vous avez refusé la demande d’échange.');
        return $this->redirectToRoute('app_exchange_show', ['id' => $exchange->getId()]);
    }

    #[Route('/exchange/{id}/cancel', name: 'app_exchange_cancel', methods: ['POST'])]
    public function cancel(Exchange $exchange, EntityManagerInterface $em, Security $security, MessageBusInterface $bus): Response
    {
        /** @var User $user */
        $user = $security->getUser();

        if ($exchange->getRequester() !== $user) {
            throw $this->createAccessDeniedException();
        }

        $exchange->setStatus(ExchangeStatus::CANCELED);

        $notif = new Notification();
        $notif->setUser($exchange->getListing()->getAuthor());
        $notif->setType('exchange.canceled');
        $notif->setContent(sprintf('%s a annulé sa demande d’échange.', $user->getDisplayName()));
        $em->persist($notif);

        $em->flush();

        $bus->dispatch(new ExchangeStatusChangedNotification(
            $exchange->getId(),
            $exchange->getListing()->getAuthor()->getId(),
            $exchange->getListing()->getId(),
            $exchange->getStatus(),
        ));

        $this->addFlash('warning', 'Vous avez annulé votre demande d’échange.');
        return $this->redirectToRoute('app_listing_show', ['slug' => $exchange->getListing()->getSlug()]);
    }
}
