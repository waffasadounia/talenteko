<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Message;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class MessageVoter extends Voter
{
    public const VIEW = 'MESSAGE_VIEW';
    public const REPLY = 'MESSAGE_REPLY';
    public const DELETE = 'MESSAGE_DELETE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::REPLY, self::DELETE], true)
            && $subject instanceof Message;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Message $message */
        $message = $subject;

        return match ($attribute) {
            self::VIEW => $this->canView($message, $user),
            self::REPLY => $this->canReply($message, $user),
            self::DELETE => $this->canDelete($message, $user),
            default => false,
        };
    }

    private function canView(Message $message, User $user): bool
    {
        // Expéditeur ou destinataire
        return $message->getSender() === $user || $message->getRecipient() === $user;
    }

    private function canReply(Message $message, User $user): bool
    {
        // Seul le destinataire peut répondre
        return $message->getRecipient() === $user;
    }

    private function canDelete(Message $message, User $user): bool
    {
        // Expéditeur ou destinataire peuvent supprimer leur copie
        return $message->getSender() === $user || $message->getRecipient() === $user;
    }
}
