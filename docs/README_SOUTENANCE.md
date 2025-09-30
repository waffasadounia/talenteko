# 📝 Notes de soutenance TalentÉkô

## 📑 Sommaire
- [📸 Preuves de conformité](#-preuves-de-conformité)
  - [✅ Tests unitaires & fonctionnels](#-tests-unitaires--fonctionnels)
  - [✅ Encodage UTF-8 + LF](#-encodage-utf-8--lf)
  - [✅ Linting & Qualité](#-linting--qualité)
  - [✅ Vérification accessibilité](#-vérification-accessibilité)
  - [✅ Vérification production](#-vérification-production)
- [📂 Autres documentations](#-autres-documentations)

---

## 📸 Preuves de conformité

### ✅ Tests unitaires & fonctionnels
- `php bin/phpunit`
![Tests PHPUnit OK](docs/screenshots/tests_phpunit.png)

### ✅ Encodage UTF-8 + LF
- `file -bi src/Entity/User.php` → `text/x-php; charset=utf-8`
![Encodage validé](docs/screenshots/encoding_utf8.png)

### ✅ Linting & Qualité
- `composer lint` (PHP/Twig)
- `npm run lint:js` / `npm run lint:css`
![Linters OK](docs/screenshots/lint_ok.png)

### ✅ Vérification accessibilité
- Chrome DevTools Lighthouse (onglet *Accessibility*) : score > 90
![Accessibilité OK](docs/screenshots/a11y.png)

### ✅ Vérification production
- `APP_ENV=prod symfony server:start` + `npm run build`
- Page d’accueil responsive (mobile/desktop)
![Build prod OK](docs/screenshots/prod_build.png)

---

## 📂 Autres documentations
- 📖 [README_INSTALL.md](README_INSTALL.md) : installation & configuration
- 🧪 [README_TESTS.md](README_TESTS.md) : exécution des tests
- 🛠 [README_QUALITY.md](README_QUALITY.md) : outils de qualité & CI/CD
- 📐 [README_UML.md](README_UML.md) : diagrammes UML
