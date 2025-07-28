<?php
// src/Controller/AnnonceController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AnnonceController extends AbstractController
{
    #[Route("/annonce/{id}", name: "annonce_show")]
    
    public function show(int $id): Response
    {
        // Ici, on utilise un tableau statique pour l'exemple,
        // mais dans une application réelle, on récupère l'annonce depuis une base de données.
        $annonces = [
            1 => [
                'id' => 1,
                'title' => 'Cours de guitare',
                'description' => 'Apprenez à jouer de la guitare avec un professionnel.',
                'category' => 'Musique',
            ],
            2 => [
                'id' => 2,
                'title' => 'Cours de cuisine',
                'description' => 'Découvrez les secrets de la cuisine italienne.',
                'category' => 'Cuisine',
            ],
        ];

        // Vérifie si l'annonce existe
        if (!isset($annonces[$id])) {
            throw $this->createNotFoundException('Annonce non trouvée');
        }

        return $this->render('annonce/show.html.twig', [
            'annonce' => $annonces[$id],
        ]);
    }
}
