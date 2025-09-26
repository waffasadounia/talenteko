<?php

declare(strict_types=1);

use FriendsOfTwig\Twigcs\Config\Config;
use FriendsOfTwig\Twigcs\Ruleset\Official;

// TwigCS = linter pour fichiers .twig
// - Version de la grammaire : 3.0 (Symfony/Twig ≥ 3)
// - Paths analysés : templates principaux + emails
// - Ruleset "Official" = règles de la communauté Twig
//     (indentation, espaces, accolades, noms de blocs)

$config = new Config(
    '3.0',
    [
        __DIR__ . '/templates',
        __DIR__ . '/templates/emails',
    ],
    Official::class,
);

return $config;
