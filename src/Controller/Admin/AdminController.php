<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Repository\ExchangeRepository;
use App\Repository\ListingRepository;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Contrôleur principal du back-office TalentÉkô.
 *
 * - Accessible uniquement rôle ROLE_ADMIN.
 * - Fournit le tableau de bord général affichant les statistiques principales.
 */
#[IsGranted('ROLE_ADMIN')]
#[Route('/admin')]
final class AdminController extends AbstractController
{
    /**
     * Page d’accueil du tableau de bord administrateur.
     *
     * URL : /admin
     * Template : templates/admin.html.twig
     */
    #[Route('', name: 'app_admin_dashboard', methods: ['GET'])]
    public function dashboard(
        UserRepository $userRepo,
        ListingRepository $listingRepo,
        ExchangeRepository $exchangeRepo,
        MessageRepository $messageRepo,
    ): Response {
        // Récupération des statistiques globales
        $totalUsers = $userRepo->count([]);
        $totalListings = $listingRepo->count([]);
        $totalExchanges = $exchangeRepo->count([]);
        $totalMessages = $messageRepo->count([]);

        // Rendu du tableau de bord admin
        return $this->render('admin/admin.html.twig',[
            'page_title' => 'Tableau de bord administrateur',
            'totalUsers' => $totalUsers,
            'totalListings' => $totalListings,
            'totalExchanges' => $totalExchanges,
            'totalMessages' => $totalMessages,
        ]);
    }
}
