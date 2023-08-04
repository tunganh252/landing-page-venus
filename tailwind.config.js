/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#CE38FF",
        blue: "#01B4FE",
        rose: "#FC779F",
        n90: "#1A1A1A",
        n70: "#3A3A3A",
        n50: "#666666",
        n30: "#999999",
      },

      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
