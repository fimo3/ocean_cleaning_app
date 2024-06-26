/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#C2EFEB",
      secondary: "#007AB8",
      "primary-hover": "#ECFEE8",
      "secondary-hover": "#00527A",
      bluey: "#85D6FF",
      "bluey-hover": "#5D95B2",
      "default-text": "#ffffff",
      black: "#000000",
      red: "#ff3d3d",
      "red-hover": "#a32727",
    },
    extend: {
      backgroundImage: {
        "background-one": "url('/public/kostenurka.png')",
      },
    },
  },
  plugins: [],
};
