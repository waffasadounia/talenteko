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
 *
 * Champs :
 * - email (identifiant unique de connexion)
 * - pseudo (nom public affichÃƒÂ©)
 * - location (ville avec autocomplÃƒÂ©tion BAN cÃƒÂ´tÃƒÂ© front + validation cÃƒÂ´tÃƒÂ© back)
 * - plainPassword (saisi deux fois pour confirmation)
 * - agreeTerms (case obligatoire pour valider les CGU)
 *
 * Notes:
 * - Les rÃƒÂ¨gles mÃƒÂ©tier principales (unicitÃƒÂ© email, regex pseudo, validLocation, etc.)
 *   sont dÃƒÂ©finies **dans lÃ¢â‚¬â„¢entitÃƒÂ© User**.
 * - Ici, on se concentre uniquement sur la **structure du formulaire**.
 * - plainPassword : champ non persistÃƒÂ© Ã¢â€ â€™ hashÃƒÂ© avant enregistrement.
 * - agreeTerms : champ virtuel (mapped=false), juste pour la validation.
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
                    'placeholder' => 'ex. Paris, LyonÃ¢â‚¬Â¦',
                    // Stimulus branchÃƒÂ© cÃƒÂ´tÃƒÂ© template Ã¢â€ â€™ autocomplÃƒÂ©tion API BAN
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
                        'placeholder' => 'Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => 'Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => 'Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢',
                    ],
                ],
            ])

            // === CGU ===
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false, // champ virtuel : pas dans lÃ¢â‚¬â„¢entitÃƒÂ©
                'label' => 'JÃ¢â‚¬â„¢accepte les conditions dÃ¢â‚¬â„¢utilisation',
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

