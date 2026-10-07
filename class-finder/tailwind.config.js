/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary accent (USTED maroon). Change here to re-theme the app.
        brand: {
          DEFAULT: "#8a1538",
          dark: "#6e102d",
          light: "#fbeef2",
        },
      },
    },
  },
  plugins: [],
};
