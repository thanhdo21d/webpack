import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import sass from 'sass'
  // status = 0 : null , 1 : xanh , 2 : đỏ , 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3638
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      style: `${path.resolve(__dirname, './src/style/')}`,
      constants: `${path.resolve(__dirname, './src/constants/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`
    }
  }
})
