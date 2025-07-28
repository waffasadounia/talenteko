<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    #[Route('/search', name: 'app_search')]
    public function index(Request $request): Response
    {
        // Tu pourras plus tard récupérer les critères de recherche ici
        return $this->render('search/index.html.twig', [
            // On peut passer des variables à la vue si nécessaire
        ]);
    }
}
