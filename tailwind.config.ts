import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette: classy red + white with brown accent
        brand: {
          red: '#B0182B',        // primary red
          'red-dark': '#7A0F1D', // hover/dark variant
          'red-soft': '#E8C2C7', // tinted backgrounds
          cream: '#FAF7F2',      // off-white surfaces
          ink: '#1A1414',        // near-black for headings
          brown: '#6B4226',      // warm wood accent
          'brown-light': '#A9764F',
          'brown-soft': '#F1E6D9',
          gold: '#C9A227'        // optional luxury accent
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(26, 20, 20, 0.08)',
        'red-glow': '0 8px 30px rgba(176, 24, 43, 0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,20,20,0.85) 0%, rgba(122,15,29,0.75) 100%)',
        'subtle-red': 'linear-gradient(180deg, #FFFFFF 0%, #FAF0F1 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
