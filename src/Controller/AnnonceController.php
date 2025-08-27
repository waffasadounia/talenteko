<?php
// src/Controller/AnnonceController.php

namespace App\Controller;

use App\Entity\Listing;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AnnonceController extends AbstractController
{
    #[Route('/annonce/{slug}', name: 'app_listing_show')]
    public function show(Listing $listing): Response
    {
        // On passe un tableau attendu par ton template show.html.twig
        $annonce = [
            'id' => $listing->getId(),
            'slug' => $listing->getSlug(),
            'title' => $listing->getTitle(),
            'description' => $listing->getDescription(),
            'category' => $listing->getCategory()->getName(),
            'user' => [
                'name' => $listing->getAuthor()->getFirstname() ?: 'Membre'
            ],
            'ville' => $listing->getCity(),
            'type' => $listing->getType(),
            'createdAt' => $listing->getCreatedAt(),
        ];

        return $this->render('annonce/show.html.twig', [
            'annonce' => $annonce,
        ]);
    }
}