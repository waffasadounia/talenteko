# ✅ Checklist Production — TalentÉkô

Cette checklist garantit que TalentÉkô est **prêt pour la mise en production** et la **soutenance DWWM**.
Elle couvre la qualité technique, la sécurité, la cohérence des données et la conformité aux bonnes pratiques.

---

## 🚀 Routes & Navigation

- [ ] Vérifier que **toutes les routes** existent (`php bin/console debug:router`).
- [ ] Corriger les incohérences : ex. `app_conditions` (et non `app_legal_conditions`).
- [ ] Supprimer les routes non utilisées ou legacy.
- [ ] Vérifier les redirections post-authentification (`app_home`, `app_dashboard`, etc.).

---

## 🔒 Sécurité

- [ ] `IS_AUTHENTICATED_FULLY` sur les pages sensibles : annonces, messagerie, favoris.
- [ ] `remember_me` activé et fonctionnel.
- [ ] Pages admin (dashboard, styleguide) protégées par `ROLE_ADMIN`.
- [ ] Tests de connexion/déconnexion réussis (formulaire, Google/Facebook si activé).

---

## 📝 Encodage & EOL

- [ ] Tous les fichiers encodés en **UTF-8 sans BOM**.
- [ ] Fins de ligne normalisées en **LF** (Linux).
- [ ] Chaque fichier se termine par une **newline finale**.
- [ ] Vérification via **pre-commit hook**.

---

## 🪝 Git Hooks

- [ ] `pre-commit` rapide : PHP lint, encodage/EOL auto-fix, lint JS/CSS.
- [ ] `pre-push` strict : TwigCS, PHPUnit complet (unitaires + fonctionnels).
- [ ] Pas de hook dupliqué (`.husky/_/` nettoyé).

---

## 📦 Fixtures & Migrations

- [ ] Base de données propre : `php bin/console doctrine:migrations:migrate --env=prod`.
- [ ] Fixtures cohérentes : `User`, `Listing`, `Category`.
- [ ] Pas de données legacy (`Annonce` → remplacé par `Listing`).
- [ ] Pas de migration corrompue (UTF-8 validé).

---

## 🎨 Styles & UI (Tailwind)

- [ ] Palette TalentÉkô appliquée (`talenteko-blue`, `talenteko-orange`, etc.).
- [ ] Classes factorisées (`btn-primary`, `btn-outline`, `btn-link`).
- [ ] Responsive vérifié (mobile, tablette, desktop).
- [ ] Dark-mode toggle fonctionnel avec persistance (`localStorage`).
- [ ] Burger menu mobile avec focus-trap et aria.

---

## ♿ Accessibilité

- [ ] Tous les inputs ont un **label explicite**.
- [ ] Champs invalides avec `aria-invalid="true"` et `aria-describedby`.
- [ ] Images avec attributs `alt`.
- [ ] Navigation clavier testée (menu, formulaires).
- [ ] Contrastes WCAG respectés (texte/boutons).

---

## 🧪 Tests

- [ ] Tests **unitaires** passent (`composer test -- --testsuite=unit`).
- [ ] Tests **fonctionnels** passent (`composer test -- --testsuite=functional`).
- [ ] Couverture minimale atteinte (entités + formulaires + contrôleurs critiques).
- [ ] Rapport couverture généré dans `var/coverage`.

---

## 📖 Documentation

- [ ] `README.md` principal clair (install + usage).
- [ ] `docs/README_INSTALL.md` (installation locale).
- [ ] `docs/README_TESTS.md` (exécution des tests).
- [ ] `docs/README_QUALITY.md` (outils de qualité, hooks, lint).
- [ ] `docs/README_UML.md` (diagrammes).
- [ ] `docs/README_SOUTENANCE.md` (plan soutenance, arguments).
- [ ] `docs/README_PRODUCTION.md` (ce fichier).
- [ ] `commands/README.md` (commandes Symfony personnalisées).

---

## ✅ Validation finale

- [ ] Déploiement test en local (`APP_ENV=prod`).
- [ ] Compilation des assets (`npm run build`).
- [ ] Pas d’erreurs `php bin/console lint:*`.
- [ ] Vérification manuelle des formulaires critiques :
  - Inscription
  - Connexion
  - Dépôt d’annonce
  - Favoris
  - Messagerie
  - Réinitialisation mot de passe

---

🟢 **Quand tous les points sont validés, le projet TalentÉkô est prêt pour la mise en production et la soutenance.**
