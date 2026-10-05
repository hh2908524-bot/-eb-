/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chili: {
          DEFAULT: '#C92A2A',
          hover: '#A61E1E',
          dark: '#8C1818',
          light: '#E03131',
          soft: '#FEE2E2',
        },
        cheddar: {
          DEFAULT: '#FBC02D',
          hover: '#F59E0B',
          soft: '#FEF3C7',
          warm: '#F59F00',
        },
        cream: {
          DEFAULT: '#FDF5E6',
          50: '#FFFCF7',
          100: '#FAF6EE',
          200: '#F5EDE0',
          300: '#EBDDC9',
          card: '#FBF6EE',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
          dark: '#1C1C1C',
          footer: '#1A1A1A',
          pure: '#121212',
        }
      },
      fontFamily: {
        // High-impact condensed uppercase heading font with 100% Vietnamese diacritics support
        heading: ['"Oswald"', '"Barlow Condensed"', '"Montserrat"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"Montserrat"', '"Be Vietnam Pro"', 'sans-serif'],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        handwriting: ['"Playpen Sans"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 44, 44, 0.06), 0 2px 6px -1px rgba(44, 44, 44, 0.04)',
        'card': '0 10px 30px -5px rgba(44, 44, 44, 0.08), 0 4px 10px -2px rgba(44, 44, 44, 0.04)',
        'lift': '0 20px 35px -10px rgba(201, 42, 42, 0.15), 0 8px 16px -4px rgba(44, 44, 44, 0.06)',
      }
    },
  },
  plugins: [],
}
