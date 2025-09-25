<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\RememberMeBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\SecurityRequestAttributes;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

/**
 * Authenticator de formulaire pour TalentÃƒÂ©k.
 * - Lit les champs "email" et "password" envoyÃƒÂ©s par le formulaire.
 * - VÃƒÂ©rifie le CSRF.
 * - GÃƒÂ¨re "Se souvenir de moi" si cochÃƒÂ© + activÃƒÂ© dans security.yaml.
 * - Redirige aprÃƒÂ¨s succÃƒÂ¨s vers la page demandÃƒÂ©e ou vers lÃ¢â‚¬â„¢accueil.
 */
final class LoginFormAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'app_login';

    public function __construct(private UrlGeneratorInterface $urlGenerator)
    {
    }

    /**
     * Construit le "Passport" ÃƒÂ  partir de la requÃƒÂªte.
     * Ici on rÃƒÂ©cupÃƒÂ¨re l'email, le mot de passe, le token CSRF et l'ÃƒÂ©tat du remember_me.
     */
    public function authenticate(Request $request): Passport
    {
        // RÃƒÂ©cupÃƒÂ¨re les champs postÃƒÂ©s depuis un formulaire HTML
        $email = $request->request->getString('email');
        $password = $request->request->getString('password');
        $csrf = $request->request->getString('_csrf_token');

        // Retenir le dernier identifiant saisi si erreur
        $request->getSession()->set(SecurityRequestAttributes::LAST_USERNAME, $email);

        $badges = [new CsrfTokenBadge('authenticate', $csrf)];
        if ($request->request->getBoolean('_remember_me', false)) {
            $badges[] = new RememberMeBadge();
        }

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($password),
            $badges,
        );
    }

    /**
     * Redirection aprÃƒÂ¨s authentification rÃƒÂ©ussie.
     * - Si l'utilisateur venait d'une page protÃƒÂ©gÃƒÂ©e, on y retourne (TargetPath).
     * - Sinon on renvoie vers lÃ¢â‚¬â„¢accueil.
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // 1) Retour vers la page d'origine protÃƒÂ©gÃƒÂ©e (si prÃƒÂ©sente)
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        // 2) Fallback : accueil
        return new RedirectResponse($this->urlGenerator->generate('app_home'));
    }

    /**
     * URL de la page de login (utilisÃƒÂ©e par le framework si besoin).
     */
    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}

