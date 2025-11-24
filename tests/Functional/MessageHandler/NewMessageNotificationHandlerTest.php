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
    }}
