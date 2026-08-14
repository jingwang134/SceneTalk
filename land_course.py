# 两级闯关课程落地：数据内联 + 学习页课程入口 + 课程/单元视图 + 练习 + 句型总表 + 检索扩展
import io, re

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 课程数据内联（放在 SCENES_DEAL 区块前）
data = io.open('parts/course_daily.js', encoding='utf-8').read()
anchor_data = '// ===== 试点：work/deal 维度场景数据（剧集式学习 · 从台本自动挖掘） ====='
assert c.count(anchor_data) == 1, 'data anchor %d' % c.count(anchor_data)
c = c.replace(anchor_data, data + '\n\n' + anchor_data, 1)

# 2) HTML：learnHome 后加课程容器
anchor_html = '    <div id="trainPath" style="display:none"></div>'
assert c.count(anchor_html) == 1, 'html anchor %d' % c.count(anchor_html)
new_html = '''    <!-- 闯关课程（生活口语课 / 雅思表达课）-->
    <div id="learnCourse" style="display:none"></div>
''' + anchor_html
c = c.replace(anchor_html, new_html, 1)

# 3) showLearnView 加 course 视图
old_view = '  const map={home:"learnHome",browse:"libraryView",path:"trainPath",wordbook:"trainWordbook"};'
new_view = '  const map={home:"learnHome",browse:"libraryView",path:"trainPath",wordbook:"trainWordbook",course:"learnCourse"};'
assert c.count(old_view) == 1, 'view %d' % c.count(old_view)
c = c.replace(old_view, new_view, 1)

# 4) renderLearnHome 里加课程入口区块（插在「选一个话题」标题前）
old_home = '    <div class="topic-section-title">🗺️ 选一个话题开始学习'
new_home = '''    <div class="topic-section-title">🎯 闯关课程 <span style="font-size:12px;color:#8892A0;font-weight:400">· 按「交际任务」学：一个任务 = 多部剧里的同场景说法</span></div>
    <div class="course-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;margin:12px 0">
      <div class="course-card" onclick="showLearnView('course');renderCourseHome()" style="background:#EEEDFE;border:1px solid #CECBF6;border-radius:12px;padding:16px;cursor:pointer">
        <div style="font-size:14px;font-weight:500;color:#26215C">🎯 生活口语课</div>
        <div style="font-size:12px;color:#534AB7;margin:6px 0">日常交际任务 · 从剧里学地道说法</div>
        <div style="font-size:11.5px;color:#7F77DD">1 个单元 · 5 张语料卡 · 句型总表</div>
        <div style="font-size:12px;color:#534AB7;margin-top:10px;font-weight:500">开始闯关 →</div>
      </div>
      <div class="course-card" style="background:#F1EFE8;border:1px solid #D3D1C7;border-radius:12px;padding:16px;opacity:.85">
        <div style="font-size:14px;font-weight:500;color:#444441">🎓 雅思表达课</div>
        <div style="font-size:12px;color:#5F5E5A;margin:6px 0">考试向任务 · formal-neutral 表达</div>
        <div style="font-size:11.5px;color:#888780">🚧 即将上线</div>
      </div>
    </div>
    <div class="topic-section-title">🗺️ 选一个话题开始学习'''
assert c.count(old_home) == 1, 'home %d' % c.count(old_home)
c = c.replace(old_home, new_home, 1)

