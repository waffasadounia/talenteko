<?php

declare(strict_types=1);

namespace App\Enum;

/**
 * États possibles d’un échange (proposition entre utilisateurs).
 */
enum ExchangeStatus: string
{
    case PENDING = 'pending';   // En attente de réponse
    case ACCEPTED = 'accepted';  // Accepté
    case DECLINED = 'declined';  // Refusé
    case COMPLETED = 'completed'; // Échange terminé
    case CANCELED = 'canceled';  // Annulé par une des parties

    /**
     * Labels lisibles pour l’UI (Twig, back-office, API).
     */
    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'En attente',
            self::ACCEPTED => 'Accepté',
            self::DECLINED => 'Refusé',
            self::COMPLETED => 'Terminé',
            self::CANCELED => 'Annulé',
        };
    }

    /**
     * Liste des statuts finaux (qui closent un échange).
     */
    public static function finals(): array
    {
        return [self::COMPLETED, self::CANCELED, self::DECLINED];
    }
}
