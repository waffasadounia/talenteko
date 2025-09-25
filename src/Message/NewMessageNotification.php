<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand il reÃ§oit un nouveau message privÃ©.
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
