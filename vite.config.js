import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
  extend: {
    screens: {
        'xs': '375px',       // custom small screen
        'sm': '640px',       // default sm
        'md': '768px',       // default md
        'lg': '1024px',      // default lg
        'xl': '1280px',      // default xl
        '2xl': '1536px',     // default 2xl
      },
    animation: {
      fadeIn: "fadeIn 0.3s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
    },
  },
},

})
