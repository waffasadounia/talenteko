<?php

namespace App\Controller;

use App\Entity\Listing;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class AnnonceController extends AbstractController
{
    /**
     * Fiche annonce (publique) — via SLUG
     * URL: /annonce/{slug}
     * Name: app_listing_show
     */
    #[Route('/annonce/{slug}', name: 'app_listing_show', methods: ['GET'], requirements: ['slug' => '(?!\d+$)[A-Za-z0-9][A-Za-z0-9\-]*'])]
    /**
 * Contrainte sur {slug} :
 * - (?!\d+$)  : interdit les slugs composés UNIQUEMENT de chiffres (évite le conflit /annonce/123)
 * - [A-Za-z0-9]           : commence par un alphanumérique
 * - [A-Za-z0-9\-]*        : puis zéro ou plusieurs alphanumériques ou tirets
 * Exemples OK  : "cours-de-piano-101", "bricolage3d", "a-1"
 * Exemples KO  : "123", "-debutant", "mon_slug" (underscore non autorisé)
 */
    public function show(Listing $listing): Response
    {
        $annonce = [
            'id'          => $listing->getId(),
            'slug'        => $listing->getSlug(),
            'title'       => $listing->getTitle(),
            'description' => $listing->getDescription(),
            'category'    => $listing->getCategory()?->getName(),
            'user'        => [
                'name' => $listing->getAuthor()?->getFirstname() ?: 'Membre',
            ],
            'ville'       => $listing->getCity(),
            'type'        => $listing->getType(),
            'createdAt'   => $listing->getCreatedAt(),
        ];

        return $this->render('annonce/show.html.twig', [
            'annonce' => $annonce,
        ]);
    }

    /**
     * Déposer une annonce (protégée)
     * URL: /annonce/nouvelle
     * Name: app_annonce_new
     */
    #[Route('/annonce/nouvelle', name: 'app_annonce_new', methods: ['GET'])]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function new(): Response
    {
        return $this->render('annonce/new.html.twig', [
            'page_title' => 'Déposer une annonce',
        ]);
    }
}
