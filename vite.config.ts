import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7248',  // Your ASP.NET backend URL
        changeOrigin: true,                // Enable this to handle CORS
        secure: false,                     // Set to false if you're using self-signed certificates for HTTPS
        rewrite: (path) => path.replace(/^\/api/, '') // If needed, rewrite the path to match your backend route structure
      }
    }
  }
})
