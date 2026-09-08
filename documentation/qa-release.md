# QA 배포 기록

2026-09-07

- 환경: https://qa.offset.quest
- 최초 플랫폼 배포: Sites v143, 소스 c9f9604b55f084824185498c9f221d486066bfec
- D1: 초기 스키마와 모집 마감 프로그램 확인.
- 공개 리스트/상세/어드민 미리보기: HTTP 200.
- 미인증 어드민 API: HTTP 401.
- 실제 서버: QA 표시, HTML noindex 메타데이터, X-Robots-Tag, GA 미로딩 확인.
- Google 연결: configured=false. 자격 정보 설정 필요.
- 기존 운영 신청 호환: 기존 호스트+운영 Origin의 OPTIONS가 204임을 확인. 실제 신청이나 메시지는 전송하지 않음.
- 운영 도메인: 기존 GitHub Pages 응답 유지. GitHub main은 변경하지 않음.
- 통합 검사: 15개 통과. 이후 수정에서도 QA 우선 검증.

후속 수정: 정적 robots.txt가 Worker보다 먼저 제공되는 것을 실서버에서 확인하여 동적 라우트로 전환한다. QA에서는 모든 크롤러를 Disallow하고, 운영 환경에서는 기존 규칙을 사용한다.

## 검증 완료 버전

- 최종 QA 배포: Sites v147, 소스 b15d81cac67ed17322446c8bb37b787182dcfba8.
- 배포 성공: 2026-09-07 14:18 KST.
- GitHub Actions: https://github.com/jayyoungjun-kim/offset/actions/runs/34086171936 — 타입 검사, 빌드, 통합 검사 15개 통과.
- 최종 HTTP 확인: 리스트 200 및 noindex, robots.txt 전체 Disallow, 미인증 신청 401.
- Linux 검사 환경의 업로드 조기 응답 문제를 요청 본문 처리 순서로 해결했다.
- Google OAuth 자격 정보와 관리자 이메일 설정은 아직 필요하다.
- 이 배포 기록만 추가한 후속 커밋은 실행 코드 변경이 없어 재배포하지 않는다.

## 상세 원문 및 Pretendard 반영

- 2026-09-07 14:31 KST, Sites v149 배포 성공.
- 실행 소스: 83d1a9e96aa450e4489222b8633250d2ac7f8a98.
- 원티드 wd/331333 배치, Pretendard 로컬 폰트, 워크숍 원문 7개 섹션과 FAQ 9개 반영.
- /workshop과 /programs/portfolio-workshop은 동일 상세 구현.
- 본문 전체 텍스트 보존 및 관리자 변경 반영 포함 16개 검사 통과.
- GitHub 검사: https://github.com/jayyoungjun-kim/offset/actions/runs/34087101845.
- QA HTTP 응답에서 원문 섹션과 FAQ, 실제 WOFF2 폰트 제공 확인.
- 기존 운영 offset.quest 배포는 수행하지 않음.

## 이벤트형 상세 / 블랙 Primary

- 2026-09-07: Sites v150 배포 성공, 소스 8f4df92093cf1eded167fbe392956c0ff6fa482d.
- 참고: https://event.wanted.co.kr/Global_guidebook
- 왼쪽 대표 이미지·본문 / 오른쪽 등록·운영자·멘토 구조. 모바일 단일 열 및 하단 신청.
- Primary #000000, Pretendard 및 원문 7개 섹션 유지.
- CI 16개 검사 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34087896204
- QA 실제 응답에서 새 구조 및 원문 섹션 확인. 운영 도메인 배포는 수행하지 않음.

## 2열 카드 목록 및 상세 완성도 개선

- 2026-09-07, Sites v151, 소스 12cbf9910761050d65d8fa788b7884573f11c4b7.
- 사용자 첨부 원티드 이벤트 카드 배치, 데스크탑 2열/모바일 1열. 상단 소개·필터·하단 장식 문구 제거.
- 실제 최신순·모집 중 우선·낮은 가격순 정렬, 공통 썸네일, 상세 정보 위계와 테두리 정리.
- 기존 원문/권한 검사 16개 및 GitHub CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34096577463
- QA HTTP 응답에서 신규 카드와 기존 소개 제거 확인. 운영 배포 없음.

## 상세 콘텐츠 HTML 에디터

