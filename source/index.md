---
title: goeun's space
layout: page
---

{% raw %}
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #ffffff;
  --bg-light: #f8fafc;
  --text: #1a202c;
  --text-light: #4a5568;
  --text-lighter: #718096;
  --border: #e2e8f0;
  --accent: #3182ce;
  --accent-light: #bee3f8;
  --accent-hover: #2c5282;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Monaco', 'Roboto Mono', monospace;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;
  --nav-height: 100px;
  --border-radius: 8px;
  --section-padding: 100px;
  --max-width: 1000px;
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: var(--fz-lg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  counter-reset: section;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.logo a {
  color: var(--accent);
  font-family: var(--font-mono);
  text-decoration: none;
  font-size: var(--fz-lg);
  font-weight: 600;
}

.nav ol {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav ol li {
  margin: 0 5px;
  position: relative;
  font-size: var(--fz-sm);
}

.nav a {
  padding: 10px;
  text-decoration: none;
  color: var(--text-light);
  font-family: var(--font-mono);
  font-weight: 400;
  transition: var(--transition);
}

.nav a:hover {
  color: var(--accent);
}

.resume-button {
  color: var(--accent) !important;
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);
  margin-left: 15px;
}

.resume-button:hover {
  background-color: var(--accent-light);
}

/* Main Layout */
.main {
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0 150px;
}

.section {
  margin: 0 auto;
  padding: var(--section-padding) 0;
  max-width: var(--max-width);
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  padding: 0;
}

.hero-content {
  max-width: 800px;
}

.hero .intro {
  margin: 0 0 30px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;
}

.hero h1 {
  margin: 0 0 30px;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}

.hero h2 {
  margin: 0 0 30px;
  color: var(--text-light);
  line-height: 1.1;
  font-size: clamp(35px, 7vw, 70px);
  font-weight: 600;
}

.hero .description {
  margin: 20px 0 50px;
  max-width: 600px;
  color: var(--text-light);
  font-size: var(--fz-xl);
  line-height: 1.6;
}

.hero .cta-button {
  color: var(--accent);
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: var(--border-radius);
  padding: 1.25rem 2rem;
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
}

.hero .cta-button:hover {
  background-color: var(--accent-light);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(49, 130, 206, 0.2);
}

/* Numbered Headings */
.numbered-heading {
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  font-weight: 600;
  white-space: nowrap;
  color: var(--text);
}

.numbered-heading:before {
  position: relative;
  bottom: 4px;
  counter-increment: section;
  content: '0' counter(section) '.';
  margin-right: 10px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
  font-weight: 400;
}

.numbered-heading:after {
  content: '';
  display: block;
  position: relative;
  top: -5px;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: var(--border);
}

/* About Section */
.about-section {
  max-width: 900px;
  text-align: center;
}

.about-inner {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: start;
  text-align: left;
}

.about-text {
  font-size: var(--fz-lg);
}

.about-text p {
  margin: 0 0 20px;
  color: var(--text-light);
  line-height: 1.6;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px;
  padding: 0;
  margin: 25px 0 0 0;
  list-style: none;
}

.skills-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--text-light);
}

.skills-list li:before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: var(--fz-md);
  line-height: 12px;
}

.about-pic {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
}

.about-pic .wrapper {
  box-shadow: 0 10px 30px -15px rgba(26, 32, 44, 0.1);
  transition: var(--transition);
  display: block;
  position: relative;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--accent);
}

.about-pic .wrapper:hover {
  box-shadow: 0 20px 30px -15px rgba(26, 32, 44, 0.2);
  transform: translate(-10px, -10px);
}

.about-pic .wrapper:hover:after {
  transform: translate(10px, 10px);
}

.about-pic .wrapper:after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--accent);
  top: 20px;
  left: 20px;
  z-index: -1;
  transition: var(--transition);
  border-radius: var(--border-radius);
}

.about-pic .img {
  position: relative;
  border-radius: var(--border-radius);
  transition: var(--transition);
  width: 100%;
  height: auto;
  vertical-align: middle;
  background-color: var(--bg-light);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--text-lighter);
}

/* Skills Grid Section */
.skills-section {
  max-width: 1000px;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.skill-card {
  background: var(--bg-light);
  padding: 30px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  transition: var(--transition);
  text-align: left;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -15px rgba(26, 32, 44, 0.2);
  border-color: var(--accent);
}

.skill-category {
  font-size: var(--fz-xl);
  font-weight: 600;
  color: var(--text);
  margin-bottom: 20px;
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
  background: var(--bg);
  color: var(--text-light);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: var(--fz-sm);
  font-weight: 500;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.skill-tag:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
}

/* Contact Section */
.contact-section {
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
}

.contact-section .overline {
  display: block;
  margin-bottom: 20px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;
}

.contact-section .title {
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 600;
  color: var(--text);
  margin-bottom: 20px;
}

.contact-section .description {
  color: var(--text-light);
  font-size: var(--fz-xl);
  line-height: 1.6;
  margin-bottom: 50px;
}

.contact-section .email-link {
  color: var(--accent);
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: var(--border-radius);
  padding: 1.25rem 2rem;
  font-size: var(--fz-md);
  font-family: var(--font-mono);
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
}

.contact-section .email-link:hover {
  background-color: var(--accent-light);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(49, 130, 206, 0.2);
}

/* Footer */
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  border-top: 1px solid var(--border);
  margin-top: 100px;
}

