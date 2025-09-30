<?php

declare(strict_types=1);

namespace App\Command;

use App\Utils\ImageFilters;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Finder\Finder;
use Throwable;

/**
 * Commande Symfony pour préchauffer toutes les variantes LiipImagine
 * sur les images présentes dans /public/uploads/listings.
 */
#[AsCommand(
    name: 'app:warmup-images',
    description: 'Préchauffe toutes les variantes LiipImagine pour les images de démonstration',
)]
final class WarmupImagesCommand extends Command
{
    public function __construct(
        private readonly CacheManager $cacheManager,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $uploadDir = __DIR__ . '/../../public/uploads/listings';

        $finder = new Finder();
        $finder->files()
            ->in($uploadDir)
            ->name('*.{jpg,jpeg,png}');

        if (!$finder->hasResults()) {
            $io->warning("Aucune image trouvée dans $uploadDir");

            return Command::SUCCESS;
        }

        $io->section('Préparation des images');
        foreach ($finder as $file) {
            // chemin relatif portable
            $relativePath = 'uploads/listings/' . str_replace('\\', '/', $file->getRelativePathname());
            $io->text("➡️ $relativePath");

            foreach (ImageFilters::LIST as $filter) {
                try {
                    $this->cacheManager->generateUrl($relativePath, $filter);
                    $io->writeln("   <info>✔ $filter OK</info>");
                } catch (Throwable $e) {
                    $io->error("   ❌ $filter échoué : " . $e->getMessage());
                }
            }
        }

        $io->success('Warmup terminé ! Toutes les variantes d’images ont été générées.');

        return Command::SUCCESS;
    }
}
