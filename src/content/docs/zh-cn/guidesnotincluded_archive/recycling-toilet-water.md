---
title: "回收厕所水"
description: "液体溢流机构"
source_url: https://www.guidesnotincluded.com/recycling-toilet-water
archived: 2025-07-31
archive_snapshot: https://web.archive.org/web/20250731071301id_/https://www.guidesnotincluded.com/recycling-toilet-water
---

引言

一些基础

液体溢流机构

快糙猛（说得直白点：带菌）版本

完整建筑：图片与概览

工作原理

搭建：简单方式

搭建：不那么简单的方式

- 建造真空房间
- 删除并重建管道
- 给房间灌满氯气
- 完成氯气房：管道与自动化

- 点击右上角的水滴图标或按 F6 可以打开水管概览。

- 大部分管道相关的东西都通过"管道"建造图标来建（左下角）。一个值得注意的例外是洗手池，它在"医学"分类下。

- 管道设施通常有输入口和输出口。

  + 白色是输入：液体从这里进
  + 绿色是输出：液体从这里出

- 东西不工作时，首先检查输入口和输出口。一个常见错误（几千小时之后我还会犯）是把输入输出接反。

- 管道必须通向某个地方，液体才会流动。（液体管道桥也算"地方"——水会一直流到液体管道桥的入口，哪怕桥后管道不通。）

- 想让液体从管道里倒出来，需要在末端装一个排液口。

- 重力影响地图上的液体，但不影响管道里的液体。

## 小贴士回顾：管道基础

## 引言

目标是把厕所里那些被污染、带菌的水变成干净无菌的水，再送回厕所。建成后，你就再也不用操心厕所用水了。

我会讲一个快糙猛（意思是带菌）的版本，以及一个用氯气杀灭全部病菌的版本。

"用氯气杀菌"的建筑有很多变体。我用的这一版学自 Francis John 的油管视频："QOL Mk3, 36 Germ decontamination for toilets and spin that vacillator : Oxygen not included"

见 <https://youtu.be/SEL3pxB5tao?t=102>，访问于 2020 年 8 月 11 日。

（注意：这一节我刚全部重写过。[2023 年 3 月底] 错别字可能格外多，我会尽量找出来。如果你发现错字或其他不对劲，请告诉我。有一个匿名的[联系表单](guide-feedback.md)可以用。）

## 一些基础（或者：简单方式与困难方式任选）

把污染水送过净水器，它就变成水。既然马桶、洗手池和淋浴间都需要水，而我们刚造出了水，那直接把这些水送回厕所和淋浴间就好了。然而：

- 净水器不会去除水里的病菌。

于是我们得到的是被病菌污染的水，却被当作净水用在了厕所和淋浴间里。（水里的病菌肉眼看不见。要看病菌，用病菌概览。）

为了解决这个问题，这套建筑使用氯气。

- 氯气能杀死病菌

我们会把所有带菌的水送进一个充满氯气的房间，给它"除菌"（这绝对算个词）。

话虽如此，如果你不想杀病菌，也完全可以不杀。淋浴间和洗手池的净水里的病菌不会传给复制人。所以搬运带菌的泥土会让复制人沾菌，但在带菌的水里洗澡洗手却不会让他们带菌。

"用带菌水洗手洗到无菌"这个设定实在出戏，所以我不这么干。但如果你没有我这种执念，完全可以跳过氯气房——这会让整套建筑又快又简单。（两种版本的配图我都会放。）

不管选哪个版本，你都需要一个液体溢流机构。这和马桶的工作方式有关：

- 马桶产出的液体比消耗的多

这意味着如果我们做成闭式回路，管道迟早堵死，马桶停工。幸运的是这个问题很好解决。

![ONI-Guide-QuickAndDirty3.png](../../guidesnotincluded_archive/assets/ONI-Guide-QuickAndDirty3-9aa6f83617.avif)

![ONI-Guide-QuickAndDirty4.png](../../guidesnotincluded_archive/assets/ONI-Guide-QuickAndDirty4-0d4759c460.avif)

别这样。这个厕所的管道会堵死，复制人会出事故。

## 液体溢流机构

![ONI-guide-WaterOverflow_edited.jpg](../../guidesnotincluded_archive/assets/ONI-guide-WaterOverflow_edited-26b934d7f5.avif)

用液体管道桥搭建的液体溢流机构。液体总是优先尝试过桥。在这个设计里，上面的水罐会先装满，然后下面的水罐才开始装。

我们需要一个办法把多余的水从管道网络里排出去。这要用到一小段叫做液体管道桥的管道。

