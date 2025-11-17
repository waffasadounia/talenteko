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

    #[Assert\NotBlank]
    #[ORM\Column(length: 180)]
    private string $title;

    #[Assert\NotBlank]
    #[ORM\Column(length: 220, unique: true, nullable: false)]
    private string $slug;

    #[Assert\NotBlank]
    #[ORM\Column(type: 'text')]
    private string $description;

    #[ORM\Column(length: 10)]
    private string $type;

    #[Assert\NotBlank]
    #[ORM\Column(length: 120)]
    #[ValidLocation]
    private string $location;

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

    /**
     * @var Collection<int, ListingImage>
     */
    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: ListingImage::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $images;

    /**
     * @var Collection<int, Exchange>
     */
    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: Exchange::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $exchanges;

    /**
     * @var Collection<int, Favorite>
     */
    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: Favorite::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $favorites;

    /**
     * @var Collection<int, Review>
     */
    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: Review::class, cascade: ['remove'], orphanRemoval: true)]
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

    // === Getters / Setters =====================================================

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

    /** @return Collection<int, Review> */
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
        if ($this->reviews->removeElement($review) && $review->getListing() === $this) {
            $review->setListing(null);
        }

        return $this;
    }

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
