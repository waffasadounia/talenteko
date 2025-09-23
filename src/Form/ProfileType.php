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
    public function buildForm(FormBuilderInterface $b, array $o): void
    {
        $b
            // Pseudonyme public (optionnel)
            ->add('pseudo', TextType::class, [
                'label' => 'Pseudonyme',
                'required' => false,
                'attr' => ['maxlength' => 50, 'autocomplete' => 'nickname'],
            ])
            // Ville / Localisation
            // Champ obligatoire car central pour Talenték (filtrage, présentiel/distanciel).
            // On ajoute une contrainte NotBlank pour imposer la saisie.
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'required' => true, // côté Form (HTML5 + validation serveur)
                'attr' => [
                    'maxlength' => 120,
                    'autocomplete' => 'address-level2', // aide les navigateurs à suggérer la ville
                ],
                'constraints' => [
                    new Assert\NotBlank(message: 'Merci d’indiquer votre ville.'), // validation serveur Symfony
                ],
            ])

            // Courte bio (optionnel)
            ->add('bio', TextareaType::class, [
                'label' => 'Ã€ propos de vous',
                'required' => false,
                'attr' => ['rows' => 4],
            ])
            // Compétences proposées (JSON → array simple)
            ->add('skillsOffered', CollectionType::class, [
                'label' => 'Compétences proposées',
                'required' => false,
                'entry_type' => TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // Compétences recherchées
            ->add('skillsWanted', CollectionType::class, [
                'label' => 'Compétences recherchées',
                'required' => false,
                'entry_type' => TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $r): void
    {
        $r->setDefaults(['data_class' => User::class]);
    }
}
