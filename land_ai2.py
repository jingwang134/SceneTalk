# -*- coding: utf-8 -*-
"""更新 AI 模块：替换 AI JS 区块 + 加「测试连接」按钮"""
import io

PATH = 'index.html'
AI_JS = 'parts/ai_gen.js'

c = io.open(PATH, encoding='utf-8').read()
new_js = io.open(AI_JS, encoding='utf-8').read()

# 1) 替换 AI JS 区块（锚点用前缀匹配，兼容注释头版本变化）
start = c.find('// ===================== 🎤 AI 智能生成')
end = c.find('// ===================== FILTERS =====================')
assert start != -1, 'AI JS anchor not found'
assert end != -1 and end > start, 'FILTERS anchor not found'
c = c[:start] + new_js + '\n\n' + c[end:]

# 2) 加「测试连接」按钮（⚙️ 配置 AI 旁）
anchor = '<button class="ai-cfg-link" onclick="openAiSettings()" style="margin-left:auto">⚙️ 配置 AI</button>'
assert c.count(anchor) == 1, 'cfg btn ' + str(c.count(anchor))
new_btn = '<button class="ai-cfg-link" onclick="openAiSettings()" style="margin-left:auto">⚙️ 配置 AI</button>\n        <button class="ai-cfg-link" onclick="testAiConn()" style="margin-left:4px">🔍 测试连接</button>'
c = c.replace(anchor, new_btn)

# 3) CSS：融入表达数徽章（幂等）
if '.gen-used-ok{' not in c:
    used_css = '''.gen-used-ok{background:#EDF7F0;border:1px solid #CBE7D4;color:#1F7A44;border-radius:8px;padding:8px 12px;font-size:12.5px;margin-bottom:12px}
.gen-used-warn{background:#FDF6E8;border:1px solid #F0DFB0;color:#8A6D2F;border-radius:8px;padding:10px 12px;font-size:12.5px;margin-bottom:12px;line-height:1.9}'''
    ai_anchor = '.ai-actions{'
    ai_idx = c.find(ai_anchor)
    assert ai_idx != -1, 'ai-actions css not found'
    c = c[:ai_idx] + used_css + '\n' + c[ai_idx:]
    print('CSS 已追加 (gen-used)')
else:
    print('CSS gen-used 已存在，跳过')

io.open(PATH, 'w', encoding='utf-8').write(c)
print('更新完成: AI JS 替换 + 测试连接按钮 + 融入数徽章')
print('testAiConn 存在:', c.count('async function testAiConn') == 1)
print('按钮存在:', c.count('测试连接') >= 1)
