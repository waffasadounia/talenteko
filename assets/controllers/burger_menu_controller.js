import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : Menu burger mobile
 *
 * - Gère l’ouverture/fermeture du menu
 * - Focus trap (navigation clavier reste dans le menu)
 * - Accessibilité :
 *   • aria-expanded sur le bouton
 *   • aria-controls pour lier le bouton au menu
 *   • Fermeture avec la touche Escape
 */
export default class extends Controller {
  static targets = ['menu'];

  connect() {
    this.open = false;
    this.focusableElements =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  }

  toggle() {
    this.open ? this.close() : this.openMenu();
  }

  openMenu() {
    this.menuTarget.classList.remove('hidden');
    this.element.setAttribute('aria-expanded', 'true');
    this.open = true;

    // Focus trap
    this.focusables = this.menuTarget.querySelectorAll(this.focusableElements);
    this.firstFocusable = this.focusables[0];
    this.lastFocusable = this.focusables[this.focusables.length - 1];

    document.addEventListener('keydown', this.handleKeydown);
  }

  close() {
    this.menuTarget.classList.add('hidden');
    this.element.setAttribute('aria-expanded', 'false');
    this.open = false;

    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (!this.open) return;

    switch (e.key) {
      case 'Escape':
        this.close();
        this.element.focus();
        break;
      case 'Tab':
        if (this.focusables.length === 0) return;
        if (e.shiftKey && document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
        break;
    }
  };
}
