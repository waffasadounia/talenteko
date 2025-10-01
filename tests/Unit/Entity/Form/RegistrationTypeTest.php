<?php

declare(strict_types=1);

namespace App\Tests\Form;

use App\Entity\User;
use App\Form\RegistrationType;
use Symfony\Component\Form\Test\TypeTestCase;

final class RegistrationTypeTest extends TypeTestCase
{
    public function testSubmitValidData(): void
    {
        $formData = [
            'email' => 'test@example.com',
            'pseudo' => 'BricoMan42',
            'location' => 'Paris',
            'plainPassword' => [
                'first' => 'Password123!',
                'second' => 'Password123!',
            ],
            'agreeTerms' => true,
            'website' => '', // honeypot vide → OK
        ];

        $model = new User();
        $form = $this->factory->create(RegistrationType::class, $model);

        $form->submit($formData);

        self::assertTrue($form->isSynchronized());
        self::assertTrue($form->isValid(), 'Le formulaire doit être valide avec des données correctes.');

        $this->assertSame('test@example.com', $model->getEmail());
        $this->assertSame('BricoMan42', $model->getPseudo());
        $this->assertSame('Paris', $model->getLocation());
    }

    public function testHoneypotFilledFails(): void
    {
        $formData = [
            'email' => 'bot@example.com',
            'pseudo' => 'Bot42',
            'location' => 'Lyon',
            'plainPassword' => [
                'first' => 'Password123!',
                'second' => 'Password123!',
            ],
            'agreeTerms' => true,
            'website' => 'http://malicious-bot.com', // ⚡ champ piégé rempli
        ];

        $form = $this->factory->create(RegistrationType::class, new User());
        $form->submit($formData);

        self::assertFalse($form->isValid(), 'Le formulaire doit être invalide si le honeypot est rempli.');
    }
}
