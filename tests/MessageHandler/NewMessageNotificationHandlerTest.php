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

        // Nettoyer les emails envoyÃ©s avant chaque test
        $this->mailerLogger->reset();
    }

    public function testNotificationEmailIsSent(): void
    {
        // 1) CrÃ©er un utilisateur destinataire
        $recipient = new User();
        $recipient->setEmail('destinataire@test.com');
        $recipient->setPseudo('Destinataire');
        $recipient->setPassword('hashed-password');
        $this->em->persist($recipient);

        // 2) CrÃ©er un utilisateur expÃ©diteur
        $sender = new User();
        $sender->setEmail('expediteur@test.com');
        $sender->setPseudo('ExpÃ©diteur');
        $sender->setPassword('hashed-password');
        $this->em->persist($sender);

        $this->em->flush();

        // 3) CrÃ©er une notification
        $notification = new NewMessageNotification(
            recipientId: $recipient->getId(),
            senderId: $sender->getId(),
            content: 'Salut, Ã§a mâ€™intÃ©resse !',
        );

        // 4) Handler
        $handler = new NewMessageNotificationHandler($this->mailer, $this->em);
        $handler($notification);

        // 5) VÃ©rifier quâ€™un email a Ã©tÃ© envoyÃ©
        $events = $this->mailerLogger->getEvents();
        $messages = $events->getMessages();

        self::assertCount(1, $messages, 'Un email doit Ãªtre envoyÃ©.');

        /** @var TemplatedEmail $email */
        $email = $messages[0];
        self::assertInstanceOf(TemplatedEmail::class, $email);

        // VÃ©rifier les infos principales
        self::assertEquals('destinataire@test.com', $email->getTo()[0]->getAddress());
        self::assertEquals('no-reply@talenteko.test', $email->getFrom()[0]->getAddress());
        self::assertEquals('Nouveau message sur TalentÃ©kÃ´', $email->getSubject());

        // VÃ©rifier que le contexte contient bien les bonnes donnÃ©es
        $context = $email->getContext();
        self::assertEquals('ExpÃ©diteur', $context['sender']);
        self::assertEquals('Salut, Ã§a mâ€™intÃ©resse !', $context['content']);
    }
}
