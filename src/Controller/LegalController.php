<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class LegalController extends AbstractController
{
    #[Route('/conditions', name: 'app_conditions')]
    public function conditions(): Response
    {
        return $this->render('legal/conditions.html.twig');
    }

    #[Route('/confidentialite', name: 'app_confidentialite')]
    public function confidentialite(): Response
    {
        return $this->render('legal/confidentialite.html.twig');
    }
    #[Route('/mentions-legales', name: 'app_mentions_legales')]
public function mentions(): Response
{
    return $this->render('legal/mentions_legales.html.twig');
}

}
