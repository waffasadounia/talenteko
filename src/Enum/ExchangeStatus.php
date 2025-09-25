<?php

declare(strict_types=1);

namespace App\Enum;

enum ExchangeStatus: string
{
    case PENDING = 'pending';
    case ACCEPTED = 'accepted';
    case DECLINED = 'declined';
    case CANCELED = 'canceled';

    /**
     * Retourne un libellé lisible en français.
     */
    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'En attente',
            self::ACCEPTED => 'Accepté',
            self::DECLINED => 'Refusé',
            self::CANCELED => 'Annulé',
        };
    }
}
