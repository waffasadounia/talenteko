<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(name: 'favorite')]
#[ORM\UniqueConstraint(name: 'uniq_user_listing', columns: ['user_id', 'listing_id'])]
#[ORM\Index(columns: ['user_id'])]
#[ORM\Index(columns: ['listing_id'])]
class Favorite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // ==========================================
    // USER
    // ==========================================
    #[Assert\NotNull(message: 'Un favori doit appartenir à un utilisateur.')]
    #[ORM\ManyToOne(
        inversedBy: 'favorites',
        cascade: ['persist'],
        fetch: 'LAZY'
    )]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    // ==========================================
    // LISTING
    // ==========================================
    #[Assert\NotNull(message: 'Un favori doit cibler une annonce.')]
    #[ORM\ManyToOne(
        inversedBy: 'favorites',
        cascade: ['persist'],
        fetch: 'LAZY'
    )]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Listing $listing = null;

    #[ORM\Column(type: 'datetime_immutable', updatable: false)]
    private \DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // ==========================================
    // GETTERS / SETTERS
    // ==========================================
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;
        return $this;
    }

    public function getListing(): ?Listing
    {
        return $this->listing;
    }

    public function setListing(Listing $listing): self
    {
        $this->listing = $listing;
        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function __toString(): string
    {
        return \sprintf(
            'Favori: %s par %s',
            $this->listing?->getTitle() ?? 'Annonce',
            $this->user?->getDisplayName() ?? 'Utilisateur'
        );
    }
}
