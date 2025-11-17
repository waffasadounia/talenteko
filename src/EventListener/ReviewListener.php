<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Entity\Review;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Listener Doctrine : met à jour la note moyenne d’un Listing
 * à chaque ajout, modification ou suppression d’un avis (Review).
 */
#[AsDoctrineListener(event: Events::postPersist)]
#[AsDoctrineListener(event: Events::postUpdate)]
#[AsDoctrineListener(event: Events::postRemove)]
final class ReviewListener
{
    public function __construct(private EntityManagerInterface $em) {}

    public function postPersist(LifecycleEventArgs $args): void
    {
        $this->updateListingRating($args);
    }

    public function postUpdate(LifecycleEventArgs $args): void
    {
        $this->updateListingRating($args);
    }

    public function postRemove(LifecycleEventArgs $args): void
    {
        $this->updateListingRating($args);
    }

    private function updateListingRating(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        if (!$entity instanceof Review) {
            return;
        }

        $listing = $entity->getListing();
        if (!$listing) {
            return;
        }

        // Recalculer la moyenne
        $listing->updateAverageRating();

        // Persister les changements
        $this->em->persist($listing);
        $this->em->flush();
    }
}
