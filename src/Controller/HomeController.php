<?php
declare(strict_types=1);

namespace App\Controller;

use App\Repository\ListingRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function index(ListingRepository $repo, CategoryRepository $catRepo): Response
    {
        // On charge les 12 dernières annonces avec auteur + catégorie + images
        $annonces = $repo->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->leftJoin('l.images', 'i')->addSelect('i')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults(12)
            ->getQuery()
            ->getResult();

        return $this->render('home/index.html.twig', [
            'annonces'   => $annonces,
            'categories' => $catRepo->findBy([], ['name' => 'ASC'], 8),
        ]);
    }
}
