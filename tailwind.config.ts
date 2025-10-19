import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C22BD',
          dark: '#4A1681',
          light: '#8F44E3',
        },
        secondary: {
          DEFAULT: '#FF3366',
          dark: '#CC295F',
          light: '#FF668C',
        },
        space: {
          dark: '#0B0B1E',
          DEFAULT: '#151531',
          light: '#1F1F4B',
        },
        neon: {
          pink: '#FF00FF',
          blue: '#00FFFF',
          purple: '#9D00FF',
        },
      },
      fontFamily: {
        pixel: ['Press Start 2P', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pixel-bounce': 'pixel-bounce 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pixel-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-pattern': 'url("/images/space-pattern.png")',
      },
    },
  },
  plugins: [],
}

export default config