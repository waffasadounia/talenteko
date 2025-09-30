<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\ListingImage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Corrige les chemins d’images en ne gardant que le nom de fichier.
 * Exemple : "uploads/listings/cuisine/img1.jpg" → "img1.jpg"
 */
#[AsCommand(
    name: 'app:fix-image-paths',
    description: 'Nettoie les chemins des images pour ne garder que le nom du fichier (ex: 1.jpg).',
)]
final class FixImagePathsCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $em,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $repo = $this->em->getRepository(ListingImage::class);

        $images = $repo->findAll();
        $count = 0;

        foreach ($images as $image) {
            $path = $image->getPath();

            if (str_contains($path, '/')) {
                $parts = explode('/', $path);
                $filename = end($parts);

                $image->setPath($filename);
                ++$count;

                $io->writeln("➡️ Corrigé : $path → $filename");
            }
        }

        if ($count > 0) {
            $this->em->flush();
            $io->success("$count chemins d'images corrigés.");
        } else {
            $io->success("Aucun chemin d’image à corriger.");
        }

        return Command::SUCCESS;
    }
}
