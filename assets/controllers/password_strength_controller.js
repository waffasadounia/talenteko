import { Controller } from '@hotwired/stimulus';

/**
 * ContrÃƒÂ´leur Stimulus : vÃƒÂ©rification en direct du mot de passe
 *
 * - Affiche une checklist visuelle sous le champ de mot de passe.
 * - Chaque rÃƒÂ¨gle est validÃƒÂ©e/dÃƒÂ©sactivÃƒÂ©e en direct avec un feedback icÃƒÂ´ne + couleur.
 * - RÃƒÂ¨gles de sÃƒÂ©curitÃƒÂ© (recommandations ANSSI) :
 *    Ã¢â‚¬Â¢ Longueur Ã¢â€°Â¥ 10 caractÃƒÂ¨res
 *    Ã¢â‚¬Â¢ Au moins une majuscule
 *    Ã¢â‚¬Â¢ Au moins une minuscule
 *    Ã¢â‚¬Â¢ Au moins un chiffre
 *    Ã¢â‚¬Â¢ Au moins un caractÃƒÂ¨re spÃƒÂ©cial
 *
 * AccessibilitÃƒÂ© :
 * - aria-live="polite" : les changements sont lus par les lecteurs dÃ¢â‚¬â„¢ÃƒÂ©cran.
 * - LiÃƒÂ© via data-controller="password-strength" dans le formulaire.
 * - IcÃƒÂ´nes Font Awesome (fa-check-circle / fa-circle-xmark) pour cohÃƒÂ©rence visuelle avec le reste du site.
 */
export default class extends Controller {
  static targets = ['input', 'feedback'];

  connect() {
    console.log('Ã¢Å“â€¦ PasswordStrength Stimulus controller connectÃƒÂ© !');

    // === DÃƒÂ©finition des rÃƒÂ¨gles ===
    this.rules = [
      { regex: /.{10,}/, text: 'Au moins 10 caractÃƒÂ¨res' },
      { regex: /[A-Z]/, text: 'Au moins une majuscule' },
      { regex: /[a-z]/, text: 'Au moins une minuscule' },
      { regex: /\d/, text: 'Au moins un chiffre' },
      { regex: /[\W_]/, text: 'Au moins un caractÃƒÂ¨re spÃƒÂ©cial' },
    ];

    // === Construction de la liste UL (toutes Ã¢ÂÅ’ par dÃƒÂ©faut) ===
    this.list = document.createElement('ul');
    this.list.className = 'text-xs mt-2 space-y-1';

    this.rules.forEach((rule, i) => {
      const li = document.createElement('li');
      li.dataset.index = i;
      li.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>${rule.text}</span>`;
      li.className = 'flex items-center gap-1 text-red-600';
      this.list.appendChild(li);
    });

    // Injection de la liste dans la zone de feedback
    this.feedbackTarget.replaceChildren(this.list);
  }

  check() {
    const value = this.inputTarget.value;

    // === VÃƒÂ©rifie chaque rÃƒÂ¨gle en direct ===
    this.rules.forEach((rule, i) => {
      const li = this.list.querySelector(`[data-index="${i}"]`);
      if (rule.regex.test(value)) {
        li.innerHTML = `<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>${rule.text}</span>`;
        li.className = 'flex items-center gap-1 text-green-600';
      } else {
        li.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>${rule.text}</span>`;
        li.className = 'flex items-center gap-1 text-red-600';
      }
    });
  }
}
