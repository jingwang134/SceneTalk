// ===== 生活口语课 · 单元1「委婉反驳」语料卡（卡片版 · 一卡一关键说法）=====
// schema: meta / key(关键说法) / dialogue(原台词,含高亮) / explain(解释:core核心短语+desc)
//         / extends(同类说法) / apply(应用:core+example) / tags(emotion·formality·risk) / practice
// 卡片序列 order 已按「情绪强度弱→强 + 来源穿插」人工排定（美剧3 + 真人秀2）

const COURSE_DAILY_UNIT1 = [
  {
    id: "D01", task: "委婉反驳", order: 1,
    meta: { type: "tv_drama", show: "摩登家庭", ep: "S01E04", chars: ["Phil", "Alex"] },
    key: "It's just that…",
    dialogue: [
      { sp: "Alex", en: "Mom just doesn't trust me, and it's not fair.", zh: "妈妈就是不相信我，这不公平。" },
      { sp: "Phil", en: "She trusts you. It's just that weird stuff happens at concerts.", zh: "她相信你，只是演唱会那地方太容易出乱子。" }
    ],
    explain: {
      core: "先肯定，再补一刀",
      desc: "不直接说对方错了——先给个台阶（She trusts you），再用 it's just that 引出真实原因。反驳的刀藏在软垫后面。"
    },
    extends: [
      { p: "The thing is…", zh: "重点是……（引出真正原因）" },
      { p: "It's not that…, it's just that…", zh: "不是……而是……（澄清误会）" }
    ],
    order_sentence: "It's just that weird stuff happens.",
    cloze_en: "She trusts you. ___ weird stuff happens at concerts.",
    apply: {
      core: "有保留地说出不同意见",
      example: "I don't mean to criticize, it's just that the budget needs more thought. 我不是想挑刺，只是预算这块还得再想想。",
      where: "雅思 Part 3 表达反对意见时，比 I disagree 高级；生活里圆场必备。"
    },
    tags: { emotion: "弱", formality: "informal-family", risk: "家庭对话场景，正式写作/考场慎用" },
    practice: {
      cloze: { prompt: "她不是不信任你，只是演唱会那地方容易出乱子。", answer: "It's just that", distractors: ["Just because", "Only if", "Even though"] },
      rewrite: "爸爸没批评你乱花钱，只是希望你先存一笔应急金——用 It's just that 替他圆场。"
    }
  },
  {
    id: "D02", task: "委婉反驳", order: 2,
    meta: { type: "tv_drama", show: "查理成长日记", ep: "S01E02", chars: ["奶奶", "妈妈"] },
    key: "I wouldn't say…",
    dialogue: [
      { sp: "奶奶", en: "You spent a little too much time with Charlie, and you're ready to hand her over early.", zh: "你一定是照顾Charlie时间太长了，然后想早点把她交给我吧。" },
      { sp: "妈妈", en: "Well, I wouldn't say too much time.", zh: "这个，其实也不能算是时间太长了吧。" },
      { sp: "奶奶", en: "Well, I am ready too, so let me at her.", zh: "不过我也想接手了，所以还是我来照看她吧。" }
    ],
    explain: {
      core: "我不觉得，但我不说你错",
      desc: "I wouldn't say 是把对方的判断轻轻拨开——不正面否认，只是表达自己没这么看。比 No 柔和，比沉默有立场。"
    },
    extends: [
      { p: "I'm not sure I'd agree with that", zh: "这个我倒不一定认同" },
      { p: "I see it a bit differently", zh: "我看得稍微有点不一样" }
    ],
    order_sentence: "I wouldn't say too much time.",
    cloze_en: "Well, ___ too much time.",
    apply: {
      core: "礼貌地不认同对方的定性",
      example: "同事说这方案太冒险——I wouldn't say risky, I'd say bold. 我不觉得冒险，我觉得是有魄力。",
      where: "职场/朋友间被贴标签时，先拨开标签再给理由。"
    },
    tags: { emotion: "弱", formality: "informal-family", risk: "家庭拌嘴用语，考试不适用" },
    practice: {
      cloze: { prompt: "其实也不能算是时间太长了吧。", answer: "I wouldn't say", distractors: ["I don't say", "I won't say", "I can't say"] },
      rewrite: "同事说你这个方案太冒险，你不完全认同——用 I wouldn't say 回应。"
    }
  },
  {
    id: "D03", task: "委婉质疑", order: 3,
    meta: { type: "tv_drama", show: "查理成长日记", ep: "S01E01", chars: ["Charlie", "妈妈"] },
    key: "Don't take this the wrong way, but…",
    dialogue: [
      { sp: "Charlie", en: "Mom, don't take this the wrong way, but why did you guys have to have another baby?", zh: "妈妈，别误会我的意思，但你们为什么非得生第四个宝宝呢？" },
      { sp: "妈妈", en: "Well, because three kids was just too easy.", zh: "那个嘛，因为三个孩子太好养了。（反讽）" }
    ],
    explain: {
      core: "先说别误会，再开口",
      desc: "明知要说的话可能冒犯，先给一句缓冲——把话的刺包起来再递出去。对方听到的是问题，不是指责。"
    },
    extends: [
      { p: "I mean this in the nicest way…", zh: "我是好意说的……" },
      { p: "No offense, but…", zh: "无意冒犯，但是……" }
    ],
    order_sentence: "Don't take this the wrong way, but why?",
    cloze_en: "Mom, ___, but why did you have another baby?",
    apply: {
      core: "给可能冒犯的话加保险",
      example: "Don't take this the wrong way, but I think your idea needs a backup plan. 别误会我的意思，不过我觉得你的方案得有个备选。",
      where: "给朋友/同事提尖锐意见前，先上缓冲。注意：还是有点冒犯性，只对亲近的人用。"
    },
    tags: { emotion: "弱-中等", formality: "informal-family", risk: "带点冒犯性，仅限亲近的人，考场禁用" },
    practice: {
      cloze: { prompt: "别误会我的意思，但我觉得这个方案行不通。", answer: "Don't take this the wrong way", distractors: ["Don't put it this way", "Don't say it this way", "Don't make it wrong"] },
      rewrite: "想给室友提意见但又怕伤感情——用这句缓冲。"
    }
  },
  {
    id: "D04", task: "委婉拒绝", order: 4,
    meta: { type: "reality_show", show: "卡戴珊家族", ep: "S01E02", chars: ["Kim", "对方"] },
    key: "I would love to, but…",
    dialogue: [
      { sp: "Kim", en: "I would love to come and do a skit with you more than anything, but I feel like I can't go with Scott this weekend.", zh: "我特别特别想过去跟你一起演个小品，但我觉得这个周末我没法跟斯科特一起去。" },
      { sp: "对方", en: "Yeah, and we already invited him. I feel bad. I would totally disinvite for you.", zh: "对，而且我们已经邀请他了。我觉得挺不好意思的。我完全愿意为你把他推掉。" },
      { sp: "Kim", en: "No, I know, but I feel bad disinviting him.", zh: "不，我知道，但我觉得把人家推掉不太好。" }
    ],
    explain: {
      core: "先给热情，再讲难处",
      desc: "拒绝的公式：I would love to（热情）→ but（难处）。对方先吃到糖，再听到拒绝，不会觉得被敷衍。"
    },
    extends: [
      { p: "I'd really like to, but…", zh: "我真的很想去，但是……" },
      { p: "I wish I could, but…", zh: "我倒是希望我能去，但是……" }
    ],
    order_sentence: "I would love to, but I can't this weekend.",
    cloze_en: "___ come, but I can't this weekend.",
    apply: {
      core: "拒绝邀约而不伤感情",
      example: "I would love to come to your party, but I have to finish a report tonight. 我特别想去你的派对，但今晚得赶完报告。",
      where: "朋友邀约/同事搭伙，先扬后抑最得体。"
    },
    tags: { emotion: "弱", formality: "informal-friend", risk: "朋友间客套话，面试等正式场合慎用" },
    practice: {
      cloze: { prompt: "我特别想去你的派对，但今晚我得加班。", answer: "I would love to", distractors: ["I would like it", "I want to love", "I'd love it that"] },
      rewrite: "朋友邀你周末露营，你有事去不了——用这个句式先扬后抑。"
    }
  },
  {
    id: "D05", task: "抱怨式反驳", order: 5,
    meta: { type: "reality_show", show: "卡戴珊家族", ep: "S01E06", chars: ["Kim", "对方"] },
    key: "Why didn't you…?",
    dialogue: [
      { sp: "Kim", en: "Why didn't you invite me to your birthday?", zh: "你为什么不邀请我参加你的生日？" },
      { sp: "对方", en: "I didn't really invite anyone to my birthday.", zh: "我本来就没请任何人来我的生日。" },
      { sp: "Kim", en: "She didn't even have a dinner. She had a birthday party at a club.", zh: "她根本没办生日晚宴，她是在夜店办的生日派对。" }
    ],
    explain: {
      core: "质问开场，摆事实跟进",
      desc: "三步推进的强反驳：Why didn't you（质问）→ 对方解释 → 摆事实推翻（didn't even…）。情绪升级，但逻辑还在。"
    },
    extends: [
      { p: "How come you didn't…?", zh: "你怎么没……？（口语质问）" },
      { p: "You could've at least…", zh: "你至少也该……（不满）" }
    ],
    order_sentence: "Why didn't you tell me earlier?",
    cloze_en: "___ invite me to your birthday?",
    apply: {
      core: "熟人之间直接表达不满",
      example: "Why didn't you tell me earlier? I could've helped. 你为什么不早点告诉我？我本来能帮忙的。",
      where: "只对熟人用，情绪浓度高；考场/职场禁用。"
    },
    tags: { emotion: "中等", formality: "informal-family", risk: "带情绪质问，仅限熟人场合，考场禁用" },
    practice: {
      cloze: { prompt: "你为什么不早点告诉我？", answer: "Why didn't you", distractors: ["Why you didn't", "Why not you", "Why haven't you been"] },
      rewrite: "室友没喊你一起拼单，你有点不高兴——用 Why didn't you 开场。"
    }
  }
];

// 句型总表（页底查阅用，按情绪强度 弱→强 机械排序）
const COURSE_DAILY_SKELETONS = [
  { order: 1, emotion: "弱", key: "It's just that…", example: "She trusts you. It's just that weird stuff happens at concerts.", source: "摩登家庭 S01E04", card: "D01" },
  { order: 2, emotion: "弱", key: "I wouldn't say…", example: "Well, I wouldn't say too much time.", source: "查理成长日记 S01E02", card: "D02" },
  { order: 3, emotion: "弱-中等", key: "Don't take this the wrong way, but…", example: "Mom, don't take this the wrong way, but why…?", source: "查理成长日记 S01E01", card: "D03" },
  { order: 4, emotion: "弱", key: "I would love to, but…", example: "I would love to come, but I feel like I can't this weekend.", source: "卡戴珊家族 S01E02", card: "D04" },
  { order: 5, emotion: "中等", key: "Why didn't you…?", example: "Why didn't you invite me? … She didn't even have a dinner.", source: "卡戴珊家族 S01E06", card: "D05" }
];
