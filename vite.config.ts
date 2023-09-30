import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default () => {
  return defineConfig({
    plugins: [
      vue(),
      vueJsx()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src'),
        packages: resolve(__dirname, '../packages')
      }
    }
  })
}

