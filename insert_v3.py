# -*- coding: utf-8 -*-
"""插入 S01E05-E09 的36条表达（id 43-78）"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')

with io.open(PATH, encoding='utf-8') as f:
    content = f.read()

parts = []
for p in ['data_s01e05_06.js', 'data_s01e07_09.js']:
    with io.open(os.path.join(BASE, 'parts', p), encoding='utf-8') as f:
        parts.append(f.read().strip())

new_data = '  },\n' + '\n  },\n'.join(parts)  # 连接：前一个对象结尾加逗号

# 锚点：id:42 结尾 + 数组结束（注意 id:42 后有换行再 '];'）
old = '      tags:["lexical resource","critical thinking","coherence"]\n    }\n  }\n\n];'
new = ('      tags:["lexical resource","critical thinking","coherence"]\n'
       '    }\n'
       + new_data +
       '\n];')

assert content.count(old) == 1, 'anchor count=' + str(content.count(old))
content = content.replace(old, new)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('OK - 已插入 36 条表达 (id 43-78)')
print('总文件大小:', round(len(content)/1024, 1), 'KB')
