import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import vitePugPlugin from 'vite-plugin-pug-transformer';

const rootDir = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

const inject = {
  data: {
    appTitle: 'App Title',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir,
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
      },
    },
  },
  plugins: [vue(), createHtmlPlugin({ inject }), vitePugPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  root: rootDir,
  server: {
    port: 4000,
  },
});
