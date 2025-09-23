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
        return 'Aligne listing: renomme city→location et (re)crée index (title, location) en étant idempotent.';
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

        // 2) Renommer la colonne si nécessaire: city -> location
        $hasCity = (int) $conn->fetchOne("SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='listing' AND COLUMN_NAME='city'");
        $hasLocation = (int) $conn->fetchOne("SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='listing' AND COLUMN_NAME='location'");

        if ($hasCity > 0 && 0 === $hasLocation) {
            // Garde le type/longueur souhaités
            $this->addSql('ALTER TABLE `listing` CHANGE `city` `location` VARCHAR(120) NOT NULL');
        }

        // 3) Créer un index stable (title, location) s’il n’existe pas déjà (peu importe le nom)
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

        // 1) Drop l’index (title, location) si présent (quel que soit le nom, on traite d’abord le nom stable créé ci-dessus)
        $existsStable = (int) $conn->fetchOne(<<<SQL
            SELECT COUNT(*) FROM INFORMATION_SCHEMA.STATISTICS
            WHERE TABLE_SCHEMA = DATABASE()
              AND TABLE_NAME   = 'listing'
              AND INDEX_NAME   = 'idx_listing_title_location'
        SQL);
        if ($existsStable > 0) {
            $this->addSql('DROP INDEX `idx_listing_title_location` ON `listing`');
        } else {
            // Si l’index existe sous un autre nom, on le droppe aussi
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

        // 3) Recréer un index (title, city) si pas présent
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
