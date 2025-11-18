// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // AQUI VAI O NOME DO SEU REPOSITÓRIO NO GITHUB (entre barras)
  // Exemplo: se seu repo é 'projeto-loja', fica base: '/projeto-loja/'
  base: '/Jaguaribe_Decor/', 
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});