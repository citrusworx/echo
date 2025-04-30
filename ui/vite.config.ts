import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // Allow Docker container external access
    port: 3000,     // Default Vite dev port inside container
    strictPort: true
  }
})
