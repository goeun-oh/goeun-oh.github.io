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
  --mdui-color-pink: #333333 !important;
  --mdui-color-pink-a100: #f3f4f6 !important;
  --mdui-color-pink-a200: #e5e7eb !important;
  --mdui-theme-accent-pink: #333333 !important;
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
/* MDUI 기본 테마 색상 강제 덮어쓰기 */
.mdui-fab.mdui-color-theme-accent {
    background-color: #000000 !important;
    color: #ffffff !important;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12) !important;
}

.mdui-fab.mdui-color-theme-accent:hover {
    background-color: #2d3748 !important;
}

.mdui-fab.mdui-color-theme-accent:active {
    background-color: #1a202c !important;
}

/* 리플 효과도 검은색 계열로 */
.mdui-fab.mdui-ripple::before {
    background-color: rgba(255, 255, 255, 0.3) !important;
}
.mdui-toolbar {
  position: fixed!important;
  width: 100%;
  top: 0 !important;
  z-index: 1000 !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px) !important;
  border-bottom: 1px solid var(--border) !important;
  height: var(--nav-height) !important;
  padding: 0 50px !important;
  display: flex !important;
  align-items: center !important;
  gap: 30px;
  justify-content: flex-start !important;
}

.mdui-toolbar-spacer {
  flex-grow: 1;
}
/* index.md의 <style> 태그 안에 추가 */
.mdui-theme-accent-pink .mdui-typo a::before {
    display: none !important;
    content: none !important;
}

.mdui-theme-accent-pink .mdui-typo a {
    color: #333333 !important;
}

.mdui-theme-accent-pink .mdui-typo a:hover {
    color: #000000 !important;
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
  color:rgb(0, 0, 0);;
}

.toolbar-left-group {
  display: flex;
  align-items: center;
  gap: 40px;
}

.site-title {
  font-size: 24px;
  font-weight: 700;
  font-family: var(--font-sans);
  letter-spacing: -0.02em;
}

.site-title:hover {
  color: var(--accent-