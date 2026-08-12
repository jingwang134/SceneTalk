// ===================== TRAIN V3 (话题路径 + 词库 + 今日任务) =====================
// ---- 全局状态 ----
let trainTab = "path";          // path | wordbook | daily
let pathTopic = null;           // 当前话题 key
let pathPhase = "pick";         // pick | learn | quiz | speak | done
let flashList = [];
let flashIndex = 0;
let flashStats = {known:0, fuzzy:0, unknown:0};
let currentTrainExpr = null;    // 今日任务当前表达
let dailyQueue = [];
let dailyStep = 1;
let quizQuestions = [];
let quizIndex = 0;
let quizCorrect = 0;
let quizFromTopic = null;       // 闯关来源话题（null=全库）
let comboCount = 0;
let speakCard = null;
let speakTimer = null;
let speakPhase = "pick";
const DAILY_GOAL = 4;

function shuffleArr(a){ const r=a.slice(); for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; }

// ===================== 📚 词库系统 =====================
function wbGet(){ return progress.wordbook || {}; }
function wbLevel(id){ return (progress.wordbook && progress.wordbook[id]) || null; }
function wbSet(id, level){
  if(!progress.wordbook) progress.wordbook={};
  progress.wordbook[id]=level;
  saveProgress(); renderDash();
}
function wbRemove(id){
  if(progress.wordbook) delete progress.wordbook[id];
  saveProgress(); renderDash();
}
function wbCount(){ return Object.keys(wbGet()).length; }

// ===================== 模式切换 =====================
function setTrainTab(tab){
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
}

// ===================== 🗺️ 话题学习路径 =====================
function topicExpressions(key){ return expressions.filter(e=>e.topic===key); }
function topicMastery(key){
  const list=topicExpressions(key);
  if(list.length===0) return 0;
  const learned=list.filter(e=>exprState(e.id)==="learned").length;
  return Math.round(learned/list.length*100);
}
function renderPathHome(){
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
          <div class="pt-count">${list.length} 条表达 · ${wbN>0?"词库 "+wbN+" 条":""}</div>
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
}
function startPath(topicKey){
  pathTopic=topicKey;
  pathPhase="learn";
  flashList=topicExpressions(topicKey);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}
