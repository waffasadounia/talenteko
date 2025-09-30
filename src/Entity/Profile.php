<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Profile
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skillsOffered = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skillsWanted = null;

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
        $this->bio = $bio;
        return $this;
    }

    public function getSkillsOffered(): ?array
    {
        return $this->skillsOffered;
    }

    public function setSkillsOffered(?array $skills): self
    {
        $this->skillsOffered = $skills;
        return $this;
    }

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
        $this->avatarFilename = $filename;
        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;
        return $this;
    }

    public function __toString(): string
    {
        return $this->bio ? mb_substr($this->bio, 0, 30) . '…' : 'Profil';
    }
}
