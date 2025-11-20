// ======================================================
// Contrôleur Stimulus — Menu burger mobile
// ------------------------------------------------------
// - Ouvre/ferme le menu mobile (_mobile_menu.html.twig)
// - Gère l’effet de slide latéral + fade du fond
// - Focus trap + fermeture via Échap / clic extérieur
// - ARIA conforme (expanded + hidden)
// ======================================================

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['menu', 'panel'];

  connect() {
    this.open = false;
    this.focusableSelectors =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    // Liaison des handlers
    this.boundKeydown = this.handleKeydown.bind(this);
    this.boundClickOutside = this.handleClickOutside.bind(this);

    console.log('header-nav connecté (Stimulus actif)');
  }

  toggle(event) {
    this.button = event.currentTarget; // bouton burger
    this.open ? this.close() : this.openMenu();
  }

  openMenu() {
    if (this.open) return;

    console.log('Ouverture du menu mobile');
    const menu = this.menuTarget;
    const panel = this.panelTarget;

    // Affiche le fond noir et anime
    menu.classList.remove('hidden', 'animate-fade-out');
    menu.classList.add('animate-fade-in');
    menu.removeAttribute('aria-hidden');

    // Fait glisser le panneau blanc
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');

    this.button?.setAttribute('aria-expanded', 'true');
    this.open = true;

    // Focus trap
    this.focusables = panel.querySelectorAll(this.focusableSelectors);
    this.firstFocusable = this.focusables[0];
    this.lastFocusable = this.focusables[this.focusables.length - 1];
    if (this.firstFocusable) this.firstFocusable.focus();

    document.addEventListener('keydown', this.boundKeydown);
    document.addEventListener('click', this.boundClickOutside);
  }

  close() {
    if (!this.open) return;

    console.log('🔹 Fermeture du menu mobile');
    const menu = this.menuTarget;
    const panel = this.panelTarget;

    // Animation de sortie
    menu.classList.remove('animate-fade-in');
    menu.classList.add('animate-fade-out');
    panel.classList.add('translate-x-full');
    panel.classList.remove('translate-x-0');

    // Masquage après la transition
    setTimeout(() => {
      menu.classList.add('hidden');
      menu.setAttribute('aria-hidden', 'true');
    }, 300); // durée identique à l’animation CSS

    this.button?.setAttribute('aria-expanded', 'false');
    this.open = false;

    document.removeEventListener('keydown', this.boundKeydown);
    document.removeEventListener('click', this.boundClickOutside);

    this.button?.focus();
  }

  handleKeydown(event) {
    if (!this.open) return;

    switch (event.key) {
      case 'Escape':
        this.close();
        break;
      case 'Tab':
        if (!this.focusables || this.focusables.length === 0) return;
        if (event.shiftKey && document.activeElement === this.firstFocusable) {
          event.preventDefault();
          this.lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === this.lastFocusable) {
          event.preventDefault();
          this.firstFocusable.focus();
        }
        break;
    }
  }
  handleClickOutside(event) {
    if (
      this.open &&
      !this.panelTarget.contains(event.target) &&
      !this.button.contains(event.target)
    ) {
      this.close();
    }
  }
}
