// ===================== 闯关课程（生活口语课 · 单元=交际任务） =====================
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
