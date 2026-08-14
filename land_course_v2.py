# 课程卡片版 v2 落地：替换数据块 + 卡片式 renderUnit + CSS
import io, re

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 替换数据块（旧数据 → parts/course_daily.js 新数据）
data = io.open('parts/course_daily.js', encoding='utf-8').read().strip()
data_start = c.find('// ===== 生活口语课 · 单元1「委婉反驳」语料卡')
assert data_start != -1, 'data start not found'
# 数据块结束：COURSE_DAILY_SKELETONS 数组的 '];' 之后
skel_end = c.find('];', c.find('const COURSE_DAILY_SKELETONS'))
assert skel_end != -1, 'skel end not found'
data_end = skel_end + 2
c = c[:data_start] + data + c[data_end:]

# 2) 替换 renderUnit 为卡片式（旧函数边界：function renderUnit 到 function ansCloze）
ru_start = c.find('function renderUnit(){')
assert ru_start != -1, 'renderUnit not found'
ac_start = c.find('function ansCloze(')
assert ac_start != -1, 'ansCloze not found'
new_unit = r'''function renderUnit(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const cards = COURSE_DAILY_UNIT1;
  const card = cards[unitIdx];
  if(!card){ unitIdx = 0; renderUnit(); return; }
  const t = card.tags;
  const pr = card.practice;
  const tp = card.meta.type==="tv_drama"?"美剧":"真人秀";
  const dlg = card.dialogue.map(function(d){
    const hl = d.en.indexOf(card.key.split("…")[0].split("?")[0].split(",")[0])!==-1;
    return `<div class="cd-line"><span class="cd-sp">${d.sp}</span><div><div class="cd-en">${hl?`<span class="cd-hl">${d.en}</span>`:d.en}</div><div class="cd-zh">${d.zh}</div></div></div>`;
  }).join("");
  const clozeOpts = [pr.cloze.answer].concat(pr.cloze.distractors);
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap">
      <button class="q-btn ghost" onclick="renderCourseHome()">← 单元列表</button>
      <span class="filter-label">💬 委婉反驳</span>
      <span class="badge-dim">${card.order} / ${cards.length}</span>
    </div>
    <div class="cc2-card">
      <div class="cc2-head"><span class="cc2-src">📺 ${card.meta.show} ${card.meta.ep} · ${tp} · ${card.meta.chars.join(" / ")}</span><span class="cc2-em">😐 ${t.emotion}</span></div>
      <div class="cc2-key">
        <div class="cc2-key-label">✦ 关键说法</div>
        <div class="cc2-key-phrase">${card.key}</div>
      </div>
      <div class="cc2-scene"><b style="font-size:11px;color:#8892A0">剧中原话</b><div class="cd-dialogue" style="margin-top:6px">${dlg}</div></div>
      <div class="cc2-sec">
        <div class="cc2-sec-label">💡 解释</div>
        <div class="cc2-core">「${card.explain.core}」</div>
        <div class="cc2-desc">${card.explain.desc}</div>
      </div>
      <div class="cc2-sec">
        <div class="cc2-sec-label">🔗 同类说法 · 换着说</div>
        ${card.extends.map(function(x){ return `<div class="cc2-ext"><span class="cc2-ext-p">${x.p}</span><span class="cc2-ext-zh">${x.zh}</span></div>`; }).join("")}
      </div>
      <div class="cc2-sec">
        <div class="cc2-sec-label">🚀 用起来</div>
        <div class="cc2-core">「${card.apply.core}」</div>
        <div class="cc2-example">${card.apply.example}</div>
        <div class="cc2-where">📍 ${card.apply.where}</div>
      </div>
      <div class="cc2-risk">⚠️ ${t.risk}</div>
      <div class="cc2-practice">
        <b style="font-size:12.5px">✏️ 检验一下 · 挖空</b>
        <div class="cp-prompt" style="margin:8px 0">${pr.cloze.prompt}</div>
        <div class="cp-opts" id="cpOpts">
          ${clozeOpts.map(function(o,i){ return `<button class="cp-opt" onclick="ansCloze(this,'${pr.cloze.answer}')">${o}</button>`; }).join("")}
        </div>
        <div class="cp-fb" id="cpFb"></div>
        <b style="font-size:12.5px;display:block;margin-top:12px">✏️ 换场景套用</b>
        <div class="cp-prompt">${pr.rewrite}</div>
      </div>
    </div>
    <div class="cd-nav" style="display:flex;gap:10px;margin:16px 0">
      <button class="q-btn ghost" onclick="unitIdx=Math.max(0,unitIdx-1);renderUnit()" ${unitIdx===0?"disabled":""}>← 上一张</button>
      <button class="q-btn reveal" style="margin-left:auto" onclick="unitIdx=Math.min(${cards.length-1},unitIdx+1);renderUnit()">${unitIdx>=cards.length-1?"✅ 完成本单元":"下一张 →"}</button>
    </div>
    <div class="cd-skel-table">
      <b style="display:block;margin-bottom:8px">📋 句型总表（本单元 · 按情绪强度 弱→强）</b>
      ${COURSE_DAILY_SKELETONS.map(function(s){
        return `<div class="skel-row"><span class="skel-e">${s.emotion}</span><span class="skel-s">${s.key}</span><span class="skel-x">${s.example}</span><span class="skel-src">${s.source}</span></div>`;
      }).join("")}
    </div>`;
}
'''
c = c[:ru_start] + new_unit + c[ac_start:]

