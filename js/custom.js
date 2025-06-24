// 토큰별 색상 강제 적용 - PrismJS 토큰에 직접 인라인 스타일 주입

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 PrismJS 토큰 색상 강제 적용 시작');
    
    function applyTokenColors() {
        // 1. 코드 블록 배경 먼저 변경
        const codeBlocks = document.querySelectorAll('pre, pre[class*="language-"]');
        codeBlocks.forEach(pre => {
            pre.style.setProperty('background', '#1e1e1e', 'important');
            pre.style.setProperty('background-color', '#1e1e1e', 'important');
            pre.style.setProperty('border', '1px solid #404040', 'important');
            pre.style.setProperty('border-radius', '8px', 'important');
            pre.style.setProperty('padding', '24px', 'important');
            pre.style.setProperty('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.3)', 'important');
            pre.style.setProperty('font-family', 'JetBrains Mono, Fira Code, Monaco, monospace', 'important');
            pre.style.setProperty('font-size', '16px', 'important');
            pre.style.setProperty('line-height', '1.6', 'important');
        });
        
        // 2. 토큰별 색상 적용
        const tokenColors = {
            // 키워드 (void, int, typedef, volatile 등)
            'token keyword': '#569CD6',
            'token directive keyword': '#569CD6',
            'token directive': '#C586C0',
            
            // 함수명
            'token function': '#DCDCAA',
            
            // 주석
            'token comment': '#6A9955',
            
            // 문자열
            'token string': '#CE9178',
            
            // 숫자
            'token number': '#B5CEA8',
            
            // 구두점과 연산자
            'token punctuation': '#D4D4D4',
            'token operator': '#D4D4D4',
            
            // 매크로와 전처리기
            'token macro': '#C586C0',
            'token macro property': '#C586C0',
            
            // 변수와 속성
            'token property': '#9CDCFE',
            'token variable': '#9CDCFE',
            
            // 타입
            'token class-name': '#4EC9B0',
            'token type': '#4EC9B0',
            
            // 상수
            'token boolean': '#569CD6',
            'token constant': '#569CD6'
        };
        
        let appliedCount = 0;
        
        // 각 토큰 클래스에 색상 적용
        Object.entries(tokenColors).forEach(([className, color]) => {
            const elements = document.querySelectorAll(`span.${className.replace(' ', '.')}`);
            elements.forEach(element => {
                element.style.setProperty('color', color, 'important');
                element.style.setProperty('background', 'transparent', 'important');
                element.style.setProperty('font-weight', 'inherit', 'important');
                appliedCount++;
            });
        });
        
        // 일반적인 토큰들도 처리
        const allTokens = document.querySelectorAll('span[class*="token"]');
        allTokens.forEach(token => {
            // 기본 색상이 적용되지 않은 토큰들은 기본 밝은 색으로
            if (!token.style.color) {
                token.style.setProperty('color', '#d4d4d4', 'important');
                token.style.setProperty('background', 'transparent', 'important');
            }
        });
        
        console.log(`✅ ${appliedCount}개 토큰에 색상 적용 완료`);
        console.log(`📊 전체 토큰 수: ${allTokens.length}개`);
        
        return appliedCount;
    }
    
    // 즉시 실행
    const initialCount = applyTokenColors();
    
    // 여러 번 실행으로 확실하게 적용
    setTimeout(() => applyTokenColors(), 100);
    setTimeout(() => applyTokenColors(), 500);
    setTimeout(() => applyTokenColors(), 1000);
    
    // MutationObserver로 지속적 감시
    const observer = new MutationObserver(() => {
        applyTokenColors();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
    });
    
    console.log('🎉 토큰 색상 적용 완료! 감시 시작...');
});

// 페이지 완전 로드 후 최종 확인
window.addEventListener('load', function() {
    setTimeout(() => {
        const tokens = document.querySelectorAll('span[class*="token"]');
        console.log(`🔍 최종 확인: ${tokens.length}개 토큰 발견`);
        
        // 각 토큰의 클래스와 현재 색상 출력
        tokens.forEach((token, index) => {
            if (index < 10) { // 처음 10개만 로그
                console.log(`토큰 ${index + 1}: ${token.className} → ${token.style.color || '색상 없음'}`);
            }
        });
    }, 500);
});