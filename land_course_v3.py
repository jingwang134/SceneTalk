# 多邻国式关卡落地：替换 openUnit~showRewriteTip 区间为新关卡逻辑 + CSS
import io

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 0) 数据块替换（parts/course_daily.js 最新版，含 order_sentence/cloze_en）
data = io.open('parts/course_daily.js', encoding='utf-8').read().strip()
ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」语料卡')
assert ds != -1, 'data start not found'
de = c.find('];', c.find('const COURSE_DAILY_SKELETONS')) + 2
c = c[:ds] + data + c[de:]

# 1) 替换区间：区块注释头 到 showLearnView（幂等：整个区块整体替换）
start = c.find('// ===================== 多邻国式关卡')
if start == -1:
    start = c.find('function openUnit(i){')
assert start != -1, 'openUnit not found'
end = c.find('function showLearnView(view){')
assert end != -1 and end > start, 'showLearnView not found'

new_js = r'''// ===================== 多邻国式关卡（单元=闯关：10题混合题型） =====================
var qList=[], qIndex=0, qCorrect=0, qCombo=0, orderSel=[], orderWords=[], orderAnsStr="";
function openUnit(i){ buildUnitQuiz(); renderUnitQ(); }
function buildUnitQuiz(){
  const cards=COURSE_DAILY_UNIT1;
  qList=[];
  const pairs=[[0,3],[1,3],[2,0],[1,2],[0,1]];
  cards.forEach(function(card,ci){
    const pair=pairs[ci%pairs.length];
    pair.forEach(function(t){ const q=makeUnitQ(card,t); if(q) qList.push(q); });
  });
  qList=shuffleArr(qList);
  qIndex=0; qCorrect=0; qCombo=0;
}
function makeUnitQ(card,t){
  if(t===0){
    const all=COURSE_DAILY_UNIT1.map(function(x){return x.explain.core;});
    const wrongs=shuffleArr(all.filter(function(x){return x!==card.explain.core;})).slice(0,3);
    return {type:"en-zh", card:card, q:card.apply.example, opts:shuffleArr([card.explain.core].concat(wrongs)), ans:card.explain.core, tip:"这句英文，核心含义是？"};
  }
  if(t===1){
    return {type:"zh-en", card:card, q:card.practice.cloze.prompt, opts:shuffleArr([card.key].concat(card.practice.cloze.distractors)), ans:card.key, tip:"这句中文，剧里会怎么说？"};
  }
  if(t===2){
    return {type:"cloze", card:card, q:card.cloze_en, opts:shuffleArr([card.practice.cloze.answer].concat(card.practice.cloze.distractors)), ans:card.practice.cloze.answer, tip:card.practice.cloze.prompt};
  }
  if(t===3){
    return {type:"order", card:card, q:card.order_sentence, ans:card.order_sentence, tip:"把单词排成一句完整的英文"};
  }
  return null;
}
function renderUnitQ(){
  const c=document.getElementById("learnCourse");
  if(!c) return;
  const q=qList[qIndex];
  if(!q) return;
  const pct=Math.round(qIndex/qList.length*100);
  const typeLabel=q.type==="en-zh"?"🔤 含义选择":q.type==="zh-en"?"💬 中译英":q.type==="cloze"?"✏️ 选词填空":"🧩 句子排序";
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="renderCourseHome()">✕</button>'+
      '<div class="dlq-progress"><div class="dlq-progress-fill" style="width:'+pct+'%"></div></div>'+
      '<span class="dlq-count">'+(qIndex+1)+'/'+qList.length+'</span>'+
    '</div>'+
    '<div class="dlq-card">'+
      '<div class="dlq-type">'+typeLabel+'</div>'+
      '<div class="dlq-prompt">'+q.q+'</div>'+
      '<div class="dlq-tip">'+q.tip+'</div>'+
      (q.type==="order"
        ? '<div class="dlq-order"><div class="dlq-order-ans" id="orderAns"></div><div class="dlq-order-pool" id="orderPool"></div></div>'
        : '<div class="dlq-opts" id="dlqOpts">'+q.opts.map(function(o,i){return '<button class="dlq-opt" onclick="answerUnitQuiz(this)">'+o+'</button>';}).join("")+'</div>')+
      '<div class="dlq-fb" id="dlqFb"></div>'+
    '</div>';
  if(q.type==="order") startOrder(q);
}
function answerUnitQuiz(el){
  const q=qList[qIndex];
  const fb=document.getElementById("dlqFb");
  const ok=el.textContent.trim()===q.ans.trim();
  if(ok){ qCorrect++; qCombo++; } else { qCombo=0; }
  document.querySelectorAll("#dlqOpts .dlq-opt").forEach(function(b){
    if(b.textContent.trim()===q.ans.trim()){ b.style.background="#EDF7F0"; b.style.borderColor="#1D9E75"; }
    if(b===el&&!ok){ el.style.background="#FCEBEB"; el.style.borderColor="#E24B4A"; }
  });
  const combo=qCombo>=2?' <b style="color:#854F0B">🔥 连击 x'+qCombo+'</b>':"";
  fb.innerHTML='<div class="dlq-fb-box '+(ok?"ok":"bad")+'">'+(ok?"✅ 正确！"+combo:"❌ 正确答案：<b>"+q.ans+"</b>")+'</div>'+
    explainCardHtml(q.card)+
    '<button class="q-btn reveal" style="width:100%;margin-top:12px" onclick="nextUnitQ()">'+(qIndex>=qList.length-1?"🏁 查看成绩":"下一题 →")+'</button>';
}
function startOrder(q){
  orderAnsStr=q.ans; orderSel=[]; orderWords=shuffleArr(q.ans.split(/\s+/));
  paintOrder();
}
function paintOrder(){
  const a=document.getElementById("orderAns"), p=document.getElementById("orderPool");
  if(!a||!p) return;
  a.innerHTML=orderSel.length
    ? orderSel.map(function(w,i){return '<button class="dlq-word sel" onclick="unpickOrder('+i+')">'+w+'</button>';}).join("")
    : '<span class="dlq-order-hint">点下方单词组句</span>';
  p.innerHTML=orderWords.map(function(w,i){return '<button class="dlq-word" onclick="pickOrder('+i+')">'+w+'</button>';}).join("");
  if(orderWords.length===0&&orderSel.length>0){
    const q=qList[qIndex];
    const ok=orderSel.join(" ")===orderAnsStr;
    if(ok){ qCorrect++; qCombo++; } else { qCombo=0; }
    const combo=qCombo>=2?' <b style="color:#854F0B">🔥 连击 x'+qCombo+'</b>':"";
    const fb=document.getElementById("dlqFb");
    if(fb) fb.innerHTML='<div class="dlq-fb-box '+(ok?"ok":"bad")+'">'+(ok?"✅ 语序正确！"+combo:"❌ 正确答案：<b>"+orderAnsStr+"</b>")+'</div>'+
      explainCardHtml(q.card)+
      '<button class="q-btn reveal" style="width:100%;margin-top:12px" onclick="nextUnitQ()">'+(qIndex>=qList.length-1?"🏁 查看成绩":"下一题 →")+'</button>';
  }
}
function pickOrder(i){ orderSel.push(orderWords[i]); orderWords.splice(i,1); paintOrder(); }
function unpickOrder(i){ orderWords.push(orderSel[i]); orderSel.splice(i,1); paintOrder(); }
function nextUnitQ(){
  qIndex++;
  if(qIndex>=qList.length){ finishUnit(); return; }
  renderUnitQ();
}
function finishUnit(){
  const c=document.getElementById("learnCourse");
  const acc=qCorrect/qList.length;
  const stars=acc>=0.9?3:acc>=0.7?2:1;
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="renderCourseHome()">← 单元列表</button>'+
      '<span class="filter-label">💬 委婉反驳 · 完成</span>'+
    '</div>'+
    '<div class="dlq-done">'+
      '<div style="font-size:26px">🏁</div>'+
      '<div style="font-size:20px;font-weight:500;margin:8px 0">关卡完成！</div>'+
      '<div class="dlq-stars">'+("⭐".repeat(stars))+'<span style="color:#D3D1C7">'+("⭐".repeat(3-stars))+'</span></div>'+
      '<div style="font-size:15px;margin:8px 0">答对 <b>'+qCorrect+'</b> / '+qList.length+' 题</div>'+
      '<div style="font-size:12px;color:#8892A0">答错的题都配了讲解卡，可以「再练一次」巩固</div>'+
      '<div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap">'+
        '<button class="q-btn reveal" onclick="openUnit(0)">🔄 再练一次</button>'+
        '<button class="q-btn ghost" onclick="renderSkelTable()">📋 句型总表</button>'+
      '</div>'+
    '</div>';
}
function renderSkelTable(){
  const c=document.getElementById("learnCourse");
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="renderCourseHome()">← 单元列表</button>'+
      '<span class="filter-label">📋 句型总表（情绪弱→强）</span>'+
    '</div>'+
    COURSE_DAILY_SKELETONS.map(function(s){
      return '<div class="skel-row"><span class="skel-e">'+s.emotion+'</span><span class="skel-s">'+s.key+'</span><span class="skel-x">'+s.example+'</span><span class="skel-src">'+s.source+'</span></div>';
    }).join("");
}
function explainCardHtml(card){
  return '<div class="cc2-card" style="margin-top:12px">'+
    '<div class="cc2-key" style="border-radius:12px;padding:14px;margin-bottom:10px"><div style="font-size:11px;color:#AFA9EC">✦ 关键说法</div><div style="font-size:18px;font-weight:500;color:#fff;margin-top:4px">'+card.key+'</div></div>'+
    '<div class="cc2-sec"><div class="cc2-sec-label">💡 解释</div><div class="cc2-core">「'+card.explain.core+'」</div><div class="cc2-desc">'+card.explain.desc+'</div></div>'+
    '<div class="cc2-sec"><div class="cc2-sec-label">🔗 同类说法 · 换着说</div>'+card.extends.map(function(x){return '<div class="cc2-ext"><span class="cc2-ext-p">'+x.p+'</span><span class="cc2-ext-zh">'+x.zh+'</span></div>';}).join("")+'</div>'+
    '<div class="cc2-sec"><div class="cc2-sec-label">🚀 用起来</div><div class="cc2-example">'+card.apply.example+'</div><div class="cc2-where">📍 '+card.apply.where+'</div></div>'+
    '<div class="cc2-risk">⚠️ '+card.tags.risk+'</div>'+
  '</div>';
}
'''

