import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite React + TS
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",   // example custom color
        secondary: "#9333ea", // example custom color
      },
    },
  },
  plugins: [],
  darkMode : 'class',
}

export default config
