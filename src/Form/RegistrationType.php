<?php
declare(strict_types=1);

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\{
    EmailType, PasswordType, RepeatedType, TextType
};
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Formulaire d’inscription
 * Champs: email, pseudo (facultatif), location (facultatif), password doublé
 * Accessibilité:
 * - aria-describedby relié à une aide sur les mots de passe
 */
final class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            ->add('email', EmailType::class, [
                'label' => 'Adresse email',
                'constraints' => [
                    new Assert\NotBlank(message: 'Merci de saisir votre email.'),
                    new Assert\Email(message: 'Email invalide.'),
                ],
                'attr' => ['autocomplete' => 'email'],
            ])
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudonyme (optionnel)',
                'required' => false,
                'attr' => ['maxlength' => 50],
            ])
            ->add('location', TextType::class, [
                'label' => 'Localisation (optionnel)',
                'required' => false,
                'attr' => ['maxlength' => 120],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'mapped' => false, // on ne mappe pas directement sur User::password
                'invalid_message' => 'Les mots de passe doivent correspondre.',
                'first_options'  => [
                    'label' => 'Mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'aria-describedby' => 'pwd-help',
                        'id' => 'pwd',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(message: 'Merci de saisir un mot de passe.'),
                        new Assert\Length(min: 8, minMessage: 'Au moins {{ limit }} caractères.'),
                        new Assert\NotCompromisedPassword(),
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'attr' => ['autocomplete' => 'new-password'],
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
