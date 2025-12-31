/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#050a15',
          light: '#f8fafc',
        },
        accent: {
          cyan: '#00f2ff',
          red: '#ff2e4d',
        }
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
