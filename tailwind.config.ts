import type { Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [aspectRatio],
} satisfies Config
