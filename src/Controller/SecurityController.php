<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class SecurityController extends AbstractController
{
    /**
     * Page de connexion.
     * GET  : affiche le formulaire
     * POST : laissé à l'authenticator personnalisé (App\Security\LoginFormAuthenticator)
     *        qui intercepte la requête POST sur cette même route.
     */
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $auth): Response
    {
        //Si l'utilisateur est FULLY authentifié, on évite de réafficher le formulaire
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('app_home');
        }

        // IMPORTANT : si l'utilisateur n'est que "remembered",
        // on lui DOIT laisser l'accès au formulaire pour "sur-authentifier" (FULLY).
        $error = $auth->getLastAuthenticationError();
        $lastUsername = $auth->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    /**
     * Déconnexion :
     * Cette action ne s'exécute jamais : elle est interceptée par la config "logout" du firewall
     * (configurée dans security.yaml, section firewalls.main.logout).
     */
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new \LogicException('Cette méthode est vide : la déconnexion est gérée par le firewall (security.yaml).');
    }
}
