<?php

declare(strict_types=1);

namespace App\Tests\Form;

use App\Entity\Listing;
use App\Form\ListingType;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Validator\Validation;

final class ListingTypeTest extends TypeTestCase
{
    protected function getExtensions(): array
    {
        $validator = Validation::createValidator();

        return [
            new ValidatorExtension($validator),
        ];
    }

    public function testSubmitValidData(): void
    {
        $formData = [
            'title' => 'Cours de guitare',
            'description' => 'Annonce complète avec au moins 20 caractères',
            'location' => 'Paris',
        ];

        $listing = new Listing();
        $form = $this->factory->create(ListingType::class, $listing);

        $form->submit($formData);

        self::assertTrue($form->isSynchronized());
        self::assertTrue($form->isValid());

        $data = $form->getData();
        self::assertSame('Cours de guitare', $data->getTitle());
        self::assertSame('Annonce complète avec au moins 20 caractères', $data->getDescription());
        self::assertSame('Paris', $data->getLocation());
    }

    public function testTitleIsRequired(): void
    {
        $formData = [
            'title' => '',
            'description' => 'Description correcte',
            'location' => 'Paris',
        ];

        $form = $this->factory->create(ListingType::class);
        $form->submit($formData);

        self::assertFalse($form->isValid());
    }

    public function testDescriptionMinLength(): void
    {
        $formData = [
            'title' => 'Cours de guitare',
            'description' => 'Trop court',
            'location' => 'Paris',
        ];

        $form = $this->factory->create(ListingType::class);
        $form->submit($formData);

        self::assertFalse($form->isValid());
    }

    public function testLocationIsRequired(): void
    {
        $formData = [
            'title' => 'Cours de guitare',
            'description' => 'Une annonce valide avec assez de texte',
            'location' => '',
        ];

        $form = $this->factory->create(ListingType::class);
        $form->submit($formData);

        self::assertFalse($form->isValid());
    }
}
