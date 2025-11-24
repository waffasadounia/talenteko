<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Review;
use App\Entity\User;
use App\Entity\Listing;
use App\Entity\Exchange;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

/**
 * Fixtures — Avis utilisateurs (Review)
 * ------------------------------------------------------
 * Génère 50 avis aléatoires cohérents :
 * - Chaque avis relie un utilisateur à une cible distincte
 * - Aucun utilisateur ne note deux fois le même échange
 * - Les moyennes des listings sont recalculées automatiquement
 */
final class ReviewFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        /** @var User[] $users */
        $users = $manager->getRepository(User::class)->findAll();
        /** @var Listing[] $listings */
        $listings = $manager->getRepository(Listing::class)->findAll();
        /** @var Exchange[] $exchanges */
        $exchanges = $manager->getRepository(Exchange::class)->findAll();

        if (empty($users) || empty($listings) || empty($exchanges)) {
            echo "⚠️ Données manquantes : impossible de générer les reviews.\n";
            return;
        }

        $existingPairs = [];
        $count = 0;
        $total = 50;

        while ($count < $total) {
            $author = $faker->randomElement($users);
            $target = $faker->randomElement(array_filter($users, fn ($u) => $u !== $author));
            $listing = $faker->randomElement($listings);
            $exchange = $faker->randomElement($exchanges);

            // Empêche qu’un utilisateur donne deux avis sur le même échange
            $pairKey = $exchange->getId() . '-' . $author->getId();
            if (isset($existingPairs[$pairKey])) {
                continue;
            }
            $existingPairs[$pairKey] = true;

            $review = new Review();
            $review
                ->setAuthor($author)
                ->setTarget($target)
                ->setExchange($exchange)
                ->setListing($listing)
                ->setRating($faker->numberBetween(1, 5))
                ->setComment($faker->optional(0.7)->sentence($faker->numberBetween(10, 20)));

            // Persistance
            $manager->persist($review);
            $listing->addReview($review)->updateAverageRating();

            $count++;
        }

        $manager->flush();

        echo "$count avis générés avec succès.\n";
    }

    /**
     * Dépendances : Users, Listings, Exchanges doivent exister avant.
     */
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ListingFixtures::class,
            ExchangeFixtures::class,
        ];
    }
}
