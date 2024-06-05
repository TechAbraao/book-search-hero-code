/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // O 'content' significa que, arquivos dessas determinadas extensões, serão afetados pelo TailwindCSS.
   theme: {
      extend: {
         colors: { // Em 'colors' é onde terá as cores disponíveis através do TailwindCSS.            BS-yellow: "#E6C32F",
            BScustomColor1: "#E8E7D5",
            BScustomColor2: "#E6C32F",
            BScustomColor3: "#E0DDA3",
            BScustomColor4: "#0A1E33",
            BScustomColor5: "#455A64",
         },
         maxWidth: {
            "1920" : "1920px",
            "320" : "320px",
         },
         heightAll: {
            "headerHeight" : "77.222vh"
         }
      },
   },
   plugins: [],
};
