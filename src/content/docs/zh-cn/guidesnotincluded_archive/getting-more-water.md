---
title: "获取（更多）水"
description: "你早晚会缺水。也许你现在读这篇就是因为基地已经快断水了。所以我最好抓紧进入正题……"
source_url: https://www.guidesnotincluded.com/getting-more-water
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806092524id_/https://www.guidesnotincluded.com/getting-more-water
---

你早晚会缺水。也许你现在读这篇就是因为基地已经快断水了。所以我最好抓紧进入正题。

我们先讲地图上现成的各种液体，以及怎么把它们变成水。然后讲喷送各种液体的喷孔与喷口，以及怎么加热或冷却它们到合适的温度。

（关于我的迷糊提前说一句：《缺氧》里既有排液口也有喷口。我总记不住这点，说起"喷口"时经常指的其实是排液口。别被我搞晕，纯粹是我马虎。）

## 把"不是水"变成水

你的起始地图上大概率有几摊不同的液体。除了水之外，找找污染水、盐水和浓盐水。用对机器，它们都能变成水。

- 污染水过一遍净水器（"精炼"分类下）就变成水

- 盐水和浓盐水过一遍脱盐器（"精炼"分类下）就变成水

"不对"的液体不会损坏这些机器。水和污染水都会直接穿过脱盐器而不损伤它；盐水、浓盐水和水也会直接穿过净水器而不损伤它。

所以如果几种液体混在一摊里，你可以把净水器和脱盐器串起来，把所有液体泵过同一套管道。进去的是大杂烩，出来的只有水。

![ONI-guide-desalinatorsieve.png](../../guidesnotincluded_archive/assets/ONI-guide-desalinatorsieve-55c9835106.avif)

一台脱盐器和一台净水器。从左边泵入水、污染水、盐水和浓盐水，右边出来的只有水，机器毫发无损。

把非水变成水时要注意两件事：病菌和温度。

关于病菌。一般来说，地图上"躺着"的液体都是无菌的。而且大多数排液口排出的液体无菌——例外是污水泉（常温那个，不是低温那个）。

如果某摊污染水来自复制人的"事故"或呕吐，那里面就有菌。这些菌还会扩散到附近的液体。（带菌水的处理是另一码事，在[《回收厕所水》](recycling-toilet-water.md)一节讲。）

关于温度。污染水和盐水的冰点比水低。如果把接近冰点（0C 上下）的盐水或污染水泵过脱盐器或净水器，精炼过程中可能冻裂管道。

另一个极端是非常烫的液体。任何接近沸点的液体在你的基地里乱跑都会把基地加热，要小心。

我们把加热和冷却分开讲，顺便加几个小标题显得正式一点。

## 冷喷口与加热液体

![ONI-guide-coolsaltslush2.png](../../guidesnotincluded_archive/assets/ONI-guide-coolsaltslush2-1c203cf4ec.avif)

一台低温盐泥泉。它产出 -10C 的无菌盐水

![ONI-guide-coolslush2.png](../../guidesnotincluded_archive/assets/ONI-guide-coolslush2-e2bee1d333.avif)

一台低温泥浆泉。它产出 -10C 的污染（但无菌）水

![Building_Liquid_Tepidizer.webp](../../guidesnotincluded_archive/assets/Building_Liquid_Tepidizer-3d659e2dac.avif)

液体加热器（"实用"分类下）

总的来说，加热比冷却容易。所以如果你的问题是液体太冷，那算是好办的那种问题。

常见场景是你有一台低温泥浆泉或低温盐泥泉。它们的产出是 -10C。（两者的产出液体都无菌。）

把它们变成水之前，至少要先把液体加热到变成水之后不会冻裂管道的程度。

水的冰点是 -0.6C。任何低于这个温度的液体都别送进精炼机器——一旦变成水就可能结成冰、撑破管道。

（据我了解，游戏其实会给所有相变温度加几度缓冲，防止水冰之间来回闪变。也就是说到 -2.6C 之前你都是安全的。）

好消息是：液体太冷意味着你有免费冷却可用。比如让低温喷口的冷水在你的基地里绕一圈，一边给基地降温一边把水焐热。坏消息是这个过程不好控制——那片区域会变得多冷、水会变得多热，都说不准。

