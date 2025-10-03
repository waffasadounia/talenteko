/**
 * ==========================================
 * Tailwind Config (v3/v4) – TalentÉkô
 * ------------------------------------------
 * - Palette officielle TalentÉkô.
 * - Polices Google (Montserrat, Catamaran, Chivo).
 * - Safelist : classes dynamiques (Twig/Turbo/Stimulus).
 * ==========================================
 */
module.exports = {
  content: ['./templates/**/*.html.twig', './assets/**/*.js', './assets/styles/**/*.css'],

  safelist: [
    // Affichage conditionnel
    'hidden',
    'block',
    'inline',

    // Dark mode
    'dark',
    'dark:block',
    'dark:hidden',

    // Attributs ARIA (Stimulus/Turbo)
    '[aria-hidden]',
    '[aria-expanded]',

    // Classes dynamiques Stimulus
    'favorite-toggle',
    'password-strength',
    'password-confirm',
    'burger-menu',
    'dark-mode-toggle',
    'font-size-switcher',

    // États d’accessibilité
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-talenteko-orange-700',

    // Couleurs dynamiques CTA / hover
    'bg-talenteko-orange-700',
    'hover:bg-talenteko-orange-800',
    'hover:bg-talenteko-orange-100',
    'text-talenteko-blue-900',
    'text-talenteko-orange-500',

    // Line clamp (noyau depuis Tailwind v3.3)
    'line-clamp-1',
    'line-clamp-2',
  ],

  theme: {
    extend: {
      colors: {
        talenteko: {
          blue: {
            900: '#141C2E',
            600: '#2B3343',
            500: '#434958',
            400: '#A1A4AB',
          },
          orange: {
            100: '#FCE9E2',
            200: '#F9D2C4',
            300: '#F2A580',
            400: '#E8926A',
            500: '#D6713C',
            600: '#C46F45',
            700: '#B35F3A',
            800: '#994F2E',
          },
          peach: {
            100: '#FBF1EC',
            200: '#FDF5F1',
            300: '#FDFAF9',
          },
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        catamaran: ['Catamaran', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
      },
      lineHeight: {
        base: '1.5',
        relaxed: '1.625',
      },
    },
  },

  darkMode: 'class',

  plugins: [],
};