- 2026-09-07, Sites v152 배포 성공, 소스 c4c1f38befc67b8acfbaeddd0431bbb9fdf102d2.
- 관리자 프로그램 편집에 섹션별 HTML 코드, 나란히 보기, 샌드박스 미리보기와 서식 삽입 도구 추가.
- 서버 저장 및 상세 렌더링 시 HTML 정제. 기존 원문 형식도 유지하며 HTML로 전환 가능.
- 저장·재조회·상세 반영·실행 코드 제거·권한 검사를 포함한 17개 검사 통과.
- GitHub CI: https://github.com/jayyoungjun-kim/offset/actions/runs/34100369199
- QA 관리자 미리보기 HTTP 200 확인. 실제 저장에는 Google OAuth 및 관리자 이메일 설정이 필요함.
- 실행 코드가 없는 이 배포 기록 커밋은 별도 재배포하지 않음.

## 상세 섹션 추가·삭제·정렬

- 2026-09-07, Sites v153 배포 성공, 소스 c18aa46b70f0f014db672477c45ef4a641d8c9b1.
- 최대 20개 섹션 추가, 삭제 및 직전 삭제 되돌리기, 마우스·터치 드래그 정렬과 키보드/위·아래 이동 제공.
- 저장된 순서 그대로 상세에 표시하며 모든 섹션을 삭제해도 이전 본문을 복원하지 않음.
- 저장·재조회·순서·삭제·빈 배열 반영 포함 18개 검사 및 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34101319985
- QA 관리자 미리보기 HTTP 200 확인. 미리보기 저장 제한과 Google 관리자 로그인 설정 필요 상태는 유지.

## 오른쪽 패널 타이포그래피·간격

- 2026-09-07, Sites v154 배포 성공, 소스 eec367556d0174cca3fcf415d59e5f627baa5d8c.
- 원티드 Global_guidebook 실제 응답의 스타일 수치 기준으로 제목·일정·신청·운영자·멘토·태그의 글자와 여백 반영. OFFSET 본문과 신청 기능은 보존.
- 모바일 992px 전환과 24/32px 제목, 데스크탑 28/38px 제목 및 360px 패널 반영.
- 빌드 및 18개 기능 검사 통과. CI: https://github.com/jayyoungjun-kim/offset/actions/runs/34101831055
- QA 상세 HTTP 200 확인. 브라우저 픽셀 비교 검사는 수행하지 않음.

## 나란히·미리보기 직접 편집

- 2026-09-07, Sites v156 배포 성공, 소스 1e2a7951eb8618bef5b4ebb7a7de09c54adad76d.
- 미리보기 iframe 본문 직접 편집과 HTML 코드 양방향 동기화. 한글 조합 입력 처리, 붙여넣기 HTML 정제, 링크 이동 차단.
- iframe 스크립트 금지는 유지하며 부모 이벤트 연결을 위해 same-origin만 허용.
- 빌드 및 기존 18개 기능 검사, CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34102351369
- 관리자 미리보기 HTTP 200 확인. 직접 입력에 대한 브라우저 상호작용 검사는 수행하지 않음.

## Recruiting Carnival 오른쪽 패널

- 2026-09-07, Sites v157 배포 성공, 소스 27aec7ecc45e620efbbbaf4ba80cae09e5f6aaf6.
- recruitingGB_2_1 응답 스타일에 따라 직접 신청 영역, 아이콘 일정, 링크 복사, 운영자 설명, 한 줄 멘토 프로필 반영.
- 기존 워크숍 내용 및 모집 상태 유지. 빌드·18개 검사 및 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34102658760
- QA 상세 HTTP 200 확인. 브라우저 픽셀 비교는 수행하지 않음.

## GNB 스타일

- 2026-09-07, Sites v158 배포 성공, 소스 e453b00aa9954e99cf1f4c0df261ee78c68afe88.
- 원티드 이벤트 GNB 기준 60px 높이, 112px 로고, 15/22px 메뉴, 40px 간격, 로그인 테두리 버튼과 모바일 햄버거 메뉴 적용.
- 기존 18개 검사 및 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34102946926
- QA 목록 HTTP 200 확인. 브라우저 상호작용 및 픽셀 비교는 수행하지 않음.

## GNB 너비·좌표 검증 및 보정

