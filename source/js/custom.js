// 코드 블록 다크 테마 적용 - CORS 오류 해결 버전
// 외부 리소스 로드 없이 순수 DOM 조작만 사용

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 코드 블록 스타일링 시작');
    
    // 짧은 지연 후 실행 (다른 스크립트 로드 완료 대기)
    setTimeout(function() {
        try {
            // 모든 코드 블록 찾기
            const codeBlocks = document.querySelectorAll('pre, code[class*="language-"]');
            
            console.log('📦 발견된 코드 블록 수:', codeBlocks.length);
            
            codeBlocks.forEach(function(element, index) {
                // pre 태그인지 확인
                const isPre = element.tagName.toLowerCase() === 'pre';
                
                if (isPre) {
                    // 클래스 추가
                    element.classList.add('vscode-dark');
                    element.classList.add('language-c');
                    
                    // 강제 스타일 적용
                    element.style.cssText = `
                        background: #1e1e1e !important;
                        color: #d4d4d4 !important;
                        border: 1px solid #404040 !important;
                        border-radius: 8px !important;
                        padding: 24px !important;
                        margin: 2em 0 !important;
                        overflow-x: auto !important;
                        font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace !important;
                        font-size: 16px !important;
                        line-height: 1.6 !important;
                        font-weight: 400 !important;
                        white-space: pre !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
                        position: relative !important;
                    `;
                    
                    // 내부 code 태그도 스타일링
                    const codeElement = element.querySelector('code');
                    if (codeElement) {
                        codeElement.style.cssText = `
                            background: transparent !important;
                            color: #d4d4d4 !important;
                            font-family: inherit !important;
                            font-size: inherit !important;
                            padding: 0 !important;
                            border: none !important;
                            display: block !important;
                        `;
                    }
                    
                    console.log(`✅ 코드 블록 ${index + 1} 스타일 적용 완료`);
                }
            });
            
            console.log('🎉 모든 코드 블록 스타일링 완료!');
            
        } catch (error) {
            console.error('❌ 코드 블록 스타일링 오류:', error);
        }
    }, 500); // 500ms 지연
    
});

// 동적으로 생성되는 코드 블록을 위한 MutationObserver
if (window.MutationObserver) {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    const newCodeBlocks = node.querySelectorAll ? node.querySelectorAll('pre') : [];
                    newCodeBlocks.forEach(function(pre) {
                        pre.style.cssText = `
                            background: #1e1e1e !important;
                            color: #d4d4d4 !important;
                            padding: 24px !important;
                            border-radius: 8px !important;
                            font-family: 'JetBrains Mono', monospace !important;
                        `;
                    });
                }
            });
        });
    });
    
    // DOM 변화 감시 시작
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}