# -*- coding: utf-8 -*-
# 「雅思对比」→「雅思答案生成器」：输入问题 → 选风格 → 表达库组装答案
import io
PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 替换 section HTML
old_html = '''<!-- ===== TAB 3: IELTS Comparison ===== -->
  <section id="compare" class="tab-content">
    <h2 class="section-title">雅思对比 · 5分 vs 7分</h2>
    <p class="section-desc">同一个雅思话题，5分回答和7分回答放在一起。高亮标出差异，附带提分分析。</p>
    <div class="cmp-list" id="cmpList"></div>
  </section>'''
new_html = '''<!-- ===== TAB 3: 雅思答案生成器 ===== -->
  <section id="compare" class="tab-content">
    <h2 class="section-title">🎤 雅思答案生成器</h2>
    <p class="section-desc">输入一个雅思问题（Part 1/2/3 都行），选一个答题风格，自动从表达库里组装一段带地道表达的回答。</p>
    <div class="gen-box">
      <div class="gen-row">
        <label class="filter-label" style="margin-bottom:6px;display:block">雅思问题</label>
        <textarea id="genQuestion" class="gen-input" rows="2" placeholder="例：Describe a person who has influenced you.  /  Do you think technology makes people lazy?"></textarea>
      </div>
      <div class="gen-row" style="margin-top:14px">
        <span class="filter-label" style="margin-right:8px">答题风格</span>
        <div class="gen-styles" id="genStyles">
          <button class="gen-style active" data-style="high" onclick="setGenStyle(this)">🎯 高分范文风</button>
          <button class="gen-style" data-style="casual" onclick="setGenStyle(this)">💬 口语自然风</button>
          <button class="gen-style" data-style="academic" onclick="setGenStyle(this)">📚 学术分析风</button>
          <button class="gen-style" data-style="story" onclick="setGenStyle(this)">🎭 故事叙述风</button>
        </div>
      </div>
      <div style="margin-top:16px">
        <button class="q-btn reveal" onclick="generateAnswer()">✨ 生成雅思答案</button>
        <button class="q-btn ghost" onclick="generateAnswer(true)">🔀 换一批表达</button>
      </div>
    </div>
    <div id="genResult" style="margin-top:16px"></div>
  </section>'''
assert c.count(old_html) == 1, 'html ' + str(c.count(old_html))
c = c.replace(old_html, new_html)

# 2) 替换 JS 区块（RENDER: IELTS Comparison → FILTERS）
s = c.find('// ===================== RENDER: IELTS Comparison')
e = c.find('// ===================== FILTERS')
assert s != -1 and e != -1 and s < e, f'js bounds {s} {e}'

new_js = '''// ===================== 🎤 雅思答案生成器 =====================
let genStyle = "high";
const GEN_STYLES = {
  high:     {name:"高分范文风", opener:"Well, that's a thought-provoking question — let me give you my honest take.",
             mids:[
               "There's an expression I often use in situations like this: \\"{e1}\\" ({z1}). It captures exactly how I feel.",
               "And thinking about it further, \\"{e2}\\" ({z2}) adds a slightly different shade of meaning to the whole picture.",
               "From my own experience, this really resonates, because it connects directly to the way I see the world."
             ],
             closer:"So in a nutshell, I'd say it boils down to this: the right expression can change the whole conversation."},
  casual:   {name:"口语自然风", opener:"Oh, good question! Let me think out loud for a second.",
             mids:[
               "I've got this one phrase that fits perfectly: \\"{e1}\\" ({z1}). It's kind of my go-to in this situation.",
               "And hey, \\"{e2}\\" ({z2}) — that one's pretty handy too, honestly.",
               "It's funny — I picked these up from watching shows, and now they just come out naturally."
             ],
             closer:"So yeah, that's basically where I stand — nothing too fancy, just my honest two cents."},
  academic: {name:"学术分析风", opener:"From a broader perspective, I think this question touches on several interconnected issues.",
             mids:[
               "One could frame it through the lens of \\"{e1}\\" ({z1}) — a notion that has gained considerable attention in recent years.",
               "Moreover, \\"{e2}\\" ({z2}) highlights a further dimension worth examining closely.",
               "The evidence from everyday life suggests that language itself shapes how we perceive such situations."
             ],
             closer:"To conclude, while opinions vary, I would argue that the most convincing account combines both of these viewpoints."},
  story:    {name:"故事叙述风", opener:"I actually have a story about this — it happened a couple of years ago.",
             mids:[
               "I remember this one moment when \\"{e1}\\" ({z1}) really hit home for me.",
               "And later, \\"{e2}\\" ({z2}) became kind of my motto for getting through it.",
               "Looking back, that experience taught me more than any textbook ever could."
             ],
             closer:"So whenever I hear this question now, that memory always comes back — and it still makes me smile."}
};
const TOPIC_KEYWORDS = {
  work:["work","job","career","career","boss","colleague","工作","职业","职场","老板","同事","赚钱","money","salary","company"],
  family:["family","parents","mother","father","child","children","家庭","家人","父母","孩子","结婚","married","亲"],
  education:["school","study","student","teacher","exam","education","学校","学习","学生","老师","考试","教育","study"],
  communication:["communication","talk","relationship","friendship","朋友","沟通","交流","社交","聊天","relationship","argue"],
  values:["value","principle","honest","诚实","诚信","原则","价值观","道德","坚持","放弃"],
  skills:["skill","ability","learn","学会","技能","能力","掌握"],
  health:["health","exercise","sport","健康","运动","锻炼","饮食"],
  media:["media","internet","phone","social","媒体","网络","手机","社交平台","新闻"],
  travel:["travel","trip","holiday","旅行","旅游","假期","度假"],
  shopping:["shopping","buy","money","spend","购物","消费","买"]
};
function setGenStyle(btn){ genStyle=btn.getAttribute("data-style"); document.querySelectorAll(".gen-style").forEach(b=>b.classList.remove("active")); btn.classList.add("active"); }
function detectTopic(text){
  const t=text.toLowerCase();
  let best="communication", bestN=0;
  for(const k in TOPIC_KEYWORDS){
    const n=TOPIC_KEYWORDS[k].filter(w=>t.includes(w)).length;
    if(n>bestN){ bestN=n; best=k; }
  }
  return bestN>0?best:"communication";
}
function pickGenExprs(topic,n){
  const pool=expressions.filter(e=>e.topic===topic);
  if(!pool.length) return expressions.filter(e=>e.topic==="communication").slice(0,n);
  const high=shuffleArr(pool.filter(e=>(e.level||"").startsWith("7")));
  const rest=shuffleArr(pool.filter(e=>!(e.level||"").startsWith("7")));
  return high.concat(rest).slice(0,n);
}
function buildAnswer(topic,style,exprs){
  const st=GEN_STYLES[style]||GEN_STYLES.high;
  const tp=topicOf(topic);
  let body=st.mids.map((m,i)=>{
    const e=exprs[i]||exprs[exprs.length-1];
    return m.replace("{e"+(i+1)+"}",`<span class='hl'>${e.english}</span>`).replace("{z"+(i+1)+"}",e.chinese);
  }).join(" ");
  return `
    <div class="gen-answer">
      <div class="gen-q-label">📝 你的问题</div>
      <div class="gen-q-text">${escapeHtml(document.getElementById("genQuestion").value)}</div>
      <div class="gen-style-tag">${st.name} · 话题：${tp.icon} ${tp.name}</div>
      <div class="gen-answer-text">
        ${st.opener} ${body} ${st.closer}
      </div>
      <div class="gen-exprs-label">🌟 用到的地道表达（来自「${tp.name}」话题，点击可看详解）</div>
      <div class="gen-expr-chips">
        ${exprs.map(e=>`<button class="gen-chip" onclick="showDetail(${e.id})">${e.english}</button>`).join("")}
      </div>
      <div class="gen-tip">💡 提示：黄色高亮是本次嵌入的地道表达。点「🔀 换一批表达」看同一问题的其他版本；自己开口说一遍效果最好。</div>
    </div>`;
}
function escapeHtml(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function generateAnswer(reGen){
  const q=document.getElementById("genQuestion").value.trim();
  const box=document.getElementById("genResult");
  if(!q && !reGen){
    box.innerHTML='<div class="gen-empty">✍️ 先输入一个雅思问题，再点生成～</div>';
    return;
  }
  const topic=detectTopic(q||"communication");
  const exprs=pickGenExprs(topic,3);
  box.innerHTML=buildAnswer(topic,genStyle,exprs);
}

'''
c = c[:s] + new_js + c[e:]