- 2026-09-07, Sites v159 배포 성공, 소스 c52e98bdbd49eb39c53dcf7083fe95d443441d4c.
- 화면 고정 40px 여백 대신 90%/1400px 컨테이너, 부모 너비 기준 로고 열, 모바일 56px, 로그인 inset 테두리 및 액션 그룹 정렬.
- QA 배너는 문서 하단으로 이동. 프로그램 검색 및 모바일 메뉴 상호작용 확인.
- 참고 사이트 자동 브라우저 요청은 403이므로 정상 HTTP 응답으로 확보한 HTML/CSS를 스크립트 비활성 브라우저에 렌더링해 비교. 로고·메뉴 이름과 개수는 OFFSET 데이터 유지.
- QA 배포 후 1440/1024/768/390px에서 GNB 컨테이너와 로고 영역 및 로그인 버튼의 x/y/width/height가 참고와 모두 일치(오차 0.02px 미만).
- 1440px: GNB x72/w1296/h60, 메뉴 시작 x229.359375, 로그인 x1157.78125/y14/w113.34375/h32.
- 390px: GNB x0/w390/h56, 로고 영역 x20/y12/w152/h32, 로그인 x212.046875/y12/w73.953125/h32.
- 모바일 메뉴·검색·빈 결과·닫기·가로 넘침 브라우저 검사 통과. 기존 18개 검사 및 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34104130346

## 전체 캔버스·멘토 소개 보정

- 2026-09-07, Sites v160 배포 성공, 소스 f3c54410ad560ba8bbce5629eb6b590a349cff0e.
- 전체 캔버스1080/1400px, 본문/패널650/360px 또는800/500px 및 비율 간격, 상단60/20px, 4:3 대표이미지 반영. 목록2열 유지.
- 오른쪽 OFFSET 문의 카드 제거. Global_guidebook의 이름/소속 프로필 행과 태그 구성 적용, 원문 유지.
- 배포 후1920/1440/1024px에서 본문·패널·대표이미지 x/y/width 모두 원티드 원문 렌더와 일치. 390px 대표이미지 x19.5/y76/width351 일치.
- 참고 자동 브라우저403은 정상 HTTP 원문 HTML/CSS 렌더로 비교. 브라우저 캡처와 좌표 확인.
- 18개 기능 검사 및 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34104846609

## 신청 샘플·마이페이지·4열 목록

- 2026-09-07, Sites v161 배포 성공, 소스 8b211a0a86eb27dba432bdcd5a324c143edc6b4a.
- /admin/preview 가상 신청자5명, 샘플 상태 변경과 해당 /account/preview 회원 화면 연결. 샘플만 브라우저 저장소 사용, 실제 신청/DB/알림 변경 없음.
- 실제 /account는 기존 로그인 및 본인 전용 API를 통해 신청 요약·상태 필터·제출 신청서·회원 정보·문의·로그아웃 제공.
- 데스크탑4열/태블릿2열/작은 모바일1열 목록. 원티드형 정렬 메뉴, 체크표시, Escape/외부 클릭 닫기.
- 배포된 QA에서 샘플 어드민→회원 상태 반영, 신청서 열기, 프로필, 모바일 가로 넘침, 4/2/1열, 정렬 변경 브라우저 검사 통과.
- 기존18개 권한/저장 검사 및 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34128880813
- Google OAuth와 관리자 이메일 설정은 별도로 필요. 상세 설계: member-experience.md.

## 현 운영 푸터 반영

- 2026-09-08, Sites v162 배포 성공, 소스 d55673fc576c8fc6ed99cbc33ba54da56e762db0.
- offset.quest/workshop/ 현 푸터와 동일한 SiteFooter 재사용. 운영자·연락처·사업자 정보 원문 유지.
- 배포 후1440/390px 브라우저에서 운영과 QA의 문구, 배경색, 상하패딩, 글자크기/줄높이, 내부 x/너비 동일함을 확인.
- CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34137165749

## 푸터 정렬·4:3 썸네일·멘토 관리

- 2026-09-08, Sites v163 배포 성공, 소스 eb365c621d48e48f56b789cc965e7afda372b417.
- 목록·상세 푸터 내부를 본문 캔버스와 정렬하고 마이페이지도 해당 본문 너비 적용. 기존 푸터 디자인·문구 유지.
- 목록과 상세 썸네일 모두 4:3. 데스크탑 목록 4열 유지.
- 프로그램 수정에 독립적인 오른쪽 멘토 소개 편집 영역 추가: 이름, 전체 소개, 선택 사진 주소. 서버 저장·검증 지원.
- 전체 멘토 소개 표시, 삭제된 본문 멘토 섹션 바로가기 숨김, 제목 줄바꿈과 섹션 이동 시 고정 메뉴 가림 보정.
- 19개 테스트 및 빌드 통과. 배포된 QA 1920/1440/1024/390px에서 푸터 좌표·너비, 이미지 비율, 가로 넘침, 멘토 이동 및 어드민 입력 검사 통과.
- CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34138364442

