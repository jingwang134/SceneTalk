// ===== 生活口语课 · 单元1「委婉反驳」剧情学习单元 =====
// 结构：intro(开场) / shows(剧集来源) / dims(不同维度的观点表达) / scenes(剧情场景序列)
// 学习体验 = 看剧学：每个场景 = 一段真实台本对话 + 情境 + 好在哪 + 同维度说法

const COURSE_DAILY_UNIT1 = {
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
        { p: "It's not that…, it's just that…", zh: "不是……而是……（澄清误会）", use: "It's not that I don't like him, it's just that we never click." }
      ],
      risk: "家庭、朋友之间最常用"
    },
    {
      name: "礼貌否定", ico: "🙂",
      exp: "不正面冲突，只表达「我这么看跟你不太一样」：",
      lines: [
        { p: "I wouldn't say…", zh: "我倒不觉得……", use: "I wouldn't say too much time." },
        { p: "I'm not sure I'd agree with that", zh: "这个我倒不一定认同", use: "I'm not sure I'd agree with that, honestly." },
        { p: "I see it a bit differently", zh: "我看得稍微有点不一样", use: "I see it a bit differently, but I get your point." }
      ],
      risk: "同事、朋友间得体"
    },
    {
      name: "先扬后抑", ico: "🎀",
      exp: "先给足热情，再讲实际难处——拒绝不伤人：",
      lines: [
        { p: "I would love to, but…", zh: "我很想去，但是……", use: "I would love to come, but I can't this weekend." },
        { p: "I wish I could, but…", zh: "我倒希望我能，但是……", use: "I wish I could help, but I'm swamped this week." },
        { p: "I'd really like to, but…", zh: "我真的很想，但是……", use: "I'd really like to join, but I've got other plans." }
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
      alt: ["The thing is…", "It's not that…, it's just that…"]
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
      alt: ["I'm not sure I'd agree with that", "I see it a bit differently"]
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
      alt: ["I mean this in the nicest way…", "No offense, but…"]
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
      alt: ["I wish I could, but…", "I'd really like to, but…"]
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
      alt: ["How come you didn't…?", "You could've at least…"]
    }
  ]
};

// 句型总表（完成页/查阅用 · 情绪弱→强）
const COURSE_DAILY_SKELETONS = [
  { order: 1, emotion: "弱", key: "It's just that…", example: "She trusts you. It's just that weird stuff happens at concerts.", source: "摩登家庭 S01E04", dim: "软化开场" },
  { order: 2, emotion: "弱", key: "I wouldn't say…", example: "Well, I wouldn't say too much time.", source: "查理成长日记 S01E02", dim: "礼貌否定" },
  { order: 3, emotion: "弱-中等", key: "Don't take this the wrong way, but…", example: "Mom, don't take this the wrong way, but why…?", source: "查理成长日记 S01E01", dim: "软化开场" },
  { order: 4, emotion: "弱", key: "I would love to, but…", example: "I would love to come, but I can't this weekend.", source: "卡戴珊家族 S01E02", dim: "先扬后抑" },
  { order: 5, emotion: "中等", key: "Why didn't you…?", example: "Why didn't you invite me? … She didn't even have a dinner.", source: "卡戴珊家族 S01E06", dim: "先扬后抑" }
];

