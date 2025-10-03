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
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
#[ORM\UniqueConstraint(name: 'UNIQ_PSEUDO_TAG', fields: ['pseudo', 'tag'])]
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

    #[Assert\NotBlank(message: 'Merci de saisir un mot de passe.')]
    #[Assert\Length(min: 10, minMessage: 'Votre mot de passe doit contenir au moins {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/",
        message: 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.'
    )]
    private ?string $plainPassword = null;

    // === Profil public ===

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

    #[ORM\Column(type: 'float', options: ['default' => 0])]
    private float $ratingAvg = 0.0;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $ratingCount = 0;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    // === Relations ===

    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Listing::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $listings;

    #[ORM\OneToMany(mappedBy: 'requester', targetEntity: Exchange::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $exchanges;

    #[ORM\OneToOne(mappedBy: 'user', targetEntity: Profile::class, cascade: ['persist', 'remove'])]
    private ?Profile $profile = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: PasswordResetToken::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $passwordResetTokens;

    #[ORM\OneToMany(mappedBy: 'sender', targetEntity: Message::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $sentMessages;

    #[ORM\OneToMany(mappedBy: 'recipient', targetEntity: Message::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
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
        $this->exchanges = new ArrayCollection();
        $this->passwordResetTokens = new ArrayCollection();
        $this->sentMessages = new ArrayCollection();
        $this->receivedMessages = new ArrayCollection();
        $this->favorites = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->reviewsGiven = new ArrayCollection();
        $this->reviewsReceived = new ArrayCollection();

        $this->tag = str_pad((string) random_int(0, 9999), 4, '0', \STR_PAD_LEFT);
    }

    // === Identité & Sécurité ===

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
        if (!\in_array('ROLE_USER', $roles, true)) {
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

    // === Pseudo & Tag ===

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
            return $this->pseudo.'#'.$this->tag;
        }

        return $this->pseudo ?: mb_substr(explode('@', $this->email)[0] ?? 'membre', 0, 4).'****';
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

    // === Profile (bio/avatar/skills) ===
    public function getProfile(): ?Profile
    {
        return $this->profile;
    }

    public function setProfile(?Profile $profile): self
    {
        $this->profile = $profile;
        if ($profile && $profile->getUser() !== $this) {
            $profile->setUser($this);
        }

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->profile?->getBio();
    }

    public function getAvatarFilename(): ?string
    {
        return $this->profile?->getAvatarFilename();
    }

    // === Notation ===
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

    // === Dates ===
    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    // === Relations ===

    /** @return Collection<int, Listing> */
    public function getListings(): Collection
    {
        return $this->listings;
    }

    public function addListing(Listing $listing): self
    {
        if (!$this->listings->contains($listing)) {
            $this->listings->add($listing);
            $listing->setAuthor($this);
        }

        return $this;
    }

    public function removeListing(Listing $listing): self
    {
        if ($this->listings->removeElement($listing) && $listing->getAuthor() === $this) {
            $listing->setAuthor(null);
        }

        return $this;
    }

    /** @return Collection<int, Exchange> */
    public function getExchanges(): Collection
    {
        return $this->exchanges;
    }

    public function addExchange(Exchange $exchange): self
    {
        if (!$this->exchanges->contains($exchange)) {
            $this->exchanges->add($exchange);
            $exchange->setRequester($this);
        }

        return $this;
    }

    public function removeExchange(Exchange $exchange): self
    {
        if ($this->exchanges->removeElement($exchange) && $exchange->getRequester() === $this) {
            $exchange->setRequester(null);
        }

        return $this;
    }

    /** @return Collection<int, PasswordResetToken> */
    public function getPasswordResetTokens(): Collection
    {
        return $this->passwordResetTokens;
    }

    /** @return Collection<int, Message> */
    public function getSentMessages(): Collection
    {
        return $this->sentMessages;
    }

    public function addSentMessage(Message $msg): self
    {
        if (!$this->sentMessages->contains($msg)) {
            $this->sentMessages->add($msg);
            $msg->setSender($this);
        }

        return $this;
    }

    public function removeSentMessage(Message $msg): self
    {
        if ($this->sentMessages->removeElement($msg) && $msg->getSender() === $this) {
            $msg->setSender(null);
        }

        return $this;
    }

    /** @return Collection<int, Message> */
    public function getReceivedMessages(): Collection
    {
        return $this->receivedMessages;
    }

    public function addReceivedMessage(Message $msg): self
    {
        if (!$this->receivedMessages->contains($msg)) {
            $this->receivedMessages->add($msg);
            $msg->setRecipient($this);
        }

        return $this;
    }

    public function removeReceivedMessage(Message $msg): self
    {
        if ($this->receivedMessages->removeElement($msg) && $msg->getRecipient() === $this) {
            $msg->setRecipient(null);
        }

        return $this;
    }

    /** @return Collection<int, Favorite> */
    public function getFavorites(): Collection
    {
        return $this->favorites;
    }

    /** @return Collection<int, Notification> */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    /** @return Collection<int, Review> */
    public function getReviewsGiven(): Collection
    {
        return $this->reviewsGiven;
    }

    public function addReviewGiven(Review $review): self
    {
        if (!$this->reviewsGiven->contains($review)) {
            $this->reviewsGiven->add($review);
            $review->setAuthor($this);
        }

        return $this;
    }

    public function removeReviewGiven(Review $review): self
    {
        if ($this->reviewsGiven->removeElement($review) && $review->getAuthor() === $this) {
            $review->setAuthor(null);
        }

        return $this;
    }

    /** @return Collection<int, Review> */
    public function getReviewsReceived(): Collection
    {
        return $this->reviewsReceived;
    }

    public function addReviewReceived(Review $review): self
    {
        if (!$this->reviewsReceived->contains($review)) {
            $this->reviewsReceived->add($review);
            $review->setTarget($this);
        }

        return $this;
    }

    public function removeReviewReceived(Review $review): self
    {
        if ($this->reviewsReceived->removeElement($review) && $review->getTarget() === $this) {
            $review->setTarget(null);
        }

        return $this;
    }

    // === Divers ===
    public function __toString(): string
    {
        return $this->getDisplayName();
    }
}
