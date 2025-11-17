# 🛠 TalentÉkô — Qualité & Tooling

Ce document résume les **outils et conventions** mis en place pour garantir la qualité du code et la portabilité du projet TalentÉkô.

---

## 📂 Gestion du dépôt Git

### `.gitignore`

- Exclut les dépendances (`/vendor/`, `/node_modules/`), les artefacts (`/var/`, `/public/build/`), les fichiers sensibles (`.env.local`, clés privées).
- Conserve les dossiers vides `uploads/` et `media/` grâce à un `.gitignore` interne.
- Ignore les archives locales (`.zip`, `.tar`) et les scripts internes non essentiels.

### `.gitattributes`

- Force les fins de ligne **LF** dans le dépôt → cohérence Windows/Linux/Mac.
- Exceptions CRLF pour scripts Windows (`*.bat`, `*.cmd`, `*.ps1`).
- Marque les binaires (`.png`, `.jpg`, `.woff2`, `.mp4`, etc.) comme `binary` → pas de conversion.
- Normalise les lockfiles (`composer.lock`, `package-lock.json`) en LF → pas de conflits.

### `.editorconfig`

- Charset : `utf-8`.
- Fins de ligne : `lf`.
- Indentation :
  - **2 espaces** : JS, CSS, Twig.
  - **4 espaces** : PHP (PSR-12).
- Supprime les espaces de fin de ligne et ajoute une ligne vide finale.

---

## 🛠 Outils de qualité

- **PHP** : [PHP-CS-Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) (PSR-12).
- **Twig** : [TwigCS](https://github.com/friendsoftwig/twigcs) + Prettier plugin Twig.
- **JavaScript** : [ESLint](https://eslint.org/) (logique) + [Prettier](https://prettier.io/) (style).
- **CSS** : Prettier avec plugin Tailwind.

---

## 📦 npm scripts

| Commande            | Action                                       |
| ------------------- | -------------------------------------------- |
| `npm run lint:php`  | Vérifie le code PHP                          |
| `npm run fix:php`   | Corrige automatiquement le code PHP          |
| `npm run lint:twig` | Vérifie les templates Twig                   |
| `npm run fix:twig`  | Reformate les `.twig`                        |
| `npm run lint:js`   | Vérifie le JS (Stimulus/Turbo)               |
| `npm run fix:js`    | Corrige automatiquement le JS                |
| `npm run lint:css`  | Vérifie le CSS avec Prettier                 |
| `npm run fix:css`   | Reformate le CSS                             |
| `npm run lint`      | Lance **tous les lint** (PHP, Twig, JS, CSS) |
| `npm run fix`       | Lance **tous les fix** (PHP, Twig, JS, CSS)  |
| `npm run format`    | Reformate tout le projet avec Prettier       |

---

## 🔒 Hooks Git (Husky + lint-staged)

### `pre-commit`

- Bloque le commit si :
  - PHP ne respecte pas CS.
  - Twig n’est pas valide.
  - JS/CSS ne passent pas Prettier.
  - Tests unitaires échouent.

### `commit-msg`

- Vérifie le format du message (conventionnel, clair).

---

## 🎯 Bénéfices

- Code **propre, homogène, portable**.
- Aucun secret ni cache versionné.
- Workflow qualité automatisé (Husky).
- Compatible **Windows/Mac/Linux** (LF).
- Démonstration de **maturité pro** en soutenance.

---

## 🔧 Scripts de maintenance

Certains scripts internes sont utilisés pour assurer la qualité du code et la cohérence du projet.
➡️ Voir la documentation complète : [Scripts de maintenance](../tools/README.md)
