<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Logout\LogoutUrlGenerator;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
#[Route('/compte')]
final class AccountController extends AbstractController
{
    #[Route('/supprimer', name: 'app_user_delete', methods: ['GET', 'POST'])]
    public function delete(
        Request $request,
        EntityManagerInterface $em,
    ): Response {
        /** @var User $user */
        $user = $this->getUser();

        // -- Confirmation
        if ($request->isMethod('POST')) {
            $submittedToken = $request->request->get('_token');

            if ($this->isCsrfTokenValid('delete_account', $submittedToken)) {

                // Supprimer avatar si existe
                $profile = $user->getProfile();
                if ($profile && $profile->getAvatarFilename()) {
                    $path = $this->getParameter('kernel.project_dir') . '/public/uploads/avatars/' . $profile->getAvatarFilename();
                    if (file_exists($path)) {
                        @unlink($path);
                    }
                }
                // === Suppression des images des annonces de l'utilisateur ===
                foreach ($user->getListings() as $listing) {

                    // Pour chaque listing, supprimer les images physiques
                    foreach ($listing->getImages() as $img) {
                        $filePath = $this->getParameter('kernel.project_dir') . '/public/' . $img->getPath();

                        if (file_exists($filePath)) {
                            @unlink($filePath);
                        }
                    }
                }


                // SUPPRIMER L'UTILISATEUR
                $em->remove($user);
                $em->flush();

                // Déconnexion automatique
                $request->getSession()->invalidate();

                return $this->redirectToRoute('app_home');
            }
        }

        return $this->render('account/delete_confirm.html.twig', [
            'page_title' => 'Supprimer mon compte'
        ]);
    }
}
