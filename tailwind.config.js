import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Include all HTML and JS files in the src folder
    "./views/**/*.ejs",     // Include all EJS files in the views folder
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night", "dracula", "sunset"],
  },
};

