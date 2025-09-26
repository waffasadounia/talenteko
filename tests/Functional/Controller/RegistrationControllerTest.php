<?php

declare(strict_types=1);

namespace App\Tests\Controller;

use App\Tests\DatabasePrimer;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegistrationControllerTest extends WebTestCase
{
    use DatabasePrimer;

    /**
     * RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©initialise la base de test UNE SEULE FOIS avant tous les tests de cette classe.
     */
    public static function setUpBeforeClass(): void
    {
        self::primeDatabase();
    }

    public function testRegisterPageLoads(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/inscription');

        // ... VÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifie que la page se charge bien
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

        // ... VÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifie qu'il y a bien une redirection aprÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s inscription
        $this->assertResponseRedirects('/');
        $client->followRedirect();

        // ... VÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©rifie que l'utilisateur est redirigÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© vers l'accueil et connectÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©
        $this->assertSelectorExists('header nav');
    }
}


