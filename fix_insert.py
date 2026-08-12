# -*- coding: utf-8 -*-
"""修复数组结尾 + 插入修复后的数据"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')

with io.open(PATH, encoding='utf-8') as f:
    content = f.read()

with io.open(os.path.join(BASE, 'parts', 'data_s01e02_04.js'), encoding='utf-8') as f:
    new_data = f.read()

# 当前状态：id:20 结尾 tags 后是 '}\n  }\n\n\n// PROGRESS'（缺 '];'）
old = '      tags:["lexical resource","rhetorical effect","coherence"]\n    }\n  }\n\n\n// ===================== PROGRESS'
new = ('      tags:["lexical resource","rhetorical effect","coherence"]\n'
       '    }\n'
       '  },\n'
       + new_data +
       '\n];\n\n'
       '// ===================== PROGRESS')

assert content.count(old) == 1, 'old anchor count=' + str(content.count(old))
content = content.replace(old, new)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('OK - 数组结尾修复并插入 22 条')
print('总文件大小:', round(len(content)/1024, 1), 'KB')
