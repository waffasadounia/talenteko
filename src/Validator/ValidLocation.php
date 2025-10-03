<?php

declare(strict_types=1);

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * Contrainte personnalisée pour la validation des localisations.
 *
 * Utilisation :
 *   #[ValidLocation]
 */
#[\Attribute(\Attribute::TARGET_PROPERTY | \Attribute::IS_REPEATABLE)]
class ValidLocation extends Constraint
{
    public string $message = 'La localisation "{{ value }}" est invalide.';

    public function __construct(
        mixed $options = null,
        ?array $groups = null,
        mixed $payload = null,
    ) {
        parent::__construct($options, $groups, $payload);
    }
}
