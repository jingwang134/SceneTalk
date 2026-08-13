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
