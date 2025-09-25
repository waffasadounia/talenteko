<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand il reÃƒÂ§oit une nouvelle proposition d'ÃƒÂ©change.
 */
class NewExchangeCreatedNotification
{
    public function __construct(
        private int $recipientId,   // destinataire (auteur de l'annonce)
        private int $senderId,      // utilisateur qui propose l'ÃƒÂ©change
        private int $exchangeId,    // ID de l'ÃƒÂ©change
        private int $listingId,     // ID de l'annonce concernÃƒÂ©e
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

