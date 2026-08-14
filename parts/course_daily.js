// ===== 生活口语课 · 单元1「委婉反驳」剧情学习单元 =====
// 结构：intro(开场) / shows(剧集来源) / dims(不同维度的观点表达) / scenes(剧情场景序列)
// 学习体验 = 看剧学：每个场景 = 一段真实台本对话 + 情境 + 好在哪 + 同维度说法

const COURSE_DAILY_UNIT1 = {
  level: "入门",
  task: "委婉反驳",
  icon: "💬",
  en: "polite disagreement",
  intro: "这一关，我们从 4 部剧 5 个场景学「委婉反驳」——看看每个角色，是怎么把「不」说得让人舒服的。",
  shows: ["摩登家庭", "查理成长日记", "卡戴珊家族"],
  dims: [
    {
      name: "软化开场", ico: "🪶",
      exp: "先把对方的话接住，再轻轻转向——不硬顶，留余地：",
      lines: [
        { p: "It's just that…", zh: "只是……（引出真实原因）", use: "She trusts you. It's just that weird stuff happens at concerts." },
        { p: "The thing is…", zh: "重点是……", use: "The thing is, we can't afford it right now." },
        { p: "It's not that…, it's just that…", zh: "不是……而是……（澄清误会）", use: "It's not that I don't like him, it's just that we never click." },
        { p: "I hear you, but I see it differently", zh: "我懂你的意思，但我的看法不一样", use: "I hear you, but I see it differently — I'd focus on quality first." },
        { p: "Let me play devil's advocate here", zh: "我来唱个反调（换个角度）", use: "Let me play devil's advocate here — what if the plan backfires?" }
      ],
      risk: "家庭、朋友之间最常用"
    },
    {
      name: "礼貌否定", ico: "🙂",
      exp: "不正面冲突，只表达「我这么看跟你不太一样」：",
      lines: [
        { p: "I wouldn't say…", zh: "我倒不觉得……", use: "I wouldn't say too much time." },
        { p: "I'm not sure I'd agree with that", zh: "这个我倒不一定认同", use: "I'm not sure I'd agree with that, honestly." },
        { p: "I see it a bit differently", zh: "我看得稍微有点不一样", use: "I see it a bit differently, but I get your point." },
        { p: "I'm not convinced that's the whole story", zh: "我不太相信事情就这么简单", use: "I'm not convinced that's the whole story — there must be more to it." },
        { p: "That's one way to look at it", zh: "这是一种看法（言下之意：不止这一种）", use: "That's one way to look at it, though I see it quite differently." }
      ],
      risk: "同事、朋友间得体"
    },
    {
      name: "先扬后抑", ico: "🎀",
      exp: "先给足热情，再讲实际难处——拒绝不伤人：",
      lines: [
        { p: "I would love to, but…", zh: "我很想去，但是……", use: "I would love to come, but I can't this weekend." },
        { p: "I wish I could, but…", zh: "我倒希望我能，但是……", use: "I wish I could help, but I'm swamped this week." },
        { p: "I'd really like to, but…", zh: "我真的很想，但是……", use: "I'd really like to join, but I've got other plans." },
        { p: "I appreciate the offer, but…", zh: "很感谢你的提议，但是……", use: "I appreciate the offer, but I've already made other plans." },
        { p: "Thanks for thinking of me, but…", zh: "谢谢你想到我，但是……", use: "Thanks for thinking of me, but I'll have to pass this time." }
      ],
      risk: "拒绝邀约、婉拒请求"
    }
  ],
  scenes: [
    {
      id: "D01", show: "摩登家庭", ep: "S01E04", chars: ["Phil", "Alex"], dim: 0,
      situation: "Alex 抱怨妈妈不信任她，Phil 当和事佬——先肯定，再替妻子找补。",
      dialogue: [
        { sp: "Alex", en: "Mom just doesn't trust me, and it's not fair.", zh: "妈妈就是不相信我，这不公平。" },
        { sp: "Phil", en: "She trusts you. It's just that weird stuff happens at concerts.", zh: "她相信你，只是演唱会那地方太容易出乱子。" }
      ],
      key: "It's just that…",
      why: "Phil 没说 Alex 错了，先给台阶（She trusts you），再用 It's just that 引出真实原因——反驳不伤人，还显得通情达理。",
      alt: ["The thing is…", "It's not that…, it's just that…"],
      words: [
        { w: "It's just that…", zh: "只是……（软化开场句型）", tag: "句型" },
        { w: "She trusts you", zh: "她相信你（先肯定再转折）", tag: "观点" },
        { w: "weird stuff happens", zh: "总有意外状况（口语名词短语）", tag: "短语" }
      ]
    },
    {
      id: "D02", show: "查理成长日记", ep: "S01E02", chars: ["奶奶", "妈妈"], dim: 1,
      situation: "奶奶调侃妈妈照顾宝宝太久、急着甩手，妈妈笑着软顶回去。",
      dialogue: [
        { sp: "奶奶", en: "You spent a little too much time with Charlie, and you're ready to hand her over early.", zh: "你一定是照顾Charlie时间太长了，然后想早点把她交给我吧。" },
        { sp: "妈妈", en: "Well, I wouldn't say too much time.", zh: "这个，其实也不能算是时间太长了吧。" }
      ],
      key: "I wouldn't say…",
      why: "不否认奶奶的说法，只表达「我可不这么看」——I wouldn't say 把反驳轻轻拨开，一点火药味都没有。",
      alt: ["I'm not sure I'd agree with that", "I see it a bit differently"],
      words: [
        { w: "I wouldn't say…", zh: "我倒不觉得……（礼貌否定句型）", tag: "句型" },
        { w: "a little too much", zh: "稍微有点多（程度限定词）", tag: "短语" },
        { w: "hand her over", zh: "把孩子交出去（短语动词）", tag: "短语" }
      ]
    },
    {
      id: "D03", show: "查理成长日记", ep: "S01E01", chars: ["Charlie", "妈妈"], dim: 0,
      situation: "小孩想问一个可能冒犯的问题，先给妈妈打预防针。",
      dialogue: [
        { sp: "Charlie", en: "Mom, don't take this the wrong way, but why did you guys have to have another baby?", zh: "妈妈，别误会我的意思，但你们为什么非得生第四个宝宝呢？" },
        { sp: "妈妈", en: "Well, because three kids was just too easy.", zh: "那个嘛，因为三个孩子太好养了。（反讽）" }
      ],
      key: "Don't take this the wrong way, but…",
      why: "明知要说的话可能冒犯，先上缓冲——把话的刺包起来再递出去，对方听到的是问题，不是指责。",
      alt: ["I mean this in the nicest way…", "No offense, but…"],
      words: [
        { w: "take this the wrong way", zh: "往坏处理解（固定搭配）", tag: "搭配" },
        { w: "No offense, but…", zh: "无意冒犯，但是……（同义缓冲）", tag: "句型" },
        { w: "打预防针", zh: "先声明立场再开口（观点表达）", tag: "观点" }
      ]
    },
    {
      id: "D04", show: "卡戴珊家族", ep: "S01E02", chars: ["Kim", "对方"], dim: 2,
      situation: "Kim 想接下合作邀约，但条件不允许，先表达热情再讲难处。",
      dialogue: [
        { sp: "Kim", en: "I would love to come and do a skit with you more than anything, but I feel like I can't go with Scott this weekend.", zh: "我特别特别想过去跟你一起演个小品，但我觉得这个周末我没法跟斯科特一起去。" },
        { sp: "对方", en: "Yeah, and we already invited him. I feel bad. I would totally disinvite for you.", zh: "对，而且我们已经邀请他了。我觉得挺不好意思的。我完全愿意为你把他推掉。" },
        { sp: "Kim", en: "No, I know, but I feel bad disinviting him.", zh: "不，我知道，但我觉得把人家推掉不太好。" }
      ],
      key: "I would love to, but…",
      why: "拒绝的公式：I would love to（热情）→ but（难处）。对方先吃到糖再听到拒绝，不会觉得被敷衍。",
      alt: ["I wish I could, but…", "I'd really like to, but…"],
      words: [
        { w: "I would love to, but…", zh: "我很想去，但是……（先扬后抑句型）", tag: "句型" },
        { w: "disinvite", zh: "取消邀请（动词，商务场景可用）", tag: "名词" },
        { w: "feel bad about", zh: "过意不去（情绪表达）", tag: "短语" }
      ]
    },
    {
      id: "D05", show: "卡戴珊家族", ep: "S01E06", chars: ["Kim", "对方"], dim: 2,
      situation: "生日被漏请，Kim 直接质问，对方解释后她摆事实跟进——情绪升级版的反驳。",
      dialogue: [
        { sp: "Kim", en: "Why didn't you invite me to your birthday?", zh: "你为什么不邀请我参加你的生日？" },
        { sp: "对方", en: "I didn't really invite anyone to my birthday.", zh: "我本来就没请任何人来我的生日。" },
        { sp: "Kim", en: "She didn't even have a dinner. She had a birthday party at a club.", zh: "她根本没办生日晚宴，她是在夜店办的生日派对。" }
      ],
      key: "Why didn't you…?",
      why: "三步推进的强反驳：质问 → 听解释 → 摆事实推翻（didn't even…）。情绪升级，但逻辑还在——熟人之间才这么用。",
      alt: ["How come you didn't…?", "You could've at least…"],
      words: [
        { w: "Why didn't you…?", zh: "你为什么不……？（质问开场）", tag: "句型" },
        { w: "didn't even…", zh: "连……都没有（摆事实推翻）", tag: "观点" },
        { w: "take it out on", zh: "冲……撒气（固定搭配）", tag: "搭配" }
      ]
    }
  ]
};

