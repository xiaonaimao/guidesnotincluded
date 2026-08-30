---
title: "获取原油、石油与塑料"
description: "如果你玩的是 Terra（本体的默认起始小行星，《眼冒金星！》的\"经典\"选项），找油很容易：一直往下挖，你早晚会挖到石油群系……"
source_url: https://www.guidesnotincluded.com/getting-oil-petroleum-and-plastic
archived: 2025-08-27
archive_snapshot: https://web.archive.org/web/20250827233034id_/https://www.guidesnotincluded.com/getting-oil-petroleum-and-plastic
image: assets/ONI-guide-OilWell-2-61d09e0f7e.png
---

## 原油与石油群系

如果你玩的是 Terra（本体的默认起始小行星，《眼冒金星！》的"经典"选项），找油很容易：一直往下挖，你早晚会挖到石油群系。（Terrania——《眼冒金星！》的默认小起始星体——没有石油群系。）

![ONI-guide-OilBiome.png](../../guidesnotincluded_archive/assets/ONI-guide-OilBiome-db1d0ccdf9.png)

石油群系。通常位于地图底部，因小行星而异。（也不是所有小行星都有石油群系。）

![Building_Triage_Cot.webp](../../guidesnotincluded_archive/assets/Building_Triage_Cot-1ae21dda26.png)

医疗床

有几点要记住：

- 石油群系很热。务必穿[气压服](atmo-suit-basics.md)。

  + 在炎热环境（75C 上下及以上）中，复制人会开始受伤直至失去行动能力，需要其他复制人救援。

- 炎热群系里的油也是热的。所以泵和手压泵要用扛得住的材料造。比如：

  + 泵用金汞齐
  - 手压泵用陶瓷。（陶瓷用窑炉烧制，"精炼"分类下。）

石油群系里多半有几摊现成的油等着你。多少因地图而异：有的够你起步，有的够用几千个周期。等需要更多油的时候，可以开发一座储油石。（下面讲。）

从石油群系往外泵油时，想减少与周围环境的温度交换，记得用隔热管道。

想阻止石油群系与基地其他区域之间的气体混合，可以在石油群系入口放一道[水门](liquid-lock-basics.md)。连温度也想隔断的话，并排放两道水门，再用气泵把中间抽成真空。

不穿气压服就闯石油群系？

也许你赶时间，也许你懒，也许你没有芦苇纤维。不管什么原因，如果你要裸奔闯石油群系，有几条快糙猛的提示。（当然，我从来没有把复制人送进过这么危险的高温环境。）

- 先建至少一张医疗床（医院病床——"医学"分类下）。失去行动能力的复制人可以抬过去治疗。
- 尽量找（相对）凉快的区域——找 70 上下或更低的温度。
- 找冰雪群系（或其他寒冷群系）与石油群系交界的地方。挖开两者之间的深渊晶石，甚至挖一点深渊晶石隔层上方的冰或其他冷方块，让材料掉进石油群系，加速给一小片区域降温。

## 储油石与油井

![Building_Oil_Well.webp](../../guidesnotincluded_archive/assets/Building_Oil_Well-21493c36ff.png)

油井

在储油石上建一座油井就能开发它，抽出石油。（严格说是"原油"。不过我就叫它油。）

油井基础：

- 油井通过研究解锁（电力研究分支的"塑料制造"）
- 需要电力（240W）
- 需要供水（1 千克/秒）
- 产出原油（333 克/秒），直接排入环境
- 产出天然气（33 克/秒），存放在油井内，由复制人释放（到环境中）

<!-- TODO-TERMS: Plastic Manufacturing research tech（官方串表未检索到该名，暂译"塑料制造"） -->

随着油井内储存的天然气增多，所谓的背压（backpressure）会上升。油井上有一个红色计量表显示背压水平。压力需要复制人来释放，否则油井最终会停工。（据 Wiki，背压 100% 时可存 80 千克天然气。）

点击油井可以调整放压阈值——背压到什么水平时让复制人前来放压。

![ONI-guide-OilReservoir.png](../../guidesnotincluded_archive/assets/ONI-guide-OilReservoir-6bba8d36b6.png)

上：储油石。

下：建了油井的储油石

