// ============ check_persp_v2.js：原生观点范例 RULES-v2 质检 ============
// 硬校验（error）：结构完整、语料类型合法、每维度≥1条sentence/clip、sentence/clip可溯源码
// 软校验（warn）：维度↔语料语义匹配（关键词重叠检测，人工复核）
const fs = require('fs');
const path = require('path');

let errors = [], warns = [], infos = [];
const SCRIPTS = path.join(__dirname, 'scripts');

// 1) 加载 perspectives.js
const pjs = fs.readFileSync('perspectives.js', 'utf8');
const TOPIC_PERSPECTIVES = Function(pjs.replace('const TOPIC_PERSPECTIVES', 'globalThis.TOPIC_PERSPECTIVES') + '; return globalThis.TOPIC_PERSPECTIVES;')();

const TOPIC_NAMES = { family:'家庭', work:'工作', communication:'沟通', values:'价值观', education:'教育', skills:'技能', friendship:'友谊', media:'媒体' };
const VALID_TYPES = ['phrase', 'sentence', 'clip'];

// 2) 加载台本索引（sentence/clip 原文比对用）
function loadScriptIndex() {
  const idx = {};
  try {
    const files = fs.readdirSync(SCRIPTS).filter(f => /^s01e\d{2}\.txt$/.test(f));
    for (const f of files) {
      const txt = fs.readFileSync(path.join(SCRIPTS, f), 'utf8');
      idx[f.replace('.txt', '')] = normalize(txt);
    }
  } catch (e) { errors.push('无法读取 scripts/ 目录: ' + e.message); }
  return idx;
}
function normalize(s) {
  return s.toLowerCase().replace(/[\s\p{P}\p{S}\[\]()]/gu, '');
}

