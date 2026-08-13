// ===================== 🎤 AI 智能生成（DeepSeek 直连 / 本地服务代理） =====================
let genAiMode = (function(){ try{ return localStorage.getItem('wb_ai_mode')||'template'; }catch(e){ return 'template'; } })();
function isLocalServerMode(){
  try{ return location.protocol==='http:' && (location.hostname==='127.0.0.1'||location.hostname==='localhost'); }catch(e){ return false; }
}
function defaultEndpoint(){
  // 本地服务模式（本机 node server.js 托管）→ 用同源 /api/chat 转发，绕过浏览器直连限制
  return isLocalServerMode() ? '/api/chat' : 'https://api.deepseek.com/chat/completions';
}
function setAiMode(m, btn){
  genAiMode=m;
  try{ localStorage.setItem('wb_ai_mode',m); }catch(e){}
  document.querySelectorAll('.gen-mode-btn').forEach(b=>b.classList.toggle('active', b.getAttribute('data-mode')===m));
  if(m==='ai' && document.getElementById('aiKey')){
    const cfg=aiCfg();
    if(!cfg.key) openAiSettings();
  }
}
function aiCfg(){ try{ return JSON.parse(localStorage.getItem('wb_ai_cfg')||'{}'); }catch(e){ return {}; } }
function saveAiCfg(cfg){ try{ localStorage.setItem('wb_ai_cfg', JSON.stringify(cfg)); }catch(e){} }
function openAiSettings(){
  const cfg=aiCfg();
  document.getElementById('aiKey').value=cfg.key||'';
  document.getElementById('aiEndpoint').value=cfg.endpoint||defaultEndpoint();
  document.getElementById('aiModel').value=cfg.model||'deepseek-chat';
  document.getElementById('aiOverlay').style.display='flex';
}
function closeAiSettings(){ document.getElementById('aiOverlay').style.display='none'; }
function saveAiSettings(){
  const key=document.getElementById('aiKey').value.trim();
  const endpoint=document.getElementById('aiEndpoint').value.trim();
  const model=document.getElementById('aiModel').value.trim();
  if(!key){ alert('请填写 API Key（DeepSeek 开放平台 platform.deepseek.com 获取）'); return; }
  saveAiCfg({key:key, endpoint:endpoint||defaultEndpoint(), model:model||'deepseek-chat'});
  closeAiSettings();
  showToast(isLocalServerMode() ? '✅ 已保存：AI 将通过本地服务转发，网页可直接用' : '✅ AI Key 已保存（仅存本浏览器）');
}

const PERSONA_PROMPTS={
  vlogger:"加州松弛白女vlogger：语气松弛碎碎念，爱讲个人小经历，多用 honestly / to be real / funnily enough，短句多，少量口语填充词（you know / sort of），生活化不书面，侧重主观感受，适合 Part1 Part2",
  brit:"英伦学霸（BBC访谈风）：逻辑克制、用词精准、少俚语，高频 arguably / from my perspective / I'd say that，分层讨论，适合 Part2 Part3",
  shy:"社恐内向青年：真实犹豫感，分情况讨论（大部分情况不会，但偶尔会），自我剖析，不强行阳光，语气平实",
  party:"外向乐天派对青年（真人秀风）：情绪外放，爱举生活化小故事，语气活泼，乐于分享偶遇经历",
  ted:"理性学术学霸（TED-Ed风）：跳出个人经历延伸社会现象，利弊分析，区分个体和群体，逻辑衔接严谨，主打 Part3 深度作答",
  critic:"批判性思辨播客博主：双面视角（on one hand / on the flip side），拒绝非黑即白，输出独立观点",
  high:"高分范文风：传统雅思应试范文，规整模板化，正式但自然",
  casual:"口语自然风：普通海外考生平实口语，无强人设",
  analytic:"学术分析风：重辩证、社会视角",
  story:"故事叙述风：优先叙事讲故事"
};

function renderAIText(s){ return escapeHtml(s||'').replace(/\*\*(.+?)\*\*/g,'<span class="hl">$1</span>'); }

