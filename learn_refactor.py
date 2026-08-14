# -*- coding: utf-8 -*-
"""2-tab 重构：表达库 + 训练场 → 单一「学习」tab（learn_refactor）"""
import io

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# ============ 1) tab 导航 3 → 2 ============
old_tabs = '''    <button class="tab active" data-tab="library">📚 表达库</button>
    <button class="tab" data-tab="train">🎯 训练场</button>
    <button class="tab" data-tab="compare">🎤 雅思答案定制</button>'''
new_tabs = '''    <button class="tab active" data-tab="learn">🎯 学习</button>
    <button class="tab" data-tab="compare">🎤 雅思答案定制</button>'''
assert c.count(old_tabs) == 1, 'tabs ' + str(c.count(old_tabs))
c = c.replace(old_tabs, new_tabs)

# ============ 2) library + train 两个 section → 一个 learn section ============
start = c.find('  <section id="library" class="tab-content active">')
end = c.find('<!-- ===== TAB 3: 雅思答案定制 ===== -->')
assert start != -1 and end != -1 and start < end, (start, end)
new_section = '''  <section id="learn" class="tab-content active">
    <h2 class="section-title">🎯 学习</h2>
    <p class="section-desc">选一个话题，沿「范例 → 学词 → 闯关 → 实战」学透；全库表达随时可搜索。记不住的自动进词库，3 天未复习自动提醒。</p>

    <div class="dash-bar" id="dashBar"></div>

    <div id="learnHome"></div>

    <!-- 浏览全部（原表达库）-->
    <div id="libraryView" style="display:none">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <button class="q-btn ghost" onclick="renderLearnHome()">← 返回主页</button>
        <span class="filter-label" id="browseTitle">浏览与筛选 · 全部表达</span>
      </div>
      <div class="topic-grid" id="topicGrid"></div>
      <div class="filters" style="margin-top:14px">
        <span class="filter-label">类型</span>
        <div class="filter-group" id="typeFilters">
          <button class="filter-btn active" data-filter="all">全部</button>
          <button class="filter-btn" data-filter="phrase">短语</button>
          <button class="filter-btn" data-filter="sentence">句子</button>
          <button class="filter-btn" data-filter="paragraph">段落</button>
        </div>
      </div>
      <div class="filters" id="topicFilterRow" style="display:none">
        <span class="filter-label">当前话题</span>
        <button class="filter-btn state-filter active" id="topicFilterBtn"></button>
        <button class="filter-clear" onclick="clearTopic()">✕ 清除话题筛选</button>
      </div>
      <div class="filters" id="dimFilterRow" style="display:none">
        <span class="filter-label">话题维度</span>
        <div class="filter-group" id="dimFilters"></div>
        <button class="filter-clear" onclick="clearDim()">✕ 清除维度</button>
      </div>
      <div class="filters" id="stateFilterRow" style="display:none">
        <span class="filter-label">学习状态</span>
        <button class="filter-btn state-filter active" id="stateFilterBtn"></button>
        <button class="filter-clear" id="stateFilterClear" onclick="clearStateFilter()">✕ 清除状态筛选</button>
      </div>
      <div class="expr-grid" id="exprGrid"></div>
    </div>

    <!-- 话题路径（学习流）-->
    <div id="trainPath" style="display:none"></div>

    <!-- 我的词库 -->
    <div id="trainWordbook" style="display:none"></div>
  </section>

'''
c = c[:start] + new_section + c[end:]

