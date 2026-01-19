# 날씨 앱

## 프로젝트 실행 방법
1. 의존성 설치
2. 환경 변수 설정
프로젝트 루트에 `.env` 파일 생성: env파일안에 VITE_OPENWEATHER_KEY=""본인의 API키 입력""
3. 개발 서버 실행
npm run dev

## 구현한 기능
- **현재 위치 날씨 조회**
  - 최초 진입 시 Geolocation으로 위치를 감지하고 현재 날씨/최저·최고/3시간 예보 표시
- **장소 검색**
  - `korea_districts.json` 기반으로 시/군/구/동 단위 검색
  - 검색 결과 리스트 제공 및 선택 가능
  - 정보 미제공 시 메시지 표시
- **즐겨찾기**
  - 최대 6개 추가/삭제
  - 별칭(이름) 수정
  - 즐겨찾기 카드에 현재/최저/최고 기온 표시
  - 카드 클릭 시 상세 페이지 이동
- **상세 페이지**
  - 선택한 장소의 현재 기온, 최저/최고, 3시간 단위 기온 표시

## 기술적 의사결정 및 이유
- **React + TypeScript**  
  타입 안정성과 유지보수성을 위해 사용
- **FSD(Feature-Sliced Design)**  
  기능 단위 분리로 코드 확장성과 역할 분리를 명확히 하기 위해 적용
- **TanStack Query**  
  서버 상태 관리(캐싱/로딩/에러 처리)를 일관되게 처리하기 위해 사용
- **OpenWeather API**  
  현재/예보 데이터를 제공
- **지역 검색 데이터(JSON) 분리**  
  `public/korea_districts.json`을 활용한 단순한 검색 구현
- **즐겨찾기 로컬스토리지**
  별도 백엔드 없이도 사용자 상태를 유지하기 위해 사용

## 사용한 기술 스택
- **Frontend**: React, TypeScript, Vite
- **State/Data**: TanStack Query
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios

## 기회주셔서 감사합니다. 좋은 하루 되시길 바랍니다.