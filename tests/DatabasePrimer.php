<?php

declare(strict_types=1);

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\StringInput;
use Symfony\Component\Console\Output\NullOutput;

/**
 * Utilitaire pour réinitialiser la BDD de test.
 *
 * Deux modes possibles :
 * - primeDatabase() appelée dans setUpBeforeClass() pour un reset global une seule fois.
 * - primeDatabase() appelée dans setUp() pour un reset avant chaque test.
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
