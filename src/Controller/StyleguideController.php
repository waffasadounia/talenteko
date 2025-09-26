<?php

declare(strict_types=1);

// src/Controller/StyleguideController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
final class StyleguideController extends AbstractController
{
    /**
     * Page interne : styleguide des boutons Talenteko
     * URL : /styleguide/buttons
     * Name : app_styleguide_buttons.
     */
    #[Route('/styleguide/buttons', name: 'app_styleguide_buttons', methods: ['GET'])]
    public function buttons(): Response
    {
        return $this->render('styleguide/buttons.html.twig');
    }

    /**
     * Page interne : styleguide des formulaires Talentékô.
     * URL : /styleguide/forms
     * Name : app_styleguide_forms.
     */
    #[Route('/styleguide/forms', name: 'app_styleguide_forms', methods: ['GET'])]
    public function forms(): Response
    {
        return $this->render('styleguide/forms.html.twig');
    }

    #[Route('/styleguide/typography', name: 'app_styleguide_typography', methods: ['GET'])]
    public function typography(): Response
    {
        return $this->render('styleguide/typography.html.twig');
    }

    /**
     * Page interne : styleguide CTA Talentékô.
     * URL : /styleguide/cta
     * Name : app_styleguide_cta.
     */
    #[Route('/styleguide/cta', name: 'app_styleguide_cta', methods: ['GET'])]
    public function cta(): Response
    {
        return $this->render('styleguide/cta.html.twig');
    }
}
