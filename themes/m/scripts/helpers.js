hexo.extend.helper.register('include_code', function(filePath) {
  const fs = require('fs');
  const path = require('path');
  const fullPath = path.join(this.config.source_dir, filePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  return content;
});