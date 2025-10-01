<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Exchange;
use App\Entity\Listing;
use App\Entity\User;
use App\Message\ExchangeStatusChangedNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class ExchangeStatusChangedNotificationHandler
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly EntityManagerInterface $em,
    ) {
    }

    public function __invoke(ExchangeStatusChangedNotification $notification): void
    {
        // Charger les entités
        $exchange = $this->em->getRepository(Exchange::class)->find($notification->getExchangeId());
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        $listing = $this->em->getRepository(Listing::class)->find($notification->getListingId());

        if (!$exchange || !$recipient) {
            return; // sécurité minimale : pas d’email si données manquantes
        }

        // Construire le mail
        $email = (new TemplatedEmail())
            ->from($_ENV['APP_MAILER_FROM'] ?? 'no-reply@talenteko.test')
            ->to($recipient->getEmail())
            ->subject('Mise à jour de votre échange sur TalentÉkô')
            ->htmlTemplate('emails/exchange_status.html.twig')
            ->context([
                'listingTitle' => $listing?->getTitle() ?? 'Annonce inconnue',
                'status'      => $notification->getStatus(),
                'exchangeId'  => $exchange->getId(),
            ]);

        // Envoyer
        $this->mailer->send($email);
    }
}