# 5) 课程 JS（插在 showLearnView 定义前）
js_anchor = 'function showLearnView(view){'
assert c.count(js_anchor) == 1, 'js anchor %d' % c.count(js_anchor)
course_js = r'''// ===================== 闯关课程（生活口语课 · 单元=交际任务） =====================
let unitIdx = 0;
function renderCourseHome(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <button class="q-btn ghost" onclick="renderLearnHome()">← 返回主页</button>
      <span class="filter-label">🎯 生活口语课</span>
    </div>
    <div class="section-desc" style="margin-bottom:14px">每个单元 = 一个「交际任务」，从多部剧里聚合同场景的说法。先看剧里怎么说的，学句型骨架，再用练习检验。</div>
    <div class="unit-card" onclick="openUnit(0)" style="background:#FFFDF7;border:1px solid #F0E6CC;border-radius:14px;padding:18px;cursor:pointer">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:15px">💬</span>
        <b style="font-size:15px">委婉反驳 · polite disagreement</b>
        <span class="badge-dim" style="margin-left:auto">5 张语料卡</span>
      </div>
      <div style="font-size:12px;color:#8A6D2F;margin:8px 0 4px">📺 摩登家庭 ×2 · 查理成长日记 ×2 · 卡戴珊家族 ×1 ｜ 强度弱→强递增</div>
      <div style="font-size:12.5px;color:#4A4A42;line-height:1.7">先看剧里怎么委婉说「不」——It's just that / I wouldn't say / Don't take this the wrong way… 学会在不同场合软着陆。</div>
      <div style="font-size:12.5px;color:#854F0B;margin-top:12px;font-weight:500">打开本单元 →</div>
    </div>`;
}
function openUnit(i){
  unitIdx = 0;
  renderUnit();
}
function renderUnit(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const cards = COURSE_DAILY_UNIT1;
  const card = cards[unitIdx];
  if(!card){ unitIdx = 0; renderUnit(); return; }
  const dlg = card.dialogue.map(function(d){
    return `<div class="cd-line"><span class="cd-sp">${d.sp}</span><div><div class="cd-en">${d.en}</div><div class="cd-zh">${d.zh}</div></div></div>`;
  }).join("");
  const tags = card.tags;
  const t = card.tags;
  const clozeOpts = [t.cloze.answer].concat(t.cloze.distractors);
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap">
      <button class="q-btn ghost" onclick="renderCourseHome()">← 单元列表</button>
      <span class="filter-label">💬 委婉反驳</span>
      <span class="badge-dim">${card.order} / ${cards.length}</span>
    </div>
    <div class="cd-source">📺 ${card.meta.show} ${card.meta.ep} · ${card.meta.type==="tv_drama"?"美剧":"真人秀"} · ${card.meta.chars.join(" / ")}</div>
    <div class="cd-dialogue">${dlg}</div>
    <div class="cd-skeleton"><b>🦴 句型骨架</b> ${card.skeleton}</div>
    <div class="cd-tags">
      <span class="tag-e">😐 情绪强度：${t.emotion}</span>
      <span class="tag-f">🏷️ ${t.formality}</span>
      <span class="tag-p">💡 ${t.phrases.join(" · ")}</span>
      <span class="tag-r">⚠️ ${t.risk}</span>
    </div>
    <div class="cd-practice">
      <b>✏️ 练习 1 · 挖空</b>
      <div class="cp-prompt">${t.cloze.prompt}</div>
      <div class="cp-opts" id="cpOpts">
        ${clozeOpts.map(function(o,i){ return `<button class="cp-opt" onclick="ansCloze(this,'${t.cloze.answer}')">${o}</button>`; }).join("")}
      </div>
      <div class="cp-fb" id="cpFb"></div>
      <b style="margin-top:14px;display:block">✏️ 练习 2 · 换场景套用</b>
      <div class="cp-prompt">${t.rewrite}</div>
      <button class="q-btn ghost" onclick="showRewriteTip(this)" style="margin-top:8px">💡 参考思路</button>
      <div class="cp-rtip" style="display:none;margin-top:6px;font-size:12px;color:#8A6D2F;background:#FBF6E9;border-radius:8px;padding:8px 12px">先把句型骨架写下来，再替换成新场景的关键词，保持「先肯定/缓冲 → 再转折」的顺序。</div>
    </div>
    <div class="cd-nav" style="display:flex;gap:10px;margin:16px 0">
      <button class="q-btn ghost" onclick="unitIdx=Math.max(0,unitIdx-1);renderUnit()" ${unitIdx===0?"disabled":""}>← 上一张</button>
      <button class="q-btn reveal" style="margin-left:auto" onclick="unitIdx=Math.min(${cards.length-1},unitIdx+1);renderUnit()">${unitIdx>=cards.length-1?"✅ 完成本单元":"下一张 →"}</button>
    </div>
    <div class="cd-skel-table">
      <b style="display:block;margin-bottom:8px">📋 句型总表（本单元 · 按情绪强度 弱→强）</b>
      ${COURSE_DAILY_SKELETONS.map(function(s){
        return `<div class="skel-row"><span class="skel-e">${s.emotion}</span><span class="skel-s">${s.skeleton}</span><span class="skel-x">${s.example}</span><span class="skel-src">${s.source}</span></div>`;
      }).join("")}
    </div>`;
}
function ansCloze(btn, ans){
  const fb = document.getElementById("cpFb");
  if(!fb) return;
  const ok = btn.textContent.trim() === ans;
  document.querySelectorAll("#cpOpts .cp-opt").forEach(function(b){
    if(b.textContent.trim() === ans){ b.style.background="#EDF7F0"; b.style.borderColor="#5DCAA5"; }
  });
  fb.innerHTML = ok
    ? '<div style="color:#1F7A44;margin-top:8px;font-size:12.5px">✅ 正确！It\'s just that 这类骨架是「先软化、再转折」——比直接说 No 高级得多。</div>'
    : '<div style="color:#A32D2D;margin-top:8px;font-size:12.5px">❌ 不对。中式英语常见错误是直接否定或用错连接词，参考绿色答案。</div>';
}
function showRewriteTip(btn){
  const el = btn.nextElementSibling;
  if(el) el.style.display = el.style.display === "none" ? "" : "none";
}
'''
c = c.replace(js_anchor, course_js + js_anchor, 1)

