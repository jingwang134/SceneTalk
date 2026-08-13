# -*- coding: utf-8 -*-
"""更新 AI 模块：替换 AI JS 区块 + 加「测试连接」按钮"""
import io

PATH = 'index.html'
AI_JS = 'parts/ai_gen.js'

c = io.open(PATH, encoding='utf-8').read()
new_js = io.open(AI_JS, encoding='utf-8').read()

# 1) 替换 AI JS 区块（若已存在）
start = c.find('// ===================== 🎤 AI 智能生成（DeepSeek 直连） =====================')
end = c.find('// ===================== FILTERS =====================')
assert start != -1, 'AI JS anchor not found'
assert end != -1 and end > start, 'FILTERS anchor not found'
c = c[:start] + new_js + '\n\n' + c[end:]

# 2) 加「测试连接」按钮（⚙️ 配置 AI 旁）
anchor = '<button class="ai-cfg-link" onclick="openAiSettings()" style="margin-left:auto">⚙️ 配置 AI</button>'
assert c.count(anchor) == 1, 'cfg btn ' + str(c.count(anchor))
new_btn = '<button class="ai-cfg-link" onclick="openAiSettings()" style="margin-left:auto">⚙️ 配置 AI</button>\n        <button class="ai-cfg-link" onclick="testAiConn()" style="margin-left:4px">🔍 测试连接</button>'
c = c.replace(anchor, new_btn)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('更新完成: AI JS 替换 + 测试连接按钮')
print('testAiConn 存在:', c.count('async function testAiConn') == 1)
print('按钮存在:', c.count('测试连接') >= 1)
