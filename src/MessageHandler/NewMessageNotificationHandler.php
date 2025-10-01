<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Message;
use App\Entity\User;
use App\Message\NewMessageNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class NewMessageNotificationHandler
{
    public function __construct(
        private MailerInterface $mailer,
        private EntityManagerInterface $em,
    ) {
    }

    public function __invoke(NewMessageNotification $notification): void
    {
        // On va chercher le message en DB
        $message = $this->em->getRepository(Message::class)->find($notification->getMessageId());

        if (!$message) {
            return; // sécurité
        }

        $recipient = $message->getRecipient();
        $sender    = $message->getSender();

        if (!$recipient instanceof User || !$sender instanceof User) {
            return; // sécurité
        }

        // Construire l’email de notification
        $email = (new TemplatedEmail())
            ->from($_ENV['APP_MAILER_FROM'] ?? 'no-reply@talenteko.test')
            ->to($recipient->getEmail())
            ->subject('Nouveau message reçu sur TalentÉkô')
            ->htmlTemplate('emails/new_message.html.twig')
            ->context([
                'sender'   => $sender->getPseudo() ?? $sender->getEmail(),
                'content'  => $message->getContent(),
                'sentAt'   => $message->getCreatedAt(),
            ]);

        $this->mailer->send($email);
    }
}
