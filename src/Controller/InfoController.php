<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class InfoController extends AbstractController
{
    #[Route('/a-propos', name: 'app_about', methods: ['GET'])]
    public function about(): Response
    {
        return $this->render('info/about.html.twig');
    }

    #[Route('/comment-ca-marche', name: 'app_how', methods: ['GET'])]
    public function how(): Response
    {
        return $this->render('info/how.html.twig');
    }

    #[Route('/faq', name: 'app_faq', methods: ['GET'])]
    public function faq(): Response
    {
        return $this->render('info/faq.html.twig');
    }

    #[Route('/contact', name: 'app_contact', methods: ['GET'])]
    public function contact(): Response
    {
        return $this->render('info/contact.html.twig');
    }

    #[Route('/cookies', name: 'app_cookies', methods: ['GET'])]
    public function cookies(): Response
    {
        return $this->render('legal/cookies.html.twig');
    }
}
