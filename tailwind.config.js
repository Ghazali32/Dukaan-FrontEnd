/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2': '0 1px 1px 0 rgb(0 0 0 / 0.2)',
      }

    },
  },
  plugins: [],
}

