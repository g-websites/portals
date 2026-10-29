import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/portals/deploy/',
  plugins: [vue()],
  build:{
    outDir:'../deploy'
  },
})
