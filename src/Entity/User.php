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

#[UniqueEntity(fields: ['email'], message: 'Un compte existe déjà avec cet email.')]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // === Identité / Sécurité ===

    #[ORM\Id] // clé primaire
    #[ORM\GeneratedValue] // auto-incrément
    #[ORM\Column] // colonne SQL
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string> Liste des rôles utilisateur (ROLE_USER, ROLE_ADMIN…)
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string Mot de passe haché (jamais en clair !)
     */
    #[ORM\Column]
    private ?string $password = null;

    // === Profil public ===

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $pseudo = null; // choisi à la place du prénom/nom → vie privée

    #[ORM\Column(name: 'Location', length: 120, nullable: true)]
    private ?string $location = null; // localisation

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatarPath = null; // chemin du fichier avatar (upload)

    // === Évaluations / réputation ===

    #[ORM\Column(type: 'float', options: ['default' => 0])]
    private float $ratingAvg = 0.0; // moyenne des notes

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ratingCount = 0; // nombre de notes

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt; // date de création du compte

    // === Relations ===
    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Listing::class)]
    private Collection $listings; // toutes les annonces publiées par l’utilisateur

    public function __construct()
    {
        // tout utilisateur a au minimum ROLE_USER
        $this->roles = ['ROLE_USER'];
        // la date de création est définie dès l’instanciation
        $this->createdAt = new \DateTimeImmutable();
        // initialiser la collection pour éviter null
        $this->listings = new ArrayCollection();
    }

    // === Getters / Setters de base ===

    public function getId(): ?int
    {
        return $this->id;
    }

    // Email = identifiant unique
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        // normaliser en minuscule (évite Jean@… vs jean@…)
        $this->email = mb_strtolower($email);
        return $this;
    }

    // Symfony Security → identifiant de connexion
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    // Gestion des rôles
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

    // === Pseudo (identité publique) ===
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;
        return $this;
    }

    // === Mot de passe ===
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    // Nettoyage éventuel de données sensibles
    public function eraseCredentials(): void
    {
        // ex: $this->plainPassword = null;
    }

    // === Profil ===
    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): static
    {
        $this->location = $location;
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

    // === Notations ===
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

    // === Relations avec Listing ===
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
            // ⚠️ on ne met pas setAuthor(null) car JoinColumn(nullable=false)
            // → sinon incohérence. Si besoin, prévoir un flux de transfert/suppression.
        }
        return $this;
    }

    // === Représentation textuelle ===
    public function __toString(): string
    {
        // utile pour afficher l’utilisateur dans un <select> en admin
        return $this->email ?? 'Utilisateur';
    }
}
/**Chaque bloc est séparé : sécurité, profil, réputation, relations.
Le champ pseudo a remplacé firstname/lastname pour des raisons UX + vie privée.
Doctrine garantit les relations (OneToMany avec Listing).
__toString() sert dans le back-office.
Respect des conventions Symfony (UserInterface, PasswordAuthenticatedUserInterface). */