import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: './',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // 함수로 호출
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 80,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
