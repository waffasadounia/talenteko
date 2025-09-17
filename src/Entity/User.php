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
use App\Validator\ValidLocation; // ✅ contrainte custom (API BAN)

/**
 * ⚡ Entité User
 *
 * ➡️ Rôle central dans l’application TalentÉkô :
 * - Identité : email + pseudo + tag (ex: Marie#1234)
 * - Sécurité : mot de passe hashé uniquement
 * - Profil : localisation, bio, compétences, avatar
 * - Relations : annonces publiées
 *
 * 👉 Particularité UX : 
 *   Nous avons choisi un système Discord-like avec pseudo + tag
 *   pour concilier confidentialité et unicité.
 */
#[UniqueEntity(fields: ['email'], message: 'Un compte existe déjà avec cet email.')]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
#[ORM\UniqueConstraint(name: 'UNIQ_PSEUDO_TAG', fields: ['pseudo', 'tag'])] // 🔒 unicité pseudo+tag
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // === Identité / Sécurité ===

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * Email = identifiant unique de connexion
     * - Sauvegardé en minuscules pour éviter les doublons techniques
     */
    #[ORM\Column(length: 180)]
    #[Assert\NotBlank(message: 'Merci de saisir un email.')]
    #[Assert\Email(message: 'Email invalide.')]
    private ?string $email = null;

    /**
     * Liste des rôles utilisateur
     * - ROLE_USER par défaut
     * - ROLE_ADMIN, ROLE_MODERATOR possibles
     * - Stockés en BDD au format JSON
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * Mot de passe hashé (stocké en BDD).
     * ⚠️ Bonne pratique : jamais stocker le mot de passe en clair !
     */
    #[ORM\Column]
    private string $password = '';

    /**
     * Champ temporaire pour validation du mot de passe.
     *
     * ❓ Pourquoi séparer plainPassword et password ?
     * - plainPassword = utilisé uniquement pour la saisie → jamais persisté
     * - password = hashé et sauvegardé
     *
     * Cela permet d’appliquer des contraintes de sécurité (ANSSI)
     * avant de hasher. Après usage, eraseCredentials() le vide.
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

    /**
     * Pseudonyme public
     * - Obligatoire mais pas unique seul
     * - Exemple : plusieurs utilisateurs peuvent choisir "Marie"
     * - L’unicité est garantie par l’ajout d’un tag numérique
     */
    #[ORM\Column(length: 30)]
    #[Assert\NotBlank(message: 'Merci de choisir un pseudo.')]
    #[Assert\Length(
        min: 3,
        max: 30,
        minMessage: 'Le pseudo doit contenir au moins {{ limit }} caractères.',
        maxMessage: 'Le pseudo ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[Assert\Regex(
        pattern: '/^[a-zA-Z0-9_.\- ]+$/u',
        message: 'Le pseudo ne peut contenir que des lettres, chiffres, espaces et . _ -'
    )]
    private ?string $pseudo = null;

    /**
     * Tag numérique (Discord-like)
     * - 4 chiffres générés aléatoirement (ex: 0421)
     * - Permet de différencier deux pseudos identiques
     * - Stocké et validé en BDD
     */
    #[ORM\Column(length: 4)]
    #[Assert\NotBlank(message: 'Le tag est obligatoire (auto-généré).')]
    #[Assert\Regex(
        pattern: '/^\d{4}$/',
        message: 'Le tag doit contenir exactement 4 chiffres.'
    )]
    private ?string $tag = null;

    /**
     * Localisation (ville ou commune)
     *
     * Validation en double couche :
     * - Contraintes locales (Regex + longueur) → évite les saisies absurdes
     * - Contrainte custom ValidLocation → vérifie via API BAN que la ville existe vraiment
     */
    #[ORM\Column(length: 120)]
    #[Assert\NotBlank(message: 'Merci d’indiquer votre ville.')]
    #[Assert\Length(
        min: 2,
        max: 120,
        minMessage: 'La localisation doit contenir au moins {{ limit }} caractères.',
        maxMessage: 'La localisation ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[Assert\Regex(
        pattern: '/^[\p{L}\s\'\-]+$/u',
        message: 'La localisation ne peut contenir que des lettres, espaces, apostrophes ou tirets.'
    )]
    #[ValidLocation]
    private ?string $location = null;

    // Bio utilisateur (optionnelle)
    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

    // Compétences proposées et recherchées (JSON → flexible, utilisable en tags)
    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skills_offered = null;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $skills_wanted = null;

    // Avatar utilisateur (nom de fichier stocké en BDD)
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $avatarFilename = null;

    // Notation moyenne et compteur (prévu pour V2/V3)
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
        $this->roles = ['ROLE_USER'];
        $this->createdAt = new \DateTimeImmutable();
        $this->listings = new ArrayCollection();

        /**
         * 🎲 Génération auto du tag
         * Chaque nouvel utilisateur reçoit un code aléatoire à 4 chiffres.
         * Exemple :
         *   - Marie#0421
         *   - Marie#8934
         * Cela permet d’autoriser les doublons tout en gardant une identité publique unique.
         */
        $this->tag = str_pad((string) random_int(0, 9999), 4, '0', STR_PAD_LEFT);
    }

    // === Getters / Setters ===

    public function getId(): ?int { return $this->id; }

    public function getEmail(): ?string { return $this->email; }
    public function setEmail(string $email): static {
        $this->email = mb_strtolower($email);
        return $this;
    }

    public function getUserIdentifier(): string { return (string) $this->email; }
    public function getUsername(): string { return $this->getUserIdentifier(); }

    public function getRoles(): array {
        $roles = $this->roles;
        if (!in_array('ROLE_USER', $roles, true)) $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }
    public function setRoles(array $roles): static { $this->roles = $roles; return $this; }

    public function getPassword(): string { return $this->password; }
    public function setPassword(string $password): static { $this->password = $password; return $this; }

    public function getPlainPassword(): ?string { return $this->plainPassword; }
    public function setPlainPassword(?string $plainPassword): static { $this->plainPassword = $plainPassword; return $this; }

    public function eraseCredentials(): void { $this->plainPassword = null; }

    public function getPseudo(): ?string { return $this->pseudo; }
    public function setPseudo(string $pseudo): static { $this->pseudo = $pseudo; return $this; }

    public function getTag(): ?string { return $this->tag; }
    public function setTag(string $tag): static { $this->tag = $tag; return $this; }

    /**
     * Affichage public unique (Discord-like)
     * - Pseudo + #tag si disponibles
     * - Sinon, fallback : début de l’email
     */
    public function getDisplayName(): string {
        if ($this->pseudo && $this->tag) {
            return $this->pseudo . '#' . $this->tag;
        }
        return $this->pseudo ?: mb_substr(explode('@', $this->email)[0] ?? 'membre', 0, 4) . '•';
    }

    public function getLocation(): ?string { return $this->location; }
    public function setLocation(string $location): static { $this->location = $location; return $this; }

    public function getBio(): ?string { return $this->bio; }
    public function setBio(?string $bio): static { $this->bio = $bio; return $this; }

    public function getSkillsOffered(): ?array { return $this->skills_offered; }
    public function setSkillsOffered(?array $skills): static { $this->skills_offered = $skills; return $this; }

    public function getSkillsWanted(): ?array { return $this->skills_wanted; }
    public function setSkillsWanted(?array $skills): static { $this->skills_wanted = $skills; return $this; }

    public function getAvatarFilename(): ?string { return $this->avatarFilename; }
    public function setAvatarFilename(?string $fn): static { $this->avatarFilename = $fn; return $this; }

    public function getRatingAvg(): float { return $this->ratingAvg; }
    public function setRatingAvg(float $ratingAvg): static { $this->ratingAvg = $ratingAvg; return $this; }

    public function getRatingCount(): int { return $this->ratingCount; }
    public function setRatingCount(int $ratingCount): static { $this->ratingCount = $ratingCount; return $this; }

    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }

    /** @return Collection<int, Listing> */
    public function getListings(): Collection { return $this->listings; }

    public function addListing(Listing $listing): static {
        if (!$this->listings->contains($listing)) {
            $this->listings->add($listing);
            $listing->setAuthor($this);
        }
        return $this;
    }
    public function removeListing(Listing $listing): static {
        $this->listings->removeElement($listing);
        return $this;
    }

    public function __toString(): string {
        return $this->getDisplayName();
    }
}
