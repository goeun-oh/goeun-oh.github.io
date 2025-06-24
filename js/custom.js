// 최종 해결책 - cssText 직접 조작으로 모든 CSS 규칙 무시

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 최종 해결책 실행 - cssText 직접 조작');
    
    function nuclearOption() {
        // 1. 코드 블록 배경 먼저
        const codeBlocks = document.querySelectorAll('pre, pre[class*="language-"]');
        codeBlocks.forEach(pre => {
            // cssText로 모든 스타일을 한 번에 덮어씀
            pre.style.cssText = `
                background: #1e1e1e !important;
                background-color: #1e1e1e !important;
                color: #d4d4d4 !important;
                border: 1px solid #404040 !important;
                border-radius: 8px !important;
                padding: 24px !important;
                margin: 2em 0 !important;
                font-family: 'JetBrains Mono', 'Fira Code', Monaco, monospace !important;
                font-size: 16px !important;
                line-height: 1.6 !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
                overflow-x: auto !important;
                white-space: pre !important;
                position: relative !important;
            `;
        });
        
        // 2. 모든 토큰에 cssText로 색상 강제 적용
        const tokenMappings = [
            { selector: '.token.comment', color: '#6A9955' },
            { selector: '.token.keyword', color: '#569CD6' },
            { selector: '.token.directive', color: '#C586C0' },
            { selector: '.token.function', color: '#DCDCAA' },
            { selector: '.token.string', color: '#CE9178' },
            { selector: '.token.number', color: '#B5CEA8' },
            { selector: '.token.operator', color: '#D4D4D4' },
            { selector: '.token.punctuation', color: '#D4D4D4' },
            { selector: '.token.macro', color: '#C586C0' },
            { selector: '.token.property', color: '#9CDCFE' },
            { selector: '.token.variable', color: '#9CDCFE' }
        ];
        
        let totalApplied = 0;
        
        tokenMappings.forEach(({ selector, color }) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                // cssText로 완전히 덮어씌움
                element.style.cssText = `color: ${color} !important; background: transparent !important; font-weight: inherit !important;`;
                totalApplied++;
            });
        });
        
        // 3. 모든 토큰을 한 번 더 처리
        const allTokens = document.querySelectorAll('span[class*="token"]');
        allTokens.forEach(token => {
            const classList = token.className.split(' ');
            let applied = false;
            
            // 키워드 체크
            if (classList.includes('keyword') || classList.includes('directive')) {
                token.style.cssText = `color: #569CD6 !important; background: transparent !important;`;
                applied = true;
            }
            // 주석 체크
            else if (classList.includes('comment')) {
                token.style.cssText = `color: #6A9955 !important; background: transparent !important; font-style: italic !important;`;
                applied = true;
            }
            // 함수 체크
            else if (classList.includes('function')) {
                token.style.cssText = `color: #DCDCAA !important; background: transparent !important;`;
                applied = true;
            }
            // 숫자 체크
            else if (classList.includes('number')) {
                token.style.cssText = `color: #B5CEA8 !important; background: transparent !important;`;
                applied = true;
            }
            // 기본값
            else if (!applied) {
                token.style.cssText = `color: #d4d4d4 !important; background: transparent !important;`;
            }
        });
        
        console.log(`💥 핵폭탄 옵션 완료: ${totalApplied}개 + ${allTokens.length}개 토큰 처리`);
        return allTokens.length;
    }
    
    // 즉시 실행
    nuclearOption();
    
    // 여러 번 실행
    setTimeout(nuclearOption, 50);
    setTimeout(nuclearOption, 100);
    setTimeout(nuclearOption, 200);
    setTimeout(nuclearOption, 500);
    setTimeout(nuclearOption, 1000);
    
    // 지속적 감시 및 재적용
    const observer = new MutationObserver(() => {
        setTimeout(nuclearOption, 10);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
    
    // 5초마다 강제 재적용
    setInterval(nuclearOption, 5000);
    
    console.log('💀 핵폭탄 옵션 활성화 - 5초마다 재적용');
});

// 페이지 로드 후 최종 확인
window.addEventListener('load', function() {
    setTimeout(() => {
        // 테스트: 첫 번째 토큰이 제대로 적용되었는지 확인
        const firstToken = document.querySelector('span[class*="token"]');
        if (firstToken) {
            console.log('🔍 최종 확인 - 첫 번째 토큰:');
            console.log('클래스:', firstToken.className);
            console.log('cssText:', firstToken.style.cssText);
            console.log('계산된 색상:', getComputedStyle(firstToken).color);
        }
    }, 1000);
});