import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/portals/demo1/',
  plugins: [vue()],
  build:{
    outDir:'../demo1'
  },
})
