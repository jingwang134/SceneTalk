# -*- coding: utf-8 -*-
# 插入密度档 60 条（id 120-179）到 data.js
import io, re

DATA = 'data.js'
c = io.open(DATA, encoding='utf-8').read()

parts = []
for f in ['parts/data_glc_s01e07_09.js', 'parts/data_glc_s01e10_12.js']:
    body = io.open(f, encoding='utf-8').read()
    body = re.sub(r'^//.*\n', '', body)
    parts.append(body.rstrip().rstrip(','))
new_data = '\n  ' + ',\n  '.join(parts)

i = c.find('id:119')
assert i != -1, 'id:119 not found'
jend = c.find('\n];', i)
assert jend != -1, 'array end not found'
c = c[:jend] + ',\n  ' + new_data + c[jend:]

io.open(DATA, 'w', encoding='utf-8').write(c)
print('插入完成')
