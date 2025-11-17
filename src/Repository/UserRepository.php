<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * Repository — Gestion des entités User (utilisateurs TalentÉkô)
 * Fournit les méthodes principales :
 * - mise à jour sécurisée du mot de passe (PasswordUpgraderInterface)
 * - recherche d’utilisateurs par email
 */
final class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }
    // Mise à jour du mot de passe (hash)

    /**
     * Met à jour (rehash) le mot de passe d’un utilisateur au fil du temps.
     *
     * @throws UnsupportedUserException Si l’objet n’est pas une instance de User.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(\sprintf('Instances of "%s" ne sont pas supportées.', $user::class));
        }

        $user->setPassword($newHashedPassword);
        $this->getEntityManager()->persist($user);
        $this->getEntityManager()->flush();
    }

    // Recherche utilisateur par email
    /**
     * Retourne un utilisateur en fonction de son adresse email.
     *
     * @param string $email Adresse email de l’utilisateur
     */
    public function findOneByEmail(string $email): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.email = :email')
            ->setParameter('email', $email)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
