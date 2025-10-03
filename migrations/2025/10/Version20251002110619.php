<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251002110619 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE favorite (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, listing_id INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_68C58ED9A76ED395 (user_id), INDEX IDX_68C58ED9D4619D1A (listing_id), UNIQUE INDEX uniq_user_listing (user_id, listing_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE notification (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, type VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, is_read TINYINT(1) DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_BF5476CAA76ED395 (user_id), INDEX IDX_BF5476CADA46F46 (is_read), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE review (id INT AUTO_INCREMENT NOT NULL, author_id INT NOT NULL, target_id INT NOT NULL, exchange_id INT NOT NULL, rating INT NOT NULL, comment LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_794381C6F675F31B (author_id), INDEX IDX_794381C6158E0B66 (target_id), INDEX IDX_794381C668AFD1A0 (exchange_id), INDEX IDX_794381C6D8892622 (rating), UNIQUE INDEX uniq_review_exchange_author (exchange_id, author_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE favorite ADD CONSTRAINT FK_68C58ED9A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite ADD CONSTRAINT FK_68C58ED9D4619D1A FOREIGN KEY (listing_id) REFERENCES listing (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CAA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6F675F31B FOREIGN KEY (author_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6158E0B66 FOREIGN KEY (target_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C668AFD1A0 FOREIGN KEY (exchange_id) REFERENCES exchange (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category CHANGE slug slug VARCHAR(220) NOT NULL');
        $this->addSql('CREATE INDEX IDX_64C19C1989D9B62 ON category (slug)');
        $this->addSql('ALTER TABLE message ADD updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE INDEX IDX_B6BD307FE29040198B8E8428 ON message (thread_id, created_at)');
        $this->addSql('CREATE INDEX IDX_6B7BA4B6F9D83E2 ON password_reset_token (expires_at)');
        $this->addSql('ALTER TABLE user DROP avatar_filename, DROP bio, DROP skills_offered, DROP skills_wanted, DROP reset_token, DROP reset_requested_at');
        $this->addSql('CREATE INDEX IDX_8D93D6495E9E89CB ON user (location)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE favorite DROP FOREIGN KEY FK_68C58ED9A76ED395');
        $this->addSql('ALTER TABLE favorite DROP FOREIGN KEY FK_68C58ED9D4619D1A');
        $this->addSql('ALTER TABLE notification DROP FOREIGN KEY FK_BF5476CAA76ED395');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6F675F31B');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6158E0B66');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C668AFD1A0');
        $this->addSql('DROP TABLE favorite');
        $this->addSql('DROP TABLE notification');
        $this->addSql('DROP TABLE review');
        $this->addSql('DROP INDEX IDX_64C19C1989D9B62 ON category');
        $this->addSql('ALTER TABLE category CHANGE slug slug VARCHAR(150) NOT NULL');
        $this->addSql('DROP INDEX IDX_B6BD307FE29040198B8E8428 ON message');
        $this->addSql('ALTER TABLE message DROP updated_at');
        $this->addSql('DROP INDEX IDX_6B7BA4B6F9D83E2 ON password_reset_token');
        $this->addSql('DROP INDEX IDX_8D93D6495E9E89CB ON `user`');
        $this->addSql('ALTER TABLE `user` ADD avatar_filename VARCHAR(255) DEFAULT NULL, ADD bio LONGTEXT DEFAULT NULL, ADD skills_offered JSON DEFAULT NULL COMMENT \'(DC2Type:json)\', ADD skills_wanted JSON DEFAULT NULL COMMENT \'(DC2Type:json)\', ADD reset_token VARCHAR(100) DEFAULT NULL, ADD reset_requested_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }
}
