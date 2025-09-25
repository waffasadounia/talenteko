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

final class ListingFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $slugger = new AsciiSlugger();

        // === Villes franÃ§aises rÃ©alistes ===
        $cities = [
            'Paris',
            'Lyon',
            'Marseille',
            'Toulouse',
            'Nice',
            'Bordeaux',
            'Nantes',
            'Lille',
            'Strasbourg',
            'Montpellier',
            'Rennes',
            'Grenoble',
            'Dijon',
            'Angers',
            'Tours',
            'Clermont-Ferrand',
            'Le Havre',
            'Saint-Ã‰tienne',
            'Metz',
            'OrlÃ©ans',
        ];

        // === Textes par catÃ©gorie ===
        $samples = [
            'Cuisine' => [
                ['Cours de pÃ¢tisserie maison', 'Jâ€™enseigne les bases de la pÃ¢tisserie franÃ§aise : tartes, Ã©clairs et gÃ¢teaux.'],
                ['Atelier cuisine italienne', 'Apprenez Ã  prÃ©parer des pÃ¢tes fraÃ®ches et sauces authentiques.'],
                ['Repas vÃ©gÃ©tarien Ã©quilibrÃ©', 'Je propose de cuisiner des plats complets et savoureux sans viande.'],
                ['Cours de sushi maison', 'Initiez-vous Ã  lâ€™art du sushi et du maki japonais.'],
                ['Batch cooking pour la semaine', 'Organisation et prÃ©paration de repas Ã  lâ€™avance.'],
                ['Initiation aux Ã©pices', 'DÃ©couvrez comment utiliser les Ã©pices dans vos plats quotidiens.'],
            ],
            'Langues' => [
                ['Cours dâ€™anglais dÃ©butant', 'Apprentissage de vocabulaire et conversations simples.'],
                ['Conversation espagnole', 'Pratique de la langue espagnole autour de discussions.'],
                ['Initiation au japonais', 'Bases dâ€™Ã©criture et prononciation japonaise.'],
                ['FranÃ§ais pour Ã©trangers', 'Aide Ã  lâ€™apprentissage du franÃ§ais oral et Ã©crit.'],
                ['Cours dâ€™allemand pratique', 'Expression orale pour voyages et Ã©changes.'],
                ['PrÃ©paration TOEIC', 'Exercices pratiques et mÃ©thodologie pour lâ€™examen.'],
            ],
            'Informatique' => [
                ['DÃ©pannage PC Ã  domicile', 'RÃ©solution de problÃ¨mes Windows et installation logiciels.'],
                ['Cours initiation Word/Excel', 'DÃ©couverte des outils bureautiques.'],
                ['CrÃ©ation site web vitrine', 'Conception simple avec WordPress ou Symfony.'],
                ['Installation rÃ©seau domestique', 'Configuration Wi-Fi et partage fichiers.'],
                ['SÃ©curitÃ© informatique', 'Sensibilisation aux bonnes pratiques en ligne.'],
                ['Apprentissage Python', 'Bases de la programmation Python pas Ã  pas.'],
            ],
            'Bricolage' => [
                ['Montage de meubles IKEA', 'Je monte vos meubles rapidement et proprement.'],
                ['Peinture murale', 'Je repeins chambres et salons avec soin.'],
                ['Petites rÃ©parations', 'Je rÃ¨gle portes qui grincent et Ã©tagÃ¨res bancales.'],
                ['Installation luminaire', 'Pose de lustres et spots Ã©lectriques.'],
                ['Pose tringles rideaux', 'Fixation rideaux et barres solides.'],
                ['Assemblage Ã©tagÃ¨res', 'Pose et fixation de bibliothÃ¨ques ou Ã©tagÃ¨res.'],
            ],
            'Sport' => [
                ['Cours de yoga dÃ©butant', 'Postures simples et respiration guidÃ©e.'],
                ['EntraÃ®nement running', 'PrÃ©paration progressive Ã  un 10 km.'],
                ['Musculation Ã  domicile', 'SÃ©ances adaptÃ©es sans matÃ©riel complexe.'],
                ['Coaching fitness', 'Programme de remise en forme personnalisÃ©.'],
                ['Initiation boxe', 'Bases techniques et cardio boxing.'],
                ['Marche nordique', 'DÃ©couverte de la marche active en extÃ©rieur.'],
            ],
            'Art' => [
                ['Cours de dessin', 'Initiation aux techniques de croquis et ombrages.'],
                ['Peinture acrylique', 'Apprentissage des bases de la peinture moderne.'],
                ['Sculpture argile', 'Atelier pratique de modelage.'],
                ['Guitare acoustique', 'Cours pour apprendre accords et rythmes.'],
                ['Chant dÃ©butant', 'Exercices de respiration et diction.'],
                ['Photographie smartphone', 'AmÃ©liorer vos clichÃ©s au quotidien.'],
            ],
            'Juridique' => [
                ['Conseil en droit du travail', 'Informations sur contrats et licenciements.'],
                ['Aide rÃ©daction bail', 'Assistance pour rÃ©diger un contrat de location.'],
                ['Introduction au droit civil', 'Bases pour mieux comprendre ses droits.'],
                ['Questions succession', 'Explication des dÃ©marches principales.'],
                ['Droit de la consommation', 'Conseils sur litiges avec commerÃ§ants.'],
                ['Consultation juridique gÃ©nÃ©rale', 'Ã‰claircissements sur vos droits du quotidien.'],
            ],
            'Marketing' => [
                ['StratÃ©gie rÃ©seaux sociaux', 'CrÃ©ation dâ€™un plan Instagram/Facebook.'],
                ['SEO pour dÃ©butants', 'Optimisation dâ€™un site vitrine Google.'],
                ['Branding personnel', 'Travailler son image de marque en ligne.'],
                ['Email marketing', 'Introduction aux campagnes efficaces.'],
                ['PublicitÃ© Facebook Ads', 'CrÃ©er et gÃ©rer une campagne ciblÃ©e.'],
                ['Analyse Google Analytics', 'Suivi trafic et performances dâ€™un site.'],
            ],
            'Bien-Ãªtre' => [
                ['Massage relaxant', 'SÃ©ance dÃ©tente dâ€™1 heure pour relÃ¢cher le stress.'],
                ['Initiation mÃ©ditation', 'Apprendre techniques simples de mÃ©ditation.'],
                ['Sophrologie dÃ©couverte', 'Exercices pratiques de respiration guidÃ©e.'],
                ['Conseil sommeil', 'Techniques naturelles pour mieux dormir.'],
                ['Gestion stress', 'Atelier pratique pour rÃ©duire anxiÃ©tÃ©.'],
                ['Yoga doux', 'SÃ©ances accessibles pour tous les Ã¢ges.'],
            ],
            'Jardinage' => [
                ['Entretien pelouse', 'Je tonds, dÃ©sherbe et entretiens vos espaces verts.'],
                ['Taille haies', 'Je taille vos haies avec soin.'],
                ['Plantation fleurs', 'Je vous aide Ã  planter massifs et arbustes.'],
                ['Arrosage plantes', 'Service dâ€™arrosage rÃ©gulier de vos plantes.'],
                ['PrÃ©paration potager', 'Je prÃ©pare sol et semis pour lÃ©gumes.'],
                ['Ã‰lagage lÃ©ger', 'Coupe de branches basses et entretien arbres.'],
            ],
            'Ã‰ducation' => [
                ['Aide devoirs primaire', 'Soutien scolaire pour enfants en difficultÃ©.'],
                ['Cours maths collÃ¨ge', 'Explications claires pour progresser en maths.'],
                ['FranÃ§ais orthographe', 'AmÃ©liorer grammaire et orthographe.'],
                ['Soutien bac philo', 'PrÃ©paration aux Ã©preuves de philosophie.'],
                ['Cours histoire-gÃ©o', 'RÃ©visions interactives et cartes mentales.'],
                ['Anglais oral lycÃ©e', 'Pratique de conversation pour examens.'],
            ],
            'Administratif' => [
                ['Aide dÃ©marches CAF', 'Je vous guide dans vos demandes en ligne.'],
                ['Remplissage formulaires', 'Accompagnement administratif simple.'],
                ['CrÃ©ation CV moderne', 'Mise en page et conseils sur le fond.'],
                ['PrÃ©paration entretien', 'Simulation dâ€™entretien dâ€™embauche.'],
                ['DÃ©claration impÃ´ts', 'Accompagnement pour remplir en ligne.'],
                ['Gestion courrier', 'Tri, rÃ©ponses et classement de papiers.'],
            ],
        ];

        // === RÃ©cupÃ©rer Users et Categories ===
        $users = $manager->getRepository(User::class)->findAll();
        $categories = $manager->getRepository(Category::class)->findAll();

        foreach ($categories as $category) {
            $catName = $category->getName();
            if (!isset($samples[$catName])) {
                continue;
            }

            $slug = $slugger->slug($catName)->lower()->toString();

            // Associer toutes les images trouvÃ©es
            $imageFiles = glob(__DIR__ . "/../../public/uploads/listings/{$slug}/*.jpg");

            if (!$imageFiles) {
                continue;
            }

            // Associer chaque image Ã  un titre/description de la catÃ©gorie
            $samplePairs = $samples[$catName];
            $sampleCount = count($samplePairs);
            $idx = 0;
            foreach ($imageFiles as $file) {
                $filename = basename($file);
                // Utiliser un titre/description diffÃ©rent pour chaque image, ou boucler si plus d'images que de samples
                list($title, $description) = $samplePairs[$idx % $sampleCount];

                $listing = new Listing();
                $listing->setTitle($title);
                $listing->setDescription($description);
                $listing->setType(0 === $idx % 2 ? 'OFFER' : 'REQUEST');
                $listing->setLocation($cities[array_rand($cities)]);
                $listing->setStatus('PUBLISHED');
                $listing->setSlug((string) $slugger->slug($title . '-' . uniqid()));
                $listing->setAuthor($users[array_rand($users)]);
                $listing->setCategory($category);

                $image = new ListingImage();
                $image->setPath("{$slug}/{$filename}");
                $image->setIsPrimary(true); // premiÃ¨re = image principale
                $listing->addImage($image);
                $manager->persist($image);
                $manager->persist($listing);

                ++$idx;
            }
        }

        // â€¦ flush seulement aprÃ¨s TOUTES les boucles
        $manager->flush();
        echo "âœ… 72 annonces gÃ©nÃ©rÃ©es avec titres, descriptions, villes et images rÃ©alistes.\n";
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            CategoryFixtures::class,
        ];
    }
}
