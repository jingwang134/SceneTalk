# -*- coding: utf-8 -*-
"""更新 AI 模块：替换 AI JS 区块 + 加「测试连接」按钮"""
import io

PATH = 'index.html'
AI_JS = 'parts/ai_gen.js'

c = io.open(PATH, encoding='utf-8').read()
new_js = io.open(AI_JS, encoding='utf-8').read()

# 1) 替换/插入 AI JS 区块（锚点用前缀匹配；若不存在则插入到 FILTERS 前）
start = c.find('// ===================== 🎤 AI 智能生成')
end = c.find('// ===================== FILTERS =====================')
assert end != -1, 'FILTERS anchor not found'
if start != -1 and end > start:
    c = c[:start] + new_js + '\n\n' + c[end:]
    print('AI JS 已替换')
else:
    c = c[:end] + new_js + '\n\n' + c[end:]
    print('AI JS 已插入')

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

# 4) CSS：表达出处小标（幂等）
if '.expr-src{' not in c:
    src_css = '''.expr-src{display:inline-block;font-size:10px;color:#8A6D2F;background:#FBF3E0;border:1px solid #F0E0B8;border-radius:4px;padding:0 5px;margin-left:5px;vertical-align:1px;font-weight:400;white-space:nowrap}'''
    gok = '.gen-used-ok{'
    gok_idx = c.find(gok)
    if gok_idx == -1: gok_idx = c.find('.gen-answer-text{')
    c = c[:gok_idx] + src_css + '\n' + c[gok_idx:]
    print('CSS 已追加 (expr-src)')
else:
    print('CSS expr-src 已存在，跳过')

io.open(PATH, 'w', encoding='utf-8').write(c)
print('更新完成: AI JS 替换 + 测试连接按钮 + 融入数徽章')
print('testAiConn 存在:', c.count('async function testAiConn') == 1)
print('按钮存在:', c.count('测试连接') >= 1)
