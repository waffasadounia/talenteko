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
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 5, 'max' => 180]),
                ],
                'attr' => ['placeholder' => 'ex. Cours de guitare débutant'],
            ])

            // === Description ===
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length(['min' => 20]),
                ],
                'attr' => ['rows' => 6],
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

            // === Localisation ===
            ->add('location', TextType::class, [
                'label' => 'Localisation',
            ])

            // === Catégorie ===
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'placeholder' => 'Choisir une catégorie',
            ])

            // === Image unique (édition) ===
            ->add('newImage', FileType::class, [
                'label' => 'Nouvelle image',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new Assert\Image(['maxSize' => '5M']),
                ],
                'attr' => ['accept' => 'image/*'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Listing::class,
        ]);
    }
}
