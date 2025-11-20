<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Listing;
use App\Entity\User;
use App\Message\NewExchangeCreatedNotification;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class NewExchangeCreatedNotificationHandler
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
        // Adresse d'expédition par défaut (injectée via services.yaml)
        private readonly string $mailerFrom = 'no-reply@talenteko.test',
    ) {
    }

    public function __invoke(NewExchangeCreatedNotification $notification): void
    {
        // Récupération des entités concernées par la notification
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        $sender = $this->em->getRepository(User::class)->find($notification->getSenderId());
        $listing = $this->em->getRepository(Listing::class)->find($notification->getListingId());

        if (!$recipient || !$sender || !$listing) {
            $this->logger->warning('Notification NewExchange ignorée : données manquantes.', [
                'recipientId' => $notification->getRecipientId(),
                'senderId' => $notification->getSenderId(),
                'listingId' => $notification->getListingId(),
            ]);

            return;
        }
        // Construction de l'email avec le bon template (chemin corrigé)
        $email = (new TemplatedEmail())
            ->from($this->mailerFrom)
            ->to($recipient->getEmail())
            ->subject('Nouvelle proposition d’échange sur TalentÉkô')
            ->htmlTemplate('exchange/new_exchange.html.twig')
            ->context([
                'recipient' => $recipient,
                'sender' => $sender->getPseudo() ?? $sender->getEmail(),
                'listingTitle' => $listing->getTitle(),
                'listingSlug' => $listing->getSlug(),
            ]);

        try {
            $this->mailer->send($email);
            $this->logger->info('Notification NewExchange envoyée.', [
                'exchangeId' => $notification->getExchangeId(),
                'recipient' => $recipient->getEmail(),
                'sender' => $sender->getPseudo(),
            ]);
        } catch (TransportExceptionInterface $e) {
            // Gestion propre des erreurs SMTP
            $this->logger->error('Échec envoi email NewExchange.', [
                'error' => $e->getMessage(),
                'recipient' => $recipient->getEmail(),
                'exchangeId' => $notification->getExchangeId(),
            ]);
        }
    }
}
