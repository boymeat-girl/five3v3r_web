/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      pink: "#ff2a84",
      yellow: "#fcb727",
      purple: "#a11cf1",
      black: "#090001",
      grey: "#1a1e19",
      white: "#fdffff",
    },
    fontFamily: {
      sans: ["roboto"],
    },
  },
  plugins: [],
};
