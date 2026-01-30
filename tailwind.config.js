/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollArrow: {
          "0%": {
            transform: "translateX(0)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateX(8px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "0.4",
          },
        },
      },
      animation: {
        scrollArrow: "scrollArrow 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
