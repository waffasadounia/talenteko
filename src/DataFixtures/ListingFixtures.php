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

        // === Villes franÃƒÂ§aises rÃƒÂ©alistes ===
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
            'Saint-Ãƒâ€°tienne',
            'Metz',
            'OrlÃƒÂ©ans',
        ];

        // === Textes par catÃƒÂ©gorie ===
        $samples = [
            'Cuisine' => [
                ['Cours de pÃƒÂ¢tisserie maison', 'JÃ¢â‚¬â„¢enseigne les bases de la pÃƒÂ¢tisserie franÃƒÂ§aise : tartes, ÃƒÂ©clairs et gÃƒÂ¢teaux.'],
                ['Atelier cuisine italienne', 'Apprenez ÃƒÂ  prÃƒÂ©parer des pÃƒÂ¢tes fraÃƒÂ®ches et sauces authentiques.'],
                ['Repas vÃƒÂ©gÃƒÂ©tarien ÃƒÂ©quilibrÃƒÂ©', 'Je propose de cuisiner des plats complets et savoureux sans viande.'],
                ['Cours de sushi maison', 'Initiez-vous ÃƒÂ  lÃ¢â‚¬â„¢art du sushi et du maki japonais.'],
                ['Batch cooking pour la semaine', 'Organisation et prÃƒÂ©paration de repas ÃƒÂ  lÃ¢â‚¬â„¢avance.'],
                ['Initiation aux ÃƒÂ©pices', 'DÃƒÂ©couvrez comment utiliser les ÃƒÂ©pices dans vos plats quotidiens.'],
            ],
            'Langues' => [
                ['Cours dÃ¢â‚¬â„¢anglais dÃƒÂ©butant', 'Apprentissage de vocabulaire et conversations simples.'],
                ['Conversation espagnole', 'Pratique de la langue espagnole autour de discussions.'],
                ['Initiation au japonais', 'Bases dÃ¢â‚¬â„¢ÃƒÂ©criture et prononciation japonaise.'],
                ['FranÃƒÂ§ais pour ÃƒÂ©trangers', 'Aide ÃƒÂ  lÃ¢â‚¬â„¢apprentissage du franÃƒÂ§ais oral et ÃƒÂ©crit.'],
                ['Cours dÃ¢â‚¬â„¢allemand pratique', 'Expression orale pour voyages et ÃƒÂ©changes.'],
                ['PrÃƒÂ©paration TOEIC', 'Exercices pratiques et mÃƒÂ©thodologie pour lÃ¢â‚¬â„¢examen.'],
            ],
            'Informatique' => [
                ['DÃƒÂ©pannage PC ÃƒÂ  domicile', 'RÃƒÂ©solution de problÃƒÂ¨mes Windows et installation logiciels.'],
                ['Cours initiation Word/Excel', 'DÃƒÂ©couverte des outils bureautiques.'],
                ['CrÃƒÂ©ation site web vitrine', 'Conception simple avec WordPress ou Symfony.'],
                ['Installation rÃƒÂ©seau domestique', 'Configuration Wi-Fi et partage fichiers.'],
                ['SÃƒÂ©curitÃƒÂ© informatique', 'Sensibilisation aux bonnes pratiques en ligne.'],
                ['Apprentissage Python', 'Bases de la programmation Python pas ÃƒÂ  pas.'],
            ],
            'Bricolage' => [
                ['Montage de meubles IKEA', 'Je monte vos meubles rapidement et proprement.'],
                ['Peinture murale', 'Je repeins chambres et salons avec soin.'],
                ['Petites rÃƒÂ©parations', 'Je rÃƒÂ¨gle portes qui grincent et ÃƒÂ©tagÃƒÂ¨res bancales.'],
                ['Installation luminaire', 'Pose de lustres et spots ÃƒÂ©lectriques.'],
                ['Pose tringles rideaux', 'Fixation rideaux et barres solides.'],
                ['Assemblage ÃƒÂ©tagÃƒÂ¨res', 'Pose et fixation de bibliothÃƒÂ¨ques ou ÃƒÂ©tagÃƒÂ¨res.'],
            ],
            'Sport' => [
                ['Cours de yoga dÃƒÂ©butant', 'Postures simples et respiration guidÃƒÂ©e.'],
                ['EntraÃƒÂ®nement running', 'PrÃƒÂ©paration progressive ÃƒÂ  un 10 km.'],
                ['Musculation ÃƒÂ  domicile', 'SÃƒÂ©ances adaptÃƒÂ©es sans matÃƒÂ©riel complexe.'],
                ['Coaching fitness', 'Programme de remise en forme personnalisÃƒÂ©.'],
                ['Initiation boxe', 'Bases techniques et cardio boxing.'],
                ['Marche nordique', 'DÃƒÂ©couverte de la marche active en extÃƒÂ©rieur.'],
            ],
            'Art' => [
                ['Cours de dessin', 'Initiation aux techniques de croquis et ombrages.'],
                ['Peinture acrylique', 'Apprentissage des bases de la peinture moderne.'],
                ['Sculpture argile', 'Atelier pratique de modelage.'],
                ['Guitare acoustique', 'Cours pour apprendre accords et rythmes.'],
                ['Chant dÃƒÂ©butant', 'Exercices de respiration et diction.'],
                ['Photographie smartphone', 'AmÃƒÂ©liorer vos clichÃƒÂ©s au quotidien.'],
            ],
            'Juridique' => [
                ['Conseil en droit du travail', 'Informations sur contrats et licenciements.'],
                ['Aide rÃƒÂ©daction bail', 'Assistance pour rÃƒÂ©diger un contrat de location.'],
                ['Introduction au droit civil', 'Bases pour mieux comprendre ses droits.'],
                ['Questions succession', 'Explication des dÃƒÂ©marches principales.'],
                ['Droit de la consommation', 'Conseils sur litiges avec commerÃƒÂ§ants.'],
                ['Consultation juridique gÃƒÂ©nÃƒÂ©rale', 'Ãƒâ€°claircissements sur vos droits du quotidien.'],
            ],
            'Marketing' => [
                ['StratÃƒÂ©gie rÃƒÂ©seaux sociaux', 'CrÃƒÂ©ation dÃ¢â‚¬â„¢un plan Instagram/Facebook.'],
                ['SEO pour dÃƒÂ©butants', 'Optimisation dÃ¢â‚¬â„¢un site vitrine Google.'],
                ['Branding personnel', 'Travailler son image de marque en ligne.'],
                ['Email marketing', 'Introduction aux campagnes efficaces.'],
                ['PublicitÃƒÂ© Facebook Ads', 'CrÃƒÂ©er et gÃƒÂ©rer une campagne ciblÃƒÂ©e.'],
                ['Analyse Google Analytics', 'Suivi trafic et performances dÃ¢â‚¬â„¢un site.'],
            ],
            'Bien-ÃƒÂªtre' => [
                ['Massage relaxant', 'SÃƒÂ©ance dÃƒÂ©tente dÃ¢â‚¬â„¢1 heure pour relÃƒÂ¢cher le stress.'],
                ['Initiation mÃƒÂ©ditation', 'Apprendre techniques simples de mÃƒÂ©ditation.'],
                ['Sophrologie dÃƒÂ©couverte', 'Exercices pratiques de respiration guidÃƒÂ©e.'],
                ['Conseil sommeil', 'Techniques naturelles pour mieux dormir.'],
                ['Gestion stress', 'Atelier pratique pour rÃƒÂ©duire anxiÃƒÂ©tÃƒÂ©.'],
                ['Yoga doux', 'SÃƒÂ©ances accessibles pour tous les ÃƒÂ¢ges.'],
            ],
            'Jardinage' => [
                ['Entretien pelouse', 'Je tonds, dÃƒÂ©sherbe et entretiens vos espaces verts.'],
                ['Taille haies', 'Je taille vos haies avec soin.'],
                ['Plantation fleurs', 'Je vous aide ÃƒÂ  planter massifs et arbustes.'],
                ['Arrosage plantes', 'Service dÃ¢â‚¬â„¢arrosage rÃƒÂ©gulier de vos plantes.'],
                ['PrÃƒÂ©paration potager', 'Je prÃƒÂ©pare sol et semis pour lÃƒÂ©gumes.'],
                ['Ãƒâ€°lagage lÃƒÂ©ger', 'Coupe de branches basses et entretien arbres.'],
            ],
            'Ãƒâ€°ducation' => [
                ['Aide devoirs primaire', 'Soutien scolaire pour enfants en difficultÃƒÂ©.'],
                ['Cours maths collÃƒÂ¨ge', 'Explications claires pour progresser en maths.'],
                ['FranÃƒÂ§ais orthographe', 'AmÃƒÂ©liorer grammaire et orthographe.'],
                ['Soutien bac philo', 'PrÃƒÂ©paration aux ÃƒÂ©preuves de philosophie.'],
                ['Cours histoire-gÃƒÂ©o', 'RÃƒÂ©visions interactives et cartes mentales.'],
                ['Anglais oral lycÃƒÂ©e', 'Pratique de conversation pour examens.'],
            ],
            'Administratif' => [
                ['Aide dÃƒÂ©marches CAF', 'Je vous guide dans vos demandes en ligne.'],
                ['Remplissage formulaires', 'Accompagnement administratif simple.'],
                ['CrÃƒÂ©ation CV moderne', 'Mise en page et conseils sur le fond.'],
                ['PrÃƒÂ©paration entretien', 'Simulation dÃ¢â‚¬â„¢entretien dÃ¢â‚¬â„¢embauche.'],
                ['DÃƒÂ©claration impÃƒÂ´ts', 'Accompagnement pour remplir en ligne.'],
                ['Gestion courrier', 'Tri, rÃƒÂ©ponses et classement de papiers.'],
            ],
        ];

        // === RÃƒÂ©cupÃƒÂ©rer Users et Categories ===
        $users = $manager->getRepository(User::class)->findAll();
        $categories = $manager->getRepository(Category::class)->findAll();

        foreach ($categories as $category) {
            $catName = $category->getName();
            if (!isset($samples[$catName])) {
                continue;
            }

            $slug = $slugger->slug($catName)->lower()->toString();

            // Associer toutes les images trouvÃƒÂ©es
            $imageFiles = glob(__DIR__ . "/../../public/uploads/listings/{$slug}/*.jpg");

            if (!$imageFiles) {
                continue;
            }

            // Associer chaque image ÃƒÂ  un titre/description de la catÃƒÂ©gorie
            $samplePairs = $samples[$catName];
            $sampleCount = count($samplePairs);
            $idx = 0;
            foreach ($imageFiles as $file) {
                $filename = basename($file);
                // Utiliser un titre/description diffÃƒÂ©rent pour chaque image, ou boucler si plus d'images que de samples
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
                $image->setIsPrimary(true); // premiÃƒÂ¨re = image principale
                $listing->addImage($image);
                $manager->persist($image);
                $manager->persist($listing);

                ++$idx;
            }
        }

        // Ã¢â‚¬Â¦ flush seulement aprÃƒÂ¨s TOUTES les boucles
        $manager->flush();
        echo "Ã¢Å“â€¦ 72 annonces gÃƒÂ©nÃƒÂ©rÃƒÂ©es avec titres, descriptions, villes et images rÃƒÂ©alistes.\n";
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            CategoryFixtures::class,
        ];
    }
}

