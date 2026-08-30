---
title: "温度传递基础"
description: "上学时物理课我没怎么好好听讲，理解不了这些东西真正细枝末节的部分。这里讲一些基础，wiki 和论坛上有更深入的……"
source_url: https://www.guidesnotincluded.com/heat-transfer-basics
archived: 2025-08-11
archive_snapshot: https://web.archive.org/web/20250811145919id_/https://www.guidesnotincluded.com/heat-transfer-basics
---

## 免责声明

上学时物理课我没怎么好好听讲，理解不了这些东西真正细枝末节的部分。这里只讲一些基础，wiki 和论坛上有更深入的讲解。

## 引言

基本思路很简单：物体相互接触时，温度会互相影响。冷的变热，热的变冷。

影响这种温度交换的还有两件事：

- 有一些特殊种类的砖块和管道，专门用来增大或减小温度传递。
- 游戏中所有材料（砂岩、铜等）都有影响温度传递的属性。

我们先来看为最大化或最小化温度传递而设计的各种砖块。

## 隔热砖

![Building_Insulated_Liquid_Pipe.webp](../../guidesnotincluded_archive/assets/Building_Insulated_Liquid_Pipe-bd27c4ad41.avif)

![Building_Insulated_Gas_Pipe.webp](../../guidesnotincluded_archive/assets/Building_Insulated_Gas_Pipe-f0baf06134.avif)

![Building_Insulated_Tile.webp](../../guidesnotincluded_archive/assets/Building_Insulated_Tile-79495c0972.avif)

想最小化砖块之间的温度传递，可以用各种东西的隔热版本。

它们是：

- 隔热液体管道
- 隔热气体管道
- 隔热砖

如果你要让滚烫的液体或气体流过一块不想被加热的区域，用隔热管道是好主意。

如果基地旁边有个炎热的群系，在两者之间砌一堵隔热砖墙，可以最大程度减少温度传递。

注意：关于深渊晶石

群系之间由深渊晶石分隔——就是那些紫色（天然生成）的砖块。深渊晶石是极好的隔热材料。如果你的基地和炎热（或寒冷）群系之间隔着深渊晶石，那就完全不用操心温度传递。

但要注意：游戏在放置你的出生区时，多半会覆盖掉一部分深渊晶石砖。这会删掉一段深渊晶石，让群系之间的温度传递重新接通。

![ONI-guide-TempTransfer3.png](../../guidesnotincluded_archive/assets/ONI-guide-TempTransfer3-d2867ec9f5.avif)

![ONI-guide-TempTransfer4.png](../../guidesnotincluded_archive/assets/ONI-guide-TempTransfer4-4d30c7e5e3.avif)

上面是岩浆，下面是冰雪群系。（右侧为温度概览。）两者由隔热砖和天然深渊晶石砖共同隔开。

（这有点超前，不过顺便聊聊岩浆。如你所料，它相当热：超过 +1400C。岩浆能熔化大多数材料，但熔不了黑曜石。所以任何会接触岩浆的东西，都用黑曜石来做。）（另外，处理岩浆之前，永远先抽真空。）

## 导热管道与金属砖

![Building_Radiant_Liquid_Pipe.webp](../../guidesnotincluded_archive/assets/Building_Radiant_Liquid_Pipe-dcf3ff9306.avif)

![Building_Radiant_Gas_Pipe.webp](../../guidesnotincluded_archive/assets/Building_Radiant_Gas_Pipe-d7fbba8f51.avif)

![Building_Metal_Tile.webp](../../guidesnotincluded_archive/assets/Building_Metal_Tile-c2964ccbbc.avif)

有时你想要的是最大化温度传递。这时就要用导热管道或金属砖。

它们是：

- 导热液体管道
- 导热气体管道
- 金属砖

举几个例子：给模块产出的氧气降温；让被一堵墙隔开的两个区域最大化传递温度；以及穿过基地的冷却回路（你可能想让某片区域——比如高发热机器周围——的冷却效果最大化，那里就该用导热管道）。

