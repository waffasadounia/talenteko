# 📦 Dataset TalentÉkô 2025 — Données de démonstration

Ce dataset permet de **précharger la base TalentÉkô** avec un ensemble de données cohérentes pour la soutenance.

## 📊 Contenu

| Table | Description | Volume |
|-------|--------------|---------|
| `user` | 60 utilisateurs (1 admin) | 60 |
| `profile` | bios, localisations, compétences | 60 |
| `category` | 12 catégories fixes | 12 |
| `listing` | 300 annonces (25 par catégorie) | 300 |
| `listing_image` | 1–6 images / annonce | 300 |
| `exchange` | 80 échanges | 80 |
| `review` | 120 avis (5 % sans note) | 120 |
| `favorite` | 200 favoris | 200 |
| `thread` + `message` | 40 discussions → 90 messages | 90 |
| `notification` | 40 notifications | 40 |
| `password_reset_token` | 3 exemples | 3 |

## ⚙️ Import

```bash
mysql -u root -p talenteko < data/dataset_talenteko.sql
