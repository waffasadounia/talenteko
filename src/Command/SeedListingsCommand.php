<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\Category;
use App\Entity\Listing;
use App\Entity\ListingImage;
use App\Entity\User;
use App\Enum\ListingStatus;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * Commande Symfony pour insérer un dataset massif (~100 annonces).
 */
#[AsCommand(
    name: 'app:seed-listings',
    description: 'Insère ~100 annonces génériques pour tests et démo'
)]
final class SeedListingsCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $em,
    ) {
        parent::__construct();
    }
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $slugger = new AsciiSlugger();

        // Récupération des catégories et utilisateurs
        $categories = $this->em->getRepository(Category::class)->findAll();
        $users = $this->em->getRepository(User::class)->findAll();

        // On exclut l'admin
        $regularUsers = array_filter(
            $users,
            fn(User $u) => !\in_array('ROLE_ADMIN', $u->getRoles(), true)
        );
        if (empty($categories) || empty($regularUsers)) {
            $output->writeln('<error>Impossible de générer : pas de catégories ou d’utilisateurs disponibles.</error>');

            return Command::FAILURE;
        }

        // --- Génération des 100 annonces ---
        for ($i = 1; $i <= 100; ++$i) {
            $title = "Annonce démo #$i";
            $description = 'Ceci est une annonce générée automatiquement pour démonstration.';
            $listing = new Listing();
            $listing
                ->setTitle($title)
                ->setDescription($description)
                ->setType(random_int(0, 1) ? 'OFFER' : 'REQUEST')
                ->setLocation('Ville démo #' . random_int(1, 50))
                ->setStatus(ListingStatus::PUBLISHED)
                ->setSlug((string) $slugger->slug($title . '-' . uniqid()))
                ->setAuthor($regularUsers[array_rand($regularUsers)])
                ->setCategory($categories[array_rand($categories)]);

            // Image placeholder
            $image = new ListingImage();
            $image
                ->setPath('placeholderTE.png')
                ->setIsPrimary(true);

            $listing->addImage($image);
            $this->em->persist($image);
            $this->em->persist($listing);
        }
        $this->em->flush();
        $output->writeln('<info>✔ 100 annonces génériques ont été insérées avec succès.</info>');
        return Command::SUCCESS;
    }
}
