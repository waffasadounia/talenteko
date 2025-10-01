<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/users')]
final class AdminUserController extends AbstractController
{
    #[Route('', name: 'app_admin_users', methods: ['GET'])]
    public function index(UserRepository $repo): Response
    {
        return $this->render('admin/users/index.html.twig', [
            'pageTitle' => 'Gestion des utilisateurs',
            'users' => $repo->findAll(),
        ]);
    }

    #[Route('/{id}/ban', name: 'app_admin_user_ban', methods: ['POST'])]
    public function ban(User $user, EntityManagerInterface $em): Response
    {
        // On ne supprime pas les autres rôles (par ex. ROLE_ADMIN)
        $roles = $user->getRoles();
        if (!in_array('ROLE_BANNED', $roles, true)) {
            $roles[] = 'ROLE_BANNED';
        }
        $user->setRoles($roles);

        $em->flush();

        $this->addFlash('info', sprintf("Utilisateur %s banni.", $user->getEmail()));
        return $this->redirectToRoute('app_admin_users');
    }

    #[Route('/{id}/unban', name: 'app_admin_user_unban', methods: ['POST'])]
    public function unban(User $user, EntityManagerInterface $em): Response
    {
        // On retire ROLE_BANNED mais on garde les autres rôles
        $roles = array_filter($user->getRoles(), fn(string $r) => $r !== 'ROLE_BANNED');
        if ($roles === []) {
            $roles = ['ROLE_USER']; // on garde un rôle minimal
        }
        $user->setRoles($roles);

        $em->flush();

        $this->addFlash('success', sprintf("Utilisateur %s rétabli.", $user->getEmail()));
        return $this->redirectToRoute('app_admin_users');
    }

    #[Route('/{id}/delete', name: 'app_admin_user_delete', methods: ['POST', 'DELETE'])]
    public function delete(User $user, EntityManagerInterface $em): Response
    {
        $email = $user->getEmail();
        $em->remove($user);
        $em->flush();

        $this->addFlash('danger', sprintf("Utilisateur %s supprimé.", $email));
        return $this->redirectToRoute('app_admin_users');
    }
}
