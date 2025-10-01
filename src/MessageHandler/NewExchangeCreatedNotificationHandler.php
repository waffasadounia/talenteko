<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Listing;
use App\Entity\User;
use App\Message\NewExchangeCreatedNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class NewExchangeCreatedNotificationHandler
{
    public function __construct(
        private MailerInterface $mailer,
        private EntityManagerInterface $em,
    ) {
    }

    public function __invoke(NewExchangeCreatedNotification $notification): void
    {
        // Récupérer destinataire, expéditeur et annonce
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        $sender = $this->em->getRepository(User::class)->find($notification->getSenderId());
        $listing = $this->em->getRepository(Listing::class)->find($notification->getListingId());

        if (!$recipient || !$sender || !$listing) {
            return; // sécurité
        }

        // Construire l'email
        $email = (new TemplatedEmail())
            ->from($_ENV['APP_MAILER_FROM'] ?? 'no-reply@talenteko.test')
            ->to($recipient->getEmail())
            ->subject('Nouvelle proposition d’échange sur TalentÉkô')
            ->htmlTemplate('emails/new_exchange.html.twig') // 🔄 chemin corrigé
            ->context([
                'sender' => $sender->getPseudo(),
                'listingTitle' => $listing->getTitle(),
                'listingSlug' => $listing->getSlug(), // 🔄 remplacé exchangeId
            ]);

        // Envoyer
        $this->mailer->send($email);
    }
}
