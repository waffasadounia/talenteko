<?php

declare(strict_types=1);

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

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
            return; // Champ vide = pas bloquÃƒÂ© (dÃƒÂ©jÃƒÂ  couvert par NotBlank si besoin)
        }

        if (!is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }

        // On saute la vÃƒÂ©rification API pendant les tests automatisÃƒÂ©s
        if ($this->appEnv === 'test') {
            return;
        }

        // VÃƒÂ©rification via API Adresse.data.gouv.fr
        $url = 'https://api-adresse.data.gouv.fr/search/?q=' . urlencode($value) . '&limit=1';
        $json = @file_get_contents($url);

        if (!$json) {
            // API inaccessible Ã¢â€ â€™ on ne bloque pas lÃ¢â‚¬â„¢inscription
            return;
        }

        $data = json_decode($json, true);

        if (empty($data['features'])) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}

