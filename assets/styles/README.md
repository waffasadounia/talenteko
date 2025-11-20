# Styles — TalentÉkô

Ce dossier contient les **styles CSS/Tailwind** du projet TalentÉkô.
Ils suivent une organisation claire et modulaire : chaque fichier a un rôle précis (tokens, composants, formulaires, etc.).

Tous les styles respectent la **charte graphique officielle** et les **critères d’accessibilité WCAG** (focus visible, contrastes, aria-invalid, etc.).

---

## Table des matières

1. [Structure du dossier](#1-structure-du-dossier)
2. [Palette & Tokens](#2-palette--tokens)
3. [Boutons & Navigation](#3-boutons--navigation)
4. [Cartes annonces](#4-cartes-annonces)
5. [Formulaires](#5-formulaires)
6. [Bonnes pratiques](#6-bonnes-pratiques)

---

## 1. Structure du dossier

- **`app.css`** → point d’entrée, centralise les imports.
- **`globals.css`** → reset global, palette de couleurs, polices, tokens typographiques.
- **`components.css`** → composants UI réutilisables (boutons, navigation).
- **`components.card.css`** → cartes (annonces) : image, auteur, localisation.
- **`forms.css`** → formulaires : champs, labels, erreurs, checkboxes.

---

## 2. Palette & Tokens

**Définis dans `globals.css` :**

```css
--color-talenteko-blue-900: #141c2e;
--color-talenteko-orange-500: #d6713c;
--color-talenteko-peach-200: #fdf5f1;

--font-montserrat: 'Montserrat', sans-serif;
--font-catamaran: 'Catamaran', sans-serif;
--font-chivo: 'Chivo', sans-serif;
```

- Texte : talenteko-blue-900
- CTA : talenteko-orange-500
- Fond clair : talenteko-peach-200

## 3. Boutons & Navigation

Définis dans components.css :

- .btn-primary → bouton plein (CTA).
- .btn-outline → bouton contour.
- .btn-link → lien stylisé.
- .btn-block → bouton centré/large (formulaires).
- .nav-link → liens de navigation, gère aussi aria-current="page".

Tous les boutons sont accessibles (focus-visible, active:scale-95) et responsives (sm:min-w-[200px]).

## 4. Cartes annonces

Définies dans components.card.css :

- .card-listing → conteneur principal.
- .card-favorite → bouton favoris (cœur).
- .card-image + .card-image-link → image cliquable avec zoom hover.
- .card-content, .card-title, .card-text → contenu.
- .card-author + .card-avatar → auteur avec avatar par initiale.
- .card-location → localisation avec icône.

Accessibilité renforcée : focus sur liens/images, aria-pressed sur favoris.

## 5. Formulaires

Définis dans forms.css :

- .tk-form input, textarea, select → champs standard.
- .form-label + .form-required → labels.
- .form-error → messages d’erreur (aria-invalid, role="alert").
- .form-input → champ générique réutilisable.
- .form-checkbox-box + .form-checkbox-icon → checkboxes customisées.
- [aria-invalid="true"] + .is-invalid → gestion erreurs Symfony.

Supporte aussi les listes déroulantes de l’autocomplétion localisation (role="listbox", cohérent avec Stimulus).

## 6. Bonnes pratiques

1. Pas de styles inline → tout est centralisé dans assets/styles/.

2. Accessibilité :
   - :focus-visible ajouté partout.
   - aria-invalid + messages d’erreurs stylés.
   - Contrastes conformes WCAG (testés via Lighthouse).

3. Responsive : boutons et cartes adaptés mobile/desktop.
4. Animations respectueuses : support prefers-reduced-motion.
5. Cohérence visuelle : palette TalentÉkô utilisée dans tous les composants.
