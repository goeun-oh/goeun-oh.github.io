// 최강 코드 블록 다크 테마 강제 적용
// 모든 방법을 동원한 마지막 수단

(function() {
    'use strict';
    
    console.log('🔥 최강 코드 블록 스타일링 시작');
    
    function forceCodeBlockStyling() {
        // 모든 가능한 코드 블록 선택자
        const selectors = [
            'pre',
            'code[class*="language"]',
            '.highlight pre',
            '.hljs',
            'pre code',
            '[class*="language-"] pre',
            '[class*="lang-"] pre'
        ];
        
        let totalElements = 0;
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                totalElements++;
                
                // 강제 인라인 스타일 적용 (최고 우선순위)
                element.setAttribute('style', `
                    background: #1e1e1e !important;
                    background-color: #1e1e1e !important;
                    color: #d4d4d4 !important;
                    border: 1px solid #404040 !important;
                    border-radius: 8px !important;
                    padding: 24px !important;
                    margin: 2em 0 !important;
                    overflow-x: auto !important;
                    font-family: 'JetBrains Mono', 'Fira Code', Monaco, monospace !important;
                    font-size: 16px !important;
                    line-height: 1.6 !important;
                    font-weight: 400 !important;
                    white-space: pre !important;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
                    position: relative !important;
                    display: block !important;
                `);
                
                // 모든 자식 요소도 스타일링
                const children = element.querySelectorAll('*');
                children.forEach(child => {
                    child.setAttribute('style', `
                        color: #d4d4d4 !important;
                        background: transparent !important;
                        font-family: inherit !important;
                        font-size: inherit !important;
                    `);
                });
                
                console.log('✅ 스타일 적용:', element.tagName, element.className);
            });
        });
        
        console.log(`📊 총 ${totalElements}개 요소에 스타일 적용`);
        return totalElements;
    }
    
    // 즉시 실행
    forceCodeBlockStyling();
    
    // DOM 로드 완료 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceCodeBlockStyling);
    }
    
    // 추가 지연 실행 (다른 스크립트 간섭 방지)
    setTimeout(forceCodeBlockStyling, 100);
    setTimeout(forceCodeBlockStyling, 500);
    setTimeout(forceCodeBlockStyling, 1000);
    
    // MutationObserver로 동적 변화 감시
    if (window.MutationObserver) {
        const observer = new MutationObserver(function(mutations) {
            let needsUpdate = false;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    needsUpdate = true;
                }
                if (mutation.type === 'attributes' && 
                    (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                    needsUpdate = true;
                }
            });
            
            if (needsUpdate) {
                setTimeout(forceCodeBlockStyling, 50);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        
        console.log('👁️ MutationObserver 활성화');
    }
    
    // 페이지 전체 로드 후 마지막 확인
    window.addEventListener('load', function() {
        setTimeout(forceCodeBlockStyling, 100);
        console.log('🎉 페이지 로드 완료 - 최종 스타일링 적용');
    });
    
})();

// 추가: CSS 클래스 강제 주입
const style = document.createElement('style');
style.textContent = `
    /* 브루트 포스 CSS - 모든 것을 덮어씌움 */
    pre[style*="background"] {
        background: #1e1e1e !important;
        color: #d4d4d4 !important;
    }
    
    code[style*="background"] {
        background: transparent !important;
        color: #d4d4d4 !important;
    }
    
    /* 인라인 스타일도 강제로 덮어씌움 */
    [style*="#f6f6f6"] {
        background: #1e1e1e !important;
    }
    
    [style*="color: #333"] {
        color: #d4d4d4 !important;
    }
`;
document.head.appendChild(style);

console.log('💀 브루트 포스 CSS 주입 완료');