// ===== 雅思 6.5+ 单元2「职场博弈」剧情学习单元 =====
// 内容全部来自《卡戴珊家族》第一季真实商业场景：谈合同 / 亮底线 / 传坏消息
const COURSE_DAILY_UNIT2 = {
  level: "雅思 6.5+",
  task: "职场博弈",
  icon: "💼",
  en: "negotiation & deal-making",
  intro: "这一关，从《卡戴珊家族》第 1 季的真实商业场景学「职场博弈」——Kim 怎么自己谈下 Balenciaga 合同、怎么给零售商立规矩，Kris 怎么开口传递坏消息。谈成、守住、说破，全是生意场上的真刀真枪。",
  shows: ["卡戴珊家族"],
  dims: [
    {
      name: "争取掌控", ico: "🕹️",
      exp: "谈判桌上最硬气的牌，是「这事我自己能搞定」——不靠中间人，自己谈：",
      lines: [
        { p: "I can do this one on my own", zh: "这个我自己就能搞定", use: "I've learned the ins and outs of contracts — I can do this one on my own." },
        { p: "It's the first time I've ever done my own contract", zh: "这是我第一次自己谈合同", use: "It's the first time I've ever done my own contract, and I feel more in control." },
        { p: "I just feel more in control", zh: "我就是感觉更有掌控感", use: "With the whole team out of the picture, I just feel more in control." },
        { p: "I've had practice with this", zh: "这种事我已经练过手了", use: "Don't worry about me — I've had practice with this kind of negotiation." },
        { p: "You're a walking in-house attorney", zh: "你简直是行走的驻场律师", use: "She knows every clause in the contract — she's a walking in-house attorney." }
      ],
      risk: "商务谈判、争取项目时，展示「不依赖他人」的底气"
    },
    {
      name: "亮底线", ico: "🚧",
      exp: "把不可退让的规则先说死——宁可不做这单，也不破例：",
      lines: [
        { p: "We don't sell to retailers that…", zh: "我们不会卖给……（拒绝合作对象）", use: "We don't sell to retailers that won't carry the full size range." },
        { p: "You have to carry the full size range", zh: "你必须进全码段", use: "No exceptions — you have to carry the full size range." },
        { p: "If you don't agree to that, you can't carry the brand", zh: "不同意这一点，就没资格代理这个品牌", use: "That's the rule: if you don't agree to that, you can't carry the brand." },
        { p: "There's no plus size section or petite section — it's one section", zh: "没有大码区、小码区——就是一个区", use: "Our racks are one section for everyone; there's no plus size section or petite section." },
        { p: "It's non-negotiable", zh: "这没得商量", use: "The deadline is non-negotiable — we ship on Friday." }
      ],
      risk: "供应商、品牌谈判中表明立场，语气坚决但不失礼"
    },
    {
      name: "传坏消息", ico: "📢",
      exp: "职场里最难开口的事——先顾全对方的情绪，再说事实：",
      lines: [
        { p: "One of the things I don't like is delivering bad news", zh: "我最不擅长的事之一，就是传达坏消息", use: "One of the things I don't like is delivering bad news, especially to the team." },
        { p: "Who's going to be the one to tell her?", zh: "谁来告诉她？", use: "The results are in — who's going to be the one to tell her?" },
        { p: "I don't want anybody to have their feelings hurt", zh: "我不想让任何人伤心", use: "I don't want anybody to have their feelings hurt, so let's break it gently." },
        { p: "It's as big as it gets", zh: "这已经是天花板了", use: "A cover of that magazine? It's as big as it gets." },
        { p: "There's not an upset bone in my body", zh: "我浑身上下没有一根不高兴的骨头", use: "I lost the bid, but there's not an upset bone in my body — it went to the right person." }
      ],
      risk: "谈反馈、谈落选、谈裁员时，情绪管理比信息本身更重要"
    }
  ],
  scenes: [
    {
      id: "E01", show: "卡戴珊家族", ep: "S01E07", chars: ["Kim", "经纪人"], dim: 0,
      situation: "Kim 接下 Balenciaga 广告邀约，但她刚学完合同法，决定这次自己谈合同、不靠经纪人和律师。",
      dialogue: [
        { sp: "Kim", en: "Since I've been learning so much about contracts and law school, I feel like I can do this one on my own.", zh: "因为我一直在学合同法、上法学院，我觉得这次我自己就能搞定。" },
        { sp: "经纪人", en: "Oh my God, you're like a walking in-house attorney.", zh: "天哪，你简直是个行走的驻场律师。" },
        { sp: "Kim", en: "I feel like I've gotten to practice, and it's better to practice on a big deal than on myself.", zh: "我觉得我算是练过手了，而且拿大项目练手，总比拿自己练手强。" },
        { sp: "经纪人", en: "Still get 10%?", zh: "我还是抽 10%？" },
        { sp: "Kim", en: "You'll still get 10%.", zh: "你还是抽 10%。" }
      ],
      key: "I can do this one on my own",
      why: "谈判桌上最硬的牌不是压价，是「I can do this one on my own」——一句话亮出「我有能力、有准备、不依赖中间人」。on my own（独立搞定）是雅思高频短语；配合名词 contract、词组 in-house attorney（驻场律师），就是商务 Part 2 的实质词汇。",
      alt: ["It's the first time I've ever done my own contract", "I just feel more in control"],
      words: [
        { w: "contract", zh: "合同（名词）", tag: "名词" },
        { w: "on my own", zh: "独立搞定（雅思高频短语）", tag: "短语" },
        { w: "in-house attorney", zh: "驻场律师（名词）", tag: "名词" },
        { w: "feel more in control", zh: "更有掌控感（观点表达）", tag: "观点" }
      ]
    },
    {
      id: "E02", show: "卡戴珊家族", ep: "S01E09", chars: ["Kim", "品牌方"], dim: 1,
      situation: "Good American 谈零售合作，Kim 立下铁律：想卖这个牌子，就必须进全码段，不许拆开只卖畅销码。",
      dialogue: [
        { sp: "Kim", en: "We don't sell to retailers that won't buy the entire size range.", zh: "我们不卖给不肯进全码段的零售商。" },
        { sp: "Kim", en: "You have to carry the full size range and you can't separate them.", zh: "你必须全码段进货，不能拆开卖。" },
        { sp: "Kim", en: "There's no plus size section or petite section — it's one section, and if people don't agree to that, they can't carry the brand.", zh: "没有大码区、小码区——就是一个区。不同意这个原则，就别想代理这个品牌。" }
      ],
      key: "If you don't agree to that, you can't carry the brand",
      why: "教科书级亮底线：先说不卖什么（We don't sell to...），再给规则（You have to...），最后给后果（you can't carry the brand）。carry（代理、在售）是商业英语的实质动词，full size range（全码段）是含金量高的名词词组——比简单的 don't accept 高出一整个台阶。",
      alt: ["We don't sell to retailers that won't carry the full size range", "It's non-negotiable"],
      words: [
        { w: "retailer", zh: "零售商（名词）", tag: "名词" },
        { w: "size range", zh: "尺码段（名词）", tag: "名词" },
        { w: "non-negotiable", zh: "没得商量（形容词，强烈立场）", tag: "形容词" },
        { w: "if you don't agree to that, you can't carry the brand", zh: "不同意就没资格代理（观点表达）", tag: "观点" }
      ]
    },
    {
      id: "E03", show: "卡戴珊家族", ep: "S01E07", chars: ["Kris", "经纪人"], dim: 2,
      situation: "两个女儿都在竞争 Vogue 封面，最后 Kim 拿到。Kris 既是经纪人又是妈妈，最难的就是开口跟 Kendall 说这件事。",
      dialogue: [
        { sp: "Kris", en: "One of the things I don't like is delivering bad news, and on top of it, I'm their mom, which makes it worse.", zh: "当经纪人有很多事我不爱干，传达坏消息就是其中之一，而且我还是她们的妈妈，这就更难开口了。" },
        { sp: "经纪人", en: "Who's going to be the one to tell her that Kim's getting the cover and not her?", zh: "谁来告诉她，封面给了 Kim 而不是她？" },
        { sp: "Kris", en: "I don't want anybody to have their feelings hurt or be disappointed.", zh: "我不想让任何人伤心或失望。" }
      ],
      key: "I don't want anybody to have their feelings hurt",
      why: "传坏消息的经典话术：先表明立场（I don't want...），再谈正事。have their feelings hurt（让他们受伤）比 make them sad 精准得多——feelings hurt 是固定搭配，而 delivering bad news（传达坏消息）是职场高频名词短语。",
      alt: ["Who's going to be the one to tell her?", "One of the things I don't like is delivering bad news"],
      words: [
        { w: "delivering bad news", zh: "传达坏消息（名词短语）", tag: "名词" },
        { w: "have their feelings hurt", zh: "让他们受伤（固定搭配）", tag: "搭配" },
        { w: "be the one to tell", zh: "由谁来说（观点表达）", tag: "观点" },
        { w: "on top of it", zh: "更糟的是（递进连接）", tag: "短语" }
      ]
    },
    {
      id: "E04", show: "卡戴珊家族", ep: "S01E07", chars: ["Kendall", "Kris"], dim: 2,
      situation: "Kendall 得知封面给了姐姐 Kim，没有半点不高兴——她认为这个封面给了「对的人」，还反过来安慰妈妈。",
      dialogue: [
        { sp: "Kendall", en: "There's not an upset bone in my body because I think it went to the right person.", zh: "我浑身上下没有一根不高兴的骨头，因为我觉得这个封面给了对的人。" },
        { sp: "Kendall", en: "Don't get me wrong, I would have been extremely honored and beyond excited to get this cover.", zh: "别误会，如果能拿到这个封面，我会无比荣幸、激动得要命。" },
        { sp: "Kendall", en: "But I'm totally okay. I know I'll have another shot. Happy to give it up to my sister.", zh: "但我真的没关系。我知道以后还会有机会。我乐意把它让给我妹妹。" }
      ],
      key: "There's not an upset bone in my body",
      why: "not an upset bone in my body（全身上下没有一根不高兴的骨头）是极具画面感的观点表达，比 I'm not angry 生动十倍。竞争落败后的体面退场：承认结果合理（it went to the right person）+ 表达风度（happy to give it up）——雅思 Part 3 谈 competition、fairness 的高分素材。",
      alt: ["It went to the right person", "I'm happy to give it up to my sister"],
      words: [
        { w: "not an upset bone in my body", zh: "没有一根不高兴的骨头（观点表达）", tag: "观点" },
        { w: "it went to the right person", zh: "给了对的人（体面退场的说法）", tag: "观点" },
        { w: "shot", zh: "一次机会（名词，have another shot）", tag: "名词" },
        { w: "beyond excited", zh: "激动不已（程度副词强化）", tag: "形容词" }
      ]
    }
  ]
};

