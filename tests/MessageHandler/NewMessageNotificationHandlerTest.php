<?php

declare(strict_types=1);

namespace App\Tests\MessageHandler;

use App\Entity\User;
use App\Message\NewMessageNotification;
use App\MessageHandler\NewMessageNotificationHandler;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Mailer\EventListener\MessageLoggerListener;
use Symfony\Component\Mailer\MailerInterface;

class NewMessageNotificationHandlerTest extends KernelTestCase
{
    private MailerInterface $mailer;
    private EntityManagerInterface $em;
    private MessageLoggerListener $mailerLogger;

    protected function setUp(): void
    {
        self::bootKernel();

        $container = static::getContainer();
        $this->mailer = $container->get(MailerInterface::class);
        $this->em = $container->get(EntityManagerInterface::class);
        $this->mailerLogger = $container->get(MessageLoggerListener::class);

        // Nettoyer les emails envoyés avant chaque test
        $this->mailerLogger->reset();
    }

    public function testNotificationEmailIsSent(): void
    {
        // 1) Créer un utilisateur destinataire
        $recipient = new User();
        $recipient->setEmail('destinataire@test.com');
        $recipient->setPseudo('Destinataire');
        $recipient->setPassword('hashed-password');
        $this->em->persist($recipient);

        // 2) Créer un utilisateur expéditeur
        $sender = new User();
        $sender->setEmail('expediteur@test.com');
        $sender->setPseudo('Expéditeur');
        $sender->setPassword('hashed-password');
        $this->em->persist($sender);

        $this->em->flush();

        // 3) Créer une notification
        $notification = new NewMessageNotification(
            recipientId: $recipient->getId(),
            senderId: $sender->getId(),
            content: 'Salut, ça m’intéresse !',
        );

        // 4) Handler
        $handler = new NewMessageNotificationHandler($this->mailer, $this->em);
        $handler($notification);

        // 5) Vérifier qu’un email a été envoyé
        $events = $this->mailerLogger->getEvents();
        $messages = $events->getMessages();

        self::assertCount(1, $messages, 'Un email doit être envoyé.');

        /** @var TemplatedEmail $email */
        $email = $messages[0];
        self::assertInstanceOf(TemplatedEmail::class, $email);

        // Vérifier les infos principales
        self::assertEquals('destinataire@test.com', $email->getTo()[0]->getAddress());
        self::assertEquals('no-reply@talenteko.test', $email->getFrom()[0]->getAddress());
        self::assertEquals('Nouveau message sur Talentékô', $email->getSubject());

        // Vérifier que le contexte contient bien les bonnes données
        $context = $email->getContext();
        self::assertEquals('Expéditeur', $context['sender']);
        self::assertEquals('Salut, ça m’intéresse !', $context['content']);
    }
}
