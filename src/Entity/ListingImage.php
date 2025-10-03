<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(name: 'listing_image')]
#[ORM\Index(columns: ['listing_id'])]
class ListingImage
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank(message: 'Le chemin de l’image est obligatoire.')]
    #[Assert\Length(max: 255, maxMessage: 'Le chemin de l’image ne peut pas dépasser {{ limit }} caractères.')]
    #[ORM\Column(length: 255)]
    private string $path;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $isPrimary = false;

    #[ORM\ManyToOne(inversedBy: 'images')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Listing $listing = null;

    // === Getters / Setters ===
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function isPrimary(): bool
    {
        return $this->isPrimary;
    }

    public function setIsPrimary(bool $isPrimary): self
    {
        if ($isPrimary && $this->listing) {
            // Forcer toutes les autres images du listing à false
            foreach ($this->listing->getImages() as $img) {
                if ($img !== $this) {
                    $img->isPrimary = false;
                }
            }
        }
        $this->isPrimary = $isPrimary;

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

    // === Divers ===
    public function __toString(): string
    {
        return $this->path ?: 'Image';
    }
}
