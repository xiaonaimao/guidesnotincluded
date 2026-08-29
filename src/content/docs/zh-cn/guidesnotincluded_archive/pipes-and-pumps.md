---
title: "管道与泵：液体和气体流动基础"
description: "关于液体和气体管道，有一些实用的知识值得了解。而机缘巧合，本节讲的恰恰就是这些……"
source_url: https://www.guidesnotincluded.com/pipes-and-pumps
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806081942id_/https://www.guidesnotincluded.com/pipes-and-pumps
---

## 引言

关于液体和气体管道，有一些实用的知识值得了解。而机缘巧合，本节讲的恰恰就是这些。

我们先介绍有哪几种泵，然后讲一个格子（或一片区域）能泵进多少液体或气体，最后——也许最重要——讲如何控制液体（和气体）的流动。

全文以一套厕所加 SPOM 的系统为例，说明控制液体流动可以怎么做、以及为什么值得学会这么做。

## 液体泵与气体泵

无论液体还是气体，都有大泵和小型泵（叫"迷你"泵）两种。所有泵都靠研究解锁。

大泵用金属矿建造，开局就能轻松造出来。小型泵需要[塑料](getting-oil-petroleum-and-plastic.md)。

泵不要求建在地基上——连液泵也一样。也就是说你可以把液泵建在一大片液体正中间，它照样工作。

![Building_Liquid_Pump.webp](../../guidesnotincluded_archive/assets/Building_Liquid_Pump-97513ef6c1.avif)

液泵

![Building_Mini_Liquid_Pump.webp](../../guidesnotincluded_archive/assets/Building_Mini_Liquid_Pump-fef049636f.avif)

小型液泵

![Building_Gas_Pump.webp](../../guidesnotincluded_archive/assets/Building_Gas_Pump-ad93f05915.avif)

气泵

![Building_Mini_Gas_Pump.webp](../../guidesnotincluded_archive/assets/Building_Mini_Gas_Pump-db081be126.avif)

小型气泵

泵泵送的是所谓的"团"（packet），液体或气体各成一团。每一团只能装一种液体或气体，不能混合。

打开水管概览和通风概览（图标在右上角）就能看到这些团。每段管道装（或能装）一团。

有个配比问题要记在心里：泵一次能泵多少，对比一团能装多少——也就是一段管道能装多少。

- 一台液泵每次泵 10 千克液体
- 一段液体管道每团可装 10 千克液体

理想条件下——即液泵只有一种液体可泵、且液体充足——液泵与液体管道是 1:1 的关系：一台液泵恰好能灌满一条液体管道。

- 一台气泵每次泵 0.5 千克（500 克）气体
- 一段气体管道每团可装 1 千克（1000 克）气体

也就是说，一段气体管道的团能装下两台气泵的产出。（前提是同一种气体。）

![PumpMaxPackets2.png](../../guidesnotincluded_archive/assets/PumpMaxPackets2-8534efcabb.avif)

![PumpMaxPackets1.png](../../guidesnotincluded_archive/assets/PumpMaxPackets1-e902c5444b.avif)

一台液泵能灌满一条液体管道。气体管道能装下两台气泵的产出（同种气体的前提下）。

## 排气口与气压：一个格子能装多少气体？

有点反直觉：泵送气体时，决定一个区域能被泵入多少气体的不是气泵，而是排气口。

- 排气口每格最多向区域排放 2 千克气体
- 高压排气口每格最多排放 20 千克

泵的大小——气泵还是小型气泵——只影响泵气速度，不影响一个区域能被泵入多少。

![Building_Gas_Vent.webp](../../guidesnotincluded_archive/assets/Building_Gas_Vent-0c57a5d233.avif)

排气口。每格最多排放 2 千克

![Building_High_Pressure_Gas_Vent.webp](../../guidesnotincluded_archive/assets/Building_High_Pressure_Gas_Vent-7ac2975794.avif)

高压排气口。每格最多排放 20 千克

喷气的喷口与排气口有个共同点：喷气能力同样有气压上限。

- 当气体达到每格 5 千克时，区域过压，喷口停止喷气。

![ONI_Guide_NatGas.png](../../guidesnotincluded_archive/assets/ONI_Guide_NatGas-2470474ae6.avif)

气压已达每格 5 千克，这台天然气喷口不会再喷气了。

