import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : Sauvegarde auto du formulaire
 *
 * - Sauvegarde les données saisies dans localStorage
 * - Restaure à la reconnexion
 * - Utilise une clé locale spécifique
 */
export default class extends Controller {
  static values = { key: String };

  connect() {
    // Restaure si brouillon existant
    const saved = localStorage.getItem(this.keyValue);
    if (saved) {
      const data = JSON.parse(saved);
      for (const [name, value] of Object.entries(data)) {
        const field = this.element.querySelector(`[name="${name}"]`);
        if (field) field.value = value;
      }
    }
  }

  save() {
    const data = {};
    const inputs = this.element.querySelectorAll('input, textarea, select');
    inputs.forEach((el) => {
      if (el.name) data[el.name] = el.value;
    });
    localStorage.setItem(this.keyValue, JSON.stringify(data));
  }

  clear() {
    localStorage.removeItem(this.keyValue);
  }
}
