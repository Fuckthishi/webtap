import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const port = Number((portIndex >= 0 ? args[portIndex + 1] : undefined) || process.env.PORT || 5173);
const directory = new URL(args.includes('--dist') ? '../dist/' : '../', import.meta.url);
const files = new Map([
  ['index.html', 'text/html; charset=utf-8'],
  ['style.css', 'text/css; charset=utf-8'],
  ['app.js', 'text/javascript; charset=utf-8'],
  ['booking.js', 'text/javascript; charset=utf-8']
]);
createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  let filename;
  try {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    filename = pathname === '/' ? 'index.html' : pathname.slice(1);
  } catch {
    res.writeHead(400);
    return res.end('Bad request');
  }
  if (!files.has(filename)) {
    res.writeHead(404);
    return res.end('Not found');
  }
  try {
    const data = await readFile(new URL(filename, directory));
    res.writeHead(200, { 'Content-Type': files.get(filename), 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    res.writeHead(500);
    res.end('Unable to load website file.');
  }
}).listen(port, '0.0.0.0', () => console.log(`WEBTAP running on port ${port}`));
