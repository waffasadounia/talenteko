<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Thread;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Thread>
 *
 * Repository = couche d'accès aux conversations (Thread).
 */
class ThreadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Thread::class);
    }

    /**
     * Retourne tous les threads auxquels participe un utilisateur.
     */
    public function findByUser(int $userId): array
    {
        return $this->createQueryBuilder('t')
            ->leftJoin('t.participants', 'p')->addSelect('p')
            ->andWhere('p.id = :id')
            ->setParameter('id', $userId)
            ->orderBy('t.updatedAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne le thread existant entre deux utilisateurs (si trouvé).
     */
    public function findBetweenUsers(int $userId1, int $userId2): ?Thread
    {
        return $this->createQueryBuilder('t')
            ->leftJoin('t.participants', 'p')->addSelect('p')
            ->andWhere('p.id IN (:users)')
            ->setParameter('users', [$userId1, $userId2])
            ->groupBy('t.id')
            ->having('COUNT(p.id) = 2')
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Retourne les threads avec leur dernier message, pour un utilisateur.
     */
    public function findWithLastMessageByUser(int $userId, int $limit = 10): array
    {
        return $this->createQueryBuilder('t')
            ->leftJoin('t.participants', 'p')->addSelect('p')
            ->leftJoin('t.messages', 'm')->addSelect('m')
            ->andWhere('p.id = :id')
            ->setParameter('id', $userId)
            ->orderBy('t.updatedAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
