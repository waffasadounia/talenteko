<?php

declare(strict_types=1);

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\StringInput;
use Symfony\Component\Console\Output\NullOutput;

/**
 * Utilitaire pour rÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©initialiser la BDD de test.
 *
 * Deux modes possibles :
 * - primeDatabase() appelÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© dans setUpBeforeClass() ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ reset global une seule fois.
 * - primeDatabase() appelÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© dans setUp() ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ reset avant chaque test.
 */
trait DatabasePrimer
{
    public static function primeDatabase(): void
    {
        $kernel = new \App\Kernel('test', true);
        $application = new Application($kernel);
        $application->setAutoExit(false);

        $commands = [
            'doctrine:database:drop --force --if-exists --env=test',
            'doctrine:database:create --env=test',
            'doctrine:migrations:migrate --no-interaction --env=test',
            'doctrine:fixtures:load --no-interaction --env=test',
        ];

        foreach ($commands as $command) {
            $input = new StringInput($command);
            $application->run($input, new NullOutput());
        }
    }
}


