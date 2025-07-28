<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        $annonces = [
            [
                'id' => 1,
                'title' => 'Cours de guitare',
                'description' => 'Apprenez à jouer de la guitare avec un professionnel.',
                'category' => 'Musique',
                'user' => ['name' => 'Amine'],
                'ville' => 'Paris',
                'stars' => 5,
            ],
            [
                'id' => 2,
                'title' => 'Cours de cuisine',
                'description' => 'Découvrez les secrets de la cuisine italienne.',
                'category' => 'Cuisine',
                'user' => ['name' => 'Graziella'],
                'ville' => 'Lyon',
                'stars' => 3,
            ],
            [
                'id' => 3,
                'title' => 'Cours de yoga',
                'description' => 'Relaxation et bien-être avec des séances de yoga hebdomadaires.',
                'category' => 'Bien-être',
                'user' => ['name' => 'Sophie'],
                'ville' => 'Reims',
                'stars' => 2,
            ],
            [
                'id' => 4,
                'title' => 'Cours de théâtre',
                'description' => 'Apprenez les bases du théâtre avec une comédienne professionnelle.',
                'category' => 'Art',
                'user' => ['name' => 'Fatou'],
                'ville' => 'Marseille',
                'stars' => 5,
            ],
        ];

        return $this->render('home/index.html.twig', [
            'annonces' => $annonces,
        ]);
    }
}
