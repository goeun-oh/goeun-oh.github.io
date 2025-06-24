// PrismJS 라이브러리 동적 로드 및 문법 하이라이팅 적용

document.addEventListener('DOMContentLoaded', function() {
    // PrismJS CSS 동적 로드
    const prismCSS = document.createElement('link');
    prismCSS.rel = 'stylesheet';
    prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(prismCSS);
    
    // PrismJS Core 동적 로드
    const prismCore = document.createElement('script');
    prismCore.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js';
    
    prismCore.onload = function() {
        // 각 언어별 컴포넌트 로드
        const languages = ['c', 'javascript', 'css', 'markup', 'python', 'bash'];
        let loadedCount = 0;
        
        function loadLanguage(lang) {
            const script = document.createElement('script');
            script.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
            script.onload = function() {
                loadedCount++;
                if (loadedCount === languages.length) {
                    applyHighlighting();
                }
            };
            document.head.appendChild(script);
        }
        
        languages.forEach(loadLanguage);
    };
    
    document.head.appendChild(prismCore);
    
    function applyHighlighting() {
        // 모든 코드 블록 찾기
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(function(block) {
            const pre = block.parentElement;
            let language = 'c'; // 기본값을 C로 설정
            
            // 코드 내용을 분석해서 언어 추정
            const code = block.textContent;
            
            // C언어 패턴 감지
            if (code.includes('#include') || 
                code.includes('#define') || 
                code.includes('int main') ||
                code.includes('printf') ||
                code.includes('volatile') ||
                code.includes('uint32_t')) {
                language = 'c';
            }
            // JavaScript 패턴 감지
            else if (code.includes('function') || 
                     code.includes('console.log') || 
                     code.includes('const ') || 
                     code.includes('let ') ||
                     code.includes('=>')) {
                language = 'javascript';
            }
            // CSS 패턴 감지
            else if (code.includes('{') && code.includes('}') && 
                     (code.includes(':') && code.includes(';'))) {
                language = 'css';
            }
            // HTML 패턴 감지
            else if (code.includes('<') && code.includes('>') && 
                     code.includes('</')) {
                language = 'markup';
            }
            // Python 패턴 감지
            else if (code.includes('def ') || 
                     code.includes('import ') || 
                     code.includes('print(')) {
                language = 'python';
            }
            // Bash 패턴 감지
            else if (code.includes('#!/bin/bash') || 
                     code.includes('echo ') || 
                     code.includes('cd ') ||
                     code.includes('npm ') ||
                     code.includes('hexo ')) {
                language = 'bash';
            }
            
            // 클래스 추가
            block.className = `language-${language}`;
            pre.className = `language-${language}`;
            
            // 언어 라벨 추가
            pre.setAttribute('data-lang', language);
            
            // PrismJS 하이라이팅 적용
            if (window.Prism) {
                Prism.highlightElement(block);
            }
        });
        
        console.log('문법 하이라이팅 적용 완료!');
    }
    
    // 이미 PrismJS가 로드되어 있다면 바로 적용
    if (window.Prism) {
        applyHighlighting();
    }
});

// 코드 블록 복사 기능 추가
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(function(pre) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.onclick = function() {
            const code = pre.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(function() {
                button.textContent = 'Copied!';
                setTimeout(function() {
                    button.textContent = 'Copy';
                }, 2000);
            });
        };
        pre.appendChild(button);
    });
}

// 페이지 로드 완료 후 복사 버튼 추가
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addCopyButtons, 1000); // 하이라이팅 적용 후 복사 버튼 추가
});