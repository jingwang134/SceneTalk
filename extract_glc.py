# -*- coding: utf-8 -*-
# 全量提取《查理成长日记》97 集 PDF → scripts/glc/sXXeYY.txt
import PyPDF2, re, io, os, glob

SRC = r'C:/Users/15869/Desktop/文件/WJ/en/查理成长日记'
OUT = r'C:/Users/15869/WorkBuddy/2026-08-12-09-20-45/english-workbench/scripts/glc'
os.makedirs(OUT, exist_ok=True)

pdfs = sorted(glob.glob(SRC + '/S*/Good.Luck.Charlie.S*E*.pdf'))
print('找到 PDF 数:', len(pdfs))

ok, fail = 0, []
for p in pdfs:
    base = os.path.basename(p)
    m = re.search(r'S(\d{2})E(\d{2})(?:&E?(\d{2}))?\.pdf', base)
    if not m:
        fail.append(base); continue
    season, ep = m.group(1), m.group(2)
    extra = m.group(3)
    name = f's{season}e{ep}' + (f'e{extra}' if extra else '')
    try:
        reader = PyPDF2.PdfReader(p)
        text = ''
        for page in reader.pages:
            t = page.extract_text() or ''
            text += '\n' + t
        # 去时间码
        lines = [re.sub(r'\[\d+:\d+\]', '', ln) for ln in text.split('\n')]
        with io.open(os.path.join(OUT, name + '.txt'), 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        ok += 1
    except Exception as e:
        fail.append(base + ' -> ' + str(e))

print('成功:', ok, '| 失败:', len(fail))
for f in fail: print('  ', f)
