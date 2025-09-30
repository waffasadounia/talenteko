/* eslint-env node */
// Configuration Prettier pour Talenteko
// Objectif : lisibilité, cohérence, respect des standards modernes (RNCP DWWM, Symfony, Tailwind).

module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  plugins: [
    '@zackad/prettier-plugin-twig',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: ['*.twig', '*.html.twig'],
      options: {
        parser: 'twig',
        twigSingleQuote: true,
        twigFollowOfficialCodingStandards: true
      }
    }
  ]
};
