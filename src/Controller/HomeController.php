<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\Listing;
use App\Repository\ListingRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class HomeController extends AbstractController
{
    /**
     * Page d’accueil : 12 dernières annonces
     */
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function index(ListingRepository $repo, CategoryRepository $catRepo): Response
    {
        // Précharge auteur + catégorie pour éviter le N+1
        $annonces = $repo->createQueryBuilder('l')
            ->leftJoin('l.author', 'a')->addSelect('a')
            ->leftJoin('l.category', 'c')->addSelect('c')
            ->orderBy('l.createdAt', 'DESC')
            ->setMaxResults(12)
            ->getQuery()
            ->getResult();

        /** @var array<int, Listing> $annonces */
        $cards = array_map(
            static function (Listing $l): array {
                $categoryName = $l->getCategory() ? $l->getCategory()->getName() : 'Non classée';

                $author = $l->getAuthor();
                $displayName = ($author && method_exists($author, 'getPseudo') && $author->getPseudo())
                    ? $author->getPseudo()
                    : 'Membre';

                // ✅ Utilise uniquement la nouvelle API canonique
                $ville = $l->getLocation();

                return [
                    'id'          => $l->getId(),
                    'slug'        => $l->getSlug(),
                    'title'       => $l->getTitle(),
                    'description' => $l->getDescription(),
                    'category'    => $categoryName,
                    'user'        => ['name' => $displayName],
                    'ville'       => $ville,
                    'stars'       => 4, // TODO: moyenne réelle
                ];
            },
            $annonces
        );

        return $this->render('home/index.html.twig', [
            'annonces' => $cards,
            // 'categories' => $catRepo->findBy([], ['name'=>'ASC'], 8),
        ]);
    }
}
// NOTE Twig carte : path('app_listing_show', { slug: annonce.slug })
