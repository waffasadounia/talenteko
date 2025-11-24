<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\UserProfileType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/profil', name: 'app_profile_')]
final class ProfileController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('', name: 'dashboard', methods: ['GET'])]
    public function dashboard(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->render('profile/dashboard.html.twig', [
            'page_title' => 'Mon tableau de bord',
            'user' => $user,
        ]);
    }

    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/favoris', name: 'favoris', methods: ['GET'])]
    public function favoris(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->render('profile/favoris.html.twig', [
            'page_title' => 'Mes favoris',
            'favorites' => $user->getFavorites(),
        ]);
    }
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/annonces', name: 'listings', methods: ['GET'])]
    public function myListings(
        EntityManagerInterface $em
    ): Response {
        /** @var User $user */
        $user = $this->getUser();

        $listings = $em->getRepository(\App\Entity\Listing::class)
            ->findBy(['author' => $user], ['createdAt' => 'DESC']);

        return $this->render('profile/my_listings.html.twig', [
            'page_title' => 'Mes annonces',
            'listings' => $listings,
        ]);
    }
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/echanges', name: 'exchanges', methods: ['GET'])]
    public function myExchanges(
        EntityManagerInterface $em
    ): Response {
        /** @var User $user */
        $user = $this->getUser();

        $repo = $em->getRepository(\App\Entity\Exchange::class);

        $exchanges = array_merge(
            $repo->findByRequester($user->getId()),
            $repo->findByOwner($user->getId())
        );

        return $this->render('profile/my_exchanges.html.twig', [
            'page_title' => 'Mes échanges',
            'exchanges' => $exchanges,
        ]);
    }
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        Request $request,
        EntityManagerInterface $em,
        Security $security,
    ): Response {

        /** @var User $user */
        $user = $security->getUser();

        // Si l'utilisateur n'a pas encore de Profile, on le crée
        if (null === $user->getProfile()) {
            $profile = new \App\Entity\Profile();
            $user->setProfile($profile);
        }

        $form = $this->createForm(UserProfileType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // === Gestion Upload Avatar ===
            $avatarFile = $form->get('profile')->get('avatarFilename')->getData();

            if ($avatarFile) {
                $uploadsDir = $this->getParameter('kernel.project_dir') . '/public/uploads/avatars';

                // Création dossier si inexistant
                if (!is_dir($uploadsDir)) {
                    mkdir($uploadsDir, 0777, true);
                }

                // Suppression ancien avatar si présent
                $oldAvatar = $user->getProfile()->getAvatarFilename();
                if ($oldAvatar && file_exists($uploadsDir . '/' . $oldAvatar)) {
                    @unlink($uploadsDir . '/' . $oldAvatar);
                }

                // Nouveau nom unique
                $newFilename = uniqid('avatar_') . '.' . $avatarFile->guessExtension();

                // Upload réel
                $avatarFile->move($uploadsDir, $newFilename);

                // Sauvegarde dans l'entité Profile
                $user->getProfile()->setAvatarFilename($newFilename);
            }

            // IMPORTANT : toujours persist le User
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', 'Profil mis à jour avec succès.');

            return $this->redirectToRoute('app_profile_dashboard');
        }

        return $this->render('profile/edit.html.twig', [
            'page_title' => 'Mon profil',
            'form' => $form->createView(),
        ]);
    }
}
