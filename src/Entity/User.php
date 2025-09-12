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

    // Identifiant de connexion = email (unique en BDD)
    #[ORM\Column(length: 180)]
    #[Assert\NotBlank(message: 'Merci de saisir un email.')]
    #[Assert\Email(message: 'Email invalide.')]
    private ?string $email = null;

    /**
     * @var list<string> Liste des rôles utilisateur (ROLE_USER, ROLE_ADMIN…)
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * Mot de passe hashé (stocké en BDD)
     * → jamais le mot de passe en clair ici
     */
    #[ORM\Column]
    private string $password = '';

    /**
     * Champ temporaire pour validation du mot de passe
     * - NON stocké en BDD
     * - Sert uniquement lors de l'inscription / modification
     * - Contraintes fortes (ANSSI) :
     *    • ≥ 10 caractères
     *    • au moins 1 majuscule
     *    • au moins 1 minuscule
     *    • au moins 1 chiffre
     *    • au moins 1 caractère spécial
     */
    #[Assert\NotBlank(message: 'Merci de saisir un mot de passe.')]
    #[Assert\Length(
        min: 10,
        minMessage: 'Votre mot de passe doit contenir au moins {{ limit }} caractères.'
    )]
    #[Assert\Regex(
        pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/",
        message: "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial."
    )]
    private ?string $plainPassword = null;

    // === Profil ===

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $pseudo = null;

    #[ORM\Column(length: 120)]
    #[Assert\NotBlank(message: 'Merci d’indiquer votre ville.')]
    private ?string $location = null;

    // texte libre de présentation
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

    // compétences proposées et recherchées (stockées en JSON)
    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skills_offered = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skills_wanted = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatarFilename = null;

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
        // par sécurité : chaque utilisateur a au moins ROLE_USER
        $this->roles = ['ROLE_USER'];
        // la date de création est définie dès l’instanciation
        $this->createdAt = new \DateTimeImmutable();
        // initialiser la collection pour éviter null
        $this->listings = new ArrayCollection();
    }

    // === Getters / Setters ===

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
        // normalisation → évite doublons (Jean@… vs jean@…)
        $this->email = mb_strtolower($email);
        return $this;
    }

    // Symfony Security → identifiant de connexion
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    // Compatibilité avec anciens bundles
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

    // Password (hashé en BDD)
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    // Plain password (non stocké)
    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): static
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

    // Nettoyage du plainPassword après usage
    public function eraseCredentials(): void
    {
        $this->plainPassword = null;
    }

    // === Profil ===

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): static
    {
        $this->pseudo = $pseudo;
        return $this;
    }

    // Affichage du nom d’utilisateur (pseudo ou fallback)
    public function getDisplayName(): string
    {
        if ($this->pseudo) {
            return $this->pseudo;
        }
        // fallback propre : masque une partie de l’email
        $email = (string) $this->email;
        $local = explode('@', $email)[0] ?? 'membre';
        if (mb_strlen($local) > 4) {
            return mb_substr($local, 0, 4) . str_repeat('•', 3);
        }
        return $local . '•';
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
            // sinon incohérence côté DB
        }
        return $this;
    }

    public function __toString(): string
{
    // Si le pseudo est défini → c’est lui qui prime
    if (!empty($this->pseudo)) {
        return $this->pseudo;
    }

    // Sinon partie locale de l’email (avant le @), tronquée pour éviter d’exposer l’adresse
    if (!empty($this->email)) {
        $local = explode('@', $this->email)[0];
        return mb_substr($local, 0, 4) . '…';
    }

    // Fallback ultime
    return 'Membre';
}
}