async function generateAIAnswer(q, reGen){
  const cfg=aiCfg();
  const box=document.getElementById('genResult');
  if(!cfg.key){
    box.innerHTML='<div class="gen-empty">🤖 AI 模式需要 API Key（DeepSeek 开放平台获取，几分钟搞定）。<br><br><button class="q-btn reveal" onclick="openAiSettings()">⚙️ 配置 AI Key</button> <button class="q-btn ghost" onclick="setAiMode(\'template\');generateAnswer()">🎛️ 先用模板生成</button></div>';
    return;
  }
  const parsed=parseQuestion(q);
  const exprs=pickGenExprs(parsed.topic, 3);
  const p=PERSONAS[genStyle]||PERSONAS.vlogger;
  const tp=topicOf(parsed.topic);
  // 本地服务模式自动切换：即使配置里存的是 DeepSeek 直连地址，也走 /api/chat 转发
  let endpoint=cfg.endpoint||defaultEndpoint();
  if(isLocalServerMode() && endpoint.indexOf('/api/chat')===-1) endpoint='/api/chat';
  box.innerHTML='<div class="gen-loading">🤖 '+p.ico+' '+p.name+' 正在组织回答… 首次调用约 15-30 秒，请稍候</div>';
  const sys='你是雅思口语金牌教练。根据用户题目生成地道、严格扣题的雅思口语答案。\n铁律：\n1. 严格回应题目内容，绝不跑题，不写与题目无关的套话\n2. 长度：Part1 只答2-4句短答；Part2 完整小故事（6句左右，含背景/细节/个人感受）；Part3 深度讨论（4-6句，正反两面论证）\n3. 完全模仿指定人设的口吻（口头禅、句式节奏、叙事逻辑），不要写成书面作文，保持真人感\n4. 【强制】必须使用用户下方提供的地道表达中的至少2个，自然融入句子，融入处用 **表达** 包裹标记；可额外用你掌握的表达补充，但至少2处必须是库内提供的\n5. 主体全英文，俚语受控（雅思考官能听懂），禁止搬运影视剧完整剧情\n6. 只输出JSON，不要任何多余文字，格式：\n{"lines":[{"en":"英文句子（含**标记**）","zh":"中文翻译","explain":"这句在雅思作答中的作用（扣题/铺垫/细节/升华等）"}],"notes":[{"phrase":"习语或词伙","meaning":"中文释义"}]}';
  const usr='题目：'+q+'\n题型：'+PART_LABEL[parsed.part]+'（对象：'+parsed.obj.cn+'）\n人设：'+(PERSONA_PROMPTS[genStyle]||PERSONA_PROMPTS.casual)+'\n可用地道表达（来自本产品表达库·美剧台本提炼，必须使用其中至少2个）：\n'+exprs.map(e=>'- '+e.english+'（'+e.chinese+'）').join('\n');
  try{
    const ctrl=new AbortController();
    const timer=setTimeout(function(){ ctrl.abort(); }, 90000);
    const resp=await fetch(endpoint,{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+cfg.key},
      body:JSON.stringify({model:cfg.model, messages:[{role:'system',content:sys},{role:'user',content:usr}], temperature:0.8, stream:false}),
      signal:ctrl.signal
    });
    clearTimeout(timer);
    if(!resp.ok){
      let msg='请求失败';
      if(resp.status===401) msg='API Key 无效或已过期（检查是否复制完整、是否有余额）';
      else if(resp.status===402) msg='账户余额不足，请到 DeepSeek 平台充值';
      else if(resp.status===404 && endpoint.indexOf('/api/chat')!==-1) msg='本地服务未启动或地址不对——请先双击运行 start-scenepick.bat 启动服务';
      else if(resp.status===429) msg='请求过于频繁（限流），稍等几秒再试';
      else if(resp.status>=500) msg='AI 服务暂时不可用，稍后再试';
      box.innerHTML='<div class="gen-error">❌ '+msg+'（HTTP '+resp.status+'）<br><br><button class="q-btn ghost" onclick="openAiSettings()">⚙️ 检查配置</button> <button class="q-btn ghost" onclick="testAiConn()">🔍 测试连接</button> <button class="q-btn ghost" onclick="setAiMode(\'template\');generateAnswer()">🎛️ 改用模板生成</button></div>';
      return;
    }
    const data=await resp.json();
    const content=data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content;
    if(!content) throw new Error('AI 返回空内容');
    const js=content.substring(content.indexOf('{'), content.lastIndexOf('}')+1);
    const out=JSON.parse(js);
    if(!out.lines || !out.lines.length) throw new Error('AI 输出格式不正确');
    renderAIAnswer(q,out,p,tp,parsed,exprs);
  }catch(e){
    let msg=e.message;
    if(e.name==='AbortError') msg='请求超时（90秒），网络或服务较慢，再试一次';
    if(e.name==='TypeError') msg='网络请求失败（无法连接 API）——多数是网络被拦或接口地址填错，点「测试连接」定位';
    box.innerHTML='<div class="gen-error">❌ AI 生成失败：'+msg+'<br><br><button class="q-btn ghost" onclick="testAiConn()">🔍 测试连接</button> <button class="q-btn ghost" onclick="generateAnswer(true)">🔄 重试</button> <button class="q-btn ghost" onclick="setAiMode(\'template\');generateAnswer()">🎛️ 改用模板生成</button></div>';
  }
}

