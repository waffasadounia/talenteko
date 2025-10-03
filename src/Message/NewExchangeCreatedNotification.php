<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Notification quand un utilisateur reçoit
 * une nouvelle proposition d’échange.
 *
 * On transporte uniquement les IDs :
 * - destinataire (auteur de l’annonce)
 * - expéditeur (celui qui propose l’échange)
 * - échange et annonce concernés
 */
final class NewExchangeCreatedNotification
{
    public function __construct(
        private int $recipientId,
        private int $senderId,
        private int $exchangeId,
        private int $listingId,
    ) {
    }

    public function getRecipientId(): int
    {
        return $this->recipientId;
    }

    public function getSenderId(): int
    {
        return $this->senderId;
    }

    public function getExchangeId(): int
    {
        return $this->exchangeId;
    }

    public function getListingId(): int
    {
        return $this->listingId;
    }
}
