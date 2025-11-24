<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Profile;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;

final class ProfileFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $em): void
    {
        $faker = FakerFactory::create('fr_FR');

        $users = $em->getRepository(User::class)->findAll();

        foreach ($users as $user) {
            // Exclure l’admin
            if (in_array('ROLE_ADMIN', $user->getRoles(), true)) {
                continue;
            }

            // Génération des listes de compétences
            $skillsOfferedArray = $faker->randomElements(
                ['guitare', 'anglais', 'montage pc', 'coaching', 'soutien scolaire', 'dessin'],
                random_int(1, 3)
            );

            $skillsWantedArray = $faker->randomElements(
                ['espagnol', 'yoga', 'cuisine', 'marketing', 'excel'],
                random_int(1, 2)
            );

            // Conversion en texte : "guitare, anglais"
            $skillsOffered = implode(', ', $skillsOfferedArray);
            $skillsWanted = implode(', ', $skillsWantedArray);

            $profile = new Profile();
            $profile
                ->setBio($faker->paragraph(3))
                ->setSkillsOffered($skillsOffered)
                ->setSkillsWanted($skillsWanted)
                ->setAvatarFilename(null)
                ->setUser($user);

            $em->persist($profile);
        }

        $em->flush();
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
        ];
    }
}
