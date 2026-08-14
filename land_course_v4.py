# 多邻国式体验 v4：关卡地图 + 进度环 + 错因提示 + 完成动画
import io

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) renderCourseHome → 关卡地图（保留函数名，引用不用改）
old = '''function renderCourseHome(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <button class="q-btn ghost" onclick="renderLearnHome()">← 返回主页</button>
      <span class="filter-label">🎯 生活口语课</span>
    </div>
    <div class="section-desc" style="margin-bottom:14px">每个单元 = 一个「交际任务」，从多部剧里聚合同场景的说法。先看剧里怎么说的，学句型骨架，再用练习检验。</div>
    <div class="unit-card" onclick="openUnit(0)" style="background:#FFFDF7;border:1px solid #F0E6CC;border-radius:14px;padding:18px;cursor:pointer">
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:15px">💬</span>
        <b style="font-size:15px">委婉反驳 · polite disagreement</b>
        <span class="badge-dim" style="margin-left:auto">5 张语料卡</span>
      </div>
      <div style="font-size:12px;color:#8A6D2F;margin:8px 0 4px">📺 摩登家庭 ×2 · 查理成长日记 ×2 · 卡戴珊家族 ×1 ｜ 强度弱→强递增</div>
      <div style="font-size:12.5px;color:#4A4A42;line-height:1.7">先看剧里怎么委婉说「不」——It's just that / I wouldn't say / Don't take this the wrong way… 学会在不同场合软着陆。</div>
      <div style="font-size:12.5px;color:#854F0B;margin-top:12px;font-weight:500">打开本单元 →</div>
    </div>`;
}'''
assert c.count(old) == 1, 'renderCourseHome anchor %d' % c.count(old)

new_map = '''function renderCourseHome(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const done = courseUnitDone();
  const units = [
    {id:"D", ico:"💬", name:"委婉反驳", sub:"polite disagreement", cards:5, status: done.done ? "done" : "current", stars: done.stars||0, tip:"先肯定再补一刀"},
    {id:"R", ico:"🙅", name:"委婉拒绝", sub:"polite refusal", cards:0, status:"locked", tip:"I'd love to, but…"},
    {id:"S", ico:"😅", name:"尴尬圆场", sub:"saving the moment", cards:0, status:"locked", tip:"轻松化解冷场"},
    {id:"F", ico:"🏠", name:"家庭拌嘴", sub:"family bickering", cards:0, status:"locked", tip:"亲密关系的火药味"},
    {id:"A", ico:"🙏", name:"道歉安抚", sub:"apology & comfort", cards:0, status:"locked", tip:"说错话后的补救"},
    {id:"H", ico:"🤝", name:"请求帮忙", sub:"asking a favor", cards:0, status:"locked", tip:"开口求助的艺术"}
  ];
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">'+
      '<button class="q-btn ghost" onclick="renderLearnHome()">← 返回主页</button>'+
      '<span class="filter-label">🎯 生活口语课</span>'+
    '</div>'+
    '<div class="dlg-sub">每天闯一关，学会一个「交际任务」的所有说法</div>'+
    '<div class="dlg-map">'+
      units.map(function(u,i){
        const cls = u.status==="locked" ? "dlg-node locked" : u.status==="done" ? "dlg-node done" : "dlg-node current";
        const left = i%2===0 ? 0 : 130;
        const body = u.status==="locked"
          ? '<div class="dlg-lock">🔒</div><div class="dlg-name">'+u.name+'</div><div class="dlg-sub2">'+u.sub+'</div>'
          : '<div class="dlg-ico">'+u.ico+'</div><div class="dlg-name">'+u.name+'</div><div class="dlg-sub2">'+u.sub+'</div>'+
            (u.status==="done"
              ? '<div class="dlg-stars">'+("⭐".repeat(u.stars))+'<span style="color:#D3D1C7">'+("⭐".repeat(3-u.stars))+'</span></div><div class="dlg-tip">已通关</div>'
              : '<div class="dlg-stars" style="color:#7F77DD">●</div><div class="dlg-tip">'+u.tip+'</div>');
        return '<div class="dlg-node-wrap" style="margin-left:'+left+'px">'+
          (i>0?'<div class="dlg-link"></div>':"")+
          '<div class="'+cls+'" onclick="'+(u.status!=="locked"?"openUnit(0)":"")+'">'+body+'</div>'+
          '</div>';
      }).join("")+
    '</div>'+
    '<div class="dlg-foot">🗺️ 前方还有 '+units.filter(function(u){return u.status==="locked";}).length+' 关等待解锁 · 每关一个交际任务，从多部剧聚合同场景说法</div>';
}
function courseUnitDone(){
  try{ var d = JSON.parse(localStorage.getItem("wb_course_unit1")||"{}"); return {done:!!d.done, stars:d.stars||0}; }
  catch(e){ return {done:false, stars:0}; }
}
function saveUnitDone(stars){
  try{ localStorage.setItem("wb_course_unit1", JSON.stringify({done:true, stars:stars})); }catch(e){}
}'''
c = c.replace(old, new_map, 1)

# 2) finishUnit：保存完成度 + 星星动画
old_done = '''      '<div style="font-size:12px;color:#8892A0">答错的题都配了讲解卡，可以「再练一次」巩固</div>'+'''
new_done = '''      '<div style="font-size:12px;color:#8892A0">答错的题都配了讲解卡，可以「再练一次」巩固</div>'+
      '<div class="dlg-congrats">🎉</div>'+'''
