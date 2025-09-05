<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface as EM;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\{Request, Response};
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Inscription utilisateur (publique)
 * - GET: affiche le formulaire
 * - POST: valide + hash le mot de passe + persiste
 * Bonne pratique:
 * - Email = identifiant
 * - Hash via UserPasswordHasherInterface
 * - Messages d’erreur accessibles (gérés par Form + Twig)
 */
final class RegistrationController extends AbstractController
{
    #[Route('/inscription', name: 'app_register', methods: ['GET','POST'])]
    public function register(Request $req, EM $em, UserPasswordHasherInterface $hasher): Response
    {
        // Si déjà connecté, inutile d’afficher le formulaire
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }

        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user, [
            // Vous pouvez passer des options de form ici si besoin
        ]);
        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()) {
            // Hash du mot de passe
            $hashed = $hasher->hashPassword($user, (string) $form->get('plainPassword')->getData());
            $user->setPassword($hashed);

            // Email déjà normalisé en lowercase par setEmail() (ton entité)
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', 'Compte créé. Vous pouvez vous connecter.');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
