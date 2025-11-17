// ===============================================
// eslint.config.mjs — TalentÉkô (ESM Flat Config)
// Compatible ESLint v9+ / Node 18+
// ===============================================

import js from '@eslint/js';
import globals from 'globals';

export default [
  // Ignorer les fichiers générés ou externes
  {
    ignores: ['node_modules/**', 'public/build/**', '*.cjs', 'assets/**/*.cjs'],
  },

  // Configuration de base recommandée
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // Règles spécifiques aux fichiers du dossier assets/
  {
    files: ['assets/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        console: 'readonly',
        fetch: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },

  // Exceptions pour bootstrap.js (Webpack require context)
  {
    files: ['assets/bootstrap.js'],
    rules: {
      'no-undef': 'off',
    },
  },

  // Règles Node.js pour fichiers de configuration
  {
    files: [
      'webpack.config.cjs',
      'tailwind.config.cjs',
      'postcss.config.js',
      'prettier.config.cjs',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
];
