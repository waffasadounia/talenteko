<?php

declare(strict_types=1);

use FriendsOfTwig\Twigcs\Config\Config;
use FriendsOfTwig\Twigcs\Ruleset\Official;

/**
 * Configuration TwigCS — TalentÉkô
 * ---------------------------------
 * - Linter pour fichiers .twig
 * - Version de la grammaire : 3.0 (Twig 3.x / Symfony 6.4)
 * - Dossiers analysés : templates/, templates/exchange/, templates/security/
 * - Ruleset "Official" : respect du standard Twig (indentation, espaces, blocs)
 * - Intégré à lint-staged & npm run lint:twig.
 */
$config = new Config(
    '3.0',
    [
        __DIR__ . '/templates',
        __DIR__ . '/templates/exchange',
        __DIR__ . '/templates/security',
    ],
    Official::class,
);

return $config;
