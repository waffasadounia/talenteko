<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Listing;
use App\Entity\User;
use App\Message\NewExchangeNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class NewExchangeNotificationHandler
{
    public function __construct(
        private MailerInterface $mailer,
        private EntityManagerInterface $em,
    ) {
    }

    public function __invoke(NewExchangeNotification $notification): void
    {
        // Récupérer le destinataire
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        if (!$recipient) {
            return; // sécurité : si destinataire inexistant → rien à faire
        }

        // Récupérer l'annonce associée à l'échange
        $listing = $this->em->getRepository(Listing::class)->find($notification->getListingId());

        // Construire l’email
        $email = (new TemplatedEmail())
            ->from($_ENV['APP_MAILER_FROM'] ?? 'no-reply@talenteko.test')
            ->to($recipient->getEmail())
            ->subject('Mise à jour d’un échange sur Talentékô')
            ->htmlTemplate('@emails/exchange_status.html.twig') // namespace twig
            ->context([
                'exchangeId' => $notification->getExchangeId(),
                'status' => $notification->getStatus(),
                'listingTitle' => $listing?->getTitle() ?? 'Annonce inconnue',
            ]);

        // Envoyer
        $this->mailer->send($email);
    }
}
