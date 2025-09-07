import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AI theme colors (blue/white/black)
        primary: {
          DEFAULT: "#3B82F6", // blue
          dark: "#1E40AF",
          light: "#60A5FA",
        },
        background: "#0f172a", // slate-900
        foreground: "#f8fafc", // slate-50
      },
    },
  },
  plugins: [],
}

export default config