# 6) 检索扩展：doLearnSearch 命中 task 词时显示课程入口
old_search = 'function doLearnSearch(){'
new_search = '''function doLearnSearch(){
  const kw=(document.getElementById("learnSearch")||{}).value||"";
  const taskHits=["委婉反驳","委婉拒绝","委婉质疑","委婉表达","polite","disagree","委婉"].filter(function(w){return kw.indexOf(w)!==-1;});
  if(taskHits.length){
    const box=document.getElementById("exprGrid");
    if(box){
      box.innerHTML='<div style="padding:16px;background:#FFFDF7;border:1px solid #F0E6CC;border-radius:12px;margin-top:10px">'+
        '<b>🎯 课程单元匹配：委婉反驳（生活口语课）</b>'+
        '<div style="font-size:12px;color:#8A6D2F;margin:6px 0">5 张语料卡：It\'s just that / I wouldn\'t say / Don\'t take this the wrong way…</div>'+
        '<button class="q-btn reveal" onclick="showLearnView(\\'course\\');renderCourseHome()">进入课程学习 →</button></div>';
    }
    return;
  }
'''
old_search_full = 'function doLearnSearch(){'
assert c.count(old_search_full) == 1, 'search %d' % c.count(old_search_full)
c = c.replace(old_search_full, new_search, 1)

# 7) CSS（幂等）
if '.cd-source{' not in c:
    css_anchor = '.scene-badge{'
    assert c.count(css_anchor) == 1, 'css %d' % c.count(css_anchor)
    new_css = '''.cd-source{font-size:12px;color:#854F0B;background:#FAEEDA;border-radius:8px;padding:6px 12px;margin-bottom:12px;display:inline-block}
.cd-dialogue{background:#FAFAF7;border:1px solid #EDEAE0;border-radius:12px;padding:12px 14px;margin-bottom:10px}
.cd-line{display:flex;gap:10px;padding:6px 0}
.cd-sp{flex:0 0 52px;font-size:12px;font-weight:500;color:#534AB7;padding-top:2px}
.cd-en{font-size:13.5px;color:#2C2C2A;line-height:1.6}
.cd-zh{font-size:12.5px;color:#5A6B7A;margin-top:2px;line-height:1.6}
.cd-skeleton{background:#EEEDFE;border:1px solid #CECBF6;border-radius:10px;padding:10px 14px;font-size:13px;color:#3C3489;line-height:1.7;margin-bottom:10px}
.cd-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
.cd-tags span{font-size:11.5px;padding:4px 10px;border-radius:14px;background:#F1EFE8;color:#444441}
.tag-r{background:#FCEBEB!important;color:#A32D2D!important}
.cd-practice{background:#FDFBF4;border:1px solid #EFE7CE;border-radius:12px;padding:14px 16px}
.cp-prompt{font-size:13.5px;color:#2C2C2A;margin:8px 0}
.cp-opts{display:flex;flex-wrap:wrap;gap:8px}
.cp-opt{font-size:12.5px;padding:8px 14px;border-radius:8px;border:1px solid #D3D1C7;background:#fff;cursor:pointer}
.cp-opt:hover{border-color:#BA7517}
.cd-skel-table{margin-top:10px}
.skel-row{display:grid;grid-template-columns:70px 1fr 1.4fr 110px;gap:8px;padding:8px 4px;border-bottom:1px solid #EDEAE0;font-size:12px;align-items:center}
.skel-e{color:#854F0B;font-weight:500}
.skel-s{color:#2C2C2A}
.skel-x{color:#5A6B7A}
.skel-src{color:#8892A0;font-size:11px}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('课程落地完成：数据内联/HTML容器/视图/主页入口/课程页/单元页/练习/句型表/检索扩展/CSS')
