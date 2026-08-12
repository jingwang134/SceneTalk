# -*- coding: utf-8 -*-
"""拼接训练场重构：CSS / train HTML / train JS+CUE_CARDS / INIT / goTrain"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')
P = os.path.join(BASE, 'parts')

def read(p):
    with io.open(os.path.join(P, p), encoding='utf-8') as f:
        return f.read()

with io.open(PATH, encoding='utf-8') as f:
    content = f.read()

css_train = read('css_train.css')
cue_cards = read('cue_cards.js')
train_html = read('train_html.html')
train_js = read('train_js.js')

# 1) CSS → 追加到 </style> 前
anchor_css = '</style>'
assert content.count(anchor_css) == 1, 'css anchor fail'
content = content.replace(anchor_css, css_train + '\n' + anchor_css)

# 2) train HTML → 替换区块
s = content.find('<!-- ===== TAB 2: Train ===== -->')
e = content.find('<!-- ===== TAB 3: IELTS Comparison ===== -->')
assert s != -1 and e != -1 and s < e, 'html anchor fail'
content = content[:s] + train_html + content[e:]

# 3) train JS → 替换区块（CUE_CARDS 拼在前面）
s = content.find('// ===================== TRAIN =====================')
e = content.find('// ===================== RENDER: IELTS Comparison =====================')
assert s != -1 and e != -1 and s < e, 'js anchor fail'
content = content[:s] + cue_cards + '\n\n' + train_js + content[e:]

# 4) INIT 修复
old_init = """renderTrainSelector();
renderTrainContent();
renderComparison();"""
new_init = """renderDaily();
renderComparison();"""
assert old_init in content, 'init anchor fail'
content = content.replace(old_init, new_init)

# 5) goTrain 修复
old_go = """function goTrain(id){
  closeDetail();
  currentTrainExpr=expressions.find(x=>x.id===id);
  markSeen(id); renderDash();
  renderTrainSelector();
  renderTrainContent();
  switchTab("train");
}"""
new_go = """function goTrain(id){
  closeDetail();
  const e=expressions.find(x=>x.id===id);
  if(!e) return;
  markSeen(id); renderDash();
  currentTrainExpr=e; dailyStep=1;
  if(!getTodayDoneIds().includes(e.id)){
    dailyQueue=[e,...dailyQueue.filter(x=>x.id!==e.id)].slice(0,DAILY_GOAL);
  }
  switchTab("train");
  setTrainTab("daily");
  renderDaily();
}"""
assert old_go in content, 'goTrain anchor fail'
content = content.replace(old_go, new_go)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('OK - 拼接完成')
print('train JS 新区块长度:', len(cue_cards) + len(train_js))
print('总文件大小:', round(len(content)/1024, 1), 'KB')
