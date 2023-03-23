/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'molengo': ['Molengo', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'sche': ['Scheherazade New', 'serif'],
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}