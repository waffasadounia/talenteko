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
 *      * POST invalide => renvoyer la vue avec code 422 (Unprocessable Entity)
 *        afin d’éviter l’erreur "Form responses must redirect to another location".
 */
final class RegistrationController extends AbstractController
{
    /**
     * Route d’inscription
     * - name: app_register
     * - methods: GET|POST
     *
     * NB: L’accès public est ouvert via security.yaml (access_control -> ^/inscription$ PUBLIC_ACCESS).
     */
    #[Route('/inscription', name: 'app_register', methods: ['GET','POST'])]
    public function register(Request $req, EM $em, UserPasswordHasherInterface $hasher): Response
    {
        // Si déjà connecté, inutile d’afficher l’inscription : on renvoie vers l’accueil.
        // Évite l’état "connecté" tentant de recréer un compte.
        if ($this->getUser()) {
            return $this->redirectToRoute('app_home');
        }

        // Instanciation d’un nouvel utilisateur.
        // Le formulaire hydratera cet objet (email, pseudo, location).
        $user = new User();

        // Création du formulaire (RegistrationType configure les champs + contraintes).
        // NB : le champ "plainPassword" est "mapped=false" (non mappé directement sur l’entité).
        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($req);

        // --- Anti-spam / honeypot (champ caché "website") ---
        // Principe : les humains ne remplissent pas ce champ caché.
        // Si rempli, on considère la soumission suspecte → on ajoute une erreur globale
        // et on renvoie un 422 (comme pour une validation invalide).
        if ($form->isSubmitted() && $req->request->get('website')) {
            // Ajoute une erreur au formulaire (sera affichée dans le résumé d’erreurs global côté Twig)
            $form->addError(new FormError('Validation anti-robot : merci de réessayer.'));
            $resp = $this->render('security/register.html.twig', [
                'form' => $form->createView(),
            ]);
            $resp->setStatusCode(Response::HTTP_UNPROCESSABLE_ENTITY); // 422 → Turbo-friendly
            return $resp;
        }

        // Soumission valide : on hash le mot de passe puis on persiste l’utilisateur.
        if ($form->isSubmitted() && $form->isValid()) {
            // 1) Récupérer le mot de passe en clair depuis le champ non mappé.
            //    -> Le Type gère un RepeatedType pour confirmation.
            /** @var string $plain */
            $plain = (string) $form->get('plainPassword')->getData();

            // 2) Hash du mot de passe : JAMAIS de stockage en clair.
            $hashed = $hasher->hashPassword($user, $plain);
            $user->setPassword($hashed);

            // 3) Persistance en base (INSERT).
            //    Important : faire le flush AVANT la redirection, sinon rien n’est écrit.
            $em->persist($user);
            $em->flush();

            // 4) Retour UX : message flash + redirection.
            //    Turbo attend une redirection après un POST réussi (302).
            $this->addFlash('success', 'Compte créé. Vous pouvez vous connecter.');
            return $this->redirectToRoute('app_login');
        }

        // À ce stade :
        // - Soit c’est un GET (form non soumis) -> on renvoie 200 (OK).
        // - Soit c’est un POST invalide (erreurs de validation) -> on renvoie 422 (Unprocessable Entity)
        //   pour que Turbo ne lève pas "Form responses must redirect to another location".
        $statusCode = $form->isSubmitted() ? Response::HTTP_UNPROCESSABLE_ENTITY : Response::HTTP_OK;

        // Deux options équivalentes :
        //  A) new Response($this->renderView(...), $statusCode);
        //  B) $resp = $this->render(...); $resp->setStatusCode($statusCode); return $resp;
        $resp = $this->render('security/register.html.twig', [
            'form' => $form->createView(),
        ]);
        $resp->setStatusCode($statusCode);
        return $resp;
    }
}

