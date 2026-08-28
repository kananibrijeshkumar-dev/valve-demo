/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf', // Electric Cobalt/Cyan
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#1e293b', // Dark Metal light
          900: '#0f172a', // Dark Metal dark
          950: '#020617', // Pitch black metal
        },
      }
    },
  },
  plugins: [],
}
