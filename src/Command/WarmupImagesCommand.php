<?php

namespace App\Command;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Finder\Finder;

#[AsCommand(
    name: 'app:warmup-images',
    description: 'Pré-génère toutes les variantes LiipImagine pour les images de démonstration',
)]
class WarmupImagesCommand extends Command
{
    public function __construct(
        private CacheManager $cacheManager
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $uploadDir = __DIR__ . '/../../public/uploads/listings';
        $filters = ['listing_card', 'listing_show', 'avatar_thumb'];

        $finder = new Finder();
        $finder->files()->in($uploadDir)->name('*.jpg');

        foreach ($finder as $file) {
            $relativePath = str_replace($uploadDir, '', $file->getPathname());
            $relativePath = '/uploads/listings' . str_replace('\\', '/', $relativePath);

            $output->writeln("→ Génération : $relativePath");

            foreach ($filters as $filter) {
                $this->cacheManager->generateUrl($relativePath, $filter);
                $output->writeln("   - $filter OK");
            }
        }

        $output->writeln("✅ Warmup terminé !");
        return Command::SUCCESS;
    }
}
