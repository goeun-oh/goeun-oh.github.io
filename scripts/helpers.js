hexo.extend.helper.register('include_code', function(filePath) {
  const fs = require('fs');
  const path = require('path');
  
  try {
    // source 폴더 기준으로 파일 경로 설정
    const fullPath = path.join(this.config.source_dir, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // 마크다운으로 렌더링
    return this.markdown(content);
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err.message);
    return `<p>Error: Could not load ${filePath}</p>`;
  }
});
