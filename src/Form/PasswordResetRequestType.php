<?php

declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Formulaire de demande de réinitialisation de mot de passe.
 */
final class PasswordResetRequestType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b->add('email', EmailType::class, [
            'label' => 'Votre adresse email',
            'constraints' => [
                new Assert\NotBlank(['message' => 'Merci de saisir votre email.']),
                new Assert\Email(['message' => 'Format d’email invalide.']),
            ],
            'attr' => [
                'autocomplete' => 'email',
                'placeholder' => 'ex. vous@exemple.fr',
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
