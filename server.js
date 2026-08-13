// ScenePick 本地服务：静态托管 + AI 代理
// 解决「浏览器无法直连 DeepSeek」：网页请求本服务，本服务转发到 DeepSeek
// 启动：node server.js  →  浏览器打开 http://127.0.0.1:8799
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8799;
const ROOT = __dirname;
const UPSTREAM_HOST = 'api.deepseek.com';
const UPSTREAM_PATH = '/chat/completions';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon'
};

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
}

function send(res, code, data, type) {
  res.writeHead(code, { 'Content-Type': type || 'application/json; charset=utf-8' });
  res.end(data);
}

// POST /api/chat → 转发到 DeepSeek
function proxyChat(req, res) {
  let body = '';
  req.on('data', c => { body += c; if (body.length > 20 * 1024 * 1024) req.destroy(); });
  req.on('end', () => {
    let payload = {};
    try { payload = JSON.parse(body || '{}'); } catch (e) { return send(res, 400, JSON.stringify({ error: { message: '请求体不是合法 JSON' } })); }
    const auth = req.headers['authorization'] || '';
    if (!auth) return send(res, 401, JSON.stringify({ error: { message: '未提供 API Key：请在页面点 ⚙️ 配置 AI 填写 DeepSeek Key（sk- 开头）' } }));
    const out = {
      model: payload.model || 'deepseek-chat',
      messages: payload.messages || [{ role: 'user', content: '' }],
      temperature: payload.temperature !== undefined ? payload.temperature : 0.8,
      stream: false,
      max_tokens: payload.max_tokens || 2000
    };
    const data = JSON.stringify(out);
    const r = https.request({
      host: UPSTREAM_HOST, path: UPSTREAM_PATH, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': auth, 'Content-Length': Buffer.byteLength(data) }
    }, r2 => {
      let chunk = '';
      r2.on('data', c => chunk += c);
      r2.on('end', () => {
        cors(res);
        res.writeHead(r2.statusCode || 500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(chunk);
      });
    });
    r.on('error', e => send(res, 502, JSON.stringify({ error: { message: '转发到 DeepSeek 失败：' + e.message } })));
    r.write(data);
    r.end();
  });
}

http.createServer((req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }
  const url = (req.url || '/').split('?')[0];
  if (req.method === 'POST' && url === '/api/chat') return proxyChat(req, res);
  // 静态文件
  let p = url === '/' ? '/index.html' : decodeURIComponent(url);
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) return send(res, 403, 'Forbidden', 'text/plain');
  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, 'Not Found', 'text/plain');
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('');
  console.log('  ScenePick 场景拾句 · 本地服务已启动');
  console.log('  -------------------------------------------------');
  console.log('  浏览器打开:  http://127.0.0.1:' + PORT);
  console.log('  AI 请求将通过本服务转发到 DeepSeek，');
  console.log('  绕过浏览器直连限制。关闭本窗口即停止服务。');
  console.log('  -------------------------------------------------');
  console.log('');
});
