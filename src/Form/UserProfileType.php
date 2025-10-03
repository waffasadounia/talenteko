<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

final class UserProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            // === Pseudonyme ===
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
                    'placeholder' => 'ex. BricoMan42',
                    'autocomplete' => 'nickname',
                ],
            ])

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci d’indiquer votre ville.']),
                    new Assert\Length([
                        'min' => 2,
                        'max' => 120,
                        'minMessage' => 'La ville doit contenir au moins {{ limit }} caractères.',
                        'maxMessage' => 'La ville ne peut pas dépasser {{ limit }} caractères.',
                    ]),
                ],
                'attr' => [
                    'placeholder' => 'ex. Paris, Lyon, Marseille',
                    'autocomplete' => 'address-level2',
                ],
            ])

            // === Sous-formulaire pour Profile (bio, skills, avatar) ===
            ->add('profile', ProfileType::class, [
                'label' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