# ============ 3) setTrainTab → showLearnView + go 系列 + doLearnSearch ============
old_settab = '''function setTrainTab(tab){
  trainTab=tab;
  const btns=document.querySelectorAll(".mode-btn");
  btns.forEach(b=>b.classList.remove("active"));
  btns[["path","wordbook","daily"].indexOf(tab)].classList.add("active");
  document.getElementById("trainPath").style.display= tab==="path"?"":"none";
  document.getElementById("trainWordbook").style.display= tab==="wordbook"?"":"none";
  document.getElementById("trainDaily").style.display= tab==="daily"?"":"none";
  if(tab==="path") renderPathHome();
  else if(tab==="wordbook") renderWordbook("unknown");
  else renderDaily();
}'''
new_settab = '''function showLearnView(view){
  const map={home:"learnHome",browse:"libraryView",path:"trainPath",wordbook:"trainWordbook"};
  Object.keys(map).forEach(function(k){
    const el=document.getElementById(map[k]);
    if(el) el.style.display= k===view?"":"none";
  });
}
function goLearnBrowse(){
  currentTopic="all"; currentDim="all"; currentFilter="all"; currentState="all";
  document.getElementById("browseTitle").textContent="浏览与筛选 · 全部表达";
  showLearnView("browse");
  renderTopicGrid(); renderLibrary();
}
function goLearnWordbook(){ showLearnView("wordbook"); renderWordbook("unknown"); }
function goLearnReview(){
  currentTopic="all"; currentDim="all"; currentFilter="all"; currentState="review";
  document.getElementById("browseTitle").textContent="🔁 待复习的表达";
  showLearnView("browse");
  renderTopicGrid(); renderLibrary();
}
function doLearnSearch(){
  const kw=document.getElementById("learnSearch").value.trim().toLowerCase();
  showLearnView("browse");
  const grid=document.getElementById("exprGrid");
  document.getElementById("browseTitle").textContent=kw?("搜索「"+kw+"」"):"浏览与筛选 · 全部表达";
  if(!kw){ renderTopicGrid(); renderLibrary(); return; }
  renderTopicGrid();
  const hits=expressions.filter(function(e){
    const okTopic=currentTopic==="all"||e.topic===currentTopic;
    return okTopic && (e.english.toLowerCase().includes(kw)||e.chinese.includes(kw)||(e.keywords||[]).some(function(k){return k.word.toLowerCase().includes(kw);}));
  });
  grid.innerHTML=hits.length?hits.map(function(e){
    const tp=topicOf(e.topic);
    return '<div class="expr-card" onclick="showDetail('+e.id+')">'+
      '<div class="card-top"><span class="badge-type '+e.type+'">'+(e.type==="phrase"?"短语":e.type==="sentence"?"句子":"段落")+'</span>'+
      '<span class="badge-topic">'+tp.icon+' '+tp.name+'</span>'+
      '<span class="badge-level">'+e.level+'</span></div>'+
      '<div class="expr-en">'+e.english+'</div>'+
      '<div class="expr-zh">'+e.chinese+'</div></div>';
  }).join(""):'<div class="empty-state"><div class="icon">🔍</div><p>没有找到「'+kw+'」，换个词试试</p></div>';
}'''
assert c.count(old_settab) == 1, 'settab ' + str(c.count(old_settab))
c = c.replace(old_settab, new_settab)

