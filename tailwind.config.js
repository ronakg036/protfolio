/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        soft: "0 20px 45px -28px rgba(15, 23, 42, 0.55)",
      },
    },
  },
  plugins: [],
}

