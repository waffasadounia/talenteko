<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Repository\ListingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Contrôleur des profils publics utilisateurs.
 *
 * ➡ Permet de consulter le profil d’un utilisateur et ses annonces actives.
 */
final class UserController extends AbstractController
{
    #[Route(
        '/user/{id}',
        name: 'app_user_show',
        requirements: ['id' => '\d+'],
        methods: ['GET']
    )]
    public function show(User $user, ListingRepository $listingRepo): Response
    {
        // 🔎 Récupérer toutes les annonces publiées par cet utilisateur
        $listings = $listingRepo->findBy(
            ['author' => $user],
            ['createdAt' => 'DESC']
        );

        // ✅ Vue Twig : profil public de l’utilisateur
        return $this->render('user/show.html.twig', [
            'page_title'   => sprintf('Profil de %s', $user->getDisplayName()), // harmonisé avec User::__toString()
            'user_profile' => $user, // ⚡ nommé différemment de app.user pour éviter la confusion
            'listings'     => $listings,
        ]);
    }
}