.footer .credit {
  color: var(--text-lighter);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  line-height: 1;
}

.footer .credit a {
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
}

.footer .credit a:hover {
  color: var(--accent);
}

/* Responsive Design */
@media (max-width: 1080px) {
  .main {
    padding: 0 100px;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 0 50px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .header {
    padding: 0 25px;
  }
  
  .hero h1 {
    font-size: clamp(30px, 8vw, 60px);
  }
  
  .hero h2 {
    font-size: clamp(25px, 7vw, 50px);
  }
  
  .about-inner {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  .skills-list {
    grid-template-columns: repeat(1, minmax(140px, 200px));
    justify-content: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .main {
    padding: 0 25px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .header {
    padding: 0 15px;
  }
  
  .numbered-heading:after {
    width: 100%;
  }
}
</style>

<!-- Header -->
<header class="header">
  <div class="logo">
    <a href="/">Goeun's Space</a>
  </div>
  <nav class="nav">
    <ol>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
    <div>
      <a class="resume-button" href="/archives" target="_blank">Blog</a>
    </div>
  </nav>
</header>

<!-- Main Content -->
<div class="main">
  <!-- Hero Section -->
  <section class="hero section">
    <div class="hero-content">
      <p class="intro">안녕하세요, 저는</p>
      <h1>고은입니다.</h1>
      <h2>디지털회로 설계 엔지니어입니다.</h2>
      <p class="description">
        혁신적인 하드웨어 솔루션을 설계하며, FPGA와 ASIC을 통해 
        미래 기술의 기반을 구축하는 것에 열정을 가지고 있습니다. 
        효율적이고 창의적인 디지털 시스템 설계를 추구합니다.
      </p>
      <a class="cta-button" href="mailto:goeun.oh.dev@gmail.com">연락하기</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section section">
    <h2 class="numbered-heading">About Me</h2>
    <div class="about-inner">
      <div>
        <div class="about-text">
          <p>
            안녕하세요! 저는 효율적이고 혁신적인 디지털 시스템을 설계하는 것에 열정을 가진 
            디지털회로 설계 엔지니어입니다.
          </p>
          <p>
            FPGA, ASIC 설계부터 시스템 최적화까지 다양한 하드웨어 설계 기술을 익히며, 
            항상 더 나은 성능과 효율성을 추구합니다. 첨단 기술과 창의적 사고를 결합하여 
            미래 지향적인 디지털 솔루션을 개발하고 싶습니다.
          </p>
          <p>
            최근에는 저전력 설계와 고성능 프로세서 아키텍처에 특히 관심을 가지고 
            다양한 프로젝트를 진행하고 있습니다.
          </p>
          <p>다음은 제가 최근에 작업하고 있는 기술들입니다:</p>
          <ul class="skills-list">
            <li>Verilog HDL</li>
            <li>SystemVerilog</li>
            <li>VHDL</li>
            <li>Vivado</li>
            <li>Quartus Prime</li>
            <li>ModelSim</li>
            <li>RISC-V</li>
            <li>FPGA Design</li>
            <li>ASIC Design</li>
            <li>Digital Signal Processing</li>
          </ul>
        </div>
      </div>
      <div class="about-pic">
        <div class="wrapper">
          <div class="img">👩‍💻</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills-section section">
    <h2 class="numbered-heading">Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <div class="skill-category">
          HDL & Design
        </div>
        <div class="skill-tags">
          <span class="skill-tag">Verilog HDL</span>
          <span class="skill-tag">VHDL</span>
          <span class="skill-tag">SystemVerilog</span>
          <span class="skill-tag">Digital Logic</span>
          <span class="skill-tag">RTL Design</span>
          <span class="skill-tag">FSM Design</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-category">
          EDA Tools
        </div>
        <div class="skill-tags">
          <span class="skill-tag">Vivado</span>
          <span class="skill-tag">Quartus Prime</span>
          <span class="skill-tag">ModelSim</span>
          <span class="skill-tag">Synopsys DC</span>
          <span class="skill-tag">Cadence</span>
          <span class="skill-tag">QuestaSim</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-category">
          Hardware Platforms
        </div>
        <div class="skill-tags">
          <span class="skill-tag">Xilinx FPGA</span>
          <span class="skill-tag">Intel FPGA</span>
          <span class="skill-tag">ASIC Design</span>
          <span class="skill-tag">SoC Design</span>
          <span class="skill-tag">RISC-V</span>
          <span class="skill-tag">ARM Cortex</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-category">
          Analysis & Verification
        </div>
        <div class="skill-tags">
          <span class="skill-tag">Timing Analysis</span>
          <span class="skill-tag">Power Analysis</span>
          <span class="skill-tag">Functional Verification</span>
          <span class="skill-tag">Logic Synthesis</span>
          <span class="skill-tag">DFT</span>
          <span class="skill-tag">Signal Integrity</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section section">
    <span class="overline">다음 단계는?</span>
    <h2 class="title">연락해주세요</h2>
    <p class="description">
      새로운 하드웨어 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락해주세요. 
      항상 흥미로운 프로젝트와 새로운 기회에 열려있습니다.
    </p>
    <a class="email-link" href="mailto:goeun.oh.dev@gmail.com">안녕하세요</a>
  </section>
</div>

<!-- Footer -->
<footer class="footer">
  <div class="credit">
    <p>&copy; 2025 Goeun Oh. Built with <a href="https://hexo.io/" target="_blank">Hexo</a></p>
  </div>
</footer>
{% endraw %}