---
title: 고은의 포트폴리오
layout: page
---

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8fafc;
}

.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 0 0 50px 50px;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero .subtitle {
  font-size: 1.4rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero .contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.contact-link {
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.contact-link:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Section Styles */
.section {
  margin-bottom: 80px;
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: #2d3748;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

/* About Section */
.about-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-category {
  background: #f7fafc;
  padding: 30px;
  border-radius: 15px;
  border-left: 5px solid #667eea;
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.skill-category h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background: #e2e8f0;
  color: #4a5568;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.project-content {
  padding: 30px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 15px;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 15px;
}

.project-link {
  background: #667eea;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #5a67d8;
  transform: translateY(-2px);
}

.project-link.secondary {
  background: #e2e8f0;
  color: #4a5568;
}

.project-link.secondary:hover {
  background: #cbd5e0;
}

/* Experience Section */
.experience-timeline {
  position: relative;
  padding-left: 40px;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

.experience-item {
  position: relative;
  margin-bottom: 40px;
  background: #f7fafc;
  padding: 30px;
  border-radius: 15px;
  border-left: 4px solid #667eea;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -33px;
  top: 30px;
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  border: 3px solid white;
}

.experience-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
}

.experience-company {
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 8px;
}

.experience-period {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.experience-description {
  color: #4a5568;
  line-height: 1.6;
}

/* Stats Section */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.stat-card {
  text-align: center;
  background: #f7fafc;
  padding: 30px;
  border-radius: 15px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: #667eea;
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  display: block;
}

.stat-label {
  color: #4a5568;
  font-weight: 500;
  margin-top: 10px;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 60px 40px;
  border-radius: 20px;
  margin-bottom: 0;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero .subtitle {
    font-size: 1.2rem;
  }
  
  .section {
    padding: 30px 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
  
  .experience-timeline {
    padding-left: 20px;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  animation: fadeInUp 0.6s ease-out;
}

/* Dark theme elements */
.highlight {
  background: linear-gradient(120deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  padding: 2px 8px;
  border-radius: 4px;
}
</style>

<div class="portfolio-container">
  <!-- Hero Section -->
  <section class="hero">
    <h1>👋 고은 (Goeun Oh)</h1>
    <p class="subtitle">끊임없이 배우고 성장하는 <span class="highlight">풀스택 개발자</span></p>
    <div class="contact-links">
      <a href="mailto:goeun.oh.dev@gmail.com" class="contact-link">📧 이메일</a>
      <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">💻 GitHub</a>
      <a href="https://linkedin.com/in/goeun-oh" class="contact-link" target="_blank">💼 LinkedIn</a>
      <a href="/archives" class="contact-link">📝 블로그</a>
    </div>
  </section>

  <!-- About Section -->
  <section class="section">
    <h2 class="section-title">🚀 About Me</h2>
    <div class="about-content">
      <p>안녕하세요! <strong>사용자 중심의 웹 서비스</strong>를 만드는 것에 열정을 가진 풀스택 개발자 고은입니다.</p>
      <br>
      <p>새로운 기술을 학습하고 적용하는 것을 즐기며, 항상 더 나은 코드와 사용자 경험을 위해 고민합니다. 팀워크를 중시하고, 지속적인 성장을 통해 <strong>가치 있는 서비스</strong>를 만들어가고 싶습니다.</p>
      <br>
      <p>"<em>코드는 단순히 동작하는 것을 넘어서, 사람들의 삶을 더 나아지게 만드는 도구</em>"라고 생각합니다.</p>
    </div>
    
    <!-- Quick Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number">15+</span>
        <div class="stat-label">완성한 프로젝트</div>
      </div>
      <div class="stat-card">
        <span class="stat-number">10+</span>
        <div class="stat-label">사용 가능한 기술</div>
      </div>
      <div class="stat-card">
        <span class="stat-number">2+</span>
        <div class="stat-label">년의 개발 경험</div>
      </div>
      <div class="stat-card">
        <span class="stat-number">24/7</span>
        <div class="stat-label">학습하는 자세</div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="section">
    <h2 class="section-title">💻 Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>🎨 Frontend Development</h3>
        <div class="skill-tags">
          <span class="skill-tag">HTML5</span>
          <span class="skill-tag">CSS3</span>
          <span class="skill-tag">JavaScript (ES6+)</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">Next.js</span>
          <span class="skill-tag">Tailwind CSS</span>
          <span class="skill-tag">Sass/SCSS</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>⚙️ Backend Development</h3>
        <div class="skill-tags">
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Express.js</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Django</span>
          <span class="skill-tag">FastAPI</span>
          <span class="skill-tag">Java</span>
          <span class="skill-tag">Spring Boot</span>
          <span class="skill-tag">RESTful API</span>
          <span class="skill-tag">GraphQL</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>🗄️ Database & Storage</h3>
        <div class="skill-tags">
          <span class="skill-tag">MySQL</span>
          <span class="skill-tag">PostgreSQL</span>
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">Redis</span>
          <span class="skill-tag">SQLite</span>
          <span class="skill-tag">Firebase</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>🚀 DevOps & Tools</h3>
        <div class="skill-tags">
          <span class="skill-tag">Git/GitHub</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Heroku</span>
          <span class="skill-tag">Netlify</span>
          <span class="skill-tag">Vercel</span>
          <span class="skill-tag">GitHub Actions</span>
          <span class="skill-tag">Webpack</span>
          <span class="skill-tag">Vite</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="section">
    <h2 class="section-title">🛠️ Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">
          🌐
        </div>
        <div class="project-content">
          <h3 class="project-title">개인 포트폴리오 웹사이트</h3>
          <p class="project-description">
            반응형 디자인을 적용한 개인 포트폴리오 웹사이트로, 모바일 친화적이며 빠른 로딩 속도와 SEO 최적화를 구현했습니다. 현대적인 UI/UX 디자인과 함께 사용자 경험을 최우선으로 고려했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Hexo</span>
            <span class="tech-tag">GitHub Pages</span>
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">Responsive Design</span>
            <span class="tech-tag">SEO</span>
          </div>
          <div class="project-links">
            <a href="https://goeun-oh.github.io" class="project-link" target="_blank">Live Demo</a>
            <a href="https://github.com/goeun-oh/goeun-oh.github.io" class="project-link secondary" target="_blank">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          🛍️
        </div>
        <div class="project-content">
          <h3 class="project-title">온라인 쇼핑몰 플랫폼</h3>
          <p class="project-description">
            React와 Node.js를 활용한 풀스택 전자상거래 플랫폼입니다. 사용자 인증, 상품 관리, 결제 시스템, 주문 관리 등의 핵심 기능을 구현하며 실무에 적용 가능한 수준의 완성도를 달성했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">JWT</span>
            <span class="tech-tag">Stripe API</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          📝
        </div>
        <div class="project-content">
          <h3 class="project-title">협업 프로젝트 관리 도구</h3>
          <p class="project-description">
            팀 프로젝트를 효율적으로 관리할 수 있는 웹 애플리케이션입니다. 실시간 협업, 칸반 보드, 진행률 추적 등의 기능을 제공하며, 사용자 친화적인 인터페이스로 생산성 향상에 기여합니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Django</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Socket.io</span>
            <span class="tech-tag">Docker</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          🌤️
        </div>
        <div class="project-content">
          <h3 class="project-title">실시간 날씨 대시보드</h3>
          <p class="project-description">
            OpenWeatherMap API를 활용한 실시간 날씨 정보 대시보드입니다. 지역별 날씨 조회, 7일 예보, 날씨 알림 기능을 구현하며, 데이터 시각화를 통해 직관적인 정보 전달을 실현했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">Chart.js</span>
            <span class="tech-tag">OpenWeather API</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="section">
    <h2 class="section-title">💼 Experience & Growth</h2>
    <div class="experience-timeline">
      <div class="experience-item">
        <h3 class="experience-title">풀스택 개발자</h3>
        <p class="experience-company">테크 스타트업 ABC</p>
        <p class="experience-period">2023.03 - 현재</p>
        <p class="experience-description">
          웹 서비스 개발 및 유지보수를 담당하며, React 기반 프론트엔드와 Node.js 백엔드 개발을 진행했습니다. 
          팀 협업을 통한 애자일 개발 프로세스에 참여하며 서비스 품질 향상에 기여했습니다. 
          사용자 경험 개선을 위한 A/B 테스트 도입과 성능 최적화를 통해 페이지 로딩 속도를 40% 향상시켰습니다.
        </p>
      </div>
      
      <div class="experience-item">
        <h3 class="experience-title">웹 개발 인턴</h3>
        <p class="experience-company">디지털 에이전시 XYZ</p>
        <p class="experience-period">2022.09 - 2023.02</p>
        <p class="experience-description">
          클라이언트 웹사이트 제작 및 유지보수 업무를 담당했습니다. 
          WordPress 커스터마이징과 반응형 웹 디자인 구현 경험을 쌓았으며, 
          다양한 업종의 클라이언트 요구사항을 분석하고 맞춤형 솔루션을 제공했습니다.
        </p>
      </div>

      <div class="experience-item">
        <h3 class="experience-title">개인 프로젝트 & 학습</h3>
        <p class="experience-company">자기주도 학습</p>
        <p class="experience-period">2022.01 - 현재</p>
        <p class="experience-description">
          지속적인 자기개발을 통해 최신 웹 기술을 학습하고 개인 프로젝트에 적용하고 있습니다. 
          오픈소스 프로젝트 기여, 기술 블로그 운영, 개발자 커뮤니티 활동을 통해 
          개발 역량을 지속적으로 향상시키고 있습니다.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <h2 class="cta-title">🚀 함께 멋진 것을 만들어보아요!</h2>
    <p class="cta-description">새로운 프로젝트와 협업 기회를 기다리고 있습니다. 언제든 연락해주세요!</p>
    <div class="contact-links">
      <a href="mailto:goeun.oh.dev@gmail.com" class="contact-link">📧 이메일 보내기</a>
      <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">💻 GitHub 보기</a>
      <a href="https://linkedin.com/in/goeun-oh" class="contact-link" target="_blank">💼 LinkedIn 연결</a>
      <a href="/archives" class="contact-link">📝 블로그 둘러보기</a>
    </div>
  </section>
</div>