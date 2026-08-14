# 场景挖掘 v3：人工指定搜索词 + 整句精确优先
# 输出 parts/scenes_deal.js
import re, io, os, json

def load_script(src):
    """source 剧名 → 绑定目录，防止跨剧误匹配同名 sXXeYY.txt"""
    m = re.search(r'S(\d{2})E(\d{2})', src)
    if not m:
        return None
    se = 's%se%s.txt' % (m.group(1).lower(), m.group(2))
    if '摩登家庭' in src:
        base = 'scripts'
    elif '查理' in src:
        base = 'scripts/glc'
    elif '卡戴珊' in src:
        base = 'scripts/kardashian'
    else:
        return None
    p = os.path.join(base, se)
    return p if os.path.exists(p) else None

def norm(s):
    return re.sub(r"[^a-z0-9 ']", '', s.lower())

def clean(ln):
    ln = re.sub(r'\[[\d:]+]', '', ln)
    ln = re.sub(r'^===\s*PAGE \d+ ===$', '', ln)
    ln = re.sub(r'第\d+页/共\s*\d+\s*页.*$', '', ln)
    ln = ln.replace(' 0h ', ' Oh ').replace(' 0k ', ' Ok ')
    return ln.strip()

def mine(kw_list, src, ctx_before=2, ctx_after=3):
    """kw_list: 优先顺序的搜索词（字符串），先整句精确，再拆词兜底"""
    path = load_script(src)
    if not path:
        return None
    lines = [clean(l) for l in io.open(path, encoding='utf-8').read().split('\n')]
    lines = [l for l in lines if l and not l.startswith('===')]
    normed = [norm(l) for l in lines]
    # 1) 整句精确（含变体表）
    variants = {'shake': ['shake', 'shook', 'shaken']}
    def expand(kw):
        out = [kw]
        for base, alts in variants.items():
            if base in kw:
                for a in alts:
                    out.append(kw.replace(base, a))
        return out
    # 第一优先：按 kw 顺序，精确子串包含
    for kw in kw_list:
        for cand in expand(kw):
            cand_n = norm(cand)
            for i, n in enumerate(normed):
                if cand_n and cand_n in n:
                    start = max(0, i - ctx_before)
                    end = min(len(lines), i + ctx_after + 1)
                    return {'context': lines[start:end], 'hit': i - start, 'file': os.path.basename(path), 'kw': cand}
    # 2) 拆词兜底：所有词都在同一行（顺序不限）
    for kw in kw_list:
        words = [w for w in kw.split() if w and w not in {'the', 'a', 'to', 'on', 'of', "it's", "here's", 'we', 'got'}]
        for i, n in enumerate(normed):
            hit_words = []
            for w in words:
                for base, alts in variants.items():
                    if w == base:
                        if any(a in n for a in alts):
                            hit_words.append(w)
                        break
                else:
                    if w in n:
                        hit_words.append(w)
            if len(hit_words) >= 2:
                start = max(0, i - ctx_before)
                end = min(len(lines), i + ctx_after + 1)
                return {'context': lines[start:end], 'hit': i - start, 'file': os.path.basename(path), 'kw': kw + '(拆词)'}
    return None

# deal 维度试点（人工指定搜索词，含变体）
cases = [
    (33, ['non-negotiable'], '摩登家庭 S01E03'),
    (73, ["here's the deal"], '摩登家庭 S01E09'),
    (106, ['settle this', 'settle'], '查理成长日记 S01E04'),
    (144, ['we got a deal', 'got a deal'], '查理成长日记 S01E09'),
    (145, ['shook hands', 'shake hands', 'shaken hands'], '查理成长日记 S01E09'),
    (169, ['keep the change'], '查理成长日记 S01E11'),
]

out = []
for eid, kws, src in cases:
    r = mine(kws, src)
    print('=' * 58)
    print('id:%d [%s] 搜索: %s' % (eid, src, kws))
    if not r:
        print('  ❌ 未命中')
        continue
    print('  ✅ 命中 (%s) 关键词: %s' % (r['file'], r['kw']))
    for j, ln in enumerate(r['context']):
        mark = '>>' if j == r['hit'] else '  '
        print('   %s %s' % (mark, ln[:80]))
    out.append({'id': eid, 'context': r['context'], 'hit': r['hit']})

with io.open('parts/scenes_deal.js', 'w', encoding='utf-8') as f:
    f.write('// 试点：work/deal 维度场景数据（从台本自动挖掘）\n')
    f.write('const SCENES_DEAL = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
print()
print('已写入 parts/scenes_deal.js，共', len(out), '条')
