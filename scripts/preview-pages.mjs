import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('out');
const prefix = '/impact-lab-web';
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/' || pathname === prefix) {
      response.writeHead(302, { Location: `${prefix}/` }).end();
      return;
    }
    if (!pathname.startsWith(`${prefix}/`)) throw new Error('Not found');
    let file = path.resolve(root, `.${pathname.slice(prefix.length)}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const content = await readFile(file);
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Nie znaleziono pliku.');
  }
}).listen(3002, '127.0.0.1', () => {
  console.log('GitHub Pages preview: http://127.0.0.1:3002/impact-lab-web/');
});
