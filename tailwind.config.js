/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#FF4DA6',
        brandDark: '#0b0b0b',
        brandLight: '#ffffff'
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(135deg,#0b0b0b 0%, #131313 40%, #3b0b2e 100%)',
        'pink-gradient': 'linear-gradient(90deg,#ff4da6 0%, #ff8ccf 100%)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: [],
};
