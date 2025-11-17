/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./detalhe.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
