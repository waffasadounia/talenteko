<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class UserFixtures extends Fixture
{
    public function __construct(
        private readonly UserPasswordHasherInterface $hasher,
    ) {
    }

    public function load(ObjectManager $em): void
    {
        $faker = FakerFactory::create('fr_FR');

        // --- 10 utilisateurs classiques ---
        for ($i = 1; $i <= 10; ++$i) {
            $user = new User();

            $email = \sprintf(
                '%s.%s@example.com',
                strtolower($faker->firstName()),
                strtolower($faker->lastName())
            );

            $user
                ->setEmail($email)
                ->setPseudo($faker->userName()) // pseudo unique et sûr
                ->setLocation($faker->city())
                ->setPassword(
                    $this->hasher->hashPassword($user, 'Password123!')
                );

            $em->persist($user);

            // Ajout d’une référence pour les listings
            $this->addReference('user_'.$i, $user);
        }

        // --- Compte administrateur ---
        $admin = new User();
        $admin
            ->setEmail('admin@talenteko.test')
            ->setRoles(['ROLE_ADMIN'])
            ->setPseudo('Admin')
            ->setLocation('Paris')
            ->setPassword(
                $this->hasher->hashPassword($admin, 'Admin!2025')
            );

        $em->persist($admin);

        // Référence spécifique admin
        $this->addReference('user_admin', $admin);

        // --- Flush global ---
        $em->flush();
    }
}
