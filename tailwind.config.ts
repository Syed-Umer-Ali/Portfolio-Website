import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050f",
        surface: "#0d0d1f",
        surface2: "#12122a",
        primary: "#7c3aed",
        accent: "#00ffff",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        display: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "blink": "blink 1s step-end infinite",
        "spotlight": "spotlight 2s ease 0.75s 1 forwards",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(0,255,255,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(0,255,255,0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
      },
      backgroundImage: {
        "grid-white": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [],
};
export default config;
