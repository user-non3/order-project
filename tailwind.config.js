/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        "main-blue": "#193976",
        "text-bg-main": "#454545",
        "color-about": "#808080",
        "grid-color": "#f3f5f8",
        "missions-color": "#8C9CBA",
        "placeholder-color": "#12336f",
      },
      backgroundImage: {
        "text-section": "url('../assets/test.jpg')",
        "main-image": "url('../assets/bg_main.png')",
      },
    },
  },
  plugins: [],
};