// ===== 雅思 6.5+ 单元3「把话说开」剧情学习单元 =====
const COURSE_DAILY_UNIT3 = {
  level: "雅思 6.5+",
  task: "把话说开",
  icon: "💬",
  en: "addressing what's awkward",
  intro: "这一关，从 4 个真实场景学「把话说开」——点破、掩盖、谈开、澄清，看成年人怎么处理尴尬话题。",
  shows: ["摩登家庭"],
  dims: [
    {
      name: "点破", ico: "💡",
      exp: "把大家心知肚明却没人提的事摆上台面：",
      lines: [
        { p: "Address the elephant in the room", zh: "直面那个避而不谈的问题", use: "Let's address the elephant in the room: our sales are dropping." },
        { p: "Let's be honest about what's going on", zh: "我们诚实面对现状吧", use: "Let's be honest about what's going on — we're falling behind." },
        { p: "I think we all know what this is about", zh: "我想我们都知道这是怎么回事", use: "I think we all know what this is about, so let's just say it." },
        { p: "Let's not beat around the bush", zh: "别绕弯子了", use: "Let's not beat around the bush — the numbers are going down." },
        { p: "I'll cut to the chase", zh: "我直说了", use: "I'll cut to the chase: your idea needs a stronger plan." }
      ],
      risk: "需要勇气，但比装糊涂高效"
    },
    {
      name: "掩盖", ico: "🙈",
      exp: "假装没事发生——短痛换长痛，但有时是人之常情：",
      lines: [
        { p: "Sweep it under the rug", zh: "当没发生过，掩盖过去", use: "We can't just sweep this under the rug and pretend it's fine." },
        { p: "Let's just move past it", zh: "算了，翻篇吧", use: "Let's just move past it — no point rehashing." },
        { p: "Don't bring that up again", zh: "别再提那事了", use: "Don't bring that up again — it's water under the bridge." },
        { p: "Let sleeping dogs lie", zh: "别去捅马蜂窝（旧事莫提）", use: "I know you want closure, but sometimes it's better to let sleeping dogs lie." },
        { p: "Out of sight, out of mind", zh: "眼不见，心不烦", use: "He moved out last month — out of sight, out of mind." }
      ],
      risk: "口语场景常见；雅思里可用作对比（有人逃避 vs 有人直面）"
    },
    {
      name: "谈开", ico: "🫱",
      exp: "把矛盾摊开来谈，而不是各怀心事：",
      lines: [
        { p: "Talk it out", zh: "把话说开，谈清楚", use: "We need to talk it out before it gets worse." },
        { p: "Clear the air", zh: "把气氛缓和、把话说透", use: "Let's clear the air — I didn't mean to offend you." },
        { p: "Get to the bottom of this", zh: "把这件事的根源弄清楚", use: "We should get to the bottom of this instead of guessing." },
        { p: "Let's hash it out", zh: "我们把话说透", use: "We've been avoiding this for weeks — let's hash it out today." },
        { p: "We need to have a heart-to-heart", zh: "我们得开诚布公谈一次", use: "Before it gets worse, we need to have a heart-to-heart." }
      ],
      risk: "解决问题导向，比 argue 高级"
    }
  ],
  scenes: [
    {
      id: "T01", show: "摩登家庭", ep: "S01E05", chars: ["Jay", "全家人"], dim: 0,
      situation: "家庭聚会气氛怪异，Jay 决定不装了——先把大家都回避的问题点名。",
      dialogue: [
        { sp: "Jay", en: "I think we should address the elephant in the room.", zh: "我觉得我们不该忽视这个明摆着的问题。" },
        { sp: "Jay", en: "Uh, Luke, Manny. Bring it in. Come on. Huddle up.", zh: "卢克、曼尼，都过来，快点，围过来。" }
      ],
      key: "Address the elephant in the room.",
      why: "elephant in the room = 大家心知肚明却避而不谈的事（大象太大反而没人看得到）。address it 就是主动点破。雅思 Part 3 谈社会问题、团队矛盾时，这句一出口就是 7 分词汇。",
      alt: ["Let's be honest about what's going on", "I think we all know what this is about"],
      words: [
        { w: "elephant in the room", zh: "明摆着却没人提的问题（名词习语）", tag: "名词" },
        { w: "address the issue", zh: "直面问题（动词 address 的正式用法）", tag: "动词" },
        { w: "huddle up", zh: "围拢过来（团队召集的说法）", tag: "短语" }
      ]
    },
    {
      id: "T02", show: "摩登家庭", ep: "S01E05", chars: ["Gloria", "对方"], dim: 1,
      situation: "有人提议把问题查清楚，Gloria 建议直接当没发生过——两种处理方式的交锋。",
      dialogue: [
        { sp: "对方", en: "I think I'm gonna find out what it is.", zh: "我觉得我该查出这到底是怎么回事。" },
        { sp: "Gloria", en: "That's the worst thing you could do. Just sweep it under the rug.", zh: "那是你最不该做的。就当没发生过，忍忍就过去了。" },
        { sp: "对方", en: "I'm not a sweeper. Trust me on this.", zh: "我可不是那种忍气吞声的人。听我的没错。" }
      ],
      key: "Sweep it under the rug.",
      why: "sweep it under the rug 字面「扫到地毯底下」= 掩盖问题。用在这里很妙：Gloria 建议逃避，对方拒绝——两种处理冲突本身就是好素材。雅思谈 conflict 时，可以用这对反义词组撑起一段对比。",
      alt: ["Let's just move past it", "Don't bring that up again"],
      words: [
        { w: "sweep it under the rug", zh: "掩盖问题（名词习语）", tag: "名词" },
        { w: "the worst thing you could do", zh: "你最不该做的事（强烈否定观点）", tag: "观点" },
        { w: "sweeper", zh: "忍气吞声的人（口语化名词）", tag: "名词" }
      ]
    },
    {
      id: "T03", show: "摩登家庭", ep: "S01E05", chars: ["对方", "另一方"], dim: 2,
      situation: "掩盖不是办法，有人坚持要把话谈开——可对方还堵着气。",
      dialogue: [
        { sp: "对方", en: "I think you two need to talk it out.", zh: "我觉得你们俩得把这件事谈开。" },
        { sp: "另一方", en: "I don't have anything to say to her.", zh: "我跟她没什么好说的。" },
        { sp: "对方", en: "She's the one with the problem, not me. Whose side are you on?", zh: "有问题的明明是她，不是我。你到底向着谁？" }
      ],
      key: "Talk it out.",
      why: "talk it out = 用对话把矛盾消化掉，比 argue（吵）高级在「解决问题导向」。对话里的僵局（一方想谈、一方拒绝）正好展示这个词的语境力量。",
      alt: ["Clear the air", "Get to the bottom of this"],
      words: [
        { w: "talk it out", zh: "把话说开（解决问题导向的动词短语）", tag: "短语" },
        { w: "Whose side are you on?", zh: "你到底站哪边？（立场质问）", tag: "句型" },
        { w: "the one with the problem", zh: "有问题的那个人（指认说法）", tag: "名词" }
      ]
    },
    {
      id: "T04", show: "摩登家庭", ep: "S01E04", chars: ["Claire", "妈妈"], dim: 2,
      situation: "说了句可能被误会的话，赶紧澄清——别想歪，我说的是另一回事。",
      dialogue: [
        { sp: "Claire", en: "I just can't give myself to him sexually.", zh: "我就是没法对他以身相许。" },
        { sp: "妈妈", en: "Okay, Mom. Did not see that coming.", zh: "得了，妈，没想到你突然说这么劲爆的。" },
        { sp: "Claire", en: "Oh, oh. Don't get me wrong. We satisfy each other down there.", zh: "不不，别误会。我们在那方面还是很和谐的。" }
      ],
      key: "Don't get me wrong.",
      why: "don't get me wrong = 先给「我要说的话可能被误解」打预防针，再澄清。雅思口语里用它引出观点很自然：Don't get me wrong, I'm not against technology — I just think we need balance. 既显真诚又有结构。",
      alt: ["Let me clarify", "To be clear, what I mean is…"],
      words: [
        { w: "Don't get me wrong", zh: "别误会（澄清型观点表达）", tag: "观点" },
        { w: "didn't see that coming", zh: "没想到会这样（口语习语）", tag: "短语" },
        { w: "clarify", zh: "澄清（动词，正式表达）", tag: "动词" }
      ]
    }
  ]
};

