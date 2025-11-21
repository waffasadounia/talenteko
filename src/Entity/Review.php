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
)]
#[ORM\Index(fields: ['rating'])]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // ======================================================
    // AUTEUR
    // ======================================================
    #[Assert\NotNull(message: 'L’auteur est obligatoire.')]
    #[ORM\ManyToOne(
        targetEntity: User::class,
        inversedBy: 'reviewsGiven',
        cascade: ['persist'],
        fetch: 'LAZY'
    )]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $author = null;

    // ======================================================
    // CIBLE
    // ======================================================
    #[Assert\NotNull(message: 'La cible de l’avis est obligatoire.')]
    #[ORM\ManyToOne(
        targetEntity: User::class,
        inversedBy: 'reviewsReceived',
        cascade: ['persist'],
        fetch: 'LAZY'
    )]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $target = null;

    // ======================================================
    // ÉCHANGE
    // ======================================================
    #[Assert\NotNull]
    #[ORM\ManyToOne(
        targetEntity: Exchange::class,
        cascade: ['persist'],
        fetch: 'LAZY'
    )]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Exchange $exchange = null;

    // ======================================================
    // LISTING
    // ======================================================
    #[Assert\NotNull]
    #[ORM\ManyToOne(
        targetEntity: Listing::class,
        inversedBy: 'reviews',
        cascade: ['persist'],
        fetch: 'LAZY'
    )]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Listing $listing = null;

    // ======================================================
    // RATING
    // ======================================================
    #[ORM\Column(type: 'integer')]
    #[Assert\NotNull(message: 'La note est obligatoire.')]
    #[Assert\Range(
        min: 1,
        max: 5,
        notInRangeMessage: 'La note doit être comprise entre {{ min }} et {{ max }}.'
    )]
    private int $rating = 1;

    // ======================================================
    // COMMENTAIRE
    // ======================================================
    #[ORM\Column(type: 'text', nullable: true)]
    #[Assert\Length(max: 1000)]
    private ?string $comment = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // ======================================================
    // GETTERS / SETTERS
    // ======================================================
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(User $author): self
    {
        $this->author = $author;
        return $this;
    }

    public function getTarget(): ?User
    {
        return $this->target;
    }

    public function setTarget(User $target): self
    {
        $this->target = $target;
        return $this;
    }

    public function getExchange(): ?Exchange
    {
        return $this->exchange;
    }

    public function setExchange(Exchange $exchange): self
    {
        $this->exchange = $exchange;
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

    public function getRating(): int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;
        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;
        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    // ======================================================
    // STRING
    // ======================================================
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
