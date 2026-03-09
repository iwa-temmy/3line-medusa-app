import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#F9F5FF",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
        },
      },
      fontSize: {
        xs: "11px",
        sm: "13px",
        base: "15px",
        lg: "16px",
        xl: "18px",
        "2xl": "22px",
        "3xl": "26px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
