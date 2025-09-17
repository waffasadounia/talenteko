<?php
namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 * Utilise l’API officielle BAN (Base Adresse Nationale)
 * Validation : vérifie que la localisation saisie est reconnue par l’API BAN.
 */
class ValidLocation extends Constraint
{
    public string $message = 'La localisation "{{ value }}" est invalide. Veuillez choisir une ville proposée.';
}
