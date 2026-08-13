# -*- coding: utf-8 -*-
# 插入查理成长日记 41 条表达到 data.js（id 78 之后）
import io, re

DATA = 'data.js'
c = io.open(DATA, encoding='utf-8').read()

# 读取两个新数据文件（去注释头）
parts = []
for f in ['parts/data_glc_s01e01_03.js', 'parts/data_glc_s01e04_06.js']:
    body = io.open(f, encoding='utf-8').read()
    body = re.sub(r'^//.*\n', '', body)
    parts.append(body.rstrip().rstrip(','))
new_data = '\n  ' + ',\n  '.join(parts)

# 锚点：id:78 对象结尾 + 数组结束
# 找 id:78 的位置，然后找它之后第一个 '];'
i78 = c.find('id:78')
assert i78 != -1, 'id:78 not found'
jend = c.find('\n];', i78)
assert jend != -1, 'array end not found after id:78'
# id:78 是原数组最后一条（无逗号），在其后补逗号再插入
c = c[:jend] + ',\n  ' + new_data + c[jend:]

io.open(DATA, 'w', encoding='utf-8').write(c)
print('插入完成')
