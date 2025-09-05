<?php

namespace App\Controller;

use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    #[Route('/recherche', name: 'app_search')]
    public function index(Request $req, ListingRepository $repo): Response
    {
        $q = trim((string) $req->query->get('q', ''));

        $qb = $repo->createQueryBuilder('l')
            ->leftJoin('l.category','c')->addSelect('c')
            ->leftJoin('l.author','a')->addSelect('a')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults(50);

        if ($q !== '') {
            $qb->andWhere('l.title LIKE :q OR l.description LIKE :q OR l.city LIKE :q OR c.name LIKE :q')
               ->setParameter('q', '%'.$q.'%');
        }

        $results = $qb->getQuery()->getResult();

        // Adapter au format attendu par tes partials/listings
        $cards = array_map(function($l) {
            return [
                'id' => $l->getId(),
                'slug' => $l->getSlug(),
                'title' => $l->getTitle(),
                'description' => $l->getDescription(),
                'category' => $l->getCategory()->getName(),
                'user' => ['name' => $l->getAuthor()->getPseudo() ?: 'Membre'],
                'ville' => $l->getCity(),
                'stars' => 4,
            ];
        }, $results);

        return $this->render('search/index.html.twig', [
            'q' => $q,
            'results' => $cards,
        ]);
    }
}

