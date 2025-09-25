<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

#[AsCommand(
    name: 'app:fix-category-slugs',
    description: 'Corrige automatiquement les slugs de catÃ©gories en recalculant depuis le nom (UTF-8, accents, etc.)',
)]
final class FixCategorySlugsCommand extends Command
{
    public function __construct(
        private readonly CategoryRepository $categoryRepository,
        private readonly EntityManagerInterface $em,
        private readonly SluggerInterface $slugger,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $categories = $this->categoryRepository->findAll();
        $updated = 0;

        foreach ($categories as $category) {
            if (!$category instanceof Category) {
                continue;
            }

            // Recalcule le slug depuis le nom
            $correctSlug = strtolower((string) $this->slugger->slug($category->getName()));

            if ($category->getSlug() !== $correctSlug) {
                $output->writeln(sprintf(
                    'ðŸ› ï¸  CatÃ©gorie "%s" (id: %d) : slug "%s" â†’ corrigÃ© en "%s"',
                    $category->getName(),
                    $category->getId(),
                    $category->getSlug(),
                    $correctSlug,
                ));

                $category->setSlug($correctSlug);
                ++$updated;
            }

        }

        if ($updated > 0) {
            $this->em->flush();
            $output->writeln("âœ”ï¸ $updated slugs corrigÃ©s !");
        } else {
            $output->writeln('ðŸ†— Aucun slug incorrect trouvÃ©.');
        }

        return Command::SUCCESS;
    }
}
