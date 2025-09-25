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

        // Nettoyer les emails envoyÃƒÂ©s avant chaque test
        $this->mailerLogger->reset();
    }

    public function testNotificationEmailIsSent(): void
    {
        // 1) CrÃƒÂ©er un utilisateur destinataire
        $recipient = new User();
        $recipient->setEmail('destinataire@test.com');
        $recipient->setPseudo('Destinataire');
        $recipient->setPassword('hashed-password');
        $this->em->persist($recipient);

        // 2) CrÃƒÂ©er un utilisateur expÃƒÂ©diteur
        $sender = new User();
        $sender->setEmail('expediteur@test.com');
        $sender->setPseudo('ExpÃƒÂ©diteur');
        $sender->setPassword('hashed-password');
        $this->em->persist($sender);

        $this->em->flush();

        // 3) CrÃƒÂ©er une notification
        $notification = new NewMessageNotification(
            recipientId: $recipient->getId(),
            senderId: $sender->getId(),
            content: 'Salut, ÃƒÂ§a mÃ¢â‚¬â„¢intÃƒÂ©resse !',
        );

        // 4) Handler
        $handler = new NewMessageNotificationHandler($this->mailer, $this->em);
        $handler($notification);

        // 5) VÃƒÂ©rifier quÃ¢â‚¬â„¢un email a ÃƒÂ©tÃƒÂ© envoyÃƒÂ©
        $events = $this->mailerLogger->getEvents();
        $messages = $events->getMessages();

        self::assertCount(1, $messages, 'Un email doit ÃƒÂªtre envoyÃƒÂ©.');

        /** @var TemplatedEmail $email */
        $email = $messages[0];
        self::assertInstanceOf(TemplatedEmail::class, $email);

        // VÃƒÂ©rifier les infos principales
        self::assertEquals('destinataire@test.com', $email->getTo()[0]->getAddress());
        self::assertEquals('no-reply@talenteko.test', $email->getFrom()[0]->getAddress());
        self::assertEquals('Nouveau message sur TalentÃƒÂ©kÃƒÂ´', $email->getSubject());

        // VÃƒÂ©rifier que le contexte contient bien les bonnes donnÃƒÂ©es
        $context = $email->getContext();
        self::assertEquals('ExpÃƒÂ©diteur', $context['sender']);
        self::assertEquals('Salut, ÃƒÂ§a mÃ¢â‚¬â„¢intÃƒÂ©resse !', $context['content']);
    }
}
