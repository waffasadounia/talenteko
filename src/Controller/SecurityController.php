<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * Contrôleur de sécurité (login / logout).
 *
 * Ce contrôleur est lié à l'authenticator personnalisé :
 * App\Security\LoginFormAuthenticator
 *
 * - /login : formulaire de connexion (géré côté POST par l'authenticator).
 * - /logout : route interceptée automatiquement par le firewall.
 */
final class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $auth): Response
    {
        // Déjà connecté complètement → on redirige vers l'accueil
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('app_home');
        }

        // Important : si utilisateur est seulement "remembered",
        // il doit voir le formulaire pour confirmer ses identifiants.
        $error = $auth->getLastAuthenticationError();
        $lastUsername = $auth->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        // Jamais exécuté → géré par le firewall (security.yaml)
        throw new \LogicException('La déconnexion est gérée par le firewall (security.yaml).');
    }
}
