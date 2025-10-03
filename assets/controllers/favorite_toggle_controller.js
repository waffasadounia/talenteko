import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur favoris (toggle UI)
 * - Cœur vide ↔ Cœur plein
 * - Met à jour les attributs ARIA pour l’accessibilité
 *
 * NB : Ici uniquement côté front.
 * Plus tard, on pourra connecter ce toggle au backend via fetch()
 * en utilisant par ex. data-id ou data-url.
 */
export default class extends Controller {
  static targets = ['empty', 'filled'];

  connect() {
    // Si le bouton contient déjà un état, on le respecte
    if (this.filledTarget.classList.contains('hidden')) {
      this.setState(false); // pas favori
    } else {
      this.setState(true); // déjà favori
    }
  }

  toggle(event) {
    event.preventDefault();
    const isFav = this.emptyTarget.classList.contains('hidden');
    this.setState(!isFav);
  }

  setState(isFav) {
    if (isFav) {
      this.showFilled();
      this.element.setAttribute('aria-label', 'Retirer des favoris');
      this.element.setAttribute('aria-pressed', 'true');
    } else {
      this.showEmpty();
      this.element.setAttribute('aria-label', 'Ajouter aux favoris');
      this.element.setAttribute('aria-pressed', 'false');
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
