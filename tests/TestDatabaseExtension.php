<?php

declare(strict_types=1);

namespace App\Tests;

use PHPUnit\Event\TestSuite\Started as TestSuiteStarted;
use PHPUnit\Event\TestSuite\StartedSubscriber;
use PHPUnit\Runner\Extension\Extension;
use PHPUnit\Runner\Extension\Facade;
use PHPUnit\Runner\Extension\ParameterCollection;
use PHPUnit\TextUI\Configuration\Configuration;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\StringInput;
use Symfony\Component\Console\Output\NullOutput;

/**
 * Extension PHPUnit pour rÃƒÂ©initialiser la BDD avant la suite de tests.
 */
final class TestDatabaseExtension implements Extension
{
    public function bootstrap(Configuration $configuration, Facade $facade, ParameterCollection $parameters): void
    {
        $facade->registerSubscriber(new class () implements StartedSubscriber {
            public function notify(TestSuiteStarted $event): void
            {
                if ('Project Test Suite' !== $event->testSuite()->name()) {
                    return;
                }

                $kernel = new \App\Kernel('test', true);
                $application = new Application($kernel);
                $application->setAutoExit(false);

                $commands = [
                    'doctrine:database:drop --force --env=test',
                    'doctrine:database:create --env=test',
                    'doctrine:migrations:migrate --no-interaction --env=test',
                    'doctrine:fixtures:load --no-interaction --env=test',
                ];

                foreach ($commands as $command) {
                    $input = new StringInput($command);
                    $application->run($input, new NullOutput());
                }
            }
        });
    }
}
