<?php

declare(strict_types=1);

namespace App\Tests\Functional\Controller;

use App\Entity\Exchange;
use App\Entity\Listing;
use App\Entity\User;
use App\Enum\ExchangeStatus;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class ExchangeControllerTest extends WebTestCase
{
    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        self::ensureKernelShutdown();
        $client = static::createClient();
        $this->em = $client->getContainer()->get('doctrine')->getManager();
    }

    public function testGuestCannotCreateExchange(): void
    {
        $client = static::createClient();

        $listing = $this->createListing();

        $client->request('POST', '/exchange/new/' . $listing->getSlug());
        $this->assertResponseRedirects('/login');
    }

    public function testUserCanCreateExchange(): void
    {
        $client = static::createClient();

        $user = $this->createUser('user1@example.com', 'User1');
        $listing = $this->createListing($this->createUser('author@example.com', 'Author'));

        $client->loginUser($user);

        $client->request('POST', '/exchange/new/' . $listing->getSlug());
        $this->assertResponseRedirects('/listing/' . $listing->getSlug());

        // Vérifier en base que l’échange existe
        $exchange = $this->em->getRepository(Exchange::class)->findOneBy([
            'listing' => $listing,
            'requester' => $user,
        ]);

        $this->assertNotNull($exchange);
        $this->assertSame(ExchangeStatus::PENDING, $exchange->getStatus());
    }

    public function testUserCannotViewExchangeNotParticipant(): void
    {
        $client = static::createClient();

        $author = $this->createUser('author@example.com', 'Author');
        $requester = $this->createUser('user1@example.com', 'User1');
        $intruder = $this->createUser('user2@example.com', 'User2');
        $listing = $this->createListing($author);

        $exchange = new Exchange();
        $exchange->setListing($listing);
        $exchange->setRequester($requester);
        $exchange->setStatus(ExchangeStatus::PENDING);

        $this->em->persist($exchange);
        $this->em->flush();

        $client->loginUser($intruder);
        $client->request('GET', '/exchange/' . $exchange->getId());

        $this->assertResponseStatusCodeSame(403); // Forbidden
    }

    public function testUserCanViewExchangeIfParticipant(): void
    {
        $client = static::createClient();

        $author = $this->createUser('author2@example.com', 'Author2');
        $requester = $this->createUser('user3@example.com', 'User3');
        $listing = $this->createListing($author);

        $exchange = new Exchange();
        $exchange->setListing($listing);
        $exchange->setRequester($requester);
        $exchange->setStatus(ExchangeStatus::PENDING);

        $this->em->persist($exchange);
        $this->em->flush();

        $client->loginUser($requester);
        $client->request('GET', '/exchange/' . $exchange->getId());

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('body', $listing->getTitle());
    }

    // === Helpers ===

    private function createUser(string $email, string $pseudo): User
    {
        $user = new User();
        $user->setEmail($email);
        $user->setPseudo($pseudo);
        $user->setPassword('test'); // non hashé pour tests

        $this->em->persist($user);
        $this->em->flush();

        return $user;
    }

    private function createListing(?User $author = null): Listing
    {
        if (!$author) {
            $author = $this->createUser('default@example.com', 'DefaultAuthor');
        }

        $listing = new Listing();
        $listing->setTitle('Test Listing ' . uniqid());
        $listing->setSlug('test-listing-' . uniqid());
        $listing->setDescription('Une annonce de test');
        $listing->setAuthor($author);
        $listing->setLocation('Paris');

        $this->em->persist($listing);
        $this->em->flush();

        return $listing;
    }
}
