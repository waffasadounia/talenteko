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
 * Version permissive :
 * - Si l’API est accessible : accepte toute ville renvoyée par la BAN.
 * - Si l’API ne répond pas : n’empêche pas le formulaire.
 * - N’interdit plus les arrondissements (“3e”, “1er”, etc.)
 */
final class ValidLocationValidator extends ConstraintValidator
{
    public function __construct(
        private readonly string $appEnv,
    ) {}

    public function validate($value, Constraint $constraint): void
    {
        if (!$constraint instanceof ValidLocation) {
            throw new UnexpectedTypeException($constraint, ValidLocation::class);
        }

        if ($value === null || $value === '') {
            return; // la contrainte NotBlank/NotNull doit gérer ce cas
        }

        if (!is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }

        // Mode test → aucune vérification
        if ($this->appEnv === 'test') {
            return;
        }

        // API BAN
        $url = 'https://api-adresse.data.gouv.fr/search/?q=' . urlencode($value) . '&limit=1&type=municipality';

        $json = @file_get_contents($url);

        // Si API down → on n'empêche pas la soumission
        if (!$json) {
            return;
        }

        $data = json_decode($json, true);

        // Si l’API renvoie un résultat → OK
        if (is_array($data) && !empty($data['features'])) {
            return;
        }

        // Sinon → message d’erreur
        $this->context
            ->buildViolation($constraint->message)
            ->setParameter('{{ value }}', $value)
            ->addViolation();
    }
}
