import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const prefix = '/impact-lab-web';
const root = path.resolve('out');
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const pageFiles = walk(root).filter(file => file.endsWith('.html') && !path.relative(root, file).split(path.sep).some(part => part === '404' || part === '404.html'));
const references = new Set();
const readHtml = file => readFileSync(file, 'utf8');
for (const pageFile of pageFiles) {
  const relative = path.relative(root, pageFile).split(path.sep).join('/');
  const pageUrl = `http://local${prefix}/${relative.replace(/index\.html$/, '')}`;
  const html = readHtml(pageFile);
  if (html.includes('/_next/image?')) throw new Error(`Server image optimizer is not available on Pages: ${relative}`);
  for (const [, reference] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!reference.startsWith('/') && !reference.startsWith('#')) continue;
    const url = new URL(reference.replaceAll('&amp;', '&'), pageUrl);
    if (url.origin !== 'http://local') continue;
    if (!url.pathname.startsWith(`${prefix}/`)) throw new Error(`Missing Pages prefix: ${reference} in ${relative}`);
    let file = path.resolve(root, `.${decodeURIComponent(url.pathname.slice(prefix.length))}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) throw new Error(`Path outside export: ${reference}`);
    if (!existsSync(file)) throw new Error(`Missing exported asset: ${reference} in ${relative}`);
    if (statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!existsSync(file)) throw new Error(`Missing exported page: ${reference} in ${relative}`);
    if (url.hash && file.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      const ids = [...readHtml(file).matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
      if (id && !ids.includes(id)) throw new Error(`Missing anchor ${url.hash} linked from ${relative}`);
    }
    references.add(`${url.pathname}${url.search}`);
  }
}
if (!references.size) throw new Error('No local references found.');
console.log(`Pages export OK: ${pageFiles.length} pages, ${references.size} unique local references and valid anchor targets.`);
if (process.argv.includes('--http')) {
  const results = await Promise.all([...references].map(async url => {
    const response = await fetch(`http://127.0.0.1:3002${url}`);
    if (response.status !== 200) throw new Error(`HTTP ${response.status}: ${url}`);
    await response.arrayBuffer();
    return url;
  }));
  console.log(`HTTP preview OK: ${results.length} assets returned 200.`);
}
