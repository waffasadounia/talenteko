<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Contrôleur des catégories (liste et détail).
 */
final class CategoryController extends AbstractController
{
    #[Route('/categories', name: 'app_category_index', methods: ['GET'])]
    public function index(CategoryRepository $categoryRepository): Response
    {
        $categories = $categoryRepository->findBy([], ['name' => 'ASC']);

        return $this->render('category/index.html.twig', [
            'pageTitle' => 'Toutes les catégories',
            'categories' => $categories,
        ]);
    }

    #[Route(
        '/categorie/{slug}',
        name: 'app_category_show',
        methods: ['GET'],
        requirements: ['slug' => '[a-z0-9\-]+']
    )]
    public function show(Category $category, ListingRepository $listingRepository): Response
    {
        // Récupère les annonces associées à cette catégorie
        $listings = $listingRepository->findBy(
            ['category' => $category, 'status' => \App\Enum\ListingStatus::PUBLISHED],
            ['createdAt' => 'DESC']
        );

        return $this->render('category/show.html.twig', [
            'pageTitle' => 'Catégorie : '.$category->getName(),
            'category' => $category,
            'listings' => $listings,
        ]);
    }
}
