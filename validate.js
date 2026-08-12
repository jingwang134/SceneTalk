const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const bad = html.match(/[\uFFFD]/g);
console.log('乱码字符:', bad ? bad.length : 0);
const m = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(m[1]); console.log('JS 语法: OK'); }
catch (e) { console.log('JS 语法错误:', e.message); }
const dataMatch = html.match(/const expressions = \[([\s\S]*?)\n\];/);
if (dataMatch) {
  const ids = (dataMatch[1].match(/id:\d+/g) || []);
  console.log('表达条数:', ids.length);
  console.log('ID列表:', ids.join(' '));
}
console.log('文件大小:', (html.length / 1024).toFixed(1) + 'KB');
