<?php

declare(strict_types=1);

namespace App\Command;

use App\Utils\ImageFilters;
use Exception;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Finder\Finder;

/**
 * Commande Symfony pour rafraîchir le cache LiipImagine
 * sur toutes les images présentes dans /public/uploads/listings.
 */
#[AsCommand(
    name: 'app:cache-images',
    description: 'Rafraîchir le cache LiipImagine pour toutes les images dans /uploads/listings.',
)]
final class CacheImagesCommand extends Command
{
    public function __construct(
        private readonly CacheManager $cacheManager,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $publicDir = __DIR__ . '/../../public/uploads/listings';

        $finder = new Finder();
        $finder->files()
            ->in($publicDir)
            ->name('*.{jpg,jpeg,png}');

        if (!$finder->hasResults()) {
            $io->warning("Aucune image trouvée dans $publicDir");
            return Command::SUCCESS;
        }

        $io->section('Rafraîchissement du cache LiipImagine');
        foreach ($finder as $file) {
            $relativePath = 'uploads/listings/' . str_replace('\\', '/', $file->getRelativePathname());
            $io->text("➡️ $relativePath");

            foreach (ImageFilters::LIST as $filter) {
                try {
                    $this->cacheManager->remove($relativePath, $filter); // reset cache
                    $this->cacheManager->getBrowserPath($relativePath, $filter);
                    $io->writeln("   <info>✔ $filter régénéré</info>");
                } catch (Exception $e) {
                    $io->error("   ❌ $filter échoué : " . $e->getMessage());
                }
            }
        }

        $io->success('Cache images régénéré pour toutes les variantes.');
        return Command::SUCCESS;
    }
}
