import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ must be set to "class"
  content: [
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
