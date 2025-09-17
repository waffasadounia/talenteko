import { Controller } from "@hotwired/stimulus"

/**
 * Contrôleur Stimulus : vérification en direct du mot de passe
 *
 * - Affiche une checklist visuelle sous le champ de mot de passe.
 * - Chaque règle est validée/désactivée en direct avec un feedback icône + couleur.
 * - Règles de sécurité (recommandations ANSSI) :
 *    • Longueur ≥ 10 caractères
 *    • Au moins une majuscule
 *    • Au moins une minuscule
 *    • Au moins un chiffre
 *    • Au moins un caractère spécial
 *
 * Accessibilité :
 * - aria-live="polite" : les changements sont lus par les lecteurs d’écran.
 * - Lié via data-controller="password-strength" dans le formulaire.
 * - Icônes Font Awesome (fa-check-circle / fa-circle-xmark) pour cohérence visuelle avec le reste du site.
 */
export default class extends Controller {
  static targets = ["input", "feedback"]

  connect() {
    console.log("✅ PasswordStrength Stimulus controller connecté !")

    // === Définition des règles ===
    this.rules = [
      { regex: /.{10,}/, text: "Au moins 10 caractères" },
      { regex: /[A-Z]/,  text: "Au moins une majuscule" },
      { regex: /[a-z]/,  text: "Au moins une minuscule" },
      { regex: /\d/,     text: "Au moins un chiffre" },
      { regex: /[\W_]/,  text: "Au moins un caractère spécial" },
    ]

    // === Construction de la liste UL (toutes ❌ par défaut) ===
    this.list = document.createElement("ul")
    this.list.className = "text-xs mt-2 space-y-1"

    this.rules.forEach((rule, i) => {
      const li = document.createElement("li")
      li.dataset.index = i
      li.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>${rule.text}</span>`
      li.className = "flex items-center gap-1 text-red-600"
      this.list.appendChild(li)
    })

    // Injection de la liste dans la zone de feedback
    this.feedbackTarget.replaceChildren(this.list)
  }

  check() {
    const value = this.inputTarget.value

    // === Vérifie chaque règle en direct ===
    this.rules.forEach((rule, i) => {
      const li = this.list.querySelector(`[data-index="${i}"]`)
      if (rule.regex.test(value)) {
        li.innerHTML = `<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>${rule.text}</span>`
        li.className = "flex items-center gap-1 text-green-600"
      } else {
        li.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>${rule.text}</span>`
        li.className = "flex items-center gap-1 text-red-600"
      }
    })
  }
}
