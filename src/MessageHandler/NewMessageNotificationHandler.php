<?php

namespace App\MessageHandler;

use App\Entity\User;
use App\Message\NewMessageNotification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class NewMessageNotificationHandler
{
    public function __construct(
        private MailerInterface $mailer,
        private EntityManagerInterface $em,
    ) {
    }

    public function __invoke(NewMessageNotification $notification): void
    {
        // Récupérer destinataire et expéditeur
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        $sender = $this->em->getRepository(User::class)->find($notification->getSenderId());

        if (!$recipient || !$sender) {
            return; // sécurité : si l’un n’existe pas → rien à faire
        }

        // Construire l’email
        $email = (new TemplatedEmail())
            ->from('no-reply@talenteko.test')
            ->to($recipient->getEmail())
            ->subject('Nouveau message sur Talentékô')
            ->htmlTemplate('emails/new_message.html.twig')
            ->context([
                'sender' => $sender->getPseudo(),
                'content' => $notification->getContent(),
            ]);

        // Envoyer
        $this->mailer->send($email);
    }
}
