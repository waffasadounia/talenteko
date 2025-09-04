<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Category;
use App\Entity\Listing;
// use App\Entity\ListingImage; // à activer si tu veux créer des images
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

final class AppFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $hasher) {}

    public function load(ObjectManager $em): void
    {
        $faker = FakerFactory::create('fr_FR');

        // --- Catégories ---
        $catNames = [
            'Bricolage','Bien-être','Jardinage','Éducation','Informatique',
            'Langues','Art','Marketing','Administratif','Juridique'
        ];
        $categories = [];
        foreach ($catNames as $name) {
            $cat = (new Category())
                ->setName($name)
                ->setSlug($this->slugify($name));
            $em->persist($cat);
            $categories[] = $cat;
        }

        // --- Users + Annonces ---
        $cities = ['Paris','Lyon','Marseille','Bordeaux','Toulouse','Lille','Nantes','Rennes'];
        $titles = [
            'Cours de guitare', 'Cours d’anglais', 'Montage PC', 'Coaching sportif',
            'Soutien scolaire', 'Jardinage à domicile', 'Cours de dessin', 'Traduction de documents'
        ];

        for ($u = 1; $u <= 8; $u++) {
            $user = new User();

            // Email en lowercase (cohérent avec setEmail())
            $email = sprintf('user%d@example.com', $u);
            $user->setEmail($email);
            $user->setPassword($this->hasher->hashPassword($user, 'Password123!'));

            // Nouveaux champs profil
            $user
                ->setPseudo($faker->firstName())                 // ancien firstname
                ->setLocation($faker->randomElement($cities))     // ancien city
                ->setBio($faker->sentence(12))
                ->setSkillsOffered($this->randomSkills())
                ->setSkillsWanted($this->randomSkills());
                // ->setAvatarFilename(null); // upload géré côté profil

            $em->persist($user);

            $nbListings = random_int(4, 5);
            for ($i = 0; $i < $nbListings; $i++) {
                $title = $faker->randomElement($titles);
                $cat   = $faker->randomElement($categories);
                $city  = $faker->randomElement($cities);

                $listing = (new Listing())
                    ->setTitle($title)
                    ->setSlug($this->slugify($title) . '-' . substr(uniqid('', true), -6))
                    ->setDescription($faker->paragraphs(random_int(2, 4), true))
                    ->setType($faker->boolean() ? 'OFFER' : 'REQUEST')
                    ->setStatus('PUBLISHED')
                    ->setCity($city)
                    ->setAuthor($user)
                    ->setCategory($cat);

                // // Exemple si tu veux créer des images :
                // $image = (new ListingImage())
                //     ->setPath('/images/placeholder.png')
                //     ->setIsPrimary(true)
                //     ->setListing($listing);
                // $em->persist($image);

                $em->persist($listing);
            }
        }

        // Admin de démo
        $admin = (new User())
            ->setEmail('admin@talenteko.test')
            ->setRoles(['ROLE_ADMIN'])
            ->setPseudo('Admin')
            ->setLocation('Paris')
            ->setBio('Admin de TalentÉkô.');
        $admin->setPassword($this->hasher->hashPassword($admin, 'Admin!2025'));
        $em->persist($admin);

        $em->flush();
    }

    private function slugify(string $text): string
    {
        $text = preg_replace('~[^\pL\d]+~u', '-', $text);
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        $text = preg_replace('~[^-\w]+~', '', $text);
        $text = trim($text, '-');
        $text = preg_replace('~-+~', '-', $text);
        $text = strtolower($text);
        return $text !== '' ? $text : 'n-a';
    }

    /**
     * Renvoie un petit set de compétences (array) ou null pour varier.
     * Stocké en JSON via Doctrine (colonne JSON nullable).
     */
    private function randomSkills(): ?array
    {
        $pool = [
            'guitare','anglais','montage pc','coaching','soutien scolaire',
            'jardinage','dessin','traduction','wordpress','excel'
        ];
        if (random_int(0, 2) === 0) {
            return null; // 1/3 de chance d'absence de données
        }
        shuffle($pool);
        return array_slice($pool, 0, random_int(2, 4));
    }
}
