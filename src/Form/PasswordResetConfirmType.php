<?php

declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

final class PasswordResetConfirmType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b->add('plainPassword', RepeatedType::class, [
            'type' => PasswordType::class,
            'mapped' => false,  // ⛔ indispensable
            'required' => true,
            'invalid_message' => 'Les mots de passe doivent correspondre.',

            'first_options' => [
                'label' => 'Nouveau mot de passe',
                'attr' => [
                    'autocomplete' => 'new-password',
                    'placeholder' => 'Mot de passe fort requis',
                    'class' => 'form-input',
                ],
            ],

            'second_options' => [
                'label' => 'Confirmer le mot de passe',
                'attr' => [
                    'autocomplete' => 'new-password',
                    'placeholder' => 'Répétez le mot de passe',
                    'class' => 'form-input',
                ],
            ],

            'constraints' => [
                new Assert\NotBlank(['message' => 'Merci de saisir un mot de passe.']),
                new Assert\Length([
                    'min' => 10,
                    'minMessage' => 'Votre mot de passe doit contenir au moins {{ limit }} caractères.',
                ]),
                new Assert\Regex([
                    'pattern' => "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/",
                    'message' => 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.',
                ]),
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
