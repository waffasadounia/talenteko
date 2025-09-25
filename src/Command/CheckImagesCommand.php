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
use Symfony\Component\Filesystem\Filesystem;

#[AsCommand(
    name: 'app:check-images',
    description: 'VÃ©rifie la prÃ©sence des images pour les catÃ©gories et listings',
)]
class CheckImagesCommand extends Command
{
    public function __construct(
        private readonly CategoryRepository $categoryRepository,
        private readonly ListingRepository $listingRepository,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $fs = new Filesystem();

        $publicPath = __DIR__ . '/../../public';

        $errors = [];

        // 1) VÃ©rifier les catÃ©gories
        $io->section('CatÃ©gories');
        foreach ($this->categoryRepository->findAll() as $category) {
            $expected = $publicPath . '/images/categories/' . $category->getSlug() . '.png';
            if (!$fs->exists($expected)) {
                $errors[] = "CatÃ©gorie {$category->getSlug()} â†’ image manquante, fallback utilisÃ©.";
                $io->warning("âš ï¸ {$category->getSlug()} â†’ image manquante");
            } else {
                $io->success("âœ”ï¸ {$category->getSlug()} OK");
            }
        }

        // 2) VÃ©rifier les listings
        $io->section('Listings');
        foreach ($this->listingRepository->findAll() as $listing) {
            if ($listing->getImages()->isEmpty()) {
                $io->note("Listing {$listing->getId()} ({$listing->getTitle()}) â†’ pas dâ€™image, placeholder utilisÃ©.");
                continue;
            }
            foreach ($listing->getImages() as $image) {
                $expected = $publicPath . '/uploads/listings/' . $listing->getCategory()->getSlug() . '/' . $image->getPath();
                if (!$fs->exists($expected)) {
                    $errors[] = "Listing {$listing->getId()} â†’ image manquante : {$expected}";
                    $io->error("âŒ {$expected} manquant");
                } else {
                    $io->success("âœ”ï¸ Listing {$listing->getId()} image OK : {$image->getPath()}");
                }
            }
        }

        // 3) RÃ©sumÃ©
        $io->section('RÃ©sumÃ©');
        if (empty($errors)) {
            $io->success('Toutes les images sont prÃ©sentes ou fallback disponible âœ”ï¸');

            return Command::SUCCESS;
        }

        $io->error('ProblÃ¨mes dÃ©tectÃ©s :');
        foreach ($errors as $err) {
            $io->writeln("- $err");
        }

        return Command::FAILURE;
    }
}

// utilisation: php bin/console app:check-images
