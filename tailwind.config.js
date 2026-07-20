/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#B0217C',
          pinkDark: '#B0217C',
          pinkDeep: '#B0217C',
          gold: '#D4AF37',
          goldLight: '#F6E7A8',
          bg: '#FFF9FC',
          section: '#FFF2F8',
          text: '#2C2C2C',
          textSoft: '#666666',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        card: '0px 15px 35px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}