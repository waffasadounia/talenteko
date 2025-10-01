<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use App\Repository\ListingRepository;
use App\Repository\ExchangeRepository;
use App\Repository\MessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin')]
final class AdminController extends AbstractController
{
    #[Route('', name: 'app_admin_dashboard', methods: ['GET'])]
    public function dashboard(
        UserRepository $userRepo,
        ListingRepository $listingRepo,
        ExchangeRepository $exchangeRepo,
        MessageRepository $messageRepo,
    ): Response {
        return $this->render('admin/dashboard.html.twig', [
            'pageTitle'      => 'Tableau de bord admin',
            'user_count'     => $userRepo->count([]),
            'listing_count'  => $listingRepo->count([]),
            'exchange_count' => $exchangeRepo->count([]),
            'message_count'  => $messageRepo->count([]),
        ]);
    }
}
