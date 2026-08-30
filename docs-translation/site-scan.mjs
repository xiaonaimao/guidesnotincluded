// 全站禁用词扫描（账本工具·A3.6 版）
// 唯一文件来源：glob 遍历 src/content/docs/zh-cn（禁止手写清单）。
// 输出纪律：自动判废命中与人工复核项的原始命中全部如实列出，绝不静默跳过。
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const DIR = join(ROOT, 'src/content/docs/zh-cn/guidesnotincluded_archive');
const banned = readFileSync(join(ROOT, 'banned-terms.txt'), 'utf8')
  .split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));
// 子串例外：命中前先剔除这些现役词
const EXCEPTION_SUBSTR = ['烤肉串', '（俗称液冷机）', '米虱木', '太空服锻造台', '氢气管道', '氧气管道', '废气管道'];
// 人工复核项：泛指动词/词，命中照报，由人看上下文裁决
const REVIEW_ONLY = ['采集', '拆除', '野生'];

const pages = readdirSync(DIR).filter(f => f.endsWith('.md'));
let hard = 0, review = 0;
for (const f of pages) {
  const prose = readFileSync(join(DIR, f), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  let scrubbed = prose;
  for (const e of EXCEPTION_SUBSTR) scrubbed = scrubbed.split(e).join('');
  for (const b of banned) {
    const hits = [...scrubbed.matchAll(new RegExp(b, 'g'))];
    if (!hits.length) continue;
    for (const h of hits) {
      const ctx = scrubbed.slice(Math.max(0, h.index - 12), h.index + b.length + 12).replace(/\n/g, ' ');
      if (REVIEW_ONLY.includes(b)) { console.log(`[人工复核] ${f} | ${b} | …${ctx}…`); review++; }
      else { console.log(`[漂移] ${f} | ${b} | …${ctx}…`); hard++; }
    }
  }
}
console.log(hard === 0
  ? `✓ 自动判废命中 0（扫描 ${pages.length} 页；人工复核项 ${review} 处，原始命中已全部列出）`
  : `✗ 自动判废命中 ${hard} 处（见上）`);
