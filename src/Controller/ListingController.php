<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Listing;
use App\Form\ListingType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/listing', name: 'app_listing_')]
final class ListingController extends AbstractController
{
    #[Route('/nouvelle', name: 'new', methods: ['GET', 'POST'])]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $listing = new Listing();
        $form = $this->createForm(ListingType::class, $listing);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $listing->setAuthor($this->getUser());
            $em->persist($listing);
            $em->flush();

            $this->addFlash('success', 'Annonce créée avec succès !');
            return $this->redirectToRoute('app_listing_show', [
                'slug' => $listing->getSlug(),
            ]);
        }

        return $this->render('listing/new.html.twig', [
            'page_title' => 'Déposer une annonce',
            'form' => $form->createView(),
        ]);
    }

    #[Route(
        '/{slug}',
        name: 'show',
        methods: ['GET'],
        requirements: [
            'slug' => '(?!nouvelle$)(?!\d+$)[A-Za-z0-9][A-Za-z0-9\-]*',
        ],
    )]
    public function show(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')] Listing $listing,
    ): Response {
        return $this->render('listing/show.html.twig', [
            'listing' => $listing,
        ]);
    }
}
