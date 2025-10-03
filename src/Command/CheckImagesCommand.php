<?php

declare(strict_types=1);

namespace App\Command;

use App\Repository\CategoryRepository;
use App\Repository\ListingRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Filesystem\Filesystem;

/**
 * Vérifie la présence des images (catégories + listings)
 * et signale les manquantes ou remplacées par des fallbacks.
 */
#[AsCommand(
    name: 'app:check-images',
    description: 'Vérifie la présence des images pour les catégories et listings.',
)]
final class CheckImagesCommand extends Command
{
    public function __construct(
        private readonly CategoryRepository $categoryRepository,
        private readonly ListingRepository $listingRepository,
        #[Autowire(param: 'kernel.project_dir')] private readonly string $projectDir,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $fs = new Filesystem();

        $publicPath = $this->projectDir.'/public';

        $errors = [];

        // 1) Vérifier les catégories
        $io->section('Catégories');
        foreach ($this->categoryRepository->findAll() as $category) {
            $base = $publicPath.'/images/categories/'.$category->getSlug();
            $expectedPng = $base.'.png';
            $expectedWebp = $base.'.webp';

            if (!$fs->exists($expectedPng) && !$fs->exists($expectedWebp)) {
                $errors[] = "❌ Catégorie {$category->getSlug()} manquante.";
            } else {
                $io->writeln("✔ {$category->getSlug()} OK");
            }
        }

        // 2) Vérifier les listings
        $io->section('Listings');
        foreach ($this->listingRepository->findAll() as $listing) {
            if ($listing->getImages()->isEmpty()) {
                $io->note("Listing {$listing->getId()} ({$listing->getTitle()}) sans image → placeholder utilisé.");
                continue;
            }

            foreach ($listing->getImages() as $image) {
                $expected = $publicPath.'/uploads/listings/'.$listing->getCategory()->getSlug().'/'.$image->getPath();

                if (!$fs->exists($expected) && !str_starts_with($image->getPath(), 'http')) {
                    $errors[] = "❌ Listing {$listing->getId()} image manquante : {$expected}";
                } else {
                    $io->writeln("✔ Listing {$listing->getId()} → {$image->getPath()}");
                }
            }
        }

        // 3) Résumé
        $io->section('Résumé');
        if (empty($errors)) {
            $io->success('Toutes les images sont présentes ou un fallback est disponible.');

            return Command::SUCCESS;
        }

        $io->error("Images manquantes détectées :\n".implode("\n", $errors));

        return Command::FAILURE;
    }
}
