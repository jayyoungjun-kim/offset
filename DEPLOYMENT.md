# OFFSET 배포 흐름

## 환경

- QA: <https://qa.offset.quest>
- 운영: <https://offset.quest>

## 수정과 배포 순서

1. 모든 수정은 `qa` 브랜치에서 시작한다.
2. 수정 후 빌드와 테스트를 통과시킨다.
3. 검증된 소스를 QA 서버에 배포하고 QA URL에서 확인한다.
4. 확인이 끝나면 `qa` 브랜치에서 `main` 브랜치로 Pull Request를 만든다.
5. Pull Request의 QA Checks가 통과한 뒤 `main`에 병합한다.
6. `main`에 병합되면 GitHub Pages가 자동으로 운영 사이트 `offset.quest`를 배포한다.

`main` 브랜치에서 직접 수정하지 않는다. QA 승인 전에는 `main`으로 병합하지 않는다.
