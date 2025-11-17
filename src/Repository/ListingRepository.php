<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Listing;
use App\Enum\ListingStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Repository de l’entité Listing.
 * Rôle : gérer toutes les requêtes Doctrine liées aux annonces
 * (recherche, filtres, pagination, dernières annonces, etc.).
 */
final class ListingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Listing::class);
    }
    // Récupérer les 12 dernières annonces (admin / debug)
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
    // Récupérer les dernières annonces publiées
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
    // Recherche simple (mot-clé + localisation)
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
    // Pagination simple (annonces publiées uniquement)
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
    // Recherche avancée multi-critères (page /listing/recherche)

    /**
     * @param array<string, mixed> $criteria
     * @return Listing[]
     */
    public function searchByFilters(array $criteria): array
    {
        $qb = $this->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->andWhere('l.status = :status')
            ->setParameter('status', ListingStatus::PUBLISHED)
            ->orderBy('l.createdAt', 'DESC');

        // Mot-clé
        if (!empty($criteria['q'])) {
            $qb->andWhere('l.title LIKE :kw OR l.description LIKE :kw')
                ->setParameter('kw', '%'.$criteria['q'].'%');
        }

        // Localisation
        if (!empty($criteria['location'])) {
            $qb->andWhere('l.location LIKE :loc')
                ->setParameter('loc', '%'.$criteria['location'].'%');
        }

        // Distance (placeholder V2 : géolocalisation réelle)
        if (!empty($criteria['distance'])) {
            // TODO: implémenter géoloc dans la V2 (bounding box)
        }

        // Type d’annonce : OFFER / REQUEST
        if (!empty($criteria['type'])) {
            $qb->andWhere('l.type = :type')
                ->setParameter('type', $criteria['type']);
        }

        // Évaluation minimum (float)
        if (!empty($criteria['rating'])) {
            $qb->andWhere('l.averageRating >= :rating')
                ->setParameter('rating', (float) $criteria['rating']);
        }

         // Date de publication (x derniers jours)
        if (!empty($criteria['date'])) {
            $days = (int) $criteria['date'];
            $since = new \DateTimeImmutable("-{$days} days");
            $qb->andWhere('l.createdAt >= :since')
                ->setParameter('since', $since);
        }

        return $qb->getQuery()->getResult();
    }
    // Récupérer toutes les catégories distinctes (pour filtres)
    public function findAllCategoriesForFilter(): array
    {
        return $this->createQueryBuilder('l')
            ->select('DISTINCT c.name')
            ->join('l.category', 'c')
            ->orderBy('c.name', 'ASC')
            ->getQuery()
            ->getSingleColumnResult(); // Symfony 6.4+
    }
}
