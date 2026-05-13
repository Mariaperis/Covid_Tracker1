import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'
=======
import svgr from 'vite-plugin-svgr'
>>>>>>> 7b91c586918c81ae7d95dd617e0ba3e779e121a8

// https://vite.dev/config/

export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()],
=======
  plugins: [react(), svgr()],
>>>>>>> 7b91c586918c81ae7d95dd617e0ba3e779e121a8
})
