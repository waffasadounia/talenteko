<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Génère des utilisateurs de test + un compte admin.
 */
final class UserFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $hasher)
    {
    }

    public function load(ObjectManager $em): void
    {
        $faker = FakerFactory::create('fr_FR');

        // Création de 10 utilisateurs fictifs
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
                );

            $em->persist($user);
        }

        // Création d’un administrateur
        $admin = new User();
        $admin
            ->setEmail('admin@talenteko.test')
            ->setRoles(['ROLE_ADMIN'])
            ->setPseudo('Admin')
            ->setLocation('Paris')
            ->setPassword(
                $this->hasher->hashPassword($admin, 'Admin!2025'),
            );

        $em->persist($admin);

        $em->flush();
    }
}