assert c.count(old_done) == 1, 'finish anchor %d' % c.count(old_done)
c = c.replace(old_done, new_done, 1)

# 保存完成度：在 finishUnit 的 c.innerHTML 赋值前插入 saveUnitDone(stars)
old_save = '''  const stars=acc>=0.9?3:acc>=0.7?2:1;
  c.innerHTML='''
new_save = '''  const stars=acc>=0.9?3:acc>=0.7?2:1;
  saveUnitDone(stars);
  c.innerHTML='''
assert c.count(old_save) == 1, 'save anchor %d' % c.count(old_save)
c = c.replace(old_save, new_save, 1)

# 3) 进度环：renderUnitQ 顶部进度条 → 圆环 + 单元图标
old_ring = '''      '<div class="dlq-progress"><div class="dlq-progress-fill" style="width:'+pct+'%"></div></div>'+
      '<span class="dlq-count">'+(qIndex+1)+'/'+qList.length+'</span>'+'''
new_ring = '''      '<div class="dlq-ring"><svg viewBox="0 0 48 48" width="42" height="42"><circle cx="24" cy="24" r="20" fill="none" stroke="#F1EFE8" stroke-width="6"/><circle cx="24" cy="24" r="20" fill="none" stroke="#1D9E75" stroke-width="6" stroke-dasharray="125.6" stroke-dashoffset="'+Math.round(125.6*(1-qIndex/qList.length))+' " stroke-linecap="round" transform="rotate(-90 24 24)"/></svg></div>'+
      '<div class="dlq-count" style="font-size:13px;font-weight:500">💬 委婉反驳 <span style="color:#8892A0;font-weight:400">'+(qIndex+1)+'/'+qList.length+'</span></div>'+'''
assert c.count(old_ring) == 1, 'ring anchor %d' % c.count(old_ring)
c = c.replace(old_ring, new_ring, 1)

# 4) 答错陷阱提示：answerUnitQuiz 和 paintOrder 的 bad 反馈加错因
old_bad1 = '''  const combo=qCombo>=2?' <b style="color:#854F0B">🔥 连击 x'+qCombo+'</b>':"";
  fb.innerHTML='<div class="dlq-fb-box '+(ok?"ok":"bad")+'">'+(ok?"✅ 正确！"+combo:"❌ 正确答案：<b>"+q.ans+"</b>")+'</div>'+'''
new_bad1 = '''  const combo=qCombo>=2?' <b style="color:#854F0B">🔥 连击 x'+qCombo+'</b>':"";
  const trap = ok ? "" : '<div class="dlq-trap">⚠️ 错因：<b>'+el.textContent+'</b> 是中式直译或语气不当的说法，母语者不这么用——记住这个坑，比记住答案更值钱。</div>';
  fb.innerHTML='<div class="dlq-fb-box '+(ok?"ok":"bad")+'">'+(ok?"✅ 正确！"+combo:"❌ 正确答案：<b>"+q.ans+"</b>")+'</div>'+trap+'''
assert c.count(old_bad1) == 1, 'bad1 %d' % c.count(old_bad1)
c = c.replace(old_bad1, new_bad1, 1)

# 5) CSS（幂等）
if '.dlg-map{' not in c:
    css_anchor = '.dlq-done{'
    assert c.count(css_anchor) == 1, 'css %d' % c.count(css_anchor)
    new_css = '''.dlg-sub{font-size:12.5px;color:#8892A0;margin-bottom:16px}
.dlg-map{display:flex;flex-direction:column;gap:18px;padding:6px 0 10px}
.dlg-node-wrap{position:relative}
.dlg-link{position:absolute;top:-20px;left:90px;width:2px;height:20px;background:#D3D1C7}
.dlg-node{width:190px;border-radius:18px;padding:16px;cursor:pointer;text-align:center;transition:transform .15s}
.dlg-node:hover{transform:scale(1.03)}
.dlg-node.current{background:#EEEDFE;border:2px solid #534AB7;box-shadow:0 0 0 4px rgba(83,74,183,.12)}
.dlg-node.done{background:#E1F5EE;border:2px solid #1D9E75}
.dlg-node.locked{background:#F1EFE8;border:2px dashed #D3D1C7;opacity:.75;cursor:default}
.dlg-ico{font-size:30px;margin-bottom:6px}
.dlg-lock{font-size:24px;margin-bottom:4px}
.dlg-name{font-size:15px;font-weight:500;color:#2C2C2A}
.dlg-node.locked .dlg-name{color:#888780}
.dlg-sub2{font-size:11.5px;color:#8892A0;margin-top:2px}
.dlg-stars{font-size:15px;margin:6px 0 2px;letter-spacing:2px}
.dlg-tip{font-size:11px;color:#7F77DD;margin-top:2px}
.dlg-foot{font-size:12px;color:#8892A0;margin-top:12px;padding-top:10px;border-top:1px dashed #EDEAE0}
.dlg-ring{flex:0 0 auto}
.dlq-trap{background:#FDF6E8;border:1px solid #F0DFB0;border-radius:8px;padding:8px 12px;font-size:12px;color:#8A6D2F;margin-top:8px;line-height:1.7}
.dlg-congrats{font-size:34px;animation:dlgPop .5s ease;display:inline-block}
@keyframes dlgPop{0%{transform:scale(0);opacity:0}70%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('多邻国式体验 v4 落地完成')
