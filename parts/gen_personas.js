// ===================== 🎤 雅思答案定制（人设驱动版） =====================
let genStyle = "vlogger";
// 人设/风格：fillers=口头禅填充 | openers/closers 按题型(p1/p2/p3) | linkers=句间连接
const PERSONAS = {
  vlogger:{name:"加州松弛白女",src:"美式Vlog·摩登家庭",ico:"🌴",
    fillers:["you know","sort of","literally","honestly","I guess","funnily enough","kinda"],
    openers:{p1:"Okay so, honestly, this is such a fun little question — let me think out loud for a second.",
             p2:"Oh my gosh, okay — to be real with you, I have a perfect little story for this one.",
             p3:"Hmm, okay, honestly? I don't think there's one simple answer, but here's how I see it."},
    linkers:["And funnily enough,","Honestly,","The thing is,","And you know what?","Plus,","So kinda like,"],
    closers:{p1:"So yeah, that's kind of where I stand — hope that made sense!",
             p2:"So yeah, that's my little story — one of those memories that just stuck with me.",
             p3:"So I guess, at the end of the day, it's all about how you frame it — but hey, that's just me."}},
  brit:{name:"英伦学霸",src:"英剧·BBC访谈",ico:"🎓",
    fillers:["arguably","from my perspective","I'd say","to some extent","frankly"],
    openers:{p1:"That's an interesting question — I'd say there's rather more nuance to it than first appears.",
             p2:"Let me draw on a personal example, if I may — it's the clearest way I can illustrate the point.",
             p3:"From my perspective, this warrants a more measured analysis than a simple yes or no."},
    linkers:["Arguably,","From a different angle,","To some extent,","That said,","One could also argue that"],
    closers:{p1:"So to summarise, it's less about a fixed answer and more about how you weigh the factors involved.",
             p2:"So that anecdote, I think, captures the essence of what I'm trying to convey.",
             p3:"In conclusion, while the issue is multifaceted, I'd argue the balance tips towards the view I've outlined."}},
  shy:{name:"社恐内向青年",src:"欧美校园剧",ico:"🙈",
    fillers:["I think","probably","maybe","honestly","I guess"],
    openers:{p1:"Um, I'm not sure I'm the best person to ask about this, but I'll give it a go.",
             p2:"I don't usually talk about this sort of thing, but since you asked, there is one memory...",
             p3:"Hmm. I think this is one of those questions where the answer depends a lot on the situation."},
    linkers:["Most of the time,","But occasionally,","For me personally,","I mean,","In my case,"],
    closers:{p1:"So yeah, that's just my take — I know it's a bit of an unusual one.",
             p2:"So, yeah — it's not a big story, but it's mine, and I think about it more than I'd admit.",
             p3:"So I'd say it really depends — and I don't think there's anything wrong with that being the answer."}},
  party:{name:"外向乐天派",src:"真人秀综艺",ico:"🎉",
    fillers:["like","literally","honestly","no joke"],
    openers:{p1:"Oh, this is an easy one for me — I've got opinions on everything, no joke!",
             p2:"Okay, story time! You're gonna love this, I swear.",
             p3:"Honestly? I could talk about this all day — here's my take, straight up."},
    linkers:["And get this,","So then,","Anyway,","Also,","Oh and fun fact,"],
    closers:{p1:"So yeah, that's me — short and sweet, that's how I roll.",
             p2:"And that, my friend, is how it all went down — true story!",
             p3:"So there you have it — my two cents, and I'm sticking to it!"}},
  ted:{name:"理性学术学霸",src:"TED-Ed",ico:"🧠",
    fillers:["notably","in practice","by and large","arguably"],
    openers:{p1:"Interesting. If we step beyond the personal level for a moment, there's a broader pattern worth noting.",
             p2:"To frame this properly, let me first situate it within a wider context before narrowing to a specific case.",
             p3:"If we examine this societally rather than individually, a more layered picture emerges."},
    linkers:["Notably,","In practice,","By and large,","Critically,","This connects to a wider phenomenon,"],
    closers:{p1:"So, in short, the personal and the structural are more intertwined than they first appear.",
             p2:"In closing, this single case serves as a microcosm of a much larger dynamic.",
             p3:"To conclude, the evidence favours a nuanced position that distinguishes individual agency from systemic influence."}},
  critic:{name:"批判思辨博主",src:"深度播客",ico:"🎙️",
    fillers:["to be fair","on balance","actually","frankly"],
    openers:{p1:"I don't think this is a black-and-white issue, to be fair — but let's start with where I land.",
             p2:"I'm going to tell you a story, but I'm also going to complicate it, because that's the honest version.",
             p3:"On one hand, the easy answer is tempting. On the flip side, it falls apart under scrutiny."},
    linkers:["On one hand,","On the flip side,","That said,","Having said that,","Actually, though,"],
    closers:{p1:"So the honest answer is: it depends — and that's a legitimate answer in itself.",
             p2:"So that's the story — and the lesson I took from it isn't as tidy as I'd like it to be.",
             p3:"So I'll leave it there: the confident answer is rarely the complete one."}},
  // ---- 基础风格（不绑人设）----
  high:{name:"高分范文风",src:"应试范文",ico:"🎯",
    fillers:["in essence","fundamentally","to a large degree"],
    openers:{p1:"Well, that's a straightforward question — let me give you my honest take.",
             p2:"I'd like to share a personal experience that illustrates this well.",
             p3:"This is a multifaceted issue, so let me approach it from a couple of angles."},
    linkers:["Moreover,","Furthermore,","In addition,","From my perspective,","For instance,"],
    closers:{p1:"So in a nutshell, that's my view on the matter.",
             p2:"To sum up, this experience taught me a lesson I still carry with me.",
             p3:"All in all, I believe a balanced perspective serves this discussion best."}},
  casual:{name:"口语自然风",src:"普通考生",ico:"💬",
    fillers:["you know","I mean","actually","pretty much"],
    openers:{p1:"Oh, good question. Let me think for a second.",
             p2:"I remember a time when...",
             p3:"Hmm, I've never really thought about it deeply, but I'd say..."},
    linkers:["And actually,","Also,","For me,","I mean,"],
    closers:{p1:"So yeah, that's basically it.",
             p2:"So that's the story — hope it makes sense.",
             p3:"So I'd say it depends, honestly."}},
  analytic:{name:"学术分析风",src:"重辩证·社会视角",ico:"📚",
    fillers:["arguably","in many cases","from a societal standpoint"],
    openers:{p1:"If we consider this from a broader societal standpoint, a clearer pattern emerges.",
             p2:"To answer this, it helps to distinguish the individual experience from the collective one.",
             p3:"This question operates on multiple levels — personal, social, and structural."},
    linkers:["From a societal standpoint,","Conversely,","Empirically speaking,","This raises a further question,"],
    closers:{p1:"So while the personal lens is valid, the structural view adds essential depth.",
             p2:"In sum, the anecdotal and the systemic are two sides of the same coin.",
             p3:"Ultimately, the most defensible position integrates both the micro and macro perspectives."}},
  story:{name:"故事叙述风",src:"优先叙事",ico:"🎭",
    fillers:["and then","suddenly","at that moment","funny enough"],
    openers:{p1:"I've got a quick story that answers this better than any opinion.",
             p2:"Let me take you back to a moment I'll never forget.",
             p3:"I can answer this best with a story, then unpack it afterwards."},
    linkers:["And then,","Suddenly,","What happened next was,","At that moment,","Funny enough,"],
    closers:{p1:"And that's why I feel the way I do about it.",
             p2:"And that memory still makes me smile every time.",
             p3:"So the story, I think, says more than a hundred arguments could."}}
};
const TOPIC_KEYWORDS = {
  work:["work","job","career","boss","colleague","工作","职业","职场","老板","同事","赚钱","money","salary","company"],
  family:["family","parents","mother","father","child","children","家庭","家人","父母","孩子","结婚","married","亲"],
  education:["school","study","student","teacher","exam","education","学校","学习","学生","老师","考试","教育"],
  communication:["communication","talk","relationship","朋友","沟通","交流","社交","聊天","argue","friendship"],
  values:["value","principle","honest","诚实","诚信","原则","价值观","道德","坚持","放弃"],
  skills:["skill","ability","learn","学会","技能","能力","掌握"],
  health:["health","exercise","sport","健康","运动","锻炼","饮食"],
  media:["media","internet","phone","social","媒体","网络","手机","社交平台","新闻"],
  travel:["travel","trip","holiday","旅行","旅游","假期","度假"],
  shopping:["shopping","buy","money","spend","购物","消费","买"]
};
const PART_LABEL={p1:"Part 1",p2:"Part 2",p3:"Part 3"};
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
function detectPart(q){
  const t=q.trim().toLowerCase();
  if(/^(describe|talk about|tell me about|describe a)/.test(t)||/ describe /.test(t)) return "p2";
  if(/^(why|do you think|what are the|to what extent|in your opinion|should|how has|how does|how do|what is your opinion)/.test(t)) return "p3";
  return "p1";
}
function pickGenExprs(topic,n){
  const pool=expressions.filter(e=>e.topic===topic);
  if(!pool.length) return expressions.filter(e=>e.topic==="communication").slice(0,n);
  const high=shuffleArr(pool.filter(e=>(e.level||"").startsWith("7")));
  const rest=shuffleArr(pool.filter(e=>!(e.level||"").startsWith("7")));
  return high.concat(rest).slice(0,n);
}
function fillIn(fillers,sentence){
  return sentence.replace("{f}",fillers[Math.floor(Math.random()*fillers.length)]);
}
function buildAnswer(topic,key,exprs,part){
  const p=PERSONAS[key]||PERSONAS.vlogger;
  const tp=topicOf(topic);
  const f=()=>p.fillers[Math.floor(Math.random()*p.fillers.length)];
  const L=()=>p.linkers[Math.floor(Math.random()*p.linkers.length)];
  const E=(i)=>`<span class='hl'>${exprs[i].english}</span> <span class='zn'>(${exprs[i].chinese})</span>`;
  let body="";
  if(part==="p1"){
    body=`${p.openers.p1} There's a saying I've picked up that fits perfectly — ${E(0)} — ${f()}, that's exactly how I feel about it. ${p.closers.p1}`;
  }else if(part==="p2"){
    body=`${p.openers.p2}
      So this goes back to a while ago — something that really stuck with me. The first thing that comes to mind is ${E(0)}. It's funny how one phrase can capture a whole moment.
      ${L()} ${E(1)} became sort of the turning point — that's when things started to make sense.
      Looking back now, ${E(2)} sums it up better than anything I could say myself.
      ${p.closers.p2}`;
  }else{
    body=`${p.openers.p3}
      One way to approach it is through the lens of ${E(0)} — it reminds us that the individual experience isn't the whole story.
      ${L()} ${E(1)} points to a different angle entirely, and I think both are worth holding onto.
      ${p.closers.p3}`;
  }
  return `
    <div class="gen-answer">
      <div class="gen-q-label">📝 你的问题</div>
      <div class="gen-q-text">${escapeHtml(document.getElementById("genQuestion").value)}</div>
      <div class="gen-style-tag">【${p.ico} ${p.name} · ${p.src}】·【${PART_LABEL[part]}】· 话题：${tp.icon} ${tp.name}</div>
      <div class="gen-answer-text">${body.replace(/\n\s*/g," ")}</div>
      <div class="gen-exprs-label">📝 地道习语 / 词伙注释</div>
      <div class="gen-notes">
        ${exprs.map(e=>`<div class="gen-note"><code>${e.english}</code> <span class="gen-note-zh">(${e.chinese})</span></div>`).join("")}
      </div>
      <div class="gen-exprs-label">🌟 表达出处（点击看详解）</div>
      <div class="gen-expr-chips">
        ${exprs.map(e=>`<button class="gen-chip" onclick="showDetail(${e.id})">${e.english}</button>`).join("")}
      </div>
      <div class="gen-tip">💡 提示：黄字为本次嵌入的地道表达。点「🔀 换一批表达」用同人设换一套词伙重新生成，避免背熟一套模板。</div>
    </div>`;
}
function escapeHtml(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function generateAnswer(reGen){
  const q=document.getElementById("genQuestion").value.trim();
  const box=document.getElementById("genResult");
  if(!q && !reGen){
    box.innerHTML='<div class="gen-empty">✍️ 先输入一个雅思口语题目，再选人设点生成～</div>';
    return;
  }
  const topic=detectTopic(q||"communication");
  const part=detectPart(q||"Describe something");
  const exprs=pickGenExprs(topic, part==="p2"?3:2);
  box.innerHTML=buildAnswer(topic,genStyle,exprs,part);
}
