<?php

declare(strict_types=1);

namespace App\Entity;

use App\Enum\ExchangeStatus;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: \App\Repository\ExchangeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Exchange
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    // === Relations ===
    #[Assert\NotNull(message: 'Un échange doit avoir un utilisateur demandeur.')]
    #[ORM\ManyToOne(inversedBy: 'exchangesRequested')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $requester = null;

    #[Assert\NotNull(message: 'Un échange doit avoir un destinataire.')]
    #[ORM\ManyToOne(inversedBy: 'exchangesReceived')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $recipient = null;

    #[Assert\NotNull(message: 'Un échange doit être lié à une annonce.')]
    #[ORM\ManyToOne(inversedBy: 'exchanges')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Listing $listing = null;

    // === Statut ===
    #[Assert\NotNull(message: 'Le statut est obligatoire.')]
    #[ORM\Column(enumType: ExchangeStatus::class, options: ['default' => 'pending'])]
    private ExchangeStatus $status = ExchangeStatus::PENDING;

    // === Dates ===
    #[Assert\NotNull]
    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    // === Constructeur ===
    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // === Lifecycle ===
    #[ORM\PreUpdate]
    public function updateTimestamp(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
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

    public function getRecipient(): ?User
    {
        return $this->recipient;
    }

    public function setRecipient(?User $user): self
    {
        $this->recipient = $user;
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

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $date): self
    {
        $this->updatedAt = $date;
        return $this;
    }

    // === Helpers métier ===
    public function accept(): self
    {
        $this->status = ExchangeStatus::ACCEPTED;
        return $this;
    }

    public function decline(): self
    {
        $this->status = ExchangeStatus::DECLINED;
        return $this;
    }

    public function markAsCompleted(): self
    {
        $this->status = ExchangeStatus::COMPLETED;
        return $this;
    }

    public function cancel(): self
    {
        $this->status = ExchangeStatus::CANCELED;
        return $this;
    }

    // === Divers ===
    public function __toString(): string
    {
        return sprintf(
            'Échange #%d (%s → %s) [%s]',
            $this->id ?? 0,
            $this->requester?->getPseudo() ?? 'inconnu',
            $this->recipient?->getPseudo() ?? 'inconnu',
            $this->status->value
        );
    }
}
