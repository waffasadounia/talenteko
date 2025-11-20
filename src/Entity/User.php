<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserRepository;
use App\Validator\ValidLocation;
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
#[ORM\UniqueConstraint(name: 'UNIQUE_EMAIL', fields: ['email'])]
#[ORM\UniqueConstraint(name: 'UNIQUE_PSEUDO_TAG', fields: ['pseudo', 'tag'])]
#[ORM\Index(fields: ['location'])]
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

    private ?string $plainPassword = null;

    // === Profil public ===
    #[ORM\Column(length: 30)]
    #[Assert\NotBlank(message: 'Merci de choisir un pseudo.')]
    #[Assert\Length(min: 3, max: 30)]
    #[Assert\Regex(pattern: '/^[a-zA-Z0-9_.\- ]+$/u', message: 'Le pseudo contient des caractères non autorisés.')]
    private ?string $pseudo = null;

    #[ORM\Column(length: 4)]
    private ?string $tag = null;

    #[ORM\Column(length: 120)]
    #[Assert\NotBlank]
    #[Assert\Length(min: 2, max: 120)]
    #[Assert\Regex(pattern: '/^[\p{L}0-9\s\'\-\.,]+$/u', message: 'La localisation contient des caractères non autorisés.')]
    #[ValidLocation]
    private ?string $location = null;

    #[ORM\Column(type: 'float', options: ['default' => 0])]
    private float $ratingAvg = 0.0;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ratingCount = 0;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    // === Relations ===
    #[ORM\OneToOne(mappedBy: 'user', targetEntity: Profile::class, cascade: ['persist', 'remove'])]
    private ?Profile $profile = null;

    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Listing::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $listings;

    #[ORM\OneToMany(mappedBy: 'requester', targetEntity: Exchange::class)]
    private Collection $exchangesRequested;

    #[ORM\OneToMany(mappedBy: 'recipient', targetEntity: Exchange::class)]
    private Collection $exchangesReceived;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: PasswordResetToken::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $passwordResetTokens;

    #[ORM\OneToMany(mappedBy: 'sender', targetEntity: Message::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $sentMessages;

    #[ORM\OneToMany(mappedBy: 'recipient', targetEntity: Message::class)]
    private Collection $receivedMessages;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Favorite::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $favorites;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Notification::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $notifications;

    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Review::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $reviewsGiven;

    #[ORM\OneToMany(mappedBy: 'target', targetEntity: Review::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $reviewsReceived;

    // === Constructeur ===
    public function __construct()
    {
        $this->roles = ['ROLE_USER'];
        $this->createdAt = new \DateTimeImmutable();
        $this->listings = new ArrayCollection();
        $this->exchangesRequested = new ArrayCollection();
        $this->exchangesReceived = new ArrayCollection();
        $this->passwordResetTokens = new ArrayCollection();
        $this->sentMessages = new ArrayCollection();
        $this->receivedMessages = new ArrayCollection();
        $this->favorites = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->reviewsGiven = new ArrayCollection();
        $this->reviewsReceived = new ArrayCollection();

        $this->tag = str_pad((string) random_int(0, 9999), 4, '0', STR_PAD_LEFT);
    }

    // === Identité & sécurité ===

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = mb_strtolower($email);
        return $this;
    }

    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

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

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;
        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): static
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

    public function eraseCredentials(): void
    {
        $this->plainPassword = null;
    }

    // === Pseudo & Display ===

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }
    public function setPseudo(string $pseudo): static
    {
        $this->pseudo = $pseudo;
        return $this;
    }

    public function getTag(): ?string
    {
        return $this->tag;
    }
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
        $fallback = mb_substr(explode('@', $this->email)[0] ?? 'membre', 0, 4) . '****';
        return $this->pseudo ?: $fallback;
    }

    // === Localisation ===
    public function getLocation(): ?string
    {
        return $this->location;
    }
    public function setLocation(string $location): static
    {
        $this->location = $location;
        return $this;
    }

    // === Profil ===

    public function getProfile(): ?Profile
    {
        return $this->profile;
    }

    public function setProfile(?Profile $profile): static
    {
        $this->profile = $profile;
        if ($profile && $profile->getUser() !== $this) {
            $profile->setUser($this);
        }
        return $this;
    }

    public function getAvatarFilename(): ?string
    {
        return $this->profile?->getAvatarFilename();
    }
    public function getBio(): ?string
    {
        return $this->profile?->getBio();
    }

    // === Listings ===

    /** @return Collection<int, Listing> */
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

    // === Exchanges ===

    /** @return Collection<int, Exchange> */
    public function getExchangesRequested(): Collection
    {
        return $this->exchangesRequested;
    }

    /** @return Collection<int, Exchange> */
    public function getExchangesReceived(): Collection
    {
        return $this->exchangesReceived;
    }

    public function addExchangeRequested(Exchange $exchange): static
    {
        if (!$this->exchangesRequested->contains($exchange)) {
            $this->exchangesRequested->add($exchange);
            $exchange->setRequester($this);
        }
        return $this;
    }

    public function addExchangeReceived(Exchange $exchange): static
    {
        if (!$this->exchangesReceived->contains($exchange)) {
            $this->exchangesReceived->add($exchange);
            $exchange->setRecipient($this);
        }
        return $this;
    }

    // === Divers relations ===

    public function getPasswordResetTokens(): Collection
    {
        return $this->passwordResetTokens;
    }
    public function getSentMessages(): Collection
    {
        return $this->sentMessages;
    }
    public function getReceivedMessages(): Collection
    {
        return $this->receivedMessages;
    }
    public function getFavorites(): Collection
    {
        return $this->favorites;
    }
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }
    public function getReviewsGiven(): Collection
    {
        return $this->reviewsGiven;
    }
    public function getReviewsReceived(): Collection
    {
        return $this->reviewsReceived;
    }

    public function __toString(): string
    {
        return $this->getDisplayName();
    }
}
