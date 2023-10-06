/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}