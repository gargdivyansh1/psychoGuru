import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy:{
  //     '/api' : 'http://localhost:8000'
  //   }
  // },
  base: '/',
  plugins: [react()],
})
