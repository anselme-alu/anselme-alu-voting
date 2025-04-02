const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|input|navbar|toast|ripple|spinner|form).js"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [heroui(), require("@tailwindcss/typography")],
}