// 实词提取（sentence/clip 真实性比对用）：去停用词、去撇号连字符
const STOP = new Set(['a','an','the','and','or','but','of','to','in','on','at','for','with','by','from','is','are','was','were','be','been','i','you','he','she','it','we','they','my','your','his','her','its','our','their','me','him','us','them','this','that','so','do','does','did','not','no','yes','can','could','will','would','should','just','gonna','wanna','like','know','what','why','how','when','where','who','about','into','up','out','as','s','t','d','re','ve','ll','m','there','here','one','two','get','got','go','going','make','made','say','said','tell','told','think','thought','see','saw','want','wanted','need','needed','take','took','come','came','really','right','okay','ok','yeah','hey','oh','uh','um']);
function extractContentWords(text) {
  return (text.toLowerCase().match(/[a-z][a-z'-]{1,}/g) || [])
    .map(w => w.replace(/^['-]+|['-]+$/g, '').replace(/[^a-z]/g, ''))
    .filter(w => w.length > 2 && !STOP.has(w));
}

// 3) 维度-语料 关键词重叠检测
function extractKeys(text) {
  const keys = new Set();
  // 英文关键词
  const enWords = text.match(/[a-z][a-z'-]{2,}/gi) || [];
  for (const w of enWords) keys.add(w.toLowerCase());
  // 中文短语（2-4字滑窗）
  const zh = text.replace(/[a-z0-9'"\s]/gi, '');
  if (zh) {
    for (let n = 2; n <= 4; n++) {
      for (let i = 0; i + n <= zh.length; i++) keys.add(zh.slice(i, i + n));
    }
  }
  return keys;
}
function overlapScore(aKeys, bText) {
  const nb = normalize(bText);
  let hit = 0;
  for (const k of aKeys) {
    if (k.length >= 2 && nb.includes(k)) hit++;
  }
  return hit;
}

// 3.5) 台本索引（须在 4 之前初始化）
const SCRIPT_IDX = loadScriptIndex();

// 4) 主校验
const topicKeys = Object.keys(TOPIC_PERSPECTIVES);
infos.push('话题数: ' + topicKeys.length);
for (const tk of topicKeys) {
  const t = TOPIC_PERSPECTIVES[tk];
  const label = (TOPIC_NAMES[tk] || tk) + '(' + tk + ')';
  if (!t.map) errors.push(label + ' 缺 map');
  if (!t.dimensions || t.dimensions.length === 0) { errors.push(label + ' 无 dimensions'); continue; }
  if (t.dimensions.length !== 3) errors.push(label + ' 维度数=' + t.dimensions.length + '（规则：固定3）');
  const usedPhrases = new Set();
  t.dimensions.forEach((d, di) => {
    const dl = label + ' 维度' + (di + 1) + '「' + (d.name || '?') + '」';
    if (!d.tag) errors.push(dl + ' 缺 tag');
    if (!d.name) errors.push(dl + ' 缺 name');
    if (!d.angle) errors.push(dl + ' 缺 angle');
    if (!d.use) errors.push(dl + ' 缺 use（雅思支架）');
    if (!d.items || !d.items.length) { errors.push(dl + ' 无 items'); return; }
    if (d.items.length < 2 || d.items.length > 4) warns.push(dl + ' items数=' + d.items.length + '（规则2-4条）');
    const hasDeep = d.items.some(i => i.type === 'sentence' || i.type === 'clip');
    if (!hasDeep) errors.push(dl + ' 缺 sentence/clip 级语料（规则：每维度≥1条）');
    // 维度关键词
    const dimKeys = extractKeys((d.name || '') + (d.angle || ''));
    d.items.forEach((it, ii) => {
      if (!VALID_TYPES.includes(it.type)) errors.push(dl + ' item' + ii + ' 非法类型: ' + it.type);
      if (!it.en || !it.zh) errors.push(dl + ' item' + ii + ' 缺 en/zh');
      if (!it.source) errors.push(dl + ' item' + ii + ' 缺 source');
      // 短语不重复
      if (it.type === 'phrase') {
        const p = it.en.toLowerCase();
        if (usedPhrases.has(p)) warns.push(dl + ' 短语重复: ' + it.en);
        usedPhrases.add(p);
      }
      // 来源真实性：sentence/clip 实词顺序包含比对（容忍台本中文翻译穿插、换行、字母间隔）
      if ((it.type === 'sentence' || it.type === 'clip') && it.source) {
        const m = it.source.match(/S(\d{2})E(\d{2})/);
        if (m) {
          const sk = 's' + m[1].toLowerCase() + 'e' + m[2];
          const script = SCRIPT_IDX[sk];
          if (!script) { errors.push(dl + ' 找不到台本 ' + sk); }
          else {
            const words = extractContentWords(it.en);
            if (words.length >= 3) {
              const miss = words.filter(w => !script.includes(w));
              if (miss.length / words.length > 0.25) errors.push(dl + ' 实词无法在台本检索到（可能虚构，缺失词: ' + miss.join(',') + '）: ' + it.en.slice(0, 50));
            }
          }
        } else if (it.source.includes('通用') || it.source.includes('Gossip') || it.source.includes('Friends') || it.source.includes('老友记') || it.source.includes('绯闻')) {
          infos.push(dl + ' 来源「' + it.source + '」跳过原文比对（跨剧/通用素材）');
        } else {
          warns.push(dl + ' source 无法解析集数: ' + it.source);
        }
      }
      // 维度-语料 语义贴合（人工复核提示，不阻断）
      const score = overlapScore(dimKeys, it.en + ' ' + it.zh);
      if (score === 0) infos.push(dl + ' item' + ii + ' 字面0重叠（人工复核语义是否贴合）: ' + it.en.slice(0, 40));
    });
  });
}

// 5) 汇总
console.log('========== RULES-v2 质检报告 ==========');
console.log('话题: ' + topicKeys.join(', '));
let dimTotal = 0, itemTotal = 0, phraseN = 0, sentenceN = 0, clipN = 0;
for (const tk of topicKeys) {
  const t = TOPIC_PERSPECTIVES[tk];
  if (!t.dimensions) continue;
  dimTotal += t.dimensions.length;
  for (const d of t.dimensions) {
    if (!d.items) continue;
    itemTotal += d.items.length;
    for (const it of d.items) {
      if (it.type === 'phrase') phraseN++;
      else if (it.type === 'sentence') sentenceN++;
      else if (it.type === 'clip') clipN++;
    }
  }
}
console.log('维度总数: ' + dimTotal + ' | 语料总数: ' + itemTotal + '（短语' + phraseN + ' / 句子' + sentenceN + ' / 片段' + clipN + '）');
console.log('');
console.log('❌ 硬错误: ' + errors.length);
errors.forEach(e => console.log('  [ERR] ' + e));
console.log('⚠️ 软告警: ' + warns.length);
warns.forEach(w => console.log('  [WARN] ' + w));
console.log('ℹ️ 信息: ' + infos.length);
infos.forEach(i => console.log('  [INFO] ' + i));
console.log('');
console.log(errors.length === 0 ? '✅ 全部硬校验通过' : '❌ 有 ' + errors.length + ' 个硬错误，禁止合入');
process.exit(errors.length === 0 ? 0 : 1);
