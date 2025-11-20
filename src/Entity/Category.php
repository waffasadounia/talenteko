<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(
    name: 'category',
    indexes: [
        new ORM\Index(name: 'idx_category_slug', fields: ['slug']),
    ]
)]
class Category
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank(message: 'Le nom de la catégorie est obligatoire.')]
    #[Assert\Length(
        min: 3,
        max: 120,
        minMessage: 'Le nom doit contenir au moins {{ limit }} caractères.',
        maxMessage: 'Le nom ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[ORM\Column(length: 120, unique: true)]
    private string $name;

    #[Assert\NotBlank(message: 'Le slug est obligatoire.')]
    #[Assert\Length(
        max: 220,
        maxMessage: 'Le slug ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[Assert\Regex(
        pattern: '/^[a-z0-9\-]+$/',
        message: 'Le slug ne peut contenir que des lettres minuscules, chiffres et tirets.'
    )]
    #[ORM\Column(length: 220, unique: true)]
    private string $slug;

    #[ORM\OneToMany(
        mappedBy: 'category',
        targetEntity: Listing::class,
        cascade: ['persist'],
        orphanRemoval: false
    )]
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
