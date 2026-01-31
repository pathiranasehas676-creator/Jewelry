import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0D',
        ivory: '#F7F2EA',
        gold: '#C8A66A',
        rose: '#D9A2A8',
        graphite: '#1B1C20'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(200, 166, 106, 0.2)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
