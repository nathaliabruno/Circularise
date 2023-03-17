/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#050505",
        grey500: "#8c8c8c",
        grey400: "#bdbdbd",
        grey300: "#e0e0e0",
        grey200: "#f2f2f2",
        grey100: "#f9f9f9",
        blue: "#2f80ed",
        blue8: "#2f80ed08",
      },
      fontSize: { base: "1rem", lg: "1.125rem", xl: "1.5rem", "2xl": "2rem" },
      fontFamily: { karla: "Karla" },
      boxShadow: { dropshadow: "2px 4px 16px 0px rgba(196,196,196,0.3)" },
      borderRadius: {
        none: "0",
        xs: "0.3125rem",
        sm: "1rem",
        default: "1.5rem",
        lg: "5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
