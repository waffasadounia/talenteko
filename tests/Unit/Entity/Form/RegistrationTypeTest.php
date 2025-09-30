<?php

declare(strict_types=1);

namespace App\Tests\Form;

use App\Entity\User;
use App\Form\RegistrationType;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Validator\Validation;

final class RegistrationTypeTest extends TypeTestCase
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
            'email' => 'test@example.com',
            'pseudo' => 'BricoMan42',
            'location' => 'Paris',
            'plainPassword' => [
                'first' => 'MotDePasseFort123!',
                'second' => 'MotDePasseFort123!',
            ],
            'agreeTerms' => true,
        ];

        $user = new User();
        $form = $this->factory->create(RegistrationType::class, $user);

        $form->submit($formData);

        self::assertTrue($form->isSynchronized());
        self::assertTrue($form->isValid());

        self::assertSame('test@example.com', $user->getEmail());
        self::assertSame('BricoMan42', $user->getPseudo());
        self::assertSame('Paris', $user->getLocation());
    }

    public function testInvalidEmail(): void
    {
        $formData = [
            'email' => 'not-an-email',
            'pseudo' => 'User',
            'location' => 'Paris',
            'plainPassword' => [
                'first' => 'password123',
                'second' => 'password123',
            ],
            'agreeTerms' => true,
        ];

        $form = $this->factory->create(RegistrationType::class);
        $form->submit($formData);

        self::assertFalse($form->isValid());
    }

    public function testPasswordMismatch(): void
    {
        $formData = [
            'email' => 'valid@example.com',
            'pseudo' => 'User',
            'location' => 'Paris',
            'plainPassword' => [
                'first' => 'password123',
                'second' => 'differentPassword',
            ],
            'agreeTerms' => true,
        ];

        $form = $this->factory->create(RegistrationType::class);
        $form->submit($formData);

        self::assertFalse($form->isValid());
    }
}
