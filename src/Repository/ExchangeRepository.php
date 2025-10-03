<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Exchange;
use App\Enum\ExchangeStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Exchange>
 *
 * Repository = couche d'accès aux échanges (Exchange).
 */
class ExchangeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Exchange::class);
    }

    /**
     * Retourne les échanges par statut (PENDING, ACCEPTED, etc.).
     */
    public function findByStatus(ExchangeStatus $status, int $limit = 20): array
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.status = :status')
            ->setParameter('status', $status)
            ->orderBy('e.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne les échanges où l'utilisateur est le demandeur (requester).
     */
    public function findByRequester(int $userId): array
    {
        return $this->createQueryBuilder('e')
            ->leftJoin('e.requester', 'u')->addSelect('u')
            ->andWhere('u.id = :id')
            ->setParameter('id', $userId)
            ->orderBy('e.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne les échanges liés aux annonces d'un utilisateur (owner).
     */
    public function findByOwner(int $userId): array
    {
        return $this->createQueryBuilder('e')
            ->leftJoin('e.listing', 'l')->addSelect('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->andWhere('a.id = :id')
            ->setParameter('id', $userId)
            ->orderBy('e.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
