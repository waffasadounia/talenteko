<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\PasswordResetTokenRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PasswordResetTokenRepository::class)]
#[ORM\Index(fields: ['expiresAt'])] // optimisation pour purge automatique
class PasswordResetToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // --- Relation avec l'utilisateur ---
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'passwordResetTokens')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    // --- Jeton unique ---
    #[ORM\Column(length: 255, unique: true)]
    private string $token = '';

    // --- Date d'expiration ---
    #[ORM\Column(type: 'datetime_immutable')]
    private DateTimeImmutable $expiresAt;

    // --- Date de création ---
    #[ORM\Column(type: 'datetime_immutable')]
    private DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
    }

    // === ID ===
    public function getId(): ?int
    {
        return $this->id;
    }

    // === User ===
    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;
        return $this;
    }

    // === Token ===
    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;
        return $this;
    }

    // === Expiration ===
    public function getExpiresAt(): DateTimeImmutable
    {
        return $this->expiresAt;
    }

    public function setExpiresAt(DateTimeImmutable $expiresAt): self
    {
        $this->expiresAt = $expiresAt;
        return $this;
    }

    public function isExpired(): bool
    {
        // ✅ plus clair : true uniquement si "maintenant" est strictement après expiresAt
        return new DateTimeImmutable() > $this->expiresAt;
    }

    // === CreatedAt ===
    public function getCreatedAt(): DateTimeImmutable
    {
        return $this->createdAt;
    }

    // === Divers ===
    public function __toString(): string
    {
        return sprintf('ResetToken #%d', $this->id ?? 0);
    }
}
