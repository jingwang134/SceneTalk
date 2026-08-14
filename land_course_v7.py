# v7 体验大改版：导航条 + 收藏 + 标签索引 + 应用示范 + 剧集风视觉
import io

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 数据块替换
data = io.open('parts/course_daily.js', encoding='utf-8').read().strip()
ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」剧情学习单元')
if ds == -1:
    ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」语料卡')
assert ds != -1, 'data start'
de = c.find('\nconst COURSE_DAILY_UNITS', ds)
if de == -1:
    de = c.find('];', c.find('const COURSE_DAILY_SKELETONS')) + 2
else:
    de = c.find('];', de) + 2
c = c[:ds] + data + c[de:]

# 2) 整体替换课程 JS（renderCourseHome → showLearnView）
start = c.find('function renderCourseHome(){')
assert start != -1, 'map start'
end = c.find('function showLearnView(view){')
assert end != -1 and end > start, 'end'

new_js = r'''// ===================== 课程：剧情学习流 v7（导航/收藏/标签/应用示范） =====================
var unitCur = 0;
var sceneIdx = 0;
var crsFilter = "all";
function navHtml(){
  var n = favScenes().length;
  return '<div class="crs-nav">'+
    '<button class="crs-nav-btn" onclick="renderLearnHome()">🏠 主页</button>'+
    '<button class="crs-nav-btn" onclick="renderCourseHome()">🗺️ 地图</button>'+
    '<button class="crs-nav-btn" onclick="renderFavList()">⭐ 收藏'+(n?' <b class="crs-nav-n">'+n+'</b>':"")+'</button>'+
    '<button class="crs-nav-btn" onclick="renderSkelTable()">📋 句型总表</button>'+
  '</div>';
}
// ---- 收藏 ----
function favScenes(){ try{ return JSON.parse(localStorage.getItem("wb_fav_scenes")||"[]"); }catch(e){ return []; } }
function saveFavs(f){ try{ localStorage.setItem("wb_fav_scenes", JSON.stringify(f)); }catch(e){} }
function isFav(u,s){ return favScenes().some(function(x){ return x.u===u && x.s===s; }); }
function toggleFav(u,s){
  var f = favScenes();
  if(isFav(u,s)){ f = f.filter(function(x){ return !(x.u===u && x.s===s); }); }
  else { f.push({u:u, s:s}); }
  saveFavs(f);
  if(unitCur===u && sceneIdx===s && document.getElementById("learnCourse")) renderUnitScene();
  else renderFavList();
}
function renderFavList(){
  var c = document.getElementById("learnCourse");
  if(!c) return;
  var f = favScenes(); var U = COURSE_DAILY_UNITS;
  c.innerHTML = navHtml() +
    '<div class="filter-label" style="margin:10px 0">⭐ 我的收藏（'+f.length+'）</div>' +
    (f.length===0
      ? '<div class="dlq-done" style="padding:22px"><div style="font-size:26px">⭐</div><div style="margin:8px 0">还没有收藏</div><div style="font-size:12px;color:#8892A0">在剧情场景卡右上角点 ☆ 收藏，学会的说法随手存下</div></div>'
      : f.map(function(x){
          var u = U[x.u]; if(!u) return "";
          var sc = u.scenes[x.s]; if(!sc) return "";
          return '<div class="fav-card" onclick="openUnit('+x.u+');sceneIdx='+x.s+';renderUnitScene()">'+
            '<span class="fav-ico">'+u.icon+'</span>'+
            '<div class="fav-body"><div class="fav-title">'+u.task+' · '+sc.show+' '+sc.ep+'</div><div class="fav-key">'+sc.key+'</div></div>'+
            '<button class="fav-x" onclick="event.stopPropagation();toggleFav('+x.u+','+x.s+')">✕</button>'+
          '</div>';
        }).join(""));
}
// ---- 地图 ----
function renderCourseHome(){
  var c = document.getElementById("learnCourse");
  if(!c) return;
  var units = COURSE_DAILY_UNITS;
  var shown = crsFilter==="all" ? units : units.filter(function(u){ return u.level===crsFilter; });
  var firstOpen = -1;
  units.forEach(function(u,i){ if(firstOpen<0 && !courseUnitDone(i).done) firstOpen=i; });
  var doneN = units.filter(function(u,i){ return courseUnitDone(i).done; }).length;
  c.innerHTML = navHtml() +
    '<div class="filter-label" style="margin:12px 0 8px">🎯 生活口语课 <span style="font-size:12px;color:#8892A0;font-weight:400">· 已通关 '+doneN+'/'+units.length+' 关</span></div>' +
    '<div class="crs-filter">'+
      '<button class="filter-btn '+(crsFilter==="all"?"active":"")+'" onclick="crsFilter=\'all\';renderCourseHome()">全部</button>'+
      '<button class="filter-btn '+(crsFilter==="入门"?"active":"")+'" onclick="crsFilter=\'入门\';renderCourseHome()">入门</button>'+
      '<button class="filter-btn '+(crsFilter==="雅思 6.5+"?"active":"")+'" onclick="crsFilter=\'雅思 6.5+\';renderCourseHome()">雅思 6.5+</button>'+
    '</div>' +
    '<div class="dlg-sub">每天闯一关，学会一个「交际任务」的所有说法 · 全部来自真实台本</div>' +
    '<div class="dlg-map">'+
      shown.map(function(u,i){
        var gi = units.indexOf(u);
        var st = courseUnitDone(gi).done ? "done" : (gi===firstOpen ? "current" : "locked");
        var left = (i%2===0) ? 0 : 130;
        var body = st==="locked"
          ? '<div class="dlg-lock">🔒</div><div class="dlg-name">'+u.icon+' '+u.task+'</div><div class="dlg-sub2">'+u.level+'</div>'
          : '<div class="dlg-ico">'+u.icon+'</div><div class="dlg-name">'+u.task+'</div><div class="dlg-sub2">'+u.level+'</div>'+
            (st==="done"
              ? '<div class="dlg-stars">⭐⭐⭐</div><div class="dlg-tip">已通关</div>'
              : '<div class="dlg-stars" style="color:#7F77DD">●</div><div class="dlg-tip">'+u.scenes.length+' 个场景 · '+u.dims.length+' 个维度</div>');
        return '<div class="dlg-node-wrap" style="margin-left:'+left+'px">'+
          (i>0?'<div class="dlg-link"></div>':"")+
          '<div class="dlg-node '+st+'" onclick="'+(st!=="locked"?"openUnit("+gi+")":"")+'">'+body+'</div>'+
          '</div>';
      }).join("")+
    '</div>' +
    '<div class="dlg-foot">🗺️ 前方还有 '+(units.length-firstOpen-1)+' 关等待解锁 · 收藏 ⭐ 的好说法可在导航随时找回</div>';
}
function courseUnitDone(idx){
  try{ var d = JSON.parse(localStorage.getItem("wb_course_unit"+idx)||"{}"); return {done:!!d.done, stars:d.stars||0}; }
  catch(e){ return {done:false, stars:0}; }
}
function saveUnitDone(stars){
  try{ localStorage.setItem("wb_course_unit"+unitCur, JSON.stringify({done:true, stars:stars})); }catch(e){}
}
// ---- 学习流 ----
function openUnit(i){ unitCur = i; sceneIdx = 0; renderUnitIntro(); }
function renderUnitIntro(){
  var U = COURSE_DAILY_UNITS[unitCur];
  var c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML = navHtml() +
    '<div class="sc-intro">'+
      '<div class="sc-intro-ico">'+U.icon+'</div>'+
      '<div class="sc-intro-title">'+U.task+' <span style="color:#8892A0;font-weight:400">· '+U.en+'</span></div>'+
      '<div class="sc-intro-level">'+U.level+'</div>'+
      '<div class="sc-intro-desc">'+U.intro+'</div>'+
      '<div class="sc-intro-shows">'+U.shows.map(function(s){return '<span class="sc-show-chip">📺 '+s+'</span>';}).join("")+'</div>'+
      '<div class="sc-intro-count">共 '+U.scenes.length+' 个剧情场景 · 来自真实台本</div>'+
      '<button class="q-btn reveal" style="width:100%;margin-top:14px;padding:13px" onclick="renderUnitScene()">▶ 开始看第 1 个场景</button>'+
    '</div>';
}
function renderUnitScene(){
  var U = COURSE_DAILY_UNITS[unitCur];
  var c = document.getElementById("learnCourse");
  if(!c) return;
  var sc = U.scenes[sceneIdx];
  if(!sc){ renderUnitDims(); return; }
  var dim = U.dims[sc.dim];
  var pct = Math.round(sceneIdx/U.scenes.length*100);
  var dlg = sc.dialogue.map(function(d){
    var key0 = sc.key.split("…")[0].split("?")[0].split(",")[0].replace(/\.$/, "");
    var hl = key0.length>3 && d.en.indexOf(key0)!==-1;
    return '<div class="sc-line"><span class="sc-sp">'+d.sp+'</span><div><div class="sc-en">'+(hl?'<span class="sc-hl">'+d.en+'</span>':d.en)+'</div><div class="sc-zh">'+d.zh+'</div></div></div>';
  }).join("");
  var favBtn = isFav(unitCur,sceneIdx) ? '⭐ 已收藏' : '☆ 收藏';
  var applyHtml = dim.lines.slice(0,2).map(function(l){
    return '<div class="sc-apply-line"><span class="sc-dim-p">'+l.p+'</span><span class="sc-apply-use">'+l.use+'</span></div>';
  }).join("");
  c.innerHTML = navHtml() +
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<div class="dlq-ring"><svg viewBox="0 0 48 48" width="42" height="42"><circle cx="24" cy="24" r="20" fill="none" stroke="#F1EFE8" stroke-width="6"/><circle cx="24" cy="24" r="20" fill="none" stroke="#1D9E75" stroke-width="6" stroke-dasharray="125.6" stroke-dashoffset="'+Math.round(125.6*(1-sceneIdx/U.scenes.length))+' " stroke-linecap="round" transform="rotate(-90 24 24)"/></svg></div>'+
      '<div style="font-size:13px;font-weight:500">'+U.icon+' '+U.task+'<div style="font-size:11px;color:#8892A0;font-weight:400">场景 '+(sceneIdx+1)+' / '+U.scenes.length+'</div></div>'+
      '<button class="crs-fav-btn '+(isFav(unitCur,sceneIdx)?"on":"")+'" onclick="toggleFav('+unitCur+','+sceneIdx+')">'+favBtn+'</button>'+
    '</div>'+
    '<div class="sc-card">'+
      '<div class="sc-head sc-head-stage"><span class="sc-src">📺 '+sc.show+' '+sc.ep+'</span><span class="sc-role">'+sc.chars.join(' / ')+'</span><span class="sc-dim">'+dim.ico+' '+dim.name+'</span></div>'+
      '<div class="sc-situation">🎬 情境：'+sc.situation+'</div>'+
      '<div class="sc-dialogue">'+dlg+'</div>'+
      '<div class="sc-why"><b>💡 这句好在哪</b><div>'+sc.why+'</div></div>'+
      '<div class="sc-apply"><b>🗣️ 应用示范 · 这句话可以这么说</b>'+applyHtml+'</div>'+
      '<div class="sc-alt"><b>🔗 同维度换着说</b><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">'+sc.alt.map(function(a){return '<span class="sc-alt-chip">'+a+'</span>';}).join("")+'</div></div>'+
    '</div>'+
    '<button class="q-btn reveal" style="width:100%;margin-top:14px;padding:13px" onclick="nextScene()">'+(sceneIdx>=U.scenes.length-1?'✅ 场景看完 · 看维度总结':'✅ 看懂了，下一个场景 →')+'</button>';
}
function nextScene(){
  var U = COURSE_DAILY_UNITS[unitCur];
  sceneIdx++;
  if(sceneIdx>=U.scenes.length){ renderUnitDims(); return; }
  renderUnitScene();
}
function renderUnitDims(){
  var U = COURSE_DAILY_UNITS[unitCur];
  var c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML = navHtml() +
    '<div class="filter-label" style="margin:10px 0">🧭 不同维度的观点表达</div>' +
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
      '<button class="q-btn reveal" style="flex:1" onclick="finishUnit()">🏁 完成本关</button>'+
    '</div>';
}
function finishUnit(){
  var U = COURSE_DAILY_UNITS[unitCur];
  var c = document.getElementById("learnCourse");
  if(!c) return;
  saveUnitDone(3);
  c.innerHTML = navHtml() +
    '<div class="dlq-done">'+
      '<div class="dlg-congrats">🎉</div>'+
      '<div style="font-size:20px;font-weight:500;margin:8px 0">本关完成！</div>'+
      '<div class="dlq-stars">⭐⭐⭐</div>'+
      '<div style="font-size:13.5px;margin:8px 0">已看完 <b>'+U.scenes.length+'</b> 个剧情场景 · 掌握 <b>'+U.dims.length+'</b> 个维度</div>'+
      '<div style="font-size:12px;color:#8892A0">下回遇到类似场景，试着用这些说法软着陆</div>'+
      '<div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap">'+
        '<button class="q-btn reveal" onclick="openUnit('+unitCur+')">🔄 再看一遍</button>'+
        '<button class="q-btn ghost" onclick="renderCourseHome()">🗺️ 下一关</button>'+
      '</div>'+
    '</div>';
}
function renderSkelTable(){
  var c = document.getElementById("learnCourse");
  c.innerHTML = navHtml() +
    '<div class="filter-label" style="margin:10px 0">📋 句型总表（情绪弱→强）</div>'+
    COURSE_DAILY_SKELETONS.map(function(s){
      return '<div class="skel-row"><span class="skel-e">'+s.emotion+'</span><span class="skel-s">'+s.key+'</span><span class="skel-x">'+s.example+'</span><span class="skel-src">'+s.source+'</span></div>';
    }).join("");
}
'''
c = c[:start] + new_js + c[end:]

