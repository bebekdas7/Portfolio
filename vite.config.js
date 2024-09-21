import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  }
})
