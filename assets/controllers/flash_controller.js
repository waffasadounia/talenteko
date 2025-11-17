import { Controller } from '@hotwired/stimulus';

/**
 * Controller : flash auto-dismiss
 *
 * - Fade-out automatique des messages flash
 * - Suppression propre du DOM
 * - Accessibilité : aria-live="polite", role="status"
 * - Compatible Tailwind & dark-mode
 */
export default class extends Controller {
  static values = {
    timeout: { type: Number, default: 5000 }, // 5 secondes
  };

  connect() {
    // Accessibilité
    this.element.setAttribute('role', 'status');
    this.element.setAttribute('aria-live', 'polite');

    // Animation fade-out
    setTimeout(() => {
      this.element.classList.add(
        'opacity-0',
        'translate-y-1',
        'transition-all',
        'duration-700',
        'ease-out'
      );

      // Supprime l'élément après l'animation
      setTimeout(() => this.element.remove(), 750);
    }, this.timeoutValue);
  }
}
