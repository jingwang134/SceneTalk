# -*- coding: utf-8 -*-
# 雅思答案定制 → 人设驱动版（替换生成器 JS + 人设选择 UI + CSS）
import io
PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 替换生成器 JS 区块（边界已验证安全：生成器自包含）
s = c.find('// ===================== 🎤 雅思答案定制 =====================')
e = c.find('// ===================== FILTERS')
assert s != -1 and e != -1 and s < e, f'js bounds {s} {e}'
new_js = io.open('parts/gen_personas.js', encoding='utf-8').read()
c = c[:s] + new_js.rstrip() + '\n\n' + c[e:]

# 2) 替换人设选择 UI
old_ui = '''      <div class="gen-row" style="margin-top:14px">
        <span class="filter-label" style="margin-right:8px">答题风格</span>
        <div class="gen-styles" id="genStyles">
          <button class="gen-style active" data-style="high" onclick="setGenStyle(this)">🎯 高分范文风</button>
          <button class="gen-style" data-style="casual" onclick="setGenStyle(this)">💬 口语自然风</button>
          <button class="gen-style" data-style="academic" onclick="setGenStyle(this)">📚 学术分析风</button>
          <button class="gen-style" data-style="story" onclick="setGenStyle(this)">🎭 故事叙述风</button>
        </div>
      </div>'''
new_ui = '''      <div class="gen-row" style="margin-top:14px">
        <span class="filter-label" style="margin-right:8px">选择人设</span>
        <div class="gen-styles" id="genStyles">
          <button class="gen-style active" data-style="vlogger" onclick="setGenStyle(this)">🌴 加州松弛白女</button>
          <button class="gen-style" data-style="brit" onclick="setGenStyle(this)">🎓 英伦学霸</button>
          <button class="gen-style" data-style="shy" onclick="setGenStyle(this)">🙈 社恐内向青年</button>
          <button class="gen-style" data-style="party" onclick="setGenStyle(this)">🎉 外向乐天派</button>
          <button class="gen-style" data-style="ted" onclick="setGenStyle(this)">🧠 理性学术学霸</button>
          <button class="gen-style" data-style="critic" onclick="setGenStyle(this)">🎙️ 批判思辨博主</button>
        </div>
      </div>
      <div class="gen-row" style="margin-top:10px">
        <span class="filter-label" style="margin-right:8px;color:#8892A0">基础风格（不绑人设）</span>
        <div class="gen-styles" id="genBaseStyles">
          <button class="gen-style base" data-style="high" onclick="setGenStyle(this)">🎯 高分范文风</button>
          <button class="gen-style base" data-style="casual" onclick="setGenStyle(this)">💬 口语自然风</button>
          <button class="gen-style base" data-style="analytic" onclick="setGenStyle(this)">📚 学术分析风</button>
          <button class="gen-style base" data-style="story" onclick="setGenStyle(this)">🎭 故事叙述风</button>
        </div>
      </div>'''
assert c.count(old_ui) == 1, 'ui ' + str(c.count(old_ui))
c = c.replace(old_ui, new_ui)

# 3) CSS 补充
css_anchor = '.gen-style.active{background:#C8963E;border-color:#C8963E;color:#fff;font-weight:700}'
assert c.count(css_anchor) == 1, 'css ' + str(c.count(css_anchor))
new_css = css_anchor + '''
.gen-style.base{border-style:dashed;opacity:.8}
.gen-style.base.active{border-style:solid;opacity:1}
.gen-answer-text .zn{font-size:12px;color:#8892A0}
.gen-notes{display:flex;flex-direction:column;gap:6px;margin-top:8px}
.gen-note{font-size:13px;color:#2C2C2A;background:#F6F3FC;border:1px solid #E3DCF2;border-radius:8px;padding:7px 12px;line-height:1.6}
.gen-note code{font-family:inherit;font-size:13px;font-weight:600;color:#534AB7}
.gen-note-zh{font-size:12.5px;color:#5A6B7A}'''
c = c.replace(css_anchor, new_css)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('OK: 人设驱动版落地')
