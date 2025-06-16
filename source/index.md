---
title: 고은의 포트폴리오
layout: page
---

<style>
.portfolio-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
}

.portfolio-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.portfolio-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tech-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  transition: transform 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.project-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  margin: 1.5rem 0;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
}

.project-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-title {
  color: #333;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.tech-badge {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin: 0.2rem 0.3rem 0.2rem 0;
}

.skills-section {
  background: #f8f9fa;
  padding: 3rem 2rem;
  border-radius: 15px;
  margin: 3rem 0;
}

.contact-cta {
  text-align: center;
  margin: 3rem 0;
  padding: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.contact-link {
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border: 2px solid white;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: white;
  color: #667eea;
}

.experience-timeline {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.experience-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: #667eea;
  border-radius: 50%;
}

.experience-item::after {
  content: '';
  position: absolute;
  left: -0.25rem;
  top: 1.5rem;
  width: 0.25rem;
  height: 100%;
  background: #e9ecef;
}

.experience-item:last-child::after {
  display: none;
}

@media (max-width: 768px) {
  .portfolio-hero h1 {
    font-size: 2rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<div class="portfolio-hero">
  <h1>👋 안녕하세요, 고은입니다!</h1>
  <p>끊임없이 배우고 성장하는 개발자로서, 코드로 세상을 더 나은 곳으로 만들어가고자 합니다.</p>
</div>

## 🚀 주요 프로젝트

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">📱 개인 포트폴리오 웹사이트</h3>
  </div>
  <div class="tech-badges">
    <span class="tech-badge">Hexo</span>
    <span class="tech-badge">GitHub Pages</span>
    <span class="tech-badge">Material Design</span>
    <span class="tech-badge">JavaScript</span>
  </div>
  <p>반응형 디자인을 적용한 개인 포트폴리오 웹사이트로, 모바일 친화적이며 빠른 로딩 속도와 SEO 최적화를 구현했습니다.</p>
  <ul>
    <li><strong>반응형 디자인</strong>: 모든 디바이스에서 최적화된 사용자 경험 제공</li>
    <li><strong>성능 최적화</strong>: 빠른 로딩 속도와 SEO 최적화로 검색 노출 향상</li>
    <li><strong>현대적 UI/UX</strong>: Material Design을 활용한 직관적이고 깔끔한 인터페이스</li>
  </ul>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">📝 React Todo 애플리케이션</h3>
  </div>
  <div class="tech-badges">
    <span class="tech-badge">React</span>
    <span class="tech-badge">Node.js</span>
    <span class="tech-badge">MongoDB</span>
    <span class="tech-badge">Express</span>
  </div>
  <p>사용자 친화적인 할일 관리 웹 애플리케이션으로, 실시간 업데이트와 사용자 인증 기능을 구현했습니다.</p>
  <ul>
    <li><strong>CRUD 기능</strong>: 완전한 데이터 관리 시스템</li>
    <li><strong>실시간 업데이트</strong>: 즉시 반영되는 사용자 인터랙션</li>
    <li><strong>사용자 인증</strong>: 안전한 개인 데이터 관리</li>
  </ul>
</div>

<div class="project-card">
  <div class="project-header">
    <h3 class="project-title">🌐 E-Commerce 플랫폼 (진행 중)</h3>
  </div>
  <div class="tech-badges">
    <span class="tech-badge">Next.js</span>
    <span class="tech-badge">TypeScript</span>
    <span class="tech-badge">PostgreSQL</span>
    <span class="tech-badge">Stripe</span>
  </div>
  <p>현대적인 기술 스택을 활용한 전자상거래 플랫폼 개발 프로젝트입니다.</p>
  <ul>
    <li><strong>타입 안정성</strong>: TypeScript로 안정적인 코드 베이스 구축</li>
    <li><strong>결제 시스템</strong>: Stripe 연동을 통한 안전한 결제 처리</li>
    <li><strong>서버사이드 렌더링</strong>: Next.js를 활용한 SEO 최적화</li>
  </ul>
</div>

<div class="skills-section">
  
## 💻 기술 스택 & 역량

<div class="tech-grid">
  <div class="tech-card">
    <h3>🎨 Frontend Development</h3>
    <p><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript</p>
    <p><strong>Frameworks:</strong> React.js, Vue.js, Next.js</p>
    <p><strong>Styling:</strong> Sass/SCSS, Tailwind CSS, Material-UI</p>
    <p><strong>Tools:</strong> Webpack, Vite, ESLint, Prettier</p>
  </div>

  <div class="tech-card">
    <h3>⚙️ Backend Development</h3>
    <p><strong>Languages:</strong> Node.js, Python</p>
    <p><strong>Frameworks:</strong> Express.js, FastAPI, Django</p>
    <p><strong>Database:</strong> MongoDB, MySQL, PostgreSQL</p>
    <p><strong>API:</strong> RESTful API, GraphQL</p>
  </div>

  <div class="tech-card">
    <h3>🚀 DevOps & Tools</h3>
    <p><strong>Version Control:</strong> Git, GitHub</p>
    <p><strong>Deployment:</strong> GitHub Pages, Netlify, Vercel</p>
    <p><strong>Containerization:</strong> Docker</p>
    <p><strong>Cloud:</strong> AWS (기초)</p>
  </div>

  <div class="tech-card">
    <h3>📱 Mobile & Others</h3>
    <p><strong>Mobile:</strong> React Native (학습 중)</p>
    <p><strong>CMS:</strong> Headless CMS, Static Site Generators</p>
    <p><strong>Design:</strong> Figma, Adobe XD</p>
    <p><strong>Testing:</strong> Jest, Cypress</p>
  </div>
</div>

</div>

## 🎯 개발 철학 & 가치관

> "사용자 중심의 생각으로 문제를 해결하고, 깔끔하고 효율적인 코드를 작성합니다."

- **🎨 사용자 경험 최우선**: 사용자가 편리하고 직관적으로 사용할 수 있는 인터페이스 설계
- **📝 코드 품질**: 가독성 높고 유지보수하기 쉬운 클린 코드 작성
- **📚 지속적 학습**: 새로운 기술과 트렌드를 꾸준히 학습하고 프로젝트에 적용
- **🤝 협업**: 팀워크를 중시하며 적극적인 소통을 통한 문제 해결
- **🔍 문제 해결**: 복잡한 문제를 논리적으로 분석하고 창의적인 해결책 도출

## 📈 최근 성장 & 활동

<div class="experience-timeline">
  <div class="experience-item">
    <h4>✨ 포트폴리오 웹사이트 리뉴얼 (2025.06)</h4>
    <p>현대적인 디자인과 반응형 레이아웃을 적용하여 사용자 경험을 크게 개선했습니다.</p>
  </div>
  
  <div class="experience-item">
    <h4>🔧 개발 환경 최적화 (2025.05)</h4>
    <p>GitHub Actions를 활용한 자동 배포 파이프라인을 구축하여 개발 효율성을 향상시켰습니다.</p>
  </div>
  
  <div class="experience-item">
    <h4>📚 TypeScript 마스터 (2025.04)</h4>
    <p>타입 안정성을 위한 TypeScript를 집중 학습하여 프로젝트에 적용하고 있습니다.</p>
  </div>
  
  <div class="experience-item">
    <h4>🌐 풀스택 개발 역량 확장 (2025.03)</h4>
    <p>백엔드 기술 스택을 확장하여 완전한 웹 애플리케이션 개발 능력을 갖추었습니다.</p>
  </div>
</div>

## 🌱 현재 학습 중인 기술

- **Next.js 13+**: App Router와 Server Components를 활용한 최신 React 개발
- **GraphQL**: 효율적인 API 쿼리 언어와 Apollo Client
- **Kubernetes**: 컨테이너 오케스트레이션과 마이크로서비스 아키텍처
- **Machine Learning 기초**: Python을 활용한 데이터 분석과 AI 모델 구축
- **Web3 & Blockchain**: 블록체인 기술과 dApp 개발의 기초

<div class="contact-cta">
  <h2>🚀 함께 멋진 것을 만들어보아요!</h2>
  <p>새로운 프로젝트와 협업 기회를 기다리고 있습니다. 언제든 연락해주세요!</p>
  
  <div class="contact-links">
    <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">
      💻 GitHub
    </a>
    <a href="mailto:your.email@example.com" class="contact-link">
      📧 Email
    </a>
    <a href="#" class="contact-link">
      💼 LinkedIn
    </a>
    <a href="/archives" class="contact-link">
      📝 기술 블로그
    </a>
  </div>
</div>

---

<div style="text-align: center; margin: 2rem 0; color: #666; font-style: italic;">
"코드는 단순히 동작하는 것을 넘어서, 사람들의 삶을 더 나아지게 만드는 도구라고 생각합니다."
</div>