![ONI-guide-OilReservoir-2.png](../../guidesnotincluded_archive/assets/ONI-guide-OilReservoir-2-d36c9b9c81.png)

![Building_Tempshift_Plate.webp](../../guidesnotincluded_archive/assets/Building_Tempshift_Plate-5a1e73b3ae.png)

油井产热。给油井放压会产生大量热量，多到能损坏给油井供水的管道。原理是一种叫做相变的东西——水在管道里变成蒸汽，顺带损坏管道。有几件事可以降低这种风险。

油井被液体淹没时也能工作。利用这一点，可以在它旁边留一两格油，帮助防止温度飙升。

一块（或两块）变温板也能帮助分散热量、抹平热峰。变温板会在它所在格与周围八格之间匀温。可以把变温板放在油井喷嘴所在的格子上，谨慎起见再往左两格放一块。

变温板

![Building_Hydro_Sensor.webp](../../guidesnotincluded_archive/assets/Building_Hydro_Sensor-eb3be9355a.png)

液压传感器

如果你给油井建一个房间（而不是让它把油和天然气直接排进石油群系），就需要一台气泵抽走多余的天然气（否则气压会高到撑坏你的格子）。不过这些气体也可以用来吸收热峰，所以保持房内高气压。用气压传感器自动化这个过程。（可以设成它允许的最大气压：20000 克。）

就算有这些措施，油井周围还是很热。任何前来放压的复制人，不穿[气压服](atmo-suit-basics.md)就会被烫伤。

放压动作属于"操作"复制人技能。放压越快，管道受损的风险越小。一个思路是：除了操作技能过硬的复制人，禁止其他人接近油井。（加一扇门、改改门权限就能做到。）

用一点简单的自动化，你还能让油井在储油量达标时自动关闭。比如你的油流进某个储油坑，可以在坑里放一个液压传感器，油够多时发红信号。

简单做法：把液压传感器直接接到油井上（用信号线）。或者用液压传感器控制给油井的供水：把它接到液体截断阀上断水，或直接连到你的水泵上。

Francis John 的一个流行油井配置收录在本站的建筑区：[《油井与水门》](oil-well-with-liquid-lock.md)。（下图是与它几乎一样的版本。）

![ONI-guide-OilWell-2.png](../../guidesnotincluded_archive/assets/ONI-guide-OilWell-2-61d09e0f7e.png)

Nails……我真喜欢你这股干活的劲头。可你是厨师啊。这个殖民地里有四个操作专精的复制人，每个人的操作优先级都拉满了。不想啰嗦，但唯独你没有。（不过还是谢啦。）

## 石油

![Building_Oil_Refinery.webp](../../guidesnotincluded_archive/assets/Building_Oil_Refinery-9be1552ca7.png)

原油精炼器

拿到油之后，可以用一种叫做原油精炼器的建筑把它变成石油（"精炼"分类下）。

原油精炼器基础：

- 把油变成石油
- 有油的输入管道和石油的输出管道
- 还会产出天然气，排入周围环境
- 需要电力（480W）
- 需要一名复制人操作机器

在精炼器里把油变成石油会损失一半质量：输入 10 千克/秒的油，输出 5 千克/秒的石油。

注意：把油加热到刚好超过 400C，可以 100% 效率地把油变成石油。加热多少油，就得到多少石油。（这类系统的设计网上能搜到。搜"petroleum boiler"。）

我的标准原油精炼房长这样：

![ONI-guide-OilRefinery-1.png](../../guidesnotincluded_archive/assets/ONI-guide-OilRefinery-1-b98a5e2773.png)

左边的储液库存多余的油。它保证精炼器随时有油可炼，让精炼过程更平稳。（如果精炼器直接由石油群系里的液泵供油，供油可能时断时续。）右边的储液库存石油。

原油精炼器周围的气压过高时会停工，因为那会妨碍它向周围排出天然气。

建上图这样的房间时，点火之前先把氧气等全部抽走。这样房间里就只有天然气。然后在某处建好天然气的去向。

如果天然气管道堵了，原油精炼器就会停摆。所以不管你拿天然气做什么，都建议给它配一个溢流机构。（比如把溢流送进天然气发电机或排进太空——总之把它弄出房间。）

