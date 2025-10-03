<?php

declare(strict_types=1);

namespace App\Entity;

use App\Enum\ListingStatus;
use App\Validator\ValidLocation;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(
    name: 'listing',
    indexes: [
        new ORM\Index(name: 'idx_listing_title_location', fields: ['title', 'location']),
        new ORM\Index(name: 'idx_listing_created_at', fields: ['createdAt']),
    ]
)]
#[ORM\HasLifecycleCallbacks]
class Listing
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank(message: 'Le titre est obligatoire.')]
    #[Assert\Length(
        min: 3,
        max: 180,
        minMessage: 'Le titre doit contenir au moins {{ limit }} caractères.',
        maxMessage: 'Le titre ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[ORM\Column(length: 180)]
    private string $title;

    #[Assert\NotBlank(message: 'Le slug est obligatoire.')]
    #[Assert\Length(max: 220, maxMessage: 'Le slug ne peut pas dépasser {{ limit }} caractères.')]
    #[ORM\Column(length: 220, unique: true, nullable: false)]
    private string $slug;

    #[Assert\NotBlank(message: 'La description est obligatoire.')]
    #[Assert\Length(
        min: 10,
        max: 2000,
        minMessage: 'La description doit contenir au moins {{ limit }} caractères.',
        maxMessage: 'La description ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[ORM\Column(type: 'text')]
    private string $description;

    // OFFER | REQUEST
    #[Assert\NotBlank(message: 'Le type est obligatoire.')]
    #[Assert\Choice(choices: ['OFFER', 'REQUEST'], message: 'Le type doit être OFFER ou REQUEST.')]
    #[ORM\Column(length: 10)]
    private string $type;

    #[Assert\NotBlank(message: 'La localisation est obligatoire.')]
    #[Assert\Length(max: 120, maxMessage: 'La localisation ne peut pas dépasser {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: '/^[\p{L}\s\'\-]+$/u',
        message: 'La localisation ne peut contenir que des lettres, espaces, apostrophes ou tirets.'
    )]
    #[Assert\Type('string')]
    #[ValidLocation] // ✅ ajout de la contrainte personnalisée
    #[ORM\Column(length: 120)]
    private string $location;

    #[Assert\NotNull(message: 'Le statut est obligatoire.')]
    #[ORM\Column(enumType: ListingStatus::class, options: ['default' => 'draft'])]
    private ListingStatus $status = ListingStatus::DRAFT;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $author = null;

    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false)]
    private Category $category;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: ListingImage::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $images;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: Exchange::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $exchanges;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: Favorite::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $favorites;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->images = new ArrayCollection();
        $this->exchanges = new ArrayCollection();
        $this->favorites = new ArrayCollection();
    }

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

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = trim(strip_tags($title));

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = mb_strtolower(trim($slug));

        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = trim(strip_tags($description));

        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getLocation(): string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = trim(strip_tags($location));

        return $this;
    }

    public function getStatus(): ListingStatus
    {
        return $this->status;
    }

    public function setStatus(ListingStatus $status): self
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

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCategory(): Category
    {
        return $this->category;
    }

    public function setCategory(Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /** @return Collection<int, ListingImage> */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(ListingImage $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setListing($this);
        }

        return $this;
    }

    public function removeImage(ListingImage $image): self
    {
        if ($this->images->removeElement($image) && $image->getListing() === $this) {
            $image->setListing(null);
        }

        return $this;
    }

    /** Retourne l’image principale si définie, sinon la première */
    public function getPrimaryImage(): ?ListingImage
    {
        foreach ($this->images as $image) {
            if ($image->isPrimary()) {
                return $image;
            }
        }

        return $this->images->first() ?: null;
    }

    /** @return Collection<int, Exchange> */
    public function getExchanges(): Collection
    {
        return $this->exchanges;
    }

    public function addExchange(Exchange $exchange): self
    {
        if (!$this->exchanges->contains($exchange)) {
            $this->exchanges->add($exchange);
            $exchange->setListing($this);
        }

        return $this;
    }

    public function removeExchange(Exchange $exchange): self
    {
        if ($this->exchanges->removeElement($exchange) && $exchange->getListing() === $this) {
            $exchange->setListing(null);
        }

        return $this;
    }

    /** @return Collection<int, Favorite> */
    public function getFavorites(): Collection
    {
        return $this->favorites;
    }

    public function addFavorite(Favorite $favorite): self
    {
        if (!$this->favorites->contains($favorite)) {
            $this->favorites->add($favorite);
            $favorite->setListing($this);
        }

        return $this;
    }

    public function removeFavorite(Favorite $favorite): self
    {
        if ($this->favorites->removeElement($favorite) && $favorite->getListing() === $this) {
            $favorite->setListing(null);
        }

        return $this;
    }

    public function isFavoritedBy(User $user): bool
    {
        foreach ($this->favorites as $fav) {
            if ($fav->getUser() === $user) {
                return true;
            }
        }

        return false;
    }

    // === Helpers métier ===
    public function publish(): self
    {
        $this->status = ListingStatus::PUBLISHED;

        return $this;
    }

    public function archive(): self
    {
        $this->status = ListingStatus::ARCHIVED;

        return $this;
    }

    public function draft(): self
    {
        $this->status = ListingStatus::DRAFT;

        return $this;
    }

    // === Divers ===
    public function __toString(): string
    {
        return $this->title ?: ('Listing #'.($this->id ?? 'n/a'));
    }
}
