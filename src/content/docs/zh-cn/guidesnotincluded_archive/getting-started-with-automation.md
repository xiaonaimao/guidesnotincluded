---
title: "自动化入门"
description: "自动化需要一点时间适应，但用处非常大，值得掌握。我们从基本概念讲起，以及它能……"
source_url: https://www.guidesnotincluded.com/getting-started-with-automation
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806091639id_/https://www.guidesnotincluded.com/getting-started-with-automation
---

目录：

- 自动化基础
- 煤炭发电机自动化
- 照明自动化
- 自动排除（多余的）氢气
- 自动排除【非氧气】
- 碳素脱离器自动化

- 自动化液泵和气泵省电
- 自动清扫器——自动化搬运
- 智能存储箱——满了就停止生产【某物】
- 用自动化给电源排优先级

## 自动化基础

自动化需要一点时间适应，但用处非常大，值得掌握。我们从基本概念讲起，看看它在游戏里怎么用。

说得极度简化，自动化让你能告诉游戏：

- 当【某件事】发生时，我要【另一件事】跟着发生。

看几个例子。

新基地里常见的第一件自动化工程是控制煤炭发电机。这时我们告诉游戏：

- 当【我的电池电量不足】，我要【煤炭发电机开始运转】
- 当【我的电池充满】，我要【煤炭发电机停机】

有些机器需要复制人去填充——比如给煤炭发电机加煤。自动化的另一个用途（用自动清扫器）是：

- 当【我的煤炭发电机煤快烧完】，我要【给它加煤】

你还可以用自动化控制基地里允许存在什么气体：

- 当【这台气泵附近的气体不是氧气】，我要【气泵启动、把它抽走】

具体怎么"告诉游戏"因对象而异。有些自动化简单到只需在两样东西之间连一根信号线（比如煤炭发电机和智能蓄电池）；另一些则需要额外的零件，通常是某种感知周围环境的传感器。

游戏里的传感器种类繁多：温度、气体种类、液体种类、病菌数量、一天中的时段（周期进行到哪）等等等等。它们都能用来下达那些"当【某件事】发生，我要……"的指令。

开工之前有几件事要先备齐。

自动化的前置条件

- 你需要通过研究解锁自动化相关的传感器（和其他东西），它们散布在科技树的各个角落
- 你需要精炼金属来建造自动化设施（前期可以用碎石机把金属矿石精炼成金属）
- 一些建筑需要复制人有特定技能才能建造。这些技能都在"操作"技能树上。最后一个技能——机电工程师——需要"操作"和"供应"双满级。

背景够多了——开始自动化。

自动化基础

![CBCIGtoONI_Automation1.png](../../guidesnotincluded_archive/assets/CBCIGtoONI_Automation1-27c7b42663.avif)

基础的煤炭发电机自动化。用信号线把煤炭发电机连到智能蓄电池。智能蓄电池告诉煤炭发电机什么时候启动。

## 煤炭发电机自动化

煤炭发电机和电力变压器在[指南前面](the-early-game.md)讲过，这里专注自动化。

所需研究：

- 扩音器（电力分支下）
- 智能家居（信息处理分支下）
- 蛮力精炼（固体原料分支下）

我们需要精炼金属。来把一些铜矿变成铜：

- 建一台碎石机（"精炼"分类下）

给你的煤炭发电机做自动化

![Building_Rock_Crusher.webp](../../guidesnotincluded_archive/assets/Building_Rock_Crusher-df6d73853a.avif)

碎石机

![Building_Smart_Battery.webp](../../guidesnotincluded_archive/assets/Building_Smart_Battery-a87091318b.avif)

智能蓄电池

碎石机发热量大，让它离你的植物远点。位置可以是临时的——我们只是想把自动化跑起来。你也可以在旁边放一个（或几个）存储箱，设为金属矿石——那正是你精炼金属的原料。

关于碎石机的选址，一个实用选项是把它放在煤炭发电机旁边（见上图示例）。这样它就不给你的常规电网添额外负担——直接用高功率电线把碎石机连到煤炭发电机上。代价是高功率电线有很差的装饰值。

碎石机建好后：

- 下单生产 5 份铜（铁也行——我只是假定你的铜矿更多）

