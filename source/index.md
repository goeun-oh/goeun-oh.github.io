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
  --nav-height: 70px;
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

.mdui-toolbar {
  position: fixed!important;
  width: 100%;
  top: 0 !important;
  z-index: 1000 !important; /* 다른 요소 위에 표시 */
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px) !important;
  border-bottom: 1px solid var(--border) !important;
  height: var(--nav-height) !important;
  padding: 0 50px !important;
  display: flex !important;
  align-items: center !important;
  gap: 30px; /* 요소 간 간격 추가 */
  justify-content: flex-start !important;
}

.mdui-toolbar-spacer {
  flex-grow: 1;
}

.right-group {
  display: flex;
  align-items: center;
  gap: 24px;
}

.custom-nav {
  display: flex;
  gap: 20px;
}

.custom-nav-item {
  color: var(--text-light);
  font-size: var(--fz-md);
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: var(--transition);
  text-decoration: none;
}

.custom-nav-item:hover,
.custom-nav-item.active {
  color: #ff4081;
}
/* 햄버거 + 로고 + 메뉴 묶음 */
.toolbar-left-group {
  display: flex;
  align-items: center;
  gap: 40px; /* 로고와 메뉴 사이 간격 */
}

/* 🔥 툴바 내 로고 스타일 - 크고 굵게! */
.site-title {
  font-size: 24px;
  font-weight: 700;
  /* color: var(--accent); */
  font-family: var(--font-sans);
  letter-spacing: -0.02em;
  color: #ff4081 !important; /* 분홍색 (핑크 500) */
}

/* 로고 호버 효과 */
.site-title:hover {
  color: var(--accent-hover);
  transition: var(--transition);
  cursor: pointer;
  color: #ff4081 !important; /* 분홍색 (핑크 500) */
}

/* 네비게이션 메뉴 */
.custom-nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

/* 페이지 제목 카드만 숨기기 (사이드바는 유지) */
.mdui-card-primary-title,
.mdui-card-primary-subtitle,
.mdui-card-primary.mdui-ripple,
.mdui-m-x-0.mdui-m-t-4 {
  display: none !important;
}

.numbered-heading {
    font-family: __Black_Han_Sans_1e1a52,__Black_Han_Sans_Fallback_1e1a52 !important;
    font-style: normal !important;
    display: inline-block;
    margin: 0 auto 60px auto;
    font-size: 44px !important;
    font-weight: 800 !important;
    color: #000000;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    position: relative;
    white-space: nowrap;
    border-bottom: 3px solid #000000 !important;
    padding-bottom: 8px;
}

.about-info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 40px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
}

.about-section {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding: var(--section-padding) 0;
}

.info-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
}

.info-icon {
    width: 24px;
    height: 24px;
    color: #000000;
    flex-shrink: 0;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-content {
    flex: 1;
}

.info-label {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 4px;
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.info-value {
    font-size: 16px;
    color: #000000;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 768px) {
    /* 🔥 네비게이션 메뉴 완전히 숨기기 */
    .custom-nav {
        display: none !important;
    }
    
    /* 🔥 검색 버튼도 숨기기 (선택사항) */
    .right-group {
        display: none !important;
    }
    
    .mdui-toolbar {
        padding: 0 20px !important;
        justify-content: space-between !important; /* 햄버거와 로고 양쪽 배치 */
    }
    
    /* 🔥 로고 스타일 - 여유있게 */
    .site-title {
        font-size: 22px !important;
        font-weight: 700 !important;
        white-space: nowrap !important;
        flex: 1 !important;
        text-align: center !important; /* 가운데 정렬 */
        margin: 0 20px !important;
    }
    
    .numbered-heading {
        font-size: 32px !important;
    }
    
    .about-info-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
        padding: 0 20px !important;
    }
}



/* 아주 작은 화면 (320px 이하) */
@media (max-width: 375px) {
    .site-title {
        font-size: 16px !important;
        max-width: calc(100vw - 100px) !important;
    }
    
    .mdui-toolbar {
        padding: 0 10px !important;
    }
}

@media (max-width: 1024px) and (min-width: 769px) {
    .about-info-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px 30px;
    }
}


.skills-section {
    background:rgb(245, 245, 145);
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 100px;  /* 아래쪽만 padding */
}
.skill-category-name {
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
}

