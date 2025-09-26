<?php

declare(strict_types=1);

use FriendsOfTwig\Twigcs\Config\Config;
use FriendsOfTwig\Twigcs\Ruleset\Official;

// TwigCS = linter pour fichiers .twig
// - Version de la grammaire : 3.0 (Symfony/Twig ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 3)
// - Paths analysÃƒÆ’Ã‚Â©s : templates principaux + emails
// - Ruleset "Official" = rÃƒÆ’Ã‚Â¨gles de la communautÃƒÆ’Ã‚Â© Twig
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


