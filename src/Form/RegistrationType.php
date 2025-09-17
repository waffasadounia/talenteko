<?php
declare(strict_types=1);

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\{
    EmailType,
    PasswordType,
    RepeatedType,
    TextType,
    CheckboxType
};
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Formulaire d’inscription utilisateur
 *
 * Champs :
 * - email (identifiant unique de connexion)
 * - pseudo (nom public affiché)
 * - location (ville avec autocomplétion BAN côté front + validation côté back)
 * - plainPassword (saisi deux fois pour confirmation)
 * - agreeTerms (case obligatoire pour valider les CGU)
 *
 * Notes pédagogiques :
 * - Les règles métier principales (unicité email, regex pseudo, validLocation, etc.)
 *   sont définies **dans l’entité User**.
 * - Ici, on se concentre uniquement sur la **structure du formulaire**.
 * - plainPassword : champ non persisté → hashé avant enregistrement.
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
                    'placeholder' => 'ex. Paris, Lyon…',
                    // Stimulus branché côté template → autocomplétion API BAN
                ],
            ])

            // === Mot de passe + confirmation ===
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passe doivent correspondre.',
                'first_options'  => [
                    'label' => 'Mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'aria-describedby' => 'pwd-help', // zone d’aide force/feedback
                        'placeholder' => '••••••••',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => '••••••••',
                    ],
                ],
            ])

            // === CGU ===
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false, // champ virtuel : pas dans l’entité
                'label' => 'J’accepte les conditions d’utilisation',
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
