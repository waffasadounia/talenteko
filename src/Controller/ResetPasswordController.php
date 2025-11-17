<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\PasswordResetToken;
use App\Entity\User;
use App\Form\PasswordResetRequestType;
use App\Form\PasswordResetConfirmType;
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
     * ÉTAPE 1 — Formulaire "Mot de passe oublié"
     */
    #[Route('/request', name: 'app_forgot_password', methods: ['GET', 'POST'])]
    public function request(
        Request $request,
        EntityManagerInterface $em,
        MailerInterface $mailer
    ): Response {
        // Formulaire Symfony
        $form = $this->createForm(PasswordResetRequestType::class);
        $form->handleRequest($request);

        // Traitement
        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->get('email')->getData();

            /** @var User|null $user */
            $user = $em->getRepository(User::class)->findOneBy(['email' => $email]);

            if ($user) {
                // Générer un token unique
                $token = Uuid::v4()->toRfc4122();

                $reset = new PasswordResetToken();
                $reset->setUser($user);
                $reset->setToken($token);
                $reset->setExpiresAt(new \DateTimeImmutable('+1 hour'));

                $em->persist($reset);
                $em->flush();

                // Email
                $mail = (new TemplatedEmail())
                    ->from($this->getParameter('app.mailer_from'))
                    ->to($user->getEmail())
                    ->subject('Réinitialisation de votre mot de passe TalentÉkô')
                    ->htmlTemplate('security/reset_password_email.html.twig')
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

            // Toujours afficher ce message (sécurité)
            $this->addFlash('info', 'Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_request.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * ÉTAPE 2 — Page où l'utilisateur choisit un nouveau mot de passe
     */
    #[Route('/{token}', name: 'app_reset_password', methods: ['GET', 'POST'])]
    public function reset(
        string $token,
        Request $request,
        EntityManagerInterface $em,
        UserPasswordHasherInterface $hasher
    ): Response {
        /** @var PasswordResetToken|null $reset */
        $reset = $em->getRepository(PasswordResetToken::class)->findOneBy(['token' => $token]);

        // Token incorrect ou expiré
        if (!$reset || $reset->isExpired()) {
            $this->addFlash('error', 'Ce lien n’est pas valide ou a expiré.');
            return $this->redirectToRoute('app_forgot_password');
        }

        // Formulaire de nouveau mot de passe
        $form = $this->createForm(PasswordResetConfirmType::class);
        $form->handleRequest($request);

        // Soumission OK
        if ($form->isSubmitted() && $form->isValid()) {

            $password = $form->get('plainPassword')->getData();

            // Mise à jour du mot de passe
            $user = $reset->getUser();
            $user->setPassword($hasher->hashPassword($user, $password));

            // Suppression du token (usage unique)
            $em->remove($reset);
            $em->flush();

            $this->addFlash('success', 'Votre mot de passe a été mis à jour. Vous pouvez vous connecter.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_password.html.twig', [
            'resetForm' => $form->createView(),
        ]);
    }
}
