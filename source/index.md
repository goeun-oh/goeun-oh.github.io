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
  --max-width: 1400px;
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

/* Header - 수정된 버전 */
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
/* 모바일 전용 네비게이션 바 - 수정된 버전 */
.mobile-nav {
  display: none; /* 기본적으로 숨김 */
}

@media (max-width: 768px) {
  /* 기존 vertical-nav 숨기기 */
  .vertical-nav {
    display: none !important;
  }
  
  /* 모바일 네비게이션 표시 - 더 예쁜 디자인 */
  .mobile-nav {
    display: flex;
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(15px);
    padding: 8px 16px;
    border-radius: 20px;
    gap: 16px;
    z-index: 999;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .mobile-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    padding: 8px 6px;
    border-radius: 12px;
    transition: var(--transition);
    min-width: 35px;
  }
  
  .mobile-nav-item:hover {
    background: rgba(49, 130, 206, 0.1);
    transform: translateY(-2px);
  }
  
  .mobile-nav-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--text-lighter);
    transition: var(--transition);
  }
  
  .mobile-nav-item.active .mobile-nav-dot {
    background: var(--accent);
    transform: scale(2);
    box-shadow: 0 0 8px rgba(49, 130, 206, 0.4);
  }
  
  .mobile-nav-label {
    font-size: 8px;
    color: var(--text-light);
    font-family: var(--font-mono);
    text-align: center;
    font-weight: 500;
  }
  
  .mobile-nav-item.active .mobile-nav-label {
    color: var(--accent);
    font-weight: 600;
  }
}

/* 데스크톱에서는 확실히 숨김 */
@media (min-width: 769px) {
  .mobile-nav {
    display: none !important;
  }
}
.nav {
  width: auto; /* 추가 */
  overflow: visible; /* 추가 */
}

.nav ol {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  white-space: nowrap; /* 추가 - 줄바꿈 방지 */
  gap: 20px; /* 추가 - 메뉴 간격 */
}

.nav ol li {
  margin: 0; /* 기존 margin: 0 5px; 제거 */
  position: relative;
  font-size: var(--fz-sm);
}

/* 반응형 - 모바일에서 헤더 조정 */
@media (max-width: 1080px) {
  .header {
    padding: 0 30px; /* 50px에서 30px로 */
  }
  
  .nav ol {
    gap: 15px; /* 간격 줄이기 */
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 25px;
  }
  
  .nav ol {
    gap: 10px;
  }
  
  .nav ol li {
    font-size: var(--fz-xs); /* 폰트 크기 줄이기 */
  }
  
  .resume-button {
    padding: 0.5rem 0.75rem; /* 버튼 크기 줄이기 */
    font-size: var(--fz-xs);
  }
}

