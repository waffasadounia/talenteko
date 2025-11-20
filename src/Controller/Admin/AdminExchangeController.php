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

/**
 * Gestion des échanges dans le back-office TalentÉkô.
 *
 * Permet aux administrateurs de consulter, clôturer ou supprimer des échanges.
 */
#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/exchange')]
final class AdminExchangeController extends AbstractController
{
    /**
     * Liste tous les échanges existants.
     *
     * URL : /admin/exchange
     * Template : templates/admin/exchange/index.html.twig
     */
    #[Route('', name: 'app_admin_exchange_index', methods: ['GET'])]
    public function index(ExchangeRepository $repo): Response
    {
        return $this->render('admin/exchange/index.html.twig', [
            'page_title' => 'Gestion des échanges',
            'exchanges' => $repo->findBy([], ['createdAt' => 'DESC']),
        ]);
    }
    /**
     * Clôture manuellement un échange (statut → COMPLETED).
     *
     * URL : /admin/exchange/{id}/close
     */
    #[Route('/{id}/close', name: 'app_admin_exchange_close', methods: ['POST', 'PATCH'])]
    public function close(Exchange $exchange, EntityManagerInterface $em): Response
    {
        $exchange->setStatus(ExchangeStatus::COMPLETED);
        $em->flush();
        $this->addFlash('info', \sprintf('Échange #%d clôturé avec succès', $exchange->getId()));
        return $this->redirectToRoute('app_admin_exchange_index');
    }
    /**
     * Supprime définitivement un échange.
     *
     * URL : /admin/exchange/{id}/delete
     */
    #[Route('/{id}/delete', name: 'app_admin_exchange_delete', methods: ['POST', 'DELETE'])]
    public function delete(Exchange $exchange, EntityManagerInterface $em): Response
    {
        $id = $exchange->getId();
        $em->remove($exchange);
        $em->flush();
        $this->addFlash('danger', \sprintf('Échange #%d supprimé', $id));
        return $this->redirectToRoute('app_admin_exchange_index');
    }
}
