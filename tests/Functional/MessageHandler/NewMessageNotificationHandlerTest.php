<?php

declare(strict_types=1);

namespace App\Tests\Functional\MessageHandler;

use App\Entity\User;
use App\Message\NewMessageNotification;
use App\MessageHandler\NewMessageNotificationHandler;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

final class NewMessageNotificationHandlerTest extends TestCase
{
    public function testHandlerSendsEmailToRecipient(): void
    {
        // Arrange : faux utilisateurs
        $recipient = (new User())->setEmail('dest@test.com')->setPseudo('Alice');
        $sender    = (new User())->setEmail('src@test.com')->setPseudo('Bob');

        // Mock du repository User
        $userRepo = $this->createMock(EntityRepository::class);
        $userRepo->method('find')
            ->willReturnMap([
                [1, $recipient],
                [2, $sender],
            ]);

        // Mock EntityManager qui retournera le repo mockÃƒÂ©
        $em = $this->createMock(EntityManagerInterface::class);
        $em->method('getRepository')->willReturn($userRepo);

        // Mock Mailer qui vÃƒÂ©rifie l'envoi
        $mailer = $this->createMock(MailerInterface::class);
        $mailer->expects($this->once())
            ->method('send')
            ->with(
                $this->callback(function (Email $email) {
                    return $email->getTo()[0]->getAddress() === 'dest@test.com'
                        && $email->getSubject() === 'Nouveau message sur TalentÃƒÂ©ko';
                })
            );

        $handler = new NewMessageNotificationHandler($mailer, $em);

        // Act
        $notification = new NewMessageNotification(1, 2, 'Hello Alice!');
        $handler($notification);
    }

    public function testHandlerDoesNotSendEmailIfRecipientMissing(): void
    {
        // Mock du repository User qui renvoie toujours null
        $userRepo = $this->createMock(EntityRepository::class);
        $userRepo->method('find')->willReturn(null);

        // Mock EntityManager
        $em = $this->createMock(EntityManagerInterface::class);
        $em->method('getRepository')->willReturn($userRepo);

        // Mock Mailer qui ne doit jamais ÃƒÂªtre appelÃƒÂ©
        $mailer = $this->createMock(MailerInterface::class);
        $mailer->expects($this->never())->method('send');

        $handler = new NewMessageNotificationHandler($mailer, $em);

        // Act
        $notification = new NewMessageNotification(999, 2, 'Nobody here');
        $handler($notification);
    }
}
