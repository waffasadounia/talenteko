<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Listing;
use App\Entity\ListingImage;
use App\Form\ListingType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/listing', name: 'app_listing_')]
final class ListingController extends AbstractController
{
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

            // Génération d’un slug unique
            $slug = strtolower((string) $slugger->slug($listing->getTitle()));
            $originalSlug = $slug;
            $i = 1;
            while ($em->getRepository(Listing::class)->findOneBy(['slug' => $slug])) {
                $slug = $originalSlug.'-'.$i++;
            }
            $listing->setSlug($slug);

            // Publication directe (MVP)
            $listing->publish();

            // Gestion upload images (facultatif, multiple)
            /** @var UploadedFile[] $images */
            $images = $form->get('images')->getData();
            foreach ($images as $index => $file) {
                $newFilename = uniqid('listing_', true).'.'.$file->guessExtension();
                $file->move(
                    $this->getParameter('kernel.project_dir').'/public/uploads/listings',
                    $newFilename
                );

                $image = new ListingImage();
                $image->setPath('/uploads/listings/'.$newFilename);
                $image->setIsPrimary(0 === $index); // première image = image principale
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
            'form' => $form->createView(),
        ]);
    }

    #[Route(
        '/{slug}',
        name: 'show',
        methods: ['GET'],
        requirements: [
            'slug' => '(?!nouvelle$)(?!\d+$)[a-z0-9][a-z0-9\-]*',
        ],
    )]
    public function show(
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')]
        Listing $listing,
    ): Response {
        // 🚫 Protection : une annonce "draft" n’est visible que par son auteur ou un admin
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
}
