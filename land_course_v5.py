# v5 剧情学习流：开场页→场景卡→维度观点页→完成（删全部做题）
import io

PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 数据块替换
data = io.open('parts/course_daily.js', encoding='utf-8').read().strip()
ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」语料卡')
if ds == -1:
    ds = c.find('// ===== 生活口语课 · 单元1「委婉反驳」剧情学习单元')
assert ds != -1, 'data start not found'
de = c.find('];', c.find('const COURSE_DAILY_SKELETONS')) + 2
c = c[:ds] + data + c[de:]

# 2) 替换关卡 JS 区块（多邻国式关卡 → 剧情学习流）
start = c.find('// ===================== 多邻国式关卡')
assert start != -1, 'quiz block not found'
end = c.find('function showLearnView(view){')
assert end != -1 and end > start, 'showLearnView not found'

new_js = r'''// ===================== 剧情学习流（看剧学表达 · 场景→维度→完成） =====================
var sceneIdx = 0;
function openUnit(i){ sceneIdx = 0; renderUnitIntro(); }
function renderUnitIntro(){
  const U = COURSE_DAILY_UNIT1;
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
  const U = COURSE_DAILY_UNIT1;
  const c = document.getElementById("learnCourse");
  if(!c) return;
  const sc = U.scenes[sceneIdx];
  if(!sc){ renderUnitDims(); return; }
  const dim = U.dims[sc.dim];
  const pct = Math.round(sceneIdx/U.scenes.length*100);
  const dlg = sc.dialogue.map(function(d){
    const hl = d.en.indexOf(sc.key.split("…")[0].split("?")[0].split(",")[0])!==-1;
    return '<div class="sc-line"><span class="sc-sp">'+d.sp+'</span><div><div class="sc-en">'+(hl?'<span class="sc-hl">'+d.en+'</span>':d.en)+'</div><div class="sc-zh">'+d.zh+'</div></div></div>';
  }).join("");
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="openUnit(0)">← 重看开场</button>'+
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
  const U = COURSE_DAILY_UNIT1;
  sceneIdx++;
  if(sceneIdx>=U.scenes.length){ renderUnitDims(); return; }
  renderUnitScene();
}
function renderUnitDims(){
  const U = COURSE_DAILY_UNIT1;
  const c = document.getElementById("learnCourse");
  if(!c) return;
  c.innerHTML=''+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">'+
      '<button class="q-btn ghost" onclick="openUnit(0)">← 地图</button>'+
      '<span class="filter-label">🧭 不同维度的观点表达</span>'+
    '</div>'+
    '<div class="sc-dims-desc">同一个「委婉反驳」，有 '+U.dims.length+' 种打开方式——记住维度，就是记住了组织回答的骨架。</div>'+
    U.dims.map(function(d,di){
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
  const U = COURSE_DAILY_UNIT1;
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
        '<button class="q-btn reveal" onclick="openUnit(0)">🔄 再看一遍</button>'+
        '<button class="q-btn ghost" onclick="renderSkelTable()">📋 句型总表</button>'+
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
c = c[:start] + new_js + c[end:]

# 3) CSS（幂等）
if '.sc-intro{' not in c:
    css_anchor = '.dlg-map{'
    assert c.count(css_anchor) == 1, 'css %d' % c.count(css_anchor)
    new_css = '''.sc-intro{background:#fff;border:1px solid #EDEAE0;border-radius:18px;padding:24px;text-align:center}
.sc-intro-ico{font-size:40px;margin-bottom:8px}
.sc-intro-title{font-size:20px;font-weight:500;color:#2C2C2A}
.sc-intro-desc{font-size:13.5px;color:#4A4A42;line-height:1.8;margin:10px 0;text-align:left;background:#FDFBF4;border-radius:10px;padding:12px 14px}
.sc-intro-shows{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:10px 0}
.sc-show-chip{font-size:12px;color:#534AB7;background:#EEEDFE;border-radius:16px;padding:4px 12px}
.sc-intro-count{font-size:12px;color:#8892A0}
.sc-card{background:#fff;border:1px solid #EDEAE0;border-radius:16px;padding:18px}
.sc-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px}
.sc-src{font-size:12px;color:#854F0B;background:#FAEEDA;border-radius:8px;padding:4px 10px}
.sc-role{font-size:12px;color:#534AB7;background:#EEEDFE;border-radius:8px;padding:4px 10px}
.sc-dim{font-size:11.5px;color:#0F6E56;background:#E1F5EE;border-radius:8px;padding:4px 10px;margin-left:auto}
.sc-situation{font-size:13px;color:#4A4A42;background:#FDFBF4;border:1px dashed #F0E6CC;border-radius:10px;padding:10px 12px;margin-bottom:12px;line-height:1.7}
.sc-dialogue{background:#FAFAF7;border:1px solid #EDEAE0;border-radius:12px;padding:12px 14px;margin-bottom:12px}
.sc-line{display:flex;gap:10px;padding:7px 0}
.sc-sp{flex:0 0 52px;font-size:12px;font-weight:500;color:#534AB7;padding-top:2px}
.sc-en{font-size:14px;color:#2C2C2A;line-height:1.65}
.sc-zh{font-size:12.5px;color:#5A6B7A;margin-top:2px;line-height:1.6}
.sc-hl{background:#FBE9C9;color:#633806;font-weight:500;border-radius:4px;padding:0 3px}
.sc-why{background:#EEEDFE;border:1px solid #CECBF6;border-radius:10px;padding:10px 14px;font-size:12.5px;color:#3C3489;line-height:1.8;margin-bottom:10px}
.sc-alt{font-size:12px;color:#4A4A42}
.sc-alt-chip{font-size:12px;color:#0F6E56;background:#E1F5EE;border-radius:14px;padding:4px 10px}
.sc-dims-desc{font-size:13px;color:#4A4A42;background:#FDFBF4;border-radius:10px;padding:10px 14px;margin-bottom:12px;line-height:1.7}
.sc-dim-card{background:#fff;border:1px solid #EDEAE0;border-radius:14px;padding:16px;margin-bottom:12px}
.sc-dim-head{font-size:14px;font-weight:500;color:#2C2C2A;margin-bottom:4px}
.sc-dim-exp{font-size:12px;color:#8892A0;font-weight:400}
.sc-dim-line{padding:8px 0;border-bottom:1px dashed #F1EFE8}
.sc-dim-p{font-size:13.5px;color:#3C3489;font-weight:500;margin-right:8px}
.sc-dim-zh{font-size:12.5px;color:#7F77DD}
.sc-dim-use{font-size:12px;color:#5A6B7A;margin-top:3px;line-height:1.6}
.sc-dim-risk{font-size:11.5px;color:#A32D2D;margin-top:8px}
'''
    c = c.replace(css_anchor, new_css + css_anchor, 1)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('v5 剧情学习流落地完成')
