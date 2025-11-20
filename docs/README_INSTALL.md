# Guide d’installation — TalentÉkô

Ce document décrit les étapes pour installer et lancer TalentÉkô en local.
Prérequis : **PHP 8.2+, Composer 2, Node.js 20+, npm 10+, MariaDB/MySQL**.

---

## 1 Cloner le projet

```bash
git clone https://github.com/waffasadounia/talenteko.git
cd talenteko
```

## 2 Installer les dépendances PHP

```bash
composer install
```

## 3 Installer les dépendances JS/CSS

```bash
npm install
```

## 4 Configurer l’environnement

Copier le fichier d’exemple .env.local (non versionné) :

```bash
cp .env .env.local
```

**_Adapter si besoin :_**

DATABASE_URL → connexion MariaDB/MySQL (mariadb-10.4.32).
MAILER_DSN → par défaut smtp://localhost ou array:// en dev/test.
APP_ENV=dev → mode développement.

## 5 Créer la base de données + schéma

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

Charger les fixtures de démo (utilisateurs, catégories, annonces factices) :

```bash
php bin/console doctrine:fixtures:load
```

## 6 Compiler les assets

```bash
npm run dev
```

Pour la prod : npm run build

## 7 Lancer le serveur Symfony

```bash
symfony server:start
```

Ouvrir http://127.0.0.1:8000

## 8 Lancer les tests

```bash
composer test
```
 Rapport de couverture : php bin/phpunit --coverage-html coverage/

## Résumé rapide

```bash
git clone https://github.com/waffasadounia/talenteko.git
cd talenteko
composer install
npm install
cp .env .env.local
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
npm run dev
symfony server:start
```

## Comptes de test

**_Utilisateur :_** user@talenteko.fr
/ Password123!

**_Admin :_** admin@talenteko.fr
/ Password123!

## Auteur : Équipe TalentÉkô

## Dernière mise à jour : septembre 2025
