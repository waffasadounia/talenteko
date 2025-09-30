<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserRepository;
use App\Validator\ValidLocation;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[UniqueEntity(fields: ['email'], message: 'Un compte existe déjà avec cet email.')]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
#[ORM\UniqueConstraint(name: 'UNIQ_PSEUDO_TAG', fields: ['pseudo', 'tag'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // === Identité ===

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    #[Assert\NotBlank(message: 'Merci de saisir un email.')]
    #[Assert\Email(message: 'Email invalide.')]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    #[ORM\Column]
    private string $password = '';

    #[Assert\NotBlank(message: 'Merci de saisir un mot de passe.')]
    #[Assert\Length(
        min: 10,
        minMessage: 'Votre mot de passe doit contenir au moins {{ limit }} caractères.'
    )]
    #[Assert\Regex(
        pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/",
        message: 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.'
    )]
    private ?string $plainPassword = null;

    // === Profil ===

    #[ORM\Column(length: 30)]
    #[Assert\NotBlank(message: 'Merci de choisir un pseudo.')]
    #[Assert\Length(min: 3, max: 30)]
    #[Assert\Regex(
        pattern: '/^[a-zA-Z0-9_.\- ]+$/u',
        message: 'Le pseudo ne peut contenir que lettres, chiffres, espaces et . _ -'
    )]
    private ?string $pseudo = null;

    #[ORM\Column(length: 4)]
    #[Assert\NotBlank(message: 'Le tag est obligatoire (auto-généré).')]
    #[Assert\Regex(pattern: '/^\d{4}$/', message: 'Le tag doit contenir exactement 4 chiffres.')]
    private ?string $tag = null;

    #[ORM\Column(length: 120)]
    #[Assert\NotBlank(message: 'Merci d\'indiquer votre ville.')]
    #[Assert\Length(min: 2, max: 120)]
    #[Assert\Regex(
        pattern: '/^[\p{L}\s\'\-]+$/u',
        message: 'La localisation ne peut contenir que des lettres, espaces, apostrophes ou tirets.'
    )]
    #[ValidLocation]
    private ?string $location = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $bio = null;

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
    private DateTimeImmutable $createdAt;

    // === Reset password ===

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $resetToken = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?DateTimeImmutable $resetRequestedAt = null;

    // === Relations ===

    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Listing::class)]
    private Collection $listings;

    #[ORM\OneToMany(mappedBy: 'requester', targetEntity: Exchange::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $exchanges;

    #[ORM\OneToOne(mappedBy: 'user', targetEntity: Profile::class, cascade: ['persist', 'remove'])]
    private ?Profile $profile = null;

    // === Constructeur ===

    public function __construct()
    {
        $this->roles = ['ROLE_USER'];
        $this->createdAt = new DateTimeImmutable();
        $this->listings = new ArrayCollection();
        $this->exchanges = new ArrayCollection();

        // Génération auto du tag à 4 chiffres
        $this->tag = str_pad((string) random_int(0, 9999), 4, '0', STR_PAD_LEFT);
    }

    // === Getters / Setters principaux ===

    public function getId(): ?int { return $this->id; }

    public function getEmail(): ?string { return $this->email; }

    public function setEmail(string $email): static
    {
        $this->email = mb_strtolower($email);
        return $this;
    }

    public function getUserIdentifier(): string { return (string) $this->email; }

    public function getRoles(): array
    {
        $roles = $this->roles;
        if (!in_array('ROLE_USER', $roles, true)) {
            $roles[] = 'ROLE_USER';
        }
        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;
        return $this;
    }

    public function getPassword(): string { return $this->password; }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    public function getPlainPassword(): ?string { return $this->plainPassword; }

    public function setPlainPassword(?string $plainPassword): static
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

    public function eraseCredentials(): void { $this->plainPassword = null; }

    // === Pseudo & Tag ===

    public function getPseudo(): ?string { return $this->pseudo; }

    public function setPseudo(string $pseudo): static
    {
        $this->pseudo = $pseudo;
        return $this;
    }

    public function getTag(): ?string { return $this->tag; }

    public function setTag(string $tag): static
    {
        $this->tag = $tag;
        return $this;
    }

    public function getDisplayName(): string
    {
        if ($this->pseudo && $this->tag) {
            return $this->pseudo . '#' . $this->tag;
        }
        return $this->pseudo ?: mb_substr(explode('@', $this->email)[0] ?? 'membre', 0, 4) . '****';
    }

    // === Localisation & Bio ===

    public function getLocation(): ?string { return $this->location; }

    public function setLocation(string $location): static
    {
        $this->location = $location;
        return $this;
    }

    public function getBio(): ?string { return $this->bio; }

    public function setBio(?string $bio): static
    {
        $this->bio = $bio;
        return $this;
    }

    // === Compétences ===

    public function getSkillsOffered(): ?array { return $this->skills_offered; }

    public function setSkillsOffered(?array $skills): static
    {
        $this->skills_offered = $skills;
        return $this;
    }

    public function getSkillsWanted(): ?array { return $this->skills_wanted; }

    public function setSkillsWanted(?array $skills): static
    {
        $this->skills_wanted = $skills;
        return $this;
    }

    // === Avatar ===

    public function getAvatarFilename(): ?string { return $this->avatarFilename; }

    public function setAvatarFilename(?string $fn): static
    {
        $this->avatarFilename = $fn;
        return $this;
    }

    // === Notation ===

    public function getRatingAvg(): float { return $this->ratingAvg; }

    public function setRatingAvg(float $ratingAvg): static
    {
        $this->ratingAvg = $ratingAvg;
        return $this;
    }

    public function getRatingCount(): int { return $this->ratingCount; }

    public function setRatingCount(int $ratingCount): static
    {
        $this->ratingCount = $ratingCount;
        return $this;
    }

    // === Dates ===

    public function getCreatedAt(): DateTimeImmutable { return $this->createdAt; }

    // === Reset password ===

    public function getResetToken(): ?string { return $this->resetToken; }

    public function setResetToken(?string $token): static
    {
        $this->resetToken = $token;
        return $this;
    }

    public function getResetRequestedAt(): ?DateTimeImmutable { return $this->resetRequestedAt; }

    public function setResetRequestedAt(?DateTimeImmutable $date): static
    {
        $this->resetRequestedAt = $date;
        return $this;
    }

    // === Relations ===

    /** @return Collection<int, Listing> */
    public function getListings(): Collection { return $this->listings; }

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
        $this->listings->removeElement($listing);
        return $this;
    }

    /** @return Collection<int, Exchange> */
    public function getExchanges(): Collection { return $this->exchanges; }

    public function addExchange(Exchange $exchange): static
    {
        if (!$this->exchanges->contains($exchange)) {
            $this->exchanges->add($exchange);
            $exchange->setRequester($this);
        }
        return $this;
    }

    public function removeExchange(Exchange $exchange): static
    {
        if ($this->exchanges->removeElement($exchange) && $exchange->getRequester() === $this) {
            $exchange->setRequester(null);
        }
        return $this;
    }

    public function getProfile(): ?Profile { return $this->profile; }

    public function setProfile(Profile $profile): static
    {
        if ($profile->getUser() !== $this) {
            $profile->setUser($this);
        }
        $this->profile = $profile;
        return $this;
    }

    // === Divers ===

    public function __toString(): string { return $this->getDisplayName(); }
}
