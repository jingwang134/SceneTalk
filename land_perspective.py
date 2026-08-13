# -*- coding: utf-8 -*-
"""落地【原生观点范例】页：话题路径第一步，学词闪卡之前"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')

with io.open(PATH, encoding='utf-8') as f:
    c = f.read()

# ---------- 1) CSS ----------
css = '''
/* ===== 原生观点范例页 ===== */
.persp-angles{background:#fff;border-radius:14px;padding:20px 22px;border:1px solid #EEE8DE;margin-bottom:16px}
.persp-sec-title{font-size:15px;font-weight:700;color:#1A2A3A;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.persp-angle{display:flex;gap:10px;align-items:flex-start;padding:8px 0;font-size:14px;color:#4A5568;line-height:1.6}
.persp-angle .a-num{width:22px;height:22px;border-radius:50%;background:#C8963E;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.persp-tipbox{background:#FBF8F0;border-left:3px solid #C8963E;border-radius:0 8px 8px 0;padding:10px 14px;font-size:12.5px;color:#6B5B3E;line-height:1.7;margin-top:10px}
.persp-clip{background:#fff;border-radius:14px;overflow:hidden;border:1px solid #EEE8DE;margin-bottom:16px}
.persp-video{aspect-ratio:16/9;background:linear-gradient(135deg,#1A2A3A,#2D4A5A);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#F9F5EC;cursor:pointer;position:relative}
.persp-video .pv-play{width:56px;height:56px;border-radius:50%;background:rgba(200,150,62,.9);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:10px;transition:transform .2s}
.persp-video:hover .pv-play{transform:scale(1.1)}
.persp-video .pv-src{font-size:12px;color:#8FA3B8}
.persp-video .pv-note{font-size:10.5px;color:#5B7290;margin-top:6px}
.persp-clip-body{padding:16px 20px}
.persp-clip-src{font-size:11px;color:#A0AEC0;margin-bottom:8px;display:flex;gap:6px;align-items:center}
.persp-en{font-size:15.5px;line-height:1.9;color:#1A2A3A;font-weight:500;margin-bottom:8px}
.persp-zh{display:none;font-size:13.5px;color:#718096;line-height:1.8;background:#F8F5EE;border-radius:8px;padding:10px 14px;margin-bottom:8px}
.persp-zh.show{display:block;animation:fadeIn .2s}
.persp-cn-toggle{background:none;border:none;color:#3182CE;font-size:12.5px;cursor:pointer;font-family:inherit;padding:0;font-weight:600}
.persp-cn-toggle:hover{text-decoration:underline}
.persp-tip{background:#F0F8F4;border-left:3px solid #81B29A;border-radius:0 8px 8px 0;padding:10px 14px;font-size:12.5px;color:#2D5535;line-height:1.7;margin-top:10px}
.persp-tip b{color:#1A6B3F}
.persp-empty{background:#fff;border-radius:14px;border:1px dashed #D4C9B0;padding:28px;text-align:center;color:#8892A0;font-size:13px;margin-bottom:16px}
.persp-cta{margin-top:20px;text-align:center}
.persp-cta .q-btn{font-size:15px;padding:13px 36px;border-radius:10px}
'''
anchor_css = '</style>'
assert c.count(anchor_css) == 1
c = c.replace(anchor_css, css + '\n' + anchor_css)

# ---------- 2) 引入 perspectives.js ----------
old_script = '<script src="data.js"></script>'
new_script = '<script src="data.js"></script>\n<script src="perspectives.js"></script>'
assert c.count(old_script) == 1
c = c.replace(old_script, new_script)

# ---------- 3) renderPathSteps 改 5 步 ----------
old_steps = '''function renderPathSteps(){
  const steps=[
    {k:"learn",ico:"📖",t:"学词"},
    {k:"quiz",ico:"⚡",t:"闯关"},
    {k:"speak",ico:"🎤",t:"实战"},
    {k:"done",ico:"🏁",t:"完成"}
  ];'''
new_steps = '''function renderPathSteps(){
  const steps=[
    {k:"perspective",ico:"📺",t:"范例"},
    {k:"learn",ico:"📖",t:"学词"},
    {k:"quiz",ico:"⚡",t:"闯关"},
    {k:"speak",ico:"🎤",t:"实战"},
    {k:"done",ico:"🏁",t:"完成"}
  ];'''
assert c.count(old_steps) == 1
c = c.replace(old_steps, new_steps)

# ---------- 4) startPath 改为从范例页开始 ----------
old_start = '''function startPath(topicKey){
  pathTopic=topicKey;
  pathPhase="learn";
  flashList=topicExpressions(topicKey);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}'''
new_start = '''function startPath(topicKey){
  pathTopic=topicKey;
  pathPhase="perspective";
  flashList=topicExpressions(topicKey);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}'''
assert c.count(old_start) == 1
c = c.replace(old_start, new_start)

# ---------- 5) renderPathStage 加 perspective 分支 ----------
old_stage = '''  if(pathPhase==="learn") renderFlash(c);
  else if(pathPhase==="quiz") renderPathQuiz(c);'''
new_stage = '''  if(pathPhase==="perspective") renderPerspectivePage(c);
  else if(pathPhase==="learn") renderFlash(c);
  else if(pathPhase==="quiz") renderPathQuiz(c);'''
assert c.count(old_stage) == 1
c = c.replace(old_stage, new_stage)

# ---------- 6) 新增 renderPerspectivePage + startLearnAfterPersp ----------
anchor_func = '''// ===================== ⚡ 闯关核心 ====================='''
new_func = '''// ===================== 📺 原生观点范例页 =====================
function renderPerspectivePage(c){
  const tp=topicOf(pathTopic);
  const data=TOPIC_PERSPECTIVES[pathTopic]||{angles:[],clips:[]};
  const anglesHtml=(data.angles.length?data.angles.map((a,i)=>
    `<div class="persp-angle"><span class="a-num">${i+1}</span><span>${a}</span></div>`
  ).join(""):`<div class="persp-angle">（该话题角度补充中）</div>`);
  const clipsHtml=(data.clips&&data.clips.length)?data.clips.map((cl,i)=>`
    <div class="persp-clip">
      <div class="persp-video" onclick="alert('视频剪辑后放入 videos/ 目录即可内嵌播放')">
        <div class="pv-play">▶</div>
        <div class="pv-src">🎬 ${cl.source} · ${cl.scene}</div>
        <div class="pv-note">原剧片段占位 · 剪辑 10-25s 视频放入 videos/ 可替换</div>
      </div>
      <div class="persp-clip-body">
        <div class="persp-clip-src">🎬 ${cl.source} · ${cl.scene}</div>
        <div class="persp-en">${cl.english}</div>
        <div class="persp-zh" id="perspZh_${i}">${cl.chinese}</div>
        <button class="persp-cn-toggle" onclick="document.getElementById('perspZh_${i}').classList.toggle('show');this.textContent=document.getElementById('perspZh_${i}').classList.contains('show')?'收起中文':'展开中文翻译'">展开中文翻译</button>
        <div class="persp-tip">📝 <b>阅读小提示：</b>${cl.tip}</div>
      </div>
    </div>`).join(""):`<div class="persp-empty">🎬 该话题的原生片段素材补充中，先看切入角度，或换个话题～</div>`;
  c.innerHTML=pathBanner()+`
    <div class="persp-angles">
      <div class="persp-sec-title">💡 聊「${tp.name}」，外国人通常会从这几个角度切入</div>
      ${anglesHtml}
      <div class="persp-tipbox">✨ 小提示：雅思口语/写作时，可以选其中 2-3 个角度组织你的回答。</div>
    </div>
    <div class="persp-sec-title" style="margin-bottom:12px">🎬 原生观点片段 · 来自美剧完整台词（不是零散短语）</div>
    ${clipsHtml}
    <div class="persp-cta">
      <button class="q-btn reveal" onclick="startLearnAfterPersp()">已看完范例 → 开始学词 📖</button>
    </div>`;
}
function startLearnAfterPersp(){
  pathPhase="learn";
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}

// ===================== ⚡ 闯关核心 ====================='''
assert c.count(anchor_func) == 1
c = c.replace(anchor_func, new_func)

# ---------- 7) goTrain 保持直接进闪卡（跳过范例，定位到表达） ----------
old_go = '''function goTrain(id){
  closeDetail();
  const e=expressions.find(x=>x.id===id);
  if(!e) return;
  markSeen(id); renderDash();
  currentTrainExpr=e; dailyStep=1;
  if(!getTodayDoneIds().includes(e.id)){
    dailyQueue=[e,...dailyQueue.filter(x=>x.id!==e.id)].slice(0,DAILY_GOAL);
  }
  switchTab("train");
  setTrainTab("path");
  startPath(e.topic);
  pathPhase="learn";
  flashList=topicExpressions(e.topic);
  flashIndex=flashList.findIndex(x=>x.id===e.id);
  if(flashIndex<0) flashIndex=0;
  renderPathStage();
}'''
new_go = '''function goTrain(id){
  closeDetail();
  const e=expressions.find(x=>x.id===id);
  if(!e) return;
  markSeen(id); renderDash();
  currentTrainExpr=e; dailyStep=1;
  if(!getTodayDoneIds().includes(e.id)){
    dailyQueue=[e,...dailyQueue.filter(x=>x.id!==e.id)].slice(0,DAILY_GOAL);
  }
  switchTab("train");
  setTrainTab("path");
  startPath(e.topic);
  pathPhase="learn";
  flashList=topicExpressions(e.topic);
  flashIndex=flashList.findIndex(x=>x.id===e.id);
  if(flashIndex<0) flashIndex=0;
  renderPathStage();
}'''
assert c.count(old_go) == 1
c = c.replace(old_go, new_go)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK - 原生观点范例页已落地')
