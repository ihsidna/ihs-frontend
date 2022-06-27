/** @type {autoprefixer | ((options?: autoprefixer.Options) => (Plugin & autoprefixer.ExportedAPI)) | ((browsers: string[], options?: autoprefixer.Options) => (Plugin & autoprefixer.ExportedAPI)) | (<T extends string[]>(...args: [...T, autoprefixer.Options]) => (Plugin & autoprefixer.ExportedAPI))} */
const autoprefixer = require("autoprefixer");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
     colors:{
       'ihs-green': "#05afb0",
       'ihs-green-shade': {
          50: "#e6f7f7",
          100: "#cdefef",
          200: "#b4e7e7",
          300: "#9bdfdf",
          400: "#82d7d8",
          500: "#69cfd0",
          600: "#50c7c8",
          700: "#37bfc0",
          800: "#1eb7b8",
       },
       'ihs-blue': "#0070b5",
       'ihs-blue-shade': {
         50: "#e6f1f8",
         100: "#cce2f0",
         200: "#b3d4e9",
         300: "#99c6e1",
         400: "#80b8da",
         500: "#66a9d3",
         600: "#4d9bcb",
         700: "#338dc4",
         800: "#1a7ebc",
       },
     }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}