@media (max-width: 600px) {
  .header {
    padding: 0 15px;
  }
  
  .nav ol {
    gap: 8px;
  }
}
/* 모바일에서 하단 고정 네비게이션 */
@media (max-width: 768px) {
  .vertical-nav {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    background: rgba(17, 34, 64, 0.95);
    padding: 15px 25px;
    border-radius: 30px;
    z-index: 999;
    width: auto;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-item {
    margin: 0 8px;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    border-radius: 15px;
    transition: var(--transition);
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  .nav-label {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  
  .nav-number {
    display: none; /* 숫자 숨기기 */
  }
  
  .nav-dot {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.6);
    border: none;
  }
  
  .nav-dot.active {
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }
  
  .nav-item.active .nav-label {
    color: var(--accent);
  }
}
/* 아주 작은 화면용 추가 조정 */
@media (max-width: 480px) {
  .vertical-nav {
    right: 5px;
    padding: 15px 8px;
    min-width: 100px;
  }
  
  .nav-label {
    font-size: 10px;
  }
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
  max-width: 1800px; /* 1600px에서 더 넓게 */
  min-height: 100vh;
  padding: 0 150px;
}
.section {
  margin: 0 auto;
  padding: var(--section-padding) 0;
  max-width: 1200px; /* var(--max-width) 대신 고정값 */
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
  max-width: 1000px;
  text-align: left; /* center에서 left로 변경 */
}
.about-container {
  display: grid;
  grid-template-columns: 1fr 2fr;  /* 사진 : 기본정보 */
  gap: 40px; /* 기존 60px에서 살짝 줄여도 자연스러움 */
  align-items: start;
}

.about-right {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* center에서 flex-start로 변경 */
  padding-top: 20px; /* 위쪽 여백 추가 */
}
.about-inner {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: start;
  text-align: left;
}
.about-inner-new {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

.about-intro {
  text-align: center;
  font-size: var(--fz-xl);
}

.about-intro p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.about-text-main {
  font-size: var(--fz-lg);
}

.about-text-main p {
  margin: 0 0 20px;
  color: var(--text-light);
  line-height: 1.6;
}

/* 모바일 대응 */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
}
.about-text {
  font-size: var(--fz-lg);
}

.about-text p {
  margin: 0 0 20px;
  color: var(--text-light);
  line-height: 1.6;
}
.about-text-right {
  font-size: var(--fz-lg);
  margin-top: 20px;
}

.about-text-right p {
  margin: 0 0 20px;
  color: var(--text-light);
  line-height: 1.6;
}
.about-top {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: start;
  margin-bottom: 40px;
}

.about-text-left {
  font-size: var(--fz-lg);
}

.about-text-left p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

.about-bottom {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: var(--fz-lg);
}

.about-bottom p {
  margin: 0 0 20px;
  color: var(--text-light);
  line-height: 1.6;
}
.info-section {
  padding-top: 20px;
  margin-bottom: 40px;
}

.info-section h3 {
  font-size: 22px;
  margin-bottom: 24px;
  color: var(--text);
  font-weight: 600;
  border-left: 4px solid var(--accent);
  padding-left: 12px;
}

.info-grid {
  display: grid;
  row-gap: 14px;
}

/* 라벨 */
.info-label {
  font-size: 16px;
  color: var(--text);
  font-weight: 500;
  min-width: 120px;
  display: inline-block;
}

/* 값 */
.info-value {
  font-size: 16px;
  color: var(--text-light);
  font-weight: 400;
}

/* 항목 전체 */
.info-item {
  display: flex;
  align-items: baseline;
  column-gap: 16px;
  border-bottom: 1px solid rgba(226, 232, 240, 0.5); /* subtle 라인 */
  padding-bottom: 6px;
}

/* 모바일 대응 */
@media (max-width: 768px) {
  .about-top {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
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
  max-width: 280px;
  margin: 0 auto 40px auto; /* 아래 여백 줌 */
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
  object-fit: cover;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #3182ce, #2c5282);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 72px; /* 48px에서 64px로 확대 */
}
.about-basic-info {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}
/* 모바일 대응 */
@media (max-width: 768px) {
  .about-container {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: left;
  }
  
  .about-basic-info {
      text-align: left;
      margin-bottom: 40px; /* 모바일에서 적당한 여백 */
  }
  
  .about-subjects {
      text-align: left;
  }
  
  .info-item {
      justify-content: flex-start;
  }

  .numbered-heading:after {
      width: 100px;
  }

  .subjects-grid {
      grid-template-columns: 1fr;
      gap: 20px;
  }
  
  .category-subjects {
      gap: 8px; /* 간격 줄임 */
  }
  
  .subject-item {
      min-width: 140px; /* 최소 너비 늘림 */
      flex: 0 1 calc(50% - 4px); /* 강제로 2개씩 배치 */
      font-size: var(--fz-xs);
      padding: 6px 8px;
  }
  
  .subject-name {
      font-size: var(--fz-xs); /* 과목명 폰트 크기 줄임 */
  }
  
  .subject-grade {
      font-size: 10px; /* 성적 폰트 더 작게 */
      padding: 1px 4px; /* 성적 패딩 줄임 */
  }

  .about-right {
      justify-content: center;
      margin-top: 30px;
  }
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
/* Projects Section */
/* Projects Section */
.projects {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 80px 50px;
}

.projects .numbered-heading {
  max-width: 1000px;
  margin: 0 auto 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr; /* 2fr에서 1fr로 변경 */
  gap: 30px;
  max-width: 800px; /* 1400px에서 800px로 줄임 */
  margin: 0 auto;
}
.project-card {
  background: var(--bg-light);
  padding: 30px; /* 20px에서 30px로 늘림 */
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  transition: var(--transition);
  text-align: left;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-image {
  width: 100%;
  height: 150px; /* 120px에서 150px로 늘림 */
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: var(--border-radius);
  margin-bottom: 20px; /* 15px에서 20px로 늘림 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem; /* 2rem에서 2.5rem로 늘림 */
  color: white;
  transition: var(--transition);
}

.project-description {
  color: var(--text-light);
  font-size: var(--fz-md); /* var(--fz-sm)에서 다시 늘림 */
  line-height: 1.6; /* 1.5에서 1.6으로 */
  margin-bottom: 20px; /* 15px에서 20px로 */
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 3줄에서 4줄로 늘림 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px -15px rgba(26, 32, 44, 0.3);
  border-color: var(--accent);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}
.project-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.project-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.project-title {
  font-size: var(--fz-xl);
  font-weight: 600;
  color: var(--text);
  margin: 0;
  line-height: 1.3;
}

.project-links {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  margin-left: 15px;
}

.project-link {
  color: var(--text-light);
  font-size: var(--fz-lg);
  transition: var(--transition);
  text-decoration: none;
  padding: 5px;
}

.project-link:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.project-description {
  color: var(--text-light);
  font-size: var(--fz-sm); /* var(--fz-md)에서 작게 */
  line-height: 1.5; /* 1.6에서 1.5로 */
  margin-bottom: 15px; /* 20px에서 15px로 */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 3줄로 제한 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px; /* 8px에서 6px로 */
  margin-top: auto;
}

.project-tech-tag {
  background: var(--bg);
  color: var(--text-light);
  padding: 4px 8px; /* 6px 12px에서 줄임 */
  border-radius: 12px; /* 15px에서 12px로 */
  font-size: var(--fz-xs);
  font-weight: 500;
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  transition: var(--transition);
}
.project-tech-tag:hover {
  background: var(--accent-light);
  color: var(--accent-hover);
  border-color: var(--accent);
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
/* Vertical Navigation - 연결선 제거한 버전 */
.vertical-nav {
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px 20px;
  border-radius: 25px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px -10px rgba(26, 32, 44, 0.15);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: var(--transition);
  padding: 8px 0;
  position: relative;
}

.nav-item:hover {
  transform: translateX(-5px);
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--border);
  border: 2px solid var(--bg);
  transition: var(--transition);
  position: relative;
  flex-shrink: 0;
}

.nav-dot.active {
  background: var(--accent);
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(49, 130, 206, 0.3);
}

.nav-item:hover .nav-dot {
  background: var(--accent);
  transform: scale(1.2);
}

.nav-label {
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--text-light);
  font-weight: 500;
  transition: var(--transition);
  opacity: 1;
  white-space: nowrap;
}

.nav-item.active .nav-label {
  color: var(--accent);
  font-weight: 600;
}

.nav-item:hover .nav-label {
  color: var(--accent);
}

.nav-number {
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--accent);
  font-weight: 600;
  margin-right: 5px;
  opacity: 0.8;
}

/* 호버 효과 */
.vertical-nav:hover {
  transform: translateY(-50%) scale(1.02);
  box-shadow: 0 15px 40px -10px rgba(26, 32, 44, 0.2);
}


/* 태블릿에서 간소화 */
@media (max-width: 1024px) {
  .vertical-nav {
    right: 20px;
    padding: 25px 15px;
  }
  
  .nav-label {
    font-size: var(--fz-xs);
  }
  
  .nav-item {
    gap: 10px;
  }
}
/* 페이지 제목 카드 숨기기 */
.mdui-card-primary-title {
  display: none !important;
}
.mdui-card-primary-subtitle {
  display: none !important;
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
.logo a {
  color: var(--accent);
  font-family: var(--font-mono);
  text-decoration: none;
  font-size: var(--fz-xxl); /* var(--fz-lg)에서 var(--fz-xxl)로 변경 */
  font-weight: 700; /* 600에서 700으로 더 굵게 */
}
/* Responsive Design */
@media (max-width: 1080px) {
  .main {
    padding: 0 80px; /* 100px에서 80px로 */
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
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; /* 30px에서 20px로 줄임 */
    margin-top: 50px;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px; /* 15px에서 10px로 */
  }
  
  .project-links {
    margin-left: 0;
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
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Header -->
<header class="header">
  <div class="logo">
    <a href="/">Goeun's Space</a>
  </div>
  <!--<nav class="nav">
    <ol>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
  </nav>-->
</header>

<!-- Main Content -->
<div class="main">

<!-- About Section - 수정된 버전 -->
<!-- About Section - 구조 수정된 버전 -->
<!-- About Section - 사진 → 기본정보 순 세로 배치 -->
<section id="about" class="about-section section">
  <h2 class="numbered-heading">About Me</h2>

  <!-- 프로필 사진 (1행 전체) -->
  <div class="about-pic" style="margin-bottom: 40px;">
    <div class="wrapper">
      <img src="images/profile.jpg" alt="고은 프로필 사진" class="img">
    </div>
  </div>
  <!-- 기본 정보 나열 -->
  <div class="about-basic-info">
   <div class="info-section">
  <div class="info-grid">
    <div class="info-item">
      <span class="info-label"><strong>이름</strong></span>
      <span class="info-value">오고은</span>
    </div>
    <div class="info-item">
      <span class="info-label"><strong>최종학력</strong></span>
      <span class="info-value">아주대학교 학사 졸업</span>
    </div>
    <div class="info-item">
      <span class="info-label"><strong>학과</strong></span>
      <span class="info-value">전자공학과</span>
    </div>
    <div class="info-item">
      <span class="info-label"><strong>어학 점수</strong></span>
      <span class="info-value">IM2</span>
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
          <span class="skill-tag">Verilog</span>
          <span class="skill-tag">SystemVerilog</span>
          <span class="skill-tag">Vivado</span>
          <span class="skill-tag">Vitis</span>
          <span class="skill-tag">ModelSim</span>
          <span class="skill-tag">Synopsys Vcs & Verdi</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">C</span>
          <span class="skill-tag">Java</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <!-- Projects Section -->
  <section id="projects" class="projects-section section">
    <h2 class="numbered-heading">Featured Projects</h2>
    <a href="projects/risc-v-processor.html" class="project-card-link">
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">🔧</div>
        <div class="project-header">
          <h3 class="project-title">RISC-V 프로세서 설계</h3>
          <div class="project-links">
          </div>
        </div>
        <p class="project-description">
          32비트 RISC-V ISA 기반 프로세서를 Verilog로 설계했습니다. 
          5단계 파이프라인 구조를 구현하여 성능을 최적화하고, 
          메모리 계층 구조와 캐시 시스템을 포함합니다.
        </p>
        <div class="project-tech">
          <span class="project-tech-tag">Verilog HDL</span>
          <span class="project-tech-tag">RISC-V</span>
          <span class="project-tech-tag">Vivado</span>
          <span class="project-tech-tag">FPGA</span>
        </div>
      </div>
      </a>
      <div class="project-card">
        <div class="project-image">⚡</div>
        <div class="project-header">
          <h3 class="project-title">VGA</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="GitHub">📂</a>
          </div>
        </div>
        <p class="project-description">
          VGA
        </p>
        <div class="project-tech">
          <span class="project-tech-tag">SystemVerilog</span>
          <span class="project-tech-tag">Low Power</span>
          <span class="project-tech-tag">SoC Design</span>
          <span class="project-tech-tag">UPF</span>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">🎯</div>
        <div class="project-header">
          <h3 class="project-title">APB Bus</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="GitHub">📂</a>
            <a href="#" class="project-link" title="Paper">📄</a>
          </div>
        </div>
        <p class="project-description">
          FFT 및 FIR 필터링을 위한 하드웨어 가속기를 개발했습니다. 
          병렬 처리 아키텍처를 통해 실시간 신호처리 성능을 달성하고 
          메모리 대역폭을 최적화했습니다.
        </p>
        <div class="project-tech">
          <span class="project-tech-tag">VHDL</span>
          <span class="project-tech-tag">DSP</span>
          <span class="project-tech-tag">FFT</span>
          <span class="project-tech-tag">Xilinx</span>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">🔐</div>
        <div class="project-header">
          <h3 class="project-title">AES 암호화 모듈</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="GitHub">📂</a>
            <a href="#" class="project-link" title="Demo">🚀</a>
          </div>
        </div>
        <p class="project-description">
          AES-256 암호화/복호화 하드웨어 모듈을 구현했습니다. 
          파이프라인 구조로 처리량을 향상시키고, 
          사이드채널 공격에 대한 보안성을 강화했습니다.
        </p>
        <div class="project-tech">
          <span class="project-tech-tag">Verilog</span>
          <span class="project-tech-tag">Cryptography</span>
          <span class="project-tech-tag">Security</span>
          <span class="project-tech-tag">AES</span>
        </div>
      </div>
    </div>
  </section>
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


<!-- Vertical Navigation -->
<nav class="vertical-nav">
  <div class="nav-item" onclick="scrollToSection('about')">
    <span class="nav-number">01</span>
    <div class="nav-dot"></div>
    <span class="nav-label">About</span>
  </div>
  <div class="nav-item" onclick="scrollToSection('skills')">
    <span class="nav-number">02</span>
    <div class="nav-dot"></div>
    <span class="nav-label">Skills</span>
  </div>
  <div class="nav-item" onclick="scrollToSection('projects')">
    <span class="nav-number">03</span>
    <div class="nav-dot"></div>
    <span class="nav-label">Projects</span>
  </div>
  <div class="nav-item" onclick="scrollToSection('contact')">
    <span class="nav-number">04</span>
    <div class="nav-dot"></div>
    <span class="nav-label">Contact</span>
  </div>
</nav>
<!-- 🔥 여기에 모바일 네비게이션 추가! -->
<nav class="mobile-nav">
  <div class="mobile-nav-item" onclick="scrollToSection('about')">
    <div class="mobile-nav-dot"></div>
    <span class="mobile-nav-label">About</span>
  </div>
  <div class="mobile-nav-item" onclick="scrollToSection('skills')">
    <div class="mobile-nav-dot"></div>
    <span class="mobile-nav-label">Skills</span>
  </div>
  <div class="mobile-nav-item" onclick="scrollToSection('projects')">
    <div class="mobile-nav-dot"></div>
    <span class="mobile-nav-label">Projects</span>
  </div>
  <div class="mobile-nav-item" onclick="scrollToSection('contact')">
    <div class="mobile-nav-dot"></div>
    <span class="mobile-nav-label">Contact</span>
  </div>
</nav>

<script>
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  const sections = ['about', 'skills', 'projects', 'contact'];
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item'); // 🔥 추가!
  
  let current = '';
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section;
      }
    }
  });
  
  // 데스크톱 네비게이션 업데이트
  navItems.forEach((item, index) => {
    item.classList.remove('active');
    if (sections[index] === current) {
      item.classList.add('active');
    }
  });
  
  // 🔥 모바일 네비게이션 업데이트 (새로 추가!)
  mobileNavItems.forEach((item, index) => {
    item.classList.remove('active');
    if (sections[index] === current) {
      item.classList.add('active');
    }
  });
});
</script>

<!-- Footer -->
<footer class="footer">
<!-- Footer -->
<footer class="footer">
  <div class="credit">
    <p>&copy; 2025 Goeun Oh. Built with <a href="https://hexo.io/" target="_blank">Hexo</a></p>
  </div>
</footer>
{% endraw %}
