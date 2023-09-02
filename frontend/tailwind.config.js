/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo' : ['Shrikhand', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'code': ['Press Start 2P', 'cursive'],
      }
    },
  },
  plugins: [],
}
