// ======================================================
// Stimulus — Contrôleur Favoris TalentÉkô
// ------------------------------------------------------
// Fonction : toggle visuel + envoi requête backend
// Reçoit : data-favorite-toggle-listing-id-value=""
// ======================================================

import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static values = {
        listingId: Number
    };

    static targets = ['empty', 'filled'];

    connect() {
        // État initial basé sur le DOM (fallback)
        const isFav = !this.filledTarget.classList.contains('hidden');
        this.applyState(isFav);
    }

    async toggle(event) {
        event.preventDefault();

        const listingId = this.listingIdValue;
        if (!listingId) {
            console.error(' listingId manquant dans data-*');
            return;
        }

        // --- Optimisme UX : toggle immédiat (local)
        const wasFavorite = !this.filledTarget.classList.contains('hidden');
        this.applyState(!wasFavorite);

        try {
            const response = await fetch(`/favoris/toggle/${listingId}`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur serveur ${response.status}`);
            }

            const data = await response.json();

            // --- Mise à jour réelle selon le backend
            this.applyState(data.isFavorite);

        } catch (error) {
            console.error(' Erreur favoris :', error);

            // Rollback visuel si erreur
            this.applyState(wasFavorite);

            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    }

    applyState(isFavorite) {
        if (isFavorite) {
            this.emptyTarget.classList.add('hidden');
            this.filledTarget.classList.remove('hidden');
            this.element.setAttribute('aria-label', 'Retirer des favoris');
            this.element.setAttribute('aria-pressed', 'true');
        } else {
            this.emptyTarget.classList.remove('hidden');
            this.filledTarget.classList.add('hidden');
            this.element.setAttribute('aria-label', 'Ajouter aux favoris');
            this.element.setAttribute('aria-pressed', 'false');
        }
    }
}
