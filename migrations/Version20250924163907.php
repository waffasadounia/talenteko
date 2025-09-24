<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250924163907 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE exchange (id INT AUTO_INCREMENT NOT NULL, listing_id INT NOT NULL, requester_id INT NOT NULL, status VARCHAR(20) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_D33BB079D4619D1A (listing_id), INDEX IDX_D33BB079ED442CF4 (requester_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE exchange ADD CONSTRAINT FK_D33BB079D4619D1A FOREIGN KEY (listing_id) REFERENCES listing (id)');
        $this->addSql('ALTER TABLE exchange ADD CONSTRAINT FK_D33BB079ED442CF4 FOREIGN KEY (requester_id) REFERENCES `user` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE exchange DROP FOREIGN KEY FK_D33BB079D4619D1A');
        $this->addSql('ALTER TABLE exchange DROP FOREIGN KEY FK_D33BB079ED442CF4');
        $this->addSql('DROP TABLE exchange');
    }
}
