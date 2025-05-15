/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF9D',
        secondary: '#FF00FF',
        background: '#0A0A0A',
        surface: '#1A1A1A',
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
        },
        accent: {
          blue: '#00FFFF',
          purple: '#9D00FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 