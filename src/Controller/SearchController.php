<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Contrôleur de la recherche principale (page /recherche)
 * --------------------------------------------------------
 * Permet de filtrer les annonces selon plusieurs critères :
 * - mot-clé, localisation, distance (V2)
 * - type d’annonce (offre / demande)
 * - note minimale
 * - date de publication
 */
final class SearchController extends AbstractController
{
    #[Route('/recherche', name: 'app_search', methods: ['GET'])]
    public function index(
        Request $request,
        ListingRepository $listingRepository,
        CategoryRepository $categoryRepository
    ): Response {
        // ============================================================
        // 1️⃣ Extraction et nettoyage des critères de recherche
        // ============================================================
        $criteria = array_filter([
            'q'         => trim((string) $request->query->get('q', '')),
            'location'  => trim((string) $request->query->get('location', '')),
            'distance'  => $request->query->get('distance'),
            'type'      => $request->query->get('type'),
            'rating'    => $request->query->get('rating'),
            'date'      => $request->query->get('date'),
        ], static fn($v) => $v !== null && $v !== '');

        // ============================================================
        // 2️⃣ Requête Doctrine via ListingRepository
        // ============================================================
        $results = $listingRepository->searchByFilters($criteria);

        // ============================================================
        // 3️⃣ Récupération des catégories (pour filtres ou affichage)
        // ============================================================
        $categories = $categoryRepository->findBy([], ['name' => 'ASC']);

        // ============================================================
        // 4️⃣ Rendu du template
        // ============================================================
        return $this->render('search/index.html.twig', [
            'results'    => $results,
            'criteria'   => $criteria,
            'categories' => $categories,
            'page_title' => 'Recherche d’annonces',
        ]);
    }
}
