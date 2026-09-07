# OFFSET QA 우선 배포

## 환경

| 구분 | 주소 | 역할 |
|---|---|---|
| QA | https://qa.offset.quest | 현재 리뉴얼의 검증 환경, Sites Worker + QA D1 |
| 운영 | https://offset.quest | 기존 GitHub Pages 사이트, 완성 전까지 유지 |

현재 `.openai/hosting.json`은 QA 프로젝트만 가리킨다. 새 QA 서버를 중복 생성하거나 운영 배포에 이 프로젝트를 재사용하지 않는다. 도메인과 SSL은 기존 연결을 유지한다.

## 일상 작업

1. `qa` 브랜치에서 수정한다.
2. `pnpm typecheck`, `pnpm build`, `pnpm test:platform`을 실행한다.
3. 검증된 소스를 QA용 Sites 소스 저장소에 저장한다.
4. 동일 소스의 빌드와 `drizzle` 마이그레이션으로 버전을 저장한다.
5. 그 버전을 현재 QA 환경에 배포하고 배포 성공을 확인한다.
6. QA URL에서 목록, 상세, 관리자 차단, Google 연결 상태를 확인한다.

GitHub `qa` push의 QA Checks는 검사만 수행한다. 서버 배포는 Sites에서 검증된 버전을 선택해 수행한다. 자동 운영 배포는 비활성화했으며 main 병합만으로 운영을 교체하지 않는다.

## QA 전용 설정

- `SITE_ENV=qa`: QA 표시, 검색 엔진 noindex, 운영 GA 및 상담 위젯 비활성화.
- `AUTH_ORIGIN=https://qa.offset.quest`: Google callback은 `https://qa.offset.quest/api/auth/callback`.
- `DB`: 이 QA 프로젝트에 연결된 D1. 운영 전환 시 별도의 운영 DB를 생성하고 실사용 정보를 QA에 복제하지 않는다.
- Google OAuth 자격 정보와 `ADMIN_EMAILS`는 별도 설정 전까지 로그인 준비 상태로 유지한다.
- 프로그램 초기값은 실제 1기 모집 마감. 신규 모집이나 테스트 개인정보 접수는 운영 정책을 확인한 후 실시한다.

QA 사이트는 현재 공개 접근 방식이므로 URL을 아는 사람은 공개 화면과 읽기 전용 어드민 미리보기를 볼 수 있다. 실제 운영 API는 Google 회원/관리자 권한 검사를 통과해야 한다. noindex는 접근 통제가 아니다.

## 기존 운영 신청 API 호환

기존 정적 운영 사이트는 `portfolio-workshop-1.jayyoungjunkim.chatgpt.site/api/applications`를 호출한다. 이 호스트와 `Origin: https://offset.quest`가 모두 일치하는 요청만 기존 Apps Script 처리로 연결한다. QA 호스트의 요청은 새 로그인 기반 D1 신청만 사용한다. 기존 환경의 Apps Script 비밀 값은 보존한다. 이 예외는 기존 운영 기능을 보존하기 위한 임시 호환이며 권한을 새로 부여하는 기능이 아니다.

## 운영 출시 조건

- 사용자와 QA 검토를 마치고 운영 출시를 명시적으로 결정한다.
- 별도의 운영 Worker/Sites 프로젝트, DB, 비밀 값과 Google callback을 준비한다.
- 실제 로그인, 관리자/회원 권한, 모바일/데스크탑, 개인정보 및 결제 안내를 검증한다.
- QA 테스트 계정과 신청 데이터를 운영으로 복사하지 않는다.
- 확인한 버전으로 운영 도메인을 연결하고 정상 동작 확인 후 구형 호환 API를 종료한다.

## 롤백

QA 문제 발생 시 직전 성공한 Sites 버전을 선택하여 QA에 재배포한다. 데이터 스키마는 자동으로 이전 상태로 되돌리지 않는다. 이 초기 릴리스의 마이그레이션은 새 테이블 추가와 초기 프로그램 삽입이며, 이후 파괴적 변경은 별도 백업/복구 계획이 필요하다. 운영 사이트 롤백과 QA 롤백은 별개다.
