<?php

declare(strict_types=1);

namespace App\Utils;

/**
 * Centralisation des filtres LiipImagine utilisés dans TalentÉkô.
 *
 * ⚠️ Cette liste doit rester synchronisée avec la configuration
 * dans config/packages/liip_imagine.yaml.
 */
final class ImageFilters
{
    public const ALL = [
        'listing_card',
        'listing_show',
        'avatar_thumb',
    ];

    /**
     * Vérifie si un filtre est reconnu par l'application.
     */
    public static function isValid(string $filter): bool
    {
        return \in_array($filter, self::ALL, true);
    }
}
