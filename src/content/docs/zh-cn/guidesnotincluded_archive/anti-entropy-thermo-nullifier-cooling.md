---
title: "反熵消热器冷却"
description: "反熵消热器（常称 AETN）能产生海量冷量，而且上手也没那么难。那就来试试吧……"
source_url: https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling
archived: 2025-08-22
archive_snapshot: https://web.archive.org/web/20250822031650id_/https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling
image: assets/ONI-Guide-AETN1b-d9787348e2.png
---

## 引言

反熵消热器（常称 AETN）能产生海量冷量，而且上手也没那么难。那就来试试吧。

![Anti_Entropy_Thermo-Nullifier.webp](../../guidesnotincluded_archive/assets/Anti_Entropy_Thermo-Nullifier-73b2ec46e2.avif)

反熵消热器

反熵消热器（AETN）基础：

- 它吃氢气（10 克/秒）
- 它有一个氢气输入管道
- 它产生大量冷量：-80 千 DTU/s（这单位什么意思我不知道。反正很多）
- 它最冷能到 -173 C，之后就会说"太冷了"
- 它只在冰冻群系生成

《缺氧》的标准挑战是东西太热，AETN 则令人耳目一新：用它时的挑战是东西太容易变冷。

它最冷能到 -173 C，比我希望的基地温度还要低大约 200 C。所以驾驭 AETN 的核心，是搭一套只放出适量冷气的系统。

控制 AETN 的冷量通常需要一点自动化。还没碰过自动化的话别慌——不难。你只需要把一扇门连到一个传感器上。（想深入还有单独一篇[《自动化入门》](getting-started-with-automation.md)。）

和《缺氧》里的其他事情一样，做法不止一种。我常用两种设计：一种用于冷却 SPOM 的氧气产出或冷却回路里的液体，另一种用于冷却冰原小麦农场。（当然，同一套设计想冷什么都行。）

两种方案用同一个控制机制。先讲机制，再上建筑的图片与概览。

## 控制机制

![Building_Mechanized_Airlock.webp](../../guidesnotincluded_archive/assets/Building_Mechanized_Airlock-2dc077bff8.avif)

机械气闸

基本思路：给 AETN 一个"什么时候可以放冷气"的开关。做法是在 AETN 与周围之间隔出一片区域，让它在"允许温度传递"与"不允许"之间切换。

具体说，我们要用一种叫做机械气闸的门。它在科技树气体分支的"净化"中解锁。

把门围起来、两侧都有格子之后，我们就能在允许与不允许温度传递之间切换：门关上时可以传递温度；门打开时那片区域是真空，温度传递就断了。

再加上一点温度相关的自动化：一个温度传感器连到门上。温度传感器在科技树气体分支的"暖通空调"（HVAC）中解锁。

门供电与否都能工作。不供电时它会一直顶着个"无电"图标。所以供不供电，主要看你有多嫌弃那个图标。

![ONI-Guide-AETNMechanism.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNMechanism-4318639d3a.avif)

冷，还是不冷。温度传感器连着机械气闸，根据周围温度开关门。

## 关于建材的一些想法（和数据）

![ONI-Guide-AETNVacuum.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNVacuum-bfdc0af166.avif)

制造真空。

这个设计让门两侧传递温度的效率，取决于你用什么材料来建。

目标是开工前先搞到钢。（有单独一篇[《获取钢材》](getting-steel.md)。）原因：开局那些金属造的门，热导率都非常差。

材料差别巨大。机械气闸按材料的热导率：

机械气闸热导率：

- 钢：54
- 黑钨矿：15
- 铜：4.5
- 铁：4
- 钴：4
- 金：2

（如果你能用导热质造门，热导率是 220。但能用上导热质的人，该去写新手指南而不是读指南了，你说是不是，傻乎乎的玩家！）

门两侧的砖块同理：用什么材料，热导率就取多少。一些砖块数据：

金属砖与窗户砖热导率：

