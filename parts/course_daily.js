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
