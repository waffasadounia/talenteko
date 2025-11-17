<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\Message;
use App\Repository\MessageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Gestion de la messagerie dans le back-office TalentÉkô.
 *
 * Permet aux administrateurs de visualiser et supprimer les messages.
 */
#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/message')]
final class AdminMessageController extends AbstractController
{
    /**
     * Liste les messages récents.
     *
     * URL : /admin/message
     * Template : templates/admin/message/index.html.twig
     */
    #[Route('', name: 'app_admin_message_index', methods: ['GET'])]
    public function index(MessageRepository $repo): Response
    {
        return $this->render('admin/message/index.html.twig', [
            'page_title' => 'Gestion des messages',
            'messages' => $repo->findBy([], ['createdAt' => 'DESC'], 50), // derniers 50
        ]);
    }

    /**
     * Supprime un message spécifique.
     *
     * URL : /admin/message/{id}/delete
     */
    #[Route('/{id}/delete', name: 'app_admin_message_delete', methods: ['POST', 'DELETE'])]
    public function delete(Message $message, EntityManagerInterface $em): Response
    {
        $id = $message->getId();

        $em->remove($message);
        $em->flush();

        $this->addFlash('danger', \sprintf('Message #%d supprimé ❌', $id));

        return $this->redirectToRoute('app_admin_message_index');
    }
}
