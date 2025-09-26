<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Page d'accueil
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

        // 8 catÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©gories populaires (ordre alphabÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©tique pour lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢instant)
        $categories = $categoryRepository->findBy([], ['name' => 'ASC'], 8);

        return $this->render('home/index.html.twig', [
            'listings' => $listings,
            'categories' => $categories,
        ]);
    }
}


