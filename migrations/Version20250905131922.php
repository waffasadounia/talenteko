<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250905131922 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Aligne listing: renomme cityÃ¢â€ â€™location et (re)crÃƒÂ©e index (title, location) en ÃƒÂ©tant idempotent.';
    }

    public function up(Schema $schema): void
    {
        /** @var Connection $conn */
        $conn = $this->connection;

        // 1) Supprimer tout index (sur listing) qui porte sur (title, city), quel que soit son nom
        $indexesToDrop = $conn->fetchFirstColumn(<<<SQL
            SELECT INDEX_NAME
            FROM INFORMATION_SCHEMA.STATISTICS
            WHERE TABLE_SCHEMA = DATABASE()
              AND TABLE_NAME   = 'listing'
            GROUP BY INDEX_NAME
            HAVING SUM(CASE WHEN COLUMN_NAME='title' THEN 1 ELSE 0 END) = 1
               AND SUM(CASE WHEN COLUMN_NAME='city'  THEN 1 ELSE 0 END) = 1
        SQL);
        foreach ($indexesToDrop as $idx) {
            $this->addSql(sprintf('DROP INDEX `%s` ON `listing`', $idx));
        }

        // 2) Renommer la colonne si nÃƒÂ©cessaire: city -> location
        $hasCity = (int) $conn->fetchOne("SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='listing' AND COLUMN_NAME='city'");
        $hasLocation = (int) $conn->fetchOne("SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='listing' AND COLUMN_NAME='location'");

        if ($hasCity > 0 && 0 === $hasLocation) {
            // Garde le type/longueur souhaitÃƒÂ©s
            $this->addSql('ALTER TABLE `listing` CHANGE `city` `location` VARCHAR(120) NOT NULL');
        }

        // 3) CrÃƒÂ©er un index stable (title, location) sÃ¢â‚¬â„¢il nÃ¢â‚¬â„¢existe pas dÃƒÂ©jÃƒÂ  (peu importe le nom)
        $hasTitleLocation = (int) $conn->fetchOne(<<<SQL
            SELECT COUNT(*) FROM (
              SELECT INDEX_NAME
              FROM INFORMATION_SCHEMA.STATISTICS
              WHERE TABLE_SCHEMA = DATABASE()
                AND TABLE_NAME   = 'listing'
              GROUP BY INDEX_NAME
              HAVING SUM(CASE WHEN COLUMN_NAME='title'    THEN 1 ELSE 0 END) = 1
                 AND SUM(CASE WHEN COLUMN_NAME='location' THEN 1 ELSE 0 END) = 1
            ) t
        SQL);

        if (0 === $hasTitleLocation) {
            // Nom explicite et stable
            $this->addSql('CREATE INDEX `idx_listing_title_location` ON `listing` (`title`, `location`)');
        }
    }

    public function down(Schema $schema): void
    {
        /** @var Connection $conn */
        $conn = $this->connection;

        // 1) Drop lÃ¢â‚¬â„¢index (title, location) si prÃƒÂ©sent (quel que soit le nom, on traite dÃ¢â‚¬â„¢abord le nom stable crÃƒÂ©ÃƒÂ© ci-dessus)
        $existsStable = (int) $conn->fetchOne(<<<SQL
            SELECT COUNT(*) FROM INFORMATION_SCHEMA.STATISTICS
            WHERE TABLE_SCHEMA = DATABASE()
              AND TABLE_NAME   = 'listing'
              AND INDEX_NAME   = 'idx_listing_title_location'
        SQL);
        if ($existsStable > 0) {
            $this->addSql('DROP INDEX `idx_listing_title_location` ON `listing`');
        } else {
            // Si lÃ¢â‚¬â„¢index existe sous un autre nom, on le droppe aussi
            $otherIdx = $conn->fetchFirstColumn(<<<SQL
                SELECT INDEX_NAME
                FROM INFORMATION_SCHEMA.STATISTICS
                WHERE TABLE_SCHEMA = DATABASE()
                  AND TABLE_NAME   = 'listing'
                GROUP BY INDEX_NAME
                HAVING SUM(CASE WHEN COLUMN_NAME='title'    THEN 1 ELSE 0 END) = 1
                   AND SUM(CASE WHEN COLUMN_NAME='location' THEN 1 ELSE 0 END) = 1
            SQL);
            foreach ($otherIdx as $idx) {
                $this->addSql(sprintf('DROP INDEX `%s` ON `listing`', $idx));
            }
        }

        // 2) Renommer location -> city si possible (rollback)
        $hasLocation = (int) $conn->fetchOne("SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='listing' AND COLUMN_NAME='location'");
        $hasCity = (int) $conn->fetchOne("SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='listing' AND COLUMN_NAME='city'");

        if ($hasLocation > 0 && 0 === $hasCity) {
            $this->addSql('ALTER TABLE `listing` CHANGE `location` `city` VARCHAR(120) NOT NULL');
        }

        // 3) RecrÃƒÂ©er un index (title, city) si pas prÃƒÂ©sent
        $hasTitleCity = (int) $conn->fetchOne(<<<SQL
            SELECT COUNT(*) FROM (
              SELECT INDEX_NAME
              FROM INFORMATION_SCHEMA.STATISTICS
              WHERE TABLE_SCHEMA = DATABASE()
                AND TABLE_NAME   = 'listing'
              GROUP BY INDEX_NAME
              HAVING SUM(CASE WHEN COLUMN_NAME='title' THEN 1 ELSE 0 END) = 1
                 AND SUM(CASE WHEN COLUMN_NAME='city'  THEN 1 ELSE 0 END) = 1
            ) t
        SQL);
        if (0 === $hasTitleCity) {
            $this->addSql('CREATE INDEX `idx_listing_title_city` ON `listing` (`title`, `city`)');
        }
    }
}
