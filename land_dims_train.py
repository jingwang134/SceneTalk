# -*- coding: utf-8 -*-
# 训练场话题路径升级：新增「维度」步骤（选话题 → 选维度 → 范例/学词/闯关限定维度）
import io
PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 状态变量加 pathDim
old = 'let pathTopic = null;           // 当前话题 key\nlet pathPhase = "pick";         // pick | learn | quiz | speak | done'
new = 'let pathTopic = null;           // 当前话题 key\nlet pathDim = "all";             // 当前维度 key（all=全部）\nlet pathPhase = "pick";         // pick | dim | perspective | learn | quiz | speak | done'
assert c.count(old) == 1, 's1 ' + str(c.count(old))
c = c.replace(old, new)

# 2) 步骤条加「维度」
old = '''  const steps=[
    {k:"perspective",ico:"📺",t:"范例"},
    {k:"learn",ico:"📖",t:"学词"},'''
new = '''  const steps=[
    {k:"dim",ico:"📂",t:"维度"},
    {k:"perspective",ico:"📺",t:"范例"},
    {k:"learn",ico:"📖",t:"学词"},'''
assert c.count(old) == 1, 's2 ' + str(c.count(old))
c = c.replace(old, new)

# 3) startPath 改为先进维度选择
old = '''function startPath(topicKey){
  pathTopic=topicKey;
  pathPhase="perspective";
  flashList=topicExpressions(topicKey);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}'''
new = '''function startPath(topicKey){
  pathTopic=topicKey;
  pathDim="all";
  pathPhase="dim";
  flashList=topicExpressions(topicKey);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}
// ---- 维度选择（话题路径新增步骤）----
function dimExpressions(topic,dim){
  if(!dim||dim==="all") return topicExpressions(topic);
  return expressions.filter(e=>e.topic===topic&&e.dimension===dim);
}
function renderPathDim(c){
  const tp=topicOf(pathTopic);
  const dims=TOPIC_DIMENSIONS[pathTopic]||[];
  const allN=topicExpressions(pathTopic).length;
  const dimCards=[{key:"all",name:"全部（混合）",n:allN}].concat(dims.map(d=>({key:d.key,name:d.name,n:dimExpressions(pathTopic,d.key).length})));
  c.innerHTML=pathBanner()+`
    <div class="topic-section-title">📂 选择学习维度</div>
    <p style="font-size:12.5px;color:#8892A0;margin-bottom:14px">${tp.icon} ${tp.name}话题下有 ${dims.length} 个维度 · 选一个维度精学，或选「全部」混着学</p>
    <div class="path-dim-grid">
      ${dimCards.map(d=>`
        <div class="path-dim-card" onclick="selectPathDim('${d.key}')">
          <div class="pd-name">${d.key==="all"?"🌐 全部（混合）":d.name}</div>
          <div class="pd-count">${d.n} 条表达</div>
          <div class="pd-go">开始 →</div>
        </div>`).join("")}
    </div>`;
}
function selectPathDim(dim){
  pathDim=dim;
  flashList=dimExpressions(pathTopic,dim);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  quizQuestions=[];
  pathPhase="perspective";
  renderPathStage();
}'''
assert c.count(old) == 1, 's3 ' + str(c.count(old))
c = c.replace(old, new)

# 4) renderPathStage 加 dim 分支
old = '''  if(pathPhase==="perspective") renderPerspectivePage(c);
  else if(pathPhase==="learn") renderFlash(c);'''
new = '''  if(pathPhase==="dim") renderPathDim(c);
  else if(pathPhase==="perspective") renderPerspectivePage(c);
  else if(pathPhase==="learn") renderFlash(c);'''
assert c.count(old) == 1, 's4 ' + str(c.count(old))
c = c.replace(old, new)

# 5) pathBanner 显示当前维度
old = '''    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <span class="s-topic" style="background:#F0F4F8;color:#2C5AA0;font-size:12px;font-weight:700;padding:4px 12px;border-radius:12px">${tp.icon} ${tp.name} · 话题学习</span>
      <button class="q-btn clear" onclick="renderPathHome()">✕ 换话题</button>
    </div>'''
new = '''    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <span class="s-topic" style="background:#F0F4F8;color:#2C5AA0;font-size:12px;font-weight:700;padding:4px 12px;border-radius:12px">${tp.icon} ${tp.name} · 话题学习${pathDim!=="all"&&pathDim?` · <span style="color:#534AB7">${dimNameOf(pathTopic,pathDim)}</span>`:""}</span>
      <span>
        ${pathPhase!=="dim"&&pathDim!=="all"&&pathDim?`<button class="q-btn ghost" style="margin-right:6px" onclick="restorePathPhase('dim')">📂 换维度</button>`:""}
        <button class="q-btn clear" onclick="renderPathHome()">✕ 换话题</button>
      </span>
    </div>'''
assert c.count(old) == 1, 's5 ' + str(c.count(old))
c = c.replace(old, new)

# 6) 闯关来源校验：quizFromTopic 兼容维度（重新生成条件加维度变化）
old = 'if(quizQuestions.length===0 || quizIndex>=quizQuestions.length || quizFromTopic!==pathTopic){'
new = 'if(quizQuestions.length===0 || quizIndex>=quizQuestions.length || quizFromTopic!==pathTopic || quizFromDim!==pathDim){'
assert c.count(old) == 1, 's6 ' + str(c.count(old))
c = c.replace(old, new)

# 7) 状态变量加 quizFromDim
old = 'let quizFromTopic = null;       // 闯关来源话题（null=全库）'
new = 'let quizFromTopic = null;       // 闯关来源话题（null=全库）\nlet quizFromDim = "all";        // 闯关来源维度'
assert c.count(old) == 1, 's7 ' + str(c.count(old))
c = c.replace(old, new)

# 8) quiz 生成时记录 quizFromDim（在 quizFromTopic=pathTopic 赋值处）
old = '    quizIndex=0; quizCorrect=0; quizFromTopic=pathTopic; comboCount=0;'
new = '    quizIndex=0; quizCorrect=0; quizFromTopic=pathTopic; quizFromDim=pathDim; comboCount=0;'
assert c.count(old) == 1, 's8 ' + str(c.count(old))
c = c.replace(old, new)

# 9) renderPathHome 话题卡：显示维度数
old = '          <div class="pt-count">${list.length} 条表达 · ${wbN>0?"词库 "+wbN+" 条":""}</div>'
new = '          <div class="pt-count">${list.length} 条表达 · ${(TOPIC_DIMENSIONS[t]||[]).length} 个维度${wbN>0?" · 词库 "+wbN+" 条":""}</div>'
assert c.count(old) == 1, 's9 ' + str(c.count(old))
c = c.replace(old, new)

# 10) CSS：维度选择卡片
css_anchor = '.path-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px}'
assert c.count(css_anchor) == 1, 'css ' + str(c.count(css_anchor))
new_css = css_anchor + '''
.path-dim-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px}
.path-dim-card{background:#fff;border:1px solid #E8E2D5;border-radius:14px;padding:16px;cursor:pointer;transition:border-color .2s}
.path-dim-card:hover{border-color:#C8963E}
.pd-name{font-size:14px;font-weight:700;color:#1A2A3A;margin-bottom:6px}
.pd-count{font-size:12px;color:#8892A0;margin-bottom:10px}
.pd-go{font-size:12px;font-weight:700;color:#C8963E}'''
c = c.replace(css_anchor, new_css)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('OK: 训练场维度化完成')
