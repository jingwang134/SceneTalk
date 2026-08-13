# -*- coding: utf-8 -*-
"""接入 AI 智能生成：生成方式切换 + 设置弹窗 + AI JS + CSS"""
import io

PATH = 'index.html'
AI_JS = 'parts/ai_gen.js'

c = io.open(PATH, encoding='utf-8').read()

# 1) 生成方式切换行（插到「生成雅思答案」按钮行之前）
mode_html = '''      <div class="gen-row" style="margin-top:14px">
        <span class="filter-label" style="margin-right:8px">生成方式</span>
        <div class="gen-styles" id="genModes">
          <button class="gen-mode-btn active" data-mode="template" onclick="setAiMode('template',this)">🎛️ 模板生成（离线）</button>
          <button class="gen-mode-btn" data-mode="ai" onclick="setAiMode('ai',this)">🤖 AI 智能生成</button>
        </div>
        <button class="ai-cfg-link" onclick="openAiSettings()" style="margin-left:auto">⚙️ 配置 AI</button>
      </div>
      <div style="margin-top:16px">'''
anchor = '      <div style="margin-top:16px">\n        <button class="q-btn reveal" onclick="generateAnswer()">✨ 生成雅思答案</button>'
assert c.count(anchor) == 1, 'mode anchor ' + str(c.count(anchor))
c = c.replace(anchor, mode_html + '\n' + anchor.lstrip('      '))

# 2) 设置弹窗（插到 Detail Overlay 之前）
ai_overlay = '''<!-- ===== AI Settings Overlay ===== -->
<div class="ai-overlay" id="aiOverlay" onclick="if(event.target===this)closeAiSettings()">
  <div class="ai-panel">
    <h3>🤖 配置 AI 生成</h3>
    <p>填入 DeepSeek API Key（平台 platform.deepseek.com 注册获取，充值几块钱够用很久）。Key 仅保存在<b>本机浏览器</b>，用于直接调用官方接口；请勿把页面分享给他人。模型、接口地址均可自定义（兼容 OpenAI 格式服务）。</p>
    <div class="ai-field">
      <label>API Key *</label>
      <input id="aiKey" type="password" placeholder="sk-..." autocomplete="off">
    </div>
    <div class="ai-field">
      <label>接口地址</label>
      <input id="aiEndpoint" type="text" placeholder="https://api.deepseek.com/chat/completions">
    </div>
    <div class="ai-field">
      <label>模型</label>
      <input id="aiModel" type="text" placeholder="deepseek-chat">
    </div>
    <div class="ai-actions">
      <button class="q-btn reveal" onclick="saveAiSettings()">💾 保存</button>
      <button class="q-btn ghost" onclick="closeAiSettings()">取消</button>
    </div>
  </div>
</div>

<!-- ===== Detail Overlay ===== -->'''
anchor2 = '<!-- ===== Detail Overlay ===== -->'
assert c.count(anchor2) == 1, 'overlay anchor ' + str(c.count(anchor2))
c = c.replace(anchor2, ai_overlay)

# 3) 插入 AI JS（FILTERS 之前）
ai_js = io.open(AI_JS, encoding='utf-8').read()
anchor3 = '// ===================== FILTERS ====================='
assert c.count(anchor3) == 1, 'js anchor ' + str(c.count(anchor3))
c = c.replace(anchor3, ai_js + '\n\n' + anchor3)

# 4) CSS（幂等）
if '.gen-mode-btn{' not in c:
    css = '''

.gen-mode-btn{border:1px solid #E0DACB;background:#fff;color:#5A6B7A;font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all .15s}
.gen-mode-btn.active{background:#2D7A55;border-color:#2D7A55;color:#fff}
.ai-cfg-link{border:none;background:none;color:#534AB7;font-size:12px;cursor:pointer;padding:4px 8px}
.ai-cfg-link:hover{text-decoration:underline}
.gen-loading{background:#FBF6E9;border:1px solid #F0E0B8;color:#8A6D2F;border-radius:10px;padding:22px;text-align:center;font-size:14px}
.gen-error{background:#FDF1F0;border:1px solid #F2C9C5;color:#B4433A;border-radius:10px;padding:18px;font-size:13.5px;line-height:1.9}
.ai-overlay{position:fixed;inset:0;background:rgba(30,30,28,.45);display:none;align-items:center;justify-content:center;z-index:100}
.ai-panel{background:#fff;border-radius:16px;padding:26px;width:460px;max-width:92vw;box-shadow:0 20px 60px rgba(0,0,0,.25)}
.ai-panel h3{margin:0 0 6px;font-size:17px}
.ai-panel p{font-size:12.5px;color:#8892A0;margin:0 0 16px;line-height:1.8}
.ai-field{margin-bottom:12px}
.ai-field label{display:block;font-size:12px;color:#5A6B7A;margin-bottom:5px;font-weight:600}
.ai-field input{width:100%;box-sizing:border-box;border:1px solid #E0DACB;border-radius:8px;padding:9px 12px;font-size:13.5px;background:#fff}
.ai-field input:focus{outline:none;border-color:#C8963E}
.ai-actions{display:flex;gap:10px;margin-top:18px}'''
    c = c.replace('\n</style>', css + '\n</style>')
    print('CSS 已追加')
else:
    print('CSS 已存在，跳过')

io.open(PATH, 'w', encoding='utf-8').write(c)
print('落地完成: 模式切换 + 设置弹窗 + AI JS + CSS')
print('AI JS 插入:', c.count('AI 智能生成（DeepSeek 直连）') >= 1)
print('弹窗存在:', c.count('aiOverlay') >= 1)
