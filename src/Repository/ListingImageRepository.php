<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\ListingImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ListingImage>
 *
 * Repository = gestion des images d'annonce (ListingImage).
 */
final class ListingImageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ListingImage::class);
    }

    /**
     * Retourne toutes les images d'une annonce.
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

    /**
     * Retourne l'image principale d'une annonce (isPrimary = true).
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
