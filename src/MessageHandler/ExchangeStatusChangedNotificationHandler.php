<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Exchange;
use App\Entity\Listing;
use App\Entity\User;
use App\Message\ExchangeStatusChangedNotification;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class ExchangeStatusChangedNotificationHandler
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
        // Adresse d’expédition par défaut (injectée via services.yaml)
        private readonly string $mailerFrom = 'no-reply@talenteko.test',
    ) {
    }

    public function __invoke(ExchangeStatusChangedNotification $notification): void
    {
        // Chargement des entités concernées
        $exchange = $this->em->getRepository(Exchange::class)->find($notification->getExchangeId());
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        $listing = $this->em->getRepository(Listing::class)->find($notification->getListingId());

        if (!$exchange || !$recipient) {
            $this->logger->warning('Notification ExchangeStatus ignorée : données manquantes.', [
                'exchangeId' => $notification->getExchangeId(),
                'recipientId' => $notification->getRecipientId(),
                'listingId' => $notification->getListingId(),
            ]);

            return; // Pas d’envoi si données incomplètes
        }

        // Préparation de l’email
        $email = (new TemplatedEmail())
            ->from($this->mailerFrom)
            ->to($recipient->getEmail())
            ->subject(' Mise à jour de votre échange sur TalentÉkô')
            ->htmlTemplate('exchange/exchange_status.html.twig')
            ->context([
                'recipient' => $recipient,
                'listingTitle' => $listing?->getTitle() ?? 'Annonce inconnue',
                'status' => $notification->getStatus(),
                'exchangeId' => $exchange->getId(),
            ]);

        try {
            $this->mailer->send($email);
            $this->logger->info('Notification ExchangeStatus envoyée.', [
                'exchangeId' => $exchange->getId(),
                'recipient' => $recipient->getEmail(),
                'status' => $notification->getStatus()->value,
            ]);
        } catch (TransportExceptionInterface $e) {
            // Gestion propre d’échec SMTP
            $this->logger->error('Échec envoi email ExchangeStatus.', [
                'error' => $e->getMessage(),
                'exchangeId' => $exchange->getId(),
                'recipient' => $recipient->getEmail(),
            ]);
        }
    }
}
