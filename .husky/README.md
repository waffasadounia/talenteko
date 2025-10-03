# 🪝 Hooks Git — TalentÉkô

Ce dossier contient les **hooks Git Husky** utilisés pour garantir la qualité du code dans le projet TalentÉkô.
Les hooks s’exécutent automatiquement lors d’actions Git (`commit`, `push`) et bloquent l’opération en cas d’erreurs.

---

## 📑 Table des matières

1. [Structure du dossier](#1-structure-du-dossier)
2. [Hooks actifs](#2-hooks-actifs)
   - [pre-commit](#pre-commit)
   - [pre-push](#pre-push)
3. [Bonnes pratiques](#3-bonnes-pratiques)
4. [Nettoyage final](#4-nettoyage-final)

---

## 1. Structure du dossier

- `.husky/pre-commit` → vérifications rapides avant commit.
- `.husky/pre-push` → contrôles stricts avant push.
- `.husky/_/husky.sh` → script interne Husky.

⚠️ Tous les autres hooks (`post-merge`, `pre-push.bak`, etc.) ont été supprimés pour garder un dossier propre.

---

## 2. Hooks actifs

### 🔍 pre-commit

Vérifications rapides **avant chaque commit** :

- ✅ Vérifie la **syntaxe PHP** (`php -l`).
- ✅ Corrige automatiquement :
  - BOM UTF-8 supprimés
  - Conversion **CRLF → LF**
  - Ajout newline finale si manquante
- ✅ Exécute `lint-staged` (auto-fix JS/CSS/MD).
- ✅ Valide `composer.json`.
- ✅ Lint JS & CSS (`npm run lint:js`, `npm run lint:css`) si des fichiers correspondants sont modifiés.

➡️ Objectif : **commits rapides** mais sûrs.

---

### 🚀 pre-push

Vérifications strictes **avant chaque push** :

- ✅ Analyse des templates Twig avec **TwigCS** (`--severity error`).
- ✅ Lance tous les **tests PHPUnit** (unitaires & fonctionnels).
- ⛔️ Si une erreur est détectée, le push est bloqué.

➡️ Objectif : **ne jamais pousser du code cassé sur la branche distante**.

---

## 3. Bonnes pratiques

1. Toujours **committer souvent** → un hook qui échoue est plus facile à corriger avec peu de changements.
2. Si un hook échoue :
   - Lire le message d’erreur (`❌ ...`)
   - Corriger puis recommitter / repusher.
3. Ne jamais désactiver les hooks (`--no-verify`) sauf cas d’urgence très particulier.

---

## 4. Nettoyage final

Pour la soutenance, seuls les hooks utiles ont été conservés :

- `.husky/_/husky.sh`
- `.husky/pre-commit`
- `.husky/pre-push`

Tous les autres hooks vides, doublons ou backups ont été supprimés (`post-merge`, `pre-push.bak`, etc.).

---

✍️ Auteur : _Hooks Git internes TalentÉkô_
📅 Dernière mise à jour : **octobre 2025**
