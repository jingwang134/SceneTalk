# -*- coding: utf-8 -*-
# 替换 renderPerspectivePage 为思维导图式渲染 + 追加维度卡片 CSS
import io

PATH = 'index.html'
with io.open(PATH, encoding='utf-8') as f:
    c = f.read()

# ---------- 1) 追加 CSS（锚点：.persp-cta .q-btn） ----------
css_anchor = '.persp-cta .q-btn{font-size:15px;padding:13px 36px;border-radius:10px}'
assert c.count(css_anchor) == 1, 'CSS anchor not found: ' + str(c.count(css_anchor))
new_css = css_anchor + '''
.persp-map-hint{font-size:12.5px;color:#8892A0;margin:-6px 0 14px;line-height:1.7}
.persp-dim{background:#fff;border:1px solid #E8E2D5;border-radius:14px;padding:16px 18px;margin-bottom:14px;box-shadow:0 1px 3px rgba(26,42,58,.05)}
.persp-dim-head{display:flex;align-items:center;gap:10px;margin-bottom:9px}
.persp-dim-tag{background:#C8963E;color:#fff;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;white-space:nowrap}
.persp-dim-name{font-size:15px;font-weight:700;color:#1A2A3A}
.persp-angle{font-size:13px;color:#5A6B7A;background:#FBF8F0;border-left:3px solid #C8963E;padding:8px 12px;border-radius:0 8px 8px 0;margin-bottom:12px;line-height:1.7}
.persp-items{display:flex;flex-direction:column;gap:10px}
.persp-item{display:flex;gap:12px;background:#FAFAF8;border:1px solid #EFEAE0;border-radius:10px;padding:12px 14px}
.persp-item.sentence{background:#F5FAF7;border-color:#DCEBE3}
.persp-item.clip{background:#FBF5F1;border-color:#F0DDD0}
.persp-item-badge{flex-shrink:0;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px;height:fit-content;margin-top:2px;background:#EFEAE0;color:#5A6B7A}
.persp-item-badge.sentence{background:#DCEBE3;color:#2D7A55}
.persp-item-badge.clip{background:#F0DDD0;color:#A45A2A}
.persp-item-body{flex:1;min-width:0}
.persp-item-en{font-size:14px;font-weight:600;color:#1A2A3A;line-height:1.55}
.persp-item-zh{display:none;font-size:13px;color:#5A6B7A;margin-top:4px;line-height:1.6}
.persp-item-zh.show{display:block}
.persp-item-meta{display:flex;align-items:center;gap:10px;margin-top:6px;font-size:11.5px;color:#8892A0;flex-wrap:wrap}
.persp-cn-toggle{background:none;border:none;color:#C8963E;font-size:11.5px;cursor:pointer;padding:0}
.persp-item-tip{font-size:12px;color:#5A6B7A;background:#FFFDF7;border:1px dashed #E8DDBF;border-radius:8px;padding:7px 10px;margin-top:8px;line-height:1.65}
.persp-use{font-size:13px;color:#2D7A55;background:#F0F7F2;border:1px solid #DCEBE3;border-radius:10px;padding:10px 12px;margin-top:12px;line-height:1.7}'''
c = c.replace(css_anchor, new_css)

# ---------- 2) 替换 renderPerspectivePage ----------
start = c.find('function renderPerspectivePage(c){')
end = c.find('function startLearnAfterPersp(){')
assert start != -1 and end != -1 and start < end, f'function anchors: {start} {end}'

new_func = '''function renderPerspectivePage(c){
  const tp=topicOf(pathTopic);
  const data=TOPIC_PERSPECTIVES[pathTopic]||{map:"",dimensions:[]};
  const TM={phrase:{ico:"📌",t:"短语"},sentence:{ico:"💬",t:"句子"},clip:{ico:"🎬",t:"片段"}};
  const dimsHtml=data.dimensions.length?data.dimensions.map((d,di)=>{
    const itemsHtml=d.items.map((it,ii)=>{
      const m=TM[it.type]||TM.phrase;
      const zhId="pdz_"+di+"_"+ii;
      const tipHtml=it.tip?`<div class="persp-item-tip">📝 ${it.tip}</div>`:"";
      return `
        <div class="persp-item ${it.type}">
          <span class="persp-item-badge ${it.type}">${m.ico} ${m.t}</span>
          <div class="persp-item-body">
            <div class="persp-item-en">${it.en}</div>
            <div class="persp-item-zh" id="${zhId}">${it.zh}</div>
            <div class="persp-item-meta">
              <span>📍 ${it.source}</span>
              <button class="persp-cn-toggle" onclick="document.getElementById('${zhId}').classList.toggle('show');this.textContent=document.getElementById('${zhId}').classList.contains('show')?'收起中文':'展开中文翻译'">展开中文翻译</button>
            </div>
            ${tipHtml}
          </div>
        </div>`;
    }).join("");
    return `
      <div class="persp-dim">
        <div class="persp-dim-head">
          <span class="persp-dim-tag">${d.tag}</span>
          <span class="persp-dim-name">${d.name}</span>
        </div>
        <div class="persp-angle">💭 ${d.angle}</div>
        <div class="persp-items">${itemsHtml}</div>
        <div class="persp-use">✍️ <b>雅思支架：</b>${d.use}</div>
      </div>`;
  }).join(""):`<div class="persp-empty">📖 该话题的维度素材补充中，先选其他话题～</div>`;
  c.innerHTML=pathBanner()+`
    <div class="persp-sec-title">💡 ${data.map||("聊「"+tp.name+"」，外国人通常从这 3 个维度展开")}</div>
    <div class="persp-map-hint">🗺️ 每个维度 = 一个思考方向 + 紧贴它的地道语料；选 2-3 个维度，就能组织一段有层次的口语/写作回答。</div>
    ${dimsHtml}
    <div class="persp-tipbox">✨ 小提示：雅思口语/写作时，选其中 2-3 个维度，用每个维度下的「雅思支架」串成你的回答。</div>
    <div class="persp-cta">
      <button class="q-btn reveal" onclick="startLearnAfterPersp()">已看完范例 → 开始学词 📖</button>
    </div>`;
}
'''
c = c[:start] + new_func + c[end:]

with io.open(PATH, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK: CSS appended + renderPerspectivePage replaced')