- 铝：220
- 钴：100
- 钻石：80
- 铜：60
- 金：60
- 铁 55
- 钢 54
- （玻璃：1.1）

注意：钢适合造门，但对门周围的砖块来说就没那么好。也注意钻石（好）与玻璃（垃圾）的差距。

另一个问题是 AETN 房里放什么气体。这也有讲究。

常见气体的热导率：

- 氢气：0.168
- 氧气：0.024
- 氯气：0.008

这些数字不用背，记住 AETN 房的最佳选择是氢气、不嫌麻烦就用它即可。

上手之后，给 AETN 房灌氢气很简单。先建 AETN 房、在一侧留个入口，再建一个临时[水门](liquid-lock-basics.md)通向入口，然后抽掉 AETN 房里的气体。在 AETN 房里建一个排气口，接上氢气管道。房间真空后，砌上缺的那段墙。

增强温度传递还可以加几块变温板。它们在科技树固体原料分支的"精致翻修"中解锁。

![Building_Tempshift_Plate.webp](../../guidesnotincluded_archive/assets/Building_Tempshift_Plate-5a1e73b3ae.png)

变温板

变温板基础：

- 变温板促进它所在格子与周围所有格子（包括斜对角）之间的温度传递。

这里选材同样重要。

变温板热导率：

铝：205

钴：100

钻石：80

铜、金：60

铁：55

注意上表金属指精炼金属而非矿石。未精炼金属的热导率很差。比如铜矿造的变温板热导率只有 4.5，金汞齐造的更是只有 2。

小结

本节数字和数据多得离谱。目的不是记住它们，而是大致记住哪些材料比哪些好。比如有铝就基本选铝；没有就钻石。（或者钴，不过有钴的地图通常也有铝。）以此类推。

另外：不必事事极限堆料。只要别用彻底的垃圾材料建东西，基本就没问题 :-)

下面上几种 AETN 冷却方案的概览。

## AETN 冷却，版本一

