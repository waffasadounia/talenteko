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
            $user->setEmail("user{$u}@example.com");
            $user->setPassword($this->hasher->hashPassword($user, 'Password123!'));
            $user->setPseudo($faker->firstName());
            $user->setLocation($faker->randomElement($cities));
            // avatarPath/rating facultatifs
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

                // // Exemple si je veux créer des images :
                // $image = (new ListingImage())
                //     ->setPath('/images/placeholder.png')
                //     ->setIsPrimary(true)
                //     ->setListing($listing);
                // $em->persist($image);

                $em->persist($listing);
            }
        }

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
}
