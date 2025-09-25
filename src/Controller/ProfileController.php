<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class ProfileController extends AbstractController
{
    #[Route('/profil/favoris', name: 'app_profile_favoris', methods: ['GET'])]
    public function favoris(): Response
    {
        // Pour lÃ¢â‚¬â„¢instant on renvoie juste le template vide
        // Plus tard on passera les favoris rÃƒÂ©els de lÃ¢â‚¬â„¢utilisateur
        return $this->render('profile/favoris.html.twig');
    }
}