这意味着，想最大化从喷口收集的气体，就要用高压排气口把气体泵进另一个区域（或房间）。这样每格能装 20 千克气体，而不是 5 千克。

![GeyserAndVent.png](../../guidesnotincluded_archive/assets/GeyserAndVent-6b381ece16.avif)

两个房间一样大，但右边那个能装四倍的气体。天然气喷口在每格 5 千克时过压，而高压排气口可以一直泵到每格 20 千克。

如果你不介意稍微违背一下物理法则，还可以更进一步：一个格子可以叠两层气体——储气库里存着气体，储气库脚下的格子里也存着气体。（这解释得有点乱——看下图。）

也就是说，你可以在储气室里塞满储气库，让气体先流过储气库、再从房间里的高压排气口排出。房间会先被灌到每格 20 千克，然后各储气库开始憋气，每个能装 5 千克。

（火箭气体存储罐能装更多。我自己不用这个，但听说有人用火箭模块在基地里囤了大量气体。）

![GeyserAndVentAndReservoires.png](../../guidesnotincluded_archive/assets/GeyserAndVentAndReservoires-f9b1f49b51.avif)

极限储气。储气室里充满了气体，还有一批储气库能装下更多。

如果搭了这套东西，记得在储气室里单独放一台气泵，把气体泵到需要的地方。

（可以加自动化，让泵只在气量充足时启动——见[自动化入门](getting-started-with-automation.md)一节。）

最后提醒：这套方案稍稍 bends 了物理法则。如果你想把这些法则彻底违背，还可以搭无限气体（或液体）存储区。我自己不用这个机制，网上能搜到攻略，搜 infinite gas storage 或 infinite liquid storage 就行。

## 排气口与液压：一个格子能装多少液体？

气体出口有两种，液体出口只有一种：排液口。

当它所在格子的压力达到 1000 千克时，它会停止工作——不再放出液体。

![LiquidTileVolumes.png](../../guidesnotincluded_archive/assets/LiquidTileVolumes-26c79c9f09.avif)

同重不同积。每段都是 10000 千克液体。不同液体占用的空间不同。

![ONI_Guide_GeyserOverpressure.png](../../guidesnotincluded_archive/assets/ONI_Guide_GeyserOverpressure-6978c2f4ea.avif)

过压。污染水排液口不会再排出更多污染水了。

![Building_Liquid_Vent.webp](../../guidesnotincluded_archive/assets/Building_Liquid_Vent-461ce94129.avif)

排液口。

压力达到 1000 千克即停止排放。

更复杂的一点是：一格能装多少液体，取决于液体种类。

几种常见液体装满一格所需的质量：

- 石油：740 千克
- 原油：870 千克
- 水：1000 千克
- 污染水：1000 千克
- 乙醇：1000 千克
- 盐水：1100 千克
- 浓盐水：1200 千克

注意：无论泵的是什么液体，排液口都会在 1000 千克压力时停止工作。但是：并非所有液体都一定能达到这个压力。比如石油和原油，就算一格完全浸满也堵不住排液口。

（要停住这种排液口可以用[自动化](getting-started-with-automation.md)，比如接一个液压传感器，在格子灌满时关闭排液口。）

如果格子上有压力，一格能装的液体可以超过上面列的数值。一个例子是你的储水区：把鼠标悬停在其上段和下段的格子上，你多半会发现每格水量并不相同。

排液口和气体喷口一样会过压停摆。我没专门测过，但大致规律是：当排液口泡在三格液体里（中子物质底座以上），且第三格达到每格 500 千克时，就会发生。

<!-- TODO-TERMS: neutronium（官方蓝图前缀作"中子"，暂译"中子物质"）; Leaky Oil Fissure（po 未收录，暂译"漏油裂缝"） -->

漏油裂缝会过压停喷，但储油石（如果我没记错）不会——即使被完全淹没也能继续产油。（不过它不算喷口，需要水和电，还得偶尔泄压才能工作。油井的更多内容见[《获取原油、石油和塑料》](getting-oil-petroleum-and-plastic.md)一节。）

## 液体与气体管道基础：输入口与输出口

[这一节我很快会补上。眼下你可以在[《前期指南》](the-early-game.md)里找到这些基础。]

## 控制团的流向

![ONI_Guide_LiquidBridge.png](../../guidesnotincluded_archive/assets/ONI_Guide_LiquidBridge-d74ea51328.avif)

