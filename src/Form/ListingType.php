<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Category;
use App\Entity\Listing;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class ListingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // === Titre ===
            ->add('title', TextType::class, [
                'label' => 'Titre de l’annonce',
                'attr' => [
                    'placeholder' => 'ex. Cours de guitare débutant',
                ],
            ])

            // === Description ===
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'attr' => [
                    'rows' => 6,
                    'placeholder' => 'Décrivez votre annonce…',
                ],
            ])

            // === Type ===
            ->add('type', ChoiceType::class, [
                'label' => 'Type d’annonce',
                'choices' => [
                    'Je propose une compétence' => 'OFFER',
                    'Je recherche une compétence' => 'REQUEST',
                ],
                'expanded' => true,
            ])

            // === Catégorie ===
            ->add('category', EntityType::class, [
                'label' => 'Catégorie',
                'class' => Category::class,
                'choice_label' => 'name',
                'placeholder' => 'Sélectionner…',
            ])

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'attr' => [
                    'placeholder' => 'ex. Paris 15e, Marseille 6e',
                ],
            ])

            // === Image unique ===
            ->add('newImage', FileType::class, [
                'label' => 'Image de l’annonce',
                'mapped' => false,
                'required' => false,
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
