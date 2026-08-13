# -*- coding: utf-8 -*-
# 前端兼容密度档（questions/comparison 可能为空）
import io
PATH = 'index.html'
c = io.open(PATH, encoding='utf-8').read()

# 1) 详情面板：comparison 为空时显示补全提示
old1 = '<div class="topic-use-box">${tp.icon} <b>${tp.name}</b> — 可直接用于 IELTS Speaking/Writing 中「${e.comparison.topic}」类话题，也适用于相关延伸讨论。</div>'
new1 = '<div class="topic-use-box">${tp.icon} <b>${tp.name}</b> — ${e.comparison&&e.comparison.topic?("可直接用于 IELTS Speaking/Writing 中「"+e.comparison.topic+"」类话题，也适用于相关延伸讨论。"):"该表达的精讲数据（提问/5分vs7分对比）补充中，先用例句和挖空学习。"}</div>'
assert c.count(old1) == 1, 'old1 ' + str(c.count(old1))
c = c.replace(old1, new1)

# 2) 今日任务非段落分支：questions 为空时退化为自由造句
old2 = '''          <div class="q-text" style="display:block;margin-bottom:10px">${e.questions[0].q}</div>
          <textarea class="q-input" placeholder="用这个表达组织你的回答..." id="taskOutput"></textarea>
          <div class="q-actions" style="margin-top:8px">
            <button class="q-btn reveal" onclick="revealTaskOutput()">查看参考答案</button>
          </div>
          <div class="q-sample" id="taskOutputModel"><b>参考答案：</b>${e.questions[0].a}</div>'''
new2 = '''          <div class="q-text" style="display:block;margin-bottom:10px">${e.questions&&e.questions.length?e.questions[0].q:("用「"+e.english+"」造一个句子，或说一小段相关的话。")}</div>
          <textarea class="q-input" placeholder="用这个表达组织你的回答..." id="taskOutput"></textarea>
          <div class="q-actions" style="margin-top:8px">
            <button class="q-btn reveal" onclick="revealTaskOutput()">${e.questions&&e.questions.length?"查看参考答案":"看例句提示"}</button>
          </div>
          <div class="q-sample" id="taskOutputModel"><b>${e.questions&&e.questions.length?"参考答案：":"例句提示："}</b>${e.questions&&e.questions.length?e.questions[0].a:("可参考例句： "+e.example)}</div>'''
assert c.count(old2) == 1, 'old2 ' + str(c.count(old2))
c = c.replace(old2, new2)

# 3) generateModelSummary：comparison 为空时去掉话题引用
old3 = 'return `这段话的核心表达包括：${kwList}。主要观点是：${e.chinese}。在雅思口语/写作中，可以将这些表达用于「${tp.name}」话题（例如「${e.comparison.topic}」），先列举具体场景（建立真实感），再提炼洞察（展现思考深度），最后用对比结构收尾（增强说服力）。`;'
new3 = 'return `这段话的核心表达包括：${kwList}。主要观点是：${e.chinese}。在雅思口语/写作中，可以将这些表达用于「${tp.name}」话题${e.comparison&&e.comparison.topic?("（例如「"+e.comparison.topic+"」）"):""}，先列举具体场景（建立真实感），再提炼洞察（展现思考深度），最后用对比结构收尾（增强说服力）。`;'
assert c.count(old3) == 1, 'old3 ' + str(c.count(old3))
c = c.replace(old3, new3)

# 4) 雅思对比 tab：过滤掉没有 comparison 的条目
old4 = 'function renderComparison(){\n  document.getElementById("cmpList").innerHTML=expressions.map(e=>{'
new4 = 'function renderComparison(){\n  document.getElementById("cmpList").innerHTML=expressions.filter(e=>e.comparison&&e.comparison.score5).map(e=>{'
assert c.count(old4) == 1, 'old4 ' + str(c.count(old4))
c = c.replace(old4, new4)

io.open(PATH, 'w', encoding='utf-8').write(c)
print('OK: 4 处兼容性修改完成')
