
// ===================== IELTS TOPICS =====================
const TOPICS = {
  work:         {name:"工作职业",   icon:"💼"},
  communication:{name:"沟通社交",   icon:"💬"},
  family:       {name:"家庭",       icon:"🏠"},
  friendship:   {name:"友谊",       icon:"🤝"},
  education:    {name:"教育成长",   icon:"🎓"},
  values:       {name:"价值观",     icon:"⚖️"},
  media:        {name:"媒体社会",   icon:"📱"},
  skills:       {name:"技能能力",   icon:"🛠️"},
  travel:       {name:"旅行",       icon:"✈️"},
  health:       {name:"健康生活",   icon:"💪"},
  environment:  {name:"环境保护",   icon:"🌿"},
  shopping:     {name:"消费购物",   icon:"🛍️"}
};
function topicOf(key){ return TOPICS[key] ? TOPICS[key] : {name:key, icon:"📌"}; }
function dimNameOf(topic,key){
  const dims=TOPIC_DIMENSIONS[topic]||[];
  const d=dims.find(x=>x.key===key);
  return d?d.name:"";
}

// ===================== DATA (外置到 data.js) =====================
// 表达数据在 data.js 中，通过 <script src="data.js"> 加载


// ===================== PROGRESS (localStorage 进度系统) =====================
const PROGRESS_KEY = "wb_progress_v1";
let progress = loadProgress();
function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || defaultProgress(); }
  catch(e){ return defaultProgress(); }
}
function defaultProgress(){
  return { history:[], xp:0, dailyXp:0, dailyDone:0, exprState:{} };
}
function saveProgress(){
  try{ localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }catch(e){}
}
function todayStr(){
  const d=new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function fmtDate(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function shiftDay(s,delta){
  const d=new Date(s+"T12:00:00"); d.setDate(d.getDate()+delta); return fmtDate(d);
}
function daysBetween(a,b){ return Math.round((new Date(b+"T12:00:00")-new Date(a+"T12:00:00"))/86400000); }
function calcStreak(){
  const set=new Set(progress.history);
  let cursor = set.has(todayStr()) ? todayStr() : set.has(shiftDay(todayStr(),-1)) ? shiftDay(todayStr(),-1) : null;
  if(!cursor) return 0;
  let streak=0;
  while(set.has(cursor)){ streak++; cursor=shiftDay(cursor,-1); }
  return streak;
}
function levelFromXP(xp){ return Math.floor(xp/100)+1; }
function recordActivity(xp, firstMsg){
  const today=todayStr();
  const isFirstToday=!progress.history.includes(today);
  progress.history.push(today);
  if(!progress.dailyXp) progress.dailyXp=0;
  if(!progress.dailyDone) progress.dailyDone=0;
  progress.dailyXp+=xp;
  progress.dailyDone+=1;
  progress.xp=(progress.xp||0)+xp;
  saveProgress();
  if(isFirstToday){
    showToast("🔥 今日打卡成功 · 连续 "+calcStreak()+" 天");
  }
  renderDash(); renderHeaderChips();
  return isFirstToday;
}

// ===== 表达状态机：unseen → learning → learned → (3天后) review =====
function exprState(id){
  const st=progress.exprState[id];
  if(!st) return "unseen";
  if(st.state==="learned"){
    const lastSeen=st.lastSeen||st.learnedAt;
    if(daysBetween(lastSeen, todayStr())>3) return "review";
    return "learned";
  }
  return st.state;
}
function markSeen(id){
  if(!progress.exprState[id]) progress.exprState[id]={};
  progress.exprState[id].state="learning";
  progress.exprState[id].lastSeen=todayStr();
  saveProgress();
}
function markLearned(id){
  if(!progress.exprState[id]) progress.exprState[id]={};
  progress.exprState[id].state="learned";
  progress.exprState[id].learnedAt=todayStr();
  progress.exprState[id].lastSeen=todayStr();
  saveProgress();
}
const STATE_META={
  unseen:{label:"",cls:""},
  learning:{label:"学习中",cls:"learning"},
  learned:{label:"已掌握",cls:"learned"},
  review:{label:"待复习",cls:"review"}
};

// ===================== TOAST / XP FLOAT =====================
let toastTimer=null;
function showToast(msg, gold){
  const t=document.getElementById("toast");
  t.textContent=msg;
  t.className="toast"+(gold?" gold":"")+" show";
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}
function floatXP(anchor, n){
  const span=document.createElement("span");
  span.className="xp-float";
  span.textContent="+"+n+" XP";
  anchor.appendChild(span);
  setTimeout(()=>span.remove(),1250);
}

// ===================== TAB SWITCHING =====================
function switchTab(name){
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===name));
  document.querySelectorAll(".tab-content").forEach(c=>c.classList.toggle("active",c.id===name));
}
document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>switchTab(tab.dataset.tab));
});

// ===================== RENDER: Dash + Header =====================
function renderHeaderChips(){
  document.getElementById("hdrXp").textContent=progress.xp||0;
  document.getElementById("hdrLv").textContent=levelFromXP(progress.xp||0);
  document.getElementById("hdrStreak").textContent=calcStreak();
}
function renderDash(){
  const total=expressions.length;
  const learnedCount=expressions.filter(e=>exprState(e.id)==="learned").length;
  const reviewCount=expressions.filter(e=>exprState(e.id)==="review").length;
  const streak=calcStreak();
  const pct=Math.round(learnedCount/total*100);
  // 最近7天活跃点
  let dots="";
  for(let i=6;i>=0;i--){
    const day=shiftDay(todayStr(),-i);
    const active=progress.history.includes(day);
    const isToday=(i===0);
    let cls="dot"+(active?" active":"")+(isToday?" today":"");
    if(active&&isToday) cls="dot today-active";
    dots+='<span class="'+cls+'" title="'+day+(active?" · 已学习":" · 未学习")+'"></span>';
  }
  document.getElementById("dashBar").innerHTML=`
    <div class="dash-card" style="min-width:96px">
      <div class="d-top">🔥 连续打卡</div>
      <div class="d-num gold">${streak}<span style="font-size:13px;color:#8892A0"> 天</span></div>
    </div>
    <div class="dash-card" style="min-width:130px">
      <div class="d-top">⭐ 今日经验</div>
      <div class="d-num">${progress.dailyXp||0}<span style="font-size:13px;color:#8892A0"> XP</span></div>
    </div>
    <div class="dash-card" style="min-width:150px">
      <div class="d-top">✅ 掌握进度</div>
      <div class="d-num green">${learnedCount}<span style="font-size:13px;color:#8892A0"> / ${total}</span></div>
      <div class="dash-progress"><div class="fill" style="width:${pct}%"></div></div>
    </div>
    <div class="dash-card clickable" style="min-width:120px" onclick="filterByState('review')">
      <div class="d-top">🔁 待复习</div>
      <div class="d-num orange">${reviewCount}<span style="font-size:13px;color:#8892A0"> 条</span></div>
    </div>
    <div class="dash-card" style="min-width:150px">
      <div class="d-top">📅 最近7天</div>
      <div class="dash-dots">${dots}</div>
    </div>
  `;
}

// ===================== RENDER: Topic Overview =====================
function renderTopicGrid(){
  const grid=document.getElementById("topicGrid");
  const counts={};
  expressions.forEach(e=>{ counts[e.topic]=(counts[e.topic]||0)+1; });
  grid.innerHTML=Object.keys(counts).map(t=>{
    const tp=topicOf(t);
    return `
    <div class="topic-card ${currentTopic===t?"selected":""}" onclick="selectTopic('${t}')" title="查看「${tp.name}」话题下的表达">
      <div class="t-icon">${tp.icon}</div>
      <div class="t-info">
        <div class="t-name">${tp.name}</div>
        <div class="t-count">${counts[t]} 条 · IELTS ${getTopicMaxLevel(t)}</div>
      </div>
    </div>`;
  }).join("");
}
function getTopicMaxLevel(t){
  const max=Math.max(...expressions.filter(e=>e.topic===t).map(e=>parseFloat(e.level)));
  return max+"+";
}

// ===================== RENDER: Expression Library =====================
let currentFilter="all";
let currentTopic="all";
let currentState="all";
let currentDim="all";
function selectTopic(t){
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
  renderLibrary();
  if(currentTopic!=="all"){
    document.getElementById("exprGrid").scrollIntoView({behavior:"smooth",block:"start"});
  }
}
function clearTopic(){
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
  box.innerHTML='<button class="filter-btn '+(currentDim==="all"?"active":"")+'" onclick="selectDim(\'all\')">全部</button>'+
    dims.map(d=>'<button class="filter-btn '+(currentDim===d.key?"active":"")+'" onclick="selectDim(\''+d.key+'\')">'+d.name+'</button>').join("");
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
}
function filterByState(s){
  currentState=s;
  const row=document.getElementById("stateFilterRow");
  row.style.display="flex";
  document.getElementById("stateFilterBtn").textContent=STATE_META[s].label||s;
  document.getElementById("stateFilterClear").classList.add("show");
  renderLibrary();
}
function clearStateFilter(){
  currentState="all";
  document.getElementById("stateFilterRow").style.display="none";
  renderLibrary();
}
function renderLibrary(){
  const grid=document.getElementById("exprGrid");
  const filtered=expressions.filter(e=>{
    const okType=currentFilter==="all"||e.type===currentFilter;
    const okTopic=currentTopic==="all"||e.topic===currentTopic;
    const okDim=currentDim==="all"||e.dimension===currentDim;
    const okState=currentState==="all"||exprState(e.id)===currentState;
    return okType&&okTopic&&okDim&&okState;
  });
  if(filtered.length===0){
    grid.innerHTML='<div class="empty-state"><div class="icon">📭</div><p>该筛选条件下暂无表达，换个条件试试</p></div>';
    return;
  }
  grid.innerHTML=filtered.map(e=>{
    const tp=topicOf(e.topic);
    const st=exprState(e.id);
    const stBadge=STATE_META[st].label?`<span class="badge-state ${STATE_META[st].cls}">${STATE_META[st].label}</span>`:"";
    return `
    <div class="expr-card" data-level="${e.level}" data-state="${st}" onclick="showDetail(${e.id})">
      <div class="card-top">
        <span class="badge-type ${e.type}">${e.type==="phrase"?"短语":e.type==="sentence"?"句子":"段落"}</span>
        <span class="badge-topic">${tp.icon} ${tp.name}</span>
        ${e.dimension?`<span class="badge-dim">${dimNameOf(e.topic,e.dimension)}</span>`:""}
        ${stBadge}
        <span class="badge-level" data-l="${e.level}">IELTS ${e.level}</span>
      </div>
      <div class="card-english ${e.english.length>60?"long":""}">${e.english}</div>
      <div class="card-chinese">${e.chinese}</div>
      <div class="card-source">${e.source}</div>
    </div>`;
  }).join("");
}

// ===================== Detail Panel =====================
// ===== 生活口语课 · 单元1「委婉反驳」语料卡（试点，全部取自真实台本）=====
// schema: meta / dialogue / skeleton / tags(emotion·formality·phrases·risk) / practice / order
// 卡片序列 order 已按「情绪强度弱→强 + 来源穿插」人工排定（美剧4 + 真人秀2 配比）

