<?php

namespace App\Controller;

use App\Entity\Listing;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
// ⬇️ Ajout nécessaire pour le mapping slug → entité (résolution par un autre champ que l'id)
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Contrôleur des annonces (lecture publique + dépôt).
 * Bonnes pratiques :
 * - Contrôleurs "fins" : on laisse Symfony gérer au maximum (MapEntity, 404 auto si introuvable)
 * - Routes explicites et contraintes claires (regex sur slug)
 * - Méthodes final class : immutabilité / pas d’héritage
 */
final class AnnonceController extends AbstractController
{
    /**
     * Déposer une annonce (protégée)
     * URL: /annonce/nouvelle
     * Name: app_annonce_new
     *
     * Notes pédagogiques :
     * - #[IsGranted('IS_AUTHENTICATED_FULLY')] garantit que l’utilisateur est bien connecté
     *   (pas seulement via remember_me) pour accéder au formulaire.
     * - À brancher ensuite sur un vrai formulaire Symfony (FormType + CSRF + validation).
     *
     * ⚠️ Priorité :
     * - Cette route est volontairement prioritaire (priority: 10) pour qu’elle
     *   soit évaluée AVANT la route générique /annonce/{slug}.
     */
    #[Route('/annonce/nouvelle', name: 'app_annonce_new', methods: ['GET'], priority: 10)]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function new(): Response
    {
        return $this->render('annonce/new.html.twig', [
            'page_title' => 'Déposer une annonce',
        ]);
    }

    /**
     * Fiche annonce (publique) — via SLUG
     * URL: /annonce/{slug}
     * Name: app_listing_show
     *
     * Notes pédagogiques :
     * - Par défaut, l’EntityValueResolver tente de résoudre un paramètre typé (Listing $listing)
     *   à partir d’un paramètre de route {id}. Ici, on utilise {slug}, d’où l’attribut #[MapEntity].
     * - #[MapEntity(mapping: ['slug' => 'slug'])] indique à Symfony d’utiliser le champ "slug"
     *   de l’entité Listing pour charger l’objet à partir de la valeur {slug} de l’URL.
     * - Si aucune entité n’est trouvée, Symfony lève automatiquement une 404 (NotFoundHttpException),
     *   car l’argument n’est pas nullable.
     *
     * ⚠️ Garde-fous :
     * - La regex interdit :
     *   • les slugs 100% numériques (évite le conflit /annonce/123)
     *   • le mot-clé réservé "nouvelle" (évite que /annonce/nouvelle soit gobé par {slug})
     */
    #[Route(
        '/annonce/{slug}',
        name: 'app_listing_show',
        methods: ['GET'],
        requirements: [
            // Contrainte sur {slug} :
            // - (?!nouvelle$) : empêche le mot-clé réservé "nouvelle" d'être pris comme slug
            // - (?!\d+$) : interdit les slugs composés UNIQUEMENT de chiffres (évite le conflit /annonce/123)
            // - [A-Za-z0-9] : commence par un alphanumérique
            // - [A-Za-z0-9\-]* : puis zéro ou plusieurs alphanumériques ou tirets
            // Exemples OK : "cours-de-piano-101", "bricolage3d", "a-1"
            // Exemples KO : "123", "-debutant", "mon_slug" (underscore non autorisé)
            'slug' => '(?!nouvelle$)(?!\d+$)[A-Za-z0-9][A-Za-z0-9\-]*',
        ],
        priority: 0
    )]
    public function show(
        // ⬇️ Dit à Symfony : prends la valeur de route "slug"
        // et charge Listing où champ "slug" = valeur, via le repository explicitement
        #[MapEntity(expr: 'repository.findOneBy({slug: slug})')] Listing $listing
    ): Response {
        // ⚠️ On prépare un tableau "annonce" minimal pour la vue.
        // Avantages : on contrôle exactement ce qui est exposé en Twig
        // (utile si l’entité grossit ou si on veut du lazy loading maîtrisé).
        $annonce = [
            'id'          => $listing->getId(),
            'slug'        => $listing->getSlug(),
            'title'       => $listing->getTitle(),
            'description' => $listing->getDescription(),
            'category'    => $listing->getCategory()?->getName(),
            'user'        => [
                'name' => $listing->getAuthor()?->getPseudo() ?: 'Membre',
            ],
            'ville'       => $listing->getCity(),
            'type'        => $listing->getType(),
            'createdAt'   => $listing->getCreatedAt(),
        ];

        return $this->render('annonce/show.html.twig', [
            'annonce' => $annonce,
        ]);
    }
}