关于液体管道桥的实用知识：

- 液体管道桥里永远没有液体。它把液体从输入管道"传送"到输出管道。也就是说：
- 你可以随时拆除液体管道桥，不会有水洒出来

液体管道桥有输入侧（白）和输出侧（绿）。液体管道桥的用途之一是让完全独立的管道从它下方穿过；另一个用途就是造出我们需要的液体溢流机构。

《缺氧》里液体的运作方式是：液体"偏爱"液体管道桥胜过普通管道。如果液体在管道网络中遇到一个岔口，一边是液体管道桥、一边是普通管道，液体总会先尝试走桥。只有走不通才会流进普通管道。

看图可能更好理解。图中利用"液体偏爱液体管道桥"的特性做了一个主储罐加副储罐的系统。泵上来的水会先尝试过桥去顶部的罐子；只有当罐子和桥后所有管道都满了，第二个罐子才会开始装。

这正是我们要给厕所用的机制——确保厕所回路里有足够的水，而多余的水会被排走。

接下来是搭建。先讲快糙猛版，再讲完整版。

液体溢流

快糙带菌

## 快糙猛（说得直白点：带菌）版本

厕所把污染水喂给净水器，净水器把它变成水再送回厕所。

你必须在某处装一个液体溢流机构。它可以装在净水器之前或之后。这决定了你得到的溢流是少量污染水，还是（带菌的）水。

![ONI-Guide-QuickAndDirty5.png](../../guidesnotincluded_archive/assets/ONI-Guide-QuickAndDirty5-c45215e305.avif)

快糙猛版本 1。溢流产出污染水。

![ONI-Guide-QuickAndDirty2.png](../../guidesnotincluded_archive/assets/ONI-Guide-QuickAndDirty2-2b8066012b.avif)

快糙猛版本 2。溢流产出（带菌的）水。

## 完整建筑：图片与概览

图片与概览

先上建筑的图片和概览，包括储液库之前那段令人费解的管道的特写。然后讲工作原理，再给一些搭建的选项和技巧。

![ONI-Guide-BathroomDecontamination1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontamination1-63c7db3e2a.avif)

污染（带菌）水净化系统。图里我放了一些马桶和洗手池，但我所有的净化都用同一套。我通常会有好几层楼，一层叠一层，放着淋浴间、污水处理、医院等等。它们全都汇入氯气房。

![ONI-Guide-BathroomDecontaminationPipes.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationPipes-3f0867e0fb.avif)

水管概览。储液库左边的红圈是一个液体管道元素传感器，设为污染水。储液库右边那个东西是液体截断阀。

![ONI-Guide-BathroomDecontaminationAutomation.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationAutomation-e50226c217.avif)

自动化概览。液体管道元素传感器连接到液体截断阀。

![ONI-Guide-BathroomDecontaminationTrickyBit1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationTrickyBit1-e0eff54b04.avif)

费解之处特写

![ONI-Guide-BathroomDecontaminationTrickyBit2.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationTrickyBit2-106c334066.avif)

这是第一个储液库左侧的管道拆开后的样子。

![ONI-Guide-BathroomDecontaminationTrickyBit3.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationTrickyBit3-7d61e1d45a.avif)

合起来是这样的（去掉储液库和自动化）。

## 工作原理

净化系统构建了一个循环，厕所水在其中永久流转。污染水被净化后送回循环，多余的水被排出系统。

氯气用来消灭污染水里的病菌。氯气杀菌很快但不是瞬间完成。所以我们要确保污染水在氯气房里停留足够久，让病菌全部死光。这靠三个储液库和一些自动化来实现。

只要三个储液库保持满仓，带菌污染水流过全部三个罐子到达净水器时，病菌就已经死光了。

为了保证储液库全满，这套设计用了一种液体管道桥管路加一点自动化。设计的效果是：三罐全满时发出信号。

液体只要有可能就总会过桥。桥后放置一个检测管道内液体的自动化传感器。也就是说，只有三个储液库全满之后，污染水才会进入那些管道、触发传感器。

液体管道元素传感器之后还有另一个液体管道桥，把污染水送回主液体管道。

几张示例图可能比文字讲得更清楚。下面几张图用的机制与实际建筑相同。只有罐子满了，污染水才会触发传感器，进而触发液体截断阀放水。

工作原理

![ONI-Guide-BathroomDecontaminationHowItWorksPipes.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationHowItWorksPipes-c4bbdee228.avif)

工作原理：水管概览。污染水能过桥就过桥。只有管道满了，污染水才会直直向上、触发液体管道元素传感器。

