<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250904141934 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD pseudo VARCHAR(50) DEFAULT NULL, ADD bio LONGTEXT DEFAULT NULL, ADD skills_offered JSON DEFAULT NULL COMMENT \'(DC2Type:json)\', ADD skills_wanted JSON DEFAULT NULL COMMENT \'(DC2Type:json)\', DROP firstname, CHANGE city location VARCHAR(120) DEFAULT NULL, CHANGE avatar_path avatar_filename VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `user` ADD firstname VARCHAR(100) DEFAULT NULL, DROP pseudo, DROP bio, DROP skills_offered, DROP skills_wanted, CHANGE location city VARCHAR(120) DEFAULT NULL, CHANGE avatar_filename avatar_path VARCHAR(255) DEFAULT NULL');
    }
}


