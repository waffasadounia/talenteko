<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand il reçoit une nouvelle proposition d’échange.
 */
class NewExchangeCreatedNotification
{
    public function __construct(
        private int $recipientId, // destinataire (auteur de l'annonce)
        private int $senderId,    // utilisateur qui propose l'échange
        private int $exchangeId,  // ID de l'échange
        private int $listingId    // ID de l'annonce concernée
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