.skill-row {
  display: grid;
  grid-template-columns: 40px 100px auto;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
    /* ✅ 왼쪽 여백 주기 */
  padding-left: 20px;
}
.skills-container {
  padding-left: 24px !important;  /* 또는 margin-left */
  padding-right: 24px !important; /* 균형 맞추려면 우측도 */
}
.skill-tag {
  white-space: nowrap !important;
  font-size: 0.875rem !important;
  padding-top: 0.25rem !important;
  padding-right: 0.75rem !important;
  padding-bottom: 0.25rem !important;
  padding-left: 0.75rem !important;
  border-top-left-radius: 0.5rem !important;
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
  font-weight: 500 !important;
  flex-shrink: 0;
  width: auto !important;
}

@media (max-width: 768px) {
    .skills-container {
        width: calc(100% - 20px) !important;
        margin: 0 10px !important;
        padding: 20px !important;
        box-sizing: border-box !important;
    }

    .skill-row {
        display: grid !important;
        grid-template-columns: 1fr !important; /* 세로로 쌓기 */
        text-align: center !important;
        gap: 10px !important;
        margin-bottom: 30px !important;
        padding: 16px !important;
        background: rgba(255, 255, 255, 0.7) !important;
        border-radius: 12px !important;
    }

    .skill-row:last-child {
        margin-bottom: 0 !important;
    }

    .skill-icon {
        width: 50px !important;
        height: 50px !important;
        margin: 0 auto !important;
        background: #fff !important;
        border: 2px solid #ddd !important;
        border-radius: 10px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: #666 !important;
    }

    .skill-category-name {
        font-size: 16px !important;
        font-weight: 600 !important;
        color: #2d3748 !important;
        margin: 0 !important;
    }
    .skills-title {
        font-size: 36px !important;
        margin-bottom: 40px !important;
    }
}
.skills-icon {
    width: 40px;
    height: 40px;
    color: #2d3748;
}

.skill-icon svg {
    width: 24px;
    height: 24px;
}
.skill-icon{
  width: 50px !important;
  height: 50px !important;
  margin: 0 auto !important;
  background: #fff !important;
  border: 2px solid #ddd !important;
  border-radius: 10px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #666 !important;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 12px;
}
/* ✅ skill-tags 영역을 grid로 변환 */
.skill-tags.language-row,
.skill-tags.tools-row {
  /* display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(120px, auto)) !important; */
  justify-content: start !important; /* 왼쪽 정렬 */
  gap: 12px 16px !important;
  padding: 12px 0;
}

@media (max-width: 768px) {
  .skill-tags.language-row,
  .skill-tags.tools-row {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)) !important;
    justify-content: center !important;
    padding: 8px;
  }

  .skill-tag {
    white-space: normal !important;   /* ✅ 줄바꿈 허용 */
    word-break: break-word !important;/* ✅ 단어 중간에라도 끊어서 줄바꿈 */
    min-width: 60px !important;       /* ✅ 최소 너비 확보 */
    max-width: 100% !important;       /* ✅ 너무 커지지 않도록 제한 */
    text-align: center !important;    /* ✅ 가운데 정렬 */
    padding: 6px 8px !important;      /* ✅ 내부 여백 조금 줄이기 */
    box-sizing: border-box;
  }
}


.skill-tags.language-row::-webkit-scrollbar,
.skill-tags.tools-row::-webkit-scrollbar {
  display: none;                        /* 크롬 스크롤 숨기기 */
}


