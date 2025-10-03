<?php

declare(strict_types=1);

namespace App\MessageHandler;

use App\Entity\Message;
use App\Entity\User;
use App\Message\NewMessageNotification;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class NewMessageNotificationHandler
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
        private readonly string $mailerFrom = 'no-reply@talenteko.test',
    ) {
    }

    public function __invoke(NewMessageNotification $notification): void
    {
        $message = $this->em->getRepository(Message::class)->find($notification->getMessageId());

        if (!$message) {
            $this->logger->warning('Notification NewMessage ignorée : message introuvable.', [
                'messageId' => $notification->getMessageId(),
            ]);

            return;
        }

        $recipient = $message->getRecipient();
        $sender = $message->getSender();

        if (!$recipient instanceof User || !$sender instanceof User) {
            $this->logger->warning('Notification NewMessage ignorée : destinataire ou expéditeur invalide.', [
                'messageId' => $message->getId(),
            ]);

            return;
        }

        $email = (new TemplatedEmail())
            ->from($this->mailerFrom)
            ->to($recipient->getEmail())
            ->subject('Nouveau message reçu sur TalentÉkô')
            ->htmlTemplate('emails/new_message.html.twig')
            ->context([
                'recipient' => $recipient,
                'sender' => $sender->getPseudo() ?? $sender->getEmail(),
                'content' => $message->getContent(),
                'sentAt' => $message->getCreatedAt(),
            ]);

        try {
            $this->mailer->send($email);
            $this->logger->info('Notification NewMessage envoyée.', [
                'messageId' => $message->getId(),
                'recipient' => $recipient->getEmail(),
                'sender' => $sender->getEmail(),
            ]);
        } catch (TransportExceptionInterface $e) {
            $this->logger->error('Échec envoi email NewMessage.', [
                'error' => $e->getMessage(),
                'recipient' => $recipient->getEmail(),
                'messageId' => $message->getId(),
            ]);
        }
    }
}
