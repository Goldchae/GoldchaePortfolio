# 1단계: React 애플리케이션 빌드
FROM node:18-alpine as build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 코드 복사 및 애플리케이션 빌드
COPY . .
RUN npm run build

# 2단계: Nginx로 빌드된 파일 제공
FROM nginx:alpine

# 빌드된 파일을 Nginx의 html 디렉토리로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# public 폴더에 있는 정적 파일을 Nginx 디렉토리로 복사
COPY --from=build /app/public /usr/share/nginx/html

# 포트 80 노출
EXPOSE 80

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
