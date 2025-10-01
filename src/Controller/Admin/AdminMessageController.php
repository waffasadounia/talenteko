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

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/messages')]
final class AdminMessageController extends AbstractController
{
    #[Route('', name: 'app_admin_messages', methods: ['GET'])]
    public function index(MessageRepository $repo): Response
    {
        return $this->render('admin/messages/index.html.twig', [
            'pageTitle' => 'Gestion des messages',
            'messages' => $repo->findBy([], ['createdAt' => 'DESC'], 50), // derniers 50
        ]);
    }

    #[Route('/{id}/delete', name: 'app_admin_message_delete', methods: ['POST', 'DELETE'])]
    public function delete(Message $message, EntityManagerInterface $em): Response
    {
        $id = $message->getId();
        $em->remove($message);
        $em->flush();

        $this->addFlash('danger', sprintf("Message #%d supprimé.", $id));
        return $this->redirectToRoute('app_admin_messages');
    }
}
