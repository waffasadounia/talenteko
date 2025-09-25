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
    description: 'VÃƒÂ©rifie la prÃƒÂ©sence des images pour les catÃƒÂ©gories et listings',
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

        // 1) VÃƒÂ©rifier les catÃƒÂ©gories
        $io->section('CatÃƒÂ©gories');
        foreach ($this->categoryRepository->findAll() as $category) {
            $expected = $publicPath . '/images/categories/' . $category->getSlug() . '.png';
            if (!$fs->exists($expected)) {
                $errors[] = "CatÃƒÂ©gorie {$category->getSlug()} Ã¢â€ â€™ image manquante, fallback utilisÃƒÂ©.";
                $io->warning("Ã¢Å¡Â Ã¯Â¸Â {$category->getSlug()} Ã¢â€ â€™ image manquante");
            } else {
                $io->success("Ã¢Å“â€Ã¯Â¸Â {$category->getSlug()} OK");
            }
        }

        // 2) VÃƒÂ©rifier les listings
        $io->section('Listings');
        foreach ($this->listingRepository->findAll() as $listing) {
            if ($listing->getImages()->isEmpty()) {
                $io->note("Listing {$listing->getId()} ({$listing->getTitle()}) Ã¢â€ â€™ pas dÃ¢â‚¬â„¢image, placeholder utilisÃƒÂ©.");
                continue;
            }
            foreach ($listing->getImages() as $image) {
                $expected = $publicPath . '/uploads/listings/' . $listing->getCategory()->getSlug() . '/' . $image->getPath();
                if (!$fs->exists($expected)) {
                    $errors[] = "Listing {$listing->getId()} Ã¢â€ â€™ image manquante : {$expected}";
                    $io->error("Ã¢ÂÅ’ {$expected} manquant");
                } else {
                    $io->success("Ã¢Å“â€Ã¯Â¸Â Listing {$listing->getId()} image OK : {$image->getPath()}");
                }
            }
        }

        // 3) RÃƒÂ©sumÃƒÂ©
        $io->section('RÃƒÂ©sumÃƒÂ©');
        if (empty($errors)) {
            $io->success('Toutes les images sont prÃƒÂ©sentes ou fallback disponible Ã¢Å“â€Ã¯Â¸Â');

            return Command::SUCCESS;
        }

        $io->error('ProblÃƒÂ¨mes dÃƒÂ©tectÃƒÂ©s :');
        foreach ($errors as $err) {
            $io->writeln("- $err");
        }

        return Command::FAILURE;
    }
}

// utilisation: php bin/console app:check-images

