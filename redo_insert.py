# -*- coding: utf-8 -*-
"""清理主文件中损坏的 id21-42 数据段，然后重新插入修复版"""
import io, os

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')

with io.open(PATH, encoding='utf-8') as f:
    content = f.read()

# 1) 移除损坏的数据段：从 id:20 结尾的 '  },' 之后的注释开始，到数组 '];' 结束
start_marker = "  },\n  // ===== 摩登家庭 S01E02 实拍提取 =====\n"
end_marker = "\n];"

si = content.find(start_marker)
ei = content.find(end_marker, si)
assert si != -1 and ei != -1, f'markers not found: si={si} ei={ei}'

# 移除段落后，id:20 结尾恢复为 '  }\n];'
content = content[:si] + "  }\n" + content[ei + len(end_marker):]

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('已清理损坏数据段')
print('当前表达条数检查:')

# 2) 重新插入
with io.open(os.path.join(BASE, 'parts', 'data_s01e02_04.js'), encoding='utf-8') as f:
    new_data = f.read()

anchor = '      tags:["lexical resource","rhetorical effect","coherence"]\n    }\n  }\n];'
assert content.count(anchor) == 1, 'anchor count=' + str(content.count(anchor))

replacement = '      tags:["lexical resource","rhetorical effect","coherence"]\n    }\n  },\n' + new_data + '\n];'
content = content.replace(anchor, replacement)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('已重新插入 22 条表达')
print('总文件大小:', round(len(content)/1024, 1), 'KB')
