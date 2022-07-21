/*
 * @Description: 
 * @Date: 2022-07-21 23:59:19
 * @LastEditors: siwenfeng
 * @LastEditTime: 2022-07-22 00:07:27
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsxPlugin from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsxPlugin()]
})
