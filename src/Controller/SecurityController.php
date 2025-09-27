<?php

declare(strict_types=1);

namespace App\Controller;

use LogicException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class SecurityController extends AbstractController
{
    /**
     * Page de connexion.
     * GET  : affiche le formulaire
     * POST : laissé à l’authenticator personnalisé
     *        (App\Security\LoginFormAuthenticator) qui intercepte la
     *        requête POST sur cette même route.
     */
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $auth): Response
    {
        // Si l’utilisateur est FULLY authentifié → on le redirige
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('app_home');
        }

        // IMPORTANT : si l’utilisateur est seulement "remembered",
        // il doit quand même voir le formulaire pour se "sur-authentifier".
        $error = $auth->getLastAuthenticationError();
        $lastUsername = $auth->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    /**
     * Déconnexion :
     * Cette action ne s’exécute jamais : elle est interceptée
     * par la config "logout" du firewall (security.yaml).
     */
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new LogicException(
            'Cette méthode est vide : la déconnexion est gérée par le firewall (security.yaml).'
        );
    }
}
