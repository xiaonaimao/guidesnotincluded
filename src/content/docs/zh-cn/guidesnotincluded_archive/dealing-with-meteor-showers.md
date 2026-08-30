---
title: "应对流星雨"
description: "在本体里，想去太空，流星雨是你早晚要面对的东西。这从来不是我喜欢的《缺氧》环节……"
source_url: https://www.guidesnotincluded.com/dealing-with-meteor-showers
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806085052id_/https://www.guidesnotincluded.com/dealing-with-meteor-showers
---

## 引言

在本体里，想去太空，流星雨是你早晚要面对的东西。这从来不是我喜欢的《缺氧》环节，DLC 出来时我乐得终于摆脱它了。结果"Whatta Blast"更新一来，流星雨又成了大家共同的课题。（叹气。）

于是我开了个新档，取名"为什么偏偏是彗星"，开始重新温习应对天降太空垃圾到底是怎么回事。

有好消息：真空中的冷却变简单了。《眼冒金星！》DLC 的流星雨来得没那么频繁。而且有些流星雨相当温和，只有寥寥几颗。另外，如果你压根不想应对流星雨，可以在游戏设置里把它关掉。（这是单机游戏——怎么开心怎么玩。）

随着游戏继续、学到更多，我会更新本节；这里先给你一些入门基础。（说真的，我只是在等 Francis John 出这套东西的教程，自己先凑合摸索。）

## 两种思路：轰掉或挖掉

![ONI-Guide-MeteorBlasterInAction.png](../../guidesnotincluded_archive/assets/ONI-Guide-MeteorBlasterInAction-51b39b19a8.avif)

流星炮开火中

"Whatta Blast"更新带来了流星炮。所以第一种应对思路是把流星从天上轰下来。但要注意一个缺点：被打下来的流星只掉一部分材料，其余销毁。

生产炮弹（用来打流星的那种"子弹"）要消耗精炼金属。所以不但没有资源进账，还要花资源。（打出去的炮弹能回收一些精炼金属，多少我不确定。我猜 25%，也许 50%。）

好的一面：这种方案能让太阳能全天候运转，流星雨期间也不例外。而且用的钢比第二种方案少得多。说到第二种方案……

第二种方案老玩家都不陌生，就是本体的 Francis John C 型矿工设计：用掩体舱门盖住你基地（或地图）的顶部，让流星砸在门上。流星雨结束后打开掩体舱门，让碎屑落下，再用机器人矿工挖干净。

这种方案能把流星里的材料全部收回来。（注意它们可能非常烫——超过 200 C。）它需要大量[钢](getting-steel.md)，掩体舱门开合时还要耗不少电（取决于你用它们盖住多大范围的地图）。

两种设计都用太空扫描仪，都需要冷却。先看这个。然后快速讲一个在流星雨接近时收到通知、甚至自动暂停游戏的方法——以防你想亲眼看看你的防线顶不顶得住。最后才是设计本体。

## 太空扫描仪

太空扫描仪基础：

- 耗电 120 W
- 探测到目标时发送绿信号
- 可以设为探测流星雨（或火箭或星际载货）

![Building_Space_Scanner.webp](../../guidesnotincluded_archive/assets/Building_Space_Scanner-98c93fc8b6.avif)

太空扫描仪

太空扫描仪探测来袭流星雨的速度带有随机性。扫描仪越多，扫描质量越好、越早探测到流星的概率越高。

点击扫描仪能看到一个扫描质量百分比，表示这台扫描仪的工作状况。还有你的扫描网络质量百分比，多建几台太空扫描仪可以提高这个数字。

数字越高，越早探测到流星雨的概率越大。但早探测是否重要，取决于你的方案。

太空扫描仪不会过热，不用操心冷却。说到冷却……

## 冷却回路与传导板

![Building_Conduction_Panel.webp](../../guidesnotincluded_archive/assets/Building_Conduction_Panel-a26c1b186f.avif)

传导板

两种应对方案都需要冷却。流星炮和机器人矿工工作时都发热，不冷却就会过热。万幸，真空中的冷却因为一种叫做传导板的东西变得容易多了。

传导板基础：

- 用于温度传递
- 有液体输入和输出接口
- 在真空中也能工作
- 可以贴在建筑上，穿过地板和墙壁
- 无论里面有没有液体都在传递温度（液体是用来冷却它的）

