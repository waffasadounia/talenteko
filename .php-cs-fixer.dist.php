<?php

$finder = PhpCsFixer\Finder::create()
    ->in([
        __DIR__ . '/src',
        __DIR__ . '/tests',
    ])
    ->exclude([
        'var',
        'vendor',
        'migrations',
    ])
    ->name('*.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return (new PhpCsFixer\Config())
    ->setRiskyAllowed(true)
    ->setRules([
        '@Symfony' => true,
        '@PSR12' => true,
        'array_syntax' => ['syntax' => 'short'], // [] au lieu de array()
        'ordered_imports' => ['sort_algorithm' => 'alpha'], // imports triés
        'no_unused_imports' => true, // supprime les "use" inutiles
        'no_superfluous_phpdoc_tags' => true, // vire les @param redondants
        'phpdoc_align' => ['align' => 'left'],
        'phpdoc_summary' => false,
        'phpdoc_to_comment' => false,
        'single_quote' => true,
        'yoda_style' => false // if ($foo === null) plutôt que if (null === $foo)
    ])
    ->setFinder($finder);