// ===== 生活口语课 · 单元2「职场博弈」剧情学习单元（雅思 6.5+） =====
const COURSE_DAILY_UNIT2 = {
  task: "职场博弈",
  icon: "💼",
  en: "negotiation & deal-making",
  intro: "这一关，从 2 部剧 4 个场景学「职场博弈」——亮底线、摊牌、成交、拍板，看高手怎么把话说到点子上。",
  shows: ["摩登家庭", "查理成长日记"],
  dims: [
    {
      name: "亮底线", ico: "🚧",
      exp: "把不可退让的部分先说死，剩下的才有的谈：",
      lines: [
        { p: "It's non-negotiable.", zh: "这没得商量（底线不容讨论）", use: "The deadline is non-negotiable — we ship on Friday." },
        { p: "I'm not budging on this", zh: "这点我不会让步", use: "I'm not budging on the price, but I'll throw in delivery." },
        { p: "That's my final offer", zh: "这是我的最终报价", use: "That's my final offer — take it or leave it." }
      ],
      risk: "谈判中表明立场，语气坚决但不失礼"
    },
    {
      name: "摊牌开场", ico: "🎬",
      exp: "一句话把谈话拉到正题，先立框架再给理由：",
      lines: [
        { p: "Here's the deal.", zh: "听好了，事实是这样的（摊牌开场）", use: "Here's the deal: I'll cover the deposit if you handle the rent." },
        { p: "Let's cut to the chase", zh: "我们直说吧", use: "Let's cut to the chase — the budget won't stretch." },
        { p: "The bottom line is…", zh: "说到底就是……", use: "The bottom line is we need a decision by Monday." }
      ],
      risk: "职场/谈判常用，先声夺人"
    },
    {
      name: "拍板成交", ico: "🤝",
      exp: "谈成了要锁死，用确定的句式把口头约定钉住：",
      lines: [
        { p: "We got a deal?", zh: "我们成交？", use: "We got a deal? — Deal. Shake on it." },
        { p: "Shake hands on it", zh: "握手成交（一言为定）", use: "We shook hands on it, so the deal's done." },
        { p: "Consider it done", zh: "包在我身上", use: "Consider it done — I'll have it ready by noon." }
      ],
      risk: "确认口头契约，比 Yes 更有力度"
    }
  ],
  scenes: [
    {
      id: "E01", show: "摩登家庭", ep: "S01E03", chars: ["Claire", "Haley"], dim: 0,
      situation: "女儿要去朋友的婚礼借衣服，Claire 直接亮明底线——婚礼可以去，但裙子没得商量。",
      dialogue: [
        { sp: "Haley", en: "But it's a wedding for some friend of yours I never even heard of.", zh: "可那婚礼是你的朋友办的，我压根没听说过。" },
        { sp: "Claire", en: "It's non-negotiable. You can borrow a dress of Haley's again.", zh: "没得商量。裙子你可以再去跟海莉借。" },
        { sp: "Haley", en: "No.", zh: "才不要。" }
      ],
      key: "It's non-negotiable.",
      why: "negotiable 是「可商量」，non-negotiable 直接封死讨论空间——谈条件前先让对方知道哪条线碰不得，谈判才有效率。比 I won't allow it 更冷静、更有掌控感。",
      alt: ["I'm not budging on this", "That's my final offer"]
    },
    {
      id: "E02", show: "摩登家庭", ep: "S01E09", chars: ["Jay", "Phil"], dim: 1,
      situation: "Phil 追女生屡屡受挫，Jay 一句话把真相摊开——浪漫没用，实力才有用。",
      dialogue: [
        { sp: "Phil", en: "Nothing's worked.", zh: "什么招都试过了。" },
        { sp: "Jay", en: "Here's the deal. Girls don't go for all that romantic stuff. They go for power and success.", zh: "听好了，事实是这样的：女孩子不吃浪漫那一套，她们看中的是权势和成功。" }
      ],
      key: "Here's the deal.",
      why: "Here's the deal 是摊牌开场白——先宣布「我要讲真话了」，再给结论，对方会立刻竖耳朵。职场谈判、给建议都适用，比 Listen 更有分量。",
      alt: ["Let's cut to the chase", "The bottom line is…"]
    },
    {
      id: "E03", show: "查理成长日记", ep: "S01E09", chars: ["老爸", "孩子们"], dim: 2,
      situation: "老爸要砍掉架着树屋的树枝，孩子们不答应——老爸用「等价交换」谈成了交易。",
      dialogue: [
        { sp: "老爸", en: "Dog goes in, branch comes off.", zh: "小狗进屋，树枝砍掉。" },
        { sp: "老爸", en: "We got a deal?", zh: "我们成交不？" },
        { sp: "孩子们", en: "We have a deal.", zh: "成交。" }
      ],
      key: "We got a deal?",
      why: "谈判收尾的锁定句：提出交换条件后用 We got a deal? 确认，对方一旦答应就不好反悔——把口头承诺变成「已成交」。雅思 Part 2 讲谈判经历时这句点睛。",
      alt: ["Shake hands on it", "Consider it done"]
    },
    {
      id: "E04", show: "查理成长日记", ep: "S01E09", chars: ["老爸", "孩子们"], dim: 2,
      situation: "孩子们想反悔重新商量，老爸一句「已经说定了」把话钉死——拍板之后不翻盘。",
      dialogue: [
        { sp: "孩子们", en: "We changed our mind. We don't want to lose the treehouse after all.", zh: "我们改变主意了，我们一点也不想失去小树屋。" },
        { sp: "老爸", en: "It's too late. I already shook hands on it.", zh: "太迟了，我都已经和别人说定了。" },
        { sp: "孩子们", en: "Well, can we at least talk about this?", zh: "难道我们就不能再商量一下么？" }
      ],
      key: "I already shook hands on it.",
      why: "shake hands on it 字面是「握手成交」，引申为「一言为定」。用来拒绝反悔特别有画面感——谈判桌上最怕的不是谈不拢，是谈成了又翻盘。",
      alt: ["We've got a deal already", "A deal is a deal"]
    }
  ]
};

// ===== 生活口语课 · 单元3「把话说开」剧情学习单元（雅思 6.5+） =====
const COURSE_DAILY_UNIT3 = {
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
        { p: "I think we all know what this is about", zh: "我想我们都知道这是怎么回事", use: "I think we all know what this is about, so let's just say it." }
      ],
      risk: "需要勇气，但比装糊涂高效"
    },
    {
      name: "掩盖", ico: "🙈",
      exp: "假装没事发生——短痛换长痛，但有时是人之常情：",
      lines: [
        { p: "Sweep it under the rug", zh: "当没发生过，掩盖过去", use: "We can't just sweep this under the rug and pretend it's fine." },
        { p: "Let's just move past it", zh: "算了，翻篇吧", use: "Let's just move past it — no point rehashing." },
        { p: "Don't bring that up again", zh: "别再提那事了", use: "Don't bring that up again — it's water under the bridge." }
      ],
      risk: "口语场景常见；雅思里可用作对比（有人逃避 vs 有人直面）"
    },
    {
      name: "谈开", ico: "🫱",
      exp: "把矛盾摊开来谈，而不是各怀心事：",
      lines: [
        { p: "Talk it out", zh: "把话说开，谈清楚", use: "We need to talk it out before it gets worse." },
        { p: "Clear the air", zh: "把气氛缓和、把话说透", use: "Let's clear the air — I didn't mean to offend you." },
        { p: "Get to the bottom of this", zh: "把这件事的根源弄清楚", use: "We should get to the bottom of this instead of guessing." }
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
      alt: ["Let's be honest about what's going on", "I think we all know what this is about"]
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
      alt: ["Let's just move past it", "Don't bring that up again"]
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
      alt: ["Clear the air", "Get to the bottom of this"]
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
      alt: ["Let me clarify", "To be clear, what I mean is…"]
    }
  ]
};

// 全部单元（地图/学习流共用）
const COURSE_DAILY_UNITS = [COURSE_DAILY_UNIT1, COURSE_DAILY_UNIT2, COURSE_DAILY_UNIT3];
