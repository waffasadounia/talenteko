<?php

declare(strict_types=1);

namespace App\Message;

use App\Enum\ExchangeStatus;

/**
 * Notification quand le statut d’un échange change (accepté, refusé, annulé…).
 */
final class ExchangeStatusChangedNotification
{
    public function __construct(
        private int $exchangeId,
        private int $recipientId,
        private int $listingId,
        private ExchangeStatus $status, 
    ) {
    }

    public function getExchangeId(): int
    {
        return $this->exchangeId;
    }

    public function getRecipientId(): int
    {
        return $this->recipientId;
    }

    public function getListingId(): int
    {
        return $this->listingId;
    }

    public function getStatus(): ExchangeStatus
    {
        return $this->status;
    }
}
