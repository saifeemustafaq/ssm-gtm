/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0F19',
        graphite: '#1A1A1A',
        slate: '#1E293B',
        fog: '#E2E8F0',
        ash: '#94A3B8',
        amethyst: '#8B5CF6',
        'deep-amethyst': '#6D28D9',
        emerald: '#10B981',
        'deep-emerald': '#047857',
        'icy-teal': '#67E8F9',
        'rose-quartz': '#F472B6',
        'neon-lime': '#A3E635',
        'silver-mist': '#F1F5F9',
      },
    },
  },
  plugins: [],
} 