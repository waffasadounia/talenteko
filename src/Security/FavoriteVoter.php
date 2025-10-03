<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Favorite;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class FavoriteVoter extends Voter
{
    public const VIEW = 'FAVORITE_VIEW';
    public const ADD = 'FAVORITE_ADD';
    public const REMOVE = 'FAVORITE_REMOVE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::ADD, self::REMOVE], true)
            && $subject instanceof Favorite;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Favorite $favorite */
        $favorite = $subject;

        return match ($attribute) {
            self::VIEW => $favorite->getUser() === $user,
            self::ADD => $favorite->getUser() === $user,
            self::REMOVE => $favorite->getUser() === $user,
            default => false,
        };
    }
}
