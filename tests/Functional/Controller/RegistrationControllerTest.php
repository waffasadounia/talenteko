<?php

declare(strict_types=1);

namespace App\Tests\Controller;

use App\Tests\DatabasePrimer;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegistrationControllerTest extends WebTestCase
{
    use DatabasePrimer;

    /**
     * Récupère les données de test et initialise la base de test UNE SEULE FOIS avant tous les tests de cette classe.
     */
    public static function setUpBeforeClass(): void
    {
        self::primeDatabase();
    }

    public function testRegisterPageLoads(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/inscription');

        // ... Vérifie que la page se charge bien
        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('form');
    }

    public function testSubmitRegistrationForm(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/inscription');

        // ... Remplit et soumet le formulaire d'inscription
        $form = $crawler->selectButton("S'inscrire")->form([
            'registration[email]' => 'testuser_' . uniqid() . '@example.com',
            'registration[pseudo]' => 'TestUser' . uniqid(),
            'registration[plainPassword][first]' => 'Password!123',
            'registration[plainPassword][second]' => 'Password!123',
            'registration[location]' => 'Paris',
            'registration[agreeTerms]' => true,
        ]);

        $client->submit($form);

        // ... Vérifie qu'il y a bien une redirection après inscription
        $this->assertResponseRedirects('/');
        $client->followRedirect();

        // ... Vérifie que l'utilisateur est redirigé vers l'accueil et connecté
        $this->assertSelectorExists('header nav');
    }
}
