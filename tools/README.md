# 🛠 Scripts de maintenance — TalentÉkô

Ce dossier contient divers **scripts internes** utilisés pour garantir la **qualité du code** et la **cohérence du projet TalentÉkô**.
Ils **ne sont pas nécessaires** à l’exécution de l’application, mais démontrent une démarche de **maintenance et bonnes pratiques professionnelles**.

---

## Table des matières

- [Encodage & fins de lignes](#1-encodage--fins-de-lignes)
- [Encodage ciblé](#2-encodage-ciblé)
- [Migration interne](#3-migration-interne)
- [Organisation des tests](#4-organisation-des-tests)
- [Structure des dossiers](#-structure-des-dossiers)
- [Bonnes pratiques](#-bonnes-pratiques)
- [Scripts supprimés](#-scripts-supprimés)

---

## 1. Encodage & fins de lignes

### `remove-bom.sh`

Supprime les BOM UTF-8 indésirables en début de fichier.

```bash
./tools/remove-bom.sh
```

### `normalize-encoding.sh`

Force les fichiers texte à être en UTF-8 sans BOM et convertit CRLF → LF.

./tools/normalize-encoding.sh

### `normalize-eol.sh`

Normalise les fins de lignes :

- **LF (**`**\n**`**)** pour fichiers source (.php, .twig, .yaml, .js, .css, …)
- **CRLF (**`**\r\n**`**)** uniquement pour scripts Windows (.bat, .cmd, .ps1)

./tools/normalize-eol.sh

### `check-encoding.sh`

Vérifie l’encodage de tous les fichiers :

- Détecte la présence d’un BOM
- Vérifie si le fichier est bien en UTF-8 valide

./tools/check-encoding.sh

## 2. Encodage ciblé

### `fix-encoding.sh`

Réécrit une liste précise de fichiers (Twig, PHP) en UTF-8 sans BOM.

Utile si certains fichiers sont corrompus après une migration.

./tools/fix-encoding.sh

## 3. Migration interne

### `migrate-annonce-to-listing.sh`

Automatise la migration de `annonce` → `listing`.

- Renomme `_annonce_card.html.twig` → `_listing_card.html.twig`
- Applique les remplacements dans Twig et PHP
- Sauvegarde tous les fichiers modifiés dans `backup_migration/`

./tools/migrate-annonce-to-listing.sh

## 4. Organisation des tests

### `organize-tests.sh`

Crée une arborescence claire pour PHPUnit et déplace automatiquement :

- Tests d’entité → `tests/Unit/Entity/`
- Tests de contrôleurs → `tests/Functional/Controller/`
- Tests de handlers → `tests/Functional/MessageHandler/`

./tools/organize-tests.sh

## 5. patches/

- **fix-twigcs.patch**
  Patch appliqué pour corriger la configuration `twigcs` (Twig linter).
  → Il uniformise les règles de style Twig (`prettier` + `twigcs`) et supprime les doublons entre `composer.json` et `package.json`.

ℹ Ces patchs sont archivés pour la **soutenance RNCP DWWM** comme preuve de l’évolution et des choix techniques.

##  Structure des dossiers

- `tools/` → contient uniquement les scripts et ce README.
- `backup_migration/` → créé automatiquement lors d’une migration, contient les fichiers originaux sauvegardés.

## Bonnes pratiques

1.  Toujours committer avant de lancer un script.

```bash
git add .
git commit -m "sauvegarde avant script"
```

Ainsi, on peut revenir en arrière si nécessaire. 2. Ne jamais lancer les scripts sur `vendor/` ou `node_modules/`. Les scripts sont configurés pour ignorer ces dossiers. 4. Utiliser `git diff` après chaque exécution pour valider les changements avant commit.

##  Scripts supprimés

Certains scripts ne sont plus utilisés mais ont existé durant la phase de nettoyage encodage :

- **fix-replace.ps1** + **replacements.txt**
  Servaient à corriger les caractères corrompus (`Ã©` → `é`, etc.).
  Ils ont été supprimés car le projet est désormais **100 % UTF-8 sans erreurs**.

 Auteur : _Scripts internes TalentÉkô_

 Dernière mise à jour : septembre 2025
