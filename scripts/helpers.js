hexo.extend.helper.register('include_code', function(filePath) {
  const fs = require('fs');
  const path = require('path');
  
  try {
    // source 폴더 기준으로 파일 경로 설정
    const fullPath = path.join(this.config.source_dir, filePath);
    console.log('Trying to read file:', fullPath); // 디버그 로그
    const content = fs.readFileSync(fullPath, 'utf8');
    console.log('File content length:', content.length); // 디버그 로그
    
    // 마크다운으로 렌더링하지 말고 일단 raw HTML 반환
    return content;
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err.message);
    return `<p style="color: red;">Error: Could not load ${filePath} - ${err.message}</p>`;
  }
});
