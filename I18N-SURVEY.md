# 阶段一勘察报告（Guides Not Included 中文版）

> **翻译主体完成：39/46 全文+index 中文首页+6 裁决不译（home/guides/copy-of×3/attribution），2026-08-30**

> 状态：**人审已通过（2026-08-29）**——用户名、目录名 `zh-cn/`、草稿不译、侧边栏方案均已裁决；
> 术语表已按人审修订版定稿（35 处译名修订，以仓库根目录 glossary.csv 为唯一权威版本）。
> 未决项：37 条"待确认"术语、部署地址（§6）。正文自阶段二起翻译，批次见 §4。
> 阶段一实际交付：① 本勘察报告 ② i18n 骨架 + 端到端样板页（已通过本地 dev 与生产构建验证）③ 术语表定稿 `glossary.csv`。
> 本阶段未翻译任何正文（样板页仅含占位）。

---

## 1. 内容勘察

### 1.1 页面数量

归档目录 `src/content/docs/guidesnotincluded_archive/` 实际含 **46 个内容 md**（任务书按 47 计——目录里另有 1 个 `LICENSE` 文件和 `assets/` 图片目录， LICENSE 非 md，应为统计口径差异，特此说明）。其中：

| 分类 | 文件 | 说明 |
|-|-|-|
| 首页 | `index.md` | 站点首页；`home.md` 与其内容完全相同（937 词），仅在站点内重复，侧边栏已排除 |
| 正文指南 | 40 页 | 侧边栏收录的全部内容页 |
| 存档说明 | `attribution.md`、`guide-feedback.md`、`guides.md` | guides.md 为 31 词的空壳目录页 |
| 草稿/重复 | `copy-of-the-early-game.md`、`copy-of-getting-more-water.md`、`copy-of-wip.md` | 与正文高度重复（见 §1.3），建议**不翻译**，等人审裁决 |

### 1.2 每页词数与结构（按词数降序）

词数统计口径：剥去 frontmatter、代码块、图片语法、链接 URL 与 HTML 标签后的英文词（含数字 token）。

| 文件 | 词数 | 图片 | 链接 |
|-|--:|--:|--:|
| the-early-game.md | 7198 | 54 | 68 |
| copy-of-the-early-game.md（草稿） | 7189 | 54 | 76 |
| the-very-early-game.md | 5477 | 35 | 42 |
| ranching-basics.md | 4414 | 25 | 38 |
| recycling-toilet-water.md | 4258 | 31 | 37 |
| getting-to-space-dlc.md | 3952 | 21 | 29 |
| to-know-the-spom-is-to-love-the-spom.md | 3839 | 23 | 41 |
| getting-started-with-automation.md | 3783 | 28 | 35 |
| copy-of-wip.md（草稿） | 2948 | 1 | 5 |
| pipes-and-pumps.md | 2895 | 28 | 40 |
| dealing-with-meteor-showers.md | 2775 | 26 | 37 |
| getting-more-water.md | 2270 | 16 | 29 |
| taming-metal-volcanos.md | 2258 | 8 | 18 |
| getting-oil-petroleum-and-plastic.md | 2206 | 16 | 25 |
| anti-entropy-thermo-nullifier-cooling.md | 1988 | 20 | 28 |
| dealing-with-slimelung.md | 1865 | 7 | 11 |
| thermo-aquatuner-steam-turbine-cooling-loop.md | 1824 | 15 | 20 |
| things-i-wish-id-known-when-i-started.md | 1467 | 2 | 11 |
| choosing-duplicants.md | 1330 | 1 | 6 |
| spaced-out-research-guide.md | 1302 | 9 | 19 |
| mini-industry.md | 1288 | 9 | 15 |
| low-tech-plastic-drecko-ranching.md | 1287 | 10 | 18 |
| copy-of-getting-more-water.md（草稿） | 1285 | 4 | 9 |
| liquid-lock-basics.md | 1266 | 9 | 13 |
| heat-transfer-basics.md | 1151 | 12 | 18 |
| getting-steel.md | 1001 | 9 | 18 |
| home.md（= index 重复） | 937 | 5 | 74 |
| index.md | 937 | 5 | 74 |
| complete-beginners-…-guide….md | 730 | 1 | 48 |
| how-many-dupes-should-you-have.md | 701 | 1 | 12 |
| base-game-versus-spaced-out-dlc.md | 631 | 1 | 5 |
| atmo-suit-basics.md | 612 | 6 | 10 |
| attribution.md | 516 | 0 | 4 |
| guide-feedback.md | 426 | 0 | 4 |
| builds.md | 387 | 0 | 4 |
| aquatuner-steam-turbine-cooling-loo.md | 328 | 4 | 9 |
| liquid-hydrogen-oxygen-small.md | 328 | 5 | 9 |
| decontaminating-germy-water-francis.md | 240 | 3 | 9 |
| anti-entropy-thermo-nullifier.md | 221 | 3 | 9 |
| spom-3kg-s.md | 215 | 5 | 11 |
| spom-1kg-s.md | 167 | 4 | 10 |
| hydrogen-vent-taming.md | 153 | 5 | 9 |
| oil-well-with-liquid-lock.md | 127 | 1 | 5 |
| carbon-skimmer-automation-jahws.md | 118 | 2 | 6 |
| liquid-lock.md | 89 | 1 | 7 |
| guides.md | 31 | 0 | 4 |

