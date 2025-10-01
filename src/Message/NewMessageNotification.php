<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Notification quand un utilisateur reçoit un nouveau message privé.
 * Bonne pratique : on ne transporte que l’ID,
 * le handler ira chercher l’entité en base.
 */
final class NewMessageNotification
{
    public function __construct(
        private int $messageId // ID du message créé
    ) {
    }

    public function getMessageId(): int
    {
        return $this->messageId;
    }
}
