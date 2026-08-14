// ============================================
// ScenePick 场景拾句 · 表达数据
// 其他电脑加资料：编辑本文件（或把台本提交到仓库后让 AI 处理）
// 新增表达按下面格式在数组末尾追加对象即可
// ============================================
// ===================== TOPIC DIMENSIONS (话题二级分类·维度) =====================
// 每话题下按「场景/功能」划分维度，表达挂到维度下；范例页(TOPIC_PERSPECTIVES)的核心维度与之呼应
const TOPIC_DIMENSIONS = {
  communication: [
    {key:"express", name:"表达与回应"},
    {key:"conflict", name:"冲突与交锋"},
    {key:"discretion", name:"分寸与心机"},
    {key:"connect", name:"拉近与相处"}
  ],
  values: [
    {key:"persist", name:"坚持与放弃"},
    {key:"principles", name:"原则与底线"},
    {key:"integrity", name:"诚信与责任"},
    {key:"mood", name:"情绪与心态"}
  ],
  work: [
    {key:"deal", name:"谈判与成交"},
    {key:"career", name:"机会与晋升"},
    {key:"execution", name:"执行与效率"},
    {key:"pressure", name:"失误与压力"}
  ],
  family: [
    {key:"bond", name:"家人相处"},
    {key:"love", name:"家庭与爱"}
  ],
  education: [
    {key:"learning", name:"学习与成长"},
    {key:"talent", name:"天赋与兴趣"}
  ],
  skills: [
    {key:"mastery", name:"练习与掌握"},
    {key:"prove", name:"表现与证明"}
  ],
  friendship: [
    {key:"trust", name:"信任与陪伴"},
    {key:"romance", name:"心动与情愫"}
  ],
  media: [
    {key:"truth", name:"信息与真相"}
  ],
  health: [
    {key:"body", name:"身体与健康"}
  ]
};

const expressions = [
  // ===== 示范表达（经典美剧） =====
  {
    id:1, type:"phrase", level:"7+", topic:"work", dimension:"deal", english:"pull strings",
    chinese:"暗中牵线，幕后运作",
    source:"Suits（金装律师）", category:"idiom",
    keywords:[
      {word:"pull strings", pos:"phrase", meaning:"幕后操控"},
      {word:"string", pos:"n.", meaning:"线 / 绳子"}
    ],
    usage:"利用人脉或影响力在幕后操控局面，暗含'不走正规途径'的意味。常用于描述有权势的人如何运作。",
    example:"He pulled a few strings to get her the interview.",
    cloze:{text:"He pulled a few ______ to get her the interview.", answer:"strings", hint:"幕后牵线（填一个词）"},
    questions:[
      {q:"What does 'pull strings' suggest about someone's social capital?", a:"It implies the person has influential connections and can bypass normal procedures. They operate behind the scenes rather than through official channels."},
      {q:"Describe a situation where pulling strings might be considered unethical.", a:"If someone pulls strings to get an unqualified person hired over a more deserving candidate, it undermines fairness and meritocracy. The ethical line depends on transparency and whether others are harmed."},
      {q:"How is 'pulling strings' different from 'networking'?", a:"Networking is about building mutually beneficial relationships openly. Pulling strings is more covert — it's leveraging existing power to bypass the system, often for a specific favor."}
    ],
    comparison:{
      topic:"Describe a person who has influence in your community.",
      score5:"My uncle is very powerful. He knows many people. He can help you do things. Everyone goes to him when they have problems.",
      score7:"My uncle is someone who's <span class='hl'>well-connected</span> in our community. He's the kind of person who can <span class='hl'>pull strings behind the scenes</span> — whether it's getting someone a job interview or <span class='hl'>smoothing over a bureaucratic hurdle</span>, he always seems to know the right people to talk to.",
      analysis:"5分用了 powerful / knows many people / help 等基础词，全是简单句堆叠。7分用了 well-connected, pull strings behind the scenes, smoothing over a bureaucratic hurdle 等高级表达，含 whether...or... 让步结构，叙述流畅有层次。",
      tags:["lexical resource","grammatical range","coherence"]
    }
  },
  {
    id:2, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"read between the lines",
    chinese:"听弦外之音，读懂言外之意",
    source:"多部美剧通用", category:"idiom",
    keywords:[
      {word:"read between the lines", pos:"idiom", meaning:"读懂言外之意"},
      {word:"between the lines", pos:"phrase", meaning:"字里行间"}
    ],
    usage:"指不局限于字面意思，通过语气、表情、上下文推断对方真正想表达但没说出口的内容。",
    example:"She didn't say she was unhappy, but reading between the lines, I could tell.",
    cloze:{text:"She didn't say she was unhappy, but ______ between the lines, I could tell.", answer:"reading", hint:"填一个词（-ing 形式）"},
    questions:[
      {q:"What skills does 'reading between the lines' require?", a:"It requires emotional intelligence, contextual awareness, and attention to non-verbal cues like tone, body language, and what's deliberately left unsaid."},
      {q:"When might this ability be important in professional settings?", a:"In negotiations, performance reviews, or client meetings, people often communicate indirectly. Reading between the lines helps you catch underlying concerns, unspoken objections, or hidden opportunities."},
      {q:"Can you give an example from your own experience?", a:"(Open-ended) A good answer would describe a specific conversation, what was said vs. what was meant, and how interpreting the subtext changed your response."}
    ],
    comparison:{
      topic:"Describe a conversation where you had to understand someone's true feelings.",
      score5:"One time my friend said she was fine. But I knew she was not fine. I asked her again. Then she told me she was sad.",
      score7:"A colleague kept insisting she was fine with the new schedule, but <span class='hl'>reading between the lines</span> — the way she <span class='hl'>avoided eye contact</span>, the <span class='hl'>slight hesitation</span> in her voice — I could tell something was bothering her. I <span class='hl'>pulled her aside</span> privately and gave her the space to open up.",
      analysis:"5分句式重复（she was... she was not... she was sad），缺乏细节。7分用了 reading between the lines, avoided eye contact, slight hesitation, pulled her aside 等丰富表达，展现了细腻的观察力和叙述层次。",
      tags:["lexical resource","fluency","narrative detail"]
    }
  },
  {
    id:3, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"cut to the chase",
    chinese:"直奔主题，少废话",
    source:"多部美剧通用", category:"idiom",
    keywords:[
      {word:"cut to the chase", pos:"idiom", meaning:"直奔主题"},
      {word:"the chase", pos:"n.", meaning:"（电影）追逐戏 → 核心部分"}
    ],
    usage:"要求对方跳过铺垫和寒暄，直接说重点。源于早期好莱坞电影中'跳过前戏直接到追逐戏'的说法。",
    example:"We don't have much time, so let's cut to the chase.",
    cloze:{text:"We don't have much time, so let's ______ to the ______.", answer:"cut|chase", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"In what situations is it appropriate to 'cut to the chase'?", a:"In time-sensitive meetings, emergency situations, or when both parties already have context and just need the decision point. It signals efficiency and respect for everyone's time."},
      {q:"When might it be considered rude?", a:"In cultures or relationships that value small talk as relationship-building, cutting to the chase can feel abrupt or dismissive. It can also seem impatient if someone is still gathering their thoughts."},
      {q:"How does cultural context affect this expression's usage?", a:"Low-context cultures (e.g., US, Germany) tend to value directness — 'cutting to the chase' is appreciated. High-context cultures (e.g., Japan, Middle East) often see directness as impolite, preferring indirect communication."}
    ],
    comparison:{
      topic:"Describe a meeting or discussion that was inefficient.",
      score5:"The meeting was very long. People talked about many things. But we did not decide anything. I felt bored.",
      score7:"The meeting <span class='hl'>dragged on</span> for nearly two hours, with people <span class='hl'>going off on tangents</span> left and right. Nobody seemed willing to <span class='hl'>cut to the chase</span> and address the actual issue. By the end, we'd <span class='hl'>circled back</span> to where we started without a single decision made.",
      analysis:"5分用了 very long / many things / bored 等基础词汇。7分用了 dragged on, going off on tangents, cut to the chase, circled back 等地道表达，含 Nobody seemed willing to... 句式，叙述有画面感。",
      tags:["lexical resource","idiomatic language","coherence"]
    }
  },
  {
    id:4, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"on thin ice",
    chinese:"如履薄冰，处境危险",
    source:"Breaking Bad（绝命毒师）", category:"idiom",
    keywords:[
      {word:"on thin ice", pos:"idiom", meaning:"处境危险"},
      {word:"thin ice", pos:"n.", meaning:"薄冰 → 隐喻危险处境"}
    ],
    usage:"形容某人因之前的过失而处于 precarious 的境地，再犯错就会付出代价。常用于警告或描述危险处境。",
    example:"After missing two deadlines, he's on thin ice with the boss.",
    cloze:{text:"After missing two deadlines, he's on ______ ______ with the boss.", answer:"thin|ice", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What kind of situations might put someone 'on thin ice' at work?", a:"Repeatedly missing deadlines, underperforming after warnings, clashing with key stakeholders, or violating company policy. It implies trust has eroded and the margin for error is gone."},
      {q:"How is this idiom different from simply saying 'in trouble'?", a:"'In trouble' is a general state. 'On thin ice' specifically implies a pattern of issues leading to a tipping point — one more misstep and there will be serious consequences. It carries a sense of accumulated risk."},
      {q:"Can you describe a time you felt you were on thin ice?", a:"(Open-ended) A strong answer would describe the specific situation, what led to it, how it felt, and what was done to recover trust."}
    ],
    comparison:{
      topic:"Describe a difficult situation at work or school.",
      score5:"I was late for work three times. My boss was angry. He told me if I am late again I will lose my job. I was very scared.",
      score7:"After showing up late for the third time that month, I knew I was <span class='hl'>on thin ice</span>. My manager didn't yell — he just <span class='hl'>pulled me aside</span> and said, very calmly, that <span class='hl'>one more slip</span> and I'd be looking for a new job. That quiet warning was <span class='hl'>far more unsettling</span> than any shouting would have been.",
      analysis:"5分用了 angry / scared / late 等基础词，句式简单。7分用了 on thin ice, pulled me aside, one more slip, far more unsettling than 等表达，含比较级结构，叙述有张力。",
      tags:["lexical resource","grammatical range","narrative tension"]
    }
  },
  {
    id:5, type:"sentence", level:"7+", topic:"values", dimension:"principles",
    english:"It's not that I don't trust you, it's that I trust no one.",
    chinese:"不是我不信你，是我谁都不信。",
    source:"多部美剧通用", category:"contrast structure",
    keywords:[
      {word:"It's not that... it's that...", pos:"structure", meaning:"不是……而是……"},
      {word:"trust no one", pos:"phrase", meaning:"谁都不信"}
    ],
    usage:"'It's not that A, it's that B' — 先否定一种可能的误解，再强调真正的原因。比直接说原因更有说服力，因为它预判了对方的想法并予以纠正。",
    example:"It's not that the work is hard, it's that I don't have enough time.",
    cloze:{text:"It's ______ ______ I don't trust you, ______ ______ I trust no one.", answer:"not|that|it's|that", hint:"填四个词，用 | 分隔"},
    questions:[
      {q:"Why is this structure more effective than simply stating the reason?", a:"It preempts misunderstanding by acknowledging what someone might assume, then redirects to the real issue. This shows self-awareness and makes the explanation feel more honest and layered."},
      {q:"Can you rephrase 'I don't like it because it's expensive' using this structure?", a:"It's not that I don't like it, it's that I can't justify the price tag. (The structure adds nuance — you're not dismissing it, you're explaining your reasoning.)"},
      {q:"In what IELTS Speaking topics could you use this pattern?", a:"Topics about preferences, dislikes, or decisions: 'It's not that I don't enjoy cooking, it's that I never have time during the week.' It's especially useful in Part 3 when explaining complex opinions."}
    ],
    comparison:{
      topic:"Describe something you don't enjoy doing.",
      score5:"I don't like cleaning. It is boring. It takes much time. I feel tired after cleaning.",
      score7:"<span class='hl'>It's not that</span> I find cleaning particularly difficult — <span class='hl'>it's that</span> it feels <span class='hl'>never-ending</span>. You can spend an entire Saturday <span class='hl'>scrubbing and organizing</span>, only to find the place <span class='hl'>back in chaos</span> by Wednesday. That <span class='hl'>sense of futility</span> is what really gets to me.",
      analysis:"5分用了 boring / tired / takes much time 等简单表达。7分用了 It's not that...it's that... 结构，never-ending, scrubbing and organizing, back in chaos, sense of futility 等高级词汇，逻辑递进到情感升华。",
      tags:["grammatical range","lexical resource","coherence"]
    }
  },
  {
    id:6, type:"sentence", level:"7+", topic:"education", dimension:"learning",
    english:"Were it not for your help, I wouldn't be standing here today.",
    chinese:"若非你的帮助，我今天不会站在这里。",
    source:"多部美剧通用", category:"inverted conditional",
    keywords:[
      {word:"Were it not for", pos:"structure", meaning:"若非 = If it were not for"},
      {word:"standing here today", pos:"phrase", meaning:"站在这里 → 成功走到今天"}
    ],
    usage:"倒装条件句，是 'If it were not for...' 的正式/文学变体。省略 if，将 were 提前。用于表达感激或强调某人的关键作用，语气正式且有感染力。",
    example:"Were it not for the scholarship, she would have dropped out.",
    cloze:{text:"______ ______ ______ for your help, I wouldn't be standing here today.", answer:"Were|it|not", hint:"填三个词，用 | 分隔（注意首字母大写）"},
    questions:[
      {q:"What's the difference between this and 'If you didn't help me'?", a:"The inverted form is more formal, dramatic, and literary. 'If you didn't help me' is casual and could refer to habitual past. 'Were it not for' implies a single pivotal moment that changed everything — it carries emotional weight."},
      {q:"In what contexts is this structure appropriate?", a:"Formal speeches, gratitude letters, reflective essays, and IELTS Speaking Part 2 when describing a turning point. It would sound overly dramatic in casual daily conversation."},
      {q:"Can you create a sentence using this structure about a turning point in your life?", a:"(Open-ended) Example: 'Were it not for my teacher's encouragement in high school, I might have given up on my dreams entirely.' The key is linking it to a specific, significant moment."}
    ],
    comparison:{
      topic:"Describe a person who has had a significant influence on your life.",
      score5:"My teacher helped me a lot. Without her, I cannot go to university. She taught me English. She is very good.",
      score7:"<span class='hl'>Were it not for</span> Ms. Chen, I honestly don't know where I'd be today. She didn't just teach me English — she <span class='hl'>saw something in me</span> that I couldn't see in myself, and she <span class='hl'>pushed me to aim higher</span> than I ever thought possible. That kind of belief <span class='hl'>is contagious</span>.",
      analysis:"5分句式简单，用 helped / cannot go / very good 等基础词。7分用了 Were it not for 倒装结构，saw something in me, pushed me to aim higher, is contagious 等高级表达，情感真挚且有深度。",
      tags:["grammatical range","lexical resource","fluency"]
    }
  },
  {
    id:7, type:"sentence", level:"7+", topic:"media", dimension:"truth",
    english:"The thing about secrets is they have a way of coming out.",
    chinese:"秘密这东西吧，总会泄露的。",
    source:"Gossip Girl（绯闻女孩）", category:"cleft sentence",
    keywords:[
      {word:"The thing about X is...", pos:"structure", meaning:"关于X的一点是……"},
      {word:"have a way of", pos:"phrase", meaning:"总会……（带有必然性）"},
      {word:"come out", pos:"phrasal verb", meaning:"暴露 / 泄露"}
    ],
    usage:"'The thing about X is...' 用来引出对某事物的洞察或评论，语气口语化但有思考深度。'have a way of' 表示某事似乎总会发生，带有不可阻挡的意味。",
    example:"The thing about social media is that everyone's presenting their best self.",
    cloze:{text:"The ______ about secrets ______ they have a way of coming out.", answer:"thing|is", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"Why is this structure useful in IELTS Speaking?", a:"It signals that you're about to share an insight or opinion, which is exactly what examiners look for in Part 3. It sounds natural and thoughtful, not rehearsed."},
      {q:"How does it differ from simply saying 'Secrets always come out'?", a:"The original is more nuanced. 'The thing about...' frames it as an observation rather than a blunt statement. 'Have a way of' implies inevitability without being absolute, which feels more sophisticated."},
      {q:"Create your own sentence using this structure about a habit or trend.", a:"(Open-ended) Example: 'The thing about remote work is that it blurs the line between personal and professional life.' The structure works well for any topic where you want to offer a perceptive take."}
    ],
    comparison:{
      topic:"Describe a social phenomenon you find interesting.",
      score5:"Social media is very popular. Many people use it every day. They post photos and videos. But sometimes it is not real.",
      score7:"<span class='hl'>The thing about</span> social media <span class='hl'>is</span> that it's essentially a <span class='hl'>highlight reel</span>. People don't post their failures or their bad hair days — they <span class='hl'>curate</span>. And the danger is that we start comparing our <span class='hl'>messy, unedited lives</span> to everyone else's <span class='hl'>polished, filtered versions</span>.",
      analysis:"5分用了 popular / many people / post / not real 等基础词。7分用了 The thing about...is... 结构，highlight reel, curate, polished, filtered versions 等高级表达，含 And the danger is that... 递进逻辑。",
      tags:["grammatical range","lexical resource","coherence"]
    }
  },
  {
    id:8, type:"sentence", level:"7+", topic:"values", dimension:"principles",
    english:"At the end of the day, what matters is whether you can look yourself in the mirror.",
    chinese:"说到底，重要的是你能否问心无愧。",
    source:"多部美剧通用", category:"discourse marker + cleft",
    keywords:[
      {word:"at the end of the day", pos:"discourse marker", meaning:"说到底 / 归根结底"},
      {word:"what matters is...", pos:"cleft sentence", meaning:"重要的是……"},
      {word:"look yourself in the mirror", pos:"idiom", meaning:"问心无愧"}
    ],
    usage:"'At the end of the day' 是高频话语标记，用于总结或引出核心观点。'What matters is...' 是分裂句，强调最重要的因素。组合使用时语气坚定，适合放在论述结尾。",
    example:"At the end of the day, what matters is how you treat people.",
    cloze:{text:"At the ______ of the ______, what ______ is whether you can look yourself in the mirror.", answer:"end|day|matters", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What function does 'at the end of the day' serve in discourse?", a:"It signals that you're moving from details to the big picture — a concluding or summarizing marker. It tells the listener 'after considering everything, here's what I conclude.'"},
      {q:"How does 'what matters is' differ from 'the important thing is'?", a:"They're similar, but 'what matters is' is slightly more emphatic and natural in speech. 'The important thing is' can sound more formal/written. 'What matters' carries a sense of personal judgment and values."},
      {q:"Use this structure to talk about a value you hold.", a:"(Open-ended) Example: 'At the end of the day, what matters is not how much you earn, but whether you're making a positive difference in someone's life.' The structure works well for values-based topics."}
    ],
    comparison:{
      topic:"Describe a value or principle that is important to you.",
      score5:"I think honesty is very important. We should not lie. If everyone is honest, the world is better. I always tell the truth.",
      score7:"<span class='hl'>At the end of the day, what matters</span> to me is integrity — not the kind that <span class='hl'>makes headlines</span>, but <span class='hl'>the quiet kind</span>. The kind where you do the right thing <span class='hl'>even when no one's watching</span>, even when it <span class='hl'>costs you something</span>. Because if you can't look yourself in the mirror, what do you really have?",
      analysis:"5分用了 honesty / should not lie / tell the truth 等基础表达，重复简单。7分用了 At the end of the day + what matters is 结构，integrity, the quiet kind, even when no one's watching 等高级表达，反问句结尾有力量感。",
      tags:["grammatical range","lexical resource","coherence","rhetorical effect"]
    }
  },
  {
    id:9, type:"paragraph", level:"7+", topic:"work", dimension:"deal",
    english:"Look, I'm not here to play games. You and I both know what this deal is worth. The question is whether you're willing to walk away from the table with nothing, or whether you'd rather meet me halfway. I've put my cards on the table — ball's in your court.",
    chinese:"听好了，我不是来跟你玩花招的。你我都清楚这笔买卖值多少。问题是你要不要空手离开谈判桌，还是各退一步。我已经摊牌了——球在你那边。",
    source:"Suits（金装律师）", category:"negotiation discourse",
    keywords:[
      {word:"play games", pos:"phrase", meaning:"玩花招 / 搞小动作"},
      {word:"walk away from the table", pos:"phrase", meaning:"退出谈判"},
      {word:"meet me halfway", pos:"phrase", meaning:"各退一步 / 妥协"},
      {word:"put my cards on the table", pos:"idiom", meaning:"摊牌 / 坦诚相待"},
      {word:"ball's in your court", pos:"idiom", meaning:"该你决定了"}
    ],
    usage:"谈判场景的经典话术。用短句推进节奏，用 idioms 增加语气力度。'Look' 开头建立掌控感，'ball's in your court' 收尾把决定权（和压力）交给对方。",
    example:"(见原文)",
    cloze:{text:"Look, I'm not here to ______ ______. The question is whether you're willing to ______ ______ from the table with nothing, or whether you'd rather ______ me ______. I've ______ my ______ on the table — ball's in your ______.", answer:"play|games|walk|away|meet|halfway|put|cards|court", hint:"填9个词/短语，用 | 分隔"},
    questions:[
      {q:"What negotiation strategies does this paragraph demonstrate?", a:"It uses anchoring (stating the value upfront), framing (presenting a binary choice), and pressure transfer (ending with 'ball's in your court'). The speaker controls the narrative while appearing transparent."},
      {q:"How do the idioms contribute to the speaker's tone?", a:"Each idiom serves a function: 'play games' sets boundaries, 'walk away' establishes a BATNA, 'meet halfway' offers a face-saving exit, 'cards on the table' signals transparency, and 'ball's in your court' shifts pressure. Together they create authority without aggression."},
      {q:"Can you identify the sentence structure pattern used here?", a:"Short declarative sentences for authority → a 'whether...or...' structure to frame choices → a dash for dramatic pause → a punchy closing idiom. This rhythm creates momentum and control."}
    ],
    comparison:{
      topic:"Describe a negotiation you were involved in.",
      score5:"I wanted to buy a car. The price was too high. I told the seller I cannot pay so much. He said he can give me a small discount. I agreed and bought the car.",
      score7:"I <span class='hl'>wasn't there to play games</span> — I'd done my research and knew exactly what the car was worth. When the seller <span class='hl'>started lowballing</span>, I made it clear I was ready to <span class='hl'>walk away from the table</span>. That's when he <span class='hl'>met me halfway</span>. I <span class='hl'>put my cards on the table</span> with my best offer, and <span class='hl'>the ball was in his court</span>. He took the deal.",
      analysis:"5分用了 wanted / too high / cannot pay / agreed 等基础词，叙述平铺直叙。7分几乎用上了原文全部5个谈判 idioms，含 wasn't there to / started lowballing / ready to 等结构，叙述有策略感和画面感。",
      tags:["lexical resource","idiomatic language","narrative structure","coherence"]
    }
  },
  {
    id:10, type:"paragraph", level:"7+", topic:"friendship", dimension:"trust",
    english:"We've been through a lot together — the late-night conversations, the ridiculous arguments, the moments when we didn't speak for weeks and then picked up right where we left off. That's the thing about real friendship: it doesn't require constant maintenance. It just requires showing up when it counts.",
    chinese:"我们一起经历了太多——深夜的长谈，荒唐的争吵，几周不说话然后又像什么都没发生过一样继续。真正的友谊就是这样：它不需要时刻维系，只需要在关键时刻出现。",
    source:"Friends（老友记）", category:"reflective discourse",
    keywords:[
      {word:"been through a lot", pos:"phrase", meaning:"一起经历了很多"},
      {word:"pick up right where we left off", pos:"phrase", meaning:"从上次中断的地方继续"},
      {word:"constant maintenance", pos:"phrase", meaning:"持续维护 / 时刻经营"},
      {word:"show up when it counts", pos:"phrase", meaning:"在关键时刻出现"}
    ],
    usage:"用排比列举共同经历（深夜谈话→荒唐争吵→冷战又和好）营造真实感，然后用 'That's the thing about...' 引出洞察，最后用对比结构收尾。情感真挚，节奏自然。",
    example:"(见原文)",
    cloze:{text:"We've ______ ______ a lot together — the moments when we didn't speak for weeks and then ______ ______ right where we ______ ______. That's the thing about real friendship: it doesn't require ______ ______. It just requires ______ ______ when it counts.", answer:"been|through|picked|up|left|off|constant|maintenance|showing|up", hint:"填10个词，用 | 分隔"},
    questions:[
      {q:"How does the author use listing (排比) to build emotional resonance?", a:"The three-part list — late-night conversations, ridiculous arguments, weeks of silence — moves from warm to tense to reconciled, mirroring the real rhythm of friendship. It makes the abstract concept of 'friendship' feel lived-in and specific."},
      {q:"What's the effect of 'picked up right where we left off'?", a:"It captures the essence of deep friendship: the ability to resume without awkwardness after a gap. The phrase 'right where' emphasizes seamlessness — as if no time has passed. It's more evocative than saying 'we became friends again.'"},
      {q:"How could you adapt this paragraph structure for an IELTS Part 2 answer about friendship?", a:"Use the same pattern: (1) list specific shared experiences, (2) extract an insight with 'That's the thing about...', (3) end with a contrast that crystallizes the core value. This structure shows both storytelling ability and reflective depth."}
    ],
    comparison:{
      topic:"Describe a friendship that is important to you.",
      score5:"My best friend is Tom. We met in school. We play basketball together. He is very funny. We are good friends for many years.",
      score7:"Tom and I <span class='hl'>have been through a lot together</span> — the <span class='hl'>late-night conversations</span> after bad breakups, the <span class='hl'>ridiculous arguments</span> over nothing, the stretches where we didn't speak for weeks and then <span class='hl'>picked up right where we left off</span>. That's the thing about our friendship: it doesn't need <span class='hl'>constant maintenance</span>. We just <span class='hl'>show up when it counts</span>.",
      analysis:"5分用了 met / play / funny / good friends 等基础词，缺少具体细节。7分直接化用了原文的排比结构和全部4个关键短语，叙述有画面感和情感深度，展示了'把美剧表达内化为自己的语言'的能力。",
      tags:["lexical resource","discourse structure","narrative detail","coherence"]
    }
  },
  {
    id:11, type:"paragraph", level:"7+", topic:"skills", dimension:"prove",
    english:"People underestimate me. They see the jokes, the pranks, the goofing off, and they think that's all there is. But here's what they don't get: sometimes the person who seems like they're not trying is the one who's paying the most attention. I may not play by the rules, but I get results.",
    chinese:"人们低估了我。他们看到的是玩笑、恶作剧、不务正业，就以为这就是全部。但他们不明白的是：有时候那个看起来最不上心的人，恰恰是最专注的那个。我或许不按常理出牌，但我能出成绩。",
    source:"The Office（办公室）", category:"self-assertion discourse",
    keywords:[
      {word:"underestimate", pos:"v.", meaning:"低估"},
      {word:"goofing off", pos:"phrasal verb", meaning:"不务正业 / 混日子"},
      {word:"here's what they don't get", pos:"phrase", meaning:"但他们不明白的是"},
      {word:"play by the rules", pos:"phrase", meaning:"按规矩来"},
      {word:"get results", pos:"phrase", meaning:"出成绩 / 拿到结果"}
    ],
    usage:"先承认别人看到的表面现象（用三连排比：jokes, pranks, goofing off），然后用 'But here's what they don't get' 制造转折，最后用 'I may not...but I...' 让步结构收尾，形成'被低估→揭示真相→亮出底牌'的完整叙事弧线。",
    example:"(见原文)",
    cloze:{text:"People ______ me. They see the jokes, the pranks, the ______ ______, and they think that's all there is. But here's what they don't get: sometimes the person who seems like they're not trying is the one who's paying the most attention. I may not ______ ______ ______ ______, but I ______ ______.", answer:"underestimate|goofing|off|play|by|the|rules|get|results", hint:"填9个词，用 | 分隔"},
    questions:[
      {q:"How does the paragraph create a 'twist' effect?", a:"It starts by agreeing with the negative perception (jokes, pranks, goofing off), which lowers expectations. Then 'But here's what they don't get' flips the narrative — the supposed weakness is actually a strength. This creates a satisfying 'aha' moment."},
      {q:"What rhetorical function does 'I may not...but I...' serve?", a:"It's a concessive structure that acknowledges a weakness while emphasizing a more important strength. By conceding 'I don't play by the rules,' the speaker appears honest, which makes 'but I get results' more credible and impactful."},
      {q:"How could you use this pattern to talk about an unconventional skill you have?", a:"(Open-ended) Pattern: 'People see [surface behavior] and think that's all there is. But here's what they don't get: [hidden strength]. I may not [conventional approach], but I [better outcome].' This works well for topics about creativity, problem-solving, or personal qualities."}
    ],
    comparison:{
      topic:"Describe a skill you have that others might not expect.",
      score5:"I am good at cooking. Many people don't know this. I cook for my family every weekend. They like my food very much. I feel happy when I cook.",
      score7:"People <span class='hl'>tend to underestimate</span> my cooking because they only see me <span class='hl'>goofing off</span> in the kitchen, experimenting with weird combinations. But <span class='hl'>here's what they don't get</span>: sometimes the person who <span class='hl'>seems like they're not trying</span> is the one who's <span class='hl'>paying the most attention</span> to flavor. I may not <span class='hl'>play by the rules</span>, but I <span class='hl'>get results</span> — just ask anyone who's tried my five-spice chocolate lava cake.",
      analysis:"5分用了 good at / cook / like / happy 等基础词，缺乏个性。7分完整化用了原文的叙事弧线（被低估→转折→让步收尾），并加入 five-spice chocolate lava cake 具体细节，既展示了表达能力又保持了个人特色。",
      tags:["lexical resource","discourse structure","rhetorical effect","personalization"]
    }
  },
  {
    id:12, type:"paragraph", level:"7+", topic:"family", dimension:"love",
    english:"We're not a perfect family — far from it. We fight, we judge, we say things we don't mean. But at the end of the day, when push comes to shove, we show up for each other. That's what family means. It's not about being flawless; it's about being there, flaws and all.",
    chinese:"我们家不算完美——差远了。我们吵架、互相评判、说违心的话。但说到底，到了关键时刻，我们总是在彼此身边。家人就是这样的。不是要做到完美无缺，而是要陪伴在侧，连同缺点一起。",
    source:"Modern Family（摩登家庭）", category:"reflective discourse",
    keywords:[
      {word:"far from it", pos:"phrase", meaning:"差远了 / 远非如此"},
      {word:"when push comes to shove", pos:"idiom", meaning:"到了关键时刻"},
      {word:"show up for each other", pos:"phrase", meaning:"为彼此出现 / 互相撑场"},
      {word:"flaws and all", pos:"phrase", meaning:"连同缺点一起 / 接受全部"}
    ],
    usage:"先用 'far from it' 诚实承认不完美，然后用三连动词（fight, judge, say）列举冲突，'But at the end of the day' 转折，'when push comes to shove' 强调关键时刻。结尾用 'not about... it's about...' 对比结构 + 'flaws and all' 收束，点睛之笔。",
    example:"(见原文)",
    cloze:{text:"We're not a perfect family — ______ ______ ______. We fight, we judge, we say things we don't mean. But at the end of the day, when ______ ______ ______ ______, we ______ ______ for each other. It's not about being flawless; it's about being there, ______ ______ ______.", answer:"far|from|it|push|comes|to|shove|show|up|flaws|and|all", hint:"填12个词，用 | 分隔"},
    questions:[
      {q:"How does the paragraph balance honesty about flaws with a positive message?", a:"It leads with brutal honesty ('far from it,' listing fights and judgment), which builds credibility. The 'But' pivot then carries more weight because the speaker has already acknowledged the negatives. The ending reframes 'flaws' as part of the package, not a contradiction."},
      {q:"What does 'when push comes to shove' add that 'when it matters' doesn't?", a:"'When it matters' is generic. 'When push comes to shove' implies escalation — pressure building to a breaking point where true character is revealed. It's more vivid and carries the weight of a tested relationship."},
      {q:"How does 'flaws and all' function as a closing phrase?", a:"It's a colloquial idiom meaning 'accepting everything, including imperfections.' As a closing, it echoes 'far from it' at the beginning, creating a circular structure. It leaves the listener with a warm, grounded image — not idealized, but real."}
    ],
    comparison:{
      topic:"Describe your family and what makes it special.",
      score5:"My family is very happy. My father and mother love me. We eat dinner together every day. Sometimes we fight but we love each other. My family is the best.",
      score7:"We're <span class='hl'>not a perfect family — far from it</span>. We fight, we judge, we <span class='hl'>say things we don't mean</span>. But <span class='hl'>at the end of the day, when push comes to shove</span>, we <span class='hl'>show up for each other</span>. That's what family means to me. It's not about being <span class='hl'>flawless</span>; it's about being there, <span class='hl'>flaws and all</span>.",
      analysis:"5分用了 happy / love / eat together / the best 等陈词滥调，缺少深度。7分完整化用了原文结构和全部4个关键短语，先抑后扬，用 flaws and all 收尾，既真实又温暖，展示了高级叙述能力。",
      tags:["lexical resource","discourse structure","rhetorical effect","coherence"]
    }
  },
  // ===== 摩登家庭 S01E01 实拍提取 =====
  {
    id:13, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"take it down a notch",
    chinese:"收敛点，悠着点儿，降降调",
    source:"摩登家庭 S01E01", category:"idiom",
    keywords:[
      {word:"take it down a notch", pos:"idiom", meaning:"收敛点 / 降一档"},
      {word:"a notch", pos:"n.", meaning:"一档 / 一格（程度）"}
    ],
    usage:"让对方降低音量、情绪或行为强度。notch 本义'凹口/档位'，口语中表示'一档的程度'。比 calm down 更具体——不是让你冷静，而是把火气降一档。",
    example:"You're being way too loud — take it down a notch, will you?",
    cloze:{text:"You're being way too loud — take it down a ______, will you?", answer:"notch", hint:"档位（填一个词）"},
    questions:[
      {q:"When would you say 'take it down a notch' to someone?", a:"When someone's volume, excitement, or intensity is excessive. It's more specific than 'calm down' because it targets the level of intensity rather than the emotion itself."},
      {q:"How does 'a notch' contribute to the meaning?", a:"A notch is a small adjustment — like turning down a dial by one setting. It implies the person doesn't need to stop entirely, just dial back a little. This makes the request gentler and more practical."},
      {q:"How could you use this in a workplace context?", a:"If a colleague is getting heated in a meeting: 'Let's take it down a notch and look at the data objectively.' It redirects the discussion without directly criticizing them."}
    ],
    comparison:{
      topic:"Describe a situation where you had to calm someone down.",
      score5:"My friend was very angry. She talked very loud. I told her please do not be angry. After some time she was quiet.",
      score7:"My friend was <span class='hl'>getting increasingly worked up</span>, her voice rising with every sentence. Rather than telling her to calm down — which never works — I gently said, 'Hey, let's <span class='hl'>take it down a notch</span>.' It's a lighter, less <span class='hl'>confrontational</span> way of asking someone to <span class='hl'>dial back</span> the intensity, and to my surprise, it actually worked.",
      analysis:"5分用 angry / talk loud / do not be angry 等基础表达，直接命令式。7分用 worked up, take it down a notch, confrontational, dial back 等高级表达，还解释了为什么选这个说法（更温和不冲突），体现表达选择的深度。",
      tags:["lexical resource","nuance","fluency"]
    }
  },
  {
    id:14, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"tell someone off",
    chinese:"数落某人，狠狠责备",
    source:"摩登家庭 S01E01", category:"phrasal verb",
    keywords:[
      {word:"tell someone off", pos:"phrasal verb", meaning:"当面数落 / 斥责"},
      {word:"off", pos:"adv.", meaning:"（表离开）→ 赶走/呵斥"}
    ],
    usage:"因长期不满而狠狠责备某人，通常是积怨已久的当面爆发。比 criticize（正式批评）更口语、更情绪化。Jay 在球场想怼那个傲慢的妈妈：'I've wanted to tell her off for the last six weeks.'",
    example:"After months of swallowing her boss's criticism, she finally told him off and quit.",
    cloze:{text:"After months of swallowing her boss's criticism, she finally ______ him ______ and quit.", answer:"told|off", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What's the difference between 'tell someone off' and 'criticize someone'?", a:"Criticize is a formal, neutral assessment. 'Tell someone off' is colloquial and emotional — it's an angry, face-to-face dressing-down, often after pent-up frustration. It implies confrontation, not feedback."},
      {q:"In what situations would you tell someone off?", a:"When someone repeatedly oversteps boundaries, takes credit unfairly, or insults you — and you've reached your limit. It's a release of accumulated frustration."},
      {q:"How could you use it in an IELTS answer about conflict?", a:"'I finally told him off for always taking credit for my work.' — it adds emotional authenticity and colloquial fluency to a conflict narrative."}
    ],
    comparison:{
      topic:"Describe a time you had a conflict with someone.",
      score5:"My classmate always copied my homework. I was angry. One day I said stop it. He was surprised. Then we did not talk for some days.",
      score7:"My classmate had been taking credit for my work for weeks, and I'd been <span class='hl'>swallowing it to keep the peace</span>. Finally, one afternoon, I <span class='hl'>told him off</span> — calmly but firmly — and <span class='hl'>listed every single instance</span>. He was genuinely <span class='hl'>taken aback</span>, and honestly, I'd never felt more relieved.",
      analysis:"5分句式简单、细节少。7分用 swallowing it to keep the peace, told him off, taken aback 等高级表达，补充了前因后果和情感细节，叙事完整有张力。",
      tags:["lexical resource","narrative detail","fluency"]
    }
  },
  {
    id:15, type:"phrase", level:"6.5+", topic:"values", dimension:"integrity", english:"follow through",
    chinese:"说到做到，贯彻到底",
    source:"摩登家庭 S01E01", category:"phrasal verb",
    keywords:[
      {word:"follow through", pos:"phrasal verb", meaning:"执行到底 / 兑现承诺"},
      {word:"follow through on", pos:"collocation", meaning:"对…坚持到底"}
    ],
    usage:"履行承诺、把开始的事做完，强调'行动配得上承诺'。剧中 Phil 跟 Haley 说好的家规：'And now you have to follow through.' 职场中 follow through on a promise = 兑现承诺，是可靠性的体现。",
    example:"She promised to mentor me, and she actually followed through.",
    cloze:{text:"She promised to mentor me, and she actually ______ ______.", answer:"followed|through", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"Why is 'follow through' valued in professional settings?", a:"It's the bridge between intention and outcome. People who follow through build trust and reputation — they're seen as reliable, which is a scarce and highly valued trait."},
      {q:"How does 'follow through' differ from 'finish'?", a:"Finish simply means completing a task. Follow through implies completing something you promised or started in front of others — it carries a moral dimension of keeping your word."},
      {q:"How could you use it in an IELTS answer about trust?", a:"'What I admire most is that she always follows through on her promises — small or big.' It works well for describing role models or trustworthy people."}
    ],
    comparison:{
      topic:"Describe a person you trust and why.",
      score5:"I trust my brother. Because he always says yes to me. He helps me. He never lies. He is a good person.",
      score7:"What makes my brother trustworthy isn't what he says — it's that he always <span class='hl'>follows through</span>. Whether it's a small favor or a big commitment, he <span class='hl'>delivers on</span> his promises. In an age of empty words, that kind of reliability is <span class='hl'>hard to come by</span>.",
      analysis:"5分用 says yes / helps / never lies 等基础表达，逻辑简单。7分用 follows through, delivers on, hard to come by 等高级表达，并用'不是说了什么，而是做了什么'的对比结构提升论述深度。",
      tags:["lexical resource","grammatical range","coherence"]
    }
  },
  {
    id:16, type:"sentence", level:"7+", topic:"family", dimension:"love",
    english:"This baby would have grown up in a crowded orphanage if it wasn't for us.",
    chinese:"这个宝宝要不是因为我们，就会在人满为患的孤儿院里长大。",
    source:"摩登家庭 S01E01", category:"virtual conditional",
    keywords:[
      {word:"would have grown up", pos:"structure", meaning:"本会长大（虚拟）"},
      {word:"if it wasn't for", pos:"phrase", meaning:"要不是因为…"}
    ],
    usage:"'would have + 过去分词' 对过去事实做虚拟推测；'if it wasn't for + 名词' = 要不是因为某人/某事。两者结合，强调某人/某事改写了过去的结果，比 thanks to 更有画面感和情感分量。",
    example:"She would have dropped out of school if it wasn't for her grandmother's support.",
    cloze:{text:"She ______ ______ ______ out of school if it ______ for her grandmother's support.", answer:"would|have|dropped|wasn't", hint:"填四个词，用 | 分隔（含 was not 缩写）"},
    questions:[
      {q:"What does the 'would have done' structure express?", a:"It expresses a hypothetical about the past — imagining what would have happened if circumstances had been different. The reality didn't happen, but the possibility is vividly evoked."},
      {q:"Why is 'if it wasn't for' more emphatic than 'because of'?", a:"It constructs a counterfactual: it forces the listener to imagine the negative alternative timeline. That mental contrast makes gratitude or importance land much harder."},
      {q:"When could you use this in IELTS?", a:"Describing a turning point: 'I would have given up on my dreams if it wasn't for my mentor's belief in me.' It's excellent for Part 2 'influential person' answers."}
    ],
    comparison:{
      topic:"Describe a decision that changed your life.",
      score5:"I wanted to study abroad. My parents did not have money. My aunt gave us money. I can go to study. I am very lucky.",
      score7:"I <span class='hl'>would have had to give up</span> my dream of studying abroad <span class='hl'>if it wasn't for</span> my aunt. She quietly paid my first year's tuition without ever expecting anything back. That single act of generosity <span class='hl'>set the entire course of my life</span>.",
      analysis:"5分用 wanted / did not have money / gave money 等基础词，语法简单（I can go）。7分用 would have had to give up + if it wasn't for 虚拟结构，set the entire course of my life 等高级表达，情感真挚。",
      tags:["grammatical range","lexical resource","coherence"]
    }
  },
  {
    id:17, type:"sentence", level:"7+", topic:"family", dimension:"love",
    english:"Something that's supposed to be nothing but joyful suddenly turns into this huge fight.",
    chinese:"本该是纯粹的喜事，却突然变成一场大争吵。",
    source:"摩登家庭 S01E01", category:"contrast structure",
    keywords:[
      {word:"supposed to be", pos:"structure", meaning:"本应 / 按理说"},
      {word:"nothing but", pos:"phrase", meaning:"只不过 / 只有"},
      {word:"turn into", pos:"phrasal verb", meaning:"变成"}
    ],
    usage:"'supposed to be nothing but + adj' 表达'期望与现实的反差'——nothing but 强调'纯粹的、仅仅'，把预期压到最低，从而放大事与愿违的戏剧性。常用于吐槽或反思。",
    example:"What was supposed to be nothing but a quick meeting turned into a four-hour debate.",
    cloze:{text:"What was ______ ______ be ______ ______ a quick meeting turned into a four-hour debate.", answer:"supposed|to|nothing|but", hint:"填四个词，用 | 分隔"},
    questions:[
      {q:"What effect does 'nothing but' create in this sentence?", a:"It strips the expectation down to the bare minimum — 'only joyful, nothing else.' By making the expectation so modest, the contrast with the fight becomes sharper and more ironic."},
      {q:"How can you use this structure to express things going wrong?", a:"Pattern: 'What was supposed to be nothing but X turned into Y.' Example: 'What was supposed to be nothing but a casual dinner turned into a full family argument.'"},
      {q:"Why is this structure good for IELTS narratives?", a:"It builds dramatic contrast concisely, showing both expectation and reality — exactly what examiners want in Part 2 stories about events that went wrong."}
    ],
    comparison:{
      topic:"Describe an event that didn't go as expected.",
      score5:"I planned a picnic with my friends. It was sunny in the morning. But in the afternoon it rained. We were all wet. We went home.",
      score7:"What was <span class='hl'>supposed to be nothing but</span> a relaxing picnic quickly <span class='hl'>turned into</span> a full-scale scramble — the sky opened up, and within minutes we were <span class='hl'>soaked to the bone</span>, grabbing bags and <span class='hl'>sprinting for shelter</span>. Looking back, it was a disaster in hindsight but a memory we still laugh about.",
      analysis:"5分平铺直叙，句子短、词汇基础。7分用 supposed to be nothing but / turned into / soaked to the bone 等高级表达，结尾有反思和幽默，层次丰富。",
      tags:["lexical resource","grammatical range","coherence"]
    }
  },
  {
    id:18, type:"sentence", level:"6.5+", topic:"communication", dimension:"conflict",
    english:"What the hell is that supposed to mean?",
    chinese:"你这话到底是什么意思？",
    source:"摩登家庭 S01E01", category:"question pattern",
    keywords:[
      {word:"What is that supposed to mean?", pos:"question", meaning:"你什么意思？"},
      {word:"the hell", pos:"emphatic", meaning:"到底 / 什么鬼（加强语气）"}
    ],
    usage:"在对方话里有话、含沙射影时质问其真实意图。比 What do you mean? 更带情绪——暗示'你在影射什么'。加 the hell 加强不满语气，正式场合慎用。",
    example:"You said I 'could try harder.' What's that supposed to mean?",
    cloze:{text:"You said I 'could try harder.' What's that ______ to ______?", answer:"supposed|mean", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"When is it appropriate to use this expression?", a:"When someone's words carry hidden implications — a veiled insult, a passive-aggressive remark, or a double meaning. It demands they state their real meaning directly. It's strong language, so avoid in formal settings."},
      {q:"How does it differ from 'What do you mean?'", a:"'What do you mean?' is a neutral request for clarification. 'What's that supposed to mean?' adds suspicion — it signals you've noticed the hidden layer and are calling it out."},
      {q:"Can you use it in IELTS Speaking?", a:"In Part 3 debates, a softened version works: 'What exactly is that supposed to mean?' keeps the directness while staying polite. It shows you can push back conversationally."}
    ],
    comparison:{
      topic:"Describe a time you misunderstood someone.",
      score5:"My friend said my new hair is very special. I did not know what she means. I asked her. She said she likes it. I was happy.",
      score7:"A colleague remarked that my presentation was 'certainly memorable,' and something about the way she said it <span class='hl'>felt off</span>. So I asked directly, '<span class='hl'>What's that supposed to mean?</span>' — it turned out she meant the charts were <span class='hl'>unforgettable for all the wrong reasons</span>. The question may sound <span class='hl'>confrontational</span>, but sometimes directness <span class='hl'>saves you days of overthinking</span>.",
      analysis:"5分句式简单、逻辑平淡。7分用 What's that supposed to mean? / felt off / confrontational / overthinking 等高级表达，且对使用该句式的利弊做了反思，展现批判性思维。",
      tags:["lexical resource","fluency","critical thinking"]
    }
  },
  {
    id:19, type:"paragraph", level:"7+", topic:"skills", dimension:"prove",
    english:"You just stare down at 'em, let the eyes do the work. Your mouth might be saying, 'Hey, we cool,' but your eyes are like, 'No, we not.' 'Nice to meet you.' 'No, it's not.'",
    chinese:"你就死盯着他们，让眼神替你干活。你嘴上可以说'咱们没问题'，但你的眼神在说'才怪'。'很高兴见到你。'——'才怪。'",
    source:"摩登家庭 S01E01", category:"non-verbal communication",
    keywords:[
      {word:"stare down", pos:"phrasal verb", meaning:"逼视 / 瞪视"},
      {word:"let the eyes do the work", pos:"phrase", meaning:"让眼神替你说话"},
      {word:"we cool", pos:"slang", meaning:"咱们没事（口语）"}
    ],
    usage:"展示'非语言沟通'的力量：言行反差制造震慑力。句式上用了 'A might say X, but Y' 的对比 + 两次'台词对白'式短句（'Nice to meet you.' 'No, it's not.'），节奏像戏剧对白，生动有趣。",
    example:"(见原文)",
    cloze:{text:"You just ______ ______ at 'em, let the ______ do the work. Your mouth might be saying, 'Hey, we cool,' but your eyes are like, 'No, we not.'", answer:"stare|down|eyes", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What communication strategy does this paragraph teach?", a:"Non-verbal communication: when words and body language contradict, people believe the body language. Staring someone down projects confidence and control without a single aggressive word."},
      {q:"How does the dialogue-style ending ('Nice to meet you.' 'No, it's not.') strengthen the message?", a:"It dramatizes the abstract idea into a concrete scene. The back-and-forth format — polite words, hostile subtext — makes the lesson instantly vivid and memorable, and adds humor."},
      {q:"How could you adapt this structure for IELTS Part 2?", a:"Describe a skill using the pattern: state the skill, show it with a concrete dialogue/example, then summarize the effect. E.g., 'Your mouth might be saying one thing, but your tone says another — that's how people actually read you.'"}
    ],
    comparison:{
      topic:"Describe a communication skill that is important to you.",
      score5:"I think we should look at people when we talk. If you look at them, they know you are serious. It is very important in a meeting.",
      score7:"One skill I've picked up is <span class='hl'>letting the eyes do the work</span> — I <span class='hl'>stare down</span> politely but steadily when I need to <span class='hl'>hold my ground</span>. Your mouth might be saying, 'Hey, we're cool,' but your eyes can say, 'No, we're not.' It's amazing how much <span class='hl'>non-verbal communication</span> can settle a situation without a single word.",
      analysis:"5分用 look at people / you are serious 等基础表达，缺乏技巧阐述。7分直接化用了原文的'眼神策略'和对比对白结构，加上 non-verbal communication 等学术词汇，既生动又有深度。",
      tags:["lexical resource","discourse structure","rhetorical effect"]
    }
  },
  {
    id:20, type:"paragraph", level:"7+", topic:"family", dimension:"love",
    english:"I mean, it's not like I wrote the book on fatherhood. Been trying all my life to get it right. I'm still screwing up.",
    chinese:"我又不是什么模范父亲。一辈子都在努力做个好爸爸，可我还是在搞砸。",
    source:"摩登家庭 S01E01", category:"self-deprecating discourse",
    keywords:[
      {word:"wrote the book on", pos:"idiom", meaning:"是…方面的权威"},
      {word:"get it right", pos:"phrase", meaning:"做对 / 做好"},
      {word:"screw up", pos:"phrasal verb", meaning:"搞砸"}
    ],
    usage:"'not like I wrote the book on X' 自嘲式谦虚——'我不是X方面的专家'。screw up = 搞砸（口语）。整段展示'真诚的自嘲'：努力了一辈子却还在犯错，承认不完美反而拉近距离，在雅思口语中展示 humility 与 authenticity。",
    example:"I'm not saying I wrote the book on parenting, but I've learned that showing up matters more than being perfect.",
    cloze:{text:"It's not like I ______ the ______ on fatherhood. Been trying all my life to ______ it ______. I'm still ______ ______.", answer:"wrote|book|get|right|screwing|up", hint:"填六个词，用 | 分隔"},
    questions:[
      {q:"What tone does 'not like I wrote the book on...' create?", a:"Self-deprecating humility. It disarms the audience by admitting imperfection — paradoxically, this makes the speaker more credible and likeable than claiming expertise."},
      {q:"How do 'been trying all my life' and 'still screwing up' work together rhetorically?", a:"The contrast between lifelong effort and ongoing failure creates honest tension. It avoids both arrogance (I'm great) and self-pity (I'm terrible) — it's simply true, which is why it resonates."},
      {q:"How could you use this in IELTS about family or role models?", a:"'My father would be the first to admit he didn't write the book on parenting — but his honesty about his own flaws is exactly what makes him a great role model.' This adds authenticity to clichéd family answers."}
    ],
    comparison:{
      topic:"Describe something you've learned about being a parent or role model.",
      score5:"My father is a good father. He works hard. He loves us. He teaches me many things. I want to be like him.",
      score7:"My father would be the first to say he <span class='hl'>didn't write the book on fatherhood</span>. He's been trying to <span class='hl'>get it right</span> his whole life — and he's still <span class='hl'>screwing up</span>, by his own admission. But honestly, that honesty is exactly what makes him a great role model. <span class='hl'>It's not about being flawless; it's about showing up</span>.",
      analysis:"5分用 good father / works hard / loves us 等陈词滥调。7分用 didn't write the book on / get it right / screwing up 等自嘲式高级表达，结尾点出'诚实本身才是榜样'的深刻洞察。",
      tags:["lexical resource","rhetorical effect","coherence"]
    }
  },
  // ===== 摩登家庭 S01E02 实拍提取 =====
  {
    id:21, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"put your foot down",
    chinese:"态度强硬，坚决反对，寸步不让",
    source:"摩登家庭 S01E02", category:"idiom",
    keywords:[
      {word:"put your foot down", pos:"idiom", meaning:"坚决反对 / 强硬表态"},
      {word:"foot", pos:"n.", meaning:"脚 → 隐喻站稳立场"}
    ],
    usage:"在别人犹豫或试图越界时，明确表态'这事我说了算，不让步'。Jay 在给儿子买自行车这件事上：'Sometimes a man's gotta put his foot down.' 语气坚定但不暴躁。",
    example:"She'd been asking for a later curfew for months, so I finally put my foot down.",
    cloze:{text:"She'd been asking for a later curfew for months, so I finally ______ my ______ ______.", answer:"put|foot|down", hint:"填三个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does 'put your foot down' imply about the speaker's attitude?", a:"It signals firmness and finality — the speaker has decided and won't be swayed. It's often used by parents or managers when boundaries have been tested repeatedly."},
      {q:"How is it different from 'refuse' or 'say no'?", a:"Saying no can be casual. 'Putting your foot down' implies a definitive stance after patience has run out — it carries weight, finality, and a hint of authority."},
      {q:"When might putting your foot down backfire?", a:"If used too often or too rigidly, it can damage relationships. The key is reserving it for non-negotiables, so it retains its power and doesn't become the default response."}
    ],
    comparison:{
      topic:"Describe a time you had to be firm about something.",
      score5:"My son wanted to play games all day. I said no. He was angry. But I think I am right. I did not change my mind.",
      score7:"My son had been pushing for more screen time all week, and after <span class='hl'>drawing the line</span> several times, I finally <span class='hl'>put my foot down</span>. I wasn't harsh about it — I just made it clear the rule wasn't up for negotiation. <span class='hl'>Firmness, I've learned, is different from anger</span>.",
      analysis:"5分用 said no / I am right 等基础表达，缺乏解释。7分用 drawing the line, put my foot down, up for negotiation 等高级表达，并提炼出'坚定不等于愤怒'的洞察，层次更深。",
      tags:["lexical resource","grammatical range","coherence"]
    }
  },
  {
    id:22, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"rub someone the wrong way",
    chinese:"惹某人不快，触到逆鳞",
    source:"摩登家庭 S01E02", category:"idiom",
    keywords:[
      {word:"rub someone the wrong way", pos:"idiom", meaning:"惹恼某人"},
      {word:"rub", pos:"v.", meaning:"摩擦"}
    ],
    usage:"无意间（或有意）让某人感到不快、烦躁。Mitchell 在亲子课上说：'I don't wanna rub anyone the wrong way.' 常用于描述'说不清为什么，但就是让人不爽'。",
    example:"I'm not sure what it is, but he always rubs me the wrong way.",
    cloze:{text:"I'm not sure what it is, but he always ______ me the ______ ______.", answer:"rubs|wrong|way", hint:"填三个词，用 | 分隔（三单形式）"},
    questions:[
      {q:"Why might someone 'rub you the wrong way' without doing anything obviously wrong?", a:"The idiom suggests a subtle, inexplicable irritation — a tone, a habit, a vibe that clashes with your personality. It's about chemistry rather than logic."},
      {q:"How could you use it diplomatically in the workplace?", a:"'I have to admit, his directness rubs some clients the wrong way.' — it criticizes softly without accusing anyone of wrongdoing."},
      {q:"What's the origin imagery of this phrase?", a:"Rubbing an animal's fur against the grain (the wrong way) is unpleasant for it — the same idea applies to people: some interactions feel inherently uncomfortable."}
    ],
    comparison:{
      topic:"Describe a person you found difficult to get along with.",
      score5:"There is a man in my office. He always talks very loud. I do not like him. I do not know why. We do not have any problem.",
      score7:"There's a colleague whose style just <span class='hl'>rubs me the wrong way</span> — he finishes everyone's sentences and laughs a beat too long. It's nothing personal, nothing he's <span class='hl'>technically doing wrong</span>, yet something about the <span class='hl'>dynamic</span> leaves me on edge every time.",
      analysis:"5分用 do not like / do not know why 等基础表达，说不清原因。7分用 rubs me the wrong way, technically doing wrong, dynamic 等表达，精准描述了'莫名其妙就是不舒服'的微妙感，且说明这与对错无关。",
      tags:["lexical resource","nuance","fluency"]
    }
  },
  {
    id:23, type:"phrase", level:"7+", topic:"family", dimension:"bond", english:"keep someone grounded",
    chinese:"让某人脚踏实地，不飘",
    source:"摩登家庭 S01E02", category:"collocation",
    keywords:[
      {word:"keep someone grounded", pos:"phrase", meaning:"让某人保持脚踏实地"},
      {word:"grounded", pos:"adj.", meaning:"脚踏实地的 / 接地气的"}
    ],
    usage:"形容某人或某事物让人保持谦逊、务实，不被成功或浮华冲昏头脑。Gloria 说儿子 Manny：'He keeps us grounded.' 家人、朋友、平凡生活都能 keep you grounded。",
    example:"Fame hasn't changed her — her family keeps her grounded.",
    cloze:{text:"Fame hasn't changed her — her family ______ her ______.", answer:"keeps|grounded", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does it mean to be 'grounded'?", a:"To stay humble, practical, and connected to reality — especially when success or wealth could make someone arrogant or out of touch."},
      {q:"Who or what keeps people grounded in your culture?", a:"(Open-ended) Common answers: family, childhood friends, daily routines, or religious faith. The key is a stable anchor outside of achievement."},
      {q:"How is this different from 'keep someone down'?", a:"Completely opposite. Keeping someone down suppresses them; keeping them grounded steadies them while they grow. Grounded people can still be ambitious."}
    ],
    comparison:{
      topic:"Describe a person or thing that keeps you grounded.",
      score5:"My family is very important to me. They remind me to be a good person. I do not forget my home. When I am successful I still visit them.",
      score7:"For me, it's my childhood friends who <span class='hl'>keep me grounded</span>. No matter how far life takes me, they treat me exactly the same — which is to say, <span class='hl'>they tease me mercilessly</span>. That honest, <span class='hl'>unvarnished</span> familiarity is a constant reminder of who I was before the titles and achievements.",
      analysis:"5分句式简单，内容泛泛。7分用 keep me grounded, tease me mercilessly, unvarnished 等高级表达，通过'他们毫不留情地嘲笑我'的具体细节，生动诠释了接地气的含义。",
      tags:["lexical resource","narrative detail","fluency"]
    }
  },
  {
    id:24, type:"phrase", level:"6.5+", topic:"values", dimension:"integrity", english:"take great pride in",
    chinese:"以……为豪，引以为傲",
    source:"摩登家庭 S01E02", category:"collocation",
    keywords:[
      {word:"take great pride in", pos:"collocation", meaning:"以…为豪"},
      {word:"pride", pos:"n.", meaning:"自豪 / 骄傲"}
    ],
    usage:"正式且有分量的表达，表示对某事感到深深的自豪。Gloria：'In my culture, men take great pride in doing physical labor.' 比 be proud of 更正式、更庄重。",
    example:"She takes great pride in her work — every detail has to be perfect.",
    cloze:{text:"She ______ great ______ in her work — every detail has to be perfect.", answer:"takes|pride", hint:"填两个词，用 | 分隔（三单形式）"},
    questions:[
      {q:"How does 'take great pride in' differ from 'be proud of'?", a:"It's more formal and emphatic — 'great pride' signals deep, long-standing satisfaction, often tied to identity or culture, not just a moment of success."},
      {q:"When might you use it in IELTS Speaking?", a:"Describing someone you admire, a tradition, or your own achievements: 'My grandmother takes great pride in her cooking — it's her way of showing love.'"},
      {q:"Can it be used with both people and things?", a:"Yes: take great pride in your children, your craft, your heritage. The object is usually something you've invested in or identify with."}
    ],
    comparison:{
      topic:"Describe a tradition or skill you are proud of.",
      score5:"My grandmother makes very good dumplings. Everyone likes them. She is happy when we eat them. I learn from her.",
      score7:"My grandmother <span class='hl'>takes great pride in</span> her dumplings — not just as food, but as a <span class='hl'>living tradition</span> passed down three generations. She insists on every fold being identical, and she sees that <span class='hl'>attention to detail</span> as a form of respect for the craft.",
      analysis:"5分用 good/very happy/likes 等基础词。7分用 takes great pride in, living tradition, attention to detail 等高级表达，把'包饺子'提升到'传承手艺'的层面，论述有深度。",
      tags:["lexical resource","coherence","discourse structure"]
    }
  },
  {
    id:25, type:"phrase", level:"7+", topic:"values", dimension:"integrity", english:"a total flake",
    chinese:"极不靠谱的人，放鸽子专业户",
    source:"摩登家庭 S01E02", category:"idiom",
    keywords:[
      {word:"flake", pos:"n.", meaning:"不可靠的人（口语）"},
      {word:"a total flake", pos:"idiom", meaning:"完全不靠谱的人"}
    ],
    usage:"形容经常爽约、说一套做一套、无法指望的人。Jay 吐槽 Manny 的生父：'The truth? He's a total flake.' 用于负面评价，语气轻松不恶毒。",
    example:"Don't rely on him for the ride — he's a total flake.",
    cloze:{text:"Don't rely on him for the ride — he's a ______ ______.", answer:"total|flake", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What behaviors make someone a 'flake'?", a:"Chronic lateness, canceling plans at the last minute, making promises they never keep. The core trait is unreliability in social commitments."},
      {q:"Is 'flake' a strong insult?", a:"It's mildly insulting but informal and often said with exasperated humor. It attacks someone's reliability, not their character or intelligence."},
      {q:"How could you use it in IELTS?", a:"Describing a disappointing experience: 'The organizer turned out to be a total flake — the event never happened.' It adds colloquial color to a Part 2 story."}
    ],
    comparison:{
      topic:"Describe a time you were let down by someone.",
      score5:"My friend said he will help me move house. On that day he did not come. I waited for two hours. I was very angry. I did the moving myself.",
      score7:"A friend had promised to help me move, and on the day he simply <span class='hl'>ghosted me</span> — no message, no call. I later learned he'd gone to a party instead. I'd always suspected he was a bit of a <span class='hl'>flake</span>, but that day <span class='hl'>crystallized it</span>: I stopped making plans that depended on him.",
      analysis:"5分用 did not come / very angry 等基础表达，平铺直叙。7分用 ghosted me, flake, crystallized it 等高级词汇和地道说法，把失望感表达得具体而成熟。",
      tags:["lexical resource","narrative structure","fluency"]
    }
  },
  {
    id:26, type:"phrase", level:"6.5+", topic:"education", dimension:"learning", english:"teach someone a lesson",
    chinese:"给某人一个教训",
    source:"摩登家庭 S01E02", category:"idiom",
    keywords:[
      {word:"teach someone a lesson", pos:"idiom", meaning:"教训某人"},
      {word:"lesson", pos:"n.", meaning:"教训 / 一课"}
    ],
    usage:"让他人因错误行为而付出代价，从而学到教训。可以用于教育（Phil 藏车教育儿子）也可以用于报复（让对方吃苦头）。语境决定褒贬。",
    example:"The scam taught him a lesson — he never trusts 'too good to be true' deals anymore.",
    cloze:{text:"The scam ______ him a ______ — he never trusts 'too good to be true' deals anymore.", answer:"taught|lesson", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"Is 'teach someone a lesson' positive or negative?", a:"Neutral — the tone depends on context. In parenting it's constructive discipline; in grudges it implies retribution. Both share the idea of consequences correcting behavior."},
      {q:"How is it different from 'learn from mistakes'?", a:"'Learn from mistakes' is self-directed and voluntary. 'Teach someone a lesson' implies an external force creating consequences — often deliberately."},
      {q:"How could you use it in IELTS about education?", a:"'My father believed in letting us fail sometimes — he said a small setback at 10 teaches a bigger lesson than a lecture.'"}
    ],
    comparison:{
      topic:"Describe a mistake that taught you something.",
      score5:"I left my homework at home. My teacher was not happy. She gave me a zero. I was sad. Now I always check my bag before school.",
      score7:"I once submitted a project without proofreading — a <span class='hl'>careless slip</span> that cost me a grade. It <span class='hl'>taught me a lesson</span> I've never forgotten: <span class='hl'>the last five minutes of checking</span> matter more than the first five hours of drafting. That mistake shaped my work ethic more than any praise ever did.",
      analysis:"5分句式简单、教训表述平淡。7分用 careless slip, taught me a lesson, shaping work ethic 等表达，把具体事件升华成对工作习惯的深刻认识，叙事完整有反思。",
      tags:["lexical resource","coherence","reflective depth"]
    }
  },
  {
    id:27, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"take turns doing something",
    chinese:"轮流做某事，轮流来",
    source:"摩登家庭 S01E02", category:"collocation",
    keywords:[
      {word:"take turns doing", pos:"collocation", meaning:"轮流做"},
      {word:"in turn", pos:"phrase", meaning:"依次（相关表达）"}
    ],
    usage:"表示多人按顺序轮流做某事。亲子课老师：'We're all over here taking turns blowing bubbles.' 职场、家庭、课堂都常用，是雅思 Part 1/3 高频搭配。",
    example:"The kids take turns choosing what to watch on movie night.",
    cloze:{text:"The kids ______ ______ choosing what to watch on movie night.", answer:"take|turns", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What structure follows 'take turns'?", a:"take turns + doing (taking turns choosing) or take turns + to do (take turns to choose). Both are acceptable; 'doing' is more common in speech."},
      {q:"Why is this a useful expression in IELTS?", a:"It's natural for describing family routines, teamwork, or classroom activities — frequent topics in Part 1 and Part 3."},
      {q:"Can it be used for fairness in the workplace?", a:"Yes: 'We take turns leading the weekly meeting so everyone develops presentation skills.' It frames equality positively."}
    ],
    comparison:{
      topic:"Describe a group activity you enjoy.",
      score5:"We play basketball with my friends every week. We take turns to choose the team. It is fun. Everybody can play.",
      score7:"Every Friday, my friends and I <span class='hl'>take turns hosting</span> a dinner — one week it's someone's homemade pasta, the next it's a <span class='hl'>potluck</span> where everyone brings a dish. The rotation <span class='hl'>keeps things fair</span> and means nobody's stuck with all the hosting burden.",
      analysis:"5分表达简单（take turns 本身用法正确但单调）。7分用 take turns hosting, potluck, keeps things fair, hosting burden 等丰富表达，把简单活动讲出公平与负担平衡的深度。",
      tags:["lexical resource","fluency","coherence"]
    }
  },
  // ===== 摩登家庭 S01E03 实拍提取 =====
  {
    id:28, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"walk on eggshells",
    chinese:"如履薄冰，小心翼翼",
    source:"摩登家庭 S01E03", category:"idiom",
    keywords:[
      {word:"walk on eggshells", pos:"idiom", meaning:"如履薄冰 / 小心翼翼"},
      {word:"eggshell", pos:"n.", meaning:"蛋壳（易碎 → 隐喻脆弱关系）"}
    ],
    usage:"在某人面前格外小心、生怕说错话惹恼对方。Claire 说 Phil：'You still walk on eggshells around him.' 常用于描述与易怒者、权威者或关系紧张的人相处。",
    example:"After the argument, we walked on eggshells around each other for weeks.",
    cloze:{text:"After the argument, we ______ on ______ around each other for weeks.", answer:"walked|eggshells", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does the image of 'walking on eggshells' convey?", a:"Extreme caution: eggshells are fragile, so you must tread lightly to avoid breaking them — like handling a volatile person or situation where any word could cause damage."},
      {q:"When might this be necessary or unhealthy?", a:"Briefly, it's sometimes necessary around grief or illness. Chronically, it signals an unhealthy dynamic — real relationships shouldn't require constant fear."},
      {q:"How could you use it in IELTS?", a:"Describing family or workplace tension: 'We were always walking on eggshells around the manager — one wrong word and he'd explode.'"}
    ],
    comparison:{
      topic:"Describe a stressful situation in your family or workplace.",
      score5:"My manager is very strict. He gets angry easily. We are all careful when we talk to him. We do not say our real ideas.",
      score7:"With my previous manager, we were <span class='hl'>permanently walking on eggshells</span> — a casual joke, a wrong phrase, even a <span class='hl'>harmless question</span> could set him off. The result was that nobody spoke honestly, and the team's <span class='hl'>creativity just withered</span>. A culture of fear is quietly expensive.",
      analysis:"5分用 strict/angry/careful 等基础词。7分用 walking on eggshells, harmless question, set him off, creativity withered 等高级表达，并点出'恐惧文化的隐性代价'，有职场洞察。",
      tags:["lexical resource","idiomatic language","critical thinking"]
    }
  },
  {
    id:29, type:"phrase", level:"6.5+", topic:"work", dimension:"career", english:"take it to the next level",
    chinese:"更上一层楼，提升到新高度",
    source:"摩登家庭 S01E03", category:"collocation",
    keywords:[
      {word:"take it to the next level", pos:"collocation", meaning:"提升到新层次"},
      {word:"the next level", pos:"phrase", meaning:"下一级台阶"}
    ],
    usage:"把事业、关系、技能提升到更高层次。Phil 想和未来女婿搞好关系：'I'm all about taking it to the next level.' 职场和人际场景都高频。",
    example:"Her new certification really took her career to the next level.",
    cloze:{text:"Her new certification really ______ her career to the ______ ______.", answer:"took|next|level", hint:"填三个词，用 | 分隔（过去式）"},
    questions:[
      {q:"In what contexts is 'take it to the next level' used?", a:"Careers (promotion, new skills), relationships (getting more serious), and projects (expanding scope). It signals deliberate growth rather than passive change."},
      {q:"Is it formal or informal?", a:"Informal-to-neutral. Fine in interviews and essays, though 'elevate' or 'advance' sound more formal for IELTS Writing."},
      {q:"How could you use it in IELTS Speaking?", a:"'After a year of basics, I wanted to take my English to the next level, so I started watching American shows without subtitles.'"}
    ],
    comparison:{
      topic:"Describe a goal you want to achieve.",
      score5:"I want to improve my English. I study every day. I hope one day I can speak very well. I will work hard.",
      score7:"After years of <span class='hl'>plateauing</span> at an intermediate level, I wanted to <span class='hl'>take my English to the next level</span>. So I <span class='hl'>committed to</span> a strict routine — daily podcasts, script shadowing, and forcing myself to think in English rather than translate.",
      analysis:"5分用 improve/study hard 等基础表达，缺少方法。7分用 plateauing, take it to the next level, committed to, shadowing 等表达，具体描述提升路径，展现行动力。",
      tags:["lexical resource","coherence","fluency"]
    }
  },
  {
    id:30, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"keep it real",
    chinese:"保持真实，别装",
    source:"摩登家庭 S01E03", category:"idiom",
    keywords:[
      {word:"keep it real", pos:"idiom", meaning:"保持真实 / 不装"},
      {word:"real", pos:"adj.", meaning:"真实的（口语强调）"}
    ],
    usage:"要求真诚、不做作，保持本色。Phil 对 Claire 说：'Thought you were all about keeping it real.' 也常用于提醒自己或他人'别飘、别装'。",
    example:"I've never been one for fancy talk — I just keep it real.",
    cloze:{text:"I've never been one for fancy talk — I just ______ ______ ______.", answer:"keep|it|real", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'keep it real' ask of someone?", a:"Authenticity — to be honest and unpretentious, to avoid putting on a show or claiming things that aren't true to yourself."},
      {q:"When is it appropriate to say?", a:"In casual, trust-based relationships: friends, teammates, or when calling out someone's pretentiousness gently. It's too informal for formal business settings."},
      {q:"How could you use it in IELTS?", a:"Describing values or friends: 'What I value in my friends is that we keep it real with each other — no sugarcoating.'"}
    ],
    comparison:{
      topic:"Describe a quality you value in friends.",
      score5:"I think friends should be honest. They should not lie to you. If they have a problem with you, they tell you. Good friends are real.",
      score7:"The quality I value most is that we <span class='hl'>keep it real</span> with each other. My closest friends will tell me I look tired before they tell me I look nice — they'd rather <span class='hl'>risk a moment of discomfort</span> than feed me <span class='hl'>empty compliments</span>. That honesty is rarer than gold.",
      analysis:"5分用 honest/not lie 等基础表达，观点简单。7分用 keep it real, risk a moment of discomfort, empty compliments, rarer than gold 等表达，用具体对比（先说你累再说你美）让观点生动。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  {
    id:31, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"not someone's thing",
    chinese:"不是某人的菜 / 不喜欢",
    source:"摩登家庭 S01E03", category:"collocation",
    keywords:[
      {word:"not someone's thing", pos:"collocation", meaning:"不感兴趣 / 不擅长"},
      {word:"thing", pos:"n.", meaning:"喜好 / 擅长之事（口语）"}
    ],
    usage:"表示某事不是某人的兴趣或专长。Alex 的妈妈替她推脱：'It's not really her thing.' 比 'she doesn't like it' 更口语自然，是雅思口语高频地道表达。",
    example:"Cooking was never really my thing, but I'm trying to learn.",
    cloze:{text:"Cooking was never really my ______, but I'm trying to learn.", answer:"thing", hint:"填一个词"},
    questions:[
      {q:"What nuance does 'not my thing' carry that 'I don't like it' doesn't?", a:"It's softer and more personal — it suggests the activity just isn't aligned with who you are, rather than a strong dislike. It's also great for declining politely."},
      {q:"Can it mean 'not good at' as well as 'not interested in'?", a:"Yes — both meanings work: 'Math isn't really my thing' can mean you neither enjoy nor excel at it. Context decides."},
      {q:"How could you use it in IELTS?", a:"Part 1 hobbies: 'Extreme sports aren't really my thing — I prefer hiking.' It sounds natural and native."}
    ],
    comparison:{
      topic:"Describe a hobby you don't enjoy.",
      score5:"I do not like playing computer games. I think they waste time. My friends play them every day. I do not understand why.",
      score7:"Online gaming was never really <span class='hl'>my thing</span> — it's not that I <span class='hl'>look down on</span> it, it's just that the <span class='hl'>competitive intensity</span> stresses me out. I'd rather spend the same two hours <span class='hl'>losing myself in a novel</span> than in a leaderboard.",
      analysis:"5分用 do not like/waste time 等直接否定，显得评判他人。7分用 not my thing, look down on, competitive intensity, losing myself in a novel 等表达，尊重他人喜好同时清晰表达自我，分寸感好。",
      tags:["lexical resource","nuance","fluency"]
    }
  },
  {
    id:32, type:"phrase", level:"7+", topic:"skills", dimension:"mastery", english:"without missing a beat",
    chinese:"毫不停顿，反应神速",
    source:"摩登家庭 S01E03", category:"idiom",
    keywords:[
      {word:"without missing a beat", pos:"idiom", meaning:"毫无停顿 / 反应飞快"},
      {word:"beat", pos:"n.", meaning:"节拍 → 隐喻节奏不间断"}
    ],
    usage:"形容反应极快、衔接无缝，像音乐节拍一样不停顿。Cam 猜字谜：'And without missing a beat, Cam says Casablanca.' 用于赞赏某人的机敏。",
    example:"I asked a tricky question, and she answered without missing a beat.",
    cloze:{text:"I asked a tricky question, and she answered ______ ______ a ______.", answer:"without|missing|beat", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does the musical metaphor 'beat' add to this phrase?", a:"A beat is a steady rhythm — missing a beat would break the flow. 'Without missing a beat' means the response came so smoothly the rhythm never broke, implying quick thinking."},
      {q:"When might you use it in IELTS?", a:"Describing someone quick-witted: 'My colleague handles customer complaints without missing a beat — she always has an answer ready.'"},
      {q:"Can it describe physical actions too?", a:"Yes: 'He caught the falling cup without missing a beat' — any action done so seamlessly it seems effortless."}
    ],
    comparison:{
      topic:"Describe a person who is quick at solving problems.",
      score5:"My sister is very smart. When we have problems, she can find answers fast. She always knows what to do. I ask her when I am in trouble.",
      score7:"My sister has an almost <span class='hl'>instant reaction time</span> in a crisis. Ask her any question mid-chaos and she answers <span class='hl'>without missing a beat</span> — no hesitation, no <span class='hl'>umming and ahhing</span>. It's not just intelligence; it's a kind of <span class='hl'>mental agility</span> that comes from staying calm under pressure.",
      analysis:"5分用 very smart/find answers fast 等基础表达。7分用 instant reaction time, without missing a beat, umming and ahhing, mental agility 等高级表达，并区分了'聪明'与'冷静下的思维敏捷'。",
      tags:["lexical resource","idiomatic language","coherence"]
    }
  },
  {
    id:33, type:"phrase", level:"6.5+", topic:"work", dimension:"deal", english:"non-negotiable",
    chinese:"没得商量，不可让步的",
    source:"摩登家庭 S01E03", category:"collocation",
    keywords:[
      {word:"non-negotiable", pos:"adj.", meaning:"不可商量的"},
      {word:"negotiable", pos:"adj.", meaning:"可协商的（反义词）"}
    ],
    usage:"形容底线或硬性要求，没有讨论余地。Claire 要求女儿穿裙子：'It's non-negotiable.' 职场合同、家庭教育、谈判中都常用，表示不可妥协的原则。",
    example:"For me, honesty is non-negotiable in any relationship.",
    cloze:{text:"For me, honesty is ______-______ in any relationship.", answer:"non|negotiable", hint:"填两个词，用 | 分隔（连字符词）"},
    questions:[
      {q:"What kind of things are typically 'non-negotiable'?", a:"Core values, safety rules, contract terms, and boundaries — things where compromise would defeat the purpose. The word signals finality."},
      {q:"How is it used in professional settings?", a:"'The deadline is non-negotiable' or 'work-life balance is non-negotiable for me when choosing a job' — it frames firm requirements professionally."},
      {q:"How could you use it in IELTS?", a:"Discussing values or work: 'A fair salary is important, but for me, a respectful workplace culture is non-negotiable.'"}
    ],
    comparison:{
      topic:"Describe an important principle you hold.",
      score5:"I think respect is very important. People should respect each other. If they do not respect me, I do not want to talk to them.",
      score7:"When it comes to choosing a workplace, a healthy culture is <span class='hl'>non-negotiable</span> for me. A few extra thousand in salary can't <span class='hl'>offset</span> daily stress or <span class='hl'>toxic dynamics</span>. I'd rather earn less and sleep well than <span class='hl'>chase every penny</span> and lose my peace of mind.",
      analysis:"5分用 important/respect 等基础词，观点笼统。7分用 non-negotiable, offset, toxic dynamics, chase every penny 等表达，结合职场选择的具体权衡，论述有说服力。",
      tags:["lexical resource","coherence","critical thinking"]
    }
  },
  {
    id:34, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"roll your eyes",
    chinese:"翻白眼（表示无语/不屑）",
    source:"摩登家庭 S01E03", category:"collocation",
    keywords:[
      {word:"roll your eyes", pos:"collocation", meaning:"翻白眼"},
      {word:"eye roll", pos:"n.", meaning:"白眼（名词形式）"}
    ],
    usage:"用翻白眼的动作表达无语、不屑或不耐烦。Cam 回忆：'He kept rolling his eyes every time I got a little boisterous.' 是非语言沟通的经典表达。",
    example:"She rolled her eyes at his excuse — clearly not buying it.",
    cloze:{text:"She ______ her ______ at his excuse — clearly not buying it.", answer:"rolled|eyes", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does 'roll your eyes' communicate non-verbally?", a:"Exasperation, disbelief, or contempt — 'I think that's ridiculous' without saying it. It's universal but can come across as rude in formal settings."},
      {q:"Why is it useful for IELTS narratives?", a:"It adds vivid non-verbal detail to stories: 'The whole office rolled their eyes when the manager announced another 'urgent' meeting.'"},
      {q:"Is there a noun form?", a:"Yes — 'an eye roll': 'He gave me an eye roll and walked away.' Common in both speech and writing."}
    ],
    comparison:{
      topic:"Describe a time you disagreed with something silently.",
      score5:"My teacher said we have homework on holiday. I did not say anything. But I was not happy. I looked at my friend. She was not happy too.",
      score7:"When the manager announced yet another '<span class='hl'>mandatory</span>' weekend meeting, the whole team <span class='hl'>exchanged eye rolls</span> — no one dared speak up, but the <span class='hl'>collective exasperation</span> said everything. <span class='hl'>Sometimes silence and a rolled eye are louder than words</span>.",
      analysis:"5分用 not happy/looked at friend 等基础表达，场景平淡。7分用 mandatory, exchanged eye rolls, collective exasperation 等表达，最后升华出'无声胜有声'的洞察，层次丰富。",
      tags:["lexical resource","rhetorical effect","coherence"]
    }
  },
  // ===== 摩登家庭 S01E04 实拍提取 =====
  {
    id:35, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"give as good as you get",
    chinese:"以牙还牙，毫不示弱",
    source:"摩登家庭 S01E04", category:"idiom",
    keywords:[
      {word:"give as good as you get", pos:"idiom", meaning:"以牙还牙 / 毫不示弱"},
      {word:"as good as", pos:"phrase", meaning:"一样好 / 不输给"}
    ],
    usage:"在争吵或对抗中回击得同样有力，不让对方占便宜。Phil 教儿子反击恶作剧：'You just gotta show 'em you're willing to give as good as you get.' 体现平等对抗的自信。",
    example:"In any argument with her, you'd better be ready to give as good as you get.",
    cloze:{text:"In any argument with her, you'd better be ready to ______ as ______ as you ______.", answer:"give|good|get", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does this idiom say about a person's character?", a:"That they can't be pushed around — they'll respond with equal force or wit. It implies confidence, resilience, and a refusal to be a doormat."},
      {q:"In what situations might it be a useful skill?", a:"Negotiations, dealing with bullies, or standing up in arguments. The key is 'as good as' — matching the level, not escalating beyond it."},
      {q:"How could you use it in IELTS?", a:"Describing standing up for yourself: 'I've learned to give as good as I get in meetings — if someone questions my work, I question their data.'"}
    ],
    comparison:{
      topic:"Describe a time you stood up for yourself.",
      score5:"A classmate always laughed at my English. I was sad. One day I said to him my English is not bad. He stopped laughing. I felt good.",
      score7:"A colleague had a habit of <span class='hl'>dismissing</span> my suggestions in meetings. After months of <span class='hl'>biting my tongue</span>, I started to <span class='hl'>give as good as I get</span> — I began asking pointed questions about his own proposals. He <span class='hl'>backed off</span>, and oddly enough, we ended up with more mutual respect.",
      analysis:"5分表达直接简单，冲突描述粗糙。7分用 dismissing, biting my tongue, give as good as I get, backed off 等表达，且点出'对抗反而赢得尊重'的转折，叙事成熟。",
      tags:["lexical resource","idiomatic language","narrative structure"]
    }
  },
  {
    id:36, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"pave the way",
    chinese:"铺平道路，为……创造条件",
    source:"摩登家庭 S01E04", category:"idiom",
    keywords:[
      {word:"pave the way for", pos:"idiom", meaning:"为…铺路"},
      {word:"pave", pos:"v.", meaning:"铺设（路面）"}
    ],
    usage:"为后续的事情创造条件、扫清障碍。Mitchell 的妈妈求他：'Maybe you could pave the way so that I can apologize.' 职场、历史、社会话题都常用，是雅思写作高分表达。",
    example:"The success of the pilot project paved the way for a nationwide rollout.",
    cloze:{text:"The success of the pilot project ______ the ______ for a nationwide rollout.", answer:"paved|way", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does the literal image of 'paving' suggest?", a:"Building a smooth road so travel becomes easy — metaphorically, removing obstacles and creating conditions so that later steps can proceed smoothly."},
      {q:"When is it used in formal writing?", a:"Very common in IELTS Task 2: 'The internet paved the way for remote work' or 'early pioneers paved the way for modern medicine.'"},
      {q:"How could you use it in Speaking?", a:"'My mentor's advice paved the way for my internship — without her introduction, I wouldn't have even been considered.'"}
    ],
    comparison:{
      topic:"Describe something that made your later success possible.",
      score5:"I joined a club in school. The teacher helped me a lot. She taught me how to speak in public. Now I am not afraid to talk in front of people.",
      score7:"Joining the school debate club <span class='hl'>paved the way for</span> everything that followed. It didn't just teach me public speaking — it <span class='hl'>forged the confidence</span> to raise my hand, ask questions, and eventually speak at conferences. <span class='hl'>One early door opens many others</span>.",
      analysis:"5分用 helped me/not afraid 等基础表达，因果关系简单。7分用 paved the way for, forged the confidence, one early door opens many others 等表达，把'一次经历'提升为'人生连锁反应'的洞察。",
      tags:["lexical resource","coherence","reflective depth"]
    }
  },
  {
    id:37, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"count on someone",
    chinese:"指望某人，信赖某人",
    source:"摩登家庭 S01E04", category:"phrasal verb",
    keywords:[
      {word:"count on", pos:"phrasal verb", meaning:"指望 / 依靠"},
      {word:"count on someone to do", pos:"collocation", meaning:"指望某人做某事"}
    ],
    usage:"完全信赖某人会帮你、会做到。Mitchell 的妈妈：'I knew I could count on you.' 比 rely on 更口语亲切，是表达信任的核心短语。",
    example:"You can always count on her to keep a secret.",
    cloze:{text:"You can always ______ ______ her to keep a secret.", answer:"count|on", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the difference between 'count on' and 'rely on'?", a:"Nearly interchangeable, but 'count on' feels warmer and more personal; 'rely on' sounds slightly more formal. Both mean trustworthy dependence."},
      {q:"How could you use it in IELTS about friendship?", a:"'He's the friend I can always count on — he's shown up for me through every crisis.' It's perfect for Part 2 'friend' answers."},
      {q:"What's the negative form?", a:"'You can't count on him' — signaling unreliability. Also common: 'don't count on it' (don't expect it to happen)."}
    ],
    comparison:{
      topic:"Describe a person you can always rely on.",
      score5:"My friend Li is very good. I can ask her for help. She always helps me. If I have a problem, I call her. She never says no.",
      score7:"Li is the person I can always <span class='hl'>count on</span> — not because she never fails, but because she <span class='hl'>communicates honestly</span> when she can't help. That's the <span class='hl'>real test of reliability</span>: not perfection, but trustworthiness in good times and bad.",
      analysis:"5分用 always helps/never says no 等绝对化表达，理想化且单薄。7分用 count on, communicates honestly, real test of reliability 等表达，指出'可靠的真正考验是坦诚而非完美'，观点成熟。",
      tags:["lexical resource","critical thinking","coherence"]
    }
  },
  {
    id:38, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"dredge up",
    chinese:"翻旧账，重提旧事",
    source:"摩登家庭 S01E04", category:"phrasal verb",
    keywords:[
      {word:"dredge up", pos:"phrasal verb", meaning:"翻旧账 / 挖出旧事"},
      {word:"dredge", pos:"v.", meaning:"疏浚（挖淤泥）"}
    ],
    usage:"把过去不愉快、本该遗忘的事情重新提起。Mitchell：'Instead of dredging up the whole incident, maybe we should just repress it.' 带负面色彩，常用于劝人别旧事重提。",
    example:"Why are you dredging up something that happened ten years ago?",
    cloze:{text:"Why are you ______ ______ something that happened ten years ago?", answer:"dredging|up", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the imagery behind 'dredge up'?", a:"Dredging means scooping mud from a riverbed — so you're pulling up something heavy, buried, and messy from the depths. Perfect for painful memories."},
      {q:"When is 'dredging up' harmful?", a:"When it's used to re-open wounds without resolution — in arguments, it derails the current issue by dragging in old grievances."},
      {q:"How could you use it in IELTS?", a:"Describing conflict: 'Every argument ended with her dredging up old mistakes, which made reconciliation impossible.'"}
    ],
    comparison:{
      topic:"Describe a disagreement you had with someone.",
      score5:"My brother and I had a fight. He said I was lazy. I said he was selfish. Then he talked about something that happened last year. We got more angry.",
      score7:"What turned a minor disagreement into a full-blown fight was that my brother started <span class='hl'>dredging up</span> <span class='hl'>grievances from years ago</span> — old debts, old slights. <span class='hl'>Once you drag the past into a present argument</span>, the original issue becomes <span class='hl'>irrelevant</span>, and you're just fighting ghosts.",
      analysis:"5分平铺直叙，冲突描写简单。7分用 dredging up, grievances, dragging the past, fighting ghosts 等表达，精准诊断了争吵升级的机制，反思有深度。",
      tags:["lexical resource","idiomatic language","critical thinking"]
    }
  },
  {
    id:39, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"don't get me wrong",
    chinese:"别误会我的意思",
    source:"摩登家庭 S01E04", category:"discourse marker",
    keywords:[
      {word:"don't get me wrong", pos:"discourse marker", meaning:"别误会"},
      {word:"get", pos:"v.", meaning:"理解（口语）"}
    ],
    usage:"先消除误会，再说可能被误解的话。Mitchell 的妈妈：'Don't get me wrong. We satisfy each other down there.' 用于铺垫：'我要说的话听着奇怪，但请听我解释'。",
    example:"Don't get me wrong — I love my job, but I'd love a raise too.",
    cloze:{text:"______ ______ me ______ — I love my job, but I'd love a raise too.", answer:"Don't|get|wrong", hint:"填三个词，用 | 分隔（注意撇号）"},
    questions:[
      {q:"What function does 'don't get me wrong' serve in a conversation?", a:"It's a pre-emptive disclaimer — signaling that what follows might sound critical or odd, but the speaker means it constructively. It softens the landing."},
      {q:"How does it improve communication?", a:"It frames criticism as clarification rather than attack, inviting the listener to hear the full explanation before reacting."},
      {q:"When could you use it in IELTS?", a:"Part 3 opinions: 'Don't get me wrong — technology is wonderful, but I worry about how it affects our attention spans.'"}
    ],
    comparison:{
      topic:"Describe something you like but have concerns about.",
      score5:"I like my city very much. But there is too much traffic. It is a big problem. I hope the government can do something.",
      score7:"<span class='hl'>Don't get me wrong</span> — I love my city and would never leave it. But the <span class='hl'>traffic congestion</span> has reached a point where it's <span class='hl'>eroding our quality of life</span>. Loving a place and <span class='hl'>being honest about its flaws</span> aren't contradictory — they're two sides of the same coin.",
      analysis:"5分用 like/traffic problem 等简单表达，观点直白。7分用 don't get me wrong, congestion, eroding quality of life 等表达，并升华出'爱一个地方与正视其缺点不矛盾'的辩证观点。",
      tags:["discourse marker","lexical resource","coherence"]
    }
  },
  {
    id:40, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"be full of yourself",
    chinese:"自以为是，自命不凡",
    source:"摩登家庭 S01E04", category:"idiom",
    keywords:[
      {word:"be full of yourself", pos:"idiom", meaning:"自以为是"},
      {word:"full of", pos:"phrase", meaning:"充满…"}
    ],
    usage:"形容某人过于自负、自我感觉良好。Mitchell 的妈妈被吐槽：'Somebody's full of herself.' 用于调侃或批评，带轻微讽刺。",
    example:"He's so full of himself since he got that promotion.",
    cloze:{text:"He's so ______ ______ ______ since he got that promotion.", answer:"full|of|himself", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What's the imagery behind 'full of yourself'?", a:"As if you're filled to the brim with your own importance — leaving no room for others. It captures self-absorption vividly."},
      {q:"How does it differ from 'confident'?", a:"Confidence is secure and quiet; being full of yourself is showy and off-putting. Confidence doesn't need to announce itself."},
      {q:"How could you use it in IELTS?", a:"Describing someone's character flaw: 'He's brilliant, but he's so full of himself that people avoid working with him.'"}
    ],
    comparison:{
      topic:"Describe a person with a strong personality.",
      score5:"My classmate is very clever. He always says he is the best. Sometimes I think he talks too much about himself. But he is a good student.",
      score7:"He's genuinely talented, but he's <span class='hl'>so full of himself</span> it <span class='hl'>undermines</span> his own achievements — people <span class='hl'>roll their eyes</span> at his bragging instead of admiring his work. <span class='hl'>Talent earns respect; humility keeps it</span>.",
      analysis:"5分用 clever/says he is the best 等基础表达，评价含糊。7分用 full of himself, undermines, roll their eyes 等表达，并提炼出'才华赢得尊重，谦逊留住尊重'的格言式结尾。",
      tags:["lexical resource","rhetorical effect","coherence"]
    }
  },
  {
    id:41, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"run off with someone",
    chinese:"跟某人私奔 / 甩下家人跟人跑了",
    source:"摩登家庭 S01E04", category:"phrasal verb",
    keywords:[
      {word:"run off with", pos:"phrasal verb", meaning:"跟…私奔 / 携…逃走"},
      {word:"run off", pos:"phrasal verb", meaning:"跑掉"}
    ],
    usage:"抛下原有生活与他人（或财物）离开，常带八卦色彩。Mitchell 的妈妈吐槽前夫：'He couldn't wait 10 minutes to run off with Charo.' 也用于'run off with the money'。",
    example:"The accountant ran off with the company's money.",
    cloze:{text:"The accountant ______ ______ with the company's money.", answer:"ran|off", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does 'run off with' imply about the departure?", a:"Suddenness and abandonment — leaving behind responsibilities or people, often with someone or something (a person, money, an idea)."},
      {q:"Is it always negative?", a:"Usually, when it means abandoning commitments. But it can be romantic in a fairytale sense ('run off together'), though that's also seen as impulsive."},
      {q:"How could you use it in IELTS?", a:"Storytelling: 'Her father ran off with the neighbor when she was ten, which is why she values stability so much.'"}
    ],
    comparison:{
      topic:"Describe an event that shocked your family.",
      score5:"My uncle left our city one day. He did not tell anyone. My aunt was very sad. We found out he went to another country with a woman.",
      score7:"The news that my uncle had <span class='hl'>run off with</span> his colleague — leaving behind a 15-year marriage overnight — <span class='hl'>sent shockwaves through</span> the whole family. What struck me most wasn't the betrayal itself, but how <span class='hl'>quietly</span> a life can be upended in a single week.",
      analysis:"5分用 left/did not tell/sad 等基础表达，叙述平淡。7分用 run off with, sent shockwaves through, quietly upended 等表达，视角从'发生了什么'上升到'生活如何被颠覆'的反思。",
      tags:["lexical resource","narrative structure","reflective depth"]
    }
  },
  {
    id:42, type:"phrase", level:"6.5+", topic:"values", dimension:"integrity", english:"get past something",
    chinese:"克服 / 放下（心结、困难）",
    source:"摩登家庭 S01E04", category:"phrasal verb",
    keywords:[
      {word:"get past something", pos:"phrasal verb", meaning:"克服 / 走出（阴影）"},
      {word:"get past", pos:"phrase", meaning:"越过"}
    ],
    usage:"从痛苦经历或障碍中走出来，不再被其困扰。Mitchell 的妈妈：'The only way I can move to the next level is if we all can get past the incident.' 情感、职场、学习场景都适用。",
    example:"It took years for her to get past the trauma of the accident.",
    cloze:{text:"It took years for her to ______ ______ the trauma of the accident.", answer:"get|past", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'get past' imply about the process?", a:"That the obstacle or pain is something to be moved beyond, not erased — you carry the memory but stop being blocked by it. It implies forward motion."},
      {q:"How is it used with emotional topics?", a:"'We need to get past this argument and move on' — common in relationships and conflict resolution."},
      {q:"How could you use it in IELTS?", a:"Describing challenges: 'The hardest part was getting past my fear of speaking in public — once I did, everything else got easier.'"}
    ],
    comparison:{
      topic:"Describe a challenge you overcame.",
      score5:"I was afraid to speak English. I practiced every day. Now I can speak. I am happy. I want to improve more.",
      score7:"For years I was <span class='hl'>paralyzed by</span> the fear of making mistakes in English. The turning point was <span class='hl'>getting past</span> that perfectionism — I realized <span class='hl'>fluency comes from volume, not accuracy</span>. Once I stopped fearing errors, I started <span class='hl'>actually improving</span>.",
      analysis:"5分用 afraid/practice/happy 等基础表达，转折模糊。7分用 paralyzed by, getting past, fluency comes from volume not accuracy 等表达，指出克服的实质是放下完美主义，观点有洞察。",
      tags:["lexical resource","critical thinking","coherence"]
    }
  },
// ===== 摩登家庭 S01E05 实拍提取 =====
  {
    id:43, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"address the elephant in the room",
    chinese:"直面那个避而不谈的问题",
    source:"摩登家庭 S01E05", category:"idiom",
    keywords:[
      {word:"the elephant in the room", pos:"idiom", meaning:"人人回避的大问题"},
      {word:"address", pos:"v.", meaning:"处理 / 应对（正式）"}
    ],
    usage:"指'大家心里都清楚但没人敢提'的大问题。Phil 点破 Claire 和 Gloria 的矛盾：'I think we should address the elephant in the room.' 敢于直面问题是成熟的沟通表现。",
    example:"Everyone knew about the budget cuts, but no one wanted to address the elephant in the room.",
    cloze:{text:"Everyone knew about the budget cuts, but no one wanted to ______ the ______ in the ______.", answer:"address|elephant|room", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'the elephant in the room' refer to?", a:"An obvious, awkward problem everyone is aware of but deliberately avoids mentioning. The bigger the problem, the more it looms — like an elephant no one can ignore."},
      {q:"Why is 'addressing' it valuable in teams?", a:"Unaddressed issues fester and poison culture. Addressing them directly, though uncomfortable, usually leads to faster resolution and greater trust."},
      {q:"How could you use it in IELTS?", a:"Part 3 about workplaces or society: 'The elephant in the room is that remote work saves companies money but erodes team culture.'"}
    ],
    comparison:{
      topic:"Describe a difficult topic your team or family avoids discussing.",
      score5:"In my family, we do not talk about money. My father has a big debt. We all know it. But nobody says anything. It is very uncomfortable.",
      score7:"In my family, the <span class='hl'>elephant in the room</span> has always been my father's debt. We all knew about it, yet for years no one dared <span class='hl'>bring it up</span>. It wasn't until we finally <span class='hl'>addressed it head-on</span> that we could actually start solving it — avoidance only made it heavier.",
      analysis:"5分用 do not talk / know / nobody says 等基础表达。7分用 elephant in the room, bring it up, addressed it head-on 等表达，并点出'回避只会让问题更重'的洞察。",
      tags:["lexical resource","idiomatic language","critical thinking"]
    }
  },
  {
    id:44, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"sweep it under the rug",
    chinese:"掩盖问题，装作没事",
    source:"摩登家庭 S01E05", category:"idiom",
    keywords:[
      {word:"sweep under the rug", pos:"idiom", meaning:"掩盖问题"},
      {word:"rug", pos:"n.", meaning:"地毯 → 隐喻藏污纳垢"}
    ],
    usage:"把问题藏起来当没发生，而不是解决。Phil 的建议：'Just sweep it under the rug.' 常与'逃避'相关，雅思中可用于描述职场/家庭逃避文化。",
    example:"The company swept the scandal under the rug instead of investigating it.",
    cloze:{text:"The company ______ the scandal ______ the ______ instead of investigating it.", answer:"swept|under|rug", hint:"填三个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What's the imagery behind this idiom?", a:"You sweep dust under a rug to hide it from view — the problem is still there, just out of sight. It implies temporary concealment, not resolution."},
      {q:"Why is 'sweeping things under the rug' harmful long-term?", a:"Hidden problems usually resurface bigger. In relationships and organizations, unaddressed issues erode trust and repeat themselves."},
      {q:"How could you use it in IELTS?", a:"Describing culture: 'Rather than addressing complaints, the management swept them under the rug until they became a crisis.'"}
    ],
    comparison:{
      topic:"Describe a problem that was ignored for too long.",
      score5:"My school had a problem with bullying. Teachers knew but they did nothing. One day a student got hurt badly. Then they started to act.",
      score7:"For years, the school <span class='hl'>swept the bullying problem under the rug</span> — teachers <span class='hl'>looked the other way</span> to protect the school's reputation. It took a serious incident for them to <span class='hl'>face the music</span>. The lesson: problems don't disappear when you ignore them; they just grow quieter — and more dangerous.",
      analysis:"5分用 knew / did nothing 等基础表达，因果简单。7分用 swept under the rug, looked the other way, face the music 等表达，结尾格言式总结有深度。",
      tags:["lexical resource","idiomatic language","coherence"]
    }
  },
  {
    id:45, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"talk it out",
    chinese:"说开了，把问题谈清楚",
    source:"摩登家庭 S01E05", category:"phrasal verb",
    keywords:[
      {word:"talk it out", pos:"phrasal verb", meaning:"把话说开"},
      {word:"talk out", pos:"phrase", meaning:"通过交谈解决"}
    ],
    usage:"通过坦诚沟通解决分歧，而不是憋着。Claire：'I think you two need to talk it out.' 比 discuss 更口语、更强调'把心结解开'。",
    example:"They were mad at each other for weeks, but finally talked it out over coffee.",
    cloze:{text:"They were mad at each other for weeks, but finally ______ it ______ over coffee.", answer:"talked|out", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does 'talk it out' imply beyond simple discussion?", a:"It implies resolving an emotional conflict — airing grievances, listening, and reaching understanding. It's about healing, not just exchanging information."},
      {q:"Why is 'talking it out' better than letting it pass?", a:"Unexpressed resentment accumulates. Talking it out clears the air and prevents the issue from poisoning the relationship later."},
      {q:"How could you use it in IELTS?", a:"Conflict topics: 'Instead of avoiding each other, we sat down and talked it out — within an hour, the tension was gone.'"}
    ],
    comparison:{
      topic:"Describe a disagreement you resolved.",
      score5:"My roommate and I had a problem about cleaning. We did not talk for two days. Then we talked and made a plan. Now it is better.",
      score7:"My roommate and I had <span class='hl'>let resentment build up</span> over chores until it exploded over something trivial. Instead of <span class='hl'>sweeping it under the rug</span> again, we finally sat down and <span class='hl'>talked it out</span> — each of us said what was really bothering us. It took an hour, but the apartment has been peaceful ever since.",
      analysis:"5分用 did not talk / made a plan 等基础表达。7分用 let resentment build up, talked it out 等表达，把'谈'描述成一场具体的修复过程，细节生动。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  {
    id:46, type:"phrase", level:"6.5+", topic:"education", dimension:"talent", english:"book smart vs street smart",
    chinese:"书本智慧 vs 街头智慧",
    source:"摩登家庭 S01E05", category:"collocation",
    keywords:[
      {word:"book smart", pos:"collocation", meaning:"书本知识丰富"},
      {word:"street smart", pos:"collocation", meaning:"社会经验丰富"}
    ],
    usage:"对比两种智慧：学术知识和生活经验。剧中旁白：'There's book smart, and then there's street smart.' 雅思常用来讨论教育vs实践。",
    example:"She's book smart, but she's not very street smart when it comes to dealing with people.",
    cloze:{text:"She's ______ smart, but she's not very ______ smart when it comes to dealing with people.", answer:"book|street", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the difference between 'book smart' and 'street smart'?", a:"Book smart means strong academic knowledge from study; street smart means practical wisdom from real-life experience — reading people, navigating situations."},
      {q:"Which is more valuable in your opinion?", a:"(Open-ended) Strong answers argue both are needed — book smart gets you the interview, street smart keeps you safe and effective once you're in the real world."},
      {q:"How could you use it in IELTS?", a:"Education topics: 'Universities produce book-smart graduates, but the workplace demands street smarts that only experience can teach.'"}
    ],
    comparison:{
      topic:"Describe something you learned outside of school.",
      score5:"I learned how to talk to people from my first job. School did not teach me that. I made many mistakes. Now I am better.",
      score7:"My first job taught me <span class='hl'>street smarts</span> that no classroom ever could — how to <span class='hl'>read a room</span>, when to speak up and when to stay quiet, how to negotiate without burning bridges. School made me <span class='hl'>book smart</span>; life made me <span class='hl'>street smart</span>, and I needed both.",
      analysis:"5分用 learned / not teach 等基础表达。7分用 street smarts, read a room, book smart 等表达，把'学校vs生活'的对比讲得层次分明。",
      tags:["lexical resource","coherence","critical thinking"]
    }
  },
  {
    id:47, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"in light of",
    chinese:"鉴于，考虑到",
    source:"摩登家庭 S01E05", category:"discourse marker",
    keywords:[
      {word:"in light of", pos:"discourse marker", meaning:"鉴于"},
      {word:"in light of this", pos:"phrase", meaning:"鉴于这一点"}
    ],
    usage:"书面连接词，表示'鉴于……情况'，引出基于此的结论或行动。剧中：'Now in light of what happened at school today, do you have any feelings you'd like to express?' 雅思写作Task 2高频。",
    example:"In light of recent events, the company has decided to postpone the launch.",
    cloze:{text:"______ ______ ______ recent events, the company has decided to postpone the launch.", answer:"In|light|of", hint:"填三个词，用 | 分隔（首字母大写）"},
    questions:[
      {q:"What does 'in light of' signal in a sentence?", a:"It introduces the reason or context for a decision — 'because of this new information.' It connects a cause to a logical response."},
      {q:"Is it formal or informal?", a:"Formal — very common in IELTS Writing Task 2 and business writing. In speech, people might say 'given that' or 'considering.'"},
      {q:"Can you give an IELTS Writing example?", a:"'In light of the environmental damage caused by single-use plastics, governments should introduce stricter regulations.'"}
    ],
    comparison:{
      topic:"Describe a decision that was influenced by new information.",
      score5:"I wanted to study computer science. But my cousin told me it is very hard to find a job now. So I changed my major to business. I am happy now.",
      score7:"<span class='hl'>In light of</span> the <span class='hl'>shifting job market</span>, I decided to switch from pure computer science to a business-oriented program. <span class='hl'>New information changed my calculus</span>: a degree should be both something I love and something the market values.",
      analysis:"5分用 told me / so I changed 等基础因果。7分用 in light of, shifting job market, changed my calculus 等表达，把决定描述为理性权衡而非冲动。",
      tags:["discourse marker","lexical resource","coherence"]
    }
  },
  {
    id:48, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"make fun of someone",
    chinese:"取笑某人，开某人的玩笑",
    source:"摩登家庭 S01E05", category:"collocation",
    keywords:[
      {word:"make fun of", pos:"phrasal verb", meaning:"取笑 / 嘲笑"},
      {word:"poke fun at", pos:"phrase", meaning:"打趣（相关表达）"}
    ],
    usage:"善意或恶意的取笑。Claire：'He made fun of my hair once.' 雅思口语描述校园/职场经历时很常用，注意语气区分善意打趣与恶意嘲讽。",
    example:"My colleagues make fun of my accent, but I know they mean it affectionately.",
    cloze:{text:"My colleagues ______ ______ ______ my accent, but I know they mean it affectionately.", answer:"make|fun|of", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"Is 'make fun of' always negative?", a:"Not always — context matters. Among close friends it can be affectionate teasing; used about sensitive traits or strangers, it becomes bullying."},
      {q:"How is it different from 'tease'?", a:"'Tease' can be playful and gentle; 'make fun of' leans more toward mocking. 'Poke fun at' is a lighter, more affectionate variant."},
      {q:"How could you use it in IELTS?", a:"Describing childhood or school: 'Kids used to make fun of my glasses, which made me self-conscious for years.'"}
    ],
    comparison:{
      topic:"Describe a time you felt embarrassed or mocked.",
      score5:"When I was young, some boys made fun of my shoes. I was very sad. I did not want to go to school. My mother told me it is not important.",
      score7:"In middle school, a few boys <span class='hl'>made fun of</span> my secondhand uniform — <span class='hl'>relentlessly</span>, day after day. It <span class='hl'>chipped away at</span> my confidence until my father sat me down and said: people who mock others are revealing their own insecurities, not your flaws. It took years, but I <span class='hl'>internalized</span> that.",
      analysis:"5分用 made fun of / very sad 等基础表达，情感单薄。7分用 relentlessly, chipped away at, internalized 等表达，并给出'嘲笑暴露的是对方的不安'的成熟认知。",
      tags:["lexical resource","narrative detail","reflective depth"]
    }
  },
  {
    id:49, type:"phrase", level:"6.5+", topic:"education", dimension:"talent", english:"a thirst for knowledge",
    chinese:"求知欲，对知识的渴望",
    source:"摩登家庭 S01E05", category:"collocation",
    keywords:[
      {word:"a thirst for", pos:"collocation", meaning:"对…的渴望"},
      {word:"thirst", pos:"n.", meaning:"口渴 → 引申为渴望"}
    ],
    usage:"形容强烈的求知欲望，比 'curiosity' 更有画面感。Claire 夸儿子：'He's got this almost scientific mind with a thirst for knowledge.' 雅思口语描述学习态度时加分。",
    example:"What sets great students apart is a genuine thirst for knowledge, not just good grades.",
    cloze:{text:"What sets great students apart is a genuine ______ for ______, not just good grades.", answer:"thirst|knowledge", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"Why is 'thirst' a powerful metaphor here?", a:"Thirst is a physical, urgent need — comparing the desire for knowledge to it suggests something deep and unignorable, not a casual interest."},
      {q:"How does this differ from 'curiosity'?", a:"Curiosity is lighter — wanting to know. A thirst for knowledge is consuming and continuous — it drives lifelong learning."},
      {q:"How could you use it in IELTS?", a:"Describing education or a person: 'My grandfather had an insatiable thirst for knowledge — he taught himself three languages in his sixties.'"}
    ],
    comparison:{
      topic:"Describe a person who inspires you to learn.",
      score5:"My grandfather is very old but he reads many books. He always asks questions. He tells me learning is important. I want to be like him.",
      score7:"My grandfather has an <span class='hl'>insatiable thirst for knowledge</span> — at 78, he's <span class='hl'>mastered</span> a second language and reads history <span class='hl'>like others binge-watch shows</span>. Watching him, I learned that curiosity isn't a phase of youth; it's a <span class='hl'>lifelong habit</span>.",
      analysis:"5分用 reads many books / asks questions 等基础描述。7分用 insatiable thirst for knowledge, mastered, lifelong habit 等表达，并用比喻（像追剧一样读史）让描述生动。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  // ===== 摩登家庭 S01E06 实拍提取 =====
  {
    id:50, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"hang by a thread",
    chinese:"千钧一发，命悬一线",
    source:"摩登家庭 S01E06", category:"idiom",
    keywords:[
      {word:"hang by a thread", pos:"idiom", meaning:"危在旦夕 / 千钧一发"},
      {word:"thread", pos:"n.", meaning:"细线 → 隐喻脆弱支撑"}
    ],
    usage:"形容处境极其危险、随时可能崩溃。车里乱开时 Claire：'Makes you realize we're all just hanging by a thread.' 也用于事业、关系、生命悬于一线。",
    example:"After the scandal, the company's future hung by a thread.",
    cloze:{text:"After the scandal, the company's future ______ ______ a ______.", answer:"hung|by|thread", hint:"填三个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does the image of a 'thread' convey?", a:"A thread is the weakest possible support — everything depends on something fragile. It creates instant tension: one snap and it's over."},
      {q:"When might you use it in IELTS?", a:"Describing risk or crisis: 'The whole project hung by a thread until the investor agreed to extend the deadline.'"},
      {q:"Is it only used for life-threatening situations?", a:"No — careers, relationships, and reputations can all hang by a thread. It signals precariousness in any domain."}
    ],
    comparison:{
      topic:"Describe a risky or dangerous situation you experienced.",
      score5:"One time we drove on a very narrow road in the mountain. There was no wall on one side. I was very afraid. We were very careful and we passed.",
      score7:"Driving through the mountain pass, with a <span class='hl'>sheer drop</span> inches from the wheels, our safety genuinely <span class='hl'>hung by a thread</span> — one <span class='hl'>wrong turn</span> and it would've been over. It's the kind of experience that reminds you how <span class='hl'>thin the line</span> between a good day and a bad one really is.",
      analysis:"5分用 narrow road / very afraid 等基础描述。7分用 sheer drop, hung by a thread, thin the line 等表达，营造画面感并升华出'生死一线'的感悟。",
      tags:["lexical resource","idiomatic language","rhetorical effect"]
    }
  },
  {
    id:51, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"loosen up",
    chinese:"放松点，别绷着",
    source:"摩登家庭 S01E06", category:"phrasal verb",
    keywords:[
      {word:"loosen up", pos:"phrasal verb", meaning:"放松 / 别紧张"},
      {word:"loosen", pos:"v.", meaning:"松开"}
    ],
    usage:"让紧张的人放松下来、别太较真。Cam 劝 Mitchell：'You need to loosen up and have fun.' 也常用于开场活动（warm-up）。",
    example:"You've been working nonstop — it's time to loosen up and enjoy the weekend.",
    cloze:{text:"You've been working nonstop — it's time to ______ ______ and enjoy the weekend.", answer:"loosen|up", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the literal image behind 'loosen up'?", a:"Loosening a tight knot or stiff muscle — releasing tension. Applied to people, it means relaxing your rigid posture, attitude, or expectations."},
      {q:"When is it appropriate to tell someone to loosen up?", a:"When they're overthinking, being overly formal, or ruining the mood with stress. It should be said gently, not dismissively."},
      {q:"How could you use it in IELTS?", a:"Describing personality: 'My brother is too serious at work — I keep telling him to loosen up and not take every comment personally.'"}
    ],
    comparison:{
      topic:"Describe someone who is too serious or uptight.",
      score5:"My boss is very serious. He never smiles. He checks everything twice. I think he worries too much. We all feel stressed when he is around.",
      score7:"My former manager was so <span class='hl'>uptight</span> that the whole office <span class='hl'>walked on eggshells</span> around him. Someone once told him to <span class='hl'>loosen up</span> at a team dinner, and you could see him physically struggle to smile. <span class='hl'>Tension, I've realized, is often just fear wearing a suit</span>.",
      analysis:"5分用 very serious / never smiles 等基础描述。7分用 uptight, walked on eggshells, loosen up 等表达，结尾'紧张常是穿了西装的恐惧'一句有洞察。",
      tags:["lexical resource","rhetorical effect","coherence"]
    }
  },
  {
    id:52, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"make a judgment call",
    chinese:"当机立断，临场决断",
    source:"摩登家庭 S01E06", category:"collocation",
    keywords:[
      {word:"make a judgment call", pos:"collocation", meaning:"临场判断 / 凭经验决断"},
      {word:"judgment call", pos:"n.", meaning:"主观判断"}
    ],
    usage:"在没有明确规则或数据时，凭经验和直觉做出的决定。Cam：'I made a judgment call. You weren't there.' 职场中常用于为非常规决定辩护。",
    example:"The rule didn't cover this case, so I had to make a judgment call.",
    cloze:{text:"The rule didn't cover this case, so I had to ______ a ______ call.", answer:"make|judgment", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What kind of decisions are 'judgment calls'?", a:"Gray-area decisions where no policy or data gives a clear answer — you rely on experience, context, and instinct. They can't be fully justified by rules."},
      {q:"Why are judgment calls risky in the workplace?", a:"They can be second-guessed after the fact, especially if outcomes are bad. That's why people document the reasoning behind them."},
      {q:"How could you use it in IELTS?", a:"Describing decisions: 'There was no precedent, so I made a judgment call — it worked, but I couldn't have guaranteed it.'"}
    ],
    comparison:{
      topic:"Describe a time you made a quick decision.",
      score5:"My friend was sick and we had a test. I decided to go to his home to help him. I told my mother I will come back later. It was a quick decision.",
      score7:"When our group project was <span class='hl'>falling apart</span> two days before the deadline, I had to <span class='hl'>make a judgment call</span> — <span class='hl'>scrap</span> the half-finished design and start over with something simpler. It <span class='hl'>went against</span> everything the team had planned, but sometimes <span class='hl'>pragmatism beats loyalty to a bad idea</span>.",
      analysis:"5分用 decided / told mother 等基础表达，决定过于琐碎。7分用 falling apart, make a judgment call, went against, pragmatism beats loyalty 等表达，决策有格局有反思。",
      tags:["lexical resource","critical thinking","coherence"]
    }
  },
  {
    id:53, type:"phrase", level:"6.5+", topic:"education", dimension:"learning", english:"keep up with",
    chinese:"跟上，不落后",
    source:"摩登家庭 S01E06", category:"phrasal verb",
    keywords:[
      {word:"keep up with", pos:"phrasal verb", meaning:"跟上 / 不落后于"},
      {word:"keep pace with", pos:"phrase", meaning:"与…同步（正式变体）"}
    ],
    usage:"在速度、进度、标准上不落后。Claire：'I'm not sure you're gonna be able to keep up with me.' 学习、工作、社会变化场景都常用。",
    example:"It's hard to keep up with the latest technology trends these days.",
    cloze:{text:"It's hard to ______ ______ ______ the latest technology trends these days.", answer:"keep|up|with", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'keep up with' imply about effort?", a:"That staying level requires continuous effort — the other side is moving, so you must keep moving too. It implies a competitive or fast-paced context."},
      {q:"How is it used in education?", a:"'I struggled to keep up with the advanced class' — common for describing academic pressure. Also 'keep up with the news' for staying informed."},
      {q:"What's a formal alternative?", a:"'Keep pace with' — slightly more formal: 'Wages have failed to keep pace with inflation.'"}
    ],
    comparison:{
      topic:"Describe something you find difficult to keep up with.",
      score5:"Technology changes very fast. New phones come out every year. I cannot buy them all. Sometimes I feel I am old. My young brother teaches me.",
      score7:"I find it genuinely hard to <span class='hl'>keep up with</span> the pace of technological change. Every month brings a new app, a new trend, a new <span class='hl'>piece of jargon</span>. What's humbling is that my ten-year-old nephew <span class='hl'>navigates</span> it effortlessly — <span class='hl'>fluency with change</span> may be the real new literacy.",
      analysis:"5分用 very fast / cannot buy 等基础表达，停留在物质层面。7分用 keep up with, jargon, navigates, fluency with change 等表达，把'跟不上'提升到'变化即新素养'的认识。",
      tags:["lexical resource","coherence","critical thinking"]
    }
  },
  {
    id:54, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"take advantage of",
    chinese:"利用（机会），好好把握",
    source:"摩登家庭 S01E06", category:"phrasal verb",
    keywords:[
      {word:"take advantage of", pos:"phrasal verb", meaning:"利用（机会/资源）"},
      {word:"seize the opportunity", pos:"phrase", meaning:"抓住机会（相关）"}
    ],
    usage:"积极利用机会或资源。Gloria：'We should take advantage of it.' 中性偏正面；但 take advantage of someone 则表示占人便宜，注意区分。",
    example:"You should take advantage of the free courses while you're a student.",
    cloze:{text:"You should ______ ______ ______ the free courses while you're a student.", answer:"take|advantage|of", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What's the positive use of this phrase?", a:"Making the most of opportunities, resources, or favorable conditions — 'take advantage of the discount, the mentorship, the moment.'"},
      {q:"What's the negative use, and how do you tell them apart?", a:"'Take advantage of someone' means exploiting them. The object makes the difference: 'of an opportunity' is positive; 'of a person' is exploitative."},
      {q:"How could you use it in IELTS?", a:"Advice topics: 'Students should take advantage of university resources — libraries, mentors, and exchange programs — because these windows close fast.'"}
    ],
    comparison:{
      topic:"Describe an opportunity you made the most of.",
      score5:"My university had an exchange program. I was not sure at first. My teacher said I should go. I went to Korea for one year. It was very good.",
      score7:"When my university announced an exchange program, I <span class='hl'>hesitated</span> — new country, new language, unknown. But I decided to <span class='hl'>take full advantage of</span> the opportunity, and that year in Korea <span class='hl'>reshaped</span> how I see the world. <span class='hl'>Opportunities rarely announce themselves twice</span>.",
      analysis:"5分用 not sure / went / very good 等基础表达。7分用 hesitated, take full advantage of, reshaped 等表达，结尾'机会很少敲门两次'的格言提升了格局。",
      tags:["lexical resource","coherence","reflective depth"]
    }
  },
  {
    id:55, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"look up to someone",
    chinese:"崇拜某人，敬仰某人",
    source:"摩登家庭 S01E06", category:"phrasal verb",
    keywords:[
      {word:"look up to", pos:"phrasal verb", meaning:"崇拜 / 敬仰"},
      {word:"admire", pos:"v.", meaning:"钦佩（正式变体）"}
    ],
    usage:"把某人视为榜样，心怀敬仰。Gloria 对 Jay：'Jay, he looks up to you.' 比 admire 更口语，强调'仰视'的关系。",
    example:"Growing up, I always looked up to my older sister.",
    cloze:{text:"Growing up, I always ______ ______ ______ my older sister.", answer:"looked|up|to", hint:"填三个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What's the visual imagery behind 'look up to'?", a:"Physically looking upward at someone taller — metaphorically, placing them above you in respect and admiration. The opposite is 'look down on.'"},
      {q:"How does it differ from 'respect'?", a:"Respect is broader and can be neutral. 'Look up to' implies admiration and wanting to emulate — usually reserved for role models."},
      {q:"How could you use it in IELTS?", a:"Describing role models: 'I look up to my coach not because he's perfect, but because he never gives up on anyone.'"}
    ],
    comparison:{
      topic:"Describe a role model you look up to.",
      score5:"I look up to my English teacher. She is kind and patient. She helped me a lot. I want to be a teacher like her in the future.",
      score7:"The person I <span class='hl'>look up to</span> most is my high school teacher — not for her achievements, but for how she <span class='hl'>treated the students no one else believed in</span>. She gave extra time to the <span class='hl'>struggling</span> ones, quietly and without <span class='hl'>expecting credit</span>. That's the kind of person I hope to become.",
      analysis:"5分用 kind / helped me 等基础描述。7分用 look up to, struggling, without expecting credit 等表达，通过'善待没人相信的学生'这个具体细节展现榜样价值。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  {
    id:56, type:"phrase", level:"7+", topic:"skills", dimension:"mastery", english:"have it down pat",
    chinese:"熟练掌握，驾轻就熟",
    source:"摩登家庭 S01E06", category:"idiom",
    keywords:[
      {word:"have something down pat", pos:"idiom", meaning:"掌握得滚瓜烂熟"},
      {word:"pat", pos:"adj.", meaning:"恰到好处的"}
    ],
    usage:"把技能或流程练到完美、无需思考的程度。Jay 自嘲：'Maybe by my third marriage, I'll have it down pat.' 雅思口语描述技能熟练度时很地道。",
    example:"After months of practice, she has the routine down pat.",
    cloze:{text:"After months of practice, she has the routine ______ ______.", answer:"down|pat", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'down pat' mean exactly?", a:"Perfectly memorized or mastered — you can perform it flawlessly, automatically, without thinking. 'Pat' here means apt or ready."},
      {q:"How does it differ from 'good at'?", a:"'Good at' is a general ability. 'Have it down pat' emphasizes the polish and automaticity that come from heavy repetition."},
      {q:"How could you use it in IELTS?", a:"Skills topics: 'After a hundred presentations, I finally have the structure down pat — now the nerves are gone too.'"}
    ],
    comparison:{
      topic:"Describe a skill you have mastered.",
      score5:"I can cook noodles very well. My family likes them. I make them every weekend. I learned from my mother. Now I do not need to look at the book.",
      score7:"I've been making my grandmother's dumplings for years, and now I have the whole process <span class='hl'>down pat</span> — the <span class='hl'>dough-to-filling ratio</span>, the pleat pattern, even the timing of when to boil. <span class='hl'>Mastery, I've learned, is just repetition with attention</span>.",
      analysis:"5分用 cook well / learned from mother 等基础表达。7分用 down pat, dough-to-filling ratio, pleat pattern 等细节，结尾'熟练就是带着专注的重复'有洞察。",
      tags:["lexical resource","narrative detail","rhetorical effect"]
    }
  },
  {
    id:57, type:"phrase", level:"6.5+", topic:"work", dimension:"career", english:"be in demand",
    chinese:"抢手，需求量大",
    source:"摩登家庭 S01E06", category:"collocation",
    keywords:[
      {word:"be in demand", pos:"collocation", meaning:"很抢手 / 需求大"},
      {word:"in high demand", pos:"phrase", meaning:"极度抢手"}
    ],
    usage:"形容技能、产品或人很受欢迎、被大量需要。剧中：'A cello is more in demand in university orchestras.' 雅思讨论就业市场时的高频表达。",
    example:"Data scientists are in high demand these days.",
    cloze:{text:"Data scientists are in ______ demand these days.", answer:"high", hint:"填一个词"},
    questions:[
      {q:"What does 'in demand' mean for a skill or profession?", a:"That many employers want it — supply can't keep up with need, which usually means good pay and job security for those who have it."},
      {q:"How could you use it in IELTS?", a:"Work topics: 'Skills like data analysis are increasingly in demand as companies digitize their operations.'"},
      {q:"What's the opposite?", a:"'In oversupply' or 'not in demand' — e.g., 'Traditional clerical skills are less in demand now.'"}
    ],
    comparison:{
      topic:"Describe a skill that is valuable in today's job market.",
      score5:"Now many companies need people who can use computers. My friend learned to make websites. Now he has a good job. I think computer skills are useful.",
      score7:"In today's job market, <span class='hl'>data literacy</span> is <span class='hl'>in high demand</span> — not just for analysts, but across marketing, finance, even HR. A colleague who taught himself <span class='hl'>basic analytics</span> <span class='hl'>outpaced</span> more senior peers, simply because he could <span class='hl'>let the numbers speak</span>.",
      analysis:"5分用 need people / useful 等基础表达。7分用 data literacy, in high demand, outpaced, let the numbers speak 等表达，用具体例子支撑论点。",
      tags:["lexical resource","coherence","critical thinking"]
    }
  },
// ===== 摩登家庭 S01E07 实拍提取 =====
  {
    id:58, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"drop the ball",
    chinese:"搞砸了，失职了",
    source:"摩登家庭 S01E07", category:"idiom",
    keywords:[
      {word:"drop the ball", pos:"idiom", meaning:"搞砸 / 失职"},
      {word:"ball", pos:"n.", meaning:"球 → 隐喻责任"}
    ],
    usage:"源于球类运动中接球失误，引申为没有承担好责任、把事情办砸。剧中：'We dropped the ball a little bit on that one.' 职场认错、自嘲都常用。",
    example:"The team dropped the ball on the launch — the website went down on day one.",
    cloze:{text:"The team ______ the ______ on the launch — the website went down on day one.", answer:"dropped|ball", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What's the sports origin of 'drop the ball'?", a:"In baseball or American football, dropping the ball loses possession and can lose the game. Metaphorically, it means failing to handle your responsibility."},
      {q:"How is it used when admitting a mistake?", a:"'We dropped the ball on this one' is a humble, direct way to own a failure — it takes responsibility without drama."},
      {q:"How could you use it in IELTS?", a:"Describing failures: 'The organizers dropped the ball on communication — attendees showed up to a canceled event.'"}
    ],
    comparison:{
      topic:"Describe a time you or a team made a mistake.",
      score5:"Our class had a group project. My group forgot the date of the presentation. We were not ready. The teacher was not happy. We got a low score.",
      score7:"Our team <span class='hl'>dropped the ball</span> on the final presentation — we were so focused on the content that we <span class='hl'>overlooked</span> the demo, which <span class='hl'>crashed</span> on stage. <span class='hl'>We owned it</span> immediately, but the lesson stuck: <span class='hl'>the part you forget to rehearse is the part that fails</span>.",
      analysis:"5分用 forgot / not happy / low score 等基础表达。7分用 dropped the ball, overlooked, crashed, owned it 等表达，结尾'没排练的部分就是出问题的部分'有洞察。",
      tags:["lexical resource","idiomatic language","reflective depth"]
    }
  },
  {
    id:59, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"get butterflies",
    chinese:"心里七上八下，紧张不安",
    source:"摩登家庭 S01E07", category:"idiom",
    keywords:[
      {word:"get butterflies (in your stomach)", pos:"idiom", meaning:"紧张 / 忐忑"},
      {word:"butterflies", pos:"n.", meaning:"蝴蝶 → 胃里乱飞的感觉"}
    ],
    usage:"形容紧张、激动或忐忑的感觉，尤其上场前、表白前、考试前。Jay 安慰 Manny：'That's probably just butterflies.' 比 nervous 更生动。",
    example:"I always get butterflies before a job interview.",
    cloze:{text:"I always get ______ before a job interview.", answer:"butterflies", hint:"填一个词"},
    questions:[
      {q:"What does the 'butterflies' image convey?", a:"The fluttery, restless feeling in your stomach when you're nervous or excited — like butterflies flying around inside. It captures physical nervousness vividly."},
      {q:"Is it always negative?", a:"Not necessarily — it can be excitement too. 'Butterflies of anticipation' before something thrilling. The line between nerves and excitement is thin."},
      {q:"How could you use it in IELTS?", a:"Describing performances: 'The first time I gave a speech, I got butterflies so bad I almost forgot my opening line.'"}
    ],
    comparison:{
      topic:"Describe a situation that made you nervous.",
      score5:"Before my final exam I was very nervous. I could not sleep the night before. But when I started the exam, I felt better. I passed.",
      score7:"Before my first <span class='hl'>public presentation</span>, I <span class='hl'>got butterflies</span> so intense I could barely <span class='hl'>hold my notes steady</span>. Then a mentor told me something that <span class='hl'>reframed everything</span>: nerves and excitement are the same energy — <span class='hl'>it's just what you label it</span>.",
      analysis:"5分用 very nervous / could not sleep 等基础表达。7分用 got butterflies, hold my notes steady, reframed everything 等表达，把紧张重新定义为能量，有心理学视角。",
      tags:["lexical resource","narrative detail","reflective depth"]
    }
  },
  {
    id:60, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"get your panties in a bunch",
    chinese:"为小事心烦意乱，气急败坏",
    source:"摩登家庭 S01E07", category:"slang idiom",
    keywords:[
      {word:"get your panties in a bunch", pos:"slang idiom", meaning:"为小事急躁 / 恼火"},
      {word:"in a bunch", pos:"phrase", meaning:"纠结成团"}
    ],
    usage:"调侃式地指某人因为小事过度激动或不满。Jay：'Let's talk about why you got your panties in a bunch.' 偏口语俚语，朋友间用，正式场合慎用。",
    example:"Don't get your panties in a bunch — it was just a joke.",
    cloze:{text:"Don't get your ______ in a ______ — it was just a joke.", answer:"panties|bunch", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does this idiom mean and how casual is it?", a:"It means getting unnecessarily upset or agitated over something minor. It's quite colloquial — fine among friends, too casual and slightly rude for formal settings."},
      {q:"What's a more neutral way to say it?", a:"'Get worked up' or 'get upset over nothing' — same meaning, politer register. E.g., 'Don't get worked up over such a small issue.'"},
      {q:"How could you use it in IELTS?", a:"Only in informal Speaking contexts or when describing others' behavior: 'He gets his panties in a bunch over any criticism.'"}
    ],
    comparison:{
      topic:"Describe a time someone overreacted to something small.",
      score5:"My brother got very angry because I used his shampoo. He shouted at me for ten minutes. I thought it was not a big thing. He is like that.",
      score7:"My brother once <span class='hl'>got his panties in a bunch</span> over a borrowed shampoo — ten minutes of <span class='hl'>righteous indignation</span> over something <span class='hl'>worth about three yuan</span>. I've noticed people who <span class='hl'>overreact to small things</span> are usually carrying stress from much bigger ones.",
      analysis:"5分用 very angry / shouted 等基础表达。7分用 got his panties in a bunch, righteous indignation, overreact 等表达，并给出'对小事过激往往源于大事压力'的洞察。",
      tags:["lexical resource","humor","critical thinking"]
    }
  },
  {
    id:61, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"stir up",
    chinese:"激起（情绪/麻烦），煽动",
    source:"摩登家庭 S01E07", category:"phrasal verb",
    keywords:[
      {word:"stir up", pos:"phrasal verb", meaning:"激起 / 挑起"},
      {word:"stir up resentment", pos:"collocation", meaning:"激起怨恨"}
    ],
    usage:"激起负面情绪、麻烦或争议。剧中问 Mitchell：'Didn't stir up any resentment?' 也常说 stir up trouble / stir up controversy。",
    example:"His careless comment stirred up a lot of resentment among the staff.",
    cloze:{text:"His careless comment ______ ______ a lot of resentment among the staff.", answer:"stirred|up", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does 'stir up' imply about the action?", a:"Like stirring a pot — bringing hidden things to the surface. It suggests actively provoking emotions or problems that were dormant."},
      {q:"What are common collocations?", a:"Stir up trouble, stir up controversy, stir up memories, stir up resentment. The objects are usually negative or emotional."},
      {q:"How could you use it in IELTS?", a:"Media or society topics: 'Some headlines are designed to stir up division rather than inform the public.'"}
    ],
    comparison:{
      topic:"Describe a situation where words caused trouble.",
      score5:"My friend said something bad about another friend. The other friend heard it. They had a fight. I think we should be careful what we say.",
      score7:"A <span class='hl'>thoughtless remark</span> about the team's work ethic <span class='hl'>stirred up</span> resentment that had been <span class='hl'>simmering for months</span>. The person meant it casually; the damage was anything but. <span class='hl'>Words, once spoken, write their own history</span>.",
      analysis:"5分用 said something bad / had a fight 等基础表达。7分用 thoughtless remark, stirred up, simmering 等表达，结尾'话语一旦出口就写下自己的历史'有文采。",
      tags:["lexical resource","rhetorical effect","coherence"]
    }
  },
  {
    id:62, type:"phrase", level:"6.5+", topic:"values", dimension:"principles", english:"take things too far",
    chinese:"做得太过分了",
    source:"摩登家庭 S01E07", category:"collocation",
    keywords:[
      {word:"take things too far", pos:"collocation", meaning:"做得过火"},
      {word:"go too far", pos:"phrase", meaning:"过头（变体）"}
    ],
    usage:"行为或玩笑超出了合理界限。剧中：'You always just take things a little too far.' 常用于制止过度行为。",
    example:"His practical jokes were funny at first, but he took things too far.",
    cloze:{text:"His practical jokes were funny at first, but he ______ things too ______.", answer:"took|far", hint:"填两个词，用 | 分隔（过去式）"},
    questions:[
      {q:"What does 'take things too far' mean?", a:"To exceed acceptable limits — a joke stops being funny, criticism becomes bullying, enthusiasm becomes obsession."},
      {q:"How is it used to set boundaries?", a:"'I think you're taking this too far' is a clear, calm way to signal that behavior has crossed a line."},
      {q:"How could you use it in IELTS?", a:"Describing conflict or discipline: 'Competition is healthy, but my school took it too far by ranking students publicly.'"}
    ],
    comparison:{
      topic:"Describe a time someone crossed a line.",
      score5:"My classmate always makes jokes about my weight. At first I did not say anything. One day he made a very bad joke. I told the teacher.",
      score7:"What started as <span class='hl'>good-natured teasing</span> about my cooking eventually <span class='hl'>crossed a line</span> — the jokes got personal and <span class='hl'>started following me into meetings</span>. I finally told him plainly: 'You've taken this too far.' <span class='hl'>Boundaries aren't walls; they're lines that protect respect</span>.",
      analysis:"5分用 bad joke / told the teacher 等基础表达。7分用 good-natured teasing, crossed a line, taken this too far 等表达，结尾'边界不是墙，是守护尊重的线'有深度。",
      tags:["lexical resource","idiomatic language","reflective depth"]
    }
  },
  {
    id:63, type:"phrase", level:"6.5+", topic:"education", dimension:"talent", english:"excel at",
    chinese:"擅长，出类拔萃",
    source:"摩登家庭 S01E07", category:"collocation",
    keywords:[
      {word:"excel at", pos:"collocation", meaning:"擅长 / 出类拔萃"},
      {word:"excel", pos:"v.", meaning:"胜过 / 擅长"}
    ],
    usage:"在某方面做得非常出色。Phil 和 Claire 帮卢克找特长：'We make a list of areas the boy might excel at.' 比 be good at 更正式有力。",
    example:"She excels at mathematics but struggles with public speaking.",
    cloze:{text:"She ______ at mathematics but struggles with public speaking.", answer:"excels", hint:"填一个词（三单形式）"},
    questions:[
      {q:"How does 'excel at' differ from 'be good at'?", a:"'Excel' means to surpass — not just competent, but outstanding. It implies a high standard of performance, often relative to others."},
      {q:"When is it appropriate in IELTS?", a:"Describing strengths: 'He excels at problem-solving under pressure' — stronger and more impressive than 'he is good at problems.'"},
      {q:"What's the noun form?", a:"'Excellence' — 'the pursuit of excellence.' Often used in education and business contexts."}
    ],
    comparison:{
      topic:"Describe something you are good at.",
      score5:"I am good at drawing. I draw since I was a child. My teacher says my pictures are nice. I want to be an artist one day.",
      score7:"The one thing I <span class='hl'>excel at</span> is <span class='hl'>visual communication</span> — I can take a messy idea and <span class='hl'>distill it</span> into a sketch people instantly understand. It's not just a hobby; it's how I <span class='hl'>make myself understood</span> across language barriers.",
      analysis:"5分用 good at / nice 等基础表达。7分用 excel at, distill it, make myself understood 等表达，把画画的技能上升到'跨语言沟通'的层面。",
      tags:["lexical resource","coherence","fluency"]
    }
  },
  {
    id:64, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"sneak out",
    chinese:"偷偷溜出去",
    source:"摩登家庭 S01E07", category:"phrasal verb",
    keywords:[
      {word:"sneak out", pos:"phrasal verb", meaning:"溜出去"},
      {word:"sneak", pos:"v.", meaning:"偷偷地走/做"}
    ],
    usage:"不惊动他人地悄悄离开。Claire：'It just took me some time to sneak out without waking her up.' 描述行动时很生动。",
    example:"The teenagers sneaked out of the house after their parents fell asleep.",
    cloze:{text:"The teenagers ______ out of the house after their parents fell asleep.", answer:"sneaked", hint:"填一个词（过去式）"},
    questions:[
      {q:"What does 'sneak out' imply about the manner of leaving?", a:"Quietly and secretly, to avoid being noticed. It implies avoiding someone who might stop you — parents, guards, bosses."},
      {q:"What are related phrasal verbs?", a:"'Sneak in' (enter secretly), 'sneak a look' (glance secretly). All share the idea of avoiding detection."},
      {q:"How could you use it in IELTS?", a:"Storytelling: 'We sneaked out of the dorm to watch the meteor shower — it was against the rules but worth every minute.'"}
    ],
    comparison:{
      topic:"Describe a time you broke a rule for a good reason.",
      score5:"When I was a student, we sneaked out of the dorm at night to see a movie. The guard found us. We were punished. But the movie was very good.",
      score7:"We <span class='hl'>sneaked out</span> of the dormitory past midnight to watch a <span class='hl'>meteor shower</span> — <span class='hl'>strictly against the rules</span>. We got caught and punished, but standing in that freezing field, <span class='hl'>watching the sky fall</span>, I learned that some memories are <span class='hl'>worth a punishment</span>.",
      analysis:"5分用 sneaked out / punished / very good 等基础表达。7分用 strictly against the rules, watching the sky fall, worth a punishment 等表达，把违规经历写成值得的画面。",
      tags:["lexical resource","narrative structure","reflective depth"]
    }
  },
  {
    id:65, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"bubble up",
    chinese:"（情绪）浮现，翻涌上来",
    source:"摩登家庭 S01E07", category:"phrasal verb",
    keywords:[
      {word:"bubble up", pos:"phrasal verb", meaning:"（压抑的情绪）浮现"},
      {word:"bubble", pos:"v.", meaning:"冒泡"}
    ],
    usage:"形容被压抑的情绪最终不受控制地浮现/爆发。Claire 评价 Mitchell：'You bury them, and then they bubble up later in hurtful ways.'",
    example:"Repressed anger has a way of bubbling up when you least expect it.",
    cloze:{text:"Repressed anger has a way of ______ ______ when you least expect it.", answer:"bubbling|up", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the image behind 'bubble up'?", a:"Like bubbles rising to the surface of water — suppressed feelings gradually rise until they break the surface. It captures the inevitability of repressed emotion."},
      {q:"Why is this relevant to mental health?", a:"It warns that avoiding emotions doesn't delete them — they resurface, often as anger or anxiety, in hurtful ways. Processing feelings early is healthier."},
      {q:"How could you use it in IELTS?", a:"Describe emotions: 'All the little frustrations bubbled up during the argument — it wasn't about the dishes at all.'"}
    ],
    comparison:{
      topic:"Describe a time you couldn't control your emotions.",
      score5:"I was stressed about many things. My roommate left a mess again. I shouted at her. I felt bad after. I said sorry. She said it is okay.",
      score7:"I'd been <span class='hl'>swallowing small frustrations</span> for weeks — deadlines, sleep, <span class='hl'>a thousand tiny annoyances</span> — and one morning they all <span class='hl'>bubbled up</span> at my roommate over a pile of dishes. It wasn't about the dishes; it was <span class='hl'>everything they represented</span>. We talked it out, and I started dealing with stress <span class='hl'>before it reached boiling point</span>.",
      analysis:"5分用 shouted / felt bad / said sorry 等基础表达。7分用 swallowing, bubbled up, everything they represented, boiling point 等表达，准确诊断'小事爆发是大事堆积'。",
      tags:["lexical resource","critical thinking","coherence"]
    }
  },
  // ===== 摩登家庭 S01E08 实拍提取 =====
  {
    id:66, type:"phrase", level:"6.5+", topic:"values", dimension:"integrity", english:"make a commitment",
    chinese:"做出承诺，承担义务",
    source:"摩登家庭 S01E08", category:"collocation",
    keywords:[
      {word:"make a commitment", pos:"collocation", meaning:"做出承诺"},
      {word:"commitment", pos:"n.", meaning:"承诺 / 投入"}
    ],
    usage:"正式答应做某事并愿意承担责任。Claire 提醒 Haley：'Sweetie, you made a commitment.' 雅思写作讨论承诺、责任、婚姻时高频。",
    example:"Before joining the club, consider whether you can honor that commitment.",
    cloze:{text:"Before joining the club, consider whether you can ______ that ______.", answer:"honor|commitment", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'commitment' imply beyond a simple promise?", a:"A promise is a statement; a commitment adds obligation and investment — you're binding yourself to follow through, often at personal cost."},
      {q:"Why is 'honoring commitments' important in relationships?", a:"Reliability builds trust. Broken commitments, however small, chip away at credibility over time."},
      {q:"How could you use it in IELTS?", a:"Work or values: 'A good leader honors commitments even when it's inconvenient — that's what earns loyalty.'"}
    ],
    comparison:{
      topic:"Describe a commitment you kept or broke.",
      score5:"I promised my sister I will help her study for the exam. I was very busy that week. But I helped her for three days. She passed. I was happy.",
      score7:"I'd <span class='hl'>made a commitment</span> to mentor a junior colleague through her first project — then my own workload <span class='hl'>exploded</span>. <span class='hl'>Keeping my word</span> meant working late, but the look on her face when she delivered was worth every hour. <span class='hl'>A commitment kept quietly is a deposit of trust</span>.",
      analysis:"5分用 promised / helped / happy 等基础表达。7分用 made a commitment, exploded, keeping my word 等表达，结尾'静默兑现的承诺是信任的存款'有格言感。",
      tags:["lexical resource","narrative detail","rhetorical effect"]
    }
  },
  {
    id:67, type:"phrase", level:"6.5+", topic:"work", dimension:"career", english:"kick off",
    chinese:"开启，启动",
    source:"摩登家庭 S01E08", category:"phrasal verb",
    keywords:[
      {word:"kick off", pos:"phrasal verb", meaning:"开始 / 启动"},
      {word:"kickoff", pos:"n.", meaning:"开幕 / 开球（名词）"}
    ],
    usage:"正式或带仪式感地开始某件事。Phil：'Those coupons were just a fun little way to kick off the day.' 会议、项目、活动都常用。",
    example:"The conference kicks off with a keynote speech by the CEO.",
    cloze:{text:"The conference ______ ______ with a keynote speech by the CEO.", answer:"kicks|off", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"Where does 'kick off' come from?", a:"American football — the opening kick that starts the game. It carries that sense of a fresh, energetic beginning."},
      {q:"How is it used in business?", a:"'Kick off a project', 'kickoff meeting' — the initial launch meeting for a project. Very common in workplace English."},
      {q:"How could you use it in IELTS?", a:"Describing events: 'The festival kicks off with a parade and ends with fireworks — a week of celebration.'"}
    ],
    comparison:{
      topic:"Describe an event or project that began well.",
      score5:"Our class had a charity sale. We started with a good idea. Many students joined. We made a lot of money for the hospital. It was very good.",
      score7:"The charity sale <span class='hl'>kicked off</span> with a <span class='hl'>flash mob</span> that drew the whole campus — the energy was <span class='hl'>electric from minute one</span>. That strong opening <span class='hl'>set the tone</span> for everything that followed, and we raised three times our target.",
      analysis:"5分用 started with a good idea / many students 等基础表达。7分用 kicked off, flash mob, electric, set the tone 等表达，把'好的开始'描述得具体可感。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  {
    id:68, type:"phrase", level:"6.5+", topic:"family", dimension:"love", english:"bring back memories",
    chinese:"勾起回忆",
    source:"摩登家庭 S01E08", category:"collocation",
    keywords:[
      {word:"bring back memories", pos:"collocation", meaning:"勾起回忆"},
      {word:"a trip down memory lane", pos:"idiom", meaning:"重温回忆（相关）"}
    ],
    usage:"某事物让人想起过去的经历。剧中：'Oh, this place brings back so many memories.' 描述怀旧情绪时的自然表达。",
    example:"The old song brings back memories of my college years.",
    cloze:{text:"The old song ______ ______ memories of my college years.", answer:"brings|back", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What kinds of things bring back memories?", a:"Songs, smells, photos, places — sensory triggers are the strongest. That's why one tune can instantly replay a whole era of your life."},
      {q:"How could you use it in IELTS?", a:"Describe an object or place: 'This photo album brings back memories of summers at my grandmother's — the smell of her kitchen is still with me.'"},
      {q:"What's a related idiom?", a:"'A trip down memory lane' — deliberately revisiting memories: 'We took a trip down memory lane looking at old yearbooks.'"}
    ],
    comparison:{
      topic:"Describe an object that holds special memories for you.",
      score5:"I have an old watch from my grandfather. He gave it to me when I was 12. It does not work now. But I keep it in a box. It is very important to me.",
      score7:"My grandfather's old watch <span class='hl'>brings back memories</span> of Saturday afternoons spent <span class='hl'>tinkering in his workshop</span>. It hasn't worked in years, but I keep it on my desk — not because it tells time, but because <span class='hl'>it tells time that mattered</span>.",
      analysis:"5分用 old watch / very important 等基础表达。7分用 brings back memories, tinkering 等表达，结尾'它不是报时，而是报那些重要的时刻'双关妙笔。",
      tags:["lexical resource","rhetorical effect","reflective depth"]
    }
  },
  {
    id:69, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"the more, the merrier",
    chinese:"人越多越热闹",
    source:"摩登家庭 S01E08", category:"proverb",
    keywords:[
      {word:"the more, the merrier", pos:"proverb", meaning:"越多越好 / 人多热闹"},
      {word:"merry", pos:"adj.", meaning:"欢乐的"}
    ],
    usage:"欢迎更多人加入的表达。Gloria：'All the other cousins are sleeping over tonight. The more, the merrier.' 聚会邀请时常用。",
    example:"Invite whoever you want — the more, the merrier.",
    cloze:{text:"Invite whoever you want — the ______, the ______.", answer:"more|merrier", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does this proverb express?", a:"A welcoming attitude — more people means more fun. It's used to reassure guests that bringing friends is welcome."},
      {q:"When might it NOT apply?", a:"When you actually want an intimate gathering — in that case saying it would be insincere. Context matters."},
      {q:"How could you use it in IELTS?", a:"Describing gatherings: 'My family's rule is the more, the merrier — Thanksgiving usually ends up with neighbors joining too.'"}
    ],
    comparison:{
      topic:"Describe a social gathering you enjoy.",
      score5:"I like parties with my friends. We eat, play games and talk. If more friends come, it is more fun. I like big parties.",
      score7:"My family's rule is <span class='hl'>the more, the merrier</span> — our dinner table has a <span class='hl'>permanent extra chair</span> for whoever shows up. Some of my best memories are of <span class='hl'>strangers becoming regulars</span> over a shared pot of hotpot. <span class='hl'>A table that expands hospitality never feels crowded</span>.",
      analysis:"5分用 like parties / more fun 等基础表达。7分用 the more the merrier, permanent extra chair, strangers becoming regulars 等表达，把'人多热闹'升华为'待客之道'。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  {
    id:70, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"get around to",
    chinese:"终于抽出时间做（拖了很久的事）",
    source:"摩登家庭 S01E08", category:"phrasal verb",
    keywords:[
      {word:"get around to", pos:"phrasal verb", meaning:"腾出时间做"},
      {word:"finally get around to", pos:"phrase", meaning:"终于去做"}
    ],
    usage:"终于去做一件拖延已久的事。Phil：'You don't change these right away, you never get around to it.' 描述拖延和弥补时非常实用。",
    example:"I keep meaning to organize my photos, but I never get around to it.",
    cloze:{text:"I keep meaning to organize my photos, but I never ______ ______ ______ it.", answer:"get|around|to", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'get around to' say about the timing?", a:"That something has been delayed or postponed, often repeatedly — and you finally find or make the time. It implies procrastination was involved."},
      {q:"How is it used to talk about procrastination?", a:"'I'll get around to it eventually' is a classic procrastination phrase — it sounds like a promise but signals low priority."},
      {q:"How could you use it in IELTS?", a:"Describing habits or goals: 'I always said I'd learn to swim, but never got around to it until my thirties.'"}
    ],
    comparison:{
      topic:"Describe something you kept postponing.",
      score5:"I wanted to learn driving for a long time. I was busy with work. I always said next month. After two years I finally started. Now I can drive.",
      score7:"I'd been meaning to learn driving for years, always <span class='hl'>promising myself 'next month'</span>. It wasn't until I missed a <span class='hl'>once-in-a-lifetime road trip</span> that I finally <span class='hl'>got around to</span> booking lessons. <span class='hl'>Procrastination is just fear wearing a calendar</span>.",
      analysis:"5分用 busy / next month / finally 等基础表达。7分用 promising myself, got around to 等表达，结尾'拖延是穿着日历的恐惧'一句点题有力。",
      tags:["lexical resource","rhetorical effect","reflective depth"]
    }
  },
  {
    id:71, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"freaking out",
    chinese:"慌了，吓坏了",
    source:"摩登家庭 S01E08", category:"phrasal verb",
    keywords:[
      {word:"freak out", pos:"phrasal verb", meaning:"吓坏 / 慌乱"},
      {word:"freak", pos:"n./v.", meaning:"怪人 / 使惊吓"}
    ],
    usage:"因害怕、震惊或压力而惊慌失措。剧中：'He's just seriously freaking out.' 比 panic 更口语生动。",
    example:"Don't freak out, but I think I lost the tickets.",
    cloze:{text:"Don't ______ ______, but I think I lost the tickets.", answer:"freak|out", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'freak out' mean and how casual is it?", a:"To panic, become extremely upset, or lose composure. It's casual and vivid — fine in speech, too informal for essays."},
      {q:"What's a formal alternative?", a:"'Panic' or 'become distraught': 'She panicked when she realized the deadline had passed.'"},
      {q:"How could you use it in IELTS?", a:"Narrating events: 'My roommate freaked out when she saw the size of the spider — the whole building heard it.'"}
    ],
    comparison:{
      topic:"Describe a moment of panic.",
      score5:"I could not find my passport before the flight. I looked everywhere. My heart was very fast. Then I found it in my jacket. I was so happy.",
      score7:"The moment I couldn't find my passport an hour before the flight, I <span class='hl'>started to freak out</span> — <span class='hl'>heart pounding</span>, mind <span class='hl'>going blank</span>. It turned out to be in the jacket I was already wearing. <span class='hl'>Panic always finds the obvious thing last</span>.",
      analysis:"5分用 could not find / very fast 等基础表达。7分用 freak out, heart pounding, going blank 等表达，结尾'恐慌总是最后才看见显而易见的东西'幽默有洞察。",
      tags:["lexical resource","narrative detail","rhetorical effect"]
    }
  },
  // ===== 摩登家庭 S01E09 实拍提取 =====
  {
    id:72, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"a complete package",
    chinese:"（条件）完美，样样俱全",
    source:"摩登家庭 S01E09", category:"idiom",
    keywords:[
      {word:"a complete package", pos:"idiom", meaning:"完美组合 / 面面俱到"},
      {word:"package", pos:"n.", meaning:"包裹 → 整体组合"}
    ],
    usage:"形容人或事物各方面都优秀、无可挑剔。Manny 夸女生：'She's a complete package.' 也可用于产品、方案。",
    example:"Great salary, good culture, and growth — this job is a complete package.",
    cloze:{text:"Great salary, good culture, and growth — this job is a ______ ______.", answer:"complete|package", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'a complete package' mean when describing a person?", a:"That they have everything desirable — looks, brains, personality, skills. Nothing is missing from the ideal combination."},
      {q:"How is it used beyond people?", a:"Products, offers, and solutions: 'The phone is a complete package — camera, battery, and price all hit the mark.'"},
      {q:"How could you use it in IELTS?", a:"Describing a job offer or product: 'The offer was a complete package — salary, training, and work-life balance.'"}
    ],
    comparison:{
      topic:"Describe a job or product that impressed you.",
      score5:"My new phone is very good. The camera is nice. The battery is long. The price is okay. I like it very much.",
      score7:"What impressed me about the job offer was that it was a <span class='hl'>complete package</span> — <span class='hl'>competitive salary</span>, genuine mentorship, and a culture that actually <span class='hl'>practiced what it preached</span> about balance. Too often companies <span class='hl'>excel in one area and fail in another</span>.",
      analysis:"5分用 very good / nice / okay 等基础表达，评价泛泛。7分用 complete package, competitive salary, practiced what it preached 等表达，用对比衬托完整性。",
      tags:["lexical resource","coherence","fluency"]
    }
  },
  {
    id:73, type:"phrase", level:"6.5+", topic:"work", dimension:"deal", english:"here's the deal",
    chinese:"听好了，是这样的",
    source:"摩登家庭 S01E09", category:"discourse marker",
    keywords:[
      {word:"here's the deal", pos:"discourse marker", meaning:"听我说 / 情况是这样"},
      {word:"the deal", pos:"n.", meaning:"安排 / 情况"}
    ],
    usage:"口语中引出关键信息或安排，像谈判开场。Jay 教 Manny：'Here's the deal. Girls don't go for all that romantic stuff.' 交代任务、讲重点时好用。",
    example:"Here's the deal: we split the work, and I handle the client calls.",
    cloze:{text:"______ the deal: we split the work, and I handle the client calls.", answer:"Here's", hint:"填一个词（含撇号）"},
    questions:[
      {q:"What function does 'here's the deal' serve?", a:"It flags that the key information or arrangement is coming — like 'let me spell it out.' It commands attention before the important part."},
      {q:"In what situations is it used?", a:"Negotiations, explaining rules, laying out plans — anywhere you need to state terms clearly and concisely."},
      {q:"How could you use it in IELTS?", a:"Only in informal speaking: 'Here's the deal — I agreed to tutor him, and he helps me with basketball.'"}
    ],
    comparison:{
      topic:"Describe a time you explained a plan or arrangement.",
      score5:"I told my roommate my plan about the apartment. We should clean every week. She can do the kitchen and I do the bathroom. She agreed.",
      score7:"I laid it out simply: '<span class='hl'>Here's the deal</span> — I'll cover the cooking, you handle the dishes, and we <span class='hl'>split the groceries</span> down the middle.' Clear terms from day one <span class='hl'>prevented</span> a whole <span class='hl'>category of roommate arguments</span>.",
      analysis:"5分用 told my roommate / she agreed 等基础表达。7分用 here's the deal, split the groceries, prevented a whole category of arguments 等表达，体现'提前讲清规则'的智慧。",
      tags:["discourse marker","coherence","fluency"]
    }
  },
  {
    id:74, type:"phrase", level:"6.5+", topic:"work", dimension:"career", english:"step it up a notch",
    chinese:"加把劲，升个档次",
    source:"摩登家庭 S01E09", category:"collocation",
    keywords:[
      {word:"step it up a notch", pos:"collocation", meaning:"升级 / 加码"},
      {word:"a notch", pos:"n.", meaning:"一档（程度）"}
    ],
    usage:"把强度、质量或表现提升一个档次。Manny 对宠物店老板：'I need you step it up a notch.' 与 take it down a notch 相对。",
    example:"The first draft is decent, but let's step it up a notch for the final version.",
    cloze:{text:"The first draft is decent, but let's ______ it ______ a ______ for the final version.", answer:"step|up|notch", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'step it up a notch' mean?", a:"To increase effort, intensity, or quality by one level — 'do better than this.' The 'notch' is a step on a dial or ladder."},
      {q:"How does it relate to 'take it down a notch'?", a:"They're opposites — 'take it down a notch' reduces intensity, 'step it up a notch' increases it. Both use the dial metaphor."},
      {q:"How could you use it in IELTS?", a:"Encouragement or self-improvement: 'After the first semester, I knew I had to step it up a notch to reach my target score.'"}
    ],
    comparison:{
      topic:"Describe a time you pushed yourself to improve.",
      score5:"My English was not good. I studied more. I watched movies and read books. My score went from 5 to 6. I want to get 7 next time.",
      score7:"After a <span class='hl'>mediocre</span> mock test, I knew I had to <span class='hl'>step it up a notch</span> — I <span class='hl'>doubled down</span> on listening practice and started <span class='hl'>recording myself</span> speaking. Within two months, my score jumped a full band. <span class='hl'>Progress isn't a switch; it's a dial you turn deliberately</span>.",
      analysis:"5分用 studied more / score from 5 to 6 等基础表达。7分用 mediocre, step it up a notch, doubled down 等表达，结尾'进步不是开关而是刻度盘'比喻贴切。",
      tags:["lexical resource","rhetorical effect","reflective depth"]
    }
  },
  {
    id:75, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"back to square one",
    chinese:"回到原点，前功尽弃",
    source:"摩登家庭 S01E09", category:"idiom",
    keywords:[
      {word:"back to square one", pos:"idiom", meaning:"回到原点"},
      {word:"square one", pos:"n.", meaning:"起点（棋盘/游戏隐喻）"}
    ],
    usage:"努力白费、不得不重新开始。剧中：'Well, then we're back to square one.' 描述项目失败、计划推翻时常用。",
    example:"The client rejected the whole design, so we're back to square one.",
    cloze:{text:"The client rejected the whole design, so we're ______ ______ ______ ______.", answer:"back|to|square|one", hint:"填四个词，用 | 分隔"},
    questions:[
      {q:"Where does 'square one' come from?", a:"Possibly from board games where you start on square one — if you go back, all progress is lost. It means returning to the very beginning."},
      {q:"What does it imply about the effort lost?", a:"That previous work was wasted or invalidated — hence the frustration usually attached to the phrase."},
      {q:"How could you use it in IELTS?", a:"Describing setbacks: 'The partner pulled out at the last minute, and the whole plan went back to square one.'"}
    ],
    comparison:{
      topic:"Describe a plan that had to be restarted.",
      score5:"We planned a trip to the beach. But the weather was very bad. We canceled it. We made a new plan for another weekend. We went to the mountains instead.",
      score7:"After months of planning the exhibition, the venue <span class='hl'>pulled out</span> two weeks before — <span class='hl'>back to square one</span>. <span class='hl'>The temptation was to panic</span>, but we treated it as a <span class='hl'>forced restart</span>, and the second version was better than the first. <span class='hl'>Sometimes going back is how you go forward</span>.",
      analysis:"5分用 weather bad / made a new plan 等基础表达。7分用 pulled out, back to square one, forced restart 等表达，结尾'有时后退正是前进的方式'辩证有力。",
      tags:["lexical resource","idiomatic language","critical thinking"]
    }
  },
  {
    id:76, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"have a blast",
    chinese:"玩得超级开心",
    source:"摩登家庭 S01E09", category:"idiom",
    keywords:[
      {word:"have a blast", pos:"idiom", meaning:"玩得尽兴"},
      {word:"blast", pos:"n.", meaning:"爆炸 → 引申为极乐"}
    ],
    usage:"表示度过了一段极其愉快的时光。Claire：'We had a blast.' 比 have a good time 更带劲儿，是雅思口语描述愉快经历的地道表达。",
    example:"Thanks for having us — we had a blast at your party.",
    cloze:{text:"Thanks for having us — we had a ______ at your party.", answer:"blast", hint:"填一个词"},
    questions:[
      {q:"How strong is 'have a blast' compared to 'have a good time'?", a:"Much stronger — a blast is explosive fun, pure delight. It conveys genuine enthusiasm rather than polite satisfaction."},
      {q:"When is it appropriate?", a:"Casual, positive contexts — after parties, trips, gatherings. It signals the experience exceeded expectations."},
      {q:"How could you use it in IELTS?", a:"Describing memorable events: 'We had an absolute blast at the music festival — the atmosphere was unreal.'"}
    ],
    comparison:{
      topic:"Describe a memorable day out with friends.",
      score5:"We went to the amusement park with my friends. We played many games. We ate ice cream. It was very fun. I want to go again.",
      score7:"We <span class='hl'>had an absolute blast</span> at the amusement park — <span class='hl'>screaming</span> on the roller coaster, <span class='hl'>sharing</span> one giant ice cream, <span class='hl'>laughing until our stomachs hurt</span>. The rides were fun, but the company made it <span class='hl'>unforgettable</span>.",
      analysis:"5分用 played / ate / very fun 等基础表达。7分用 had a blast, screaming, laughing until our stomachs hurt 等表达，用具体动作和画面还原快乐。",
      tags:["lexical resource","narrative detail","coherence"]
    }
  },
  {
    id:77, type:"phrase", level:"6.5+", topic:"education", dimension:"learning", english:"lesson learned",
    chinese:"吸取教训",
    source:"摩登家庭 S01E09", category:"collocation",
    keywords:[
      {word:"lesson learned", pos:"collocation", meaning:"吸取的教训"},
      {word:"lesson", pos:"n.", meaning:"教训"}
    ],
    usage:"总结从错误中学到的经验，常作简短结语。剧中：'Lesson learned. Don't stand there.' 雅思口语反思类题目特别好用。",
    example:"The project failed, but the lesson learned was worth the cost.",
    cloze:{text:"The project failed, but the ______ ______ was worth the cost.", answer:"lesson|learned", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"How is 'lesson learned' used in reflection?", a:"As a takeaway phrase — distilling what a failure taught you. It signals maturity: you converted an experience into wisdom."},
      {q:"Why is it powerful in IELTS answers?", a:"Examiners value reflection. Ending a story with 'the lesson I learned was…' shows depth beyond just narrating events."},
      {q:"What are common patterns?", a:"'The biggest lesson I learned was…', 'Lesson learned the hard way…', 'If there's one lesson I learned, it's that…'"}
    ],
    comparison:{
      topic:"Describe a failure that taught you something.",
      score5:"I failed my first driving test. I was sad. But I practiced more. I passed the second time. I learned that practice is important.",
      score7:"Failing my first driving test was <span class='hl'>humbling</span>, but the <span class='hl'>lesson learned</span> went beyond parallel parking: I'd been <span class='hl'>overconfident</span> because everyone said I'd pass. <span class='hl'>Confidence without preparation is just noise</span>.",
      analysis:"5分用 failed / practiced / important 等基础表达。7分用 humbling, lesson learned, overconfident 等表达，把'多练习'升华为'自信需以准备为底'的洞察。",
      tags:["lexical resource","reflective depth","rhetorical effect"]
    }
  },
  {
    id:78, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"be thrown (by something)",
    chinese:"被打个措手不及，不知所措",
    source:"摩登家庭 S01E09", category:"collocation",
    keywords:[
      {word:"be thrown by", pos:"collocation", meaning:"被…打乱阵脚"},
      {word:"throw someone off", pos:"phrasal verb", meaning:"打乱某人的节奏"}
    ],
    usage:"被意外情况打乱阵脚、一时不知如何应对。Jay 被 Manny 请教：'I'm a little thrown.' 比 surprised 更强调'被打乱'的失重感。",
    example:"The sudden question threw me — I didn't know what to say.",
    cloze:{text:"The sudden question ______ me — I didn't know what to say.", answer:"threw", hint:"填一个词（过去式）"},
    questions:[
      {q:"What does 'be thrown' mean in this context?", a:"To be caught off guard — the mental equivalent of being knocked off balance. You're momentarily disoriented by the unexpected."},
      {q:"How does it differ from 'surprised'?", a:"Surprise can be neutral or positive. 'Thrown' specifically implies disruption — your composure or plan was unsettled."},
      {q:"How could you use it in IELTS?", a:"Narrating interviews or events: 'The interviewer's first question threw me completely — I needed a moment to recover.'"}
    ],
    comparison:{
      topic:"Describe an unexpected question or situation that surprised you.",
      score5:"In my job interview, they asked me a question about a problem I never thought about. I did not know what to say. I said I will think about it. I was nervous.",
      score7:"The interviewer's second question <span class='hl'>threw me completely</span> — it was about a scenario I'd never considered. Instead of <span class='hl'>freezing</span>, I bought myself time by <span class='hl'>restating the question</span> and then answered honestly. <span class='hl'>Being caught off guard isn't a failure; how you recover is what counts</span>.",
      analysis:"5分用 did not know / nervous 等基础表达。7分用 threw me, freezing, restating the question 等表达，并展示具体的应对策略，结尾点出'关键在恢复'。",
      tags:["lexical resource","narrative detail","critical thinking"]
    }
  },
  
  {
    id:79, type:"phrase", level:"7+", topic:"communication", dimension:"connect", english:"save the best for last",
    chinese:"把最好的留到最后，压轴",
    source:"查理成长日记 S01E01", category:"idiom",
    keywords:[
      {word:"save the best for last", pos:"idiom", meaning:"把最好的留到最后 / 压轴"},
      {word:"best", pos:"n.", meaning:"最好的东西"}
    ],
    usage:"形容把最精彩的、最期待的部分留在最后。Teddy 给妹妹 Charlie 拍视频日记，把哥哥姐姐一个个介绍完才说 Gabe，因为 'I was just saving the best for last.'（我打算拿你来压轴）。",
    example:"I always save the best for last when I read a book — the final chapter is my reward.",
    cloze:{text:"I always ______ the best ______ last — the final chapter is my reward.", answer:"save|for", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'saving the best for last' suggest about a person's attitude?", a:"It suggests they value delayed gratification — they build anticipation and enjoy the wait, treating the best moment as a reward."},
      {q:"When might saving the best for last backfire?", a:"If you overuse it, you may run out of time or energy before reaching the best part — sometimes the moment for it simply passes."}
    ],
    comparison:{
      topic:"Describe something you were looking forward to.",
      score5:"I like dessert. I eat it after dinner. It is the best part. I wait for it every day.",
      score7:"At dinner I always <span class='hl'>save the best for last</span> — I deliberately leave my favourite dish untouched until the very end, because it turns the whole meal into a build-up towards something satisfying.",
      analysis:"5分平铺直叙（It is the best part）。7分用 save the best for last 贯穿，并用 build-up、deliberately 把'等待'描述成一种享受，词汇和结构都更高级。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:80, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"fire away",
    chinese:"说吧，尽管问",
    source:"查理成长日记 S01E01", category:"idiom",
    keywords:[
      {word:"fire away", pos:"idiom", meaning:"（口语）尽管问吧，说吧"},
      {word:"fire", pos:"v.", meaning:"开火 → 引申为连珠炮地提问"}
    ],
    usage:"对方有一肚子问题或话想说时，爽快地邀请对方说出来。爸爸说 'I have a homework question.' 老爸回答 'Okay, fire away.'（好吧，说吧）。比 go ahead 更口语、更有画面感。",
    example:"If you have any questions about the trip, fire away.",
    cloze:{text:"If you have any questions about the trip, ______ ______.", answer:"fire|away", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What tone does 'fire away' create compared with 'go ahead'?", a:"It's more casual and energetic — it pictures questions coming at you like rapid shots, so it sounds welcoming and unbothered."},
      {q:"In which settings is 'fire away' appropriate?", a:"Casual conversations, Q&A sessions, and friendly meetings. It's too informal for a formal interview or a courtroom."}
    ],
    comparison:{
      topic:"Describe a time someone asked you many questions.",
      score5:"My friend asked me many questions about my holiday. I answered them all. I was happy to answer.",
      score7:"When I came back from my trip, my friend had about twenty questions lined up, so I just said '<span class='hl'>fire away</span>'. It's the kind of casual invitation that makes a conversation feel easy.",
      analysis:"5分用 said I answered them all。7分用 fire away 还原对话场景，加上 questions lined up 让画面更具体，口语化表达自然融入叙述。",
      tags:["lexical resource","pronunciation"]
    }
  },
  {
    id:81, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"knock yourself out",
    chinese:"别客气，自己随意（尽管去）",
    source:"查理成长日记 S01E01", category:"idiom",
    keywords:[
      {word:"knock yourself out", pos:"idiom", meaning:"（口语）随便用，尽管去"},
      {word:"knock", pos:"v.", meaning:"敲打 → 引申为尽情投入"}
    ],
    usage:"对方想做某事，你爽快地表示'随你便/别客气'。冰箱里有个吃剩的三明治，Teddy 说 'There's a half-eaten sandwich in the fridge. Knock yourself out.'（自己去吃吧）。",
    example:"The stage is yours — knock yourself out.",
    cloze:{text:"There's a half-eaten sandwich in the fridge. ______ yourself ______.", answer:"Knock|out", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What is the speaker really saying with 'knock yourself out'?", a:"They're giving full permission, often with a bit of humor — 'go ahead, help yourself, enjoy'."},
      {q:"Is 'knock yourself out' polite?", a:"Yes, in casual contexts it's friendly and encouraging. It would be odd in very formal settings, but among friends it's warm."}
    ],
    comparison:{
      topic:"Describe a time you let someone use your things.",
      score5:"My brother wanted to borrow my computer. I said yes. He used it for games. It was okay.",
      score7:"My brother wanted my laptop for the evening, and I just told him to <span class='hl'>knock himself out</span>. It's a tiny phrase, but it makes the other person feel genuinely welcome instead of merely tolerated.",
      analysis:"5分只有 yes/okay。7分用 knock yourself out 表达大方爽快，并点出它让对方的感受从'被允许'变成'被欢迎'，有观察有深度。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:82, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"blend in",
    chinese:"融入，不引人注意",
    source:"查理成长日记 S01E01", category:"phrasal verb",
    keywords:[
      {word:"blend in", pos:"phrasal verb", meaning:"融入 / 混进人群"},
      {word:"blend", pos:"v.", meaning:"混合，调和"}
    ],
    usage:"指让自己和别人看起来一样，避免被注意。全家偷偷溜进医院找爸爸，Teddy 提醒 'Just try and blend in.'（尽量别引人注意）。",
    example:"New students usually spend the first week trying to blend in.",
    cloze:{text:"New students usually spend the first week trying to ______ ______.", answer:"blend|in", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the difference between 'blend in' and 'fit in'?", a:"'Fit in' focuses on being accepted socially; 'blend in' focuses on not standing out visually or behaviorally."},
      {q:"When is blending in a good strategy?", a:"When you're new somewhere, when you want to observe without drawing attention, or in cultures that value harmony over individuality."}
    ],
    comparison:{
      topic:"Describe a time you were new somewhere.",
      score5:"When I moved to a new school, I was nervous. I did not want people to look at me. I wanted to be the same as others.",
      score7:"On my first day at the new school, my only goal was to <span class='hl'>blend in</span> — I wore plain clothes, kept my voice down, and tried to read the room before saying anything.",
      analysis:"5分用 want to be the same 等基础说法。7分用 blend in + read the room，把'融入'讲成一套具体行为，画面感和词汇都更胜一筹。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:83, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"hang in there",
    chinese:"撑住，别放弃",
    source:"查理成长日记 S01E01", category:"idiom",
    keywords:[
      {word:"hang in there", pos:"idiom", meaning:"坚持住 / 挺住"},
      {word:"hang", pos:"v.", meaning:"悬挂 → 引申为咬牙坚持"}
    ],
    usage:"鼓励正在经历困难的人再坚持一下。这部剧的主题歌反复唱 'Hang in there, baby, things are crazy, but I know your future is bright.'（宝贝别放弃，世界虽然疯狂，但你的未来一片光明）。",
    example:"I know the first year of college is tough — just hang in there.",
    cloze:{text:"I know the first year of college is tough — just ______ ______ ______.", answer:"hang|in|there", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"When do people say 'hang in there'?", a:"When someone is struggling — with work, studies, or a difficult phase — to encourage them to keep going a little longer."},
      {q:"How does 'hang in there' differ from 'keep trying'?", a:"'Keep trying' is about effort; 'hang in there' is about endurance — weathering a tough period until things improve."}
    ],
    comparison:{
      topic:"Describe a time you encouraged someone.",
      score5:"My friend was sad about her exam. I told her to be strong and not give up. She felt better.",
      score7:"When my friend failed her driving test for the second time, I told her to <span class='hl'>hang in there</span> — the first two attempts are always the steepest part of the learning curve.",
      analysis:"5分用 be strong / not give up 的平实说法。7分用 hang in there，并补充 learning curve 的比喻，鼓励更有针对性，词汇也更丰富。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:84, type:"sentence", level:"7+", topic:"communication", dimension:"express", english:"It's all in your head.",
    chinese:"那是你自己想出来的（臆想）。",
    source:"查理成长日记 S01E01", category:"sentence pattern",
    keywords:[
      {word:"it's all in your head", pos:"sentence", meaning:"都是你脑子里的想象 / 你想多了"},
      {word:"in one's head", pos:"phrase", meaning:"在心里，在想象中"}
    ],
    usage:"戳破对方的想象或担忧：事情并没有发生，只是你自己脑补的。Gabe 坚称和 Teddy 的同学 Spencer 有'恋情'，大家说 'No, it's all in your head!'（是你自己在臆想）。",
    example:"You think everyone's laughing at you? Relax — it's all in your head.",
    cloze:{text:"You think everyone's laughing at you? Relax — it's ______ ______ your ______.", answer:"all|in|head", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'it's all in your head' really tell the listener?", a:"That their fear, suspicion, or hope is imaginary — it exists only in their mind, not in reality."},
      {q:"Is it a gentle or harsh thing to say?", a:"It can be gentle when calming an anxious friend, but harsh if used to dismiss someone's real feelings — tone and context decide."}
    ],
    comparison:{
      topic:"Describe a time you worried about something that didn't happen.",
      score5:"Before the speech, I was very nervous. I thought people would laugh at me. But nothing happened. Everyone was nice.",
      score7:"Before my first presentation, I convinced myself everyone would laugh at me — but of course, <span class='hl'>it was all in my head</span>. Once I started, the fear dissolved almost instantly.",
      analysis:"5分叙述清楚但平淡。7分用 it was all in my head 概括'自设恐惧'，再以 the fear dissolved 收尾，前后呼应，表达有层次。",
      tags:["lexical resource","coherence","grammatical range"]
    }
  },
  {
    id:85, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"for crying out loud",
    chinese:"拜托了，搞什么鬼",
    source:"查理成长日记 S01E01", category:"exclamation",
    keywords:[
      {word:"for crying out loud", pos:"exclamation", meaning:"（口语）拜托 / 天哪（表烦躁）"},
      {word:"crying", pos:"adj.", meaning:"（语气弱化的）哭喊"}
    ],
    usage:"表达不耐烦或抓狂的口头禅，语气比 'come on' 更强烈。PJ 的乐队在楼上排练得太吵，Gabe 吼 'For crying out loud, guys!'（拜托了，两位！）。",
    example:"For crying out loud, how many times do I have to tell you?",
    cloze:{text:"______ ______ ______ ______, how many times do I have to tell you?", answer:"For|crying|out|loud", hint:"填四个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What emotion does 'for crying out loud' express?", a:"Frustration, exasperation, or mild anger — it signals that the speaker has reached the end of their patience."},
      {q:"Is it appropriate in formal English?", a:"No, it's informal and slightly emotional. It suits spoken English and writing that mimics conversation, not academic or business documents."}
    ],
    comparison:{
      topic:"Describe a time you felt annoyed.",
      score5:"My brother was playing music very loud. I was very angry. I told him to stop. He did not stop.",
      score7:"My brother had his speakers blasting for the third time that day, and I finally snapped — '<span class='hl'>For crying out loud</span>, can you keep it down?' It was the only thing that actually worked.",
      analysis:"5分用 very angry 直说。7分用 for crying out loud 还原真实对话，blasting、snapped 让情绪有画面，比直接说 angry 高明。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:86, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"kiss it goodbye",
    chinese:"和它说再见吧（放弃）",
    source:"查理成长日记 S01E02", category:"idiom",
    keywords:[
      {word:"kiss it goodbye", pos:"idiom", meaning:"放弃 / 别指望了"},
      {word:"kiss", pos:"v.", meaning:"亲吻 → 作别"}
    ],
    usage:"表示某物/某事已经没希望了，幽默地劝人放弃。橄榄球踢进邻居家院子，没人敢去捡，Gabe 说 'It's gone. Kiss it goodbye.'（它已经没了，和它告别吧）。",
    example:"If you keep missing deadlines, you can kiss that promotion goodbye.",
    cloze:{text:"If you keep missing deadlines, you can ______ that promotion ______.", answer:"kiss|goodbye", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What tone does 'kiss it goodbye' carry?", a:"A humorous, slightly dramatic tone — it softens the bad news by turning loss into a little farewell ceremony."},
      {q:"When would you use it in IELTS?", a:"In Speaking Part 3 about goals or risks: 'If you procrastinate, you can kiss your dream university goodbye.'"}
    ],
    comparison:{
      topic:"Describe a time you had to give up on something.",
      score5:"I wanted to win the competition. But I made many mistakes. I could not win. I was sad.",
      score7:"I had been chasing that scholarship for months, but after missing the final deadline, I knew I could <span class='hl'>kiss it goodbye</span>. It stung, but it also freed me to move on to plan B.",
      analysis:"5分平铺直叙。7分用 kiss it goodbye 把'放弃'说得既干脆又有画面，再以 stung / freed me to move on 写出复杂心情，层次丰富。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:87, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"just out of curiosity",
    chinese:"纯属好奇问一句",
    source:"查理成长日记 S01E02", category:"phrase",
    keywords:[
      {word:"out of curiosity", pos:"phrase", meaning:"出于好奇"},
      {word:"curiosity", pos:"n.", meaning:"好奇心"}
    ],
    usage:"想问一个不太必要但想知道的问题，先声明'只是好奇'，降低对方的戒心。魔术表演完，Emma 问 'Just out of curiosity, what was supposed to happen?'（好奇问一句，这魔术本该是什么结果？）。",
    example:"Just out of curiosity, how long have you been learning English?",
    cloze:{text:"______ ______ ______ ______, how long have you been learning English?", answer:"Just|out|of|curiosity", hint:"填四个词，用 | 分隔，句首大写"},
    questions:[
      {q:"Why do people start a question with 'just out of curiosity'?", a:"To soften the question — it signals that an answer is optional, which makes the listener more willing to respond."},
      {q:"Where can it be used in IELTS?", a:"In Speaking Part 1 or 3 to ask a follow-up naturally, e.g. 'Just out of curiosity, do people in your country prefer renting or buying?'"}
    ],
    comparison:{
      topic:"Describe a question you wanted to ask someone.",
      score5:"I wanted to ask my friend how much money she made. But I did not ask. It is a private question.",
      score7:"I was dying to ask how she'd landed such a well-paid job at twenty-two, so I opened with '<span class='hl'>just out of curiosity</span>' to make the question feel lighter and less intrusive.",
      analysis:"5分直接说想问她赚多少钱。7分用 just out of curiosity 引入，并用 dying to、landed a job、intrusive 丰富表达，提问的'方式'被讲得更有技巧。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:88, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"sign me up",
    chinese:"算我一个，我报名",
    source:"查理成长日记 S01E02", category:"idiom",
    keywords:[
      {word:"sign me up", pos:"idiom", meaning:"算我一个 / 我要参加"},
      {word:"sign up", pos:"phrasal verb", meaning:"报名，注册"}
    ],
    usage:"表示对某事很感兴趣、愿意参加。PJ 说 Charlie 以后想逛公园随时叫他，'Anytime she wants to go to the park, sign me up.'（不管她什么时候想去，算我一个）。",
    example:"A weekend hiking trip? Sign me up!",
    cloze:{text:"A weekend hiking trip? ______ ______ ______!", answer:"Sign|me|up", hint:"填三个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What does 'sign me up' convey beyond 'count me in'?", a:"Enthusiasm — it suggests you're eager to join, as if you're already filling in the registration form."},
      {q:"How would you use it in an IELTS Speaking answer about hobbies?", a:"'When my friends mentioned a photography workshop, I immediately said sign me up — it's been on my list for years.'"}
    ],
    comparison:{
      topic:"Describe an activity you were eager to join.",
      score5:"My friends planned a camping trip. I wanted to go. I told them I will go. I was very excited.",
      score7:"The moment my friends mentioned a weekend camping trip, I said '<span class='hl'>sign me up</span>' without a second thought — it had been ages since I'd slept under the stars.",
      analysis:"5分用 I wanted to go / I will go。7分用 sign me up 表达迫不及待，再补充 without a second thought、ages since 让热情更可信。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:89, type:"sentence", level:"6.5+", topic:"work", dimension:"pressure", english:"I got a little distracted.",
    chinese:"我有点分心了。",
    source:"查理成长日记 S01E02", category:"sentence pattern",
    keywords:[
      {word:"get distracted", pos:"phrase", meaning:"分心，走神"},
      {word:"distracted", pos:"adj.", meaning:"注意力分散的"}
    ],
    usage:"承认自己走神/没专注的委婉说法，常用于解释失误。PJ 把别人的宝宝带回家，被质问时坦白 'I'm sorry. I got a little distracted.'（抱歉，我那时有点分心了）。",
    example:"I'm sorry — I got a little distracted by my phone and missed what you said.",
    cloze:{text:"I'm sorry — I ______ a little ______ by my phone and missed what you said.", answer:"got|distracted", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"Why is 'I got a little distracted' a good way to admit a mistake?", a:"It takes responsibility without over-apologizing — it explains the cause of the error briefly and moves the conversation forward."},
      {q:"How would you use it in an IELTS answer about focus?", a:"'When I study at home, I get distracted easily, so I started studying in the library.'"}
    ],
    comparison:{
      topic:"Describe a time you made a mistake because you weren't focused.",
      score5:"I made a mistake at work because I was thinking about other things. My boss was not happy. I said sorry.",
      score7:"I once sent a report to the wrong client because I <span class='hl'>got a little distracted</span> — my phone kept buzzing. I owned it immediately and double-checked everything ever since.",
      analysis:"5分用 thinking about other things。7分用 get distracted + kept buzzing 给出具体原因，再用 owned it、double-check 体现改进，回答更完整。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:90, type:"sentence", level:"7+", topic:"communication", dimension:"conflict", english:"Oh, it gets worse.",
    chinese:"哦，这还不是最糟的。",
    source:"查理成长日记 S01E02", category:"sentence pattern",
    keywords:[
      {word:"it gets worse", pos:"sentence", meaning:"还有更糟的"},
      {word:"get worse", pos:"phrase", meaning:"变得更糟"}
    ],
    usage:"故事讲到一半，抛一句'还有更惨的'来吊胃口，是口语讲故事的高频连接句。说弹力王船长坐到蛋糕上，'Oh, it gets worse. The candles were lit, so he sat in the punch.'（还有更惨的，蜡烛都点着了，他坐进了烛台里）。",
    example:"The traffic was terrible — and it gets worse: our train was cancelled, too.",
    cloze:{text:"The traffic was terrible — and it ______ ______: our train was cancelled, too.", answer:"gets|worse", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What is the function of 'it gets worse' in storytelling?", a:"It creates suspense and escalation — it promises the listener that the situation will become even more dramatic."},
      {q:"How can this be used in IELTS Speaking?", a:"To structure an anecdote: 'The flight was delayed for six hours — and it gets worse, my luggage went to another city.'"}
    ],
    comparison:{
      topic:"Describe a bad experience you had.",
      score5:"I missed my flight. Then I waited a long time. Then my bag was lost. Everything was bad.",
      score7:"I missed my flight by five minutes — and <span class='hl'>it gets worse</span>: my luggage ended up in another city, and the airline couldn't tell me when it would come back.",
      analysis:"5分用 Then... Then... 平铺。7分用 it gets worse 制造递进，让坏消息层层加码，讲故事的结构感更强。",
      tags:["discourse structure","coherence"]
    }
  },
  {
    id:91, type:"sentence", level:"7+", topic:"communication", dimension:"express", english:"Who couldn't see that one coming?",
    chinese:"这不是明摆着的吗？（早就料到）",
    source:"查理成长日记 S01E02", category:"rhetorical question",
    keywords:[
      {word:"see it coming", pos:"phrase", meaning:"预料到，早有预感"},
      {word:"rhetorical question", pos:"n.", meaning:"反问句"}
    ],
    usage:"反问句，表示某事的结果显而易见、早该料到。Emma 给了 PJ 假号码，大家说 'She gave you the wrong number. Who couldn't see that one coming?'（她给了你假号码，这不明摆着的吗）。",
    example:"He never studied and failed the exam — who couldn't see that one coming?",
    cloze:{text:"He never studied and failed the exam — ______ couldn't ______ that one coming?", answer:"Who|see", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What is the effect of a rhetorical question like this?", a:"It makes the point land harder — instead of stating the obvious, it invites the listener to agree with you."},
      {q:"Where can rhetorical questions help in IELTS?", a:"In Speaking Part 3 to sound persuasive, e.g. 'Who couldn't see that coming?' after describing a predictable outcome."}
    ],
    comparison:{
      topic:"Describe a time you predicted the outcome of something.",
      score5:"My friend bought a cheap phone online. I thought it would be bad. Later it broke. I was right.",
      score7:"When my friend ordered that ridiculously cheap phone, I told him he'd regret it — and when it broke in a week, well, <span class='hl'>who couldn't see that one coming?</span>",
      analysis:"5分直白陈述。7分用反问句 who couldn't see that one coming 收尾，比'我说对了'更生动自信，也展示了 rhetorical question 的运用。",
      tags:["grammatical range","coherence"]
    }
  },
  {
    id:92, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"divide it up evenly",
    chinese:"平均分配",
    source:"查理成长日记 S01E02", category:"phrase",
    keywords:[
      {word:"divide up", pos:"phrasal verb", meaning:"分配，瓜分"},
      {word:"evenly", pos:"adv.", meaning:"均匀地，平均地"}
    ],
    usage:"把任务、资源等按等份分配。三个孩子轮流照顾 Charlie，'All right, so we divide it up evenly — we each get to spend an hour with Charlie.'（我们平均分配任务，一人照顾 Charlie 一小时）。",
    example:"We divided the workload up evenly so nobody felt overloaded.",
    cloze:{text:"We divided the workload up ______ so nobody felt overloaded.", answer:"evenly", hint:"填一个词"},
    questions:[
      {q:"What's the difference between 'divide up' and 'divide evenly'?", a:"'Divide up' just means to distribute; 'divide evenly' specifies that each share is equal."},
      {q:"When is dividing evenly not the fairest option?", a:"When people have different abilities or needs — sometimes fair division means giving more to those who need it more."}
    ],
    comparison:{
      topic:"Describe a time you worked in a team.",
      score5:"We had a big project. We gave each person some work. Everybody did their part. We finished on time.",
      score7:"For our group project, we <span class='hl'>divided the work up evenly</span> — one person researched, one designed, one wrote — which kept everyone accountable and made the workload feel fair.",
      analysis:"5分用 gave each person some work。7分用 divide the work up evenly，并用 one...one...one 的具体分工展示团队协作，结构清晰。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:93, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"get off my back",
    chinese:"少啰嗦，别烦我",
    source:"查理成长日记 S01E03", category:"idiom",
    keywords:[
      {word:"get off my back", pos:"idiom", meaning:"（口语）别烦我 / 别再唠叨"},
      {word:"back", pos:"n.", meaning:"背 → 隐喻压在身上的催促"}
    ],
    usage:"对方不停催促/唠叨时，让他别再烦你。Gabe 对妈妈吼 'Get off my back, woman!'（少啰嗦，老女人）。语气较重，用于熟人或玩笑场合。",
    example:"I said I'll do it — now get off my back!",
    cloze:{text:"I said I'll do it — now ______ ______ my ______!", answer:"get|off|back", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What image does 'get off my back' create?", a:"It pictures nagging as a burden literally sitting on your back — so the phrase means 'stop weighing me down with demands'."},
      {q:"Is it polite to use in IELTS?", a:"It's informal and can sound rude, so it's better to describe it than to use it directly — e.g. 'My parents were always on my back about grades.'"}
    ],
    comparison:{
      topic:"Describe a time someone kept reminding you to do something.",
      score5:"My mother always told me to clean my room. She said it many times. I was annoyed. I cleaned it at last.",
      score7:"My mother was always <span class='hl'>on my back</span> about tidying my room — she'd remind me every single evening until I finally gave in and cleaned it just to get some peace.",
      analysis:"5分直白说 She said it many times。7分用 on my back（get off my back 的变体）形象化'催促'，用 gave in、get some peace 写出被逼无奈的心理。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:94, type:"phrase", level:"7+", topic:"family", dimension:"bond", english:"go at it again",
    chinese:"（夫妻/搭档）又吵起来了",
    source:"查理成长日记 S01E03", category:"phrasal verb",
    keywords:[
      {word:"go at it", pos:"phrasal verb", meaning:"激烈争吵 / 激烈争论"},
      {word:"again", pos:"adv.", meaning:"又一次"}
    ],
    usage:"指两人又开始激烈争吵或交手，口语中常用来吐槽爱吵架的邻居/夫妻。橄榄球踢进邻居家，PJ 说 'No way! They're going at it again.'（没门！他们又吵起来了）。",
    example:"The neighbors are going at it again — I can hear them from my room.",
    cloze:{text:"The neighbors are ______ ______ it ______ — I can hear them from my room.", answer:"going|at|again", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'go at it' mean exactly?", a:"To argue or fight intensely — it can describe verbal fights or physical ones, depending on context."},
      {q:"How could you use it in IELTS?", a:"To describe arguments or conflict: 'My parents would sometimes go at it over money, but they always made up by morning.'"}
    ],
    comparison:{
      topic:"Describe a time you witnessed an argument.",
      score5:"My neighbors always fought. They shouted a lot. It was noisy. I did not like it.",
      score7:"Every few weeks my neighbors would <span class='hl'>go at it again</span> — voices rising through the walls until one of them slammed a door. It made me grateful for how calmly my own family handled disagreements.",
      analysis:"5分用 fought/shouted 直说。7分用 go at it again + voices rising、slammed a door 营造现场感，结尾对比自家，观点更完整。",
      tags:["lexical resource","discourse structure"]
    }
  },
  {
    id:95, type:"sentence", level:"7+", topic:"values", dimension:"integrity", english:"That's what you get for being a bad husband.",
    chinese:"这就是你当坏老公的下场。",
    source:"查理成长日记 S01E03", category:"sentence pattern",
    keywords:[
      {word:"that's what you get for...", pos:"sentence", meaning:"这就是你……的报应 / 下场"},
      {word:"get", pos:"v.", meaning:"得到（应有结果）"}
    ],
    usage:"表达'自作自受'——对方做了坏事，得到坏结果是应得的。Mrs Dabney 教训丈夫，'That's what you get for being a bad husband! And now you're dead!'（这就是你当坏老公的下场！现在你终于死了！）。",
    example:"You skipped breakfast again? That's what you get for sleeping in.",
    cloze:{text:"You skipped breakfast again? That's ______ you ______ for sleeping in.", answer:"what|get", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What attitude does 'that's what you get for...' express?", a:"Schadenfreude — a mix of 'you deserved it' and 'I told you so'. It implies the outcome is a fair consequence."},
      {q:"Is it a harsh thing to say?", a:"Yes, it can sound cold. Use it lightly among friends or in humor; avoid it when the person is genuinely suffering."}
    ],
    comparison:{
      topic:"Describe a time someone suffered the consequences of their actions.",
      score5:"My friend did not prepare for the exam. He failed. I told him it is his fault. He should prepare next time.",
      score7:"My friend crammed nothing for the final and flunked it — honestly, <span class='hl'>that's what you get for</span> leaving everything to the last minute. He's a changed man now.",
      analysis:"5分用 it is his fault 直白下结论。7分用 that's what you get for... 把'咎由自取'说得更地道幽默，再用 He's a changed man now 收尾，讲述完整。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:96, type:"phrase", level:"6.5+", topic:"education", dimension:"learning", english:"learn (something) the hard way",
    chinese:"吃过苦头才学会",
    source:"查理成长日记 S01E03", category:"idiom",
    keywords:[
      {word:"the hard way", pos:"phrase", meaning:"通过痛苦的经历（学到）"},
      {word:"learn", pos:"v.", meaning:"学会"}
    ],
    usage:"指没有别人提醒、自己吃了亏才学会的教训。有人说动画片教不会穿墙，Gabe 接 'Learned that the hard way.'（我吃过苦头才知道行不通）。",
    example:"I learned the hard way that you should never reply to emails late at night.",
    cloze:{text:"I learned the ______ ______ that you should never reply to emails late at night.", answer:"hard|way", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'the hard way' imply about the learning process?", a:"That the lesson came through failure, pain, or a bad experience — not through advice or instruction."},
      {q:"How is it used in IELTS?", a:"For life lessons: 'I learned the hard way that budgeting matters when I ran out of money halfway through the month.'"}
    ],
    comparison:{
      topic:"Describe a lesson you learned from a mistake.",
      score5:"I bought a cheap phone. It broke soon. I learned that cheap things are bad. I will buy good things next time.",
      score7:"I learned the hard way that 'cheap' and 'good' rarely go together — after my budget phone died within three months, I finally started reading reviews before buying anything.",
      analysis:"5分教训说得平淡。7分用 learn the hard way 开篇，并用 died within three months 的具体细节支撑，最后给出改变，完整有说服力。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:97, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"heads up",
    chinese:"小心，注意（提醒）",
    source:"查理成长日记 S01E03", category:"phrase",
    keywords:[
      {word:"heads up", pos:"phrase", meaning:"（口语）提醒 / 当心"},
      {word:"head", pos:"n.", meaning:"头 → 抬起头注意"}
    ],
    usage:"提前提醒别人注意某事或即将发生的事。Mrs Dabney 进门，PJ 喊 'Heads up! Killer in the house.'（小心！杀人犯进家了）。",
    example:"Heads up — the boss is in a bad mood today.",
    cloze:{text:"______ ______ — the boss is in a bad mood today.", answer:"Heads|up", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What's the function of 'heads up'?", a:"It gives an advance warning so the listener can prepare — either for danger or for a change of plans."},
      {q:"Is it formal or informal?", a:"Informal but widely used in workplaces too: 'Just a heads up, the meeting moved to 3pm.'"}
    ],
    comparison:{
      topic:"Describe a time someone warned you about something.",
      score5:"My friend told me the restaurant is very crowded. So we went early. It was good that she told me.",
      score7:"My friend gave me a <span class='hl'>heads up</span> that the restaurant fills up fast on weekends, so I booked a table three days in advance — and we walked straight in.",
      analysis:"5分用 told me 直说。7分用 heads up + booked three days in advance 把'提前提醒'的价值讲具体，表达也更地道。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:98, type:"phrase", level:"7+", topic:"skills", dimension:"mastery", english:"cool under pressure",
    chinese:"临危不乱，压力之下很冷静",
    source:"查理成长日记 S01E03", category:"phrase",
    keywords:[
      {word:"cool under pressure", pos:"phrase", meaning:"压力之下保持冷静"},
      {word:"pressure", pos:"n.", meaning:"压力"}
    ],
    usage:"夸人在关键时刻不慌、发挥稳定。Mrs Dabney 面对孩子们的试探对答如流，'She's cool under pressure, I'll give her that.'（她压力之下很冷静，这点我服）。",
    example:"You need someone who stays cool under pressure — that's why we chose her as team leader.",
    cloze:{text:"You need someone who stays ______ ______ ______ — that's why we chose her as team leader.", answer:"cool|under|pressure", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What quality does 'cool under pressure' describe?", a:"Composure — the ability to think clearly and act calmly in stressful or urgent situations."},
      {q:"How is it used in IELTS?", a:"For describing people or jobs: 'A pilot has to stay cool under pressure, since a single panic could endanger everyone.'"}
    ],
    comparison:{
      topic:"Describe a person who stays calm in difficult situations.",
      score5:"My sister is very calm. When there is a problem, she does not panic. She thinks and solves it. I admire her.",
      score7:"My sister is the kind of person who stays <span class='hl'>cool under pressure</span> — when our flight got cancelled, everyone panicked except her, and she calmly rebooked everything within ten minutes.",
      analysis:"5分用 very calm / does not panic 直说。7分用 cool under pressure + 航班取消的具体场景，用 everyone panicked except her 反衬她的冷静。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:99, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"speed things up",
    chinese:"加快进度，提高效率",
    source:"查理成长日记 S01E03", category:"phrasal verb",
    keywords:[
      {word:"speed up", pos:"phrasal verb", meaning:"加速"},
      {word:"things", pos:"n.", meaning:"事情（泛称）"}
    ],
    usage:"想让进程变快时使用。妈妈学会发短信后感叹 'Really speeds things up.'（发短信真是事半功倍啊）。",
    example:"We're behind schedule — can we speed things up a little?",
    cloze:{text:"We're behind schedule — can we ______ things ______ a little?", answer:"speed|up", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'speed things up' mean in a work context?", a:"To make a process run faster — by working more efficiently, cutting steps, or using better tools."},
      {q:"Give an example of using it in IELTS.", a:"'Technology speeds things up at work, but it also blurs the line between office hours and personal time.'"}
    ],
    comparison:{
      topic:"Describe how technology helps you work or study.",
      score5:"I use my computer to do homework. It is fast. I can finish quickly. It is very useful.",
      score7:"Digital tools have genuinely <span class='hl'>sped things up</span> for me — I can edit a whole essay in minutes instead of rewriting it by hand, which frees up hours every week.",
      analysis:"5分用 It is fast 直说。7分用 sped things up + frees up hours 量化收益，'省出时间'让技术进步的影响更具体。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:100, type:"phrase", level:"7+", topic:"communication", dimension:"connect", english:"just to humor you",
    chinese:"只是为了哄你开心",
    source:"查理成长日记 S01E04", category:"phrase",
    keywords:[
      {word:"humor someone", pos:"phrase", meaning:"迁就某人，哄某人"},
      {word:"humor", pos:"v.", meaning:"迎合，迁就"}
    ],
    usage:"指做某事的目的是让对方高兴，而不是自己真想这么做。妈妈问 Teddy 是不是真心觉得吉祥物舞好玩，Teddy 反问 'Do you think I'd say something like that just to humor you?'（你觉得我是为了哄你才这么说的吗？）。",
    example:"I don't really like jazz, but I went to the concert just to humor my dad.",
    cloze:{text:"I don't really like jazz, but I went to the concert just to ______ you.", answer:"humor", hint:"填一个词"},
    questions:[
      {q:"What does 'humor someone' mean?", a:"To do something you don't really want to do, in order to keep someone happy or avoid conflict — to indulge them."},
      {q:"When might 'just to humor you' sound sarcastic?", a:"When said with a flat tone, it can mean the opposite — 'I'm only pretending to go along with your idea.'"}
    ],
    comparison:{
      topic:"Describe a time you did something you didn't want to do.",
      score5:"My grandmother wanted me to watch an old movie with her. I did not like it. But I watched it. She was happy.",
      score7:"My grandmother insisted we watch one of her old black-and-white films, so I sat through the whole thing <span class='hl'>just to humor her</span> — and to my surprise, I ended up genuinely enjoying it.",
      analysis:"5分平铺直叙。7分用 just to humor her 点明'迁就'的心态，再用 to my surprise 转折，让故事有起伏，语言也更自然。",
      tags:["lexical resource","discourse structure"]
    }
  },
  {
    id:101, type:"sentence", level:"6.5+", topic:"values", dimension:"integrity", english:"Enjoy it while you got it.",
    chinese:"趁现在好好享受吧。",
    source:"查理成长日记 S01E04", category:"sentence pattern",
    keywords:[
      {word:"enjoy it while you got it", pos:"sentence", meaning:"趁拥有时尽情享受"},
      {word:"while you got it", pos:"phrase", meaning:"趁你还拥有（口语）"}
    ],
    usage:"提醒人珍惜当下、及时行乐。爸爸看着年轻时录像里的自己，对儿子说 'Enjoy it while you got it.'（趁你年轻好好享受）。口语中 got 替代 have 更随意。",
    example:"Youth passes quickly, so enjoy it while you got it.",
    cloze:{text:"Youth passes quickly, so ______ it ______ you got it.", answer:"enjoy|while", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What life philosophy does 'enjoy it while you got it' express?", a:"Carpe diem — the idea that good things are temporary, so you should appreciate them fully before they're gone."},
      {q:"How would you paraphrase it more formally?", a:"'Make the most of it while it lasts' or 'Savour every moment, because nothing stays the same.'"}
    ],
    comparison:{
      topic:"Describe something you wish you had appreciated more.",
      score5:"When I was a student, I had a lot of free time. I did not use it well. Now I have no time. I regret it.",
      score7:"Looking back, I wish I'd followed the advice to <span class='hl'>enjoy it while you had it</span> — those long, unstructured student summers felt endless then, but they vanished the moment I started working.",
      analysis:"5分直接说后悔。7分用 enjoy it while you had it 呼应主题，再用 felt endless then / vanished 的对比写出时光易逝，表达有画面有深度。",
      tags:["lexical resource","coherence","grammatical range"]
    }
  },
  {
    id:102, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"go on and on about",
    chinese:"没完没了地讲",
    source:"查理成长日记 S01E04", category:"phrasal verb",
    keywords:[
      {word:"go on about", pos:"phrasal verb", meaning:"反复唠叨某事"},
      {word:"on and on", pos:"phrase", meaning:"不停地"}
    ],
    usage:"吐槽某人反复讲同一件事，带点不耐烦。PJ 不耐烦地说 'You guys are always going on and on about what a super baby Charlie is.'（你们总是没完没了地说 Charlie 是个超级宝宝）。",
    example:"He went on and on about his new car until everyone had stopped listening.",
    cloze:{text:"He ______ ______ and ______ about his new car until everyone had stopped listening.", answer:"went|on|on", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What attitude does 'go on and on about' express?", a:"Mild irritation — the speaker thinks the topic is being repeated too much or has become tedious."},
      {q:"Is it appropriate in formal writing?", a:"No, it's informal. In writing you might say 'he kept dwelling on the subject' or 'he talked at length about'."}
    ],
    comparison:{
      topic:"Describe a conversation that went on too long.",
      score5:"My uncle talked about his trip for a long time. He told the same stories again and again. I wanted to leave.",
      score7:"My uncle <span class='hl'>went on and on about</span> his fishing trip — the same three stories, retold in slightly different order — until I finally excused myself to 'help in the kitchen'.",
      analysis:"5分用 talked for a long time。7分用 go on and on about + the same three stories, retold 把'唠叨'写得具体幽默，结尾找借口离开也更有画面。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:103, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"take (our) chances",
    chinese:"赌一把，碰碰运气",
    source:"查理成长日记 S01E04", category:"phrase",
    keywords:[
      {word:"take a chance", pos:"phrase", meaning:"冒险一试，碰运气"},
      {word:"chance", pos:"n.", meaning:"机会，风险"}
    ],
    usage:"在结果不确定时愿意冒险尝试。面对宝宝赛跑挑战，Teddy 说 'We'll take our chances.'（我们愿意赌一把）。",
    example:"The job market is tough, but I'd rather take my chances than stay in a job I hate.",
    cloze:{text:"The job market is tough, but I'd rather ______ my ______ than stay in a job I hate.", answer:"take|chances", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'take a chance' imply about risk?", a:"That you're aware of the risk but willing to accept it because the potential reward — or the cost of not trying — justifies it."},
      {q:"How is it different from 'take a risk'?", a:"Nearly the same, but 'take a chance' often carries a more positive, hopeful tone — 'why not give it a shot?'"}
    ],
    comparison:{
      topic:"Describe a risk you decided to take.",
      score5:"I decided to change my major. It was risky. My parents were worried. But I did it. Now I am happy.",
      score7:"Switching majors mid-college felt like <span class='hl'>taking a chance</span> — everyone warned me it was a gamble, but I figured the cost of staying in a field I hated was even higher.",
      analysis:"5分用 It was risky 直说。7分用 take a chance + a gamble 强化'赌'的意味，并用成本对比（cost of staying）给出理性决策理由，层次更深。",
      tags:["lexical resource","coherence","grammatical range"]
    }
  },
  {
    id:104, type:"phrase", level:"7+", topic:"education", dimension:"learning", english:"in hindsight",
    chinese:"事后看来，马后炮",
    source:"查理成长日记 S01E04", category:"phrase",
    keywords:[
      {word:"in hindsight", pos:"phrase", meaning:"事后回顾，回过头来看"},
      {word:"hindsight", pos:"n.", meaning:"后见之明"}
    ],
    usage:"用现在的视角回看过去，常用于承认当时判断失误。Teddy 毫无悬念地当选吉祥物（因为只有她报名），大家说 'Well, in hindsight, I guess we should have noticed that nobody else was here.'（事后看来，我们真该注意到没人来报名）。",
    example:"In hindsight, we should have booked the hotel much earlier.",
    cloze:{text:"______ ______, we should have booked the hotel much earlier.", answer:"In|hindsight", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"When do people use 'in hindsight'?", a:"When reflecting on a past decision that turned out differently than expected — it introduces what you now know you should have done."},
      {q:"Give an IELTS example.", a:"'In hindsight, I should have started preparing for IELTS earlier — cramming at the end was much more stressful.'"}
    ],
    comparison:{
      topic:"Describe a decision you regret.",
      score5:"I chose a university far from home. It was not good for me. I should have chosen the other one. I think about it often.",
      score7:"<span class='hl'>In hindsight</span>, I should have picked the university closer to home — I chased the bigger name, but the three-hour commute and homesickness drained more than the prestige ever gave back.",
      analysis:"5分用 I should have 直白后悔。7分用 in hindsight 引入反思，并用 chased the bigger name 与 drained more than the prestige ever gave back 做权衡，反思有深度。",
      tags:["lexical resource","coherence","grammatical range"]
    }
  },
  {
    id:105, type:"sentence", level:"6.5+", topic:"values", dimension:"persist", english:"I knew this day was coming.",
    chinese:"我就知道会有这一天。",
    source:"查理成长日记 S01E04", category:"sentence pattern",
    keywords:[
      {word:"knew this day was coming", pos:"sentence", meaning:"早就料到这一天会来"},
      {word:"was coming", pos:"past continuous", meaning:"（当时）就要到来"}
    ],
    usage:"表示对某个必然发生的事早有预感。妈妈要 Teddy 去参加吉祥物选拔，爸爸叹气 'Oh, boy. I knew this day was coming.'（老天，我就知道会有这一天）。",
    example:"When the company announced layoffs, I knew this day was coming.",
    cloze:{text:"When the company announced layoffs, I ______ this day ______ coming.", answer:"knew|was", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What feeling does 'I knew this day was coming' express?", a:"Inevitable anticipation — you saw the signs long before, so when it happened, you weren't surprised, just resigned."},
      {q:"Where would you use it in IELTS?", a:"For describing predictable changes: 'My parents had been fighting about the move for months, so I knew this day was coming.'"}
    ],
    comparison:{
      topic:"Describe an event you expected to happen.",
      score5:"My grandfather was very old and sick. We knew he would leave us soon. When he died, we were sad but not surprised.",
      score7:"With my grandfather's health fading month by month, we all <span class='hl'>knew that day was coming</span> — so when it finally did, our grief was mixed with the quiet relief that he was no longer in pain.",
      analysis:"5分用 knew he would leave 直说。7分用 knew that day was coming + grief mixed with quiet relief，把'早有预感'和'悲喜交加'写得更细腻。",
      tags:["lexical resource","coherence","grammatical range"]
    }
  },
  {
    id:106, type:"sentence", level:"6.5+", topic:"work", dimension:"deal", english:"There's only one way to settle this.",
    chinese:"只有一个办法能解决这件事。",
    source:"查理成长日记 S01E04", category:"sentence pattern",
    keywords:[
      {word:"settle this", pos:"phrase", meaning:"解决这个问题 / 一决高下"},
      {word:"settle", pos:"v.", meaning:"解决，平息"}
    ],
    usage:"争论不下时，宣布用某个决定性方法来解决问题。两个爸爸争论谁家宝宝爬得快，'There's only one way to settle this. We challenge you to a baby race.'（只有一个办法解决——宝宝赛跑）。",
    example:"We both want the last slice — there's only one way to settle this: rock, paper, scissors.",
    cloze:{text:"We both want the last slice — there's only ______ way to ______ this: rock, paper, scissors.", answer:"one|settle", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'settle this' mean in an argument?", a:"To bring a dispute to a final resolution — often through a decisive action or competition that both sides accept."},
      {q:"How is it used in IELTS?", a:"'There was only one way to settle the debate about who would lead the project — we let the results speak.'"}
    ],
    comparison:{
      topic:"Describe a disagreement you helped resolve.",
      score5:"My friends argued about where to eat. Nobody agreed. I said let us vote. Everyone voted. We went to the pizza place.",
      score7:"Three of my friends were deadlocked over where to eat, and after ten minutes of arguing, I said there was <span class='hl'>only one way to settle it</span> — a vote, with the loser picking the dessert.",
      analysis:"5分用 I said let us vote 平铺。7分用 there's only one way to settle this 摆出解决姿态，并以 loser picking the dessert 增加幽默和公平感。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:107, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"window of opportunity",
    chinese:"机会之窗，难得的时机",
    source:"查理成长日记 S01E05", category:"metaphor",
    keywords:[
      {word:"window of opportunity", pos:"metaphor", meaning:"稍纵即逝的机会"},
      {word:"window", pos:"n.", meaning:"窗口 → 开放的时间段"}
    ],
    usage:"指转瞬即逝的有利时机。朋友提醒 Teddy 再不行动 Spencer 就被别人抢走了，'You'd better get moving on that. Your window is closing.'（你最好赶紧行动，你的机会之窗要关了）。",
    example:"The job market is volatile, so you have to seize the window of opportunity while it's open.",
    cloze:{text:"You have to seize the ______ of ______ while it's open.", answer:"window|opportunity", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'window of opportunity' emphasize about timing?", a:"That the chance is temporary — it opens briefly and will close again, so hesitation can cost you."},
      {q:"Where is this phrase used in IELTS?", a:"Speaking Part 3 about careers or education: 'Studying abroad is a window of opportunity that only opens during your student years.'"}
    ],
    comparison:{
      topic:"Describe an opportunity you once had.",
      score5:"There was a chance for me to study in America. But I did not apply. Later I felt very sorry. I lost the chance.",
      score7:"An exchange program was a <span class='hl'>window of opportunity</span> that only opened once — and I let it close because I was too afraid of leaving my comfort zone. I still think about it.",
      analysis:"5分用 I lost the chance 直说。7分用 window of opportunity 的隐喻+let it close，把'错过'写得生动，comfort zone 也点出了深层原因。",
      tags:["lexical resource","coherence","metaphor"]
    }
  },
  {
    id:108, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"when the time is right",
    chinese:"等时机成熟时",
    source:"查理成长日记 S01E05", category:"phrase",
    keywords:[
      {word:"when the time is right", pos:"phrase", meaning:"时机合适时"},
      {word:"the right time", pos:"phrase", meaning:"恰当的时机"}
    ],
    usage:"表示不急于行动，等条件合适再出手。Teddy 对 Spencer 有好感但不想太主动，'I'll ask him when the time is right.'（等有好时机我会邀请他的）。",
    example:"Don't rush the decision — you'll know when the time is right.",
    cloze:{text:"Don't rush the decision — you'll know ______ the ______ is right.", answer:"when|time", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'when the time is right' imply about decisions?", a:"That patience matters — some things work only at the right moment, so forcing them early can ruin the chance."},
      {q:"How is it used in IELTS?", a:"For future plans: 'I'd love to start my own business, but only when the time is right — probably after I save enough.'"}
    ],
    comparison:{
      topic:"Describe a decision you chose to delay.",
      score5:"I wanted to tell my parents about my plan to change jobs. But I waited. I told them later. It was better.",
      score7:"I sat on my decision to change jobs for a month, waiting to tell my parents <span class='hl'>when the time was right</span> — after a family dinner, when everyone was relaxed, instead of in the middle of an argument.",
      analysis:"5分用 I waited 一笔带过。7分用 when the time was right + 具体的'晚饭后、氛围轻松时'，把'择时'的智慧讲得有细节。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:109, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"just between us",
    chinese:"咱俩私下说，别传出去",
    source:"查理成长日记 S01E05", category:"phrase",
    keywords:[
      {word:"just between us", pos:"phrase", meaning:"只有我们俩知道"},
      {word:"between us", pos:"phrase", meaning:"在我们之间"}
    ],
    usage:"分享秘密或小道消息前，先要求对方保密。Gabe 向爸爸透露妈妈的想法，'Just between us, she thinks you talk too much about your job.'（偷偷告诉你，她觉得你太爱谈工作了）。",
    example:"Just between us, I think the manager is planning to resign.",
    cloze:{text:"______ ______ us, I think the manager is planning to resign.", answer:"Just|between", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What does 'just between us' ask of the listener?", a:"Confidentiality — the speaker trusts you with private information and expects you not to share it."},
      {q:"Is it suitable for IELTS?", a:"It's informal. Use it in Speaking for anecdotes, or paraphrase as 'off the record' in more formal contexts."}
    ],
    comparison:{
      topic:"Describe a secret someone shared with you.",
      score5:"My friend told me a secret. She said I should not tell anyone. I did not tell anyone. She trusted me.",
      score7:"My friend pulled me aside and said, '<span class='hl'>just between us</span>, I'm switching schools next term.' I kept it to myself for two weeks until she announced it publicly.",
      analysis:"5分用 said I should not tell 直说。7分用 just between us 还原对话，并用 kept it to myself for two weeks 证明守口如瓶，信任感更真实。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:110, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"behind someone's back",
    chinese:"背着某人，暗地里",
    source:"查理成长日记 S01E05", category:"phrase",
    keywords:[
      {word:"behind one's back", pos:"phrase", meaning:"背地里（常指说坏话）"},
      {word:"behind", pos:"prep.", meaning:"在……后面"}
    ],
    usage:"指在对方不知情的情况下（常含贬义）议论或行动。Gabe 问爸爸 'So what else does she say about me behind my back?'（她背地里还说我什么了？）。",
    example:"I hate it when people talk about me behind my back.",
    cloze:{text:"I hate it when people talk about me ______ my ______.", answer:"behind|back", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What connotation does 'behind someone's back' carry?", a:"Usually negative — it implies secrecy and often betrayal, because the person being discussed has no chance to respond."},
      {q:"How is it used in IELTS?", a:"'Gossip behind someone's back can destroy trust faster than open conflict ever could.'"}
    ],
    comparison:{
      topic:"Describe a time someone was dishonest with you.",
      score5:"I found out my friend said bad things about me. She did not say it to my face. I was very angry. I did not talk to her.",
      score7:"I discovered my friend had been complaining about me <span class='hl'>behind my back</span> — the worst part wasn't what she said, but that she never gave me the chance to defend myself.",
      analysis:"5分用 did not say it to my face 直白。7分用 behind my back + 点出'没给辩解机会'才是伤害核心，有洞察，比单纯生气更有层次。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:111, type:"sentence", level:"6.5+", topic:"work", dimension:"execution", english:"Consider it done.",
    chinese:"包在我身上。",
    source:"查理成长日记 S01E05", category:"sentence pattern",
    keywords:[
      {word:"consider it done", pos:"sentence", meaning:"就当你已经办好了"},
      {word:"consider", pos:"v.", meaning:"认为，当作"}
    ],
    usage:"向对方保证事情一定办成，语气自信爽快。Teddy 需要有人开车送她和 Spencer 去舞会，对方答应 'Yeah, consider it done.'（是啊，包在我身上）。",
    example:"Need someone to pick up the documents? Consider it done.",
    cloze:{text:"Need someone to pick up the documents? ______ it done.", answer:"Consider", hint:"填一个词，句首大写"},
    questions:[
      {q:"What does 'consider it done' promise?", a:"Immediate, certain action — the speaker is so confident the task will be completed that you can already treat it as finished."},
      {q:"Where is this used in IELTS?", a:"In work or study anecdotes: 'My supervisor asked me to prepare the slides, and I said consider it done — then delivered them the next morning.'"}
    ],
    comparison:{
      topic:"Describe a time you promised to do something for someone.",
      score5:"My friend asked me to help her move. I said I will help. She was happy. I helped her on Saturday.",
      score7:"When my friend asked if I could help her move on Saturday, I just said '<span class='hl'>consider it done</span>' — no hesitation, no 'let me check my schedule' — and that certainty meant more to her than the help itself.",
      analysis:"5分用 I said I will help。7分用 consider it done + no hesitation 强调爽快，并点出'确定性本身比帮忙更有价值'，观察角度新。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:112, type:"phrase", level:"7+", topic:"family", dimension:"bond", english:"put a roof over one's head",
    chinese:"养家糊口，供人遮风避雨",
    source:"查理成长日记 S01E05", category:"idiom",
    keywords:[
      {word:"put a roof over one's head", pos:"idiom", meaning:"给某人一个安身之所"},
      {word:"roof", pos:"n.", meaning:"屋顶 → 家的象征"}
    ],
    usage:"强调自己辛苦工作是为了养家。爸爸被说太爱谈工作，反驳 'The same job that puts a roof over your mother's head?'（就是这份工作给你妈撑起了一片天）。",
    example:"My father worked two jobs just to put a roof over our heads.",
    cloze:{text:"My father worked two jobs just to ______ a ______ over our heads.", answer:"put|roof", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'put a roof over one's head' symbolize?", a:"Providing the basics of a home — shelter, safety, and by extension, a family's livelihood."},
      {q:"How is it used in IELTS?", a:"For describing a parent's sacrifice: 'My mother took on extra shifts to put a roof over our heads while we studied abroad.'"}
    ],
    comparison:{
      topic:"Describe someone who works hard for their family.",
      score5:"My father works very hard. He works all day. He does this for us. I respect him very much.",
      score7:"My father worked double shifts for years just to <span class='hl'>put a roof over our heads</span> — he never complained, and it wasn't until I grew up that I understood what that quiet sacrifice had cost him.",
      analysis:"5分用 works very hard 直说。7分用 put a roof over our heads 具体化'养家'，并用 never complained / quiet sacrifice 写出深沉的爱，情感层次更丰富。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:113, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"be doomed to do something",
    chinese:"注定要……，难逃……",
    source:"查理成长日记 S01E05", category:"phrase",
    keywords:[
      {word:"be doomed to", pos:"phrase", meaning:"注定（遭遇不好的结果）"},
      {word:"doomed", pos:"adj.", meaning:"注定失败的，劫数难逃的"}
    ],
    usage:"预言某种（通常是坏的）结局难以避免。朋友警告 Teddy 再不行动 'you're doomed to be just friends.'（你们就只能当朋友了，没戏了）。",
    example:"Without proper planning, the project is doomed to fail.",
    cloze:{text:"Without proper planning, the project is ______ to fail.", answer:"doomed", hint:"填一个词"},
    questions:[
      {q:"What tone does 'be doomed to' carry?", a:"A fatalistic, negative tone — it predicts an outcome that cannot be avoided."},
      {q:"Give an IELTS example.", a:"'Cities that ignore public transport are doomed to drown in traffic congestion.'"}
    ],
    comparison:{
      topic:"Describe a situation that seemed hopeless.",
      score5:"Our project was going very badly. We thought it would fail. Nobody had hope. But we worked hard and it succeeded.",
      score7:"Midway through, our project looked <span class='hl'>doomed to fail</span> — two members quit, the budget shrank, and the deadline didn't move. We pulled it off anyway, which taught me that 'doomed' is often just a mood, not a fact.",
      analysis:"5分用 thought it would fail。7分用 doomed to fail + 具体困境（成员退出/预算缩减），并提炼出 'doomed' is often just a mood, not a fact 的洞察，收尾有力。",
      tags:["lexical resource","coherence","critical thinking"]
    }
  },
  {
    id:114, type:"phrase", level:"6.5+", topic:"work", dimension:"career", english:"give someone a shot",
    chinese:"给某人一次机会",
    source:"查理成长日记 S01E06", category:"idiom",
    keywords:[
      {word:"give it a shot", pos:"idiom", meaning:"试一试"},
      {word:"shot", pos:"n.", meaning:"尝试，机会"}
    ],
    usage:"给对方一次尝试的机会。PJ 想给爸爸的广告写歌，'Don't you think you should give us a shot at writing your jingle?'（你不觉得该给我们一次写广告歌的机会吗？）。",
    example:"She has no experience, but her portfolio is strong — give her a shot.",
    cloze:{text:"She has no experience, but her portfolio is strong — ______ her a ______.", answer:"give|shot", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What does 'give someone a shot' imply about judgment?", a:"That you're willing to set aside doubts and let the person prove themselves through action."},
      {q:"How is it used in IELTS?", a:"'My manager gave me a shot at leading the presentation, and that one chance changed my career.'"}
    ],
    comparison:{
      topic:"Describe a chance someone gave you.",
      score5:"My teacher let me try the math competition. I was not the best student. But she believed in me. I won third prize.",
      score7:"My teacher <span class='hl'>gave me a shot</span> at the math competition even though I'd never been top of the class — that single vote of confidence made me work harder than I ever had.",
      analysis:"5分用 let me try 平铺。7分用 give me a shot + single vote of confidence，把'被信任'和'加倍努力'的因果讲清楚，情感更饱满。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:115, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"be out of something",
    chinese:"（某物）用完了",
    source:"查理成长日记 S01E06", category:"phrase",
    keywords:[
      {word:"run out of", pos:"phrase", meaning:"用完，耗尽"},
      {word:"be out of", pos:"phrase", meaning:"（口语）没有了"}
    ],
    usage:"表示某种东西用光了。家里纸尿片用完，'To the store. We're out of diapers.'（去商店，纸尿片用光了）。",
    example:"Sorry, we're out of orange juice — can I get you something else?",
    cloze:{text:"Sorry, we're ______ ______ orange juice — can I get you something else?", answer:"out|of", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What's the difference between 'be out of' and 'run out of'?", a:"They're nearly the same; 'be out of' describes the current state (it's gone), while 'run out of' focuses on the action of depleting it."},
      {q:"Give an IELTS example.", a:"'I was out of cash, so I had to rely on my phone for everything during the trip.'"}
    ],
    comparison:{
      topic:"Describe a time something you needed was unavailable.",
      score5:"I wanted to make pancakes. But we did not have eggs. I could not make them. I went to the shop.",
      score7:"I was all set to make pancakes when I realized we were <span class='hl'>out of eggs</span> — so the whole plan pivoted to a walk to the corner shop, and the pancakes ended up being dinner instead of breakfast.",
      analysis:"5分用 did not have eggs 直说。7分用 out of eggs + the plan pivoted 把小事讲成有转折的小故事，语言更生动。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:116, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"a word of advice",
    chinese:"给你一句忠告",
    source:"查理成长日记 S01E06", category:"phrase",
    keywords:[
      {word:"a word of advice", pos:"phrase", meaning:"一句建议 / 忠告"},
      {word:"advice", pos:"n.", meaning:"建议（不可数）"}
    ],
    usage:"给出忠告前的正式开场，提醒对方认真听。超市经理警告 Gabe，'A word of advice, Duncan — you knock over a display, and I will personally open a can of Reddi Mart's finest butt-kick.'（给你句忠告 Duncan，你再弄倒货架，我亲自收拾你）。",
    example:"A word of advice: never send an email when you're angry.",
    cloze:{text:"A ______ of ______: never send an email when you're angry.", answer:"word|advice", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What does 'a word of advice' signal to the listener?", a:"That important, experience-based guidance is coming — it raises attention before the actual advice."},
      {q:"How is it used in IELTS?", a:"A natural opener for giving suggestions: 'A word of advice — start with a simple topic when you practise speaking.'"}
    ],
    comparison:{
      topic:"Describe a piece of advice you received.",
      score5:"My teacher told me to practise English every day. I did it. My English became better. It was good advice.",
      score7:"My teacher gave me <span class='hl'>a word of advice</span> that stuck: stop memorising words in isolation and start learning them in real sentences. That single tip reshaped my whole study method.",
      analysis:"5分用 told me 直说。7分用 a word of advice + that stuck 强调建议的影响，并用 reshaped my whole study method 说明改变之大。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:117, type:"phrase", level:"7+", topic:"communication", dimension:"connect", english:"in case you didn't notice",
    chinese:"如果你还没注意到的话",
    source:"查理成长日记 S01E06", category:"phrase",
    keywords:[
      {word:"in case", pos:"conjunction", meaning:"以防，如果"},
      {word:"notice", pos:"v.", meaning:"注意到"}
    ],
    usage:"带一点讽刺地指出对方显然该看到的事实。Hugo 威胁要报警，Teddy 回击 'In case you didn't notice, we don't have cash registers in the parking lot.'（如果你还没注意到，我们的停车场可没有收银台）。",
    example:"In case you didn't notice, the deadline was moved to Friday.",
    cloze:{text:"______ ______ you didn't notice, the deadline was moved to Friday.", answer:"In|case", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[
      {q:"What tone does 'in case you didn't notice' create?", a:"Slightly sarcastic — it implies the listener should have noticed, and the speaker is politely (or not so politely) pointing out the obvious."},
      {q:"Is it polite in IELTS?", a:"It can sound snarky. Use it only in casual anecdotes, or soften it: 'In case you haven't noticed, prices have gone up everywhere.'"}
    ],
    comparison:{
      topic:"Describe a time you pointed out something obvious.",
      score5:"My brother was looking for his phone. It was in his hand. I told him it is in his hand. He felt silly.",
      score7:"My brother was frantically hunting for his phone while holding it — so I said, '<span class='hl'>in case you didn't notice</span>, it's been in your hand for the past five minutes.' He turned bright red.",
      analysis:"5分用 I told him 直白。7分用 in case you didn't notice 还原带调侃的语气，加上 frantically hunting / turned bright red，画面感和趣味性更强。",
      tags:["lexical resource","coherence"]
    }
  },
  {
    id:118, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"do whatever it takes",
    chinese:"不惜一切代价，想尽办法",
    source:"查理成长日记 S01E06", category:"phrase",
    keywords:[
      {word:"whatever it takes", pos:"phrase", meaning:"无论需要付出什么"},
      {word:"whatever", pos:"pron.", meaning:"无论什么"}
    ],
    usage:"表达决心：为了达成目标愿意付出任何努力或手段。Gabe 问 'Are you giving me permission to be bad?'（你允许我做坏事吗？）对方回答 'Do whatever it takes.'（该做什么就做什么）。",
    example:"She's determined to get into medical school, and she'll do whatever it takes.",
    cloze:{text:"She's determined to get into medical school, and she'll do ______ ______ ______.", answer:"whatever|it|takes", hint:"填三个词，用 | 分隔"},
    questions:[
      {q:"What does 'do whatever it takes' reveal about someone's mindset?", a:"Total commitment — they're willing to accept any effort, sacrifice, or even morally grey choices to reach the goal."},
      {q:"How is it used in IELTS?", a:"'Successful athletes do whatever it takes — early mornings, strict diets, endless reps.'"}
    ],
    comparison:{
      topic:"Describe a goal you were determined to achieve.",
      score5:"I wanted to pass the exam very much. I studied a lot. I did not watch TV. I did not play games. I passed.",
      score7:"I was prepared to <span class='hl'>do whatever it takes</span> to pass that exam — I deleted my games, woke up at six, and turned down every invitation for three months. The pass felt like a receipt for all of it.",
      analysis:"5分用 studied a lot 概括。7分用 do whatever it takes + 具体行动清单（删游戏/六点起床/拒绝邀约），并用 pass felt like a receipt 比喻努力得到了兑现。",
      tags:["lexical resource","coherence","critical thinking"]
    }
  },
  {
    id:119, type:"sentence", level:"7+", topic:"values", dimension:"persist", english:"I've been waiting to hear those words my whole life.",
    chinese:"这句话我等了一辈子。",
    source:"查理成长日记 S01E06", category:"sentence pattern",
    keywords:[
      {word:"waiting my whole life", pos:"phrase", meaning:"等了一辈子"},
      {word:"hear those words", pos:"phrase", meaning:"听到那句话"}
    ],
    usage:"夸张地表达'终于等到你这句话'的激动。Gabe 得到许可可以捣蛋，'I've been waiting to hear those words my whole life.'（这句话我可是等了一辈子）。",
    example:"'You're hired!' — I'd been waiting to hear those words my whole life.",
    cloze:{text:"'You're hired!' — I'd been ______ to hear those ______ my whole life.", answer:"waiting|words", hint:"填两个词，用 | 分隔"},
    questions:[
      {q:"What effect does 'my whole life' create in this sentence?", a:"Hyperbole — it exaggerates the wait to show how much the moment matters to the speaker."},
      {q:"Where is this used in IELTS?", a:"For big personal moments: 'When the referee blew the final whistle, I'd been waiting to hear that sound my whole life.'"}
    ],
    comparison:{
      topic:"Describe a moment you had waited for a long time.",
      score5:"I waited for the university letter for a long time. When it came, I was very happy. I opened it quickly.",
      score7:"The acceptance letter arrived after months of waiting, and as I tore it open, I realised I'd been <span class='hl'>waiting to hear those words my whole life</span> — every exam, every sleepless night had led to that single sentence.",
      analysis:"5分用 I was very happy 直说。7分用 waiting my whole life 的夸张+回溯（every exam, every sleepless night），把'等待'讲成一条完整的人生线索。",
      tags:["lexical resource","coherence","grammatical range"]
    }
  },
  
  {
    id:120, type:"phrase", level:"7+", topic:"skills", dimension:"mastery", english:"pull it off",
    chinese:"搞定，成功做到",
    source:"查理成长日记 S01E07", category:"phrasal verb",
    keywords:[{word:"pull off", pos:"phrasal verb", meaning:"成功完成（难事）"}],
    usage:"指在困难或没把握的情况下把事情做成。剧中 Teddy 夸下海口要搞定妈妈，说 'I could totally pull this off.'",
    example:"It was a risky presentation, but somehow she pulled it off.",
    cloze:{text:"It was a risky presentation, but somehow she ______ it ______.", answer:"pulled|off", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:121, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"be stuck with",
    chinese:"被迫和……绑在一起，甩不掉",
    source:"查理成长日记 S01E07", category:"phrasal verb",
    keywords:[{word:"be stuck with", pos:"phrasal verb", meaning:"被迫接受/甩不掉"}],
    usage:"指不得不和某人/某事共处，没得选。Teddy 抱怨 'I'm stuck with this dumb Van Brundt.'（我却被这个蠢呆子绑在一块儿）。",
    example:"I got stuck with the last shift of the day — again.",
    cloze:{text:"I got ______ with the last shift of the day — again.", answer:"stuck", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:122, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"butter someone up",
    chinese:"拍马屁，灌迷魂汤",
    source:"查理成长日记 S01E07", category:"phrasal verb",
    keywords:[{word:"butter up", pos:"phrasal verb", meaning:"讨好，奉承"}],
    usage:"用甜言蜜语哄别人开心以达到目的。Ivy 教 Teddy 拍妈妈马屁：'Did you butter up your mom?'（你有没有给你妈灌迷魂汤？）。",
    example:"He buttered up the manager before asking for a day off.",
    cloze:{text:"He ______ ______ the manager before asking for a day off.", answer:"buttered|up", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:123, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"get even",
    chinese:"报复，扯平",
    source:"查理成长日记 S01E07", category:"phrasal verb",
    keywords:[{word:"get even", pos:"phrasal verb", meaning:"报复，以牙还牙"}],
    usage:"受到伤害或捉弄后想以同样方式回敬对方。妈妈发现被 Teddy 骗了，'Mama's going to get even.'（老妈要报复了）。",
    example:"She was fired unfairly, and she's determined to get even.",
    cloze:{text:"She was fired unfairly, and she's determined to ______ ______.", answer:"get|even", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:124, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"get something out of one's head",
    chinese:"（旋律/念头）挥之不去",
    source:"查理成长日记 S01E07", category:"phrasal verb",
    keywords:[{word:"get out of one's head", pos:"phrase", meaning:"从脑子里赶走"}],
    usage:"形容某段旋律或某个念头总在脑中回旋。'I can't get that stupid song out of my head.'（这蠢歌一直在我脑子里挥之不去）。",
    example:"That catchy tune is stuck in my head — I can't get it out.",
    cloze:{text:"That catchy tune is stuck in my head — I can't get it ______.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:125, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"school night",
    chinese:"上学日的晚上",
    source:"查理成长日记 S01E07", category:"phrase",
    keywords:[{word:"school night", pos:"phrase", meaning:"（第二天要上学的）上学日前一晚"}],
    usage:"指第二天要上学、不宜晚睡的晚上。'No way, it's a school night.'（不行，第二天还要上学呢）。",
    example:"I can't stay out late — it's a school night.",
    cloze:{text:"I can't stay out late — it's a ______ ______.", answer:"school|night", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:126, type:"sentence", level:"6.5+", topic:"communication", dimension:"express", english:"That's gonna get old.",
    chinese:"（这）很快就会让人腻烦。",
    source:"查理成长日记 S01E07", category:"sentence pattern",
    keywords:[{word:"get old", pos:"phrase", meaning:"变无聊，让人腻"}],
    usage:"指某件事/某个玩笑用多了就失去新鲜感。Gabe 反复唱 'happy happy horse'，'That's gonna get old.'（很快就腻了）。",
    example:"Repeating the same joke over and over is gonna get old fast.",
    cloze:{text:"Repeating the same joke over and over is ______ ______ old fast.", answer:"gonna|get", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:127, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"hang out with",
    chinese:"和某人待在一起，一起玩",
    source:"查理成长日记 S01E07", category:"phrasal verb",
    keywords:[{word:"hang out", pos:"phrasal verb", meaning:"闲逛，厮混"}],
    usage:"指和朋友一起消磨时间。'I'd rather hang out with my mom.'（我更想陪我妈聊天）。",
    example:"We usually hang out at the mall after school.",
    cloze:{text:"We usually ______ ______ at the mall after school.", answer:"hang|out", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:128, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"be grounded",
    chinese:"被禁足，被罚不许出门",
    source:"查理成长日记 S01E07", category:"phrase",
    keywords:[{word:"ground", pos:"v.", meaning:"禁足（惩罚）"}],
    usage:"家长惩罚孩子不许出门的常用说法。'No movie, grounded for a week?'（不许看电影，禁足一周？）。",
    example:"I was grounded for a month after crashing the car.",
    cloze:{text:"I was ______ for a month after crashing the car.", answer:"grounded", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:129, type:"sentence", level:"6.5+", topic:"values", dimension:"integrity", english:"I've had it forever.",
    chinese:"这东西我用了好久了。",
    source:"查理成长日记 S01E07", category:"sentence pattern",
    keywords:[{word:"have it forever", pos:"phrase", meaning:"拥有很久了"}],
    usage:"表示某件物品陪伴自己很长时间，隐含感情。'Honey, I've had it forever.'（宝贝，这衣服我穿了好久了）。",
    example:"This jacket looks worn out because I've had it forever.",
    cloze:{text:"This jacket looks worn out because I've ______ it forever.", answer:"had", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:130, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"deal with it",
    chinese:"忍着点，你得接受现实",
    source:"查理成长日记 S01E08", category:"phrasal verb",
    keywords:[{word:"deal with", pos:"phrasal verb", meaning:"应付，接受"}],
    usage:"让对方接受无法改变的事实，带点不耐烦。'I'm pregnant. I have gas. Deal with it.'（我怀孕会胀气，你该习惯了）。",
    example:"The schedule isn't changing — deal with it.",
    cloze:{text:"The schedule isn't changing — ______ ______ it.", answer:"deal|with", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:131, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"just so we're clear",
    chinese:"把话说清楚，先声明",
    source:"查理成长日记 S01E08", category:"phrase",
    keywords:[{word:"just so we're clear", pos:"phrase", meaning:"把话说明白"}],
    usage:"在强调重要约定前使用。'And just so we're clear, there will not be a fifth.'（把话说清楚，绝对不要第五个孩子了）。",
    example:"Just so we're clear, I'm not paying for this.",
    cloze:{text:"______ ______ we're clear, I'm not paying for this.", answer:"Just|so", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[], comparison:null
  },
  {
    id:132, type:"phrase", level:"6.5+", topic:"family", dimension:"love", english:"go into labor",
    chinese:"（孕妇）开始分娩阵痛",
    source:"查理成长日记 S01E08", category:"phrase",
    keywords:[{word:"labor", pos:"n.", meaning:"分娩"}],
    usage:"指临产。'Could you please let him know that I have gone into labor?'（请转告他我快生了）。",
    example:"She went into labor at 3 a.m. and we rushed to the hospital.",
    cloze:{text:"She went ______ ______ at 3 a.m. and we rushed to the hospital.", answer:"into|labor", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:133, type:"idiom", level:"7+", topic:"work", dimension:"execution", english:"all my ducks are in a row",
    chinese:"一切安排妥当，万事俱备",
    source:"查理成长日记 S01E08", category:"idiom",
    keywords:[{word:"ducks in a row", pos:"idiom", meaning:"把事情都安排好"}],
    usage:"比喻所有准备工作都已就绪。'All my ducks are in a row and everything's under control.'（一切都安排好了，尽在掌握）。",
    example:"Before the launch, we made sure all our ducks were in a row.",
    cloze:{text:"Before the launch, we made sure all our ______ were ______ a row.", answer:"ducks|in", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:134, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"under control",
    chinese:"在掌控之中，有条不紊",
    source:"查理成长日记 S01E08", category:"phrase",
    keywords:[{word:"under control", pos:"phrase", meaning:"处于控制之下"}],
    usage:"表示事情进展正常、没有失控。'Everything's under control.'（所有事都有条不紊）。",
    example:"Don't panic — the situation is under control.",
    cloze:{text:"Don't panic — the situation is ______ ______.", answer:"under|control", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:135, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"before you do something you might regret",
    chinese:"在做会后悔的事之前，三思",
    source:"查理成长日记 S01E08", category:"phrase",
    keywords:[{word:"regret", pos:"v.", meaning:"后悔"}],
    usage:"劝人冷静、别冲动。'Look, before you do something you might regret...'（听着，在你做会后悔的事之前……）。",
    example:"Think twice before you do something you might regret.",
    cloze:{text:"Think twice before you do something you might ______.", answer:"regret", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:136, type:"phrasal verb", level:"6.5+", topic:"education", dimension:"learning", english:"catch on",
    chinese:"领会，学会，跟上",
    source:"查理成长日记 S01E08", category:"phrasal verb",
    keywords:[{word:"catch on", pos:"phrasal verb", meaning:"理解，学会"}],
    usage:"指逐渐理解或学会。'You catch on real fast.'（你小子挺识相的/学得真快）。",
    example:"It took me a while to catch on to the new system.",
    cloze:{text:"It took me a while to ______ ______ to the new system.", answer:"catch|on", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:137, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"keep it down",
    chinese:"小声点",
    source:"查理成长日记 S01E08", category:"phrasal verb",
    keywords:[{word:"keep it down", pos:"phrase", meaning:"压低音量"}],
    usage:"请对方降低音量。'Mrs. D., can you keep it down a little bit?'（D太太，你能不能小点声？）。",
    example:"Could you keep it down? The baby is sleeping.",
    cloze:{text:"Could you ______ it ______? The baby is sleeping.", answer:"keep|down", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:138, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"who cares?",
    chinese:"谁在乎啊",
    source:"查理成长日记 S01E08", category:"phrase",
    keywords:[{word:"who cares", pos:"phrase", meaning:"谁在乎"}],
    usage:"表示某事无所谓或不重要。'Who cares about dad?'（谁管你爸啊）。",
    example:"He left without saying goodbye — who cares?",
    cloze:{text:"He left without saying goodbye — ______ ______?", answer:"who|cares", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:139, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"one tiny glitch",
    chinese:"一个小问题，一个小故障",
    source:"查理成长日记 S01E08", category:"phrase",
    keywords:[{word:"glitch", pos:"n.", meaning:"小故障，小毛病"}],
    usage:"轻描淡写地描述一个小麻烦。'Everything's great. Just one tiny glitch.'（一切都好，就是有点小问题）。",
    example:"The launch went smoothly except for one tiny glitch in the payment system.",
    cloze:{text:"The launch went smoothly except for one ______ glitch in the payment system.", answer:"tiny", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:140, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"you're going down",
    chinese:"你死定了，你输定了",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"going down", pos:"phrase", meaning:"要输了/要完蛋了"}],
    usage:"挑战对手时的放话，表示必胜。'Oh, you are going down!'（你是不想活了吧/你输定了）。",
    example:"Bring your best game — you're going down.",
    cloze:{text:"Bring your best game — you're ______ ______.", answer:"going|down", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:141, type:"phrase", level:"7+", topic:"values", dimension:"integrity", english:"on one's best behavior",
    chinese:"表现出最佳风度",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"best behavior", pos:"phrase", meaning:"最好的举止"}],
    usage:"提醒客人在重要场合注意言行。'I want everybody on their best behavior.'（我希望每个人都表现出最佳风度）。",
    example:"We're meeting my in-laws tonight, so please be on your best behavior.",
    cloze:{text:"We're meeting my in-laws tonight, so please be on your ______ ______.", answer:"best|behavior", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:142, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"in someone's defense",
    chinese:"为某人说句公道话",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"in defense of", pos:"phrase", meaning:"为……辩护"}],
    usage:"在别人被批评时替他说话。'In her defense, Mrs. Dabney wasn't always like this.'（为她说句公道话，她以前不是这样的）。",
    example:"In his defense, he did warn us about the deadline.",
    cloze:{text:"______ his defense, he did warn us about the deadline.", answer:"In", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:143, type:"phrase", level:"6.5+", topic:"education", dimension:"talent", english:"have a tendency to do",
    chinese:"有……的倾向，容易……",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"tendency", pos:"n.", meaning:"倾向，趋势"}],
    usage:"客观描述某人/某事的习惯性倾向。'Hercules has a tendency to bark... all night long.'（大力神总是爱叫唤，整晚整晚地叫）。",
    example:"Teenagers have a tendency to stay up late on weekends.",
    cloze:{text:"Teenagers have a ______ to stay up late on weekends.", answer:"tendency", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:144, type:"phrase", level:"6.5+", topic:"work", dimension:"deal", english:"we got a deal",
    chinese:"成交，就这么说定了",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"deal", pos:"n.", meaning:"交易，协议"}],
    usage:"双方达成一致时的确认语。'Dog goes in, branch comes off. We got a deal?'（小狗进屋，树枝砍掉，成交不？）。",
    example:"You wash the dishes and I'll cook — we got a deal?",
    cloze:{text:"You wash the dishes and I'll cook — we ______ a deal?", answer:"got", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:145, type:"phrase", level:"6.5+", topic:"work", dimension:"deal", english:"shake hands on it",
    chinese:"握手成交，说定",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"shake hands", pos:"phrase", meaning:"握手"}],
    usage:"通过握手确认协议成立。'It's too late. I already shook hands on it.'（太迟了，我已经和别人说定了）。",
    example:"We agreed on the price and shook hands on it.",
    cloze:{text:"We agreed on the price and ______ ______ on it.", answer:"shook|hands", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:146, type:"sentence", level:"7+", topic:"values", dimension:"principles", english:"Deals are made to be broken.",
    chinese:"交易就是用来打破的。",
    source:"查理成长日记 S01E09", category:"sentence pattern",
    keywords:[{word:"made to be broken", pos:"phrase", meaning:"生来就是被打破的"}],
    usage:"幽默地表示承诺不一定要遵守（反语，注意语境）。'Well yeah, deals are made to be broken.'（那又怎样，交易就是用来打破的）。",
    example:"He treats every promise like a deal made to be broken.",
    cloze:{text:"He treats every promise like a deal ______ to be broken.", answer:"made", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:147, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"one way or another",
    chinese:"无论如何，不管怎样",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"one way or another", pos:"phrase", meaning:"以某种方式，总归"}],
    usage:"表示结果一定会发生，只是方式不同。'You're coming down one way or another!'（不管怎样你们都得下来）。",
    example:"We'll finish this project one way or another.",
    cloze:{text:"We'll finish this project ______ ______ or another.", answer:"one|way", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:148, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"fight the power",
    chinese:"向权威开战，反抗",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"fight the power", pos:"phrase", meaning:"反抗权威"}],
    usage:"表示对抗权威、不屈服（口语+文化梗）。'We're fighting the power!'（我们要向霸权开战）。",
    example:"The students are fighting the power over the new uniform rule.",
    cloze:{text:"The students are ______ the ______ over the new uniform rule.", answer:"fighting|power", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:149, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"air one's grievances",
    chinese:"倾诉不满，倒苦水",
    source:"查理成长日记 S01E09", category:"phrase",
    keywords:[{word:"grievance", pos:"n.", meaning:"不满，委屈"}],
    usage:"把憋着的不满说出来。'Since we're airing our grievances...'（既然现在是在开牢骚大会……）。",
    example:"The meeting became a chance for employees to air their grievances.",
    cloze:{text:"The meeting became a chance for employees to ______ their grievances.", answer:"air", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:150, type:"phrase", level:"7+", topic:"friendship", dimension:"trust", english:"have a falling out",
    chinese:"（朋友/亲人）失和，闹翻",
    source:"查理成长日记 S01E10", category:"phrase",
    keywords:[{word:"falling out", pos:"phrase", meaning:"失和，闹翻"}],
    usage:"指关系破裂、不再来往。'He and your father had some kind of falling out.'（他跟你爸有一段不堪回首的过去）。",
    example:"They were best friends for years until a falling out over money.",
    cloze:{text:"They were best friends for years until a ______ ______ over money.", answer:"falling|out", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:151, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"when it comes to",
    chinese:"说到，关于，在……方面",
    source:"查理成长日记 S01E10", category:"phrase",
    keywords:[{word:"when it comes to", pos:"phrase", meaning:"当涉及……时"}],
    usage:"引出话题或领域，雅思高频连接语。'When it comes to Duncan family drama, stay out.'（说到邓肯家的家庭伦理剧，躲远点）。",
    example:"When it comes to cooking, my grandmother has no rivals.",
    cloze:{text:"______ it comes to cooking, my grandmother has no rivals.", answer:"When", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:152, type:"phrase", level:"6.5+", topic:"values", dimension:"principles", english:"stay out of it",
    chinese:"别掺和，躲远点",
    source:"查理成长日记 S01E10", category:"phrasal verb",
    keywords:[{word:"stay out of", pos:"phrasal verb", meaning:"不参与，远离"}],
    usage:"劝人别卷入别人的麻烦。'When it comes to family drama, stay out.'（家庭纠纷，别掺和）。",
    example:"It's their argument — stay out of it.",
    cloze:{text:"It's their argument — ______ ______ of it.", answer:"stay|out", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:153, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"a big break",
    chinese:"重大机遇，翻身的机会",
    source:"查理成长日记 S01E10", category:"phrase",
    keywords:[{word:"big break", pos:"phrase", meaning:"重大突破/机遇"}],
    usage:"指职业生涯中关键的转折机会。'This could be a big break for Charlie.'（这可能是查莉的绝佳机会）。",
    example:"Her first album was the big break she'd been waiting for.",
    cloze:{text:"Her first album was the ______ ______ she'd been waiting for.", answer:"big|break", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:154, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"take an ugly turn",
    chinese:"急转直下，变得糟糕",
    source:"查理成长日记 S01E10", category:"phrase",
    keywords:[{word:"take a turn", pos:"phrase", meaning:"转变方向"}],
    usage:"形容事情往坏的方向发展。'This conversation sure took an ugly turn.'（这谈话最后变成了数落我的不是）。",
    example:"The friendly debate took an ugly turn when politics came up.",
    cloze:{text:"The friendly debate took an ______ turn when politics came up.", answer:"ugly", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:155, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"come up with",
    chinese:"想出，提出（主意）",
    source:"查理成长日记 S01E10", category:"phrasal verb",
    keywords:[{word:"come up with", pos:"phrasal verb", meaning:"想出，提出"}],
    usage:"指构思出想法、方案。'When did you come up with that?'（你什么时候想出这主意的？）。",
    example:"She came up with a brilliant idea for the school fair.",
    cloze:{text:"She ______ ______ with a brilliant idea for the school fair.", answer:"came|up", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:156, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"in one of her moods",
    chinese:"情绪不佳，闹脾气",
    source:"查理成长日记 S01E10", category:"phrase",
    keywords:[{word:"in a mood", pos:"phrase", meaning:"心情不好"}],
    usage:"委婉地说某人心情差。'Because she's in one of her moods.'（因为她现在情绪不佳）。",
    example:"Don't ask him for a raise today — he's in one of his moods.",
    cloze:{text:"Don't ask him for a raise today — he's in one of his ______.", answer:"moods", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:157, type:"sentence", level:"6.5+", topic:"work", dimension:"execution", english:"Let me handle it.",
    chinese:"让我来处理。",
    source:"查理成长日记 S01E10", category:"sentence pattern",
    keywords:[{word:"handle", pos:"v.", meaning:"处理，应对"}],
    usage:"主动揽下某个麻烦，让对方放心。'Let me handle it.'（就让我来处理吧）。",
    example:"Don't worry about the paperwork — let me handle it.",
    cloze:{text:"Don't worry about the paperwork — let me ______ it.", answer:"handle", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:158, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"speaking of",
    chinese:"说到，提起",
    source:"查理成长日记 S01E10", category:"phrase",
    keywords:[{word:"speaking of", pos:"phrase", meaning:"说到……"}],
    usage:"由当前话题自然引出相关话题。'Speaking of my dad, what happened between you guys?'（说到我老爸，你们之间怎么了？）。",
    example:"Speaking of holidays, have you booked anything yet?",
    cloze:{text:"______ ______ holidays, have you booked anything yet?", answer:"Speaking|of", hint:"填两个词，用 | 分隔，句首大写"},
    questions:[], comparison:null
  },
  {
    id:159, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"pack it up",
    chinese:"收工，收拾走人",
    source:"查理成长日记 S01E10", category:"phrasal verb",
    keywords:[{word:"pack up", pos:"phrasal verb", meaning:"收拾，打包"}],
    usage:"结束当前活动，收拾离开。'Pack it up. The show's over.'（收拾走人吧，表演结束了）。",
    example:"It's getting dark — let's pack it up and head home.",
    cloze:{text:"It's getting dark — let's ______ it up and head home.", answer:"pack", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:160, type:"phrase", level:"7+", topic:"communication", dimension:"connect", english:"it's how I roll",
    chinese:"这就是我的风格",
    source:"查理成长日记 S01E11", category:"idiom",
    keywords:[{word:"that's how I roll", pos:"idiom", meaning:"我就是这样行事的"}],
    usage:"表示'这是我的行事方式'，带点个性宣言。'Oh no reason. It's how I roll.'（没啥特别原因，我就喜欢这样）。",
    example:"Wake up at 5 a.m. every day? Yeah, it's how I roll.",
    cloze:{text:"Wake up at 5 a.m. every day? Yeah, it's how I ______.", answer:"roll", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:161, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"pick on someone",
    chinese:"欺负某人，找某人的茬",
    source:"查理成长日记 S01E11", category:"phrasal verb",
    keywords:[{word:"pick on", pos:"phrasal verb", meaning:"欺负，刁难"}],
    usage:"指单方面欺负弱小。'Why do the big kids always pick on the little kids?'（为什么大孩子总欺负小孩子？）。",
    example:"Stop picking on your little brother — he's half your size.",
    cloze:{text:"Stop ______ on your little brother — he's half your size.", answer:"picking", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:162, type:"idiom", level:"7+", topic:"values", dimension:"mood", english:"a taste of one's own medicine",
    chinese:"以其人之道还治其人之身",
    source:"查理成长日记 S01E11", category:"idiom",
    keywords:[{word:"taste of one's own medicine", pos:"idiom", meaning:"尝到自己的苦果"}],
    usage:"让对方也尝尝他给别人造成的苦头。'Give him a taste of his own medicine.'（要以其人之道还治其人之身）。",
    example:"After years of pranks, he finally got a taste of his own medicine.",
    cloze:{text:"After years of pranks, he finally got a ______ of his own medicine.", answer:"taste", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:163, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"ring a bell",
    chinese:"（名字/事）听着耳熟，有印象",
    source:"查理成长日记 S01E11", category:"idiom",
    keywords:[{word:"ring a bell", pos:"idiom", meaning:"唤起回忆"}],
    usage:"表示某名字/事情似曾相识但记不清。'That's not ringing a bell.'（不太想得起来是谁）。",
    example:"The name rings a bell, but I can't place her face.",
    cloze:{text:"The name ______ a bell, but I can't place her face.", answer:"rings", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:164, type:"phrase", level:"6.5+", topic:"friendship", dimension:"romance", english:"have a crush on",
    chinese:"暗恋，喜欢上",
    source:"查理成长日记 S01E11", category:"phrase",
    keywords:[{word:"crush", pos:"n.", meaning:"暗恋对象"}],
    usage:"指对某人心动的单恋。'Turns out she has a crush on you.'（原来她对你动心了）。",
    example:"I've had a crush on him since middle school.",
    cloze:{text:"I've had a ______ on him since middle school.", answer:"crush", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:165, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"lash out",
    chinese:"发火，猛烈抨击",
    source:"查理成长日记 S01E11", category:"phrasal verb",
    keywords:[{word:"lash out", pos:"phrasal verb", meaning:"（因愤怒）发作"}],
    usage:"指情绪失控时对别人发火。'She gets frustrated and lashes out.'（她感到挫败就用揍人来出气）。",
    example:"Under stress, he tends to lash out at whoever is closest.",
    cloze:{text:"Under stress, he tends to ______ ______ at whoever is closest.", answer:"lash|out", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:166, type:"phrase", level:"7+", topic:"friendship", dimension:"romance", english:"leave a trail of broken hearts",
    chinese:"到处留情，伤透人心",
    source:"查理成长日记 S01E11", category:"phrase",
    keywords:[{word:"broken hearts", pos:"phrase", meaning:"破碎的心"}],
    usage:"形容情场浪子让很多人心碎。'Did I leave a trail of broken hearts?'（我难道到处留情伤了很多人的心吗？）。",
    example:"He's charming but leaves a trail of broken hearts behind him.",
    cloze:{text:"He's charming but leaves a ______ of broken hearts behind him.", answer:"trail", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:167, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"get out of my face",
    chinese:"滚远点，别烦我",
    source:"查理成长日记 S01E11", category:"phrase",
    keywords:[{word:"out of my face", pos:"phrase", meaning:"从我面前消失"}],
    usage:"非常不客气地让对方离开。'Now get out of my face.'（现在滚远点吧）。",
    example:"I'm busy — get out of my face.",
    cloze:{text:"I'm busy — get ______ of my face.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:168, type:"phrase", level:"6.5+", topic:"education", dimension:"learning", english:"have trouble doing something",
    chinese:"做某事有困难",
    source:"查理成长日记 S01E11", category:"phrase",
    keywords:[{word:"have trouble doing", pos:"phrase", meaning:"做……有困难"}],
    usage:"委婉表达自己不擅长做某事。'She has trouble expressing her feelings.'（她不善于表达情感）。",
    example:"He has trouble waking up early no matter what he tries.",
    cloze:{text:"He has ______ waking up early no matter what he tries.", answer:"trouble", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:169, type:"phrase", level:"6.5+", topic:"work", dimension:"deal", english:"keep the change",
    chinese:"不用找零了",
    source:"查理成长日记 S01E11", category:"phrase",
    keywords:[{word:"keep the change", pos:"phrase", meaning:"不用找钱"}],
    usage:"付款时让对方留下零钱作为小费。'Here you go. Keep the change.'（给你，不用找零了）。",
    example:"I handed the driver the fare and told him to keep the change.",
    cloze:{text:"I handed the driver the fare and told him to ______ the change.", answer:"keep", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:170, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"don't blow it",
    chinese:"别搞砸了",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"blow it", pos:"phrase", meaning:"搞砸，弄糟"}],
    usage:"重要关头提醒对方千万别失误。'This is my chance. Don't blow it.'（这是我的机会，别搞砸了）。",
    example:"You've got the interview tomorrow — don't blow it.",
    cloze:{text:"You've got the interview tomorrow — don't ______ it.", answer:"blow", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:171, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"follow-up question",
    chinese:"追问，后续问题",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"follow-up", pos:"adj.", meaning:"后续的"}],
    usage:"在已有问题上继续追问。'I have a follow-up question.'（我的问题还有后续）。",
    example:"The journalist asked a sharp follow-up question about the budget.",
    cloze:{text:"The journalist asked a sharp ______ question about the budget.", answer:"follow-up", hint:"填一个词（带连字符）"},
    questions:[], comparison:null
  },
  {
    id:172, type:"sentence", level:"6.5+", topic:"work", dimension:"execution", english:"My schedule just opened up.",
    chinese:"我的时间表刚好空出来了。",
    source:"查理成长日记 S01E12", category:"sentence pattern",
    keywords:[{word:"open up", pos:"phrasal verb", meaning:"（时间）空出来"}],
    usage:"表示原本有事，现在有空了。'I'll pay you $20 a day. — My schedule just opened up.'（一天20块。— 我时间刚好空出来了）。",
    example:"I can make that meeting after all — my schedule just opened up.",
    cloze:{text:"I can make that meeting after all — my schedule just ______ up.", answer:"opened", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:173, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"make a scene",
    chinese:"大吵大闹，当众出丑",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"make a scene", pos:"phrase", meaning:"当众吵闹"}],
    usage:"指在公共场合大声吵闹引人注意。'So my little Caboodie won't make a scene.'（免得我的小宝贝闹起来）。",
    example:"She made a scene at the restaurant over the cold soup.",
    cloze:{text:"She made a ______ at the restaurant over the cold soup.", answer:"scene", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:174, type:"phrase", level:"7+", topic:"friendship", dimension:"romance", english:"you've got it bad",
    chinese:"你陷得很深（痴情）",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"have it bad", pos:"phrase", meaning:"（感情上）陷得深"}],
    usage:"调侃对方对某人/某事非常着迷。'Oh, you've got it bad.'（哦，你痴情得够严重的）。",
    example:"Checking her photos every hour? You've got it bad.",
    cloze:{text:"Checking her photos every hour? You've got it ______.", answer:"bad", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:175, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"have a lot in common",
    chinese:"有很多共同点",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"in common", pos:"phrase", meaning:"共同的"}],
    usage:"说两人有相似之处、聊得来。'Wow, we really have a lot in common.'（哇，我们真的有很多共同点）。",
    example:"We became friends because we have a lot in common.",
    cloze:{text:"We became friends because we have a lot in ______.", answer:"common", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:176, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"be allergic to",
    chinese:"对……过敏",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"allergic", pos:"adj.", meaning:"过敏的"}],
    usage:"说明对某种物质的过敏反应，也引申为'受不了'。'I'm allergic to peanuts.'（我对花生过敏）。",
    example:"I'm allergic to dust, so I vacuum every day.",
    cloze:{text:"I'm ______ to dust, so I vacuum every day.", answer:"allergic", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:177, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"be up to something",
    chinese:"在打什么算盘，有什么企图",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"be up to", pos:"phrase", meaning:"在搞（名堂）"}],
    usage:"怀疑对方在暗中搞小动作。'That boy's up to something.'（那小子肯定在打什么小算盘）。",
    example:"He's being unusually nice — I think he's up to something.",
    cloze:{text:"He's being unusually nice — I think he's ______ ______ something.", answer:"up|to", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:178, type:"phrase", level:"7+", topic:"values", dimension:"integrity", english:"make it up to someone",
    chinese:"补偿某人",
    source:"查理成长日记 S01E12", category:"phrase",
    keywords:[{word:"make up for", pos:"phrasal verb", meaning:"弥补"}],
    usage:"因亏欠而想弥补对方。'That's why I have to make it up to you with Charlie.'（所以我想通过照顾查莉来补偿你们）。",
    example:"I missed your birthday — let me make it up to you with dinner.",
    cloze:{text:"I missed your birthday — let me make it ______ ______ you with dinner.", answer:"up|to", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:179, type:"idiom", level:"6.5+", topic:"skills", dimension:"mastery", english:"a piece of cake",
    chinese:"小菜一碟，轻而易举",
    source:"查理成长日记 S01E12", category:"idiom",
    keywords:[{word:"a piece of cake", pos:"idiom", meaning:"非常容易"}],
    usage:"形容事情非常简单。'Relationships are a piece of cake.'（感情上的事不过是小菜一碟）。",
    example:"The driving test was a piece of cake once I'd practised enough.",
    cloze:{text:"The driving test was a ______ of cake once I'd practised enough.", answer:"piece", hint:"填一个词"},
    questions:[], comparison:null
  },
  
  {
    id:180, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"in a row",
    chinese:"连续（地），接连",
    source:"查理成长日记 S01E13", category:"phrase",
    keywords:[{word:"in a row", pos:"phrase", meaning:"连续，接连"}],
    usage:"强调连续发生多次。'You've lost 11 games in a row.'（你们已连输11场）。",
    example:"She won the championship three years in a row.",
    cloze:{text:"She won the championship three years ______ ______ ______.", answer:"in|a|row", hint:"填三个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:181, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"be dead last",
    chinese:"垫底，倒数第一",
    source:"查理成长日记 S01E13", category:"phrase",
    keywords:[{word:"dead last", pos:"phrase", meaning:"绝对垫底"}],
    usage:"强调排名最末。'You're dead last in the league.'（你们在联赛里垫底）。",
    example:"Our team finished dead last in the regional competition.",
    cloze:{text:"Our team finished ______ last in the regional competition.", answer:"dead", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:182, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"build on something",
    chinese:"在……基础上再接再厉",
    source:"查理成长日记 S01E13", category:"phrasal verb",
    keywords:[{word:"build on", pos:"phrasal verb", meaning:"在……基础上发展"}],
    usage:"以已有成果为起点继续提升。'I think we can build on this.'（我们可以在此基础上再接再厉）。",
    example:"Let's build on last year's success and aim higher.",
    cloze:{text:"Let's ______ on last year's success and aim higher.", answer:"build", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:183, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"in everyone's best interest",
    chinese:"符合所有人的利益",
    source:"查理成长日记 S01E13", category:"phrase",
    keywords:[{word:"best interest", pos:"phrase", meaning:"最大利益"}],
    usage:"表示某个决定对大家都有利（常用于委婉宣布变动）。'It's in everyone's best interest if we make some changes.'（我们做些调整符合所有人的利益）。",
    example:"Restructuring the team is in everyone's best interest.",
    cloze:{text:"Restructuring the team is in everyone's ______ ______.", answer:"best|interest", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:184, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"fire someone",
    chinese:"解雇某人",
    source:"查理成长日记 S01E13", category:"phrasal verb",
    keywords:[{word:"fire", pos:"v.", meaning:"解雇"}],
    usage:"辞退员工的口语说法。'Are you firing me?'（你是要炒我鱿鱼吗？）。",
    example:"The company fired three managers after the scandal.",
    cloze:{text:"The company ______ three managers after the scandal.", answer:"fired", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:185, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"turn things around",
    chinese:"扭转局面",
    source:"查理成长日记 S01E13", category:"phrase",
    keywords:[{word:"turn around", pos:"phrasal verb", meaning:"扭转，转好"}],
    usage:"把糟糕的处境变好。'I can turn this thing around.'（我可以扭转局面的）。",
    example:"The new coach turned the team around within a season.",
    cloze:{text:"The new coach turned the ______ around within a season.", answer:"team", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:186, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"have a sweet tooth",
    chinese:"爱吃甜食",
    source:"查理成长日记 S01E13", category:"phrase",
    keywords:[{word:"sweet tooth", pos:"phrase", meaning:"爱吃甜食的嗜好"}],
    usage:"形容喜欢甜食。'I thought you might have a sweet tooth like me.'（我以为你也跟我一样爱吃甜食）。",
    example:"I have a sweet tooth, so dessert is always my favourite part.",
    cloze:{text:"I have a ______ tooth, so dessert is always my favourite part.", answer:"sweet", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:187, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"jazz something up",
    chinese:"让……更有活力/更生动",
    source:"查理成长日记 S01E13", category:"phrasal verb",
    keywords:[{word:"jazz up", pos:"phrasal verb", meaning:"使活泼生动"}],
    usage:"给平淡的东西增加趣味。'Okay, so I'll jazz them up.'（好，我可以让它们更活泼）。",
    example:"Add some music to jazz up the presentation.",
    cloze:{text:"Add some music to ______ up the presentation.", answer:"jazz", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:188, type:"phrase", level:"7+", topic:"skills", dimension:"mastery", english:"make something come alive",
    chinese:"让……活起来，生动呈现",
    source:"查理成长日记 S01E13", category:"phrase",
    keywords:[{word:"come alive", pos:"phrase", meaning:"活起来，生动"}],
    usage:"让抽象的内容变得生动可感。'Find a way to make the book come alive.'（找个法子让你读的书更生动）。",
    example:"A great teacher can make history come alive in the classroom.",
    cloze:{text:"A great teacher can make history ______ ______ in the classroom.", answer:"come|alive", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:189, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"kiss up to someone",
    chinese:"拍马屁，讨好",
    source:"查理成长日记 S01E13", category:"phrasal verb",
    keywords:[{word:"kiss up to", pos:"phrasal verb", meaning:"讨好，巴结"}],
    usage:"为了好处而刻意讨好。'Instead of kissing up to your teacher...'（而不是来拍老师的马屁……）。",
    example:"He's always kissing up to the boss instead of doing real work.",
    cloze:{text:"He's always ______ up to the boss instead of doing real work.", answer:"kissing", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:190, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"my treat",
    chinese:"我请客",
    source:"查理成长日记 S01E14", category:"phrase",
    keywords:[{word:"my treat", pos:"phrase", meaning:"我来付账"}],
    usage:"表示由自己承担费用。'I'm taking you to lunch — my treat.'（我带你们去吃饭，我请客）。",
    example:"Don't worry about the bill — it's my treat.",
    cloze:{text:"Don't worry about the bill — it's my ______.", answer:"treat", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:191, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"kind of",
    chinese:"有点，稍微",
    source:"查理成长日记 S01E14", category:"phrase",
    keywords:[{word:"kind of", pos:"phrase", meaning:"有点（缓和语气）"}],
    usage:"委婉表达程度，雅思口语高频。'I'm kind of getting hungry.'（我有点饿了）。",
    example:"I'm kind of tired after the long meeting.",
    cloze:{text:"I'm ______ ______ tired after the long meeting.", answer:"kind|of", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:192, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"mess things up",
    chinese:"把事情搞砸",
    source:"查理成长日记 S01E14", category:"phrasal verb",
    keywords:[{word:"mess up", pos:"phrasal verb", meaning:"弄糟"}],
    usage:"承认或指出把事情做坏了。'I'm usually the one who messes things up.'（通常都是我把事情搞砸）。",
    example:"I messed things up by sending the email to the wrong person.",
    cloze:{text:"I ______ things up by sending the email to the wrong person.", answer:"messed", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:193, type:"sentence", level:"6.5+", topic:"work", dimension:"execution", english:"We can fix this.",
    chinese:"我们可以补救的。",
    source:"查理成长日记 S01E14", category:"sentence pattern",
    keywords:[{word:"fix", pos:"v.", meaning:"修复，补救"}],
    usage:"安抚对方、表示问题可控。'We still have time — we can fix this.'（还有时间，我们可以补救）。",
    example:"Don't panic — we can fix this before the deadline.",
    cloze:{text:"Don't panic — we can ______ this before the deadline.", answer:"fix", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:194, type:"phrase", level:"6.5+", topic:"family", dimension:"bond", english:"put something away",
    chinese:"把……收起来",
    source:"查理成长日记 S01E14", category:"phrasal verb",
    keywords:[{word:"put away", pos:"phrasal verb", meaning:"收好，放回"}],
    usage:"把物品归位。'Honey, put your phone away.'（亲爱的，把手机收起来）。",
    example:"Please put your toys away before dinner.",
    cloze:{text:"Please ______ your toys away before dinner.", answer:"put", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:195, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"drop someone off",
    chinese:"顺路送某人（到某地）",
    source:"查理成长日记 S01E14", category:"phrasal verb",
    keywords:[{word:"drop off", pos:"phrasal verb", meaning:"顺道送达"}],
    usage:"开车顺路把某人放下。'You drop me off at the thrift store.'（你顺路把我放旧货店）。",
    example:"Can you drop me off at the station on your way?",
    cloze:{text:"Can you ______ me off at the station on your way?", answer:"drop", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:196, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"long gone",
    chinese:"早就没了，找不回来了",
    source:"查理成长日记 S01E14", category:"phrase",
    keywords:[{word:"long gone", pos:"phrase", meaning:"早已消失"}],
    usage:"表示某物已彻底失去。'That is long gone.'（那早就找不回来了）。",
    example:"By the time I got there, the last bus was long gone.",
    cloze:{text:"By the time I got there, the last bus was ______ ______.", answer:"long|gone", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:197, type:"phrase", level:"6.5+", topic:"education", dimension:"learning", english:"it's distracting",
    chinese:"太分散注意力了",
    source:"查理成长日记 S01E14", category:"phrase",
    keywords:[{word:"distracting", pos:"adj.", meaning:"使人分心的"}],
    usage:"抱怨某物干扰专注。'My phone is distracting.'（手机太让我分心了）。",
    example:"The constant notifications are really distracting during study.",
    cloze:{text:"The constant notifications are really ______ during study.", answer:"distracting", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:198, type:"sentence", level:"6.5+", topic:"communication", dimension:"express", english:"That's gotta be good.",
    chinese:"那一定很棒（口语推断）。",
    source:"查理成长日记 S01E14", category:"sentence pattern",
    keywords:[{word:"gotta", pos:"口语", meaning:"（have got to）一定"}],
    usage:"用口语推断某事肯定不错（带点反讽）。'The critics hated it — that means it's gotta be good.'（评论家讨厌它，那一定好看）。",
    example:"A movie everyone hates? That's gotta be good.",
    cloze:{text:"A movie everyone hates? That's ______ be good.", answer:"gotta", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:199, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"be the one who messes things up",
    chinese:"总是搞砸事情的那个人",
    source:"查理成长日记 S01E14", category:"phrase",
    keywords:[{word:"the one who", pos:"phrase", meaning:"……的那个人"}],
    usage:"自嘲式承认自己在某方面总出错。'I'm usually the one who messes things up.'（通常是我在捣蛋）。",
    example:"In group projects, I'm usually the one who messes things up.",
    cloze:{text:"In group projects, I'm usually the one who ______ things up.", answer:"messes", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:200, type:"phrase", level:"7+", topic:"media", dimension:"truth", english:"go viral",
    chinese:"（视频/内容）病毒式走红",
    source:"查理成长日记 S01E15", category:"phrase",
    keywords:[{word:"go viral", pos:"phrase", meaning:"爆红，疯传"}],
    usage:"形容内容在网络上快速传播。'That Charlie video has gone viral.'（查莉的视频火起来了）。",
    example:"Her dance video went viral and got millions of views.",
    cloze:{text:"Her dance video ______ viral and got millions of views.", answer:"went", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:201, type:"phrase", level:"7+", topic:"media", dimension:"truth", english:"one-hit wonder",
    chinese:"昙花一现（只有一次成功）",
    source:"查理成长日记 S01E15", category:"phrase",
    keywords:[{word:"one-hit wonder", pos:"phrase", meaning:"只红一次的人/作品"}],
    usage:"贬义或调侃某人只有一次成功。'You got lucky, one-hit wonder.'（你只是运气好，昙花一现）。",
    example:"The band was a one-hit wonder — their second album flopped.",
    cloze:{text:"The band was a one-______ wonder — their second album flopped.", answer:"hit", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:202, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"on the bright side",
    chinese:"从好的方面看",
    source:"查理成长日记 S01E15", category:"phrase",
    keywords:[{word:"bright side", pos:"phrase", meaning:"光明的一面"}],
    usage:"坏事之后找积极角度。'Well, on the bright side, you got the wrong trash bags too.'（往好处想，垃圾袋你也拿错了——一起换）。",
    example:"We lost the game, but on the bright side, nobody got hurt.",
    cloze:{text:"We lost the game, but on the bright ______, nobody got hurt.", answer:"side", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:203, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"I was wondering if...",
    chinese:"我想问一下……（委婉请求）",
    source:"查理成长日记 S01E15", category:"sentence pattern",
    keywords:[{word:"wonder if", pos:"phrase", meaning:"想知道是否"}],
    usage:"礼貌委婉地提出请求或问题。'I was wondering if you would wear my jersey on Friday.'（我在想周五你能不能穿我的球衣）。",
    example:"I was wondering if you could help me with this report.",
    cloze:{text:"I was ______ if you could help me with this report.", answer:"wondering", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:204, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"believe it or not",
    chinese:"信不信由你",
    source:"查理成长日记 S01E15", category:"phrase",
    keywords:[{word:"believe it or not", pos:"phrase", meaning:"信不信由你"}],
    usage:"引出看似难以置信的事实。'Believe it or not, you can use this phone wherever you go.'（信不信由你，这手机随处都能用）。",
    example:"Believe it or not, I've never eaten pizza in my life.",
    cloze:{text:"______ it or not, I've never eaten pizza in my life.", answer:"Believe", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:205, type:"phrase", level:"7+", topic:"skills", dimension:"mastery", english:"dabble in",
    chinese:"涉猎，浅尝",
    source:"查理成长日记 S01E15", category:"phrasal verb",
    keywords:[{word:"dabble in", pos:"phrasal verb", meaning:"浅尝辄止地涉足"}],
    usage:"谦称自己对某事只略懂。'I dabble in the culinary arts.'（我对厨艺稍有涉猎）。",
    example:"I dabble in photography, but I'm far from professional.",
    cloze:{text:"I ______ in photography, but I'm far from professional.", answer:"dabble", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:206, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"knock someone down",
    chinese:"把某人打倒，拉下马",
    source:"查理成长日记 S01E15", category:"phrasal verb",
    keywords:[{word:"knock down", pos:"phrasal verb", meaning:"击倒"}],
    usage:"比喻攻击/贬低成功者。'Once you're on top, they want to knock you down.'（人一旦到巅峰，就有人想把你拉下马）。",
    example:"Ignore the critics who try to knock you down.",
    cloze:{text:"Ignore the critics who try to ______ you down.", answer:"knock", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:207, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"act something out",
    chinese:"把……表演出来",
    source:"查理成长日记 S01E15", category:"phrasal verb",
    keywords:[{word:"act out", pos:"phrasal verb", meaning:"表演，演绎"}],
    usage:"通过表演呈现内容。'You're gonna have to act it out for her.'（你得亲自演给她看）。",
    example:"The teacher asked us to act out the scene from the play.",
    cloze:{text:"The teacher asked us to ______ out the scene from the play.", answer:"act", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:208, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"be all out of something",
    chinese:"（某物）用完了",
    source:"查理成长日记 S01E15", category:"phrase",
    keywords:[{word:"all out of", pos:"phrase", meaning:"完全用光"}],
    usage:"强调资源耗尽。'I'm all out of family members.'（家里的成员都被我支走了）。",
    example:"I'm all out of patience with this endless delay.",
    cloze:{text:"I'm all ______ of patience with this endless delay.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:209, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"straight up",
    chinese:"直截了当地，实话实说",
    source:"查理成长日记 S01E15", category:"phrase",
    keywords:[{word:"straight up", pos:"phrase", meaning:"坦率地，直白"}],
    usage:"强调说话直接不绕弯。'I'm tellin' ya straight up.'（我跟你说实话）。",
    example:"Let me be straight up with you: the plan won't work.",
    cloze:{text:"Let me be ______ up with you: the plan won't work.", answer:"straight", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:210, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"go nuts over something",
    chinese:"为……着迷，疯狂喜欢",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"go nuts", pos:"phrase", meaning:"发狂，疯狂"}],
    usage:"形容对某事物极度喜爱。'Girls go nuts over babies.'（姑娘们都为宝宝着迷）。",
    example:"Fans went nuts over the new album release.",
    cloze:{text:"Fans ______ nuts over the new album release.", answer:"went", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:211, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"put labels on someone",
    chinese:"给某人贴标签，下定义",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"label", pos:"v.", meaning:"贴标签，归类"}],
    usage:"拒绝把关系/人简单归类。'Let's not put labels on our relationship.'（先别给我们的关系下定义）。",
    example:"We shouldn't put labels on people before we really know them.",
    cloze:{text:"We shouldn't put ______ on people before we really know them.", answer:"labels", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:212, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"no kidding",
    chinese:"说真的，没开玩笑",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"no kidding", pos:"phrase", meaning:"不开玩笑/说正经的"}],
    usage:"确认对方认真，或自己转正经。'No kidding.'（说正经的）。",
    example:"No kidding, that exam was the hardest I've ever taken.",
    cloze:{text:"______ kidding, that exam was the hardest I've ever taken.", answer:"No", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:213, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"make a breakthrough",
    chinese:"取得突破",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"breakthrough", pos:"n.", meaning:"突破"}],
    usage:"形容进展有实质跨越。'You two just made a breakthrough.'（你们俩终于有突破了）。",
    example:"After months of research, the team made a major breakthrough.",
    cloze:{text:"After months of research, the team made a major ______.", answer:"breakthrough", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:214, type:"idiom", level:"7+", topic:"values", dimension:"persist", english:"rip the bandage off",
    chinese:"长痛不如短痛，快刀斩乱麻",
    source:"查理成长日记 S01E16", category:"idiom",
    keywords:[{word:"rip the bandage off", pos:"idiom", meaning:"一次性面对痛苦真相"}],
    usage:"比喻与其拖着不如立刻面对残酷现实。'Just rip the bandage off and say it.'（干脆打开天窗说亮话）。",
    example:"Stop delaying the bad news — just rip the bandage off.",
    cloze:{text:"Stop delaying the bad news — just ______ the bandage off.", answer:"rip", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:215, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"tell it straight",
    chinese:"直截了当地说",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"straight", pos:"adv.", meaning:"直白地"}],
    usage:"不拐弯抹角地告知。'You gotta tell it to her straight.'（你得直接告诉她）。",
    example:"I'd rather you tell it straight than sugarcoat the truth.",
    cloze:{text:"I'd rather you tell it ______ than sugarcoat the truth.", answer:"straight", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:216, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"sprain one's ankle",
    chinese:"扭伤脚踝",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"sprain", pos:"v.", meaning:"扭伤"}],
    usage:"运动受伤的常见说法。'I sprained my ankle.'（我扭伤了脚踝）。",
    example:"She sprained her ankle playing basketball and had to rest for weeks.",
    cloze:{text:"She ______ her ankle playing basketball and had to rest for weeks.", answer:"sprained", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:217, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"talk about bad timing",
    chinese:"时机真是太糟了",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"bad timing", pos:"phrase", meaning:"糟糕的时机"}],
    usage:"感叹事情发生在最不该发生的时候。'Right before the talent show — talk about bad timing.'（正好在才艺秀前——时机太糟了）。",
    example:"My phone died during the interview — talk about bad timing.",
    cloze:{text:"My phone died during the interview — talk about ______ timing.", answer:"bad", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:218, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"fake an injury",
    chinese:"假装受伤",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"fake", pos:"v.", meaning:"伪造，假装"}],
    usage:"为了逃避而假装受伤。'I faked the injury.'（我假装受伤的）。",
    example:"He faked an injury to get out of the competition.",
    cloze:{text:"He ______ an injury to get out of the competition.", answer:"faked", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:219, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"for your information",
    chinese:"给你提个醒（更正你的说法）",
    source:"查理成长日记 S01E16", category:"phrase",
    keywords:[{word:"for your information", pos:"phrase", meaning:"（FYI）供你参考/更正"}],
    usage:"略带不满地纠正对方。'For your information, I'm a great dancer.'（跟你说，我可是个很棒的舞者）。",
    example:"For your information, I was there before you arrived.",
    cloze:{text:"______ your information, I was there before you arrived.", answer:"For", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:220, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"take a hit",
    chinese:"遭受打击，受挫",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"take a hit", pos:"phrase", meaning:"受创，受挫"}],
    usage:"指生意/名誉等受到损害。'The fried chicken business has taken a hit.'（炸鸡生意受到打击）。",
    example:"Sales took a hit during the economic downturn.",
    cloze:{text:"Sales ______ a hit during the economic downturn.", answer:"took", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:221, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"go one's way",
    chinese:"如愿，按某人的意愿发展",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"go one's way", pos:"phrase", meaning:"顺心如意"}],
    usage:"形容事情如预期般顺利。'This is the first time something didn't go your way.'（这是头一回没如你的意）。",
    example:"Not everything goes your way — you have to learn to adapt.",
    cloze:{text:"Not everything goes your ______ — you have to learn to adapt.", answer:"way", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:222, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"sleep on it",
    chinese:"（先睡一觉）从长计议",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"sleep on it", pos:"phrase", meaning:"考虑一晚再做决定"}],
    usage:"不急于当场决定。'I'm going to sleep on it.'（这事我明天再说）。",
    example:"Don't decide now — sleep on it and tell me tomorrow.",
    cloze:{text:"Don't decide now — ______ on it and tell me tomorrow.", answer:"sleep", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:223, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"look lively",
    chinese:"打起精神，麻利点",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"lively", pos:"adj.", meaning:"有活力的"}],
    usage:"催促大家打起精神干活。'Doors open in 10, so look lively.'（快开门了，打起精神）。",
    example:"The manager told the staff to look lively before the VIP arrived.",
    cloze:{text:"The manager told the staff to look ______ before the VIP arrived.", answer:"lively", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:224, type:"idiom", level:"7+", topic:"values", dimension:"mood", english:"take someone down a peg",
    chinese:"挫挫某人的锐气",
    source:"查理成长日记 S01E17", category:"idiom",
    keywords:[{word:"take down a peg", pos:"idiom", meaning:"打击骄气"}],
    usage:"让自负的人收敛。'Somebody needs to take him down a peg.'（得有人给他泼泼冷水）。",
    example:"His arrogance was getting out of hand, so I took him down a peg.",
    cloze:{text:"His arrogance was getting out of hand, so I took him down a ______.", answer:"peg", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:225, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"mess with someone",
    chinese:"招惹某人，跟某人捣乱",
    source:"查理成长日记 S01E17", category:"phrasal verb",
    keywords:[{word:"mess with", pos:"phrasal verb", meaning:"招惹，干涉"}],
    usage:"指找某人麻烦或捉弄。'Want to help me mess with dad?'（想一起给老爸捣乱吗？）。",
    example:"Don't mess with him — he's in a bad mood today.",
    cloze:{text:"Don't ______ with him — he's in a bad mood today.", answer:"mess", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:226, type:"phrase", level:"6.5+", topic:"work", dimension:"career", english:"business is booming",
    chinese:"生意兴隆",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"booming", pos:"adj.", meaning:"兴旺的"}],
    usage:"形容生意火爆。'Ever since you became Mr. Kwik, business is booming.'（自从你当上咕唧先生，生意一炮冲天）。",
    example:"Their online store is booming thanks to the new campaign.",
    cloze:{text:"Their online store is ______ thanks to the new campaign.", answer:"booming", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:227, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"the start of something big",
    chinese:"伟大事业的开端",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"the start of something big", pos:"phrase", meaning:"大事的开端"}],
    usage:"对未来的乐观展望。'Mr. Kwik could be the start of something big.'（咕唧先生可能是伟大历程的起点）。",
    example:"This small project might be the start of something big.",
    cloze:{text:"This small project might be the ______ of something big.", answer:"start", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:228, type:"phrase", level:"6.5+", topic:"values", dimension:"integrity", english:"self-worth and dignity",
    chinese:"自我价值与尊严",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"self-worth", pos:"n.", meaning:"自我价值"}],
    usage:"谈论工作的深层意义。'A job is also about self-worth and dignity.'（工作也关乎自我价值与尊严）。",
    example:"Work gives people more than money — it gives them self-worth and dignity.",
    cloze:{text:"Work gives people more than money — it gives them ______ and dignity.", answer:"self-worth", hint:"填一个词（带连字符）"},
    questions:[], comparison:null
  },
  {
    id:229, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"push it",
    chinese:"再加把劲，再加码",
    source:"查理成长日记 S01E17", category:"phrase",
    keywords:[{word:"push it", pos:"phrase", meaning:"加大力度"}],
    usage:"要求对方做得更多更好。'Too easy, too expected. Push it, people.'（太普通了，大家再加把劲）。",
    example:"Good start, but push it — I know you can do better.",
    cloze:{text:"Good start, but ______ it — I know you can do better.", answer:"push", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:230, type:"phrasal verb", level:"6.5+", topic:"skills", dimension:"mastery", english:"come across",
    chinese:"偶然发现，无意中遇到",
    source:"查理成长日记 S01E18", category:"phrasal verb",
    keywords:[{word:"come across", pos:"phrasal verb", meaning:"偶然发现"}],
    usage:"指无意间找到/遇到。'I came across this gift certificate.'（我翻出了一张礼券）。",
    example:"I came across an old photo album while cleaning the attic.",
    cloze:{text:"I ______ across an old photo album while cleaning the attic.", answer:"came", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:231, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"figure something out",
    chinese:"想出解决办法，弄明白",
    source:"查理成长日记 S01E18", category:"phrasal verb",
    keywords:[{word:"figure out", pos:"phrasal verb", meaning:"搞清楚，找到办法"}],
    usage:"指找到解决方式。'I'll figure something out.'（我总有办法的）。",
    example:"We'll figure out a way to make it work on time.",
    cloze:{text:"We'll ______ out a way to make it work on time.", answer:"figure", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:232, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"listen up",
    chinese:"听好了（引起注意）",
    source:"查理成长日记 S01E18", category:"phrase",
    keywords:[{word:"listen up", pos:"phrase", meaning:"注意听"}],
    usage:"宣布重要事项前吸引注意。'Okay, kids, let's listen up.'（好了孩子们，听好了）。",
    example:"Listen up, everyone — there's been a change of plans.",
    cloze:{text:"______ up, everyone — there's been a change of plans.", answer:"Listen", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:233, type:"sentence", level:"7+", topic:"communication", dimension:"express", english:"I can't stress this strongly enough.",
    chinese:"我要再三强调这一点。",
    source:"查理成长日记 S01E18", category:"sentence pattern",
    keywords:[{word:"stress", pos:"v.", meaning:"强调"}],
    usage:"强调事情极其重要。'I cannot stress this strongly enough: do not press the button.'（我要特别强调：绝对不要按按钮）。",
    example:"I can't stress this strongly enough — back up your files regularly.",
    cloze:{text:"I can't stress this strongly ______ — back up your files regularly.", answer:"enough", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:234, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"take something apart",
    chinese:"把……拆开",
    source:"查理成长日记 S01E18", category:"phrasal verb",
    keywords:[{word:"take apart", pos:"phrasal verb", meaning:"拆解"}],
    usage:"指拆解物品或系统。'You'd have to take the whole thing apart.'（你得把整个拆了重做）。",
    example:"He took the old radio apart to see how it worked.",
    cloze:{text:"He ______ the old radio apart to see how it worked.", answer:"took", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:235, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"be on duty",
    chinese:"当班，值班",
    source:"查理成长日记 S01E18", category:"phrase",
    keywords:[{word:"on duty", pos:"phrase", meaning:"执勤，值班"}],
    usage:"表示正在工作岗位上。'I'm on duty. Thank you.'（我正在工作，配合一下）。",
    example:"The night nurse was on duty when the emergency happened.",
    cloze:{text:"The night nurse was on ______ when the emergency happened.", answer:"duty", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:236, type:"phrase", level:"6.5+", topic:"communication", dimension:"conflict", english:"cut it out",
    chinese:"别闹了，停下",
    source:"查理成长日记 S01E18", category:"phrase",
    keywords:[{word:"cut it out", pos:"phrase", meaning:"停止（捣乱）"}],
    usage:"让对方停止烦人的行为。'Will you cut that out?'（别闹了啦）。",
    example:"Cut it out, you two — the meeting is about to start.",
    cloze:{text:"______ it out, you two — the meeting is about to start.", answer:"Cut", hint:"填一个词，句首大写"},
    questions:[], comparison:null
  },
  {
    id:237, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"get out of something",
    chinese:"逃脱，逃避（责任/安排）",
    source:"查理成长日记 S01E18", category:"phrasal verb",
    keywords:[{word:"get out of", pos:"phrasal verb", meaning:"摆脱，逃避"}],
    usage:"指躲开不想做的事。'I got out of mommy-and-PJ day.'（我逃过了一劫）。",
    example:"He always finds a way to get out of doing the dishes.",
    cloze:{text:"He always finds a way to get ______ of doing the dishes.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:238, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"sneaky",
    chinese:"偷偷摸摸的，狡猾的",
    source:"查理成长日记 S01E18", category:"phrase",
    keywords:[{word:"sneaky", pos:"adj.", meaning:"鬼鬼祟祟的"}],
    usage:"形容暗中做某事。'Oh, sneaky.'（哇，真狡猾）。",
    example:"That was sneaky — you hid the evidence before anyone noticed.",
    cloze:{text:"That was ______ — you hid the evidence before anyone noticed.", answer:"sneaky", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:239, type:"sentence", level:"6.5+", topic:"communication", dimension:"express", english:"No one's blaming you.",
    chinese:"没人怪你。",
    source:"查理成长日记 S01E18", category:"sentence pattern",
    keywords:[{word:"blame", pos:"v.", meaning:"责怪"}],
    usage:"安抚自责的人。'Mom, you did everything you could. No one's blaming you.'（你已经尽力了，没人怪你）。",
    example:"It was a team failure — no one's blaming you for it.",
    cloze:{text:"It was a team failure — no one's ______ you for it.", answer:"blaming", hint:"填一个词"},
    questions:[], comparison:null
  },
    {
    id:240, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"start with a clean slate",
    chinese:"重新开始，翻开新的一页",
    source:"卡戴珊家族 S01E01", category:"idiom",
    keywords:[{word:"clean slate", pos:"noun phrase", meaning:"清白的历史，从零开始"}],
    usage:"指抛开过去、从头开始。剧中 Kim 复出拍真人秀说：'It's fun to start with a clean slate.'（重新开始挺有意思的）。",
    example:"After the divorce, she wanted to start with a clean slate in a new city.",
    cloze:{text:"After the divorce, she wanted to start with a clean ______ in a new city.", answer:"slate", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:241, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"get to the bottom of",
    chinese:"查个水落石出",
    source:"卡戴珊家族 S01E01", category:"idiom",
    keywords:[{word:"get to the bottom of", pos:"idiom", meaning:"彻底查明真相"}],
    usage:"指把事情的真相彻底查清。Kim 发现有人泄露录像带后说：'I just want to get to the bottom of where this is coming from.'（我就想查清楚这是从哪儿来的）。",
    example:"The police are determined to get to the bottom of the scandal.",
    cloze:{text:"The police are determined to get to the ______ of the scandal.", answer:"bottom", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:242, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"throw someone under the bus",
    chinese:"拉人挡枪，出卖别人",
    source:"卡戴珊家族 S01E01", category:"idiom",
    keywords:[{word:"throw under the bus", pos:"idiom", meaning:"为自保而牺牲/出卖别人"}],
    usage:"指为了自己脱身而把别人推出去背锅。Kim 开玩笑说要让家人来节目里当笑料：'I'm gonna throw you all under the bus.'（我会把你们全拉出来挡枪）。",
    example:"Don't throw your colleague under the bus to save your own reputation.",
    cloze:{text:"Don't throw your colleague ______ the bus to save your own reputation.", answer:"under", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:243, type:"phrase", level:"7+", topic:"skills", dimension:"prove", english:"on top of your game",
    chinese:"状态在线，发挥出色",
    source:"卡戴珊家族 S01E01", category:"idiom",
    keywords:[{word:"on top of your game", pos:"idiom", meaning:"处于最佳状态"}],
    usage:"指状态最好、表现最出色的时候。Khloé 对 Tristan 说：'I noticed such a big difference in you when you are on top of your game.'（我发现你状态在线的时候整个人差别特别大）。",
    example:"She's been on top of her game ever since she joined the team.",
    cloze:{text:"She's been on top of her ______ ever since she joined the team.", answer:"game", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:244, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"breathing room",
    chinese:"喘息空间，缓冲余地",
    source:"卡戴珊家族 S01E01", category:"noun phrase",
    keywords:[{word:"breathing room", pos:"noun phrase", meaning:"自由/喘息的空间"}],
    usage:"指在压力下需要的自由空间。Khloé 谈复合时说：'I just need a little breathing room and time to think.'（我只是需要一点喘息空间和时间来思考）。",
    example:"We need to give the team some breathing room before the next deadline.",
    cloze:{text:"We need to give the team some breathing ______ before the next deadline.", answer:"room", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:245, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"pull out",
    chinese:"退出，抽身",
    source:"卡戴珊家族 S01E01", category:"phrasal verb",
    keywords:[{word:"pull out", pos:"phrasal verb", meaning:"退出（已答应的活动/安排）"}],
    usage:"指临时决定退出某件事。Kim 担心主持 SNL 前，'I wonder if I could still pull out.'（我在想还能不能退出）。",
    example:"She felt pressured to stay, but everyone agreed she could pull out anytime.",
    cloze:{text:"She felt pressured to stay, but everyone agreed she could ______ out anytime.", answer:"pull", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:246, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"move on",
    chinese:"向前走，翻篇",
    source:"卡戴珊家族 S01E01", category:"phrasal verb",
    keywords:[{word:"move on", pos:"phrasal verb", meaning:"放下过去继续前进"}],
    usage:"指从感情/失败中走出来向前看。Scott 谈分手后的生活：'it does give me a place to finally be able to move on.'（它让我终于能够向前走了）。",
    example:"It took her years to move on from that failed relationship.",
    cloze:{text:"It took her years to ______ on from that failed relationship.", answer:"move", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:247, type:"phrase", level:"6.5+", topic:"friendship", dimension:"romance", english:"make the first move",
    chinese:"主动出击，先迈出第一步",
    source:"卡戴珊家族 S01E01", category:"idiom",
    keywords:[{word:"make the first move", pos:"idiom", meaning:"（感情上）主动"}],
    usage:"指在关系里率先采取行动。Kim 讲自己主动吻 Travis：'So I made the first move.'（所以我就主动出击了）。",
    example:"They were both too shy, so she finally made the first move.",
    cloze:{text:"They were both too shy, so she finally made the ______ move.", answer:"first", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:248, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"hold someone accountable",
    chinese:"让某人为自己的行为负责",
    source:"卡戴珊家族 S01E01", category:"collocation",
    keywords:[{word:"hold accountable", pos:"collocation", meaning:"追究责任，要求负责"}],
    usage:"指要求别人对后果负责。Khloé 说过去犯错没人监督：'I don't think someone was there to hold you accountable.'（我觉得当时没人让你对自己的行为负责）。",
    example:"Good managers hold their team accountable without being harsh.",
    cloze:{text:"Good managers hold their team ______ without being harsh.", answer:"accountable", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:249, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"the last thing I want",
    chinese:"我最不想（发生）的事",
    source:"卡戴珊家族 S01E01", category:"idiom",
    keywords:[{word:"the last thing I want", pos:"idiom", meaning:"最不想要/最不希望的事"}],
    usage:"用反话强调最不想要什么。Kim 说：'The last thing that I want as a mom is from my past to be brought up.'（作为一个妈妈，我最不想的就是过去的事被翻出来）。",
    example:"The last thing I want is to cause any trouble for the team.",
    cloze:{text:"The ______ thing I want is to cause any trouble for the team.", answer:"last", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:250, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"easier said than done",
    chinese:"说起来容易做起来难",
    source:"卡戴珊家族 S01E02", category:"idiom",
    keywords:[{word:"easier said than done", pos:"idiom", meaning:"知易行难"}],
    usage:"指道理简单但执行很难。Khloé 谈忽略批评：'it's so much easier said than done.'（但说起来容易做起来难）。",
    example:"Staying calm under pressure is easier said than done.",
    cloze:{text:"Staying calm under pressure is easier ______ than done.", answer:"said", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:251, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"tune out the noise",
    chinese:"屏蔽噪音，忽略外界干扰",
    source:"卡戴珊家族 S01E02", category:"collocation",
    keywords:[{word:"tune out", pos:"phrasal verb", meaning:"不去理会"}],
    usage:"指刻意忽略外界批评/干扰。妈妈说 Kim 要：'block the noise'，Khloé 也说：'you just have to learn when to tune out the noise.'（你得学会什么时候屏蔽噪音）。",
    example:"As a public figure, she learned to tune out the noise online.",
    cloze:{text:"As a public figure, she learned to ______ out the noise online.", answer:"tune", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:252, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"go with your gut",
    chinese:"跟着直觉走",
    source:"卡戴珊家族 S01E02", category:"idiom",
    keywords:[{word:"go with your gut", pos:"idiom", meaning:"凭直觉做决定"}],
    usage:"指不纠结、相信第一感觉。Kim 谈 SNL 台词：'I'm gonna go with my gut and stick with it.'（我打算跟着直觉走，坚持原计划）。",
    example:"I can't explain it, but I always go with my gut on big decisions.",
    cloze:{text:"I can't explain it, but I always go with my ______ on big decisions.", answer:"gut", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:253, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"pull an all-nighter",
    chinese:"熬夜通宵",
    source:"卡戴珊家族 S01E02", category:"collocation",
    keywords:[{word:"pull an all-nighter", pos:"collocation", meaning:"整夜不睡赶工/学习"}],
    usage:"指为了工作学习整夜不睡。Kim 说 SNL 日程恐怖：'I've never pulled an all-nighter.'（我从来没熬过通宵）。",
    example:"She pulled an all-nighter to finish her thesis before the deadline.",
    cloze:{text:"She pulled an ______ to finish her thesis before the deadline.", answer:"all-nighter", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:254, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"keep me posted",
    chinese:"随时告诉我进展",
    source:"卡戴珊家族 S01E02", category:"collocation",
    keywords:[{word:"keep someone posted", pos:"collocation", meaning:"让某人随时知道最新情况"}],
    usage:"请求对方及时同步消息。Kim 打电话说：'I'll call you later and let you know. — Okay, keep me posted.'（我晚点打给你。——好，随时告诉我）。",
    example:"We're still waiting for the results — keep me posted, okay?",
    cloze:{text:"We're still waiting for the results — keep me ______, okay?", answer:"posted", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:255, type:"phrase", level:"7+", topic:"skills", dimension:"prove", english:"thick skin",
    chinese:"脸皮厚，抗压能力强",
    source:"卡戴珊家族 S01E02", category:"noun phrase",
    keywords:[{word:"thick skin", pos:"noun phrase", meaning:"不轻易被批评伤害"}],
    usage:"指能承受批评和攻击。Khloé 说公众人物：'you really have to have tough, thick skin.'（你真的得有一层又厚又硬的皮）。",
    example:"To survive in politics, you need a thick skin.",
    cloze:{text:"To survive in politics, you need a ______ skin.", answer:"thick", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:256, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"on my grind",
    chinese:"努力打拼，拼命工作",
    source:"卡戴珊家族 S01E02", category:"slang",
    keywords:[{word:"on my grind", pos:"slang", meaning:"非常努力地工作/奋斗"}],
    usage:"口语表达，指在全力工作。Kim 说唱自己的独白：'Catch me outside. I'm on my grind.'（到外面堵我啊，我在努力打拼）。",
    example:"He's been on his grind all month to hit the sales target.",
    cloze:{text:"He's been on his ______ all month to hit the sales target.", answer:"grind", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:257, type:"phrase", level:"7+", topic:"friendship", dimension:"romance", english:"soulmate",
    chinese:"灵魂伴侣",
    source:"卡戴珊家族 S01E02", category:"noun",
    keywords:[{word:"soulmate", pos:"noun", meaning:"灵魂伴侣，命中注定的人"}],
    usage:"形容极度契合的爱人。Travis 谈 Courtney：'I believe she's my soulmate.'（我相信她就是我的灵魂伴侣）。",
    example:"She knew she'd found her soulmate the moment they met.",
    cloze:{text:"She knew she'd found her ______ the moment they met.", answer:"soulmate", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:258, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"ask for her hand in marriage",
    chinese:"向某人求婚（正式说法）",
    source:"卡戴珊家族 S01E02", category:"idiom",
    keywords:[{word:"ask for one's hand", pos:"idiom", meaning:"（正式）求婚"}],
    usage:"较正式/老派的求婚说法。Kim 说：'Travis came to see me, and he asked for her hand in marriage.'（特拉维斯来见我，向我妹求婚）。",
    example:"He flew across the country to ask for her hand in marriage.",
    cloze:{text:"He flew across the country to ask for her ______ in marriage.", answer:"hand", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:259, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"put yourself out there",
    chinese:"把自己推出去，勇敢展示自己",
    source:"卡戴珊家族 S01E02", category:"idiom",
    keywords:[{word:"put yourself out there", pos:"idiom", meaning:"主动暴露在机会/风险前"}],
    usage:"指主动争取机会、展示自己。Khloé 说：'I am really proud of myself for constantly putting myself out there.'（我为自己一直把自己推出去感到骄傲）。",
    example:"You'll never find a job if you don't put yourself out there.",
    cloze:{text:"You'll never find a job if you don't put yourself ______ there.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:260, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"get it over with",
    chinese:"赶紧了结，痛快办完",
    source:"卡戴珊家族 S01E03", category:"phrasal verb",
    keywords:[{word:"get over with", pos:"phrasal verb", meaning:"把麻烦事尽快做完"}],
    usage:"指讨厌的事不如早点做完。Kim 想找 Corey 谈开场段子：'Let me get Corey to just come in here now and just get it over with.'（把科里叫进来，赶紧把这事说开吧）。",
    example:"The exam is coming up — let's just get it over with.",
    cloze:{text:"The exam is coming up — let's just get it ______ with.", answer:"over", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:261, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"what a ride",
    chinese:"（人生）跌宕起伏，一场大冒险",
    source:"卡戴珊家族 S01E03", category:"idiom",
    keywords:[{word:"what a ride", pos:"idiom", meaning:"感叹经历丰富曲折"}],
    usage:"回顾一段起伏的经历时感叹。妈妈重游纽约感慨：'And it's been, huh, what a ride.'（这一路走来，真是一场大冒险）。",
    example:"Ten years at this company — what a ride it's been.",
    cloze:{text:"Ten years at this company — what a ______ it's been.", answer:"ride", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:262, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"get it off your chest",
    chinese:"把心里话说出来，一吐为快",
    source:"卡戴珊家族 S01E03", category:"idiom",
    keywords:[{word:"get off your chest", pos:"idiom", meaning:"把憋着的话说出来"}],
    usage:"指把憋在心里的话说出来就轻松了。Kim 谈完话后：'Now you've had the conversation. It's off your heart.'（现在话也说开了，心里那块石头也放下了）。",
    example:"You've been quiet all day — do you want to get it off your chest?",
    cloze:{text:"You've been quiet all day — do you want to get it ______ your chest?", answer:"off", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:263, type:"phrase", level:"7+", topic:"skills", dimension:"prove", english:"kill it",
    chinese:"表现炸裂，大获成功",
    source:"卡戴珊家族 S01E03", category:"slang",
    keywords:[{word:"kill it", pos:"slang", meaning:"做得极其出色"}],
    usage:"口语称赞某人表现超棒。家人夸 Kim：'You f***ing killed it!'（你他妈的演得太炸了）。",
    example:"She killed it at the interview and got the job the next day.",
    cloze:{text:"She ______ it at the interview and got the job the next day.", answer:"killed", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:264, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"blow someone's mind",
    chinese:"让人叹为观止",
    source:"卡戴珊家族 S01E03", category:"idiom",
    keywords:[{word:"blow one's mind", pos:"idiom", meaning:"令人震惊/惊叹"}],
    usage:"形容好到难以置信。Amy 谈 Kim 的表现：'She blew my mind.'（她让我叹为观止）。",
    example:"The ending of that movie completely blew my mind.",
    cloze:{text:"The ending of that movie completely blew my ______.", answer:"mind", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:265, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"in your corner",
    chinese:"站在你这边，支持你",
    source:"卡戴珊家族 S01E03", category:"idiom",
    keywords:[{word:"in one's corner", pos:"idiom", meaning:"支持某人（像拳击教练在角落）"}],
    usage:"指有人坚定地支持你。Kim 说：'when you have friends like that in your corner that just want you to win.'（当你有这样一心盼你赢的朋友站在你这边）。",
    example:"It's good to know I have my family in my corner.",
    cloze:{text:"It's good to know I have my family in my ______.", answer:"corner", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:266, type:"phrase", level:"6.5+", topic:"communication", dimension:"discretion", english:"hush-hush",
    chinese:"保密的，神神秘秘的",
    source:"卡戴珊家族 S01E03", category:"adjective",
    keywords:[{word:"hush-hush", pos:"adjective", meaning:"（计划等）秘密的"}],
    usage:"口语，形容事情被严格保密。Khloé 说：'we are all keeping Travis and Courtney's proposal super hush-hush.'（我们都把求婚保密得死死的）。",
    example:"The merger is still hush-hush, so don't tell anyone.",
    cloze:{text:"The merger is still ______-______, so don't tell anyone.", answer:"hush|hush", hint:"填两个词，用 | 分隔"},
    questions:[], comparison:null
  },
  {
    id:267, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"tiptoe around",
    chinese:"小心翼翼绕开，避而不谈",
    source:"卡戴珊家族 S01E03", category:"phrasal verb",
    keywords:[{word:"tiptoe around", pos:"phrasal verb", meaning:"对某人/某事小心翼翼"}],
    usage:"指避免直接触怒某人或回避敏感话题。Khloé 谈 Scott：'They can't put their life on hold just to tiptoe around him.'（他们总不能为了绕着他走就把生活停摆）。",
    example:"Stop tiptoeing around the issue and tell me the truth.",
    cloze:{text:"Stop ______ around the issue and tell me the truth.", answer:"tiptoeing", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:268, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"narrow it down",
    chinese:"缩小范围，锁定选项",
    source:"卡戴珊家族 S01E03", category:"phrasal verb",
    keywords:[{word:"narrow down", pos:"phrasal verb", meaning:"逐步减少选择"}],
    usage:"指把多个选项缩小到少数几个。大家选求婚地点：'I think we just narrow it down to Calabasas.'（不如就锁定卡拉巴萨斯吧）。",
    example:"We've narrowed it down to three candidates for the position.",
    cloze:{text:"We've ______ it down to three candidates for the position.", answer:"narrowed", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:269, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"up in the air",
    chinese:"悬而未决，没定下来",
    source:"卡戴珊家族 S01E03", category:"idiom",
    keywords:[{word:"up in the air", pos:"idiom", meaning:"（计划）不确定，待定"}],
    usage:"指事情还没定、变数很大。Kim 说：'since there's so much up in the air, I think we just narrow it down.'（既然变数这么多，不如就锁定一个方案）。",
    example:"Whether the trip happens is still up in the air.",
    cloze:{text:"Whether the trip happens is still up in the ______.", answer:"air", hint:"填一个词"},
    questions:[], comparison:null
  },
    {
    id:270, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"put someone on the spot",
    chinese:"当众发问，让人下不来台",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"put on the spot", pos:"idiom", meaning:"让人当众难堪/必须立即回应"}],
    usage:"指在公开场合突然让某人表态。Kris 想让孩子发言：'I don't want to put anybody on the spot.'（我不想让任何人难堪）。",
    example:"The interviewer put her on the spot with a question about her salary.",
    cloze:{text:"The interviewer put her on the ______ with a question about her salary.", answer:"spot", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:271, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"keep it short and sweet",
    chinese:"长话短说，简短有力",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"short and sweet", pos:"idiom", meaning:"简洁而精彩"}],
    usage:"请求说话简洁。Landon 发言：'To keep it short and sweet, I'm really happy for him.'（长话短说，我真心为他高兴）。",
    example:"The manager kept his speech short and sweet at the meeting.",
    cloze:{text:"The manager kept his speech short and ______ at the meeting.", answer:"sweet", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:272, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"give a toast",
    chinese:"举杯祝酒",
    source:"卡戴珊家族 S01E04", category:"collocation",
    keywords:[{word:"give a toast", pos:"collocation", meaning:"敬酒致辞"}],
    usage:"在宴会上举杯说祝词。Kris 说：'I would love to give a toast.'（我想敬一杯酒）。",
    example:"The father of the bride gave a touching toast at the wedding.",
    cloze:{text:"The father of the bride gave a touching ______ at the wedding.", answer:"toast", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:273, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"love always wins",
    chinese:"爱永远会赢",
    source:"卡戴珊家族 S01E04", category:"saying",
    keywords:[{word:"love wins", pos:"saying", meaning:"爱战胜一切"}],
    usage:"表达对爱的信念，收尾金句。家人举杯时说：'Love always wins. Always.'（爱永远会赢，永远）。",
    example:"After all the ups and downs, their story proves that love always wins.",
    cloze:{text:"After all the ups and downs, their story proves that love always ______.", answer:"wins", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:274, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"fingers, toes crossed",
    chinese:"双手合十祈祷好运",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"cross one's fingers", pos:"idiom", meaning:"祈求好运"}],
    usage:"希望事情顺利。Courtney 说取卵的事：'Okay, so fingers, toes crossed.'（好，那手指脚趾都祈祷一下）。",
    example:"Fingers crossed we get the job offer this week!",
    cloze:{text:"______ crossed we get the job offer this week!", answer:"Fingers", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:275, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"new normal",
    chinese:"新常态，新的生活方式",
    source:"卡戴珊家族 S01E04", category:"noun phrase",
    keywords:[{word:"new normal", pos:"noun phrase", meaning:"变化后形成的新的常态"}],
    usage:"指关系/生活改变后形成的新的相处模式。Kris 劝 Courtney 和 Scott 谈谈：'find whatever your new normal is.'（找到你们的新常态）。",
    example:"Working from home has become the new normal for many companies.",
    cloze:{text:"Working from home has become the new ______ for many companies.", answer:"normal", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:276, type:"phrase", level:"7+", topic:"friendship", dimension:"romance", english:"have the best of each other",
    chinese:"拥有彼此最好的一面",
    source:"卡戴珊家族 S01E04", category:"collocation",
    keywords:[{word:"the best of each other", pos:"collocation", meaning:"彼此成就最好状态"}],
    usage:"形容两人互相成就。家人祝福：'We're gonna have the best of each other's lives!'（我们会成为彼此生命中最美好的一部分）。",
    example:"A healthy relationship lets you have the best of each other.",
    cloze:{text:"A healthy relationship lets you have the ______ of each other.", answer:"best", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:277, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"one shot",
    chinese:"唯一的一次机会",
    source:"卡戴珊家族 S01E04", category:"noun phrase",
    keywords:[{word:"one shot", pos:"noun phrase", meaning:"仅有的一次机会"}],
    usage:"强调机会只有一次。Kim 考前说：'I've got one shot to do this test.'（这个考试我就一次机会）。",
    example:"The audition is my one shot to prove what I can do.",
    cloze:{text:"The audition is my ______ shot to prove what I can do.", answer:"one", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:278, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"care package",
    chinese:"慰问礼包，暖心包裹",
    source:"卡戴珊家族 S01E04", category:"noun phrase",
    keywords:[{word:"care package", pos:"noun phrase", meaning:"送给需要安慰的人的礼包"}],
    usage:"指送给低落的人的暖心包裹。Khloé 带零食探望 Scott：'a care package always makes you feel better.'（慰问礼包总能让人心情好点）。",
    example:"My mom sent me a care package when I moved to the new city.",
    cloze:{text:"My mom sent me a ______ package when I moved to the new city.", answer:"care", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:279, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"don't get me wrong",
    chinese:"别误会我的意思",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"don't get me wrong", pos:"idiom", meaning:"别误解我（转折铺垫）"}],
    usage:"说可能被误解的话前打预防针。Scott 说：'Don't get me wrong. I'll always love your sister.'（别误会，我会永远爱你的姐妹）。",
    example:"Don't get me wrong, I like the city — I just miss the countryside.",
    cloze:{text:"______ get me wrong, I like the city — I just miss the countryside.", answer:"Don't", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:280, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"do or die",
    chinese:"背水一战，成败在此一举",
    source:"卡戴珊家族 S01E05", category:"idiom",
    keywords:[{word:"do or die", pos:"idiom", meaning:"必须成功，否则完蛋"}],
    usage:"形容成败在此一举的关头。Kim 考前说：'Today is the day that I'm taking the bar and it is do or die.'（今天就是我考律师的日子，成败在此一举）。",
    example:"It's do or die for the team in tonight's final match.",
    cloze:{text:"It's do or ______ for the team in tonight's final match.", answer:"die", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:281, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"break through the stigma",
    chinese:"冲破污名，打破偏见",
    source:"卡戴珊家族 S01E05", category:"collocation",
    keywords:[{word:"break through stigma", pos:"collocation", meaning:"打破社会偏见/污名"}],
    usage:"指克服社会加在身上的负面标签。Kim 谈考律师：'I've always had to break through this stigma.'（我一直都得冲破这种污名）。",
    example:"She dedicated her career to breaking through the stigma around mental health.",
    cloze:{text:"She dedicated her career to breaking through the ______ around mental health.", answer:"stigma", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:282, type:"phrase", level:"6.5+", topic:"skills", dimension:"prove", english:"prove it to myself",
    chinese:"向自己证明",
    source:"卡戴珊家族 S01E05", category:"collocation",
    keywords:[{word:"prove to oneself", pos:"collocation", meaning:"证明给自己看"}],
    usage:"指不为别人、只为证明自己能做到。Kim 说：'I want to prove this to myself that I can do it.'（我想向自己证明我能做到）。",
    example:"She didn't care what others said — she wanted to prove it to herself.",
    cloze:{text:"She didn't care what others said — she wanted to prove it to ______.", answer:"herself", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:283, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"put yourself through",
    chinese:"让自己经受（折磨/辛苦）",
    source:"卡戴珊家族 S01E05", category:"phrasal verb",
    keywords:[{word:"put through", pos:"phrasal verb", meaning:"使经受（困难）"}],
    usage:"指明知辛苦还坚持承受。家人问她：'Why are you putting yourself through all this?'（你为什么要这么折腾自己）。",
    example:"Why would anyone put themselves through such a grueling schedule?",
    cloze:{text:"Why would anyone put ______ through such a grueling schedule?", answer:"themselves", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:284, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"give it all you've got",
    chinese:"全力以赴，使出浑身解数",
    source:"卡戴珊家族 S01E05", category:"idiom",
    keywords:[{word:"give it all you've got", pos:"idiom", meaning:"尽最大努力"}],
    usage:"鼓励人拼尽全力。家人送考时说：'Come on, you gotta give it all you got.'（加油，你得全力以赴）。",
    example:"You've trained for months — now give it all you've got.",
    cloze:{text:"You've trained for months — now give it all you've ______.", answer:"got", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:285, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"mess it up",
    chinese:"搞砸",
    source:"卡戴珊家族 S01E05", category:"phrasal verb",
    keywords:[{word:"mess up", pos:"phrasal verb", meaning:"弄糟，搞砸"}],
    usage:"指把事情弄糟。Kim 说考前不能玩：'If I'm partying then I'm gonna mess it up.'（要是我还在嗨，肯定得搞砸）。",
    example:"I had one job — and somehow I managed to mess it up.",
    cloze:{text:"I had one job — and somehow I managed to ______ it up.", answer:"mess", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:286, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"kick someone out",
    chinese:"把人赶走",
    source:"卡戴珊家族 S01E05", category:"phrasal verb",
    keywords:[{word:"kick out", pos:"phrasal verb", meaning:"赶出去"}],
    usage:"礼貌但坚定地请人离开。Kim 要学习：'I love you all, but I'm kicking you out.'（我爱你们，但我要把你们赶走了）。",
    example:"The library was closing, so the guard kicked everyone out.",
    cloze:{text:"The library was closing, so the guard ______ everyone out.", answer:"kicked", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:287, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"panic attack",
    chinese:"恐慌发作",
    source:"卡戴珊家族 S01E05", category:"noun phrase",
    keywords:[{word:"panic attack", pos:"noun phrase", meaning:"急性焦虑发作"}],
    usage:"指突然的强烈焦虑。Kim 谈离婚后的状态：'I'm having panic attacks.'（我会有恐慌发作）。",
    example:"She gets panic attacks before big presentations.",
    cloze:{text:"She gets panic ______ before big presentations.", answer:"attacks", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:288, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"live like a fairy tale",
    chinese:"活在童话里，像做梦一样",
    source:"卡戴珊家族 S01E05", category:"idiom",
    keywords:[{word:"fairy tale", pos:"noun phrase", meaning:"童话般的经历"}],
    usage:"形容生活/经历美好得不真实。Courtney 订婚感言：'I feel like I am living like a fairy tale.'（我感觉自己就像活在童话里）。",
    example:"To her, marrying her best friend felt like living a fairy tale.",
    cloze:{text:"To her, marrying her best friend felt like living a fairy ______.", answer:"tale", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:289, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"a life or death situation",
    chinese:"生死攸关的局面",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"life or death", pos:"collocation", meaning:"生死攸关的"}],
    usage:"形容极其严重、关乎生死的处境。Khloé 谈死刑案：'This is a life or death situation.'（这是生死攸关的事）。",
    example:"For the doctors, every surgery is a life or death situation.",
    cloze:{text:"For the doctors, every surgery is a life or ______ situation.", answer:"death", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:290, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"get the message across",
    chinese:"把话传达到，让对方明白",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"get across", pos:"phrasal verb", meaning:"传达（意思）"}],
    usage:"指让对方理解自己的观点。Khloé 谈公益传播：'help get our message across.'（帮我们把话说出去）。",
    example:"A good teacher knows how to get the message across to every student.",
    cloze:{text:"A good teacher knows how to get the message ______ to every student.", answer:"across", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:291, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"the clock is ticking",
    chinese:"时间一分一秒流逝",
    source:"卡戴珊家族 S01E06", category:"idiom",
    keywords:[{word:"clock is ticking", pos:"idiom", meaning:"时间紧迫"}],
    usage:"强调必须抓紧时间。Khloé 谈处决日临近：'The clock is ticking.'（时间在一分一秒流逝）。",
    example:"The deadline is tomorrow and the clock is ticking.",
    cloze:{text:"The deadline is tomorrow and the ______ is ticking.", answer:"clock", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:292, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"down to the wire",
    chinese:"最后关头，千钧一发",
    source:"卡戴珊家族 S01E06", category:"idiom",
    keywords:[{word:"down to the wire", pos:"idiom", meaning:"直到最后一刻"}],
    usage:"指事情拖到最后关头才见分晓。Khloé 说：'It's really getting down to the wire and we don't have a lot of time left.'（真的到了最后关头，时间不多了）。",
    example:"The negotiations went down to the wire before a deal was reached.",
    cloze:{text:"The negotiations went down to the ______ before a deal was reached.", answer:"wire", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:293, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"blow up",
    chinese:"（手机/消息）被打爆",
    source:"卡戴珊家族 S01E06", category:"phrasal verb",
    keywords:[{word:"blow up", pos:"phrasal verb", meaning:"（消息）突然大量涌入"}],
    usage:"指手机被消息/电话轰炸。Khloé 说：'My phone is blowing up from so many different people.'（我的手机被各种人打爆了）。",
    example:"Her phone blew up with congratulations after the announcement.",
    cloze:{text:"Her phone ______ up with congratulations after the announcement.", answer:"blew", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:294, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"commute the sentence",
    chinese:"（官方）减刑",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"commute a sentence", pos:"collocation", meaning:"把死刑改为其他刑罚"}],
    usage:"法律用语，指官方减轻刑罚。新闻说：'The Governor commuted the death sentence of Julius Jones.'（州长减免了朱利叶斯的死刑）。",
    example:"The governor commuted his sentence from death to life in prison.",
    cloze:{text:"The governor ______ his sentence from death to life in prison.", answer:"commuted", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:295, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"keep fighting",
    chinese:"继续战斗，不放弃",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"keep fighting", pos:"collocation", meaning:"坚持斗争"}],
    usage:"表示不放弃、继续争取。Khloé 说：'We're going to keep fighting for your brother.'（我们要继续为你弟弟而战）。",
    example:"The activists vowed to keep fighting until the law changed.",
    cloze:{text:"The activists vowed to ______ fighting until the law changed.", answer:"keep", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:296, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"blended family",
    chinese:"重组家庭",
    source:"卡戴珊家族 S01E06", category:"noun phrase",
    keywords:[{word:"blended family", pos:"noun phrase", meaning:"双方带着各自孩子组成的家庭"}],
    usage:"指再婚/新结合后两边的孩子组成的新家庭。Travis 说：'I love the idea of a blended family.'（我喜欢重组家庭这个想法）。",
    example:"They built a happy blended family with kids from both sides.",
    cloze:{text:"They built a happy ______ family with kids from both sides.", answer:"blended", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:297, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"be reunited with",
    chinese:"与……团聚",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"reunite with", pos:"verb", meaning:"重逢，团聚"}],
    usage:"指分离后重聚。Khloé 谈 Julius 获减刑后：'He's going to be able to be reunited with his family.'（他能和家人团聚了）。",
    example:"After years apart, the refugees were finally reunited with their families.",
    cloze:{text:"After years apart, the refugees were finally ______ with their families.", answer:"reunited", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:298, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"get something out of the way",
    chinese:"先把（麻烦事）处理掉",
    source:"卡戴珊家族 S01E06", category:"phrasal verb",
    keywords:[{word:"get out of the way", pos:"phrasal verb", meaning:"把碍事的事先做完"}],
    usage:"指先把挡路的事解决掉，好专注更重要的事。Kim 说：'I just need to get law school out of the way.'（我得先把法学院搞定）。",
    example:"Let's get this paperwork out of the way before lunch.",
    cloze:{text:"Let's get this paperwork ______ of the way before lunch.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:299, type:"phrase", level:"6.5+", topic:"family", dimension:"love", english:"the more the merrier",
    chinese:"人越多越热闹",
    source:"卡戴珊家族 S01E06", category:"saying",
    keywords:[{word:"the more the merrier", pos:"saying", meaning:"人越多越好/越热闹"}],
    usage:"欢迎更多人加入的口语表达。Travis 谈大家庭：'The more kids the merrier.'（孩子越多越热闹）。",
    example:"Bring your friends along — the more the merrier!",
    cloze:{text:"Bring your friends along — the more the ______!", answer:"merrier", hint:"填一个词"},
    questions:[], comparison:null
  },
    {
    id:270, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"put someone on the spot",
    chinese:"当众发问，让人下不来台",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"put on the spot", pos:"idiom", meaning:"让人当众难堪/必须立即回应"}],
    usage:"指在公开场合突然让某人表态。Kris 想让孩子发言：'I don't want to put anybody on the spot.'（我不想让任何人难堪）。",
    example:"The interviewer put her on the spot with a question about her salary.",
    cloze:{text:"The interviewer put her on the ______ with a question about her salary.", answer:"spot", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:271, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"keep it short and sweet",
    chinese:"长话短说，简短有力",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"short and sweet", pos:"idiom", meaning:"简洁而精彩"}],
    usage:"请求说话简洁。Landon 发言：'To keep it short and sweet, I'm really happy for him.'（长话短说，我真心为他高兴）。",
    example:"The manager kept his speech short and sweet at the meeting.",
    cloze:{text:"The manager kept his speech short and ______ at the meeting.", answer:"sweet", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:272, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"give a toast",
    chinese:"举杯祝酒",
    source:"卡戴珊家族 S01E04", category:"collocation",
    keywords:[{word:"give a toast", pos:"collocation", meaning:"敬酒致辞"}],
    usage:"在宴会上举杯说祝词。Kris 说：'I would love to give a toast.'（我想敬一杯酒）。",
    example:"The father of the bride gave a touching toast at the wedding.",
    cloze:{text:"The father of the bride gave a touching ______ at the wedding.", answer:"toast", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:273, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"love always wins",
    chinese:"爱永远会赢",
    source:"卡戴珊家族 S01E04", category:"saying",
    keywords:[{word:"love wins", pos:"saying", meaning:"爱战胜一切"}],
    usage:"表达对爱的信念，收尾金句。家人举杯时说：'Love always wins. Always.'（爱永远会赢，永远）。",
    example:"After all the ups and downs, their story proves that love always wins.",
    cloze:{text:"After all the ups and downs, their story proves that love always ______.", answer:"wins", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:274, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"fingers, toes crossed",
    chinese:"双手合十祈祷好运",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"cross one's fingers", pos:"idiom", meaning:"祈求好运"}],
    usage:"希望事情顺利。Courtney 说取卵的事：'Okay, so fingers, toes crossed.'（好，那手指脚趾都祈祷一下）。",
    example:"Fingers crossed we get the job offer this week!",
    cloze:{text:"______ crossed we get the job offer this week!", answer:"Fingers", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:275, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"new normal",
    chinese:"新常态，新的生活方式",
    source:"卡戴珊家族 S01E04", category:"noun phrase",
    keywords:[{word:"new normal", pos:"noun phrase", meaning:"变化后形成的新的常态"}],
    usage:"指关系/生活改变后形成的新的相处模式。Kris 劝 Courtney 和 Scott 谈谈：'find whatever your new normal is.'（找到你们的新常态）。",
    example:"Working from home has become the new normal for many companies.",
    cloze:{text:"Working from home has become the new ______ for many companies.", answer:"normal", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:276, type:"phrase", level:"7+", topic:"friendship", dimension:"romance", english:"have the best of each other",
    chinese:"拥有彼此最好的一面",
    source:"卡戴珊家族 S01E04", category:"collocation",
    keywords:[{word:"the best of each other", pos:"collocation", meaning:"彼此成就最好状态"}],
    usage:"形容两人互相成就。家人祝福：'We're gonna have the best of each other's lives!'（我们会成为彼此生命中最美好的一部分）。",
    example:"A healthy relationship lets you have the best of each other.",
    cloze:{text:"A healthy relationship lets you have the ______ of each other.", answer:"best", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:277, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"one shot",
    chinese:"唯一的一次机会",
    source:"卡戴珊家族 S01E04", category:"noun phrase",
    keywords:[{word:"one shot", pos:"noun phrase", meaning:"仅有的一次机会"}],
    usage:"强调机会只有一次。Kim 考前说：'I've got one shot to do this test.'（这个考试我就一次机会）。",
    example:"The audition is my one shot to prove what I can do.",
    cloze:{text:"The audition is my ______ shot to prove what I can do.", answer:"one", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:278, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"care package",
    chinese:"慰问礼包，暖心包裹",
    source:"卡戴珊家族 S01E04", category:"noun phrase",
    keywords:[{word:"care package", pos:"noun phrase", meaning:"送给需要安慰的人的礼包"}],
    usage:"指送给低落的人的暖心包裹。Khloé 带零食探望 Scott：'a care package always makes you feel better.'（慰问礼包总能让人心情好点）。",
    example:"My mom sent me a care package when I moved to the new city.",
    cloze:{text:"My mom sent me a ______ package when I moved to the new city.", answer:"care", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:279, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"don't get me wrong",
    chinese:"别误会我的意思",
    source:"卡戴珊家族 S01E04", category:"idiom",
    keywords:[{word:"don't get me wrong", pos:"idiom", meaning:"别误解我（转折铺垫）"}],
    usage:"说可能被误解的话前打预防针。Scott 说：'Don't get me wrong. I'll always love your sister.'（别误会，我会永远爱你的姐妹）。",
    example:"Don't get me wrong, I like the city — I just miss the countryside.",
    cloze:{text:"______ get me wrong, I like the city — I just miss the countryside.", answer:"Don't", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:280, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"do or die",
    chinese:"背水一战，成败在此一举",
    source:"卡戴珊家族 S01E05", category:"idiom",
    keywords:[{word:"do or die", pos:"idiom", meaning:"必须成功，否则完蛋"}],
    usage:"形容成败在此一举的关头。Kim 考前说：'Today is the day that I'm taking the bar and it is do or die.'（今天就是我考律师的日子，成败在此一举）。",
    example:"It's do or die for the team in tonight's final match.",
    cloze:{text:"It's do or ______ for the team in tonight's final match.", answer:"die", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:281, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"break through the stigma",
    chinese:"冲破污名，打破偏见",
    source:"卡戴珊家族 S01E05", category:"collocation",
    keywords:[{word:"break through stigma", pos:"collocation", meaning:"打破社会偏见/污名"}],
    usage:"指克服社会加在身上的负面标签。Kim 谈考律师：'I've always had to break through this stigma.'（我一直都得冲破这种污名）。",
    example:"She dedicated her career to breaking through the stigma around mental health.",
    cloze:{text:"She dedicated her career to breaking through the ______ around mental health.", answer:"stigma", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:282, type:"phrase", level:"6.5+", topic:"skills", dimension:"prove", english:"prove it to myself",
    chinese:"向自己证明",
    source:"卡戴珊家族 S01E05", category:"collocation",
    keywords:[{word:"prove to oneself", pos:"collocation", meaning:"证明给自己看"}],
    usage:"指不为别人、只为证明自己能做到。Kim 说：'I want to prove this to myself that I can do it.'（我想向自己证明我能做到）。",
    example:"She didn't care what others said — she wanted to prove it to herself.",
    cloze:{text:"She didn't care what others said — she wanted to prove it to ______.", answer:"herself", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:283, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"put yourself through",
    chinese:"让自己经受（折磨/辛苦）",
    source:"卡戴珊家族 S01E05", category:"phrasal verb",
    keywords:[{word:"put through", pos:"phrasal verb", meaning:"使经受（困难）"}],
    usage:"指明知辛苦还坚持承受。家人问她：'Why are you putting yourself through all this?'（你为什么要这么折腾自己）。",
    example:"Why would anyone put themselves through such a grueling schedule?",
    cloze:{text:"Why would anyone put ______ through such a grueling schedule?", answer:"themselves", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:284, type:"phrase", level:"6.5+", topic:"work", dimension:"execution", english:"give it all you've got",
    chinese:"全力以赴，使出浑身解数",
    source:"卡戴珊家族 S01E05", category:"idiom",
    keywords:[{word:"give it all you've got", pos:"idiom", meaning:"尽最大努力"}],
    usage:"鼓励人拼尽全力。家人送考时说：'Come on, you gotta give it all you got.'（加油，你得全力以赴）。",
    example:"You've trained for months — now give it all you've got.",
    cloze:{text:"You've trained for months — now give it all you've ______.", answer:"got", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:285, type:"phrase", level:"6.5+", topic:"work", dimension:"pressure", english:"mess it up",
    chinese:"搞砸",
    source:"卡戴珊家族 S01E05", category:"phrasal verb",
    keywords:[{word:"mess up", pos:"phrasal verb", meaning:"弄糟，搞砸"}],
    usage:"指把事情弄糟。Kim 说考前不能玩：'If I'm partying then I'm gonna mess it up.'（要是我还在嗨，肯定得搞砸）。",
    example:"I had one job — and somehow I managed to mess it up.",
    cloze:{text:"I had one job — and somehow I managed to ______ it up.", answer:"mess", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:286, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"kick someone out",
    chinese:"把人赶走",
    source:"卡戴珊家族 S01E05", category:"phrasal verb",
    keywords:[{word:"kick out", pos:"phrasal verb", meaning:"赶出去"}],
    usage:"礼貌但坚定地请人离开。Kim 要学习：'I love you all, but I'm kicking you out.'（我爱你们，但我要把你们赶走了）。",
    example:"The library was closing, so the guard kicked everyone out.",
    cloze:{text:"The library was closing, so the guard ______ everyone out.", answer:"kicked", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:287, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"panic attack",
    chinese:"恐慌发作",
    source:"卡戴珊家族 S01E05", category:"noun phrase",
    keywords:[{word:"panic attack", pos:"noun phrase", meaning:"急性焦虑发作"}],
    usage:"指突然的强烈焦虑。Kim 谈离婚后的状态：'I'm having panic attacks.'（我会有恐慌发作）。",
    example:"She gets panic attacks before big presentations.",
    cloze:{text:"She gets panic ______ before big presentations.", answer:"attacks", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:288, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"live like a fairy tale",
    chinese:"活在童话里，像做梦一样",
    source:"卡戴珊家族 S01E05", category:"idiom",
    keywords:[{word:"fairy tale", pos:"noun phrase", meaning:"童话般的经历"}],
    usage:"形容生活/经历美好得不真实。Courtney 订婚感言：'I feel like I am living like a fairy tale.'（我感觉自己就像活在童话里）。",
    example:"To her, marrying her best friend felt like living a fairy tale.",
    cloze:{text:"To her, marrying her best friend felt like living a fairy ______.", answer:"tale", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:289, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"a life or death situation",
    chinese:"生死攸关的局面",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"life or death", pos:"collocation", meaning:"生死攸关的"}],
    usage:"形容极其严重、关乎生死的处境。Khloé 谈死刑案：'This is a life or death situation.'（这是生死攸关的事）。",
    example:"For the doctors, every surgery is a life or death situation.",
    cloze:{text:"For the doctors, every surgery is a life or ______ situation.", answer:"death", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:290, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"get the message across",
    chinese:"把话传达到，让对方明白",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"get across", pos:"phrasal verb", meaning:"传达（意思）"}],
    usage:"指让对方理解自己的观点。Khloé 谈公益传播：'help get our message across.'（帮我们把话说出去）。",
    example:"A good teacher knows how to get the message across to every student.",
    cloze:{text:"A good teacher knows how to get the message ______ to every student.", answer:"across", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:291, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"the clock is ticking",
    chinese:"时间一分一秒流逝",
    source:"卡戴珊家族 S01E06", category:"idiom",
    keywords:[{word:"clock is ticking", pos:"idiom", meaning:"时间紧迫"}],
    usage:"强调必须抓紧时间。Khloé 谈处决日临近：'The clock is ticking.'（时间在一分一秒流逝）。",
    example:"The deadline is tomorrow and the clock is ticking.",
    cloze:{text:"The deadline is tomorrow and the ______ is ticking.", answer:"clock", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:292, type:"phrase", level:"7+", topic:"work", dimension:"pressure", english:"down to the wire",
    chinese:"最后关头，千钧一发",
    source:"卡戴珊家族 S01E06", category:"idiom",
    keywords:[{word:"down to the wire", pos:"idiom", meaning:"直到最后一刻"}],
    usage:"指事情拖到最后关头才见分晓。Khloé 说：'It's really getting down to the wire and we don't have a lot of time left.'（真的到了最后关头，时间不多了）。",
    example:"The negotiations went down to the wire before a deal was reached.",
    cloze:{text:"The negotiations went down to the ______ before a deal was reached.", answer:"wire", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:293, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"blow up",
    chinese:"（手机/消息）被打爆",
    source:"卡戴珊家族 S01E06", category:"phrasal verb",
    keywords:[{word:"blow up", pos:"phrasal verb", meaning:"（消息）突然大量涌入"}],
    usage:"指手机被消息/电话轰炸。Khloé 说：'My phone is blowing up from so many different people.'（我的手机被各种人打爆了）。",
    example:"Her phone blew up with congratulations after the announcement.",
    cloze:{text:"Her phone ______ up with congratulations after the announcement.", answer:"blew", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:294, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"commute the sentence",
    chinese:"（官方）减刑",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"commute a sentence", pos:"collocation", meaning:"把死刑改为其他刑罚"}],
    usage:"法律用语，指官方减轻刑罚。新闻说：'The Governor commuted the death sentence of Julius Jones.'（州长减免了朱利叶斯的死刑）。",
    example:"The governor commuted his sentence from death to life in prison.",
    cloze:{text:"The governor ______ his sentence from death to life in prison.", answer:"commuted", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:295, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"keep fighting",
    chinese:"继续战斗，不放弃",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"keep fighting", pos:"collocation", meaning:"坚持斗争"}],
    usage:"表示不放弃、继续争取。Khloé 说：'We're going to keep fighting for your brother.'（我们要继续为你弟弟而战）。",
    example:"The activists vowed to keep fighting until the law changed.",
    cloze:{text:"The activists vowed to ______ fighting until the law changed.", answer:"keep", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:296, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"blended family",
    chinese:"重组家庭",
    source:"卡戴珊家族 S01E06", category:"noun phrase",
    keywords:[{word:"blended family", pos:"noun phrase", meaning:"双方带着各自孩子组成的家庭"}],
    usage:"指再婚/新结合后两边的孩子组成的新家庭。Travis 说：'I love the idea of a blended family.'（我喜欢重组家庭这个想法）。",
    example:"They built a happy blended family with kids from both sides.",
    cloze:{text:"They built a happy ______ family with kids from both sides.", answer:"blended", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:297, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"be reunited with",
    chinese:"与……团聚",
    source:"卡戴珊家族 S01E06", category:"collocation",
    keywords:[{word:"reunite with", pos:"verb", meaning:"重逢，团聚"}],
    usage:"指分离后重聚。Khloé 谈 Julius 获减刑后：'He's going to be able to be reunited with his family.'（他能和家人团聚了）。",
    example:"After years apart, the refugees were finally reunited with their families.",
    cloze:{text:"After years apart, the refugees were finally ______ with their families.", answer:"reunited", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:298, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"get something out of the way",
    chinese:"先把（麻烦事）处理掉",
    source:"卡戴珊家族 S01E06", category:"phrasal verb",
    keywords:[{word:"get out of the way", pos:"phrasal verb", meaning:"把碍事的事先做完"}],
    usage:"指先把挡路的事解决掉，好专注更重要的事。Kim 说：'I just need to get law school out of the way.'（我得先把法学院搞定）。",
    example:"Let's get this paperwork out of the way before lunch.",
    cloze:{text:"Let's get this paperwork ______ of the way before lunch.", answer:"out", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:299, type:"phrase", level:"6.5+", topic:"family", dimension:"love", english:"the more the merrier",
    chinese:"人越多越热闹",
    source:"卡戴珊家族 S01E06", category:"saying",
    keywords:[{word:"the more the merrier", pos:"saying", meaning:"人越多越好/越热闹"}],
    usage:"欢迎更多人加入的口语表达。Travis 谈大家庭：'The more kids the merrier.'（孩子越多越热闹）。",
    example:"Bring your friends along — the more the merrier!",
    cloze:{text:"Bring your friends along — the more the ______!", answer:"merrier", hint:"填一个词"},
    questions:[], comparison:null
  },
    {
    id:300, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"be on the same page",
    chinese:"步调一致，想法一致",
    source:"卡戴珊家族 S01E07", category:"idiom",
    keywords:[{word:"on the same page", pos:"idiom", meaning:"想法/目标一致"}],
    usage:"指双方想法同步。Courtney 谈备孕：'We're making a baby together. We have to be on the same page.'（我们要一起造宝宝，必须步调一致）。",
    example:"We need to be on the same page before we sign the contract.",
    cloze:{text:"We need to be on the same ______ before we sign the contract.", answer:"page", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:301, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"build up an appetite",
    chinese:"胃口大开",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"build up an appetite", pos:"collocation", meaning:"（活动后）胃口变好"}],
    usage:"指一番活动后食欲大增。Kim 洗完车说：'I think I've built up an appetite.'（我觉得我胃口都来了）。",
    example:"A long walk always builds up my appetite.",
    cloze:{text:"A long walk always builds up my ______.", answer:"appetite", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:302, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"figure it out on my own",
    chinese:"靠自己搞清楚",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"figure out on one's own", pos:"collocation", meaning:"独立解决/弄明白"}],
    usage:"指不依赖别人、独立解决。Kim 谈脱离 Kanye 的造型指导：'Having that not be there has really forced me to figure it out on my own.'（没有他引导，逼着我靠自己搞清楚）。",
    example:"Moving abroad forced me to figure everything out on my own.",
    cloze:{text:"Moving abroad forced me to figure everything out on my ______.", answer:"own", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:303, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"empowering feeling",
    chinese:"充满力量的感觉",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"empowering", pos:"adjective", meaning:"使人有力量的，赋能感的"}],
    usage:"形容让人自信、有掌控感。Kim 谈品牌认可她：'It's just a good empowering feeling.'（这种感觉真的充满力量）。",
    example:"Taking charge of her own career gave her an empowering feeling.",
    cloze:{text:"Taking charge of her own career gave her an ______ feeling.", answer:"empowering", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:304, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"deliver bad news",
    chinese:"传达坏消息",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"deliver news", pos:"collocation", meaning:"传达消息"}],
    usage:"指把不好听的消息告诉别人。Kris 说：'One of the things I don't like is delivering bad news.'（我不喜欢的一件事就是传达坏消息）。",
    example:"Nobody wants to be the one to deliver bad news to the team.",
    cloze:{text:"Nobody wants to be the one to ______ bad news to the team.", answer:"deliver", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:305, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"ups and downs",
    chinese:"起起落落，高低起伏",
    source:"卡戴珊家族 S01E07", category:"noun phrase",
    keywords:[{word:"ups and downs", pos:"noun phrase", meaning:"（经历/关系的）起伏"}],
    usage:"指有顺境也有逆境。Kris 说：'Being a manager comes with a lot of ups and downs.'（当经纪人有很多起起落落）。",
    example:"Every long-term relationship has its ups and downs.",
    cloze:{text:"Every long-term relationship has its ups and ______.", answer:"downs", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:306, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"have a game plan",
    chinese:"制定作战计划",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"game plan", pos:"noun phrase", meaning:"行动计划/策略"}],
    usage:"指提前规划好步骤。Kris 谈事业：'Let's have a game plan.'（咱们来定个计划）。",
    example:"Before launching the product, we need a solid game plan.",
    cloze:{text:"Before launching the product, we need a solid ______ plan.", answer:"game", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:307, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"embark on a new journey",
    chinese:"踏上新的旅程",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"embark on", pos:"phrasal verb", meaning:"开始（一段新经历）"}],
    usage:"指开启人生新阶段。Kim 说：'It just feels like I'm embarking on this new journey.'（感觉就像我踏上了一段全新的旅程）。",
    example:"After graduation, she embarked on a new journey abroad.",
    cloze:{text:"After graduation, she ______ on a new journey abroad.", answer:"embarked", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:308, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"not an upset bone in my body",
    chinese:"浑身上下没有一点不高兴",
    source:"卡戴珊家族 S01E07", category:"idiom",
    keywords:[{word:"not a ... bone in my body", pos:"idiom", meaning:"完全没有某种感觉"}],
    usage:"强调完全没有某种情绪。Kendall 说：'There's not an upset bone in my body.'（我浑身上下没有一根不高兴的骨头）。",
    example:"I have not a jealous bone in my body — I'm genuinely happy for her.",
    cloze:{text:"I have not a ______ bone in my body — I'm genuinely happy for her.", answer:"jealous", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:309, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"dream come true",
    chinese:"美梦成真",
    source:"卡戴珊家族 S01E07", category:"idiom",
    keywords:[{word:"dream come true", pos:"idiom", meaning:"梦想实现"}],
    usage:"形容期待已久的事终于发生。Kim 说：'It almost feels like this is a dream come true.'（感觉这几乎是美梦成真）。",
    example:"Winning the scholarship felt like a dream come true.",
    cloze:{text:"Winning the scholarship felt like a dream come ______.", answer:"true", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:310, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"the big picture",
    chinese:"大局，全貌",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"big picture", pos:"idiom", meaning:"整体大局"}],
    usage:"指从整体而非细节看问题。Kourtney 谈品牌合作：'I feel like the big picture is showing that we can team up.'（大局上是要展示我们可以联手）。",
    example:"Don't get stuck on details — keep your eyes on the big picture.",
    cloze:{text:"Don't get stuck on details — keep your eyes on the big ______.", answer:"picture", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:311, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"pit someone against someone",
    chinese:"让（两方）对立起来",
    source:"卡戴珊家族 S01E08", category:"phrasal verb",
    keywords:[{word:"pit against", pos:"phrasal verb", meaning:"使对抗，让……互相争斗"}],
    usage:"指故意制造对立。Kourtney 说：'The internet wants to pit women against each other.'（网上总想把女人对立起来）。",
    example:"The media loves to pit celebrities against each other.",
    cloze:{text:"The media loves to ______ celebrities against each other.", answer:"pit", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:312, type:"phrase", level:"6.5+", topic:"values", dimension:"principles", english:"there's room for everybody",
    chinese:"容得下每个人",
    source:"卡戴珊家族 S01E08", category:"collocation",
    keywords:[{word:"room for everybody", pos:"collocation", meaning:"大家都有位置/机会"}],
    usage:"表达包容、人人有机会。Kourtney 谈女性互助：'There is room for everybody.'（这里容得下每个人）。",
    example:"In a healthy team, there's room for everybody to grow.",
    cloze:{text:"In a healthy team, there's ______ for everybody to grow.", answer:"room", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:313, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"get butterflies",
    chinese:"心扑通扑通跳（紧张/兴奋）",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"butterflies in one's stomach", pos:"idiom", meaning:"紧张或兴奋"}],
    usage:"形容上台/大事前的紧张激动。Kris 说：'I get those butterflies.'（我心扑通扑通的）。",
    example:"She gets butterflies every time she has to speak in public.",
    cloze:{text:"She gets ______ every time she has to speak in public.", answer:"butterflies", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:314, type:"phrase", level:"7+", topic:"communication", dimension:"connect", english:"connect with your audience",
    chinese:"与观众/受众建立连接",
    source:"卡戴珊家族 S01E08", category:"collocation",
    keywords:[{word:"connect with", pos:"phrasal verb", meaning:"与……产生共鸣/连接"}],
    usage:"指内容让人产生共鸣。Kris 谈大师课：'You have to connect with your audience.'（你必须和你的观众建立连接）。",
    example:"A great speaker knows how to connect with the audience.",
    cloze:{text:"A great speaker knows how to ______ with the audience.", answer:"connect", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:315, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"nothing is impossible",
    chinese:"没有什么不可能",
    source:"卡戴珊家族 S01E08", category:"saying",
    keywords:[{word:"nothing is impossible", pos:"saying", meaning:"一切皆有可能"}],
    usage:"表达信念和鼓励。Kim 说妈妈教的：'My mom has taught us that nothing is impossible.'（妈妈教会我们没有什么是不可能的）。",
    example:"With hard work and patience, nothing is impossible.",
    cloze:{text:"With hard work and patience, nothing is ______.", answer:"impossible", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:316, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"set your mind to",
    chinese:"下定决心要做",
    source:"卡戴珊家族 S01E08", category:"collocation",
    keywords:[{word:"set one's mind to", pos:"collocation", meaning:"下定决心"}],
    usage:"指一旦认定就努力去做。Kim 说：'You could do anything you set your mind to.'（只要你下定决心，什么都能做到）。",
    example:"She set her mind to learning French and became fluent in a year.",
    cloze:{text:"She set her ______ to learning French and became fluent in a year.", answer:"mind", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:317, type:"phrase", level:"7+", topic:"skills", dimension:"prove", english:"one-take wonder",
    chinese:"一条过的天才",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"one-take wonder", pos:"idiom", meaning:"（拍摄）一次就成功的人"}],
    usage:"称赞表演/拍摄一遍就过。工作人员夸 Courtney：'She's a one-take wonder.'（她是一条过的天才）。",
    example:"The director loved her — she's a one-take wonder.",
    cloze:{text:"The director loved her — she's a one-______ wonder.", answer:"take", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:318, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"hold the keys to the kingdom",
    chinese:"握着王国的钥匙（掌握决定权）",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"keys to the kingdom", pos:"idiom", meaning:"决定性的权力/机会"}],
    usage:"形容手握关键决定权。Khloé 谈选模特：'You hold the keys to the kingdom right there.'（你手里握着整个王国的钥匙）。",
    example:"In this project, the lead designer holds the keys to the kingdom.",
    cloze:{text:"In this project, the lead designer holds the keys to the ______.", answer:"kingdom", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:319, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"whittle down",
    chinese:"逐步筛选，层层缩减",
    source:"卡戴珊家族 S01E08", category:"phrasal verb",
    keywords:[{word:"whittle down", pos:"phrasal verb", meaning:"逐渐减少（候选）"}],
    usage:"指把大量候选逐步缩减到少数。Khloé 谈海选：'We're going to like whittle down.'（我们再慢慢往下筛）。",
    example:"We whittled the list down to five finalists.",
    cloze:{text:"We ______ the list down to five finalists.", answer:"whittled", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:320, type:"phrase", level:"7+", topic:"values", dimension:"integrity", english:"regain trust",
    chinese:"重新赢回信任",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"regain trust", pos:"collocation", meaning:"重新获得信任"}],
    usage:"指信任破裂后重新赢回。Khloé 谈 Tristan：'He's always talking about how much he wants to regain that trust.'（他总说要重新赢回他丢掉的信任）。",
    example:"After the scandal, it took years to regain the public's trust.",
    cloze:{text:"After the scandal, it took years to ______ the public's trust.", answer:"regain", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:321, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"a fresh start",
    chinese:"全新的开始",
    source:"卡戴珊家族 S01E09", category:"noun phrase",
    keywords:[{word:"fresh start", pos:"noun phrase", meaning:"重新开始的机会"}],
    usage:"指放下过去重新来过。Khloé 说：'Like a new fresh start.'（就像全新的开始）。",
    example:"Moving to a new city gave her a fresh start.",
    cloze:{text:"Moving to a new city gave her a ______ start.", answer:"fresh", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:322, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"get out of a toxic place",
    chinese:"走出有毒（不健康）的关系/处境",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"toxic", pos:"adjective", meaning:"（关系）有毒的，有害的"}],
    usage:"指摆脱不健康的关系。Khloé 说：'We're excited to get out of that toxic place we are in.'（我们想从那段有毒的关系里走出来）。",
    example:"Leaving that toxic relationship was the best decision she made.",
    cloze:{text:"Leaving that ______ relationship was the best decision she made.", answer:"toxic", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:323, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"commit yourself to something",
    chinese:"全身心投入某事",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"commit oneself to", pos:"collocation", meaning:"承诺并投入"}],
    usage:"指一旦答应就全力以赴。Kim 说：'When I commit myself to something, I'll give 150% of myself.'（我一旦答应做一件事，就会付出百分之一百五的努力）。",
    example:"If you commit yourself to the goal, you'll get there eventually.",
    cloze:{text:"If you commit ______ to the goal, you'll get there eventually.", answer:"yourself", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:324, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"subjected to public scrutiny",
    chinese:"遭受公众审视",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"public scrutiny", pos:"noun phrase", meaning:"公众审视/监督"}],
    usage:"指被大众盯着评判。Kim 说：'I never want the person that I'm dating to be subjected to public scrutiny.'（我不想让跟我约会的人遭受公众审视）。",
    example:"Celebrities are constantly subjected to public scrutiny.",
    cloze:{text:"Celebrities are constantly ______ to public scrutiny.", answer:"subjected", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:325, type:"phrase", level:"7+", topic:"health", dimension:"body", english:"zen out",
    chinese:"放空，彻底放松",
    source:"卡戴珊家族 S01E09", category:"slang",
    keywords:[{word:"zen out", pos:"slang", meaning:"放空冥想，彻底放松"}],
    usage:"口语，指完全放松放空。Kylie 谈删社交软件：'Now that my nurseries are done, I can just really zen out.'（婴儿房弄好了，我就能彻底放空）。",
    example:"After a stressful week, I just want to zen out at home.",
    cloze:{text:"After a stressful week, I just want to ______ out at home.", answer:"zen", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:326, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"nesting",
    chinese:"（准妈妈）筑巢，布置婴儿房",
    source:"卡戴珊家族 S01E09", category:"slang",
    keywords:[{word:"nesting", pos:"noun/verb", meaning:"孕妇临产前布置家的冲动"}],
    usage:"指准妈妈临产前疯狂布置家里的行为。Khloé 说：'I can't believe you're now just nesting.'（你现在就开始筑巢了）。",
    example:"In her last month of pregnancy, she started nesting like crazy.",
    cloze:{text:"In her last month of pregnancy, she started ______ like crazy.", answer:"nesting", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:327, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"hold yourself to a standard",
    chinese:"用标准要求自己",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"hold oneself to", pos:"collocation", meaning:"以……要求自己"}],
    usage:"指坚持自己的原则标准。Kendall 说：'I have standards and I will hold myself to them 100%.'（我有标准，而且会百分百坚持）。",
    example:"She holds herself to the highest professional standards.",
    cloze:{text:"She holds ______ to the highest professional standards.", answer:"herself", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:328, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"a blast from the past",
    chinese:"穿越回过去的旧物/旧事",
    source:"卡戴珊家族 S01E09", category:"idiom",
    keywords:[{word:"blast from the past", pos:"idiom", meaning:"让人怀念的旧东西/旧事"}],
    usage:"指勾起回忆的旧物。Khloé 看到老款 G 车：'This is like a blast from the past.'（这车简直是穿越回过去）。",
    example:"Finding my old school photos was a real blast from the past.",
    cloze:{text:"Finding my old school photos was a real blast from the ______.", answer:"past", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:329, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"a phone call away",
    chinese:"一个电话就能找到（随时在）",
    source:"卡戴珊家族 S01E09", category:"idiom",
    keywords:[{word:"a phone call away", pos:"idiom", meaning:"随时可以联系到"}],
    usage:"表示随时愿意帮忙。Kim 对 Kylie 说：'I'm only a phone call away.'（我随时一个电话就到）。",
    example:"Don't hesitate to reach out — I'm just a phone call away.",
    cloze:{text:"Don't hesitate to reach out — I'm just a phone call ______.", answer:"away", hint:"填一个词"},
    questions:[], comparison:null
  },
    {
    id:300, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"be on the same page",
    chinese:"步调一致，想法一致",
    source:"卡戴珊家族 S01E07", category:"idiom",
    keywords:[{word:"on the same page", pos:"idiom", meaning:"想法/目标一致"}],
    usage:"指双方想法同步。Courtney 谈备孕：'We're making a baby together. We have to be on the same page.'（我们要一起造宝宝，必须步调一致）。",
    example:"We need to be on the same page before we sign the contract.",
    cloze:{text:"We need to be on the same ______ before we sign the contract.", answer:"page", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:301, type:"phrase", level:"6.5+", topic:"health", dimension:"body", english:"build up an appetite",
    chinese:"胃口大开",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"build up an appetite", pos:"collocation", meaning:"（活动后）胃口变好"}],
    usage:"指一番活动后食欲大增。Kim 洗完车说：'I think I've built up an appetite.'（我觉得我胃口都来了）。",
    example:"A long walk always builds up my appetite.",
    cloze:{text:"A long walk always builds up my ______.", answer:"appetite", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:302, type:"phrase", level:"6.5+", topic:"skills", dimension:"mastery", english:"figure it out on my own",
    chinese:"靠自己搞清楚",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"figure out on one's own", pos:"collocation", meaning:"独立解决/弄明白"}],
    usage:"指不依赖别人、独立解决。Kim 谈脱离 Kanye 的造型指导：'Having that not be there has really forced me to figure it out on my own.'（没有他引导，逼着我靠自己搞清楚）。",
    example:"Moving abroad forced me to figure everything out on my own.",
    cloze:{text:"Moving abroad forced me to figure everything out on my ______.", answer:"own", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:303, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"empowering feeling",
    chinese:"充满力量的感觉",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"empowering", pos:"adjective", meaning:"使人有力量的，赋能感的"}],
    usage:"形容让人自信、有掌控感。Kim 谈品牌认可她：'It's just a good empowering feeling.'（这种感觉真的充满力量）。",
    example:"Taking charge of her own career gave her an empowering feeling.",
    cloze:{text:"Taking charge of her own career gave her an ______ feeling.", answer:"empowering", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:304, type:"phrase", level:"6.5+", topic:"communication", dimension:"express", english:"deliver bad news",
    chinese:"传达坏消息",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"deliver news", pos:"collocation", meaning:"传达消息"}],
    usage:"指把不好听的消息告诉别人。Kris 说：'One of the things I don't like is delivering bad news.'（我不喜欢的一件事就是传达坏消息）。",
    example:"Nobody wants to be the one to deliver bad news to the team.",
    cloze:{text:"Nobody wants to be the one to ______ bad news to the team.", answer:"deliver", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:305, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"ups and downs",
    chinese:"起起落落，高低起伏",
    source:"卡戴珊家族 S01E07", category:"noun phrase",
    keywords:[{word:"ups and downs", pos:"noun phrase", meaning:"（经历/关系的）起伏"}],
    usage:"指有顺境也有逆境。Kris 说：'Being a manager comes with a lot of ups and downs.'（当经纪人有很多起起落落）。",
    example:"Every long-term relationship has its ups and downs.",
    cloze:{text:"Every long-term relationship has its ups and ______.", answer:"downs", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:306, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"have a game plan",
    chinese:"制定作战计划",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"game plan", pos:"noun phrase", meaning:"行动计划/策略"}],
    usage:"指提前规划好步骤。Kris 谈事业：'Let's have a game plan.'（咱们来定个计划）。",
    example:"Before launching the product, we need a solid game plan.",
    cloze:{text:"Before launching the product, we need a solid ______ plan.", answer:"game", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:307, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"embark on a new journey",
    chinese:"踏上新的旅程",
    source:"卡戴珊家族 S01E07", category:"collocation",
    keywords:[{word:"embark on", pos:"phrasal verb", meaning:"开始（一段新经历）"}],
    usage:"指开启人生新阶段。Kim 说：'It just feels like I'm embarking on this new journey.'（感觉就像我踏上了一段全新的旅程）。",
    example:"After graduation, she embarked on a new journey abroad.",
    cloze:{text:"After graduation, she ______ on a new journey abroad.", answer:"embarked", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:308, type:"phrase", level:"7+", topic:"communication", dimension:"express", english:"not an upset bone in my body",
    chinese:"浑身上下没有一点不高兴",
    source:"卡戴珊家族 S01E07", category:"idiom",
    keywords:[{word:"not a ... bone in my body", pos:"idiom", meaning:"完全没有某种感觉"}],
    usage:"强调完全没有某种情绪。Kendall 说：'There's not an upset bone in my body.'（我浑身上下没有一根不高兴的骨头）。",
    example:"I have not a jealous bone in my body — I'm genuinely happy for her.",
    cloze:{text:"I have not a ______ bone in my body — I'm genuinely happy for her.", answer:"jealous", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:309, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"dream come true",
    chinese:"美梦成真",
    source:"卡戴珊家族 S01E07", category:"idiom",
    keywords:[{word:"dream come true", pos:"idiom", meaning:"梦想实现"}],
    usage:"形容期待已久的事终于发生。Kim 说：'It almost feels like this is a dream come true.'（感觉这几乎是美梦成真）。",
    example:"Winning the scholarship felt like a dream come true.",
    cloze:{text:"Winning the scholarship felt like a dream come ______.", answer:"true", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:310, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"the big picture",
    chinese:"大局，全貌",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"big picture", pos:"idiom", meaning:"整体大局"}],
    usage:"指从整体而非细节看问题。Kourtney 谈品牌合作：'I feel like the big picture is showing that we can team up.'（大局上是要展示我们可以联手）。",
    example:"Don't get stuck on details — keep your eyes on the big picture.",
    cloze:{text:"Don't get stuck on details — keep your eyes on the big ______.", answer:"picture", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:311, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"pit someone against someone",
    chinese:"让（两方）对立起来",
    source:"卡戴珊家族 S01E08", category:"phrasal verb",
    keywords:[{word:"pit against", pos:"phrasal verb", meaning:"使对抗，让……互相争斗"}],
    usage:"指故意制造对立。Kourtney 说：'The internet wants to pit women against each other.'（网上总想把女人对立起来）。",
    example:"The media loves to pit celebrities against each other.",
    cloze:{text:"The media loves to ______ celebrities against each other.", answer:"pit", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:312, type:"phrase", level:"6.5+", topic:"values", dimension:"principles", english:"there's room for everybody",
    chinese:"容得下每个人",
    source:"卡戴珊家族 S01E08", category:"collocation",
    keywords:[{word:"room for everybody", pos:"collocation", meaning:"大家都有位置/机会"}],
    usage:"表达包容、人人有机会。Kourtney 谈女性互助：'There is room for everybody.'（这里容得下每个人）。",
    example:"In a healthy team, there's room for everybody to grow.",
    cloze:{text:"In a healthy team, there's ______ for everybody to grow.", answer:"room", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:313, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"get butterflies",
    chinese:"心扑通扑通跳（紧张/兴奋）",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"butterflies in one's stomach", pos:"idiom", meaning:"紧张或兴奋"}],
    usage:"形容上台/大事前的紧张激动。Kris 说：'I get those butterflies.'（我心扑通扑通的）。",
    example:"She gets butterflies every time she has to speak in public.",
    cloze:{text:"She gets ______ every time she has to speak in public.", answer:"butterflies", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:314, type:"phrase", level:"7+", topic:"communication", dimension:"connect", english:"connect with your audience",
    chinese:"与观众/受众建立连接",
    source:"卡戴珊家族 S01E08", category:"collocation",
    keywords:[{word:"connect with", pos:"phrasal verb", meaning:"与……产生共鸣/连接"}],
    usage:"指内容让人产生共鸣。Kris 谈大师课：'You have to connect with your audience.'（你必须和你的观众建立连接）。",
    example:"A great speaker knows how to connect with the audience.",
    cloze:{text:"A great speaker knows how to ______ with the audience.", answer:"connect", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:315, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"nothing is impossible",
    chinese:"没有什么不可能",
    source:"卡戴珊家族 S01E08", category:"saying",
    keywords:[{word:"nothing is impossible", pos:"saying", meaning:"一切皆有可能"}],
    usage:"表达信念和鼓励。Kim 说妈妈教的：'My mom has taught us that nothing is impossible.'（妈妈教会我们没有什么是不可能的）。",
    example:"With hard work and patience, nothing is impossible.",
    cloze:{text:"With hard work and patience, nothing is ______.", answer:"impossible", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:316, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"set your mind to",
    chinese:"下定决心要做",
    source:"卡戴珊家族 S01E08", category:"collocation",
    keywords:[{word:"set one's mind to", pos:"collocation", meaning:"下定决心"}],
    usage:"指一旦认定就努力去做。Kim 说：'You could do anything you set your mind to.'（只要你下定决心，什么都能做到）。",
    example:"She set her mind to learning French and became fluent in a year.",
    cloze:{text:"She set her ______ to learning French and became fluent in a year.", answer:"mind", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:317, type:"phrase", level:"7+", topic:"skills", dimension:"prove", english:"one-take wonder",
    chinese:"一条过的天才",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"one-take wonder", pos:"idiom", meaning:"（拍摄）一次就成功的人"}],
    usage:"称赞表演/拍摄一遍就过。工作人员夸 Courtney：'She's a one-take wonder.'（她是一条过的天才）。",
    example:"The director loved her — she's a one-take wonder.",
    cloze:{text:"The director loved her — she's a one-______ wonder.", answer:"take", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:318, type:"phrase", level:"7+", topic:"work", dimension:"career", english:"hold the keys to the kingdom",
    chinese:"握着王国的钥匙（掌握决定权）",
    source:"卡戴珊家族 S01E08", category:"idiom",
    keywords:[{word:"keys to the kingdom", pos:"idiom", meaning:"决定性的权力/机会"}],
    usage:"形容手握关键决定权。Khloé 谈选模特：'You hold the keys to the kingdom right there.'（你手里握着整个王国的钥匙）。",
    example:"In this project, the lead designer holds the keys to the kingdom.",
    cloze:{text:"In this project, the lead designer holds the keys to the ______.", answer:"kingdom", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:319, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"whittle down",
    chinese:"逐步筛选，层层缩减",
    source:"卡戴珊家族 S01E08", category:"phrasal verb",
    keywords:[{word:"whittle down", pos:"phrasal verb", meaning:"逐渐减少（候选）"}],
    usage:"指把大量候选逐步缩减到少数。Khloé 谈海选：'We're going to like whittle down.'（我们再慢慢往下筛）。",
    example:"We whittled the list down to five finalists.",
    cloze:{text:"We ______ the list down to five finalists.", answer:"whittled", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:320, type:"phrase", level:"7+", topic:"values", dimension:"integrity", english:"regain trust",
    chinese:"重新赢回信任",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"regain trust", pos:"collocation", meaning:"重新获得信任"}],
    usage:"指信任破裂后重新赢回。Khloé 谈 Tristan：'He's always talking about how much he wants to regain that trust.'（他总说要重新赢回他丢掉的信任）。",
    example:"After the scandal, it took years to regain the public's trust.",
    cloze:{text:"After the scandal, it took years to ______ the public's trust.", answer:"regain", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:321, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"a fresh start",
    chinese:"全新的开始",
    source:"卡戴珊家族 S01E09", category:"noun phrase",
    keywords:[{word:"fresh start", pos:"noun phrase", meaning:"重新开始的机会"}],
    usage:"指放下过去重新来过。Khloé 说：'Like a new fresh start.'（就像全新的开始）。",
    example:"Moving to a new city gave her a fresh start.",
    cloze:{text:"Moving to a new city gave her a ______ start.", answer:"fresh", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:322, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"get out of a toxic place",
    chinese:"走出有毒（不健康）的关系/处境",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"toxic", pos:"adjective", meaning:"（关系）有毒的，有害的"}],
    usage:"指摆脱不健康的关系。Khloé 说：'We're excited to get out of that toxic place we are in.'（我们想从那段有毒的关系里走出来）。",
    example:"Leaving that toxic relationship was the best decision she made.",
    cloze:{text:"Leaving that ______ relationship was the best decision she made.", answer:"toxic", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:323, type:"phrase", level:"7+", topic:"work", dimension:"execution", english:"commit yourself to something",
    chinese:"全身心投入某事",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"commit oneself to", pos:"collocation", meaning:"承诺并投入"}],
    usage:"指一旦答应就全力以赴。Kim 说：'When I commit myself to something, I'll give 150% of myself.'（我一旦答应做一件事，就会付出百分之一百五的努力）。",
    example:"If you commit yourself to the goal, you'll get there eventually.",
    cloze:{text:"If you commit ______ to the goal, you'll get there eventually.", answer:"yourself", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:324, type:"phrase", level:"7+", topic:"communication", dimension:"discretion", english:"subjected to public scrutiny",
    chinese:"遭受公众审视",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"public scrutiny", pos:"noun phrase", meaning:"公众审视/监督"}],
    usage:"指被大众盯着评判。Kim 说：'I never want the person that I'm dating to be subjected to public scrutiny.'（我不想让跟我约会的人遭受公众审视）。",
    example:"Celebrities are constantly subjected to public scrutiny.",
    cloze:{text:"Celebrities are constantly ______ to public scrutiny.", answer:"subjected", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:325, type:"phrase", level:"7+", topic:"health", dimension:"body", english:"zen out",
    chinese:"放空，彻底放松",
    source:"卡戴珊家族 S01E09", category:"slang",
    keywords:[{word:"zen out", pos:"slang", meaning:"放空冥想，彻底放松"}],
    usage:"口语，指完全放松放空。Kylie 谈删社交软件：'Now that my nurseries are done, I can just really zen out.'（婴儿房弄好了，我就能彻底放空）。",
    example:"After a stressful week, I just want to zen out at home.",
    cloze:{text:"After a stressful week, I just want to ______ out at home.", answer:"zen", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:326, type:"phrase", level:"7+", topic:"family", dimension:"love", english:"nesting",
    chinese:"（准妈妈）筑巢，布置婴儿房",
    source:"卡戴珊家族 S01E09", category:"slang",
    keywords:[{word:"nesting", pos:"noun/verb", meaning:"孕妇临产前布置家的冲动"}],
    usage:"指准妈妈临产前疯狂布置家里的行为。Khloé 说：'I can't believe you're now just nesting.'（你现在就开始筑巢了）。",
    example:"In her last month of pregnancy, she started nesting like crazy.",
    cloze:{text:"In her last month of pregnancy, she started ______ like crazy.", answer:"nesting", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:327, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"hold yourself to a standard",
    chinese:"用标准要求自己",
    source:"卡戴珊家族 S01E09", category:"collocation",
    keywords:[{word:"hold oneself to", pos:"collocation", meaning:"以……要求自己"}],
    usage:"指坚持自己的原则标准。Kendall 说：'I have standards and I will hold myself to them 100%.'（我有标准，而且会百分百坚持）。",
    example:"She holds herself to the highest professional standards.",
    cloze:{text:"She holds ______ to the highest professional standards.", answer:"herself", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:328, type:"phrase", level:"6.5+", topic:"values", dimension:"mood", english:"a blast from the past",
    chinese:"穿越回过去的旧物/旧事",
    source:"卡戴珊家族 S01E09", category:"idiom",
    keywords:[{word:"blast from the past", pos:"idiom", meaning:"让人怀念的旧东西/旧事"}],
    usage:"指勾起回忆的旧物。Khloé 看到老款 G 车：'This is like a blast from the past.'（这车简直是穿越回过去）。",
    example:"Finding my old school photos was a real blast from the past.",
    cloze:{text:"Finding my old school photos was a real blast from the ______.", answer:"past", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:329, type:"phrase", level:"6.5+", topic:"communication", dimension:"connect", english:"a phone call away",
    chinese:"一个电话就能找到（随时在）",
    source:"卡戴珊家族 S01E09", category:"idiom",
    keywords:[{word:"a phone call away", pos:"idiom", meaning:"随时可以联系到"}],
    usage:"表示随时愿意帮忙。Kim 对 Kylie 说：'I'm only a phone call away.'（我随时一个电话就到）。",
    example:"Don't hesitate to reach out — I'm just a phone call away.",
    cloze:{text:"Don't hesitate to reach out — I'm just a phone call ______.", answer:"away", hint:"填一个词"},
    questions:[], comparison:null
  },
    {
    id:330, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"take the high road",
    chinese:"走体面路线，选择宽容大度",
    source:"卡戴珊家族 S01E10", category:"idiom",
    keywords:[{word:"take the high road", pos:"idiom", meaning:"选择高尚体面的做法"}],
    usage:"指即使被亏待也保持体面、不报复。Khloé 说：'I prefer to take the high road and be a good person.'（我宁愿选择体面，做个好人）。",
    example:"Even after the betrayal, she chose to take the high road.",
    cloze:{text:"Even after the betrayal, she chose to take the ______ road.", answer:"high", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:331, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"go through the motions",
    chinese:"机械地过日子，行尸走肉",
    source:"卡戴珊家族 S01E10", category:"idiom",
    keywords:[{word:"go through the motions", pos:"idiom", meaning:"麻木地应付日常"}],
    usage:"指心不在焉、机械地做每天的事。Khloé 谈状态：'I'm just going through the motions.'（我只是机械地过每一天）。",
    example:"After losing his job, he felt like he was just going through the motions.",
    cloze:{text:"After losing his job, he felt like he was just going through the ______.", answer:"motions", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:332, type:"phrase", level:"6.5+", topic:"values", dimension:"principles", english:"when they go low, you go high",
    chinese:"别人往低处走，你就往高处走",
    source:"卡戴珊家族 S01E10", category:"saying",
    keywords:[{word:"go low / go high", pos:"saying", meaning:"（米歇尔·奥巴马名言）以德报怨"}],
    usage:"米歇尔·奥巴马名言，指不随对方堕落、保持格调。Kim 说：'From the wise words of Michelle Obama: when they go low, you go high.'（米歇尔·奥巴马说：别人往低处走，你就往高处走）。",
    example:"When critics attack you unfairly, remember: when they go low, you go high.",
    cloze:{text:"When critics attack you unfairly, remember: when they go ______, you go high.", answer:"low", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:333, type:"phrase", level:"6.5+", topic:"friendship", dimension:"trust", english:"have someone's back",
    chinese:"挺某人，支持某人",
    source:"卡戴珊家族 S01E10", category:"idiom",
    keywords:[{word:"have one's back", pos:"idiom", meaning:"支持/保护某人"}],
    usage:"指坚定地站在某人一边。Kim 谈曾为 Tristan 说话：'I would always have his back.'（我总会挺他）。",
    example:"No matter what happens, I'll always have your back.",
    cloze:{text:"No matter what happens, I'll always have your ______.", answer:"back", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:334, type:"phrase", level:"7+", topic:"communication", dimension:"conflict", english:"put someone on blast",
    chinese:"公开曝光某人（丑事）",
    source:"卡戴珊家族 S01E10", category:"slang",
    keywords:[{word:"on blast", pos:"slang", meaning:"公开曝光/声讨"}],
    usage:"口语，指把别人的丑事公开揭发。Khloé 说：'Half of me wants to just put it on blast.'（我有一半想直接把他曝光）。",
    example:"She was tempted to put him on blast on social media.",
    cloze:{text:"She was tempted to put him on ______ on social media.", answer:"blast", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:335, type:"phrase", level:"6.5+", topic:"values", dimension:"persist", english:"enough is enough",
    chinese:"够了就是够了，忍无可忍",
    source:"卡戴珊家族 S01E10", category:"saying",
    keywords:[{word:"enough is enough", pos:"saying", meaning:"（表示无法再容忍）"}],
    usage:"表明忍受到头、必须止损。Kim 安慰 Khloé：'You have the power to decide when you're not gonna let people do you wrong anymore. Enough is enough.'（你有权决定何时不再容忍，够了就是够了）。",
    example:"After months of unfair treatment, she finally said: enough is enough.",
    cloze:{text:"After months of unfair treatment, she finally said: enough is ______.", answer:"enough", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:336, type:"phrase", level:"7+", topic:"values", dimension:"mood", english:"a moment of clarity",
    chinese:"清醒的时刻，恍然大悟",
    source:"卡戴珊家族 S01E10", category:"collocation",
    keywords:[{word:"moment of clarity", pos:"collocation", meaning:"突然想明白的瞬间"}],
    usage:"指突然看清真相/本质。家人对 Khloé 说：'It also should be such a moment of clarity for you.'（这对你来说也该是个彻底清醒的时刻）。",
    example:"The breakup gave her a moment of clarity about what she truly wanted.",
    cloze:{text:"The breakup gave her a moment of ______ about what she truly wanted.", answer:"clarity", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:337, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"no blurred lines",
    chinese:"没有模糊地带，界限分明",
    source:"卡戴珊家族 S01E10", category:"collocation",
    keywords:[{word:"blurred lines", pos:"noun phrase", meaning:"模糊的界限/灰色地带"}],
    usage:"指对错分明、不含糊。Khloé 说：'There's no blurred lines, nothing's gray.'（没有模糊地带，没有灰色地带）。",
    example:"In this matter, there are no blurred lines — it's simply wrong.",
    cloze:{text:"In this matter, there are no ______ lines — it's simply wrong.", answer:"blurred", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:338, type:"phrase", level:"7+", topic:"values", dimension:"principles", english:"you can't make people do right by you",
    chinese:"没法强迫别人好好待你",
    source:"卡戴珊家族 S01E10", category:"saying",
    keywords:[{word:"do right by someone", pos:"collocation", meaning:"公正/善待某人"}],
    usage:"指你无法控制别人怎么对待你，只能守住自己。Khloé 说：'You can't make people do right by you.'（你没法强迫别人好好待你）。",
    example:"You can't make people do right by you — but you can choose who stays in your life.",
    cloze:{text:"You can't make people do right ______ you — but you can choose who stays.", answer:"by", hint:"填一个词"},
    questions:[], comparison:null
  },
  {
    id:339, type:"phrase", level:"7+", topic:"values", dimension:"persist", english:"a fire inside of me",
    chinese:"内心的一团火（内在驱动力）",
    source:"卡戴珊家族 S01E10", category:"idiom",
    keywords:[{word:"fire inside", pos:"idiom", meaning:"强烈的内在动力/热情"}],
    usage:"形容内心强烈的追求或动力。Kim 谈新目标：'There is something like a fire inside of me.'（我心里有一团火）。",
    example:"Since the failure, there's been a fire inside of me to prove everyone wrong.",
    cloze:{text:"Since the failure, there's been a ______ inside of me to prove everyone wrong.", answer:"fire", hint:"填一个词"},
    questions:[], comparison:null
  }
];
