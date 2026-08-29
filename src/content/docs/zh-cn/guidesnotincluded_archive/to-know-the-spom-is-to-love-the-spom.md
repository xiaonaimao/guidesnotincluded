---
title: "氧气：SPOM"
description: "初代 SPOM（MK II）"
source_url: https://www.guidesnotincluded.com/to-know-the-spom-is-to-love-the-spom
archived: 2025-08-21
archive_snapshot: https://web.archive.org/web/20250821073544id_/https://www.guidesnotincluded.com/to-know-the-spom-is-to-love-the-spom
---

目录：

- 引言与背景
- SPOM 基础
- 应对热量
- 选择 SPOM：你需要多少氧气？
- SPOM 建在哪？

- 近看（小型）SPOM
- 重要：给多余氢气留溢流
- 点火你的 SPOM：气体管理与初始电力
- 野外 SPOM：示例 SPOM、水喷口与反熵消热器

## 引言与背景

![SPOMmkII.jpg](../../guidesnotincluded_archive/assets/SPOMmkII-b44522a35c.avif)

初代 SPOM（MK II）

每个《缺氧》玩家的生涯里都有几个关键节点——那些永远改变你玩法瞬间。建造你的第一座 SPOM，多半就是其中之一。

SPOM 把水变成氧气——并且在此过程中产生足够的电力给自己供电。建成之后，你只需供水，它就会永远产氧、永远自给自足地发电。

