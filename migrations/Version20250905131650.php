<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250905131650 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_CB0048D42B36786B2D5B0234 ON listing');
        $this->addSql('ALTER TABLE listing CHANGE city location VARCHAR(120) NOT NULL');
        $this->addSql('CREATE INDEX IDX_CB0048D42B36786B5E9E89CB ON listing (title, location)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_CB0048D42B36786B5E9E89CB ON listing');
        $this->addSql('ALTER TABLE listing CHANGE location city VARCHAR(120) NOT NULL');
        $this->addSql('CREATE INDEX IDX_CB0048D42B36786B2D5B0234 ON listing (title, city)');
    }
}
