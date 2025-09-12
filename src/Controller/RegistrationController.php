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
use Symfony\Component\Form\FormError;

/**
 * Inscription utilisateur (publique)
 * - GET : affiche le formulaire.
 * - POST : valide + hash le mot de passe + persiste l'utilisateur.
 *
 * Bonnes pratiques :
 * - Email = identifiant (cf. User::getUserIdentifier()).
 * - Hash via UserPasswordHasherInterface (jamais stocker le mot de passe en clair).
 * - Messages d’erreur accessibles (gérés par le composant Form + Twig).
 * - Compatibilité Turbo Drive :
 *      * Succès POST  => redirection (302)
 *      * POST invalide => renvoyer la vue avec code 422 (Unprocessable Entity).
 */
final class RegistrationController extends AbstractController
{
    #[Route('/inscription', name: 'app_register', methods: ['GET', 'POST'])]
    public function register(Request $req, EM $em, UserPasswordHasherInterface $hasher): Response
    {
        // 🚫 Sécurité : un utilisateur déjà connecté ne doit pas accéder à l'inscription
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }

        // 1) Nouvel utilisateur vide
        $user = new User();

        // 2) Création du formulaire
        //    NB : RegistrationType doit contenir un champ "plainPassword" (mapped=false).
        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($req);

        // 3) Vérification honeypot (champ "website" caché)
        if ($form->isSubmitted() && trim((string) $req->request->get('website', '')) !== '') {
            $form->addError(new FormError('Validation anti-robot : merci de réessayer.'));
            $resp = $this->render('security/register.html.twig', [
                'form' => $form->createView(),
            ]);
            $resp->setStatusCode(Response::HTTP_UNPROCESSABLE_ENTITY);
            return $resp;
        }

        // 4) Soumission valide
        if ($form->isSubmitted() && $form->isValid()) {
            // a) Récupération du mot de passe en clair
            $plainPassword = $user->getPlainPassword();

            // b) Hashage avec UserPasswordHasherInterface
            //    → garantit que seul le hash est stocké
            $hashed = $hasher->hashPassword($user, (string) $plainPassword);
            $user->setPassword($hashed);

            // c) Persistance
            $em->persist($user);
            $em->flush();

            // d) UX : message flash + redirection vers login
            $this->addFlash('success', 'Compte créé avec succès. Vous pouvez vous connecter.');
            return $this->redirectToRoute('app_login');
        }

        // 5) Rendu du formulaire
        $statusCode = $form->isSubmitted()
            ? Response::HTTP_UNPROCESSABLE_ENTITY // POST invalide
            : Response::HTTP_OK;                  // GET simple

        $resp = $this->render('security/register.html.twig', [
            'form' => $form->createView(),
        ]);
        $resp->setStatusCode($statusCode);
        return $resp;
    }
}
