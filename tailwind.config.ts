import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Matrix green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        matrix: {
          light: '#4ade80',
          DEFAULT: '#22c55e',
          dark: '#15803d',
          black: '#0a0f0d',
        },
      },
      backgroundImage: {
        'matrix-gradient': 'linear-gradient(180deg, rgba(34,197,94,0.15) 0%, rgba(21,128,61,0.05) 100%)',
        'matrix-glow': 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(10,15,13,0) 70%)',
      },
      animation: {
        'matrix-flow': 'matrixFlow 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        matrixFlow: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      fontFamily: {
        'matrix': ['Courier New', 'monospace'],
      },
      boxShadow: {
        'matrix': '0 0 15px rgba(34,197,94,0.3)',
        'matrix-hover': '0 0 25px rgba(34,197,94,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
