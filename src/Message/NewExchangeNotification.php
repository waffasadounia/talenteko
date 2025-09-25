<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand une proposition d'échange est envoyée ou mise à jour.
 */
class NewExchangeNotification
{
    public function __construct(
        private int $recipientId,
        private int $exchangeId,
        private string $status,
        private int $listingId,
    ) {
    }

    public function getRecipientId(): int
    {
        return $this->recipientId;
    }

    public function getExchangeId(): int
    {
        return $this->exchangeId;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getListingId(): int
    {
        return $this->listingId;
    }
}
