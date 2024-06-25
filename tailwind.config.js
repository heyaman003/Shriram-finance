/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Museo Sans"], // Add "Bebas Neue" to the font family list
      },
      keyframes:{
      rotate: {
       '0%': { transform: 'rotate(0deg)' },
       '100%': { transform: 'rotate(360deg)' }
      },
      counterRotate: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-135deg)' },
      },
    },
    animation: {
      rotate: 'rotate 7s linear infinite',
      counterRotate: 'counterRotate 7s linear infinite',
    },
  },
  },
  plugins: [],
}