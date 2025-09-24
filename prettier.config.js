module.exports = {
  semi: true, // toujours mettre ; à la fin
  singleQuote: true, // utiliser des quotes simples
  printWidth: 80, // largeur max avant retour à la ligne
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  plugins: [
    '@zackad/prettier-plugin-twig', // support Twig
    'prettier-plugin-tailwindcss'   // trie les classes Tailwind automatiquement
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
