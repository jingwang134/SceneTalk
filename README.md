# 🎬 ScenePick 场景拾句

从美剧台本拾取雅思 6.5+ 地道表达的学习工作台。

- 📚 **表达库**：179 条雅思表达，按 **话题 → 维度（二级分类）→ 类型** 三级浏览（摩登家庭 + 查理成长日记）
- 🗺️ **话题路径**：原生观点范例（思维导图）→ 闪卡学词 → 闯关 → 雅思实战
- 📚 **我的词库**：记不住的表达自动收纳，陌生 / 模糊 / 认识三档复习
- 🎯 **今日任务**：按记忆状态自动排课
- 🎤 **雅思答案定制**：输入雅思问题 → 选人设/风格 → 生成带地道表达的答案（🎛️ 模板离线生成 或 🤖 AI 智能生成，AI 需自备 DeepSeek API Key）
- 🔥 **打卡 / XP**：连续打卡、经验等级、掌握状态机

## 📐 原生观点范例 · AI 生成规范（RULES-v2）

「原生观点范例」页采用**思维导图式结构**：每个话题 3 个维度，每个维度下挂紧贴该维度观点的语料（短语 → 台本真实句子 → 完整片段），并配雅思支架句。

- 规范文档：**《AI生成规则.md》**（生成时必须遵守）
- 质检脚本：**`node check_persp_v2.js`**（结构 + 来源真实性 + 维度语料匹配，全绿才可合入）
- 数据文件：**`perspectives.js`**（8 话题 × 3 维度 × 65 条语料）

## 🚀 在线预览（GitHub Pages）

1. 仓库 **Settings → Pages**
2. **Source** 选 `Deploy from a branch`
3. 分支选 `main`，目录选 `/ (root)`
4. Save，等 1-2 分钟
5. 访问 `https://jingwang134.github.io/SceneTalk/`

## 📤 如何在其他电脑上传资料

项目数据全部在 **`data.js`**（表达）和 **`index.html`**（界面）中，**不需要安装任何软件**，用浏览器打开 GitHub 网页即可操作。

### 方式一：编辑 data.js 直接加表达（简单表达）

1. 打开 `data.js` → 点 ✏️ 编辑按钮
2. 在数组末尾（最后一个 `}` 后）加逗号，粘贴新表达对象（格式见文件顶部注释）
3. 底部 Commit changes → 提交

### 方式二：上传台本，让 AI 处理（推荐，大量台本）

1. 在仓库页面点 **Add file → Upload files**
2. 把台本文件（txt/pdf）拖进新文件夹 `uploads/`
3. Commit 后，在 WorkBuddy 里说"处理 uploads 里的台本"，AI 会提取表达并更新 `data.js`
4. 刷新页面即可看到新表达

### 方式三：本地 git 操作（进阶）

```bash
git clone git@github.com:jingwang134/SceneTalk.git
# 或国内网络: git clone git@ssh.github.com:443/jingwang134/SceneTalk.git
cd SceneTalk
# 编辑 data.js 后
git add data.js
git commit -m "新增表达"
git push
```

## 🛠️ 本地开发

```
index.html      # 界面 + 逻辑（表达库/训练场/词库/打卡）
data.js         # 表达数据（78条，可独立编辑）
perspectives.js # 原生观点范例数据（8话题×3维度×65语料）
AI生成规则.md   # 范例页 AI 生成规范（RULES-v2）
parts/          # 工程片段（CSS/JS/数据模板，供 rebuild 脚本使用）
scripts/        # 台本提取的纯文本（s01eXX.txt）
*.py / *.js     # 工程脚本（数据插入、校验、重建）
```

## 本地运行（推荐，AI 生成可用）

浏览器直连 DeepSeek 在某些网络下会被拦，本仓库自带一个本地代理服务，网页请求经本机转发，绕开限制：

1. 双击 （或命令行 ）
2. 浏览器自动打开 http://127.0.0.1:8799
3. 雅思答案定制 → 生成方式选 🤖 AI 智能生成 → ⚙️ 配置 AI → 粘贴 DeepSeek Key

服务窗口保持打开；已运行时重复双击会自动打开浏览器。

校验：
- `node validate.js`（语法 + 表达条数）
- `node check_persp_v2.js`（原生观点范例 RULES-v2 质检）
