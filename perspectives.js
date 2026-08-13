// ===================== TOPIC PERSPECTIVES (原生观点范例) =====================
// 每个话题：切入角度（angles，大白话）+ 原生观点片段（clips，来自真实台本）
// video 字段可填剪辑后的视频文件名（放 videos/ 目录），空则显示占位
const TOPIC_PERSPECTIVES = {
  family: {
    angles: [
      "每个孩子发光的时刻不一样，天赋有早晚，不宜互相比较",
      "关键时刻家人互相支撑（when push comes to shove），比'完美'更重要",
      "接纳家人的本来样子（flaws and all），而不是强行改造"
    ],
    clips: [
      {
        source: "摩登家庭 S01E01",
        scene: "结尾旁白：Jay 看着全家人，总结这集的主题",
        video: "",
        english: "We're from different worlds, yet we somehow fit together. Love is what binds us, through fair or stormy weather.",
        chinese: "我们来自不同的世界，但我们彼此相容。爱将我们紧紧相连，共度风风雨雨。",
        tip: "注意：先用'观点'（we fit together）收束，再用'比喻'（fair or stormy weather）升华——观点+意象是母语者总结的常用套路。"
      },
      {
        source: "摩登家庭 S01E02",
        scene: "Jay 藏起儿子的自行车想给他个教训，向 Claire 解释",
        video: "",
        english: "And I know that sounds kind of rough, but sometimes it's a dad's job to be the tough guy.",
        chinese: "我知道这手段有点恶劣，但有时候做爹的就要狠一些。",
        tip: "注意：先承认自己的做法'听起来不好'（让步），再给出理由——先抑后扬，让观点更有说服力。"
      }
    ]
  },
  work: {
    angles: [
      "谈工作，外国人多从'能力匹配 vs 内心热爱'切入",
      "职场成败常归因于'有没有坚持到底'（follow through），而不是天赋",
      "谈判/说服时：先亮底线（put your foot down），再谈让步空间（meet halfway）"
    ],
    clips: [
      {
        source: "摩登家庭 S01E07",
        scene: "Jay 教 Phil 做房产销售的秘诀",
        video: "",
        english: "It's no big secret. You just follow the ABC's of salesmanship: Always Be Closing.",
        chinese: "其实没什么窍门。你只要遵从销售的基本法则：一定要成交。",
        tip: "注意：先'降低预期'（no big secret），再抛核心观点——用'否定式开场'抓住注意力。"
      }
    ]
  },
  communication: {
    angles: [
      "谈沟通，外国人多强调'先观察再开口'，读懂言外之意（read between the lines）",
      "冲突处理的两条路：说开（talk it out）vs 回避（sweep it under the rug）",
      "真诚（keep it real）是关系升级（take it to the next level）的基础"
    ],
    clips: [
      {
        source: "摩登家庭 S01E06",
        scene: "Phil 炫耀自己懂女人心思，向 Claire 解释",
        video: "",
        english: "I listen with my mind, and if you pay attention, women will tell you what they want by telling you the opposite of what they want.",
        chinese: "我总是用心聆听，而如果你仔细观察，会发现女人嘴上说一套、心里想另外一套。",
        tip: "注意：先给核心观点，再用'同一句话的正反'展开（tell you what they want / by telling you the opposite）——对比式表达让观点更锋利。"
      },
      {
        source: "摩登家庭 S01E03",
        scene: "Phil 想和未来女婿搞好关系，解释自己的理念",
        video: "",
        english: "I'm all about taking it to the next level. But the whole point of keeping it real is so you can take it to the next level.",
        chinese: "我还想跟他培养超亲密关系呢。但做得踏实一点，也正是为了能发展超亲密关系。",
        tip: "注意：先抛出'目标'，再解释'为什么必须这样做'——'目标-手段'的论证顺序，是口语表达观点的常见结构。"
      }
    ]
  },
  values: {
    angles: [
      "谈价值观，外国人多讲'原则 vs 方便'的取舍",
      "诚信：说到做到（follow through）比说得好听更重要",
      "关键时刻敢表态（put your foot down），但不轻易越界（take things too far）"
    ],
    clips: [
      {
        source: "摩登家庭 S01E01",
        scene: "Gloria 劝 Jay 对继子 Manny 温柔些，引用母亲的话",
        video: "",
        english: "But you're his family now, and that means only one thing: you be the wind in his back, not the spit in his face. It's something my mom always says.",
        chinese: "可你是他的家人，这就意味着：你只可背后送春风，不可当面唾其脸。这是我妈常挂嘴边的话。",
        tip: "注意：用'比喻'（wind in his back / spit in his face）表达抽象价值观，再点明出处（my mom always says）——比喻+出处让观点更可信、更有温度。"
      }
    ]
  },
  education: {
    angles: [
      "谈教育，外国人多从'天赋 vs 努力'切入（book smart vs street smart）",
      "反对一刀切标准：每个孩子有自己的节奏",
      "教育不是灌输，而是保护好奇心（a thirst for knowledge）"
    ],
    clips: [
      {
        source: "摩登家庭 S01E07",
        scene: "Phil 解释为什么不想逼儿子 Luke 练一万小时棒球",
        video: "",
        english: "I don't think that a parent can just force that. I think you just have to have faith that the kid's gonna find his own way.",
        chinese: "可我不喜欢揠苗助长。我觉得你只要有信心，孩子们会发现自己的闪光点。",
        tip: "注意：先'否定'一种做法（can't just force that），再给出'自己的信念'（have faith...find his own way）——先破后立，观点层次清晰。"
      },
      {
        source: "摩登家庭 S01E05",
        scene: "旁白评价 Luke 的好奇心和 Claire 的反应",
        video: "",
        english: "There's book smart, and then there's street smart. Some people ask 'Why?' Luke asks 'Why not?'",
        chinese: "有人是读书大智慧，也有人是市井小聪明。有些人会问'为什么'，但卢克会问'为什么不呢'。",
        tip: "注意：用'对比结构'（book smart / street smart）建立分类，再用'反问'（Why? / Why not?）点出人物特质——对比+反问是刻画观点的利器。"
      }
    ]
  },
  skills: {
    angles: [
      "谈技能，外国人多从'刻意练习 vs 天赋'切入",
      "技能的价值在于解决问题、拿到结果（get results），不只是'会做'",
      "用自己的方式达成目标（不按常理出牌）也是一种能力"
    ],
    clips: [
      {
        source: "摩登家庭 S01E04",
        scene: "Phil 介绍自己独创的'友父'教育法",
        video: "",
        english: "Act like a parent, talk like a peer. I call it 'Peerenting.' I learned it from my own dad.",
        chinese: "父亲般的威严，朋友般的关爱。我称之为'友父'。我从我老爸那儿学来的。",
        tip: "注意：先给'理念'（act like...talk like...），再'命名'（Peerenting），最后交代'来源'——理念+命名+来源，是介绍个人方法的标准结构。"
      }
    ]
  },
  friendship: {
    angles: [
      "谈友谊，外国人多从'关键时刻是否靠得住'（count on）切入",
      "真正的友谊不需要时刻联系，但需要信任",
      "友谊的价值在于能'做自己'（keep it real）"
    ],
    clips: [
      {
        source: "摩登家庭 S01E08",
        scene: "Mitchell 介绍他们最好的朋友 Sal",
        video: "",
        english: "Sal is our very best friend in the whole wide world. The reason we love her so much is she has absolutely no inhibitions.",
        chinese: "萨尔绝对是我们在世上最好的朋友。我们那么爱她的原因嘛，就是她绝对放得开。",
        tip: "注意：先下'结论'（very best friend），再给'原因'（no inhibitions），后面还会举具体例子——'结论-原因-例子'是介绍人物的三段式。"
      }
    ]
  },
  media: {
    angles: [
      "谈媒体，外国人多从'信息真实性 vs 流量'切入",
      "社交媒体展示的是精选（highlight reel），不是全部",
      "信息过载时代，辨别能力是稀缺资源"
    ],
    clips: []
  }
};
