<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\PasswordResetToken;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PasswordResetToken>
 *
 * Repository = gestion des tokens de réinitialisation de mot de passe.
 */
final class PasswordResetTokenRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PasswordResetToken::class);
    }

    /**
     * Trouve un token valide (non expiré).
     */
    public function findValidToken(string $token): ?PasswordResetToken
    {
        $reset = $this->findOneBy(['token' => $token]);
        if (!$reset || $reset->isExpired()) {
            return null;
        }

        return $reset;
    }

    /**
     * Supprime tous les tokens expirés de la base.
     */
    public function removeExpiredTokens(): void
    {
        $this->createQueryBuilder('t')
            ->delete()
            ->where('t.expiresAt < :now')
            ->setParameter('now', new \DateTimeImmutable())
            ->getQuery()
            ->execute();
    }
}
