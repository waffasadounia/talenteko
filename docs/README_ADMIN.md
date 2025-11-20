#  README — Module Administration TalentÉkô

## Objectif

Le module **Administration** permet aux utilisateurs ayant le rôle `ROLE_ADMIN` de :

- Superviser l’activité de la plateforme (utilisateurs, annonces, échanges, messages).
- Gérer le contenu et la modération.
- Assurer la sécurité et la conformité de l’application.

---

## Droits Admin

Un administrateur peut :

- Accéder à un **dashboard** global avec statistiques.
- Gérer les **utilisateurs** (bannir, rétablir, supprimer).
- Gérer les **annonces** (valider, supprimer).
- Gérer les **échanges** (clôturer, supprimer).
- Gérer les **messages** (supprimer).
- Accéder aux pages internes (`/styleguide`, logs, outils internes).

---

## Contrôleurs créés

| Fichier                       | Rôle principal             |
| ----------------------------- | -------------------------- |
| `AdminController.php`         | Dashboard (stats globales) |
| `AdminUserController.php`     | Gestion des utilisateurs   |
| `AdminListingController.php`  | Gestion des annonces       |
| `AdminExchangeController.php` | Gestion des échanges       |
| `AdminMessageController.php`  | Gestion des messages       |

---

## Routes disponibles

### Dashboard

- `/admin` → **Vue d’ensemble** (stats : nb utilisateurs, annonces, échanges, messages).

### Utilisateurs (`AdminUserController`)

- `/admin/users` → Liste des utilisateurs.
- `/admin/users/{id}/ban` → Bannir un utilisateur.
- `/admin/users/{id}/unban` → Rétablir un utilisateur.
- `/admin/users/{id}/delete` → Supprimer un utilisateur.

### Annonces (`AdminListingController`)

- `/admin/listings` → Liste des annonces.
- `/admin/listings/{id}/delete` → Supprimer une annonce.
- `/admin/listings/{id}/validate` → Valider/publication d’une annonce.

### Échanges (`AdminExchangeController`)

- `/admin/exchanges` → Liste des échanges.
- `/admin/exchanges/{id}/close` → Clôturer un échange.
- `/admin/exchanges/{id}/delete` → Supprimer un échange.

### Messages (`AdminMessageController`)

- `/admin/messages` → Liste des messages (50 derniers).
- `/admin/messages/{id}/delete` → Supprimer un message.

---

## Sécurité

- Toutes les routes Admin sont protégées par l’attribut `#[IsGranted('ROLE_ADMIN')]`.
- Les utilisateurs non autorisés sont redirigés vers la page de connexion.

---

## Templates Twig

Chaque contrôleur s’appuie sur des vues dédiées dans `templates/admin/*/`.

- `dashboard.html.twig` → Vue globale.
- `users/index.html.twig` → Table des utilisateurs.
- `listings/index.html.twig` → Table des annonces.
- `exchanges/index.html.twig` → Table des échanges.
- `messages/index.html.twig` → Liste des messages.

---

## Checklist

- [x] **Admin dashboard** opérationnel.
- [x] **CRUD et actions spécifiques** pour utilisateurs, annonces, échanges, messages.
- [x] **Routes documentées** et cohérentes.
- [x] **Sécurisation stricte** par `ROLE_ADMIN`.

---

## Notes pour soutenance

- L’administrateur est le **super-utilisateur** du site.
- Il a le pouvoir de **modérer, valider et supprimer** tout contenu.
- L’interface est volontairement simple et claire (tableaux + actions rapides).
- Conformité aux bonnes pratiques Symfony : séparation par contrôleurs, routes explicites, sécurisation stricte.

---
