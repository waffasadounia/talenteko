<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
final class StyleguideController extends AbstractController
{
    /**
     * Page d’accueil du styleguide TalentÉkô
     * URL : /styleguide
     * Name : app_styleguide_index.
     */
    #[Route('/styleguide', name: 'app_styleguide_index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('styleguide/index.html.twig', [
            'page_title' => 'Styleguide TalentÉkô',
        ]);
    }

    /**
     * Page interne : styleguide des boutons TalentÉkô
     * URL : /styleguide/buttons
     * Name : app_styleguide_buttons.
     */
    #[Route('/styleguide/buttons', name: 'app_styleguide_buttons', methods: ['GET'])]
    public function buttons(): Response
    {
        return $this->render('styleguide/buttons.html.twig');
    }

    /**
     * Page interne : styleguide des formulaires TalentÉkô
     * URL : /styleguide/forms
     * Name : app_styleguide_forms.
     */
    #[Route('/styleguide/forms', name: 'app_styleguide_forms', methods: ['GET'])]
    public function forms(): Response
    {
        return $this->render('styleguide/forms.html.twig');
    }

    /**
     * Page interne : styleguide typographie TalentÉkô
     * URL : /styleguide/typography
     * Name : app_styleguide_typography.
     */
    #[Route('/styleguide/typography', name: 'app_styleguide_typography', methods: ['GET'])]
    public function typography(): Response
    {
        return $this->render('styleguide/typography.html.twig');
    }

    /**
     * Page interne : styleguide CTA TalentÉkô
     * URL : /styleguide/cta
     * Name : app_styleguide_cta.
     */
    #[Route('/styleguide/cta', name: 'app_styleguide_cta', methods: ['GET'])]
    public function cta(): Response
    {
        return $this->render('styleguide/cta.html.twig');
    }

    /**
     * Page interne : styleguide des cartes TalentÉkô
     * URL : /styleguide/cards
     * Name : app_styleguide_cards.
     */
    #[Route('/styleguide/cards', name: 'app_styleguide_cards', methods: ['GET'])]
    public function cards(): Response
    {
        return $this->render('styleguide/cards.html.twig');
    }
}
