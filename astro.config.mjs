// SPDX-License-Identifier: MIT
// @ts-check
import path from 'node:path';
import { defineConfig, passthroughImageService } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';

// Deployed as a GitHub project page, so the site lives under a /base/ subpath.
const SITE = 'https://ahembree.github.io';
const BASE = '/guidesnotincluded';

// The crawler writes cross-page links as relative `.md` paths (e.g.
// `pipes-and-pumps.md`), which are convenient for editing/GitHub but which
// Starlight does not resolve in page bodies. Rewrite them to real routed URLs
// at build time so the prose links work without altering the content.
function remarkRelativeMdLinks() {
  return (/** @type {any} */ tree, /** @type {any} */ file) => {
    // Slugs are relative to the archive folder (its name is stripped by the
    // loader's generateId), so resolve relative `.md` links against the same root.
    const docsRoot = path.resolve(
      file.cwd ?? process.cwd(),
      'src/content/docs/guidesnotincluded_archive'
    );
    const fileDir = file.path ? path.dirname(file.path) : docsRoot;
    const rewrite = (/** @type {string} */ url) => {
      // Leave external, protocol-relative, root-absolute, and pure-anchor links.
      if (/^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(url)) return url;
      const m = url.match(/^(.*?)\.md(#.*)?$/i);
      if (!m) return url;
      const hash = m[2] ?? '';
      const absNoExt = path.resolve(fileDir, m[1]);
      // English-archive links keep their original routes. Links from localized
      // pages resolve into that locale's own tree (../zh-cn/... or a sibling):
      // Starlight's fallback serves the English page there until the target is
      // translated, so links never 404 and auto-upgrade when a batch lands.
      const candidates = [
        { base: `${BASE}/`, root: docsRoot },
        {
          base: `${BASE}/zh-cn/`,
          root: path.resolve(
            file.cwd ?? process.cwd(),
            'src/content/docs/zh-cn/guidesnotincluded_archive'
          ),
        },
      ];
      for (const { base, root } of candidates) {
        const rel = path.relative(root, absNoExt);
        if (rel.startsWith('..') || path.isAbsolute(rel)) continue;
        let slug = rel.split(path.sep).join('/');
        if (slug === 'index' || slug === '') return `${base}${hash}`;
        if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
        return `${base}${slug}/${hash}`;
      }
      return url;
    };
    const visit = (/** @type {any} */ node) => {
      if ((node.type === 'link' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = rewrite(node.url);
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  // The archive's images are already web-optimised AVIF from the original Wix
  // site; serve them as-is instead of re-encoding ~460 files on every build.
  image: { service: passthroughImageService() },
  // Astro 6.4 moved extra remark/rehype plugins under `processor`. `unified()`
  // from @astrojs/markdown-remark keeps the default pipeline (GFM, Smartypants)
  // and Starlight's own markdown plugins, adding ours on top.
  markdown: { processor: unified({ remarkPlugins: [remarkRelativeMdLinks] }) },
  integrations: [
    starlight({
      title: 'Guides Not Included',
      description:
        'An archived copy of guidesnotincluded.com — Oxygen Not Included builds, ' +
        'guides, and resources. Restored from the Internet Archive.',
      tagline: 'An Oxygen Not Included guides archive',
      lastUpdated: false,
      pagination: false,
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ahembree/guidesnotincluded',
        },
      ],
      // i18n: English at the site root, Simplified Chinese under /zh-cn/.
      // Starlight requires each locale's content directory to be named after
      // its locale key (src/content/docs/zh-cn/...). Built-in UI strings for
      // zh-CN ship with Starlight (28/28 keys translated in 0.40.0).
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
      },
      // Restore the per-page social/JSON-LD meta (was overrides/main.html) and
      // the site-wide CC BY-NC-SA / Klei copyright line (was mkdocs `copyright`).
      components: {
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
      },
      // Mirrors the hand-curated MkDocs `nav:`. guides.md and home.md are
      // intentionally left out (empty / duplicate of the homepage) but still build.
      //
      // Sidebar items use `link` instead of `slug` for the i18n rollout: slug
      // items are resolved per locale and Starlight throws on any locale whose
      // translated page does not exist yet, which would break the whole zh-cn
      // site until every page is translated. Link items are locale-agnostic:
      // Starlight injects the locale prefix automatically (/zh-cn/... on
      // Chinese pages), labels for translated pages are localised through the
      // per-item `translations` map, and current-page highlighting works the
      // same. As a batch lands, add its `translations` entries; links start
      // resolving once each page exists in zh-cn.
      sidebar: [
        { label: 'Home', link: '/', translations: { 'zh-CN': '首页' } },
        {
          label: 'Start here',
          translations: { 'zh-CN': '新手起步' },
          items: [
            {
              label: 'The very early game',
              link: '/the-very-early-game/',
              translations: { 'zh-CN': '极早期指南' },
            },
            { label: 'The early game', link: '/the-early-game/', translations: { 'zh-CN': '前期指南' } },
            {
              label: "Complete beginner's guide",
              link: '/complete-beginners-completely-incomplete-guide-to-oxygen-not-included/',
              translations: { 'zh-CN': '新手完全指南' },
            },
            { label: "Things I wish I'd known", link: '/things-i-wish-id-known-when-i-started/', translations: { 'zh-CN': "早知道就好了" } },
            { label: "Builds overview", link: '/builds/', translations: { 'zh-CN': "建筑总览" } },
            { label: "Base game vs Spaced Out", link: '/base-game-versus-spaced-out-dlc/', translations: { 'zh-CN': "本体对比《眼冒金星！》" } },
          ],
        },
        {
          label: 'Duplicants',
          translations: { 'zh-CN': '复制人' },
          items: [
            { label: "Choosing duplicants", link: '/choosing-duplicants/', translations: { 'zh-CN': "选择复制人" } },
            { label: "How many dupes?", link: '/how-many-dupes-should-you-have/', translations: { 'zh-CN': "要多少复制人？" } },
            { label: "Atmo suits", link: '/atmo-suit-basics/', translations: { 'zh-CN': "气压服" } },
          ],
        },
        {
          label: 'Core mechanics',
          translations: { 'zh-CN': '核心机制' },
          items: [
            { label: 'Pipes and pumps', link: '/pipes-and-pumps/', translations: { 'zh-CN': '管道与泵' } },
            { label: 'Liquid lock basics', link: '/liquid-lock-basics/', translations: { 'zh-CN': '水门基础' } },
            { label: 'Liquid lock (build)', link: '/liquid-lock/', translations: { 'zh-CN': '水门（建造）' } },
          ],
        },
        {
          label: 'Oxygen (SPOMs)',
          translations: { 'zh-CN': '氧气（SPOM）' },
          items: [
            { label: 'What is a SPOM?', link: '/to-know-the-spom-is-to-love-the-spom/', translations: { 'zh-CN': '什么是自供电制氧模块？' } },
            { label: 'SPOM — 1 kg/s', link: '/spom-1kg-s/', translations: { 'zh-CN': '自供电制氧模块——1 千克/秒' } },
            { label: 'SPOM — Full Rodriguez', link: '/spom-3kg-s/', translations: { 'zh-CN': '自供电制氧模块——完整 Rodriguez' } },
          ],
        },
        {
          label: 'Water & germs',
          translations: { 'zh-CN': '水源与病菌' },
          items: [
            { label: 'Getting more water', link: '/getting-more-water/', translations: { 'zh-CN': '获取（更多）水' } },
            { label: 'Decontaminating germy water', link: '/decontaminating-germy-water-francis/', translations: { 'zh-CN': '净化带菌水' } },
            { label: 'Recycling toilet water', link: '/recycling-toilet-water/', translations: { 'zh-CN': '回收厕所水' } },
            { label: 'Dealing with slimelung', link: '/dealing-with-slimelung/', translations: { 'zh-CN': '应对粘液肺' } },
          ],
        },
        {
          label: 'Cooling & heat',
          translations: { 'zh-CN': '冷却与控温' },
          items: [
            { label: 'Heat transfer basics', link: '/heat-transfer-basics/', translations: { 'zh-CN': '温度传递基础' } },
            { label: 'Anti-entropy thermo-nullifier (AETN)', link: '/anti-entropy-thermo-nullifier/', translations: { 'zh-CN': '反熵消热器（AETN）' } },
            { label: 'AETN cooling loop', link: '/anti-entropy-thermo-nullifier-cooling/', translations: { 'zh-CN': '反熵消热器冷却' } },
            { label: 'Aquatuner + steam turbine loop', link: '/aquatuner-steam-turbine-cooling-loo/', translations: { 'zh-CN': '液温调节器与蒸汽涡轮冷却回路' } },
            { label: 'Thermo aquatuner cooling loop', link: '/thermo-aquatuner-steam-turbine-cooling-loop/', translations: { 'zh-CN': '液温调节器与蒸汽涡轮冷却（原理）' } },
          ],
        },
        {
          label: 'Power & automation',
          translations: { 'zh-CN': '电力与自动化' },
          items: [
            { label: 'Getting started with automation', link: '/getting-started-with-automation/', translations: { 'zh-CN': '自动化入门' } },
            { label: 'Carbon skimmer automation', link: '/carbon-skimmer-automation-jahws/', translations: { 'zh-CN': '碳素脱离器自动化' } },
            { label: 'Taming a hydrogen vent', link: '/hydrogen-vent-taming/', translations: { 'zh-CN': '驯服氢气喷孔' } },
          ],
        },
        {
          label: 'Resources & industry',
          translations: { 'zh-CN': '资源与工业' },
          items: [
            { label: 'Getting steel', link: '/getting-steel/' },
            { label: 'Oil, petroleum & plastic', link: '/getting-oil-petroleum-and-plastic/' },
            { label: 'Oil well with liquid lock', link: '/oil-well-with-liquid-lock/' },
            { label: 'Taming metal volcanoes', link: '/taming-metal-volcanos/' },
            { label: 'Mini industry', link: '/mini-industry/' },
          ],
        },
        {
          label: 'Ranching',
          translations: { 'zh-CN': '养殖' },
          items: [
            { label: 'Ranching basics', link: '/ranching-basics/' },
            { label: 'Drecko ranching (plastic)', link: '/low-tech-plastic-drecko-ranching/' },
          ],
        },
        {
          label: 'Space & Spaced Out (DLC)',
          translations: { 'zh-CN': '太空与《Spaced Out!》DLC' },
          items: [
            { label: 'Getting to space', link: '/getting-to-space-dlc/' },
            { label: 'Spaced Out research', link: '/spaced-out-research-guide/' },
            { label: 'Dealing with meteor showers', link: '/dealing-with-meteor-showers/' },
            { label: 'Liquid hydrogen & oxygen', link: '/liquid-hydrogen-oxygen-small/' },
          ],
        },
        {
          label: 'Drafts & duplicates',
          translations: { 'zh-CN': '草稿与重复页' },
          items: [
            { label: 'The early game (draft)', link: '/copy-of-the-early-game/' },
            { label: 'Getting to space (draft)', link: '/copy-of-getting-more-water/' },
            { label: 'Work in progress', link: '/copy-of-wip/' },
          ],
        },
        {
          label: 'About this archive',
          translations: { 'zh-CN': '关于本存档' },
          items: [
            { label: 'Attribution & licensing', link: '/attribution/' },
            { label: 'Guide feedback', link: '/guide-feedback/' },
          ],
        },
      ],
    }),
  ],
});
