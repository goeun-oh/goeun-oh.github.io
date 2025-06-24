// 코드 블록 스타일링을 위한 간단한 스크립트
// 기존 PrismJS 로드는 중단하고 CSS만 사용

document.addEventListener('DOMContentLoaded', function() {
    console.log('코드 블록 스타일링 시작');
    
    // 모든 코드 블록 찾기
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(function(pre) {
        // 강제로 클래스 추가 (CSS 선택자 매칭을 위해)
        pre.classList.add('language-c');
        
        // CSS가 적용되도록 강제 리플로우
        pre.style.background = '#1e1e1e';
        pre.style.color = '#d4d4d4';
        pre.style.padding = '24px';
        pre.style.borderRadius = '8px';
        pre.style.fontFamily = 'JetBrains Mono, Fira Code, Monaco, monospace';
        pre.style.fontSize = '16px';
        pre.style.lineHeight = '1.6';
        pre.style.border = '1px solid #404040';
        pre.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        
        const code = pre.querySelector('code');
        if (code) {
            code.style.background = 'transparent';
            code.style.color = '#d4d4d4';
            code.style.fontFamily = 'inherit';
            code.style.fontSize = 'inherit';
            code.style.padding = '0';
            code.style.border = 'none';
        }
        
        console.log('코드 블록 스타일 적용:', pre);
    });
    
    console.log('코드 블록 스타일링 완료!');
});