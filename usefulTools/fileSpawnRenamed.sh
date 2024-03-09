# 切换到包含js文件的文件夹
cd your_file_path

# 使用Node.js脚本批量将js文件改为jsx文件
node -e "const fs = require('fs'); fs.readdirSync('.').forEach(file => { if (file.endsWith('.js')) { fs.renameSync(file, file.replace(/\.js$/, '.jsx')); } });"