随着时间推移，你可能泵过足够多的冰水，基地本身也变得冰冷。但作为前期的基地降温方案，这很简单，以后可以换成更可控的冷却回路。（[冷却回路](thermo-aquatuner-steam-turbine-cooling-loop.md)在指南后面讲。）

低温泥浆泉或低温盐泥泉的液体还可以喂给金属精炼器，因为金属精炼器每次使用都需要冷却液。送入低温喷口的液体，从金属精炼器出来时温度就差不多合适了，可以直接变成水并入你的供水。（金属精炼器把冷却液加热多少，取决于你精炼的是什么金属。）

更可控的加热办法是液体加热器。注意它相当耗电：960 W。

你可以围一个小液体池，接上一台液体加热器和一个温度传感器（"自动化"分类下）。然后把温度传感器设成你希望的液体最低输出温度。（用导热管道改善温度传递。）

在脱盐器或净水器之前放这么一套，管道就基本不会冻裂。（示例里的池子为了看清楚做得比较大，实际可以更小。）

![ONI-guide-liquidtepidizer1.png](../../guidesnotincluded_archive/assets/ONI-guide-liquidtepidizer1-49ffd2adbb.avif)

![ONI-guide-liquidtepidizer2.png](../../guidesnotincluded_archive/assets/ONI-guide-liquidtepidizer2-f0f7193a41.avif)

![ONI-guide-liquidtepidizer3.png](../../guidesnotincluded_archive/assets/ONI-guide-liquidtepidizer3-1d0469283c.avif)

保证最低温度。温度传感器确保池中液体不会低于你设定的下限。

（注意：为避免管道受损，建议在冷水进来的那一侧用隔热管道。）

## 热喷口与冷却液体

![Polluted_Water_Vent.webp](../../guidesnotincluded_archive/assets/Polluted_Water_Vent-aafad0f360.avif)

污水泉。产出：+30C 带菌污染水

![Water_Geyser.webp](../../guidesnotincluded_archive/assets/Water_Geyser-149a623361.avif)

清水泉。产出：+95C 水

![Salt_Water_Geyser.webp](../../guidesnotincluded_archive/assets/Salt_Water_Geyser-1a4a7ca8e8.avif)

盐水泉。产出：+95C 盐水

除了前面讲的冷喷口，还有好几种喷孔和喷口会产出更热的水，或能变成水的液体。

我的个人最爱是污水泉。它在 +30C 产出带菌的污染水。产出可以直接拿去种芦苇，也可以变成温度相当合理的水——你的基础作物米虱木和毛刺花在 +30C 以上就停止生长了。（把带菌污染水变成无菌水的方法在本指南[前面](recycling-toilet-water.md)讲过。）

其他能给你水的喷口，以及它们的产出温度：

- 清水泉产出 +95C 的水
- 盐水泉产出 +95C 的盐水
- 低温蒸汽喷孔名字听着诱人，但那个"低温"是相对于蒸汽说的，其实一点也不凉：+110C
- 蒸汽喷孔产出的蒸汽高达 +500C

这些里面最简单的用法，也许是清水泉喂[自供电制氧模块](to-know-the-spom-is-to-love-the-spom.md)（产氧装置，本指南后面讲）。

如果你把模块建在清水泉（或盐水泉）旁边，热水满地图跑的风险就小多了。（记得用隔热液体管道。）

如果你在清水泉或盐水泉周围和下方挖出一片区域，可以内衬隔热砖，然后抽光所有气体制造真空，把这片液体存储区封起来。这样热液体对周围环境的温度传递就降到最低。

（造真空要么砌墙封区、在里面建一台气泵抽完气后留在屋里，要么建一个[水门](liquid-lock-basics.md)方便完工后进去拆泵。）

如果把热水泵进你的主储水区，可能就需要冷却了。

我倾向于避免往储水区灌滚烫的水，但这话说来轻松——我通常基地小、复制人少，用水不多。不管怎样，想让储水区保持合适温度，可以在里面跑一条[冷却回路](thermo-aquatuner-steam-turbine-cooling-loop.md)。

另一个冷却选项（如果你的地图上有冰或雪）：把冰雪存进储水区。（注意：满满一存储箱的冰化起来很慢。）污染冰也可以用来给水降温，只要记得它化了会变成污染水。

如果你有某种低温泥浆泉，也可以用它冷却热液体，顺便把泥浆焐热。

如果你的作物对水温有要求，与其把整个供水都调到那个温度（比如毛刺花要 +30C 以下），不如等水快到作物跟前时再按需降温。这大概率省电得多。

