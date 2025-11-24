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
    /* ==========================================================
       LISTING INDEX
       ========================================================== */

    #[Route('/toutes', name: 'index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->redirectToRoute('app_search');
    }
    /* ==========================================================
       NEW LISTING
       ========================================================== */
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

            /* Auteur */
            $listing->setAuthor($this->getUser());

            /* Slug unique */
            $slug = strtolower((string) $slugger->slug($listing->getTitle()));
            $originalSlug = $slug;
            $i = 1;

            while ($em->getRepository(Listing::class)->findOneBy(['slug' => $slug])) {
                $slug = $originalSlug . '-' . $i++;
            }

            $listing->setSlug($slug);
            $listing->publish();

            /* Upload d'une seule image */
            /** @var UploadedFile|null $newImage */
            // $newImage = $form->get('newImage')->getData();

            // if ($newImage) {

            //     $uploadsDir = '/uploads/listings';
            //     $targetDir = $this->getParameter('kernel.project_dir') . '/public' . $uploadsDir;

            //     if (!is_dir($targetDir)) {
            //         mkdir($targetDir, 0777, true);
            //     }

            //     $newFilename = uniqid('listing_', true) . '.' . $newImage->guessExtension();
            //     $newImage->move($targetDir, $newFilename);

            //     $image = new ListingImage();
            //     $image->setPath('uploads/listings/' . $newFilename);
            //     $image->setIsPrimary(true);
            //     $image->setListing($listing);

            //     $listing->addImage($image);
            // }

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

    /* ==========================================================
       SHOW LISTING
       ========================================================== */
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

    /* ==========================================================
       EDIT LISTING
       ========================================================== */
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

            /** @var UploadedFile|null $newImage */
            // $newImage = $form->get('newImage')->getData();

            // if ($newImage) {

            //     /* Supprimer l’ancienne image */
            //     $oldImages = $listing->getImages();
            //     if ($oldImages->count() > 0) {
            //         $oldImage = $oldImages->first();

            //         $oldFilePath = $this->getParameter('kernel.project_dir')
            //                           . '/public/' . $oldImage->getPath();

            //         if (file_exists($oldFilePath)) {
            //             unlink($oldFilePath);
            //         }

            //         $listing->removeImage($oldImage);
            //         $em->remove($oldImage);
            //     }

            //     /* Uploader la nouvelle */
            //     $uploadsDir = '/uploads/listings';
            //     $targetDir = $this->getParameter('kernel.project_dir') . '/public' . $uploadsDir;

            //     if (!is_dir($targetDir)) {
            //         mkdir($targetDir, 0777, true);
            //     }

            //     $newFilename = uniqid('listing_', true) . '.' . $newImage->guessExtension();
            //     $newImage->move($targetDir, $newFilename);

            //     $image = new ListingImage();
            //     $image->setPath('uploads/listings/' . $newFilename);
            //     $image->setIsPrimary(true);
            //     $image->setListing($listing);

            //     $listing->addImage($image);
            // }

            $em->flush();
            $this->addFlash('success', 'Annonce mise à jour avec succès.');

            return $this->redirectToRoute('app_listing_show', [
                'slug' => $listing->getSlug(),
            ]);
        }

        return $this->render('listing/edit.html.twig', [
            'form'    => $form->createView(),
            'listing' => $listing,
        ]);
    }

    /* ==========================================================
       CONFIRM DELETE
       ========================================================== */
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/{id}/supprimer/confirmation', name: 'confirm_delete', methods: ['GET'])]
    public function confirmDelete(Listing $listing): Response
    {
        if ($listing->getAuthor() !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }

        return $this->render('listing/confirm_delete.html.twig', [
            'listing' => $listing,
        ]);
    }

    /* ==========================================================
       DELETE
       ========================================================== */
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/{id}/supprimer', name: 'delete', methods: ['POST'])]
    public function delete(
        Listing $listing,
        Request $request,
        EntityManagerInterface $em
    ): Response {
        if ($listing->getAuthor() !== $this->getUser() && !$this->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Vous ne pouvez pas supprimer cette annonce.');
        }

        if ($this->isCsrfTokenValid('delete' . $listing->getId(), $request->request->get('_token'))) {

            $em->remove($listing);
            $em->flush();

            $this->addFlash('success', 'Votre annonce a bien été supprimée.');
        }

        return $this->redirectToRoute('app_profile_listings');
    }
}