所以要在真空中冷却什么，就让一条冷却回路经过它，在需要冷却的位置放上传导板。（指南前面讲过两种冷却回路：[反熵消热器冷却](anti-entropy-thermo-nullifier-cooling.md)或[液温调节器加蒸汽涡轮](thermo-aquatuner-steam-turbine-cooling-loop.md)。）

![ONI-Guide-MeteorBlasterCoolingLoop.png](../../guidesnotincluded_archive/assets/ONI-Guide-MeteorBlasterCoolingLoop-89f1ba5089.avif)

带传导板的冷却回路

进入正题前还有一件事：在流星雨开始前暂停游戏的方法。

## 撞击前暂停：自动通知器

![Building_Automated_Notifier.webp](../../guidesnotincluded_archive/assets/Building_Automated_Notifier-1dfcdc34ff.avif)

自动通知器

有一点自动化可以让你在某事发生时收到通知，甚至暂停游戏。它叫自动通知器。

自动通知器通过研究殖民地发展分支的"通知系统"解锁。解锁后在"自动化"分类下。

点击自动通知器会有一些选项：可以加一个名字，触发时显示在屏幕左上角；也可以设置触发时暂停游戏。

把自动通知器接进你太空扫描仪的自动化网络，探测到流星雨时它会收到绿信号并暂停游戏（如果你这么设置）。这样你就可以欣赏你的防线在流星雨下的表现，看看要不要调整。

![ONI-Guide-AutomatedNotifier.png](../../guidesnotincluded_archive/assets/ONI-Guide-AutomatedNotifier-3af96f2708.avif)

![ONI-Guide-AutomatedNotifier2.png](../../guidesnotincluded_archive/assets/ONI-Guide-AutomatedNotifier2-cda59b6801.avif)

自动通知器。连接到太空扫描仪的自动化网络。

基础铺垫完毕，来看两种应对流星雨的方案：轰掉，以及 C 型矿工方案。

## 轰掉：导弹防御

设计很简单：在基地顶部一字排开一堆流星炮。

![ONI-Guide_CometsMissileDefence1.png](../../guidesnotincluded_archive/assets/ONI-Guide_CometsMissileDefence1-b71a8ccc63.avif)

![ONI-Guide_MeteorBlaster.png](../../guidesnotincluded_archive/assets/ONI-Guide_MeteorBlaster-489f3fc5ca.avif)

流星炮

![ONI-Guide_MeteorBlaster2.png](../../guidesnotincluded_archive/assets/ONI-Guide_MeteorBlaster2-b7d8480853.avif)

流星炮射程

流星炮基础：

- 耗电 240 W
- 发射炮弹（由炮弹制造器单独生产）
- 有炮弹的运输轨道输入口
- 射程 33 x 33 格；流星炮顶部位于射程范围的底部中央（见图）
- 似乎无法瞄准地图建造区上方的目标（所以建在地图最顶上效果不佳）
- 不挡光，不影响太阳能板

一台流星炮可以覆盖 33×33 格的区域。但它锁定并射击一颗流星需要时间。如果两颗流星落点接近，可能来不及都打下来。

流星雨强度不一。如果你把多台流星炮沿顶部排开、射区互不重叠——即天空任何一点只能被一台流星炮够到——那么在较强度的流星雨期间，会有流星漏过去。

我不确定最优间距是多少——多远能保证 100% 打下所有流星。我从零重叠开始（天上每个点都由一台流星炮覆盖），结果强流星雨期间还是有流星漏网。之后改成流星炮之间隔 15 格，好一些，但偶尔仍有漏网碎屑。于是现在改成间隔 10 格。目前看够了。

写作当时有个 bug：复制人建造流星炮时会装填炮弹，但建成之后只有完全打空才会补充。（打空多半发生在流星雨正酣时——可不是弹尽的好时机。）

我已经提交了 bug 报告。但在机制改变之前，这意味着搭一套给流星炮补弹的运输轨道系统很重要，确保它们永不彻底断弹。

![Building_Space_Scanner.webp](../../guidesnotincluded_archive/assets/Building_Space_Scanner-98c93fc8b6.avif)

太空扫描仪

流星炮耗电不小，最好只在需要时运转。办法是给设计加一个太空扫描仪（前面讲过）。

太空扫描仪探测到流星雨来袭时发绿信号。把流星炮接进自动化网络，它们就只在扫描仪通报来袭时开机。

