# -*- coding: utf-8 -*-
"""数据外置：把 expressions 数组从 index.html 迁移到独立 data.js"""
import io, os, shutil

BASE = r'C:\Users\15869\WorkBuddy\2026-08-12-09-20-45\english-workbench'
PATH = os.path.join(BASE, 'index.html')

# 备份
shutil.copy(PATH, PATH + '.pre-datajs')

with io.open(PATH, encoding='utf-8') as f:
    c = f.read()

# 提取 expressions 数组完整块：从 'const expressions = [' 到匹配的 '];'
start_marker = 'const expressions = ['
si = c.find(start_marker)
assert si != -1, 'start marker not found'

# 从 si 开始数括号，找数组结束
depth = 0
i = si
in_str = None
while i < len(c):
    ch = c[i]
    if in_str:
        if ch == in_str and c[i-1] != '\\':
            in_str = None
    else:
        if ch == '"' or ch == "'":
            in_str = ch
        elif ch == '{' or ch == '[':
            depth += 1
        elif ch == '}' or ch == ']':
            depth -= 1
            if depth == 0:
                break
    i += 1
assert depth == 0, 'array not balanced'
end = i + 2  # 包含 '];'

expr_block = c[si:end]

# 写入 data.js
data_js = '// ============================================\n' \
          '// ScenePick 场景拾句 · 表达数据\n' \
          '// 其他电脑加资料：编辑本文件（或把台本提交到仓库后让 AI 处理）\n' \
          '// 新增表达按下面格式在数组末尾追加对象即可\n' \
          '// ============================================\n' \
          + expr_block + '\n'

with io.open(os.path.join(BASE, 'data.js'), 'w', encoding='utf-8') as f:
    f.write(data_js)

# 在 index.html 中替换 expressions 块为外置引用
# 找到块前的注释头
block_start = c.rfind('// ===================== DATA', 0, si)
assert block_start != -1

replacement = '// ===================== DATA (外置到 data.js) =====================\n' \
              '// 表达数据在 data.js 中，通过 <script src="data.js"> 加载\n'
c = c[:block_start] + replacement + c[end:]

# 在 <script> 前插入 data.js 引用
script_tag = '\n<script>\n'
assert c.count(script_tag) == 1
c = c.replace(script_tag, '\n<script src="data.js"></script>\n' + script_tag)

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(c)

print('OK - 数据已外置到 data.js')
print('expressions 块长度:', len(expr_block))
