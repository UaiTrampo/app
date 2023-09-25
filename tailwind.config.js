/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        laranja:"#ff3300",
        laranjaclaro:"#ff7600",
        branco:"#ffffff"
      },
      dropShadow: {
        "dark": "0.10rem 0.10rem .0rem rgba(0, 0, 0, 0.5)",
        "dark1": "1.0rem 0.10rem .1rem rgba(0,0,0,0.1)",
        "dark2": "1.0rem .5rem .5rem rgba(0, 0, 0, 0.5)",
    },
    },
  },
  plugins: [],
}
