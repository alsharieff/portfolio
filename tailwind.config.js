/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Fonts
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Sora", "sans-serif"],
      },

      // Keyframes
      keyframes: {
        scrollArrow: {
          "0%": { transform: "translateX(0)", opacity: "0.4" },
          "50%": { transform: "translateX(8px)", opacity: "1" },
          "100%": { transform: "translateX(0)", opacity: "0.4" },
        },
        scrollSkills: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // scroll left by half, then repeat
        },
      },

      // Animations
      animation: {
        scrollArrow: "scrollArrow 1.2s ease-in-out infinite",
        scrollSkills: "scrollSkills 20s linear infinite", // continuous scrolling
      },
    },
  },
  plugins: [],
};
