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
     * POST : laissÃ© Ã  l'authenticator personnalisÃ© (App\Security\LoginFormAuthenticator)
     *        qui intercepte la requÃªte POST sur cette mÃªme route.
     */
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $auth): Response
    {
        // Si l'utilisateur est FULLY authentifiÃ©, on Ã©vite de rÃ©afficher le formulaire
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('app_home');
        }

        // IMPORTANT : si l'utilisateur n'est que "remembered",
        // on lui DOIT laisser l'accÃƒÂ¨s au formulaire pour "sur-authentifier" (FULLY).
        $error = $auth->getLastAuthenticationError();
        $lastUsername = $auth->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    /**
     * DÃ©connexion :
     * Cette action ne s'exÃ©cute jamais : elle est interceptÃ©e par la config "logout" du firewall
     * (configurÃ©e dans security.yaml, section firewalls.main.logout).
     */
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new LogicException('Cette mÃ©thode est vide : la dÃ©connexion est gÃ©rÃ©e par le firewall (security.yaml).');
    }
}
