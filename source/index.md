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
skill-row {
  overflow-x: auto !important;
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
        gap: 15px !important;
        margin-bottom: 30px !important;
        padding: 20px !important;
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
        font-size: 18px !important;
        font-weight: 600 !important;
        color: #2d3748 !important;
        margin: 0 !important;
    }

.skill-tag {
  white-space: nowrap !important;
  font-size: 14px !important;
  padding: 6px 12px !important;
  flex-shrink: 0;
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
  
/* ✅ skill-tags 영역을 grid로 변환 */
.skill-tags.language-row,
.skill-tags.tools-row {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(120px, auto)) !important;
  justify-content: center !important;
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
    font-size: 13px;
    padding: 6px 10px;
  }
}


.skill-tags.language-row::-webkit-scrollbar,
.skill-tags.tools-row::-webkit-scrollbar {
  display: none;                        /* 크롬 스크롤 숨기기 */
}

.skill-tag {
  display: inline-block;
  white-space: nowrap;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  text-align: center;
  background-color: #ccc; /* 기본 배경. nth-child로 색 덮어씀 */
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
        <svg viewBox="0 0 24 24" fill="currentColor" style="width: 40px; height: 40px;">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
        SKILLS
    </h2>
    <div class="skills-container">
        <div class="skill-row">
            <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
            </div>
            <div class="skill-category-name">Language</div>
            <div class="skill-tags language-row">
                <span class="skill-tag">Verilog</span>
                <span class="skill-tag">SystemVerilog</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Java</span>
                <span class="skill-tag">C</span>
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
</script>

{% endraw %}
