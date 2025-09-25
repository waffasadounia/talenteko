<?php

declare(strict_types=1);

// Repository = couche d'accès aux annonces (Listing).
// Permet à Symfony/Doctrine d’injecter ListingRepository dans les contrôleurs.

namespace App\Repository;

use App\Entity\Listing;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ListingRepository extends ServiceEntityRepository
{
    // Le constructeur enregistre l’entité gérée par ce repo : Listing::class
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Listing::class);
    }

    // Exemple de méthode dédiée (optionnelle) :
    // Récupère les 12 dernières annonces avec auteur+catégorie.
    public function findLatestWithJoins(int $limit = 12): array
    {
        return $this->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()->getResult();
    }
}
