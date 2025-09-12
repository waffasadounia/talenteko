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
 * Formulaire d’inscription (Registration)
 *
 * Champs : email, pseudo, location, mot de passe (répété pour confirmation),
 * + case à cocher obligatoire pour accepter les conditions.
 *
 * Principes :
 * - Les contraintes métier (unicité email, formats, etc.) sont dans l’entité User.
 * - Ici, on ne gère que la structure du formulaire.
 * - plainPassword : non stocké directement → sera hashé avant persist.
 * - agreeTerms : champ virtuel (mapped=false), juste pour la validation.
 */
final class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            ->add('email', EmailType::class, [
                'label' => 'Adresse email',
                'attr' => ['autocomplete' => 'email'],
            ])
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudonyme',
                'attr' => ['autocomplete' => 'nickname'],
            ])
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'attr' => ['autocomplete' => 'address-level2'],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passe doivent correspondre.',
                'first_options'  => [
                    'label' => 'Mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'aria-describedby' => 'pwd-help',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'attr' => ['autocomplete' => 'new-password'],
                ],
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false, // pas en DB
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
