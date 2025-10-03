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
    #[Route('/favoris', name: 'favoris', methods: ['GET'])]
    public function favoris(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $favorites = $user->getFavorites(); // Collection d’objets Favorite

        return $this->render('profile/favoris.html.twig', [
            'favorites' => $favorites,
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

        // Si pas encore de Profile → on en crée un
        if (null === $user->getProfile()) {
            $profile = new \App\Entity\Profile();
            $user->setProfile($profile);
        }

        $form = $this->createForm(UserProfileType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', 'Profil mis à jour avec succès ✅');

            return $this->redirectToRoute('app_profile_edit');
        }

        return $this->render('profile/edit.html.twig', [
            'form' => $form->createView(),
            'page_title' => 'Éditer mon profil',
        ]);
    }
}
