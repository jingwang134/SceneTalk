# -*- coding: utf-8 -*-
"""训练场 V3 拼接：话题路径 + 词库 + 今日任务"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')
P = os.path.join(BASE, 'parts')

def read(p):
    with io.open(os.path.join(P, p), encoding='utf-8') as f:
        return f.read()

with io.open(PATH, encoding='utf-8') as f:
    content = f.read()

css_v3 = read('css_v3.css')
train_html_v3 = read('train_html_v3.html')
train_js_v3 = read('train_js_v3.js')
cue_cards = read('cue_cards.js')

# 1) CSS → </style> 前（需去掉文件内已有的 </style> 相关，part 无 style 标签，直接插入）
anchor_css = '</style>'
assert content.count(anchor_css) == 1
content = content.replace(anchor_css, css_v3 + '\n' + anchor_css)

# 2) train HTML 替换
s = content.find('<!-- ===== TAB 2: Train ===== -->')
e = content.find('<!-- ===== TAB 3: IELTS Comparison ===== -->')
assert s != -1 and e != -1 and s < e
content = content[:s] + train_html_v3 + content[e:]

# 3) train JS 替换（从 CUE CARDS 到 RENDER: IELTS Comparison）
s = content.find('// ===================== CUE CARDS')
e = content.find('// ===================== RENDER: IELTS Comparison')
assert s != -1 and e != -1 and s < e
content = content[:s] + cue_cards + '\n\n' + train_js_v3 + content[e:]

# 4) INIT 修复（renderDaily 已存在，需确认 renderPath 初始化）
old_init = "renderDaily();\nrenderComparison();"
new_init = "renderPathHome();\nrenderDaily();\nrenderComparison();"
assert old_init in content
content = content.replace(old_init, new_init)

# 5) goTrain 修复（与 V3 变量兼容）
old_go = """function goTrain(id){
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
  setTrainTab("path");
  startPath(e.topic);
  pathPhase="learn";
  flashList=topicExpressions(e.topic);
  flashIndex=flashList.findIndex(x=>x.id===e.id);
  if(flashIndex<0) flashIndex=0;
  renderPathStage();
}"""
assert old_go in content
content = content.replace(old_go, new_go)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('OK - V3 拼接完成')
print('总文件大小:', round(len(content)/1024, 1), 'KB')
