/* eslint-env node */
// ======================================================
// Prettier Config — TalentÉkô
// ------------------------------------------------------
// • Lisibilité & cohérence
// • Support complet Twig (Symfony/Twig)
// • Classement automatique des classes TailwindCSS
// ======================================================

module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',

  plugins: [
    '@zackad/prettier-plugin-twig', // Formatage Twig
    'prettier-plugin-tailwindcss', // Ordonne les classes Tailwind
  ],

  overrides: [
    {
      files: ['*.twig', '*.html.twig'],
      options: {
        parser: 'twig',
        twigSingleQuote: true,
      },
    },
  ],
};
