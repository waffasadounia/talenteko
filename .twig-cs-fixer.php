<?php

use FriendsOfTwig\Twigcs\Config\Config;
use FriendsOfTwig\Twigcs\Ruleset\Official;

$config = new Config('3.0', __DIR__ . '/templates', Official::class);

return $config;
