<?php

declare(strict_types=1);

namespace App\Command;

use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Liip\ImagineBundle\Imagine\Filter\FilterManager;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Finder\Finder;

#[AsCommand(
    name: 'app:cache-images',
    description: 'Pré-génère le cache LiipImagine pour toutes les images dans /uploads/listings.'
)]
class CacheImagesCommand extends Command
{
    private CacheManager $cacheManager;
    private FilterManager $filterManager;

    public function __construct(CacheManager $cacheManager, FilterManager $filterManager)
    {
        parent::__construct();
        $this->cacheManager = $cacheManager;
        $this->filterManager = $filterManager;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $publicDir = __DIR__ . '/../../public/uploads/listings';
        $filters = ['annonce_card', 'annonce_show', 'avatar_thumb'];

        $finder = new Finder();
        $finder->files()->in($publicDir)->name('*.jpg');

        if (!$finder->hasResults()) {
            $output->writeln("<comment>Aucune image trouvée dans $publicDir</comment>");
            return Command::SUCCESS;
        }

        foreach ($finder as $file) {
            // Chemin relatif à /public
            $relativePath = 'uploads/listings/' . $file->getRelativePathname();

            foreach ($filters as $filter) {
                try {
                    $this->cacheManager->remove($relativePath, $filter); // reset éventuel
                    $this->cacheManager->getBrowserPath($relativePath, $filter);
                    $output->writeln("✅ [$filter] généré pour $relativePath");
                } catch (\Exception $e) {
                    $output->writeln("<error>❌ [$filter] échec sur $relativePath : {$e->getMessage()}</error>");
                }
            }
        }

        $output->writeln("<info>🎉 Toutes les images ont été traitées avec succès.</info>");
        return Command::SUCCESS;
    }
}
