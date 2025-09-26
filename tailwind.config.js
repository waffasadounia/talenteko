/**
 * ==========================================
 * Tailwind Config (v4) Ã¢â‚¬â€ TalentÃƒâ€°kÃƒÂ´
 * ------------------------------------------
 * - Palette officielle TalentÃƒâ€°kÃƒÂ´ (alignÃƒÂ©e avec globals.css).
 * - Polices Google importÃƒÂ©es (Montserrat, Catamaran, Chivo).
 * - Safelist : uniquement les classes gÃƒÂ©nÃƒÂ©rÃƒÂ©es dynamiquement
 *   (utile avec Twig/Turbo quand Tailwind nÃ¢â‚¬â„¢analyse pas tout).
 * ==========================================
 */
module.exports = {
  content: [
    "./templates/**/*.html.twig",   // tous les templates Twig
    "./assets/**/*.js",             // JS (Stimulus, TurboÃ¢â‚¬Â¦)
    "./assets/styles/**/*.css",     // nos fichiers CSS organisÃƒÂ©s
  ],

  safelist: [
  "hidden",
  "dark",
  "bg-talenteko-orange-700",
  "hover:bg-talenteko-orange-800",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-talenteko-orange-700",
],


  theme: {
    extend: {
      colors: {
        // Palette officielle TalentÃƒâ€°kÃƒÂ´
        talenteko: {
          blue: {
            900:"#141C2E",  // Bleu principal
            600:"#2B3343",  // Bleu secondaire
            500:"#434958",  // Bleu alternatif
            400:"#A1A4AB",  // Bleu clair (liens, accents)

          },

          orange: {
            400: "#E8926A", // Clair (badges, bordures)
            500: "#D6713C", // Couleur de marque (CTA, boutons)
            600: "#C46F45", // + sombre
            700: "#B35F3A", // Contrast AA sur texte blanc
            800: "#994F2E", // Hover sombre
          },

          peach: {
            100: "#FBF1EC", // Fond trÃƒÂ¨s clair
            200: "#FDF5F1", // Fond alternatif
            300: "#FDFAF9", // Fond crÃƒÂ¨me
          },
        },
      },

      fontFamily: {
        // Famille principale (corps de texte)
        sans: ["Montserrat", "sans-serif"],

        // Polices secondaires (titres, accents visuels)
        catamaran: ["Catamaran", "sans-serif"],
        chivo: ["Chivo", "sans-serif"],
      },
    },
  },

  plugins: [],
};
