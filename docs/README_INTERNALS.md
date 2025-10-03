# 📚 Documentation interne — TalentÉkô

Ce document complète README_QUALITY.md :
alors que ce dernier décrit les outils de qualité génériques (lint, formatage, tests), le présent fichier recense les mécanismes internes propres à TalentÉkô (commands Symfony, scripts de maintenance, hooks Husky, contrôleurs Stimulus, styles CSS).

---

## 📑 Table des matières

1. [Commandes Symfony](#1-commandes-symfony)
2. [Scripts de maintenance](#2-scripts-de-maintenance)
3. [Styles (CSS/Tailwind)](#3-styles-csstailwind)
4. [Contrôleurs Stimulus (JS)](#4-contrôleurs-stimulus-js)
5. [Hooks Git Husky](#5-hooks-git-husky)

---

## 1. Commandes Symfony

📄 [commands/README.md](../commands/README.md)

Contient toutes les **commandes personnalisées Symfony** créées pour TalentÉkô :

- Gestion des images (cache LiipImagine, préchauffage, corrections de chemins).
- Correction des slugs de catégories.
- Vérification cohérence base de données.

➡️ Objectif : **faciliter la maintenance du projet** via `php bin/console`.

---

## 2. Scripts de maintenance

📄 [tools/README.md](../tools/README.md)

Scripts Bash internes pour garantir la **qualité du code** :

- Encodage (UTF-8 sans BOM, LF uniforme).
- Migration interne (`annonce` → `listing`).
- Organisation des tests PHPUnit.
- Nettoyage des fichiers corrompus.

➡️ Objectif : automatiser le nettoyage et les corrections répétitives.

---

## 3. Styles (CSS/Tailwind)

📄 [../assets/styles/README.md](../assets/styles/README.md)

Organisation des **styles du front TalentÉkô** :

- `globals.css` → tokens (couleurs, polices, reset).
- `components.css` → boutons, navigation.
- `components.card.css` → cartes annonces.
- `forms.css` → formulaires.
- `app.css` → point d’entrée.

➡️ Objectif : garantir une **charte graphique cohérente et accessible**.

---

## 4. Contrôleurs Stimulus (JS)

📄 [../assets/controllers/README.md](../assets/controllers/README.md)

Liste des **contrôleurs JS Stimulus** développés :

- Favoris (toggle cœur).
- Autocomplétion localisation (API BAN).
- Vérification force mot de passe.
- Vérification confirmation mot de passe.
- Dark mode toggle, menu mobile, switcher taille de police.

➡️ Objectif : enrichir l’expérience utilisateur tout en respectant l’accessibilité.

---

## 5. Hooks Git Husky

📄 [../.husky/README.md](../.husky/README.md)

Hooks de qualité :

- `pre-commit` → vérifie syntaxe PHP, encodage/EOL, lint JS/CSS, composer.json.
- `pre-push` → vérifie TwigCS strict + exécute tous les tests PHPUnit.

➡️ Objectif : **empêcher les commits/push cassés** et renforcer la rigueur de développement.

---

## 🎓 Conclusion

Grâce à cette documentation interne :

- Le projet TalentÉkô est **structuré, maintenable et accessible**.
- Chaque dossier technique est expliqué et justifié.
- Le jury peut facilement évaluer la **qualité du code, la rigueur et la méthodologie**.

✍️ Auteur : _Documentation interne TalentÉkô_
📅 Dernière mise à jour : **octobre 2025**
