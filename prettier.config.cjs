/* eslint-env node */
// ==============================================
// Configuration Prettier – TalentÉkô
// ----------------------------------------------
// - Lisibilité & cohérence (RNCP DWWM).
// - Support Twig (Symfony/Twig).
// - Intégration TailwindCSS (ordre des classes).
// ==============================================

module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',

  plugins: [
    '@zackad/prettier-plugin-twig',   // Format Twig
    'prettier-plugin-tailwindcss',    // Ordonne classes Tailwind
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
