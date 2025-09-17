<?php

namespace App\Controller;

use App\Entity\Listing;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class ListingController extends AbstractController
{
    #[Route('/annonce/nouvelle', name: 'app_annonce_new', methods: ['GET'], priority: 10)]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function new(): Response
    {
        return $this->render('annonce/new.html.twig', [
            'page_title' => 'Déposer une annonce',
        ]);
    }
    #[Route(
        '/annonce/{slug}',
        name: 'app_listing_show',
        methods: ['GET'],
        requirements: [
            'slug' => '(?!nouvelle$)(?!\d+$)[A-Za-z0-9][A-Za-z0-9\-]*',
        ]
    )]
    public function show(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')] Listing $listing
    ): Response {
        // On passe l’entité entière au template
        return $this->render('annonce/show.html.twig', [
            'annonce' => $listing,
        ]);
    }
}
