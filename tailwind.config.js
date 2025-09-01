/**
 * Config Tailwind (v4) — un SEUL module.exports.
 * - `content`: où Tailwind scanne tes fichiers pour générer UNIQUEMENT les classes utilisées.
 * - `theme.extend`: tes couleurs & polices personnalisées (on garde tes deux jeux).
 * - `plugins`: plugins Tailwind éventuels (on laisse vide pour l’instant).
 */
// tailwind.config.js
// tailwind.config.js (v4)
module.exports = {
  content: [
    "./templates/**/*.html.twig",
    "./assets/**/*.js",
    "./assets/styles/**/*.css",
  ],

  // FORCE l’inclusion de classes critiques si l’analyse rate des .twig
  safelist: [
    // CTA "Se connecter" (plein)
    "bg-talenteko-orange-700",
    "hover:bg-talenteko-orange-800",
    "text-white",

    // CTA "Déposer une annonce" (outline)
    "border-talenteko-orange-500",
    "text-talenteko-orange-500",
    "hover:bg-talenteko-peach-200",

    // Tokens header/nav
    "text-talenteko-blue",
    "bg-talenteko-peach-100",
    "bg-talenteko-peach-200",
    "border-talenteko-orange-400",
    "border-talenteko-orange-600",

    // Variantes utilitaires fréquentes
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-talenteko-orange-700",
  ],

  theme: {
    extend: {
      colors: {
        // ALIAS rétro-compatibles
        bleuFonce: "#141C2E",
        orangePeche: "#D6713C",
        fondPeche: "#FDF5F1",

        // PALETTE OFFICIELLE TALENTÉKÔ
        talenteko: {
          blue: "#141C2E",
          orange: {
            400: "#E8926A",
            500: "#D6713C", // aligne sur la couleur officielle
            600: "#C46F45",
            700: "#B35F3A",
            800: "#994F2E",
          },
          peach: {
            100: "#FBF1EC",
            200: "#FDF5F1",
            300: "#FDFAF9",
          },
          background: {
            white: "#FFFFFF",
            peach: "#FBF1EC",
            cream: "#FDFAF9",
          },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        catamaran: ["Catamaran", "sans-serif"],
        chivo: ["Chivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