![ONI-Guide-BathroomDecontaminationHowItWorksAutomation.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationHowItWorksAutom-1bf65da9f5.avif)

工作原理：自动化概览。被触发后，液体管道元素传感器向液体截断阀发信号，阀门打开、液体通过。

只要有新的污染水进入系统，液体截断阀就保持打开。污染水停止进入时，带元素传感器的那段管道排空，传感器发出信号关闭液体截断阀。

机制讲完了，开始搭建。可以走简单方式，也可以走不那么简单的方式。

这取决于氯气在游戏里的工作方式：

- 氯气能杀储液库里的病菌，但是
- 氯气杀不到液体管道里的病菌

这意味着如果你一口气全建好再接上，净化系统出来的水里依然有菌。因为氯气房里的管道内壁残留着病菌，哪怕氯气已经杀光了储液库里的所有病菌。

## 搭建：简单方式

如果地图上有无菌污染水可用，那你运气不错。

- 菌泥群系里可以找到无菌的污染水

这是我的做法，也是我推荐的做法（只要你有无菌污染水）。

整套系统、管道自动化什么的全部建好。但别泵任何干净水进去。如果你有污水处理站，也先别启用。总之，在就绪之前让复制人离你的建筑远点。

就绪很简单。你需要先给（净）水管道灌水才能开动。可以从别处泵干净水进来；或者像我常做的，先让我接的那个污染水源头跑一阵子，把它变成水。

不管选哪条路，当你的污染水储罐满了、厕所等设施也有了水，就绪。

这套系统也能用来处理你基地里散落的污染水。加一个液体管道桥，让净化系统优先处理厕所的产出（见下面的示例图）。

简单方式

![ONI-Guide-BathroomDecontamination2.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontamination2-ebcdbac5e0.avif)

启动。从地图泵入污染（但无菌）水，给厕所建筑灌满净水。如果用液体管道桥接入外部污染水，系统会优先处理厕所的污染水；没有厕所水可净化时，才处理外部管道来的污染水。

这套建筑仍然需要你先造真空、再灌氯气。方法在"不那么简单的方式"里有讲。往下滚一点，或点这里：建造真空房间、给真空房间灌氯气。

如果你没有无菌污染水，就只能走不那么简单的方式了。

## 搭建：不那么简单的方式

这种方式没法一口气建完，需要分阶段。

先建好所有厕所等设施，让它们汇入三个储液库。你需要从某处给系统供（净）水。

现在你的复制人会慢慢把他们"生产"的污染水灌进储液罐。（这些污染水带菌。）

不那么简单

![ONI-Guide-BathroomDecontaminationOption2_1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationOption2_1-569e135f99.avif)

第一步。使用外部水源；随着复制人使用你的厕所等设施，污染水（慢慢）灌满三个储液库。连接三个储液库的那条直线管道是临时的，储液库灌满后就会拆除。

三个储液库灌水的同时，可以着手准备真空房间的区域，之后我们要给它灌氯气。

我们要拆管道，所以现在就把真空房建好，还能防止污染水洒进你的基地。

## 建造真空房间

我们想要一个充满氯气的房间。如果房间里既有大量氯气又混了一点别的气体，我们就无法确定带菌污染水在氯气里停留的时间是否足以杀光病菌。所以氯气房里只准有氯气。

为了保证只有氯气，我们要建一个房间，然后抽空里面所有气体——制造真空。但我们还想在真空之后能进出房间。为此我们需要一个叫做水门（liquid lock）的东西。

水门让复制人可以通过，气体不行。然后我们抽光房间里的所有气体，最后灌满氯气。（想深入了解，指南有单独一节：[《水门基础》](liquid-lock-basics.md)。）

你可以建一个正规的水门，也可以建一个敷衍了事、更快但更有风险的版本。由于这是座临时水门，我建快糙版。

真空

![ONI-Guide-BathroomDecontaminationVacuum1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationVacuum1-a0825968fb.avif)

建真空房：水门。先砌左墙，再照图砌一个碗状结构。

现在要把储液库区域的所有气体抽空。于是我们在那个"碗"里建水门，然后用气泵抽走气体。

在《缺氧》里，一个格子只能装气体或液体其中之一，不能兼得。如果你不介意（滥用）这个机制，只需往碗里倒一点液体，就能做出一个快糙版水门。

注意：如果建的是快糙风险版，把空桶器放在水门远离真空房的那一侧。记住这一点，快糙风险版就变成了快糙不算特别风险版。

