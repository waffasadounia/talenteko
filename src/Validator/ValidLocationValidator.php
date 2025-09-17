<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

class ValidLocationValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint): void
    {
        if (!$constraint instanceof ValidLocation) {
            throw new UnexpectedTypeException($constraint, ValidLocation::class);
        }

        if (null === $value || '' === $value) {
            // ⚠️ Champ vide déjà géré par @NotBlank
            return;
        }

        if (!is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }

        // ===============================
        // Vérification via API Adresse (BAN)
        // ===============================
        // Objectif : s’assurer que la ville existe réellement
        // → https://api-adresse.data.gouv.fr/search/?q=...
        $url = 'https://api-adresse.data.gouv.fr/search/?q=' . urlencode($value) . '&limit=1';
        $json = @file_get_contents($url);

        if (!$json) {
            // Cas rare : API inaccessible (pas de réseau, maintenance BAN…)
            // Décision UX : on ne bloque pas l’inscription, on laisse passer.
            return;
        }

        $data = json_decode($json, true);

        // Si aucune ville trouvée, on génère une violation Symfony Validator
        if (empty($data['features'])) {
            $this->context->buildViolation(
                $constraint->message // message défini dans ValidLocation.php
            )
            ->setParameter('{{ value }}', $value)
            ->addViolation();
        }
    }
}
