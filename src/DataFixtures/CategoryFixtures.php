<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * CrÃƒÂ©e les catÃƒÂ©gories de base.
 */
final class CategoryFixtures extends Fixture
{
    public const CATEGORIES = [
        'Administratif',
        'Cuisine',
        'Langues',
        'Informatique',
        'Bricolage',
        'Sport',
        'Art',
        'Juridique',
        'Marketing',
        'Bien-ÃƒÂªtre',
        'Jardinage',
        'Ãƒâ€°ducation',
    ];

    public function load(ObjectManager $em): void
    {
        $slugger = new AsciiSlugger();

        foreach (self::CATEGORIES as $i => $name) {
            $category = new Category();
            $category
                ->setName($name)
                ->setSlug((string) $slugger->slug($name)->lower());

            $em->persist($category);
        }

        $em->flush();
    }
}

