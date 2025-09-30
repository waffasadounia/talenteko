<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Category;
use App\Entity\Listing;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

final class ListingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // === Titre ===
            ->add('title', TextType::class, [
                'label' => 'Titre de l’annonce',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci de saisir un titre.']),
                    new Assert\Length([
                        'min' => 5,
                        'max' => 180,
                        'minMessage' => 'Le titre doit contenir au moins {{ limit }} caractères.',
                        'maxMessage' => 'Le titre ne peut pas dépasser {{ limit }} caractères.',
                    ]),
                ],
                'attr' => [
                    'placeholder' => 'ex. Cours de guitare débutant',
                ],
            ])

            // === Description ===
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci de saisir une description.']),
                    new Assert\Length([
                        'min' => 20,
                        'minMessage' => 'La description doit contenir au moins {{ limit }} caractères.',
                    ]),
                ],
                'attr' => [
                    'rows' => 6,
                    'placeholder' => 'Décrivez votre annonce en détail…',
                ],
            ])

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci d’indiquer une localisation.']),
                ],
                'attr' => [
                    'placeholder' => 'ex. Paris, Lyon, Marseille',
                    'autocomplete' => 'address-level2',
                ],
            ])

            // === Catégorie ===
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'label' => 'Catégorie',
                'placeholder' => 'Choisir une catégorie',
                'constraints' => [
                    new Assert\NotNull(['message' => 'Merci de sélectionner une catégorie.']),
                ],
            ])

            // === Images ===
            ->add('images', FileType::class, [
                'label' => 'Images',
                'mapped' => false, // géré côté contrôleur
                'required' => false,
                'multiple' => true,
                'constraints' => [
                    new Assert\All([
                        new Assert\Image([
                            'maxSize' => '5M',
                            'mimeTypesMessage' => 'Merci de télécharger uniquement des images valides.',
                        ]),
                    ]),
                ],
                'attr' => [
                    'accept' => 'image/*',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Listing::class,
        ]);
    }
}