# 3) 移除旧的 renderComparison() 调用（在 FILTERS 后可能有）
# 检查旧调用
old_call = 'renderComparison();'
# 该调用在 JS 尾部，可能不止一处（先 count）
print('旧 renderComparison 调用数:', c.count('renderComparison'))

# 4) CSS
css_anchor = '/* ===== IELTS Comparison ===== */'
assert c.count(css_anchor) == 1, 'css ' + str(c.count(css_anchor))
new_css = '''/* ===== 🎤 雅思答案生成器 ===== */
.gen-box{background:#fff;border:1px solid #E8E2D5;border-radius:14px;padding:18px}
.gen-input{width:100%;border:1px solid #D8D2C4;border-radius:10px;padding:10px 12px;font-size:14px;font-family:inherit;resize:vertical;background:#FFFDF9}
.gen-input:focus{outline:none;border-color:#C8963E}
.gen-styles{display:flex;flex-wrap:wrap;gap:8px}
.gen-style{font-size:13px;padding:7px 14px;border-radius:20px;border:1px solid #E0DACB;background:#fff;color:#5A6B7A;cursor:pointer}
.gen-style.active{background:#C8963E;border-color:#C8963E;color:#fff;font-weight:700}
.gen-answer{background:#fff;border:1px solid #E8E2D5;border-radius:14px;padding:18px;margin-top:14px}
.gen-q-label{font-size:12px;color:#8892A0;margin-bottom:4px}
.gen-q-text{font-size:14px;font-weight:600;color:#1A2A3A;margin-bottom:10px;line-height:1.5}
.gen-style-tag{font-size:11.5px;color:#534AB7;background:#EEEDFE;display:inline-block;padding:3px 10px;border-radius:12px;margin-bottom:12px}
.gen-answer-text{font-size:14px;color:#2C2C2A;line-height:1.9;background:#FFFDF7;border:1px solid #F0E8D8;border-radius:10px;padding:14px 16px}
.gen-exprs-label{font-size:12.5px;font-weight:700;color:#1A2A3A;margin:14px 0 8px}
.gen-expr-chips{display:flex;flex-wrap:wrap;gap:8px}
.gen-chip{font-size:12.5px;padding:5px 12px;border-radius:16px;border:1px solid #D8CFEA;background:#F6F3FC;color:#534AB7;cursor:pointer}
.gen-chip:hover{background:#EEEDFE}
.gen-tip{font-size:12px;color:#8892A0;margin-top:12px;line-height:1.6}
.gen-empty{background:#FBF8F0;border:1px dashed #D4C9B0;border-radius:12px;padding:24px;text-align:center;color:#8892A0;font-size:13px}
'''
c = c.replace(css_anchor, new_css)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('OK: 雅思答案生成器落地')
