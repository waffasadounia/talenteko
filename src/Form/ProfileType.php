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
            // Champ obligatoire car central pour Talenteko (filtrage, prÃƒÂ©sentiel/distanciel).
            // On ajoute une contrainte NotBlank pour imposer la saisie.
            ->add('location', TextType::class, [
                'label' => 'Localisation',
                'required' => true, // cÃƒÂ´tÃƒÂ© Form (HTML5 + validation serveur)
                'attr' => [
                    'maxlength' => 120,
                    'autocomplete' => 'address-level2', // aide les navigateurs ÃƒÂ  suggÃƒÂ©rer la ville
                ],
                'constraints' => [
                    new Assert\NotBlank(message: 'Merci dÃ¢â‚¬â„¢indiquer votre ville.'), // validation serveur Symfony
                ],
            ])

            // Courte bio (optionnel)
            ->add('bio', TextareaType::class, [
                'label' => 'ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ propos de vous',
                'required' => false,
                'attr' => ['rows' => 4],
            ])
            // CompÃƒÂ©tences proposÃƒÂ©es (JSON Ã¢â€ â€™ array simple)
            ->add('skillsOffered', CollectionType::class, [
                'label' => 'CompÃƒÂ©tences proposÃƒÂ©es',
                'required' => false,
                'entry_type' => TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
            ])
            // CompÃƒÂ©tences recherchÃƒÂ©es
            ->add('skillsWanted', CollectionType::class, [
                'label' => 'CompÃƒÂ©tences recherchÃƒÂ©es',
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

