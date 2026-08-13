# 插入卡戴珊 S01E04-E06 密度档 30 条（id 270-299）
import io, re

DATA = 'data.js'
c = io.open(DATA, encoding='utf-8').read()

body = io.open('parts/data_kardashian_s01e04_06.js', encoding='utf-8').read()
body = re.sub(r'^//.*\n', '', body)
new_data = body.rstrip().rstrip(',')

i = c.find('id:269')
assert i != -1, 'id:269 not found'
jend = c.find('\n];', i)
assert jend != -1, 'array end not found'
c = c[:jend] + ',\n  ' + new_data + c[jend:]

io.open(DATA, 'w', encoding='utf-8').write(c)
print('插入完成: id 270-299')
