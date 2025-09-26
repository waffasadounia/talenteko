<?php

declare(strict_types=1);

namespace App\Security;

use App\Entity\Message;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class MessageVoter extends Voter
{
    public const VIEW = 'MESSAGE_VIEW';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return self::VIEW === $attribute && $subject instanceof Message;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user || !is_object($user)) {
            return false;
        }

        /** @var Message $message */
        $message = $subject;

        // Autoriser seulement si l'utilisateur est expÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©diteur ou destinataire
        return $message->getSender() === $user || $message->getRecipient() === $user;
    }
}


