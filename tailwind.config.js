/** @type {import('tailwindcss').Config} */

// tailwind.config.js

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "primary": {
            "50": "#EDFEFE",
            "100": "#D2F9FB",
            "200": "#AAF2F7",
            "300": "#70E5F0",
            "400": "#2ED0E2",
            "500": "#12B3C8",
            "600": "#1290A8",
            "700": "#167488",
            "800": "#1B5E6F",
            "900": "#1B4E5E",
            "950": "#071F27",
        }
      }
    },
  },
  plugins: [],
};


