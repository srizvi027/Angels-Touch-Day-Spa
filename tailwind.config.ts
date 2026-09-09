import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8C1C5",
        secondary: "#F7EBDD",
        accent: "#BFA06A",
        background: "#FFFCF8",
        text: "#403536",
        espresso: "#403536",
        cocoa: "#BFA06A",
        taupe: "#E8C1C5",
        mauve: "#E8C1C5",
        cream: "#F7EBDD",
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
