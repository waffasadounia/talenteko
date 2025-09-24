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
    ->setRiskyAllowed(true) // autorise certaines règles "risquées" mais utiles
    ->setRules([
        '@Symfony' => true,
        '@PSR12' => true,
        '@DoctrineAnnotation' => true, // règles propres aux annotations Doctrine
        'array_syntax' => ['syntax' => 'short'], // [] au lieu de array()
        'ordered_imports' => ['sort_algorithm' => 'alpha'], // imports triés alpha
        'no_unused_imports' => true, // supprime les "use" inutiles
        'no_superfluous_phpdoc_tags' => true, // vire les @param redondants
        'phpdoc_align' => ['align' => 'left'], // docblocks alignés à gauche
        'phpdoc_summary' => false, // pas de point obligatoire dans les @param
        'phpdoc_to_comment' => false, // évite de transformer en simple commentaire
        'single_quote' => true, // préférer ' aux "
        'yoda_style' => false, // if ($foo === null) au lieu de if (null === $foo)
        'binary_operator_spaces' => ['default' => 'single_space'], // $a = $b
        'concat_space' => ['spacing' => 'one'], // "a" . "b" avec espace
    ])
    ->setFinder($finder);
