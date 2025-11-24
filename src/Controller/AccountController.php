<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
#[Route('/compte')]
final class AccountController extends AbstractController
{
    #[Route('/supprimer', name: 'app_user_delete', methods: ['GET', 'POST'])]
    public function delete(
        Request $request,
        EntityManagerInterface $em,
        TokenStorageInterface $tokenStorage
    ): Response {
        /** @var User $user */
        $user = $this->getUser();

        if ($request->isMethod('POST')) {

            $submittedToken = $request->request->get('_token');

            if ($this->isCsrfTokenValid('delete_account', $submittedToken)) {

                // --- SUPPRESSION AVATAR ---
                $profile = $user->getProfile();
                if ($profile && $profile->getAvatarFilename()) {
                    $path = $this->getParameter('kernel.project_dir') . '/public/uploads/avatars/' . $profile->getAvatarFilename();
                    if (file_exists($path)) {
                        @unlink($path);
                    }
                }

                // --- SUPPRESSION IMAGES DES ANNONCES ---
                foreach ($user->getListings() as $listing) {
                    foreach ($listing->getImages() as $img) {
                        $filePath = $this->getParameter('kernel.project_dir') . '/public/' . $img->getPath();
                        if (file_exists($filePath)) {
                            @unlink($filePath);
                        }
                    }
                }

                // --- SUPPRESSION en BDD ---
                $em->remove($user);
                $em->flush();

                // Ajouter un flash AVANT d'invalider
                $this->addFlash('success', 'Votre compte a bien été supprimé. À bientôt sur TalentÉkô !');

                // --- DÉCONNEXION ---
                // 1) Vider le token de sécurité
                $tokenStorage->setToken(null);

                // 2) Invalider la session
                $session = $request->getSession();
                $session->invalidate();

                // 3) Redémarrer une session pour permettre l'affichage du flash
                $session->start();

                // 4) Redirection vers l'accueil
                return $this->redirectToRoute('app_home');

            }
        }
        return $this->render('account/delete_confirm.html.twig', [
            'page_title' => 'Supprimer mon compte'
        ]);
    }
}
