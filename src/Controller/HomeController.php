<?php

namespace App\Controller;
use App\Repository\ListingRepository;
use App\Repository\CategoryRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ListingRepository $repo, CategoryRepository $catRepo): Response
    {
        // 12 dernières annonces avec auteur + catégorie
        $annonces = $repo->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults(12)
            ->getQuery()->getResult();

        // Map simple pour correspondre à tes partials (_annonce_card)
        $cards = array_map(function($l) {
            return [
                'id' => $l->getId(),
                'slug' => $l->getSlug(),
                'title' => $l->getTitle(),
                'description' => $l->getDescription(),
                'category' => $l->getCategory()->getName(),
                'user' => ['name' => $l->getAuthor()->getPseudo() ?: 'Membre'],
                'ville' => $l->getCity(),
                'stars' => 4, // TODO: calcule réel plus tard
            ];
        }, $annonces);

        return $this->render('home/index.html.twig', [
            'annonces' => $cards,
            // 'categories' => $catRepo->findBy([], ['name'=>'ASC'], 8), // si ton template les affiche
        ]);
    }
}
            //Dans les cartes, le lien vers la fiche pourra pointer sur path('app_listing_show', {slug: annonce.slug}).