// ---------- 连接诊断：分层定位问题 ----------
async function testAiConn(){
  const cfg=aiCfg();
  const box=document.getElementById('genResult');
  const L=[];
  L.push('<div class="gen-error" style="text-align:left"><b>🔍 连接诊断</b>（对照检查，绿色=通过 红色=问题所在）<br><br>');
  if(!cfg.key){
    L.push('❌ 未配置 API Key —— 点右上「⚙️ 配置 AI」粘贴 Key<br>');
    L.push('</div>');
    box.innerHTML=L.join('');
    return;
  }
  // ① 接口地址格式（本地服务模式 /api/chat 跳过 URL 校验）
  let endpoint=cfg.endpoint||defaultEndpoint();
  if(isLocalServerMode() && endpoint.indexOf('/api/chat')===-1) endpoint='/api/chat';
  if(endpoint.indexOf('/api/chat')===-1){
    try{ new URL(endpoint); L.push('✅ 接口地址格式正确：<code>'+escapeHtml(endpoint)+'</code><br>'); }
    catch(e){
      L.push('❌ 接口地址格式错误：<code>'+escapeHtml(endpoint)+'</code> —— 应形如 https://api.deepseek.com/chat/completions<br>');
      L.push('</div>'); box.innerHTML=L.join(''); return;
    }
  }else{
    L.push('✅ 使用本地服务转发：<code>/api/chat</code>（需先运行 start-scenepick.bat 启动服务）<br>');
  }
  // ② 连接测试（不带 key，服务器应返回 401 = 连上了）
  try{
    const resp=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:cfg.model,messages:[{role:'user',content:'hi'}]})});
    if(resp.status===401) L.push('✅ 已连上 API 服务器（返回 401 属正常，说明地址对、网络通）<br>');
    else if(resp.status===404||resp.status===405) L.push('❌ 接口地址不对（HTTP '+resp.status+'）—— 本地模式请确认 start-scenepick.bat 已运行；直连模式应为 https://api.deepseek.com/chat/completions<br>');
    else L.push('✅ 已连上 API（HTTP '+resp.status+'）<br>');
  }catch(e){
    if(e.name==='TypeError'){
      if(endpoint.indexOf('/api/chat')!==-1){
        L.push('❌ 本地服务连不上 —— 请先双击运行 <b>start-scenepick.bat</b>（黑色窗口保持打开），然后刷新页面重试<br>');
      }else{
        L.push('❌ 浏览器无法连接 API —— 说明：<br>1）当前网络拦截了 api.deepseek.com（换网络/关代理试试）<br>2）或浏览器扩展拦截了请求（关广告拦截插件试试）<br>3）推荐改用本地服务模式：运行 start-scenepick.bat 打开 http://127.0.0.1:8799<br>');
      }
    }else{
      L.push('❌ 连接异常：'+escapeHtml(e.message)+'<br>');
    }
    L.push('</div>'); box.innerHTML=L.join(''); return;
  }
  // ③ Key 有效性（真实最小请求）
  try{
    const resp=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+cfg.key},body:JSON.stringify({model:cfg.model,messages:[{role:'user',content:'hi'}],max_tokens:5})});
    if(resp.ok) L.push('✅ Key 有效！可以正常生成答案<br>');
    else if(resp.status===401) L.push('❌ Key 无效或已过期（HTTP 401）—— 到 platform.deepseek.com 重新复制完整 Key（sk- 开头）<br>');
    else if(resp.status===402) L.push('❌ 账户余额不足（HTTP 402）—— 到 DeepSeek 平台充值<br>');
    else if(resp.status===429) L.push('⚠️ 请求过于频繁（HTTP 429）—— 稍等几秒再试<br>');
    else L.push('⚠️ 服务器返回 HTTP '+resp.status+'<br>');
  }catch(e){
    L.push('❌ Key 验证请求失败：'+escapeHtml(e.message)+'<br>');
  }
  L.push('</div>');
  box.innerHTML=L.join('');
}

