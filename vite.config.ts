import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 설정 파일
export default defineConfig({
    plugins: [
        react({
            // Emotion 사용하는 경우, 자동으로 JSX 프레그먼트를 변환하는 Babel 설정
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',  // src 폴더에 대한 경로를 짧게 사용 가능하도록 설정
        },
    },
    server: {
        port: 3000,  // 개발 서버 포트 설정
    },
    build: {
        outDir: 'dist',  // 빌드 결과물이 저장될 디렉토리
        sourcemap: true,  // 디버깅을 위한 소스맵 활성화
    },
});
