<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Listing;

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

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    // === Profil ===
    #[ORM\Column(length: 100, nullable: true)]
    private ?string $firstname = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $city = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatarPath = null;

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
        $this->email = $email;
        return $this;
    }

    public function getUserIdentifier(): string
    {
        return (string) $this->email;
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

    // Password
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    // (legacy) Nettoyage des creds temporaires
    #[\Deprecated]
    public function eraseCredentials(): void
    {
        // Exemple si tu avais un champ plainPassword:
        // $this->plainPassword = null;
    }

    // === Profil (getters/setters) ===
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): static
    {
        $this->firstname = $firstname;
        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): static
    {
        $this->city = $city;
        return $this;
    }

    public function getAvatarPath(): ?string
    {
        return $this->avatarPath;
    }

    public function setAvatarPath(?string $avatarPath): static
    {
        $this->avatarPath = $avatarPath;
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

}