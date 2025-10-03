<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Notification quand un utilisateur reçoit un nouveau message privé.
 * On transporte uniquement l’ID, le handler ira chercher l’entité en base.
 */
final class NewMessageNotification
{
    public function __construct(
        private int $messageId,
    ) {
    }

    public function getMessageId(): int
    {
        return $this->messageId;
    }
}
