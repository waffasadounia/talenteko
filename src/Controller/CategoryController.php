<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Contrôleur Catégorie
 * - Affiche une catégorie par son slug
 * - Liste les annonces associées
 */
final class CategoryController extends AbstractController
{
    #[Route('/categorie/{slug}', name: 'app_category_show')]
    public function show(Category $category): Response
    {
        return $this->render('category/show.html.twig', [
            'category' => $category,
            'listings' => $category->getListings(),
        ]);
    }
}
