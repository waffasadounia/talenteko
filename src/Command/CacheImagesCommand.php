<?php

declare(strict_types=1);

namespace App\Command;

use Exception;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Finder\Finder;

#[AsCommand(
    name: 'app:cache-images',
    description: 'PrÃ©- gÃ©nÃ©rÃ© le cache LiipImagine pour toutes les images dans /uploads/listings.',
)]
class CacheImagesCommand extends Command
{
    private CacheManager $cacheManager;

    public function __construct(CacheManager $cacheManager)
    {
        parent::__construct();
        $this->cacheManager = $cacheManager;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $publicDir = __DIR__ . '/../../public/uploads/listings';
        $filters = ['listing_card', 'listing_show', 'avatar_thumb'];

        $finder = new Finder();
        $finder->files()->in($publicDir)->name('*.jpg');

        if (!$finder->hasResults()) {
            $output->writeln("<comment>Aucune image trouvÃ©e dans $publicDir</comment>");

            return Command::SUCCESS;
        }

        foreach ($finder as $file) {
            // Chemin relatif Ã  /public
            $relativePath = 'uploads/listings/' . $file->getRelativePathname();

            foreach ($filters as $filter) {
                try {
                    $this->cacheManager->remove($relativePath, $filter); // reset Ã©ventuel
                    $this->cacheManager->getBrowserPath($relativePath, $filter);
                    $output->writeln("âœ” [$filter] gÃ©nÃ©rÃ© pour $relativePath");
                } catch (Exception $e) {
                    $output->writeln("<error>âœ– [$filter] Ã©chec sur $relativePath : {$e->getMessage()}</error>");
                }
            }
        }

        $output->writeln('<info>âœ” Toutes les images ont Ã©tÃ© traitÃ©es avec succÃ¨s.</info>');

        return Command::SUCCESS;
    }
}
