<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\PasswordResetTokenRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PasswordResetTokenRepository::class)]
#[ORM\Table(
    name: 'password_reset_token',
    indexes: [
        new ORM\Index(name: 'idx_password_reset_expires_at', fields: ['expiresAt']),
    ]
)]
class PasswordResetToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // --- Relation avec l'utilisateur ---
    #[Assert\NotNull(message: 'Le token doit être lié à un utilisateur.')]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'passwordResetTokens')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    // --- Jeton unique ---
    #[Assert\NotBlank(message: 'Le jeton est obligatoire.')]
    #[Assert\Length(max: 255, maxMessage: 'Le jeton ne peut pas dépasser {{ limit }} caractères.')]
    #[ORM\Column(length: 255, unique: true)]
    private string $token = '';

    // --- Date d'expiration ---
    #[Assert\NotNull(message: 'La date d’expiration est obligatoire.')]
    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $expiresAt;

    // --- Date de création ---
    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
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
    public function getExpiresAt(): \DateTimeImmutable
    {
        return $this->expiresAt;
    }

    public function setExpiresAt(\DateTimeImmutable $expiresAt): self
    {
        $this->expiresAt = $expiresAt;

        return $this;
    }

    public function isExpired(): bool
    {
        return new \DateTimeImmutable() > $this->expiresAt;
    }

    public function expireNow(): self
    {
        $this->expiresAt = new \DateTimeImmutable('now');

        return $this;
    }

    // === CreatedAt ===
    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    // === Divers ===
    public function __toString(): string
    {
        return \sprintf('ResetToken #%d', $this->id ?? 0);
    }
}
