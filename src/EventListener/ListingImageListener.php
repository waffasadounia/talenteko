<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\ListingImage;
use App\Utils\ImageFilters;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Psr\Log\LoggerInterface;

/**
 * Listener Doctrine pour les entités ListingImage.
 * Objectif : pré-générer automatiquement les caches LiipImagine
 * dès qu'une image est persistée en BDD, afin d'éviter la latence
 * côté utilisateur au premier affichage.
 */
#[AsEntityListener(event: Events::postPersist, entity: ListingImage::class)]
final class ListingImageListener
{
    public function __construct(
        private readonly CacheManager $cacheManager,
        private readonly LoggerInterface $logger,
    ) {
    }

    public function postPersist(ListingImage $image): void
    {
        $listing = $image->getListing();
        $category = $listing?->getCategory();

        if (!$listing || !$category) {
            $this->logger->warning('ListingImage persistée sans relation complète.', [
                'imageId' => $image->getId(),
                'listing' => $listing?->getId(),
            ]);

            return;
        }

        $path = '/uploads/listings/'.$category->getSlug().'/'.$image->getPath();

        // Nettoyage du cache existant
        $this->cacheManager->remove($path);

        // Pré-génération des filtres centralisés
        foreach (ImageFilters::ALL as $filter) {
            try {
                $this->cacheManager->generateUrl($path, $filter);
            } catch (\Throwable $e) {
                $this->logger->error('Erreur génération cache LiipImagine.', [
                    'filter' => $filter,
                    'path' => $path,
                    'error' => $e->getMessage(),
                ]);
            }
        }

        $this->logger->info('Caches LiipImagine générés pour nouvelle image.', [
            'imageId' => $image->getId(),
            'filters' => ImageFilters::ALL,
        ]);
    }
}
