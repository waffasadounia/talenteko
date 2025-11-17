<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * Fixtures — Catégories principales TalentÉkô
 * -------------------------------------------
 * Génère les catégories de base (réutilisées dans ListingFixtures).
 */
final class CategoryFixtures extends Fixture implements FixtureGroupInterface
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
        'Bien-être',
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

            // 🔗 Référence utilisée dans ListingFixtures
            $this->addReference('cat_'.$i, $category);
        }

        $em->flush();
        echo "✅ Catégories générées avec succès (" . count(self::CATEGORIES) . ").\n";
    }

    /** 🔸 Groupe Doctrine pour exécution ciblée */
    public static function getGroups(): array
    {
        return ['categories'];
    }
}
