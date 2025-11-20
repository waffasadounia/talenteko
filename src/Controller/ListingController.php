<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Listing;
use App\Entity\ListingImage;
use App\Enum\ListingStatus;
use App\Form\ListingType;
use App\Repository\ListingRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/annonce', name: 'app_listing_')]
final class ListingController extends AbstractController
{
    // PAGE PUBLIQUE : Liste de toutes les annonces publiées
    #[Route('/toutes', name: 'index', methods: ['GET'])]
    public function index(Request $request, ListingRepository $listingRepo): Response
    {
        // Récupère la recherche GET ?q=...
        $query = trim((string) $request->query->get('q', ''));

        if ($query !== '') {
            // Recherche personnalisée
            $listings = $listingRepo->searchPublic($query);
        } else {
            // Listing normal (version originale)
            $listings = $listingRepo->findBy(
                ['status' => ListingStatus::PUBLISHED],
                ['createdAt' => 'DESC']
            );
        }
        return $this->render('listing/index.html.twig', [
            'page_title' => 'Toutes les annonces',
            'listings'   => $listings,
            'search'     => $query,
        ]);
    }

    // PAGE PRIVÉE : Création d’une nouvelle annonce
    #[Route('/nouvelle', name: 'new', methods: ['GET', 'POST'])]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function new(
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $slugger,
    ): Response {
        $listing = new Listing();
        $form = $this->createForm(ListingType::class, $listing);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Associer l’auteur connecté
            $listing->setAuthor($this->getUser());

            // Générer un slug unique
            $slug = strtolower((string) $slugger->slug($listing->getTitle()));
            $originalSlug = $slug;
            $i = 1;
            while ($em->getRepository(Listing::class)->findOneBy(['slug' => $slug])) {
                $slug = $originalSlug . '-' . $i++;
            }
            $listing->setSlug($slug);

            // Publication directe (MVP)
            $listing->publish();

            // Upload des images
            /** @var UploadedFile[] $images */
            $images = $form->get('images')->getData();
            foreach ($images as $index => $file) {
                $newFilename = uniqid('listing_', true) . '.' . $file->guessExtension();
                $file->move(
                    $this->getParameter('kernel.project_dir') . '/public/uploads/listings',
                    $newFilename
                );

                $image = new ListingImage();
                $image->setPath('uploads/listings/' . $newFilename);
                $image->setIsPrimary(0 === $index);
                $image->setListing($listing);

                $listing->addImage($image);
            }

            $em->persist($listing);
            $em->flush();

            $this->addFlash('success', 'Annonce créée et publiée avec succès !');

            return $this->redirectToRoute('app_listing_show', [
                'slug' => $listing->getSlug(),
            ]);
        }

        return $this->render('listing/new.html.twig', [
            'page_title' => 'Déposer une annonce',
            'form'       => $form->createView(),
        ]);
    }
    // PAGE PUBLIQUE : Affichage d’une annonce
    #[Route(
        '/{slug}',
        name: 'show',
        methods: ['GET'],
        requirements: ['slug' => '(?!nouvelle$)(?!toutes$)(?!\\d+$)[a-z0-9][a-z0-9\\-]*'],
    )]
    public function show(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')]
        Listing $listing,
    ): Response {
        // Protection : brouillon visible uniquement par auteur ou admin
        if (
            'draft' === $listing->getStatus()->value
            && $listing->getAuthor() !== $this->getUser()
            && !$this->isGranted('ROLE_ADMIN')
        ) {
            throw $this->createNotFoundException();
        }

        return $this->render('listing/show.html.twig', [
            'listing' => $listing,
        ]);
    }
    // PAGE PRIVÉE : Édition d’une annonce
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/{slug}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')]
        Listing $listing,
        Request $request,
        EntityManagerInterface $em,
    ): Response {
        if ($listing->getAuthor() !== $this->getUser() && !$this->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Vous ne pouvez pas modifier cette annonce.');
        }

        $form = $this->createForm(ListingType::class, $listing);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();
            $this->addFlash('success', 'Annonce mise à jour avec succès.');

            return $this->redirectToRoute('app_listing_show', [
                'slug' => $listing->getSlug(),
            ]);
        }

        return $this->render('listing/edit.html.twig', [
            'form'       => $form->createView(),
            'listing'    => $listing,
            'page_title' => 'Modifier mon annonce',
        ]);
    }
}
