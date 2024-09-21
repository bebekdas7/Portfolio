import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',           // Bind to 0.0.0.0 for external access
    port: process.env.PORT || 3000  // Use the PORT environment variable or default to 3000
  }
})