c = c[:start] + new_js + c[end:]

# 2) CSS（幂等）
if '.dlq-progress{' not in c:
    css_anchor = '.cc2-card{'
    assert c.count(css_anchor) == 1, 'css %d' % c.count(css_anchor)
    new_css = '''.dlq-progress{flex:1;height:10px;background:#F1EFE8;border-radius:8px;overflow:hidden}
.dlq-progress-fill{height:100%;background:#1D9E75;border-radius:8px;transition:width .3s}
.dlq-count{font-size:12px;color:#5F5E5A;flex:0 0 auto}
.dlq-card{background:#fff;border:1px solid #EDEAE0;border-radius:16px;padding:20px}
.dlq-type{font-size:12px;color:#854F0B;background:#FAEEDA;border-radius:8px;padding:4px 10px;display:inline-block;margin-bottom:12px}
.dlq-prompt{font-size:17px;font-weight:500;color:#2C2C2A;line-height:1.6;margin-bottom:6px}
.dlq-tip{font-size:12.5px;color:#8892A0;margin-bottom:14px}
.dlq-opts{display:flex;flex-direction:column;gap:10px}
.dlq-opt{font-size:14px;padding:13px 16px;border-radius:12px;border:2px solid #EDEAE0;background:#fff;cursor:pointer;text-align:left;line-height:1.5;transition:border-color .15s}
.dlq-opt:hover{border-color:#BA7517}
.dlq-fb-box{padding:10px 14px;border-radius:10px;margin-top:12px;font-size:13.5px}
.dlq-fb-box.ok{background:#EDF7F0;color:#1F7A44;border:1px solid #CBE7D4}
.dlq-fb-box.bad{background:#FCEBEB;color:#A32D2D;border:1px solid #F7C1C1}
.dlq-order{display:flex;flex-direction:column;gap:12px}
.dlq-order-ans{min-height:54px;border:2px dashed #D3D1C7;border-radius:12px;padding:10px;display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.dlq-order-hint{color:#8892A0;font-size:12px;padding:12px}
.dlq-order-pool{display:flex;flex-wrap:wrap;gap:8px}
.dlq-word{font-size:14px;padding:10px 14px;border-radius:10px;border:1px solid #CECBF6;background:#EEEDFE;color:#3C3489;cursor:pointer}
.dlq-word.sel{background:#E1F5EE;border-color:#1D9E75;color:#0F6E56}
.dlq-done{background:#fff;border:1px solid #EDEAE0;border-radius:16px;padding:28px;text-align:center}
.dlq-stars{font-size:24px;letter-spacing:4px}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('多邻国式关卡落地完成')