![ONI_Guide_LiquidBridge2.png](../../guidesnotincluded_archive/assets/ONI_Guide_LiquidBridge2-1e06922d24.avif)

液体管道桥。液体沿箭头方向流动，在水管概览里就是从白色到绿色。

泵和管道大体上表现符合预期，但有时需要帮一点忙。如果你的液体（或气体）在管道里不动，可能是因为它不知道该往哪边走。

（注意：液体不动的另一个原因是你把输入口和输出口接反了。打开水管概览，再核对一遍白色和绿色的接口。）

- 你可以用液体管道桥（或气体管道桥）告诉游戏你希望东西往哪个方向流。

液体管道桥只允许液体沿一个方向通过。方向是从白到绿——从输入口到输出口。（凑近看能看到一个表示方向的小箭头。）

任何时候你发现液体明明该动却不动，试着放一个液体管道桥，指明你要的流向。

来看一个需要液体管道桥帮忙的例子。

![ONI_Guide_LilquidFlow1.png](../../guidesnotincluded_archive/assets/ONI_Guide_LilquidFlow1-84287cab78.avif)

上图：液体停住了，因为它不知道该往哪流。

下图：一个液体管道桥强迫液体选定了方向。

![ONI_Guide_LilquidFlow2.png](../../guidesnotincluded_archive/assets/ONI_Guide_LilquidFlow2-7d0dd8e9f9.avif)

上图的例子里，泵把整个环路灌满后液体就会停。但你也可以造出永远循环的液体环路，哪怕把泵拆掉都不停。

## 无限环路

无限环路——液体在其中永远转圈圈的管道环——在冷却回路之类的场景很有用。

要把上面的设计改成无限环路，先把环路断开。

![ONI_Guide_LilquidFlow5.png](../../guidesnotincluded_archive/assets/ONI_Guide_LilquidFlow5-3197b40a4a.avif)

环路里的水会静止——不循环。因为管道太满，液体动不了。让它动起来的办法是拿掉一团液体。

两种做法：使用"清空管道"命令（右下角，但需要一名拥有"管路工作"技能的复制人），或者直接拆掉一段管道再原样装回去。

完成后，环路里的液体就会开始循环，并永远循环下去。

也有不靠清空或拆管道的无限环路搭法：用液体管道桥接入你的环路。

![ONI_Guide_LilquidFlow4.png](../../guidesnotincluded_archive/assets/ONI_Guide_LilquidFlow4-669064dc8a.avif)

液体管道桥只有在桥另一侧的管道有空位时才放行液体。也就是说，液体管道桥非常适合确保管道——或一大片管道网络——不会过满。

上图里（静态图看不到流动，抱歉），通向环路的液体是静止的，环路里的液体则在循环。

如果我没讲明白，就自己照着图搭一个试试。这是个非常实用的机制，绝对值得练熟。

![ONI_Guide_LilquidFlow6.png](../../guidesnotincluded_archive/assets/ONI_Guide_LilquidFlow6-a8740f7221.avif)

无限环路。中上位置是一台产冷的反熵消热器，两侧的液体环路把冷气输送到冰原小麦农场的各个角落。（图上看不出来，但液体一直在循环。天长地久，永不停止。）

## 用液体管道桥给水源排优先级

液体管道桥不仅能强迫液体选方向，还能给液体（或管道）来源排优先级。

你总会遇到想给管道排优先级的时刻。比如告诉游戏：这条管子里有液体就先用它。

这时又是液体管道桥的主场。它有两个用法：输入口侧和输出口侧。

输出口侧（绿色接口）的用法就是上一节"造无限环路但不过满"的机制：

- 液体沿液体管道桥流向一条普通管道时，只有管道有空位才会进入。

这个机制还能用在给 SPOM 供水之类的场景：你可能希望优先用某个来源的水，比如厕所的溢流水，其他时候用另一个来源。（本节末尾有这个例子的配图。）

然后是输入口侧（白色接口）：

- 液体到达液体管道桥时，总是先尝试过桥。

只有过不去——桥另一侧的管道满了——才会改用别的管道。

![ONI-Guide-LiquidBridge3.png](../../guidesnotincluded_archive/assets/ONI-Guide-LiquidBridge3-58cc26c3f0.avif)

