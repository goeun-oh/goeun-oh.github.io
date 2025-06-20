<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me Demo</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Pretendard', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            background-color: #ffffff;
            color: #1a202c;
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
            margin-bottom: 80px;
            font-size: 40px;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .numbered-heading:after {
            content: '';
            display: block;
            width: 300px;
            height: 3px;
            margin-left: 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        
        .about-info-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 60px;
            max-width: 1000px;
        }
        
        .info-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 25px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%);
            border-radius: 20px;
            border: 2px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .info-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            transition: all 0.6s;
        }
        
        .info-item:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            border-color: rgba(102, 126, 234, 0.3);
        }
        
        .info-item:hover::before {
            left: 100%;
        }
        
        .info-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            flex-shrink: 0;
            margin-top: 2px;
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 3px solid rgba(255, 255, 255, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .info-icon::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transform: rotate(-45deg);
            transition: all 0.6s;
            opacity: 0;
        }
        
        .info-icon:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
            border-color: rgba(255, 255, 255, 0.6);
        }
        
        .info-icon:hover::before {
            opacity: 1;
            left: 100%;
        }
        
        .info-icon:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 24px rgba(102, 126, 234, 0.4);
        }
        
        .info-content {
            flex: 1;
        }
        
        .info-label {
            font-size: 18px;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 8px;
            letter-spacing: -0.025em;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .info-value {
            font-size: 16px;
            color: #4a5568;
            line-height: 1.6;
            font-weight: 500;
            letter-spacing: -0.01em;
        }
        
        @media (max-width: 768px) {
            .about-info-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .numbered-heading:after {
                width: 100px;
            }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
            .about-info-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 30px 40px;
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="info-content">
                        <div class="info-label">이름</div>
                        <div class="info-value">오고은</div>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div class="info-content">
                        <div class="info-label">생년월일</div>
                        <div class="info-value">97.01.17</div>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <div class="info-content">
                        <div class="info-label">위치</div>
                        <div class="info-value">서울특별시 관악구</div>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <div class="info-content">
                        <div class="info-label">연락처</div>
                        <div class="info-value">010-4582-5037</div>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div class="info-content">
                        <div class="info-label">이메일</div>
                        <div class="info-value">hjcdg197@gmail.com</div>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
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