流星炮收到绿信号立即开始工作，所以一台扫描仪就够。多台扫描仪带来的提前探测，只是让流星炮更早开始耗电（没必要）。

流星雨结束后，太空扫描仪会开始发红信号。但它开始发红时，仍有一些流星在坠向地表的路上。红信号会关掉流星炮，流星就会砸到基地。避免的办法是加一个缓冲门。

![ONI-Guide-BufferGate.png](../../guidesnotincluded_archive/assets/ONI-Guide-BufferGate-2a9529b072.avif)

缓冲门

缓冲门基础：

- 收到绿信号就输出绿信号
- 收到的信号变红后，缓冲门会继续发送绿信号一段设定时长
- 绿信号的缓冲时长由你决定

基本就是：即使太空扫描仪重新发红，缓冲门也让流星炮多接收一会儿绿信号。

设多长合适？设得越长漏过来的流星越少。40 秒似乎足以全部拦住。

![ONI-Guide-SpaceScannerBufferGate1.png](../../guidesnotincluded_archive/assets/ONI-Guide-SpaceScannerBufferGate1-bf31e58b88.avif)

缓冲门。即使太空扫描仪重新发红，缓冲门也会继续发绿信号一段时间（时长你定）。

除了上面这些，你还得生产炮弹——流星炮打流星用的东西。

炮弹用一种叫做炮弹制造器的建筑生产。通过研究液体分支的"喷气背包"解锁。解锁后在"站点"分类下。

![ONI-Guide-BlastshotMaker.png](../../guidesnotincluded_archive/assets/ONI-Guide-BlastshotMaker-766a6e2377.avif)

炮弹制造器

炮弹制造器基础：

- 耗电很大：960 W
- 用精炼金属和石油生产炮弹
- 有石油的输入管道
- 副产物是二氧化碳和热量

每单产出五发炮弹，需要 25 千克精炼金属和 50 千克石油。

精炼金属可以在碎石机或金属精炼器里精炼矿石获得。但更可持续的办法是使用你有火山产出的那种金属。（[如何获得石油](getting-oil-petroleum-and-plastic.md)和[如何驯服金属火山](taming-metal-volcanos.md)各有专文。）

写作当时炮弹制造器还有一些小 bug。复制人可以用手压泵从石油里填充石油，但炮弹制造器只有在液体输入口建有（哪怕只是计划建造的）管道时才工作。（这个我也提交了 bug 报告。）

你可以用自动化确保流星炮保持满弹、并留有炮弹储备。有一篇单独的[自动化基础](getting-started-with-automation.md)指南，下面是一种做法的概览。

一个智能存储箱保留一些炮弹储备。不满时它发信号启动炮弹制造器，直到重新装满。一台运输装载器（优先级高于智能存储箱）把炮弹送给流星炮。

![ONI-Guide-BlastshotMakerSetup1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BlastshotMakerSetup1-468787a83b.avif)

这套装置。存储箱装你用来造炮弹的精炼金属。智能存储箱存炮弹，运输装载器取炮弹。

![ONI-Guide-BlastshotMakerSetupAutomation.png](../../guidesnotincluded_archive/assets/ONI-Guide-BlastshotMakerSetupAutomation-4af3993007.avif)

自动化概览。智能存储箱和非门向炮弹制造器发绿信号，直到存储箱装满。

![ONI-Guide-BlastshotMakerSetupPriorities.png](../../guidesnotincluded_archive/assets/ONI-Guide-BlastshotMakerSetupPriorities-e419829ede.avif)

优先级。确保运输装载器的优先级高于智能存储箱。

![ONI-Guide-BlastshotMakerSetupConveyor.png](../../guidesnotincluded_archive/assets/ONI-Guide-BlastshotMakerSetupConveyor-1966719e29.avif)

运输视图。运输装载器把炮弹送往流星炮。

接下来是导弹防御布局的几张概览。

![ONI-Guide_CometsMissileDefence6.png](../../guidesnotincluded_archive/assets/ONI-Guide_CometsMissileDefence6-377deefa88.avif)

导弹防御。太空扫描仪控制流星炮的开关。

![ONI-Guide_CometsMissileDefence4.png](../../guidesnotincluded_archive/assets/ONI-Guide_CometsMissileDefence4-431b2c8ff0.avif)

