/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./formkit.theme.ts" 
  ],
  

  theme: {
    extend: {
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        sliding: {
          '0%': { transform: 'translate-x-0' },
          '50%': { transform: 'translate-x-2' },
          '100%': { transform: 'translate-x-full' },
        }
      },
      animation: {
        sliding: 'sliding 1s ease-in-out infinite',
      },
      
    // --color-whitePrimary: #FDFCFA;
    // --color-whiteSecondary: #F3F1EF;
    
    // --color-lightYellow: #FFD200;
    // --color-darkYellow: #FFD200;

      textColor: {
        lightYellow: "var(--color-lightYellow)",
        darkYellow: "var(--color-darkYellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
         },
      gradientColorStops:{
        

        lightYellow: "var(--color-lightYellow)",
        darkYellow: "var(--color-darkYellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      },
      backgroundColor: {
        

        lightYellow: "var(--color-lightYellow)",
        darkYellow: "var(--color-darkYellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      },
      borderColor:{
        

        lightYellow: "var(--color-lightYellow)",
        darkYellow: "var(--color-darkYellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      },
      ringColor:{
        

        lightYellow: "var(--color-lightYellow)",
        darkYellow: "var(--color-darkYellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      }
    },
  },
  plugins: [],
};