const COURSE_DAILY_UNIT1 = [
  {
    id: "D01", task: "委婉反驳", task_en: "polite-disagree", order: 1,
    meta: { type: "tv_drama", show: "摩登家庭", ep: "S01E04", chars: ["Phil", "Alex"] },
    dialogue: [
      { sp: "Alex", en: "Okay, Mom just doesn't trust me, and it's not fair.", zh: "妈妈就是不相信我，这不公平。" },
      { sp: "Phil", en: "She trusts you. It's just that weird stuff happens at concerts.", zh: "她相信你，只是演唱会那地方太容易出乱子。" }
    ],
    skeleton: "先肯定对方：She trusts you. → 再委婉转折：It's just that + 客观原因",
    tags: { emotion: "弱", formality: "informal-family", phrases: ["it's just that"], risk: "家庭对话场景，正式写作/考场慎用" },
    practice: {
      cloze: { prompt: "她不是不信任你，只是演唱会那地方容易出乱子。", answer: "It's just that", distractors: ["Just because", "Only if", "Even though"] },
      rewrite: "爸爸没批评你乱花钱，只是希望你先存一笔应急金——用 It's just that 替他圆场。"
    }
  },
  {
    id: "D02", task: "委婉反驳", task_en: "polite-disagree", order: 2,
    meta: { type: "tv_drama", show: "查理成长日记", ep: "S01E02", chars: ["奶奶", "妈妈"] },
    dialogue: [
      { sp: "奶奶", en: "You spent a little too much time with Charlie, and you're ready to hand her over early.", zh: "你一定是照顾Charlie时间太长了，然后想早点把她交给我吧。" },
      { sp: "妈妈", en: "Well, I wouldn't say too much time.", zh: "这个，其实也不能算是时间太长了吧。" },
      { sp: "奶奶", en: "Well, I am ready too, so let me at her.", zh: "不过我也想接手了，所以还是我来照看她吧。" }
    ],
    skeleton: "I wouldn't say + 对方的判断（礼貌地不认同，不正面冲突）",
    tags: { emotion: "弱", formality: "informal-family", phrases: ["I wouldn't say", "hand over"], risk: "家庭拌嘴用语，考试不适用" },
    practice: {
      cloze: { prompt: "其实也不能算是时间太长了吧。", answer: "I wouldn't say", distractors: ["I don't say", "I won't say", "I can't say"] },
      rewrite: "同事说你这个方案太冒险，你不完全认同——用 I wouldn't say 回应。"
    }
  },
  {
    id: "D03", task: "委婉质疑", task_en: "polite-question", order: 3,
    meta: { type: "tv_drama", show: "查理成长日记", ep: "S01E01", chars: ["Charlie", "妈妈"] },
    dialogue: [
      { sp: "Charlie", en: "Mom, don't take this the wrong way, but why did you guys have to have another baby?", zh: "妈妈，别误会我的意思，但你们为什么非得生第四个宝宝呢？" },
      { sp: "妈妈", en: "Well, because three kids was just too easy.", zh: "那个嘛，因为三个孩子太好养了。（反讽）" }
    ],
    skeleton: "Don't take this the wrong way, but + 想说的实话（先给缓冲，再开口）",
    tags: { emotion: "弱-中等", formality: "informal-family", phrases: ["don't take this the wrong way"], risk: "带点冒犯性，仅限亲近的人，考场禁用" },
    practice: {
      cloze: { prompt: "别误会我的意思，但我觉得这个方案行不通。", answer: "Don't take this the wrong way", distractors: ["Don't put it this way", "Don't say it this way", "Don't make it wrong"] },
      rewrite: "想给室友提意见但又怕伤感情——用这句缓冲。"
    }
  },
  {
    id: "D04", task: "委婉拒绝", task_en: "polite-decline", order: 4,
    meta: { type: "reality_show", show: "卡戴珊家族", ep: "S01E02", chars: ["Kim", "对方"] },
    dialogue: [
      { sp: "Kim", en: "I would love to come and do a skit with you more than anything, but I feel like I can't go with Scott this weekend.", zh: "我特别特别想过去跟你一起演个小品，但我觉得这个周末我没法跟斯科特一起去。" },
      { sp: "对方", en: "Yeah, and we already invited him. I feel bad. I would totally disinvite for you.", zh: "对，而且我们已经邀请他了。我觉得挺不好意思的。我完全愿意为你把他推掉。" },
      { sp: "Kim", en: "No, I know, but I feel bad disinviting him.", zh: "不，我知道，但我觉得把人家推掉不太好。" }
    ],
    skeleton: "I would love to + 想做的事, but + 实际难处（先表达热情，再讲理由）",
    tags: { emotion: "弱", formality: "informal-friend", phrases: ["I would love to...but", "feel bad doing"], risk: "朋友间客套话，面试等正式场合慎用" },
    practice: {
      cloze: { prompt: "我特别想去你的派对，但今晚我得加班。", answer: "I would love to", distractors: ["I would like it", "I want to love", "I'd love it that"] },
      rewrite: "朋友邀你周末露营，你有事去不了——用这个句式先扬后抑。"
    }
  },
  {
    id: "D05", task: "抱怨式反驳", task_en: "pushback", order: 5,
    meta: { type: "reality_show", show: "卡戴珊家族", ep: "S01E06", chars: ["Kim", "对方"] },
    dialogue: [
      { sp: "Kim", en: "Why didn't you invite me to your birthday?", zh: "你为什么不邀请我参加你的生日？" },
      { sp: "对方", en: "I didn't really invite anyone to my birthday.", zh: "我本来就没请任何人来我的生日。" },
      { sp: "Kim", en: "She didn't even have a dinner. She had a birthday party at a club.", zh: "她根本没办生日晚宴，她是在夜店办的生日派对。" }
    ],
    skeleton: "Why didn't you + 质疑 → 对方解释 → 摆事实继续反驳（三步推进）",
    tags: { emotion: "中等", formality: "informal-family", phrases: ["why didn't you", "didn't even"], risk: "带情绪质问，仅限熟人场合，考场禁用" },
    practice: {
      cloze: { prompt: "你为什么不早点告诉我？", answer: "Why didn't you", distractors: ["Why you didn't", "Why not you", "Why haven't you been"] },
      rewrite: "室友没喊你一起拼单，你有点不高兴——用 Why didn't you 开场。"
    }
  }
];

// 句型总表（页底查阅用，按情绪强度 弱→强 机械排序；order 已按强度排）
const COURSE_DAILY_SKELETONS = [
  { order: 1, emotion: "弱", skeleton: "It's just that + 客观原因", example: "She trusts you. It's just that weird stuff happens at concerts.", source: "摩登家庭 S01E04", card: "D01" },
  { order: 2, emotion: "弱", skeleton: "I wouldn't say + 对方的判断", example: "Well, I wouldn't say too much time.", source: "查理成长日记 S01E02", card: "D02" },
  { order: 3, emotion: "弱-中等", skeleton: "Don't take this the wrong way, but + 实话", example: "Mom, don't take this the wrong way, but why...?", source: "查理成长日记 S01E01", card: "D03" },
  { order: 4, emotion: "弱", skeleton: "I would love to + 意向, but + 难处", example: "I would love to come, but I feel like I can't this weekend.", source: "卡戴珊家族 S01E02", card: "D04" },
  { order: 5, emotion: "中等", skeleton: "Why didn't you + 质疑 → 摆事实反驳", example: "Why didn't you invite me? ... She didn't even have a dinner.", source: "卡戴珊家族 S01E06", card: "D05" }
];


// ===== 试点：work/deal 维度场景数据（剧集式学习 · 从台本自动挖掘） =====
const SCENES_DEAL = [{"id": 33, "context": ["But it's a wedding for some friend of", "yours I never even heard of.要结婚的可是你的朋友 虽然我完全没听说过", "I t ' s  non-negotiable . You can borrow a", "dress of Haley's again.没得商量 裙子你可以再去跟海莉借", "N o . 才不要", "That sends an ugly message- that I'm"], "hit": 2}, {"id": 73, "context": ["在餐厅为她递上一杯牛奶摩登家庭-S01E09- 双语台词", "第3页/共1 6页", "Nothing's worked. - Here's the deal. 全都不奏效 -事实上", "Girls don't go for all that romantic stuff. 女孩子不吃浪漫那一套", "They go for power and success. 她们喜欢有权势的或成功的男人", "And since you don't have either one of"], "hit": 2}, {"id": 106, "context": ["So you think mason's faster. 那么你认为Mason更快", "I think charlie's faster. 我认为Charlie更快", "There's only one way to settle this. 只有一个办法来一判高下", "We challenge you to a baby race. 你敢不敢参加宝宝赛跑", "Oh, it is on. 噢 我接受你的挑战", "And you're gonna be sorry 你会后悔的"], "hit": 2}, {"id": 144, "context": ["Well, no problem. 哎呀 那没问题", "Dog goes in, branch comes off. 小狗进屋 树枝砍掉", "We got a deal? 我们成交不", "We have a deal. 成交", "Dad, that branch holds our treehouse . 老爸 那根树杈还架着我们的小树屋呢", "Well, so what? You kids haven't been up"], "hit": 2}, {"id": 145, "context": ["lose the treehouse after all.我们改变主意了 我们一点也不想失去这个小树", "屋", "It's too late. I already shook hands on it. 太迟了 我都已经和别人说定了", "Well, can we at least talk about this? 难道我们就不能再商量一下么", "Yeah, maybe take a family vote? 对啊 也许我们应该进行家庭投票表决", "This isn't a democracy, guys. 家庭又不是民主政体啥的 伙计们"], "hit": 2}, {"id": 169, "context": ["Uh here you go. 呃 请拿好", "Thanks. 谢谢", "Keep the change. 不用找零了", "EnJoy your Kwikki Chikki. 请愉快享用咕唧鸡", "I think I was just grilled with love. 我觉得刚才自己被爱心烘烤了", "Would you mind answering a few questions 您是否介意回答几个问题呢"], "hit": 2}];

function sceneOf(id){
  const s = SCENES_DEAL.find(function(x){ return x.id === id; });
  return s || null;
}
function sceneBlockHtml(e){
  const sc = sceneOf(e.id);
  if(!sc) return '';
  return '<div class="scene-box">' +
    '<div class="scene-head">🎬 剧中场景 <span class="scene-src">' + e.source + '</span></div>' +
    sc.context.map(function(ln, i){
      return '<div class="scene-line' + (i === sc.hit ? ' hit' : '') + '">' + ln + '</div>';
    }).join('') +
    '</div>';
}
function showDetail(id){
  const e=expressions.find(x=>x.id===id);
  if(!e)return;
  markSeen(id);
  renderLibrary(); renderDash();
  const tp=topicOf(e.topic);
  const st=exprState(id);
  const stBadge=STATE_META[st].label?`<span class="badge-state ${STATE_META[st].cls}">${STATE_META[st].label}</span>`:"";
  const kwPills=e.keywords.map(k=>`<div class="keyword-pill"><b>${k.word}</b><span>${k.pos} ${k.meaning}</span></div>`).join("");
  document.getElementById("detailPanel").innerHTML=`
    <div class="detail-header">
      <button class="detail-close" onclick="closeDetail()">✕</button>
      <div class="detail-badges">
        <span class="badge-type ${e.type}">${e.type==="phrase"?"短语":e.type==="sentence"?"句子":"段落"}</span>
        <span class="badge-topic">${tp.icon} ${tp.name}</span>
        ${e.dimension?`<span class="badge-dim">${dimNameOf(e.topic,e.dimension)}</span>`:""}
        ${stBadge}
        <span class="badge-level" data-l="${e.level}">IELTS ${e.level}</span>
      </div>
      <div class="detail-english ${e.english.length>60?"long":""}">${e.english}</div>
      <div class="detail-chinese">${e.chinese}</div>
    </div>
    <div class="detail-body">
      <div class="detail-section">
        <h4>🎬 出处 <span class="scene-src">${e.source} · ${e.category}</span></h4>
        ${sceneBlockHtml(e)}
      </div>
      <div class="detail-section">
        <h4>🗂️ 雅思话题</h4>
        <div class="topic-use-box">${tp.icon} <b>${tp.name}</b> — ${e.comparison&&e.comparison.topic?("可直接用于 IELTS Speaking/Writing 中「"+e.comparison.topic+"」类话题，也适用于相关延伸讨论。"):"该表达的精讲数据（提问/5分vs7分对比）补充中，先用例句和挖空学习。"}</div>
      </div>
      <div class="detail-section">
        <h4>🔤 关键词汇</h4>
        <div class="keyword-pills">${kwPills}</div>
      </div>
      <div class="detail-section">
        <h4>💡 怎么用</h4>
        <div class="usage-box">${e.usage}</div>
      </div>
      <div class="detail-section">
        <h4>📖 例句</h4>
        <div class="example-box">${e.example}</div>
      </div>
      <div class="detail-cta">
        <button class="cta-btn train" onclick="goTrain(${e.id})">🎯 去训练这个表达</button>
        <button class="cta-btn compare" onclick="goGen('${e.topic}')">🎤 定制这个问题的雅思答案</button>
      </div>
    </div>
  `;
  document.getElementById("detailOverlay").classList.add("show");
}
function closeDetail(){
  document.getElementById("detailOverlay").classList.remove("show");
}
document.getElementById("detailOverlay").addEventListener("click",function(e){
  if(e.target===this)closeDetail();
});
function goTrain(id){
  closeDetail();
  const e=expressions.find(x=>x.id===id);
  if(!e) return;
  markSeen(id); renderDash();
  currentTrainExpr=e; dailyStep=1;
  if(!getTodayDoneIds().includes(e.id)){
    dailyQueue=[e,...dailyQueue.filter(x=>x.id!==e.id)].slice(0,DAILY_GOAL);
  }
  switchTab("learn");
  showLearnView("path");
  startPath(e.topic);
  pathPhase="learn";
  flashList=topicExpressions(e.topic);
  flashIndex=flashList.findIndex(x=>x.id===e.id);
  if(flashIndex<0) flashIndex=0;
  renderPathStage();
}
function goGen(topic){
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
}

