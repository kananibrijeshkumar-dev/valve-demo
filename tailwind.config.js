/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minimal: {
          bg: '#f8f9fa',        // Soft pearl grey for backgrounds
          white: '#ffffff',
          accent: '#475569',    // Steel blue/grey for buttons and hovers
          text: '#1e293b',      // Deep slate for main text
          textLight: '#64748b', // Lighter slate for secondary text
          border: '#e2e8f0',
          footerBg: '#0f172a',  // Deep, premium slate for footer
          footerBorder: '#1e293b'
        },
      }
    },
  },
  plugins: [],
}
