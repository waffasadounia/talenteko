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
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci de saisir un email.']),
                    new Assert\Email(['message' => 'Format d’email invalide.']),
                ],
                'attr' => [
                    'autocomplete' => 'email',
                    'placeholder' => 'ex. vous@exemple.fr',
                ],
            ])

            // === Pseudo ===
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudonyme',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci de choisir un pseudo.']),
                    new Assert\Length([
                        'min' => 3,
                        'max' => 30,
                        'minMessage' => 'Le pseudo doit contenir au moins {{ limit }} caractères.',
                        'maxMessage' => 'Le pseudo ne peut pas dépasser {{ limit }} caractères.',
                    ]),
                ],
                'attr' => [
                    'autocomplete' => 'nickname',
                    'placeholder' => 'ex. BricoMan42',
                ],
            ])

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci d’indiquer votre ville.']),
                ],
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
            ])

            // === Honeypot anti-bot ===
            ->add('website', TextType::class, [
                'mapped' => false,
                'required' => false,
                'attr' => [
                    'class' => 'hidden',
                    'tabindex' => '-1',
                    'autocomplete' => 'off',
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
