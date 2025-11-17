<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Exchange;
use App\Enum\ExchangeStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Repository — Gestion des entités Exchange (
 * Fournit les méthodes de récupération et de filtrage :
 * - par statut (PENDING, ACCEPTED...)
 * - par utilisateur (demandeur ou propriétaire)
 */
final class ExchangeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Exchange::class);
    }
    // Récupération par statut

    /**
     * Retourne les échanges selon un statut donné (PENDING, ACCEPTED…).
     *
     * @param ExchangeStatus $status Statut de l’échange à filtrer
     * @param int            $limit  Limite de résultats (par défaut : 20)
     *
     * @return Exchange[]
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
    // Récupération par utilisateur (demandeur)
    /**
     * Retourne les échanges où l’utilisateur est le demandeur (requester).
     *
     * @param int $userId ID de l’utilisateur connecté
     * @return Exchange[]
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
     * Retourne les échanges liés aux annonces d’un utilisateur propriétaire.
     *
     * @param int $userId ID du propriétaire de l’annonce
     * @return Exchange[]
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
