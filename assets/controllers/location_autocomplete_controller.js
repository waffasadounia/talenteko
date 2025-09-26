import { Controller } from '@hotwired/stimulus';

/**
 * AutocomplÃƒÂ©tion pour la localisation
 * - Utilise lÃ¢â‚¬â„¢API Adresse officielle (BAN)
 * - Affiche une liste de suggestions sous le champ
 *
 * AccessibilitÃƒÂ© :
 * - aria-expanded / aria-activedescendant
 * - aria-live="polite" pour retour ÃƒÂ©cran lecteur
 */
export default class extends Controller {
  static targets = ['input', 'list'];

  connect() {
    this.activeIndex = -1; // index de lÃ¢â‚¬â„¢ÃƒÂ©lÃƒÂ©ment sÃƒÂ©lectionnÃƒÂ© au clavier
  }

  async search() {
    const query = this.inputTarget.value.trim();

    if (query.length < 2) {
      this.listTarget.innerHTML = '';
      this.inputTarget.setAttribute('aria-expanded', 'false');
      return;
    }

    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=5`
      );
      const data = await res.json();

      this.renderList(data.features);
    } catch (e) {
      console.error('Erreur API Adresse :', e);
    }
  }

  renderList(features) {
    this.listTarget.innerHTML = '';

    if (!features || features.length === 0) {
      this.inputTarget.setAttribute('aria-expanded', 'false');
      return;
    }

    features.forEach((f, i) => {
      const li = document.createElement('li');
      li.textContent = f.properties.label;
      li.className =
        'px-3 py-2 hover:bg-talenteko-peach-200 cursor-pointer text-sm';
      li.setAttribute('role', 'option');
      li.setAttribute('id', `opt-${i}`);

      li.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.select(f.properties.label);
      });

      this.listTarget.appendChild(li);
    });

    this.activeIndex = -1;
    this.inputTarget.setAttribute('aria-expanded', 'true');
  }

  // Gestion clavier : flÃƒÂ¨ches, EntrÃƒÂ©e, Ãƒâ€°chap
  keydown(event) {
    const items = this.listTarget.querySelectorAll('li');
    if (items.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.activeIndex = (this.activeIndex + 1) % items.length;
        this.highlight(items);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex = (this.activeIndex - 1 + items.length) % items.length;
        this.highlight(items);
        break;
      case 'Enter':
        if (this.activeIndex >= 0) {
          event.preventDefault();
          items[this.activeIndex].dispatchEvent(new Event('mousedown'));
        }
        break;
      case 'Escape':
        this.listTarget.innerHTML = '';
        this.inputTarget.setAttribute('aria-expanded', 'false');
        break;
    }
  }

  highlight(items) {
    items.forEach((li, i) => {
      li.classList.toggle('bg-talenteko-peach-200', i === this.activeIndex);
    });
    if (this.activeIndex >= 0) {
      this.inputTarget.setAttribute(
        'aria-activedescendant',
        items[this.activeIndex].id
      );
    } else {
      this.inputTarget.removeAttribute('aria-activedescendant');
    }
  }

  select(label) {
    this.inputTarget.value = label;
    this.listTarget.innerHTML = '';
    this.inputTarget.setAttribute('aria-expanded', 'false');
  }
}
