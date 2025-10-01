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

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/listings')]
final class AdminListingController extends AbstractController
{
    #[Route('', name: 'app_admin_listings', methods: ['GET'])]
    public function index(ListingRepository $repo): Response
    {
        return $this->render('admin/listings/index.html.twig', [
            'pageTitle' => 'Gestion des annonces',
            'listings' => $repo->findAll(),
        ]);
    }

    #[Route('/{id}/delete', name: 'app_admin_listing_delete', methods: ['POST', 'DELETE'])]
    public function delete(Listing $listing, EntityManagerInterface $em): Response
    {
        $title = $listing->getTitle();
        $em->remove($listing);
        $em->flush();

        $this->addFlash('danger', sprintf("Annonce « %s » supprimée.", $title));
        return $this->redirectToRoute('app_admin_listings');
    }

    #[Route('/{id}/validate', name: 'app_admin_listing_validate', methods: ['POST', 'PATCH'])]
    public function validate(Listing $listing, EntityManagerInterface $em): Response
    {
        $listing->setStatus(ListingStatus::PUBLISHED);
        $em->flush();

        $this->addFlash('success', sprintf("Annonce « %s » validée.", $listing->getTitle()));
        return $this->redirectToRoute('app_admin_listings');
    }
}
