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

        // Mock EntityManager ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ retournera le repo mockÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©
        $em = $this->createMock(EntityManagerInterface::class);
        $em->method('getRepository')->willReturn($userRepo);

        // Mock Mailer ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ vÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifie lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢envoi
        $mailer = $this->createMock(MailerInterface::class);
        $mailer->expects($this->once())
            ->method('send')
            ->with(
                $this->callback(function (Email $email) {
                    return $email->getTo()[0]->getAddress() === 'dest@test.com'
                        && $email->getSubject() === 'Nouveau message sur TalentÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ko';
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

        // Mock Mailer ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ ne doit jamais ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âªtre appelÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©
        $mailer = $this->createMock(MailerInterface::class);
        $mailer->expects($this->never())->method('send');

        $handler = new NewMessageNotificationHandler($mailer, $em);

        // Act
        $notification = new NewMessageNotification(999, 2, 'Nobody here');
        $handler($notification);
    }
}


