<?php

declare(strict_types=1);

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
        // RÃƒÂ©cupÃƒÂ©rer destinataire et expÃƒÂ©diteur
        $recipient = $this->em->getRepository(User::class)->find($notification->getRecipientId());
        $sender = $this->em->getRepository(User::class)->find($notification->getSenderId());

        if (!$recipient || !$sender) {
            return; // sÃƒÂ©curitÃƒÂ© : si lÃ¢â‚¬â„¢un nÃ¢â‚¬â„¢existe pas Ã¢â€ â€™ rien ÃƒÂ  faire
        }

        // Construire lÃ¢â‚¬â„¢email
        $email = (new TemplatedEmail())
            ->from($_ENV['APP_MAILER_FROM'] ?? 'no-reply@talenteko.test')
            ->to($recipient->getEmail())
            ->subject('Nouveau message sur TalentÃƒÂ©kÃƒÂ´')
            ->htmlTemplate('@emails/new_message.html.twig') // namespace Twig
            ->context([
                'sender' => $sender?->getPseudo() ?? 'Un utilisateur',
                'content' => $notification->getContent(),
            ]);

        // Envoyer
        $this->mailer->send($email);
    }
}

