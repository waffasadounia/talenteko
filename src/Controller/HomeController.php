<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Page d’accueil
 */
class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(
        ListingRepository $listingRepository,
        CategoryRepository $categoryRepository,
    ): Response {
        // Derniers 8 listings
        $listings = $listingRepository->findLatestWithJoins(8);

        // 8 catégories populaires (ordre alphabétique pour l’instant)
        $categories = $categoryRepository->findBy([], ['name' => 'ASC'], 8);

        return $this->render('home/index.html.twig', [
            'listings' => $listings,
            'categories' => $categories,
        ]);
    }
}
