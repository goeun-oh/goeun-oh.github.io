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
  /* Light theme colors */
  --bg: #ffffff;
  --bg-light: #f8fafc;
  --bg-section: #fafbfc;
  --text: #1a202c;
  --text-light: #4a5568;
  --text-lighter: #718096;
  --border: #e2e8f0;
  --border-light: #f7fafc;
  --accent: #3182ce;
  --accent-light: #bee3f8;
  --accent-hover: #2c5282;
  
  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Monaco', 'Roboto Mono', monospace;
  
  /* Font sizes */
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;
  
  /* Layout */
  --nav-height: 100px;
  --border-radius: 8px;
  --section-padding: 100px;
  --max-width: 1000px;
  
  /* Transitions */
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
}

/* Header - 기존 메뉴바 스타일 유지하되 라이트 테마로 조정 */
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

/* Counter for sections */
body {
  counter-reset: section;
}

/* Responsive Design - 기본 */
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

<!-- Header (기존 메뉴바 유지) -->
<header class="header">
  <div class="logo">
    <a href="/">Goeun's Space</a>
  </div>
  <nav class="nav">
    <ol>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#work">Work</a></li>
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
</div>
{% endraw %}