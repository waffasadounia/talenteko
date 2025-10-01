<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\Exchange;
use App\Enum\ExchangeStatus;
use App\Repository\ExchangeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/exchanges')]
final class AdminExchangeController extends AbstractController
{
    #[Route('', name: 'app_admin_exchanges', methods: ['GET'])]
    public function index(ExchangeRepository $repo): Response
    {
        return $this->render('admin/exchanges/index.html.twig', [
            'pageTitle' => 'Gestion des échanges',
            'exchanges' => $repo->findAll(),
        ]);
    }

    #[Route('/{id}/close', name: 'app_admin_exchange_close', methods: ['POST', 'PATCH'])]
    public function close(Exchange $exchange, EntityManagerInterface $em): Response
    {
        $exchange->setStatus(ExchangeStatus::COMPLETED);
        $em->flush();

        $this->addFlash('info', sprintf("Échange #%d clôturé.", $exchange->getId()));
        return $this->redirectToRoute('app_admin_exchanges');
    }

    #[Route('/{id}/delete', name: 'app_admin_exchange_delete', methods: ['POST', 'DELETE'])]
    public function delete(Exchange $exchange, EntityManagerInterface $em): Response
    {
        $id = $exchange->getId();
        $em->remove($exchange);
        $em->flush();

        $this->addFlash('danger', sprintf("Échange #%d supprimé.", $id));
        return $this->redirectToRoute('app_admin_exchanges');
    }
}
