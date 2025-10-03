<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Review;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class ReviewVoter extends Voter
{
    public const VIEW = 'REVIEW_VIEW';
    public const EDIT = 'REVIEW_EDIT';
    public const DELETE = 'REVIEW_DELETE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::EDIT, self::DELETE], true)
            && $subject instanceof Review;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Review $review */
        $review = $subject;

        return match ($attribute) {
            self::VIEW => true, // tout le monde peut lire un avis
            self::EDIT => $review->getAuthor() === $user,
            self::DELETE => $review->getAuthor() === $user || \in_array('ROLE_ADMIN', $user->getRoles(), true),
            default => false,
        };
    }
}
