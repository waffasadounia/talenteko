<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

final class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            // === Pseudonyme (optionnel) ===
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudonyme',
                'required' => false,
                'attr' => [
                    'maxlength' => 50,
                    'autocomplete' => 'nickname',
                    'placeholder' => 'ex. BricoMan42',
                ],
                'constraints' => [
                    new Assert\Length([
                        'min' => 3,
                        'max' => 30,
                        'minMessage' => 'Le pseudo doit contenir au moins {{ limit }} caractères.',
                        'maxMessage' => 'Le pseudo ne peut pas dépasser {{ limit }} caractères.',
                    ]),
                    new Assert\Regex([
                        'pattern' => '/^[a-zA-Z0-9_.\- ]+$/u',
                        'message' => 'Le pseudo ne peut contenir que lettres, chiffres, espaces et . _ -',
                    ]),
                ],
            ])

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'required' => true,
                'attr' => [
                    'maxlength' => 120,
                    'autocomplete' => 'address-level2',
                    'placeholder' => 'ex. Paris, Lyon, Marseille',
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci d’indiquer votre ville.']),
                    new Assert\Length([
                        'min' => 2,
                        'max' => 120,
                        'minMessage' => 'La ville doit contenir au moins {{ limit }} caractères.',
                        'maxMessage' => 'La ville ne peut pas dépasser {{ limit }} caractères.',
                    ]),
                    new Assert\Regex([
                        'pattern' => '/^[\p{L}\s\'\-]+$/u',
                        'message' => 'La localisation ne peut contenir que des lettres, espaces, apostrophes ou tirets.',
                    ]),
                ],
            ])

            // === Courte bio ===
            ->add('bio', TextareaType::class, [
                'label' => 'À propos de vous',
                'required' => false,
                'attr' => [
                    'rows' => 4,
                    'placeholder' => 'Décrivez vos passions, expériences, ou vos motivations…',
                ],
            ])

            // === Compétences proposées ===
            ->add('skillsOffered', CollectionType::class, [
                'label' => 'Compétences proposées',
                'required' => false,
                'entry_type' => TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'attr' => [
                    'class' => 'skills-offered',
                ],
            ])

            // === Compétences recherchées ===
            ->add('skillsWanted', CollectionType::class, [
                'label' => 'Compétences recherchées',
                'required' => false,
                'entry_type' => TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'attr' => [
                    'class' => 'skills-wanted',
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
