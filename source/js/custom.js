// 최종 완성 - 완벽한 VSCode 다크 테마

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 최종 VSCode 테마 적용 시작');
    
    function applyVSCodeTheme() {
        // 1. 코드 블록 배경 설정
        document.querySelectorAll('pre, pre[class*="language-"]').forEach(pre => {
            pre.style.cssText = `
                background: #1e1e1e !important;
                border: 1px solid #404040 !important;
                border-radius: 8px !important;
                padding: 24px !important;
                margin: 2em 0 !important;
                font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', monospace !important;
                font-size: 16px !important;
                line-height: 1.6 !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
                overflow-x: auto !important;
                position: relative !important;
            `;
        });
        
        // 2. 완벽한 토큰 색상 매핑
        const tokenStyles = [
            // 전처리기 지시문 (#include, #define)
            { classes: ['directive', 'macro'], color: '#C586C0', weight: 'normal' },
            { classes: ['directive-hash'], color: '#C586C0', weight: 'normal' },
            
            // 키워드 (void, int, volatile, typedef)
            { classes: ['keyword'], color: '#569CD6', weight: '600' },
            
            // 함수명 (main, delay, GPIO_SetMode)
            { classes: ['function'], color: '#DCDCAA', weight: '500' },
            
            // 주석
            { classes: ['comment'], color: '#6A9955', weight: 'normal', italic: true },
            
            // 문자열
            { classes: ['string'], color: '#CE9178', weight: 'normal' },
            
            // 숫자 (1U, 5, 16, 0x30)
            { classes: ['number', 'hexcode'], color: '#B5CEA8', weight: 'normal' },
            
            // 연산자 및 구두점 (|=, &=, <<, >>, (, ), ;)
            { classes: ['operator', 'punctuation'], color: '#D4D4D4', weight: 'normal' },
            
            // 속성 및 변수
            { classes: ['property', 'variable'], color: '#9CDCFE', weight: 'normal' },
            
            // 타입 및 클래스명
            { classes: ['class-name', 'type'], color: '#4EC9B0', weight: 'normal' },
            
            // 상수 및 불린값
            { classes: ['boolean', 'constant'], color: '#569CD6', weight: 'normal' }
        ];
        
        let appliedCount = 0;
        
        // 각 토큰 스타일 적용
        tokenStyles.forEach(({ classes, color, weight, italic }) => {
            classes.forEach(className => {
                document.querySelectorAll(`span.token.${className}, .token.${className}`).forEach(element => {
                    let styles = `color: ${color} !important; background: transparent !important; font-weight: ${weight} !important;`;
                    if (italic) styles += ' font-style: italic !important;';
                    
                    element.style.cssText = styles;
                    appliedCount++;
                });
            });
        });
        
        // 3. 일반 토큰들 기본 색상 적용
        document.querySelectorAll('span[class*="token"]').forEach(token => {
            if (!token.style.color || token.style.color === 'rgb(51, 51, 51)') {
                token.style.setProperty('color', '#d4d4d4', 'important');
                token.style.setProperty('background', 'transparent', 'important');
            }
        });
        
        // 4. 코드 블록 내 모든 텍스트 기본 색상 설정
        document.querySelectorAll('pre, pre code').forEach(element => {
            if (!element.classList.contains('token')) {
                element.style.setProperty('color', '#d4d4d4', 'important');
            }
        });
        
        // 5. 언어 라벨 추가
        document.querySelectorAll('pre[class*="language-"]').forEach(pre => {
            if (!pre.querySelector('.language-label')) {
                const label = document.createElement('div');
                label.className = 'language-label';
                label.textContent = 'C';
                label.style.cssText = `
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: #007ACC;
                    color: white;
                    padding: 6px 12px;
                    font-size: 12px;
                    font-weight: 500;
                    border-bottom-left-radius: 4px;
                    text-transform: uppercase;
                    z-index: 1;
                `;
                pre.appendChild(label);
            }
        });
        
        console.log(`✅ VSCode 테마 적용 완료: ${appliedCount}개 토큰 스타일링`);
        return appliedCount;
    }
    
    // 즉시 적용
    applyVSCodeTheme();
    
    // 다중 타이밍으로 재적용
    [100, 300, 500, 1000].forEach(delay => {
        setTimeout(applyVSCodeTheme, delay);
    });
    
    // 지속적 감시
    const observer = new MutationObserver(() => {
        setTimeout(applyVSCodeTheme, 50);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
    
    console.log('🎉 VSCode 다크 테마 완성!');
});

// 페이지 로드 완료 후 최종 확인
window.addEventListener('load', function() {
    setTimeout(() => {
        const tokens = document.querySelectorAll('span[class*="token"]');
        console.log(`🔍 최종 통계: ${tokens.length}개 토큰 발견`);
        
        // 색상별 토큰 개수 확인
        const colorCounts = {};
        tokens.forEach(token => {
            const color = getComputedStyle(token).color;
            colorCounts[color] = (colorCounts[color] || 0) + 1;
        });
        
        console.log('📊 색상별 토큰 분포:', colorCounts);
    }, 1500);
});