const fs = require('fs');
const files = ['parts/data_s01e05_06.js', 'parts/data_s01e07_09.js'];
for (const f of files) {
  const data = fs.readFileSync(f, 'utf8');
  try {
    new Function('const x = [' + data + '];');
    console.log('✅', f, '语法 OK,', (data.match(/id:\d+/g) || []).length, '条');
  } catch (e) {
    console.log('❌', f, '语法错误:', e.message);
  }
}
