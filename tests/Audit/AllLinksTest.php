<?php

namespace App\Tests\Audit;

use Symfony\Component\Panther\PantherTestCase;

class AllLinksTest extends PantherTestCase
{
    public function testAllInternalLinksWork(): void
    {
        // --- Important : utiliser Chrome (car geckodriver n'est pas installé)
        $client = static::createPantherClient([
            'browser' => PantherTestCase::CHROME
        ]);

        // URL de base (127.0.0.1:8000 dans 99% des cas)
        $baseUrl = 'http://127.0.0.1:8000';

        // --- Ouvre la page d'accueil
        $crawler = $client->request('GET', $baseUrl);
        $this->assertSame(200, $client->getResponse()->getStatus());

        // --- Récupère tous les liens internes
        $links = $crawler->filter('a[href]')->links();
        $tested = [];

        foreach ($links as $link) {
            $href = $link->getUri();

            // Ignore les liens externes
            if (!str_starts_with($href, $baseUrl)) {
                continue;
            }

            // Ignore les ancres (#xxx)
            if (str_contains($href, '#')) {
                continue;
            }

            // Évite les doublons
            if (isset($tested[$href])) {
                continue;
            }
            $tested[$href] = true;

            // --- Teste la page
            $client->request('GET', $href);
            $this->assertPageLoaded($client, $href);

            // Retour à l'accueil
            $client->request('GET', $baseUrl);
        }

        echo "\n\n✔ Test terminé : " . count($tested) . " pages vérifiées.\n\n";
    }

    private function assertPageLoaded($client, string $url)
    {
        $response = $client->getInternalResponse();

        // --- Vérifie que la page charge correctement
        $this->assertSame(
            200,
            $response->getStatusCode(),
            sprintf(" ERREUR : %s renvoie %s", $url, $response->getStatusCode())
        );

        // --- Vérifie que la page a un <title>
        $crawler = $client->getCrawler();
        $this->assertGreaterThan(
            0,
            $crawler->filter('title')->count(),
            sprintf(" ERREUR : %s n'a pas de <title>", $url)
        );
    }
}
