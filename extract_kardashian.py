# -*- coding: utf-8 -*-
"""解析卡戴珊家族 S01 中英字幕 → scripts/kardashian/s01eXX.txt"""
import re, os, io

SRC = r'C:/Users/15869/Desktop/文件/WJ/en/k-s01-bilingual'
OUT = 'scripts/kardashian'
os.makedirs(OUT, exist_ok=True)

# 文件名 → 集数
def ep_of(fname):
    m = re.search(r'S01E(\d{2})', fname, re.I)
    if m:
        return 's01e' + m.group(1)
    if fname.startswith('5.'):
        return 's01e05'
    return None

for fname in sorted(os.listdir(SRC)):
    if not fname.endswith('.txt'):
        continue
    ep = ep_of(fname)
    if not ep:
        print('跳过:', fname)
        continue
    with io.open(os.path.join(SRC, fname), encoding='utf-8', errors='replace') as f:
        raw = f.read()
    # 提取 EN: 与 中： 行（保持顺序）
    lines = []
    for ln in raw.split('\n'):
        s = ln.strip()
        if s.startswith('EN:'):
            en = s[3:].strip()
            if en and not en.startswith('['):
                lines.append(en)
        elif s.startswith('中：'):
            zh = s[2:].strip()
            if zh:
                lines.append('中：' + zh)
    out = '\n'.join(lines)
    with io.open(os.path.join(OUT, ep + '.txt'), 'w', encoding='utf-8') as f:
        f.write(out)
    print('%s <- %s (%d 字符)' % (ep, fname, len(out)))
print('完成，共', len(os.listdir(OUT)), '集')
