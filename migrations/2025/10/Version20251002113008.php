<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251002113008 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_64C19C1989D9B62 ON category');
        $this->addSql('DROP INDEX IDX_CB0048D42B36786B5E9E89CB ON listing');
        $this->addSql('DROP INDEX IDX_B6BD307FE29040198B8E8428 ON message');
        $this->addSql('DROP INDEX IDX_BF5476CADA46F46 ON notification');
        $this->addSql('DROP INDEX IDX_6B7BA4B6F9D83E2 ON password_reset_token');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE INDEX IDX_64C19C1989D9B62 ON category (slug)');
        $this->addSql('CREATE INDEX IDX_CB0048D42B36786B5E9E89CB ON listing (title, location)');
        $this->addSql('CREATE INDEX IDX_B6BD307FE29040198B8E8428 ON message (thread_id, created_at)');
        $this->addSql('CREATE INDEX IDX_BF5476CADA46F46 ON notification (is_read)');
        $this->addSql('CREATE INDEX IDX_6B7BA4B6F9D83E2 ON password_reset_token (expires_at)');
    }
}
