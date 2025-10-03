<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Notification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Notification>
 *
 * Repository = gestion des notifications utilisateur.
 */
final class NotificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Notification::class);
    }

    /**
     * Retourne toutes les notifications d’un utilisateur, triées par date.
     */
    public function findByUser(int $userId, int $limit = 50): array
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.user = :id')
            ->setParameter('id', $userId)
            ->orderBy('n.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne uniquement les notifications non lues d’un utilisateur.
     */
    public function findUnreadByUser(int $userId, int $limit = 20): array
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.user = :id')
            ->andWhere('n.isRead = :read')
            ->setParameter('id', $userId)
            ->setParameter('read', false)
            ->orderBy('n.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
