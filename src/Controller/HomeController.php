<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Contrôleur de la page d'accueil.
 */
final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function index(
        ListingRepository $listingRepository,
        CategoryRepository $categoryRepository,
    ): Response {
        // Récupère les 8 derniers listings publiés avec jointures utiles (ex: auteur, images, catégorie)
        $listings = $listingRepository->findLatestWithJoins(8);

        // Récupère les 8 catégories populaires (ordre alphabétique provisoire)
        $categories = $categoryRepository->findBy([], ['name' => 'ASC'], 8);

        return $this->render('home/index.html.twig', [
            'page_title' => 'Bienvenue sur TalentÉkô',
            'listings' => $listings,
            'categories' => $categories,
        ]);
    }
}
