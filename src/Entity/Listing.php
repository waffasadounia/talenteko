<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

#[ORM\Entity]
#[ORM\Index(fields: ['title', 'city'])]
class Listing
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $title;

    #[ORM\Column(length: 220, unique: true)]
    private string $slug;

    #[ORM\Column(type: 'text')]
    private string $description;

    // 'OFFER' | 'REQUEST'
    #[ORM\Column(length: 10)]
    private string $type;

    #[ORM\Column(length: 120)]
    private string $city;

    // 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
    #[ORM\Column(length: 12, options: ['default' => 'PUBLISHED'])]
    private string $status = 'PUBLISHED';

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    // Relations (non-nullables, selon ton choix)
    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false)]
    private User $author;

    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false)]
    private Category $category;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: ListingImage::class, cascade: ['persist','remove'])]
    private Collection $images;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->images = new ArrayCollection();
    }

    // === Getters / Setters ===
    public function getId(): ?int { return $this->id; }

    public function getTitle(): string { return $this->title; }
    public function setTitle(string $title): self { $this->title = $title; return $this; }

    public function getSlug(): string { return $this->slug; }
    public function setSlug(string $slug): self { $this->slug = $slug; return $this; }

    public function getDescription(): string { return $this->description; }
    public function setDescription(string $description): self { $this->description = $description; return $this; }

    public function getType(): string { return $this->type; }
    public function setType(string $type): self { $this->type = $type; return $this; }

    public function getCity(): string { return $this->city; }
    public function setCity(string $city): self { $this->city = $city; return $this; }

    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): self { $this->status = $status; return $this; }

    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
    public function setUpdatedAt(?\DateTimeImmutable $date): self { $this->updatedAt = $date; return $this; }
    public function getUpdatedAt(): ?\DateTimeImmutable { return $this->updatedAt; }

    public function getAuthor(): User { return $this->author; }
    public function setAuthor(User $author): self { $this->author = $author; return $this; }

    public function getCategory(): Category { return $this->category; }
    public function setCategory(Category $category): self { $this->category = $category; return $this; }

    /** @return Collection<int, ListingImage> */
    public function getImages(): Collection { return $this->images; }

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
        if ($this->images->removeElement($image)) {
            if ($image->getListing() === $this) {
                // pas besoin de null ici si JoinColumn(nullable=false); on supprime l'image
            }
        }
        return $this;
    }
}
