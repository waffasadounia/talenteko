<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Exchange;
use App\Entity\Listing;
use App\Entity\User;
use App\Message\NewExchangeCreatedNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;

final class ExchangeController extends AbstractController
{
    #[Route('/exchange/new/{id}', name: 'app_exchange_new', methods: ['POST'])]
    public function new(
        int $id,
        Request $request,
        EntityManagerInterface $em,
        MessageBusInterface $bus,
        Security $security,
    ): Response {
        // 1) VÃ©rifier que l'utilisateur est connectÃ©
        /** @var User $user */
        $user = $security->getUser();
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        // 2) RÃ©cupÃ©rer l'annonce
        $listing = $em->getRepository(Listing::class)->find($id);
        if (!$listing) {
            throw $this->createNotFoundException('Annonce introuvable.');
        }

        // 3) CrÃ©er la proposition dâ€™Ã©change
        $exchange = new Exchange();
        $exchange->setListing($listing);
        $exchange->setRequester($user);           // celui qui propose
        $exchange->setStatus('pending');          // en attente

        $em->persist($exchange);
        $em->flush();

        // 4) PrÃ©parer et dispatcher la notification email
        $bus->dispatch(new NewExchangeCreatedNotification(
            $listing->getAuthor()->getId(),   // destinataire = auteur de l'annonce
            $user->getId(),                   // expÃ©diteur = utilisateur actuel
            $exchange->getId(),               // id de l'Ã©change
            $listing->getId(),                 // id de l'annonce
        ));

        // 5) Feedback utilisateur
        $this->addFlash('success', 'Votre proposition dâ€™Ã©change a Ã©tÃ© envoyÃ©e !');

        return $this->redirectToRoute('app_listing_show', ['slug' => $listing->getSlug()]);
    }
}
