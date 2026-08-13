const fs = require('fs');
const p = fs.readFileSync('perspectives.js', 'utf8');
const obj = Function(p + '; return TOPIC_PERSPECTIVES;')();
const keys = Object.keys(obj);
console.log('话题数:', keys.length, keys.join(','));
let clips = 0, angles = 0;
keys.forEach(k => { angles += obj[k].angles.length; clips += obj[k].clips.length; });
console.log('角度总数:', angles, '| 片段总数:', clips);
keys.forEach(k => console.log(' ', k, '角度' + obj[k].angles.length, '片段' + obj[k].clips.length));

// 主文件检查
const html = fs.readFileSync('index.html', 'utf8');
console.log('---');
console.log('perspectives.js 引用:', html.includes('perspectives.js'));
console.log('renderPerspectivePage 存在:', html.includes('function renderPerspectivePage'));
console.log('5步流程存在:', html.includes('{k:"perspective",ico:"📺",t:"范例"}'));
console.log('pathPhase perspective:', html.includes('pathPhase="perspective"'));
