/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#a18cd1',
        pinky: '#fbc2eb',
      },
      keyframes: {
        profile: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 0% 40%',
          },
        },
      },
      animation: {
        profile: 'profile 5s ease-in-out infinite', // Adjust duration and timing function as needed
      },
    },
  },
  plugins: [],
}