import { Controller } from '@hotwired/stimulus';

/**
 * Contrôleur Stimulus — Autocomplétion de la localisation (API BAN)
 * ---------------------------------------------------------------
 * - Propose des villes (type=municipality)
 * - Compatibilité Stimulus complète
 * - Fix : évite les 400 causés par keydown / event
 */
export default class extends Controller {
  static targets = ['input', 'list'];

  connect() {
    this.activeIndex = -1;
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);

    this.listTarget.setAttribute('role', 'listbox');
    this.listTarget.setAttribute('aria-live', 'polite');
  }

  /**
   * Recherche via API — corrigée (anti 400 errors)
   */
  async search(event) {
    // Empêche les appels déclenchés par keydown
    if (event instanceof KeyboardEvent) {
      return;
    }

    const query = this.inputTarget.value.trim();

    if (query.length < 2) {
      this.clearList();
      return;
    }

    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
          query
        )}&limit=6&type=municipality`
      );

      if (!res.ok) {
        console.warn('API Adresse renvoie une erreur :', res.status);
        this.clearList();
        return;
      }

      const data = await res.json();
      this.renderList(data.features);
    } catch (err) {
      console.error('Erreur API Adresse :', err);
      this.clearList();
    }
  }

  /**
   * Génère la liste d’options
   */
  renderList(features) {
    this.clearList();
    if (!features || features.length === 0) return;

    features.forEach((f, i) => {
      const label = f.properties.label;
      const li = document.createElement('li');

      li.textContent = label;
      li.className =
        'px-3 py-2 text-sm cursor-pointer hover:bg-talenteko-peach-200 transition';
      li.setAttribute('role', 'option');
      li.setAttribute('id', `opt-${i}`);
      li.setAttribute('aria-selected', 'false');

      li.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.select(label);
      });

      this.listTarget.appendChild(li);
    });

    this.listTarget.classList.remove('hidden');
    this.listTarget.style.animation = 'tk-autocomplete-fade-in 0.15s ease-out';
    this.inputTarget.setAttribute('aria-expanded', 'true');

    document.addEventListener('mousedown', this.closeOnClickOutside);
  }

  /**
   * Navigation clavier
   */
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
        this.clearList();
        break;
    }
  }

  /**
   * Ajoute le style sur l’option active
   */
  highlight(items) {
    items.forEach((li, i) => {
      const active = i === this.activeIndex;
      li.classList.toggle('bg-talenteko-peach-200', active);
      li.setAttribute('aria-selected', active ? 'true' : 'false');
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

  /**
   * Quand on sélectionne une suggestion
   */
  select(label) {
    this.inputTarget.value = label;
    this.clearList();
  }

  /**
   * Ferme le panneau si clic extérieur
   */
  closeOnClickOutside(e) {
    if (!this.element.contains(e.target)) {
      this.clearList();
    }
  }

  /**
   * Animation fermeture + reset
   */
  clearList() {
    if (this.listTarget && this.listTarget.childElementCount > 0) {
      this.listTarget.style.animation = 'tk-autocomplete-fade-out 0.15s ease-in';
      setTimeout(() => this._resetList(), 150);
    } else {
      this._resetList();
    }
  }

  _resetList() {
    this.listTarget.innerHTML = '';
    this.listTarget.classList.add('hidden');
    this.inputTarget.setAttribute('aria-expanded', 'false');
    this.inputTarget.removeAttribute('aria-activedescendant');
    document.removeEventListener('mousedown', this.closeOnClickOutside);
  }
}
