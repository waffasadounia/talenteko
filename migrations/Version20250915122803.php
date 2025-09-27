<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250915122803 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajoute le champ tag aux utilisateurs et crée une contrainte unique (pseudo, tag).';
    }

    public function up(Schema $schema): void
    {
        // Étape 1 : ajouter la colonne nullable (temporairement)
        $this->addSql('ALTER TABLE user ADD tag VARCHAR(4) DEFAULT NULL');

        // Étape 2 : remplir les tags existants avec un identifiant aléatoire
        $this->addSql("UPDATE user SET tag = LPAD(FLOOR(RAND()*9999), 4, '0') WHERE tag IS NULL");

        // Étape 3 : rendre le champ obligatoire
        $this->addSql('ALTER TABLE user MODIFY tag VARCHAR(4) NOT NULL');

        // Étape 4 : ajouter la contrainte d’unicité (pseudo, tag)
        $this->addSql('CREATE UNIQUE INDEX UNIQ_PSEUDO_TAG ON user (pseudo, tag)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP INDEX UNIQ_PSEUDO_TAG ON user');
        $this->addSql('ALTER TABLE user DROP tag');
    }
}
