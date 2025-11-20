<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Thread;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

final class ThreadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Thread::class);
    }

    /**
     * Retourne toutes les conversations auxquelles participe un utilisateur.
     *
     * @return Thread[]
     */
    public function findByParticipant(User $user): array
    {
        return $this->createQueryBuilder('t')
            ->leftJoin('t.participants', 'p')->addSelect('p')
            ->andWhere(':user MEMBER OF t.participants')
            ->setParameter('user', $user)
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
     * Retourne les threads d’un utilisateur avec leur dernier message.
     *
     * @return Thread[]
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
    public function findExisting(User $a, User $b): ?Thread
{
    return $this->createQueryBuilder('t')
        ->join('t.participants', 'p1')
        ->join('t.participants', 'p2')
        ->andWhere('p1 = :a')
        ->andWhere('p2 = :b')
        ->setParameter('a', $a)
        ->setParameter('b', $b)
        ->setMaxResults(1)
        ->getQuery()
        ->getOneOrNullResult();
}
}
