# -*- coding: utf-8 -*-
"""插入 S01E02-E04 的22条表达数据到 expressions 数组末尾"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')

with io.open(PATH, encoding='utf-8') as f:
    content = f.read()

with io.open(os.path.join(BASE, 'parts', 'data_s01e02_04.js'), encoding='utf-8') as f:
    new_data = f.read()

# 锚点：id:20 的结尾 + 数组结束
anchor = '      tags:["lexical resource","rhetorical effect","coherence"]\n    }\n  }\n];'
assert content.count(anchor) == 1, 'anchor 不唯一或不存在，count=' + str(content.count(anchor))

replacement = '      tags:["lexical resource","rhetorical effect","coherence"]\n    }\n  },\n' + new_data + '\n];'
content = content.replace(anchor, replacement)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('OK - 已插入 22 条表达 (id 21-42)')
print('总文件大小:', round(len(content)/1024, 1), 'KB')
