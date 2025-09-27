<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\ListingImage;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;

/**
 * Listener Doctrine pour les entités ListingImage
 * - Objectif : générer automatiquement les caches LiipImagine
 *   dès qu'une nouvelle image est persistée en BDD.
 *
 * Avantage :
 * - Plus de latence côté visiteur (images déjà prêtes dès l'upload).
 * - Plus de problème d'accès anonyme (cache déjà écrit dans /public/media/cache).
 */
#[AsEntityListener(event: Events::postPersist, entity: ListingImage::class)]
class ListingImageListener
{
    public function __construct(
        private CacheManager $cacheManager,
    ) {
    }

    public function postPersist(ListingImage $image): void
    {
        // 1) On récupère la catégorie de l'annonce
        $categorySlug = $image->getListing()->getCategory()->getSlug();

        // 2) On reconstruit le chemin relatif attendu par LiipImagine
        // Exemple : /uploads/listings/bien-etre/2.jpg
        $path = '/uploads/listings/' . $categorySlug . '/' . $image->getPath();

        // 3) On supprime d’éventuels caches précédents (sécurité)
        $this->cacheManager->remove($path);

        // 4) On génère les versions déclarées dans liip_imagine.yaml
        foreach (['listing_card', 'listing_show', 'avatar_thumb'] as $filter) {
            $this->cacheManager->generateUrl($path, $filter);
        }
    }
}
