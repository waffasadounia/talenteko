// assets/controllers/rating_filter_controller.js

import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus — Sélecteur d’évaluation (★)
 * ---------------------------------------------------
 * Permet à l’utilisateur de choisir un niveau d’étoiles (1 à 5)
 * dans le panneau de filtres de recherche.
 *
 * Fonctionnalités :
 * - 5 étoiles interactives basées sur SVG
 * - Mise à jour d’un <input type="hidden" name="rating">
 * - Soumission automatique du formulaire de filtres
 * - Accessibilité complète : clavier + aria-label + aria-pressed
 *
 * Compatible avec : templates/search/index.html.twig
 * Utilisé conjointement avec : filter-panel_controller.js
 */
export default class extends Controller {
  static targets = ['input', 'star', 'form'];

  connect() {
    // Initialise la valeur (par défaut 0) depuis le champ caché
    this.value = parseInt(this.inputTarget.value || 0, 10);
    this.refresh();
  }
  /**
   * Sélectionne une note au clic (ou à la touche Espace/Entrée).
   * Permet aussi de désélectionner la note si on reclique dessus.
   */
  select(event) {
    const val = parseInt(event.currentTarget.dataset.value, 10);
    this.value = this.value === val ? 0 : val; // toggle si on reclique
    this.inputTarget.value = this.value;
    this.refresh();

    // Soumission automatique du formulaire principal si disponible
    const form = this.element.closest('form');
    if (form) form.requestSubmit();
  }
  /**
   * Survol souris : met en surbrillance temporairement
   */
  highlight(event) {
    const val = parseInt(event.currentTarget.dataset.value, 10);
    this.updateStars(val);
  }

  /**
   * Quand on sort du survol : restaure la valeur actuelle
   */
  clearHighlight() {
    this.refresh();
  }

  /**
   * Rafraîchit l’état visuel complet selon la valeur active
   */
  refresh() {
    this.updateStars(this.value);
  }

  /**
   * Met à jour l’affichage (couleur + état ARIA)
   * @param {number} activeValue
   */
  updateStars(activeValue) {
    this.starTargets.forEach((el, i) => {
      const filled = i + 1 <= activeValue;

      // Gestion des classes Tailwind
      el.classList.toggle('text-talenteko-orange-500', filled);
      el.classList.toggle('text-gray-300', !filled);

      // Accessibilité : indiquer visuellement et vocalement l’état
      el.setAttribute('aria-pressed', filled);
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', `${i + 1} étoile${i > 0 ? 's' : ''}`);
    });
  }
}