// ===================== CUE CARDS (雅思 Part 2 话题卡) =====================
const CUE_CARDS = [
  {
    topic:"family", icon:"🏠", name:"家庭",
    title:"Describe a family member you admire most",
    prompts:["who this person is","what they are like","why you admire them","and explain how they have influenced you"],
    tip:"先抑后扬更有说服力：承认不完美 → 转折 → 突出关键时刻的表现"
  },
  {
    topic:"friendship", icon:"🤝", name:"友谊",
    title:"Describe a friend who has had a big influence on you",
    prompts:["who this friend is","how you met","what you have been through together","and explain how they influenced you"],
    tip:"用排比列举共同经历（如深夜长谈→争吵→和好），最后提炼对友谊的洞察"
  },
  {
    topic:"work", icon:"💼", name:"工作职业",
    title:"Describe a time you had to negotiate or persuade someone",
    prompts:["what the situation was","what you wanted","how you handled it","and explain the outcome"],
    tip:"谈判叙事：设锚（亮出底线）→ 制造选项（要么…要么…）→ 摊牌收尾"
  },
  {
    topic:"education", icon:"🎓", name:"教育成长",
    title:"Describe a teacher or mentor who changed your life",
    prompts:["who this person was","what they did for you","why their help mattered","and explain how your life would be different without them"],
    tip:"用虚拟条件句（would have…if it wasn't for…）表达'没有TA会怎样'，情感张力最大"
  },
  {
    topic:"values", icon:"⚖️", name:"价值观",
    title:"Describe a time you kept your word or made a promise",
    prompts:["what the promise was","why you made it","how hard it was to keep","and explain why keeping it mattered"],
    tip:"用 follow through / deliver on 等表达，突出'行动配得上承诺'"
  },
  {
    topic:"communication", icon:"💬", name:"沟通社交",
    title:"Describe a difficult conversation you had with someone",
    prompts:["who you talked to","what it was about","how the conversation went","and explain what you learned from it"],
    tip:"强调'读懂言外之意'（read between the lines）和语气管理，结尾加反思"
  },
  {
    topic:"skills", icon:"🛠️", name:"技能能力",
    title:"Describe a skill you have that others might not expect",
    prompts:["what the skill is","how you learned it","why people don't expect it","and explain why it's useful"],
    tip:"用'被低估→揭示真相→亮出底牌'的叙事弧线，加一个具体细节让回答鲜活"
  },
  {
    topic:"media", icon:"📱", name:"媒体社会",
    title:"Describe a social media platform or trend that interests you",
    prompts:["what it is","how people use it","why it interests you","and explain how it affects people's lives"],
    tip:"用 The thing about X is… 开头引入洞察，再对比理想与现实"
  }
];


// ===================== TRAIN V3 (话题路径 + 词库 + 今日任务) =====================
// ---- 全局状态 ----
let trainTab = "path";          // path | wordbook | daily
let pathTopic = null;           // 当前话题 key
let pathDim = "all";             // 当前维度 key（all=全部）
let pathPhase = "pick";         // pick | dim | perspective | learn | quiz | speak | done
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
let quizFromDim = "all";        // 闯关来源维度
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
// ===================== 闯关课程（生活口语课 · 单元=交际任务） =====================
let unitIdx = 0;
function renderCourseHome(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <button class="q-btn ghost" onclick="renderLearnHome()">← 返回主页</button>
      <span class="filter-label">🎯 生活口语课</span>
    </div>
    <div class="section-desc" style="margin-bottom:14px">每个单元 = 一个「交际任务」，从多部剧里聚合同场景的说法。先看剧里怎么说的，学句型骨架，再用练习检验。</div>
    <div class="unit-card" onclick="openUnit(0)" style="background:#FFFDF7;border:1px solid #F0E6CC;border-radius:14px;padding:18px;cursor:pointer">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:15px">💬</span>
        <b style="font-size:15px">委婉反驳 · polite disagreement</b>
        <span class="badge-dim" style="margin-left:auto">5 张语料卡</span>
      </div>
      <div style="font-size:12px;color:#8A6D2F;margin:8px 0 4px">📺 摩登家庭 ×2 · 查理成长日记 ×2 · 卡戴珊家族 ×1 ｜ 强度弱→强递增</div>
      <div style="font-size:12.5px;color:#4A4A42;line-height:1.7">先看剧里怎么委婉说「不」——It's just that / I wouldn't say / Don't take this the wrong way… 学会在不同场合软着陆。</div>
      <div style="font-size:12.5px;color:#854F0B;margin-top:12px;font-weight:500">打开本单元 →</div>
    </div>`;
}
function openUnit(i){
  unitIdx = 0;
  renderUnit();
}
function renderUnit(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const cards = COURSE_DAILY_UNIT1;
  const card = cards[unitIdx];
  if(!card){ unitIdx = 0; renderUnit(); return; }
  const dlg = card.dialogue.map(function(d){
    return `<div class="cd-line"><span class="cd-sp">${d.sp}</span><div><div class="cd-en">${d.en}</div><div class="cd-zh">${d.zh}</div></div></div>`;
  }).join("");
  const tags = card.tags;
  const t = card.tags;
  const clozeOpts = [t.cloze.answer].concat(t.cloze.distractors);
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap">
      <button class="q-btn ghost" onclick="renderCourseHome()">← 单元列表</button>
      <span class="filter-label">💬 委婉反驳</span>
      <span class="badge-dim">${card.order} / ${cards.length}</span>
    </div>
    <div class="cd-source">📺 ${card.meta.show} ${card.meta.ep} · ${card.meta.type==="tv_drama"?"美剧":"真人秀"} · ${card.meta.chars.join(" / ")}</div>
    <div class="cd-dialogue">${dlg}</div>
    <div class="cd-skeleton"><b>🦴 句型骨架</b> ${card.skeleton}</div>
    <div class="cd-tags">
      <span class="tag-e">😐 情绪强度：${t.emotion}</span>
      <span class="tag-f">🏷️ ${t.formality}</span>
      <span class="tag-p">💡 ${t.phrases.join(" · ")}</span>
      <span class="tag-r">⚠️ ${t.risk}</span>
    </div>
    <div class="cd-practice">
      <b>✏️ 练习 1 · 挖空</b>
      <div class="cp-prompt">${t.cloze.prompt}</div>
      <div class="cp-opts" id="cpOpts">
        ${clozeOpts.map(function(o,i){ return `<button class="cp-opt" onclick="ansCloze(this,'${t.cloze.answer}')">${o}</button>`; }).join("")}
      </div>
      <div class="cp-fb" id="cpFb"></div>
      <b style="margin-top:14px;display:block">✏️ 练习 2 · 换场景套用</b>
      <div class="cp-prompt">${t.rewrite}</div>
      <button class="q-btn ghost" onclick="showRewriteTip(this)" style="margin-top:8px">💡 参考思路</button>
      <div class="cp-rtip" style="display:none;margin-top:6px;font-size:12px;color:#8A6D2F;background:#FBF6E9;border-radius:8px;padding:8px 12px">先把句型骨架写下来，再替换成新场景的关键词，保持「先肯定/缓冲 → 再转折」的顺序。</div>
    </div>
    <div class="cd-nav" style="display:flex;gap:10px;margin:16px 0">
      <button class="q-btn ghost" onclick="unitIdx=Math.max(0,unitIdx-1);renderUnit()" ${unitIdx===0?"disabled":""}>← 上一张</button>
      <button class="q-btn reveal" style="margin-left:auto" onclick="unitIdx=Math.min(${cards.length-1},unitIdx+1);renderUnit()">${unitIdx>=cards.length-1?"✅ 完成本单元":"下一张 →"}</button>
    </div>
    <div class="cd-skel-table">
      <b style="display:block;margin-bottom:8px">📋 句型总表（本单元 · 按情绪强度 弱→强）</b>
      ${COURSE_DAILY_SKELETONS.map(function(s){
        return `<div class="skel-row"><span class="skel-e">${s.emotion}</span><span class="skel-s">${s.skeleton}</span><span class="skel-x">${s.example}</span><span class="skel-src">${s.source}</span></div>`;
      }).join("")}
    </div>`;
}
function ansCloze(btn, ans){
  const fb = document.getElementById("cpFb");
  if(!fb) return;
  const ok = btn.textContent.trim() === ans;
  document.querySelectorAll("#cpOpts .cp-opt").forEach(function(b){
    if(b.textContent.trim() === ans){ b.style.background="#EDF7F0"; b.style.borderColor="#5DCAA5"; }
  });
  fb.innerHTML = ok
    ? '<div style="color:#1F7A44;margin-top:8px;font-size:12.5px">✅ 正确！It\'s just that 这类骨架是「先软化、再转折」——比直接说 No 高级得多。</div>'
    : '<div style="color:#A32D2D;margin-top:8px;font-size:12.5px">❌ 不对。中式英语常见错误是直接否定或用错连接词，参考绿色答案。</div>';
}
function showRewriteTip(btn){
  const el = btn.nextElementSibling;
  if(el) el.style.display = el.style.display === "none" ? "" : "none";
}
function showLearnView(view){
  const map={home:"learnHome",browse:"libraryView",path:"trainPath",wordbook:"trainWordbook",course:"learnCourse"};
  Object.keys(map).forEach(function(k){
    const el=document.getElementById(map[k]);
    if(el) el.style.display= k===view?"":"none";
  });
}
function goLearnTopic(t){
  showLearnView("path");
  startPath(t);
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
  const kw1=(document.getElementById("learnSearch")||{}).value||"";
  const taskHits=["委婉反驳","委婉拒绝","委婉质疑","委婉表达","polite","disagree","委婉"].filter(function(w){return kw.indexOf(w)!==-1;});
  if(taskHits.length){
    const box=document.getElementById("exprGrid");
    if(box){
      box.innerHTML='<div style="padding:16px;background:#FFFDF7;border:1px solid #F0E6CC;border-radius:12px;margin-top:10px">'+
        '<b>🎯 课程单元匹配：委婉反驳（生活口语课）</b>'+
        '<div style="font-size:12px;color:#8A6D2F;margin:6px 0">5 张语料卡：It\'s just that / I wouldn\'t say / Don\'t take this the wrong way…</div>'+
        '<button class="q-btn reveal" onclick="showLearnView(\'course\');renderCourseHome()">进入课程学习 →</button></div>';
    }
    return;
  }
  const kw=kw1.trim().toLowerCase();
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
}

