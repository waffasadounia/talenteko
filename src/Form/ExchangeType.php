<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Exchange;
use App\Enum\ExchangeStatus;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

final class ExchangeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $b, array $options): void
    {
        $b
            ->add('status', ChoiceType::class, [
                'label' => 'Statut de l’échange',
                'choices' => [
                    'En attente' => ExchangeStatus::PENDING,
                    'Accepté' => ExchangeStatus::ACCEPTED,
                    'Refusé' => ExchangeStatus::DECLINED,
                    'Terminé' => ExchangeStatus::COMPLETED,
                    'Annulé' => ExchangeStatus::CANCELED,
                ],
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Merci de choisir un statut.']),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Exchange::class,
        ]);
    }
}