## 蒸汽喷孔

![Steam_Vent.webp](../../guidesnotincluded_archive/assets/Steam_Vent-572b1d36b4.avif)

蒸汽喷孔。产出：+500C 蒸汽

![Cool_Steam_Vent.webp](../../guidesnotincluded_archive/assets/Cool_Steam_Vent-9ef8792c79.avif)

低温蒸汽喷孔。产出：+110C 蒸汽

蒸汽喷孔有两种：低温蒸汽喷孔和蒸汽喷孔。两者都能给你（非常）热的水。蒸汽喷孔甚至还能顺带发电。

蒸汽喷孔：如果你要用蒸汽喷孔取水，那么（在它休眠时）围着它建一个真空腔体，用隔热砖砌墙。然后在上面放几台（两台或以上；记忆中两台就够）蒸汽涡轮。注意：蒸汽涡轮需要某种冷却，它们很快就会变热。

蒸汽喷孔产出 +500C 的蒸汽。蒸汽涡轮会发电（只要蒸汽高于 +125C），并排出 +95C 的水。（你需要从蒸汽涡轮铺液体管道，把水引到想去的地方。）

低温蒸汽喷孔：它产出的蒸汽太"低温"，推不动蒸汽涡轮。你需要直接注入冷却把它变成水。

做法有几种。看本文配图时记住：我不是极限堆料玩家；能用我就满意。你在别处很可能找到更高效的方案。

两种做法都要先围着喷孔抽真空。两者的蒸汽冷却都靠冷却回路。冷却回路在[指南后面](thermo-aquatuner-steam-turbine-cooling-loop.md)讲。

一种方案（我自己不用，是从 Francis John 的油管视频看来的点子）：让一条冷却回路冷却低温蒸汽喷孔腔室外的一段区域，然后用自动化控制两区之间一扇门的开合来调节温度传递。（门开着时那片区域是真空，不会发生温度传递。）

![ONI-guide_CoolSteamVent2.png](../../guidesnotincluded_archive/assets/ONI-guide_CoolSteamVent2-253503d2e3.avif)

门和两侧的砖块（墙）要用高热导率材料。比如门用钢，墙用钻石（没有钻石就用金属砖）。（温度传递基础在指南[另一章](heat-transfer-basics.md)讲过。）

另一种方案：让冷却回路贴着喷口经过，蒸汽一出就冷却。

注意：冷却回路里的液体会变得非常烫，可能超过水的沸点。建议用扛得住 +100C 以上的液体，比如原油或石油。

![ONI-guide_CoolSteamVent1.png](../../guidesnotincluded_archive/assets/ONI-guide_CoolSteamVent1-5255514394.avif)

上面两种方案里，导热液体管道都会经过一台液温调节器进行冷却。（原理见[冷却回路](thermo-aquatuner-steam-turbine-cooling-loop.md)一节。）

无论哪种方案，都可以再放一台液泵（用金或钢制造——它要能扛接近沸点的温度），接一个液压传感器，在储存的水量足够时启动抽水。另外，如果你有富余的钻石，在冷却回路旁边放一块钻石变温板也会帮助温度传递。

要把低温蒸汽喷孔的水降到 +30 左右的舒适温度，需要大量冷却和大量电力。不如考虑按需降温。

比如，如果你是在喂模块，把水温降到 +70 以下用处不大。因为不管进水多少度，模块产出的气体最低就是 +70C。

用我从前一局游戏里的例子来收尾本节：喂 自供电制氧模块。

![ONI_Guide_CoolSteamVentSetup1.png](../../guidesnotincluded_archive/assets/ONI_Guide_CoolSteamVentSetup1-e63a9175a3.avif)

![ONI_Guide_CoolSteamVentSetup2.png](../../guidesnotincluded_archive/assets/ONI_Guide_CoolSteamVentSetup2-c5400e34fe.avif)

接驳低温蒸汽喷孔。液温调节器设为 70 度。低温蒸汽喷孔下方有足够空间储水，整个区域处于真空。水被直接泵往模块，用隔热液体管道限制温度传递。

---

*本页存档自 [https://www.guidesnotincluded.com/getting-more-water](https://www.guidesnotincluded.com/getting-more-water)（[Wayback Machine 快照](https://web.archive.org/web/20250806092524id_/https://www.guidesnotincluded.com/getting-more-water)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
