import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : Messages flash
 *
 * - Masque automatiquement un flash après X secondes
 * - Ajoute une transition douce (fade out)
 * - Accessibilité :
 *   • aria-live="polite" pour annoncer le message
 */
export default class extends Controller {
  static values = {
    timeout: { type: Number, default: 5000 }, // 5s par défaut
  };

  connect() {
    this.element.setAttribute('role', 'status');
    this.element.setAttribute('aria-live', 'polite');

    setTimeout(() => {
      this.element.classList.add('opacity-0', 'transition', 'duration-700');
      setTimeout(() => this.element.remove(), 800);
    }, this.timeoutValue);
  }
}
