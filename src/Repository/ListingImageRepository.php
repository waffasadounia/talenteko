<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\ListingImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Repository — Gestion des entités ListingImage (images d’annonces TalentÉkô)
 * Fournit les méthodes principales :
 * - récupération des images d’une annonce
 * - récupération de l’image principale (isPrimary = true)
 */
final class ListingImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ListingImage::class);
    }
    // Récupération des images d’une annonce

    /**
     * Retourne toutes les images associées à une annonce donnée.
     *
     * @param int $listingId ID de l’annonce
     * @return ListingImage[]
     */
    public function findByListing(int $listingId): array
    {
        return $this->createQueryBuilder('li')
            ->andWhere('li.listing = :listingId')
            ->setParameter('listingId', $listingId)
            ->orderBy('li.id', 'ASC')
            ->getQuery()
            ->getResult();
    }
    // Récupération de l’image principale

    /**
     * Retourne l’image principale d’une annonce (isPrimary = true).
     *
     * @param int $listingId ID de l’annonce
     */
    public function findPrimaryByListing(int $listingId): ?ListingImage
    {
        return $this->createQueryBuilder('li')
            ->andWhere('li.listing = :listingId')
            ->andWhere('li.isPrimary = :primary')
            ->setParameter('listingId', $listingId)
            ->setParameter('primary', true)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
