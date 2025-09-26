import { Controller } from '@hotwired/stimulus';

/**
 * ContrÃƒÂ´leur Stimulus : vÃƒÂ©rifie en direct
 * que la confirmation du mot de passe correspond au premier.
 *
 * UX / AccessibilitÃƒÂ© :
 * - Feedback en direct avec icÃƒÂ´nes Font Awesome (Ã¢Å“â€Ã¯Â¸Â / Ã¢Å“â€“Ã¯Â¸Â).
 * - aria-live="polite" : le message est lu par les lecteurs dÃ¢â‚¬â„¢ÃƒÂ©cran.
 * - Utilisation de setCustomValidity pour bloquer la soumission
 *   tant que les deux mots de passe ne correspondent pas.
 */
export default class extends Controller {
  static targets = ['original', 'confirm', 'feedback'];

  check() {
    const pwd = this.originalTarget.value;
    const confirm = this.confirmTarget.value;

    if (!confirm) {
      // Champ vide Ã¢â€ â€™ on efface le feedback et on rÃƒÂ©initialise la validation
      this.feedbackTarget.innerHTML = '';
      this.confirmTarget.setCustomValidity('');
      return;
    }

    if (pwd === confirm) {
      // Ã¢Å“â€¦ Mots de passe identiques
      this.feedbackTarget.innerHTML = `<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>Les mots de passe correspondent.</span>`;
      this.feedbackTarget.className =
        'flex items-center gap-1 text-green-600 text-xs mt-1';
      this.confirmTarget.setCustomValidity('');
    } else {
      // Ã¢ÂÅ’ Mots de passe diffÃƒÂ©rents
      this.feedbackTarget.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>Les mots de passe ne correspondent pas.</span>`;
      this.feedbackTarget.className =
        'flex items-center gap-1 text-red-600 text-xs mt-1';
      this.confirmTarget.setCustomValidity(
        'Les mots de passe ne correspondent pas.'
      );
    }
  }
}
