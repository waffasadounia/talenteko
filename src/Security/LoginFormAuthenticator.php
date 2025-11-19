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

final class LoginFormAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'app_login';

    public function __construct(
        private UrlGeneratorInterface $urlGenerator
    ) {}

    /**
     * Construit le Passport (identifiants + badges CSRF / remember me).
     */
    public function authenticate(Request $request): Passport
    {
        $email = $request->request->getString('email');
        $password = $request->request->getString('password');
        $csrf = $request->request->getString('_csrf_token');

        // Stocker l'email saisi si login échoue
        $request->getSession()->set(SecurityRequestAttributes::LAST_USERNAME, $email);

        $badges = [new CsrfTokenBadge('authenticate', $csrf)];

        if ($request->request->getBoolean('_remember_me')) {
            $badges[] = new RememberMeBadge();
        }

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($password),
            $badges
        );
    }

    /**
     * Redirection après authentification réussie.
     * Gère aussi le cas spécial d'inscription.
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // ✔️ Fix spécial INSCRIPTION : ignorer le TargetPath
        if ($request->attributes->get('_route') === 'app_register') {
            return new RedirectResponse($this->urlGenerator->generate('app_home'));
        }

        // ✔️ Retourne vers la page protégée d'origine si existante
        if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
            return new RedirectResponse($targetPath);
        }

        // ✔️ Sinon → accueil
        return new RedirectResponse($this->urlGenerator->generate('app_home'));
    }

    /**
     * URL de la page de login (obligatoire pour AbstractLoginFormAuthenticator).
     */
    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}
