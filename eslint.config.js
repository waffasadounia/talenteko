// ===============================================
// eslint.config.js — TalentÉkô
// -----------------------------------------------
// Configuration ESLint moderne (ESM, ESLint v9)
// - assets/ : code front (Stimulus, Tailwind, etc.)
// - webpack.config.js : config Node (CommonJS)
// ===============================================

import js from "@eslint/js";
import globals from "globals";

export default [
  // Ignorer les répertoires générés
  {
    ignores: ["node_modules/**", "public/build/**"],
  },

  // Config de base
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Code applicatif (front)
  {
    files: ["assets/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        console: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "no-console": "off", // on autorise console.log en dev
      quotes: ["error", "single"],
    },
  },

  // Bootstrap Stimulus (Webpack)
  {
    files: ["assets/bootstrap.js"],
    rules: {
      "no-undef": "off", // require.context est défini par Webpack
    },
  },

  // Fichier webpack (Node.js CommonJS)
  {
    files: ["webpack.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-undef": "off", // désactive le warning sur process/require
    },
  },

  // Fichier Tailwind (Node.js CommonJS)
{
  files: ["tailwind.config.js"],
  languageOptions: {
    globals: {
      ...globals.node,
      module: "readonly",
      require: "readonly",
    },
  },
  rules: {
    "no-undef": "off", // évite le warning sur module/require
  },
},

];
