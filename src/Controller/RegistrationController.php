<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Inscription utilisateur.
 */
final class RegistrationController extends AbstractController
{
    #[Route('/inscription', name: 'app_register', methods: ['GET', 'POST'])]
    public function register(
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $hasher,
        Security $security,
    ): Response {
        // Déjà connecté → pas d’inscription
        if ($security->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('app_home');
        }

        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        // Honeypot anti-bot
        if ($form->isSubmitted() && '' !== trim((string) $request->request->get('website', ''))) {
            $form->addError(new FormError('Validation anti-robot : merci de réessayer.'));

            return $this->render('security/register.html.twig', [
                'form' => $form->createView(),
            ], new Response('', Response::HTTP_UNPROCESSABLE_ENTITY));
        }

        if ($form->isSubmitted() && $form->isValid()) {
            // Hash du mot de passe
            $hashed = $hasher->hashPassword($user, (string) $user->getPlainPassword());
            $user->setPassword($hashed);

            $em->persist($user);
            $em->flush();

            // Connexion auto (au lieu de rediriger vers /login)
            $this->addFlash('success', 'Bienvenue sur Talentékô ! Votre compte a été créé.');

            return $security->login($user);
        }

        $statusCode = $form->isSubmitted()
            ? Response::HTTP_UNPROCESSABLE_ENTITY
            : Response::HTTP_OK;

        return $this->render('security/register.html.twig', [
            'form' => $form->createView(),
        ], new Response('', $statusCode));
    }
}
