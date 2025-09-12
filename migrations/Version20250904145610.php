<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250904145610 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE listing_image DROP FOREIGN KEY FK_33D3DCD3D4619D1A');
        $this->addSql('ALTER TABLE listing_image ADD CONSTRAINT FK_33D3DCD3D4619D1A FOREIGN KEY (listing_id) REFERENCES listing (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE listing_image DROP FOREIGN KEY FK_33D3DCD3D4619D1A');
        $this->addSql('ALTER TABLE listing_image ADD CONSTRAINT FK_33D3DCD3D4619D1A FOREIGN KEY (listing_id) REFERENCES listing (id)');
    }
}
