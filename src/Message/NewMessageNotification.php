<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand il reÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§oit un nouveau message privÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©.
 */
class NewMessageNotification
{
    public function __construct(
        private int $recipientId,
        private int $senderId,
        private string $content,
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

    public function getContent(): string
    {
        return $this->content;
    }
}


