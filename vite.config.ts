/*
 * @Description: 
 * @Date: 2022-07-21 23:59:19
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-07-22 10:39:07
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsxPlugin from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsxPlugin()],
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
      "@/style": "/src/style",
    }
  }
})