**合计 80,410 词 / 46 页，平均 1,748 词。** 头部 10 页占约 45% 词量；图片共 459 张（assets/，AVIF 格式，全部不动）。

### 1.3 Frontmatter 字段结构

高度一致，共 4 种键组合：

| 键组合 | 页数 |
|-|--:|
| `title, description, source_url, archived, archive_snapshot` | 36 |
| 同上 + `image`（OG 图） | 8 |
| 仅 `title` | 1（attribution.md） |
| `title, source_url, archived, archive_snapshot`（无 description） | 1（guides.md） |

- `source_url` / `archive_snapshot` 是存档溯源字段：**保留原文不翻**；`title`/`description` 翻译。
- schema 在 `src/content.config.ts` 中扩展（`source_url`/`archived`/`archive_snapshot`/`image`），中文页直接沿用同一 schema，无需改动。

### 1.4 工程配置与部署现状

- **astro.config.mjs**：`site: https://ahembree.github.io`，`base: /guidesnotincluded`（GitHub Pages 项目页子路径）。站点标题/描述/tagline 为英文。侧边栏为手工维护的 13 个分组（MkDocs nav 的镜像）。有一个自定义 remark 插件把正文里的相对 `.md` 链接重写成路由 URL。
- **部署**：`.github/workflows/deploy.yml` 已存在且可用——`withastro/action@v6` 构建，push 到 `main` 即部署 GitHub Pages。**注意**：`site` 常量仍指向上游 `ahembree.github.io`；本仓库（xiaonaimao fork）部署时需改成自己的 Pages 域名+仓库名，**阶段一未改动**（等人审后一并调整）。
- **包管理**：pnpm@11.8.0（corepack），`.npmrc` 有供应链策略（24h 冷却、构建脚本白名单、仅官方 registry）。

### 1.5 Starlight zh-cn 内置 UI 翻译覆盖

实测环境：astro **6.4.8** + @astrojs/starlight **0.40.0**。

- `@astrojs/starlight/translations/zh-CN.json` 与 `en.json` 键数 **28/28，覆盖率 100%**，无缺失键。
- 实测渲染已本地化的 UI：搜索、菜单、主题切换（深色/浅色/自动）、语言选择器（选择语言）、侧边栏（主要）、目录（本页内容）、跳转链接、**未翻译页提示**（“此内容尚不支持你的语言。”）等。
- 结论：**zh-cn 无需任何自定义 UI 翻译文件**，Starlight 原生即够用。

