// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // O nome do seu repositório: Jaguaribe_Decor
  base: '/Jaguaribe_Decor/', 
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});