自动化概览。流星雨来袭时太空扫描仪打开流星炮。它连着一个缓冲门（设为 30 秒），确保流星炮在整场流星雨期间保持激活。

![ONI-Guide_CometsMissileDefence3.png](../../guidesnotincluded_archive/assets/ONI-Guide_CometsMissileDefence3-17270090f0.avif)

运输视图。炮弹沿运输轨道送往流星炮。

![ONI-Guide_CometsMissileDefence5.png](../../guidesnotincluded_archive/assets/ONI-Guide_CometsMissileDefence5-8ac9914480.avif)

水管概览。一条冷却回路防止流星炮过热。传导板用于在太空真空中实现温度传递。

![ONI-Guide_CometsMissileDefence7.png](../../guidesnotincluded_archive/assets/ONI-Guide_CometsMissileDefence7-8d5bda33bb.avif)

电力概览。没电就没"咻咻"。

## C 型矿工

这是我从 Francis John 的[教程系列油管视频](https://www.youtube.com/watch?v=7Q7K2C1Zti0)学来的方案。

"C 型矿工"这名字来自机器人矿工周围那个像字母 C 的结构。但我现在意识到自己建的是反过来的。而且机器人矿工下方那格砖现在已经不需要了，所以我没建。也就是说这个设计和字母 C 毫不相似，我大概该给这方案改个名。唉。

这套设计问世之后，游戏机制有过一些变化，有好有坏。

好的一面：用传导板冷却机器人矿工比以前省事多了。

坏的一面：有些流星撞击后会留下实心砖。这种流星砸在防爆门上、在门上留下一层实心砖，将是全新的待解难题。（有的流星会这样，有的不会。所以一种思路是干脆在这类流星雨可能出现的小行星上不建这种防御。）

![ONI-Guide-BunkerDoorDefence.png](../../guidesnotincluded_archive/assets/ONI-Guide-BunkerDoorDefence-06258f853f.avif)

基本思路。流星雨接近时掩体舱门关闭。流星雨结束后机器人矿工挖掉落下的资源。

![ONI-Guide-BunkerDoorDefenceAutomation.png](../../guidesnotincluded_archive/assets/ONI-Guide-BunkerDoorDefenceAutomation-e912345bc3.avif)

自动化概览。扫描仪探测到流星雨发绿信号，非门把它变成红信号，掩体舱门关闭。（多台扫描仪扫描更准。）

![ONI-Guide-BunkerDoorDefencePipes.png](../../guidesnotincluded_archive/assets/ONI-Guide-BunkerDoorDefencePipes-168ffd7af5.avif)

水管概览。传导板用于在真空中实现温度传递。（冷却回路过了两遍大概是杀鸡用牛刀，但正合设计。）

给选择这个方案的人一句友好的警告：

这套方案一旦断电，崩坏会来得飞快：连锁连环车祸现场——掩体舱门来不及关闭、流星砸进来、太阳能板被挡、冷却回路被砸断（至少在传导板出现之前）、机器人矿工过热、太阳能废掉导致整条电网供电不足、基地里的建筑机器接连停机。（啊对，我说的都是亲身经历。）

所以要么准备一个像样的备用电源——足以同时给所有可能需要供电的东西供电——要么在电池里囤大量富余电力。（要囤多少？以我的经验，你以为需要的量，实际会需要更多。可能多很多。）

如果你不需要流星里的资源，且有富余的精炼金属和石油造炮弹，第一种方案（导弹防御）更安全。如果你需要流星资源，那就建好掩体舱门和机器人矿工，抬头对着太空吼一句：放马过来！

祝好运 :-)

<!-- TODO-TERMS: 本页描述性译名（官方 po 未收录，版本早于 Whatta Blast 更新）——流星炮(Meteor Blaster)/炮弹(blastshot)/炮弹制造器(blastshot maker)/机器人矿工(Robo-Miner)/传导板(Conduction Panel)/自动通知器(Automated Notifier)/缓冲门(Buffer Gate)/通知系统(Notification Systems)/喷气背包(Jetpacks, 科技名)/C 型矿工(C-miner, 社区名) -->

---

*本页存档自 [https://www.guidesnotincluded.com/dealing-with-meteor-showers](https://www.guidesnotincluded.com/dealing-with-meteor-showers)（[Wayback Machine 快照](https://web.archive.org/web/20250806085052id_/https://www.guidesnotincluded.com/dealing-with-meteor-showers)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
