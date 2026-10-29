import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portals/demo1/',
  plugins: [vue()],
  build: {
    outDir: '../demo1',
    target: 'es2018',          // 面向现代浏览器，产出更小
    cssCodeSplit: true,        // CSS 按路由拆分，按需加载
    reportCompressedSize: false, // 跳过 gzip 体积统计，加快打包
    chunkSizeWarningLimit: 600,
  },
})
