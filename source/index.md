---
title: goeun's space
layout: page
---

{% raw %}
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2d3748;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header {
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2b6cb0;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #2b6cb0;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
  margin-top: 70px;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero .subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero .description {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

/* Sections */
.section {
  padding: 4rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3748;
}

/* About Section */
.about {
  background: #f7fafc;
}

.about-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #4a5568;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skill-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #edf2f7;
  color: #4a5568;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Projects Section */
.projects {
  background: #f7fafc;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.project-description {
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #e2e8f0;
  color: #4a5568;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s;
}

.project-link.primary {
  background: #667eea;
  color: white;
}

.project-link.primary:hover {
  background: #5a67d8;
}

.project-link.secondary {
  background: #e2e8f0;
  color: #4a5568;
}

.project-link.secondary:hover {
  background: #cbd5e0;
}

/* Contact Section */
.contact {
  text-align: center;
  padding: 4rem 0;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
}

.contact-description {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-link {
  background: #667eea;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.contact-link:hover {
  background: #5a67d8;
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background: #2d3748;
  color: white;
  text-align: center;
  padding: 2rem 0;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<header class="header">
  <nav class="nav">
    <div class="logo">Goeun's Space</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<section class="hero">
  <div class="container">
    <h1>고은 (Goeun Oh)</h1>
    <p class="subtitle">디지털회로 설계 엔지니어</p>
    <p class="description">
      혁신적인 하드웨어 솔루션을 설계하며, FPGA와 ASIC을 통해 
      미래 기술의 기반을 구축하는 디지털회로 설계 엔지니어입니다.
    </p>
    <div class="hero-buttons">
      <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
      <a href="#contact" class="btn btn-secondary">연락하기</a>
    </div>
  </div>
</section>

<section id="about" class="section about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <p>효율적이고 혁신적인 디지털 시스템을 설계하는 것에 열정을 가진 디지털회로 설계 엔지니어입니다.</p>
      <br>
      <p>FPGA, ASIC 설계부터 시스템 최적화까지 다양한 하드웨어 설계 기술을 익히며, 항상 더 나은 성능과 효율성을 추구합니다. 첨단 기술과 창의적 사고를 결합하여 미래 지향적인 디지털 솔루션을 개발하고 싶습니다.</p>
    </div>
  </div>
</section>

<section id="skills" class="section">
  <div class="container">
    <h2 class="section-title">Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <div class="skill-icon">🔧</div>
        <h3 class="skill-title">HDL & Design</h3>
        <div class="skill-list">
          <span class="skill-tag">Verilog HDL</span>
          <span class="skill-tag">VHDL</span>
          <span class="skill-tag">SystemVerilog</span>
          <span class="skill-tag">Digital Logic</span>
          <span class="skill-tag">RTL Design</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-icon">⚡</div>
        <h3 class="skill-title">EDA Tools</h3>
        <div class="skill-list">
          <span class="skill-tag">Vivado</span>
          <span class="skill-tag">Quartus Prime</span>
          <span class="skill-tag">ModelSim</span>
          <span class="skill-tag">Synopsys DC</span>
          <span class="skill-tag">Cadence</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-icon">🎯</div>
        <h3 class="skill-title">Hardware Platforms</h3>
        <div class="skill-list">
          <span class="skill-tag">Xilinx FPGA</span>
          <span class="skill-tag">Intel FPGA</span>
          <span class="skill-tag">ASIC Design</span>
          <span class="skill-tag">SoC Design</span>
          <span class="skill-tag">RISC-V</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-icon">📊</div>
        <h3 class="skill-title">Analysis & Verification</h3>
        <div class="skill-list">
          <span class="skill-tag">Timing Analysis</span>
          <span class="skill-tag">Power Analysis</span>
          <span class="skill-tag">Verification</span>
          <span class="skill-tag">Logic Synthesis</span>
          <span class="skill-tag">DFT</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="section projects">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">🔧</div>
        <div class="project-content">
          <h3 class="project-title">32-bit RISC-V 프로세서 설계</h3>
          <p class="project-description">
            5-stage pipeline 구조의 완전한 RISC-V 프로세서 설계. 최적화된 데이터 경로와 제어 유닛을 구현하여 높은 성능과 효율성을 달성했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Verilog HDL</span>
            <span class="tech-tag">Vivado</span>
            <span class="tech-tag">RISC-V ISA</span>
            <span class="tech-tag">Pipeline</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link primary">자세히 보기</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">📡</div>
        <div class="project-content">
          <h3 class="project-title">고속 신호처리 FPGA 시스템</h3>
          <p class="project-description">
            실시간 디지털 신호처리를 위한 FPGA 기반 고속 DSP 시스템. 병렬 처리 아키텍처와 최적화된 알고리즘으로 고성능 필터링을 구현했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">SystemVerilog</span>
            <span class="tech-tag">Xilinx Zynq</span>
            <span class="tech-tag">DSP</span>
            <span class="tech-tag">Real-time</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link primary">자세히 보기</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">⚡</div>
        <div class="project-content">
          <h3 class="project-title">초저전력 IoT SoC</h3>
          <p class="project-description">
            IoT 애플리케이션을 위한 초저전력 SoC 설계. 고급 전력 관리 기법과 최적화된 아키텍처로 배터리 수명을 극대화했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">VHDL</span>
            <span class="tech-tag">Low Power</span>
            <span class="tech-tag">SoC</span>
            <span class="tech-tag">IoT</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link primary">자세히 보기</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="section contact">
  <div class="container">
    <h2 class="contact-title">함께 혁신을 만들어가요</h2>
    <p class="contact-description">
      새로운 하드웨어 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락해주세요.
    </p>
    <div class="contact-links">
      <a href="mailto:goeun.oh.dev@gmail.com" class="contact-link">📧 이메일</a>
      <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">💻 GitHub</a>
      <a href="https://linkedin.com/in/goeun-oh" class="contact-link" target="_blank">💼 LinkedIn</a>
      <a href="/archives" class="contact-link">📝 블로그</a>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <p>&copy; 2025 Goeun Oh. 모든 권리 보유.</p>
  </div>
</footer>
{% endraw %}