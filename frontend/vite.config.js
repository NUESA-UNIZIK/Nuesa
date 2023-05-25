import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/posts': 'http://localhost:8000',
      "/users/register":'http://localhost:8000',
      "/users/login":'http://localhost:8000',
    }
  }

})