记住可以调高碎石机的优先级。想让某个复制人更把碎石当回事，可以改复制人优先级。

- 操作碎石机属于"操作"复制人优先级任务类型

搭建自动化

铜一到手就能开工。给煤炭发电机做自动化需要：

- 把巨型电池换成智能蓄电池（"电力"分类下）
- 用信号线（"自动化"分类下）把智能蓄电池连到煤炭发电机

在建造菜单（左下角）选中"自动化"时会打开自动化概览，上面标着自动化连接点的位置。

用一根连续的信号线把智能蓄电池和煤炭发电机连起来。（不要把电力变压器、碎石机或其他任何东西连进来。）

还差一步：告诉这套新自动化系统我们要它干什么。

告诉自动化要干什么

多亏了连接智能蓄电池与煤炭发电机的信号线，你的电池现在能给煤炭发电机"发消息"——下指令了。

点击智能蓄电池，你会看到"逻辑激活参数"。其中有"高阈值"和"低阈值"。别被措辞吓到——这是"停"和"开"的花哨说法。

高低阈值决定智能蓄电池充到多满（或放到多空）时，才向煤炭发电机发送指令。

- 高阈值用于发送【煤炭发电机停一停——我够满了！】指令（俗称红信号）
- 低阈值用于发送【煤炭发电机点火——我要充电！】指令（官方说法叫绿信号）

上限数字设成"充到多少就让煤炭发电机停"，下限设成"放到多低就让它重新充电"。

默认值是 100 和 0。电池完全放空会出问题，所以把下限调高。我用的数字（从 Francis John 那里偷来的）：

- 高阈值：95
- 低阈值：60

（用 95 而不是 100 的原因：煤炭发电机自动化的响应需要一点时间。如果 99% 才启动，可能浪费一点煤。）

眼下这套自动化的作用是防止煤炭发电机空转。后期你会有多种电源，届时可以用同样的自动化决定各种电源的启用顺序。本节后面会讲。现在看另一个简单例子：照明。

## 照明自动化

复制人在明亮区域工作会获得 15% 速度增益（"明亮的工作区"）。

灯常亮既费电又产废热。用一点简单的自动化——一个复制人运动传感器（"自动化"分类下）用信号线连到灯上——就能让灯只在需要时亮。（传感器能察觉附近有复制人——建造时可以看到感应半径。）

照明

![ONI-guide-DupeSensor.png](../../guidesnotincluded_archive/assets/ONI-guide-DupeSensor-4cca5083e0.avif)

![ONI-guide-DupeSensor-2.png](../../guidesnotincluded_archive/assets/ONI-guide-DupeSensor-2-3b273e4918.avif)

![ONI-guide-DupeSensor-3.png](../../guidesnotincluded_archive/assets/ONI-guide-DupeSensor-3-e715070ac3.avif)

氢气

## 自动排除（多余的）氢气

这个简单的小系统建在基地顶部，用一个气体元素传感器（设为氢气）和一台气泵。

它除不干净所有氢气——传感器上方、"贴着"泵的地方还会剩一点。但那一小点会被困在装置里，不会在基地里到处飘。

![ONI-guide-AutomationHydrogen1.png](../../guidesnotincluded_archive/assets/ONI-guide-AutomationHydrogen1-f7188f0513.avif)

![ONI-guide-AutomationHydrogen2.png](../../guidesnotincluded_archive/assets/ONI-guide-AutomationHydrogen2-1c6983c0b1.avif)

![ONI-guide-AutomationHydrogen3.png](../../guidesnotincluded_archive/assets/ONI-guide-AutomationHydrogen3-25696ed989.avif)

关于气体的冷知识：《缺氧》里气体倾向于向右堆积。氢气堆在右上，二氧化碳堆在右下。所以建任何处理多余气体的系统，尽量往最右边放。

## 自动排除【非氧气】

氢气堆在基地顶部，但很多其他气体会沉到底部。你可以用气体元素传感器加一个非门搭一套类似的装置。

把气体元素传感器设为氧气。连到一个非门，再连到气泵。传感器不在氧气中时发出红信号；信号传到气泵之前，非门会把红信号变成绿信号。这样只要传感器不在氧气里，气泵就收到绿信号。

