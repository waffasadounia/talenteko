<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'notification')]
#[ORM\Index(fields: ['isRead'])] // ⚡ optimisation pour filtrer rapidement non-lus
class Notification
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'notifications')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    #[ORM\Column(length: 255)]
    private string $type; // ex: "exchange.accepted", "message.received"

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $content = null;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isRead = false;

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

    // === Type ===
    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;
        return $this;
    }

    // === Content ===
    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;
        return $this;
    }

    // === Lecture ===
    public function isRead(): bool
    {
        return $this->isRead;
    }

    public function markAsRead(): self
    {
        $this->isRead = true;
        return $this;
    }

    // === Date ===
    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    // === Divers ===
    public function __toString(): string
    {
        return sprintf(
            'Notification [%s] pour %s',
            $this->type,
            $this->user?->getDisplayName() ?? 'Utilisateur'
        );
    }
}
