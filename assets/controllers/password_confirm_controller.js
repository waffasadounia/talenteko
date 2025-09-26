import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus : vérifie en direct
 * que la confirmation du mot de passe correspond au premier.
 *
 * UX / Accessibilité :
 * - Feedback en direct avec icônes Font Awesome (✔️ / ✖️).
 * - aria-live="polite" : le message est lu par les lecteurs d’écran.
 * - Utilisation de setCustomValidity pour bloquer la soumission
 *   tant que les deux mots de passe ne correspondent pas.
 */
export default class extends Controller {
  static targets = ['original', 'confirm', 'feedback'];

  check() {
    const pwd = this.originalTarget.value;
    const confirm = this.confirmTarget.value;

    if (!confirm) {
      // Champ vide → on efface le feedback et on réinitialise la validation
      this.feedbackTarget.innerHTML = '';
      this.confirmTarget.setCustomValidity('');
      return;
    }

    if (pwd === confirm) {
      // ✅ Mots de passe identiques
      this.feedbackTarget.innerHTML = `<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>Les mots de passe correspondent.</span>`;
      this.feedbackTarget.className =
        'flex items-center gap-1 text-green-600 text-xs mt-1';
      this.confirmTarget.setCustomValidity('');
    } else {
      // ❌ Mots de passe différents
      this.feedbackTarget.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>Les mots de passe ne correspondent pas.</span>`;
      this.feedbackTarget.className =
        'flex items-center gap-1 text-red-600 text-xs mt-1';
      this.confirmTarget.setCustomValidity(
        'Les mots de passe ne correspondent pas.'
      );
    }
  }
}