非氧气

![ONI-Guide-NotOxygen.png](../../guidesnotincluded_archive/assets/ONI-Guide-NotOxygen-82e6077bf5.avif)

![ONI-Guide-NotOxygen2.png](../../guidesnotincluded_archive/assets/ONI-Guide-NotOxygen2-5d03aa0fbc.avif)

碳素脱离器

## 碳素脱离器自动化

这个精巧的小型碳素脱离器自动化出自 Jahws 的 Steam 指南"[实用建造模式](https://steamcommunity.com/sharedfiles/filedetails/?id=1359728437)"。

所需研究

- 通用传感器（信息处理分支）
- 高级自动化（同样在信息处理分支）
- 改良通风（气体分支）

建筑的图片与自动化概览、以及各种传感器设置，可以在本站的[建筑区](carbon-skimmer-automation-jahws.md)找到。这里也会讲，但先从涉及哪些部件、怎么工作说起。

（如果你对这套装置的原理不感兴趣，直接跳到实际搭建部分。）

技术细节——用什么传感器、为什么

前面我们把自动化说成下命令——比如"打开煤炭发电机"。自动化实际做的事是发信号。信号非红即绿。然后由我们来设计出一个发信号的装置，让机器在我们想要的时候开机。

这套设计会用到几个新的自动化零件。它们帮我们给碳素脱离器下达非常具体的指令。

为了帮我们建立自动化的思维方式，接下来我会多聊红信号和绿信号。（还是那些相当直白的东西。）（别以为它会突然变复杂然后弃读。）

我们要用的新自动化玩具有：

![Building_Gas_Element_Sensor.webp](../../guidesnotincluded_archive/assets/Building_Gas_Element_Sensor-9811deac2a.avif)

气体元素传感器

气体元素传感器

气体元素传感器让我们在自动化指令中使用传感器周围的气体种类（氧气、二氧化碳等）。在本例中：

- 如果【这里有二氧化碳】，则【发送绿信号】

只用气体元素传感器也可以算完成了自动化：把它接到碳素脱离器上，用绿信号表示有二氧化碳，让碳素脱离器只在有二氧化碳时运行。

但如果只有一丁点二氧化碳呢？没多少东西可除时，我们未必想让碳素脱离器白耗电。于是轮到：气压传感器。

![Building_Atmo_Sensor.webp](../../guidesnotincluded_archive/assets/Building_Atmo_Sensor-792769c68f.avif)

气压传感器

气压传感器

气压传感器测量气压。（想想：传感器所在处有多少氧气、二氧化碳等等。）它不管是什么气体，只管有多少。气压传感器让我们把这个气压读数用于自动化指令。在本例中：

- 如果【这里气压相当可观】，则【发送绿信号】

现在假设有一小团二氧化碳在碳素脱离器旁边的地上滚来滚去。气压也许尚可，但量太少，我们还是不想浪费电力去清它。这时用过滤门。

![Building_FILTER_Gate.webp](../../guidesnotincluded_archive/assets/Building_FILTER_Gate-28972aed15.avif)

过滤门

过滤门

过滤门既接收也发送信号。它用来表达：

- 如果【我收到绿信号已持续（某段时间）】，则【发送绿信号】

最后还有一块要介绍：与门。

![Building_AND_Gate.webp](../../guidesnotincluded_archive/assets/Building_AND_Gate-358bc7b750.avif)

与门

与门

与门让我们告诉碳素脱离器：只有两件事同时发生才开机。

- 如果【从 A 收到绿信号】，什么都不做
- 如果【从 B 收到绿信号】，什么都不做
- 如果【从 A 收到绿信号】且【从 B 收到绿信号】，则【发送绿信号】

零件凑齐，现在终于可以拼出那个告诉碳素脱离器的小玩意：

- 如果这里有二氧化碳（气体元素传感器）
- 且这里持续 5 秒都有二氧化碳（过滤门）
- 且同时（与门）
- 如果这里的气压相当可观——不管是什么气体（气压传感器）
- 且气压持续 5 秒相当可观（过滤门）
- 那么（与门）
- 打开碳素脱离器。（耶——！）

