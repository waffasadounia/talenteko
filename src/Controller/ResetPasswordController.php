<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\PasswordResetToken;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Uid\Uuid;

#[Route('/reset-password')]
final class ResetPasswordController extends AbstractController
{
    /**
     * Étape 1 — Demande de réinitialisation du mot de passe.
     * Affiche un formulaire simple (email) et envoie un lien sécurisé si l’adresse existe.
     */
    #[Route('/request', name: 'app_forgot_password', methods: ['GET', 'POST'])]
    public function request(
        Request $request,
        EntityManagerInterface $em,
        MailerInterface $mailer,
    ): Response {
        if ($request->isMethod('POST')) {
            $email = trim((string) $request->request->get('email'));

            /** @var User|null $user */
            $user = $em->getRepository(User::class)->findOneBy(['email' => $email]);

            if ($user) {
                // Génération du token unique + date d’expiration
                $token = Uuid::v4()->toRfc4122();

                $reset = new PasswordResetToken();
                $reset->setUser($user);
                $reset->setToken($token);
                $reset->setExpiresAt(new \DateTimeImmutable('+1 hour'));

                $em->persist($reset);
                $em->flush();

                // Envoi de l’e-mail de réinitialisation
                $mail = (new TemplatedEmail())
                    ->from($this->getParameter('app.mailer_from'))
                    ->to($user->getEmail())
                    ->subject('Réinitialisation de votre mot de passe TalentÉkô')
                    ->htmlTemplate('security/reset_password.html.twig')
                    ->context([
                        'resetUrl' => $this->generateUrl(
                            'app_reset_password',
                            ['token' => $token],
                            UrlGeneratorInterface::ABSOLUTE_URL
                        ),
                        'user' => $user,
                    ]);

                $mailer->send($mail);
            }

            // Message générique anti-brute-force : même réponse quelle que soit la validité de l’adresse
            $this->addFlash('info', 'Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_request.html.twig');
    }

    /**
     * Étape 2 — Réinitialisation via le lien reçu par e-mail.
     * Vérifie le token, contrôle la sécurité, valide les champs, puis met à jour le mot de passe.
     */
    #[Route('/{token}', name: 'app_reset_password', methods: ['GET', 'POST'])]
    public function reset(
        string $token,
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $hasher,
    ): Response {
        /** @var PasswordResetToken|null $reset */
        $reset = $em->getRepository(PasswordResetToken::class)->findOneBy(['token' => $token]);

        // Vérification validité du lien
        if (!$reset || $reset->isExpired()) {
            $this->addFlash('error', 'Ce lien n’est pas valide ou a expiré.');

            return $this->redirectToRoute('app_forgot_password');
        }

        if ($request->isMethod('POST')) {
            $password = (string) $request->request->get('password');
            $confirm = (string) $request->request->get('confirm');

            // Vérification de cohérence
            if ($password !== $confirm) {
                $this->addFlash('error', 'Les mots de passe ne correspondent pas.');

                return $this->redirectToRoute('app_reset_password', ['token' => $token]);
            }

            // Vérification force minimale
            if (\strlen($password) < 10) {
                $this->addFlash('error', 'Le mot de passe doit contenir au moins 10 caractères.');

                return $this->redirectToRoute('app_reset_password', ['token' => $token]);
            }

            // Hashage et sauvegarde du nouveau mot de passe
            $user = $reset->getUser();
            $user->setPassword($hasher->hashPassword($user, $password));

            // Suppression du token (usage unique)
            $em->remove($reset);
            $em->flush();

            $this->addFlash('success', 'Votre mot de passe a été mis à jour. Vous pouvez vous connecter.');

            return $this->redirectToRoute('app_login');
        }

        // Affichage du formulaire de saisie d’un nouveau mot de passe
        return $this->render('security/reset_password.html.twig', [
            'token' => $token,
        ]);
    }
}
