---
title: 포트폴리오
date: 2024-01-20 10:00:00
layout: page
---

{% raw %}
# 🚀 개발자 고은의 포트폴리오

안녕하세요! 끊임없이 배우고 성장하는 개발자 **고은**입니다.

## 💻 기술 스택

### Frontend
- **HTML5** / **CSS3** / **JavaScript (ES6+)**
- **React.js** - 컴포넌트 기반 사용자 인터페이스 구축
- **Vue.js** - 반응형 웹 애플리케이션 개발
- **TypeScript** - 타입 안전성을 위한 정적 타이핑

### Backend
- **Node.js** / **Express.js** - 서버 사이드 개발
- **Python** / **Django** - 웹 프레임워크
- **RESTful API** 설계 및 구현

### Database
- **MongoDB** - NoSQL 데이터베이스
- **MySQL** / **PostgreSQL** - 관계형 데이터베이스

### Tools & Others
- **Git** / **GitHub** - 버전 관리
- **Docker** - 컨테이너화
- **AWS** - 클라우드 서비스
- **VS Code** - 개발 환경

---

## 🎯 프로젝트 포트폴리오

<style>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-color: #3182ce;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-card.react::before {
  background: linear-gradient(135deg, #61dafb 0%, #21759b 100%);
}

.project-card.blog::before {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-card.future::before {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.project-icon {
  font-size: 2.5rem;
  margin-right: 15px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
}

.project-subtitle {
  color: #718096;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 20px 0;
  font-size: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
}

.tech-tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
}

.tech-tag.react {
  background: #e6fffa;
  color: #065f46;
  border-color: #a7f3d0;
}

.tech-tag.web {
  background: #fef5e7;
  color: #92400e;
  border-color: #fbbf24;
}

.tech-tag.tools {
  background: #f0f9ff;
  color: #1e40af;
  border-color: #93c5fd;
}

.project-features {
  margin: 20px 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.features-list li {
  color: #4a5568;
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.9rem;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #38a169;
  font-weight: bold;
}

.project-actions {
  display: flex;
  gap: 15px;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.btn {
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #3182ce;
  color: white;
}

.btn-primary:hover {
  background: #2c5282;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #3182ce;
  border: 2px solid #3182ce;
}

.btn-secondary:hover {
  background: #3182ce;
  color: white;
}

.btn-disabled {
  background: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
}

.btn-disabled:hover {
  transform: none;
}

.project-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 15px;
}

.status-completed {
  background: #c6f6d5;
  color: #22543d;
}

.status-ongoing {
  background: #bee3f8;
  color: #2a4365;
}

.status-planned {
  background: #fed7d7;
  color: #742a2a;
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .btn {
    text-align: center;
    justify-content: center;
  }
}
</style>

<div class="projects-container">

<!-- React Todo App Project -->
<div class="project-card react">
  <div class="project-status status-completed">완료</div>
  <div class="project-header">
    <div class="project-icon">⚛️</div>
    <div>
      <h3 class="project-title">React Todo App</h3>
      <p class="project-subtitle">할일 관리 애플리케이션</p>
    </div>
  </div>
  
  <p class="project-description">
    React를 활용한 첫 번째 프로젝트로, 컴포넌트 기반 개발과 상태 관리의 기초를 학습했습니다. 
    사용자 친화적인 인터페이스로 할일을 효율적으로 관리할 수 있습니다.
  </p>
  
  <div class="tech-stack">
    <span class="tech-tag react">React</span>
    <span class="tech-tag web">JavaScript</span>
    <span class="tech-tag web">CSS3</span>
    <span class="tech-tag tools">Local Storage</span>
  </div>
  
  <div class="project-features">
    <strong>주요 기능:</strong>
    <ul class="features-list">
      <li>할일 추가, 수정, 삭제</li>
      <li>완료/미완료 상태 토글</li>
      <li>필터링 (전체/활성/완료)</li>
      <li>데이터 영속성</li>
      <li>반응형 디자인</li>
    </ul>
  </div>
  
  <div class="project-actions">
    <a href="/projects/#react-todo-app" class="btn btn-primary">
      📋 상세보기
    </a>
    <a href="https://github.com/goeun-oh" class="btn btn-secondary" target="_blank">
      💻 GitHub
    </a>
  </div>
</div>

<!-- Portfolio Blog Project -->
<div class="project-card blog">
  <div class="project-status status-ongoing">진행중</div>
  <div class="project-header">
    <div class="project-icon">📝</div>
    <div>
      <h3 class="project-title">개인 포트폴리오 블로그</h3>
      <p class="project-subtitle">정적 사이트 기반 포트폴리오</p>
    </div>
  </div>
  
  <p class="project-description">
    Hexo 정적 사이트 생성기를 활용하여 구축한 개인 포트폴리오 및 기술 블로그입니다. 
    개발 경험과 학습 내용을 체계적으로 정리하고 공유합니다.
  </p>
  
  <div class="tech-stack">
    <span class="tech-tag tools">Hexo</span>
    <span class="tech-tag web">Markdown</span>
    <span class="tech-tag tools">GitHub Pages</span>
    <span class="tech-tag web">YAML</span>
  </div>
  
  <div class="project-features">
    <strong>주요 특징:</strong>
    <ul class="features-list">
      <li>SEO 최적화</li>
      <li>자동 배포 시스템</li>
      <li>모바일 최적화</li>
      <li>태그 및 카테고리 분류</li>
      <li>빠른 로딩 속도</li>
    </ul>
  </div>
  
  <div class="project-actions">
    <a href="/projects/#portfolio-blog" class="btn btn-primary">
      📋 상세보기
    </a>
    <a href="https://goeun-oh.github.io" class="btn btn-secondary" target="_blank">
      🌐 사이트 보기
    </a>
  </div>
</div>

<!-- Future Project -->
<div class="project-card future">
  <div class="project-status status-planned">계획중</div>
  <div class="project-header">
    <div class="project-icon">🚀</div>
    <div>
      <h3 class="project-title">풀스택 웹 애플리케이션</h3>
      <p class="project-subtitle">사용자 관리 시스템</p>
    </div>
  </div>
  
  <p class="project-description">
    React와 Node.js를 활용한 풀스택 웹 애플리케이션 개발 프로젝트입니다. 
    백엔드 개발과 데이터베이스 연동 경험을 쌓을 예정입니다.
  </p>
  
  <div class="tech-stack">
    <span class="tech-tag react">React</span>
    <span class="tech-tag web">Node.js</span>
    <span class="tech-tag tools">Express</span>
    <span class="tech-tag tools">MongoDB</span>
  </div>
  
  <div class="project-features">
    <strong>계획된 기능:</strong>
    <ul class="features-list">
      <li>사용자 인증 시스템</li>
      <li>RESTful API 설계</li>
      <li>실시간 기능 구현</li>
      <li>데이터베이스 연동</li>
      <li>관리자 대시보드</li>
    </ul>
  </div>
  
  <div class="project-actions">
    <a href="/projects/#fullstack-project" class="btn btn-disabled">
      🔮 개발 예정
    </a>
    <a href="#" class="btn btn-disabled">
      💻 준비중
    </a>
  </div>
</div>

</div>

---

## 🌱 현재 학습 중

- **Next.js** - React 기반 풀스택 프레임워크
- **GraphQL** - API 쿼리 언어
- **Kubernetes** - 컨테이너 오케스트레이션
- **Machine Learning** - 인공지능 기초

## 📈 개발 철학

**지속적인 학습과 성장**을 추구합니다. 새로운 기술을 배우는 것을 두려워하지 않으며, 실패를 통해 더 나은 개발자가 되고자 합니다.

**사용자 중심 개발**을 지향합니다. 기술적 완성도뿐만 아니라 사용자 경험과 접근성을 고려한 개발을 중요하게 생각합니다.

**협업과 소통**을 중시합니다. 코드 리뷰와 문서화를 통해 팀과 함께 성장하는 개발자가 되고자 합니다.

## 🏆 성취 및 목표

### 2024년 성취
- ✅ React 기초 마스터
- ✅ 첫 번째 개인 프로젝트 완성
- ✅ 포트폴리오 사이트 구축
- ✅ Git/GitHub 워크플로우 습득

### 2025년 목표
- 🎯 풀스택 개발 역량 구축
- 🎯 팀 프로젝트 참여
- 🎯 오픈소스 기여
- 🎯 기술 블로그 꾸준한 포스팅

## 📞 다음 단계는?

새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락해주세요. 
항상 흥미로운 프로젝트와 새로운 기회에 열려있습니다.

## 📫 연락처

- **Email**: your.email@example.com
- **GitHub**: [github.com/goeun-oh](https://github.com/goeun-oh)
- **LinkedIn**: 추후 업데이트 예정
- **Blog**: [goeun-oh.github.io](https://goeun-oh.github.io)

---

*"코드로 세상을 더 나은 곳으로 만들고 싶습니다."*

## 📚 추가 정보

- 🗂️ **[전체 프로젝트 보기](/projects/)** - 모든 프로젝트의 상세 정보
- 📝 **[기술 블로그](/blog/)** - 개발 관련 학습 내용과 경험 공유
- 👨‍💻 **[About Me](/about/)** - 개발자로서의 여정과 가치관
{% endraw %}
