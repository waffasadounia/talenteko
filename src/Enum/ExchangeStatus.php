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
     * Retourne un libellÃƒÂ© lisible en franÃƒÂ§ais.
     */
    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'En attente',
            self::ACCEPTED => 'AcceptÃƒÂ©',
            self::DECLINED => 'RefusÃƒÂ©',
            self::CANCELED => 'AnnulÃƒÂ©',
        };
    }
}

