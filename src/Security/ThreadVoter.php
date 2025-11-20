<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Thread;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class ThreadVoter extends Voter
{
    public const VIEW = 'THREAD_VIEW';
    public const REPLY = 'THREAD_REPLY';
    public const DELETE = 'THREAD_DELETE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::REPLY, self::DELETE], true)
            && $subject instanceof Thread;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Thread $thread */
        $thread = $subject;

        return match ($attribute) {
            self::VIEW => $this->canView($thread, $user),
            self::REPLY => $this->canReply($thread, $user),
            self::DELETE => $this->canDelete($thread, $user),
            default => false,
        };
    }

    private function canView(Thread $thread, User $user): bool
    {
        // Seuls les participants peuvent voir
        return $thread->getParticipants()->contains($user);
    }

    private function canReply(Thread $thread, User $user): bool
    {
        // Seuls les participants peuvent répondre
        return $thread->getParticipants()->contains($user);
    }

    private function canDelete(Thread $thread, User $user): bool
    {
        // Autoriser un participant à quitter le thread
        return $thread->getParticipants()->contains($user);
    }
}
