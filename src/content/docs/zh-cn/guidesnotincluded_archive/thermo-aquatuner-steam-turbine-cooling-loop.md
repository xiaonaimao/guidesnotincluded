---
title: "液温调节器与蒸汽涡轮冷却（原理）"
description: "液温调节器与蒸汽涡轮冷却回路是你能遇到的最具变革性的建筑之一。它让你一把攥住后期的牛角，高喊\"我来了！\"……"
source_url: https://www.guidesnotincluded.com/thermo-aquatuner-steam-turbine-cooling-loop
archived: 2025-08-11
archive_snapshot: https://web.archive.org/web/20250811145925id_/https://www.guidesnotincluded.com/thermo-aquatuner-steam-turbine-cooling-loop
---

## 引言

液温调节器与蒸汽涡轮冷却回路是你能遇到的最具变革性的建筑之一。它让你一把攥住后期的牛角、高喊"我来了！"，同时对着环境试图过热你基地的种种努力狂笑。（或者收敛版的感言。各自随意。）

夸完之后得补一句：这套建筑我曾拖了最久才碰。我懒，而且它看起来复杂。当基地开始变热、或水开始见底时，指着基地里某个"重开就能做得更好"的地方要容易得多。

Reddit 上有人发明了"重开局综合症"（restartitis）这个词。它完美概括了我们很多人的玩法——谁不喜欢一张未经触碰的地图的许诺呢？我不是劝你别投降。我是说：一旦你花时间学会了搭冷却回路，重开局就成了一种选择，而不是必需。

后期，我们来了。

## 液温调节器

![Building_Thermo_Aquatuner.webp](../../guidesnotincluded_archive/assets/Building_Thermo_Aquatuner-fd2600fd3c.avif)

这里涉及两台机器：液温调节器和蒸汽涡轮。

液温调节器基础：

- 有一个液体输入口和一个液体输出口
- 需要（大量）电力：1.2 千瓦
- 流过它的液体会被冷却 14 度（摄氏）
- 产生大量热量

液温调节器本身很简单：液体进机器，机器降温，再吐出来。

问题在于：如果我们做成闭式回路——冷却液一圈圈转、每次都过一遍液温调节器——冷却液会越来越冷，直到结冰、撑破管道。

![ONI-guide-Coolingloop-1.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-1-bb7de6d5d6.avif)

闭式回路（注：不好）。这最终会让冷却液结冰、撑破管道。

所以冷却回路的挑战在于设计成：冷却液保持低温但不结冰。最好还能让我们定义一个小区间——一个我们希望冷却液输出温度的设定值。

办法不止一种。我们要用的是：只在需要更多冷量时才打开液温调节器；不需要时，让冷却液从液温调节器旁边流过、不进机。

![ONI-guide-Coolingloop-2.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-2-27710f3f00.avif)

解决方案（注：好）。冷却液体可以选择进不进液温调节器，同时保持冷却回路的流动。

这个回路的设计让冷却液的"团"（packet，或者叫 blob？）可以选择穿过液温调节器，也可以绕行。

液温调节器开机时，冷却液从白色输入口进入，冷却后从绿色口出来。不开机时，冷却液直接经过白色输入口继续前进，完全不进机器。

接下来是控制回路里的冷却。用一些简单的自动化：一个液体管道温度传感器，用信号线连接到液温调节器。

![ONI-guide-Coolingloop-3.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-3-d856d98c66.avif)

上例中传感器放在液温调节器正前方。这会带来一些温度波动：液温调节器开机时，冷却液会比不开机时冷 14 度。

取决于你用冷却回路冷什么，这可能无关紧要——那就直接用这个设计。

如果你想让冷却回路里的液体温度更平稳，对设计稍作修改即可。

我们在液温调节器之后加一个储液库，并把液体管道温度传感器移到储液库之后。

![ONI-guide-CoolingRedo1.png](../../guidesnotincluded_archive/assets/ONI-guide-CoolingRedo1-ee27d6cbc1.avif)

![ONI-guide-CoolingRedo2.png](../../guidesnotincluded_archive/assets/ONI-guide-CoolingRedo2-eb2a7cc28b.avif)

![ONI-guide-CoolingRedo3.png](../../guidesnotincluded_archive/assets/ONI-guide-CoolingRedo3-186872c507.avif)

上例中，储液库存有额外的冷却液体，用于在冷却液出发绕回路之前匀平温度。

如果储液库出来的液体太热，液温调节器就会开机，把更冷的冷却液送进储液库，直到罐内液体降到目标温度。

这个设计里，温度大幅波动（-14C）只会出现在液温调节器输出口到储液库之间的管段上（液温调节器开机时）。

从储液库出来进入冷却回路的液体则保持稳定温度（只要液温调节器跟得上你要冷的东西）。

说到冷却，接着冷却液温调节器本身。

思路很简单：把它泡在一汪液体里。液温调节器变热时，液体会吸收一部分热量。

![ONI-guide-Coolingloop-7.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-7-6c0aaf7b74.avif)

![ONI-guide-Coolingloop-8.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-8-647595281b.avif)

