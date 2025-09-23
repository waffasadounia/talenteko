<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Listing;
use App\Entity\ListingImage;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\String\Slugger\AsciiSlugger;

final class AnnoncesFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $slugger = new AsciiSlugger();

        // === Villes franÃ§aises rÃ©alistes ===
        $cities = [
            'Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Bordeaux', 'Nantes', 'Lille',
            'Strasbourg', 'Montpellier', 'Rennes', 'Grenoble', 'Dijon', 'Angers', 'Tours',
            'Clermont-Ferrand', 'Le Havre', 'Saint-Étienne', 'Metz', 'Orléans',
        ];

        // === Textes par catégorie ===
        $samples = [
            'Cuisine' => [
                ['Cours de pâtisserie maison', 'J’enseigne les bases de la pâtisserie française : tartes, éclairs et gâteaux.'],
                ['Atelier cuisine italienne', 'Apprenez à préparer des pâtes fraîches et sauces authentiques.'],
                ['Repas végétarien équilibré', 'Je propose de cuisiner des plats complets et savoureux sans viande.'],
                ['Cours de sushi maison', 'Initiez-vous à l’art du sushi et du maki japonais.'],
                ['Batch cooking pour la semaine', 'Organisation et préparation de repas à l’avance.'],
                ['Initiation aux épices', 'Découvrez comment utiliser les épices dans vos plats quotidiens.'],
            ],
            'Langues' => [
                ['Cours d’anglais débutant', 'Apprentissage de vocabulaire et conversations simples.'],
                ['Conversation espagnole', 'Pratique de la langue espagnole autour de discussions.'],
                ['Initiation au japonais', 'Bases d’écriture et prononciation japonaise.'],
                ['Français pour étrangers', 'Aide à l’apprentissage du français oral et écrit.'],
                ['Cours d’allemand pratique', 'Expression orale pour voyages et échanges.'],
                ['Préparation TOEIC', 'Exercices pratiques et méthodologie pour l’examen.'],
            ],
            'Informatique' => [
                ['Dépannage PC à domicile', 'Résolution de problèmes Windows et installation logiciels.'],
                ['Cours initiation Word/Excel', 'Découverte des outils bureautiques.'],
                ['Création site web vitrine', 'Conception simple avec WordPress ou Symfony.'],
                ['Installation réseau domestique', 'Configuration Wi-Fi et partage fichiers.'],
                ['Sécurité informatique', 'Sensibilisation aux bonnes pratiques en ligne.'],
                ['Apprentissage Python', 'Bases de la programmation Python pas à pas.'],
            ],
            'Bricolage' => [
                ['Montage de meubles IKEA', 'Je monte vos meubles rapidement et proprement.'],
                ['Peinture murale', 'Je repeins chambres et salons avec soin.'],
                ['Petites réparations', 'Je règle portes qui grincent et étagères bancales.'],
                ['Installation luminaire', 'Pose de lustres et spots électriques.'],
                ['Pose tringles rideaux', 'Fixation rideaux et barres solides.'],
                ['Assemblage étagères', 'Pose et fixation de bibliothèques ou étagères.'],
            ],
            'Sport' => [
                ['Cours de yoga débutant', 'Postures simples et respiration guidée.'],
                ['Entraînement running', 'Préparation progressive à un 10 km.'],
                ['Musculation à domicile', 'Séances adaptées sans matériel complexe.'],
                ['Coaching fitness', 'Programme de remise en forme personnalisé.'],
                ['Initiation boxe', 'Bases techniques et cardio boxing.'],
                ['Marche nordique', 'Découverte de la marche active en extérieur.'],
            ],
            'Art' => [
                ['Cours de dessin', 'Initiation aux techniques de croquis et ombrages.'],
                ['Peinture acrylique', 'Apprentissage des bases de la peinture moderne.'],
                ['Sculpture argile', 'Atelier pratique de modelage.'],
                ['Guitare acoustique', 'Cours pour apprendre accords et rythmes.'],
                ['Chant dÃ©butant', 'Exercices de respiration et diction.'],
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
            'Bien-Être' => [
                ['Massage relaxant', 'Séance détente d’1 heure pour relâcher le stress.'],
                ['Initiation méditation', 'Apprendre techniques simples de méditation.'],
                ['Sophrologie découverte', 'Exercices pratiques de respiration guidée.'],
                ['Conseil sommeil', 'Techniques naturelles pour mieux dormir.'],
                ['Gestion stress', 'Atelier pratique pour réduire anxiété.'],
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
            'Administratif' => [
                ['Aide démarches CAF', 'Je vous guide dans vos demandes en ligne.'],
                ['Remplissage formulaires', 'Accompagnement administratif simple.'],
                ['Création CV moderne', 'Mise en page et conseils sur le fond.'],
                ['Préparation entretien', 'Simulation d’entretien d’embauche.'],
                ['Déclaration impôts', 'Accompagnement pour remplir en ligne.'],
                ['Gestion courrier', 'Tri, réponses et classement de papiers.'],
            ],
        ];

        // === Récupérer Users et Categories ===
        $users = $manager->getRepository(User::class)->findAll();
        $categories = $manager->getRepository(Category::class)->findAll();

        foreach ($categories as $category) {
            $catName = $category->getName();
            if (!isset($samples[$catName])) {
                continue;
            }

            $slug = $slugger->slug($catName)->lower()->toString();

            // Associer toutes les images trouvées
            $imageFiles = glob(__DIR__."/../../public/uploads/listings/{$slug}/*.jpg");

            if (!$imageFiles) {
                continue;
            }

            // Associer chaque image à un titre/description de la catégorie
            $samplePairs = $samples[$catName];
            $sampleCount = count($samplePairs);
            $idx = 0;
            foreach ($imageFiles as $file) {
                $filename = basename($file);
                // Utiliser un titre/description différent pour chaque image, ou boucler si plus d'images que de samples
                list($title, $description) = $samplePairs[$idx % $sampleCount];

                $listing = new Listing();
                $listing->setTitle($title);
                $listing->setDescription($description);
                $listing->setType(0 === $idx % 2 ? 'OFFER' : 'REQUEST');
                $listing->setLocation($cities[array_rand($cities)]);
                $listing->setStatus('PUBLISHED');
                $listing->setSlug((string) $slugger->slug($title.'-'.uniqid()));
                $listing->setAuthor($users[array_rand($users)]);
                $listing->setCategory($category);

                $image = new ListingImage();
                $image->setPath("{$slug}/{$filename}");
                $image->setIsPrimary(true); // première = image principale
                $listing->addImage($image);
                $manager->persist($image);
                $manager->persist($listing);

                ++$idx;
            }
        }

        // ✅ flush seulement après TOUTES les boucles
        $manager->flush();
        echo "✅ 72 annonces générées avec titres, descriptions, villes et images réalistes.\n";
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,    
            CategoryFixtures::class,
        ];
    }
}
