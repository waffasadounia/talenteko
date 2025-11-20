import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : Vérification de la force du mot de passe
 *
 * - Règles ANSSI : longueur, maj, min, chiffre, spécial
 * - Feedback live (liste des critères)
 * - aria-invalid + aria-live
 * - Communique avec password-confirm pour désactiver le submit
 */

export default class extends Controller {
  static targets = ['input', 'feedback', 'submit'];
  connect() {
    // === Règles ANSSI ===
    this.rules = [
      { regex: /.{10,}/, text: 'Au moins 10 caractères' },
      { regex: /[A-Z]/, text: 'Au moins une majuscule' },
      { regex: /[a-z]/, text: 'Au moins une minuscule' },
      { regex: /\d/, text: 'Au moins un chiffre' },
      { regex: /[\W_]/, text: 'Au moins un caractère spécial' },
    ];
    // === UL de critères ===
    this.list = document.createElement('ul');
    this.list.className = 'text-xs mt-2 space-y-1';
    this.list.setAttribute('role', 'status');
    this.list.setAttribute('aria-live', 'polite');

    this.rules.forEach((rule, i) => {
      const li = document.createElement('li');
      li.dataset.index = i;
      li.innerHTML = this.renderRule(rule.text, false);
      li.className = 'flex items-center gap-1 text-red-600';
      this.list.appendChild(li);
    });
    this.feedbackTarget.replaceChildren(this.list);
  }
  check() {
    const value = this.inputTarget.value;
    let validCount = 0;
    this.rules.forEach((rule, i) => {
      const li = this.list.querySelector(`[data-index="${i}"]`);
      const passed = rule.regex.test(value);
      li.innerHTML = this.renderRule(rule.text, passed);
      li.className = passed
        ? 'flex items-center gap-1 text-green-600'
        : 'flex items-center gap-1 text-red-600';
      if (passed) validCount++;
    });
    const allValid = validCount === this.rules.length;
    // ARIA
    this.inputTarget.setAttribute('aria-invalid', allValid ? 'false' : 'true');
    this.inputTarget.classList.toggle('valid-password', allValid);
    // Communique avec password-confirm si présent
    if (this.element.dataset.hasConfirm === 'true') {
      const event = new CustomEvent('password-strength-updated', {
        detail: { valid: allValid },
        bubbles: true,
      });
      this.element.dispatchEvent(event);
    }
  }
  renderRule(text, passed) {
    return passed
      ? `<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>${text}</span>`
      : `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>${text}</span>`;
  }
}
