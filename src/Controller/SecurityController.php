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
     * POST : laissÃƒÂ© ÃƒÂ  l'authenticator personnalisÃƒÂ© (App\Security\LoginFormAuthenticator)
     *        qui intercepte la requÃƒÂªte POST sur cette mÃƒÂªme route.
     */
    #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $auth): Response
    {
        // Si l'utilisateur est FULLY authentifiÃƒÂ©, on ÃƒÂ©vite de rÃƒÂ©afficher le formulaire
        if ($this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('app_home');
        }

        // IMPORTANT : si l'utilisateur n'est que "remembered",
        // on lui DOIT laisser l'accÃƒÆ’Ã‚Â¨s au formulaire pour "sur-authentifier" (FULLY).
        $error = $auth->getLastAuthenticationError();
        $lastUsername = $auth->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    /**
     * DÃƒÂ©connexion :
     * Cette action ne s'exÃƒÂ©cute jamais : elle est interceptÃƒÂ©e par la config "logout" du firewall
     * (configurÃƒÂ©e dans security.yaml, section firewalls.main.logout).
     */
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        throw new LogicException('Cette mÃƒÂ©thode est vide : la dÃƒÂ©connexion est gÃƒÂ©rÃƒÂ©e par le firewall (security.yaml).');
    }
}

