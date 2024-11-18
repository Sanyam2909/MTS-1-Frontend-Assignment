// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan app folder for classes
    './components/**/*.{js,ts,jsx,tsx}', // Scan components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        primary: '#1D4ED8', // Customize primary color
        secondary: '#F97316', // Customize secondary color
      },
    },
  },
  plugins: [],
};
