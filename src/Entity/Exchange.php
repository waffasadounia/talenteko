<?php

namespace App\Entity;

use App\Enum\ExchangeStatus;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Exchange
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Statut typé avec l’Enum ExchangeStatus
    #[ORM\Column(enumType: ExchangeStatus::class)]
    private ExchangeStatus $status = ExchangeStatus::PENDING;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    // === Relations ===

    #[ORM\ManyToOne(inversedBy: 'exchanges')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Listing $listing = null;

    #[ORM\ManyToOne(inversedBy: 'exchanges')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $requester = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // === Getters / Setters ===

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ExchangeStatus
    {
        return $this->status;
    }

    public function setStatus(ExchangeStatus $status): self
    {
        $this->status = $status;
        $this->updatedAt = new \DateTimeImmutable();

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
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

    public function getRequester(): ?User
    {
        return $this->requester;
    }

    public function setRequester(?User $requester): self
    {
        $this->requester = $requester;

        return $this;
    }

    // === Helpers ===

    public function __toString(): string
    {
        $listingTitle = $this->listing?->getTitle() ?? 'Annonce inconnue';
        return sprintf(
            'Échange #%d (%s) - %s',
            $this->id ?? 0,
            $this->status->label(),
            $listingTitle
        );
    }
}
