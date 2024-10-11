/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient":
          "linear-gradient(rgb(255, 255, 255), rgb(173, 173, 173))",
        "white-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
        "green-gradient": "linear-gradient(270deg, #5CD2B93D 0%, #151515 80%)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        inter: ['"Inter", sans-serif'],
      },
      colors: {
        "light-green": "rgb(92, 210, 185)",
      },
    },
  },
  plugins: [],
};