function renderAIAnswer(q,out,p,tp,parsed,exprs){
  const box=document.getElementById('genResult');
  const lines=Array.isArray(out.lines)?out.lines:[];
  const notes=Array.isArray(out.notes)?out.notes:[];
  const enHtml=lines.map(function(l){ return renderAIText(l.en); }).join(' ');
  const zhHtml=lines.map(function(l){ return l.zh||''; }).filter(Boolean).join(' ');
  const lineHtml=lines.map(function(l,i){
    return '<div class="gen-line"><div class="gen-line-no">'+(i+1)+'</div><div class="gen-line-body">'+
      '<div class="gen-line-en">'+renderAIText(l.en)+'</div>'+
      (l.zh?'<div class="gen-line-zh">'+escapeHtml(l.zh)+'</div>':'')+
      (l.explain?'<div class="gen-line-ex">💡 '+escapeHtml(l.explain)+'</div>':'')+
      '</div></div>';
  }).join('');
  const notesHtml=notes.length?notes.map(function(n){ return '<div class="gen-note"><code>'+escapeHtml(n.phrase)+'</code> <span class="gen-note-zh">('+escapeHtml(n.meaning)+')</span></div>'; }).join(''):'<div class="gen-note" style="color:#8892A0">AI 未单独标注习语，逐句讲解中的金色短语即为融入的地道表达</div>';
  // 统计 AI 实际融入的库内表达数（**标记** 成对出现）
  let usedCount=0;
  lines.forEach(function(l){ var m=(l.en||'').match(/\*\*(.+?)\*\*/g); if(m) usedCount+=m.length; });
  const usedBadge = usedCount>=2
    ? '<div class="gen-used-ok">✅ 已融入 <b>'+usedCount+'</b> 个库内地道表达（要求 ≥2）</div>'
    : '<div class="gen-used-warn">⚠️ AI 本次只融入了 '+usedCount+' 个库内表达（要求 ≥2）——点「🔄 重新生成」让 AI 重写一版<br><button class="q-btn ghost" onclick="generateAnswer(true)">🔄 重新生成</button></div>';
  box.innerHTML='<div class="gen-answer">'+
    '<div class="gen-q-label">📝 你的问题</div>'+
    '<div class="gen-q-text">'+escapeHtml(q)+'</div>'+
    '<div class="gen-style-tag">🤖 AI 生成 ·【'+p.ico+' '+p.name+'】·【'+PART_LABEL[parsed.part]+'】· 话题：'+tp.icon+' '+tp.name+'</div>'+
    usedBadge+
    '<div class="gen-block-label">🗣️ 英文答案 <span class="gen-block-sub">(金色 = 融入的地道表达)</span></div>'+
    '<div class="gen-answer-text">'+enHtml+'</div>'+
    '<div class="gen-block-label">🇨🇳 中文翻译</div>'+
    '<div class="gen-answer-zh">'+zhHtml+'</div>'+
    '<div class="gen-block-label">🔍 逐句讲解</div>'+
    '<div class="gen-lines">'+lineHtml+'</div>'+
    '<div class="gen-exprs-label">📝 地道习语 / 词伙注释</div>'+
    '<div class="gen-notes">'+notesHtml+'</div>'+
    '<div class="gen-exprs-label">🌟 本题用到的库内表达（点击看详解）</div>'+
    '<div class="gen-expr-chips">'+exprs.map(function(e){ return '<button class="gen-chip" onclick="showDetail('+e.id+')">'+e.english+'</button>'; }).join('')+'</div>'+
    '<div class="gen-tip">🤖 AI 答案每次生成都不同，人设与表达库由你指定。点「🔀 换一批表达」让 AI 换一套词伙重写。</div>'+
    '</div>';
}

