<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route; // cohérent avec tes autres contrôleurs
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class SecurityController extends AbstractController
{
    /**
     * Page de connexion (GET pour afficher, POST pour laisser le firewall traiter la soumission).
     * Le firewall `form_login` interceptera le POST sur la même route (check_path = login_path).
     */
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $auth): Response
    {
        // Déjà connecté ? On renvoie vers l’accueil (évite de revoir le formulaire)
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }

        // Récupère la dernière erreur éventuelle et le dernier identifiant saisi
        $error = $auth->getLastAuthenticationError();
        $lastUsername = $auth->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }

    /**
     * Déconnexion : **ne sera jamais exécutée**.
     * Le firewall interceptera cette route (config `logout` dans security.yaml).
     */
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new \LogicException(
            'Cette méthode est vide : la déconnexion est gérée par le firewall (security.yaml).'
        );
    }
}