# ============ 4) renderPathHome → renderLearnHome（主页 = 话题卡 + 搜索 + 入口）============
old_ph = '''function renderPathHome(){
  pathPhase="pick"; pathTopic=null;
  const c=document.getElementById("trainPath");
  const used=[...new Set(expressions.map(e=>e.topic))];
  const cards=used.map(t=>{
    const tp=topicOf(t);
    const list=topicExpressions(t);
    const mastered=exprState; // noop
    const m=topicMastery(t);
    const wbN=list.filter(e=>wbLevel(e.id)).length;
    return `
    <div class="path-topic-card" onclick="startPath('${t}')">
      <div class="pt-head">
        <div class="pt-icon">${tp.icon}</div>
        <div>
          <div class="pt-name">${tp.name}</div>
          <div class="pt-count">${list.length} 条表达 · ${(TOPIC_DIMENSIONS[t]||[]).length} 个维度${wbN>0?" · 词库 "+wbN+" 条":""}</div>
        </div>
      </div>
      <div class="pt-bar"><div class="fill" style="width:${m}%"></div></div>
      <div class="pt-meta"><span>掌握度 ${m}%</span><span>${list.filter(e=>exprState(e.id)==="review").length>0?"🔁 "+list.filter(e=>exprState(e.id)==="review").length+" 待复习":""}</span></div>
      <div class="pt-start">${m===100?"✅ 已学透 · 再巩固":"🚀 开始学习"}</div>
    </div>`;
  }).join("");
  c.innerHTML=`
    <div class="topic-section-title">🗺️ 选择话题，开始学习路径</div>
    <p style="font-size:12.5px;color:#8892A0;margin-bottom:14px">路径：📖 闪卡学词 → ⚡ 闯关 → 🎤 雅思实战，记不住的自动进词库</p>
    <div class="path-grid">${cards}</div>`;
}'''
new_ph = '''function renderLearnHome(){
  showLearnView("home");
  pathPhase="pick"; pathTopic=null;
  const c=document.getElementById("learnHome");
  if(!c) return;
  const used=[...new Set(expressions.map(e=>e.topic))];
  const cards=used.map(t=>{
    const tp=topicOf(t);
    const list=topicExpressions(t);
    const m=topicMastery(t);
    const wbN=list.filter(e=>wbLevel(e.id)).length;
    const rv=list.filter(e=>exprState(e.id)==="review").length;
    return `
    <div class="path-topic-card" onclick="startPath('${t}')">
      <div class="pt-head">
        <div class="pt-icon">${tp.icon}</div>
        <div>
          <div class="pt-name">${tp.name}</div>
          <div class="pt-count">${list.length} 条表达 · ${(TOPIC_DIMENSIONS[t]||[]).length} 个维度${wbN>0?" · 词库 "+wbN+" 条":""}</div>
        </div>
      </div>
      <div class="pt-bar"><div class="fill" style="width:${m}%"></div></div>
      <div class="pt-meta"><span>掌握度 ${m}%</span><span>${rv>0?"🔁 "+rv+" 待复习":""}</span></div>
      <div class="pt-start">${m===100?"✅ 已学透 · 再巩固":"🚀 开始学习"}</div>
    </div>`;
  }).join("");
  const reviewN=Object.keys(wbGet()).filter(id=>wbGet()[id]==="review").length;
  c.innerHTML=`
    <div class="learn-search-row" style="display:flex;gap:10px;margin:14px 0">
      <input id="learnSearch" class="gen-input" placeholder="🔍 搜索全库表达，如 pull strings / clean slate" style="flex:1">
      <button class="q-btn reveal" onclick="doLearnSearch()">搜索</button>
    </div>
    <div class="topic-section-title">🗺️ 选一个话题开始学习 <span style="font-size:12px;color:#8892A0;font-weight:400">· 路径：范例 → 学词 → 闯关 → 实战</span></div>
    <div class="path-grid">${cards}</div>
    <div class="learn-actions" style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
      <button class="q-btn reveal" onclick="goLearnBrowse()">📖 浏览全部表达</button>
      <button class="q-btn ghost" onclick="goLearnWordbook()">📚 我的词库（${wbCount()}）</button>
      ${reviewN>0?`<button class="q-btn ghost" onclick="goLearnReview()">🔁 待复习 ${reviewN}</button>`:""}
    </div>`;
}'''
assert c.count(old_ph) == 1, 'renderPathHome ' + str(c.count(old_ph))
c = c.replace(old_ph, new_ph)

# ============ 5) renderPathHome 调用点 → renderLearnHome ============
assert c.count('onclick="renderPathHome()"') == 3, 'ph calls ' + str(c.count('onclick="renderPathHome()"'))
c = c.replace('onclick="renderPathHome()"', 'onclick="renderLearnHome()"')

# ============ 6) goTrain：tab 切换 ============
old_gt = '''  switchTab("train");
  setTrainTab("path");'''
new_gt = '''  switchTab("learn");
  showLearnView("path");'''
assert c.count(old_gt) == 1, 'goTrain ' + str(c.count(old_gt))
c = c.replace(old_gt, new_gt)

# ============ 7) INIT ============
old_init = '''renderHeaderChips();
renderDash();
renderTopicGrid();
renderLibrary();
renderPathHome();
renderDaily();'''
new_init = '''renderHeaderChips();
renderDash();
renderLearnHome();'''
assert c.count(old_init) == 1, 'init ' + str(c.count(old_init))
c = c.replace(old_init, new_init)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('2-tab 重构完成：learn section + showLearnView + renderLearnHome')
print('残留检查: setTrainTab=', c.count('setTrainTab'), '| renderPathHome=', c.count('renderPathHome'), '| trainDaily=', c.count('trainDaily'), '| data-tab="train"=', c.count('data-tab="train"'))
