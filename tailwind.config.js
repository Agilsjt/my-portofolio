/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#080B12',
        panel: '#0E1424',
        line: 'rgba(255,255,255,0.12)',
        cyanGlow: '#22D3EE',
        mintGlow: '#75F0B7',
        roseGlow: '#FF6B9E',
      }
    },
  },
  plugins: [],
}
