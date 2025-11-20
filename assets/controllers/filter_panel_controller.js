// ============================================================
// Stimulus Controller — Filter Panel (TalentÉkô)
// ============================================================

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['panel', 'overlay'];

  connect() {
    console.log(' FilterPanelController connecté');

    // Raccourcis
    this.toggleButton = document.getElementById('filter-toggle');
    this.focusableSelectors =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    this.firstFocusable = null;
    this.lastFocusable = null;
    this.triggerButton = null;

    // Gestion clavier (fermeture + focus trap)
    this.handleKeydown = (e) => {
      if (e.key === 'Escape' && this.isOpen()) this.close();
      if (e.key === 'Tab' && this.isOpen()) this.trapFocus(e);
    };
  }

  // --- Bascule ouverture / fermeture ---
  toggle(event) {
    console.log(' toggle() exécuté !');
    this.isOpen() ? this.close() : this.open(event);
  }

  // --- Ouverture du panneau ---
  open(event) {
    this.triggerButton = event?.currentTarget || this.toggleButton;

    this.panelTarget.dataset.state = 'open';
    this.overlayTarget.dataset.state = 'open';

    // Transition visible
    this.panelTarget.classList.remove('translate-x-full', 'opacity-0');
    this.overlayTarget.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    // Feedback visuel du bouton
    if (this.toggleButton) {
      this.toggleButton.setAttribute('aria-expanded', 'true');
      this.toggleButton.classList.add(
        'border-talenteko-orange-600',
        'text-talenteko-orange-600',
        'ring-1',
        'ring-talenteko-orange-500'
      );
    }

    // Focus sur premier champ
    const focusables = this.panelTarget.querySelectorAll(this.focusableSelectors);
    if (focusables.length > 0) {
      this.firstFocusable = focusables[0];
      this.lastFocusable = focusables[focusables.length - 1];
      this.firstFocusable.focus();
    }

    document.addEventListener('keydown', this.handleKeydown);
    console.log('Panneau ouvert (dataset.state = open)');
  }

  // --- Fermeture du panneau ---
  close() {
    this.panelTarget.dataset.state = 'closed';
    this.overlayTarget.dataset.state = 'closed';

    this.panelTarget.classList.add('translate-x-full', 'opacity-0');
    this.overlayTarget.classList.add('opacity-0');

    document.body.classList.remove('overflow-hidden');
    document.removeEventListener('keydown', this.handleKeydown);

    // Délai avant disparition de l’overlay
    setTimeout(() => this.overlayTarget.classList.add('hidden'), 200);

    // Rétablir style du bouton
    if (this.toggleButton) {
      this.toggleButton.setAttribute('aria-expanded', 'false');
      this.toggleButton.classList.remove(
        'border-talenteko-orange-600',
        'text-talenteko-orange-600',
        'ring-1',
        'ring-talenteko-orange-500'
      );
    }

    // Restaure focus
    if (this.triggerButton) this.triggerButton.focus();

    console.log('Panneau fermé (dataset.state = closed)');
  }

  // --- Vérifie l’état ---
  isOpen() {
    return this.panelTarget.dataset.state === 'open';
  }

  // --- Focus trap cyclique (accessibilité) ---
  trapFocus(e) {
    const focusables = this.panelTarget.querySelectorAll(this.focusableSelectors);
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}
