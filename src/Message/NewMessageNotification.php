<?php

declare(strict_types=1);

namespace App\Message;

/**
 * Message pour notifier un utilisateur
 * quand il reçoit un nouveau message privé.
 */
class NewMessageNotification
{
    public function __construct(
        private int $recipientId, // ID de l’utilisateur destinataire
        private int $senderId,    // ID de l’expéditeur
        private string $content,  // Contenu du message
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
