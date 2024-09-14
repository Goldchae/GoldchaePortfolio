import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',  // 이 부분을 추가하여 상대 경로 사용
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        port: 3001,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
});
