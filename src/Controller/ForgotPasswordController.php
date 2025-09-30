<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Uid\Uuid;

final class ForgotPasswordController extends AbstractController
{
    #[Route('/mot-de-passe-oublie', name: 'app_forgot_password', methods: ['GET', 'POST'])]
    public function request(
        Request $request,
        EntityManagerInterface $em,
        MailerInterface $mailer,
    ): Response {
        if ($request->isMethod('POST')) {
            $email = trim($request->request->getString('email'));

            /** @var ?User $user */
            $user = $em->getRepository(User::class)->findOneBy(['email' => $email]);

            if ($user) {
                // Générer un token unique
                $token = Uuid::v4()->toRfc4122();
                $user->setResetToken($token);
                $user->setResetRequestedAt(new DateTimeImmutable());

                $em->flush();

                // Construire le lien absolu
                $resetUrl = $this->generateUrl('app_reset_password', [
                    'token' => $token,
                ], \Symfony\Component\Routing\Generator\UrlGeneratorInterface::ABSOLUTE_URL);

                // Envoi de l’email
                $emailMessage = (new TemplatedEmail())
                    ->from(new Address($this->getParameter('app.mailer_from'), 'TalentÉkô'))
                    ->to($user->getEmail())
                    ->subject('Réinitialisation de votre mot de passe - TalentÉkô')
                    ->htmlTemplate('emails/reset_password.html.twig')
                    ->context([
                        'resetUrl' => $resetUrl,
                        'user' => $user,
                    ]);

                $mailer->send($emailMessage);

                $this->addFlash('success', 'Un email vous a été envoyé avec un lien de réinitialisation.');

                return $this->redirectToRoute('app_login');
            }

            // Même message pour éviter fuite d’info si email inconnu
            $this->addFlash('info', 'Si un compte existe avec cet email, un message a été envoyé.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_request.html.twig');
    }

    #[Route('/reset/{token}', name: 'app_reset_password', methods: ['GET', 'POST'])]
    public function reset(
        string $token,
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $hasher,
    ): Response {
        /** @var ?User $user */
        $user = $em->getRepository(User::class)->findOneBy(['resetToken' => $token]);

        if (!$user) {
            $this->addFlash('error', 'Lien de réinitialisation invalide ou expiré.');

            return $this->redirectToRoute('app_forgot_password');
        }

        if ($request->isMethod('POST')) {
            $plainPassword = $request->request->getString('password');
            $confirmPassword = $request->request->getString('confirm_password');

            if ($plainPassword !== $confirmPassword) {
                $this->addFlash('error', 'Les mots de passe ne correspondent pas.');

                return $this->redirectToRoute('app_reset_password', ['token' => $token]);
            }

            if (strlen($plainPassword) < 8) {
                $this->addFlash('error', 'Le mot de passe doit contenir au moins 8 caractères.');

                return $this->redirectToRoute('app_reset_password', ['token' => $token]);
            }

            $user->setPassword($hasher->hashPassword($user, $plainPassword));
            $user->setResetToken(null);
            $user->setResetRequestedAt(null);

            $em->flush();

            $this->addFlash('success', 'Votre mot de passe a été réinitialisé avec succès. Vous pouvez vous connecter.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_password.html.twig', [
            'token' => $token,
        ]);
    }
}
