<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Listing;
use App\Entity\ListingImage;
use App\Entity\User;
use App\Enum\ListingStatus;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * Génère des annonces fictives :
 * - 6 annonces vitrines par catégorie (avec images locales)
 * - 10 annonces de démonstration par catégorie (titre simple + placeholder)
 */
final class ListingFixtures extends Fixture implements DependentFixtureInterface
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
        'Langues' => [
            ['Cours d’anglais débutant', 'Bases pour voyager et communiquer.'],
            ['Conversation espagnol', 'Pratique orale et vocabulaire.'],
            ['Initiation chinois', 'Découverte des caractères et prononciation.'],
            ['Perfectionnement allemand', 'Grammaire et conversation avancées.'],
            ['Français langue étrangère', 'Cours pour nouveaux arrivants.'],
            ['Préparation TOEIC', 'Exercices pratiques pour réussir.'],
        ],
        'Informatique' => [
            ['Dépannage PC à domicile', 'Résolution de problèmes Windows et installation de logiciels.'],
            ['Cours initiation Word/Excel', 'Découverte des outils bureautiques.'],
            ['Création site web vitrine', 'Conception simple avec WordPress ou Symfony.'],
            ['Installation réseau domestique', 'Configuration Wi-Fi et partage de fichiers.'],
            ['Sécurité', 'Apprentissage des bases en cybersécurité.'],
            ['Apprentissage Python', 'Bases de la programmation Python pas à pas.'],
        ],
        'Bricolage' => [
            ['Montage de meubles IKEA', 'Je monte vos meubles rapidement et proprement.'],
            ['Peinture murale', 'Je repeins chambres et salons avec soin.'],
            ['Petites réparations', 'Réglage de portes qui grincent et étagères bancales.'],
            ['Installation luminaire', 'Pose de lustres et spots électriques.'],
            ['Pose tringles rideaux', 'Fixation rideaux et barres solides.'],
            ['Assemblage étagères', 'Pose et fixation de bibliothèques ou étagères murales.'],
        ],
        'Sport' => [
            ['Coaching musculation', 'Programme personnalisé en salle ou à domicile.'],
            ['Cours de yoga', 'Séances pour détente et souplesse.'],
            ['Running débutant', 'Plan progressif pour apprendre à courir.'],
            ['Initiation boxe', 'Bases techniques et cardio.'],
            ['Danse salsa', 'Cours collectifs débutants.'],
            ['Natation enfants', 'Apprentissage ludique et sécurisé.'],
        ],
        'Art' => [
            ['Cours de dessin', 'Initiation aux techniques de croquis et ombrages.'],
            ['Peinture acrylique', 'Apprentissage des bases de la peinture moderne.'],
            ['Sculpture argile', 'Atelier pratique de modelage.'],
            ['Guitare acoustique', 'Cours pour apprendre accords et rythmes.'],
            ['Chant débutant', 'Exercices de respiration et diction.'],
            ['Photographie smartphone', 'Améliorer vos clichés au quotidien.'],
        ],
        'Juridique' => [
            ['Conseil en droit du travail', 'Informations sur contrats et licenciements.'],
            ['Aide rédaction bail', 'Assistance pour rédiger un contrat de location.'],
            ['Introduction au droit civil', 'Bases pour mieux comprendre ses droits.'],
            ['Questions succession', 'Explication des démarches principales.'],
            ['Droit de la consommation', 'Conseils sur litiges avec commerçants.'],
            ['Consultation juridique générale', 'Éclaircissements sur vos droits du quotidien.'],
        ],
        'Marketing' => [
            ['Stratégie réseaux sociaux', 'Création d’un plan Instagram/Facebook.'],
            ['SEO pour débutants', 'Optimisation d’un site vitrine Google.'],
            ['Branding personnel', 'Travailler son image de marque en ligne.'],
            ['Email marketing', 'Introduction aux campagnes efficaces.'],
            ['Publicité Facebook Ads', 'Créer et gérer une campagne ciblée.'],
            ['Analyse Google Analytics', 'Suivi trafic et performances d’un site.'],
        ],
        'Bien-être' => [
            ['Massage relaxant', 'Séance d’une heure pour relâcher le stress.'],
            ['Initiation méditation', 'Apprendre techniques simples de méditation.'],
            ['Sophrologie découverte', 'Exercices pratiques de respiration guidée.'],
            ['Conseil sommeil', 'Techniques naturelles pour mieux dormir.'],
            ['Gestion stress', 'Atelier pratique pour réduire l’anxiété.'],
            ['Yoga doux', 'Séances accessibles pour tous les âges.'],
        ],
        'Jardinage' => [
            ['Entretien pelouse', 'Je tonds, désherbe et entretiens vos espaces verts.'],
            ['Taille haies', 'Je taille vos haies avec soin.'],
            ['Plantation fleurs', 'Je vous aide à planter massifs et arbustes.'],
            ['Arrosage plantes', 'Service d’arrosage régulier de vos plantes.'],
            ['Préparation potager', 'Je prépare sol et semis pour légumes.'],
            ['Élagage léger', 'Coupe de branches basses et entretien arbres.'],
        ],
        'Éducation' => [
            ['Aide devoirs primaire', 'Soutien scolaire pour enfants en difficulté.'],
            ['Cours maths collège', 'Explications claires pour progresser en maths.'],
            ['Français orthographe', 'Améliorer grammaire et orthographe.'],
            ['Soutien bac philo', 'Préparation aux épreuves de philosophie.'],
            ['Cours histoire-géo', 'Révisions interactives et cartes mentales.'],
            ['Anglais oral lycée', 'Pratique de conversation pour examens.'],
        ],
    ];

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        $slugger = new AsciiSlugger();

        $users = $manager->getRepository(User::class)->findAll();
        $categories = $manager->getRepository(Category::class)->findAll();

        // Exclure l’admin
        $regularUsers = array_filter(
            $users,
            fn (User $u) => !\in_array('ROLE_ADMIN', $u->getRoles(), true)
        );

        foreach ($categories as $category) {
            $catName = $category->getName();

            // --- 1. Annonces vitrines avec images locales ---
            if (isset(self::SAMPLES[$catName])) {
                $i = 1;
                foreach (self::SAMPLES[$catName] as [$title, $description]) {
                    $listing = new Listing();
                    $listing->setTitle($title);
                    $listing->setDescription($description);
                    $listing->setType($faker->randomElement(['OFFER', 'REQUEST']));
                    $listing->setLocation($faker->city());
                    $listing->setStatus(ListingStatus::PUBLISHED);
                    $listing->setSlug((string) $slugger->slug($title.'-'.uniqid()));
                    $listing->setAuthor($faker->randomElement($regularUsers));
                    $listing->setCategory($category);

                    $image = new ListingImage();
                    $imgIndex = min($i, 6);
                    $image->setPath("uploads/listings/{$category->getSlug()}/{$imgIndex}.jpg");
                    $image->setIsPrimary(true);

                    $listing->addImage($image);
                    $manager->persist($image);
                    $manager->persist($listing);
                    ++$i;
                }
            }

            // --- 2. Annonces de démonstration (~10 par catégorie) ---
            for ($i = 0; $i < 10; ++$i) {
                $title = 'Annonce démo #'.uniqid();

                $listing = new Listing();
                $listing->setTitle($title);
                $listing->setDescription('Ceci est une annonce générée automatiquement pour démonstration.');
                $listing->setType($faker->randomElement(['OFFER', 'REQUEST']));
                $listing->setLocation($faker->city());
                $listing->setStatus(ListingStatus::PUBLISHED);
                $listing->setSlug((string) $slugger->slug($title.'-'.uniqid()));
                $listing->setAuthor($faker->randomElement($regularUsers));
                $listing->setCategory($category);

                $image = new ListingImage();
                $image->setPath('uploads/listings/placeholderTE.png');
                $image->setIsPrimary(true);

                $listing->addImage($image);
                $manager->persist($image);
                $manager->persist($listing);
            }
        }

        $manager->flush();
        echo "✔ Annonces générées avec images locales + dataset de démonstration.\n";
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            CategoryFixtures::class,
        ];
    }
}
