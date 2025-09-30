<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Génère des utilisateurs de test + un compte administrateur.
 * L’admin est présent en base mais n’a pas d’annonces associées.
 */
final class UserFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $hasher)
    {
    }

    public function load(ObjectManager $em): void
    {
        $faker = FakerFactory::create('fr_FR');

        // --- Création de 10 utilisateurs classiques ---
        for ($i = 1; $i <= 10; ++$i) {
            $user = new User();

            $email = sprintf(
                '%s.%s@example.com',
                strtolower($faker->firstName()),
                strtolower($faker->lastName()),
            );

            $user
                ->setEmail($email)
                ->setPseudo($faker->firstName()) // pseudo généré aléatoirement
                ->setLocation($faker->city())
                ->setPassword(
                    $this->hasher->hashPassword($user, 'Password123!'),
                )
                ->setBio($faker->sentence(10));

            $em->persist($user);
        }

        // --- Création d’un compte administrateur ---
        $admin = new User();
        $admin
            ->setEmail('admin@talenteko.test')
            ->setRoles(['ROLE_ADMIN'])
            ->setPseudo('Admin')
            ->setLocation('Paris')
            ->setPassword(
                $this->hasher->hashPassword($admin, 'Admin!2025'),
            )
            ->setBio('Compte administrateur. Pas d’annonces, pas d’échanges.');

        // On persiste l’admin mais il sera exclu des annonces dans ListingFixtures
        $em->persist($admin);

        // --- Flush global ---
        $em->flush();
    }
}
