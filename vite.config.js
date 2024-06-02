import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables";`
      }
    },
    postcss: {
      plugins: [
        postcssImport,
        postcssNested,
        autoprefixer
      ]
    }
  }
});
