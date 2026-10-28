import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const prefix = '/impact-lab-web';
const html = readFileSync('out/index.html', 'utf8');
const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match => match[1]).filter(url => url.startsWith('/') && !url.startsWith('//'));
if (!references.length) throw new Error('No local asset references found.');
for (const url of references) {
  if (!url.startsWith(`${prefix}/`)) throw new Error(`Missing Pages prefix: ${url}`);
  const file = decodeURIComponent(url.slice(prefix.length).split(/[?#]/)[0]);
  if (!existsSync(path.join('out', file))) throw new Error(`Missing exported asset: ${url}`);
}
if (html.includes('/_next/image?')) throw new Error('Server image optimizer is not available on Pages.');
console.log(`Pages export OK: index.html and ${references.length} local references.`);
if (process.argv.includes('--http')) {
  const results = await Promise.all([...new Set(references)].map(async url => {
    const response = await fetch(`http://127.0.0.1:3002${url}`);
    if (response.status !== 200) throw new Error(`HTTP ${response.status}: ${url}`);
    await response.arrayBuffer();
    return url;
  }));
  console.log(`HTTP preview OK: ${results.length} assets returned 200.`);
}
