/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        classic: {
          red: '#f31717',
          navy: '#131830',
          navyLight: '#282d47',
          bgGrey: '#f2f6f9',
          borderGrey: '#e4e4e4',
          textGrey: '#616161'
        },
      }
    },
  },
  plugins: [],
}
