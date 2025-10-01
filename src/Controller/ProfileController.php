<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class ProfileController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/profil/favoris', name: 'app_profile_favoris', methods: ['GET'])]
    public function favoris(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        // ✅ Utilisation de la relation User ↔ Favorite
        $favorites = $user->getFavorites();

        return $this->render('profile/favoris.html.twig', [
            'favorites' => $favorites,
        ]);
    }
}
