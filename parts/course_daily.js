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