/* Language Skills - 사진과 같은 색상 */
.language-row .skill-tag:nth-child(1) { background: #4a90e2; } /* Verilog */
.language-row .skill-tag:nth-child(2) { background: #50c878; } /* SystemVerilog */
.language-row .skill-tag:nth-child(3) { background: #7b68ee; } /* Python */
.language-row .skill-tag:nth-child(4) { background: #ff6b6b; } /* Java */
.language-row .skill-tag:nth-child(5) { background: #ffa500; } /* C */

/* Tools - 사진과 같은 색상 */
.tools-row .skill-tag:nth-child(1) { background: #4a90e2; } /* Vivado */
.tools-row .skill-tag:nth-child(2) { background: #50c878; } /* Vitis */
.tools-row .skill-tag:nth-child(3) { background: #7b68ee; } /* ModelSim */
.tools-row .skill-tag:nth-child(4) { background: #ff6b6b; } /* PsPice */
.tools-row .skill-tag:nth-child(5) { background: #ffa500; } /* Synopsys Verdi */
.tools-row .skill-tag:nth-child(6) { background: #20b2aa; } /* Synopsys VCS */


.skill-tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
@media (max-width: 768px) {
    .skills-container {
        padding: 30px 20px;
    }

    .skill-category {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .category-content {
        width: 100%;
    }

    .skills-title {
        font-size: 36px;
        flex-direction: column;
        gap: 10px;
    }

    .skills-icon {
        width: 40px;
        height: 40px;
    }
}
@media (max-width: 768px) {
    .skill-row {
        grid-template-columns: 1fr !important; /* 1컬럼 */
        text-align: center !important;
        gap: 15px !important;
    }

    .skill-icon {
        margin: 0 auto !important;
    }

    .skill-category-name {
        font-size: 18px !important;
        font-weight: 600 !important;
    }

    .skill-tags {
        justify-content: center !important;
        max-width: 100% !important;
    }
}

/* Projects Section Styles */
.projects-section {
    background: #f8fafc;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: var(--section-padding) 0;
}

.filter-section {
    text-align: center;
    margin-bottom: 40px;
}

.filter-checkbox {
    margin: 0 10px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 1.1rem;
    color: #2c3e50;
}

.filter-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #ff4081;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 30px;
    margin-top: 40px;
    padding: 0 20px;
}

.project-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid #e0e0e0;
    position: relative;
    overflow: hidden;
    text-align: left;
}

.project-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #f39c12);
}

.project-card:nth-child(2)::before {
    background: linear-gradient(90deg, #3498db, #2ecc71);
}

.project-card:nth-child(3)::before {
    background: linear-gradient(90deg, #9b59b6, #e67e22);
}

.project-card:nth-child(4)::before {
    background: linear-gradient(90deg, #1abc9c, #16a085);
}

.project-card:nth-child(5)::before {
    background: linear-gradient(90deg, #f1c40f, #e67e22);
}

.project-card:nth-child(6)::before {
    background: linear-gradient(90deg, #e74c3c, #c0392b);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.project-title {
    background: #e74c3c;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 600;
    display: inline-block;
}

.project-card:nth-child(2) .project-title {
    background: #ff4081;
}

.project-card:nth-child(3) .project-title {
    background: #9b59b6;
}

.project-card:nth-child(4) .project-title {
    background: #1abc9c;
}

.project-card:nth-child(5) .project-title {
    background: #f1c40f;
    color: #333;
}

.project-card:nth-child(6) .project-title {
    background: #e74c3c;
}

.project-date {
    color: #7f8c8d;
    font-size: 0.9rem;
    font-weight: 500;
}

.project-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 15px 0;
    line-height: 1.4;
}

.project-description {
    margin-bottom: 20px;
}

.project-description ul {
    list-style: none;
    padding-left: 0;
}

.project-description li {
    margin-bottom: 8px;
    padding-left: 20px;
    position: relative;
    color: #555;
    font-size: 0.95rem;
}

.project-description li::before {
    content: "•";
    color: #ff4081;
    position: absolute;
    left: 0;
    font-weight: bold;
}

.project-link {
    display: inline-block;
    color: #ff4081;
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 15px;
    padding: 5px 0;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.3s ease;
}

.project-link:hover {
    border-bottom-color: #ff4081;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.tech-tag {
    background: #f8f9fa;
    color: #495057;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid #dee2e6;
    font-weight: 500;
}

.project-buttons {
    display: flex;
    gap: 15px;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #2c3e50;
    color: white;
}

.btn-primary:hover {
    background: #34495e;
    transform: translateY(-2px);
}

.btn-secondary {
    background: #ecf0f1;
    color: #2c3e50;
    border: 1px solid #bdc3c7;
}

.btn-secondary:hover {
    background: #d5dbdb;
    transform: translateY(-2px);
}

/* 모바일 반응형 */
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 10px;
    }
    
    .project-card {
        padding: 20px;
    }
    
    .project-header {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
    
    .project-buttons {
        flex-direction: column;
        gap: 10px;
    }
    
    .btn {
        justify-content: center;
        text-align: center;
    }
    
    .tech-stack {
        justify-content: center;
    }
}
</style>

<!-- Main Content -->
<div class="main">
<section id="about" class="about-section">
    <h2 class="numbered-heading">ABOUT ME</h2>
    <div class="about-info-grid">
        <div class="info-item">
            <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            </div>
            <div class="info-content">
                <div class="info-label">이름</div>
                <div class="info-value">오고은</div>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
            </div>
            <div class="info-content">
                <div class="info-label">생년월일</div>
                <div class="info-value">98.01.10</div>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            </div>
            <div class="info-content">
                <div class="info-label">위치</div>
                <div class="info-value">경기도 용인시</div>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
            </div>
            <div class="info-content">
                <div class="info-label">연락처</div>
                <div class="info-value">010-7251-3263</div>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </div>
            <div class="info-content">
                <div class="info-label">이메일</div>
                <div class="info-value">qw433812@gmail.com</div>
            </div>
        </div>
        <div class="info-item">
            <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
            </div>
            <div class="info-content">
                <div class="info-label">학력</div>
                <div class="info-value">아주대학교 (전자공학과)</div>
            </div>
        </div>
</section>
<!-- Skills Section -->
<section id="skills" class="skills-section">
    <h2 class="numbered-heading">
        SKILLS
    </h2>
    <div class="skills-container">
        <div class="skill-row">
            <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">Add commentMore actions
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
            </div>
            <div class="skill-category-name">Language</div>
            <div class="skill-tags language-row">
                <div class="skill-tag">Verilog</div>
                <div class="skill-tag">SystemVerilog</div>
                <div class="skill-tag">Python</div>
                <div class="skill-tag">Java</div>
                <div class="skill-tag">C</div>
            </div>
        </div>
        <div class="skill-row">
            <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            </div>
            <div class="skill-category-name">Tools</div>
            <div class="skill-tags tools-row">
                <span class="skill-tag">Vivado</span>
                <span class="skill-tag">Vitis</span>
                <span class="skill-tag">ModelSim</span>
                <span class="skill-tag">PsPice</span>
                <span class="skill-tag">Synopsys Verdi</span>
                <span class="skill-tag">Synopsys VCS</span>
            </div>
        </div>
    </div>
</section>
<!-- Projects Section -->
<section id="projects" class="projects-section">
    <h2 class="numbered-heading">PROJECTS</h2>
    <div class="filter-section">
        <label class="filter-checkbox">
            <input type="checkbox" id="filter-projects" checked>
            주요 프로젝트만 보기
        </label>
    </div>
    <div class="projects-grid">
        <!-- Project 1: react-bulk-form -->
        <div class="project-card">
            <div class="project-header">
                <span class="project-title">react-bulk-form</span>
                <span class="project-date">2025.03</span>
            </div>
            <h3 class="project-name">Form 상태의 일괄 관리를 위한 간단한 React 라이브러리</h3>
            <div class="project-description">
                <ul>
                    <li>Form 필드 간의 요통성 편성 기반의 통합 절차의 일괄 관리</li>
                    <li>Form 노드 필드 단위의 상태 추적</li>
                    <li>Form 상태에 따른 컴포넌트 세이별 단계의 부가적인 인터페이스 최소화</li>
                </ul>
            </div>
            <div class="tech-stack">
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">React</span>
            </div>
            <div class="project-buttons">
                <a href="#" class="btn btn-primary">📖 README</a>
            </div>
        </div>
        <!-- Project 2: IT 엘도라도 블로그 -->
        <div class="project-card">
            <div class="project-header">
                <span class="project-title">IT 엘도라도 (블로그)</span>
                <span class="project-date">2024.09 (1人 개인 프로젝트)</span>
            </div>
            <h3 class="project-name">Notion API/DB와 연동하여 개발한 개인 블로그</h3>
            <div class="project-description">
                <ul>
                    <li>티스토리 블로그에서의 불편함을 해소하고자 직접 개발</li>
                    <li>별도의 데이터베이스 서버 없이 Notion API/DB와 연동하여 개발</li>
                    <li>감성 연간 최적화(SEO) 고도화 및 검색 마이그레이션 등의 기능</li>
                    <li>무한 스크롤, 방문/조회 수 추적, 댓글/좋아요 등의 커뮤니티 기능 개발</li>
                </ul>
            </div>
            <div class="tech-stack">
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Next.js</span>
                <span class="tech-tag">Zustand</span>
                <span class="tech-tag">React-Query</span>
                <span class="tech-tag">Tailwind CSS</span>
                <span class="tech-tag">Notion</span>
                <span class="tech-tag">Vercel</span>
            </div>
            <div class="project-buttons">
                <a href="#" class="btn btn-primary">📖 README</a>
            </div>
        </div>
        <!-- Project 3: FOSSLight Hub Lite -->
        <div class="project-card">
            <div class="project-header">
                <span class="project-title">FOSSLight Hub Lite</span>
                <span class="project-date">2023.09 - 2023.12 (2人 팀 프로젝트)</span>
            </div>
            <h3 class="project-name">LG 전자의 FOSSLight Hub 웹사이트를 사용자 기능 중심으로 리모델링한 웹사이트</h3>
            <div class="project-description">
                <ul>
                    <li>LG 전자에서 라이선스 어디 사용자를 위한 간소화 버전의 웹사이트 개발을 요청</li>
                    <li>기존 FOSSLight Hub 프로젝트의 환경에 특사시 기존 사용자들의 접근성 화면</li>
                    <li>내부 UI 웹이 리신시 서클 취득 서비스 화 시 자상하들의 안내성 화인</li>
                    <li>URL 위리 라이터피어 연동하는 정보/빌더 기능 및 모의 발기/단기 기능 구현</li>
                    <li>전반적인 UI/UX를 새롭게 설계하여 종합적인 사용성 개선</li>
                </ul>
            </div>
            <div class="tech-stack">
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Next.js</span>
                <span class="tech-tag">Recoil</span>
                <span class="tech-tag">React-Query</span>
                <span class="tech-tag">React-Hook-Form</span>
                <span class="tech-tag">Tailwind CSS</span>
            </div>
            <div class="project-buttons">
                <a href="#" class="btn btn-primary">📖 README</a>
                <a href="#" class="btn btn-secondary">🎥 영상</a>
            </div>
        </div>
        <!-- Project 4: 메이플스토리의 아이템이 찾아는 조건으로 경매장에 올리곤을 떼 일일펄을 받어보기 위한 웹사이트 -->
        <div class="project-card">
            <div class="project-header">
                <span class="project-title">메이플 경매장 올리기</span>
                <span class="project-date">2023.08 - 2023.09 (2人 팀 프로젝트)</span>
            </div>
            <h3 class="project-name">메이플스토리의 아이템이 찾아는 조건으로 경매장에 올리곤을 떼 일일펄을 받아보기 위한 웹사이트</h3>
            <div class="project-description">
                <ul>
                    <li>메이플스토리 특정 아이템의 확정적인 아이템이 찾아하여 개발</li>
                    <li>Nexus의 React 18 기반의 Next.js 13 업을 및 측위</li>
                    <li>React-Query, React-Hook-Form을 활용하여 API 요청 및 입력 폼 처리</li>
                    <li>Next.js 서버를 리페삼 프밗시를 활용하여 IP 노출 및 CORS 문제 해결</li>
                </ul>
            </div>
            <div class="tech-stack">
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Next.js</span>
                <span class="tech-tag">Recoil</span>
                <span class="tech-tag">React-Query</span>
                <span class="tech-tag">React-Hook-Form</span>
                <span class="tech-tag">Sass</span>
                <span class="tech-tag">Tailwind CSS</span>
                <span class="tech-tag">Vercel</span>
            </div>
            <div class="project-buttons">
                <a href="#" class="btn btn-primary">📖 README</a>
                <a href="#" class="btn btn-secondary">🖥 이미지</a>
            </div>
        </div>

        <!-- Project 5: 우는 노래 부우자? -->
        <div class="project-card">
            <div class="project-header">
                <span class="project-title">우는 노래 부우자?</span>
                <span class="project-date">2022.10 (1人 개인 프로젝트)</span>
            </div>
            <h3 class="project-name">ㄴ괄퇴을 즐기는 사람이 고종 부르면 노괘를 러반찮게 관리하는 사이트</h3>
            <div class="project-description">
                <ul>
                    <li>• 노래방에서 과려서 어떤 노래를 부를지 고민하는 사람들을 위한 서비스</li>
                    <li>• 남/여 기준시 연평곞 서치인 API 화이니딩롲적 아리솮니 프러닛</li>
                    <li>• 위밀여 모적 흰 노래와 활용된 ㅋ구분 체계와 체분법현대학명 시스토리 일어반다</li>
                </ul>
            </div>
            <div class="tech-stack">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
            </div>
            <div class="project-buttons">
                <a href="#" class="btn btn-primary">📖 README</a>
            </div>
        </div>

        <!-- Project 6: 독특하게 사랑하기 (React-Native) -->
        <div class="project-card">
            <div class="project-header">
                <span class="project-title">독특하게 사랑하기 (React-Native)</span>
                <span class="project-date">2022.02 (1人 개인 프로젝트)</span>
            </div>
            <h3 class="project-name">분장한 시행 사용한 노그 능구에 연네울 비니저 정시 개선행들프</h3>
            <div class="project-description">
                <ul>
                    <li>분장한 시행 사용한 노그 능구에 연네울 비니저 정시 개선행들프</li>
                    <li>React Nitve 기반의 모바일 펍플쇭 결화</li>
                    <li>노규 접 받다 무드파트 관벅 관점과 감정을 더해 있는 성능 최적화</li>
                </ul>
            </div>
            <div class="tech-stack">
                <span class="tech-tag">React-Native</span>
                <span class="tech-tag">JavaScript</span>
            </div>
            <div class="project-buttons">
                <a href="#" class="btn btn-primary">📖 README</a>
            </div>
        </div>
    </div>
</section>

<script>
// 페이지 로드 후 네비게이션 메뉴 동적 추가
document.addEventListener('DOMContentLoaded', function () {
  const toolbar = document.querySelector('.mdui-toolbar');
  if (toolbar) {
    const spacer = document.querySelector('.mdui-toolbar-spacer') ||
                   toolbar.querySelector('div[class*=spacer]');

    // 로고
    const siteTitle = document.createElement('div');
    siteTitle.className = 'site-title';
    siteTitle.textContent = "Goeun's Space";
    
    // 🔥 모바일에서 스타일 직접 적용
    if (window.innerWidth <= 768) {
        siteTitle.style.fontSize = '20px';
        siteTitle.style.whiteSpace = 'nowrap';
        siteTitle.style.overflow = 'visible';
        siteTitle.style.textOverflow = 'unset';
        siteTitle.style.maxWidth = 'none';
        siteTitle.style.flex = '1';
        siteTitle.style.textAlign = 'center';
        siteTitle.style.margin = '0 15px';
    }

    // 오른쪽 네비 메뉴
    const navMenu = document.createElement('div');
    navMenu.className = 'custom-nav';
    navMenu.innerHTML = `
      <a class="custom-nav-item active" onclick="scrollToSection('about')">About me</a>
      <a class="custom-nav-item" onclick="scrollToSection('skills')">Skills</a>
      <a class="custom-nav-item" onclick="scrollToSection('projects')">Projects</a>
      <a class="custom-nav-item" onclick="scrollToSection('contact')">Contact</a>
    `;

    // 오른쪽 그룹: 네비 + 검색

    const rightGroup = document.createElement('div');
    rightGroup.className = 'right-group';
    rightGroup.style.display = 'flex';
    rightGroup.style.alignItems = 'center';
    rightGroup.style.gap = '24px';
    
    // 🔥 모바일에서는 네비게이션 숨기기
    if (window.innerWidth <= 768) {
        navMenu.style.display = 'none';
        // 검색 버튼도 숨기고 싶다면:
        // rightGroup.style.display = 'none';
    }
    rightGroup.appendChild(navMenu);

    // 검색 버튼도 오른쪽 그룹에 포함
    const search = toolbar.querySelector('a[href="/search/"]');
    if (search) rightGroup.appendChild(search);

    // 햄버거 다음에 로고 추가
    const menuButton = toolbar.querySelector('button');
    if (menuButton) toolbar.insertBefore(siteTitle, menuButton.nextSibling);

    // spacer 뒤에 오른쪽 그룹 삽입
    if (spacer) toolbar.insertBefore(rightGroup, spacer.nextSibling);
  }
  });




// 섹션 스크롤
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// 스크롤 시 네비게이션 업데이트
window.addEventListener('scroll', function() {
  const sections = ['about', 'skills', 'projects', 'contact'];
  const navItems = document.querySelectorAll('.custom-nav-item');
  
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
  
  // 네비게이션 업데이트
  navItems.forEach((item, index) => {
    item.classList.remove('active');
    if (sections[index] === current) {
      item.classList.add('active');
    }
  });
});

// 프로젝트 필터 기능
document.addEventListener('DOMContentLoaded', function() {
    const filterCheckbox = document.getElementById('filter-projects');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterCheckbox) {
        filterCheckbox.addEventListener('change', function() {
            projectCards.forEach((card, index) => {
                if (this.checked) {
                    // 주요 프로젝트만 보기 (처음 4개만 표시)
                    card.style.display = index < 4 ? 'block' : 'none';
                } else {
                    // 모든 프로젝트 보기
                    card.style.display = 'block';
                }
            });
        });
        
        // 초기값 설정
        filterCheckbox.dispatchEvent(new Event('change'));
    }
});
</script>

{% endraw %}
