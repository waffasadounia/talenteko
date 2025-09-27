<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Formulaire d'inscription utilisateur.
 */
final class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            // === Email ===
            ->add('email', EmailType::class, [
                'label' => 'Adresse email',
                'attr' => [
                    'autocomplete' => 'email',
                    'placeholder' => 'ex. vous@exemple.fr',
                ],
            ])

            // === Pseudo ===
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudonyme',
                'attr' => [
                    'autocomplete' => 'nickname',
                    'placeholder' => 'ex. BricoMan42',
                ],
            ])

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'attr' => [
                    'autocomplete' => 'address-level2',
                    'placeholder' => 'ex. Paris, Lyon, Marseille',
                    // ⚡ Branché avec Stimulus côté front
                ],
            ])

            // === Mot de passe + confirmation ===
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passe doivent correspondre.',
                'first_options' => [
                    'label' => 'Mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'aria-describedby' => 'pwd-help', // zone d'aide force/feedback
                        'placeholder' => 'Mot de passe fort requis',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => 'Répétez le mot de passe',
                    ],
                ],
            ])

            // === CGU ===
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'label' => 'J\'accepte les conditions d\'utilisation',
                'constraints' => [
                    new Assert\IsTrue([
                        'message' => 'Vous devez accepter nos conditions.',
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
