// ============================================
// ScenePick 场景拾句 · 表达数据
// 其他电脑加资料：编辑本文件（或把台本提交到仓库后让 AI 处理）
// 新增表达按下面格式在数组末尾追加对象即可
// ============================================
const expressions = [
  // ===== 示范表达（经典美剧） =====
  {
    id:1, type:"phrase", level:"7+", topic:"work", english:"pull strings",
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
    id:2, type:"phrase", level:"6.5+", topic:"communication", english:"read between the lines",
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
    id:3, type:"phrase", level:"6.5+", topic:"communication", english:"cut to the chase",
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
    id:4, type:"phrase", level:"6.5+", topic:"work", english:"on thin ice",
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
    id:5, type:"sentence", level:"7+", topic:"values",
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
    id:6, type:"sentence", level:"7+", topic:"education",
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
    id:7, type:"sentence", level:"7+", topic:"media",
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
    id:8, type:"sentence", level:"7+", topic:"values",
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
    id:9, type:"paragraph", level:"7+", topic:"work",
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
    id:10, type:"paragraph", level:"7+", topic:"friendship",
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
    id:11, type:"paragraph", level:"7+", topic:"skills",
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
    id:12, type:"paragraph", level:"7+", topic:"family",
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
    id:13, type:"phrase", level:"6.5+", topic:"communication", english:"take it down a notch",
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
    id:14, type:"phrase", level:"6.5+", topic:"communication", english:"tell someone off",
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
    id:15, type:"phrase", level:"6.5+", topic:"values", english:"follow through",
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
    id:16, type:"sentence", level:"7+", topic:"family",
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
    id:17, type:"sentence", level:"7+", topic:"family",
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
    id:18, type:"sentence", level:"6.5+", topic:"communication",
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
    id:19, type:"paragraph", level:"7+", topic:"skills",
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
    id:20, type:"paragraph", level:"7+", topic:"family",
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
    id:21, type:"phrase", level:"7+", topic:"values", english:"put your foot down",
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
    id:22, type:"phrase", level:"6.5+", topic:"communication", english:"rub someone the wrong way",
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
    id:23, type:"phrase", level:"7+", topic:"family", english:"keep someone grounded",
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
    id:24, type:"phrase", level:"6.5+", topic:"values", english:"take great pride in",
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
    id:25, type:"phrase", level:"7+", topic:"values", english:"a total flake",
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
    id:26, type:"phrase", level:"6.5+", topic:"education", english:"teach someone a lesson",
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
    id:27, type:"phrase", level:"6.5+", topic:"communication", english:"take turns doing something",
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
    id:28, type:"phrase", level:"7+", topic:"communication", english:"walk on eggshells",
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
    id:29, type:"phrase", level:"6.5+", topic:"work", english:"take it to the next level",
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
    id:30, type:"phrase", level:"6.5+", topic:"values", english:"keep it real",
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
    id:31, type:"phrase", level:"6.5+", topic:"communication", english:"not someone's thing",
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
    id:32, type:"phrase", level:"7+", topic:"skills", english:"without missing a beat",
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
    id:33, type:"phrase", level:"6.5+", topic:"work", english:"non-negotiable",
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
    id:34, type:"phrase", level:"6.5+", topic:"communication", english:"roll your eyes",
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
    id:35, type:"phrase", level:"7+", topic:"communication", english:"give as good as you get",
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
    id:36, type:"phrase", level:"7+", topic:"work", english:"pave the way",
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
    id:37, type:"phrase", level:"6.5+", topic:"friendship", english:"count on someone",
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
    id:38, type:"phrase", level:"7+", topic:"communication", english:"dredge up",
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
    id:39, type:"phrase", level:"6.5+", topic:"communication", english:"don't get me wrong",
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
    id:40, type:"phrase", level:"6.5+", topic:"values", english:"be full of yourself",
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
    id:41, type:"phrase", level:"6.5+", topic:"family", english:"run off with someone",
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
    id:42, type:"phrase", level:"6.5+", topic:"values", english:"get past something",
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
    id:43, type:"phrase", level:"7+", topic:"communication", english:"address the elephant in the room",
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
    id:44, type:"phrase", level:"7+", topic:"communication", english:"sweep it under the rug",
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
    id:45, type:"phrase", level:"6.5+", topic:"communication", english:"talk it out",
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
    id:46, type:"phrase", level:"6.5+", topic:"education", english:"book smart vs street smart",
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
    id:47, type:"phrase", level:"7+", topic:"work", english:"in light of",
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
    id:48, type:"phrase", level:"6.5+", topic:"communication", english:"make fun of someone",
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
    id:49, type:"phrase", level:"6.5+", topic:"education", english:"a thirst for knowledge",
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
    id:50, type:"phrase", level:"7+", topic:"work", english:"hang by a thread",
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
    id:51, type:"phrase", level:"6.5+", topic:"values", english:"loosen up",
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
    id:52, type:"phrase", level:"7+", topic:"work", english:"make a judgment call",
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
    id:53, type:"phrase", level:"6.5+", topic:"education", english:"keep up with",
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
    id:54, type:"phrase", level:"6.5+", topic:"values", english:"take advantage of",
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
    id:55, type:"phrase", level:"6.5+", topic:"family", english:"look up to someone",
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
    id:56, type:"phrase", level:"7+", topic:"skills", english:"have it down pat",
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
    id:57, type:"phrase", level:"6.5+", topic:"work", english:"be in demand",
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
    id:58, type:"phrase", level:"7+", topic:"work", english:"drop the ball",
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
    id:59, type:"phrase", level:"6.5+", topic:"values", english:"get butterflies",
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
    id:60, type:"phrase", level:"7+", topic:"communication", english:"get your panties in a bunch",
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
    id:61, type:"phrase", level:"7+", topic:"values", english:"stir up",
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
    id:62, type:"phrase", level:"6.5+", topic:"values", english:"take things too far",
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
    id:63, type:"phrase", level:"6.5+", topic:"education", english:"excel at",
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
    id:64, type:"phrase", level:"6.5+", topic:"family", english:"sneak out",
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
    id:65, type:"phrase", level:"6.5+", topic:"communication", english:"bubble up",
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
    id:66, type:"phrase", level:"6.5+", topic:"values", english:"make a commitment",
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
    id:67, type:"phrase", level:"6.5+", topic:"work", english:"kick off",
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
    id:68, type:"phrase", level:"6.5+", topic:"family", english:"bring back memories",
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
    id:69, type:"phrase", level:"6.5+", topic:"communication", english:"the more, the merrier",
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
    id:70, type:"phrase", level:"7+", topic:"work", english:"get around to",
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
    id:71, type:"phrase", level:"6.5+", topic:"communication", english:"freaking out",
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
    id:72, type:"phrase", level:"6.5+", topic:"communication", english:"a complete package",
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
    id:73, type:"phrase", level:"6.5+", topic:"work", english:"here's the deal",
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
    id:74, type:"phrase", level:"6.5+", topic:"work", english:"step it up a notch",
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
    id:75, type:"phrase", level:"7+", topic:"work", english:"back to square one",
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
    id:76, type:"phrase", level:"6.5+", topic:"friendship", english:"have a blast",
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
    id:77, type:"phrase", level:"6.5+", topic:"education", english:"lesson learned",
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
    id:78, type:"phrase", level:"7+", topic:"communication", english:"be thrown (by something)",
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
  }
];
