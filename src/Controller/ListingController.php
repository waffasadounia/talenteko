<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Listing;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class ListingController extends AbstractController
{
    #[Route('/annonce/nouvelle', name: 'app_listing_new', methods: ['GET'], priority: 10)]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function new(): Response
    {
        return $this->render('listing/new.html.twig', [
            'page_title' => 'DÃƒÂ©poser une annonce',
        ]);
    }

    #[Route(
        '/listing/{slug}',
        name: 'app_listing_show',
        methods: ['GET'],
        requirements: [
            'slug' => '(?!nouvelle$)(?!\d+$)[A-Za-z0-9][A-Za-z0-9\-]*',
        ],
    )]
    public function show(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')] Listing $listing,
    ): Response {
        // On passe l'entitÃƒÂ© entiÃƒÂ¨re au template
        return $this->render('listing/show.html.twig', [
            'listing' => $listing,
        ]);
    }
}

