<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Index(fields: ['slug'])] // optimisation recherche par slug
class Category
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 120, unique: true)]
    private string $name;

    #[ORM\Column(length: 220, unique: true)]
    private string $slug;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Listing::class, cascade: ['persist'], orphanRemoval: false)]
    private Collection $listings;

    public function __construct()
    {
        $this->listings = new ArrayCollection();
    }

    // === Getters / Setters ===

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
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

    /** @return Collection<int, Listing> */
    public function getListings(): Collection
    {
        return $this->listings;
    }

    public function addListing(Listing $listing): self
    {
        if (!$this->listings->contains($listing)) {
            $this->listings->add($listing);
            $listing->setCategory($this);
        }
        return $this;
    }

    public function removeListing(Listing $listing): self
    {
        if ($this->listings->removeElement($listing)) {
            // pas de $listing->setCategory(null), car JoinColumn nullable=false
        }
        return $this;
    }

    // === Divers ===

    public function __toString(): string
    {
        return $this->name ?? 'Catégorie';
    }
}
