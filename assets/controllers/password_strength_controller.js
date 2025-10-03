import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : vérification en direct du mot de passe
 *
 * - Affiche une checklist visuelle sous le champ de mot de passe.
 * - Chaque règle est validée/désactivée en direct avec feedback icône + couleur.
 * - Règles de sécurité (ANSSI) :
 *    • Longueur ≥ 10 caractères
 *    • Au moins une majuscule
 *    • Au moins une minuscule
 *    • Au moins un chiffre
 *    • Au moins un caractère spécial
 *
 * Accessibilité :
 * - aria-live="polite" : changements lus par lecteurs d’écran.
 * - aria-invalid : état du champ en direct.
 * - role="status" sur la liste → retour clair aux aides techniques.
 */
export default class extends Controller {
  static targets = ['input', 'feedback'];

  connect() {
    // === Définition des règles ===
    this.rules = [
      { regex: /.{10,}/, text: 'Au moins 10 caractères' },
      { regex: /[A-Z]/, text: 'Au moins une majuscule' },
      { regex: /[a-z]/, text: 'Au moins une minuscule' },
      { regex: /\d/, text: 'Au moins un chiffre' },
      { regex: /[\W_]/, text: 'Au moins un caractère spécial' },
    ];

    // === Construction de la liste UL ===
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

    // Injection dans le feedbackTarget
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

    // Accessibilité : marquer champ valide/invalide
    const allValid = validCount === this.rules.length;
    this.inputTarget.setAttribute('aria-invalid', allValid ? 'false' : 'true');
    this.inputTarget.classList.toggle('valid-password', allValid);
  }

  renderRule(text, passed) {
    return passed
      ? `<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>${text}</span>`
      : `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>${text}</span>`;
  }
}
