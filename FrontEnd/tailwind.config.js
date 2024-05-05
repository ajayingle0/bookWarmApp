/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';
import { Form } from 'react-router-dom'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // darkMode: "class",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}