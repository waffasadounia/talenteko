// prettier.config.js
// Configuration Prettier pour TalentÉkô
// Objectif : lisibilité, cohérence, respect des standards modernes (RNCP DWWM, Symfony, Tailwind).

module.exports = {
  semi: true, // Toujours mettre ; en JS → plus explicite et classique
  singleQuote: true, // Utiliser des quotes simples (plus cohérent avec PHP/Twig)
  printWidth: 100, // Largeur max par ligne (100 = compromis moderne, plus lisible que 80)
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  plugins: [
    '@zackad/prettier-plugin-twig', // Support des fichiers .twig
    'prettier-plugin-tailwindcss'   // Trie automatique des classes Tailwind
  ],
  overrides: [
    {
      files: ['*.twig', '*.html.twig'],
      options: {
        parser: 'twig',
        twigSingleQuote: true, // Quotes simples aussi dans Twig
        twigFollowOfficialCodingStandards: true // Respect des standards Twig
      }
    }
  ]
}
