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
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * Corrige automatiquement les slugs des catégories
 * en les recalculant à partir de leur nom (accents, espaces, etc.).
 */
#[AsCommand(
    name: 'app:fix-category-slugs',
    description: 'Corrige automatiquement les slugs des catégories depuis leur nom.',
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
        $io = new SymfonyStyle($input, $output);
        $categories = $this->categoryRepository->findAll();
        $updated = 0;

        $io->section('Vérification des slugs de catégories');

        foreach ($categories as $category) {
            if (!$category instanceof Category) {
                continue;
            }

            // Recalcul du slug correct depuis le nom
            $correctSlug = strtolower((string) $this->slugger->slug($category->getName()));

            if ($category->getSlug() !== $correctSlug) {
                $io->warning(sprintf(
                    '⚠️ Catégorie "%s" (id %d) : slug corrigé "%s" → "%s"',
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
            $io->success("✅ $updated slugs corrigés !");
        } else {
            $io->success('👌 Tous les slugs sont déjà corrects.');
        }

        return Command::SUCCESS;
    }
}