## 变温板

变温板（Tempshift plate）能改善它自身与周围格子（包括斜对角格子）之间的温度传递。

![Building_Tempshift_Plate.webp](../../guidesnotincluded_archive/assets/Building_Tempshift_Plate-1f8d1a4c8c.avif)

## 影响温度传递的材料属性

![ONI-guide-AETNOverflow.png](../../guidesnotincluded_archive/assets/ONI-guide-AETNOverflow-7a47ccf7c2.avif)

一个溢流机构（气体管道桥），把多余的氢气送进反熵消热器（AETN）房间，让它的冷气更好地散发。

![ONI-guide-TempTransfer2.png](../../guidesnotincluded_archive/assets/ONI-guide-TempTransfer2-9b0077bdd3.avif)

![ONI-guide-TempTransfer1.png](../../guidesnotincluded_archive/assets/ONI-guide-TempTransfer1-33dcb3974f.avif)

金属砖在冷却中扮演温度传递的助手。一条[冷却回路](thermo-aquatuner-steam-turbine-cooling-loop.md)冷却导热管道里的水，导热管道冷却金属砖，金属砖再冷却沿着运输轨道送来的金属火山产物。

处理热量的第一步，是想清楚哪里该用隔热、导热还是普通砖块。等这些用熟了，下一步就是考虑这些砖块用什么材料来造。

《缺氧》中的材料有两种属性会影响它们的温度与周围环境的交互：热导率和比热容。

要看某样东西的热导率和比热容，点击它，然后点"属性"标签页。

热导率衡量的是它与周围环境交换温度有多快、多有效。

比热容衡量的是它能"储存"多少热量。

也就是说，热导率决定它升温降温有多快，比热容决定它能储存多少热或冷。

两者之中，热导率通常更是首要考量。（做温度传递设计时，我把高热导率当作关键因素，把好的比热容当作锦上添花。）

就像导热管道的温度传递优于普通管道一样，用高热导率材料造的管道，温度传递也会优于低热导率材料造的管道。

所以经验法则是：

- 想增大温度传递，用热导率数值更高的材料。
- （反之亦然：想要更少的温度传递，就用更低的热导率。）

各种材料的热导率列表可以在 [wiki](https://oxygennotincluded.fandom.com/wiki/Thermal_Conductivity) 上查到。一些前期通用的指导：

在你常遇到的矿物里：

- 花岗岩适合增大温度传递
- 火成岩适合减小温度传递

举个例子：

如果你想在冷却回路中增强温度传递，又不想把金属都花在整条回路的导热管道上，可以选择热导率较高的普通材料。花岗岩是这方面的热门选择。

如果你想让隔热管道或隔热砖的隔热效果尽可能好，常见起始材料里的热门选择是火成岩。

对于会变得非常烫的东西——前期（左右）包括石油群系里的手压泵，以及玻璃熔炉接出来的管道——用陶瓷。（陶瓷用窑炉烧制，在"精炼"分类下。）

早期可能接触到的各种金属里，铝的热导率很可能是最好的。（不过铜或铁通常也够用。）

真空（就是没有气体）是最好的隔热材料。

气体助力温度传递的能力各不相同。比如氢气的热导率远好于氧气。想增强某片区域的温度传递，可以往里灌氢气。一个典型例子是给反熵消热器房间灌满氢气。

金属砖是增强温度传递的极佳手段。比如你想冷却（或加热）运输轨道上的货物，可以让轨道穿过一段金属砖区域，再用导热管道让冷的（或热的）液体流经同样的砖块。金属砖会大力促成两者之间的温度传递。

---

*本页存档自 [https://www.guidesnotincluded.com/heat-transfer-basics](https://www.guidesnotincluded.com/heat-transfer-basics)（[Wayback Machine 快照](https://web.archive.org/web/20250811145919id_/https://www.guidesnotincluded.com/heat-transfer-basics)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
