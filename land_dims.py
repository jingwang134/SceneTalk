# -*- coding: utf-8 -*-
# 表达库前端接入维度二级分类：维度筛选行 + 状态 + 渲染
import io
PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) HTML：topicFilterRow 后插入 dimFilterRow
old_html = '''    <div class="filters" id="topicFilterRow" style="display:none">
      <span class="filter-label">当前话题</span>
      <button class="filter-btn state-filter active" id="topicFilterBtn"></button>
      <button class="filter-clear" onclick="clearTopic()">✕ 清除话题筛选</button>
    </div>'''
new_html = old_html + '''
    <div class="filters" id="dimFilterRow" style="display:none">
      <span class="filter-label">话题维度</span>
      <div class="filter-group" id="dimFilters"></div>
      <button class="filter-clear" onclick="clearDim()">✕ 清除维度</button>
    </div>'''
assert c.count(old_html) == 1, 'html anchor ' + str(c.count(old_html))
c = c.replace(old_html, new_html)

# 2) JS：状态变量 + selectDim/clearDim + selectTopic 渲染维度 + renderLibrary 过滤 + 卡片维度标签
old_js = 'let currentFilter="all";\nlet currentTopic="all";\nlet currentState="all";'
new_js = 'let currentFilter="all";\nlet currentTopic="all";\nlet currentState="all";\nlet currentDim="all";'
assert c.count(old_js) == 1, 'js anchor ' + str(c.count(old_js))
c = c.replace(old_js, new_js)

# selectTopic 里：渲染维度行
old_sel = '''function selectTopic(t){
  currentTopic = (currentTopic===t) ? "all" : t;  // 再点一次取消
  renderTopicGrid();
  const row=document.getElementById("topicFilterRow");
  if(currentTopic!=="all"){
    row.style.display="flex";
    document.getElementById("topicFilterBtn").textContent=topicOf(currentTopic).icon+" "+topicOf(currentTopic).name;
  }else{
    row.style.display="none";
  }
  renderLibrary();'''
new_sel = '''function selectTopic(t){
  currentTopic = (currentTopic===t) ? "all" : t;  // 再点一次取消
  currentDim="all";
  renderTopicGrid();
  const row=document.getElementById("topicFilterRow");
  const drow=document.getElementById("dimFilterRow");
  if(currentTopic!=="all"){
    row.style.display="flex";
    document.getElementById("topicFilterBtn").textContent=topicOf(currentTopic).icon+" "+topicOf(currentTopic).name;
    renderDimFilters();
  }else{
    row.style.display="none";
    drow.style.display="none";
  }
  renderLibrary();'''
assert c.count(old_sel) == 1, 'sel anchor ' + str(c.count(old_sel))
c = c.replace(old_sel, new_sel)

# clearTopic 加 currentDim 重置 + drow 隐藏
old_ct = '''function clearTopic(){
  currentTopic="all";
  document.getElementById("topicFilterRow").style.display="none";
  renderTopicGrid();
  renderLibrary();
}'''
new_ct = '''function clearTopic(){
  currentTopic="all";
  currentDim="all";
  document.getElementById("topicFilterRow").style.display="none";
  document.getElementById("dimFilterRow").style.display="none";
  renderTopicGrid();
  renderLibrary();
}
function renderDimFilters(){
  const dims=TOPIC_DIMENSIONS[currentTopic]||[];
  const box=document.getElementById("dimFilters");
  const drow=document.getElementById("dimFilterRow");
  if(!dims.length){ drow.style.display="none"; return; }
  drow.style.display="flex";
  box.innerHTML='<button class="filter-btn '+(currentDim==="all"?"active":"")+'" onclick="selectDim(\\'all\\')">全部</button>'+
    dims.map(d=>'<button class="filter-btn '+(currentDim===d.key?"active":"")+'" onclick="selectDim(\\''+d.key+'\\')">'+d.name+'</button>').join("");
}
function selectDim(d){
  currentDim=d;
  renderDimFilters();
  renderLibrary();
}
function clearDim(){
  currentDim="all";
  renderDimFilters();
  renderLibrary();
}'''
assert c.count(old_ct) == 1, 'ct anchor ' + str(c.count(old_ct))
c = c.replace(old_ct, new_ct)

# renderLibrary 过滤加 okDim
old_flt = '''    const okType=currentFilter==="all"||e.type===currentFilter;
    const okTopic=currentTopic==="all"||e.topic===currentTopic;
    const okState=currentState==="all"||exprState(e.id)===currentState;
    return okType&&okTopic&&okState;'''
new_flt = '''    const okType=currentFilter==="all"||e.type===currentFilter;
    const okTopic=currentTopic==="all"||e.topic===currentTopic;
    const okDim=currentDim==="all"||e.dimension===currentDim;
    const okState=currentState==="all"||exprState(e.id)===currentState;
    return okType&&okTopic&&okDim&&okState;'''
assert c.count(old_flt) == 1, 'flt anchor ' + str(c.count(old_flt))
c = c.replace(old_flt, new_flt)

# 表达卡 + 详情面板头部 都加维度标签
old_badge = '        <span class="badge-topic">${tp.icon} ${tp.name}</span>'
new_badge = '        <span class="badge-topic">${tp.icon} ${tp.name}</span>\n        ${e.dimension?`<span class="badge-dim">${dimNameOf(e.topic,e.dimension)}</span>`:""}'
assert c.count(old_badge) == 2, 'badge anchor ' + str(c.count(old_badge))
c = c.replace(old_badge, new_badge)

# 加 dimNameOf 辅助函数（放在 topicOf 后）
old_topicof = 'function topicOf(key){ return TOPICS[key] ? TOPICS[key] : {name:key, icon:"📌"}; }'
new_topicof = old_topicof + '''
function dimNameOf(topic,key){
  const dims=TOPIC_DIMENSIONS[topic]||[];
  const d=dims.find(x=>x.key===key);
  return d?d.name:"";
}'''
assert c.count(old_topicof) == 1, 'topicof anchor ' + str(c.count(old_topicof))
c = c.replace(old_topicof, new_topicof)

# CSS：维度徽章
css_anchor = '.badge-topic{font-size:11px;font-weight:600;padding:3px 10px;border-radius:10px;background:#F0F4F8;color:#2C5AA0}'
assert c.count(css_anchor) == 1, 'css anchor ' + str(c.count(css_anchor))
new_css = css_anchor + '\n.badge-dim{font-size:11px;font-weight:600;padding:3px 10px;border-radius:10px;background:#EEEDFE;color:#534AB7}'
c = c.replace(css_anchor, new_css)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('OK: 前端维度筛选完成')
