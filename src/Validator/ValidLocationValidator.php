<?php

declare(strict_types=1);

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

/**
 * Validateur pour la contrainte ValidLocation.
 *
 * - Ignore les champs vides (NotBlank gère déjà ça).
 * - En environnement "test", ignore la vérification (pas d’API externe).
 * - En dev/prod : vérifie via l’API Adresse.data.gouv.fr que la localisation est plausible.
 */
final class ValidLocationValidator extends ConstraintValidator
{
    public function __construct(
        private readonly string $appEnv,
    ) {
    }

    public function validate($value, Constraint $constraint): void
    {
        if (!$constraint instanceof ValidLocation) {
            throw new UnexpectedTypeException($constraint, ValidLocation::class);
        }

        if (null === $value || '' === $value) {
            return; // Champ vide ignoré (NotBlank s’en charge si nécessaire)
        }

        if (!\is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }

        // Cas particulier : environnement test → on ne fait rien
        if ('test' === $this->appEnv) {
            return;
        }

        // Vérification API officielle adresse.data.gouv.fr
        $url = 'https://api-adresse.data.gouv.fr/search/?q='.urlencode($value).'&limit=1';
        $json = @file_get_contents($url);

        if (!$json) {
            // API inaccessible → ne bloque pas l’application
            return;
        }

        $data = json_decode($json, true);

        // Correction : s’assurer que $data est un tableau
        if (!\is_array($data) || empty($data['features'])) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}
