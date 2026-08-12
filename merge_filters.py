# -*- coding: utf-8 -*-
"""合并话题浏览与精确筛选：删除重复的话题筛选按钮组"""
import io

PATH = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench\index.html'
with io.open(PATH, encoding='utf-8') as f:
    c = f.read()

# 1) CSS：话题卡片选中态（追加到 .topic-card .t-count 样式后）
css_anchor = '.topic-card .t-count{font-size:11px;color:#8892A0;margin-top:1px}'
new_css = css_anchor + '''
.topic-card.selected{border-color:#C8963E;background:#FBF8F0;box-shadow:0 0 0 2px rgba(200,150,62,.2)}'''
assert c.count(css_anchor) == 1
c = c.replace(css_anchor, new_css)

# 2) HTML：删除话题筛选按钮组，换成"当前话题"清除行
old_html = '''    <div class="filters">
      <span class="filter-label">话题</span>
      <div class="filter-group" id="topicFilters"></div>
    </div>
'''
new_html = '''    <div class="filters" id="topicFilterRow" style="display:none">
      <span class="filter-label">当前话题</span>
      <button class="filter-btn state-filter active" id="topicFilterBtn"></button>
      <button class="filter-clear" onclick="clearTopic()">✕ 清除话题筛选</button>
    </div>
'''
assert c.count(old_html) == 1
c = c.replace(old_html, new_html)

# 3) JS：renderTopicGrid 加选中态
old_tg = '''    return `
    <div class="topic-card" onclick="selectTopic('${t}')" title="查看「${tp.name}」话题下的表达">'''
new_tg = '''    return `
    <div class="topic-card ${currentTopic===t?"selected":""}" onclick="selectTopic('${t}')" title="查看「${tp.name}」话题下的表达">'''
assert c.count(old_tg) == 1
c = c.replace(old_tg, new_tg)

# 4) JS：selectTopic 改造 + 删除 renderTopicFilters
old_st = '''function selectTopic(t){
  currentTopic=t;
  renderTopicFilters();
  renderLibrary();
}
function renderTopicFilters(){
  const used=[...new Set(expressions.map(e=>e.topic))];
  const group=document.getElementById("topicFilters");
  group.innerHTML=`<button class="filter-btn ${currentTopic==="all"?"active":""}" data-topic="all">全部话题</button>`+
    used.map(t=>{
      const tp=topicOf(t);
      return `<button class="filter-btn ${currentTopic===t?"active":""}" data-topic="${t}">${tp.icon} ${tp.name}</button>`;
    }).join("");
  group.querySelectorAll(".filter-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      currentTopic=btn.dataset.topic;
      renderTopicFilters();
      renderLibrary();
    });
  });
}'''
new_st = '''function selectTopic(t){
  currentTopic = (currentTopic===t) ? "all" : t;  // 再点一次取消
  renderTopicGrid();
  const row=document.getElementById("topicFilterRow");
  if(currentTopic!=="all"){
    row.style.display="flex";
    document.getElementById("topicFilterBtn").textContent=topicOf(currentTopic).icon+" "+topicOf(currentTopic).name;
  }else{
    row.style.display="none";
  }
  renderLibrary();
  if(currentTopic!=="all"){
    document.getElementById("exprGrid").scrollIntoView({behavior:"smooth",block:"start"});
  }
}
function clearTopic(){
  currentTopic="all";
  document.getElementById("topicFilterRow").style.display="none";
  renderTopicGrid();
  renderLibrary();
}'''
assert c.count(old_st) == 1
c = c.replace(old_st, new_st)

# 5) INIT 里删除 renderTopicFilters 调用
old_init = 'renderTopicGrid();\nrenderTopicFilters();\nrenderLibrary();'
new_init = 'renderTopicGrid();\nrenderLibrary();'
assert c.count(old_init) == 1
c = c.replace(old_init, new_init)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK - 合并完成')
