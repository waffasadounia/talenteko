# 🧪 Tests — TalentÉkô

Ce document présente la stratégie de tests mise en place dans le projet **TalentÉkô** (Symfony 6, PHPUnit 11).
Objectif : garantir la stabilité, la qualité et la conformité RNCP du code.

---

## 🔹 Types de tests

### ✅ Tests unitaires
- Vérifient les entités, validateurs et services métiers.
- Exemple : `UserTest.php` (hashage mot de passe, rôles), `ValidLocationValidatorTest.php`.

### ✅ Tests fonctionnels (contrôleurs)
- `RegistrationControllerTest.php`
  - Cas succès : inscription valide.
  - Cas échec : email invalide, mot de passe trop faible, pseudo manquant.
- `SecurityControllerTest.php`
  - Vérifie la connexion (succès + mauvais identifiants).
- `ListingControllerTest.php`
  - Vérifie la création d’une annonce (authentification requise).
- `SearchControllerTest.php`
  - Vérifie la recherche d’annonces par mot-clé et catégorie.

### ✅ Tests d’intégration
- Vérifient la cohérence des échanges entre Doctrine + Symfony (fixtures chargées).
- Exemple : persistance des `Listing` liés à un `User` + `Category`.

---

## 📦 Organisation des fichiers

tests/
├─ Unit/
│ ├─ Entity/
│ └─ Validator/
├─ Functional/
│ ├─ Controller/
│ └─ Security/
└─ Integration/

## 📊 Couverture

Pour générer un rapport HTML de couverture :

```bash
php bin/phpunit --coverage-html coverage/
```
➡️ Le dossier coverage/ contient un rapport navigable dans le navigateur.
C’est ce qui sera présenté au jury pour prouver la robustesse du projet.


### 🎯 Objectifs pour la soutenance
Atteindre au minimum 70 % de couverture sur les classes métiers.

Montrer que :
L’inscription et la connexion sont testées.
Le CRUD d’annonces est testé.
La recherche fonctionne.

# Bonus : présenter les rapports générés en direct (coverage/index.html).

✍️ Auteur : Équipe TalentÉkô
📅 Dernière mise à jour : septembre 2025
