<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Listing;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[UniqueEntity(fields: ['email'], message: 'Un compte existe déjà avec cet email.')]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // === Identité / Sécurité ===
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // ✅ Identifiant de connexion (email unique)
    #[ORM\Column(length: 180)]
    #[Assert\NotBlank(message: 'Merci de saisir un email.')]
    #[Assert\Email(message: 'Email invalide.')]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column] // colonne non-nullable (cohérent avec l’auth)
    private string $password = ''; //non nullable pour éviter les états invalides

    // === Profil ===
    #[ORM\Column(length: 50, nullable: true)]
    private ?string $pseudo = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $location = null;

    // texte libre de présentation
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

    // listes souples (CSV côté formulaire → JSON stocké)
    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skills_offered = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skills_wanted = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatarFilename = null;

    #[ORM\Column(type: 'float', options: ['default' => 0])]
    private float $ratingAvg = 0.0;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ratingCount = 0;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    // === Relations ===
    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Listing::class)]
    private Collection $listings;

    public function __construct()
    {
        // par sécurité : ROLE_USER toujours présent
        $this->roles = ['ROLE_USER'];
        $this->createdAt = new \DateTimeImmutable();
        $this->listings = new ArrayCollection();
    }

    // === Getters / Setters de base ===
    public function getId(): ?int
    {
        return $this->id;
    }

    // Email / Identifiant
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        // évite les doublons Jean@… vs jean@…
        $this->email = mb_strtolower($email);
        return $this;
    }

    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    // Compat <5.3 si besoin par des bundles
    public function getUsername(): string
    {
        return $this->getUserIdentifier();
    }

    // Roles
    public function getRoles(): array
    {
        $roles = $this->roles;
        // garantie minimale
        if (!in_array('ROLE_USER', $roles, true)) {
            $roles[] = 'ROLE_USER';
        }
        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;
        return $this;
    }

    // Password (hash)
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    public function eraseCredentials(): void
    {
        // Exemple s'il y avait un champ temporaire :
        // $this->plainPassword = null;
    }

    // === Profil (getters/setters) ===
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): static
    {
        $this->pseudo = $pseudo;
        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): static
    {
        $this->location = $location;
        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): static
    {
        $this->bio = $bio;
        return $this;
    }

    public function getSkillsOffered(): ?array
    {
        return $this->skills_offered;
    }

    public function setSkillsOffered(?array $skills): static
    {
        $this->skills_offered = $skills;
        return $this;
    }

    public function getSkillsWanted(): ?array
    {
        return $this->skills_wanted;
    }

    public function setSkillsWanted(?array $skills): static
    {
        $this->skills_wanted = $skills;
        return $this;
    }

    public function getAvatarFilename(): ?string
    {
        return $this->avatarFilename;
    }

    public function setAvatarFilename(?string $fn): static
    {
        $this->avatarFilename = $fn;
        return $this;
    }

    public function getRatingAvg(): float
    {
        return $this->ratingAvg;
    }

    public function setRatingAvg(float $ratingAvg): static
    {
        $this->ratingAvg = $ratingAvg;
        return $this;
    }

    public function getRatingCount(): int
    {
        return $this->ratingCount;
    }

    public function setRatingCount(int $ratingCount): static
    {
        $this->ratingCount = $ratingCount;
        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    // === Relations ===
    /**
     * @return Collection<int, Listing>
     */
    public function getListings(): Collection
    {
        return $this->listings;
    }

    public function addListing(Listing $listing): static
    {
        if (!$this->listings->contains($listing)) {
            $this->listings->add($listing);
            $listing->setAuthor($this);
        }
        return $this;
    }

    public function removeListing(Listing $listing): static
    {
        if ($this->listings->removeElement($listing)) {
            // NE PAS mettre setAuthor(null) si JoinColumn(nullable=false)
            // L'owning side reste cohérent (author = this).
            // Si tu veux vraiment détacher, il faut prévoir un autre flux (transfert d'auteur ou suppression du Listing).
        }
        return $this;
    }

    public function __toString(): string
    {
        return $this->email ?? 'Utilisateur';
    }
}

