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
     * Retourne un libellÃ© lisible en franÃ§ais.
     */
    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'En attente',
            self::ACCEPTED => 'AcceptÃ©',
            self::DECLINED => 'RefusÃ©',
            self::CANCELED => 'AnnulÃ©',
        };
    }
}