// 重定义 generateAnswer：AI / 模板 双分支（覆盖原模板版）
function generateAnswer(reGen){
  const q=document.getElementById('genQuestion').value.trim();
  const box=document.getElementById('genResult');
  if(!q && !reGen){
    box.innerHTML='<div class="gen-empty">✍️ 先输入一个雅思口语题目，再选人设点生成～</div>';
    return;
  }
  if(genAiMode==='ai'){ generateAIAnswer(q||'Describe something you like', reGen); return; }
  // ---- 模板模式（题目感知 V2）----
  const parsed=parseQuestion(q||'Describe something you like');
  const exprs=pickGenExprs(parsed.topic, parsed.part==='p2'?3:2);
  const r=buildAnswerV2(parsed,genStyle,exprs);
  const enHtml=r.lines.map(function(l){ return l.en; }).join(' ');
  const zhHtml=r.lines.map(function(l){ return l.zh; }).filter(Boolean).join(' ');
  const lineHtml=r.lines.map(function(l,i){
    return '<div class="gen-line"><div class="gen-line-no">'+(i+1)+'</div><div class="gen-line-body">'+
      '<div class="gen-line-en">'+l.en+'</div>'+
      (l.zh?'<div class="gen-line-zh">'+l.zh+'</div>':'')+
      (l.explain?'<div class="gen-line-ex">💡 '+l.explain+'</div>':'')+
      '</div></div>';
  }).join('');
  box.innerHTML='<div class="gen-answer">'+
    '<div class="gen-q-label">📝 你的问题</div>'+
    '<div class="gen-q-text">'+escapeHtml(q)+'</div>'+
    '<div class="gen-style-tag">【'+r.p.ico+' '+r.p.name+' · '+r.p.src+'】·【'+PART_LABEL[r.part]+'·'+parsed.obj.cn+'】· 话题：'+r.tp.icon+' '+r.tp.name+'</div>'+
    '<div class="gen-block-label">🗣️ 英文答案 <span class="gen-block-sub">(表达高亮 = 本题嵌入的地道用法)</span></div>'+
    '<div class="gen-answer-text">'+enHtml+'</div>'+
    '<div class="gen-block-label">🇨🇳 中文翻译</div>'+
    '<div class="gen-answer-zh">'+zhHtml+'</div>'+
    '<div class="gen-block-label">🔍 逐句讲解</div>'+
    '<div class="gen-lines">'+lineHtml+'</div>'+
    '<div class="gen-exprs-label">📝 地道习语 / 词伙注释</div>'+
    '<div class="gen-notes">'+exprs.map(function(e){ return '<div class="gen-note"><code>'+e.english+'</code> <span class="gen-note-zh">('+e.chinese+')</span></div>'; }).join('')+'</div>'+
    '<div class="gen-exprs-label">🌟 表达出处（点击看详解）</div>'+
    '<div class="gen-expr-chips">'+exprs.map(function(e){ return '<button class="gen-chip" onclick="showDetail('+e.id+')">'+e.english+'</button>'; }).join('')+'</div>'+
    '<div class="gen-tip">💡 黄字为本次嵌入的地道表达，中文翻译逐句对应。点「🔀 换一批表达」用同人设换一套词伙重新生成，答案结构与讲解会同步刷新。</div>'+
    '</div>';
}
