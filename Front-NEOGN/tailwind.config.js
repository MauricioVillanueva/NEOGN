/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      "general-sans": ["General Sans", "sans-serif"],
      "maven-pro": ["Maven Pro", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      exo: ["EXO", "sans-serif"],
      bakbak: ["Bakbak One", "sans-serif"],
    },
    extend: {
      spacing: {
        "backface-hidden": "backface-visibility: hidden;",
      },
      backgroundColor: {
        card: "#FDF0F2",
        confirmed: "#27202E",
        preparing: "#352701",
        shipped: "#002731",
        delivered: "#293212",
        inactive: "#F7BBC5",
        darkInactive: "#F7BBC5",
        heroColor: "#E54660",
        backDrop: "#000000e1",
        heroButton: "#DF102E",
        darkHero: "#820018",
        darkCard: "#1D2430",
      },
      textColor: {
        confirmed: "#B28CCF",
        preparing: "#FFC300",
        shipped: "#00BFF5",
        delivered: "#CDFD54",
        inactive: "#E54660",
        heroColor: "#E54660",
        darkHero: "#820018",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        card: "#F6EAEC",
        category: "#FFE5E9",
      },
    },
  },
  plugins: [],
};