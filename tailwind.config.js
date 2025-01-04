/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': '#808080',
      'white': '#ffffff',
      'black': '#000000',
      'hunter-green': '#386641',
      'asparagus': '#6A994E',
      'yellow-green': '#A7C957',
      'parchment': '#F2E8CF',
      'bittersweet-shimmer': '#BC4749',
    },
    extend: {
      fontFamily: {
        'dosis': ["Dosis", "sans-serif"],
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.75)' },
        },
      },
      animation: {
        zoom: 'zoom 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

