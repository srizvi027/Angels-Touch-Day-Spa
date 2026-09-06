import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#8A6B51",
        cocoa: "#937761",
        taupe: "#BFA490",
        mauve: "#B19D8D",
        cream: "#F8EDE2",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        garamond: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        floatPetal: {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(40px) rotate(220deg)", opacity: "0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        ripple: "ripple 2.4s ease-out infinite",
        floatPetal: "floatPetal 9s linear infinite",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
