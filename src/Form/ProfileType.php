<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Profile;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

final class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            // === Courte bio ===
            ->add('bio', TextareaType::class, [
                'label' => 'À propos de vous',
                'required' => false,
                'attr' => [
                    'rows' => 4,
                    'placeholder' => 'Décrivez vos passions, expériences ou vos motivations…',
                ],
                'constraints' => [
                    new Assert\Length([
                        'max' => 1000,
                        'maxMessage' => 'La bio ne peut pas dépasser {{ limit }} caractères.',
                    ]),
                ],
            ])

            // === Compétences proposées ===
            ->add('skillsOffered', CollectionType::class, [
                'label' => 'Compétences proposées',
                'required' => false,
                'entry_type' => \Symfony\Component\Form\Extension\Core\Type\TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])

            // === Compétences recherchées ===
            ->add('skillsWanted', CollectionType::class, [
                'label' => 'Compétences recherchées',
                'required' => false,
                'entry_type' => \Symfony\Component\Form\Extension\Core\Type\TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])

            // === Avatar (optionnel) ===
            ->add('avatarFilename', FileType::class, [
                'label' => 'Photo de profil',
                'required' => false,
                'mapped' => false, // on ne stocke que le nom du fichier, l’upload est géré ailleurs
                'constraints' => [
                    new Assert\File([
                        'maxSize' => '2M',
                        'mimeTypes' => ['image/jpeg', 'image/png', 'image/webp'],
                        'mimeTypesMessage' => 'Merci d\'uploader une image JPG, PNG ou WebP valide.',
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Profile::class, //
        ]);
    }
}
