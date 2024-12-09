/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        backgroundLight: '#1134EE',
        backgroundDark: '#eeeeee',
      },
      fontFamily: {
        navFont: ['var(--font-sofia)'],
        fontAY2: ['Playwrite DE Grund', 'sans'],
      },
    },
  },
  plugins: [],
};
