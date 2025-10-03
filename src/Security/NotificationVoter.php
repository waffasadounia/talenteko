<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Notification;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class NotificationVoter extends Voter
{
    public const VIEW = 'NOTIFICATION_VIEW';
    public const DELETE = 'NOTIFICATION_DELETE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::DELETE], true)
            && $subject instanceof Notification;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Notification $notification */
        $notification = $subject;

        return match ($attribute) {
            self::VIEW => $notification->getUser() === $user,
            self::DELETE => $notification->getUser() === $user,
            default => false,
        };
    }
}