# 3) CSS（幂等）
if '.crs-nav{' not in c:
    css_anchor = '.sc-intro{'
    assert c.count(css_anchor) == 1, 'css %d' % c.count(css_anchor)
    new_css = '''.crs-nav{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.crs-nav-btn{font-size:12.5px;padding:7px 14px;border-radius:20px;border:1px solid #EDEAE0;background:#fff;color:#444441;cursor:pointer}
.crs-nav-btn:hover{border-color:#BA7517;color:#854F0B}
.crs-nav-n{color:#854F0B}
.crs-filter{display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap}
.crs-fav-btn{font-size:12px;padding:6px 12px;border-radius:16px;border:1px solid #F0DFB0;background:#FDFBF4;color:#8A6D2F;cursor:pointer;margin-left:auto}
.crs-fav-btn.on{background:#FAEEDA;border-color:#EF9F27;color:#854F0B}
.fav-card{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #EDEAE0;border-radius:14px;padding:12px 14px;margin-bottom:8px;cursor:pointer}
.fav-card:hover{border-color:#CECBF6}
.fav-ico{font-size:22px}
.fav-body{flex:1;min-width:0}
.fav-title{font-size:12px;color:#8892A0}
.fav-key{font-size:14px;font-weight:500;color:#2C2C2A;margin-top:2px}
.fav-x{font-size:13px;color:#8892A0;background:none;border:none;cursor:pointer}
.sc-intro-level{font-size:11.5px;color:#854F0B;background:#FAEEDA;border-radius:14px;padding:3px 10px;display:inline-block;margin:8px 0}
.sc-head-stage{background:#26215C;border-radius:10px;padding:8px 10px;margin:-12px -14px 12px;flex-wrap:wrap}
.sc-head-stage .sc-src{background:rgba(255,255,255,.12);color:#CECBF6}
.sc-head-stage .sc-role{background:rgba(255,255,255,.12);color:#AFA9EC}
.sc-head-stage .sc-dim{background:rgba(255,255,255,.12);color:#9FE1CB}
.sc-apply{background:#E1F5EE;border:1px solid #9FE1CB;border-radius:10px;padding:10px 14px;font-size:12px;color:#085041;line-height:1.7;margin-bottom:10px}
.sc-apply b{font-size:12px}
.sc-apply-line{display:flex;gap:8px;align-items:baseline;padding:3px 0;flex-wrap:wrap}
.sc-apply-use{font-size:12px;color:#0F6E56;font-style:italic}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('v7 体验大改版落地完成')
