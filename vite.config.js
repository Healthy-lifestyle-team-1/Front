import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import postcssImport from 'postcss-import';
// import postcssNested from 'postcss-nested';
// import autoprefixer from 'autoprefixer';
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/assets/styles/variables.scss";`
  //     }
  //   },
  //   postcss: {
  //     plugins: [
  //       postcssImport,
  //       postcssNested,
  //       autoprefixer
  //     ]
  //   }
  // },
  // resolve: {
  //   alias: {
  //     // eslint-disable-next-line no-undef
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
});
