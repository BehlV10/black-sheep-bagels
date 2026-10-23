/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sheep: {
          dark: '#1e1b18',
          charcoal: '#2d2926',
          cream: '#faf7f2',
          warm: '#f3ece1',
          gold: '#c89243',
          'gold-dark': '#a46f23',
          rust: '#bf532c',
          sage: '#4a6b57'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
