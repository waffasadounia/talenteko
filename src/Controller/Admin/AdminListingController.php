<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\Listing;
use App\Enum\ListingStatus;
use App\Repository\ListingRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Gestion des annonces (listings) dans le back-office TalentÉkô.
 *
 * Permet aux administrateurs de consulter, valider ou supprimer les annonces.
 */
#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/listing')]
final class AdminListingController extends AbstractController
{
    /**
     * Liste toutes les annonces.
     *
     * URL : /admin/listing
     * Template : templates/admin/listing/index.html.twig
     */
    #[Route('', name: 'app_admin_listing_index', methods: ['GET'])]
    public function index(ListingRepository $repo): Response
    {
        return $this->render('admin/listing/index.html.twig', [
            'page_title' => 'Gestion des annonces',
            'listings' => $repo->findBy([], ['createdAt' => 'DESC']),
        ]);
    }

    /**
     * Valide une annonce (passe son statut en PUBLISHED).
     *
     * URL : /admin/listing/{id}/validate
     */
    #[Route('/{id}/validate', name: 'app_admin_listing_validate', methods: ['POST', 'PATCH'])]
    public function validate(Listing $listing, EntityManagerInterface $em): Response
    {
        $listing->setStatus(ListingStatus::PUBLISHED);
        $em->flush();

        $this->addFlash('success', \sprintf('Annonce « %s » validée avec succès ✅', $listing->getTitle()));

        return $this->redirectToRoute('app_admin_listing_index');
    }

    /**
     * Supprime une annonce.
     *
     * URL : /admin/listing/{id}/delete
     */
    #[Route('/{id}/delete', name: 'app_admin_listing_delete', methods: ['POST', 'DELETE'])]
    public function delete(Listing $listing, EntityManagerInterface $em): Response
    {
        $title = $listing->getTitle();

        $em->remove($listing);
        $em->flush();

        $this->addFlash('danger', \sprintf('Annonce « %s » supprimée ❌', $title));

        return $this->redirectToRoute('app_admin_listing_index');
    }
}
