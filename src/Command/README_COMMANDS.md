# README — Commandes Symfony (TalentÉkô)

Ce dossier contient des **commandes personnalisées Symfony** permettant de gérer les **images, catégories et slugs** dans le projet **TalentÉkô**.

## Table des matières

1. [ Rafraîchir le cache LiipImagine](#-1-rafraîchir-le-cache-liipimagine)

2. [ Vérifier la présence des images](#-2-vérifier-la-présence-des-images)

3. [ Corriger les slugs des catégories](#-3-corriger-les-slugs-des-catégories)

4. [ Corriger les chemins d’images](#-4-corriger-les-chemins-dimages)

5. [ Préchauffer les variantes LiipImagine](#-5-préchauffer-les-variantes-liipimagine)

6. [ Bonnes pratiques](#-bonnes-pratiques)

## Liste des commandes disponibles

### 1. Rafraîchir le cache LiipImagine

```bash
php bin/console app:cache-images
```

- Supprime et recrée les variantes LiipImagine (listing_card, listing_show, avatar_thumb).
- Parcourt /public/uploads/listings.
- Extensions supportées : .jpg, .jpeg, .png, .webp.
- Quand l’utiliser : après avoir remplacé des images ou modifié les filtres LiipImagine.

### 2. Vérifier la présence des images

```bash
php bin/console app:check-images
```

**Vérifie :**

- les icônes de catégories (/public/images/categories/{slug}.png ou .webp)
- les images des listings (/public/uploads/listings/{category}/{image}).

**Affiche un résumé clair avec :**

- Images OK
- Fallback utilisé
- Images manquantes

Quand l’utiliser : avant une démo ou une mise en production pour s’assurer qu’il n’y a pas de fichiers manquants.

### 3. Corriger les slugs des catégories

```bash
php bin/console app:fix-category-slugs
```

- Recalcule automatiquement le slug de chaque catégorie à partir de son name.
- Gère correctement les accents et caractères spéciaux (Bien-être → bien-etre, Éducation → education).
- Affiche les corrections faites (avant → après).

Quand l’utiliser : après avoir modifié ou importé des catégories.

### 4. Corriger les chemins d’images

```bash
php bin/console app:fix-image-paths
```

- Nettoie les enregistrements ListingImage.path en BDD.
- Ne garde que le nom du fichier (ex: 1.jpg).
- Utile si tu avais des chemins stockés en dur (uploads/listings/.../1.jpg).

Quand l’utiliser : après une migration de données ou un import non propre.

### 5. Préchauffer les variantes LiipImagine

```bash
php bin/console app:warmup-images
```

- Génère toutes les variantes d’images via LiipImagine sans attendre un premier chargement web.
- Parcourt /public/uploads/listings.
- Extensions supportées : .jpg, .jpeg, .png.

Quand l’utiliser : juste avant une démo, pour que toutes les images s’affichent instantanément.

## 6. Insérer un dataset massif d’annonces

```bash
php bin/console app:seed-listings
```

- Génère 100 annonces génériques pour démonstration.
- Titre : Annonce démo #X.
- Description : Ceci est une annonce générée automatiquement pour démonstration.
- Image : toujours placeholderTE.png.
- Auteur : un utilisateur aléatoire (hors admin).
- Catégorie : choisie aléatoirement parmi celles existantes.
- Statut : PUBLISHED.

Utile pour peupler rapidement la base en environnement de test ou pour les démonstrations.

### Bonnes pratiques

- Lancer app:fix-category-slugs après avoir modifié les catégories en BDD.
- Lancer app:fix-image-paths si on change la logique de stockage des fichiers.
- Utiliser app:warmup-images après un gros import ou un reset de cache.
- Utiliser app:check-images avant une démo pour s’assurer que tout est OK.

### Ces commandes sont destinées à la **maintenance** et au **debug**.

Elles ne sont pas nécessaires pour le fonctionnement quotidien de TalentÉkô,
mais permettent d’assurer la qualité avant une mise en production ou une soutenance.
