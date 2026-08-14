# v6 多单元支持：地图从 COURSE_DAILY_UNITS 生成 + 学习流按单元索引
import io

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 数据块替换
data = io.open('parts/course_daily.js', encoding='utf-8').read().strip()
ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」剧情学习单元')
if ds == -1:
    ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」语料卡')
assert ds != -1, 'data start not found'
de = c.find('];', c.find('const COURSE_DAILY_SKELETONS')) + 2
# 数据块可能到文件末尾（SKELETONS 后是 UNITS），统一找到 UNITS 结束
units_end = c.find('\nconst COURSE_DAILY_UNITS', de)
if units_end != -1:
    de2 = c.find('];', units_end) + 2
    if de2 > de:
        de = de2
c = c[:ds] + data + c[de:]

# 2) renderCourseHome 替换（地图多节点）
old_map_start = c.find('function renderCourseHome(){')
old_map_end = c.find('// ===================== 剧情学习流')
assert old_map_start != -1 and old_map_end > old_map_start, 'map bounds'

new_map = r'''function renderCourseHome(){
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const units = COURSE_DAILY_UNITS;
  let firstOpen = -1;
  units.forEach(function(u,i){ if(firstOpen<0 && !courseUnitDone(i).done) firstOpen=i; });
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">'+
      '<button class="q-btn ghost" onclick="renderLearnHome()">← 返回主页</button>'+
      '<span class="filter-label">🎯 生活口语课</span>'+
    '</div>'+
    '<div class="dlg-sub">每天闯一关，学会一个「交际任务」的所有说法 · 已通关 '+units.filter(function(u,i){return courseUnitDone(i).done;}).length+'/'+units.length+' 关</div>'+
    '<div class="dlg-map">'+
      units.map(function(u,i){
        const st = courseUnitDone(i).done ? "done" : (i===firstOpen ? "current" : "locked");
        const left = i%2===0 ? 0 : 130;
        const body = st==="locked"
          ? '<div class="dlg-lock">🔒</div><div class="dlg-name">'+u.icon+' '+u.task+'</div><div class="dlg-sub2">'+u.en+'</div>'
          : '<div class="dlg-ico">'+u.icon+'</div><div class="dlg-name">'+u.task+'</div><div class="dlg-sub2">'+u.en+'</div>'+
            (st==="done"
              ? '<div class="dlg-stars">⭐⭐⭐</div><div class="dlg-tip">已通关</div>'
              : '<div class="dlg-stars" style="color:#7F77DD">●</div><div class="dlg-tip">'+u.scenes.length+' 个场景 · '+u.dims.length+' 个维度</div>');
        return '<div class="dlg-node-wrap" style="margin-left:'+left+'px">'+
          (i>0?'<div class="dlg-link"></div>':"")+
          '<div class="dlg-node '+st+'" onclick="'+(st!=="locked"?"openUnit("+i+")":"")+'">'+body+'</div>'+
          '</div>';
      }).join("")+
    '</div>'+
    '<div class="dlg-foot">🗺️ 前方还有 '+(units.length-firstOpen-1)+' 关等待解锁 · 全部来自真实台本场景</div>';
}
function courseUnitDone(idx){
  try{ var d = JSON.parse(localStorage.getItem("wb_course_unit"+idx)||"{}"); return {done:!!d.done, stars:d.stars||0}; }
  catch(e){ return {done:false, stars:0}; }
}
function saveUnitDone(stars){
  try{ localStorage.setItem("wb_course_unit"+unitCur, JSON.stringify({done:true, stars:stars})); }catch(e){}
}
'''
c = c[:old_map_start] + new_map + c[old_map_end:]

# 3) 剧情学习流替换（支持单元索引）
start = c.find('// ===================== 剧情学习流')
assert start != -1, 'flow block not found'
end = c.find('function showLearnView(view){')
assert end != -1 and end > start, 'showLearnView not found'

