<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
class Profile
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[Assert\Length(
        max: 1000,
        maxMessage: 'La bio ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skillsOffered = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skillsWanted = null;

    #[Assert\Length(
        max: 255,
        maxMessage: 'Le nom de fichier de l’avatar ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatarFilename = null;

    #[ORM\OneToOne(inversedBy: 'profile', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $user = null;

    // === Getters / Setters ===

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        // 🛡️ sécurité : supprime le HTML pour éviter XSS
        $this->bio = $bio ? strip_tags($bio) : null;

        return $this;
    }

    /** @return ?array Liste des compétences offertes */
    public function getSkillsOffered(): ?array
    {
        return $this->skillsOffered;
    }

    public function setSkillsOffered(?array $skills): self
    {
        $this->skillsOffered = $skills;

        return $this;
    }

    /** @return ?array Liste des compétences recherchées */
    public function getSkillsWanted(): ?array
    {
        return $this->skillsWanted;
    }

    public function setSkillsWanted(?array $skills): self
    {
        $this->skillsWanted = $skills;

        return $this;
    }

    public function getAvatarFilename(): ?string
    {
        return $this->avatarFilename;
    }

    public function setAvatarFilename(?string $filename): self
    {
        // on normalise le nom de fichier
        $this->avatarFilename = $filename ? mb_strtolower($filename) : null;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        if (null !== $user && $user->getProfile() !== $this) {
            $user->setProfile($this);
        }
        $this->user = $user;

        return $this;
    }

    // === Divers ===

    public function __toString(): string
    {
        return $this->bio ? mb_substr($this->bio, 0, 30).'…' : 'Profil';
    }
}