![ONI_guide_CarbonSkimmer1.png](../../guidesnotincluded_archive/assets/ONI_guide_CarbonSkimmer1-62faa22eae.avif)

![ONI_guide_CarbonSkimmer2.png](../../guidesnotincluded_archive/assets/ONI_guide_CarbonSkimmer2-5ab580364f.avif)

碳素脱离器自动化。紧凑版和展开版各一张，方便看清楚到底怎么回事。图中不含液体部分（进水、出污染水），那在指南上一章"前期指南"讲过。这套自动化的紧凑版正好塞在那一章的碳素脱离器和净水器之间。

实际搭建

用图示更容易理解（见上），但我也试着写出来。

用信号线连接以下各处：

- 碳素脱离器到与门

  + 注意：与门的连接应接在从与门指出的箭头上
- 气压传感器到一个过滤门，该过滤门再连到与门

  + 注意：过滤门的箭头方向应从气压传感器指向与门
  + 注意：与门的连接应接在指向与门的箭头上
- 气体元素传感器到另一个过滤门，该过滤门再连到与门

  + 注意：过滤门的箭头方向应从气体元素传感器指向与门。
  + 注意：与门的连接应接在指向与门的箭头上

传感器设置

最后一步是启动传感器。要让它们工作，得告诉它们干什么。

- 气体元素传感器设为不可呼吸的气体 → 二氧化碳
- 气压传感器设为"高于" 750 克（大致即可）
- 过滤门设为 5 秒（默认值）

你可以用自动化确保泵只在区域内的气体或液体达到一定量时启动。这样管道不满时泵不空转，节省电力。

气体用气压传感器。它检测所在格子的气体量，然后用信号线接到气泵上。（我通常设为高于 500。）

## 自动化液泵与气泵省电

泵

![ONI-GasPump-Automation.png](../../guidesnotincluded_archive/assets/ONI-GasPump-Automation-4462973b4b.avif)

![ONI-GasPump-Automation-2.png](../../guidesnotincluded_archive/assets/ONI-GasPump-Automation-2-f3a4634aca.avif)

液泵同理，用液压传感器。它检测所在格子的液体量，接到液泵上即可。（我通常设为高于 500。）

![ONI-LiquidPump-Automation.png](../../guidesnotincluded_archive/assets/ONI-LiquidPump-Automation-1fde67400b.avif)

![ONI-LiquidPump-Automation-2.png](../../guidesnotincluded_archive/assets/ONI-LiquidPump-Automation-2-cc7617917f.avif)

## 自动清扫器：自动化搬运

自动清扫器基础

- 自动清扫器通过研究"智能存储"（固体原料研究分支）解锁
- 建造自动清扫器需要复制人拥有机电工程师技能
- 自动清扫器能把东西捡起来放到别处
- 那个"别处"必须是建筑或机器等——不能直接扔在地上
- 你通过间接方式控制自动清扫器——它依据建筑优先级设置决定做什么
- 自动清扫器不需要连接信号线就能工作

你不能直接命令自动清扫器扫什么、放到哪。自动清扫器会"环顾四周"，看看有没有：

1. 能放东西的地方
2. 能放到那里去的东西

比如你有一个设为煤的存储箱，附近有台自动清扫器，它就会看有没有煤可捡。如果没有其他存储箱或需要其他资源的建筑，那自动清扫器就只对煤感兴趣。

如果你有两个半满的储煤存储箱、优先级相同，自动清扫器什么都不干。但如果其中一个的优先级更高，它就会开始把煤从低优先级箱子搬向高优先级箱子。

如果自动清扫器不按你的想法干活，排障第一步是看它周围的优先级设置：你想让它放东西的建筑（等）优先级必须高于装着东西的存储箱（等）。第二步是检查自动化概览：你的自动清扫器是否连着一根可能让它断电的信号线？

自动清扫器

![Building_Auto-Sweeper.webp](../../guidesnotincluded_archive/assets/Building_Auto-Sweeper-b0aa507419.avif)

自动清扫器

## 智能存储箱——满了就停止生产【某物】

你可能希望某种物资常备一定库存。低于这个量就想多生产，够了就停。用智能存储箱加一个非门就能自动化。

