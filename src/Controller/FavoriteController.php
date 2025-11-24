<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Favorite;
use App\Entity\Listing;
use App\Repository\FavoriteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class FavoriteController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/favoris/toggle/{id}', name: 'app_favorite_toggle', methods: ['POST'])]
    public function toggle(
        Listing $listing,
        FavoriteRepository $favoriteRepo,
        EntityManagerInterface $em,
        Request $request
    ): JsonResponse {

        $user = $this->getUser();

        // Vérifie si déjà favori
        $existing = $favoriteRepo->findOneBy([
            'user'    => $user,
            'listing' => $listing,
        ]);

        if ($existing) {
            // Suppression du favori
            $em->remove($existing);
            $em->flush();

            return new JsonResponse([
                'success' => true,
                'isFavorite' => false,
            ]);
        }

        // Sinon → ajout
        $favorite = new Favorite();
        $favorite->setUser($user);
        $favorite->setListing($listing);

        $em->persist($favorite);
        $em->flush();

        return new JsonResponse([
            'success' => true,
            'isFavorite' => true,
        ]);
    }
}