---

## 2. i18n 骨架（已实施并验证）

### 2.1 Starlight 原生方式，未引入任何 i18n 框架

1. **`astro.config.mjs`**：新增 `locales: { root: { label: 'English', lang: 'en' }, 'zh-cn': { label: '简体中文', lang: 'zh-CN' } }`。英文在根路径 `/`，中文在 `/zh-cn/`。
2. **目录**：`src/content/docs/zh-cn/guidesnotincluded_archive/`（任务书写 `zh/`，但 **Starlight 要求目录名与 locale id 完全一致**，locale id 取 `zh-cn`，故目录为 `zh-cn/`——URL 为 `/zh-cn/...`）。
3. **`src/content.config.ts`**：`generateId` 升级为可剥离任意 locale 前缀后的归档目录名（`zh-cn/guidesnotincluded_archive/foo.md → zh-cn/foo`；`<locale>/index.md → <locale>` 即语言首页）。
4. **样板页**（正文占位，未翻译）：`zh-cn/guidesnotincluded_archive/the-very-early-game.md`——中文 frontmatter（title 极早期指南 / description）+ 溯源字段原样 + 占位正文；另建 `zh-cn/…/index.md` 中文首页占位。

### 2.2 侧边栏方案（重要决策，请人审确认）

Starlight 0.40 的硬约束（源码验证）：侧边栏 `slug:` 条目**按当前语言解析，目标语言缺页即抛错**；且 `locales` 配置不支持按语言定义侧边栏。若保留原样，加 zh-cn 后整个中文站立刻无法构建。

**采用方案**：把侧边栏全部 `slug:` 条目改为 `link:` 条目（链接 Starlight 会自动注入 `/zh-cn/` 前缀）。

- 英文站渲染**逐字节等价**（45 条链接、13 个分组、当前页高亮 `aria-current` 均实测无变化）；
- 中文标签通过条目级 `translations: { 'zh-CN': … }` 本地化（已翻译的分组标签 + 样板页条目 + 首页已完成；未翻译条目保持英文标签）；
- 每翻译一批，只需在对应条目上加 `translations`，无需其他改动。

**意外收获**：Starlight 0.40 会为未翻译页自动生成 **fallback 路由**（渲染英文原页 + 顶部“此内容尚不支持你的语言。”提示）。因此中文站永不 404：已翻译页显示中文，未翻译页显示英文原文+提示，随批次逐步“点亮”。

### 2.3 验证结果（dev + 生产构建双重验证）

- `/`、`/the-very-early-game/`、`/zh-cn/`、`/zh-cn/the-very-early-game/` 全部 200；
- 中文页 `<html lang="zh-CN">`、标题/h1 为中文、侧边栏中文分组 + 当前页高亮；
- **语言切换器实测**：在样板页选择 English 正确跳转英文页，双向映射正确（含首页 `/ ↔ /zh-cn/`）；
- 未翻译页 `/zh-cn/the-early-game/` → 英文 fallback + 内置提示；
- 英文站截图比对无回归；
- **`astro build` 生产构建通过**：93 页、Pagefind 索引正常、`dist/zh-cn/` 产物齐全、`hreflang="en / zh-CN / x-default"` 正确输出。

### 2.4 已知事项（留给阶段二+）

- **正文相对 `.md` 链接**：remark 插件按英文归档目录解析相对链接；中文页如写 `choosing-duplicants.md` 这类相对链接，需验证重写结果（样板页占位已用相对路径验证了跨目录跳转 OK：`../../guidesnotincluded_archive/xxx.md` 会被正确重写到英文页 URL。批次翻译时统一用此写法链接英文原文，站内中文互链待页面落地后调整）。
- **图片路径**：中文页如需引用图片，`assets/` 相对路径会落在 zh-cn 目录下（不存在）。样板页未含图片；批次方案：`![…](../../guidesnotincluded_archive/assets/xxx.avif)`（相对路径可达英文目录，已具备机制，第一批时实测一张）。
- **SITE/BASE 常量**：部署到本仓库 Pages 前需要改（见 §1.4）。
- **Drafts & duplicates 三页**：与正文重复，建议不翻译（侧边栏保留英文标签即可），人审裁决。

