{% raw %}

<!DOCTYPE html>

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me Demo</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap');


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        background-color: #ffffff;
        color: #000000;
        line-height: 1.6;
        padding: 40px 20px;
        font-weight: 400;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .numbered-heading {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
        font-size: 48px;
        font-weight: 900;
        color: #000000;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        position: relative;
    }
    
    .numbered-heading::before {
        content: '';
        display: block;
        width: 150px;
        height: 2px;
        margin-right: 30px;
        background-color: #e5e7eb;
        border-radius: 1px;
    }
    
    .numbered-heading:after {
        content: '';
        display: block;
        width: 150px;
        height: 2px;
        margin-left: 30px;
        background-color: #e5e7eb;
        border-radius: 1px;
    }
    
    .about-info-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px 40px;
        max-width: 1000px;
    }
    
    .info-item {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        padding: 0;
        background: transparent;
        border: none;
        box-shadow: none;
        transition: none;
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
        .about-info-grid {
            grid-template-columns: 1fr;
            gap: 25px;
        }
        
        .numbered-heading {
            font-size: 36px;
        }
        
        .numbered-heading::before {
            width: 80px;
            margin-right: 20px;
        }
        
        .numbered-heading:after {
            width: 80px;
            margin-left: 20px;
        }
    }

    @media (max-width: 1024px) and (min-width: 769px) {
        .about-info-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px 30px;
        }
    }
</style>


</head>
<body>
    <div class="container">
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
                    <div class="info-value">아주대학교<br>(전자공학과)</div>
                </div>
            </div>
        </div>
    </section>
</div>

</body>
</html>
{% endraw %}