/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#050505',
        gray: {
          500: '#8c8c8c',
          400: '#bdbdbd',
          300: '#e0e0e0',
          200: '#f2f2f2',
          100: '#f9f9f9',
        },
        blue: '#2f80ed',
        blue8: '#2f80ed08',
      },
      fontSize: { base: '1rem', lg: '1.125rem', xl: '1.5rem', '2xl': '2rem' },
      fontFamily: { karla: 'Karla' },
      boxShadow: { card: '2px 4px 16px 0px rgba(196,196,196,0.3)' },
      borderRadius: {
        none: '0',
        xs: '0.3125rem',
        sm: '1rem',
        default: '1.5rem',
        lg: '5rem',
        full: '9999px',
      },
      transitionProperty: {
        maxHeight: 'max-height',
      },
      transitionTimingFunction: {
        height: 'cubic-bezier(0, 1, 0, 1)',
      },
    },
  },
  plugins: [],
}
