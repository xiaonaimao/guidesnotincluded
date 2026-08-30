---
title: "小型工业"
description: "我个人的偏好是复制人少、基地紧凑。我把所有制造机器都建在基地里并给它们降温，而不是单搞一块滚烫的工业区。"
source_url: https://www.guidesnotincluded.com/mini-industry
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806081310id_/https://www.guidesnotincluded.com/mini-industry
---

我个人的偏好是复制人少、基地紧凑。我把所有制造机器都建在基地里并给它们降温，而不是单搞一块滚烫的工业区。（从电力角度这挺浪费的，但这又是一条个人偏好。）

给想把东西做紧凑的玩家：这里有一种在小空间里塞大量东西的办法。我几乎每局都会建一个这种布局的变体。（不过我自己很少建到这么紧凑。但如果你想保持小巧，这套设计够你用了……;-)

设计包含一条冷却回路。但记住它只适合小规模使用：如果你让大量制造机器连轴转，它是跟不上的。

地板宽 18 格。只是为了配合我的基地——我的地板几乎总是 18 格宽。（存储箱空间有限，能塞就塞。为了图面清晰我省略了它们。）

![ONI-guide-Mini-Industry-1.png](../../guidesnotincluded_archive/assets/ONI-guide-Mini-Industry-1-20bae7c849.avif)

右下角的机器是分子锻造器。它是后期机器，因为需要起始小行星上没有的材料。一些分子锻造器配方还需要石油，所以旁边配了石油来源。那个石油罐还兼任玻璃的冷却液。

<!-- TODO-TERMS: Molecular Forge（官方串表未直接检索到该键，暂译"分子锻造器"） -->

如果你有[滑鳞壁虎养殖场](low-tech-plastic-drecko-ranching.md)，就不需要聚合物压塑器（右边那台白机器）。那个位置可以加一台气压服锻造台或其他必要的机器。（我已经彻底不用聚合物压塑器了，塑料全靠滑鳞壁虎养殖。没试过的建议试试。）

上图没画冷却回路——画了会更（加倍）混乱。冷却回路我单独讲。

![ONI-guide-Mini-Industry-power.png](../../guidesnotincluded_archive/assets/ONI-guide-Mini-Industry-power-498f7bd783.avif)

我最近开始把蒸汽涡轮接进我的电力主干线。这不是必需的；不接的话就不用在那里跑难看的高功率电线。（但从更远的地方给所有机器拉线时，你要收拾的"意面"会更多。）

分子锻造器非常吃电——1600W！图中它没通电。（丑办法是把高功率电线拉过去。体面的办法是从……任何有富余变压器的地方拉一根导电线过来。）

另一个选项是用一点自动化，保证玻璃熔炉和分子锻造器只有一台能同时运转。这样两台可以共用同一根电线。

![ONI-guide-Mini-Industry-liquid.png](../../guidesnotincluded_archive/assets/ONI-guide-Mini-Industry-liquid-cc9a6ba911.avif)

图中环绕整个设计的虚线液体管道就是冷却回路。它其实应该绕着楼层和机器走才能给它们降温，但那样图会乱得没法看，所以我单独画。

从图下方爬上来的管道是油的入口。它经过一台原油精炼器，产出的石油分成两条输出管道。一条通向聚合物压塑器，再向上（等你有了火箭就通向石油火箭）。另一条排进石油储罐，供分子锻造器使用。

玻璃熔炉的液体管道：有陶瓷就用陶瓷。有富余陶瓷就用隔热管道，但据我经验普通陶瓷管道也够用。

![ONI-guide-Mini-Industry-automation.png](../../guidesnotincluded_archive/assets/ONI-guide-Mini-Industry-automation-576538ab1f.avif)

我喜欢在冷却回路里放一个储液库，然后把液体管道温度传感器放在储液库之后。这样回路起点就能得到可控、平稳的温度。

（注意：写完这一节之后，我改了冷却液进液温调节器的管道方式。现状见本页末尾的图。）

聚合物压塑器的自动化：智能存储箱满了就停机。（细节见[《自动化入门》](getting-started-with-automation.md)。）

这套设计在聚合物压塑器旁（透气砖之间）留了一小块让水汇集的区域。要让水只积在那里，你需要给聚合物压塑器周围（和上方）加大量冷却。

下面这张图的冷却回路可能不够把水困在原地。不够的话，让冷却回路也从聚合物压塑器上方经过，再加一两块钻石变温板。（或者试试滑鳞壁虎。）

原油精炼房里的气压传感器用于在天然气攒到精炼器停工之前把它抽走。

（这些图不含气体管道，但那部分管道没什么意外——泵氧气给气压服存放柜，把聚合物压塑器的二氧化碳泵到……随便哪，再把多余的天然气也泵到随便哪。）

石油的习性和水不同——即使石油罐里的排液口浸在石油里，石油仍会从排液口不断涌出。所以罐子装到一定程度时，你需要一套自动关闭系统。做法很简单：用信号线把液压传感器直接接到排液口上。

![ONI-guide-Mini-Industry-cooling-loop.png](../../guidesnotincluded_archive/assets/ONI-guide-Mini-Industry-cooling-loop-30b057b887.avif)

最后，同一套设计但跑着冷却回路的图。（我对其他管道做了些小调整来塞进冷却回路：金属精炼器的管道加了几个液体管道桥，石油输出管道加了一个。）

为了图面清晰我全程用了导热管道。正常情况下我只在高热区域用导热管道。

如果发现哪里过热，可以在冷却回路运行中把普通管道原地升级成导热管道。冷却液不会从管道里洒出来。

![ONI-Aquatuner-1.png](../../guidesnotincluded_archive/assets/ONI-Aquatuner-1-ad41e147c8.avif)

呃……关于刚才那套设计……

写完上一节之后，我改成了从上方进冷却液，如图。

冷却液从右边进，穿过液温调节器，向上进储液库，再从左边出去。两种都行——重要的是你的冷却回路能转。

加一点自动化，防止金属精炼器连转导致过热

如果金属精炼器连续（或接近连续）运转，冷却液早晚会过热并撑破管道。

我不明白为什么玩了几千小时才想明白：给设计加一点自动化就能阻止过热。

试了几种方案后，我最终定下的是：在冷却池里放一个温度传感器，接到金属精炼器上。

温度传感器测温，过热时关停金属精炼器。我发现设成"低于 200 C"时，蒸汽涡轮几乎满负荷运转。

指南的这一部分我晚些会重写，把结尾提到的改动补进去。眼下先放几张我当前游戏的概览图，包含两处改动——新的液温调节器管道方式和蒸汽箱里的自动化。

（关于那两台窑炉：一台设为持续烧陶瓷。另一台持续烧精炼碳，并接到一个智能存储箱上——存到 5K 精炼碳时自动停产。）

![ONI-Guide_MetalRefineryAutomation.png](../../guidesnotincluded_archive/assets/ONI-Guide_MetalRefineryAutomation-14cdc3352c.avif)

![ONI-Guide_MetalRefineryAutomation2.png](../../guidesnotincluded_archive/assets/ONI-Guide_MetalRefineryAutomation2-4b700172a6.avif)

![ONI-Guide_MetalRefineryAutomation3.png](../../guidesnotincluded_archive/assets/ONI-Guide_MetalRefineryAutomation3-d051fc527a.avif)

---

*本页存档自 [https://www.guidesnotincluded.com/mini-industry](https://www.guidesnotincluded.com/mini-industry)（[Wayback Machine 快照](https://web.archive.org/web/20250806081310id_/https://www.guidesnotincluded.com/mini-industry)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
