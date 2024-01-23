import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'http://43.205.143.51:5000/',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, ''),

      }
    }
  }
})
