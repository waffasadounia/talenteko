import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur : Confirmation du mot de passe
 *
 * - Vérifie en direct l'égalité des mots de passe
 * - Message clair + icônes FontAwesome
 * - aria-live + aria-invalid
 * - Désactive le bouton submit si mismatch
 * - Synchronisé avec password_strength (écoute l’événement)
 */

export default class extends Controller {
  static targets = ['original', 'confirm', 'feedback', 'submit'];
  connect() {
    this.feedbackTarget.setAttribute('role', 'status');
    this.feedbackTarget.setAttribute('aria-live', 'polite');
    // Par défaut, on désactive le bouton tant que rien n’est validé
    if (this.hasSubmitTarget) {
      this.submitTarget.disabled = true;
    }
    // Écoute les événements du controller password_strength
    this.element.addEventListener('password-strength-updated', (e) => {
      this.passwordStrong = e.detail.valid;
      this.check();
    });
  }
  check() {
    const pwd = this.originalTarget.value;
    const confirm = this.confirmTarget.value;
    // Champ vide → reset
    if (!confirm) {
      this.feedbackTarget.innerHTML = '';
      this.confirmTarget.setCustomValidity('');
      this.confirmTarget.removeAttribute('aria-invalid');
      this.updateSubmit();
      return;
    }
    const match = pwd === confirm;
    if (match) {
      this.feedbackTarget.innerHTML =
        '<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>Les mots de passe correspondent.</span>';
      this.feedbackTarget.className = 'flex items-center gap-1 text-green-600 text-xs mt-1';
      this.confirmTarget.setCustomValidity('');
      this.confirmTarget.setAttribute('aria-invalid', 'false');
    } else {
      this.feedbackTarget.innerHTML =
        '<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>Les mots de passe ne correspondent pas.</span>';
      this.feedbackTarget.className = 'flex items-center gap-1 text-red-600 text-xs mt-1';
      this.confirmTarget.setCustomValidity('Les mots de passe ne correspondent pas.');
      this.confirmTarget.setAttribute('aria-invalid', 'true');
    }
    this.passwordsMatch = match;
    this.updateSubmit();
  }
  updateSubmit() {
    if (!this.hasSubmitTarget) return;
    // Button enabled only if :
    // - password_strength valide
    // - password_confirm OK
    const canSubmit = this.passwordStrong && this.passwordsMatch;
    this.submitTarget.disabled = !canSubmit;
  }
}
