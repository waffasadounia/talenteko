<?php

declare(strict_types=1);

use Symfony\Component\Dotenv\Dotenv;

require dirname(__DIR__).'/vendor/autoload.php';

// Charge les variables d'environnement
if (file_exists(dirname(__DIR__).'/.env')) {
    (new Dotenv())->loadEnv(dirname(__DIR__).'/.env');
}

// Si on est en test, surcharge avec .env.test
if ('test' === $_SERVER['APP_ENV'] && file_exists(dirname(__DIR__).'/.env.test')) {
    (new Dotenv())->overload(dirname(__DIR__).'/.env.test');
}
