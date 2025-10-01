<?php

declare(strict_types=1);

namespace App\Tests\Functional;

use App\Entity\Category;
use App\Entity\Listing;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class SearchControllerTest extends WebTestCase
{
    private EntityManagerInterface $em;

    protected function setUp(): void
    {
        self::ensureKernelShutdown();
        $client = self::createClient();
        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        // Nettoyage DB
        $this->em->createQuery('DELETE FROM App\Entity\Listing l')->execute();
        $this->em->createQuery('DELETE FROM App\Entity\Category c')->execute();
        $this->em->createQuery('DELETE FROM App\Entity\User u')->execute();

        // Création fixtures simples
        $user = (new User())
            ->setEmail('test@example.com')
            ->setPassword('hashed')
            ->setPseudo('GuitarMan')
            ->setLocation('Paris')
            ->setTag('1234');

        $category = (new Category())->setName('Musique')->setSlug('musique');

        $listing = (new Listing())
            ->setTitle('Cours de guitare')
            ->setDescription('Apprenez la guitare avec moi')
            ->setLocation('Paris')
            ->setSlug('cours-de-guitare')
            ->setAuthor($user)
            ->setCategory($category);


        $this->em->persist($user);
        $this->em->persist($category);
        $this->em->persist($listing);
        $this->em->flush();
    }

    public function testSearchPageReturnsResults(): void
    {
        $client = self::createClient();
        $crawler = $client->request('GET', '/recherche?q=guitare');

        self::assertResponseIsSuccessful();
        self::assertStringContainsString('Cours de guitare', $crawler->filter('body')->text());
        self::assertStringContainsString('GuitarMan', $crawler->filter('body')->text());
    }

    public function testSearchWithNoQueryReturnsEmptyOrDefault(): void
    {
        $client = self::createClient();
        $crawler = $client->request('GET', '/recherche');

        self::assertResponseIsSuccessful();
        self::assertStringContainsString('Cours de guitare', $crawler->filter('body')->text());
    }
}
