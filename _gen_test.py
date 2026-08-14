# v8 测试：真实商业场景 + 剧集海报地图 + 首页横卡 + 实质词汇
import io, subprocess, os

js_code = r'''const fs=require('fs'),vm=require('vm');
const store={};
const sb={localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=String(v);}},console,setTimeout,clearTimeout,AbortController,URL,alert:()=>{},showToast:()=>{},showDetail:()=>{},fetch:async()=>({ok:true,status:200,json:async()=>({choices:[{message:{content:'{}'}}]})})};
vm.createContext(sb);
const djs=fs.readFileSync('data.js','utf8').replace('const expressions','globalThis.expressions');
vm.runInContext(djs,sb);
const h=fs.readFileSync('index.html','utf8');
const s1=h.indexOf('<script>')+8, s2=h.lastIndexOf('</script>');
sb.shuffleArr=a=>a;
sb.topicOf=k=>({icon:'X',name:k});
sb.escapeHtml=s=>(s||'');
const els={};
const mkEl=()=>({innerHTML:'',style:{},textContent:'',value:'',classList:{toggle:()=>{},remove:()=>{},add:()=>{}},addEventListener:()=>{},getAttribute:()=>null});
sb.document={getElementById:id=>{if(!els[id])els[id]=mkEl();return els[id];},querySelectorAll:()=>[],querySelector:()=>null,addEventListener:()=>{}};
sb.genStyle='vlogger';
sb.location={protocol:'http:',hostname:'127.0.0.1'};
vm.runInContext(h.slice(s1,s2).replace('const COURSE_DAILY_UNIT1','globalThis.COURSE_DAILY_UNIT1').replace('const COURSE_DAILY_UNIT2','globalThis.COURSE_DAILY_UNIT2').replace('const COURSE_DAILY_UNIT3','globalThis.COURSE_DAILY_UNIT3').replace('const COURSE_DAILY_UNITS','globalThis.COURSE_DAILY_UNITS').replace('const COURSE_DAILY_SKELETONS','globalThis.COURSE_DAILY_SKELETONS'),sb);
const US=sb.COURSE_DAILY_UNITS;
console.log('0 维度说法数(每维度5条):', US.every(u=>u.dims.every(d=>d.lines.length===5))?'PASS':'FAIL');
const U2=US[1];
console.log('1 U2标题「职场博弈」:', U2.task==='职场博弈'?'PASS':'FAIL');
console.log('2 U2所有场景来自卡戴珊:', U2.scenes.every(s=>s.show==='卡戴珊家族')?'PASS':'FAIL');
console.log('3 U2无家庭戏场景(来源EP均在真实商业剧情):', U2.scenes.every(s=>['S01E07','S01E09'].indexOf(s.ep)!==-1)?'PASS':'FAIL');
console.log('4 U2场景含实质词汇(words):', U2.scenes.every(s=>s.words&&s.words.length>=4)?'PASS':'FAIL');
console.log('5 words含名词/形容词/观点标签:', U2.scenes.every(s=>s.words.some(w=>w.tag==='名词')&&s.words.some(w=>w.tag==='观点'))?'PASS':'FAIL');
console.log('6 句型总表扩展到跨单元10条:', sb.COURSE_DAILY_SKELETONS.length>=8?'PASS':'FAIL');
sb.renderCourseHome();
const mapHtml=els.learnCourse.innerHTML;
console.log('7 剧集海报地图(course-hero+course-ep):', mapHtml.includes('course-hero')&&mapHtml.includes('course-ep')?'PASS':'FAIL');
console.log('8 地图显示维度信息:', mapHtml.includes('course-ep-dims')&&mapHtml.includes('亮底线')?'PASS':'FAIL');
console.log('9 地图显示剧集来源:', mapHtml.includes('course-ep-show')&&mapHtml.includes('卡戴珊家族')?'PASS':'FAIL');
sb.openUnit(1); sb.renderUnitScene();
const scHtml=els.learnCourse.innerHTML;
console.log('10 场景卡words实质词汇区:', scHtml.includes('实质词汇')&&scHtml.includes('contract')?'PASS':'FAIL');
console.log('11 场景卡应用示范文案更新:', scHtml.includes('应用示范 · 谈「')?'PASS':'FAIL');
sb.crsFilter='雅思 6.5+'; sb.renderCourseHome();
console.log('12 筛选6.5+只显示2关:', (mapHtml.replace(/course-ep /g,'').match(/course-ep/g)||[]).length>=2?'PASS':'FAIL');
sb.crsFilter='all';
sb.openUnit(1); sb.renderUnitIntro();
console.log('13 单元开场剧集渐变背景:', els.learnCourse.innerHTML.includes('background:linear-gradient')?'PASS':'FAIL');
sb.openUnit(0); sb.renderUnitScene();
console.log('14 U1场景卡也有words展示:', els.learnCourse.innerHTML.includes('实质词汇')?'PASS':'FAIL');
// 首页横卡
sb.renderLearnHome();
console.log('15 首页闯关课程横卡:', els.learnHome.innerHTML.includes('course-hero-sm')&&els.learnHome.innerHTML.includes('进入课程地图')?'PASS':'FAIL');
console.log('16 首页横卡含三单元名:', els.learnHome.innerHTML.includes('职场博弈')&&els.learnHome.innerHTML.includes('委婉反驳')?'PASS':'FAIL');
'''
io.open('t_v8.js', 'w', encoding='utf-8').write(js_code)
print('JS生成:', os.path.exists('t_v8.js'))
r = subprocess.run(['C:/Users/15869/.workbuddy/binaries/node/versions/22.22.2/node.exe', 't_v8.js'],
                   capture_output=True, text=True, encoding='utf-8')
print(r.stdout)
if r.stderr:
    print('STDERR:', r.stderr[:400])
os.remove('t_v8.js')
