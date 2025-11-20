<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Profile;
use Symfony\Component\Form\AbstractType;
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
            ->add('skillsOffered', TextareaType::class, [
                'label' => 'Compétences proposées',
                'required' => false,
                'attr' => [
                    'placeholder' => 'Cours, services, connaissances que vous proposez…',
                    'class' => 'form-textarea',
                ],
            ])

            // === Compétences recherchées ===
            ->add('skillsWanted', TextareaType::class, [
                'label' => 'Compétences recherchées',
                'required' => false,
                'attr' => [
                    'placeholder' => 'Les compétences dont vous avez besoin…',
                    'class' => 'form-textarea',
                ],
            ])

            // === Avatar (upload) ===
            ->add('avatarFilename', FileType::class, [
                'label' => 'Photo de profil',
                'required' => false,
                'mapped' => false,
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
            'data_class' => Profile::class,
        ]);
    }
}
