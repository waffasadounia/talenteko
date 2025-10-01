<?php

declare(strict_types=1);

namespace App\Tests\Functional\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class SecurityControllerTest extends WebTestCase
{
    public function testLoginPageLoads(): void
    {
        $client = static::createClient();

        // Accès à la page de login
        $client->request('GET', '/login');

        self::assertResponseIsSuccessful();
        self::assertSelectorExists('form'); // Vérifie qu’il y a bien un formulaire
        self::assertSelectorExists('input[name="email"]');
        self::assertSelectorExists('input[name="password"]');
    }

    public function testLogoutIsIntercepted(): void
    {
        $client = static::createClient();

        // On appelle /logout → Symfony intercepte et redirige
        $client->request('GET', '/logout');

        self::assertResponseRedirects('/', null, 'Logout should redirect to home (see security.yaml)');
    }
}
