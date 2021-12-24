module.exports = {
  purge: [
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.jsx',
    './pages/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      blue: {
        lighter: 'rgba(0, 122, 255, 0.08)',
        default: 'rgb(0, 122, 255)',
      },
      navy: {
        lighter: 'rgba(5, 41, 74, 0.5)',
        default: 'rgba(5, 41, 74, 1)',
        dark: '#06294A',
      },
      red: 'rgb(254, 86, 91)',
      green: 'rgb(24, 193, 132)',
      snow: {
        lighter: '#F7F9FA',
        default: '#EEEFF1',
        dark: '#E5E5E5',
      },
    },
    fontFamily: {
      averta: 'Averta',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [],
};

// Navy : #05294A
// Red : #FE565B
// Green : #18C184
// Blue : #007AFF
