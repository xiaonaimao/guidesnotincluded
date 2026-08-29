---
title: "水门基础"
description: "水门能保证气体无法从一侧穿过到达另一侧，同时不妨碍复制人通行。"
source_url: https://www.guidesnotincluded.com/liquid-lock-basics
archived: 2025-06-17
archive_snapshot: https://web.archive.org/web/20250617051053id_/https://www.guidesnotincluded.com/liquid-lock-basics
---

水门（liquid lock）能保证气体无法从一侧穿过到达另一侧，同时不妨碍复制人通行。

在《缺氧》里，一个格子只能由一种气体或液体占据。比如不能"一点氧气加很多水"混着来：要么氧气，要么水，不能都要。水门正是利用了这个特性（或者说 bug——随你怎么看）。

利用同一个特性/bug，你可以搭出很多种不同的水门。我几乎总是搭同一种，或者它的变体。所以这里就讲这种。

![LiquidLock01.png](../../guidesnotincluded_archive/assets/LiquidLock01-9b725f5030.avif)

水门为两格高。这个高度足够复制人通过。

砌水门时，我通常先留三格高，等液体加好再说。

![LiquidLock02.png](../../guidesnotincluded_archive/assets/LiquidLock02-4af78255d7.avif)

![LiquidLock03.png](../../guidesnotincluded_archive/assets/LiquidLock03-148d8ddcfc.avif)

两格高时也可以直接灌液体，但液体会倒得不均匀，因为空桶器会有一半嵌在墙里。（这可以用来做一种快糙猛的水门，下面会讲。）

关于用多少液体：底部的液体格应当装满。用水的话就是 1000 千克。不满的话，液体会从你上面的格子淌下来，冲坏水门。

至于上层的液体，没有定规——哪怕一滴液体也足以把气体挤出去。但加"足够"的液体能让水门更结实、更不容易坏。多少算"足够"？我也不知道。我的个人经验是：超过 100 千克。

液体就位后，砌上上面的那格砖（如果还没砌），液体就会被"拉"上去，把那格里的气体挤出去。

![LiquidLock04.png](../../guidesnotincluded_archive/assets/LiquidLock04-38027d038b.avif)

![ONI-guide-liquidlock4.png](../../guidesnotincluded_archive/assets/ONI-guide-liquidlock4-07fb787671.avif)

快糙猛（而且有点冒险）

讲完安全的水门砌法，再补充一句：你也可以直接往砖上倒一两滴液体了事。我最常见的用途是搭临时水门——坏了也无所谓的那种。比如给房间抽真空的时候。

做法：用上面的设计，但先砌完整座水门再放水（关键是最后盖住空桶器输出口的那格砖）。水会倒在上、下两格上。然后倒到两格上都有一点水即可。

## 选对液体

用错液体会把水门搞坏。（没错，我是在用亲身经历说话。）有几点要记住。

永远不要用污染水。污染水会析出污染氧，多半会干扰你建水门想达成的目的。

如果水门处在常温区间，用水就行。如果水门周围的温度低于冰点或高于水的沸点，就得换别的液体。

液体的冰点和沸点（游戏里叫"蒸发点"）可以点击该液体格查看。

一种需要扛住零下温度的场景是通往冰雪群系（或太空前的寒冷区域）的水门。那种情况可以用乙醇做水门，乙醇的冰点是 -114C。

如果你需要低冰点液体但又没有乙醇，也可以用原油或石油，两者的冰点都是 -40C。缺点是它们往往本身很热，热量会漏进寒冷群系。

需要扛住高温的场景则是滚烫的喷口，或者（可能的）石油群系。那种情况可以用原油或石油，它们的沸点是 +400C。

## 阻断温度传递

你可能想阻断（或尽量减少）两个区域之间的温度传递。做法是建两道水门，再在两道门之间抽真空。

![LiquidLockVacuum.png](../../guidesnotincluded_archive/assets/LiquidLockVacuum-5700181451.avif)

造真空很简单：建一个气泵把气体抽走即可。（如果抽出的气体在目的地气压很高，有塑料的话可以用高压排气口；否则就铺一条长气体管道，把好几个排气口分散布置在大面积区域。或者直接排进太空，或排进储气库。）

![LiquidLockEthanol.png](../../guidesnotincluded_archive/assets/LiquidLockEthanol-81752aeaa2.avif)

上图里，靠冰雪群系那道水门我用的是乙醇；左边那道处在"正常"温度，用的是水。

两道水门之间是阻断温度传递的真空。温度仍然可以通过砖块传递，要进一步减少可以用隔热砖。

这种布局在你想保住冰雪群系时很有用——比如既保住群系里天然生长的冰原小麦，又能方便地进出采收。

## 水门与气压服

去石油群系时，你可能想阻止热量外泄到其他群系，也可能想阻止气体混合——比如让石油群系里保持满是二氧化碳好养浮油生物。水门对这两件事都有帮助。

而你（但愿）会有气压服，那样就有几件额外的事要考虑。

![LiquidLockOilBiome.png](../../guidesnotincluded_archive/assets/LiquidLockOilBiome-0e355a549e.avif)

如果复制人穿着气压服时出了"事故"（或因辐射照射呕吐），污水会留在气压服里直到他脱下。在一排气压服存放柜中，这会发生在复制人检查站所在的那一格。

污水混进你的水门液体会导致 bug。要保护水门免遭此劫，要么确保复制人从不会在石油群系里过夜（开个玩笑——你保证不了。复制人尽干傻事，谁也拦不住），要么加几块网格砖，让任何不请自来的液体都落到水门下面去。

对可能从你基地上方向下流淌的其他液体也是同理。在石油群系水门的下方留一片能让液体汇集的区域——而不是让它们灌进水门——是个不坏的主意。

去石油群系的路往往很长，你可能不想让你最新、最慢的复制人穿着气压服跑一趟却几乎干不成什么活。可以在入口建一扇门，用权限设置只允许你点名的人进石油群系干活。

（一般而言，限制进入但始终允许所有人离开更安全。这样万一有复制人稀里糊涂进了区域，他至少还能出来。）

最后放一张视觉提醒——这张图百分之百是我在网上找的，绝不是发生在我自己身上的事——告诉你为什么要定期查看还在修建中的水门。（哎呀。）

![liquidlockOops.png](../../guidesnotincluded_archive/assets/liquidlockOops-cc019f07ae.avif)

---

*本页存档自 [https://www.guidesnotincluded.com/liquid-lock-basics](https://www.guidesnotincluded.com/liquid-lock-basics)（[Wayback Machine 快照](https://web.archive.org/web/20250617051053id_/https://www.guidesnotincluded.com/liquid-lock-basics)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
