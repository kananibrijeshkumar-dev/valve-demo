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
          50: '#f2f8f9',
          100: '#dfedf0',
          200: '#c3dce2',
          300: '#98c2cd',
          400: '#67a0b1',
          500: '#488496',
          600: '#3d6e7f',
          700: '#355a69',
          800: '#304c58',
          900: '#2a414c',
          950: '#192a33',
        }
      }
    },
  },
  plugins: [],
}
