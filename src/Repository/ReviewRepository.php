<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Review;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Review>
 *
 * Repository = gestion des avis entre utilisateurs.
 */
final class ReviewRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Review::class);
    }

    /**
     * Retourne les avis reçus par un utilisateur.
     */
    public function findByUserReceived(int $userId, int $limit = 50): array
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.reviewedUser = :id')
            ->setParameter('id', $userId)
            ->orderBy('r.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne les avis donnés par un utilisateur.
     */
    public function findByUserGiven(int $userId, int $limit = 50): array
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.author = :id')
            ->setParameter('id', $userId)
            ->orderBy('r.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Calcule la note moyenne des avis reçus par un utilisateur.
     */
    public function getAverageRating(int $userId): float
    {
        $result = $this->createQueryBuilder('r')
            ->select('AVG(r.rating) as avgRating')
            ->andWhere('r.reviewedUser = :id')
            ->setParameter('id', $userId)
            ->getQuery()
            ->getSingleScalarResult();

        return null !== $result ? (float) $result : 0.0;
    }
}
