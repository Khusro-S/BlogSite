/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "50%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        // "pulse-100": "pulse 1s infinite",
        // "pulse-150": "pulse 1.5s infinite",
        // "pulse-200": "pulse 2s infinite",
        // "pulse-250": "pulse 2.5s infinite",
        // "pulse-300": "pulse 3s infinite",
        shimmer: "shimmer 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
