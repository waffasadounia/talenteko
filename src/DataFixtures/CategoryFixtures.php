<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * ⚡ Crée les catégories de base
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
        'Bien-Être',
        'Jardinage',
        'Éducation',
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
