<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\ListingImage;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;

/**
 * Listener Doctrine pour les entitÃ©s ListingImage
 * - Objectif : gÃ©nÃ©rer automatiquement les caches LiipImagine
 *   dÃ¨s qu'une nouvelle image est persistÃ©e en BDD.
 *
 * Avantage :
 * - Plus de latence cÃ´tÃ© visiteur (images prÃªtes dÃ¨s l'upload).
 * - Plus de problÃ¨me d'accÃ¨s anonyme (cache dÃ©jÃ  Ã©crit dans /public/media/cache).
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
        // 1) On rÃ©cupÃ¨re la catÃ©gorie de l'annonce
        $categorySlug = $image->getListing()->getCategory()->getSlug();

        // 2) On reconstruit le chemin relatif attendu par LiipImagine
        // Exemple : /uploads/listings/bien-etre/2.jpg
        $path = '/uploads/listings/' . $categorySlug . '/' . $image->getPath();

        // 3) On supprime d'Ã©ventuels caches prÃ©cÃ©dents (sÃ©curitÃ©)
        $this->cacheManager->remove($path);

        // 4) On gÃ©nÃ¨re toutes les variantes configurÃ©es dans liip_imagine.yaml
        foreach (['listing_card', 'listing_show', 'avatar_thumb'] as $filter) {
            $this->cacheManager->generateUrl($path, $filter);
        }
    }
}
