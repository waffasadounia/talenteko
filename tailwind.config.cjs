/**
 * ==========================================
 * Tailwind Config — TalentÉkô
 * ------------------------------------------
 * Palette officielle + polices + safelist dynamique
 * ==========================================
 */
module.exports = {
  content: [
    './templates/**/*.html.twig',
    './assets/**/*.js',
    './assets/**/*.css',
  ],

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

    // Transitions personnalisées (panneau filtres)
    'data-[state=open]:translate-x-0',
    'data-[state=open]:opacity-100',

    // Couleurs dynamiques CTA / hover
    'bg-talenteko-orange-700',
    'hover:bg-talenteko-orange-800',
    'hover:bg-talenteko-orange-100',
    'text-talenteko-blue-900',
    'text-talenteko-orange-500',

    // Line clamp (depuis Tailwind v3.3)
    'line-clamp-1',
    'line-clamp-2',
  ],

  theme: {
    extend: {
      colors: {
        talenteko: {
          blue: {
            900: '#141C2E',
            800: '#1e2636',
            700: '#252e40',
            600: '#2b3343',
            500: '#434958',
            400: '#a1a4ab',
            300: '#c2c5cc',
            200: '#e1e3e7',
            100: '#f0f1f3',
            50:  '#f8f9fa'
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