- 把智能存储箱设为你要的库存量（默认 20 000）。
- 用信号线把智能存储箱连到非门，再把非门连到你想自动化的机器。

于是，智能存储箱不满时发绿信号；满时发红信号。

（建议再加一台自动清扫器，自动给智能存储箱补货。）

智能存储

![ONI-SmartStorage-Automation.png](../../guidesnotincluded_archive/assets/ONI-SmartStorage-Automation-b02823c060.avif)

![ONI-SmartStorage-Automation-2.png](../../guidesnotincluded_archive/assets/ONI-SmartStorage-Automation-2-ff8b96364f.avif)

有些地图石头很多、沙子很少或没有。可以用碎石机把石头变成沙子。但手动管理碎石机、时刻记得查看沙子存量有点繁琐。同样的思路可以自动化这套流程。

![ONI-guide-AutomationSand1.png](../../guidesnotincluded_archive/assets/ONI-guide-AutomationSand1-486265ed12.avif)

上图中，Pei 往存储箱里灌火成岩（地图上多得是），Bubbles 在操作碎石机，设为永远把火成岩变沙子。

还有一个智能存储箱存放产出的沙子。智能存储箱控制碎石机：箱子不满时开启造粒机。

![ONI-guide-AutomationSand2.png](../../guidesnotincluded_archive/assets/ONI-guide-AutomationSand2-ee56389ad0.avif)

![ONI-guide-AutomationSand3.png](../../guidesnotincluded_archive/assets/ONI-guide-AutomationSand3-7be641c64b.avif)

这里还有额外的自动化：把沙子自动送往所有需要沙子的机器。用运输装载器实现（存储箱顶上那个东西）。

运输装载器的优先级高于智能存储箱，所以沙子先归它。运输轨道从运输装载器通向一台台运输存放器，放在每个用沙机器旁边。

电源排优先级

## 用自动化给电源排优先级

《缺氧》里有好几种电源：煤炭、天然气、太阳能等等。

如果多个发电设备（煤炭发电机、天然气发电机、太阳能板）都接在你的电网上，你可能不希望它们无时无刻都在运转。

用自动化可以决定谁是主力电源、谁是第二、第三顺位……用的正是前面（煤炭发电机自动化）讲过的机制。

你只需要给每种电源各接一块独立的智能蓄电池（用信号线）。一块智能蓄电池连你所有的煤炭发电机，一块连所有的天然气发电机，以此类推。

注意：智能蓄电池要接到该类型的每一台发电机上，而不是只接一台。也就是用信号线把一块智能蓄电池与你所有的煤炭发电机都连起来。

所有智能蓄电池都应接在同一条电网上。（电池不限于这些——你的电网还可以有任意多块不接自动化、专职储电的电池。）

原理

电池都接在同一条电网上，电量——即可用电力——在所有电池上是相同的。

因为每组发电设备各自有独立的信号线，你可以给每组发不同的指令。具体说，你可以给每种电源设定各自的开机、停机电量线。

举例：你有太阳能板、天然气发电机和煤炭发电机。这种情况下，

- 太阳能板不需要自动化——你可能希望它们随时能充电就充。

想尽量用太阳能驱动基地，就让其他电源只在需要时启动。

- 天然气发电机可以是第二电源：电池电量高于 50% 时待机，跌破 50% 时启动发电。

- 煤炭发电机是最后手段。为了少烧煤（少排二氧化碳），可以设成电量低于 20% 才启动。

- 还可以给每类设上限。想少用煤炭发电机的话，可以设成电池充到比如 30% 就关。

![ONI-guide-PowerSourceAutomation-1.png](../../guidesnotincluded_archive/assets/ONI-guide-PowerSourceAutomation-1-20e4a96bf4.avif)

多路电源。各种发电设备接在同一条电网上。每种发电机各配一块智能蓄电池、用信号线连全该类型的所有机器，就能决定每一类的启动时机。

---

*本页存档自 [https://www.guidesnotincluded.com/getting-started-with-automation](https://www.guidesnotincluded.com/getting-started-with-automation)（[Wayback Machine 快照](https://web.archive.org/web/20250806091639id_/https://www.guidesnotincluded.com/getting-started-with-automation)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
