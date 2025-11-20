<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(
    name: 'notification',
    indexes: [
        new ORM\Index(name: 'idx_notification_is_read', fields: ['isRead']),
    ]
)]
class Notification
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[Assert\NotNull(message: 'Une notification doit être liée à un utilisateur.')]
    #[ORM\ManyToOne(inversedBy: 'notifications')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    #[Assert\NotBlank(message: 'Le type de notification est obligatoire.')]
    #[Assert\Length(max: 255)]
    #[ORM\Column(length: 255)]
    private string $type;

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
        $this->type = mb_strtolower($type);

        return $this;
    }

    // === Content ===
    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
    // strip_tags pour éviter une injection XSS si affichage brut
        $this->content = $content ? strip_tags($content) : null;

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
        return \sprintf(
            'Notification [%s] pour %s',
            $this->type,
            $this->user?->getDisplayName() ?? 'Utilisateur'
        );
    }
}