## 통 이미지 썸네일·최적화·이미지 보관함

- 2026-09-08, Sites v165 배포 성공, 소스 7183830aeaf423e604f2ee9501667e870aa6564d.
- 리스트·상세는 4:3 통 이미지로 전환, 기존 장식 썸네일은 공란 처리. 이미지 원본 비율과 전체 내용 보존.
- 어드민 업로드·선택·제거 및 이미지 관리 보관함, 사용 프로그램 확인과 미사용 이미지 삭제 추가.
- 브라우저 WebP 최적화(최대1600px/500KiB), MEDIA R2 영구 저장, 권한·용량·형식 검사 적용.
- 데스크탑/모바일 QA에서 공란4:3 및 업로드·압축·선택·제거·보관함 삭제 체험 통과. QA 저장소 조회404와 비회원 관리 접근401 확인.
- 20개 서버 테스트, 타입 검사, 빌드 및 CI 통과. 업로드 거절 시 본문을 제한된 범위에서 정리해 후속 요청 연결 오류 방지.
- CI: https://github.com/jayyoungjun-kim/offset/actions/runs/34139574547
- 실제 운영자 저장에는 기존 Google OAuth/관리자 설정이 필요하며 공개 미리보기는 임시 체험용. 상세 운영 방법은 image-management.md 참고.

## 둥근 리스트 카드 디자인

- 2026-09-08, Sites v166 배포 성공, 소스 76d172709e5a04f9efbcd366513403b4083f5b64.
- 사용자 첨부 이미지의 회색 바탕·흰색 라운드 카드·안쪽 썸네일 여백·회색 안내/검정 제목 위계 적용.
- 기존4/2/1열·4:3 통 이미지·공란 기본값 유지. 일정과 모집 상태는 카드 하단에 배치.
- 로컬 및 배포된 QA1920/1440/768/390px에서 라운드·배경·그리드·비율·가로 넘침 확인, 정렬과 상세 이동 통과.
- 타입/빌드/기존20개 서버 테스트 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34140063816
- 시각 비교 기록: /design-qa.md, 디자인 기준: /design.md.

## 리스트 데스크탑3열

- 2026-09-08, Sites v167 배포 성공, 소스 3f715d87c3da9123d2c427a9b90e76fba278a638.
- 992px 이상3열, 태블릿2열, 작은 모바일1열. 카드 디자인과4:3 썸네일 유지.
- 1920/1440/768/390px 브라우저 그리드·비율·가로 넘침·정렬·상세 이동 검사 통과.
- CI 성공: https://github.com/jayyoungjun-kim/offset/actions/runs/34142493685

## 화이트 배경·모집 라벨·문구 정리

- 2026-09-08, Sites v168 배포 성공, 소스 5fdc5a965df49248e6b2996aceadcddad8ead1e1.
- 화이트 리스트와 얇은 카드 테두리, 모집 마감 회색 라벨.3/2/1열과4:3 썸네일 유지.
- 리스트 카드의 오프라인 및 기수/기간 표시, 상세 오른쪽 멘토 소개 자세히 보기 링크 제거.
- 배포된 QA1440/390px에서 흰색 배경·라벨·문구 제거·가로 넘침 확인, 상세 멘토 소개 본문 유지 확인.
- 타입/빌드/서버 테스트20개 CI 통과: https://github.com/jayyoungjun-kim/offset/actions/runs/34187213163

## 테두리 없는 리스트

- 2026-09-08, Sites v169, 소스 3be5f3a325644c47820d2f441bf119dd7e4a58cd 배포 성공.
- 카드 테두리·바깥 패딩·호버 그림자 제거, 썸네일 아래20px 텍스트 정렬. 흰색 배경·3열·모집 라벨 유지.
- QA1440/390px에서 테두리0·바깥패딩0 및 기존 문구/라벨 검사 통과.
- CI 성공: https://github.com/jayyoungjun-kim/offset/actions/runs/34187387720
