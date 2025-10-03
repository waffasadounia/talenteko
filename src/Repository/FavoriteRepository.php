<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Favorite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Favorite>
 *
 * Repository = gestion des favoris (liens entre utilisateur et annonce).
 */
final class FavoriteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Favorite::class);
    }

    /**
     * Retourne tous les favoris d’un utilisateur.
     */
    public function findByUser(int $userId, int $limit = 50): array
    {
        return $this->createQueryBuilder('f')
            ->leftJoin('f.listing', 'l')->addSelect('l')
            ->andWhere('f.user = :id')
            ->setParameter('id', $userId)
            ->orderBy('f.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Vérifie si un utilisateur a déjà mis une annonce en favori.
     */
    public function isFavorite(int $userId, int $listingId): bool
    {
        $count = $this->createQueryBuilder('f')
            ->select('COUNT(f.id)')
            ->andWhere('f.user = :userId')
            ->andWhere('f.listing = :listingId')
            ->setParameter('userId', $userId)
            ->setParameter('listingId', $listingId)
            ->getQuery()
            ->getSingleScalarResult();

        return $count > 0;
    }

    /**
     * Supprime un favori spécifique.
     */
    public function removeFavorite(int $userId, int $listingId): void
    {
        $this->createQueryBuilder('f')
            ->delete()
            ->andWhere('f.user = :userId')
            ->andWhere('f.listing = :listingId')
            ->setParameter('userId', $userId)
            ->setParameter('listingId', $listingId)
            ->getQuery()
            ->execute();
    }
}
