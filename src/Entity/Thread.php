<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ThreadRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ThreadRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Thread
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // === Participants ===
    #[Assert\Count(
        min: 2,
        minMessage: 'Un thread doit contenir au moins 2 participants.'
    )]
    #[ORM\ManyToMany(targetEntity: User::class)]
    #[ORM\JoinTable(name: 'thread_participants')]
    private Collection $participants;

    // === Messages ===
    #[ORM\OneToMany(
        mappedBy: 'thread',
        targetEntity: Message::class,
        cascade: ['persist', 'remove'],
        orphanRemoval: true
    )]
    #[ORM\OrderBy(['createdAt' => 'ASC'])] // garantit l'ordre chronologique
    private Collection $messages;

    #[Assert\NotNull]
    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $createdAt;

    #[Assert\NotNull]
    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $updatedAt;

    public function __construct()
    {
        $this->participants = new ArrayCollection();
        $this->messages = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    // === ID ===
    public function getId(): ?int
    {
        return $this->id;
    }

    // === Participants ===
    /** @return Collection<int, User> */
    public function getParticipants(): Collection
    {
        return $this->participants;
    }

    public function addParticipant(User $user): self
    {
        if (!$this->participants->contains($user)) {
            $this->participants->add($user);
        }

        return $this;
    }

    public function removeParticipant(User $user): self
    {
        $this->participants->removeElement($user);

        return $this;
    }

    public function isParticipant(User $user): bool
    {
        return $this->participants->contains($user);
    }

    /**
     * Retourne l’autre participant dans un thread 1-to-1.
     * Retourne null si thread de groupe ou si l'utilisateur est seul.
     */
    public function getOtherParticipant(User $user): ?User
    {
        foreach ($this->participants as $participant) {
            if ($participant !== $user) {
                return $participant;
            }
        }

        return null;
    }

    // === Messages ===
    /** @return Collection<int, Message> */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages->add($message);
            $message->setThread($this);
            $this->touch();
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // orphanRemoval=true → Doctrine supprimera automatiquement le message
            $this->touch();
        }

        return $this;
    }

    public function getLastMessage(): ?Message
    {
        return $this->messages->last() ?: null;
    }

    // === Timestamps ===
    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updatedAt;
    }

    #[ORM\PreUpdate]
    public function touch(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
    }

    // === Divers ===
    public function __toString(): string
    {
        return \sprintf('Thread #%d', $this->id ?? 0);
    }
}
