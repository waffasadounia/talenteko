<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Listing;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class SearchController extends AbstractController
{
    /**
     * Page de recherche.
     * - Filtre sur titre / description / location / nom de catégorie
     * - Précharge auteur + catégorie pour éviter le N+1.
     */
    #[Route('/recherche', name: 'app_search', methods: ['GET'])]
    public function index(Request $request, ListingRepository $repo): Response
    {
        $q = trim((string) $request->query->get('q', ''));

        $qb = $repo->createQueryBuilder('l')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults(50);

        if ('' !== $q) {
            $qb->andWhere(
                'l.title LIKE :q OR l.description LIKE :q OR l.location LIKE :q OR c.name LIKE :q'
            )
            ->setParameter('q', '%' . $q . '%');
        }

        /** @var list<Listing> $results */
        $results = $qb->getQuery()->getResult();

        // Mapping vers tableau simple pour le template
        $cards = array_map(
            static function (Listing $l): array {
                return [
                    'id'          => $l->getId(),
                    'slug'        => $l->getSlug(),
                    'title'       => $l->getTitle(),
                    'description' => $l->getDescription(),
                    'category'    => $l->getCategory()?->getName() ?? 'Non classée',
                    'user'        => ['name' => $l->getAuthor()?->getDisplayName() ?? 'Membre'],
                    'location'    => $l->getLocation(),
                    'stars'       => (int) round($l->getAuthor()?->getRatingAvg() ?? 4),
                ];
            },
            $results,
        );

        return $this->render('search/index.html.twig', [
            'q'       => $q,
            'results' => $cards,
        ]);
    }
}
