<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Exchange;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class ExchangeVoter extends Voter
{
    public const VIEW = 'EXCHANGE_VIEW';
    public const ACCEPT = 'EXCHANGE_ACCEPT';
    public const DECLINE = 'EXCHANGE_DECLINE';
    public const CANCEL = 'EXCHANGE_CANCEL';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return \in_array($attribute, [self::VIEW, self::ACCEPT, self::DECLINE, self::CANCEL], true)
            && $subject instanceof Exchange;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof User) {
            return false;
        }

        /** @var Exchange $exchange */
        $exchange = $subject;

        return match ($attribute) {
            self::VIEW => $exchange->getRequester() === $user || $exchange->getListing()->getAuthor() === $user,
            self::ACCEPT => $exchange->getListing()->getAuthor() === $user,
            self::DECLINE => $exchange->getListing()->getAuthor() === $user,
            self::CANCEL => $exchange->getRequester() === $user,
            default => false,
        };
    }
}
