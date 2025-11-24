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


    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * Titre de l'annonce
     */
    #[Assert\NotBlank(message: "Le titre est obligatoire.")]
    #[Assert\Length(
        min: 5,
        minMessage: "Le titre doit faire au moins {{ limit }} caractères."
    )]
    #[ORM\Column(length: 180)]
    private string $title;

    /**
     * Slug généré automatiquement — unique
     */
    #[ORM\Column(length: 255, unique: true, nullable: true)]
    private ?string $slug = null;

    /**
     * Description de l’annonce
     */
    #[Assert\NotBlank(message: "La description est obligatoire.")]
    #[Assert\Length(
        min: 20,
        minMessage: "La description doit contenir au moins {{ limit }} caractères."
    )]
    #[ORM\Column(type: 'text')]
    private string $description;

    /**
     * Type d’annonce : OFFER / SEARCH
     */
    #[ORM\Column(length: 10)]
    private string $type;

    /**
     * Localisation validée via l’autocomplete BAN API
     */
    #[Assert\NotBlank(message: "Merci d’indiquer une localisation.")]
    #[ValidLocation]
    #[ORM\Column(length: 120)]
    private string $location;

    /**
     * Statut de publication
     */
    #[ORM\Column(enumType: ListingStatus::class, options: ['default' => 'draft'])]
    private ListingStatus $status = ListingStatus::DRAFT;

    /**
     * Dates importantes
     */
    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    /**
     * Auteur de l'annonce
     */
    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: true, onDelete: 'CASCADE')]
    private ?User $author = null;

    /**
     * Catégorie liée
     */
    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false)]
    private Category $category;

    // =====================================================
    // IMAGES
    // =====================================================
    #[ORM\OneToMany(
        mappedBy: 'listing',
        targetEntity: ListingImage::class,
        cascade: ['persist', 'remove'],
        orphanRemoval: true
    )]
    private Collection $images;

    // =====================================================
    // EXCHANGES
    // =====================================================
    #[ORM\OneToMany(
        mappedBy: 'listing',
        targetEntity: Exchange::class,
        cascade: ['remove'],
        orphanRemoval: true
    )]
    private Collection $exchanges;

    // =====================================================
    // FAVORIS
    // =====================================================
    #[ORM\OneToMany(
        mappedBy: 'listing',
        targetEntity: Favorite::class,
        cascade: ['persist', 'remove'],
        orphanRemoval: true
    )]
    private Collection $favorites;

    // =====================================================
    // REVIEWS 
    // =====================================================
    #[ORM\OneToMany(
        mappedBy: 'listing',
        targetEntity: Review::class,
        cascade: ['persist', 'remove'],
        orphanRemoval: true
    )]
    private Collection $reviews;

    #[ORM\Column(type: 'float', nullable: true)]
    private ?float $averageRating = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();

        $this->images = new ArrayCollection();
        $this->exchanges = new ArrayCollection();
        $this->favorites = new ArrayCollection();
        $this->reviews = new ArrayCollection();
    }

    #[ORM\PreUpdate]
    public function updateTimestamp(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
    }

    // =====================================================
    // GETTERS / SETTERS
    // =====================================================

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

    public function getSlug(): ?string
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

    // =====================================================
    // IMAGES
    // =====================================================
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

    // =====================================================
    // REVIEWS
    // =====================================================
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): self
    {
        if (!$this->reviews->contains($review)) {
            $this->reviews->add($review);
            $review->setListing($this);
        }
        return $this;
    }

    public function removeReview(Review $review): self
{
    if ($this->reviews->removeElement($review)) {
    }
    return $this;
}
    // =====================================================
    // FAVORITES
    // =====================================================
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
    if ($this->favorites->removeElement($favorite)) {
    }
    return $this;
}
    // =====================================================
    // RATING
    // =====================================================
    public function updateAverageRating(): self
    {
        if ($this->reviews->isEmpty()) {
            $this->averageRating = null;
            return $this;
        }

        $total = 0;
        $count = 0;

        foreach ($this->reviews as $review) {
            $rating = $review->getRating();
            if ($rating > 0) {
                $total += $rating;
                $count++;
            }
        }

        $this->averageRating = $count > 0 ? round($total / $count, 1) : null;
        return $this;
    }

    public function getAverageRating(): ?float
    {
        return $this->averageRating;
    }

    // =====================================================
    // STATES
    // =====================================================
    public function publish(): void
    {
        $this->status = ListingStatus::PUBLISHED;
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function __toString(): string
    {
        return $this->title ?? 'Listing';
    }
}
