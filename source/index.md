---
title: goeun's space
layout: page
---

{% raw %}
<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #00d4ff;
  --secondary: #7c3aed;
  --accent: #10b981;
  --dark: #0a0e1a;
  --darker: #070b14;
  --light: #f8fafc;
  --gray: #64748b;
  --border: rgba(255, 255, 255, 0.1);
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background: var(--dark);
  color: var(--light);
  overflow-x: hidden;
}

/* Animated Background */
.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(45deg, var(--dark) 0%, var(--darker) 50%, var(--dark) 100%);
}

.bg-animation::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
  50% { transform: translate(-50%, -50%) rotate(180deg); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

/* Navigation */
.nav {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  backdrop-filter: blur(20px);
  background: rgba(10, 14, 26, 0.8);
  border: 1px solid var(--border);
  border-radius: 50px;
  padding: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  color: var(--gray);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover, .nav-link.active {
  background: var(--primary);
  color: var(--dark);
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.hero-content h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.1;
}

.hero-content .subtitle {
  font-size: 1.5rem;
  color: var(--gray);
  margin-bottom: 2rem;
  font-weight: 300;
}

.hero-content .description {
  font-size: 1.1rem;
  color: var(--light);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary);
  color: var(--dark);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--light);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: var(--light);
  color: var(--dark);
}

/* Terminal Window */
.terminal {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  border: 1px solid var(--border);
  margin: 4rem 0;
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.terminal-header {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.terminal-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27ca3f; }

.terminal-title {
  color: var(--gray);
  font-size: 0.9rem;
  margin-left: 1rem;
}

.terminal-body {
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
}

.command {
  color: var(--primary);
}

.output {
  color: var(--accent);
  margin-left: 1rem;
}

/* Skills Grid */
.skills-section {
  padding: 6rem 0;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--light), var(--gray));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  transition: left 0.5s ease;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skill-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--light);
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.1);
  color: var(--light);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: var(--primary);
  color: var(--dark);
  transform: scale(1.05);
}

/* Projects Section */
.projects-section {
  padding: 6rem 0;
}

.projects-grid {
  display: grid;
  gap: 3rem;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.project-card:nth-child(even) {
  direction: rtl;
}

.project-card:nth-child(even) > * {
  direction: ltr;
}

.project-card:hover {
  transform: scale(1.02);
  border-color: var(--accent);
}

.project-info h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--light);
}

.project-info p {
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-badge {
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  color: var(--light);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-visual {
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  border-radius: 16px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
}

.project-visual::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.contact-text {
  font-size: 1.2rem;
  color: var(--gray);
  margin-bottom: 3rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--light);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
}

.contact-link:hover {
  background: var(--primary);
  color: var(--dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-card {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .project-card:nth-child(even) {
    direction: ltr;
  }
}

@media (max-width: 768px) {
  .container { padding: 0 1rem; }
  .hero-content h1 { font-size: 3rem; }
  .nav { position: static; margin: 2rem auto; width: fit-content; }
  .skills-grid { grid-template-columns: 1fr; }
  .contact-links { flex-direction: column; align-items: center; }
  .cta-buttons { flex-direction: column; align-items: center; }
}

/* Scroll animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: slideInUp 0.6s ease-out;
}
</style>

<div class="bg-animation"></div>

<nav class="nav">
  <div class="nav-links">
    <a href="#home" class="nav-link active">Home</a>
    <a href="#skills" class="nav-link">Skills</a>
    <a href="#projects" class="nav-link">Projects</a>
    <a href="#contact" class="nav-link">Contact</a>
  </div>
</nav>

<section id="home" class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Goeun Oh</h1>
      <p class="subtitle">Digital Circuit Design Engineer</p>
      <p class="description">
        혁신적인 하드웨어 솔루션을 설계하며, FPGA와 ASIC을 통해 
        미래 기술의 기반을 구축하는 디지털회로 설계 엔지니어입니다.
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
  </div>
</section>

<section class="container">
  <div class="terminal">
    <div class="terminal-header">
      <div class="terminal-dots">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="terminal-title">goeun@portfolio:~$</div>
    </div>
    <div class="terminal-body">
      <div><span class="command">$ whoami</span></div>
      <div class="output">Digital Circuit Design Engineer</div>
      <div><span class="command">$ cat specialties.txt</span></div>
      <div class="output">FPGA Design | ASIC Development | Verilog/VHDL | System Optimization</div>
      <div><span class="command">$ ls projects/</span></div>
      <div class="output">risc-v-processor/ fpga-dsp-system/ low-power-soc/ memory-controller/</div>
      <div><span class="command">$ git status</span></div>
      <div class="output">Ready to innovate and collaborate ✨</div>
    </div>
  </div>
</section>

<section id="skills" class="skills-section">
  <div class="container">
    <h2 class="section-title">Technical Arsenal</h2>
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
        <h3 class="skill-title">Platforms</h3>
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

<section id="projects" class="projects-section">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-info">
          <h3>32-bit RISC-V Processor</h3>
          <p>5-stage pipeline 구조의 완전한 RISC-V 프로세서 설계. 최적화된 데이터 경로와 제어 유닛을 구현하여 높은 성능과 효율성을 달성했습니다.</p>
          <div class="project-tech">
            <span class="tech-badge">Verilog HDL</span>
            <span class="tech-badge">Vivado</span>
            <span class="tech-badge">RISC-V ISA</span>
            <span class="tech-badge">Pipeline</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">View Details</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
        <div class="project-visual">🔧</div>
      </div>

      <div class="project-card">
        <div class="project-info">
          <h3>High-Speed DSP System</h3>
          <p>실시간 신호처리를 위한 FPGA 기반 고속 DSP 시스템. 병렬 처리 아키텍처와 최적화된 알고리즘으로 고성능 필터링을 구현했습니다.</p>
          <div class="project-tech">
            <span class="tech-badge">SystemVerilog</span>
            <span class="tech-badge">Xilinx Zynq</span>
            <span class="tech-badge">DSP</span>
            <span class="tech-badge">Real-time</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">View Details</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
        <div class="project-visual">📡</div>
      </div>

      <div class="project-card">
        <div class="project-info">
          <h3>Ultra Low-Power IoT SoC</h3>
          <p>IoT 애플리케이션을 위한 초저전력 SoC 설계. 고급 전력 관리 기법과 최적화된 아키텍처로 배터리 수명을 극대화했습니다.</p>
          <div class="project-tech">
            <span class="tech-badge">VHDL</span>
            <span class="tech-badge">Low Power</span>
            <span class="tech-badge">SoC</span>
            <span class="tech-badge">IoT</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">View Details</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
        <div class="project-visual">⚡</div>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="contact-section">
  <div class="container">
    <div class="contact-content">
      <h2 class="contact-title">Let's Build Something Amazing</h2>
      <p class="contact-text">
        혁신적인 하드웨어 프로젝트나 협업 기회에 관심이 있으시다면 언제든 연락해주세요.
      </p>
      <div class="contact-links">
        <a href="mailto:goeun.oh.dev@gmail.com" class="contact-link">
          📧 Email
        </a>
        <a href="https://github.com/goeun-oh" class="contact-link" target="_blank">
          💻 GitHub
        </a>
        <a href="https://linkedin.com/in/goeun-oh" class="contact-link" target="_blank">
          💼 LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>
{% endraw %}