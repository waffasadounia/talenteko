<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
#[ORM\Table(
    name: 'message',
    indexes: [
        new ORM\Index(name: 'idx_message_thread_created_at', columns: ['thread_id', 'created_at']),
    ]
)]
#[ORM\HasLifecycleCallbacks]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // === Relations ===

    // Expéditeur
    #[Assert\NotNull(message: 'Un message doit avoir un expéditeur.')]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'sentMessages')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $sender = null;

    // Destinataire
    #[Assert\NotNull(message: 'Un message doit avoir un destinataire.')]
    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'receivedMessages')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?User $recipient = null;

    // Thread parent
    #[Assert\NotNull(message: 'Un message doit être lié à une conversation.')]
    #[ORM\ManyToOne(targetEntity: Thread::class, inversedBy: 'messages')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Thread $thread = null;

    // === Contenu ===

    #[Assert\NotBlank(message: 'Le contenu du message est obligatoire.')]
    #[Assert\Length(
        min: 1,
        max: 2000,
        minMessage: 'Le message doit contenir au moins {{ limit }} caractère.',
        maxMessage: 'Le message ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[ORM\Column(type: 'text')]
    private string $content = '';

    // === Dates ===

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    // === Lifecycle ===
    #[ORM\PreUpdate]
    public function updateTimestamp(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
    }

    // === ID ===
    public function getId(): ?int
    {
        return $this->id;
    }

    // === Sender ===
    public function getSender(): ?User
    {
        return $this->sender;
    }

    public function setSender(?User $sender): self
    {
        $this->sender = $sender;

        return $this;
    }

    // === Recipient ===
    public function getRecipient(): ?User
    {
        return $this->recipient;
    }

    public function setRecipient(?User $recipient): self
    {
        $this->recipient = $recipient;

        return $this;
    }

    // === Thread ===
    public function getThread(): ?Thread
    {
        return $this->thread;
    }

    public function setThread(?Thread $thread): self
    {
        $this->thread = $thread;

        return $this;
    }

    // === Content ===
    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
    // Sécurité XSS : suppression de tout HTML
        $this->content = strip_tags($content);

        return $this;
    }

    // === Dates ===
    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    // === Divers ===
    public function __toString(): string
    {
        return \sprintf('Message #%d', $this->id ?? 0);
    }
}