# 3) CSS（幂等）
if '.cc2-card{' not in c:
    css_anchor = '.cd-source{'
    assert c.count(css_anchor) == 1, 'css %d' % c.count(css_anchor)
    new_css = '''.cc2-card{background:#fff;border:1px solid #EDEAE0;border-radius:16px;padding:18px;box-shadow:0 1px 4px rgba(44,44,42,.05)}
.cc2-head{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.cc2-src{font-size:12px;color:#854F0B;background:#FAEEDA;border-radius:8px;padding:4px 10px}
.cc2-em{font-size:11.5px;color:#5F5E5A;background:#F1EFE8;border-radius:8px;padding:4px 10px;margin-left:auto}
.cc2-key{background:#26215C;border-radius:14px;padding:20px;text-align:center;margin-bottom:12px}
.cc2-key-label{font-size:11px;color:#AFA9EC;letter-spacing:2px;margin-bottom:8px}
.cc2-key-phrase{font-size:22px;font-weight:500;color:#fff;line-height:1.4}
.cc2-scene{background:#FAFAF7;border-radius:12px;padding:12px 14px;margin-bottom:12px}
.cc2-sec{background:#FDFBF4;border:1px solid #F0E6CC;border-radius:12px;padding:14px 16px;margin-bottom:10px}
.cc2-sec-label{font-size:12px;font-weight:500;color:#854F0B;margin-bottom:8px}
.cc2-core{font-size:14px;font-weight:500;color:#2C2C2A;margin-bottom:6px}
.cc2-desc{font-size:12.5px;color:#4A4A42;line-height:1.8}
.cc2-ext{display:flex;gap:8px;align-items:baseline;padding:5px 0}
.cc2-ext-p{font-size:13px;color:#3C3489;font-weight:500}
.cc2-ext-zh{font-size:12px;color:#7F77DD}
.cc2-example{font-size:13px;color:#2C2C2A;line-height:1.8;background:#EEEDFE;border-radius:8px;padding:8px 12px;margin:6px 0}
.cc2-where{font-size:11.5px;color:#8A6D2F;line-height:1.6}
.cc2-risk{font-size:11.5px;color:#A32D2D;background:#FCEBEB;border-radius:8px;padding:6px 12px;margin:10px 0}
.cc2-practice{background:#FDFBF4;border:1px dashed #EFE7CE;border-radius:12px;padding:14px 16px}
.cd-hl{background:#FBE9C9;color:#633806;font-weight:500;border-radius:4px;padding:0 2px}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('卡片版落地完成：数据块/卡片式renderUnit/CSS')
