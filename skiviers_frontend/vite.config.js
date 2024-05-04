import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import vike from 'vike/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve('./src/main.js'),
      },
      output: {
        dir: '../skiviers_backend/static/',
        entryFileNames: 'bundle.js',
        //assetFileNames: 'bundle.css',
      },
    },
  },

  plugins: [vue(), vike()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