function renderPathSteps(){
  const steps=[
    {k:"learn",ico:"📖",t:"学词"},
    {k:"quiz",ico:"⚡",t:"闯关"},
    {k:"speak",ico:"🎤",t:"实战"},
    {k:"done",ico:"🏁",t:"完成"}
  ];
  const idx=steps.findIndex(s=>s.k===pathPhase);
  return `<div class="path-steps">`+steps.map((s,i)=>{
    let cls="path-step";
    if(i<idx) cls+=" done";
    if(i===idx) cls+=" active";
    return `<div class="${cls}" onclick="${i<idx?"restorePathPhase('"+s.k+"')":"''"}"><span class="ps-ico">${s.ico}</span>${s.t}</div>`;
  }).join("")+`</div>`;
}
function restorePathPhase(k){ pathPhase=k; renderPathStage(); }
function pathBanner(){
  const tp=topicOf(pathTopic);
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <span class="s-topic" style="background:#F0F4F8;color:#2C5AA0;font-size:12px;font-weight:700;padding:4px 12px;border-radius:12px">${tp.icon} ${tp.name} · 话题学习</span>
      <button class="q-btn clear" onclick="renderPathHome()">✕ 换话题</button>
    </div>
    ${renderPathSteps()}`;
}
function renderPathStage(){
  const c=document.getElementById("trainPath");
  if(pathPhase==="learn") renderFlash(c);
  else if(pathPhase==="quiz") renderPathQuiz(c);
  else if(pathPhase==="speak") renderPathSpeak(c);
  else renderPathDone(c);
}
// ---- 阶段1：闪卡学词 ----
function renderFlash(c){
  const banner=pathBanner();
  if(flashIndex>=flashList.length){
    // 学词完成 → 进入闯关
    pathPhase="quiz";
    renderPathQuiz(c);
    return;
  }
  const e=flashList[flashIndex];
  const tp=topicOf(e.topic);
  const related=flashList.filter(x=>x.id!==e.id).slice(0,2);
  const relatedHtml=related.length?`<div class="flash-related">📎 同话题关联：${related.map(x=>`<b>${x.english.length>18?x.english.substring(0,18)+"…":x.english}</b>`).join(" · ")}</div>`:"";
  c.innerHTML=banner+`
    <div class="flash-area">
      <div class="flash-counter">📖 学词 ${flashIndex+1} / ${flashList.length} · 已认识 ${flashStats.known} 模糊 ${flashStats.fuzzy} 陌生 ${flashStats.unknown}</div>
      <div class="flash-wrap" onclick="flipFlash()">
        <div class="flash-card" id="flashCard">
          <div class="flash-face flash-front">
            <div class="fe">${e.english}</div>
            <div class="fh"><span>${tp.icon} ${tp.name}</span><span>IELTS ${e.level}</span></div>
            <div class="ftap">👆 点击翻转看释义</div>
          </div>
          <div class="flash-face flash-back">
            <div class="bc">${e.chinese}</div>
            <div class="bu">${e.usage}</div>
            <div class="be">“${e.example}”</div>
          </div>
        </div>
      </div>
      ${relatedHtml}
      <div class="flash-actions">
        <button class="flash-btn unknown" onclick="flashMark('unknown')"><span class="fb-ico">🙈</span><span class="fb-txt">不认识</span></button>
        <button class="flash-btn fuzzy" onclick="flashMark('fuzzy')"><span class="fb-ico">🤔</span><span class="fb-txt">模糊</span></button>
        <button class="flash-btn known" onclick="flashMark('known')"><span class="fb-ico">😎</span><span class="fb-txt">认识</span></button>
      </div>
    </div>`;
}
function flipFlash(){
  const card=document.getElementById("flashCard");
  if(card) card.classList.toggle("flipped");
}
function flashMark(level){
  const e=flashList[flashIndex];
  flashStats[level]++;
  // 不认识/模糊 → 进词库
  if(level!=="known"){
    const cur=wbLevel(e.id);
    if(!cur) wbSet(e.id,"unknown");
  }
  if(level==="known"&&wbLevel(e.id)){
    // 认识 → 若词库里有，升级为 known
    wbSet(e.id,"known");
  }
  markSeen(e.id);
  renderDash();
  flashIndex++;
  renderFlash(document.getElementById("trainPath"));
  if(flashIndex>=flashList.length){
    showToast("📖 学词完成 · 进入闯关！","gold");
  }
}
// ---- 阶段2：闯关（该话题） ----
function renderPathQuiz(c){
  const banner=pathBanner();
  if(quizQuestions.length===0 || quizIndex>=quizQuestions.length || quizFromTopic!==pathTopic){
    // 生成该话题的题（循环取满8题）
    const pool=[];
    for(let i=0;i<8;i++) pool.push(flashList[i%flashList.length]);
    quizQuestions=pool.map((e,i)=>makeQuizItem(e,i));
    quizIndex=0; quizCorrect=0; quizFromTopic=pathTopic; comboCount=0;
  }
  renderQuizQ(c);
  c.innerHTML=banner+c.innerHTML;
}
// ---- 阶段3：实战（该话题） ----
function renderPathSpeak(c){
  const banner=pathBanner();
  if(!speakTopicKey || speakTopicKey!==pathTopic || speakPhase==="pick" || speakPhase==="done"){
    speakTopicKey=pathTopic;
    speakPhase="prep";
    speakSeconds=60;
    clearSpeakTimer();
  }
  c.innerHTML=banner;
  renderSpeakStageInto(c);
}
// ---- 阶段4：完成 ----
function renderPathDone(c){
  const tp=topicOf(pathTopic);
  const list=flashList;
  const wbIn=list.filter(e=>wbLevel(e.id)).length;
  const learned=list.filter(e=>exprState(e.id)==="learned").length;
  const m=topicMastery(pathTopic);
  c.innerHTML=pathBanner()+`
    <div class="path-done">
      <div class="big">${m>=80?"🏆":m>=50?"🎯":"💪"}</div>
      <h3>「${tp.name}」话题学习完成！</h3>
      <div class="pd-stats">
        <div class="pd-stat"><div class="n">${m}%</div><div class="l">话题掌握度</div></div>
        <div class="pd-stat"><div class="n">${learned}/${list.length}</div><div class="l">已掌握表达</div></div>
        <div class="pd-stat"><div class="n">${wbIn}</div><div class="l">已入词库</div></div>
      </div>
      ${wbIn>0?`<p style="font-size:13px;color:#8B6914;background:#FFF8E6;border-radius:8px;padding:10px;margin:10px 0">📚 ${wbIn} 条记不住的表达已加入「我的词库」，记得去复习</p>`:""}
      <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="q-btn reveal" onclick="setTrainTab('wordbook')">📚 去词库复习</button>
        <button class="q-btn clear" onclick="renderPathHome()">🗺️ 学下一个话题</button>
        <button class="q-btn clear" onclick="restartPathTopic()">🔄 重新学一遍</button>
      </div>
    </div>`;
}
function restartPathTopic(){
  flashList=topicExpressions(pathTopic);
  flashIndex=0; flashStats={known:0,fuzzy:0,unknown:0};
  pathPhase="learn"; renderPathStage();
}

// ===================== ⚡ 闯关核心 =====================
function makeQuizItem(e,idx){
  const kind=["meaning","translate","cloze"][idx%3];
  const others=shuffleArr(expressions.filter(x=>x.id!==e.id));
  if(kind==="meaning"){
    const ans=e.chinese.split("，")[0]||e.chinese;
    const wrongs=others.slice(0,3).map(x=>x.chinese.split("，")[0]||x.chinese);
    return {kind,exprId:e.id,prompt:`「<b style='color:#C8963E'>${e.english}</b>」的正确含义是？`,options:shuffleArr([ans,...wrongs]),answer:ans};
  }
  if(kind==="translate"){
    const ans=e.english.length>60?e.english.substring(0,60)+"…":e.english;
    const wrongs=others.slice(0,3).map(x=>x.english.length>60?x.english.substring(0,60)+"…":x.english);
    return {kind,exprId:e.id,prompt:`「<b style='color:#C8963E'>${e.chinese.split("，")[0]}</b>」对应的英文表达是？`,options:shuffleArr([ans,...wrongs]),answer:ans};
  }
  const ans=e.cloze.answer.replace(/\|/g," ");
  const wrongs=others.slice(0,3).map(x=>x.cloze.answer.replace(/\|/g," "));
  return {kind,exprId:e.id,prompt:e.cloze.text,options:shuffleArr([ans,...wrongs]),answer:ans};
}
function renderQuizQ(c){
  const host=c||document.getElementById("trainPath");
  if(quizIndex>=quizQuestions.length){ renderQuizResult(host); return; }
  const q=quizQuestions[quizIndex];
  const pct=Math.round(quizIndex/quizQuestions.length*100);
  const html=`
    <div class="quiz-shell">
      <div class="quiz-top">
        <span class="q-count">第 ${quizIndex+1} / ${quizQuestions.length} 题</span>
        <div class="quiz-progress"><div class="fill" style="width:${pct}%"></div></div>
        <span style="font-size:12px;color:#8892A0">已答对 ${quizCorrect} 题</span>
      </div>
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.options.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(this,${i})">${o}</button>`).join("")}
      </div>
      <div class="quiz-feedback" id="quizFb"></div>
      <button class="q-btn reveal quiz-next" id="quizNext" onclick="nextQuiz()">下一题 →</button>
    </div>`;
  host.innerHTML=html;
}
function answerQuiz(btn,idx){
  const q=quizQuestions[quizIndex];
  const opts=document.querySelectorAll("#quizOpts .quiz-opt");
  opts.forEach(o=>o.classList.add("disabled"));
  const fb=document.getElementById("quizFb");
  const picked=q.options[idx];
  if(picked===q.answer){
    btn.classList.add("correct");
    quizCorrect++;
    comboCount++;
    fb.className="quiz-feedback ok show";
    fb.innerHTML="✅ 答对了！+5 XP";
    recordActivity(5);
    floatXP(btn,"5");
    if(comboCount>=2){
      showCombo(comboCount);
    }
  }else{
    btn.classList.add("wrong");
    opts.forEach((o,i)=>{ if(q.options[i]===q.answer) o.classList.add("correct"); });
    fb.className="quiz-feedback no show";
    fb.innerHTML="❌ 正确答案：「"+q.answer+"」<br><span style='font-size:12px'>已加入词库，稍后复习</span>";
    comboCount=0;
    // 答错 → 进词库
    const ex=expressions.find(x=>x.id===q.exprId);
    if(ex && !wbLevel(ex.id)) wbSet(ex.id,"unknown");
    recordActivity(2);
  }
  document.getElementById("quizNext").classList.add("show");
}
function showCombo(n){
  const el=document.createElement("div");
  el.className="combo";
  el.textContent="🔥 连击 x"+n+"!";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1000);
}
function nextQuiz(){
  quizIndex++;
  if(pathPhase==="quiz") renderPathStage();
}
function renderQuizResult(host){
  const total=quizQuestions.length;
  const bonus=quizCorrect>=7?20:quizCorrect>=5?10:0;
  if(bonus>0) recordActivity(bonus);
  const emoji=quizCorrect>=7?"🏆":quizCorrect>=5?"🎯":"💪";
  const inPath=(pathPhase==="quiz");
  host.innerHTML=`
    <div class="quiz-shell quiz-result">
      <div class="big">${emoji}</div>
      <div class="score">${quizCorrect} / ${total} <b>${bonus>0?"· 通关 +"+bonus+" XP":""}</b></div>
      <p style="font-size:13px;color:#8892A0;margin-top:8px">${quizCorrect>=7?"太强了！":quizCorrect>=5?"不错，继续巩固！":"答错的已进词库，复习后再战"}</p>
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        ${inPath?`
          <button class="q-btn reveal" onclick="goPathSpeak()">🎤 进入雅思实战 →</button>
          <button class="q-btn clear" onclick="renderPathHome()">🗺️ 换话题</button>`:`
          <button class="q-btn reveal" onclick="restartQuiz()">🔄 再来一关</button>
          <button class="q-btn clear" onclick="setTrainTab('path')">🗺️ 去话题学习</button>`}
      </div>
    </div>`;
}
function restartQuiz(){
  quizQuestions=[]; quizIndex=0; quizCorrect=0;
  if(quizFromTopic){ pathPhase="quiz"; renderPathStage(); }
}
function goPathSpeak(){
  pathPhase="speak";
  renderPathStage();
}

// ===================== 🎤 雅思实战 =====================
function renderSpeakStageInto(host){
  const cd=CUE_CARDS.find(x=>x.topic===speakTopicKey);
  if(!cd){ host.innerHTML="<p>该话题暂无实战卡</p>"; return; }
  speakCard=cd;
  const expList=topicExpressions(cd.topic);
  if(speakPhase==="prep"||speakPhase==="speak"){
    host.innerHTML=`
      <div class="speak-stage">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
          <span class="s-topic" style="background:#F0F4F8;color:#2C5AA0;font-size:11px;font-weight:700;padding:3px 10px;border-radius:10px">${cd.icon} ${cd.name} · Part 2</span>
          <button class="q-btn clear" onclick="goPathDone()">⏭ 跳过实战</button>
        </div>
        <div class="speak-cue">
          <h3>${cd.title}</h3>
          <ul>${cd.prompts.map(p=>"<li>"+p+"</li>").join("")}</ul>
        </div>
        <div class="timer-text"><span id="speakTime">${speakPhase==="prep"?"⏱ 准备中 "+speakSeconds+"s":"🎙 作答中 "+speakSeconds+"s"}</span><span style="color:#8892A0;font-weight:400">${speakPhase==="prep"?"默想要点，可写下关键词":"在下方写下你的回答"}</span></div>
        <div class="timer-bar"><div class="fill" id="speakBar" style="width:100%"></div></div>
        <div class="speak-mustuse">
          <span style="font-size:12px;color:#8892A0;line-height:24px">🎯 必用表达彩蛋：</span>
          ${expList.map(e=>`<span class="mustuse-chip" id="mu_${e.id}">${e.english.substring(0,20)}</span>`).join("")}
        </div>
        ${speakPhase==="speak"?`
          <textarea class="speak-textarea" id="speakText" placeholder="开始作答（用上必用表达加分）..." oninput="checkMustUse()"></textarea>
          <div class="speak-actions">
            <button class="q-btn reveal" onclick="submitSpeak()">📤 提交 · 对比参考</button>
            <button class="q-btn clear" onclick="startSpeak('${cd.topic}')">🔄 重新计时</button>
          </div>`:`
          <p style="font-size:13px;color:#8892A0">准备好后点击开始作答</p>
          <div class="speak-actions">
            <button class="q-btn reveal" onclick="skipPrep()">🎙 跳过准备，直接作答</button>
          </div>`}
      </div>`;
    startSpeakTimer(speakPhase==="prep"?60:120, speakPhase==="prep"?()=>{speakPhase="speak"; speakSeconds=120; renderPathStage();}:null);
  }else{
    // done
    const txt=document.getElementById("speakText")?document.getElementById("speakText").value:"";
    const used=expList.filter(e=>e.keywords.some(k=>k.word.length>3&&txt.toLowerCase().includes(k.word.toLowerCase().split(" ")[0])));
    const usedIds=used.map(e=>e.id);
    host.innerHTML=`
      <div class="speak-stage">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
          <span class="s-topic" style="background:#F0F4F8;color:#2C5AA0;font-size:11px;font-weight:700;padding:3px 10px;border-radius:10px">${cd.icon} ${cd.name} · 作答完成</span>
          <button class="q-btn clear" onclick="goPathDone()">✅ 完成</button>
        </div>
        <div class="speak-mustuse">
          <span style="font-size:12px;color:#8892A0;line-height:24px">必用表达命中：</span>
          ${expList.map(e=>`<span class="mustuse-chip ${usedIds.includes(e.id)?"used":""}">${usedIds.includes(e.id)?"✅":"⬜"} ${e.english.substring(0,18)}</span>`).join("")}
        </div>
        <div class="speak-model show">
          <span class="label">📋 7分参考回答（含地道表达）：</span>
          ${generateSpeakModel(cd)}
        </div>
        <div class="speak-selfcheck show">
          <b>自评清单：</b>
          <ul>
            <li>是否用上了 ${cd.icon}${cd.name} 话题下的表达？命中了 ${usedIds.length}/${expList.length} 条</li>
            <li>是否覆盖了 cue card 的全部 ${cd.prompts.length} 个小问？</li>
            <li>是否有具体细节（人名/场景/数字），而非泛泛而谈？</li>
            <li>结尾是否有总结或反思？</li>
          </ul>
        </div>
        <div style="margin-top:14px">
          <button class="q-btn reveal" onclick="goPathDone()">🏁 完成学习路径</button>
        </div>
      </div>`;
  }
}
let speakTopicKey=null;
function goPathDone(){
  pathPhase="done";
  clearSpeakTimer();
  renderPathStage();
}
function startSpeak(topicKey){
  speakTopicKey=topicKey;
  speakPhase="prep";
  speakSeconds=60;
  clearSpeakTimer();
  renderPathStage();
}
function skipPrep(){
  speakPhase="speak"; speakSeconds=120;
  clearSpeakTimer();
  renderPathStage();
}
function startSpeakTimer(total,onEnd){
  clearSpeakTimer();
  const t0=Date.now();
  speakTimer=setInterval(()=>{
    const el=document.getElementById("speakTime");
    const bar=document.getElementById("speakBar");
    if(!el){ clearSpeakTimer(); return; }
    const left=total-Math.round((Date.now()-t0)/1000);
    if(left<=0){
      clearSpeakTimer();
      if(onEnd) onEnd();
      else{ speakPhase="done"; renderPathStage(); }
      return;
    }
    speakSeconds=left;
    el.textContent=speakPhase==="prep"?"⏱ 准备中 "+left+"s":"🎙 作答中 "+left+"s";
    if(bar){ bar.style.width=(left/total*100)+"%"; bar.classList.toggle("warn",left<=10); }
  },500);
}
function clearSpeakTimer(){ if(speakTimer){ clearInterval(speakTimer); speakTimer=null; } }
function checkMustUse(){
  const txt=(document.getElementById("speakText")||{}).value||"";
  expressions.forEach(e=>{
    const chip=document.getElementById("mu_"+e.id);
    if(!chip) return;
    const hit=e.keywords.some(k=>k.word.length>3&&txt.toLowerCase().includes(k.word.toLowerCase().split(" ")[0]));
    chip.classList.toggle("used",hit);
  });
}
function submitSpeak(){
  speakPhase="done";
  clearSpeakTimer();
  recordActivity(8);
  renderPathStage();
  showToast("🎤 作答已记录 · +8 XP","gold");
}
function generateSpeakModel(cd){
  const starters={
    family:"I'd like to talk about my grandfather. He's not a perfect man — far from it — but when push comes to shove, he's always there. That's what family means to me: it's not about being flawless, it's about showing up, flaws and all.",
    friendship:"I want to describe my best friend, Tom. We've been through a lot together — late-night conversations, ridiculous arguments, weeks of silence — but we always pick up right where we left off. That's the thing about real friendship: it doesn't need constant maintenance, just showing up when it counts.",
    work:"I once had to negotiate the price of a used car. I wasn't there to play games — I'd done my research, so when the seller started lowballing, I made it clear I was ready to walk away from the table. He met me halfway, I put my cards on the table, and the ball was in his court.",
    education:"I wouldn't be where I am today if it wasn't for my high school English teacher. She saw something in me that I couldn't see myself, and she pushed me to aim higher. Were it not for her belief in me, I might have given up entirely.",
    values:"Last year I promised my little sister I'd attend her graduation, even though I had a deadline that week. It wasn't easy, but I followed through — I delivered on my word. At the end of the day, what matters is whether you can look yourself in the mirror.",
    communication:"I once had a difficult conversation with a colleague who kept saying she was 'fine.' Reading between the lines — the hesitation, the avoidance — I could tell something was wrong. I pulled her aside, and instead of cutting to the chase, I just listened.",
    skills:"People tend to underestimate my cooking because I experiment so much. But here's what they don't get: sometimes the person who seems like they're not trying is the one paying the most attention. I may not play by the rules, but I get results.",
    media:"The thing about social media is that it's essentially a highlight reel. People curate their best moments and hide the mess. And the danger is that we start comparing our unedited lives to everyone else's polished versions."
  };
  return starters[cd.topic]||"（参考回答生成中…）";
}

// ===================== 📚 词库面板 =====================
let wbTab="unknown";
function renderWordbook(level){
  wbTab=level||wbTab;
  const c=document.getElementById("trainWordbook");
  const wb=wbGet();
  const ids=Object.keys(wb);
  if(ids.length===0){
    c.innerHTML=`
      <div class="wb-empty"><div class="big">📚</div><p>词库还是空的。学习时标记「不认识 / 模糊」，或闯关答错的表达会自动进这里。</p></div>`;
    return;
  }
  const tabs={unknown:["🙈","陌生"],fuzzy:["🤔","模糊"],known:["😎","认识"]};
  const items=ids.map(id=>{
    const e=expressions.find(x=>x.id===parseInt(id));
    if(!e) return null;
    return {e, level:wb[id]};
  }).filter(Boolean);
  const filtered=items.filter(i=>i.level===wbTab);
  const listHtml=filtered.length?filtered.map(i=>`
    <div class="wb-item">
      <div class="wbe">
        <div class="en">${i.e.english}</div>
        <div class="zh">${i.e.chinese}</div>
        <div class="src">${topicOf(i.e.topic).icon} ${topicOf(i.e.topic).name} · ${i.e.source}</div>
      </div>
      <span class="wb-level-badge ${i.level}">${tabs[i.level][0]} ${tabs[i.level][1]}</span>
      <div class="wb-ops">
        <button class="up" onclick="wbUp(${i.e.id})">😎 认识</button>
        <button class="down" onclick="wbDown(${i.e.id})">🙈 陌生</button>
        <button class="rm" onclick="wbRemove(${i.e.id});renderWordbook()">✕ 移出</button>
      </div>
    </div>`).join(""):`<div class="wb-empty" style="padding:30px"><p>该档位暂无表达</p></div>`;
  c.innerHTML=`
    <div class="wb-tabs">
      ${Object.keys(tabs).map(l=>`<button class="wb-tab ${l===wbTab?"active":""}" onclick="renderWordbook('${l}')">${tabs[l][0]} ${tabs[l][1]} (${items.filter(i=>i.level===l).length})</button>`).join("")}
      <span style="margin-left:auto;font-size:12px;color:#8892A0;line-height:36px">共 ${ids.length} 条 · 学习 / 闯关答错的会自动进这里</span>
    </div>
    <div class="wb-list">${listHtml}</div>`;
}
function wbUp(id){
  const cur=wbLevel(id)||"unknown";
  const next=cur==="unknown"?"fuzzy":cur==="fuzzy"?"known":"known";
  wbSet(id,next);
  renderWordbook();
}
function wbDown(id){
  const cur=wbLevel(id)||"unknown";
  const next=cur==="known"?"fuzzy":"unknown";
  wbSet(id,next);
  renderWordbook();
}

// ===================== 🎯 今日任务（自动排课） =====================
function getTodayDoneIds(){ return progress.todayDoneIds || []; }
function setTodayDone(id){
  if(!progress.todayDoneIds) progress.todayDoneIds=[];
  if(!progress.todayDoneIds.includes(id)) progress.todayDoneIds.push(id);
  saveProgress();
}
function buildDailyQueue(){
  const done=new Set(getTodayDoneIds());
  const order=[];
  for(const st of ["review","unseen","learning"]){
    for(const e of expressions){
      if(order.length>=DAILY_GOAL) break;
      if(exprState(e.id)===st && !done.has(e.id)) order.push(e);
    }
    if(order.length>=DAILY_GOAL) break;
  }
  dailyQueue=order;
  if(!currentTrainExpr && dailyQueue.length>0) currentTrainExpr=dailyQueue[0];
  dailyStep=1;
}
function renderDailyProgress(){
  const done=getTodayDoneIds().length;
  const pct=Math.min(100, Math.round(done/DAILY_GOAL*100));
  const el1=document.getElementById("dailyProgressFill");
  const el2=document.getElementById("dailyProgressText");
  if(el1) el1.style.width=pct+"%";
  if(el2) el2.textContent=done+" / "+DAILY_GOAL;
}
function renderDaily(){
  buildDailyQueue();
  renderDailyProgress();
  const c=document.getElementById("dailyContent");
  const done=getTodayDoneIds().length;
  if(dailyQueue.length===0){
    c.innerHTML=`
      <div class="daily-empty">
        <div class="big">🎉</div>
        <h3>今日任务全部完成！</h3>
        <p>今天已学习 ${done} 条表达 · 明天记得回来打卡</p>
        <div style="margin-top:16px">
          <button class="q-btn reveal" onclick="setTrainTab('path')">🗺️ 去话题学习</button>
          <button class="q-btn clear" style="margin-left:8px" onclick="setTrainTab('wordbook')">📚 词库复习</button>
        </div>
      </div>`;
    return;
  }
  c.innerHTML=renderTaskCard(currentTrainExpr);
}
function renderTaskCard(e){
  const tp=topicOf(e.topic);
  const st=exprState(e.id);
  const stepDots=[1,2,3,4].map(n=>{
    let cls="step-dot";
    if(n<dailyStep) cls+=" done";
    if(n===dailyStep) cls+=" active";
    const icons={1:"📖",2:"✏️",3:"⚡",4:e.type==="paragraph"?"📝":"💬"};
    return `<span class="${cls}">${icons[n]}</span>`;
  }).join("");
  const isPara=e.type==="paragraph";
  return `
  <div class="task-card">
    <div class="task-card-head">
      <div>
        <div class="en">${e.english}</div>
        <div class="zh">${e.chinese}</div>
        <div class="step-dots" style="margin-top:10px">${stepDots}</div>
      </div>
      <div class="meta">${tp.icon} ${tp.name}<br>IELTS ${e.level}<br>${STATE_META[st].label||"未学"}</div>
    </div>
    <div class="task-card-body">
      <div class="task-step ${dailyStep===1?"show":""}" id="taskStep1">
        <div class="task-step-label">📖 第1步 · 看讲解</div>
        <div class="keyword-pills" style="margin-bottom:12px">${e.keywords.map(k=>`<div class="keyword-pill"><b>${k.word}</b><span>${k.pos} ${k.meaning}</span></div>`).join("")}</div>
        <div class="usage-box" style="margin-bottom:10px">${e.usage}</div>
        <div class="example-box">${e.example}</div>
        <div class="step-nav"><button class="q-btn" onclick="nextDailyStep(2)">看懂了，下一步 ✏️ 挖空</button></div>
      </div>
      <div class="task-step ${dailyStep===2?"show":""}" id="taskStep2">
        <div class="task-step-label">✏️ 第2步 · 挖空填空（全对 +10 XP）</div>
        <div class="cloze-sentence" id="taskCloze">${formatClozeSentence(e.cloze.text)}</div>
        <div class="cloze-hint">💡 ${e.cloze.hint}</div>
        <div class="cloze-controls" style="margin-top:12px">
          <button class="cloze-btn check" onclick="checkTaskCloze()">检查</button>
          <button class="cloze-btn answer" onclick="revealTaskCloze()">看答案</button>
          <span class="cloze-result" id="taskClozeResult"></span>
        </div>
        <div class="cloze-answer-reveal" id="taskClozeAnswer">答案：${e.cloze.answer.replace(/\|/g," / ")}</div>
        <div class="step-nav">
          <button class="q-btn ghost" onclick="nextDailyStep(1)">← 回看讲解</button>
          <button class="q-btn" onclick="nextDailyStep(3)">下一步 ⚡ 快问</button>
        </div>
      </div>
      <div class="task-step ${dailyStep===3?"show":""}" id="taskStep3">
        <div class="task-step-label">⚡ 第3步 · 快速测验（+5 XP）</div>
        <div id="taskQuick"></div>
        <div class="step-nav">
          <button class="q-btn ghost" onclick="nextDailyStep(2)">← 上一步</button>
          <button class="q-btn" onclick="nextDailyStep(4)">下一步 ${isPara?"📝 总结":"💬 表达"}</button>
        </div>
      </div>
      <div class="task-step ${dailyStep===4?"show":""}" id="taskStep4">
        <div class="task-step-label">${isPara?"📝 第4步 · 总结段落":"💬 第4步 · 开放问答"}（+5 XP）</div>
        ${isPara?`
          <div class="sum-label">📄 原文（高亮为核心表达）</div>
          <div class="sum-original">${highlightKeyPhrases(e.english,e.keywords)}</div>
          <div class="sum-label">✍️ 用自己的话总结大意</div>
          <textarea class="sum-textarea" placeholder="在此输入你的总结..." id="taskOutput"></textarea>
          <div class="sum-actions" style="margin-top:10px">
            <button class="q-btn reveal" onclick="revealTaskOutput()">查看参考总结</button>
          </div>
          <div class="sum-model" id="taskOutputModel"><span class="label">参考总结：</span>${generateModelSummary(e)}</div>
        `:`
          <div class="q-text" style="display:block;margin-bottom:10px">${e.questions[0].q}</div>
          <textarea class="q-input" placeholder="用这个表达组织你的回答..." id="taskOutput"></textarea>
          <div class="q-actions" style="margin-top:8px">
            <button class="q-btn reveal" onclick="revealTaskOutput()">查看参考答案</button>
          </div>
          <div class="q-sample" id="taskOutputModel"><b>参考答案：</b>${e.questions[0].a}</div>
        `}
        <div class="step-nav">
          <button class="q-btn ghost" onclick="nextDailyStep(3)">← 上一步</button>
          <button class="q-btn" style="background:#2D7A55" onclick="completeDailyCard()">✅ 完成这条，下一张</button>
        </div>
      </div>
    </div>
  </div>`;
}
function nextDailyStep(n){
  dailyStep=n;
  const c=document.getElementById("dailyContent");
  if(n===3 && !document.getElementById("taskQuick").innerHTML){
    c.innerHTML=renderTaskCard(currentTrainExpr);
    document.getElementById("taskQuick").innerHTML=renderQuickQuestion(currentTrainExpr);
    return;
  }
  c.innerHTML=renderTaskCard(currentTrainExpr);
  if(n===3) document.getElementById("taskQuick").innerHTML=renderQuickQuestion(currentTrainExpr);
}
function renderQuickQuestion(e){
  const kind=Math.random()<0.5?"meaning":"translate";
  let prompt,options,answer;
  if(kind==="meaning"){
    answer=e.chinese.split("，")[0]||e.chinese;
    const wrongs=shuffleArr(expressions.filter(x=>x.id!==e.id)).slice(0,3).map(x=>x.chinese.split("，")[0]||x.chinese);
    options=shuffleArr([answer,...wrongs]);
    prompt=`「${e.english}」的意思是？`;
  }else{
    answer=e.english.length>55?e.english.substring(0,55)+"…":e.english;
    const wrongs=shuffleArr(expressions.filter(x=>x.id!==e.id)).slice(0,3).map(x=>x.english.length>55?x.english.substring(0,55)+"…":x.english);
    options=shuffleArr([answer,...wrongs]);
    prompt=`「${e.chinese.split("，")[0]}」对应的英文是？`;
  }
  taskQuickAnswer=answer;
  return `
    <div class="quiz-prompt" style="margin-bottom:14px">${prompt}</div>
    <div class="quiz-options" id="taskQuickOpts">
      ${options.map((o,i)=>`<button class="quiz-opt" onclick="answerTaskQuick(this,${i})">${o}</button>`).join("")}
    </div>
    <div class="quiz-feedback" id="taskQuickFb"></div>`;
}
let taskQuickAnswer="";
function answerTaskQuick(btn,idx){
  const opts=document.querySelectorAll("#taskQuickOpts .quiz-opt");
  const allOpts=[...opts].map(o=>o.textContent);
  opts.forEach(o=>o.classList.add("disabled"));
  const picked=allOpts[idx];
  const fb=document.getElementById("taskQuickFb");
  if(picked===taskQuickAnswer){
    btn.classList.add("correct");
    fb.className="quiz-feedback ok show";
    fb.innerHTML="✅ 正确！+5 XP";
    recordActivity(5);
    floatXP(btn,"5");
  }else{
    btn.classList.add("wrong");
    opts.forEach(o=>{ if(o.textContent===taskQuickAnswer) o.classList.add("correct"); });
    fb.className="quiz-feedback no show";
    fb.innerHTML="❌ 正确答案是：「"+taskQuickAnswer+"」";
    recordActivity(2);
  }
}
function checkTaskCloze(){
  const inputs=document.querySelectorAll("#taskCloze .cloze-input");
  const answers=currentTrainExpr.cloze.answer.split("|");
  let allCorrect=true;
  inputs.forEach((inp,idx)=>{
    const uv=inp.value.trim().toLowerCase();
    const cv=answers[idx]?answers[idx].trim().toLowerCase():"";
    if(uv===cv){ inp.classList.add("correct"); inp.classList.remove("wrong"); inp.classList.add("locked"); }
    else{ inp.classList.add("wrong"); inp.classList.remove("correct"); inp.value=answers[idx]||""; inp.classList.add("locked"); allCorrect=false; }
  });
  const r=document.getElementById("taskClozeResult");
  r.classList.add("show");
  if(allCorrect){
    r.innerHTML="✅ 全部正确 · +10 XP"; r.style.color="#2D7A55";
    recordActivity(10);
    markLearned(currentTrainExpr.id);
    renderDailyProgress(); renderDash();
    floatXP(r,"10");
  }else{
    r.innerHTML="❌ 已标出正确答案"; r.style.color="#C53030";
    recordActivity(2);
    if(!wbLevel(currentTrainExpr.id)) wbSet(currentTrainExpr.id,"unknown");
  }
}
function revealTaskCloze(){
  const el=document.getElementById("taskClozeAnswer");
  el.classList.toggle("show");
  if(el.classList.contains("show")){
    const inputs=document.querySelectorAll("#taskCloze .cloze-input");
    const answers=currentTrainExpr.cloze.answer.split("|");
    inputs.forEach((inp,idx)=>{ if(!inp.classList.contains("locked")){ inp.value=answers[idx]||""; inp.classList.add("locked"); } });
  }
}
function revealTaskOutput(){
  const el=document.getElementById("taskOutputModel");
  el.classList.toggle("show");
}
function completeDailyCard(){
  const e=currentTrainExpr;
  if(!e) return;
  markSeen(e.id);
  setTodayDone(e.id);
  recordActivity(5);
  const idx=dailyQueue.indexOf(e);
  if(idx>-1) dailyQueue.splice(idx,1);
  currentTrainExpr=dailyQueue.length>0?dailyQueue[0]:null;
  dailyStep=1;
  renderDaily(); renderDash();
  showToast("✅ 完成：「"+e.english.substring(0,18)+"」","gold");
}

// ===================== 通用辅助 =====================
function formatClozeSentence(text){
  return text.replace(/______/g,'<input class="cloze-input" type="text" placeholder="..." />');
}
function highlightKeyPhrases(text,keywords){
  let result=text;
  keywords.forEach(k=>{
    const escaped=k.word.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    result=result.replace(new RegExp(escaped,"gi"),'<span class="hl">'+k.word+"</span>");
  });
  return result;
}
function generateModelSummary(e){
  const kwList=e.keywords.map(k=>k.word).join("、");
  const tp=topicOf(e.topic);
  return `这段话的核心表达包括：${kwList}。主要观点是：${e.chinese}。在雅思口语/写作中，可以将这些表达用于「${tp.name}」话题（例如「${e.comparison.topic}」），先列举具体场景（建立真实感），再提炼洞察（展现思考深度），最后用对比结构收尾（增强说服力）。`;
}
