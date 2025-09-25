<?php

declare(strict_types=1);

// Repository = couche d'accÃƒÂ¨s aux annonces (Listing).
// PermetvÃ  Symfony/Doctrine d'injecter ListingRepository dans les contrÃ´leurs.

namespace App\Repository;

use App\Entity\Listing;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ListingRepository extends ServiceEntityRepository
{
    // Le constructeur enregistre lâ€™entitÃ© gÃ©rÃ©e par ce repo : Listing::class
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Listing::class);
    }

    // Exemple de mÃ©thode dÃ©diÃ©e (optionnelle) :
    // RÃ©cupÃ¨re les 12 derniÃ¨res annonces avec auteur+catÃ©gorie.
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