这是我从 [Francis John 的油管视频](https://www.youtube.com/watch?v=36qR5nAH5qw)学来的设计。它用的就是我们前面讲的机械气闸温度传递。AETN 在一侧，另一侧是一房间（一盒子？）污染水。

然后让你想冷却的东西——通常是导热气体管道或液体管道——穿过那汪冰凉的污染水。（下面的概览图里没画出来，但请记得还是要建。）

也可以用别的液体。污染水是不错的选择，冰点比水低：污染水 -20.6，水 -0.6。（虽然液体冻住了我也说不清有多大影响。）

![ONI-Guide-AETNVersion1.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNVersion1-b1b57f562b.avif)

液体或气体管道冷却。实际冷却发生在右侧污染水所在的区域。图中没画的是：你应该让导热液体或气体管道穿过那片区域来被冷却。

![ONI-Guide-AETNVersion1Automation.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNVersion1Automation-6ae6fa8602.avif)

自动化概览

![ONI-Guide-AETNVersion1GasPipes.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNVersion1GasPipes-c40fcc1ad5.avif)

通风概览。气体管道桥不重要，把氢气五五分到两条管道里也行。（AETN 吃氢不多。）

如果 AETN 的冷量足够（也就是说你没想把东西冷得太狠），还可以一鱼两吃：气体和液体管道都穿过去冷却。

在复制人不多的星球（或小行星）上，你可以用一台 AETN 同时冷却 SPOM 和它的产出。

![ONI-Guide-AETNDoubleDipping1.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNDoubleDipping1-1dd3fe4de0.avif)

![ONI-Guide-AETNDoubleDipping2.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNDoubleDipping2-6857c1ab97.avif)

![ONI-Guide-AETNDoubleDipping3.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNDoubleDipping3-14f5b7a260.avif)

AETN 一鱼两吃。SPOM 由液体冷却回路冷却，SPOM 的氧气由气体管道冷却。两者都穿过 AETN 的冷却区。

## AETN 冷却，版本二

这一种（或其变体）是我用来冷却冰原小麦农场的。

这种设计里的温度比前一种波动更大，AETN 之外的区域可能变得比你设定的更冷。设计冷却回路和选择液体时要记着这一点。（图后再聊。）

![ONI-Guide-AETN1_overview.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETN1_overview-07dbecad38.avif)

冰原小麦农场冷却回路。钻石墙旁的温度传感器负责开门关门的信号。AETN 房内外都有钻石变温板帮助温度传递。

![ONI-Guide-AETN1c_gas.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETN1c_gas-38e2c402f3.avif)

通风概览。最重要的是把氢气泵给 AETN。氢气的冷却数据（比热容和热导率）比其他气体都好，所以考虑把 AETN 房灌满氢气。

![ONI-Guide-AETN1b.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETN1b-d9787348e2.png)

自动化概览。温度传感器连着机械气闸。关门时冷气可以扩散；开门时区域真空、冷气不扩散。（门想供电就供电，不供也行——只是开关得慢一点。）

![ONI-Guide-AETN1d_liquid.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETN1d_liquid-91b6e8f409.png)

水管概览。一条冷却回路（装着石油）经过这里，把 AETN 的冷气散到冰原小麦农场。钻石变温板帮助温度传递。

给冷却回路选液体时，记得查它的冰点。（也可以先用污染水这类简单的，之后有更好的再升级。）

液体冰点（摄氏）：

- 超级冷却剂：-271.2
- 乙醇：-114.1
- 石油：-57.1
- 原油：-40.1
- 污染水：-20.6
- 水：-0.6

冰原小麦在 +5 C 或以下生长，所以这是你（至少）要瞄准的温度。而把农场保持在冰点温度——更准确地说 -18 C 以下——还有一个好处：延长收获的冰原小麦的保鲜期。或者说，减缓新鲜度的下降。

食物新鲜度下降受温度和气氛影响。冰原小麦处于"深度冷冻"（-18C 以下）时，温度不再引起新鲜度下降。

但气氛仍会影响冰原小麦的新鲜度。存在氧气里每周期下降 2%。要降到零，需要把它存进"无菌"气氛：二氧化碳、氯气、氢气和真空。

我把冰原小麦做成浆果泥——懒人玩家的梦想食物：不会变质。所以把新鲜度降到 0% 这事我不太操心（甚至完全不操心）。

如果你想有无损存粮的能力，需要一个处于无菌气体中的冷冻区（可以很小）。这类设计网上能搜到攻略。

![ONI-Guide-AETNSleetWheat.png](../../guidesnotincluded_archive/assets/ONI-Guide-AETNSleetWheat-45fc1bef05.png)

不是绝对零度但也相当凉。一块被 AETN 冷却的金属砖，兼任冰箱和仓库，存着等待做成浆果泥的富余冰原小麦。

## 更多冷却（！）

你可以把好几条冷却回路接到同一台 AETN 上。主要限制是你需要多少冷量——要把东西冷到什么程度。

下面几张图是同一台 AETN 冷却三条冷却回路的建筑。（我还留了一扇门给第四条回路备用。左下角。）

![ONIGuide_AETNmulticooling.png](../../guidesnotincluded_archive/assets/ONIGuide_AETNmulticooling-9e7cf00242.png)

![](../../guidesnotincluded_archive/assets/dace2c_10eddcb22efd452a85b1c8baf5c3e185-mv2-41d0fd4e81.png)

![ONIGuide_AETNmulticooling_pipes.png](../../guidesnotincluded_archive/assets/ONIGuide_AETNmulticooling_pipes-fc856f9ce8.png)

![](../../guidesnotincluded_archive/assets/dace2c_f8eda45726f44a498c1276e709db5153-mv2-5aae04c09f.png)

---

*本页存档自 [https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling](https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling)（[Wayback Machine 快照](https://web.archive.org/web/20250822031650id_/https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
