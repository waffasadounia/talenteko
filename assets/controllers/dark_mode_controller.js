import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : Dark mode toggle
 *
 * - Ajout classe .dark sur <html>
 * - Sauvegarde la préférence dans localStorage
 * - Respecte prefers-color-scheme du système
 * - Accessibilité : aria-pressed sur le bouton
 */
export default class extends Controller {
  connect() {
    const saved = localStorage.getItem('tk_dark_mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = saved ? saved === 'true' : prefersDark;
    this.setMode(enabled);
  }

  toggle() {
    const isDark = document.documentElement.classList.contains('dark');
    this.setMode(!isDark);
  }

  setMode(enabled) {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tk_dark_mode', 'true');
      this.element.setAttribute('aria-pressed', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tk_dark_mode', 'false');
      this.element.setAttribute('aria-pressed', 'false');
    }
  }
}
