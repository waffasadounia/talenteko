<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250915122803 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajoute le champ tag aux utilisateurs et crÃ©e une contrainte unique (pseudo, tag).';
    }

    public function up(Schema $schema): void
    {
        // Ã‰tape 1 : ajouter la colonne nullable (temporairement)
        $this->addSql('ALTER TABLE user ADD tag VARCHAR(4) DEFAULT NULL');

        // Ã‰tape 2 : remplir les tags existants avec un identifiant alÃ©atoire
        $this->addSql("UPDATE user SET tag = LPAD(FLOOR(RAND()*9999), 4, '0') WHERE tag IS NULL");

        // Ã‰tape 3 : rendre le champ obligatoire
        $this->addSql('ALTER TABLE user MODIFY tag VARCHAR(4) NOT NULL');

        // Ã‰tape 4 : ajouter la contrainte dâ€™unicitÃ©
        $this->addSql('CREATE UNIQUE INDEX UNIQ_PSEUDO_TAG ON user (pseudo, tag)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP INDEX UNIQ_PSEUDO_TAG ON user');
        $this->addSql('ALTER TABLE user DROP tag');
    }
}
