# -*- coding: utf-8 -*-
"""替换雅思答案定制生成器为 V2（题目感知+翻译+逐句讲解），并追加样式"""
import io, sys

PATH = 'index.html'
PART = 'parts/gen_v2.js'

c = io.open(PATH, encoding='utf-8').read()
new_js = io.open(PART, encoding='utf-8').read()

# 1) 替换生成器 JS 区块（锚点兼容：人设驱动版 / 题目感知版）
start = c.find('// ===================== 🎤 雅思答案定制')
end = c.find('// ===================== FILTERS =====================')
assert start != -1, 'start anchor not found'
assert end != -1 and end > start, 'end anchor not found'
c = c[:start] + new_js + '\n' + c[end:]

# 2) 追加 CSS（幂等：已存在 .gen-line-no 则跳过）
if '.gen-line-no{' not in c:
    css_anchor = '.gen-tip{'
    ai = c.find(css_anchor)
    assert ai != -1, 'css anchor not found'
    ci = c.find('}', ai)
    new_css = '''.gen-block-label{font-size:13px;font-weight:600;color:#2C2C2A;margin:16px 0 8px;display:flex;align-items:center;gap:6px}
.gen-block-sub{font-size:11px;color:#8892A0;font-weight:400}
.gen-answer-zh{font-size:13.5px;color:#3E4A5A;line-height:1.9;background:#F4F8FF;border:1px solid #DCE6F5;border-radius:10px;padding:14px 16px}
.gen-lines{display:flex;flex-direction:column;gap:10px}
.gen-line{display:flex;gap:10px;background:#FAFAF7;border:1px solid #EDEAE0;border-radius:10px;padding:10px 12px}
.gen-line-no{flex:0 0 22px;height:22px;background:#2D7A55;color:#fff;font-size:11px;font-weight:700;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:2px}
.gen-line-body{flex:1;min-width:0}
.gen-line-en{font-size:13.5px;color:#2C2C2A;line-height:1.7}
.gen-line-zh{font-size:12.5px;color:#5A6B7A;margin-top:3px;line-height:1.6}
.gen-line-ex{font-size:11.5px;color:#8A6D2F;background:#FBF6E9;border-radius:6px;padding:3px 8px;margin-top:5px;line-height:1.5}'''
    c = c[:ci+1] + '\n' + new_css + c[ci+1:]
    print('CSS 已追加')
else:
    print('CSS 已存在，跳过')

io.open(PATH, 'w', encoding='utf-8').write(c)
print('替换完成: 生成器JS区块 + CSS')
print('新JS起点:', c.find('题目感知版（V2）'))
print('FILTERS 保留:', c.find('// ===================== FILTERS =====================') != -1)
