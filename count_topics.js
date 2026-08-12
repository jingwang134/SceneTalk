const fs = require('fs');
const js = fs.readFileSync('index.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
const m = js.match(/const expressions = \[([\s\S]*?)\n\];/);
const data = m[1];
const blocks = data.split(/\n  \{/).filter(b => b.includes('topic:'));
const topics = {};
const levels = { '6.5+': 0, '7+': 0 };
blocks.forEach(b => {
  const t = b.match(/topic:"(\w+)"/);
  const l = b.match(/level:"([\d.]+)\+"/);
  if (t) topics[t[1]] = (topics[t[1]] || 0) + 1;
  if (l) levels[l[1] + '+']++;
});
console.log('总数:', blocks.length);
console.log('话题分布:', JSON.stringify(topics));
console.log('难度分布:', JSON.stringify(levels));
