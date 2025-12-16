import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Jaguaribe_Decor/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html',
        detalhe: './detalhe.html',
      }
    }
  },
  server: {
    host: true,
    port: 3000
  }
});