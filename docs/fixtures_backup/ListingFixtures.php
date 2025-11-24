<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Listing;
use App\Entity\ListingImage;
use App\Entity\User;
use App\Enum\ListingStatus;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * Fixtures — Listings TalentÉkô
 * -------------------------------------------------
 * Génère :
 *  - 6 annonces "vitrines" par catégorie (avec images locales)
 *  - 10 annonces démo par catégorie (avec placeholder)
 */
final class ListingFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private const SAMPLES = [
        'Administratif' => [
            ['Aide démarches CAF', 'Je vous guide dans vos demandes en ligne.'],
            ['Remplissage formulaires', 'Accompagnement administratif simple.'],
            ['Création CV moderne', 'Mise en page et conseils sur le fond.'],
            ['Préparation entretien', 'Simulation d’entretien d’embauche.'],
            ['Déclaration impôts', 'Accompagnement pour remplir en ligne.'],
            ['Gestion courrier', 'Tri, réponses et classement de papiers.'],
        ],
        'Cuisine' => [
            ['Cours pâtisserie', 'Réalisation de gâteaux et tartes maison.'],
            ['Atelier cuisine italienne', 'Apprentissage des pâtes fraîches et pizzas.'],
            ['Menu équilibré', 'Conseils pour préparer des repas sains.'],
            ['Cuisine végétarienne', 'Découverte de recettes sans viande.'],
            ['Batch cooking', 'Préparation de repas pour la semaine.'],
            ['Découverte épices', 'Apprendre à cuisiner avec des saveurs variées.'],
        ],
        // (... garder les autres catégories inchangées ...)
    ];

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        $slugger = new AsciiSlugger();

        /** @var User[] $users */
        $users = $manager->getRepository(User::class)->findAll();
        /** @var Category[] $categories */
        $categories = $manager->getRepository(Category::class)->findAll();

        // Exclure l’admin
        $regularUsers = array_filter(
            $users,
            fn(User $u) => !in_array('ROLE_ADMIN', $u->getRoles(), true)
        );

        foreach ($categories as $category) {
            $catName = $category->getName();

            // --- Annonces vitrines avec images locales ---
            if (isset(self::SAMPLES[$catName])) {
                $i = 1;
                foreach (self::SAMPLES[$catName] as [$title, $description]) {
                    $listing = new Listing();
                    $listing
                        ->setTitle($title)
                        ->setDescription($description)
                        ->setType($faker->randomElement(['OFFER', 'REQUEST']))
                        ->setLocation($faker->city())
                        ->setStatus(ListingStatus::PUBLISHED)
                        ->setSlug((string) $slugger->slug($title.'-'.uniqid()))
                        ->setAuthor($faker->randomElement($regularUsers))
                        ->setCategory($category);

                    $image = new ListingImage();
                    $imgIndex = min($i, 6);
                    $image->setPath("{$imgIndex}.jpg");
                    $image->setIsPrimary(true);

                    $listing->addImage($image);
                    $manager->persist($image);
                    $manager->persist($listing);
                    ++$i;
                }
            }

            // --- Annonces démo (~10 par catégorie) ---
            for ($i = 0; $i < 10; ++$i) {
                $title = 'Annonce démo #'.uniqid();

                $listing = new Listing();
                $listing
                    ->setTitle($title)
                    ->setDescription('Ceci est une annonce générée automatiquement pour démonstration.')
                    ->setType($faker->randomElement(['OFFER', 'REQUEST']))
                    ->setLocation($faker->city())
                    ->setStatus(ListingStatus::PUBLISHED)
                    ->setSlug((string) $slugger->slug($title.'-'.uniqid()))
                    ->setAuthor($faker->randomElement($regularUsers))
                    ->setCategory($category);

                $image = new ListingImage();
                $image->setPath('placeholderTE.png');
                $image->setIsPrimary(true);

                $listing->addImage($image);
                $manager->persist($image);
                $manager->persist($listing);
            }
        }

        $manager->flush();
        echo " Annonces générées avec images locales + placeholders.\n";
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            CategoryFixtures::class,
        ];
    }

    /** Groupe Doctrine pour exécution ciblée */
    public static function getGroups(): array
    {
        return ['listings'];
    }
}
