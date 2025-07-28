/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html.twig',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        bleuFonce: '#141C2E',
        orangePeche: '#D6713C',
        fondPeche: '#FDF5F1',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        catamaran: ['Catamaran', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html.twig",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        talenteko: {
          blue: "#141C2E",
          orange: "#D6713C",
          peach: "#f7f4e7",
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        catamaran: ['Catamaran', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
