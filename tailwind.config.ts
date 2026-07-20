import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        ink: "#12100c",
        beige: "#ece0cb",
        beige2: "#d8c4a0",
        text1: "#f2efe9",
        text2: "#a19c92",
        muted: "#7d786e",
        faint: "#6b675f",
        faint2: "#5c574d",
        faint3: "#38352f",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        orbdrift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(60px,-40px) scale(1.08)" },
          "66%": { transform: "translate(-40px,30px) scale(.94)" },
        },
        orbdrift2: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "40%": { transform: "translate(-70px,50px) scale(1.1)" },
          "70%": { transform: "translate(50px,-30px) scale(.92)" },
        },
        pulseline: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        borderspin: {
          to: { "--ang": "360deg" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        orbdrift: "orbdrift 14s ease-in-out infinite",
        orbdrift2: "orbdrift2 18s ease-in-out infinite",
        pulseline: "pulseline 2.4s ease-in-out infinite",
        "pulseline-fast": "pulseline 1.1s step-end infinite",
        "pulseline-slow": "pulseline 2s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        borderspin7: "borderspin 7s linear infinite",
        borderspin9: "borderspin 9s linear infinite",
        marquee: "marquee 42s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
