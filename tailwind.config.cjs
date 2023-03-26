/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#ff7fd0",
          
 "secondary": "#ca30db",
          
 "accent": "#bf3d4c",
          
 "neutral": "#271528",
          
 "base-100": "#E7E7E9",
          
 "info": "#6B9BD6",
          
 "success": "#1DA56A",
          
 "warning": "#99770B",
          
 "error": "#EA2A4A",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
