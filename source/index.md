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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
  font-weight: 400;
}

.portfolio-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);
  letter-spacing: -0.025em;
}

.hero .subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.9;
  font-weight: 300;
}

.hero .contact-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.contact-link {
  background: rgba(255,255,255,0.1);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  font-weight: 500;
}

.contact-link:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

/* Section Styles */
.section {
  margin-bottom: 120px;
  background: #ffffff;
  border-radius: 16px;
  padding: 80px 60px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04);
  border: 1px solid #f1f5f9;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 48px;
  text-align: center;
  color: #0f172a;
  position: relative;
  letter-spacing: -0.025em;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0f172a, #334155);
  border-radius: 2px;
}

.about-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #475569;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.about-content strong {
  color: #0f172a;
  font-weight: 600;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.skill-category {
  background: #f8fafc;
  padding: 40px;
  border-radius: 12px;
  border-left: 4px solid #0f172a;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.1);
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0f172a;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  background: #e2e8f0;
  color: #475569;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #0f172a;
  color: white;
  transform: translateY(-2px);
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 48px;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.project-content {
  padding: 32px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 16px;
}

.project-description {
  color: #475569;
  line-height: 1.7;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 16px;
}

.project-link {
  background: #0f172a;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #1e293b;
  transform: translateY(-2px);
}

.project-link.secondary {
  background: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  color: white;
  text-align: center;
  padding: 80px 60px;
  border-radius: 16px;
  margin-bottom: 0;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.cta-description {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-container { padding: 0 20px; }
  .hero { padding: 80px 0; }
  .hero h1 { font-size: 2.5rem; }
  .section { padding: 40px 24px; margin-bottom: 80px; }
  .projects-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: 1fr; }
  .contact-links { flex-direction: column; align-items: center; }
}

.highlight {
  background: linear-gradient(120deg, rgba(15, 23, 42, 0.1) 0%, rgba(51, 65, 85, 0.1) 100%);
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 500;
}
</style>

<div class="portfolio-container">
  <section class="hero">
    <div class="hero-content">
      <h1>👋 고은 (Goeun Oh)</h1>
      <p class="subtitle">혁신적인 디지털 시스템을 설계하는 <span class="highlight">디지털회로 설계 엔지니어</span></p>
      <div class="contact-links">
        <a href="mailto:goeun.oh.dev@gmail.com" class="contact-link">📧 Contact</a>
        <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">💻 GitHub</a>
        <a href="https://linkedin.com/in/goeun-oh" class="contact-link" target="_blank">💼 LinkedIn</a>
        <a href="/archives" class="contact-link">📝 Blog</a>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">🚀 About Me</h2>
    <div class="about-content">
      <p>안녕하세요! <strong>효율적이고 혁신적인 디지털 시스템</strong>을 설계하는 것에 열정을 가진 디지털회로 설계 엔지니어 지망생 고은입니다.</p>
      <br>
      <p>FPGA, ASIC 설계부터 시스템 최적화까지 다양한 하드웨어 설계 기술을 익히며, 항상 더 나은 성능과 효율성을 추구합니다. <strong>첨단 기술과 창의적 사고</strong>를 결합하여 미래 지향적인 디지털 솔루션을 개발하고 싶습니다.</p>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">⚡ Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>🔧 Digital Design & EDA Tools</h3>
        <div class="skill-tags">
          <span class="skill-tag">Verilog HDL</span>
          <span class="skill-tag">VHDL</span>
          <span class="skill-tag">SystemVerilog</span>
          <span class="skill-tag">Vivado</span>
          <span class="skill-tag">Quartus Prime</span>
          <span class="skill-tag">ModelSim</span>
          <span class="skill-tag">Synopsys DC</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>🎯 Hardware Platforms</h3>
        <div class="skill-tags">
          <span class="skill-tag">Xilinx FPGA</span>
          <span class="skill-tag">Intel FPGA</span>
          <span class="skill-tag">ASIC Design</span>
          <span class="skill-tag">SoC Design</span>
          <span class="skill-tag">ARM Cortex</span>
          <span class="skill-tag">RISC-V</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>📊 Analysis & Verification</h3>
        <div class="skill-tags">
          <span class="skill-tag">Functional Verification</span>
          <span class="skill-tag">Timing Analysis</span>
          <span class="skill-tag">Power Analysis</span>
          <span class="skill-tag">Logic Synthesis</span>
          <span class="skill-tag">DFT</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>💻 Programming & Tools</h3>
        <div class="skill-tags">
          <span class="skill-tag">C/C++</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">MATLAB</span>
          <span class="skill-tag">TCL/TK</span>
          <span class="skill-tag">Git/SVN</span>
          <span class="skill-tag">Linux</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">🛠️ Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">🔧</div>
        <div class="project-content">
          <h3 class="project-title">32-bit RISC-V 프로세서 설계</h3>
          <p class="project-description">
            Verilog HDL을 사용하여 완전한 5-stage pipeline RISC-V 프로세서를 설계했습니다. 하드웨어 최적화와 성능 향상에 중점을 두고 개발했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Verilog HDL</span>
            <span class="tech-tag">Vivado</span>
            <span class="tech-tag">RISC-V ISA</span>
            <span class="tech-tag">Pipeline Design</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">Details</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">📡</div>
        <div class="project-content">
          <h3 class="project-title">고속 신호처리 FPGA 시스템</h3>
          <p class="project-description">
            실시간 디지털 신호처리를 위한 FPGA 기반 시스템을 설계했습니다. DSP 블록을 효율적으로 활용하여 고성능 필터링을 구현했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">SystemVerilog</span>
            <span class="tech-tag">Xilinx Zynq</span>
            <span class="tech-tag">DSP</span>
            <span class="tech-tag">Real-time Processing</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">Details</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">⚡</div>
        <div class="project-content">
          <h3 class="project-title">저전력 IoT SoC 설계</h3>
          <p class="project-description">
            초저전력 IoT 애플리케이션을 위한 SoC를 설계했습니다. 파워 게이팅과 클럭 게이팅 기법을 적용하여 전력 효율성을 극대화했습니다.
          </p>
          <div class="project-tech">
            <span class="tech-tag">VHDL</span>
            <span class="tech-tag">Low Power Design</span>
            <span class="tech-tag">SoC Architecture</span>
            <span class="tech-tag">IoT</span>
          </div>
          <div class="project-links">
            <a href="#" class="project-link">Details</a>
            <a href="#" class="project-link secondary">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="cta-content">
      <h2 class="cta-title">🚀 함께 혁신적인 하드웨어를 만들어보아요!</h2>
      <p class="cta-description">새로운 프로젝트와 협업 기회를 기다리고 있습니다. 언제든 연락해주세요!</p>
      <div class="contact-links">
        <a href="mailto:goeun.oh.dev@gmail.com" class="contact-link">📧 이메일 보내기</a>
        <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">💻 GitHub 보기</a>
        <a href="https://linkedin.com/in/goeun-oh" class="contact-link" target="_blank">💼 LinkedIn 연결</a>
        <a href="/archives" class="contact-link">📝 블로그 둘러보기</a>
      </div>
    </div>
  </section>
</div>
{% endraw %}