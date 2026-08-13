# -*- coding: utf-8 -*-
# v2 修正版：全部用精确字符串替换（不用危险区间锚点）
import io
PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# ---- 1) header 导入按钮 ----
old = '''      <span class="header-chip gold">🔥 <span class="ch-num" id="hdrStreak">0</span>天</span>
      <button class="import-btn" onclick="openImport()">📤 导入台本</button>'''
new = '''      <span class="header-chip gold">🔥 <span class="ch-num" id="hdrStreak">0</span>天</span>'''
assert c.count(old) == 1, 'h1 ' + str(c.count(old))
c = c.replace(old, new)

# ---- 2) import modal HTML（区间安全：仅含 modal）----
s = c.find('<!-- ===== Import Modal ===== -->')
e = c.find('<!-- ===== Toast ===== -->')
assert s != -1 and e != -1 and s < e, f'modal bounds {s} {e}'
c = c[:s] + c[e:]

# ---- 3) import JS（区间安全：仅含 import 函数）----
s = c.find('// ===================== IMPORT MODAL =====================')
e = c.find('// ===================== INIT =====================')
assert s != -1 and e != -1 and s < e, f'js bounds {s} {e}'
c = c[:s] + c[e:]

# ---- 4) import CSS（.import- 前缀行）----
import re
lines = c.split('\n')
out = [l for l in lines if not re.match(r'^\s*\.import-', l)]
c = '\n'.join(out)

# ---- 5) tab 按钮改名 ----
old = '<button class="tab" data-tab="compare">⚖️ 雅思对比</button>'
new = '<button class="tab" data-tab="compare">🎤 雅思答案定制</button>'
assert c.count(old) == 1, 'tab ' + str(c.count(old))
c = c.replace(old, new)

# ---- 6) section 标题改名 ----
old = '<h2 class="section-title">🎤 雅思答案生成器</h2>'
new = '<h2 class="section-title">🎤 雅思答案定制</h2>'
assert c.count(old) == 1, 'title ' + str(c.count(old))
c = c.replace(old, new)

# ---- 7) 详情按钮 goCompare → goGen ----
old = '''        <button class="cta-btn train" onclick="goTrain(${e.id})">🎯 去训练这个表达</button>
        <button class="cta-btn compare" onclick="goCompare(${e.id})">⚖️ 看 5分 vs 7分 对比</button>'''
new = '''        <button class="cta-btn train" onclick="goTrain(${e.id})">🎯 去训练这个表达</button>
        <button class="cta-btn compare" onclick="goGen('${e.topic}')">🎤 定制这个问题的雅思答案</button>'''
assert c.count(old) == 1, 'btn ' + str(c.count(old))
c = c.replace(old, new)

# ---- 8) goCompare 函数 → goGen（精确函数体替换）----
old_fn = '''function goCompare(id){
  closeDetail();
  switchTab("compare");
  document.querySelector(`#cmpList .cmp-item[data-id="${id}"]`).scrollIntoView({behavior:"smooth",block:"center"});
}'''
assert c.count(old_fn) == 1, 'fn ' + str(c.count(old_fn))
new_fn = '''function goGen(topic){
  closeDetail();
  const SAMPLE={
    work:"Describe a job you would like to do in the future.",
    family:"Describe a family member you are closest to.",
    education:"Describe a subject you enjoyed at school.",
    communication:"Describe a time you had a difficult conversation with someone.",
    values:"Describe a time you had to make a difficult decision.",
    skills:"Describe a skill you would like to learn in the future.",
    friendship:"Describe a close friend you have known for a long time.",
    media:"Do you think social media has a positive or negative influence on people?",
    health:"Describe something you do to stay healthy.",
    travel:"Describe a trip you remember well.",
    shopping:"Do you enjoy shopping? Why or why not?"
  };
  document.getElementById("genQuestion").value=SAMPLE[topic]||SAMPLE.communication;
  switchTab("compare");
  setTimeout(function(){ generateAnswer(); var r=document.getElementById("genResult"); if(r) r.scrollIntoView({behavior:"smooth",block:"start"}); },120);
}'''
c = c.replace(old_fn, new_fn)

# ---- 9) 注释改名 ----
c = c.replace('/* ===== 🎤 雅思答案生成器 ===== */', '/* ===== 🎤 雅思答案定制 ===== */')
c = c.replace('<!-- ===== TAB 3: 雅思答案生成器 ===== -->', '<!-- ===== TAB 3: 雅思答案定制 ===== -->')
c = c.replace('// ===================== 🎤 雅思答案生成器 =====================', '// ===================== 🎤 雅思答案定制 =====================')

io.open(PATH, 'w', encoding='utf-8').write(c)
print('OK: v2 修正版执行完成')
