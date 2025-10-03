<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Message>
 *
 * Repository = couche d'accès aux messages (Message).
 */
class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }

    /**
     * Retourne tous les messages d’un thread, triés par date croissante.
     */
    public function findByThread(int $threadId): array
    {
        return $this->createQueryBuilder('m')
            ->leftJoin('m.sender', 's')->addSelect('s')
            ->leftJoin('m.recipient', 'r')->addSelect('r')
            ->andWhere('m.thread = :threadId')
            ->setParameter('threadId', $threadId)
            ->orderBy('m.createdAt', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne les messages envoyés par un utilisateur (sender).
     */
    public function findSentByUser(int $userId, int $limit = 20): array
    {
        return $this->createQueryBuilder('m')
            ->leftJoin('m.recipient', 'r')->addSelect('r')
            ->andWhere('m.sender = :id')
            ->setParameter('id', $userId)
            ->orderBy('m.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne les messages reçus par un utilisateur (recipient).
     */
    public function findReceivedByUser(int $userId, int $limit = 20): array
    {
        return $this->createQueryBuilder('m')
            ->leftJoin('m.sender', 's')->addSelect('s')
            ->andWhere('m.recipient = :id')
            ->setParameter('id', $userId)
            ->orderBy('m.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
