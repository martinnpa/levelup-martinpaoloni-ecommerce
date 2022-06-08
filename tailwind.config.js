const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#fff',
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
          on: 'var(--color-primary-on)',
        },
        secundary: {
          DEFAULT: 'var(--color-secundary)',
          alt: 'var(--color-secundary-alt)',
          lilac: 'var(--color-secundary-lilac)'
        },
        grey: {
          DEFAULT: 'var(--color-grey)',
          1: '#444',
          2: '#8d8d8d',
        },
        warning: 'var(--color-warning)',
        alert: 'var(--color-alert)',
        success: 'var(--color-success)'
      },
      fontSize: {
        '1em': '1em',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['disabled'],
      backgroundColor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
