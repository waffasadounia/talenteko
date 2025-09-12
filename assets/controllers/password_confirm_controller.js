import { Controller } from "@hotwired/stimulus";

/**
 * Contrôleur Stimulus : vérifie en direct
 * que la confirmation du mot de passe correspond au premier.
 *
 * Accessibilité :
 * - aria-live="polite" pour que les lecteurs d’écran soient informés.
 * - feedback visuel rouge/vert clair.
 */
export default class extends Controller {
  static targets = ["original", "confirm", "feedback"];

  connect() {
    console.log("✅ PasswordConfirm Stimulus controller connecté !");
    this.updateFeedback(); // vérifie au chargement (utile si champ pré-rempli)
  }

  check() {
    this.updateFeedback();
  }

  updateFeedback() {
    const pwd = this.originalTarget.value;
    const confirm = this.confirmTarget.value;

    if (!confirm) {
      this.feedbackTarget.textContent = "";
      return;
    }

    if (pwd === confirm) {
      this.feedbackTarget.textContent = "✅ Les mots de passe correspondent.";
      this.feedbackTarget.className = "text-green-600 text-xs mt-1";
    } else {
      this.feedbackTarget.textContent = "❌ Les mots de passe ne correspondent pas.";
      this.feedbackTarget.className = "text-red-600 text-xs mt-1";
    }
  }
}
