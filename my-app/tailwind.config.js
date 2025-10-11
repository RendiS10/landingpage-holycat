/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Definisi warna berdasarkan --root-variables dari style.css
    colors: {
      "primary-green": "#44af7c",
      "primary-yellow": "#ffbf00",
      "text-dark": "#2b2b2b",
      white: "#ffffff",
      "light-green": "#e8f5ef",
      "light-yellow": "#fff8e1",
      // Tambahkan warna lain yang dibutuhkan (misalnya untuk WhatsApp)
      whatsapp: "#25d366",
      "whatsapp-hover": "#1ebe5b",
      "heart-red": "#ff6b6b",
      "instagram-pink": "#e4405f",
      "facebook-blue": "#3b5998",
      black: "#000",
    },
    extend: {
      // Definisi font berdasarkan style.css
      fontFamily: {
        heading: ['"Lilita One"', "cursive"],
        body: ["Dongle", "sans-serif"],
      },
      // Breakpoints responsif berdasarkan responsive.css (mobile-first)
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px", // Default
        xl: "1280px", // Default
      },
      // Utilitas kustom lain (misal untuk lebar logo)
      spacing: {
        "75px": "75px",
        "96px": "96px",
      },
    },
  },
  plugins: [],
};
