<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Repository — Gestion des entités Message (messagerie TalentÉkô)
 * Fournit les méthodes principales :
 * - récupération des messages d’un thread
 * - messages envoyés / reçus par un utilisateur
 */
final class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }
    //  Récupération par thread

    /**
     * Retourne tous les messages d’un thread, triés par ordre chronologique.
     *
     * @param int $threadId ID du thread concerné
     * @return Message[]
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
    //  Messages envoyés par utilisateur

    /**
     * Retourne les messages envoyés par un utilisateur (expéditeur).
     *
     * @param int $userId ID de l’expéditeur
     * @param int $limit  Limite de résultats (par défaut : 20)
     * @return Message[]
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
    //  Messages reçus par utilisateur

    /**
     * Retourne les messages reçus par un utilisateur (destinataire).
     *
     * @param int $userId ID du destinataire
     * @param int $limit  Limite de résultats (par défaut : 20)
     * @return Message[]
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
