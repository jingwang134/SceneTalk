const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// V4（2-tab）新函数必须存在
const need = ['renderLearnHome','showLearnView','goLearnTopic','goLearnBrowse','goLearnWordbook','goLearnReview','doLearnSearch',
  'startPath','renderPathStage','renderFlash','flipFlash','flashMark',
  'renderPathQuiz','renderPathSpeak','renderPathDone','restartPathTopic','renderQuizQ','answerQuiz','nextQuiz','renderQuizResult',
  'renderSpeakStageInto','startSpeak','skipPrep','startSpeakTimer','checkMustUse','submitSpeak','generateSpeakModel',
  'renderWordbook','wbSet','wbRemove','wbUp','wbDown','wbLevel','wbCount',
  'renderTaskCard','nextDailyStep','renderQuickQuestion','answerTaskQuick','checkTaskCloze','completeDailyCard',
  'formatClozeSentence','highlightKeyPhrases','generateModelSummary','CUE_CARDS','buildDailyQueue','DAILY_GOAL','makeQuizItem',
  'showCombo','comboCount','restartQuiz','goPathSpeak','goPathDone','topicExpressions','topicMastery'];
const missing = need.filter(fn => !js.includes(fn));
console.log('缺失的新函数:', missing.length ? missing : '无 ✅');

// V2/V3 已删除函数不得回潮
const oldFns = ['setTrainTab','renderPathHome','renderQuizHome','renderSpeakHome','startQuiz','renderTrainSelector','renderTrainContent','setTrainMode',
  'selectTrainExpr','revealTrainClozeAnswer','renderTrainBanner','generateChecklist','stDot'];
const leftover = oldFns.filter(fn => js.includes(fn));
console.log('残留旧函数:', leftover.length ? leftover : '无 ✅');

// HTML 结构
['learn','learnHome','libraryView','trainPath','trainWordbook','path-grid','flash-card','wb-tabs'].forEach(id=>{
  if(!html.includes(id)) console.log('⚠️ HTML 缺少:', id);
});
console.log('HTML 检查完成');

// 关键变量
['pathTopic','pathPhase','flashList','flashIndex','flashStats','wbTab','speakTopicKey'].forEach(v=>{
  if(!js.includes(v)) console.log('⚠️ 变量缺失:', v);
});
console.log('变量检查完成');
