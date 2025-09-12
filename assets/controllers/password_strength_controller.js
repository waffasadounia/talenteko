import { Controller } from "@hotwired/stimulus";

/**
 * Contrôleur Stimulus : vérification en direct du mot de passe
 * - Affiche une checklist ✅ / ❌ sous le champ.
 * - Règles :
 *   • Longueur ≥ 10
 *   • Au moins une majuscule
 *   • Au moins une minuscule
 *   • Au moins un chiffre
 *   • Au moins un caractère spécial
 *
 * Accessibilité :
 * - aria-live="polite" : feedback lu aux lecteurs d’écran.
 * - Lié via data-controller="password-strength".
 */
export default class extends Controller {
  static targets = ["input", "feedback"];

  connect() {
    console.log("PasswordStrength Stimulus controller connecté !");
    this.rules = [
      { regex: /.{10,}/, text: "Au moins 10 caractères" },
      { regex: /[A-Z]/,  text: "Au moins une majuscule" },
      { regex: /[a-z]/,  text: "Au moins une minuscule" },
      { regex: /\d/,     text: "Au moins un chiffre" },
      { regex: /[\W_]/,  text: "Au moins un caractère spécial" },
    ];

    // Crée la liste UL avec toutes les règles ❌ par défaut
    this.list = document.createElement("ul");
    this.list.className = "text-xs mt-2 space-y-1";

    this.rules.forEach((rule, i) => {
      const li = document.createElement("li");
      li.dataset.index = i;
      li.innerHTML = `❌ <span>${rule.text}</span>`;
      li.className = "text-red-600 flex items-center gap-1";
      this.list.appendChild(li);
    });

    this.feedbackTarget.replaceChildren(this.list);
  }

  check() {
    const value = this.inputTarget.value;

    this.rules.forEach((rule, i) => {
      const li = this.list.querySelector(`[data-index="${i}"]`);
      if (rule.regex.test(value)) {
        li.innerHTML = `✅ <span>${rule.text}</span>`;
        li.className = "text-green-600 flex items-center gap-1";
      } else {
        li.innerHTML = `❌ <span>${rule.text}</span>`;
        li.className = "text-red-600 flex items-center gap-1";
      }
    });
  }
}
