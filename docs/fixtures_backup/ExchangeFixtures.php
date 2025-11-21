<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Exchange;
use App\Entity\User;
use App\Entity\Listing;
use App\Enum\ExchangeStatus;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

/**
 * Fixtures — Génération d'échanges (Exchange)
 * ------------------------------------------------------------
 * Crée environ 40 échanges simulant des interactions utilisateur.
 * Chaque échange lie deux utilisateurs différents et un listing.
 * Les dates sont générées automatiquement via le constructeur.
 */
final class ExchangeFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        /** @var User[] $users */
        $users = $manager->getRepository(User::class)->findAll();
        /** @var Listing[] $listings */
        $listings = $manager->getRepository(Listing::class)->findAll();

        if (empty($users) || empty($listings)) {
            echo "⚠️ Impossible de générer des échanges : données manquantes.\n";
            return;
        }

        $statuses = [
            ExchangeStatus::PENDING,
            ExchangeStatus::ACCEPTED,
            ExchangeStatus::COMPLETED,
            ExchangeStatus::CANCELED,
        ];

        $count = 0;
        $total = 40;

        while ($count < $total) {
            $userA = $faker->randomElement($users);
            $userB = $faker->randomElement(array_filter($users, fn ($u) => $u !== $userA));
            $listing = $faker->randomElement($listings);

            $exchange = new Exchange();
            $exchange
                ->setRequester($userA)
                ->setRecipient($userB)
                ->setListing($listing)
                ->setStatus($faker->randomElement($statuses))
                ->setUpdatedAt(new \DateTimeImmutable());

            $manager->persist($exchange);
            $count++;
        }

        $manager->flush();
        echo "✅ {$count} échanges générés avec succès.\n";
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ListingFixtures::class,
        ];
    }
}
