import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Path manual jika versi flowbite-react kamu belum mendukung modul /tailwind
    "./node_modules/flowbite-react/dist/esm/**/*.mjs",
  ],
  theme: {
    extend: {
      colors: {
        // Tips: Tambahkan warna kayu pinus kustom di sini jika mau
        pinus: {
          light: '#f3e5ab',
          dark: '#d2b48c',
        }
      }
    },
  },
  plugins: [
    flowbitePlugin, // Menggunakan hasil import di baris 1
  ],
  darkMode: "class",
};

export default config;