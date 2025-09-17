<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

final class ProfileFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $em): void
    {
        $faker = FakerFactory::create('fr_FR');

        $users = $em->getRepository(User::class)->findAll();

        foreach ($users as $user) {
            $user
                ->setBio($faker->paragraph(3))
                ->setSkillsOffered($faker->randomElements(
                    ['guitare','anglais','montage pc','coaching','soutien scolaire','dessin'],
                    random_int(1, 3)
                ))
                ->setSkillsWanted($faker->randomElements(
                    ['espagnol','yoga','cuisine','marketing','excel'],
                    random_int(1, 2)
                ))
                // 70% des users ont un avatar, 30% non
                ->setAvatarFilename($faker->boolean(70) ? $faker->imageUrl(128, 128, 'people') : null);

            $em->persist($user);
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
