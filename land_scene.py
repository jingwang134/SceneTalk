# 场景卡落地：把 SCENES_DEAL 内联进 index.html，闪卡+详情面板加场景区块
import io, re, json

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 读取 scenes 数据并内联
scenes = json.loads(re.sub(r'^.*?= ', '', io.open('parts/scenes_deal.js', encoding='utf-8').read(), count=1, flags=re.S).strip().rstrip(';'))
INLINE = '// ===== 试点：work/deal 维度场景数据（剧集式学习 · 从台本自动挖掘） =====\nconst SCENES_DEAL = ' + json.dumps(scenes, ensure_ascii=False) + ';\n\n'

# 2) 在 showDetail 前插入 SCENES_DEAL + sceneOf
anchor = 'function showDetail(id){'
assert c.count(anchor) == 1, 'showDetail anchor %d' % c.count(anchor)
scene_js = INLINE + '''function sceneOf(id){
  const s = SCENES_DEAL.find(function(x){ return x.id === id; });
  return s || null;
}
function sceneBlockHtml(e){
  const sc = sceneOf(e.id);
  if(!sc) return '';
  return '<div class="scene-box">' +
    '<div class="scene-head">🎬 剧中场景 <span class="scene-src">' + e.source + '</span></div>' +
    sc.context.map(function(ln, i){
      return '<div class="scene-line' + (i === sc.hit ? ' hit' : '') + '">' + ln + '</div>';
    }).join('') +
    '</div>';
}
'''
c = c.replace(anchor, scene_js + anchor, 1)

# 3) 闪卡正面加场景徽章（有 scene 时）
old_front = '''            <div class="fh"><span>${tp.icon} ${tp.name}</span><span>IELTS ${e.level}</span></div>
            <div class="ftap">👆 点击翻转看释义</div>'''
new_front = '''            <div class="fh"><span>${tp.icon} ${tp.name}</span><span>IELTS ${e.level}</span></div>
            ${sceneOf(e.id)?`<div class="scene-badge">🎬 这句出自剧中场景</div>`:""}
            <div class="ftap">👆 点击翻转看释义</div>'''
assert c.count(old_front) == 1, 'flash front %d' % c.count(old_front)
c = c.replace(old_front, new_front, 1)

# 4) 闪卡背面加场景区块
old_back = '''          <div class="flash-face flash-back">
            <div class="bc">${e.chinese}</div>
            <div class="bu">${e.usage}</div>
            <div class="be">“${e.example}”</div>
          </div>'''
new_back = '''          <div class="flash-face flash-back">
            <div class="bc">${e.chinese}</div>
            <div class="bu">${e.usage}</div>
            <div class="be">“${e.example}”</div>
            ${sceneBlockHtml(e)}
          </div>'''
assert c.count(old_back) == 1, 'flash back %d' % c.count(old_back)
c = c.replace(old_back, new_back, 1)

# 5) 详情面板：出处区升级为场景区块（有 scene 显示场景，无 scene 显示原出处）
old_sec = '''      <div class="detail-section">
        <h4>🎬 出处</h4>
        <p>${e.source} · ${e.category}</p>
      </div>'''
new_sec = '''      <div class="detail-section">
        <h4>🎬 出处 <span class="scene-src">${e.source} · ${e.category}</span></h4>
        ${sceneBlockHtml(e)}
      </div>'''
assert c.count(old_sec) == 1, 'detail sec %d' % c.count(old_sec)
c = c.replace(old_sec, new_sec, 1)

# 6) CSS（幂等追加）
if '.scene-box{' not in c:
    css_anchor = '.flash-actions{'
    assert c.count(css_anchor) == 1, 'css anchor %d' % c.count(css_anchor)
    new_css = '''.scene-box{background:#FFFDF7;border:1px solid #F0E6CC;border-radius:10px;padding:12px 14px;margin-top:10px}
.scene-head{font-size:12px;font-weight:500;color:#854F0B;margin-bottom:8px;display:flex;align-items:center;gap:6px}
.scene-src{font-size:11px;color:#A08A5C;font-weight:400}
.scene-line{font-size:12.5px;line-height:1.7;color:#4A4A42;padding:3px 8px;border-radius:5px}
.scene-line.hit{background:#FBE9C9;color:#633806;font-weight:500}
.scene-badge{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);font-size:11.5px;color:#B8860B;background:#FBFAF3;border:1px solid #F0E6CC;padding:4px 12px;border-radius:20px;white-space:nowrap}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('落地完成：sceneOf/sceneBlockHtml/闪卡徽章/闪卡背面场景/详情面板场景/CSS')
print('SCENES_DEAL 条数:', len(scenes))
