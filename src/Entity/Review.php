<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(name: 'review')]
#[ORM\UniqueConstraint(
    name: 'uniq_review_exchange_author',
    columns: ['exchange_id', 'author_id']
)] // ⚡ Empêche un utilisateur de donner 2 avis pour le même échange
class Review
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    // L’utilisateur qui donne l’avis
    #[ORM\ManyToOne(inversedBy: 'reviewsGiven')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $author = null;

    // L’utilisateur qui reçoit l’avis
    #[ORM\ManyToOne(inversedBy: 'reviewsReceived')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $target = null;

    // L’échange associé
    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Exchange $exchange = null;

    // Note entre 1 et 5
    #[ORM\Column(type: 'integer')]
    #[Assert\Range(
        notInRangeMessage: 'La note doit être comprise entre {{ min }} et {{ max }}.',
        min: 1,
        max: 5
    )]
    private int $rating;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Assert\Length(max: 1000, maxMessage: 'Le commentaire ne peut pas dépasser {{ limit }} caractères.')]
    private ?string $comment = null;

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

    // === Author ===
    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;
        return $this;
    }

    // === Target ===
    public function getTarget(): ?User
    {
        return $this->target;
    }

    public function setTarget(?User $target): self
    {
        $this->target = $target;
        return $this;
    }

    // === Exchange ===
    public function getExchange(): ?Exchange
    {
        return $this->exchange;
    }

    public function setExchange(?Exchange $exchange): self
    {
        $this->exchange = $exchange;
        return $this;
    }

    // === Rating ===
    public function getRating(): int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;
        return $this;
    }

    // === Comment ===
    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;
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
            'Avis %d★ de %s pour %s',
            $this->rating,
            $this->author?->getDisplayName() ?? 'Inconnu',
            $this->target?->getDisplayName() ?? 'Inconnu'
        );
    }
}