液体管道桥。只有管道有空位时，泵里的水才被放行。图中的泵是备用的第二水源，负责给管道保满。

![ONI_Guide_PrioritizingFlow4.png](../../guidesnotincluded_archive/assets/ONI_Guide_PrioritizingFlow4-ecb52c1c76.avif)

液体管道桥。中间的水罐先装满，只有通往中间水罐的管道没空位时，水才开始流向上方的水罐。

这个机制在很多场景都好用。两个常见例子：

1. 用作厕所净化系统的溢流机构。
2. 用作 SPOM 中多余氢气的溢流机构。

## 示例系统：厕所、SPOM 与水源

最后用一个例子收尾，展示液体管道桥如何整合多个系统。这个例子（的简化版）几乎出现在我的每一次游玩里：把厕所的多余水送到 SPOM。

![ONI_Guide_PrioritizingFlow1.png](../../guidesnotincluded_archive/assets/ONI_Guide_PrioritizingFlow1-58964b6b5f.avif)

![ONI_Guide_PrioritizingFlow1_LiquidOverview.png](../../guidesnotincluded_archive/assets/ONI_Guide_PrioritizingFlow1_LiquidOverview-3db23b0d8d.avif)

流量优先级。厕所污水净化系统的多余水被送往 SPOM。（这里的管道还没连完——最终版看最后一张图。）

上图中，中间是一套污水净化系统。（它的工作原理和搭建方法在指南另一章：见[《回收厕所水》](recycling-toilet-water.md)。）

刚净化的水首先被送回厕所回路。这靠一个液体管道桥实现——画面最右侧中间那个——它告诉水：下面的管道有空位就下去。

因为厕所产出的液体比消耗的多，厕所加净化系统会富余出水。当从液体管道桥向下的管道灌满后，多余的水就会被送上去给 SPOM。

（SPOM 是一套产氧装置，指南后面会讲：见[《氧气：懂 SPOM，爱 SPOM》](to-know-the-spom-is-to-love-the-spom.md)。）

还没完。照上图搭的话，只有厕所恰好富余时 SPOM 才能零星喝到水。

我们要保证 SPOM 随时有水喝。办法是从另一个水源再接一条管道过来。（水不够用的话，见[《获取（更多）水》](getting-more-water.md)。）

![ONI_Guide_PrioritizingFlow2.png](../../guidesnotincluded_archive/assets/ONI_Guide_PrioritizingFlow2-c9ea6cfdf3.avif)

快好了。水源接到 SPOM 的这个液体管道桥意味着：只有厕所那条管道空了，它才会用水源的水。但它会同时把水既泵给 SPOM（好事），又泵回厕所（坏事）。

![ONI_Guide_PrioritizingFlow3.png](../../guidesnotincluded_archive/assets/ONI_Guide_PrioritizingFlow3-d1ca9c4148.avif)

完工。再加一个液体管道桥，就能阻止水源的水泵流向厕所。

上图的用法保证了 SPOM 优先喝厕所的富余水，只在没有富余时才动用水源。

（其实厕所的富余水没那么多，SPOM 的耗水量又不小。所以严格说不加这个桥也行。就算 SPOM 把厕所富余水和水源水平均着喝，也不太可能堵死厕所。但厕所一旦堵了就要出事故。所以加一道额外的保险——哪怕多半用不上——总是好的。）

还剩最后一个问题：上图中，水源的水会被同时泵给 SPOM 和厕所。后者会堵死厕所并引发事故。

我们要确保水源的水只给 SPOM、绝不进厕所。办法是再给设计加一个液体管道桥，挡住从水源流向厕所的水。

![ONI_Guide_PrioritizingFlow5.png](../../guidesnotincluded_archive/assets/ONI_Guide_PrioritizingFlow5-8ca633577f.avif)

厕所与 SPOM。这是我几乎每局都会用的（简化版）系统。厕所（以及淋浴间、污水倾倒站等）的富余水被送往 SPOM。SPOM 同时还需要一个额外水源。液体管道桥在各处控制着水的流向。

---

*本页存档自 [https://www.guidesnotincluded.com/pipes-and-pumps](https://www.guidesnotincluded.com/pipes-and-pumps)（[Wayback Machine 快照](https://web.archive.org/web/20250806081942id_/https://www.guidesnotincluded.com/pipes-and-pumps)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