（你不需要知道为什么，但想知道的话：如果空桶器在真空房那一侧，中间那格可能会有氧气团。复制人可以站在水门格上、吸那格里的氧气——因为真空房的格子里有一点点水。然后他们就会把二氧化碳呼进真空房。）

![ONI-Guide-BathroomDecontaminationLiquidLock1_edited.jpg](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationLiquidLock1_edi-7563eb0f9d.avif)

水门。更快但略冒险的版本。确保两格砖上都有水，如图。空桶器放远端，离真空房越远越好。

![ONI-Guide-BathroomDecontaminationLiquidLock2.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationLiquidLock2-bc93309fde.avif)

![ONI-Guide-BathroomDecontaminationLiquidLock3.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationLiquidLock3-e95fba0612.avif)

水门。更慢、更安全的版本。把碗的底格灌满，上面三格每格约 100 千克。当你在水上方砌最后一格砖时，水会被"拉"上来填满那格，阻断两侧的一切气体交换。

![ONI-Guide-BathroomDecontaminationLiquidLock4.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationLiquidLock4-82ee839a2f.avif)

抽走所有气体。气压高于 2 千克时排气口就不排气了。如果这成了问题，可以铺一条长气体管道、沿路布几个排气口（有塑料的话用高压排气口）。
## 删掉五段管道

储液库满了之后，就可以拆掉临时管道。（这可以在建气闸和抽氧之前或之后做。之后做的话，会多出一点污染氧要抽。）

如果你有一个拥有管路工作技能的复制人，可以先排空管道再拆。用右下角的"清空管道"图标。

没有管路工的话，就只剩脏办法：直接拆管道，让污染水洒一地，然后用擦拭收拾残局。

关于拆管道：

- 只拆管道不拆别的简单办法：选中水管概览，然后按"X"。这样就只会删除管道。

删除管道

![ONI-Guide-BathroomDecontaminationDeletePipes.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationDeletePipes-fc9c5ec5e8.avif)

删掉五段管道。删除从最左边储液库的白色输入口通到最右边储液库的白色输入口的那段管道。（有管路工的话可以先排空管道。）

![ONI-Guide-BathroomDecontaminationDeletePipes2.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationDeletePipes2-4c8a1bd21e.avif)

拆完后，按需要下发擦拭命令和清扫命令，把所有污染水瓶搬出房间。污染水瓶会散发污染氧，我们可不想氯气房里有这个。

只有当某处有空桶器设置为接受污染水时，复制人才会清扫污染水瓶。如果你的厕所建筑里没有，就在哪里临时建一个。

污染水瓶清走、房间真空之后，就可以拆掉气泵了。想看真空进度，可以用材料概览（右上角方形图标，或 F4）查看气压。

在满屋子"什么都没有"（真空）或氯气的房间里，复制人不应该呼出二氧化碳。（我只有一次让二氧化碳进了真空房。原因不明，可能当时用的是快糙风险版水门。）

注意：胃肠胀气的复制人走到哪都会排天然气，真空房和氯气房也不例外。所以有这类复制人的话，让他们远离施工现场。

氯气

## 给真空房间灌氯气

把氯气弄进房间主要有两种办法：

1. 在地图上找到氯气。用气体分离器（设为氯气）泵送，直接泵进氯气房，或者用气体装罐器和排罐器中转。
2. 用漂白石

漂白石大概是对新手更友好的方式。又快又容易，我自己就用这个。

漂白石可以在腐蚀群系找到——就是紫色特别多的那个群系。

![ONI-guide-BleachStone_edited.jpg](../../guidesnotincluded_archive/assets/ONI-guide-BleachStone_edited-fb285f6842.avif)

漂白石

挖出来的漂白石会开始散发（少量）氯气。所以思路很简单：挖一些漂白石放进真空腔。漂白石散发氯气，房间就会慢慢变成我们的氯气房。

- 在房间里建一个存储箱
- 设置为只接受漂白石。漂白石在"升华"分类下，位于列表最底部"非标准"分类里。
- 注意：只有挖到过漂白石，它才会出现在选项里。看不到的话，挖一点再回来看。
- 调高存储箱优先级（7 左右）
- 挖一些漂白石（如果没有）
- 对漂白石下发清扫命令

复制人会把漂白石搬进存储箱，房间里的氯气就会缓慢而稳定地增多。

这期间可能有一些氯气窜进你的基地。没什么大不了的，之后可以清理。（或者说我们会清理，然后不知怎么就永远没腾出手。）

![ONI-Guide-BathroomDecontaminationChlorineRoom1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationChlorineRoom1-7ce28db649.avif)

