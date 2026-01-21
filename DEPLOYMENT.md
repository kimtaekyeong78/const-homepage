# 가비아 컨테이너 호스팅 배포 가이드

## 1. 로컬에서 준비

```bash
# Express 설치
npm install express

# 프로젝트 빌드
npm run build
```

## 2. Docker 이미지 빌드

```bash
# 이미지 빌드
docker build -t const-homepage .

# 로컬 테스트 (선택사항)
docker run -p 3000:3000 const-homepage
```

## 3. 가비아 컨테이너 호스팅 배포

### 방법 1: Docker Hub를 통한 배포

```bash
# Docker Hub 로그인
docker login

# 이미지 태깅
docker tag const-homepage YOUR_DOCKERHUB_USERNAME/const-homepage:latest

# 이미지 푸시
docker push YOUR_DOCKERHUB_USERNAME/const-homepage:latest
```

가비아 관리콘솔에서:

- 컨테이너 생성
- 이미지: `YOUR_DOCKERHUB_USERNAME/const-homepage:latest`
- 포트: 3000
- 환경변수: `PORT=3000`

### 방법 2: 파일 직접 업로드

FTP/SFTP로 다음 파일들 업로드:

- `dist/` 폴더 전체
- `server.js`
- `package.json`

서버에서 실행:

```bash
npm install --only=production
npm start
```

## 4. 환경 설정

가비아 관리콘솔에서:

- **포트 매핑**: 컨테이너 3000 → 외부 포트
- **도메인 연결**: 원하는 도메인과 연결
- **SSL 인증서**: 필요시 Let's Encrypt 설정

## 5. 주의사항

- `dist` 폴더가 최신 상태인지 확인 (`npm run build` 실행)
- Node.js 버전 18 이상 권장
- 메모리: 최소 512MB 권장