---

## 3. 术语表（glossary.csv，人审定稿版）

文件：仓库根目录 [`glossary.csv`](glossary.csv)（UTF-8 BOM，Excel 可直接打开）。**后续所有翻译批次的唯一术语锚。**

- **207 条**（206 条在语料中实际命中 + 站名一条），按出现页数/次数降序；
- 列：`英文原词 | 建议简中译名 | 出现页数 | 出现次数 | 置信度 | 类别 | 备注`；
- **✅ 人审已定稿（2026-08-29）**：人审对 35 条译名做了修订，现版 glossary.csv 为唯一权威版本（修订前机器初稿已归档于工具目录）。代表性修订：液锁→**水门**、Mealwood→**米虱木**、Rock Crusher→**碎石机**、Metal Refinery→**金属精炼器**、Hatch→**好吃哈奇**、Deodorizer→**空气净化器**、Rodriguez→**制氧模块**、Mop→**擦拭**、Virtual Planetarium→**虚拟天象仪** 等；
- **置信度分布（终版）**：官方译名 123 / 社区通用 47 / 待确认 37；
- 机器初稿的官方名核验方式：与社区维护的官中串表（Unixeno/ONI-Chinese strings.po，8,633 条）逐词比对，备注列保留 po 键证据供追溯；人审修订基于更新版本的游戏官中，与旧串表表述不同处以 glossary.csv 现版为准；
- 37 条"待确认"仍待人审后续裁决；泛指词（water/power/space/seed 等）按语境处理；人名/站点一律"不译"。

### 直译陷阱对照（人审定稿版节选）

| 英文 | ❌ 直译/机器初稿 | ✅ 终版（人审） |
|-|-|-|
| Manual Generator | 手动发电机 | **人力发电机** |
| Rock Crusher | 岩石造粒机 | **碎石机** |
| liquid lock | 液锁 | **水门** |
| Mealwood | 膳食树 | **米虱木** |
| Muckroot | 红草 | **淤泥根** |
| Hatch | 巨嘴哈奇 | **好吃哈奇** |
| Rodriguez | 罗德里格斯 | **制氧模块** |
| Deodorizer | 除臭器 | **空气净化器** |
| Virtual Planetarium | 虚拟天文馆 | **虚拟天象仪** |
| Wheezewort | 喘息草 | **冰息萝卜** |
| Slimelung | 黏液肺菌 | **粘液肺** |
| Barracks | 兵营/宿舍 | **营房** |
| Great Hall | 大厅 | **豪华餐厅** |
| Data Bank | 数据库 | **数据磁盘** |
| Harvest | 收获 | **采集** |
| Copy settings | 复制设置 | **粘贴设置** |

> 注：Outhouse（户外厕所）、Metal Refinery（金属精炼器）等条目人审沿用直觉译名，与旧官中串表（茅厕/金属精炼厂）不同，以 glossary.csv 现版为准。

- 37 条“待确认”集中在：官方串表未收录的新版本键（液冷机/碳撇除器/净水器/聚合物压制机等）、房间加成名称、UI 指令（最高优先级/设置方向/就近原则等）、地图种子号——已全部标出，交人审裁决后回填置信度。
- 泛指词（water/power/space/seed 等）已加“按语境”备注；人名/站点一律“不译”。

---

## 4. 翻译批次建议（共 8 批 + 草稿组裁决）

排序原则：跟随站点导航的学习路径（新手→进阶），先易后难、先高频后低频；每批 2–8 页，兼顾词量均衡（单批 ≤ ~13k 词）。

