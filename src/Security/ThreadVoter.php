<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Thread;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class ThreadVoter extends Voter
{
    public const VIEW = 'THREAD_VIEW';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return self::VIEW === $attribute && $subject instanceof Thread;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user || !is_object($user)) {
            return false;
        }

        /** @var Thread $thread */
        $thread = $subject;

        // Autoriser seulement si l'utilisateur est un participant de la conversation
        return $thread->getParticipants()->contains($user);
    }
}




