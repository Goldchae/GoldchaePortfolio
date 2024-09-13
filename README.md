#  💼 Goldchae Portfolio 💼
내 포트폴리오 웹사이트 제작하기 

---
## 📋 Project Architecture
![프로젝트 아키텍처](./readmeFile/projectArchitecture.png)

| 설명           | 스택             |
|--------------|----------------|
| 패키지 관리 도구    | npm            |
| 런타임 환경       | Node.js        |
| 번들러          | Vite           |
| 프레임워크 부문     | React          |
| 개발 언어 부문     | Typescript     |
| 메타 프레임워크부문   | Next.js        |
| CSS-in-JS    | Emotion        |
| 유틸리티 CSS     | TailwindCSS    |
| 애니메이션 라이브러리  | Framer Motion  |
| 3D 그래픽 라이브러리 | Three.js       |
| 코드 포맷터       | Prettier       |
| 코드 품질 관리 도구  | ESLint         |
| 테스트 도구       | Jest           |
| CI/CD 부문     | GitHub Actions |
| 서버 부문        | AWS EC2        |
| 컨테이너화 부문     | Docker         |


### 1차 업데이트 계획 - Kubernetes 도입
| 설명           | 스택             |
|--------------|----------------|
|컨테이너 오케스트레이션 도구 | Kubernetes|

### 2차 업데이트 계획 - 챗봇 도입
| 설명           | 스택             |
|--------------|----------------|
|API 개발용 웹 프레임워크 | FastAPI|
|LLM 활용 프레임워크 | Langchain|
|인공지능 API 서비스 | OpenAI API|
---
## 📋 Convention

### git flow 
- main: 서비스을 직접 배포하는 역할을 하는 브랜치
- dev(개발):  feature에서 개발된 내용을 가지고 있는 브랜치 (1인개발 생략)
- feature(기능):각 기능 별 개발  브랜치 ( feature/#[Issue 번호])
- release(배포):  배포를 하기 전 내용을 QA(품질 검사) 하기 위한 브랜치 (??)
- fix(고치기):  main 브랜치로 배포를 하고 나서 버그가 생겼을 때 고치기 위한  브랜치 ( fix/#[Issue 번호])
- refactor(리팩토링):  리팩토링을 위한 브랜치 ( refactor/#[Issue 번호])

### Commit Convention

| Commit Type | Description           |
| ----------- | --------------------- |
|Feat	|새로운 기능 추가|
|Fix	|버그 수정|
|Docs	|문서 수정|
|Style	|코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우|
|Init	|초기 생성|
|Refactor	|코드 리팩토링|
|Test	|테스트 코드, 리팩토링 테스트 코드 추가|
|Chore	|패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore|
|Design	|CSS 등 사용자 UI 디자인 변경|
|Comment	|필요한 주석 추가 및 변경|
|Rename	|파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우|
|Remove	|파일을 삭제하는 작업만 수행한 경우|

### PR Convention

| Icon          | 사용법                 | Description                      |
|---------------|---------------------| -------------------------------- |
| 🎨 Design     | `:art`              | UI/스타일 파일 추가/수정         |
| ✨ Feature     | `:sparkles`         | 새로운 기능 도입                 |
| 🔥 Fix        | `:fire`             | 버그 수정                        |
| ✅ Test        | `:white_check_mark` | 로직 및 코드 테스트              |
| ♻️ Refactoring | `:recycle`          | 코드 리팩토링                    |
| 📘 Docs       | `:blue_book`        | Feature 이외에 문서 생성 및 수정 
| ⚡️  Opti       |:zap	|성능 개선|
| 🔥Delete      |:fire|	코드/파일 삭제|
| 🐛Bug         |:bug	|버그 수정|
| ⏪Rewind       |:rewind|	변경 내용 되돌리기|
| 🔀Merge       |:twisted_rightwards_arrows	|브랜치 합병|
| 💡Desc        |:bulb	|주석 추가/수정|

### Issue Convention
```angular2html
---
name: 이슈 템플릿
about: 해당 이슈 템플릿을 사용하여 이슈를 생성해주세요!
title: ''
labels: ''
assignees: ''

---

## 🛠 Issue
<!— 이슈에 대해 간략하게 설명해주세요(글, 사진) —>
-

## 📝 To-do
<!— 진행할 작업에 대해 자세히 적어주세요 —>
- [ ]
```
### PR Convention
```angular2html
## 🔍 What is the PR?
<!-- PR 내용을 리스트로 작성-->

## 📸 Screenshot
<!-- 작업한 화면의 스크린 샷 -->


## 🙏 To Reviewers
<!-- 리뷰어에게 주목했으면 하는 점 or 바라는 점 -->


## ✅ Check List
- [ ]  Merge 하는 브랜치가 올바른가?
- [ ]  코딩 컨벤션을 준수하는가?
- [ ]  PR과 관련없는 변경사항이 없는가?
- [ ]  내 코드에 대한 자기 검토가 되었는가?


## 💭 Related Issues
<!-- 작업한 이슈번호를 # 뒤에 붙여주세요. -->
- Resolved: #3
```
---
## 📋 Design
### font

### color