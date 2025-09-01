<?php
// src/Controller/AnnonceController.php

namespace App\Controller;

use App\Entity\Listing;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


final class AnnonceController extends AbstractController
{
    /**
     * Page : Déposer une annonce (formulaire à venir).
     * Route statique prioritaire, pas de collision avec {slug}.
     */
    #[Route('/annonce/nouvelle', name: 'app_annonce_new', methods: ['GET'])]
    #[IsGranted('IS_AUTHENTICATED_FULLY')] 
    public function new(): Response
    {
        return $this->render('annonce/new.html.twig', [
            'page_title' => 'Déposer une annonce',
        ]);
    }

    /**
     * Page : Affichage d'une annonce par son slug.
     * On ajoute une contrainte de format pour éviter toute ambiguïté.
     * NOTE : si tu relies l'entité par "slug", assure-toi que ton ParamConverter est configuré,
     *        ou utilise MapEntity si nécessaire. Si tu utilises SensioFrameworkExtraBundle,
     *        la config peut déjà être en place.
     */
    #[Route(
        '/annonce/{slug}',
        name: 'app_listing_show',
        methods: ['GET'],
        requirements: ['slug' => '[a-z0-9\-]+' ]
    )]
    public function show(Listing $listing): Response
    {
        // Adapter selon ton template/entité
        $annonce = [
            'id' => $listing->getId(),
            'slug' => $listing->getSlug(),
            'title' => $listing->getTitle(),
            'description' => $listing->getDescription(),
            'category' => $listing->getCategory()?->getName(),
            'user' => [
                'name' => $listing->getAuthor()?->getFirstname() ?: 'Membre',
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
