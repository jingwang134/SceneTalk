const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const bad = html.match(/[\uFFFD]/g);
console.log('乱码字符:', bad ? bad.length : 0);
const m = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(m[1]); console.log('index.html JS 语法: OK'); }
catch (e) { console.log('index.html JS 语法错误:', e.message); }

// data.js 单独检查
const d = fs.readFileSync('data.js', 'utf8');
try { new Function(d); console.log('data.js 语法: OK'); }
catch (e) { console.log('data.js 语法错误:', e.message); }
const ids = (d.match(/id:\d+/g) || []);
console.log('表达条数:', ids.length, ids.length >= 78 ? '✅' : '⚠️ 异常');

// 引用检查
console.log('data.js 被引用:', html.includes('src="data.js"'));