| 批次 | 主题 | 页面 | 页数 | 词量 | 侧边栏动作 |
|-|-|-|--:|--:|-|
| **B1 ✅已完成** | 新手起步·上 | the-very-early-game（样板转正）、the-early-game | 2 | ~12.7k | 2 条已加 translations（极早期指南/前期指南） |
| B2 | 新手起步·下 | complete-beginners-guide、things-i-wish-id-known、how-many-dupes、choosing-duplicants、atmo-suit-basics、base-game-versus-spaced-out-dlc、builds | 7 | ~5.9k | 7 条 |
| B3 | 核心机制 | pipes-and-pumps、liquid-lock-basics、liquid-lock、heat-transfer-basics | 4 | ~5.4k | 4 条 |
| B4 | 氧气（SPOM） | to-know-the-spom…、spom-1kg-s、spom-3kg-s | 3 | ~4.2k | 3 条 |
| B5 | 水源与病菌 | getting-more-water、decontaminating-germy-water-francis、recycling-toilet-water、dealing-with-slimelung | 4 | ~8.6k | 4 条 |
| B6 | 冷却与电力自动化 | anti-entropy-thermo-nullifier(-cooling)、aquatuner-steam-turbine-cooling-loo、thermo-aquatuner-steam-turbine-cooling-loop、getting-started-with-automation、carbon-skimmer-automation-jahws、hydrogen-vent-taming | 7 | ~8.4k | 7 条 |
| B7 | 资源与工业 | getting-steel、getting-oil-petroleum-and-plastic、oil-well-with-liquid-lock、taming-metal-volcanos、mini-industry | 5 | ~6.9k | 5 条 |
| B8 | 养殖 + 太空 DLC + 存档说明 | ranching-basics、low-tech-plastic-drecko-ranching、getting-to-space-dlc、spaced-out-research-guide、dealing-with-meteor-showers、liquid-hydrogen-oxygen-small、guide-feedback | 7 | ~13.7k | 7 条 |
| 不译 | 首页 | index.md（建议做轻量中文首页，已有占位）、home.md（重复页，跳过） | – | – | – |
| 不译 ✅已裁决 | 草稿/重复 | copy-of-the-early-game、copy-of-getting-more-water、copy-of-wip | 3 | ~11.4k | 人审已同意不翻译 |

> 注：B1 的 the-early-game（7,198 词）单页最大；若想控风险，可把它拆成 B1a/B1b 两段交付。

---

## 5. 协议合规（本阶段已落三件）

1. **LICENSE / LICENSE-CODE / LICENSE-CONTENT / NOTICE**：四个文件原样保留（git status 确认无改动）。
2. **attribution 页**：新增「中文翻译版（Simplified Chinese translation）」章节——英文原作 Some Random Finn（Guides Not Included）CC BY-NC-SA 4.0；中文翻译由 **xiaonaimao** 完成（✅ 已确认），译文同以 CC BY-NC-SA 4.0 发布；术语以游戏官方简中为准（glossary.csv 为唯一锚）。
3. **README**：顶部新增翻译版说明（双语）——原作与授权、原站链接（Internet Archive）、译文同授权、术语表与 attribution 页入口。

---

## 6. 人审裁决记录

| # | 事项 | 裁决 |
|-|-|-|
| 1 | GitHub 用户名 `xiaonaimao` | ✅ 已确认（2026-08-29） |
| 2 | 目录名 `zh-cn/`（替代任务书的 `zh/`） | ✅ 已同意 |
| 3 | 草稿三页（copy-of-*） | ✅ 已同意**不翻译** |
| 4 | 37 条"待确认"术语 | ⬜ 待裁决 |
| 5 | 部署目标：何时把 `site`/`base` 改为本仓库 Pages 地址（当前仍指上游 ahembree.github.io） | ⬜ 待定 |
| 6 | 侧边栏 link 化方案与 fallback 行为 | ✅ 随 i18n 骨架一并确认 |
