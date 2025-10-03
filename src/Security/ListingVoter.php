<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Listing;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class ListingVoter extends Voter
{
    public const VIEW = 'LISTING_VIEW';
    public const EDIT = 'LISTING_EDIT';
    public const DELETE = 'LISTING_DELETE';
    public const PUBLISH = 'LISTING_PUBLISH';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::EDIT, self::DELETE, self::PUBLISH], true)
            && $subject instanceof Listing;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Listing $listing */
        $listing = $subject;

        return match ($attribute) {
            self::VIEW => true, // Public sauf si brouillon → contrôlé en controller
            self::EDIT => $listing->getAuthor() === $user || \in_array('ROLE_ADMIN', $user->getRoles(), true),
            self::DELETE => $listing->getAuthor() === $user || \in_array('ROLE_ADMIN', $user->getRoles(), true),
            self::PUBLISH => \in_array('ROLE_ADMIN', $user->getRoles(), true), // Seul admin peut publier manuellement
            default => false,
        };
    }
}