// ===================== 🗺️ 话题学习路径 =====================
function topicExpressions(key){ return expressions.filter(e=>e.topic===key); }
function topicMastery(key){
  const list=topicExpressions(key);
  if(list.length===0) return 0;
  const learned=list.filter(e=>exprState(e.id)==="learned").length;
  return Math.round(learned/list.length*100);
}
function renderLearnHome(){
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
    <div class="path-topic-card" onclick="goLearnTopic('${t}')">
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
    <div class="topic-section-title">🎯 闯关课程 <span style="font-size:12px;color:#8892A0;font-weight:400">· 按「交际任务」学：一个任务 = 多部剧里的同场景说法</span></div>
    <div class="course-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;margin:12px 0">
      <div class="course-card" onclick="showLearnView('course');renderCourseHome()" style="background:#EEEDFE;border:1px solid #CECBF6;border-radius:12px;padding:16px;cursor:pointer">
        <div style="font-size:14px;font-weight:500;color:#26215C">🎯 生活口语课</div>
        <div style="font-size:12px;color:#534AB7;margin:6px 0">日常交际任务 · 从剧里学地道说法</div>
        <div style="font-size:11.5px;color:#7F77DD">1 个单元 · 5 张语料卡 · 句型总表</div>
        <div style="font-size:12px;color:#534AB7;margin-top:10px;font-weight:500">开始闯关 →</div>
      </div>
      <div class="course-card" style="background:#F1EFE8;border:1px solid #D3D1C7;border-radius:12px;padding:16px;opacity:.85">
        <div style="font-size:14px;font-weight:500;color:#444441">🎓 雅思表达课</div>
        <div style="font-size:12px;color:#5F5E5A;margin:6px 0">考试向任务 · formal-neutral 表达</div>
        <div style="font-size:11.5px;color:#888780">🚧 即将上线</div>
      </div>
    </div>
    <div class="topic-section-title">🗺️ 选一个话题开始学习 <span style="font-size:12px;color:#8892A0;font-weight:400">· 路径：范例 → 学词 → 闯关 → 实战</span></div>
    <div class="path-grid">${cards}</div>
    <div class="learn-actions" style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
      <button class="q-btn reveal" onclick="goLearnBrowse()">📖 浏览全部表达</button>
      <button class="q-btn ghost" onclick="goLearnWordbook()">📚 我的词库（${wbCount()}）</button>
      ${reviewN>0?`<button class="q-btn ghost" onclick="goLearnReview()">🔁 待复习 ${reviewN}</button>`:""}
    </div>`;
}
function startPath(topicKey){
  pathTopic=topicKey;
  pathDim="all";
  pathPhase="dim";
  flashList=topicExpressions(topicKey);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
}
// ---- 维度选择（话题路径新增步骤）----
function dimExpressions(topic,dim){
  if(!dim||dim==="all") return topicExpressions(topic);
  return expressions.filter(e=>e.topic===topic&&e.dimension===dim);
}
function renderPathDim(c){
  const tp=topicOf(pathTopic);
  const dims=TOPIC_DIMENSIONS[pathTopic]||[];
  const allN=topicExpressions(pathTopic).length;
  const dimCards=[{key:"all",name:"全部（混合）",n:allN}].concat(dims.map(d=>({key:d.key,name:d.name,n:dimExpressions(pathTopic,d.key).length})));
  c.innerHTML=pathBanner()+`
    <div class="topic-section-title">📂 选择学习维度</div>
    <p style="font-size:12.5px;color:#8892A0;margin-bottom:14px">${tp.icon} ${tp.name}话题下有 ${dims.length} 个维度 · 选一个维度精学，或选「全部」混着学</p>
    <div class="path-dim-grid">
      ${dimCards.map(d=>`
        <div class="path-dim-card" onclick="selectPathDim('${d.key}')">
          <div class="pd-name">${d.key==="all"?"🌐 全部（混合）":d.name}</div>
          <div class="pd-count">${d.n} 条表达</div>
          <div class="pd-go">开始 →</div>
        </div>`).join("")}
    </div>`;
}
function selectPathDim(dim){
  pathDim=dim;
  flashList=dimExpressions(pathTopic,dim);
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  quizQuestions=[];
  pathPhase="perspective";
  renderPathStage();
}
function renderPathSteps(){
  const steps=[
    {k:"dim",ico:"📂",t:"维度"},
    {k:"perspective",ico:"📺",t:"范例"},
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
      <span class="s-topic" style="background:#F0F4F8;color:#2C5AA0;font-size:12px;font-weight:700;padding:4px 12px;border-radius:12px">${tp.icon} ${tp.name} · 话题学习${pathDim!=="all"&&pathDim?` · <span style="color:#534AB7">${dimNameOf(pathTopic,pathDim)}</span>`:""}</span>
      <span>
        ${pathPhase!=="dim"&&pathDim!=="all"&&pathDim?`<button class="q-btn ghost" style="margin-right:6px" onclick="restorePathPhase('dim')">📂 换维度</button>`:""}
        <button class="q-btn clear" onclick="renderLearnHome()">✕ 换话题</button>
      </span>
    </div>
    ${renderPathSteps()}`;
}
function renderPathStage(){
  const c=document.getElementById("trainPath");
  if(pathPhase==="dim") renderPathDim(c);
  else if(pathPhase==="perspective") renderPerspectivePage(c);
  else if(pathPhase==="learn") renderFlash(c);
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
            ${sceneOf(e.id)?`<div class="scene-badge">🎬 这句出自剧中场景</div>`:""}
            <div class="ftap">👆 点击翻转看释义</div>
          </div>
          <div class="flash-face flash-back">
            <div class="bc">${e.chinese}</div>
            <div class="bu">${e.usage}</div>
            <div class="be">“${e.example}”</div>
            ${sceneBlockHtml(e)}
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
  if(quizQuestions.length===0 || quizIndex>=quizQuestions.length || quizFromTopic!==pathTopic || quizFromDim!==pathDim){
    // 生成该话题的题（循环取满8题）
    const pool=[];
    for(let i=0;i<8;i++) pool.push(flashList[i%flashList.length]);
    quizQuestions=pool.map((e,i)=>makeQuizItem(e,i));
    quizIndex=0; quizCorrect=0; quizFromTopic=pathTopic; quizFromDim=pathDim; comboCount=0;
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
        <button class="q-btn reveal" onclick="goLearnWordbook()">📚 去词库复习</button>
        <button class="q-btn clear" onclick="renderLearnHome()">🗺️ 学下一个话题</button>
        <button class="q-btn clear" onclick="restartPathTopic()">🔄 重新学一遍</button>
      </div>
    </div>`;
}
function restartPathTopic(){
  flashList=topicExpressions(pathTopic);
  flashIndex=0; flashStats={known:0,fuzzy:0,unknown:0};
  pathPhase="learn"; renderPathStage();
}

// ===================== 📺 原生观点范例页 =====================
function renderPerspectivePage(c){
  const tp=topicOf(pathTopic);
  const data=TOPIC_PERSPECTIVES[pathTopic]||{map:"",dimensions:[]};
  const TM={phrase:{ico:"📌",t:"短语"},sentence:{ico:"💬",t:"句子"},clip:{ico:"🎬",t:"片段"}};
  const dimsHtml=data.dimensions.length?data.dimensions.map((d,di)=>{
    const itemsHtml=d.items.map((it,ii)=>{
      const m=TM[it.type]||TM.phrase;
      const zhId="pdz_"+di+"_"+ii;
      const tipHtml=it.tip?`<div class="persp-item-tip">📝 ${it.tip}</div>`:"";
      return `
        <div class="persp-item ${it.type}">
          <span class="persp-item-badge ${it.type}">${m.ico} ${m.t}</span>
          <div class="persp-item-body">
            <div class="persp-item-en">${it.en}</div>
            <div class="persp-item-zh" id="${zhId}">${it.zh}</div>
            <div class="persp-item-meta">
              <span>📍 ${it.source}</span>
              <button class="persp-cn-toggle" onclick="document.getElementById('${zhId}').classList.toggle('show');this.textContent=document.getElementById('${zhId}').classList.contains('show')?'收起中文':'展开中文翻译'">展开中文翻译</button>
            </div>
            ${tipHtml}
          </div>
        </div>`;
    }).join("");
    return `
      <div class="persp-dim">
        <div class="persp-dim-head">
          <span class="persp-dim-tag">${d.tag}</span>
          <span class="persp-dim-name">${d.name}</span>
        </div>
        <div class="persp-angle">💡 ${d.angle}</div>
        <div class="persp-items">${itemsHtml}</div>
        <div class="persp-use">✍️ <b>可以这么串：</b>${d.use}</div>
      </div>`;
  }).join(""):`<div class="persp-empty">📖 该话题的维度素材补充中，先选其他话题～</div>`;
  c.innerHTML=pathBanner()+`
    <div class="persp-sec-title">💡 ${data.map||("聊「"+tp.name+"」，外国人通常从这 3 个维度展开")}</div>
    <div class="persp-map-hint">🗺️ 每个维度是一组同场景的说法，都是从剧里提炼的——挑顺手的用，不用全记。</div>
    ${dimsHtml}
    <div class="persp-tipbox">✨ 小提示：同一个话题不用只记一种说法——每个维度挑 1-2 个用熟就行；考试时按「可以这么串」组织就是一段回答。</div>
    <div class="persp-cta">
      <button class="q-btn reveal" onclick="startLearnAfterPersp()">已看完范例 → 开始学词 📖</button>
    </div>`;
}
function startLearnAfterPersp(){
  pathPhase="learn";
  flashIndex=0;
  flashStats={known:0, fuzzy:0, unknown:0};
  renderPathStage();
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
          <button class="q-btn clear" onclick="renderLearnHome()">🗺️ 换话题</button>`:`
          <button class="q-btn reveal" onclick="restartQuiz()">🔄 再来一关</button>
          <button class="q-btn clear" onclick="renderLearnHome()">🗺️ 去话题学习</button>`}
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
          <button class="q-btn reveal" onclick="renderLearnHome()">🗺️ 去话题学习</button>
          <button class="q-btn clear" style="margin-left:8px" onclick="goLearnWordbook()">📚 词库复习</button>
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
          <div class="q-text" style="display:block;margin-bottom:10px">${e.questions&&e.questions.length?e.questions[0].q:("用「"+e.english+"」造一个句子，或说一小段相关的话。")}</div>
          <textarea class="q-input" placeholder="用这个表达组织你的回答..." id="taskOutput"></textarea>
          <div class="q-actions" style="margin-top:8px">
            <button class="q-btn reveal" onclick="revealTaskOutput()">${e.questions&&e.questions.length?"查看参考答案":"看例句提示"}</button>
          </div>
          <div class="q-sample" id="taskOutputModel"><b>${e.questions&&e.questions.length?"参考答案：":"例句提示："}</b>${e.questions&&e.questions.length?e.questions[0].a:("可参考例句： "+e.example)}</div>
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
  return `这段话的核心表达包括：${kwList}。主要观点是：${e.chinese}。在雅思口语/写作中，可以将这些表达用于「${tp.name}」话题${e.comparison&&e.comparison.topic?("（例如「"+e.comparison.topic+"」）"):""}，先列举具体场景（建立真实感），再提炼洞察（展现思考深度），最后用对比结构收尾（增强说服力）。`;
}
// ===================== 🎤 雅思答案定制 · 题目感知版（V2） =====================
const PERSONAS = {
  vlogger:{name:"加州松弛白女",src:"卡戴珊家族·真人秀",ico:"🌴",
    fillers:["you know","sort of","literally","honestly","I guess","funnily enough","kinda"],
    openers:{p1:"Okay so, honestly, this is such a fun little question — let me think out loud for a second.",
             p2:"Oh my gosh, okay — to be real with you, I have a perfect little story for this one.",
             p3:"Hmm, okay, honestly? I don't think there's one simple answer, but here's how I see it."},
    linkers:["And funnily enough,","Honestly,","The thing is,","And you know what?","Plus,","So kinda like,"],
    closers:{p1:"So yeah, that's kind of where I stand — hope that made sense!",
             p2:"So yeah, that's my little story — one of those memories that just stuck with me.",
             p3:"So I guess, at the end of the day, it's all about how you frame it — but hey, that's just me."}},
  brit:{name:"英伦学霸",src:"小谢尔顿+神探夏洛克",ico:"🎓",
    fillers:["arguably","from my perspective","I'd say","to some extent","frankly"],
    openers:{p1:"That's an interesting question — I'd say there's rather more nuance to it than first appears.",
             p2:"Let me draw on a personal example, if I may — it's the clearest way I can illustrate the point.",
             p3:"From my perspective, this warrants a more measured analysis than a simple yes or no."},
    linkers:["Arguably,","From a different angle,","To some extent,","That said,","One could also argue that"],
    closers:{p1:"So to summarise, it's less about a fixed answer and more about how you weigh the factors involved.",
             p2:"So that anecdote, I think, captures the essence of what I'm trying to convey.",
             p3:"In conclusion, while the issue is multifaceted, I'd argue the balance tips towards the view I've outlined."}},
  shy:{name:"社恐内向青年",src:"生活大爆炸",ico:"🙈",
    fillers:["I think","probably","maybe","honestly","I guess"],
    openers:{p1:"Um, I'm not sure I'm the best person to ask about this, but I'll give it a go.",
             p2:"I don't usually talk about this sort of thing, but since you asked, there is one memory...",
             p3:"Hmm. I think this is one of those questions where the answer depends a lot on the situation."},
    linkers:["Most of the time,","But occasionally,","For me personally,","I mean,","In my case,"],
    closers:{p1:"So yeah, that's just my take — I know it's a bit of an unusual one.",
             p2:"So, yeah — it's not a big story, but it's mine, and I think about it more than I'd admit.",
             p3:"So I'd say it really depends — and I don't think there's anything wrong with that being the answer."}},
  party:{name:"外向乐天派",src:"卡戴珊家族·真人秀",ico:"🎉",
    fillers:["like","literally","honestly","no joke"],
    openers:{p1:"Oh, this is an easy one for me — I've got opinions on everything, no joke!",
             p2:"Okay, story time! You're gonna love this, I swear.",
             p3:"Honestly? I could talk about this all day — here's my take, straight up."},
    linkers:["And get this,","So then,","Anyway,","Also,","Oh and fun fact,"],
    closers:{p1:"So yeah, that's me — short and sweet, that's how I roll.",
             p2:"And that, my friend, is how it all went down — true story!",
             p3:"So there you have it — my two cents, and I'm sticking to it!"}},
  ted:{name:"理性学术学霸",src:"小谢尔顿·科学独白",ico:"🧠",
    fillers:["notably","in practice","by and large","arguably"],
    openers:{p1:"Interesting. If we step beyond the personal level for a moment, there's a broader pattern worth noting.",
             p2:"To frame this properly, let me first situate it within a wider context before narrowing to a specific case.",
             p3:"If we examine this societally rather than individually, a more layered picture emerges."},
    linkers:["Notably,","In practice,","By and large,","Critically,","This connects to a wider phenomenon,"],
    closers:{p1:"So, in short, the personal and the structural are more intertwined than they first appear.",
             p2:"In closing, this single case serves as a microcosm of a much larger dynamic.",
             p3:"To conclude, the evidence favours a nuanced position that distinguishes individual agency from systemic influence."}},
  critic:{name:"批判思辨博主",src:"致命女人·女性视角",ico:"🎙️",
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
  analytic:{name:"学术分析风",src:"致命女人/小谢尔顿·思辨",ico:"📚",
    fillers:["arguably","in many cases","from a societal standpoint"],
    openers:{p1:"If we consider this from a broader societal standpoint, a clearer pattern emerges.",
             p2:"To answer this, it helps to distinguish the individual experience from the collective one.",
             p3:"This question operates on multiple levels — personal, social, and structural."},
    linkers:["From a societal standpoint,","Conversely,","Empirically speaking,","This raises a further question,"],
    closers:{p1:"So while the personal lens is valid, the structural view adds essential depth.",
             p2:"In sum, the anecdotal and the systemic are two sides of the same coin.",
             p3:"Ultimately, the most defensible position integrates both the micro and macro perspectives."}},
  story:{name:"故事叙述风",src:"致命女人·多线叙事",ico:"🎭",
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
  media:["media","internet","phone","social","technology","tech","媒体","网络","手机","社交平台","新闻","科技"],
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

// ---------- V2：题目感知 ----------
const OBJ_TYPES = [
  {key:"person", re:/a person (who|that)|someone who|a friend|an old friend|a teacher|a neighbour|a neighbor|a colleague|a relative|a family member|a classmate|a leader|a role model/, cn:"人物", subj:"this person", pro:"they"},
  {key:"place",  re:/a place|a city|a country|a town|a house|a room|a park|a building|a neighbourhood|a neighborhood|somewhere/, cn:"地点", subj:"this place", pro:"it"},
  {key:"media",  re:/a book|a movie|a film|a tv show|a tv programme|a series|a magazine|a song|a podcast|something you read/, cn:"书影音", subj:"this book", pro:"it"},
  {key:"object", re:/an object|a thing you|something you own|a gift|a present|a possession|an item/, cn:"物品", subj:"this thing", pro:"it"},
  {key:"food",   re:/a (kind of )?food|a meal|a dish|a restaurant|a snack|something you (eat|ate|like to eat)/, cn:"食物", subj:"this dish", pro:"it"},
  {key:"activity",re:/an activity|a hobby|a sport|a game|something you enjoy|something you like doing|a pastime|cooking|swimming|running|cycling/, cn:"活动爱好", subj:"this activity", pro:"it"},
  {key:"event",  re:/an event|a special day|a festival|a celebration|a party|a wedding|a birthday|an occasion/, cn:"事件节日", subj:"this occasion", pro:"it"},
  {key:"experience",re:/an experience|a time when|a time you|a moment|a memory|a trip|a journey|a holiday|a travel/, cn:"经历", subj:"that experience", pro:"it"},
  {key:"decision",re:/a decision|a choice|a problem you solved|a difficult situation|a challenge/, cn:"决定挑战", subj:"that decision", pro:"it"},
  {key:"skill",  re:/a skill|an ability|something you learned|something you mastered|a talent/, cn:"技能", subj:"this skill", pro:"it"},
  {key:"habit",  re:/a habit|a routine|something you do every/, cn:"习惯", subj:"this habit", pro:"it"},
  {key:"change", re:/a change|a difference you/, cn:"变化", subj:"that change", pro:"it"},
  {key:"goal",   re:/a goal|an ambition|a dream|something you want to|something you hope/, cn:"目标", subj:"this goal", pro:"it"},
  {key:"generic", re:/$^/, cn:"话题", subj:"this", pro:"it"}
];
// Part2 骨架：每类对象 s1~s4（每句 en/zh/explain），{core}{subj}{pro}{expr} 为槽位
const SKEL_P2 = {
  person:{ name:"人物",
    s1:[{en:"So you asked about {core} — and honestly, one person jumps out immediately, and it's not even close.",
         zh:"你问的是{core}，说实话，有一个人一下子就跳进我脑子里，根本不用想。",
         explain:"开场直接回应题目中心词，先锁定要讲的对象，让考官知道你没跑题。"}],
    s2:[{en:"The person I have in mind is someone I've known for years — {pro} was {f} the one I could always count on, and {expr} sums {pro} up perfectly.",
         zh:"我想说的这个人我认识很多年了——TA就是我永远可以依靠的那个人，{expr}这句话简直是为TA量身定做的。",
         explain:"背景铺垫：交代人物关系，顺手嵌一条该话题的表达，展示词汇量。"},
        {en:"This person came into my life at a point when I really needed someone like that — {f} {expr} is the phrase that keeps coming back to me.",
         zh:"这个人是在我最需要有人拉一把的时候出现的——{expr}这个说法总在我脑子里打转。",
         explain:"给人物出场加一个时间锚点（什么时候认识），让故事有真实感。"}],
    s3:[{en:"{L} what really stuck with me was one specific moment — if I had to put it in words, {expr} is exactly how it went.",
         zh:"{L}真正让我忘不掉的是一个具体瞬间——如果非要描述的话，{expr}再贴切不过了。",
         explain:"故事细节段：讲一个具体事件，用第二条表达给画面定性，是 Part2 拿分的核心。"},
        {en:"{L} there was this one time that changed everything for me — I still catch myself replaying it, and {expr} is the honest summary.",
         zh:"{L}有一次经历彻底改变了我——我现在还会时不时回想，{expr}是最诚实的总结。",
         explain:"换一种细节展开：强调事件对你的影响，避免跟上一句雷同。"}],
    s4:[{en:"Looking back, {expr} gets closer to the truth than anything I could say myself — that's the impact {pro} had on me.",
         zh:"回头看，{expr}比我自己的话更接近真相——这就是TA对我的影响。",
         explain:"感受与影响段：升华到人物对你的改变，展示反思能力（考官爱听）。"},
        {en:"If you ask me why it matters, I'd say {expr} — it changed the way I look at people, honestly.",
         zh:"你要问我为什么重要，我会说{expr}——它改变了我看人的方式。",
         explain:"直接回答「为什么重要」这个隐藏问题，把答案收拢到主题上。"}]},
  place:{ name:"地点",
    s1:[{en:"So you asked about {core} — and honestly, the first place that comes to mind isn't even famous, it's just special to me.",
         zh:"你问的是{core}，说实话，我第一个想到的地方甚至不出名，只是对我很特别。",
         explain:"开场扣题：点明地点，同时用「不出名但对我特别」制造记忆点。"}],
    s2:[{en:"The place I'm thinking of — the atmosphere hits you the second you walk in, and {expr} is exactly the feeling I get there.",
         zh:"我想说的这个地方，一进门氛围就扑面而来，{expr}就是我每次去那里的感受。",
         explain:"环境描写：用感官词（氛围/进门）让地点有画面感，嵌入话题表达。"},
        {en:"What makes {subj} stand out is the people and the rhythm of it — {f} {expr} is how I'd describe the vibe.",
         zh:"这个地方最特别的是人，还有它的节奏——{expr}就是我对这种氛围的描述。",
         explain:"从「景」转到「人」，丰富描述维度，避免只讲外观。"}],
    s3:[{en:"{L} there's one memory tied to that place — {expr} captures it better than any photo could.",
         zh:"{L}那个地方绑着一段回忆——{expr}比任何照片都更能留住那个画面。",
         explain:"叙事转折：地点+故事绑定，让描述从静态变动态。"},
        {en:"{L} I keep going back there, and every time it's a little different — {expr} is the thread that holds it together.",
         zh:"{L}我老往那儿跑，每次去感受都略不一样——{expr}就是把这一切串起来的那根线。",
         explain:"用「反复去」体现地点对你的意义，表达嵌入得自然。"}],
    s4:[{en:"If you ask me why it matters, it's less about the place itself and more about what it represents — {expr} is the closest I can get.",
         zh:"你要问为什么重要，与其说是这个地方，不如说是它代表的东西——{expr}是我能想到最贴切的说法。",
         explain:"升华主题：从具体地点抽象到象征意义，展示深度（高分关键）。"},
        {en:"Looking back, {expr} is the takeaway — it's not where you go, it's how it makes you feel.",
         zh:"回头看，{expr}就是我的收获——重要的不是去哪儿，而是它带给你的感受。",
         explain:"金句收尾式总结，把答案落在感受上。"}]},
  media:{ name:"书影音",
    s1:[{en:"So you asked about {core} — and honestly, one title stays with me long after I finished it.",
         zh:"你问的是{core}，说实话，有一部作品在我看完之后很久还挥之不去。",
         explain:"开场扣题：锁定作品，点出「后劲大」引起考官兴趣。"}],
    s2:[{en:"{expr} is probably why it hit me so hard — on the surface it's simple, but underneath there's a lot going on.",
         zh:"{expr}大概就是它打动我的原因——表面看很简单，底下其实藏了很多东西。",
         explain:"作品简介+亮点：用表达概括作品特质，一句话讲清「它是什么」。"},
        {en:"I picked it up {f} by chance, and from the first chapter I was hooked — {expr} is what kept me turning the pages.",
         zh:"{f}我算是偶然翻到它的，从第一章就被抓住了——{expr}就是让我停不下来的东西。",
         explain:"讲述接触过程（怎么发现的），让「讲书」变成「讲故事」。"}],
    s3:[{en:"{L} there's a part of it I keep coming back to — {expr} sounds simple, but it hit me at exactly the right moment.",
         zh:"{L}其中有一段我总忍不住回想——{expr}听起来简单，却在恰好的时机击中了我。",
         explain:"细节段落：引用作品里最戳你的点，展现你理解它的程度。"},
        {en:"{L} what stuck with me wasn't the plot, it was the feeling — {expr} stayed in my head for weeks.",
         zh:"{L}让我记住的不是剧情，是那种感觉——{expr}在我脑子里转了好几周。",
         explain:"强调感受而非剧情，避免复述情节（考官不感兴趣），展示思考。"}],
    s4:[{en:"Looking back, {expr} is the takeaway I carried into real life — it genuinely changed how I see things.",
         zh:"回头看，{expr}是我带进现实生活的收获——它真的改变了我看待事物的方式。",
         explain:"作品→人生的影响，展示你从中学到什么，收尾有力。"},
        {en:"If someone asked me to recommend it, I'd say {expr} — it's not for everyone, but if it lands, it lands hard.",
         zh:"有人让我推荐的话，我会说{expr}——它不是适合所有人，但一旦对上，就很上头。",
         explain:"以推荐收尾，自然地把话题收拢，同时展示个性化表达。"}]},
  object:{ name:"物品",
    s1:[{en:"So you asked about {core} — and honestly, the first thing that comes to mind isn't worth much, but it means everything to me.",
         zh:"你问的是{core}，说实话，我第一个想到的东西不值几个钱，但对我来说意义重大。",
         explain:"开场扣题+制造反差（不值钱 vs 意义重大），抓住考官注意力。"}],
    s2:[{en:"{expr} is where its story starts — it came into my hands {f} by accident, and it's been with me ever since.",
         zh:"{expr}就是这东西故事的起点——{f}它阴差阳错到了我手里，从此一直陪着我。",
         explain:"交代来历：用表达引出「怎么来的」，给物品讲故事的开头。"},
        {en:"It's not about what it is, it's about what it represents — {f} {expr} is how I explain it to people.",
         zh:"重要的不是它是什么，而是它代表什么——{f}{expr}就是我给别人解释时用的说法。",
         explain:"从实物升华到象征意义，展示表达深度。"}],
    s3:[{en:"{L} every time I look at it, a whole memory comes flooding back — {expr} is the short version of that story.",
         zh:"{L}每次看到它，一整段回忆就会涌回来——{expr}是那段故事的精简版。",
         explain:"物品→回忆的连接，让答案从描述变成叙事。"},
        {en:"{L} there was a moment I almost lost it, and that's when I realised — {expr} meant more than I'd admitted.",
         zh:"{L}有一次我差点弄丢它，那会儿我才意识到——{expr}比我一直承认的要重要得多。",
         explain:"加入小波折（差点失去），让故事有起伏，体现真实性。"}],
    s4:[{en:"If you ask me why it matters, I'd say {expr} — it's a reminder of something I never want to forget.",
         zh:"你要问为什么重要，我会说{expr}——它提醒着我永远不想忘记的东西。",
         explain:"收束主题：回答「为什么重要」，把物品的意义讲透。"},
        {en:"Looking back, {expr} is what I'd take from this — things carry memories better than we carry them ourselves.",
         zh:"回头看，{expr}就是我的收获——物品比我们自己更能守住回忆。",
         explain:"金句式升华收尾，展示语言功底。"}]},
  food:{ name:"食物",
    s1:[{en:"So you asked about {core} — and honestly, the first thing my mouth remembers isn't from a fancy restaurant.",
         zh:"你问的是{core}，说实话，我嘴先记住的那一口，不是来自什么高级餐厅。",
         explain:"开场扣题+亲切感：从「嘴记住的」切入，瞬间有生活气息。"}],
    s2:[{en:"{expr} is the best way to describe it — it's comfort food in the truest sense, the kind that fixes a bad day.",
         zh:"{expr}是对它最好的形容——这是最纯粹的治愈系食物，能修好糟糕的一天。",
         explain:"给食物定性：用表达概括特点，同时暗示个人情感。"},
        {en:"I first had it {f} when I was visiting family, and it's been my go-to ever since — {expr} doesn't even begin to cover it.",
         zh:"{f}我第一次吃是在走亲戚的时候，从那以后它就是我的首选——{expr}甚至都不够形容它。",
         explain:"交代第一次吃的场景，让食物和回忆绑定。"}],
    s3:[{en:"{L} the taste is only half of it — {expr} is what actually keeps me coming back.",
         zh:"{L}味道只是其中一半——{expr}才是让我一直回去的真正原因。",
         explain:"从味道转到情感/氛围，丰富回答层次。"},
        {en:"{L} I remember one particular meal where everything went wrong and then somehow right — {expr} is the closest summary.",
         zh:"{L}我记得有一次吃饭，一切乱套又莫名其妙变好——{expr}是最接近的总结。",
         explain:"讲具体的一顿饭，把答案变成小故事，避免干巴巴描述。"}],
    s4:[{en:"Looking back, {expr} — it's never just food, it's who you share it with.",
         zh:"回头看，{expr}——食物从来不只是食物，重要的是跟谁一起吃。",
         explain:"升华收尾：食物→人情味展示思考深度。"},
        {en:"If you ask me to sum it up, I'd say {expr} — it tastes like home, and there's no better review than that.",
         zh:"你要让我一句话总结，我会说{expr}——它尝起来像家的味道，没有比这更好的评价了。",
         explain:"「像家的味道」是英文里很戳人的说法，金句收尾。"}]},
  activity:{ name:"活动爱好",
    s1:[{en:"So you asked about {core} — and honestly, this one's easy for me, I could talk about it all day.",
         zh:"你问的是{core}，说实话这题对我太简单了，我能聊一整天。",
         explain:"开场扣题+热情表态，为后面展开铺垫。"}],
    s2:[{en:"I got into it {f} kind of by accident, and {expr} became part of the routine without me noticing.",
         zh:"{f}我算是偶然入坑的，{expr}不知不觉就成了我日常的一部分。",
         explain:"交代入坑经过，用表达形容它在你生活中的位置。"},
        {en:"What I love about it is that it's completely mine — no deadlines, no pressure, just {expr}.",
         zh:"我爱它的一点是，它完全属于我自己——没有截止日期，没有压力，就是{expr}。",
         explain:"讲「为什么喜欢」，用「属于自己/没压力」建立反差。"}],
    s3:[{en:"{L} there was a moment it clicked — {expr} turned it from something I did into something I genuinely loved.",
         zh:"{L}有一个瞬间它真正通了——{expr}把它从我做的事变成了我真心喜欢的事。",
         explain:"「顿悟时刻」是讲爱好的经典叙事点，让答案有转折。"},
        {en:"{L} I've also met some great people through it — {expr} is the honest bonus I never expected.",
         zh:"{L}我还通过它认识了一些很棒的人——{expr}是我从没预料到的意外收获。",
         explain:"补充社交维度，展示爱好的延伸价值。"}],
    s4:[{en:"What it's really given me is {expr} — it's about the mindset as much as the activity itself.",
         zh:"它真正给我的东西是{expr}——重要的不只是这件事本身，还有它带来的心态。",
         explain:"升华到心态/成长，展示反思能力。"},
        {en:"Looking back, {expr} is the takeaway — it taught me that consistency beats talent.",
         zh:"回头看，{expr}是我的收获——它教会我，坚持比天赋更重要。",
         explain:"金句收尾（坚持 vs 天赋），顺便呼应价值观话题。"}]},
  event:{ name:"事件经历",
    s1:[{en:"So you asked about {core} — and honestly, one occasion stands out like it happened yesterday.",
         zh:"你问的是{core}，说实话，有一件事清晰得就像昨天刚发生。",
         explain:"开场扣题+时间锚点（像昨天），立刻进入叙事状态。"}],
    s2:[{en:"It happened {f} a while back, and {expr} is the closest I can get to describing the scene.",
         zh:"{f}那是挺久以前的事了，{expr}是我能想到最接近当时场景的描述。",
         explain:"交代时间背景，用表达给整个事件定调。"},
        {en:"The whole thing started out pretty ordinary — {f} {expr} is how it felt before things picked up.",
         zh:"整件事开头挺普通的——{f}在事情热闹起来之前，{expr}就是当时的感觉。",
         explain:"铺垫开端：普通开头 vs 后面的事，形成叙事张力。"}],
    s3:[{en:"{L} the middle part is what I remember most — {expr} was the turning point.",
         zh:"{L}中间那段我记得最清楚——{expr}就是转折点。",
         explain:"转折段：点出关键时刻，故事从这里进入高潮。"},
        {en:"{L} everything after that felt like it was on fast-forward — {expr} doesn't quite capture the chaos, but it's close.",
         zh:"{L}那之后一切都像按了快进——{expr}没法完全描述当时的混乱，但也接近了。",
         explain:"高潮段：用「快进/混乱」制造画面感，展示细节描述能力。"}],
    s4:[{en:"What I took from it was {expr} — it genuinely changed how I see things.",
         zh:"我从中学到的是{expr}——它真的改变了我看待事情的方式。",
         explain:"总结收获：事件→成长，回答考官没问但想听的「影响」。"},
        {en:"Looking back, {expr} is the honest lesson — the moment matters, but what you do after matters more.",
         zh:"回头看，{expr}是最诚实的教训——那一刻很重要，但之后你怎么做更重要。",
         explain:"金句收尾，把事件升华成人生经验。"}]},
  generic:{ name:"通用",
    s1:[{en:"So you asked about {core} — and honestly, this is one of those topics I have a lot to say about.",
         zh:"你问的是{core}，说实话，这个话题我有好多话想说。",
         explain:"开场扣题：直接承认话题，为展开做铺垫。"}],
    s2:[{en:"To answer that properly, I should start with some context — {expr} is where the story really begins.",
         zh:"要好好回答这个问题，我得先交代点背景——{expr}才是这个故事真正的起点。",
         explain:"背景铺垫：用表达引出「起点」，让答案有纵深。"},
        {en:"{f} I didn't plan for any of this to happen — {expr} sort of set everything in motion.",
         zh:"{f}这一切都不是我计划好的——{expr}算是把一切都推动了。",
         explain:"强调「非计划性」，增加故事的真实感和可信度。"}],
    s3:[{en:"{L} the turning point came when everything started to fall into place — {expr} is how I'd describe that moment.",
         zh:"{L}转折点出现在一切都开始对上的时候——{expr}是我对那一刻的描述。",
         explain:"转折段：明确「转变发生的时刻」，叙事结构清晰。"},
        {en:"{L} what surprised me most was how much it changed — {expr} was nowhere near my original plan.",
         zh:"{L}最让我意外的是它变了多少——{expr}完全不在我最初的计划里。",
         explain:"用「意外」制造看点，展示你处理变化的能力。"}],
    s4:[{en:"And what it taught me in the end was {expr} — that's the part I still carry with me.",
         zh:"到最后它教会我的东西是{expr}——这是我一直带在身上的部分。",
         explain:"总结教训/收获，把答案收拢到个人成长。"},
        {en:"If I had to sum it up, I'd say {expr} — the value wasn't in the outcome, it was in the process.",
         zh:"非要总结的话，我会说{expr}——价值不在结果，而在过程。",
         explain:"「结果 vs 过程」是万能升华句式，展示思辨能力。"}]}
};
// Part1 短答骨架（通用，{core} 扣题）
const SKEL_P1 = {
  s1:[{en:"To be honest, {core} is {f} something I think about more than you'd expect.",
       zh:"说实话，{core}是我比你想象中想得更多的一件事。",
       explain:"开场直接表态：承认话题，给考官一个明确的立场起点。"}],
  s2:[{en:"{L} it depends on the situation, but on the whole, {expr} is how I feel about it.",
       zh:"{L}这要看情况，但总体而言，{expr}就是我对它的感受。",
       explain:"给出态度+一句话理由，嵌入话题表达展示词汇。"},
      {en:"{L} I'd say yes, and the reason is pretty simple — {expr} just works for me.",
       zh:"{L}我会说是的，理由很简单——{expr}对我就是管用。",
       explain:"直接回答型：yes+理由，简短有力，符合 Part1 节奏。"},
      {en:"{L} honestly, it's a bit of both — {expr} is the part that gets me every time.",
       zh:"{L}说实话两者都有——{expr}是每次都能戳到我的部分。",
       explain:"模棱两可型：都占一点，展示灵活表达（适合你拿不准的题）。"}],
  s3:[{en:"{L} a quick example — {expr} is the first thing that comes to mind.",
       zh:"{L}举个简单的例子——{expr}是我第一个想到的。",
       explain:"用例子支撑观点，避免空谈，符合 Part1 的简短要求。"}]
};
// Part3 深度讨论骨架（通用，{core} 扣题）
const SKEL_P3 = {
  s1:[{en:"From my perspective, {core} isn't a black-and-white issue — it sits somewhere in between.",
       zh:"在我看来，{core}不是非黑即白的问题——它处在两者之间。",
       explain:"开场表明立场：承认复杂性，为深度讨论定调。"}],
  s2:[{en:"On one hand, {expr} captures the core of the argument — there's real logic to it.",
       zh:"一方面，{expr}抓住了论点的核心——它确实有逻辑支撑。",
       explain:"正方论证：先给一个合理立场，用表达概括核心。"},
      {en:"{L} {expr} is the honest way to frame it — the evidence points that way, at least.",
       zh:"{L}{expr}是诚实的表述方式——至少证据指向那个方向。",
       explain:"补充论证：换一种说法巩固立场，展示词汇多样性。"}],
  s3:[{en:"On the flip side, {expr} complicates the picture — the reality is messier than the theory.",
       zh:"反过来看，{expr}让画面变得复杂——现实比理论要乱得多。",
       explain:"反方论证：主动找反例，体现辩证思维（高分关键）。"},
      {en:"{L} there's also a generational angle worth mentioning — {expr} looks different depending on who you ask.",
       zh:"{L}还有一个代际的角度值得一提——{expr}在不同人眼里看起来不一样。",
       explain:"引入新维度（代际/群体差异），拓展讨论广度。"}],
  s4:[{en:"So on balance, I'd say the sensible view is somewhere in the middle — {expr} is the closest summary.",
       zh:"所以综合来看，明智的看法在中间——{expr}是最接近的总结。",
       explain:"平衡收尾：给出综合结论，避免极端立场。"},
      {en:"And that's why I keep coming back to {expr} — it reminds me that context changes everything.",
       zh:"这就是我一直回到{expr}的原因——它提醒我，语境会改变一切。",
       explain:"金句收尾：用「语境改变一切」展示成熟观点。"}]};

// 解析题目：题型 + 对象类型 + 核心词
function parseQuestion(q){
  const t=q.trim().toLowerCase();
  const part=detectPart(q);
  let obj=null;
  for(const o of OBJ_TYPES){
    if(o.re.test(t)){ obj=o; break; }
  }
  if(!obj) obj=OBJ_TYPES[OBJ_TYPES.length-1]; // generic 兜底
  // 核心词：Describe 后的部分 / 剥离疑问前缀后的主干 / 兜底用话题词
  let core="";
  const raw=q.trim().replace(/[?.!]+$/,"");
  const dm=raw.match(/describe\s+(.+)/i);
  if(dm){ core=dm[1].trim(); }
  else{
    let s=raw.trim();
    for(let i=0;i<4;i++){
      const m=s.match(/^(why|how often|how|what are|what is|what|is it important|to what extent|in your opinion|should|do you think|do you like|do you enjoy|do you prefer|do you usually|do you|are|would you|is|can|have you)\s+/i);
      if(!m) break;
      s=s.slice(m[0].length);
    }
    core=s;
  }
  if(!core) core="this topic";
  return {part, obj, core, topic:detectTopic(q)};
}

// 随机取一个变体
function pickOne(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// 组装句子：填槽位 + 嵌表达
function fillSkel(skel, vars, exprIdx){
  const E=vars.exprs[exprIdx];
  const exprHtml=E?`<span class="hl">${E.english}<span class="expr-src">📺 ${escapeHtml(E.source)}</span></span>`:"";
  const en=skel.en
    .replace(/\{core\}/g,vars.core)
    .replace(/\{subj\}/g,vars.subj)
    .replace(/\{pro\}/g,vars.pro)
    .replace(/\{f\}/g,()=>vars.p.fillers[Math.floor(Math.random()*vars.p.fillers.length)])
    .replace(/\{L\}/g,()=>vars.p.linkers[Math.floor(Math.random()*vars.p.linkers.length)])
    .replace(/\{expr\}/g,exprHtml);
  const zh=skel.zh
    .replace(/\{core\}/g,vars.core)
    .replace(/\{subj\}/g,vars.subj)
    .replace(/\{pro\}/g,vars.pro)
    .replace(/\{f\}/g,"")
    .replace(/\{L\}/g,"")
    .replace(/\{expr\}/g, E?`「${E.chinese}」`:"");
  return {en,zh,explain:skel.explain};
}

// V2 主生成
function buildAnswerV2(parsed,key,exprs){
  const p=PERSONAS[key]||PERSONAS.vlogger;
  const tp=topicOf(parsed.topic);
  const vars={core:escapeHtml(parsed.core),subj:parsed.obj.subj,pro:parsed.obj.pro,exprs,p};
  const lines=[];
  const push=(t,exprIdx)=>{ const s=fillSkel(pickOne(t),vars,exprIdx); lines.push({en:s.en,zh:s.zh,explain:s.explain}); };

  if(parsed.part==="p1"){
    lines.push({en:p.openers.p1,zh:"",explain:"人设开场白：拉近距离，给回答一个自然的起头。"});
    push(SKEL_P1.s1);
    push(SKEL_P1.s2,0);
    push(SKEL_P1.s3,1);
    lines.push({en:p.closers.p1,zh:"",explain:"人设收尾：简短总结，让回答完整收束。"});
  }else if(parsed.part==="p2"){
    lines.push({en:p.openers.p2,zh:"",explain:"人设开场白：进入讲故事模式。"});
    const sk=SKEL_P2[parsed.obj.key]||SKEL_P2.generic;
    push(sk.s1);
    push(sk.s2,0);
    push(sk.s3,1);
    push(sk.s4,2);
    lines.push({en:p.closers.p2,zh:"",explain:"人设收尾：给故事一个完整落点。"});
  }else{
    lines.push({en:p.openers.p3,zh:"",explain:"人设开场白：表明这是需要深度讨论的问题。"});
    push(SKEL_P3.s1);
    push(SKEL_P3.s2,0);
    push(SKEL_P3.s3,1);
    push(SKEL_P3.s4,2);
    lines.push({en:p.closers.p3,zh:"",explain:"人设收尾：综合结论，收束讨论。"});
  }
  return {lines, p, tp, part:parsed.part, obj:parsed.obj};
}

function escapeHtml(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function generateAnswer(reGen){
  const q=document.getElementById("genQuestion").value.trim();
  const box=document.getElementById("genResult");
  if(!q && !reGen){
    box.innerHTML='<div class="gen-empty">✍️ 先输入一个雅思口语题目，再选人设点生成～</div>';
    return;
  }
  const parsed=parseQuestion(q||"Describe something you like");
  const exprs=pickGenExprs(parsed.topic, parsed.part==="p2"?3:2);
  const r=buildAnswerV2(parsed,genStyle,exprs);
  // 渲染：英文 / 中文翻译 / 逐句讲解 / 习语注释 / 表达chips
  const enHtml=r.lines.map(l=>l.en).join(" ");
  const zhHtml=r.lines.map(l=>l.zh).filter(Boolean).join(" ");
  const lineHtml=r.lines.map((l,i)=>`
    <div class="gen-line">
      <div class="gen-line-no">${i+1}</div>
      <div class="gen-line-body">
        <div class="gen-line-en">${l.en}</div>
        ${l.zh?`<div class="gen-line-zh">${l.zh}</div>`:""}
        ${l.explain?`<div class="gen-line-ex">💡 ${l.explain}</div>`:""}
      </div>
    </div>`).join("");
  box.innerHTML=`
    <div class="gen-answer">
      <div class="gen-q-label">📝 你的问题</div>
      <div class="gen-q-text">${escapeHtml(q)}</div>
      <div class="gen-style-tag">【${r.p.ico} ${r.p.name} · ${r.p.src}】·【${PART_LABEL[r.part]}·${parsed.obj.cn}】· 话题：${r.tp.icon} ${r.tp.name}</div>

      <div class="gen-block-label">🗣️ 英文答案 <span class="gen-block-sub">(表达高亮 = 本题嵌入的地道用法)</span></div>
      <div class="gen-answer-text">${enHtml}</div>

      <div class="gen-block-label">🇨🇳 中文翻译</div>
      <div class="gen-answer-zh">${zhHtml}</div>

      <div class="gen-block-label">🔍 逐句讲解</div>
      <div class="gen-lines">${lineHtml}</div>

      <div class="gen-exprs-label">📝 地道习语 / 词伙注释</div>
      <div class="gen-notes">
        ${exprs.map(e=>`<div class="gen-note"><code>${e.english}</code> <span class="gen-note-zh">(${e.chinese})</span></div>`).join("")}
      </div>
      <div class="gen-exprs-label">🌟 表达出处（点击看详解）</div>
      <div class="gen-expr-chips">
        ${exprs.map(e=>`<button class="gen-chip" onclick="showDetail(${e.id})">${e.english}</button>`).join("")}
      </div>
      <div class="gen-tip">💡 黄字为本次嵌入的地道表达，中文翻译逐句对应。点「🔀 换一批表达」用同人设换一套词伙重新生成，答案结构与讲解会同步刷新。</div>
    </div>`;
}

// ===================== 🎤 AI 智能生成（DeepSeek 直连 / 本地服务代理） =====================
let genAiMode = (function(){ try{ return localStorage.getItem('wb_ai_mode')||'template'; }catch(e){ return 'template'; } })();
function isLocalServerMode(){
  try{ return location.protocol==='http:' && (location.hostname==='127.0.0.1'||location.hostname==='localhost'); }catch(e){ return false; }
}
function defaultEndpoint(){
  // 本地服务模式（本机 node server.js 托管）→ 用同源 /api/chat 转发，绕过浏览器直连限制
  return isLocalServerMode() ? '/api/chat' : 'https://api.deepseek.com/chat/completions';
}
function setAiMode(m, btn){
  genAiMode=m;
  try{ localStorage.setItem('wb_ai_mode',m); }catch(e){}
  document.querySelectorAll('.gen-mode-btn').forEach(b=>b.classList.toggle('active', b.getAttribute('data-mode')===m));
  if(m==='ai' && document.getElementById('aiKey')){
    const cfg=aiCfg();
    if(!cfg.key) openAiSettings();
  }
}
function aiCfg(){ try{ return JSON.parse(localStorage.getItem('wb_ai_cfg')||'{}'); }catch(e){ return {}; } }
function saveAiCfg(cfg){ try{ localStorage.setItem('wb_ai_cfg', JSON.stringify(cfg)); }catch(e){} }
function openAiSettings(){
  const cfg=aiCfg();
  document.getElementById('aiKey').value=cfg.key||'';
  document.getElementById('aiEndpoint').value=cfg.endpoint||defaultEndpoint();
  document.getElementById('aiModel').value=cfg.model||'deepseek-chat';
  document.getElementById('aiOverlay').style.display='flex';
}
function closeAiSettings(){ document.getElementById('aiOverlay').style.display='none'; }
function saveAiSettings(){
  const key=document.getElementById('aiKey').value.trim();
  const endpoint=document.getElementById('aiEndpoint').value.trim();
  const model=document.getElementById('aiModel').value.trim();
  if(!key){ alert('请填写 API Key（DeepSeek 开放平台 platform.deepseek.com 获取）'); return; }
  saveAiCfg({key:key, endpoint:endpoint||defaultEndpoint(), model:model||'deepseek-chat'});
  closeAiSettings();
  showToast(isLocalServerMode() ? '✅ 已保存：AI 将通过本地服务转发，网页可直接用' : '✅ AI Key 已保存（仅存本浏览器）');
}

const PERSONA_PROMPTS={
  vlogger:"加州松弛白女vlogger（卡戴珊家族真人秀风）：语气松弛碎碎念，爱聊日常琐事和个人小经历（家庭/工作/穿搭随口就来），多用 honestly / to be real / I feel like / literally，短句多、口语填充词多，生活化不书面，侧重主观感受，适合 Part1 Part2",
  brit:"英伦学霸（小谢尔顿 + 神探夏洛克风）：高智商、逻辑克制、用词精准，把日常话题拆成理性分析，偶尔带书呆子的冷幽默，少俚语，分层讨论，适合 Part2 Part3",
  shy:"社恐内向青年（生活大爆炸风）：书呆子式的真实犹豫感，分情况讨论（大部分情况不会，但偶尔会），习惯自我剖析，社交场合容易尴尬，不强行阳光，语气平实带点自嘲",
  party:"外向乐天派对青年（真人秀综艺风）：情绪外放，爱举生活化小故事，语气活泼，乐于分享偶遇经历，how I roll 式收尾",
  ted:"理性学术学霸（小谢尔顿科学独白风）：跳出个人经历延伸科学/社会现象，利弊分析，区分个体和群体，逻辑衔接严谨，擅长把小事讲出大道理，主打 Part3 深度作答",
  critic:"批判性思辨播客博主（致命女人女性视角风）：犀利、有立场，对社会/婚姻/性别话题有鲜明观点，双面视角（on one hand / on the flip side），拒绝非黑即白，输出独立观点",
  high:"高分范文风：传统雅思应试范文，规整模板化，正式但自然",
  casual:"口语自然风：普通海外考生平实口语，无强人设",
  analytic:"学术分析风（致命女人/小谢尔顿思辨素材）：重辩证、社会视角",
  story:"故事叙述风（致命女人多线叙事）：优先叙事讲故事，先铺背景再讲细节最后抛转折"
};

function renderAIText(s, exprs){
  if(!s) return '';
  return escapeHtml(s).replace(/\*\*(.+?)\*\*/g,function(m,inner){
    // 匹配库内表达：命中则标注出处（剧名+集数）
    const key=inner.toLowerCase().replace(/[^a-z0-9\s']/g,'').trim();
    let src='';
    if(exprs&&exprs.length){
      for(const e of exprs){
        const ek=(e.english||'').toLowerCase().replace(/[^a-z0-9\s']/g,'').trim();
        if(!ek) continue;
        // 精确命中，或库内表达是输出文本的子串（处理 AI 加前后缀）；不做反向包含，避免短词误标
        if(key===ek || (ek.length>=6 && key.indexOf(ek)!==-1)){
          src=e.source;
          break;
        }
      }
    }
    return src
      ? '<span class="hl">'+inner+'<span class="expr-src">📺 '+escapeHtml(src)+'</span></span>'
      : '<span class="hl">'+inner+'</span>';
  });
}

async function generateAIAnswer(q, reGen){
  const cfg=aiCfg();
  const box=document.getElementById('genResult');
  if(!cfg.key){
    box.innerHTML='<div class="gen-empty">🤖 AI 模式需要 API Key（DeepSeek 开放平台获取，几分钟搞定）。<br><br><button class="q-btn reveal" onclick="openAiSettings()">⚙️ 配置 AI Key</button> <button class="q-btn ghost" onclick="setAiMode(\'template\');generateAnswer()">🎛️ 先用模板生成</button></div>';
    return;
  }
  const parsed=parseQuestion(q);
  const exprs=pickGenExprs(parsed.topic, 3);
  const p=PERSONAS[genStyle]||PERSONAS.vlogger;
  const tp=topicOf(parsed.topic);
  // 本地服务模式自动切换：即使配置里存的是 DeepSeek 直连地址，也走 /api/chat 转发
  let endpoint=cfg.endpoint||defaultEndpoint();
  if(isLocalServerMode() && endpoint.indexOf('/api/chat')===-1) endpoint='/api/chat';
  box.innerHTML='<div class="gen-loading">🤖 '+p.ico+' '+p.name+' 正在组织回答… 首次调用约 15-30 秒，请稍候</div>';
  const sys='你是雅思口语金牌教练。根据用户题目生成地道、严格扣题的雅思口语答案。\n铁律：\n1. 严格回应题目内容，绝不跑题，不写与题目无关的套话\n2. 长度：Part1 只答2-4句短答；Part2 完整小故事（6句左右，含背景/细节/个人感受）；Part3 深度讨论（4-6句，正反两面论证）\n3. 完全模仿指定人设的口吻（口头禅、句式节奏、叙事逻辑），不要写成书面作文，保持真人感\n4. 【强制】必须使用用户下方提供的地道表达中的至少2个，自然融入句子，融入处用 **表达** 包裹标记；可额外用你掌握的表达补充，但至少2处必须是库内提供的\n5. 主体全英文，俚语受控（雅思考官能听懂），禁止搬运影视剧完整剧情\n6. 只输出JSON，不要任何多余文字，格式：\n{"lines":[{"en":"英文句子（含**标记**）","zh":"中文翻译","explain":"这句在雅思作答中的作用（扣题/铺垫/细节/升华等）"}],"notes":[{"phrase":"习语或词伙","meaning":"中文释义"}]}';
  const usr='题目：'+q+'\n题型：'+PART_LABEL[parsed.part]+'（对象：'+parsed.obj.cn+'）\n人设：'+(PERSONA_PROMPTS[genStyle]||PERSONA_PROMPTS.casual)+'\n可用地道表达（来自本产品表达库·美剧台本提炼，必须使用其中至少2个）：\n'+exprs.map(e=>'- '+e.english+'（'+e.chinese+'）').join('\n');
  try{
    const ctrl=new AbortController();
    const timer=setTimeout(function(){ ctrl.abort(); }, 90000);
    const resp=await fetch(endpoint,{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+cfg.key},
      body:JSON.stringify({model:cfg.model, messages:[{role:'system',content:sys},{role:'user',content:usr}], temperature:0.8, stream:false}),
      signal:ctrl.signal
    });
    clearTimeout(timer);
    if(!resp.ok){
      let msg='请求失败';
      if(resp.status===401) msg='API Key 无效或已过期（检查是否复制完整、是否有余额）';
      else if(resp.status===402) msg='账户余额不足，请到 DeepSeek 平台充值';
      else if(resp.status===404 && endpoint.indexOf('/api/chat')!==-1) msg='本地服务未启动或地址不对——请先双击运行 start-scenepick.bat 启动服务';
      else if(resp.status===429) msg='请求过于频繁（限流），稍等几秒再试';
      else if(resp.status>=500) msg='AI 服务暂时不可用，稍后再试';
      box.innerHTML='<div class="gen-error">❌ '+msg+'（HTTP '+resp.status+'）<br><br><button class="q-btn ghost" onclick="openAiSettings()">⚙️ 检查配置</button> <button class="q-btn ghost" onclick="testAiConn()">🔍 测试连接</button> <button class="q-btn ghost" onclick="setAiMode(\'template\');generateAnswer()">🎛️ 改用模板生成</button></div>';
      return;
    }
    const data=await resp.json();
    const content=data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content;
    if(!content) throw new Error('AI 返回空内容');
    const js=content.substring(content.indexOf('{'), content.lastIndexOf('}')+1);
    const out=JSON.parse(js);
    if(!out.lines || !out.lines.length) throw new Error('AI 输出格式不正确');
    renderAIAnswer(q,out,p,tp,parsed,exprs);
  }catch(e){
    let msg=e.message;
    if(e.name==='AbortError') msg='请求超时（90秒），网络或服务较慢，再试一次';
    if(e.name==='TypeError') msg='网络请求失败（无法连接 API）——多数是网络被拦或接口地址填错，点「测试连接」定位';
    box.innerHTML='<div class="gen-error">❌ AI 生成失败：'+msg+'<br><br><button class="q-btn ghost" onclick="testAiConn()">🔍 测试连接</button> <button class="q-btn ghost" onclick="generateAnswer(true)">🔄 重试</button> <button class="q-btn ghost" onclick="setAiMode(\'template\');generateAnswer()">🎛️ 改用模板生成</button></div>';
  }
}

// ---------- 连接诊断：分层定位问题 ----------
async function testAiConn(){
  const cfg=aiCfg();
  const box=document.getElementById('genResult');
  const L=[];
  L.push('<div class="gen-error" style="text-align:left"><b>🔍 连接诊断</b>（对照检查，绿色=通过 红色=问题所在）<br><br>');
  if(!cfg.key){
    L.push('❌ 未配置 API Key —— 点右上「⚙️ 配置 AI」粘贴 Key<br>');
    L.push('</div>');
    box.innerHTML=L.join('');
    return;
  }
  // ① 接口地址格式（本地服务模式 /api/chat 跳过 URL 校验）
  let endpoint=cfg.endpoint||defaultEndpoint();
  if(isLocalServerMode() && endpoint.indexOf('/api/chat')===-1) endpoint='/api/chat';
  if(endpoint.indexOf('/api/chat')===-1){
    try{ new URL(endpoint); L.push('✅ 接口地址格式正确：<code>'+escapeHtml(endpoint)+'</code><br>'); }
    catch(e){
      L.push('❌ 接口地址格式错误：<code>'+escapeHtml(endpoint)+'</code> —— 应形如 https://api.deepseek.com/chat/completions<br>');
      L.push('</div>'); box.innerHTML=L.join(''); return;
    }
  }else{
    L.push('✅ 使用本地服务转发：<code>/api/chat</code>（需先运行 start-scenepick.bat 启动服务）<br>');
  }
  // ② 连接测试（不带 key，服务器应返回 401 = 连上了）
  try{
    const resp=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:cfg.model,messages:[{role:'user',content:'hi'}]})});
    if(resp.status===401) L.push('✅ 已连上 API 服务器（返回 401 属正常，说明地址对、网络通）<br>');
    else if(resp.status===404||resp.status===405) L.push('❌ 接口地址不对（HTTP '+resp.status+'）—— 本地模式请确认 start-scenepick.bat 已运行；直连模式应为 https://api.deepseek.com/chat/completions<br>');
    else L.push('✅ 已连上 API（HTTP '+resp.status+'）<br>');
  }catch(e){
    if(e.name==='TypeError'){
      if(endpoint.indexOf('/api/chat')!==-1){
        L.push('❌ 本地服务连不上 —— 请先双击运行 <b>start-scenepick.bat</b>（黑色窗口保持打开），然后刷新页面重试<br>');
      }else{
        L.push('❌ 浏览器无法连接 API —— 说明：<br>1）当前网络拦截了 api.deepseek.com（换网络/关代理试试）<br>2）或浏览器扩展拦截了请求（关广告拦截插件试试）<br>3）推荐改用本地服务模式：运行 start-scenepick.bat 打开 http://127.0.0.1:8799<br>');
      }
    }else{
      L.push('❌ 连接异常：'+escapeHtml(e.message)+'<br>');
    }
    L.push('</div>'); box.innerHTML=L.join(''); return;
  }
  // ③ Key 有效性（真实最小请求）
  try{
    const resp=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+cfg.key},body:JSON.stringify({model:cfg.model,messages:[{role:'user',content:'hi'}],max_tokens:5})});
    if(resp.ok) L.push('✅ Key 有效！可以正常生成答案<br>');
    else if(resp.status===401) L.push('❌ Key 无效或已过期（HTTP 401）—— 到 platform.deepseek.com 重新复制完整 Key（sk- 开头）<br>');
    else if(resp.status===402) L.push('❌ 账户余额不足（HTTP 402）—— 到 DeepSeek 平台充值<br>');
    else if(resp.status===429) L.push('⚠️ 请求过于频繁（HTTP 429）—— 稍等几秒再试<br>');
    else L.push('⚠️ 服务器返回 HTTP '+resp.status+'<br>');
  }catch(e){
    L.push('❌ Key 验证请求失败：'+escapeHtml(e.message)+'<br>');
  }
  L.push('</div>');
  box.innerHTML=L.join('');
}

function renderAIAnswer(q,out,p,tp,parsed,exprs){
  const box=document.getElementById('genResult');
  const lines=Array.isArray(out.lines)?out.lines:[];
  const notes=Array.isArray(out.notes)?out.notes:[];
  const enHtml=lines.map(function(l){ return renderAIText(l.en, exprs); }).join(' ');
  const zhHtml=lines.map(function(l){ return l.zh||''; }).filter(Boolean).join(' ');
  const lineHtml=lines.map(function(l,i){
    return '<div class="gen-line"><div class="gen-line-no">'+(i+1)+'</div><div class="gen-line-body">'+
      '<div class="gen-line-en">'+renderAIText(l.en, exprs)+'</div>'+
      (l.zh?'<div class="gen-line-zh">'+escapeHtml(l.zh)+'</div>':'')+
      (l.explain?'<div class="gen-line-ex">💡 '+escapeHtml(l.explain)+'</div>':'')+
      '</div></div>';
  }).join('');
  const notesHtml=notes.length?notes.map(function(n){ return '<div class="gen-note"><code>'+escapeHtml(n.phrase)+'</code> <span class="gen-note-zh">('+escapeHtml(n.meaning)+')</span></div>'; }).join(''):'<div class="gen-note" style="color:#8892A0">AI 未单独标注习语，逐句讲解中的金色短语即为融入的地道表达</div>';
  // 统计 AI 实际融入的库内表达数（**标记** 成对出现）
  let usedCount=0;
  lines.forEach(function(l){ var m=(l.en||'').match(/\*\*(.+?)\*\*/g); if(m) usedCount+=m.length; });
  const usedBadge = usedCount>=2
    ? '<div class="gen-used-ok">✅ 已融入 <b>'+usedCount+'</b> 个库内地道表达（要求 ≥2）</div>'
    : '<div class="gen-used-warn">⚠️ AI 本次只融入了 '+usedCount+' 个库内表达（要求 ≥2）——点「🔄 重新生成」让 AI 重写一版<br><button class="q-btn ghost" onclick="generateAnswer(true)">🔄 重新生成</button></div>';
  box.innerHTML='<div class="gen-answer">'+
    '<div class="gen-q-label">📝 你的问题</div>'+
    '<div class="gen-q-text">'+escapeHtml(q)+'</div>'+
    '<div class="gen-style-tag">🤖 AI 生成 ·【'+p.ico+' '+p.name+'】·【'+PART_LABEL[parsed.part]+'】· 话题：'+tp.icon+' '+tp.name+'</div>'+
    usedBadge+
    '<div class="gen-block-label">🗣️ 英文答案 <span class="gen-block-sub">(金色 = 融入的地道表达)</span></div>'+
    '<div class="gen-answer-text">'+enHtml+'</div>'+
    '<div class="gen-block-label">🇨🇳 中文翻译</div>'+
    '<div class="gen-answer-zh">'+zhHtml+'</div>'+
    '<div class="gen-block-label">🔍 逐句讲解</div>'+
    '<div class="gen-lines">'+lineHtml+'</div>'+
    '<div class="gen-exprs-label">📝 地道习语 / 词伙注释</div>'+
    '<div class="gen-notes">'+notesHtml+'</div>'+
    '<div class="gen-exprs-label">🌟 本题用到的库内表达（点击看详解）</div>'+
    '<div class="gen-expr-chips">'+exprs.map(function(e){ return '<button class="gen-chip" onclick="showDetail('+e.id+')">'+e.english+'</button>'; }).join('')+'</div>'+
    '<div class="gen-tip">🤖 AI 答案每次生成都不同，人设与表达库由你指定。点「🔀 换一批表达」让 AI 换一套词伙重写。</div>'+
    '</div>';
}

// 重定义 generateAnswer：AI / 模板 双分支（覆盖原模板版）
function generateAnswer(reGen){
  const q=document.getElementById('genQuestion').value.trim();
  const box=document.getElementById('genResult');
  if(!q && !reGen){
    box.innerHTML='<div class="gen-empty">✍️ 先输入一个雅思口语题目，再选人设点生成～</div>';
    return;
  }
  if(genAiMode==='ai'){ generateAIAnswer(q||'Describe something you like', reGen); return; }
  // ---- 模板模式（题目感知 V2）----
  const parsed=parseQuestion(q||'Describe something you like');
  const exprs=pickGenExprs(parsed.topic, parsed.part==='p2'?3:2);
  const r=buildAnswerV2(parsed,genStyle,exprs);
  const enHtml=r.lines.map(function(l){ return l.en; }).join(' ');
  const zhHtml=r.lines.map(function(l){ return l.zh; }).filter(Boolean).join(' ');
  const lineHtml=r.lines.map(function(l,i){
    return '<div class="gen-line"><div class="gen-line-no">'+(i+1)+'</div><div class="gen-line-body">'+
      '<div class="gen-line-en">'+l.en+'</div>'+
      (l.zh?'<div class="gen-line-zh">'+l.zh+'</div>':'')+
      (l.explain?'<div class="gen-line-ex">💡 '+l.explain+'</div>':'')+
      '</div></div>';
  }).join('');
  box.innerHTML='<div class="gen-answer">'+
    '<div class="gen-q-label">📝 你的问题</div>'+
    '<div class="gen-q-text">'+escapeHtml(q)+'</div>'+
    '<div class="gen-style-tag">【'+r.p.ico+' '+r.p.name+' · '+r.p.src+'】·【'+PART_LABEL[r.part]+'·'+parsed.obj.cn+'】· 话题：'+r.tp.icon+' '+r.tp.name+'</div>'+
    '<div class="gen-block-label">🗣️ 英文答案 <span class="gen-block-sub">(表达高亮 = 本题嵌入的地道用法)</span></div>'+
    '<div class="gen-answer-text">'+enHtml+'</div>'+
    '<div class="gen-block-label">🇨🇳 中文翻译</div>'+
    '<div class="gen-answer-zh">'+zhHtml+'</div>'+
    '<div class="gen-block-label">🔍 逐句讲解</div>'+
    '<div class="gen-lines">'+lineHtml+'</div>'+
    '<div class="gen-exprs-label">📝 地道习语 / 词伙注释</div>'+
    '<div class="gen-notes">'+exprs.map(function(e){ return '<div class="gen-note"><code>'+e.english+'</code> <span class="gen-note-zh">('+e.chinese+')</span></div>'; }).join('')+'</div>'+
    '<div class="gen-exprs-label">🌟 表达出处（点击看详解）</div>'+
    '<div class="gen-expr-chips">'+exprs.map(function(e){ return '<button class="gen-chip" onclick="showDetail('+e.id+')">'+e.english+'</button>'; }).join('')+'</div>'+
    '<div class="gen-tip">💡 黄字为本次嵌入的地道表达，中文翻译逐句对应。点「🔀 换一批表达」用同人设换一套词伙重新生成，答案结构与讲解会同步刷新。</div>'+
    '</div>';
}


// ===================== FILTERS =====================
document.querySelectorAll("#typeFilters .filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll("#typeFilters .filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter=btn.dataset.filter;
    renderLibrary();
  });
});

// ===================== INIT =====================
renderHeaderChips();
renderDash();
renderLearnHome();

