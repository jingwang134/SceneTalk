# -*- coding: utf-8 -*-
# 为表达库建立「话题 → 维度」二级分类：data.js 加 TOPIC_DIMENSIONS + 每条加 dimension 字段
import io, re

DATA = 'data.js'
c = io.open(DATA, encoding='utf-8').read()

# 1) 维度体系定义
DIMS_DEF = '''// ===================== TOPIC DIMENSIONS (话题二级分类·维度) =====================
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
'''

# 2) 179 条表达的维度映射（id -> dimension key）
M = {
# communication
2:"discretion",3:"express",13:"discretion",14:"conflict",18:"conflict",22:"discretion",24:"discretion",26:"express",27:"discretion",28:"discretion",30:"conflict",31:"conflict",32:"express",34:"discretion",35:"conflict",37:"discretion",38:"discretion",39:"conflict",42:"connect",43:"discretion",44:"discretion",45:"conflict",48:"connect",50:"conflict",52:"discretion",58:"connect",59:"express",60:"conflict",61:"express",65:"discretion",69:"connect",71:"express",72:"express",73:"connect",74:"express",75:"connect",76:"connect",78:"express",79:"connect",80:"express",81:"conflict",82:"connect",84:"express",85:"connect",87:"express",88:"express",90:"conflict",91:"express",93:"express",95:"connect",97:"express",98:"conflict",100:"connect",102:"conflict",105:"discretion",106:"discretion",109:"discretion",110:"express",111:"express",116:"express",117:"connect",119:"express",122:"express",124:"express",126:"express",127:"express",130:"express",131:"express",133:"express",134:"express",136:"conflict",137:"express",138:"discretion",140:"conflict",142:"discretion",145:"conflict",147:"express",149:"conflict",151:"express",152:"express",154:"express",156:"connect",158:"express",159:"express",160:"connect",161:"conflict",163:"conflict",165:"express",167:"conflict",169:"conflict",171:"express",173:"conflict",
# values
5:"principles",8:"principles",15:"integrity",21:"principles",24:"integrity",25:"integrity",30:"mood",40:"mood",42:"integrity",51:"mood",54:"mood",59:"mood",61:"mood",62:"principles",66:"integrity",83:"persist",86:"persist",95:"integrity",101:"integrity",103:"persist",105:"persist",108:"persist",113:"persist",118:"persist",119:"persist",123:"mood",129:"integrity",135:"principles",141:"integrity",146:"principles",147:"persist",148:"principles",152:"principles",154:"mood",161:"mood",162:"mood",177:"mood",178:"integrity",
# work
1:"deal",4:"pressure",9:"deal",29:"career",33:"deal",36:"career",47:"career",50:"pressure",52:"execution",57:"career",58:"pressure",67:"career",70:"execution",73:"deal",74:"career",75:"pressure",89:"pressure",92:"execution",99:"execution",106:"deal",107:"career",111:"execution",114:"career",121:"pressure",133:"execution",134:"execution",139:"execution",144:"deal",145:"deal",153:"career",157:"execution",159:"execution",169:"deal",170:"execution",172:"execution",
# family
12:"love",16:"love",17:"love",20:"love",23:"bond",41:"bond",55:"bond",64:"bond",68:"love",94:"bond",112:"bond",115:"bond",125:"bond",128:"bond",132:"love",
# education
6:"learning",26:"learning",46:"talent",49:"talent",53:"learning",63:"talent",77:"learning",96:"learning",104:"learning",136:"learning",143:"talent",168:"learning",
# skills
11:"prove",19:"prove",32:"mastery",56:"mastery",98:"mastery",120:"mastery",155:"mastery",179:"mastery",
# friendship
10:"trust",37:"trust",76:"trust",127:"trust",150:"trust",164:"romance",166:"romance",174:"romance",175:"trust",
# media
7:"truth",
# health
176:"body",
}

# 3) 插入 TOPIC_DIMENSIONS（在 const expressions 前）
anchor = 'const expressions = ['
assert c.count(anchor) == 1, 'anchor count ' + str(c.count(anchor))
c = c.replace(anchor, DIMS_DEF + '\n' + anchor)

# 4) 给每条表达插入 dimension 字段（在 topic 字段后）
# 按 id 切块处理
def add_dim(match):
    bid = int(match.group(1))
    dim = M.get(bid)
    if dim is None:
        print('!! 未映射 id:', bid)
        return match.group(0)
    return f'topic:"{match.group(2)}", dimension:"{dim}",'

# 匹配 "id:NN, ... topic:"XX"," 但 topic 可能不在同一行？观察数据：每条都在 "    id:NN, type:..., level:..., topic:"XX"," 同一行
pat = re.compile(r'id:(\d+),[^\n]*?topic:"(\w+)"')
c2, n = pat.subn(lambda m: m.group(0).replace('topic:"' + m.group(2) + '"', 'topic:"' + m.group(2) + '", dimension:"' + M.get(int(m.group(1)), '?') + '"'), c)
# 上面 replace 对未映射的会写 "?"——先检查是否全部映射
miss = [i for i in range(1, 180) if i not in M]
print('未映射 id 数:', len(miss), miss if miss else '')
print('替换数:', n)

io.open(DATA, 'w', encoding='utf-8').write(c2)
print('完成')
