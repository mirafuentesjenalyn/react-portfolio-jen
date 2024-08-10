/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        programming: ['Fira Code', 'monospace'],
      },
      colors: {
        'custom': '#408AFF',
        'bgbg': '#20202F',
        'wayt': '#A1AFCB',
        'darkblue': '#0A192F',
      },
      backgroundImage: {
        'blue-yellow-gradient': 'linear-gradient(to right, #1E3A8A, #F59E0B)', // Example gradient
      }
    },
  },
  plugins: [],
}