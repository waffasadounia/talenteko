<?php

declare(strict_types=1);

namespace App\Entity;

use App\Enum\ExchangeStatus;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Exchange
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    // === Relations ===

    #[ORM\ManyToOne(inversedBy: 'exchanges')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $requester = null;

    #[ORM\ManyToOne(inversedBy: 'exchanges')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Listing $listing = null;

    // === Statut ===

    #[ORM\Column(enumType: ExchangeStatus::class, options: ['default' => 'pending'])]
    private ExchangeStatus $status = ExchangeStatus::PENDING;

    // === Dates ===

    #[ORM\Column]
    private DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?DateTimeImmutable $updatedAt = null;

    // === Constructeur ===
    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
    }

    // === Getters / Setters ===

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRequester(): ?User
    {
        return $this->requester;
    }

    public function setRequester(?User $user): self
    {
        $this->requester = $user;
        return $this;
    }

    public function getListing(): ?Listing
    {
        return $this->listing;
    }

    public function setListing(?Listing $listing): self
    {
        $this->listing = $listing;
        return $this;
    }

    public function getStatus(): ExchangeStatus
    {
        return $this->status;
    }

    public function setStatus(ExchangeStatus $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getCreatedAt(): DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?DateTimeImmutable $date): self
    {
        $this->updatedAt = $date;
        return $this;
    }

    public function __toString(): string
    {
        return sprintf(
            'Échange #%d [%s]',
            $this->id ?? 0,
            $this->status->value
        );
    }
}
