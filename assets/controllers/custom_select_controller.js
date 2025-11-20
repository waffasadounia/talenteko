// ======================================================
// Contrôleur Stimulus — Custom Select
// ------------------------------------------------------
// Objectif : remplacer un <select> natif par un composant
// accessible et compatible clavier + ARIA.
// Utilisé pour le filtre “Date de publication”.
// Fonctionnalités :
// - Ouverture/fermeture du menu via clic ou clavier
// - Sélection d’une option (clic ou Enter)
// - Mise à jour du label + input caché
// - Fermeture si clic à l’extérieur ou touche Échap
// - Soumission automatique du formulaire parent
// ======================================================

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['button', 'list', 'label', 'input', 'option'];

  connect() {
    this.open = false;
    this._boundClickOutside = this.handleClickOutside.bind(this);
    document.addEventListener('click', this._boundClickOutside);
    console.log('custom_select connecté');
  }

  disconnect() {
    document.removeEventListener('click', this._boundClickOutside);
  }
  // Ouverture / fermeture du menu déroulant
  toggle(event) {
    event.preventDefault();
    this.open = !this.open;
    this.updateVisibility();
  }
  // selectOption SANS auto-submit
  selectOption(event) {
    const selectedValue = event.currentTarget.dataset.value;
    const selectedLabel = event.currentTarget.textContent.trim();

    this.inputTarget.value = selectedValue;
    this.labelTarget.textContent = selectedLabel;
    this.close();
  }
  // Gestion du clavier sur le bouton principal
  handleKeydown(event) {
    if ([' ', 'Enter', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      this.open = true;
      this.updateVisibility();
      const firstOption = this.optionTargets[0];
      if (firstOption) firstOption.focus();
    } else if (event.key === 'Escape') {
      this.close();
    }
  }
  // Gestion du clavier dans la liste des options
  handleOptionKeydown(event) {
    const currentIndex = this.optionTargets.indexOf(event.currentTarget);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = this.optionTargets[currentIndex + 1] || this.optionTargets[0];
      next.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prev =
        this.optionTargets[currentIndex - 1] || this.optionTargets[this.optionTargets.length - 1];
      prev.focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectOption(event);
    } else if (event.key === 'Escape') {
      this.close();
      this.buttonTarget.focus();
    }
  }
  // Ferme le menu si clic à l’extérieur
  handleClickOutside(event) {
    if (this.open && !this.element.contains(event.target)) {
      this.close();
    }
  }
  // Maj la visibilité et les attributs ARIA
  updateVisibility() {
    this.listTarget.classList.toggle('hidden', !this.open);
    this.buttonTarget.setAttribute('aria-expanded', this.open);
  }

  close() {
    this.open = false;
    this.updateVisibility();
  }
}
