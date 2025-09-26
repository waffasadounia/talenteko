<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250826140233 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(120) NOT NULL, slug VARCHAR(120) NOT NULL, UNIQUE INDEX UNIQ_64C19C15E237E06 (name), UNIQUE INDEX UNIQ_64C19C1989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE listing (id INT AUTO_INCREMENT NOT NULL, author_id INT NOT NULL, category_id INT NOT NULL, title VARCHAR(180) NOT NULL, slug VARCHAR(220) NOT NULL, description LONGTEXT NOT NULL, type VARCHAR(10) NOT NULL, city VARCHAR(120) NOT NULL, status VARCHAR(12) DEFAULT \'PUBLISHED\' NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_CB0048D4989D9B62 (slug), INDEX IDX_CB0048D4F675F31B (author_id), INDEX IDX_CB0048D412469DE2 (category_id), INDEX IDX_CB0048D42B36786B2D5B0234 (title, city), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE listing_image (id INT AUTO_INCREMENT NOT NULL, listing_id INT NOT NULL, path VARCHAR(255) NOT NULL, is_primary TINYINT(1) DEFAULT 0 NOT NULL, INDEX IDX_33D3DCD3D4619D1A (listing_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, firstname VARCHAR(100) DEFAULT NULL, city VARCHAR(120) DEFAULT NULL, avatar_path VARCHAR(255) DEFAULT NULL, rating_avg DOUBLE PRECISION DEFAULT \'0\' NOT NULL, rating_count INT DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE listing ADD CONSTRAINT FK_CB0048D4F675F31B FOREIGN KEY (author_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE listing ADD CONSTRAINT FK_CB0048D412469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE listing_image ADD CONSTRAINT FK_33D3DCD3D4619D1A FOREIGN KEY (listing_id) REFERENCES listing (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE listing DROP FOREIGN KEY FK_CB0048D4F675F31B');
        $this->addSql('ALTER TABLE listing DROP FOREIGN KEY FK_CB0048D412469DE2');
        $this->addSql('ALTER TABLE listing_image DROP FOREIGN KEY FK_33D3DCD3D4619D1A');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE listing');
        $this->addSql('DROP TABLE listing_image');
        $this->addSql('DROP TABLE `user`');
        $this->addSql('DROP TABLE messenger_messages');
    }
}


