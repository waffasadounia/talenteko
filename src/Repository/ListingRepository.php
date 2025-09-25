<?php

declare(strict_types=1);

// Repository = couche d'accÃƒÆ’Ã‚Â¨s aux annonces (Listing).
// PermetvÃƒÂ  Symfony/Doctrine d'injecter ListingRepository dans les contrÃƒÂ´leurs.

namespace App\Repository;

use App\Entity\Listing;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ListingRepository extends ServiceEntityRepository
{
    // Le constructeur enregistre lÃ¢â‚¬â„¢entitÃƒÂ© gÃƒÂ©rÃƒÂ©e par ce repo : Listing::class
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Listing::class);
    }

    // Exemple de mÃƒÂ©thode dÃƒÂ©diÃƒÂ©e (optionnelle) :
    // RÃƒÂ©cupÃƒÂ¨re les 12 derniÃƒÂ¨res annonces avec auteur+catÃƒÂ©gorie.
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