![ONI-guide-OilRefinery-2.png](../../guidesnotincluded_archive/assets/ONI-guide-OilRefinery-2-ff2001d915.png)

这个房间设计只有一个气压服位。也就是说一次只能进一个复制人。通常够用，例外是你要在房间里施工——比如加一条冷却回路。可以拆掉原油精炼房的梯子、把所有东西左移一格，再加第二个气压服存放柜。

比起第二个气压服存放柜，我通常给原油精炼器加一个开关（信号开关，"自动化"分类下）。想在房间里施工时，关掉精炼器，腾出气压服给施工的复制人。

（我通常也不在精炼房里放梯子，而是把石油储液库右移一格，在原油精炼器旁边腾出一格放装饰品。）

塑料

## 塑料

获取塑料有两条路：给滑鳞壁虎剪毛，或精炼石油。

我个人偏爱用滑鳞壁虎产塑料。我通常养一两个滑鳞壁虎养殖场，产量满足我全部需求绰绰有余。这种塑料来源在指南前面讲过：[《低科技塑料：壁虎养殖》](low-tech-plastic-drecko-ranching.md)。

现在说另一条路：精炼石油得塑料。

就像油过一遍机器变成石油一样，石油过一遍机器就变成塑料。但这台机器——聚合物压塑器——不需要复制人操作。

![Building_Polymer_Press.webp](../../guidesnotincluded_archive/assets/Building_Polymer_Press-0150b4fda2.png)

聚合物压塑器

聚合物压塑器基础：

- 把石油变成塑料
- 还产出二氧化碳、蒸汽和热量
- 需要电力（240W）
- 有石油输入管道
- 有二氧化碳输出管道
- 蒸汽直接排入周围环境
- 塑料掉在机器前面、黄色部件下方

注意：这台机器运行温度很高，产热蒸汽，还产热二氧化碳。有条件就用金汞齐建造。另外，除非聚合物压塑器处在很热的房间里，蒸汽会凝结成水——摆放位置时要记住这一点。

过热问题搞不定的话，临时办法是在聚合物压塑器旁边用冰造一块变温板。

没有二氧化碳输出管道，聚合物压塑器无法工作。想把二氧化碳利用起来，可以喂给浮油生物（石油群系里有），或者用它驱动二氧化碳火箭引擎（如果你有《眼冒金星！》DLC）。我一般是先在附近排掉，等哪天腾出手来建一条排进太空的管道。

由于聚合物压塑器吃石油，我通常把它放在原油精炼器旁边。

![ONI-guide-PolymerPress-1.png](../../guidesnotincluded_archive/assets/ONI-guide-PolymerPress-1-bea90f73d0.png)

![ONI-guide-PolymerPress-2.png](../../guidesnotincluded_archive/assets/ONI-guide-PolymerPress-2-a837e07365.png)

![ONI-guide-PolymerPress-3.png](../../guidesnotincluded_archive/assets/ONI-guide-PolymerPress-3-d397c973c9.png)

我通常会加一台自动清扫器和一个智能存储箱，然后把存储箱接到非门、再接到聚合物压塑器。

这样你就能设定想要的塑料常备量，达到存量后聚合物压塑器自动停机。（存储箱里塑料在"人造材料"分类下。不过要等你真有塑料它才会显示。）

![ONI-guide-PolymerPress-4.png](../../guidesnotincluded_archive/assets/ONI-guide-PolymerPress-4-8d9b4109b0.png)

我通常会在聚合物压塑器之间留一格放一台小型液泵。不过到目前为止，那里积的水还从没多到需要泵的程度。

压塑器下方容易积水（冷却下来的蒸汽），踩进去会有减益。想避免减益，可以从"另一侧"封住通往智能存储箱的路（上图中即右侧），在聚合物压塑器右边加一扇门或一块透气砖。

上图没画冷却。我的标准方案是在这个区域跑一条冷却回路。（等讲完怎么搞到钢，我们再讲冷却。）

---

*本页存档自 [https://www.guidesnotincluded.com/getting-oil-petroleum-and-plastic](https://www.guidesnotincluded.com/getting-oil-petroleum-and-plastic)（[Wayback Machine 快照](https://web.archive.org/web/20250827233034id_/https://www.guidesnotincluded.com/getting-oil-petroleum-and-plastic)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