// 句型总表（完成页/查阅用 · 跨单元精华表达）
const COURSE_DAILY_SKELETONS = [
  { order: 1, emotion: "弱", key: "It's just that…", example: "She trusts you. It's just that weird stuff happens at concerts.", source: "摩登家庭 S01E04", dim: "软化开场" },
  { order: 2, emotion: "弱", key: "I wouldn't say…", example: "Well, I wouldn't say too much time.", source: "查理成长日记 S01E02", dim: "礼貌否定" },
  { order: 3, emotion: "弱", key: "I would love to, but…", example: "I would love to come, but I can't this weekend.", source: "卡戴珊家族 S01E02", dim: "先扬后抑" },
  { order: 4, emotion: "中等", key: "I can do this one on my own", example: "I feel like I can do this one on my own.", source: "卡戴珊家族 S01E07", dim: "争取掌控" },
  { order: 5, emotion: "中等", key: "We don't sell to retailers that…", example: "We don't sell to retailers that won't buy the entire size range.", source: "卡戴珊家族 S01E09", dim: "亮底线" },
  { order: 6, emotion: "中等", key: "I don't want anybody to have their feelings hurt", example: "I don't want anybody to have their feelings hurt or be disappointed.", source: "卡戴珊家族 S01E07", dim: "传坏消息" },
  { order: 7, emotion: "强", key: "There's not an upset bone in my body", example: "There's not an upset bone in my body because I think it went to the right person.", source: "卡戴珊家族 S01E07", dim: "传坏消息" },
  { order: 8, emotion: "中等", key: "Address the elephant in the room", example: "I think we should address the elephant in the room.", source: "摩登家庭 S01E05", dim: "点破" },
  { order: 9, emotion: "中等", key: "Sweep it under the rug", example: "Just sweep it under the rug.", source: "摩登家庭 S01E05", dim: "掩盖" },
  { order: 10, emotion: "中等", key: "Talk it out", example: "I think you two need to talk it out.", source: "摩登家庭 S01E05", dim: "谈开" }
];

// 全部单元（地图/学习流共用）
const COURSE_DAILY_UNITS = [COURSE_DAILY_UNIT1, COURSE_DAILY_UNIT2, COURSE_DAILY_UNIT3];
