<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand il reÃ§oit une nouvelle proposition d'Ã©change.
 */
class NewExchangeCreatedNotification
{
    public function __construct(
        private int $recipientId,   // destinataire (auteur de l'annonce)
        private int $senderId,      // utilisateur qui propose l'Ã©change
        private int $exchangeId,    // ID de l'Ã©change
        private int $listingId,     // ID de l'annonce concernÃ©e
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
