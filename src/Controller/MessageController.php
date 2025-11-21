<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Message;
use App\Entity\Thread;
use App\Entity\User;
use App\Message\NewMessageNotification;
use App\Repository\ThreadRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Constraints as Assert;

#[IsGranted('IS_AUTHENTICATED_FULLY')]
#[Route('/messages')]
final class MessageController extends AbstractController
{
    #[Route('', name: 'app_messages', methods: ['GET'])]
    public function index(ThreadRepository $threadRepo): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        // Récupère tous les threads où l’utilisateur participe
        $threads = $threadRepo->findByParticipant($user);

        return $this->render('message/index.html.twig', [
            'threads' => $threads,
            'page_title' => 'Messagerie',
        ]);
    }

    #[Route('/thread/{id}', name: 'app_thread_show', methods: ['GET', 'POST'])]
    public function show(
        #[MapEntity(id: 'id')] Thread $thread,
        Request $request,
        EntityManagerInterface $em,
        MessageBusInterface $bus,
    ): Response {
        /** @var User $user */
        $user = $this->getUser();

        // Vérification d'accès
        if (!$thread->isParticipant($user)) {
            throw $this->createAccessDeniedException('Vous n’avez pas accès à cette conversation.');
        }

        // Formulaire d’envoi de message
        $form = $this->createFormBuilder(new Message())
            ->add('content', TextareaType::class, [
                'label' => 'Votre message',
                'constraints' => [
                    new Assert\NotBlank(['message' => 'Le message ne peut pas être vide.']),
                    new Assert\Length([
                        'min' => 2,
                        'max' => 2000,
                    ]),
                ],
                'attr' => [
                    'placeholder' => 'Écrivez un message...',
                    'rows' => 3,
                ],
            ])
            ->getForm();

        $form->handleRequest($request);

        // Si message envoyé
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Message $message */
            $message = $form->getData();
            $message->setSender($user);
            $message->setThread($thread);

            // Détermination du destinataire
            $recipient = $thread->getOtherParticipant($user);
            if (null === $recipient) {
                $this->addFlash('error', 'Impossible d’envoyer le message.');
            } else {
                $message->setRecipient($recipient);

                $em->persist($message);
                $em->flush();

                // Notification async
                $bus->dispatch(new NewMessageNotification($message->getId()));

                $this->addFlash('success', 'Message envoyé !');

                // PRG
                return $this->redirectToRoute('app_thread_show', [
                    'id' => $thread->getId(),
                ]);
            }
        }

        return $this->render('message/show.html.twig', [
            'thread' => $thread,
            'messages' => $thread->getMessages(),
            'form' => $form->createView(),
        ]);
    }

    #[Route('/start/{id}', name: 'app_message_start', methods: ['GET'])]
    public function start(
        User $other,
        EntityManagerInterface $em,
        ThreadRepository $threadRepo
    ): Response {
        /** @var User $me */
        $me = $this->getUser();

        if ($me === $other) {
            $this->addFlash('warning', 'Impossible de démarrer une conversation avec vous-même.');
            return $this->redirectToRoute('app_messages');
        }

        // Vérifier si un thread existe déjà entre les deux
        $thread = $threadRepo->findExisting($me, $other);

        if (!$thread) {
            $thread = new Thread();
            $thread->addParticipant($me);
            $thread->addParticipant($other);

            $em->persist($thread);
            $em->flush();
        }

        return $this->redirectToRoute('app_thread_show', [
            'id' => $thread->getId(),
        ]);
    }
}
