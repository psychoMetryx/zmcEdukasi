import { type Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0369a1',
          accent: '#0d9488',
          background: '#ffffff',
          surface: '#f3f4f6',
          surfaceMuted: '#e5e7eb',
          foreground: '#111827',
          secondary: '#374151',
          muted: '#4b5563',
        },
      },
      fontFamily: {
        brand: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
        '144': '36rem',
      },
    }
  },
  plugins: []
} satisfies Config
