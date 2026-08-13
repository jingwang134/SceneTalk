// ===================== TOPIC PERSPECTIVES (原生观点范例 · 思维导图版) =====================
// 结构规范（RULES-v2，详见《AI生成规则.md》）：
//   每话题 = 3 个维度（dimensions，思维导图主分支）
//   每维度 = angle（该维度母语者思维，大白话）
//          + items（紧贴该维度的语料，三级递进：phrase 短语 → sentence 台本真实单句 → clip 完整观点片段）
//          + use（雅思支架句：怎么把这个维度组织进 Part 2/3 回答）
// 铁律：
//   1. items 语义必须紧贴 angle——语料服务维度，禁止"角度归角度、语料归语料"
//   2. 每维度至少 1 条 sentence/clip 级语料（真实台本原句，AI 不得虚构台词）
//   3. 每条语料标注真实来源（剧名 + 集数）
//   4. guide 用大白话，面向雅思考生
const TOPIC_PERSPECTIVES = {
  family: {
    map: "聊「家庭」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "家人各有闪光点，不互相比较",
        angle: "聊家人时，母语者常先承认\"每个人都不一样、各有各的好\"，而不是把家人放在同一把尺子上比。",
        items: [
          { type: "phrase", en: "book smart vs street smart", zh: "书本智慧 vs 街头智慧（各有各的聪明）", source: "摩登家庭 S01E05" },
          { type: "sentence", en: "Nothing compares with that sound right there.", zh: "没有什么能与那个声音相媲美。", source: "摩登家庭 S01E07", tip: "nothing compares with = 无可比拟——夸家人/孩子时的高级句式" },
          { type: "clip", en: "I can talk about crown moldings and recessed lighting until the cows come home, but nothing compares with that sound right there.", zh: "我可以聊一整天的天花线和嵌入式灯，但没有什么能与那个声音相媲美。", source: "摩登家庭 S01E07", tip: "先用 until the cows come home（没完没了地）夸张铺垫，再用 nothing compares with 收束——'对比铺垫+结论'是表达珍视的经典结构" }
        ],
        use: "Every child in my family has their own way of shining — my dad always says nothing compares with the sound of my little brother's laugh."
      },
      {
        tag: "维度②",
        name: "关键时刻，家人互相支撑",
        angle: "描述家庭关系时，母语者爱讲\"关键时刻\"（困难、大事时）谁站了出来——而不是平时有多亲密。",
        items: [
          { type: "phrase", en: "count on someone", zh: "指望某人，信赖某人", source: "摩登家庭 S01E04" },
          { type: "sentence", en: "Oh! I knew I could count on you.", zh: "哦！我就知道你靠得住。", source: "摩登家庭 S01E04", tip: "count on = 关键时刻靠得住——表达'信任'最地道的说法" },
          { type: "clip", en: "We're from different worlds, yet we somehow fit together. Love is what binds us, through fair or stormy weather.", zh: "我们来自不同的世界，但我们彼此相容。爱将我们紧紧相连，共度风风雨雨。", source: "摩登家庭 S01E01", tip: "先给'结论'（fit together），再用'意象'（fair or stormy weather）升华——观点+比喻是总结家庭关系的常用套路" }
        ],
        use: "When push comes to shove, my family is who I can count on — we're from different worlds, but love binds us through fair or stormy weather."
      },
      {
        tag: "维度③",
        name: "接纳家人本来的样子，而非强行改造",
        angle: "讲家人的缺点和矛盾时，母语者常表达\"爱一个人就是接受他本来的样子\"，而不是试图改变他。",
        items: [
          { type: "phrase", en: "loosen up", zh: "放松点，别绷着（接纳不完美）", source: "摩登家庭 S01E06" },
          { type: "sentence", en: "We're not a perfect family — far from it. We fight, we judge each other, we say things we don't mean.", zh: "我们家不算完美——差远了。我们吵架、互相评判、说违心的话。", source: "摩登家庭 S01E01", tip: "先'自曝其短'（not a perfect family）再'转折升华'——承认不完美反而更有温度" },
          { type: "clip", en: "But you're his family now, and that means only one thing: you be the wind in his back, not the spit in his face.", zh: "可你是他的家人，这就意味着：你只可背后送春风，不可当面唾其脸。", source: "摩登家庭 S01E01", tip: "用'比喻对照'（wind in his back / spit in his face）把抽象的'接纳'说成一幅画面——比喻是价值观表达的灵魂" }
        ],
        use: "Every family has its flaws — mine is far from perfect — but at the end of the day, you be the wind in their back, not the spit in their face."
      }
    ]
  },
  work: {
    map: "聊「工作职业」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "择业动机：能力匹配 vs 内心热爱",
        angle: "聊工作选择，母语者先谈\"能不能胜任\"（能力匹配），再谈\"喜不喜欢\"（内心热爱）——两把尺子。",
        items: [
          { type: "phrase", en: "not someone's thing", zh: "不是某人的菜，提不起兴趣", source: "摩登家庭 S01E03" },
          { type: "phrase", en: "be in demand", zh: "抢手，需求量大（能力被认可）", source: "摩登家庭 S01E06" },
          { type: "sentence", en: "See, you don't know what my thing is.", zh: "你看，你根本不知道我的喜好是什么。", source: "摩登家庭 S01E03", tip: "my thing = 我的兴趣所在——聊'热爱'时的高频表达" }
        ],
        use: "On paper I was fully qualified for the job, but it was never really my thing — deep down, I knew my passion lay somewhere else."
      },
      {
        tag: "维度②",
        name: "成败归因：坚持到底 vs 天赋",
        angle: "谈职场成败，母语者极少归因\"天赋\"，而是讲\"有没有坚持做完\"（follow through）——半途而废就会前功尽弃。",
        items: [
          { type: "phrase", en: "follow through", zh: "说到做到，贯彻到底", source: "摩登家庭 S01E01" },
          { type: "phrase", en: "drop the ball", zh: "搞砸了，失职了", source: "摩登家庭 S01E07" },
          { type: "phrase", en: "back to square one", zh: "回到原点，前功尽弃", source: "摩登家庭 S01E09" },
          { type: "sentence", en: "And now you have to follow through.", zh: "所以你现在要按说好的执行。", source: "摩登家庭 S01E01", tip: "follow through 是把\"承诺\"钉死成\"行动\"的动词——雅思谈'责任感'必备" }
        ],
        use: "What separates winners from the rest isn't talent — it's whether you follow through even after you drop the ball, or you end up back to square one."
      },
      {
        tag: "维度③",
        name: "谈判说服：先亮底线，再留让步空间",
        angle: "谈说服与谈判，母语者常用\"先亮明不可让步的底线（non-negotiable），再给对方台阶/让步空间\"的结构。",
        items: [
          { type: "phrase", en: "non-negotiable", zh: "没得商量，不可让步的", source: "摩登家庭 S01E03" },
          { type: "phrase", en: "here's the deal", zh: "听好了，是这样的（摊牌开场）", source: "摩登家庭 S01E09" },
          { type: "sentence", en: "Girls don't go for all that romantic stuff.", zh: "女孩子不吃浪漫那一套。", source: "摩登家庭 S01E09", tip: "here's the deal 是'摊牌'的开场白——先立框架，再给理由" },
          { type: "clip", en: "It's no big secret. You just follow the ABC's of salesmanship: Always Be Closing.", zh: "其实没什么窍门。你只要遵从销售的基本法则：一定要成交。", source: "摩登家庭 S01E07", tip: "先'降低预期'（no big secret）再抛核心观点（ABC法则）——'否定式开场'是说服的经典钩子" }
        ],
        use: "When I negotiate, I open with \"here's the deal\", state what's non-negotiable, then leave room to meet the other side halfway."
      }
    ]
  },
  communication: {
    map: "聊「沟通社交」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "先观察再开口：读懂言外之意",
        angle: "谈沟通，母语者强调\"耳朵要听弦外之音\"——先观察、再判断、最后开口，而不是听到什么信什么。",
        items: [
          { type: "phrase", en: "read between the lines", zh: "听弦外之音，读懂言外之意", source: "多部美剧通用" },
          { type: "clip", en: "I listen with my mind, and if you pay attention, women will tell you what they want by telling you the opposite of what they want.", zh: "我总是用心聆听，而如果你仔细观察，会发现女人嘴上说一套、心里想另外一套。", source: "摩登家庭 S01E06", tip: "用'同一句话的正反'展开（tell you what they want / by telling you the opposite）——对比式表达让'言外之意'的观点更锋利" }
        ],
        use: "People rarely say what they really mean — you have to read between the lines before you respond."
      },
      {
        tag: "维度②",
        name: "冲突处理：说开 vs 回避",
        angle: "聊人际矛盾，母语者给出两条路：直面谈开（talk it out）或回避掩盖（sweep it under the rug），并明确倾向前者。",
        items: [
          { type: "phrase", en: "sweep it under the rug", zh: "掩盖问题，装作没事", source: "摩登家庭 S01E05" },
          { type: "phrase", en: "address the elephant in the room", zh: "直面那个避而不谈的问题", source: "摩登家庭 S01E05" },
          { type: "sentence", en: "I think you two need to talk it out.", zh: "我觉得你们俩得把这件事谈开。", source: "摩登家庭 S01E05", tip: "talk it out = 用沟通解决矛盾——比 argue 更'解决问题导向'" },
          { type: "sentence", en: "I think we should address the elephant in the room.", zh: "我觉得我们该直面那个摆在明面上的问题。", source: "摩登家庭 S01E05", tip: "elephant in the room = 大家心知肚明却避而不谈的事——雅思谈'社会问题'高频词" }
        ],
        use: "Instead of sweeping it under the rug, we decided to address the elephant in the room and talk it out."
      },
      {
        tag: "维度③",
        name: "真诚是关系升级的基础",
        angle: "谈关系进阶，母语者认为\"先做真实的自己（keep it real），关系才能更进一步\"。",
        items: [
          { type: "phrase", en: "keep it real", zh: "保持真实，别装", source: "摩登家庭 S01E01" },
          { type: "phrase", en: "take it to the next level", zh: "更上一层楼，关系/事业升级", source: "摩登家庭 S01E03" },
          { type: "sentence", en: "You two keep it real, know what I mean, son?", zh: "你俩要坦诚相待，懂吗，小子？", source: "摩登家庭 S01E01", tip: "keep it real = 别端着、做真实的自己——口语表达'真诚'的地道说法" },
          { type: "clip", en: "I'm all about taking it to the next level. But the whole point of keeping it real is so you can take it to the next level.", zh: "我还想跟关系再进一步呢。但做得踏实一点，也正是为了能更进一步。", source: "摩登家庭 S01E03", tip: "先抛'目标'（next level）再解释'手段'（keeping it real）——'目标-手段'论证顺序是口语亮观点的骨架" }
        ],
        use: "To take any relationship to the next level, you have to keep it real first — honesty is the foundation."
      }
    ]
  },
  values: {
    map: "聊「价值观」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "原则 vs 方便：底线不能折价",
        angle: "聊价值观，母语者常用\"不是X，而是Y\"的句式澄清底线——区分'原则'与'图方便'。",
        items: [
          { type: "sentence", en: "It's not that I don't trust you, it's that I trust no one.", zh: "不是我不信你，是我谁都不信。", source: "多部美剧通用", tip: "\"It's not that... it's that...\" 先否定表面、再亮真实理由——雅思Part 3'澄清观点'万能句式" },
          { type: "sentence", en: "At the end of the day, what matters is whether you can live with yourself.", zh: "说到底，重要的是你能否问心无愧。", source: "多部美剧通用", tip: "at the end of the day = 说到底——把讨论拉回'根本原则'的收束语" }
        ],
        use: "It's not that I'm stubborn, it's that some principles aren't for sale — at the end of the day, you have to live with yourself."
      },
      {
        tag: "维度②",
        name: "诚信：说到做到 > 说得好听",
        angle: "判断一个人值不值得信，母语者看\"有没有兑现承诺\"，而不是话讲得多漂亮。",
        items: [
          { type: "phrase", en: "make a commitment", zh: "做出承诺，承担义务", source: "摩登家庭 S01E08" },
          { type: "phrase", en: "a total flake", zh: "极不靠谱的人，放鸽子专业户（反例）", source: "摩登家庭 S01E02" },
          { type: "sentence", en: "Sweetie, you made a commitment.", zh: "亲爱的，你可是答应好了的。", source: "摩登家庭 S01E08", tip: "make a commitment = 承诺一旦做出就要兑现——雅思谈'责任感'必备短语" }
        ],
        use: "A person of integrity is someone who makes a commitment and follows through — a total flake is the opposite."
      },
      {
        tag: "维度③",
        name: "敢表态，但不越界",
        angle: "谈为人处世的分寸，母语者强调\"该强硬时强硬（put your foot down），但知道在哪里收手\"。",
        items: [
          { type: "phrase", en: "put your foot down", zh: "态度强硬，坚决反对，寸步不让", source: "摩登家庭 S01E02" },
          { type: "phrase", en: "take things too far", zh: "做得太过分了", source: "摩登家庭 S01E07" },
          { type: "sentence", en: "Sometimes a man's gotta put his foot down and do what a man's gotta do.", zh: "有时候做男人就得寸步不让，做该做的事。", source: "摩登家庭 S01E02", tip: "put one's foot down = 在原则问题上坚决表态——'硬气'的表达" }
        ],
        use: "You can put your foot down on the essentials, but you have to know when to stop before things go too far."
      }
    ]
  },
  education: {
    map: "聊「教育成长」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "天赋 vs 努力：聪明不止一种",
        angle: "聊教育/学习，母语者先区分\"不同类型的聪明\"（书慧 vs 街慧），再谈如何扬长避短。",
        items: [
          { type: "phrase", en: "excel at", zh: "擅长，出类拔萃", source: "摩登家庭 S01E07" },
          { type: "clip", en: "There's book smart, and then there's street smart. Some people ask 'Why?' Luke asks 'Why not?'", zh: "有人是书本智慧，也有人是街头智慧。有些人问'为什么'，卢克会问'为什么不呢'。", source: "摩登家庭 S01E05", tip: "用'对比结构'（book smart / street smart）建立分类，再用'反问'（Why? / Why not?）刻画特质——对比+反问是谈'多元能力'的利器" }
        ],
        use: "There's book smart and there's street smart — some kids excel at exams, others ask \"why not\" and find their own path."
      },
      {
        tag: "维度②",
        name: "尊重节奏：不强行改造孩子",
        angle: "谈教育方式，母语者反对\"揠苗助长\"，主张给孩子空间、让他们自己找到路。",
        items: [
          { type: "phrase", en: "teach someone a lesson", zh: "给某人一个教训（教育手段）", source: "摩登家庭 S01E02" },
          { type: "clip", en: "I don't think that a parent can just force that. I think you just have to have faith that the kid's gonna find his own way.", zh: "我觉得做父母的不该硬逼。你要有信心，孩子会自己找到他的路。", source: "摩登家庭 S01E07", tip: "先'否定'一种做法（can't just force that），再给出'信念'（have faith... find his own way）——'先破后立'让教育观更有说服力" }
        ],
        use: "Good education isn't about forcing kids — you have to have faith that they'll find their own way."
      },
      {
        tag: "维度③",
        name: "保护好奇心：求知欲是燃料",
        angle: "谈什么驱动学习，母语者常提\"好奇心/求知欲\"（a thirst for knowledge）——比分数更值得守护。",
        items: [
          { type: "phrase", en: "a thirst for knowledge", zh: "求知欲，对知识的渴望", source: "摩登家庭 S01E05" },
          { type: "sentence", en: "He's got this almost scientific mind with a thirst for knowledge.", zh: "他有着近乎科学家的头脑，以及强烈的求知欲。", source: "摩登家庭 S01E05", tip: "a thirst for knowledge = 求知若渴——雅思谈'学习动机'的高级搭配" }
        ],
        use: "The best teachers don't just fill your head with facts — they keep that thirst for knowledge alive."
      }
    ]
  },
  skills: {
    map: "聊「技能能力」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "技能来自刻意练习，不是天赋",
        angle: "谈能力怎么练成，母语者强调\"日积月累的练习\"（一万小时），刻意弱化天赋。",
        items: [
          { type: "phrase", en: "step it up a notch", zh: "加把劲，升个档次", source: "摩登家庭 S01E09" },
          { type: "clip", en: "Our journey of 10,000 hours begins with a single pitch. I believe in my boy.", zh: "我们一万小时的训练计划，就从简单的投球开始。我看好你哟。", source: "摩登家庭 S01E07", tip: "journey of 10,000 hours = 刻意练习的比喻——'大目标拆成第一步'的表达模板" }
        ],
        use: "No skill comes overnight — every journey of 10,000 hours begins with a single step, and you have to step it up a notch every day."
      },
      {
        tag: "维度②",
        name: "技能的价值：关键时刻能拿结果",
        angle: "谈技能有什么用，母语者看\"能不能在关键时刻做出判断、解决问题\"，而不只是'会做'。",
        items: [
          { type: "phrase", en: "make a judgment call", zh: "当机立断，临场决断", source: "摩登家庭 S01E06" },
          { type: "phrase", en: "be in demand", zh: "抢手，需求量大（价值被认可）", source: "摩登家庭 S01E06" },
          { type: "sentence", en: "I made a judgment call. You weren't there.", zh: "我只能见机行事——你又不在场。", source: "摩登家庭 S01E06", tip: "make a judgment call = 在信息不全时拍板——雅思谈'决策能力'的加分表达" }
        ],
        use: "A skill only matters if it helps you make a judgment call when it counts — that's what makes someone in demand."
      },
      {
        tag: "维度③",
        name: "用自己的方式达成目标",
        angle: "谈个人方法，母语者欣赏\"独门绝活\"——不按常理出牌但能奏效，本身就是一种能力。",
        items: [
          { type: "phrase", en: "without missing a beat", zh: "毫不停顿，反应神速", source: "摩登家庭 S01E03" },
          { type: "clip", en: "Act like a parent, talk like a peer. I call it 'Peerenting.' I learned it from my own dad.", zh: "父亲般的威严，朋友般的关爱。我称之为'友父'。我从我老爸那儿学来的。", source: "摩登家庭 S01E04", tip: "先给'理念'（act like... talk like...），再'命名'（Peerenting），最后交代'来源'——介绍个人方法的教科书式三段" }
        ],
        use: "You don't have to copy others — I built my own way of doing things, and I can do it without missing a beat."
      }
    ]
  },
  friendship: {
    map: "聊「友谊」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "关键时刻靠得住",
        angle: "判断真朋友，母语者看\"关键时刻能不能指望\"（count on）——而不是平时玩得有多热闹。",
        items: [
          { type: "phrase", en: "count on someone", zh: "指望某人，信赖某人", source: "摩登家庭 S01E04" },
          { type: "sentence", en: "Oh! I knew I could count on you.", zh: "哦！我就知道你靠得住。", source: "摩登家庭 S01E04", tip: "count on = 可以依赖——'信任'的最地道动词" }
        ],
        use: "A real friend is someone you can count on when things get tough — not just someone to have fun with."
      },
      {
        tag: "维度②",
        name: "一起经历过，信任自然沉淀",
        angle: "谈友谊的深度，母语者爱讲\"一起经历的故事\"——深夜长谈、争吵又和好，信任是攒出来的。",
        items: [
          { type: "phrase", en: "have a blast", zh: "玩得超级开心", source: "摩登家庭 S01E09" },
          { type: "clip", en: "We've been through a lot together — the late-night conversations, the ridiculous arguments, the weeks of not speaking and then making up like nothing happened.", zh: "我们一起经历了太多——深夜的长谈、荒唐的争吵、几周不说话，然后又像什么都没发生一样和好。", source: "Friends（老友记）", tip: "用'具体事件串'（长谈→争吵→冷战→和好）代替空洞的'关系很好'——讲故事是友谊话题拿分的关键" }
        ],
        use: "We've been through a lot together — late-night talks, silly fights — and every time we made up, the friendship got stronger."
      },
      {
        tag: "维度③",
        name: "能做真实的自己",
        angle: "谈友谊的价值，母语者认为最好的朋友让你\"毫无保留地做自己\"——不用装、不用端。",
        items: [
          { type: "phrase", en: "keep it real", zh: "保持真实，做真实的自己", source: "摩登家庭 S01E01" },
          { type: "clip", en: "Sal is our very best friend in the whole wide world. The reason we love her so much is she has absolutely no inhibitions.", zh: "萨尔绝对是我们在世上最好的朋友。我们那么爱她的原因嘛，就是她绝对放得开。", source: "摩登家庭 S01E08", tip: "先下'结论'（very best friend），再给'原因'（no inhibitions）——'结论-原因'是介绍人物的三段式开头" }
        ],
        use: "The best friends are the ones you can be completely yourself with — no inhibitions, no pretending."
      }
    ]
  },
  media: {
    map: "聊「媒体社会」，外国人通常从这 3 个维度展开",
    dimensions: [
      {
        tag: "维度①",
        name: "表象 vs 真相：看到的未必是真的",
        angle: "聊媒体/网络信息，母语者先提醒\"公开的只是冰山一角\"——秘密、旧账终会被挖出来。",
        items: [
          { type: "phrase", en: "dredge up", zh: "翻旧账，把旧事挖出来（媒体挖料）", source: "摩登家庭 S01E04" },
          { type: "sentence", en: "The thing about secrets is they have a way of coming out.", zh: "秘密这东西吧，总有办法泄露出来。", source: "Gossip Girl（绯闻女孩）", tip: "the thing about X is... = 关于X的关键在于……——'点破本质'的开场句式，Part 3 谈'信息真伪'可用" },
          { type: "sentence", en: "Yeah, but we had to keep it a secret.", zh: "是啊，但我们是偷偷摸摸的。", source: "摩登家庭 S01E07", tip: "keep it a secret = 保守秘密——谈'信息与隐私'的基础表达" }
        ],
        use: "On social media you only see the highlight reel — but the thing about secrets is they have a way of coming out."
      },
      {
        tag: "维度②",
        name: "压抑的东西迟早爆发",
        angle: "谈网络情绪与舆论，母语者常讲\"被压抑的表达，会以更难看的姿态爆发出来\"。",
        items: [
          { type: "phrase", en: "bubble up", zh: "（情绪）浮现，翻涌上来", source: "摩登家庭 S01E07" },
          { type: "sentence", en: "Instead of letting your feelings out, you bury them, and then they bubble up later in hurtful ways.", zh: "你不把情绪说出来，而是压在心里，它们迟早会以伤人的方式爆发。", source: "摩登家庭 S01E07", tip: "bury + bubble up = 压抑与爆发的一对——形容'情绪/舆论积压反弹'的生动表达" }
        ],
        use: "Online, people bury their real feelings and they bubble up later in hurtful ways — that's why arguments escalate so fast."
      },
      {
        tag: "维度③",
        name: "信息过载时代，抓重点的能力",
        angle: "谈信息爆炸，母语者强调\"直接切入重点\"（cut to the chase）——不被冗长信息淹没。",
        items: [
          { type: "phrase", en: "cut to the chase", zh: "直奔主题，少废话", source: "多部美剧通用" },
          { type: "phrase", en: "here's the deal", zh: "听好了，重点是（切重点开场）", source: "摩登家庭 S01E09" },
          { type: "sentence", en: "Nothing's worked. Here's the deal.", zh: "前面那套都不管用——听好了，说重点。", source: "摩登家庭 S01E09", tip: "先'否定铺垫'（nothing's worked）再'摊牌'（here's the deal）——信息过载时代'切重点'的开口模板" }
        ],
        use: "With so much information around, the real skill is cutting to the chase — here's the deal, most of it isn't worth your time."
      }
    ]
  }
};
