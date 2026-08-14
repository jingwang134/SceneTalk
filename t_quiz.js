const fs=require('fs'),vm=require('vm');
const store={};
const sb={localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=String(v);}},console,setTimeout,clearTimeout,AbortController,URL,alert:()=>{},showToast:()=>{},showDetail:()=>{},fetch:async()=>({ok:true,status:200,json:async()=>({choices:[{message:{content:'{}'}}]})})};
vm.createContext(sb);
const djs=fs.readFileSync('data.js','utf8').replace('const expressions','globalThis.expressions');
vm.runInContext(djs,sb);
const h=fs.readFileSync('index.html','utf8');
const s1=h.indexOf('<script>')+8, s2=h.lastIndexOf('</script>');
sb.shuffleArr=a=>{const r=a.slice();for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;};
sb.topicOf=k=>({icon:'X',name:k});
sb.escapeHtml=s=>(s||'');
const els={};
const mkEl=()=>({innerHTML:'',style:{},textContent:'',value:'',classList:{toggle:()=>{},remove:()=>{},add:()=>{}},addEventListener:()=>{},getAttribute:()=>null});
sb.document={getElementById:id=>{if(!els[id])els[id]=mkEl();return els[id];},querySelectorAll:()=>[],querySelector:()=>null,addEventListener:()=>{}};
sb.genStyle='vlogger';
sb.location={protocol:'http:',hostname:'127.0.0.1'};
vm.runInContext(h.slice(s1,s2).replace('const COURSE_DAILY_UNIT1','globalThis.COURSE_DAILY_UNIT1').replace('const COURSE_DAILY_SKELETONS','globalThis.COURSE_DAILY_SKELETONS'),sb);
try{ sb.openUnit(0); }catch(err){ console.log('OPENUNIT ERROR:', err.message.slice(0,200)); }
console.log('DEBUG innerHTML前300:', JSON.stringify(els.learnCourse.innerHTML.slice(0,300)));
console.log('1 题目总数:', sb.qList.length>=8&&sb.qList.length<=12?'PASS ('+sb.qList.length+'题)':'FAIL');
const types={};
sb.qList.forEach(q=>{types[q.type]=(types[q.type]||0)+1;});
console.log('2 题型混合:', JSON.stringify(types));
const u=els.learnCourse.innerHTML;
console.log('3 进度条:', u.includes('dlq-progress-fill')?'PASS':'FAIL');
console.log('4 题目卡渲染:', u.includes('dlq-prompt')&&u.includes('dlq-opt')?'PASS':'FAIL');
// 答对一题
const q0=sb.qList[0];
sb.answerUnitQuiz({textContent:q0.ans});
console.log('5 答对反馈:', els.dlqFb.innerHTML.includes('dlq-fb-box ok')&&els.dlqFb.innerHTML.includes('关键说法')?'PASS':'FAIL');
console.log('6 讲解卡(解释/同类/用起来):', els.dlqFb.innerHTML.includes('💡 解释')&&els.dlqFb.innerHTML.includes('🔗 同类说法')&&els.dlqFb.innerHTML.includes('🚀 用起来')?'PASS':'FAIL');
// 答错一题
sb.answerUnitQuiz({textContent:'完全错误选项'});
console.log('7 答错反馈:', els.dlqFb.innerHTML.includes('dlq-fb-box bad')?'PASS':'FAIL');
// 排序题
const orderQ=sb.qList.find(q=>q.type==='order');
if(orderQ){
  sb.startOrder(orderQ);
  console.log('8 排序渲染:', els.orderPool.innerHTML.includes('dlq-word')?'PASS':'FAIL');
  // 模拟按正确顺序点选
  const words=orderQ.ans.split(/\s+/);
  const origSel=sb.orderSel, origWords=sb.orderWords;
  // 直接手动模拟：把词按正确顺序填
  sb.orderSel=[];
  sb.orderWords=[];
  words.forEach((w,i)=>{ sb.orderSel.push(w); });
  sb.orderWords=[];
  sb.paintOrder();
  console.log('9 排序自动判对:', els.dlqFb.innerHTML.includes('语序正确')?'PASS':'FAIL');
}
// 直接跳到完成页
sb.qIndex=sb.qList.length-1; sb.qCorrect=Math.floor(sb.qList.length*0.9);
sb.nextUnitQ();
console.log('10 完成页:', els.learnCourse.innerHTML.includes('关卡完成')&&els.learnCourse.innerHTML.includes('⭐')?'PASS':'FAIL');
sb.renderSkelTable();
console.log('11 句型总表:', els.learnCourse.innerHTML.includes('句型总表')?'PASS':'FAIL');
