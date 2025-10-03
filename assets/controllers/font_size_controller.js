import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : Switcher de taille de police
 *
 * - 3 états : A- (petit), A (normal), A+ (grand)
 * - Sauvegarde dans localStorage
 * - Accessibilité :
 *   • aria-pressed pour l’état actif
 *   • navigation clavier possible
 */
export default class extends Controller {
  static targets = ['small', 'normal', 'large'];

  connect() {
    const saved = localStorage.getItem('tk_font_size') || 'normal';
    this.applySize(saved);
  }

  setSmall() {
    this.applySize('small');
  }

  setNormal() {
    this.applySize('normal');
  }

  setLarge() {
    this.applySize('large');
  }

  applySize(size) {
    const html = document.documentElement;
    switch (size) {
      case 'small':
        html.style.fontSize = '14px';
        break;
      case 'large':
        html.style.fontSize = '18px';
        break;
      default:
        html.style.fontSize = '16px';
    }

    // Sauvegarde préférence
    localStorage.setItem('tk_font_size', size);

    // MAJ ARIA des boutons
    this.smallTarget.setAttribute('aria-pressed', size === 'small');
    this.normalTarget.setAttribute('aria-pressed', size === 'normal');
    this.largeTarget.setAttribute('aria-pressed', size === 'large');
  }
}
