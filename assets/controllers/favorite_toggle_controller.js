import { Controller } from '@hotwired/stimulus';

/**
 * ContrÃƒÂ´leur favoris (toggle UI)
 * - CÃ…â€œur vide -> CÃ…â€œur plein
 * - Change aria-label pour accessibilitÃƒÂ©
 *
 * NB: Ici on ne fait que du front.
 * Plus tard, tu pourras connecter ce toggle ÃƒÂ  un backend via fetch().
 */
export default class extends Controller {
  static targets = ['empty', 'filled'];

  connect() {
    // Initialisation : sÃ¢â‚¬â„¢assurer que seul un ÃƒÂ©tat est visible
    this.showEmpty();
  }

  toggle(event) {
    event.preventDefault();
    if (this.emptyTarget.classList.contains('hidden')) {
      this.showEmpty();
      this.element.setAttribute('aria-label', 'Ajouter aux favoris');
    } else {
      this.showFilled();
      this.element.setAttribute('aria-label', 'Retirer des favoris');
    }
  }

  showEmpty() {
    this.emptyTarget.classList.remove('hidden');
    this.filledTarget.classList.add('hidden');
  }

  showFilled() {
    this.emptyTarget.classList.add('hidden');
    this.filledTarget.classList.remove('hidden');
  }
}