SPOM 是 "Self-Powering Oxygen Module"（自供氧模块）的缩写。这个点子最早由 QuQuasar 于 2018 年在 Klei 论坛的两篇帖子中提出（[SPOM 第一版](https://forums.kleientertainment.com/forums/topic/87501-self-powering-oxygen-module-production-and-cooling/)、[SPOM 第二版](https://forums.kleientertainment.com/forums/topic/87548-self-powering-oxygen-module-mkii-production-and-cooling/)）。游戏机制后来变了，那些原始设计已无法按预期工作，但 SPOM 精神不死。

## SPOM 基础

![Building_Electrolyzer.webp](../../guidesnotincluded_archive/assets/Building_Electrolyzer-1365a41594.avif)

电解器

![Building_Hydrogen_Generator.webp](../../guidesnotincluded_archive/assets/Building_Hydrogen_Generator-4ca3365e13.avif)

氢气发电机

![Electrolyzer_runInVacuum.png](../../guidesnotincluded_archive/assets/Electrolyzer_runInVacuum-386298f649.avif)

电解器产出。这台电解器是在真空中启动的。它把房间灌成约十分之一氢气、十分之九氧气。氢气浮在氧气上方。

《缺氧》里有好几种产氧机器。你至少应该见过氧气扩散器——吃藻类产氧气。SPOM 用的则是一种叫做电解器的机器。

电解器基础

- 它消耗水，产出两种气体：氧气和氢气
- 产出比例约为 90% 氧气、10% 氢气（精确数字是 888 克/秒氧气和 112 克/秒氢气）
- 它有一个液体输入口用来进水
- 没有气体输出管道：氧气和氢气直接排进周围环境
- 产出气体的温度取决于输入水的温度：有多热的水就出多热的气，但最低 70C
- 它需要电力（120 W）

要实现自供电，SPOM 还需要第二台机器：氢气发电机。氢气发电机消耗氢气、产出电力（和热量）。

气体重量各不相同；氢气比氧气轻。电解器产生的氢气会一路升到氧气上方。SPOM 正是利用这个气体机制，把气泵一上一下布置——高的抽氢气，低的抽氧气。

SPOM 的基本思路就是把电解器产出的两种气体分开：

- 氧气泵进你的基地
- 氢气泵给氢气发电机

SPOM 的电解器产出的氢气，给 SPOM 自己供电绰绰有余——甚至还有富余。

富余氢气的用途很多。一个选择是把它管道输给反熵消热器，换一份相当轻松的冷却。

说到冷却——我们得聊聊热量了。

## 应对热量

![Anti_Entropy_Thermo-Nullifier.webp](../../guidesnotincluded_archive/assets/Anti_Entropy_Thermo-Nullifier-cdd2c5b9d5.avif)

反熵消热器（AETN）

![Building_Thermo_Aquatuner.webp](../../guidesnotincluded_archive/assets/Building_Thermo_Aquatuner-fd2600fd3c.avif)

液温调节器（俗称液冷机）

![Building_Steam_Turbine.webp](../../guidesnotincluded_archive/assets/Building_Steam_Turbine-39b055ebcd.avif)

蒸汽涡轮

电解器产出的是 +70C（或更热）的氧气。好消息是，你的 SPOM 要把基地实际加热到那个温度得花非常久。坏消息是，它依然在持续不断地给你的基地添热。

理论上你可以跑一场《辐射》（Vault-Tec）风格的实验，看看殖民地随着基地逼近沸点会有怎样的命运。如果这不是你的菜，你就需要某种冷却。

关于 SPOM 和冷却，主要有两个选项：

1. 在氧气进入基地之前先冷却它。
2. 把热氧气直接泵进基地，改在基地里跑一条冷却回路。

（殖民地小的话，我通常两个一起用：我的冷却回路既穿过基地、也穿过 SPOM，两头一起凉。）

建 SPOM 本身不难，难的是冷却。更准确地说，是搞到冷却建筑所需的材料——具体来说，[塑料](getting-oil-petroleum-and-plastic.md)和/或[钢](getting-steel.md)。

下面是三种冷却方案，按难度递增排列。

1. 一个简单但临时的冷却办法：让 SPOM 出来的氧气气体管道穿过冰雪群系。管道里的氧气会被冷却。（用导热管道可以改善氧气与冰雪群系之间的[温度传递](heat-transfer-basics.md)。）

这个方案的缺点：冰雪群系会被你慢慢加热，而且氧气进基地的温度很难控制。

2. 如果你的地图有冰雪群系，那你的小行星上可能还有反熵消热器。它们为冷却提供稳定、可控、长期的解决方案。

3. 第三种，也是强得离谱的冷却方案：一条冷却回路，用液温调节器冷却回路里的液体，再用蒸汽涡轮烧掉（或者说转化成电力）液温调节器产生的部分热量。

这是后期级的冷却建筑，只要电力充足，无论你在哪颗小行星都能解决所有热问题。不过它同时需要塑料和钢。

上面方案 2 和 3 的配图与概览在本站都有，指南后面也会更深入地讲。链接：

- [反熵消热器冷却](anti-entropy-thermo-nullifier-cooling.md)（含工作原理说明和几种带概览的搭建选项）
- [冷却回路](aquatuner-steam-turbine-cooling-loo.md)（液温调节器与蒸汽涡轮）

  + 想看点理论的话，还有一篇[冷却回路原理介绍](thermo-aquatuner-steam-turbine-cooling-loop.md)，同样带概览

再重复一遍前面的要点：如果你的基地是"正常"温度，SPOM 把它显著加热需要很长时间。就连 SPOM 内部升到 +75C——非黄金机器开始受伤的温度——也要很久。

我曾把 SPOM 冷却拖后几百个周期，从未见过它过热。所以，冷却早晚要做，但不必在点火 SPOM 的当天就备好。（几乎所有复制人都会告诉你：藻类见底的时候，热的氧气也比没有强。）

## 选择 SPOM：你需要多少氧气？

![Neural_Vacillator.webp](../../guidesnotincluded_archive/assets/Neural_Vacillator-5a519ecb93.avif)

神经振荡仪

SPOM 可以建各种尺寸。本站有两座 SPOM 的搭建指南：[小型（氧气 1 千克/秒）](spom-1kg-s.md)和[大型（氧气 3 千克/秒）](spom-3kg-s.md)。选哪个主要取决于你想养多少复制人。

复制人耗氧量：

一个标准复制人消耗 100 克/秒氧气。正负特质会影响这个数字。

- "大口呼吸"特质的复制人耗氧 +100 克/秒
- "肺活量大"特质的复制人耗氧 -25 克/秒
- "肺活量超大"特质的复制人耗氧 -50 克/秒（该特质只能通过神经振荡仪获得）

小型 SPOM 产氧 1 千克/秒。理论上够 10 个标准复制人呼吸。不过产氧最好留点余量——你要有足够的富余去灌满你的基地和所有气压服。

一些火箭和太空探索相关的东西也需要氧气。但如果这些现在让你头大，可以完全不管——以后需要时再建一座 SPOM 就是。

所以粗略的经验法则是：

- 复制人少于 10 个（标准耗氧）的话，小型 SPOM 就够了。（但为了留安全余量，我说 8 个或更少。）
- 要养 10 个或更多复制人（标准耗氧），你要么上更大的 SPOM，要么多建几座小的。

关于神经振荡仪和神经振荡仪抽奖：

神经振荡仪每次使用给一条特质，然后需要充能。（充能亮片在太空里，后面会讲。）

神经振荡机能给四条特质之一，肺活量超大是其中之一。也就是说你有 25% 的概率抽到。

一个复制人可以把神经振荡仪给的四条特质集齐，每条只能获得一次。所以只要反复把同一个复制人塞进神经振荡仪，你最终一定能抽到肺活量超大。（最迟第四次。）

点击复制人选择"生物"可以查看他有哪些特质。不过不用太精打细算：集齐四条特质的复制人再使用神经振荡仪，什么都不会发生，充能也不会消耗。

## SPOM 建在哪？

选址时至少要考虑水和冷却。

水

SPOM 需要稳定供水。所以一个选址思路是靠近某种水喷口。如果你要用热水，这一点尤其重要。SPOM 离得近，热水管道就不用铺老远。（不管怎样，记得用隔热液体管道减少热扩散。）

冷却

你打算怎么冷却氧气？（如果不冷却氧气，那就是冷却基地。）如果你要用反熵消热器冷却氧气，把 SPOM 建在 AETN 附近能把热氧气的输送距离压到最短。

现在来看看一座 SPOM 长什么样。

## 近看（小型）SPOM

先看电解器房间——氧气和氢气的产地。

这座 SPOM 用了两台电解器。气泵布置在略有不同的高度——上面的泵抽氢气，下面两台抽氧气。

![SPOM-1.png](../../guidesnotincluded_archive/assets/SPOM-1-59427166a1.avif)

![ONI-goldInSlimeBiome.png](../../guidesnotincluded_archive/assets/ONI-goldInSlimeBiome-3417995df5.avif)

金汞齐。凡是有粘液肺、污水和其他脏东西的地方都能找到它。

氢气泵（中间那台）两侧的门是为了防止氧气窜到氢气泵那里。门可以换成墙，随你喜好，不过建造和检修时门更方便进出。

电解器下方的网格砖有助于气体流动。你也可以用透气砖，但网格砖的好处是任何意外滴落的液体都会漏下去。（一滴液体在 SPOM 里可能很难发现，却会搅乱它的运转。）

这个建筑的原理是：电解器排出的氢气升到门的上方，被中间的气泵抽走；氧气沉到氢气下方，被两侧的气泵抽走。房间形状本身也在帮氧气和氢气保持分离。

（最终设计还给每台气泵配了气压传感器，通过控制气泵的启停来帮助气体保持分离。）

砖块用的是隔热砖，防止 SPOM 的热量渗进周围。要避免机器过热损坏：

- 这个区域的机器用金汞齐建造

金子在菌泥群系里能找到。有些小行星，比如贫瘠（Badlands），没有菌泥群系，也就没有金子。（注意：世界的"晶洞"特质可以补金。）

<!-- TODO-TERMS: Badlands（官方星域名译"荒凉/贫瘠"，本页暂译"贫瘠"）; 世界特质 Geodes 官方作"晶洞"已核验 -->

如果没有金子，可以用钢造机器。或者干脆让冷却管穿过 SPOM——那样机器随便什么材料都行。（连隔热砖都省了。）

接下来是楼上——电力相关的东西。基本思路：把氢气变成 SPOM 的电力。这一层的搭法有好几种，这是一种标准做法。

![SPOM-2.png](../../guidesnotincluded_archive/assets/SPOM-2-9e1945243c.avif)

![Building_Atmo_Sensor.webp](../../guidesnotincluded_archive/assets/Building_Atmo_Sensor-792769c68f.avif)

气压传感器

上层从右到左依次是：

- 一个储存富余氢气的储气库
- 一台把氢气转化为电力的氢气发电机
- 一块储存电力的智能蓄电池
- 一台电力变压器，再接到下层的机器上。（如果这座电网不接别的东西，小型电力变压器就够了。）

除此之外，SPOM 还有连接到气泵的气压传感器（上面图里没有）。它们维持氧气与氢气的平衡，并确保 SPOM 的气体储量不会过低。最后，还有一大堆电线、管道等等（同样没出现在上面的图里）。

记住上层的机器也发热。一储气库热氢气同样会散热。一个办法是把这个区域封起来。另一个选择——也就是我的做法——是让冷却管穿过这个区域。（[冷却回路](thermo-aquatuner-steam-turbine-cooling-loop.md)在指南后面讲。）

## 重要：给多余氢气留溢流

![ONI-GasPipe-overflow.png](../../guidesnotincluded_archive/assets/ONI-GasPipe-overflow-d367264e7a.avif)

溢流机构。两个版本效果相同。气体（从右向左流）先尝试过气体管道桥；过不去就沿气体管道向上走。

SPOM 产出的氢气比氢气发电机需要的多。所以你需要一个溢流机构来处理多余的氢气。

这些年里，我的 SPOM 每次出问题，基本都是因为我先建了 SPOM，想着"等会儿"再去建溢流机构——"等手头这几件事干完"。

然后，后来——在我完全忘了氢气溢流这回事之后——我就纳闷我的气压服存放柜怎么开始受损了。（氢气泵堵塞的副作用之一就是气体混合，你的氧气体管道道里可能窜进氢气。）

富余氢气怎么处理是你的自由——关键是必须处理。一些选项：

- 泵进储气库存起来。（后期火箭能烧液氢。）注意你得不停地加越来越多的储气库，盯紧它们。
- 送进气体装罐器，这样你随时有氢气罐可用。（比如加进壁虎养殖场促进鳞片生长。）
- 把多余氢气送给氢气发电机发电。注意：不要把这个氢气发电机自动化成"电池满了就停"，那样会导致氢气堵管。
- 用多余氢气驱动反熵消热器（一台或几台）。注意：AETN 吃氢不多，所以那条线同样需要溢流机构。
- 排进太空。
- 以上任意组合

气体管道的溢流机构和水的溢流机构一样。让氢气主管道经过一个气体管道桥，溢流管道从气体管道桥的输入段分出去。（复习见：[液体溢流机构](recycling-toilet-water.md)。）

![ONI-SPOM-example_gas.png](../../guidesnotincluded_archive/assets/ONI-SPOM-example_gas-d18b026992.avif)

SPOM 气路示例。氢气先经过一个气体分离器（设为氢气）。然后到达一个气体管道桥——气体优先向左走，去储气库和氢气发电机。满了之后，多余气体分流到气体装罐器和右侧的溢流管道。

我所有的 SPOM 都装了常驻氢气气体分离器。比我胆大的人会省掉它。如果你的 SPOM 永远不出岔子，气体分离器纯属浪费电。我倾向于认定某天总会出岔子（比如氢气堵管或供水中断），所以装上分离器当保险。

（上例中我没有加冷却。如果这是实际游玩截图，我会让导热液体管道带着冷却穿过 SPOM。因为加了冷却，我的 SPOM 用普通砖而不是隔热砖建造。）

## 点火你的 SPOM：气体管理与初始电力

![Building_Gas_Reservoir.webp](../../guidesnotincluded_archive/assets/Building_Gas_Reservoir-8603e1bb01.avif)

储气库

![Building_Gas_Filter.webp](../../guidesnotincluded_archive/assets/Building_Gas_Filter-b108a67f9c.avif)

气体分离器

第一次点火 SPOM 时，气体需要一小会儿才能稳定（氧气在下、氢气在上）。在此之前，你的氧气体管道道和氢气体管道道道里都会是混合气体。

想查看 SPOM 里的气体混合情况，可以用材料概览（右上角的方形图标，或按 F4）。目标是让顶部区域——特别是（小型 SPOM 上）氢气泵下方、两扇门之间的格子——只有氢气。

氢气发电机吃了氢气以外的任何东西都会受损。这个问题有几种解法，举例：

- 简单解法：把初始气体直接排进基地，等气体稳定后再把 SPOM 接上氢气发电机。
- 如果不想让氢气进基地，可以先把初始气体泵进储气库，日后再处理，比如排进太空。
- 另一个选项——也是我的习惯——是在氢气体管道道道上加一个气体分离器。SPOM 产的电足够给分离器供电，氢气照样有富余。

![ONI-SPOM-example_Double-gas-filter.png](../../guidesnotincluded_archive/assets/ONI-SPOM-example_Double-gas-filter-9d244081df.avif)

如果你在想：氧气能不能也加一个气体分离器？同样用 SPOM 供电？——可以。我自己不这么干，但根据（有限的）测试完全可行。只是 SPOM 产氧几乎是产氢的十倍，氧气分离器的运行频率会远高于氢气分离器，耗电也多得多。

这种设计有时耗电会超过一台氢气发电机的产出。所以想上双分离器的话，加第二台氢气发电机来满足增长的需求。

配氧气和氢气分离器的 SPOM。

根据有限测试，这套建筑看起来可行。图中储气库换成了第二台氢气发电机以满足电力需求。两台分离器都由 SPOM 供电，氢气甚至还有一点点富余。

![ONI-SPOM-bootstrapping.png](../../guidesnotincluded_archive/assets/ONI-SPOM-bootstrapping-2fd4206d3c.avif)

SPOM 起步。临时电力装置帮你把 SPOM 转起来。也可以直接接到你的高功率电线上。

另外，如果你的目标是保护气压服存放柜不受损，可以省很多电：把一个气体分离器放在只过滤"进气压服存放柜的氧气"的位置。

一个做法是在 SPOM 旁分出一条"保证是氧气"的管道和一条"大概是氧气"的管道，前者穿过气体分离器，专供那些吃了氢气会坏的东西。我有时就这么干。（再说一次，比我胆大的人信任他们的 SPOM，根本不操心这些。）

接下来是给 SPOM 通电。

SPOM 转起来之后就能自供电，但启动需要帮一把。你可以把 SPOM 接进电网，或者扔几台仓鼠轮加一块电池接上去，等 SPOM 运转起来再断开。

（哦对了，记得把 SPOM 智能蓄电池的充电下限调到 0 以上。这样在氢气发电机接管之前，电池不会被完全放空。）

基本就是这些——开工吧！等 SPOM 基础用熟了，就开始按自己的风格和需求改造设计吧。

对我来说，任何新建筑最难的不是动手建，而是鼓起勇气开始。下面是两座 SPOM 的详细图片和各种概览的链接，助你踏上无限氧气之路。

- [小型 SPOM](spom-1kg-s.md)（1 千克/秒氧气）
- [大型 SPOM](spom-3kg-s.md)（3 千克/秒氧气）

上面链接的页面里还有 Francis John 讲解这两个建筑的油管视频链接。

最后，给那些还需要一个理由来拖延建造第一座 SPOM 的人：这里有一些"野外 SPOM"的照片，看看别人家的 SPOM，顺便为自己的开工做准备。（你可以的！）

## 野外 SPOM：示例 SPOM、水喷口与反熵消热器

有一次游玩，我恰好抽到水喷口和反熵消热器挨在一起。于是我把 SPOM 建在了它们周围。

这座 SPOM 是大型的，也就是所谓完整制氧模块（Full Rodriguez）。（带一些小改动。）

AETN 冷却能力不太够——氧气出来是 34-35C。（实际基地里还有额外的冷却回路。）

水泵外部供电，两台气体分离器（一台氢气一台氧气）由 SPOM 供电。

![ONI-guide-BigSPOMandAETN-1.png](../../guidesnotincluded_archive/assets/ONI-guide-BigSPOMandAETN-1-15352c891a.avif)

![ONI-guide-BigSPOMandAETN-1-GAS.png](../../guidesnotincluded_archive/assets/ONI-guide-BigSPOMandAETN-1-GAS-2f755d1242.avif)

通风概览。（这意面味儿够冲的。）

这条气路本来也许可以铺得好看点……

氧气

- 这座 SPOM 产出三管氧气。（是最下面一排六台气泵——每条氧气体管道两台泵。）
- 其中一条氧气体管道道穿过一个气体分离器。这条管就是我接气压服存放柜的（以及其他吃了非氧气会坏的设备）。
- 全部三条氧气体管道道都经过 AETN 冷却的（污染）水（图中黄色管段），然后分支通往基地各处。

氢气

- 这座 SPOM 产出一管氢气。
- 先经过一个气体分离器。然后路过 AETN。再分支：一条线喂一台氢气发电机，另一条经过一个储气库（存点备用氢）后接往另外两台氢气发电机。
- 储气库底部有一段气体溢流。发电机用不完的都继续往前送。（它驱动第二台 AETN，并灌一个气体装罐器。那里还有更多溢流机构，最终多余的送进一台接着基地电网的氢气发电机烧掉。）

![ONI-guide-BigSPOMandAETN-1-liquids.png](../../guidesnotincluded_archive/assets/ONI-guide-BigSPOMandAETN-1-liquids-770fd9e19b.avif)

建这套时水喷口还在休眠，所以加了一条注水管，等喷口醒过来。那个液体管道桥是为了让 SPOM 尽可能用水喷口的水（而不是外面的水管）。

![ONI-guide-BigSPOMandAETN-1-Automation.png](../../guidesnotincluded_archive/assets/ONI-guide-BigSPOMandAETN-1-Automation-6bb0ee3467.avif)

![ONI-guide-BigSPOMandAETN-1-Power.png](../../guidesnotincluded_archive/assets/ONI-guide-BigSPOMandAETN-1-Power-52002a17da.avif)

本节以 QuQuasar 2018 年 SPOM MKII 帖子中的一段话作结：

"来吧：这是我第二次尝试制作自供氧模块（Self-Powering Oxygen Module），简称 'SPOM'。

这名字真蠢。提醒自己：永远别以任何理由再用这个名字。可不能让它传开。"

---

*本页存档自 [https://www.guidesnotincluded.com/to-know-the-spom-is-to-love-the-spom](https://www.guidesnotincluded.com/to-know-the-spom-is-to-love-the-spom)（[Wayback Machine 快照](https://web.archive.org/web/20250821073544id_/https://www.guidesnotincluded.com/to-know-the-spom-is-to-love-the-spom)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
