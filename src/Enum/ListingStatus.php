<?php

declare(strict_types=1);

namespace App\Enum;

/**
 * États possibles d’une annonce.
 */
enum ListingStatus: string
{
    case DRAFT = 'draft';     // En cours de rédaction, non visible
    case PUBLISHED = 'published'; // Publiée, visible par tous
    case ARCHIVED = 'archived';  // Désactivée, plus visible

    /**
     * Label lisible pour l’UI.
     */
    public function label(): string
    {
        return match ($this) {
            self::DRAFT => 'Brouillon',
            self::PUBLISHED => 'Publié',
            self::ARCHIVED => 'Archivé',
        };
    }

    /**
     * Liste des statuts visibles publiquement.
     */
    public static function visibles(): array
    {
        return [self::PUBLISHED];
    }

    /**
     * Liste des statuts finaux (plus modifiables).
     */
    public static function finals(): array
    {
        return [self::ARCHIVED];
    }
}
