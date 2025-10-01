<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\PasswordResetToken;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Uid\Uuid;

#[Route('/reset-password')]
final class ResetPasswordController extends AbstractController
{
    #[Route('/request', name: 'app_forgot_password', methods: ['GET', 'POST'])]
    public function request(
        Request $request,
        EntityManagerInterface $em,
        MailerInterface $mailer,
    ): Response {
        if ($request->isMethod('POST')) {
            $email = trim((string) $request->request->get('email'));

            /** @var ?User $user */
            $user = $em->getRepository(User::class)->findOneBy(['email' => $email]);

            if ($user) {
                // 🎟️ Générer un token unique + expiration
                $token = Uuid::v4()->toRfc4122();

                $reset = new PasswordResetToken();
                $reset->setUser($user);
                $reset->setToken($token);
                $reset->setExpiresAt(new DateTimeImmutable('+1 hour'));

                $em->persist($reset);
                $em->flush();

                // 📩 Envoi de l’email
                $mail = (new TemplatedEmail())
                    ->from($this->getParameter('app.mailer_from'))
                    ->to($user->getEmail())
                    ->subject('Réinitialisation de mot de passe')
                    ->htmlTemplate('security/reset_email.html.twig')
                    ->context([
                        'resetUrl' => $this->generateUrl(
                            'app_reset_password',
                            ['token' => $token],
                            \Symfony\Component\Routing\Generator\UrlGeneratorInterface::ABSOLUTE_URL,
                        ),
                    ]);

                $mailer->send($mail);
            }

            // Même message dans tous les cas (anti brute-force & anti-leak)
            $this->addFlash('info', 'Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_request.html.twig');
    }

    #[Route('/{token}', name: 'app_reset_password', methods: ['GET', 'POST'])]
    public function reset(
        string $token,
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $hasher,
    ): Response {
        $reset = $em->getRepository(PasswordResetToken::class)->findOneBy(['token' => $token]);

        if (!$reset || $reset->isExpired()) {
            $this->addFlash('error', 'Ce lien n’est pas valide ou a expiré.');
            return $this->redirectToRoute('app_forgot_password');
        }

        if ($request->isMethod('POST')) {
            $password = (string) $request->request->get('password');
            $confirm = (string) $request->request->get('confirm');

            if ($password !== $confirm) {
                $this->addFlash('error', 'Les mots de passe ne correspondent pas.');
                return $this->redirectToRoute('app_reset_password', ['token' => $token]);
            }

            if (strlen($password) < 10) {
                $this->addFlash('error', 'Le mot de passe doit contenir au moins 10 caractères.');
                return $this->redirectToRoute('app_reset_password', ['token' => $token]);
            }

            $user = $reset->getUser();
            $user->setPassword($hasher->hashPassword($user, $password));

            // 🗑️ Supprime le token (usage unique)
            $em->remove($reset);
            $em->flush();

            $this->addFlash('success', 'Mot de passe mis à jour ✅ Vous pouvez vous connecter.');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_password.html.twig', [
            'token' => $token,
        ]);
    }
}
