<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\ListingImage;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;

/**
 * Listener Doctrine pour les entitÃƒÂ©s ListingImage
 * - Objectif : gÃƒÂ©nÃƒÂ©rer automatiquement les caches LiipImagine
 *   dÃƒÂ¨s qu'une nouvelle image est persistÃƒÂ©e en BDD.
 *
 * Avantage :
 * - Plus de latence cÃƒÂ´tÃƒÂ© visiteur (images prÃƒÂªtes dÃƒÂ¨s l'upload).
 * - Plus de problÃƒÂ¨me d'accÃƒÂ¨s anonyme (cache dÃƒÂ©jÃƒÂ  ÃƒÂ©crit dans /public/media/cache).
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
        // 1) On rÃƒÂ©cupÃƒÂ¨re la catÃƒÂ©gorie de l'annonce
        $categorySlug = $image->getListing()->getCategory()->getSlug();

        // 2) On reconstruit le chemin relatif attendu par LiipImagine
        // Exemple : /uploads/listings/bien-etre/2.jpg
        $path = '/uploads/listings/' . $categorySlug . '/' . $image->getPath();

        // 3) On supprime d'ÃƒÂ©ventuels caches prÃƒÂ©cÃƒÂ©dents (sÃƒÂ©curitÃƒÂ©)
        $this->cacheManager->remove($path);

        // 4) On gÃƒÂ©nÃƒÂ¨re toutes les variantes configurÃƒÂ©es dans liip_imagine.yaml
        foreach (['listing_card', 'listing_show', 'avatar_thumb'] as $filter) {
            $this->cacheManager->generateUrl($path, $filter);
        }
    }
}

