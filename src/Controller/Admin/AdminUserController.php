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

/**
 * Gestion des utilisateurs dans le back-office TalentÉkô.
 *
 * Permet aux administrateurs de consulter, bannir, rétablir ou supprimer des comptes.
 */
#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/user')]
final class AdminUserController extends AbstractController
{
    /**
     * Liste tous les utilisateurs.
     *
     * URL : /admin/user
     * Template : templates/admin/user/index.html.twig
     */
    #[Route('', name: 'app_admin_user_index', methods: ['GET'])]
    public function index(UserRepository $repo): Response
    {
        return $this->render('admin/user/index.html.twig', [
            'page_title' => 'Gestion des utilisateurs',
            'users' => $repo->findBy([], ['createdAt' => 'DESC']),
        ]);
    }
    /**
     * Bannit un utilisateur (ajoute ROLE_BANNED).
     *
     * URL : /admin/user/{id}/ban
     */
    #[Route('/{id}/ban', name: 'app_admin_user_ban', methods: ['POST'])]
    public function ban(User $user, EntityManagerInterface $em): Response
    {
        $roles = $user->getRoles();

        if (!\in_array('ROLE_BANNED', $roles, true)) {
            $roles[] = 'ROLE_BANNED';
        }

        $user->setRoles($roles);
        $em->flush();
        $this->addFlash('warning', \sprintf('Utilisateur %s banni', $user->getEmail()));
        return $this->redirectToRoute('app_admin_user_index');
    }

    /**
     * Rétablit un utilisateur (supprime ROLE_BANNED).
     *
     * URL : /admin/user/{id}/unban
     */
    #[Route('/{id}/unban', name: 'app_admin_user_unban', methods: ['POST'])]
    public function unban(User $user, EntityManagerInterface $em): Response
    {
        $roles = array_filter($user->getRoles(), fn(string $r) => 'ROLE_BANNED' !== $r);

        if ([] === $roles) {
            $roles = ['ROLE_USER'];
        }
        $user->setRoles($roles);
        $em->flush();
        $this->addFlash('success', \sprintf('Utilisateur %s rétabli ', $user->getEmail()));
        return $this->redirectToRoute('app_admin_user_index');
    }
    /**
     * Supprime un utilisateur définitivement.
     *
     * URL : /admin/user/{id}/delete
     */
    #[Route('/{id}/delete', name: 'app_admin_user_delete', methods: ['POST', 'DELETE'])]
    public function delete(User $user, EntityManagerInterface $em): Response
    {
        $email = $user->getEmail();

        $em->remove($user);
        $em->flush();

        $this->addFlash('danger', \sprintf('Utilisateur %s supprimé', $email));
        return $this->redirectToRoute('app_admin_user_index');
    }
}
