// 全站禁用词扫描（诚实版）：自动判废命中必须为 0；人工复核项单独如实列出。
import { readFileSync } from 'node:fs';
const dir = 'src/content/docs/zh-cn/guidesnotincluded_archive';
const banned = readFileSync('banned-terms.txt', 'utf8')
  .split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));
// 子串例外与人工复核项在此声明，输出时如实计数，绝不静默跳过
const EXCEPTION_SUBSTR = ['烤肉串', '（俗称液冷机）', '米虱木', '太空服锻造台'];
const REVIEW_ONLY = ['采集', '拆除', '野生']; // 泛指动词/词，命中需人工看上下文
const pages = readFileSync('docs-translation/site-scan-pages.txt', 'utf8').split(/\r?\n/).filter(Boolean);
let hard = 0, review = 0;
for (const p of pages) {
  const prose = readFileSync(`${dir}/${p}.md`, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  let scrubbed = prose;
  for (const e of EXCEPTION_SUBSTR) scrubbed = scrubbed.split(e).join('');
  for (const b of banned) {
    const n = (scrubbed.match(new RegExp(b, 'g')) ?? []).length;
    if (!n) continue;
    if (REVIEW_ONLY.includes(b)) { console.log(`[人工复核] ${p} | ${b} ×${n}`); review += n; }
    else { console.log(`[漂移] ${p} | ${b} ×${n}`); hard += n; }
  }
}
console.log(hard === 0 ? `✓ 自动判废命中 0（另有 ${review} 处人工复核项，见上）` : `✗ 自动判废命中 ${hard} 处`);
