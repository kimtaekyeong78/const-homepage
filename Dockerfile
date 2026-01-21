FROM node:18-alpine

WORKDIR /app

# package.json과 lock 파일 복사
COPY package*.json ./

# 프로덕션 의존성만 설치
RUN npm ci --only=production

# 빌드된 파일과 서버 파일 복사
COPY dist ./dist
COPY server.js ./

# 포트 노출
EXPOSE 3000

# 서버 실행
CMD ["node", "server.js"]