new_flow = r'''// ===================== 剧情学习流（看剧学表达 · 多单元） =====================
var unitCur = 0;
var sceneIdx = 0;
function openUnit(i){ unitCur = i; sceneIdx = 0; renderUnitIntro(); }
function renderUnitIntro(){
  const U = COURSE_DAILY_UNITS[unitCur];
  const c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="renderCourseHome()">← 地图</button>'+
      '<span class="filter-label">'+U.icon+' '+U.task+'</span>'+
    '</div>'+
    '<div class="sc-intro">'+
      '<div class="sc-intro-ico">'+U.icon+'</div>'+
      '<div class="sc-intro-title">'+U.task+' <span style="color:#8892A0;font-weight:400">· '+U.en+'</span></div>'+
      '<div class="sc-intro-desc">'+U.intro+'</div>'+
      '<div class="sc-intro-shows">'+U.shows.map(function(s){return '<span class="sc-show-chip">📺 '+s+'</span>';}).join("")+'</div>'+
      '<div class="sc-intro-count">共 '+U.scenes.length+' 个剧情场景 · 来自真实台本</div>'+
      '<button class="q-btn reveal" style="width:100%;margin-top:14px;padding:13px" onclick="renderUnitScene()">▶ 开始看第 1 个场景</button>'+
    '</div>';
}
function renderUnitScene(){
  const U = COURSE_DAILY_UNITS[unitCur];
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const sc = U.scenes[sceneIdx];
  if(!sc){ renderUnitDims(); return; }
  const dim = U.dims[sc.dim];
  const pct = Math.round(sceneIdx/U.scenes.length*100);
  const dlg = sc.dialogue.map(function(d){
    const hl = d.en.indexOf(sc.key.split("…")[0].split("?")[0].split(",")[0].replace(/\.$/, ""))!==-1;
    return '<div class="sc-line"><span class="sc-sp">'+d.sp+'</span><div><div class="sc-en">'+(hl?'<span class="sc-hl">'+d.en+'</span>':d.en)+'</div><div class="sc-zh">'+d.zh+'</div></div></div>';
  }).join("");
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="openUnit('+unitCur+')">← 重看开场</button>'+
      '<div class="dlq-ring"><svg viewBox="0 0 48 48" width="42" height="42"><circle cx="24" cy="24" r="20" fill="none" stroke="#F1EFE8" stroke-width="6"/><circle cx="24" cy="24" r="20" fill="none" stroke="#1D9E75" stroke-width="6" stroke-dasharray="125.6" stroke-dashoffset="'+Math.round(125.6*(1-sceneIdx/U.scenes.length))+' " stroke-linecap="round" transform="rotate(-90 24 24)"/></svg></div>'+
      '<div class="dlq-count" style="font-size:13px;font-weight:500">场景 '+(sceneIdx+1)+' / '+U.scenes.length+'</div>'+
    '</div>'+
    '<div class="sc-card">'+
      '<div class="sc-head"><span class="sc-src">📺 '+sc.show+' '+sc.ep+'</span><span class="sc-role">'+sc.chars.join(' / ')+'</span><span class="sc-dim">'+dim.ico+' '+dim.name+'</span></div>'+
      '<div class="sc-situation">🎬 情境：'+sc.situation+'</div>'+
      '<div class="sc-dialogue">'+dlg+'</div>'+
      '<div class="sc-why"><b>💡 这句好在哪</b><div>'+sc.why+'</div></div>'+
      '<div class="sc-alt"><b>🔗 同维度换着说</b><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">'+sc.alt.map(function(a){return '<span class="sc-alt-chip">'+a+'</span>';}).join("")+'</div></div>'+
    '</div>'+
    '<button class="q-btn reveal" style="width:100%;margin-top:14px;padding:13px" onclick="nextScene()">'+(sceneIdx>=U.scenes.length-1?'✅ 场景看完 · 看维度总结':'✅ 看懂了，下一个场景 →')+'</button>';
}
function nextScene(){
  const U = COURSE_DAILY_UNITS[unitCur];
  sceneIdx++;
  if(sceneIdx>=U.scenes.length){ renderUnitDims(); return; }
  renderUnitScene();
}
function renderUnitDims(){
  const U = COURSE_DAILY_UNITS[unitCur];
  const c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="openUnit('+unitCur+')">← 地图</button>'+
      '<span class="filter-label">🧭 不同维度的观点表达</span>'+
    '</div>'+
    '<div class="sc-dims-desc">同一个「'+U.task+'」，有 '+U.dims.length+' 种打开方式——记住维度，就是记住了组织回答的骨架。</div>'+
    U.dims.map(function(d){
      return '<div class="sc-dim-card">'+
        '<div class="sc-dim-head">'+d.ico+' '+d.name+' <span class="sc-dim-exp">'+d.exp+'</span></div>'+
        d.lines.map(function(l){
          return '<div class="sc-dim-line"><span class="sc-dim-p">'+l.p+'</span><span class="sc-dim-zh">'+l.zh+'</span>'+(l.use?'<div class="sc-dim-use">'+l.use+'</div>':"")+'</div>';
        }).join("")+
        '<div class="sc-dim-risk">⚠️ '+d.risk+'</div>'+
      '</div>';
    }).join("")+
    '<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">'+
      '<button class="q-btn ghost" style="flex:1" onclick="renderSkelTable()">📋 句型总表</button>'+
      '<button class="q-btn reveal" style="flex:1" onclick="finishUnit()">🏁 完成本关</button>'+
    '</div>';
}
function finishUnit(){
  const U = COURSE_DAILY_UNITS[unitCur];
  const c = document.getElementById("learnCourse");
  if(!c) return;
  saveUnitDone(3);
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="renderCourseHome()">← 地图</button>'+
      '<span class="filter-label">'+U.icon+' '+U.task+' · 完成</span>'+
    '</div>'+
    '<div class="dlq-done">'+
      '<div class="dlg-congrats">🎉</div>'+
      '<div style="font-size:20px;font-weight:500;margin:8px 0">本关完成！</div>'+
      '<div class="dlq-stars">⭐⭐⭐</div>'+
      '<div style="font-size:13.5px;margin:8px 0">已看完 <b>'+U.scenes.length+'</b> 个剧情场景 · 掌握 <b>'+U.dims.length+'</b> 个维度</div>'+
      '<div style="font-size:12px;color:#8892A0">下回遇到类似场景，试着用这些说法软着陆</div>'+
      '<div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap">'+
        '<button class="q-btn reveal" onclick="openUnit('+unitCur+')">🔄 再看一遍</button>'+
        '<button class="q-btn ghost" onclick="renderSkelTable()">📋 句型总表</button>'+
        '<button class="q-btn ghost" onclick="renderCourseHome()">🗺️ 下一关</button>'+
      '</div>'+
    '</div>';
}
function renderSkelTable(){
  const c = document.getElementById("learnCourse");
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="renderCourseHome()">← 地图</button>'+
      '<span class="filter-label">📋 句型总表（情绪弱→强）</span>'+
    '</div>'+
    COURSE_DAILY_SKELETONS.map(function(s){
      return '<div class="skel-row"><span class="skel-e">'+s.emotion+'</span><span class="skel-s">'+s.key+'</span><span class="skel-x">'+s.example+'</span><span class="skel-src">'+s.source+'</span></div>';
    }).join("");
}
'''
c = c[:start] + new_flow + c[end:]

io.open(PATH, 'w', encoding='utf-8').write(c)
print('v6 多单元支持落地完成')
