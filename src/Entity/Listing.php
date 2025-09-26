<?php

declare(strict_types=1);

namespace App\Entity;

use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Index(fields: ['title', 'location'])]
class Listing
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $title;

    #[ORM\Column(length: 220, unique: true, nullable: false)]
    private string $slug;

    #[ORM\Column(type: 'text')]
    private string $description;

    // 'OFFER' | 'REQUEST'
    #[ORM\Column(length: 10)]
    private string $type;

    #[ORM\Column(name: 'location', length: 120)]
    private string $location;

    // 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
    #[ORM\Column(length: 12, options: ['default' => 'PUBLISHED'])]
    private string $status = 'PUBLISHED';

    #[ORM\Column]
    private DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false)]
    private User $author;

    #[ORM\ManyToOne(inversedBy: 'listings')]
    #[ORM\JoinColumn(nullable: false)]
    private Category $category;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: ListingImage::class, cascade: ['persist', 'remove'])]
    private Collection $images;

    #[ORM\OneToMany(mappedBy: 'listing', targetEntity: Exchange::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $exchanges;

    public function __construct()
    {
        $this->createdAt = new DateTimeImmutable();
        $this->images = new ArrayCollection();
        $this->exchanges = new ArrayCollection();
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
        $this->title = $title;

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

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
        $this->location = $location;

        return $this;
    }

    /** @deprecated Utilise getLocation() */
    public function getCity(): string
    {
        return $this->getLocation();
    }

    /** @deprecated Utilise setLocation() */
    public function setCity(string $city): self
    {
        return $this->setLocation($city);
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setUpdatedAt(?DateTimeImmutable $date): self
    {
        $this->updatedAt = $date;

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function getAuthor(): User
    {
        return $this->author;
    }

    public function setAuthor(User $author): self
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
        $this->images->removeElement($image);

        return $this;
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
        if ($this->exchanges->removeElement($exchange)) {
            if ($exchange->getListing() === $this) {
                $exchange->setListing(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->title ?? 'Annonce';
    }
}


