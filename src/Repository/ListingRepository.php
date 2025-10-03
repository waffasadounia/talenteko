<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Listing;
use App\Enum\ListingStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Repository = couche d'accès aux annonces (Listing).
 * Permet à Symfony/Doctrine d'injecter ListingRepository dans les contrôleurs.
 */
class ListingRepository extends ServiceEntityRepository
{
    /**
     * Le constructeur enregistre l'entité gérée par ce repository : Listing::class.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Listing::class);
    }

    /**
     * Récupérer les 12 dernières annonces (tous statuts confondus).
     * Utile pour debug ou admin.
     */
    public function findLatestWithJoins(int $limit = 12): array
    {
        return $this->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Récupérer les dernières annonces publiées (status = published).
     */
    public function findPublishedLatest(int $limit = 12): array
    {
        return $this->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->andWhere('l.status = :status')
            ->setParameter('status', ListingStatus::PUBLISHED)
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Recherche par mot-clé et/ou localisation.
     */
    public function search(?string $keyword = null, ?string $location = null, int $limit = 20): array
    {
        $qb = $this->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->andWhere('l.status = :status')
            ->setParameter('status', ListingStatus::PUBLISHED)
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults($limit);

        if ($keyword) {
            $qb->andWhere('l.title LIKE :kw OR l.description LIKE :kw')
                ->setParameter('kw', '%'.$keyword.'%');
        }

        if ($location) {
            $qb->andWhere('l.location LIKE :loc')
                ->setParameter('loc', '%'.$location.'%');
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Pagination simple : annonces publiées avec offset + limit.
     */
    public function findPublishedPaginated(int $page = 1, int $limit = 12): array
    {
        return $this->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->andWhere('l.status = :status')
            ->setParameter('status', ListingStatus::PUBLISHED)
            ->orderBy('l.createdAt', 'DESC')
            ->setFirstResult(($page - 1) * $limit)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