装漂白石的存储箱

漂白石要用多少？

游戏里氯气的机制是：多少都一样管用。也就是说往房间里放多少（或多少）漂白石无所谓。我通常把存储箱设成 100 千克，看起来绰绰有余。（挖掘时会损失一半质量，相当于挖了 200 千克的漂白石方块。）

漂白石进箱后，就可以拆掉存储箱了。

如果你基地里还有别的存储箱也设了漂白石，就得临时禁用它，免得复制人跑来把这里的漂白石搬走。）

搞定之后，就等着氯气对储液罐里的病菌施展魔法。用病菌概览盯着罐子，全部无菌后就可以继续了。

![ONI-Guide-BathroomDecontaminationChlorineRoom2.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationChlorineRoom2-ecfa4f47a9.avif)

罐子净化中。用病菌概览（右上角病菌图标）观察所有罐子何时全部无菌。

## 完成氯气房：管道与自动化

现在可以建最后几段管道和自动化，封上氯气房，给净水器腾出空间。

管道：把上方的液体管道桥接到最左边储液库的输入口。把各储液库的输出口接到右边相邻储液库的输入口。

从最右边的储液库引一段管道到液体截断阀。

注意：储液库要接到液体截断阀的输入口，也就是白色的接口。

从液体截断阀的输出口（绿色接口）引一段管道，通向右边的墙里。

完成建筑

![ONI-Guide-BathroomDecontaminationChlorineRoom4.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationChlorineRoom4-122eb54e5e.avif)

管道。把上方液体管道桥接到储液库。把储液库彼此相连。把最后一个储液库接到液体截断阀，再从截断阀引管道到墙。

自动化：左边是设为污染水的液体管道元素传感器。右边是液体截断阀。用信号线把两者连起来。

![ONI-Guide-BathroomDecontaminationChlorineRoom3.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationChlorineRoom3-96f10397c2.avif)

自动化。液体管道桥输入口之间的管段上装液体元素传感器。末端是液体截断阀。用信号线连接。

电力：液体截断阀需要 10 W。为了日后扩展，用导电线连接（就是能扛 2000 W 的那种电线）。

我建到这里时通常基地还在用电线供电。那我会炼出刚好够一小段导线条的精炼金属，从液体截断阀铺到墙边。

![ONI-Guide-BathroomDecontaminationChlorineRoom5.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationChlorineRoom5-bd3dc4b224.avif)

电力概览。记得加一小段电线，完工后给液体截断阀供电。

然后砌上液体截断阀右边的墙，把氯气房封死。拆掉水门的残留。（水随它流哪或先泵走。我们只是要清场——需要这块空间。）

![ONI-Guide-BathroomDecontaminationChlorineRoom6.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationChlorineRoom6-1f0ab997ec.avif)

封上氯气房，拆掉水门的砖。

现在放一台净水器，氯气房出来的管道接到净水器的输入口（白色接口）。净水器吃沙子，所以可以加一个存储箱设为沙子（在"过滤介质"分类下）。

净水器的输出应该接到一个液体管道桥上。它就是你的多余水排放机构。让液体管道桥接回你的（净）水进水管道，然后分出第二条线，通向你想让多余净水去的地方（SPOM、毛刺花、储水区等等）。

![ONI-Guide-BathroomDecontaminationComplete1.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationComplete1-761b680daa.avif)

![ONI-Guide-BathroomDecontaminationComplete2.png](../../guidesnotincluded_archive/assets/ONI-Guide-BathroomDecontaminationComplete2-fa45822401.avif)

当氯气房里第一个储液罐再次装满（灌管道时它损失了一点点污染水），你的水回收系统就会开始输出干净水。现在可以把最初的水源从这套系统上断开了。

拍拍自己的肩膀——从此以后你再也不用操心厕所供水了。

选做：溢流改出污染水而非净水

如果你愿意，也可以把液体管道桥溢流机构放在氯气房之前。这样你得到的将是少量而稳定的污染水，而不是水。比如可以用来喂一棵芦苇，换来少量芦苇纤维。

---

*本页存档自 [https://www.guidesnotincluded.com/recycling-toilet-water](https://www.guidesnotincluded.com/recycling-toilet-water)（[Wayback Machine 快照](https://web.archive.org/web/20250731071301id_/https://www.guidesnotincluded.com/recycling-toilet-water)）。原作 © Some Random Finn / guidesnotincluded.com，以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权。中文翻译由 xiaonaimao 完成，译文同样以 CC BY-NC-SA 4.0 发布——见[署名与授权](attribution.md)。*