快完成了。图里没画出来的是连接液温调节器与液体管道温度传感器的信号线。

这个设计的问题只是把问题推迟了——冷却池里的水早晚会沸腾、化成蒸汽、热到再也冷却不了液温调节器。这就轮到蒸汽涡轮登场了。

## 蒸汽涡轮

![Building_Steam_Turbine.webp](../../guidesnotincluded_archive/assets/Building_Steam_Turbine-39b055ebcd.avif)

蒸汽涡轮

蒸汽涡轮能把热量转化为电力，是"摆脱"（部分）热量的强力手段。

蒸汽涡轮基础：

- 有蒸汽输入口（只从机器下方吸气——所以你不能用气体管道把蒸汽直接泵进涡轮）
- 有一个水的输出管道
- 工作时发电

蒸汽涡轮从底部区域吸入蒸汽（可以看到涡轮底部有五个输入口）。蒸汽驱动涡轮发电。过程中蒸汽冷却成滚烫的（95C）水，从液体输出管道排出。

关于蒸汽涡轮的几点：

- 蒸汽涡轮只吃蒸汽。所以液温调节器的冷却池里不能有氧气或其他气体——它们会堵住涡轮的蒸汽输入口，干扰工作。
- 水的总量不变——过程中不会有水"丢失"。吸入多少水（以蒸汽形式），就吐出多少。
- 蒸汽涡轮本身太热（超过 100C）时会停机。
- 蒸汽至少要 125C，蒸汽涡轮才会启动。
- 蒸汽涡轮需要接一根电线才能工作。

![ONI-guide-Steamturbine-1.png](../../guidesnotincluded_archive/assets/ONI-guide-Steamturbine-1-0a803703e1.avif)

蒸汽涡轮把输出的水送回冷却池循环使用。

基本思路很简单：当液温调节器把冷却液（这里是水）加热到沸腾化成蒸汽时，蒸汽涡轮启动。（准确地说，蒸汽达到 125C 或以上时。）

蒸汽涡轮把蒸汽冷却成略低于沸点（95C）的水，从液体输出管道送出。

我们再把这些水接回那"池"冷却液体，让它继续冷却液温调节器。

要知道的基本就是这些。来看看完整版的几张概览。

![ONI-guide-Coolingloop-9.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-9-2dcfbdd779.avif)

注意：输出管道不必单独占一格，需要更小的冷却池时也可以放在蒸汽涡轮下方。液温调节器同理——可以放在蒸汽涡轮下面。但这可能削弱蒸汽涡轮的冷却能力（我没做过实验）。

![ONI-guide-Coolingloop-10.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-10-60ecdc7a6f.avif)

![ONI-guide-Coolingloop-11.png](../../guidesnotincluded_archive/assets/ONI-guide-Coolingloop-11-c6a75abfd1.avif)

上图没画电力概览。液温调节器需要 1.2 千瓦。蒸汽涡轮是发电不是用电，但要工作也得接电线。

## 一些建造提示

我的标准做法是建造时把水槽两端留两格高（见图），让复制人能跑进水槽里施工。

然后只从一头灌水，避免中间出现气泡。万一还是出了气泡（或其他气体），在气泡上砌一块砖再拆掉那块砖就能除掉。

灌水可以用空桶器，也可以用排液口泵水——哪个方便用哪个。

![ONI-guide-SteelPermanent-5.png](../../guidesnotincluded_archive/assets/ONI-guide-SteelPermanent-5-0b3605579b.avif)

想避免冷却池出现气团，两端都留着、从一头灌水。

我管它叫"水槽"，但其实不必全是水。任何沸腾后会化成蒸汽的液体都行，比如污染水。你也可以用两层不同的液体来减少冷却池的灌液量，比如一层水加一层污染水。

注意：盐水风险略高。一格能装的盐水比水多。如果冷却池里灌了（太多）盐水，蒸汽可能多到让蒸汽涡轮的输出管道停摆（超过 1000 千克蒸汽时会发生）。

关键是确保水槽里没有空气或其他气团——它们会堵住输入口吸不进蒸汽，搅乱蒸汽涡轮。

液温调节器要能扛住高温。这意味着你得用[钢](getting-steel.md)（或更好的材料）造它。

至于冷却回路里的液体，选择很多。选什么看需求；如果你只想做一条保持在常温区间的标准冷却回路，几乎所有液体都行，水和污染水是常见选择。

选液体时可以点选一格液体查看属性：沸点与冰点。这能告诉你这种液体是否合用。

冷却回路和储液库都不要灌满，否则回路可能停止循环。冷却液不流动时，拆掉一段管道重建即可。（或者用管路工作技能把管道排空而不拆除。）

---

*本页存档自 [https://www.guidesnotincluded.com/thermo-aquatuner-steam-turbine-cooling-loop](https://www.guidesnotincluded.com/thermo-aquatuner-steam-turbine-cooling-loop)（[Wayback Machine 快照](https://web.archive.org/web/20250811145925id_/https://www.guidesnotincluded.com/thermo-aquatuner-steam-turbine-cooling-loop)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
