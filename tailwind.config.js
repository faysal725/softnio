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
      textColor: {
        yellow: "var(--color-yellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
         },
      gradientColorStops:{
        
        yellow: "var(--color-yellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      },
      backgroundColor: {
        
        yellow: "var(--color-yellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      },
      borderColor:{
        
        yellow: "var(--color-yellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      },
      ringColor:{
        
        yellow: "var(--color-yellow)",
        darkGrey: "var(--color-darkGrey)",
        lightIndigo: "var(--color-lightIndigo)",
        lightGrey: "var(--color-lightGrey)",
        
      }
    },
  },
  plugins: [],
};
