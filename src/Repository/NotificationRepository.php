<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Notification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Repository — Gestion des entités Notification
 * Fournit les méthodes principales :
 * - récupération des notifications par utilisateur
 * - filtrage des notifications non lues
 */
final class NotificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Notification::class);
    }
    // Notifications par utilisateur

    /**
     * Retourne toutes les notifications d’un utilisateur, triées par date.
     *
     * @param int $userId ID de l’utilisateur
     * @param int $limit  Nombre maximum de résultats (défaut : 50)
     * @return Notification[]
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
    // Notifications non lues
   
    /**
     * Retourne uniquement les notifications non lues d’un utilisateur.
     *
     * @param int $userId ID de l’utilisateur
     * @param int $limit  Nombre maximum de résultats (défaut : 20)
     * @return Notification[]
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
