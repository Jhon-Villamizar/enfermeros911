import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,
    port: 3001,
    watch: {
      usePolling: true,
    }
  },
  build: {
    rollupOptions: {
      input: ['index.html', '404.html'],
      output: {
        manualChunks: undefined,
      },
    },
    ssr: false,
  },
  base: '/enfermeros911/',
})
