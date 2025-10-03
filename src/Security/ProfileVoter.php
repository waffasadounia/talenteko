<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Profile;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class ProfileVoter extends Voter
{
    public const EDIT = 'PROFILE_EDIT';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return self::EDIT === $attribute && $subject instanceof Profile;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Profile $profile */
        $profile = $subject;

        return $profile->getUser() === $user || \in_array('ROLE_ADMIN', $user->getRoles(), true);
    }
}
