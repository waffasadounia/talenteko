#  Documentation Technique — TalentÉkô

Plateforme web moderne d’échange de compétences entre particuliers, développée avec **Symfony 6**, **Twig**, **TailwindCSS**, **Stimulus**, **Doctrine**, orientée MVC et conforme au référentiel **DWWM**.

---

# 1. Présentation du projet

**TalentÉkô** est une plateforme permettant aux utilisateurs de proposer leurs compétences, rechercher celles d’autres personnes et échanger via un système de messagerie et de propositions d’échanges.

Objectifs :
- Faciliter l’entraide locale
- Centraliser les annonces de talents
- Proposer une interface intuitive et responsive
- Offrir un système d’échanges simple et transparent

---

# 2. Stack technique

- **Backend** : Symfony 6.4 (PHP 8.2)
- **Frontend** : Twig, TailwindCSS, Stimulus, Turbo
- **Base de données** : MariaDB 10.4
- **ORM** : Doctrine 3
- **Images** : LiipImagineBundle
- **Déploiement** : o2switch
- **Qualité** : Husky, TwigCS, ESLint, Prettier, PHP-CS-Fixer
- **Tests** : PHPUnit, Panther

---

# 3. Architecture MVC (Symfony)
HTTP Request → Controller → Service (optionnel) → Repository → Model (Entity)
↓
Twig (View)
↓
HTML / CSS / JS

Rôle des couches :
- **Controller** : reçoit la requête, valide, orchestre
- **Model** : Entités & logique de persistance
- **Repository** : requêtes SQL propres
- **View** : Templates Twig + Tailwind
- **Service** : logique métier isolée

---

# 4. Fonctionnalités MVP

- Authentification (login, inscription, reset password)
- Profil utilisateur
- Catégories d’annonces
- Publication d’annonces (textes + images)
- Recherche + filtres
- Favoris
- Messagerie (threads + messages)
- Propositions d’échanges
- Tableau de bord
- Admin : utilisateurs, annonces, catégories
- Sécurité + accessibilité

---

# 5. Arborescence du projet (réduite)
talenteko/
│── assets/
│ ├── controllers/
│ └── styles/
│
│── config/
│ ├── routes/
│ ├── packages/
│ └── services.yaml
│
│── public/
│ ├── build/
│ └── uploads/
│
│── src/
│ ├── Controller/
│ ├── Entity/
│ ├── Form/
│ ├── Repository/
│ ├── Service/
│ └── Security/
│
│── templates/
│ ├── base.html.twig
│ ├── listing/
│ ├── profile/
│ ├── security/
│ └── admin/
│
│── tests/
│── translations/
│── composer.json
│── webpack.config.js
│── tailwind.config.js


---

# 6. Entities principales

## 6.1 User
Champs :
- email, password, roles
- username, bio, location
- avatar (lettre automatique)
- relations : listings, messages, exchanges

## 6.2 Listing (Annonce)
- titre, description, slug
- images
- category
- createdAt / updatedAt

## 6.3 Thread / Message
- Un thread = 2 participants
- Messages triés par date
- Notifications email

## 6.4 Exchange
- Proposition d’échange
- Statuts : en attente / accepté / refusé
- Horodatage

---

# 7. Controllers

## ListingController
- index
- show
- new / edit
- upload images
- favoris

## SecurityController
- login
- logout

## ProfileController
## AdminController

---

# 8. Form Types

- `ListingType`
- `RegistrationFormType`
- `MessageType`
- `ExchangeType`

Exemple :

```php
public function buildForm(FormBuilderInterface $builder, array $options): void
{
    $builder
        ->add('title', TextType::class)
        ->add('description', TextareaType::class)
        ->add('category', EntityType::class, [
            'class' => Category::class
        ]);
}
```
# 9. Services

## ImageProcessor

-   Redimensionnement

-   Sécurisation des noms de fichiers

-   Gestion des miniatures LiipImagine


## NotificationMailer

-   Nouveaux messages

-   Nouvel échange

-   Reset mot de passe


----------

# 10. Sécurité

-   Authenticator personnalisée

-   Rôles : `ROLE_USER`, `ROLE_ADMIN`

-   Protection CSRF activée

-   Chemins protégés via `security.yaml`


Extrait :
```
access_control:
  - { path: ^/admin, roles: ROLE_ADMIN }
  - { path: ^/annonce/nouvelle, roles: IS_AUTHENTICATED_FULLY }
  ```

# 11. Frontend

## TailwindCSS

-   Design system TalentÉkô

-   Couleurs (Bleu 900 / Orange 500 / Peach 200)


## Stimulus

Contrôleurs :

-   custom-select

-   password-strength

-   burger-menu

-   darkmode


----------

# 12. Commandes Symfony

-   `app:check-images`

-   `app:fix-category-slugs`

-   `app:fix-image-paths`

-   `app:warmup-images`

-   `app:cache-images`
# 13. Workflow d’un échange

`User A → propose un échange → User B User B accepte → conversation ouverte
Statut mis à jour → historique
Notification email envoyée`

----------

# 14. Déploiement (o2switch)

## Étapes :

`APP_ENV=prod
npm run build
php bin/console cache:clear
php bin/console doctrine:migrations:migrate
php bin/console liip:imagine:cache:resolve uploads/listings`

## Optimisations :

-   droits sur /var

-   logs prod

-   rebuild assets

-   base de données en production


----------

# 15. Tests

## PHPUnit

-   Tests des entités

-   Tests des validators


## Panther

-   Test des pages

-   Test des liens internes


Exemple :

`$crawler = $client->request('GET', '/'); $this->assertSame(200, $client->getStatus());`

----------

# 16. Annexes techniques

-   Schéma GitFlow

-   Schéma MVC TalentÉkô

-   Schéma Auth Security

-   Timeline

-   Mindmap

-   User stories

-   Arborescence complète
