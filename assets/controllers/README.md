# 🎛 Contrôleurs Stimulus — TalentÉkô

Ce dossier contient les **contrôleurs Stimulus (JavaScript)** utilisés pour enrichir l’expérience utilisateur de TalentÉkô.
Ils implémentent les fonctionnalités dynamiques prévues dans le **cahier des charges** (MVP + bonus UX).

Chaque contrôleur est **accessibilité-ready (ARIA/WCAG)** et documenté pour être maintenable.

---

## 📑 Table des matières

1. [Favoris](#1-favoris)
2. [Autocomplétion localisation](#2-autocomplétion-localisation)
3. [Sécurité des mots de passe](#3-sécurité-des-mots-de-passe)
4. [Confirmation du mot de passe](#4-confirmation-du-mot-de-passe)
5. [Menu burger mobile](#5-menu-burger-mobile)
6. [Mode sombre](#6-mode-sombre)
7. [Taille de police](#7-taille-de-police)
8. [Messages flash](#8-messages-flash)
9. [Sauvegarde automatique de formulaire](#9-sauvegarde-automatique-de-formulaire)

---

## 1. Favoris

**Fichier :** `favorite_toggle_controller.js`
Permet de basculer une annonce en favoris (cœur vide ↔ plein).

- Met à jour `aria-label` et `aria-pressed` pour l’accessibilité.
- Prévu pour être connecté plus tard au backend.

<button
  data-controller="favorite-toggle"
  data-action="click->favorite-toggle#toggle"
  aria-pressed="false"
  aria-label="Ajouter aux favoris">
<i data-favorite-toggle-target="empty" class="fa-regular fa-heart"></i>
<i data-favorite-toggle-target="filled" class="fa-solid fa-heart hidden"></i>
</button>

## 2. Autocomplétion localisation

Fichier : location_autocomplete_controller.js
Utilise l’API officielle BAN (api-adresse.data.gouv.fr) pour suggérer une ville.

- Accessible au clavier (ArrowDown, Enter, Escape).
- ARIA complet : role="listbox", role="option", aria-activedescendant.

<input
  type="text"
  data-controller="location-autocomplete"
  data-location-autocomplete-target="input"
  data-action="input->location-autocomplete#search keydown->location-autocomplete#keydown"
/>

<ul data-location-autocomplete-target="list" class="absolute bg-white border rounded"></ul>

## 3. Sécurité des mots de passe

Fichier : password_strength_controller.js
Affiche une checklist dynamique sous le champ de mot de passe.

- Vérifie en direct les règles ANSSI (longueur, majuscule, minuscule, chiffre, caractère spécial).
- Feedback visuel (icônes) et aria-live="polite".

<input
  type="password"
  data-controller="password-strength"
  data-password-strength-target="input"
  data-action="input->password-strength#check"
/>

<div data-password-strength-target="feedback"></div>

## 4. Confirmation du mot de passe

Fichier : password_confirm_controller.js
Vérifie que les deux mots de passe correspondent.

- Feedback visuel (✔ / ❌).
- setCustomValidity() empêche la soumission si non valide.

<input type="password" data-password-confirm-target="original" />
<input
  type="password"
  data-controller="password-confirm"
  data-password-confirm-target="confirm"
  data-action="input->password-confirm#check"
/>
<div data-password-confirm-target="feedback"></div>

## 5. Menu burger mobile

Fichier : burger_menu_controller.js
Ouvre/ferme le menu mobile avec accessibilité complète.

- Focus trap → navigation clavier reste dans le menu.
- aria-expanded, aria-controls.
- Fermeture avec Escape.

<button
data-controller="burger-menu"
data-burger-menu-target="menu"
data-action="click->burger-menu#toggle"
aria-controls="mainMenu"
aria-expanded="false"

> ☰
> </button>

<nav id="mainMenu" data-burger-menu-target="menu" class="hidden">…</nav>

## 6. Mode sombre

Fichier : dark_mode_controller.js
Active/désactive le dark mode.

- Sauvegarde la préférence dans localStorage.
- Respecte prefers-color-scheme.
- Accessibilité : aria-pressed.

<button
data-controller="dark-mode"
data-action="click->dark-mode#toggle"
aria-pressed="false"

> 🌙 Mode sombre
> </button>

## 7. Taille de police

Fichier : font_size_controller.js
Permet de changer la taille de police du site (A-, A, A+).

- Sauvegarde dans localStorage.
- Accessibilité : boutons avec aria-pressed.

<div data-controller="font-size">
  <button data-font-size-target="small" data-action="click->font-size#setSmall">A-</button>
  <button data-font-size-target="normal" data-action="click->font-size#setNormal">A</button>
  <button data-font-size-target="large" data-action="click->font-size#setLarge">A+</button>
</div>

## 8. Messages flash

Fichier : flash_controller.js
Fait disparaître automatiquement les messages flash Symfony après quelques secondes.

- aria-live="polite" pour annonce lecteur d’écran.
- Transition douce avant suppression.

<div
  class="flash bg-green-100 text-green-700 p-3 rounded"
  data-controller="flash"
  data-flash-timeout-value="4000"
>
  {{ message }}
</div>

## 9. Sauvegarde automatique de formulaire

Fichier : form_autosave_controller.js
Sauvegarde temporaire d’un formulaire en localStorage.

- Restaure le brouillon si l’utilisateur recharge la page.
- Efface après soumission.

<form
  data-controller="form-autosave"
  data-form-autosave-key-value="tk_register_draft_v1"
  data-action="input->form-autosave#save submit->form-autosave#clear"
>
  {{ form_row(form.email) }}
  {{ form_row(form.pseudo) }}
  …
</form>

## ✅ Bonnes pratiques

- Tous les contrôleurs sont petits, dédiés, réutilisables.
- Intégrés via data-controller dans les templates Twig.
- Respect des règles WCAG (aria-label, aria-pressed, aria-expanded, aria-live).
- Stockage simple et propre (localStorage) pour les préférences.

✍️ Auteur : Contrôleurs Stimulus internes TalentÉkô
📅 Dernière mise à jour : octobre 2025
