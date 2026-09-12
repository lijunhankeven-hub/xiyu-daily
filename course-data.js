// 西语每日练 · 课程数据（功能内容版 v1.2.0）
// 内容迭代只改本文件。铁律：已上线句子的 spanish 原文永不修改（记忆卡 ID 由它生成）；
// 改中英翻译安全。新句子必须原创，带 tier（1-10）和 point（具体语法点）。
// 注意：必须用普通 script 全局变量（不能改成 ES module——本地双击 file:// 会被拦截）。
var COURSE_DATA = [
    {
        id: 1,
        title: "第1课：问候与自我介绍",
        summary: "问候、告别、自我介绍、动词 ser 和 llamarse",
        difficulty: "入门",
        length: "5 句",
        sentences: [
            { english: "Hello, how are you?", chinese: "你好，你好吗？", spanish: "Hola, ¿cómo estás?", tier: 1, point: "寒暄固定搭配" },
            { english: "Good morning, nice to meet you.", chinese: "早上好，很高兴认识你。", spanish: "Buenos días, mucho gusto.", tier: 1, point: "问候 + 初次见面用语" },
            { english: "See you later!", chinese: "回头见！", spanish: "¡Hasta luego!", tier: 1, point: "告别固定搭配" },
            { english: "My name is Maria.", chinese: "我的名字是玛丽亚。", spanish: "Me llamo María.", tier: 5, point: "反身动词 llamarse（我：me llamo）" },
            { english: "What is your name?", chinese: "你叫什么名字？", spanish: "¿Cómo te llamas?", tier: 6, point: "疑问词 cómo + 反身动词（你：te llamas）" }
        ]
    },
    {
        id: 2,
        title: "第2课：数字与年龄",
        summary: "数字1-10、询问年龄、动词 tener 的用法",
        difficulty: "入门",
        length: "4 句",
        sentences: [
            { english: "I am 25 years old.", chinese: "我25岁。", spanish: "Tengo veinticinco años.", tier: 4, point: "tener 第一人称 tengo + 西语用「有…岁」表年龄" },
            { english: "I have one brother and one sister.", chinese: "我有一个哥哥和一个妹妹。", spanish: "Tengo un hermano y una hermana.", tier: 4, point: "tengo + 不定冠词阳性 un / 阴性 una" },
            { english: "Do you have siblings?", chinese: "你有兄弟姐妹吗？", spanish: "¿Tienes hermanos?", tier: 6, point: "tener 第二人称 tienes（是否疑问句）" },
            { english: "How old are you?", chinese: "你多大了？", spanish: "¿Cuántos años tienes?", tier: 6, point: "疑问词 cuántos + tienes" }
        ]
    },
    {
        id: 3,
        title: "第3课：国家与语言",
        summary: "国家、国籍、语言、动词 ser 和 hablar",
        difficulty: "入门",
        length: "5 句",
        sentences: [
            { english: "I am from China.", chinese: "我来自中国。", spanish: "Soy de China.", tier: 2, point: "ser 第一人称 soy + de 表来源" },
            { english: "I speak a little Spanish.", chinese: "我说一点西班牙语。", spanish: "Hablo un poco de español.", tier: 3, point: "-ar 规则动词 hablar 第一人称 hablo" },
            { english: "Where are you from?", chinese: "你来自哪里？", spanish: "¿De dónde eres?", tier: 6, point: "疑问词 dónde + ser 第二人称 eres" },
            { english: "Do you speak Spanish?", chinese: "你说西班牙语吗？", spanish: "¿Hablas español?", tier: 6, point: "hablar 第二人称 hablas（是否疑问句）" },
            { english: "I don't speak Spanish.", chinese: "我不说西班牙语。", spanish: "No hablo español.", tier: 7, point: "否定句：no 直接放动词前" }
        ]
    },
    {
        id: 4,
        title: "第4课：家庭与过去时入门",
        summary: "家庭词汇、物主形容词、简单过去时（hablar, ser, tener）",
        difficulty: "入门-进阶",
        length: "4 句",
        sentences: [
            { english: "My family is big.", chinese: "我的家庭很大。", spanish: "Mi familia es grande.", tier: 2, point: "物主形容词 mi + ser 第三人称 es" },
            { english: "My mother is called Ana.", chinese: "我妈妈叫安娜。", spanish: "Mi madre se llama Ana.", tier: 5, point: "反身动词第三人称 se llama（对比 me llamo）" },
            { english: "Yesterday I spoke with my father.", chinese: "昨天我和我爸爸说话了。", spanish: "Ayer hablé con mi padre.", tier: 8, point: "过去时 -ar 规则：hablo → hablé（重音在末音节）" },
            { english: "Last week I went to my grandparents' house.", chinese: "上周我去了我祖父母家。", spanish: "La semana pasada fui a la casa de mis abuelos.", tier: 10, point: "不规则过去时 ir → fui（与 ser 同形，需靠语境分辨）" }
        ]
    },
    {
        id: 5,
        title: "第5课：日常活动与规则动词",
        summary: "日常活动、反身动词、-er/-ir 动词现在时和过去时",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "My daily routine is simple.", chinese: "我的日常作息很简单。", spanish: "Mi rutina diaria es simple.", tier: 2, point: "ser + 形容词，形容词跟名词保持阴性一致" },
            { english: "I get up at seven in the morning.", chinese: "我早上七点起床。", spanish: "Me levanto a las siete de la mañana.", tier: 5, point: "反身动词 levantarse + 时间表达 a las…" },
            { english: "What time do you go to bed?", chinese: "你几点睡觉？", spanish: "¿A qué hora te acuestas?", tier: 6, point: "疑问句 + 词干变化动词 acostarse（o → ue）" },
            { english: "Yesterday I worked all day.", chinese: "昨天我工作了一整天。", spanish: "Ayer trabajé todo el día.", tier: 8, point: "过去时 -ar 规则：trabajo → trabajé" },
            { english: "Yesterday I ate pasta for lunch.", chinese: "昨天我午餐吃了意大利面。", spanish: "Ayer comí pasta para el almuerzo.", tier: 9, point: "过去时 -er 规则：como → comí" },
            { english: "He wrote a letter yesterday.", chinese: "他昨天写了一封信。", spanish: "Él escribió una carta ayer.", tier: 9, point: "过去时 -ir 第三人称：escribe → escribió" },
            { english: "She lived in Shanghai last year.", chinese: "她去年住在上海。", spanish: "Ella vivió en Shanghai el año pasado.", tier: 9, point: "过去时 -ir 第三人称：vive → vivió" },
            { english: "Last year we lived in Beijing.", chinese: "去年我们住在北京。", spanish: "El año pasado vivimos en Pekín.", tier: 9, point: "vivimos 现在时与过去时同形，只能靠时间词分辨" },
            { english: "Last night I went to bed very late.", chinese: "昨晚我很晚才睡觉。", spanish: "Anoche me acosté muy tarde.", tier: 10, point: "过去时 + 反身：me acuesto → me acosté" }
        ]
    },
    {
        id: 6,
        title: "第6课：餐厅点餐",
        summary: "点餐用语、食物描述、querer 和尊称疑问",
        difficulty: "入门-进阶",
        length: "9 句",
        sentences: [
            { english: "The soup of the day is very good.", chinese: "今天的例汤非常好。", spanish: "La sopa del día está muy buena.", tier: 2, point: "estar + 形容词描述食物状态（está buena）" },
            { english: "We always eat at this restaurant on Sundays.", chinese: "我们周日总在这家餐厅吃饭。", spanish: "Siempre comemos en este restaurante los domingos.", tier: 3, point: "-er 规则动词 comer 第一人称复数 comemos" },
            { english: "They serve breakfast from eight in the morning.", chinese: "他们从早上八点开始供应早餐。", spanish: "Sirven el desayuno desde las ocho de la mañana.", tier: 3, point: "servir 第三人称复数 sirven + desde 表起点" },
            { english: "I would like a table for two, please.", chinese: "我想要一张两人的桌子。", spanish: "Quiero una mesa para dos, por favor.", tier: 4, point: "高频不规则动词 querer → quiero + por favor 礼貌用语" },
            { english: "My sister wants the fish, and I want the chicken.", chinese: "我妹妹要鱼，我要鸡肉。", spanish: "Mi hermana quiere el pescado y yo quiero el pollo.", tier: 4, point: "querer 第三人称 quiere 对比第一人称 quiero" },
            { english: "Could you bring me the bill, please?", chinese: "请把账单给我。", spanish: "¿Me trae la cuenta, por favor?", tier: 6, point: "尊称疑问：¿Me trae…? + 间接宾语代词 me（点餐/结账必用）" },
            { english: "What do you recommend?", chinese: "您推荐什么？", spanish: "¿Qué me recomienda?", tier: 6, point: "疑问词 qué + 尊称动词 recomienda" },
            { english: "I don't eat meat or fish.", chinese: "我不吃肉也不吃鱼。", spanish: "No como carne ni pescado.", tier: 7, point: "否定句 no + 动词；否定并列用 ni 而不是 o" },
            { english: "Yesterday we ate paella at a restaurant by the beach.", chinese: "昨天我们在海边的一家餐厅吃了海鲜饭。", spanish: "Ayer comimos paella en un restaurante cerca de la playa.", tier: 9, point: "过去时 -er 规则：comemos → comimos" }
        ]
    },
    {
        id: 7,
        title: "第7课：购物与价格",
        summary: "价格询问、指示形容词、形容词性数一致",
        difficulty: "入门-进阶",
        length: "9 句",
        sentences: [
            { english: "This jacket is too expensive.", chinese: "这件夹克太贵了。", spanish: "Esta chaqueta es demasiado cara.", tier: 2, point: "ser + 形容词：cara 与阴性名词 chaqueta 性数一致" },
            { english: "These shoes are very cheap.", chinese: "这双鞋很便宜。", spanish: "Estos zapatos son muy baratos.", tier: 2, point: "指示形容词阳性复数 estos + 形容词复数 baratos" },
            { english: "I buy fruit at the market every Saturday.", chinese: "我每周六在市场买水果。", spanish: "Compro fruta en el mercado todos los sábados.", tier: 3, point: "-ar 规则动词 comprar → compro；todos los sábados 每周六" },
            { english: "How much does this shirt cost?", chinese: "这件衬衫多少钱？", spanish: "¿Cuánto cuesta esta camisa?", tier: 6, point: "问价格：¿Cuánto cuesta…?（costar 词干变化 o→ue）" },
            { english: "Do you have this dress in another size?", chinese: "这条裙子有别的尺码吗？", spanish: "¿Tiene este vestido en otra talla?", tier: 6, point: "尊称疑问 ¿Tiene…?；otra talla 另一个尺码" },
            { english: "I don't like this color.", chinese: "我不喜欢这个颜色。", spanish: "No me gusta este color.", tier: 7, point: "gustar 结构：物作主语 me gusta + 否定 no 放最前" },
            { english: "We don't buy clothes online.", chinese: "我们不在网上买衣服。", spanish: "No compramos ropa por internet.", tier: 7, point: "否定句 nosotros：no compramos；por internet 通过网络" },
            { english: "Yesterday I bought a red shirt for my father.", chinese: "昨天我给爸爸买了一件红衬衫。", spanish: "Ayer compré una camisa roja para mi padre.", tier: 8, point: "过去时 -ar：compro → compré；para + 人表「给谁」" },
            { english: "Last week she bought a dress and some shoes.", chinese: "上周她买了一条裙子和一双鞋。", spanish: "La semana pasada ella compró un vestido y unos zapatos.", tier: 8, point: "过去时第三人称 compró；unos 不定冠词复数「一些」" }
        ]
    },
    {
        id: 8,
        title: "第8课：城市与问路",
        summary: "方位介词、hay 存在句、问路句型",
        difficulty: "入门-进阶",
        length: "9 句",
        sentences: [
            { english: "The bank is next to the park.", chinese: "银行在公园旁边。", spanish: "El banco está al lado del parque.", tier: 2, point: "estar + 方位：al lado de 在旁边（de + el 缩合为 del）" },
            { english: "The museum is far from the center.", chinese: "博物馆离市中心很远。", spanish: "El museo está lejos del centro.", tier: 2, point: "estar + 方位：lejos de 远离" },
            { english: "There is a very good bakery near my house.", chinese: "我家附近有一家很好的面包店。", spanish: "Hay una panadería muy buena cerca de mi casa.", tier: 3, point: "hay 存在句「有」+ cerca de 在附近" },
            { english: "Where is the metro station?", chinese: "地铁站在哪里？", spanish: "¿Dónde está la estación de metro?", tier: 6, point: "问路核心句型：¿Dónde está…?" },
            { english: "How do I get to the train station?", chinese: "去火车站怎么走？", spanish: "¿Cómo llego a la estación de tren?", tier: 6, point: "问路：¿Cómo llego a…?（llegar 词尾 -o 第一人称）" },
            { english: "Excuse me, is there a pharmacy around here?", chinese: "打扰一下，这附近有药店吗？", spanish: "Perdón, ¿hay una farmacia por aquí?", tier: 6, point: "询问存在：¿hay…? + por aquí 这附近；Perdón 打扰一下" },
            { english: "The hotel is not far from the beach.", chinese: "酒店离海滩不远。", spanish: "El hotel no está lejos de la playa.", tier: 7, point: "否定位置：no está lejos de… 不远" },
            { english: "Yesterday we walked through the old town.", chinese: "昨天我们逛了老城区。", spanish: "Ayer paseamos por el casco antiguo.", tier: 8, point: "过去时 -ar：paseamos + por 表「沿着/穿过」；casco antiguo 老城区" },
            { english: "We got lost in the city center and asked a police officer for help.", chinese: "我们在市中心迷了路，向一位警察求助。", spanish: "Nos perdimos en el centro y pedimos ayuda a un policía.", tier: 10, point: "反身过去 perderse → nos perdimos；pedir 过去 pedimos（现在过去同形）" }
        ]
    },
    {
        id: 9,
        title: "第9课：交通与旅行",
        summary: "交通工具、时刻表达、出行动词的过去时",
        difficulty: "入门-进阶",
        length: "9 句",
        sentences: [
            { english: "I take the bus to work every day.", chinese: "我每天坐公交车上班。", spanish: "Tomo el autobús para ir al trabajo todos los días.", tier: 3, point: "tomar 第一人称 tomo + para + 动词原形表目的" },
            { english: "The train leaves at nine forty-five.", chinese: "火车九点四十五分发车。", spanish: "El tren sale a las nueve y cuarenta y cinco.", tier: 3, point: "-ir 动词 salir 第三人称 sale + 时刻表达" },
            { english: "They arrive at the airport at noon.", chinese: "他们中午到机场。", spanish: "Ellos llegan al aeropuerto al mediodía.", tier: 3, point: "llegar 第三人称复数 llegan + al（a+el 缩合）" },
            { english: "How do I get to the airport?", chinese: "去机场怎么走？", spanish: "¿Cómo llego al aeropuerto?", tier: 6, point: "问路：¿Cómo llego a…? + 缩合 al" },
            { english: "What time does the bus arrive?", chinese: "公交车几点到？", spanish: "¿A qué hora llega el autobús?", tier: 6, point: "问时刻：¿A qué hora…? + llega" },
            { english: "We don't travel by plane very often.", chinese: "我们不常坐飞机旅行。", spanish: "No viajamos en avión muy a menudo.", tier: 7, point: "否定 + 频率：no…muy a menudo 不常" },
            { english: "Last year we traveled to Mexico by plane.", chinese: "去年我们坐飞机去了墨西哥。", spanish: "El año pasado viajamos a México en avión.", tier: 8, point: "viajamos 现在时与过去时同形，只能靠时间词 el año pasado 分辨" },
            { english: "Yesterday I took a taxi to the hospital.", chinese: "昨天我坐出租车去了医院。", spanish: "Ayer tomé un taxi al hospital.", tier: 8, point: "过去时 -ar：tomo → tomé（重音在末音节）" },
            { english: "The train left on time and we arrived early.", chinese: "火车准点发车，我们提前到了。", spanish: "El tren salió a tiempo y llegamos temprano.", tier: 9, point: "过去时 -ir 第三人称 salió；llegar 过去 llegamos" }
        ]
    },
    {
        id: 10,
        title: "第10课：天气与季节",
        summary: "天气表达、季节、hace/llueve 句型",
        difficulty: "入门-进阶",
        length: "8 句",
        sentences: [
            { english: "Today it is very hot.", chinese: "今天很热。", spanish: "Hoy hace mucho calor.", tier: 2, point: "天气固定搭配：hace calor 热 / hace frío 冷（无主语）" },
            { english: "In winter it is very cold in Beijing.", chinese: "北京的冬天很冷。", spanish: "En invierno hace mucho frío en Pekín.", tier: 2, point: "hace frío + 季节 en invierno + 地点" },
            { english: "In spring it rains a lot in the south.", chinese: "春天南方雨水很多。", spanish: "En primavera llueve mucho en el sur.", tier: 3, point: "llover 第三人称单数 llueve（天气动词只有第三人称）" },
            { english: "In summer the sun rises very early.", chinese: "夏天太阳升起得很早。", spanish: "En verano el sol sale muy temprano.", tier: 3, point: "salir 表太阳升起 + en verano 在夏天" },
            { english: "What's the weather like today?", chinese: "今天天气怎么样？", spanish: "¿Qué tiempo hace hoy?", tier: 6, point: "问天气：¿Qué tiempo hace…?" },
            { english: "Does it snow a lot here in winter?", chinese: "这里冬天雪多吗？", spanish: "¿Nieva mucho aquí en invierno?", tier: 6, point: "nevar 疑问句 ¿Nieva…?（词干变化 e→ie）" },
            { english: "It is not very windy today.", chinese: "今天风不大。", spanish: "Hoy no hace mucho viento.", tier: 7, point: "否定天气：no hace mucho viento 风不大" },
            { english: "Yesterday it rained all day.", chinese: "昨天下了一整天的雨。", spanish: "Ayer llovió todo el día.", tier: 9, point: "过去时第三人称：llueve → llovió" }
        ]
    },
    {
        id: 11,
        title: "第11课：时间与日程",
        summary: "时刻表达、日程安排、ir a + 动词原形",
        difficulty: "入门-进阶",
        length: "8 句",
        sentences: [
            { english: "The meeting is at three in the afternoon.", chinese: "会议在下午三点。", spanish: "La reunión es a las tres de la tarde.", tier: 2, point: "ser 表活动时间 + a las + 钟点" },
            { english: "The class is at nine in the morning.", chinese: "课在早上九点。", spanish: "La clase es a las nueve de la mañana.", tier: 2, point: "a las + 钟点 + de la mañana 上午" },
            { english: "I have a meeting at eleven.", chinese: "我十一点有个会。", spanish: "Tengo una reunión a las once.", tier: 4, point: "tener 表「有安排」+ a las once" },
            { english: "This afternoon I'm going to study Spanish at home.", chinese: "今天下午我打算在家学西语。", spanish: "Esta tarde voy a estudiar español en casa.", tier: 4, point: "将来计划：ir a + 动词原形（voy a estudiar）" },
            { english: "What time do we have class?", chinese: "我们几点上课？", spanish: "¿A qué hora tenemos clase?", tier: 6, point: "问时间：¿A qué hora…? + tenemos" },
            { english: "What day is the exam?", chinese: "考试是哪天？", spanish: "¿Qué día es el examen?", tier: 6, point: "问星期/日期：¿Qué día es…?" },
            { english: "Yesterday I finished work at six.", chinese: "昨天我六点下班。", spanish: "Ayer terminé el trabajo a las seis.", tier: 8, point: "过去时 -ar：termino → terminé" },
            { english: "The meeting started late and ended at eight.", chinese: "会议开始得晚，八点结束。", spanish: "La reunión empezó tarde y terminó a las ocho.", tier: 9, point: "过去时：empezar → empezó（词干变化动词过去时恢复 e）；terminó" }
        ]
    },
    {
        id: 12,
        title: "第12课：职业与工作",
        summary: "职业表达、工作动词、gustar 结构",
        difficulty: "入门-进阶",
        length: "8 句",
        sentences: [
            { english: "My father is a doctor.", chinese: "我爸爸是医生。", spanish: "Mi padre es médico.", tier: 2, point: "ser + 职业不带冠词（es médico，不说 es un médico）" },
            { english: "My aunt is a teacher at a primary school.", chinese: "我姑姑是一所小学的老师。", spanish: "Mi tía es profesora en una escuela primaria.", tier: 2, point: "ser + 职业 + en + 地点；profesora 阴性" },
            { english: "She works in a hospital in Madrid.", chinese: "她在马德里一家医院工作。", spanish: "Ella trabaja en un hospital de Madrid.", tier: 3, point: "trabajar 第三人称 trabaja + en 表工作地点" },
            { english: "My brother studies engineering at university.", chinese: "我哥哥在大学学工程。", spanish: "Mi hermano estudia ingeniería en la universidad.", tier: 3, point: "estudiar 第三人称 estudia + 专业" },
            { english: "Do you like your job?", chinese: "你喜欢你的工作吗？", spanish: "¿Te gusta tu trabajo?", tier: 6, point: "gustar 疑问：¿Te gusta…?（物作主语，人作间接宾语）" },
            { english: "Where does your sister work?", chinese: "你姐姐在哪里工作？", spanish: "¿Dónde trabaja tu hermana?", tier: 6, point: "疑问词 dónde + trabaja" },
            { english: "He doesn't work on weekends.", chinese: "他周末不工作。", spanish: "Él no trabaja los fines de semana.", tier: 7, point: "否定 + los fines de semana 每周末" },
            { english: "Last year she worked in a small office.", chinese: "去年她在一家小办公室工作。", spanish: "El año pasado ella trabajó en una oficina pequeña.", tier: 8, point: "过去时第三人称 trabajó + el año pasado 去年" }
        ]
    },
    {
        id: 13,
        title: "第13课：周末与休闲",
        summary: "休闲活动、jugar、反身动词的周末场景",
        difficulty: "入门-进阶",
        length: "9 句",
        sentences: [
            { english: "The weekend is my favorite time of the week.", chinese: "周末是我一周里最喜欢的时光。", spanish: "El fin de semana es mi momento favorito de la semana.", tier: 2, point: "ser 断言 + favorito 最喜欢的" },
            { english: "On Sundays my friends play football in the park.", chinese: "星期天我的朋友们在公园踢足球。", spanish: "Los domingos mis amigos juegan al fútbol en el parque.", tier: 3, point: "jugar 词干变化 u→ue：juegan；jugar al fútbol 踢足球" },
            { english: "I listen to music when I run in the morning.", chinese: "我早上跑步时听音乐。", spanish: "Escucho música cuando corro por la mañana.", tier: 3, point: "escuchar + cuando 从句；correr → corro" },
            { english: "On Saturdays I get up late and relax at home.", chinese: "周六我起得晚，在家放松。", spanish: "Los sábados me levanto tarde y descanso en casa.", tier: 5, point: "反身动词 levantarse + descansar；los sábados 每周六" },
            { english: "My grandfather goes to bed early every day.", chinese: "我爷爷每天睡得早。", spanish: "Mi abuelo se acuesta temprano todos los días.", tier: 5, point: "反身动词第三人称 se acuesta（词干变化 o→ue）" },
            { english: "What do you do on weekends?", chinese: "你周末做什么？", spanish: "¿Qué haces los fines de semana?", tier: 6, point: "hacer 第二人称 haces + 疑问词 qué" },
            { english: "We don't work on Sunday.", chinese: "我们周日不工作。", spanish: "No trabajamos el domingo.", tier: 7, point: "否定 nosotros：no trabajamos；单数 el domingo 也可表「每个周日」" },
            { english: "Yesterday I played basketball with my friends.", chinese: "昨天我和朋友们打了篮球。", spanish: "Ayer jugué al baloncesto con mis amigos.", tier: 8, point: "过去时 jugar → jugué（重音在末音节）" },
            { english: "Did you have fun at the party on Saturday?", chinese: "周六的聚会你玩得开心吗？", spanish: "¿Te divertiste en la fiesta del sábado?", tier: 10, point: "反身过去 divertirse → te divertiste；疑问句语序不变" }
        ]
    },
    {
        id: 14,
        title: "第14课：上周记事",
        summary: "简单过去时全人称、星期表达、时间词",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "On Monday Ana arrived at nine.", chinese: "周一安娜九点到的。", spanish: "El lunes Ana llegó a las nueve.", tier: 8, point: "过去时 -ar 第三人称 llegó + 星期 el lunes" },
            { english: "On Tuesday I studied Spanish for two hours.", chinese: "周二我学了两个小时西班牙语。", spanish: "El martes estudié español durante dos horas.", tier: 8, point: "过去时第一人称 estudié + durante 表持续时长" },
            { english: "On Wednesday we worked until eight at night.", chinese: "周三我们工作到晚上八点。", spanish: "El miércoles trabajamos hasta las ocho de la noche.", tier: 8, point: "过去时 nosotros trabajamos + hasta 直到" },
            { english: "On Thursday he washed the car.", chinese: "周四他洗了车。", spanish: "El jueves él lavó el coche.", tier: 8, point: "过去时 lavó；coche 在西语里是汽车" },
            { english: "On Friday she wrote two long letters.", chinese: "周五她写了两封长信。", spanish: "El viernes ella escribió dos cartas largas.", tier: 9, point: "过去时 -ir 第三人称 escribió" },
            { english: "On Saturday they ate at a famous restaurant.", chinese: "周六他们在一家有名的餐厅吃饭。", spanish: "El sábado ellos comieron en un restaurante famoso.", tier: 9, point: "过去时 -er 第三人称复数 comieron" },
            { english: "On Sunday we slept until eleven.", chinese: "周日我们睡到十一点。", spanish: "El domingo dormimos hasta las once.", tier: 9, point: "dormir 过去 dormimos 与现在时同形，靠 el domingo 分辨" },
            { english: "They didn't come to class on Friday.", chinese: "周五他们没来上课。", spanish: "El viernes no vinieron a clase.", tier: 10, point: "不规则过去 venir → vinieron + 否定 no" },
            { english: "On Saturday I went to the movies with my cousins.", chinese: "周六我和表兄妹们去看了电影。", spanish: "El sábado fui al cine con mis primos.", tier: 10, point: "不规则过去 ir → fui；al cine 去电影院" }
        ]
    },
    {
        id: 15,
        title: "第15课：假期回忆",
        summary: "假期主题过去时、ir/hacer/quedarse 不规则",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "Last summer I visited three cities.", chinese: "去年夏天我游览了三座城市。", spanish: "El verano pasado visité tres ciudades.", tier: 8, point: "过去时 -ar：visité；el verano pasado 去年夏天" },
            { english: "During the holidays we walked a lot.", chinese: "假期里我们走了很多路。", spanish: "Durante las vacaciones caminamos mucho.", tier: 8, point: "过去时 caminamos（现在过去同形，靠 durante las vacaciones 分辨）" },
            { english: "I ate seafood every day at the beach.", chinese: "我在海边天天吃海鲜。", spanish: "Comí marisco todos los días en la playa.", tier: 9, point: "过去时 -er 第一人称 comí" },
            { english: "My mother wrote many postcards.", chinese: "我妈妈写了很多明信片。", spanish: "Mi madre escribió muchas postales.", tier: 9, point: "过去时 -ir 第三人称 escribió" },
            { english: "We slept in a small hotel in the old town.", chinese: "我们睡在老城区的一家小旅馆。", spanish: "Dormimos en un hotel pequeño del casco antiguo.", tier: 9, point: "过去时 dormimos（同形）+ del casco antiguo 老城区的" },
            { english: "Last summer I went to the beach with my family.", chinese: "去年夏天我和家人去了海边。", spanish: "El verano pasado fui a la playa con mi familia.", tier: 10, point: "不规则过去 ir → fui + con 表「和…一起」" },
            { english: "What did you do on vacation?", chinese: "假期你做了什么？", spanish: "¿Qué hiciste en las vacaciones?", tier: 10, point: "不规则过去 hacer → hiciste（疑问词 + 过去时）" },
            { english: "We stayed at a hotel near the sea.", chinese: "我们住在海边的一家酒店。", spanish: "Nos quedamos en un hotel cerca del mar.", tier: 10, point: "反身过去 quedarse → nos quedamos" },
            { english: "It was the best vacation of my life.", chinese: "那是我人生中最棒的一个假期。", spanish: "Fueron las mejores vacaciones de mi vida.", tier: 10, point: "ser 过去 fueron + 最高级 las mejores" }
        ]
    },
    {
        id: 16,
        title: "第16课：健康与看医生",
        summary: "身体部位、doler、看医生常用语",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "The doctor is very kind.", chinese: "医生很和蔼。", spanish: "El médico es muy amable.", tier: 2, point: "ser + 形容词 muy amable 很和蔼" },
            { english: "I take this medicine twice a day.", chinese: "这个药我一天吃两次。", spanish: "Tomo esta medicina dos veces al día.", tier: 3, point: "tomar 表「吃药」+ dos veces al día 一天两次" },
            { english: "I have a headache.", chinese: "我头疼。", spanish: "Me duele la cabeza.", tier: 4, point: "doler 结构：部位作主语 me duele + 身体部位（la cabeza 头）" },
            { english: "How do you feel today?", chinese: "你今天感觉怎么样？", spanish: "¿Cómo te sientes hoy?", tier: 6, point: "反身 sentirse 疑问：¿Cómo te sientes…?" },
            { english: "Where does it hurt?", chinese: "哪里疼？", spanish: "¿Dónde te duele?", tier: 6, point: "疑问词 dónde + te duele（疼在哪里）" },
            { english: "I don't smoke and I don't drink alcohol.", chinese: "我不抽烟也不喝酒。", spanish: "No fumo y no bebo alcohol.", tier: 7, point: "双重否定并列：no fumo y no bebo" },
            { english: "The doctor says that I should rest more.", chinese: "医生说我应该多休息。", spanish: "El médico dice que debo descansar más.", tier: 7, point: "deber + 动词原形表建议：debo descansar；dice que… 转述" },
            { english: "Yesterday I called the doctor to make an appointment.", chinese: "昨天我打电话给医生预约了门诊。", spanish: "Ayer llamé al médico para pedir una cita.", tier: 8, point: "过去时 llamé + para + 动词原形表目的；pedir una cita 预约" },
            { english: "Yesterday I had a fever and stayed in bed.", chinese: "昨天我发烧了，一直躺在床上。", spanish: "Ayer tuve fiebre y me quedé en la cama.", tier: 10, point: "不规则过去 tener → tuve；反身过去 quedarse → me quedé" }
        ]
    },
    {
        id: 17,
        title: "第17课：电话与邀请",
        summary: "电话用语、邀请、poder/querer + 动词原形",
        difficulty: "进阶",
        length: "8 句",
        sentences: [
            { english: "I call my mother every Sunday.", chinese: "我每周日给妈妈打电话。", spanish: "Llamo a mi madre todos los domingos.", tier: 3, point: "llamar 第一人称 llamo；llamar a + 人（对人称直接宾语要加 a）" },
            { english: "She sends me messages at night.", chinese: "她晚上给我发消息。", spanish: "Ella me manda mensajes por la noche.", tier: 3, point: "间接宾语代词 me + manda（她给我发）" },
            { english: "I want to invite you to dinner on Friday.", chinese: "我想邀请你周五共进晚餐。", spanish: "Quiero invitarte a cenar el viernes.", tier: 4, point: "querer + 动词原形；invitarte = invitar + te（代词后置连写）" },
            { english: "Can you come to my party tonight?", chinese: "今晚你能来参加我的聚会吗？", spanish: "¿Puedes venir a mi fiesta esta noche?", tier: 6, point: "poder 疑问：¿Puedes…?（词干变化 o→ue）+ venir 原形" },
            { english: "Do you want to have a coffee with me?", chinese: "你想和我喝杯咖啡吗？", spanish: "¿Quieres tomar un café conmigo?", tier: 6, point: "邀请句型：¿Quieres…? + conmigo 和我" },
            { english: "I can't answer the phone now.", chinese: "我现在不能接电话。", spanish: "No puedo contestar el teléfono ahora.", tier: 7, point: "否定 no puedo + contestar el teléfono 接电话" },
            { english: "Yesterday I called you, but you didn't answer.", chinese: "昨天我打给你了，但你没接。", spanish: "Ayer te llamé, pero no contestaste.", tier: 8, point: "过去时 llamé + te（我打给你）；no contestaste；pero 表转折" },
            { english: "She invited us to her wedding.", chinese: "她邀请我们参加她的婚礼。", spanish: "Ella nos invitó a su boda.", tier: 8, point: "过去时 invitó + 间接宾语代词 nos（邀请我们）" }
        ]
    },
    {
        id: 18,
        title: "第18课：节日与生日",
        summary: "生日、节日庆祝、dar 的双宾语结构",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "My birthday is in September.", chinese: "我的生日在九月。", spanish: "Mi cumpleaños es en septiembre.", tier: 2, point: "ser + 月份：en septiembre 在九月（月份不加冠词）" },
            { english: "My grandmother turns eighty years old today.", chinese: "我奶奶今天八十岁了。", spanish: "Mi abuela cumple ochenta años hoy.", tier: 3, point: "cumplir años 表「过生日/满岁数」；第三人称 cumple" },
            { english: "We celebrate Christmas with the whole family.", chinese: "我们全家一起庆祝圣诞节。", spanish: "Celebramos la Navidad con toda la familia.", tier: 3, point: "celebrar 第一人称复数 celebramos + con toda la familia" },
            { english: "When is your birthday?", chinese: "你的生日是什么时候？", spanish: "¿Cuándo es tu cumpleaños?", tier: 6, point: "疑问词 cuándo + ser 问日期" },
            { english: "How do you celebrate the New Year?", chinese: "你们怎么庆祝新年？", spanish: "¿Cómo celebran ustedes el Año Nuevo?", tier: 6, point: "疑问词 cómo + ustedes（你们）的动词形式 celebran" },
            { english: "We don't celebrate Halloween in my country.", chinese: "我们国家不过万圣节。", spanish: "No celebramos Halloween en mi país.", tier: 7, point: "否定 no celebramos + en mi país 在我们国家" },
            { english: "Last year we celebrated my father's birthday at home.", chinese: "去年我们在家给爸爸过了生日。", spanish: "El año pasado celebramos el cumpleaños de mi padre en casa.", tier: 8, point: "celebramos 现在时与过去时同形，靠 el año pasado 分辨" },
            { english: "My grandfather turned seventy last month.", chinese: "上个月我爷爷七十岁了。", spanish: "Mi abuelo cumplió setenta años el mes pasado.", tier: 8, point: "过去时 cumplió + el mes pasado 上个月" },
            { english: "I gave my mother a bouquet of flowers.", chinese: "我送了我妈妈一束花。", spanish: "Le di un ramo de flores a mi madre.", tier: 10, point: "不规则过去 dar → di；双宾语：le（给她）+ 直接宾语 un ramo" }
        ]
    },
    {
        id: 19,
        title: "第19课：人物与性格",
        summary: "描述人物、比较级、conocerse",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "My sister is taller than me.", chinese: "我姐姐比我高。", spanish: "Mi hermana es más alta que yo.", tier: 2, point: "比较级：más + 形容词 + que（比我高）" },
            { english: "My best friend is very funny.", chinese: "我最好的朋友很有趣。", spanish: "Mi mejor amiga es muy graciosa.", tier: 2, point: "ser + 形容词 graciosa 与阴性名词 amiga 一致" },
            { english: "My grandfather is a very patient person.", chinese: "我爷爷是个很有耐心的人。", spanish: "Mi abuelo es una persona muy paciente.", tier: 2, point: "ser + una persona + 形容词 paciente 耐心" },
            { english: "My cousin talks a lot at dinner.", chinese: "我表哥吃饭时话很多。", spanish: "Mi primo habla mucho en la cena.", tier: 3, point: "hablar 第三人称 habla + mucho 表程度" },
            { english: "Her children study very hard.", chinese: "她的孩子们学习很努力。", spanish: "Sus hijos estudian mucho.", tier: 3, point: "estudiar 第三人称复数 estudian；sus 他们的/她的" },
            { english: "What is your brother like?", chinese: "你哥哥是个什么样的人？", spanish: "¿Cómo es tu hermano?", tier: 6, point: "问性格：¿Cómo es…?（注意和 ¿Cómo está…? 问状态的差别）" },
            { english: "My brother is not very organized.", chinese: "我哥哥不太有条理。", spanish: "Mi hermano no es muy organizado.", tier: 7, point: "否定 + 形容词：no es muy organizado" },
            { english: "Yesterday I met a very interesting person.", chinese: "昨天我认识了一个很有趣的人。", spanish: "Ayer conocí a una persona muy interesante.", tier: 8, point: "conocer 过去 conocí；conocer a + 人（表「认识某人」要加 a）" },
            { english: "We met at a friend's party.", chinese: "我们是在一个朋友的聚会上认识的。", spanish: "Nos conocimos en la fiesta de un amigo.", tier: 9, point: "conocerse 反身过去：nos conocimos（互相认识）" }
        ]
    },
    {
        id: 20,
        title: "第20课：观点与比较",
        summary: "表达观点、creo que、mejor/peor",
        difficulty: "进阶",
        length: "8 句",
        sentences: [
            { english: "This restaurant is better than the one near my house.", chinese: "这家餐厅比我家附近那家好。", spanish: "Este restaurante es mejor que el de mi casa.", tier: 2, point: "mejor que 比较；el de… 指代「那家（餐厅）」" },
            { english: "Spanish food is very healthy.", chinese: "西班牙菜很健康。", spanish: "La comida española es muy sana.", tier: 2, point: "ser + 形容词 sana；comida española 西语形容词后置" },
            { english: "I think this movie is better than the book.", chinese: "我觉得这部电影比书好看。", spanish: "Creo que esta película es mejor que el libro.", tier: 3, point: "表达观点：Creo que + 完整句子" },
            { english: "In my opinion, this book is very boring.", chinese: "在我看来，这本书很无聊。", spanish: "En mi opinión, este libro es muy aburrido.", tier: 3, point: "En mi opinión 开头表观点 + ser 描述" },
            { english: "What do you think of the new movie?", chinese: "你觉得新电影怎么样？", spanish: "¿Qué te parece la película nueva?", tier: 6, point: "问看法：¿Qué te parece…?（parecer 结构，物作主语）" },
            { english: "I don't agree with you.", chinese: "我不同意你的看法。", spanish: "No estoy de acuerdo contigo.", tier: 7, point: "固定搭配 estar de acuerdo 同意 + no 否定 + contigo" },
            { english: "Yesterday I talked about the book with my friend.", chinese: "昨天我和朋友聊了这本书。", spanish: "Ayer hablé del libro con mi amigo.", tier: 8, point: "过去时 hablé + hablar de 谈论（de+el 缩合为 del）" },
            { english: "The train was more comfortable than the bus.", chinese: "火车比大巴舒服。", spanish: "El tren fue más cómodo que el autobús.", tier: 10, point: "ser 过去 fue + 比较级 más cómodo que（过去时里的比较）" }
        ]
    },
    {
        id: 21,
        title: "第21课：计划与安排",
        summary: "未来计划、ir a + 动词原形、querer + 动词原形",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "I organize my week every Sunday night.", chinese: "我每周日晚上安排一周的事。", spanish: "Organizo mi semana cada domingo por la noche.", tier: 3, point: "organizar 第一人称 organizo + cada domingo 每周日" },
            { english: "We prepare dinner together on Fridays.", chinese: "我们周五一起准备晚饭。", spanish: "Preparamos la cena juntos los viernes.", tier: 3, point: "preparar 第一人称复数 preparamos + juntos 一起（阳性复数）" },
            { english: "This year we are going to travel to Spain.", chinese: "今年我们打算去西班牙旅行。", spanish: "Este año vamos a viajar a España.", tier: 4, point: "将来计划：ir a + 动词原形（vamos a viajar）" },
            { english: "I am going to learn to cook this summer.", chinese: "今年夏天我打算学做饭。", spanish: "Este verano voy a aprender a cocinar.", tier: 4, point: "voy a + aprender a + 动词原形（两个 a 结构嵌套）" },
            { english: "My sister wants to visit her friend in Madrid.", chinese: "我妹妹想去马德里看朋友。", spanish: "Mi hermana quiere visitar a su amiga en Madrid.", tier: 4, point: "querer + 动词原形；visitar a + 人" },
            { english: "What are you going to do this weekend?", chinese: "这个周末你打算做什么？", spanish: "¿Qué vas a hacer este fin de semana?", tier: 6, point: "问计划：¿Qué vas a hacer…?（ir a + hacer）" },
            { english: "When are we going to have dinner together?", chinese: "我们什么时候一起吃晚饭？", spanish: "¿Cuándo vamos a cenar juntos?", tier: 6, point: "疑问词 cuándo + vamos a + 动词原形" },
            { english: "Yesterday we talked about our plans for the summer.", chinese: "昨天我们聊了夏天的计划。", spanish: "Ayer hablamos de nuestros planes para el verano.", tier: 8, point: "过去时 hablamos（同形）+ hablar de 谈论；nuestros planes 我们的计划" },
            { english: "She decided to stay home and rest.", chinese: "她决定待在家里休息。", spanish: "Ella decidió quedarse en casa y descansar.", tier: 9, point: "过去时 decidió + 动词原形；quedarse 反身原形" }
        ]
    },
    {
        id: 22,
        title: "第22课：经历·旅行见闻",
        summary: "过去时综合、estuve/viste/vimos 不规则",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "Last month we visited a very old castle.", chinese: "上个月我们参观了一座很古老的城堡。", spanish: "El mes pasado visitamos un castillo muy antiguo.", tier: 8, point: "过去时 visitamos + el mes pasado 上个月" },
            { english: "I walked along the river for two hours.", chinese: "我沿着河边走了两个小时。", spanish: "Caminé por la orilla del río durante dos horas.", tier: 8, point: "过去时 caminé + por 表「沿着」；durante 表时长" },
            { english: "We ate very good tapas in the old quarter.", chinese: "我们在老城区吃了很好吃的塔帕斯。", spanish: "Comimos unas tapas muy buenas en el casco antiguo.", tier: 9, point: "过去时 comimos；tapas 西班牙小吃（复数名词）" },
            { english: "My mother wrote a review of the hotel.", chinese: "我妈妈给酒店写了条评价。", spanish: "Mi madre escribió una reseña del hotel.", tier: 9, point: "过去时 escribió + una reseña 一条评价" },
            { english: "We slept very well in the new hotel.", chinese: "我们在新酒店睡得很好。", spanish: "Dormimos muy bien en el hotel nuevo.", tier: 9, point: "过去时 dormimos（同形）+ muy bien" },
            { english: "Did you eat paella when you were in Spain?", chinese: "你在西班牙的时候吃过海鲜饭吗？", spanish: "¿Comiste paella cuando estuviste en España?", tier: 10, point: "不规则过去 estar → estuviste；cuando 引导时间从句" },
            { english: "We saw a very good play in Barcelona.", chinese: "我们在巴塞罗那看了一场很棒的戏剧。", spanish: "Vimos una obra de teatro muy buena en Barcelona.", tier: 10, point: "不规则过去 ver → vimos" },
            { english: "It was a very interesting trip.", chinese: "那是一次非常有趣的旅行。", spanish: "Fue un viaje muy interesante.", tier: 10, point: "ser 过去 fue 表「那是」" },
            { english: "They came to the airport to say goodbye.", chinese: "他们来机场送别。", spanish: "Vinieron al aeropuerto para despedirse.", tier: 10, point: "不规则过去 venir → vinieron + para + 动词原形表目的" }
        ]
    },
    {
        id: 23,
        title: "第23课：叙事与连词·生活小事",
        summary: "叙事顺序 primero/luego、连词 y/pero/porque",
        difficulty: "进阶",
        length: "9 句",
        sentences: [
            { english: "I always have breakfast with my family.", chinese: "我总和家人一起吃早饭。", spanish: "Siempre desayuno con mi familia.", tier: 3, point: "desayunar 第一人称 desayuno；siempre 频率副词" },
            { english: "My father reads the newspaper every morning.", chinese: "我爸爸每天早上看报纸。", spanish: "Mi padre lee el periódico todas las mañanas.", tier: 3, point: "leer 第三人称 lee + todas las mañanas 每天早上" },
            { english: "I don't like getting up early, but I do it every day.", chinese: "我不喜欢早起，但每天都这样做。", spanish: "No me gusta madrugar, pero lo hago todos los días.", tier: 7, point: "no me gusta + 动词原形；pero 转折；lo hago 指代前面的动作" },
            { english: "Yesterday we bought bread and cheese at the market.", chinese: "昨天我们在市场买了面包和奶酪。", spanish: "Ayer compramos pan y queso en el mercado.", tier: 8, point: "过去时 compramos + y 并列名词" },
            { english: "First I studied, and then I called my friend.", chinese: "我先学习，然后给朋友打了电话。", spanish: "Primero estudié y luego llamé a mi amigo.", tier: 8, point: "叙事顺序 primero…luego…；两个 -ar 过去式并列" },
            { english: "We ate a lot and slept very late.", chinese: "我们吃了很多，而且睡得很晚。", spanish: "Comimos mucho y dormimos muy tarde.", tier: 9, point: "两个 -er/-ir 过去式 comimos / dormimos 并列" },
            { english: "In the end, everything went very well.", chinese: "最后一切都很顺利。", spanish: "Al final, todo salió muy bien.", tier: 9, point: "al final 最后；salir 过去 salió + muy bien" },
            { english: "First we had breakfast, then we went to the beach.", chinese: "我们先吃了早饭，然后去了海滩。", spanish: "Primero desayunamos, luego fuimos a la playa.", tier: 10, point: "叙事顺序 + 不规则过去 fuimos" },
            { english: "It was a very good day and we came home happy.", chinese: "那是很好的一天，我们开心地回了家。", spanish: "Fue un día muy bueno y volvimos a casa contentos.", tier: 10, point: "fue 过去 + volver 过去 volvimos；contentos 与主语我们复数一致" }
        ]
    },
    {
        id: 24,
        group: 'main',
        title: "教材第1课：问候与自我介绍",
        summary: "名词的性、主格人称代词、系动词 ser 的现在时",
        difficulty: "入门",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "西语名词有阴阳性",
                    explain: "西班牙语的名词分阳性和阴性：以 -o 结尾的多是阳性，和 el（定冠词）搭配；以 -a 结尾的多是阴性，和 la 搭配。人的职业、国籍等词也分男女两套形式（如 profesor / profesora）。",
                    examples: [
                        { es: "El libro es interesante.", zh: "书很有趣。（阳性名词 libro）" },
                        { es: "La casa es grande.", zh: "房子很大。（阴性名词 casa）" }
                    ]
                },
                {
                    title: "主格人称代词",
                    explain: "主语代词：yo（我）、tú（你）、él/ella（他/她）、usted（您）、nosotros/nosotras（我们）、ellos/ellas（他们/她们）、ustedes（你们/诸位）。西语动词词尾本身能表明主语，所以代词常常省略，只在强调或避免混淆时才出现。",
                    examples: [
                        { es: "Yo soy estudiante.", zh: "我是学生。" },
                        { es: "Ella es profesora.", zh: "她是老师。" }
                    ]
                },
                {
                    title: "系动词 SER 的现在时变位",
                    explain: "ser（是）是不规则动词：soy（我是）、eres（你是）、es（他/她/您是）、somos（我们是）、sois、son（他们是）。它用来表示身份、国籍、职业等本质特征。",
                    examples: [
                        { es: "Somos buenos amigos.", zh: "我们是好朋友。" },
                        { es: "¿Eres español?", zh: "你是西班牙人吗？" }
                    ]
                }
            ],
            vocab: [
                { es: "hola", pos: "感叹词", zh: "你好" },
                { es: "buenos días", pos: "短语", zh: "早上好" },
                { es: "llamarse", pos: "代词式动词", zh: "叫做（名字）" },
                { es: "ser", pos: "系动词", zh: "是" },
                { es: "yo / tú / él / ella", pos: "代词", zh: "我 / 你 / 他 / 她" },
                { es: "nosotros / ellos", pos: "代词", zh: "我们 / 他们" },
                { es: "amigo, amiga", pos: "名词(阳/阴)", zh: "朋友" },
                { es: "estudiante", pos: "名词(通性)", zh: "学生" },
                { es: "profesor, profesora", pos: "名词(阳/阴)", zh: "老师" },
                { es: "español, española", pos: "名词/形容词", zh: "西班牙人；西班牙的" },
                { es: "chino, china", pos: "名词/形容词", zh: "中国人；中国的" },
                { es: "de", pos: "介词", zh: "的；来自（表所属、来源）" },
                { es: "mucho gusto", pos: "短语", zh: "很高兴认识你" },
                { es: "encantado, encantada", pos: "形容词", zh: "很高兴（初次见面用语）" }
            ]
        },
        sentences: [
            { english: "Good morning, I am Li Ming.", chinese: "早上好，我是李明。", spanish: "Buenos días, yo soy Li Ming.", tier: 1, point: "问候 + yo soy 自我介绍" },
            { english: "Hello, my name is Li Ming.", chinese: "你好，我叫李明。", spanish: "Hola, me llamo Li Ming.", tier: 5, point: "代词式动词 llamarse：me llamo + 名字" },
            { english: "I am a Chinese student.", chinese: "我是中国学生。", spanish: "Soy un estudiante chino.", tier: 2, point: "soy + 职业/身份；形容词 chino 与名词一致" },
            { english: "She is our Spanish teacher.", chinese: "她是我们的西语老师。", spanish: "Ella es nuestra profesora de español.", tier: 2, point: "es + 职业；nuestra 与 profesora 阴性一致" },
            { english: "We are very good friends.", chinese: "我们是很好的朋友。", spanish: "Somos muy buenos amigos.", tier: 2, point: "somos + 复数形容词 buenos amigos" },
            { english: "Are you a student?", chinese: "你是学生吗？", spanish: "¿Eres estudiante?", tier: 6, point: "是否疑问句：¿Eres…?（不用加疑问词）" },
            { english: "What is your name?", chinese: "您叫什么名字？", spanish: "¿Cómo se llama usted?", tier: 6, point: "尊称疑问：¿Cómo se llama usted?" },
            { english: "Where are you from?", chinese: "您是哪个国家的人？", spanish: "¿De qué país es usted?", tier: 6, point: "疑问词 qué + 尊称 es usted" },
            { english: "I am not a teacher, I am a student.", chinese: "我不是老师，我是学生。", spanish: "No soy profesor, soy estudiante.", tier: 7, point: "否定 no soy + 对比句" },
            { english: "She is not Spanish, she is Mexican.", chinese: "她不是西班牙人，是墨西哥人。", spanish: "Ella no es española, es mexicana.", tier: 7, point: "否定第三人称 no es + 国籍形容词阴性" },
            { english: "The book is on the table.", chinese: "书在桌子上。", spanish: "El libro está en la mesa.", tier: 2, point: "定冠词 el + estar 表位置" },
            { english: "My mother is a doctor.", chinese: "我妈妈是医生。", spanish: "Mi madre es médica.", tier: 2, point: "物主 mi + es + 职业（阴性 médica）" },
            { english: "This is my friend Susana.", chinese: "这是我的朋友苏萨娜。", spanish: "Esta es mi amiga Susana.", tier: 2, point: "Esta es… 介绍他人；amiga 阴性" },
            { english: "Nice to meet you.", chinese: "很高兴认识你们。", spanish: "Encantado de conoceros.", tier: 1, point: "初次见面固定表达" },
            { english: "Are you our new teacher?", chinese: "您是我们的新老师吗？", spanish: "¿Es usted nuestro nuevo profesor?", tier: 6, point: "尊称疑问 + nuestro 阳性单数" },
            { english: "Who is that girl?", chinese: "那个女孩是谁？", spanish: "¿Quién es esa chica?", tier: 6, point: "疑问词 quién + 指示形容词 esa" }
        ]
    },
    {
        id: 25,
        group: 'main',
        title: "教材第2课：日常活动与 -ar 动词",
        summary: "第一变位规则动词、estar 与 tener 的变位、定冠词",
        difficulty: "入门",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "第一变位规则动词（-ar）的现在时",
                    explain: "以 -ar 结尾的动词叫第一变位动词，去掉 -ar 加词尾：-o、-as、-a、-amos、-áis、-an。以 hablar（说话）为例：hablo、hablas、habla、hablamos、habláis、hablan。",
                    examples: [
                        { es: "Estudio español en la universidad.", zh: "我在大学学西语。（estudiar → estudio）" },
                        { es: "Ellos trabajan en una oficina.", zh: "他们在一间办公室工作。（trabajan）" }
                    ]
                },
                {
                    title: "不规则动词 ESTAR 的现在时",
                    explain: "estar（在；处于某种状态）是不规则动词：estoy、estás、está、estamos、estáis、están。它表示位置和暂时状态，与表示本质的 ser 相对。",
                    examples: [
                        { es: "Estamos en casa.", zh: "我们在家。" },
                        { es: "¿Dónde está la universidad?", zh: "大学在哪里？" }
                    ]
                },
                {
                    title: "不规则动词 TENER 的现在时",
                    explain: "tener（有）变位：tengo、tienes、tiene、tenemos、tenéis、tienen。注意第一人称 tengo 不规律。西语用 tener…años 表示年龄（「有…岁」）。",
                    examples: [
                        { es: "Tengo dos hermanas.", zh: "我有两个妹妹。" },
                        { es: "Mi hermano tiene veinte años.", zh: "我哥哥二十岁。" }
                    ]
                },
                {
                    title: "定冠词 el / la / los / las",
                    explain: "定冠词相当于英语的 the：阳性单数 el、阴性单数 la、阳性复数 los、阴性复数 las。表示已知的或特指的人或事物。",
                    examples: [
                        { es: "El profesor es de Madrid.", zh: "这位老师来自马德里。" },
                        { es: "Las clases empiezan a las ocho.", zh: "课八点开始。" }
                    ]
                }
            ],
            vocab: [
                { es: "estudiar", pos: "动词", zh: "学习" },
                { es: "trabajar", pos: "动词", zh: "工作" },
                { es: "hablar", pos: "动词", zh: "说话；讲（语言）" },
                { es: "estar", pos: "系动词", zh: "在；处于（状态/位置）" },
                { es: "tener", pos: "动词", zh: "有" },
                { es: "universidad", pos: "名词(阴)", zh: "大学" },
                { es: "casa", pos: "名词(阴)", zh: "房子；家" },
                { es: "clase", pos: "名词(阴)", zh: "课；课堂" },
                { es: "oficina", pos: "名词(阴)", zh: "办公室" },
                { es: "ahora", pos: "副词", zh: "现在" },
                { es: "en", pos: "介词", zh: "在（地点/时间）" },
                { es: "el / la / los / las", pos: "定冠词", zh: "这个/这些（特指）" },
                { es: "cuántos, cuántas", pos: "疑问词", zh: "多少" },
                { es: "muy", pos: "副词", zh: "很，非常" }
            ]
        },
        sentences: [
            { english: "I study Spanish at the university.", chinese: "我在大学学西语。", spanish: "Estudio español en la universidad.", tier: 3, point: "-ar 动词第一人称：estudio" },
            { english: "My brother works in a bank.", chinese: "我哥哥在一家银行工作。", spanish: "Mi hermano trabaja en un banco.", tier: 3, point: "-ar 动词第三人称：trabaja + en 地点" },
            { english: "They speak Spanish and Chinese.", chinese: "他们说西语和中文。", spanish: "Ellos hablan español y chino.", tier: 3, point: "-ar 动词第三人称复数：hablan" },
            { english: "Where is the university?", chinese: "大学在哪里？", spanish: "¿Dónde está la universidad?", tier: 6, point: "estar 表位置 + 疑问词 dónde" },
            { english: "We are at home now.", chinese: "我们现在在家。", spanish: "Ahora estamos en casa.", tier: 3, point: "estar 第一人称复数：estamos" },
            { english: "How many sisters do you have?", chinese: "你有几个妹妹？", spanish: "¿Cuántas hermanas tienes?", tier: 6, point: "cuántas + 阴性复数名词 + tienes" },
            { english: "My mother has forty years.", chinese: "我妈妈四十岁。", spanish: "Mi madre tiene cuarenta años.", tier: 4, point: "tener 第三人称 tiene + 年龄表达" },
            { english: "The classes start at eight.", chinese: "课八点开始。", spanish: "Las clases empiezan a las ocho.", tier: 3, point: "定冠词复数 las + empezar 第三人称复数" },
            { english: "I do not have time now.", chinese: "我现在没有时间。", spanish: "No tengo tiempo ahora.", tier: 7, point: "否定 no tengo + 时间名词" },
            { english: "We do not work on Sundays.", chinese: "我们周日不工作。", spanish: "No trabajamos los domingos.", tier: 7, point: "否定第一人称复数 no trabajamos" },
            { english: "Are you at the office?", chinese: "你在办公室吗？", spanish: "¿Estás en la oficina?", tier: 6, point: "是否疑问 ¿Estás…?" },
            { english: "The teacher is from Madrid.", chinese: "这位老师来自马德里。", spanish: "El profesor es de Madrid.", tier: 2, point: "ser + de 表来源" },
            { english: "I have two sisters and one brother.", chinese: "我有两个妹妹和一个哥哥。", spanish: "Tengo dos hermanas y un hermano.", tier: 4, point: "tengo + 数字 + 名词；y 并列" },
            { english: "You speak Spanish very well.", chinese: "你西语说得很好。", spanish: "Hablas español muy bien.", tier: 3, point: "-ar 动词第二人称：hablas" },
            { english: "The university is in the center of the city.", chinese: "大学在市中心。", spanish: "La universidad está en el centro de la ciudad.", tier: 2, point: "estar 位置 + en el centro" },
            { english: "She studies and works in Barcelona.", chinese: "她在巴塞罗那学习和工作。", spanish: "Ella estudia y trabaja en Barcelona.", tier: 3, point: "两个 -ar 动词并列第三人称" }
        ]
    },
    {
        id: 26,
        group: 'main',
        title: "教材第3课：家庭与物主形容词",
        summary: "介词 de/en、形容词性数一致、物主形容词、动词 ir",
        difficulty: "入门",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "介词 DE 和 EN",
                    explain: "de 表示所属和来源（相当于「的/来自」），en 表示地点和时间（「在…里/在…时」）。de 和 el 连用时缩合为 del（de la 不缩合）。",
                    examples: [
                        { es: "La casa de mis abuelos está en el campo.", zh: "我爷爷奶奶的房子在乡下。" },
                        { es: "Trabajo en una escuela del centro.", zh: "我在市中心的一所学校工作。（de+el=del）" }
                    ]
                },
                {
                    title: "形容词的性数与名词一致",
                    explain: "形容词要跟着名词变：名词阴性时形容词变 -a，名词复数时形容词加 -s。如 un libro nuevo / una casa nueva / unos libros nuevos。",
                    examples: [
                        { es: "Mi hermana tiene una mochila roja.", zh: "我妹妹有一个红色的书包。" },
                        { es: "Los estudiantes son muy simpáticos.", zh: "学生们很热情。" }
                    ]
                },
                {
                    title: "非重读物主形容词",
                    explain: "mi（我的）、tu（你的）、su（他/她/您的）、nuestro/nuestra（我们的）、vuestro（你们的）放在名词前，与名词性数一致。注意 su 可以指他的、她的、您的、他们的，靠语境分辨。",
                    examples: [
                        { es: "Nuestra casa es pequeña pero bonita.", zh: "我们的房子小但漂亮。" },
                        { es: "Sus hijos viven en México.", zh: "他/她的孩子们住在墨西哥。" }
                    ]
                },
                {
                    title: "不规则动词 IR 的现在时",
                    explain: "ir（去）变位：voy、vas、va、vamos、vais、van。去某地用 ir a + 地点；a 和 el 缩合为 al。",
                    examples: [
                        { es: "Vamos a la universidad todos los días.", zh: "我们每天去大学。" },
                        { es: "Mi padre va al banco por la mañana.", zh: "我爸爸早上去银行。（a+el=al）" }
                    ]
                }
            ],
            vocab: [
                { es: "familia", pos: "名词(阴)", zh: "家庭" },
                { es: "padre / madre", pos: "名词", zh: "父亲 / 母亲" },
                { es: "hermano, hermana", pos: "名词", zh: "哥哥（弟弟）/ 姐姐（妹妹）" },
                { es: "abuelo, abuela", pos: "名词", zh: "爷爷（外公）/ 奶奶（外婆）" },
                { es: "mi / tu / su", pos: "物主形容词", zh: "我的 / 你的 / 他（她、您）的" },
                { es: "nuestro, nuestra", pos: "物主形容词", zh: "我们的" },
                { es: "ir", pos: "动词", zh: "去" },
                { es: "a", pos: "介词", zh: "到，向（方向/目的）" },
                { es: "grande", pos: "形容词", zh: "大的" },
                { es: "pequeño, pequeña", pos: "形容词", zh: "小的" },
                { es: "bonito, bonita", pos: "形容词", zh: "漂亮的" },
                { es: "simpático, simpática", pos: "形容词", zh: "热情的，讨人喜欢的" },
                { es: "hijo, hija", pos: "名词", zh: "儿子 / 女儿" },
                { es: "vivir", pos: "动词", zh: "居住；生活" }
            ]
        },
        sentences: [
            { english: "My grandparents' house is in the countryside.", chinese: "我爷爷奶奶的房子在乡下。", spanish: "La casa de mis abuelos está en el campo.", tier: 2, point: "de 表所属 + estar 表位置" },
            { english: "I work in a school in the city center.", chinese: "我在市中心的一所学校工作。", spanish: "Trabajo en una escuela del centro.", tier: 3, point: "en 地点 + de+el 缩合 del" },
            { english: "My sister has a red backpack.", chinese: "我妹妹有一个红色的书包。", spanish: "Mi hermana tiene una mochila roja.", tier: 4, point: "形容词 roja 与阴性名词 mochila 一致" },
            { english: "The students are very nice.", chinese: "学生们很热情。", spanish: "Los estudiantes son muy simpáticos.", tier: 2, point: "复数形容词 simpáticos 与 los estudiantes 一致" },
            { english: "Our house is small but pretty.", chinese: "我们的房子小但漂亮。", spanish: "Nuestra casa es pequeña pero bonita.", tier: 2, point: "nuestra + 阴性名词；pero 转折" },
            { english: "His children live in Mexico.", chinese: "他的孩子们住在墨西哥。", spanish: "Sus hijos viven en México.", tier: 3, point: "sus 第三人称物主 + -ir 动词 viven" },
            { english: "We go to the university every day.", chinese: "我们每天去大学。", spanish: "Vamos a la universidad todos los días.", tier: 4, point: "ir 第一人称复数 vamos a + 地点" },
            { english: "My father goes to the bank in the morning.", chinese: "我爸爸早上去银行。", spanish: "Mi padre va al banco por la mañana.", tier: 4, point: "ir 第三人称 va + al（a+el 缩合）" },
            { english: "Where do your parents live?", chinese: "你的父母住在哪里？", spanish: "¿Dónde viven tus padres?", tier: 6, point: "疑问词 dónde + viven" },
            { english: "Do you go to class today?", chinese: "你今天去上课吗？", spanish: "¿Vas a clase hoy?", tier: 6, point: "是否疑问 ¿Vas a…?" },
            { english: "My grandmother is not very old.", chinese: "我奶奶年纪不太大。", spanish: "Mi abuela no es muy mayor.", tier: 7, point: "否定 no es + 形容词 mayor" },
            { english: "We do not live in the city.", chinese: "我们不住在城里。", spanish: "No vivimos en la ciudad.", tier: 7, point: "否定 no vivimos + en la ciudad" },
            { english: "Her daughter is a very pretty girl.", chinese: "她的女儿是个很漂亮的女孩。", spanish: "Su hija es una chica muy bonita.", tier: 2, point: "su + 阴性 hija；形容词 bonita" },
            { english: "My brother's friends are from Chile.", chinese: "我哥哥的朋友们来自智利。", spanish: "Los amigos de mi hermano son de Chile.", tier: 2, point: "de 表所属 + son de 表来源" },
            { english: "This afternoon I go to my aunt's house.", chinese: "今天下午我去我姑姑家。", spanish: "Esta tarde voy a la casa de mi tía.", tier: 4, point: "voy a + 地点；de 所属" },
            { english: "His wife is a very kind person.", chinese: "他的妻子是个很和善的人。", spanish: "Su esposa es una persona muy amable.", tier: 2, point: "su + esposa；una persona + 形容词" }
        ]
    },
    {
        id: 27,
        group: 'main',
        title: "教材第4课：日常起居与代词式动词",
        summary: "不定冠词、指示形容词、代词式动词、词干变化动词",
        difficulty: "入门-进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "不定冠词 un / una / unos / unas",
                    explain: "不定冠词相当于「一个/一些」：un（阳性单数）、una（阴性单数）、unos（阳性复数，一些）、unas（阴性复数，一些）。",
                    examples: [
                        { es: "Necesito un diccionario nuevo.", zh: "我需要一本新词典。" },
                        { es: "Hay unas flores en la mesa.", zh: "桌上有一些花。" }
                    ]
                },
                {
                    title: "指示形容词 este / ese / aquel",
                    explain: "este（这个，近处）、ese（那个，稍远）、aquel（那个，更远）要与名词性数一致：este libro、esta casa、estos libros、estas casas。",
                    examples: [
                        { es: "Este libro es muy interesante.", zh: "这本书很有趣。" },
                        { es: "Esa chica es mi compañera de clase.", zh: "那个女孩是我的同班同学。" }
                    ]
                },
                {
                    title: "代词式动词（反身动词）",
                    explain: "西语有一类动词带反身代词 me/te/se/nos/os/se，表示动作回到自己身上，如 levantarse（起床）：me levanto、te levantas、se levanta…",
                    examples: [
                        { es: "Me levanto a las seis y media.", zh: "我六点半起床。" },
                        { es: "Mis padres se acuestan temprano.", zh: "我父母睡得早。" }
                    ]
                },
                {
                    title: "常见词干变化动词",
                    explain: "一部分动词变位时词干元音变化：o→ue（acostarse、volver）、e→ie（comenzar、venir）。另有一些第一人称不规则的：hago（hacer）、salgo（salir）、vengo（venir）。",
                    examples: [
                        { es: "Vuelvo a casa a las seis.", zh: "我六点回家。（volver → vuelvo）" },
                        { es: "Hago los deberes por la tarde.", zh: "我下午做作业。（hacer → hago）" }
                    ]
                }
            ],
            vocab: [
                { es: "un / una / unos / unas", pos: "不定冠词", zh: "一个；一些" },
                { es: "este, esta / ese, esa", pos: "指示形容词", zh: "这个 / 那个" },
                { es: "levantarse", pos: "代词式动词", zh: "起床" },
                { es: "acostarse", pos: "代词式动词", zh: "上床睡觉" },
                { es: "hacer", pos: "动词", zh: "做" },
                { es: "salir", pos: "动词", zh: "出去；出发" },
                { es: "venir", pos: "动词", zh: "来" },
                { es: "volver", pos: "动词", zh: "回来；再次" },
                { es: "temprano", pos: "副词", zh: "早" },
                { es: "tarde", pos: "副词", zh: "晚" },
                { es: "por la mañana / por la tarde", pos: "短语", zh: "在上午 / 在下午" },
                { es: "deberes", pos: "名词(复)", zh: "作业" },
                { es: "compañero, compañera", pos: "名词", zh: "同伴；同学" },
                { es: "necesitar", pos: "动词", zh: "需要" }
            ]
        },
        sentences: [
            { english: "I need a new dictionary.", chinese: "我需要一本新词典。", spanish: "Necesito un diccionario nuevo.", tier: 3, point: "不定冠词 un + 阳性名词" },
            { english: "There are some flowers on the table.", chinese: "桌上有一些花。", spanish: "Hay unas flores en la mesa.", tier: 3, point: "hay 存在句 + unas 阴性复数" },
            { english: "This book is very interesting.", chinese: "这本书很有趣。", spanish: "Este libro es muy interesante.", tier: 2, point: "指示形容词 este + 阳性名词" },
            { english: "That girl is my classmate.", chinese: "那个女孩是我的同班同学。", spanish: "Esa chica es mi compañera de clase.", tier: 2, point: "指示形容词 esa + 阴性名词" },
            { english: "I get up at half past six.", chinese: "我六点半起床。", spanish: "Me levanto a las seis y media.", tier: 5, point: "代词式动词 levantarse：me levanto" },
            { english: "My parents go to bed early.", chinese: "我父母睡得早。", spanish: "Mis padres se acuestan temprano.", tier: 5, point: "acostarse 第三人称复数 se acuestan（o→ue）" },
            { english: "I come back home at six.", chinese: "我六点回家。", spanish: "Vuelvo a casa a las seis.", tier: 3, point: "词干变化 volver → vuelvo（o→ue）" },
            { english: "I do my homework in the afternoon.", chinese: "我下午做作业。", spanish: "Hago los deberes por la tarde.", tier: 4, point: "不规则第一人称 hacer → hago" },
            { english: "What time do you get up?", chinese: "你几点起床？", spanish: "¿A qué hora te levantas?", tier: 6, point: "问时刻 + 代词式动词 te levantas" },
            { english: "When does the class start?", chinese: "课什么时候开始？", spanish: "¿Cuándo comienza la clase?", tier: 6, point: "comenzar 词干变化 e→ie：comienza" },
            { english: "I do not go out at night.", chinese: "我晚上不出去。", spanish: "No salgo por la noche.", tier: 7, point: "否定 + 不规则第一人称 salgo" },
            { english: "They do not come today.", chinese: "他们今天不来。", spanish: "Ellos no vienen hoy.", tier: 7, point: "否定 + venir 词干变化 vienen" },
            { english: "What a beautiful city!", chinese: "这座城市真漂亮！", spanish: "¡Qué bonita es esta ciudad!", tier: 2, point: "感叹句 ¡Qué + 形容词…!" },
            { english: "I come back from work very late.", chinese: "我下班回来得很晚。", spanish: "Vuelvo del trabajo muy tarde.", tier: 3, point: "volver 第一人称 + del（de+el）" },
            { english: "She does her homework at night.", chinese: "她晚上做作业。", spanish: "Ella hace los deberes por la noche.", tier: 4, point: "hacer 第三人称 hace" },
            { english: "These students come from Mexico.", chinese: "这些学生来自墨西哥。", spanish: "Estos estudiantes vienen de México.", tier: 3, point: "estos 阳性复数 + venir de 来自" }
        ]
    },
    {
        id: 28,
        group: 'main',
        title: "教材第5课：邀请与打算",
        summary: "宾格代词、ir a + 原形、tener que + 原形、hay 无人称句",
        difficulty: "入门-进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "直接宾语与宾格人称代词",
                    explain: "宾格代词代替直接宾语：me（我）、te（你）、lo（他/它）、la（她/它）、nos（我们）、los/las（他们）。放在变位动词前面：Lo veo.（我看见他）。",
                    examples: [
                        { es: "Te invito a mi fiesta de cumpleaños.", zh: "我邀请你来我的生日聚会。" },
                        { es: "La veo todos los días en clase.", zh: "我每天上课都能见到她。" }
                    ]
                },
                {
                    title: "IR A + 动词原形（打算做）",
                    explain: "ir a + 动词原形表示近期打算：「我打算/就要做某事」。变位的只有 ir：Voy a estudiar.（我打算学习）、Vamos a viajar.（我们打算旅行）。",
                    examples: [
                        { es: "Voy a comprar un regalo para mi madre.", zh: "我打算给妈妈买一件礼物。" },
                        { es: "¿Qué vas a hacer este fin de semana?", zh: "这个周末你打算做什么？" }
                    ]
                },
                {
                    title: "TENER QUE + 动词原形（必须做）",
                    explain: "tener que + 动词原形表示「必须、不得不」：Tengo que trabajar.（我得工作）。和 ir a（打算）不同，它强调义务。",
                    examples: [
                        { es: "Tengo que estudiar para el examen.", zh: "我得为考试学习。" },
                        { es: "Tienes que descansar más.", zh: "你应该多休息。" }
                    ]
                },
                {
                    title: "无人称动词 HAY",
                    explain: "hay 表示「有（某地存在某物）」，只有这一种形式，主语不明确：Hay una fiesta en mi casa.（我家有个聚会）。问句用 ¿Hay…?，否定用 No hay。",
                    examples: [
                        { es: "Hay una fiesta en mi casa el sábado.", zh: "周六我家有个聚会。" },
                        { es: "No hay clases hoy.", zh: "今天没有课。" }
                    ]
                }
            ],
            vocab: [
                { es: "invitar", pos: "动词", zh: "邀请" },
                { es: "hay", pos: "无人称动词", zh: "有（存在）" },
                { es: "ir a + inf.", pos: "动词短语", zh: "打算做…" },
                { es: "tener que + inf.", pos: "动词短语", zh: "必须做…" },
                { es: "lo / la / los / las", pos: "宾格代词", zh: "他（它）/ 她（它）/ 他们（它们）" },
                { es: "fiesta", pos: "名词(阴)", zh: "聚会，派对" },
                { es: "regalo", pos: "名词(阳)", zh: "礼物" },
                { es: "examen", pos: "名词(阳)", zh: "考试" },
                { es: "para", pos: "介词", zh: "为了；给（表目的/对象）" },
                { es: "por", pos: "介词", zh: "因为；通过（表原因/方式）" },
                { es: "con", pos: "介词", zh: "和…一起；用" },
                { es: "once…veinte", pos: "数词", zh: "十一…二十" },
                { es: "felicitar", pos: "动词", zh: "祝贺" },
                { es: "descansar", pos: "动词", zh: "休息" }
            ]
        },
        sentences: [
            { english: "I invite you to my birthday party.", chinese: "我邀请你来我的生日聚会。", spanish: "Te invito a mi fiesta de cumpleaños.", tier: 3, point: "宾格代词 te 前置 + invitar a" },
            { english: "I see her every day in class.", chinese: "我每天上课都能见到她。", spanish: "La veo todos los días en clase.", tier: 3, point: "宾格代词 la 放在动词前" },
            { english: "I am going to buy a present for my mother.", chinese: "我打算给妈妈买一件礼物。", spanish: "Voy a comprar un regalo para mi madre.", tier: 4, point: "ir a + 原形；para 表对象" },
            { english: "What are you going to do this afternoon?", chinese: "今天下午你打算做什么？", spanish: "¿Qué vas a hacer esta tarde?", tier: 6, point: "问打算：¿Qué vas a hacer…?" },
            { english: "I have to study for the exam.", chinese: "我得为考试学习。", spanish: "Tengo que estudiar para el examen.", tier: 4, point: "tener que + 原形；para 表目的" },
            { english: "You have to rest more.", chinese: "你应该多休息。", spanish: "Tienes que descansar más.", tier: 4, point: "tienes que + 原形" },
            { english: "There is a party at my house on Saturday.", chinese: "周六我家有个聚会。", spanish: "Hay una fiesta en mi casa el sábado.", tier: 3, point: "hay 存在句 + 时间" },
            { english: "There are no classes today.", chinese: "今天没有课。", spanish: "No hay clases hoy.", tier: 7, point: "否定 no hay + 复数名词" },
            { english: "Is there a bank near here?", chinese: "这附近有银行吗？", spanish: "¿Hay un banco por aquí?", tier: 6, point: "疑问 ¿Hay…? + por aquí" },
            { english: "We are going to travel in the summer.", chinese: "我们打算夏天去旅行。", spanish: "Vamos a viajar en verano.", tier: 4, point: "vamos a + 原形；en verano" },
            { english: "I do not have to work tomorrow.", chinese: "我明天不用上班。", spanish: "No tengo que trabajar mañana.", tier: 7, point: "否定 no tengo que + 原形" },
            { english: "Do you know him?", chinese: "你认识他吗？", spanish: "¿Lo conoces?", tier: 6, point: "宾格代词 lo + 疑问" },
            { english: "The present is for you.", chinese: "这件礼物是给你的。", spanish: "El regalo es para ti.", tier: 2, point: "para + 夺格代词 ti（你）" },
            { english: "Congratulations on your birthday!", chinese: "祝你生日快乐！", spanish: "¡Felicidades por tu cumpleaños!", tier: 1, point: "祝贺固定表达 + por 表原因" },
            { english: "My sister wants to invite her friends.", chinese: "我妹妹想邀请她的朋友们。", spanish: "Mi hermana quiere invitar a sus amigas.", tier: 4, point: "querer + 原形；sus amigas 阴性复数" },
            { english: "We invite them to dinner.", chinese: "我们请他们吃晚饭。", spanish: "Los invitamos a cenar.", tier: 3, point: "宾格代词 los 前置 + invitar a + 原形" }
        ]
    },
    {
        id: 29,
        group: 'main',
        title: "教材第6课：喜好与建议",
        summary: "第二变位规则动词、gustar 结构、词干变化动词",
        difficulty: "入门-进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "第二变位规则动词（-er）的现在时",
                    explain: "以 -er 结尾的动词变位：-o、-es、-e、-emos、-éis、-en。以 comer（吃）为例：como、comes、come、comemos、coméis、comen。",
                    examples: [
                        { es: "Comemos en la universidad al mediodía.", zh: "我们中午在大学吃饭。" },
                        { es: "Mi hermana bebe mucho té.", zh: "我妹妹喝很多茶。" }
                    ]
                },
                {
                    title: "GUSTAR 的特殊结构",
                    explain: "gustar（使喜欢）和汉语习惯不同：喜欢的东西做主语，人做间接宾语。me gusta + 单数/动词原形，me gustan + 复数。我喜欢音乐 = Me gusta la música.（直译：音乐使我喜欢）。",
                    examples: [
                        { es: "Me gusta leer por la noche.", zh: "我喜欢晚上读书。" },
                        { es: "¿Te gustan las películas españolas?", zh: "你喜欢西班牙电影吗？" }
                    ]
                },
                {
                    title: "词干变化动词：e→ie 和 o→ue",
                    explain: "一些动词变位时词干元音变化（nosotros/vosotros 不变）：cerrar（关）→ cierro；empezar（开始）→ empiezo；querer（想要）→ quiero；poder（能）→ puedo；pedir（请求）→ pido。",
                    examples: [
                        { es: "La biblioteca cierra a las nueve.", zh: "图书馆九点关门。" },
                        { es: "¿Puedes ayudarme con los deberes?", zh: "你能帮我做作业吗？" }
                    ]
                },
                {
                    title: "RECOMENDAR 与提建议",
                    explain: "建议对方做某事，常用：Te recomiendo + 名词/原形（我推荐你…）、Puedes + 原形（你可以…）、¿Por qué no + 原形?（为什么不…？）。",
                    examples: [
                        { es: "Te recomiendo este restaurante chino.", zh: "我推荐你这家中国餐厅。" },
                        { es: "¿Por qué no comemos en casa hoy?", zh: "我们今天为什么不在家吃？" }
                    ]
                }
            ],
            vocab: [
                { es: "comer", pos: "动词", zh: "吃" },
                { es: "beber", pos: "动词", zh: "喝" },
                { es: "leer", pos: "动词", zh: "读，看书" },
                { es: "gustar", pos: "动词", zh: "使喜欢（Me gusta… 我喜欢…）" },
                { es: "cerrar", pos: "动词", zh: "关，关闭" },
                { es: "empezar", pos: "动词", zh: "开始" },
                { es: "querer", pos: "动词", zh: "想要" },
                { es: "poder", pos: "动词", zh: "能，可以" },
                { es: "pedir", pos: "动词", zh: "请求；点（餐）" },
                { es: "recomendar", pos: "动词", zh: "推荐" },
                { es: "biblioteca", pos: "名词(阴)", zh: "图书馆" },
                { es: "música", pos: "名词(阴)", zh: "音乐" },
                { es: "película", pos: "名词(阴)", zh: "电影" },
                { es: "por qué", pos: "疑问词", zh: "为什么" }
            ]
        },
        sentences: [
            { english: "We eat at the university at noon.", chinese: "我们中午在大学吃饭。", spanish: "Comemos en la universidad al mediodía.", tier: 3, point: "-er 动词第一人称复数：comemos" },
            { english: "My sister drinks a lot of tea.", chinese: "我妹妹喝很多茶。", spanish: "Mi hermana bebe mucho té.", tier: 3, point: "-er 动词第三人称：bebe" },
            { english: "I like to read at night.", chinese: "我喜欢晚上读书。", spanish: "Me gusta leer por la noche.", tier: 4, point: "me gusta + 动词原形" },
            { english: "Do you like Spanish movies?", chinese: "你喜欢西班牙电影吗？", spanish: "¿Te gustan las películas españolas?", tier: 6, point: "te gustan + 复数主语" },
            { english: "The library closes at nine.", chinese: "图书馆九点关门。", spanish: "La biblioteca cierra a las nueve.", tier: 3, point: "cerrar 词干变化 e→ie：cierra" },
            { english: "Can you help me with my homework?", chinese: "你能帮我做作业吗？", spanish: "¿Puedes ayudarme con los deberes?", tier: 6, point: "poder 词干变化 puedes + 原形；ayudarme 代词后置" },
            { english: "I recommend this Chinese restaurant to you.", chinese: "我推荐你这家中国餐厅。", spanish: "Te recomiendo este restaurante chino.", tier: 3, point: "te + recomiendo；指示形容词 este" },
            { english: "Why don't we eat at home today?", chinese: "我们今天为什么不在家吃？", spanish: "¿Por qué no comemos en casa hoy?", tier: 7, point: "否定疑问：¿Por qué no…? 提建议" },
            { english: "I want to order a coffee.", chinese: "我想点一杯咖啡。", spanish: "Quiero pedir un café.", tier: 4, point: "querer → quiero + 原形 pedir" },
            { english: "She starts work at eight.", chinese: "她八点开始工作。", spanish: "Ella empieza a trabajar a las ocho.", tier: 3, point: "empezar e→ie + empezar a + 原形" },
            { english: "I do not like getting up early.", chinese: "我不喜欢早起。", spanish: "No me gusta levantarme temprano.", tier: 7, point: "否定 no me gusta + 代词后置原形" },
            { english: "We do not drink coffee at night.", chinese: "我们晚上不喝咖啡。", spanish: "No bebemos café por la noche.", tier: 7, point: "否定 no bebemos" },
            { english: "What do you want for lunch?", chinese: "你午饭想吃什么？", spanish: "¿Qué quieres para el almuerzo?", tier: 6, point: "qué quieres + para 表目的对象" },
            { english: "You can close the window.", chinese: "你可以把窗户关上。", spanish: "Puedes cerrar la ventana.", tier: 3, point: "puedes + 原形 cerrar" },
            { english: "I like Chinese food very much.", chinese: "我很喜欢中国菜。", spanish: "Me gusta mucho la comida china.", tier: 4, point: "me gusta mucho + 单数名词" },
            { english: "My friends want to eat paella.", chinese: "我的朋友们想吃海鲜饭。", spanish: "Mis amigos quieren comer paella.", tier: 4, point: "querer 第三人称复数 quieren + 原形" }
        ]
    },
    {
        id: 30,
        group: 'main',
        title: "教材第7课：拜访与寒暄",
        summary: "第三变位规则动词、与格人称代词、porque 原因从句、数词 21-50",
        difficulty: "入门-进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "第三变位规则动词（-ir）的现在时",
                    explain: "以 -ir 结尾的动词变位：-o、-es、-e、-imos、-ís、-en。以 vivir（居住）为例：vivo、vives、vive、vivimos、vivís、viven。与 -er 动词的区别只在 nosotros/vosotros 两个词尾（-imos/-ís）。",
                    examples: [
                        { es: "Mis abuelos viven en el campo.", zh: "我爷爷奶奶住在乡下。" },
                        { es: "Escribimos cartas a nuestros amigos.", zh: "我们给朋友们写信。" }
                    ]
                },
                {
                    title: "间接宾语与与格人称代词",
                    explain: "与格代词表示「给谁/为谁」：me（给我）、te（给你）、le（给他/她/您）、nos（给我们）、les（给他们）。放在变位动词前：Te doy el libro.（我把书给你）。",
                    examples: [
                        { es: "Le doy las gracias a mi profesora.", zh: "我向我的老师道谢。" },
                        { es: "Nos cuentan una historia muy interesante.", zh: "他们给我们讲了一个很有趣的故事。" }
                    ]
                },
                {
                    title: "PORQUE 原因从句与 POR QUÉ 疑问",
                    explain: "porque（因为，连成一个词）回答原因；¿Por qué…?（为什么，分开写带重音）提问。注意两种写法完全不同。",
                    examples: [
                        { es: "Estudio español porque me gusta mucho.", zh: "我学西语因为我非常喜欢它。" },
                        { es: "¿Por qué no vienes a mi casa?", zh: "你为什么不来我家？" }
                    ]
                },
                {
                    title: "基数词 21-50",
                    explain: "21 到 29 用 veinti- 连写：veintiuno、veintidós…veintinueve；30 起分开写：treinta y uno（31）、cuarenta（40）、cincuenta（50）。",
                    examples: [
                        { es: "Tengo veintitrés años.", zh: "我二十三岁。" },
                        { es: "Hay cuarenta y cinco estudiantes en la clase.", zh: "班里有四十五个学生。" }
                    ]
                }
            ],
            vocab: [
                { es: "vivir", pos: "动词", zh: "居住；生活" },
                { es: "escribir", pos: "动词", zh: "写" },
                { es: "abrir", pos: "动词", zh: "打开" },
                { es: "recibir", pos: "动词", zh: "收到" },
                { es: "le / les", pos: "与格代词", zh: "给他（她、您）/ 给他们" },
                { es: "me / te / nos", pos: "与格代词", zh: "给我 / 给你 / 给我们" },
                { es: "porque", pos: "连词", zh: "因为" },
                { es: "por qué", pos: "疑问词", zh: "为什么" },
                { es: "veintiuno…veintinueve", pos: "数词", zh: "二十一…二十九" },
                { es: "treinta / cuarenta / cincuenta", pos: "数词", zh: "三十 / 四十 / 五十" },
                { es: "visitar", pos: "动词", zh: "拜访；参观" },
                { es: "historia", pos: "名词(阴)", zh: "故事；历史" },
                { es: "carta", pos: "名词(阴)", zh: "信" },
                { es: "regalo", pos: "名词(阳)", zh: "礼物" }
            ]
        },
        sentences: [
            { english: "My grandparents live in the countryside.", chinese: "我爷爷奶奶住在乡下。", spanish: "Mis abuelos viven en el campo.", tier: 3, point: "-ir 动词第三人称复数：viven" },
            { english: "We write letters to our friends.", chinese: "我们给朋友们写信。", spanish: "Escribimos cartas a nuestros amigos.", tier: 3, point: "-ir 动词第一人称复数：escribimos" },
            { english: "I thank my teacher.", chinese: "我向我的老师道谢。", spanish: "Le doy las gracias a mi profesora.", tier: 4, point: "与格代词 le + dar las gracias" },
            { english: "They tell us a very interesting story.", chinese: "他们给我们讲了一个很有趣的故事。", spanish: "Nos cuentan una historia muy interesante.", tier: 3, point: "与格代词 nos 前置 + contar" },
            { english: "I study Spanish because I like it very much.", chinese: "我学西语因为我非常喜欢它。", spanish: "Estudio español porque me gusta mucho.", tier: 3, point: "porque 原因从句（连写）" },
            { english: "Why don't you come to my house?", chinese: "你为什么不来我家？", spanish: "¿Por qué no vienes a mi casa?", tier: 7, point: "¿Por qué…? 提问（分开写）；否定建议" },
            { english: "I am twenty-three years old.", chinese: "我二十三岁。", spanish: "Tengo veintitrés años.", tier: 4, point: "数词 veintitrés 连写 + 年龄" },
            { english: "There are forty-five students in the class.", chinese: "班里有四十五个学生。", spanish: "Hay cuarenta y cinco estudiantes en la clase.", tier: 3, point: "数词 cuarenta y cinco + hay 存在句" },
            { english: "I open the window because it is very hot.", chinese: "我打开窗户因为很热。", spanish: "Abro la ventana porque hace mucho calor.", tier: 3, point: "abrir 第一人称 abro + porque" },
            { english: "She receives many letters every week.", chinese: "她每周收到很多信。", spanish: "Ella recibe muchas cartas cada semana.", tier: 3, point: "-ir 动词第三人称 recibe" },
            { english: "I give him my telephone number.", chinese: "我把我的电话号码给他。", spanish: "Le doy mi número de teléfono.", tier: 4, point: "与格代词 le + doy" },
            { english: "Do you give them the books?", chinese: "你把书给他们吗？", spanish: "¿Les das los libros?", tier: 6, point: "与格代词 les + 疑问" },
            { english: "We do not receive messages at night.", chinese: "我们晚上收不到消息。", spanish: "No recibimos mensajes por la noche.", tier: 7, point: "否定 no recibimos" },
            { english: "He does not write to us very often.", chinese: "他不常给我们写信。", spanish: "Él no nos escribe muy a menudo.", tier: 7, point: "与格代词 nos + 否定" },
            { english: "How many years does your grandfather have?", chinese: "你爷爷多大年纪了？", spanish: "¿Cuántos años tiene tu abuelo?", tier: 6, point: "cuántos años + tiene" },
            { english: "We are thirty-two people at the party.", chinese: "聚会上我们有三十二个人。", spanish: "Somos treinta y dos personas en la fiesta.", tier: 2, point: "somos + 数词 treinta y dos + 人数" }
        ]
    },
    {
        id: 31,
        group: 'main',
        title: "教材第8课：感叹与回应",
        summary: "重读物主形容词、cuál 疑问、感叹句、回答否定疑问",
        difficulty: "入门-进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "重读物主形容词和物主代词",
                    explain: "重读形式放在名词后面，起强调作用：mío/mía（我的）、tuyo/tuya（你的）、suyo/suya（他的/您的）、nuestro/nuestra（我们的）。也可以单独当物主代词用：Este libro es mío.（这本书是我的）。",
                    examples: [
                        { es: "Este libro es mío, no es tuyo.", zh: "这本书是我的，不是你的。" },
                        { es: "Una amiga nuestra vive en Perú.", zh: "我们的一位朋友住在秘鲁。" }
                    ]
                },
                {
                    title: "疑问代词 CUÁL",
                    explain: "¿Cuál…?（哪一个）从有限的选择中挑选，复数用 ¿Cuáles…?：¿Cuál es tu color favorito?（你最喜欢的颜色是哪个？）。",
                    examples: [
                        { es: "¿Cuál es tu número de teléfono?", zh: "你的电话号码是多少？" },
                        { es: "¿Cuáles son tus libros favoritos?", zh: "你最喜欢的书是哪些？" }
                    ]
                },
                {
                    title: "感叹句",
                    explain: "用 ¡Qué + 名词/形容词…! 表示感叹：¡Qué casa tan bonita!（多漂亮的房子啊！）。形容词前常加 tan（那么）。",
                    examples: [
                        { es: "¡Qué bonita es esta plaza!", zh: "这个广场真漂亮！" },
                        { es: "¡Qué suerte tienes!", zh: "你真幸运！" }
                    ]
                },
                {
                    title: "如何回答否定形式的一般疑问句",
                    explain: "西语里回答否定疑问句时，Sí（是的）和 No（不是）是针对事实本身，而不是顺着提问者：¿No quieres café?（你不要咖啡吗？）— 不要：No.（是的，不要。）— 要：Sí, quiero.（不，我要。）",
                    examples: [
                        { es: "¿No quieres café? No, gracias.", zh: "你不要咖啡吗？是的，不要，谢谢。" },
                        { es: "¿No eres de aquí? Sí, soy de aquí.", zh: "你不是本地人吗？不，我是本地人。" }
                    ]
                }
            ],
            vocab: [
                { es: "mío, mía / tuyo, tuya", pos: "物主形容词/代词", zh: "我的 / 你的（重读形式）" },
                { es: "suyo, suya / nuestro, nuestra", pos: "物主形容词/代词", zh: "他（您）的 / 我们的" },
                { es: "cuál / cuáles", pos: "疑问代词", zh: "哪一个 / 哪些" },
                { es: "¡Qué…!", pos: "感叹词", zh: "多么…！" },
                { es: "sí", pos: "副词", zh: "是，对" },
                { es: "no", pos: "副词", zh: "不，不是" },
                { es: "poder + inf.", pos: "动词短语", zh: "能够做…" },
                { es: "oír", pos: "动词", zh: "听见" },
                { es: "saber", pos: "动词", zh: "知道；会" },
                { es: "dar", pos: "动词", zh: "给" },
                { es: "cincuenta…cien", pos: "数词", zh: "五十…一百" },
                { es: "doscientos…mil", pos: "数词", zh: "两百…一千" },
                { es: "favorito, favorita", pos: "形容词", zh: "最喜欢的" },
                { es: "suerte", pos: "名词(阴)", zh: "运气" }
            ]
        },
        sentences: [
            { english: "This book is mine, not yours.", chinese: "这本书是我的，不是你的。", spanish: "Este libro es mío, no es tuyo.", tier: 2, point: "重读物主代词 mío/tuyo 作表语" },
            { english: "A friend of ours lives in Peru.", chinese: "我们的一位朋友住在秘鲁。", spanish: "Una amiga nuestra vive en Perú.", tier: 3, point: "重读物主 nuestra 后置修饰名词" },
            { english: "What is your telephone number?", chinese: "你的电话号码是多少？", spanish: "¿Cuál es tu número de teléfono?", tier: 6, point: "疑问代词 cuál + ser" },
            { english: "Which are your favorite books?", chinese: "你最喜欢的书是哪些？", spanish: "¿Cuáles son tus libros favoritos?", tier: 6, point: "复数 ¿Cuáles son…?" },
            { english: "What a beautiful plaza!", chinese: "这个广场真漂亮！", spanish: "¡Qué bonita es esta plaza!", tier: 2, point: "感叹句 ¡Qué + 形容词…!" },
            { english: "You are so lucky!", chinese: "你真幸运！", spanish: "¡Qué suerte tienes!", tier: 4, point: "感叹句 ¡Qué suerte…! + tener" },
            { english: "Don't you want coffee? No, thanks.", chinese: "你不要咖啡吗？是的，不要，谢谢。", spanish: "¿No quieres café? No, gracias.", tier: 7, point: "回答否定疑问：No 表示同意事实" },
            { english: "Aren't you from here? Yes, I am from here.", chinese: "你不是本地人吗？不，我是本地人。", spanish: "¿No eres de aquí? Sí, soy de aquí.", tier: 7, point: "回答否定疑问：Sí + 澄清" },
            { english: "I can help you with your homework.", chinese: "我能帮你做作业。", spanish: "Puedo ayudarte con los deberes.", tier: 4, point: "poder + 原形；ayudarte 代词后置" },
            { english: "I do not hear you well.", chinese: "我听不清你说话。", spanish: "No te oigo bien.", tier: 7, point: "oír 不规则第一人称 oigo + 否定" },
            { english: "She knows how to speak three languages.", chinese: "她会说三种语言。", spanish: "Ella sabe hablar tres idiomas.", tier: 4, point: "saber 第三人称 sabe + 原形" },
            { english: "I give you my address.", chinese: "我把我的地址给你。", spanish: "Te doy mi dirección.", tier: 4, point: "与格代词 te + doy（dar 不规则）" },
            { english: "Can you hear the music?", chinese: "你听得见音乐吗？", spanish: "¿Puedes oír la música?", tier: 6, point: "puedes + 原形 oír" },
            { english: "Do you know where the station is?", chinese: "你知道车站在哪吗？", spanish: "¿Sabes dónde está la estación?", tier: 6, point: "saber 第二人称 sabes + 宾语从句" },
            { english: "That car is not ours.", chinese: "那辆车不是我们的。", spanish: "Ese coche no es nuestro.", tier: 7, point: "否定 + 物主代词 nuestro" },
            { english: "What a big house!", chinese: "好大的房子啊！", spanish: "¡Qué casa tan grande!", tier: 1, point: "感叹句 ¡Qué + 名词 + tan + 形容词!" }
        ]
    },
    {
        id: 32,
        group: 'main',
        title: "教材第9课：命令与请求",
        summary: "宾格与与格代词连用、命令式（tú/usted/ustedes）",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "宾格与与格代词同时使用",
                    explain: "两个代词同时出现时，与格在前、宾格在后，都放在动词前面；与格 le/les 遇到 lo/la 要变成 se：Se lo doy.（我把它给他）。",
                    examples: [
                        { es: "Te lo explico otra vez.", zh: "我再给你解释一遍。" },
                        { es: "El libro, se lo devuelvo mañana.", zh: "那本书，我明天还给他。" }
                    ]
                },
                {
                    title: "命令式：对 tú 的命令",
                    explain: "对「你「下命令：规则动词直接去掉 -r 加 -a（-ar）或 -e（-er/-ir）：habla!（你说！）、come!（你吃！）、escribe!（你写！）。常用的不规则：di（说）、haz（做）、ve（去）、pon（放）、sal（出去）、ten（拿着）、ven（来）。",
                    examples: [
                        { es: "Habla más despacio, por favor.", zh: "请你说慢一点。" },
                        { es: "Ven a mi oficina por la tarde.", zh: "下午来我办公室。" }
                    ]
                },
                {
                    title: "命令式：对 usted / ustedes",
                    explain: "对「您/你们「下命令：-ar 动词词尾 -e/-en，-er/-ir 动词词尾 -a/-an：hable usted!（您请说！）、coman ustedes!（你们吃！）。",
                    examples: [
                        { es: "Espere un momento, por favor.", zh: "请您稍等一会儿。" },
                        { es: "Pasen ustedes, por favor.", zh: "各位请进。" }
                    ]
                },
                {
                    title: "客气的请求方式",
                    explain: "西语里下命令不一定都用命令式，用 ¿Puede + 原形…?（您能…吗？）更客气，口语中非常常用。",
                    examples: [
                        { es: "¿Puede cerrar la puerta, por favor?", zh: "您能把门关上吗？" },
                        { es: "¿Pueden esperar un momento?", zh: "你们能等一会儿吗？" }
                    ]
                }
            ],
            vocab: [
                { es: "explicar", pos: "动词", zh: "解释" },
                { es: "devolver", pos: "动词", zh: "归还" },
                { es: "esperar", pos: "动词", zh: "等待；期望" },
                { es: "pasar", pos: "动词", zh: "通过；进入" },
                { es: "poner", pos: "动词", zh: "放" },
                { es: "se lo / se la", pos: "代词组合", zh: "把它给他（她、您）" },
                { es: "despacio", pos: "副词", zh: "慢" },
                { es: "un momento", pos: "短语", zh: "一会儿" },
                { es: "por favor", pos: "短语", zh: "请" },
                { es: "ahora mismo", pos: "短语", zh: "马上" },
                { es: "derecho, derecha", pos: "形容词/副词", zh: "直的；直接" },
                { es: "enfrente", pos: "副词", zh: "对面" },
                { es: "otra vez", pos: "短语", zh: "再一次" },
                { es: "silencio", pos: "名词(阳)", zh: "安静" }
            ]
        },
        sentences: [
            { english: "I will explain it to you again.", chinese: "我再给你解释一遍。", spanish: "Te lo explico otra vez.", tier: 3, point: "与格 te + 宾格 lo 连用，动词前" },
            { english: "I will return the book to him tomorrow.", chinese: "那本书，我明天还给他。", spanish: "El libro, se lo devuelvo mañana.", tier: 3, point: "le+lo → se lo；devolver 词干变化 o→ue" },
            { english: "Speak more slowly, please.", chinese: "请你说慢一点。", spanish: "Habla más despacio, por favor.", tier: 11, point: "命令式 tú：hablar → habla" },
            { english: "Come to my office in the afternoon.", chinese: "下午来我办公室。", spanish: "Ven a mi oficina por la tarde.", tier: 11, point: "命令式不规则：venir → ven" },
            { english: "Wait a moment, please.", chinese: "请您稍等一会儿。", spanish: "Espere un momento, por favor.", tier: 11, point: "命令式 usted：esperar → espere" },
            { english: "Please, come in.", chinese: "各位请进。", spanish: "Pasen ustedes, por favor.", tier: 11, point: "命令式 ustedes：pasar → pasen" },
            { english: "Can you close the door, please?", chinese: "您能把门关上吗？", spanish: "¿Puede cerrar la puerta, por favor?", tier: 11, point: "客气请求：¿Puede + 原形…?" },
            { english: "Can you wait a moment?", chinese: "你们能等一会儿吗？", spanish: "¿Pueden esperar un momento?", tier: 11, point: "客气请求 ustedes：¿Pueden…?" },
            { english: "Do it now, please.", chinese: "请马上做。", spanish: "Hazlo ahora mismo, por favor.", tier: 11, point: "命令式不规则 hacer → haz + 宾格代词后置 hazlo" },
            { english: "Write your name here.", chinese: "把你的名字写在这里。", spanish: "Escribe tu nombre aquí.", tier: 11, point: "命令式 -ir：escribir → escribe" },
            { english: "Put the book on the table.", chinese: "把书放在桌子上。", spanish: "Pon el libro en la mesa.", tier: 11, point: "命令式不规则 poner → pon" },
            { english: "Go to the bank and come back early.", chinese: "去银行，早点回来。", spanish: "Ve al banco y vuelve temprano.", tier: 11, point: "命令式 ir → ve + volver → vuelve" },
            { english: "Be quiet, please.", chinese: "请安静。", spanish: "Silencio, por favor.", tier: 1, point: "名词直接表达命令" },
            { english: "Walk straight and the station is in front of you.", chinese: "直走，车站在你对面。", spanish: "Siga derecho y la estación está enfrente.", tier: 11, point: "命令式 usted：seguir → siga + 方位" },
            { english: "I give it to you right now.", chinese: "我现在就把它给你。", spanish: "Te lo doy ahora mismo.", tier: 4, point: "te + lo 连用 + doy" },
            { english: "Please repeat it for me.", chinese: "请您再给我重复一遍。", spanish: "Repítamelo, por favor.", tier: 11, point: "命令式 usted + 两个代词后置连写 repítamelo" }
        ]
    },
    {
        id: 33,
        group: 'main',
        title: "教材第10课：条件与建议",
        summary: "si 条件从句、volver a + 原形、命令式 nosotros/vosotros",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "SI 条件从句",
                    explain: "si（如果）引导条件从句，从句用现在时，主句用现在时或命令式：Si tienes tiempo, ven a verme.（如果你有时间，来看我）。si 后接 el 时要写成 síl…不，注意：si 不缩合，但 si + el 无变化。",
                    examples: [
                        { es: "Si tienes tiempo, ven a verme.", zh: "如果你有时间，来看我。" },
                        { es: "Si hace buen tiempo, vamos a la playa.", zh: "如果天气好，我们去海滩。" }
                    ]
                },
                {
                    title: "VOLVER A + 动词原形",
                    explain: "volver a + 动词原形表示「再做一次」：Vuelve a leerlo.（你再读一遍）。相当于英语的 again。",
                    examples: [
                        { es: "Vuelve a leer el texto, por favor.", zh: "请再把课文读一遍。" },
                        { es: "Volvemos a hablar del tema mañana.", zh: "我们明天再谈这个话题。" }
                    ]
                },
                {
                    title: "命令式：nosotros（咱们）和 vosotros（你们）",
                    explain: "对「咱们」用：-emos（-ar）/ -amos（-er/-ir）：hablemos!（咱们说吧！）。对「你们」用：-ad（-ar）/ -ed（-er/-ir）：hablad!（你们说！）。西语美洲不用 vosotros 而用 ustedes。",
                    examples: [
                        { es: "Hablemos en español, por favor.", zh: "咱们用西语说吧。" },
                        { es: "Empecemos la clase.", zh: "咱们开始上课吧。" }
                    ]
                },
                {
                    title: "SABER / SER / TRAER / VER 的命令式",
                    explain: "这几个动词的命令式不规则：saber → sabe（tú）/ sepa（usted）；ser → sé / sea；traer → trae / traiga；ver → ve / vea。",
                    examples: [
                        { es: "Sea usted paciente, por favor.", zh: "请您耐心一点。" },
                        { es: "Trae el libro mañana.", zh: "明天把书带来。" }
                    ]
                }
            ],
            vocab: [
                { es: "si", pos: "连词", zh: "如果" },
                { es: "volver a + inf.", pos: "动词短语", zh: "再做一次…" },
                { es: "tema", pos: "名词(阳)", zh: "话题，主题" },
                { es: "texto", pos: "名词(阳)", zh: "课文；文本" },
                { es: "traer", pos: "动词", zh: "带来" },
                { es: "ver", pos: "动词", zh: "看" },
                { es: "empezar", pos: "动词", zh: "开始" },
                { es: "paciente", pos: "形容词", zh: "耐心的" },
                { es: "buen tiempo / mal tiempo", pos: "短语", zh: "好天气 / 坏天气" },
                { es: "mañana", pos: "副词", zh: "明天" },
                { es: "casi", pos: "副词", zh: "几乎，差不多" },
                { es: "claro", pos: "形容词/副词", zh: "清楚的；当然" },
                { es: "tranquilo, tranquila", pos: "形容词", zh: "平静的，放心的" },
                { es: "ayudar", pos: "动词", zh: "帮助" }
            ]
        },
        sentences: [
            { english: "If you have time, come to see me.", chinese: "如果你有时间，来看我。", spanish: "Si tienes tiempo, ven a verme.", tier: 11, point: "si 条件从句 + 命令式 ven" },
            { english: "If the weather is good, we go to the beach.", chinese: "如果天气好，我们去海滩。", spanish: "Si hace buen tiempo, vamos a la playa.", tier: 4, point: "si + hace buen tiempo 条件从句" },
            { english: "Please read the text again.", chinese: "请再把课文读一遍。", spanish: "Vuelve a leer el texto, por favor.", tier: 11, point: "命令式 + volver a + 原形（再做一次）" },
            { english: "We will talk about the topic again tomorrow.", chinese: "我们明天再谈这个话题。", spanish: "Volvemos a hablar del tema mañana.", tier: 3, point: "volver a + 原形第一人称复数" },
            { english: "Let's speak in Spanish, please.", chinese: "咱们用西语说吧。", spanish: "Hablemos en español, por favor.", tier: 11, point: "命令式 nosotros：hablemos" },
            { english: "Let's start the class.", chinese: "咱们开始上课吧。", spanish: "Empecemos la clase.", tier: 11, point: "命令式 nosotros：empecemos（e→ie 词干变化）" },
            { english: "Be patient, please.", chinese: "请您耐心一点。", spanish: "Sea usted paciente, por favor.", tier: 11, point: "命令式 usted 不规则：ser → sea" },
            { english: "Bring the book tomorrow.", chinese: "明天把书带来。", spanish: "Trae el libro mañana.", tier: 11, point: "命令式 tú 不规则：traer → trae" },
            { english: "If it rains, we stay at home.", chinese: "如果下雨，我们待在家里。", spanish: "Si llueve, nos quedamos en casa.", tier: 4, point: "si + llueve 条件从句 + quedarse" },
            { english: "Do you see that building over there?", chinese: "你看见那边那栋楼了吗？", spanish: "¿Ves ese edificio de allí?", tier: 6, point: "ver 第二人称 ves + 指示形容词 ese" },
            { english: "Don't worry, everything is fine.", chinese: "别担心，一切都没问题。", spanish: "Tranquilo, todo está bien.", tier: 1, point: "安慰固定表达 + estar bien" },
            { english: "If you want, I help you with the homework.", chinese: "如果你愿意，我帮你做作业。", spanish: "Si quieres, te ayudo con los deberes.", tier: 4, point: "si quieres + te ayudo" },
            { english: "Let's eat together today.", chinese: "咱们今天一起吃饭吧。", spanish: "Comamos juntos hoy.", tier: 11, point: "命令式 nosotros -er 动词：comamos" },
            { english: "Look at this photo.", chinese: "你看这张照片。", spanish: "Mira esta foto.", tier: 11, point: "命令式 mirar → mira" },
            { english: "I do not see my keys anywhere.", chinese: "我哪儿都找不到我的钥匙。", spanish: "No veo mis llaves por ninguna parte.", tier: 7, point: "否定 + ver 不规则 veo" },
            { english: "Tell me the truth.", chinese: "请你告诉我实话。", spanish: "Dime la verdad, por favor.", tier: 11, point: "命令式 decir → di + 与格代词后置 dime" }
        ]
    },
    {
        id: 34,
        group: 'main',
        title: "教材第11课：否定命令与进行时",
        summary: "否定命令式、直接宾语从句、关系代词 que、estar + 副动词",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "否定命令式（对 tú 和 usted）",
                    explain: "对「你」的否定命令要用 -es/-as 形式（和 usted 的肯定命令相反）：No hables!（别说！）、No comas!（别吃！）。对 usted：No hable!（您别说！）。",
                    examples: [
                        { es: "No hables tan rápido, por favor.", zh: "请别说得那么快。" },
                        { es: "No se preocupe usted.", zh: "您别担心。" }
                    ]
                },
                {
                    title: "直接宾语从句",
                    explain: "用 que 连接主句和从句：Creo que…（我认为…）、Dice que…（他说…）。主句动词后加 que，从句用完整句子。",
                    examples: [
                        { es: "Creo que es una buena idea.", zh: "我认为这是个好主意。" },
                        { es: "Ella dice que está muy ocupada.", zh: "她说她很忙。" }
                    ]
                },
                {
                    title: "关系代词 QUE",
                    explain: "que（…的/那个）引导定语从句修饰前面的名词：El libro que leo es muy bueno.（我在读的那本书很好）。",
                    examples: [
                        { es: "La película que vimos anoche es fantástica.", zh: "我们昨晚看的那部电影很棒。" },
                        { es: "El chico que habla con Ana es mi primo.", zh: "正在和安娜说话的那个男孩是我表哥。" }
                    ]
                },
                {
                    title: "ESTAR + 副动词（进行时）",
                    explain: "estar + 副动词表示正在进行的动作：-ar 动词 → -ando（hablando），-er/-ir 动词 → -iendo（comiendo、viviendo）。Estoy estudiando.（我正在学习）。",
                    examples: [
                        { es: "Estoy estudiando español en este momento.", zh: "我此刻正在学西语。" },
                        { es: "Mi madre está cocinando la cena.", zh: "我妈妈正在做晚饭。" }
                    ]
                }
            ],
            vocab: [
                { es: "rápido", pos: "形容词/副词", zh: "快的；快" },
                { es: "preocuparse", pos: "代词式动词", zh: "担心" },
                { es: "creer", pos: "动词", zh: "相信；认为" },
                { es: "decir", pos: "动词", zh: "说" },
                { es: "que", pos: "连词/关系代词", zh: "（连接从句）" },
                { es: "ocupado, ocupada", pos: "形容词", zh: "忙的；被占用的" },
                { es: "idea", pos: "名词(阴)", zh: "主意，想法" },
                { es: "jugar", pos: "动词", zh: "玩（jugar al fútbol 踢足球）" },
                { es: "en este momento", pos: "短语", zh: "此刻，现在" },
                { es: "cocinar", pos: "动词", zh: "做饭" },
                { es: "espera", pos: "名词(阴)", zh: "等待" },
                { es: "todavía", pos: "副词", zh: "还，仍然" },
                { es: "ya", pos: "副词", zh: "已经" },
                { es: "preparar", pos: "动词", zh: "准备" }
            ]
        },
        sentences: [
            { english: "Don't speak so fast, please.", chinese: "请别说得那么快。", spanish: "No hables tan rápido, por favor.", tier: 11, point: "否定命令式 tú：no hables" },
            { english: "Don't worry.", chinese: "您别担心。", spanish: "No se preocupe usted.", tier: 11, point: "否定命令式 usted：no se preocupe" },
            { english: "I think it is a good idea.", chinese: "我认为这是个好主意。", spanish: "Creo que es una buena idea.", tier: 3, point: "直接宾语从句：Creo que + 完整句" },
            { english: "She says that she is very busy.", chinese: "她说她很忙。", spanish: "Ella dice que está muy ocupada.", tier: 3, point: "Dice que + 从句" },
            { english: "The movie we saw last night is fantastic.", chinese: "我们昨晚看的那部电影很棒。", spanish: "La película que vimos anoche es fantástica.", tier: 10, point: "关系代词 que 引导定语从句" },
            { english: "The boy talking with Ana is my cousin.", chinese: "正在和安娜说话的那个男孩是我表哥。", spanish: "El chico que habla con Ana es mi primo.", tier: 3, point: "que + habla 定语从句" },
            { english: "I am studying Spanish right now.", chinese: "我此刻正在学西语。", spanish: "Estoy estudiando español en este momento.", tier: 14, point: "进行时：estar + 副动词 estudiando" },
            { english: "My mother is cooking dinner.", chinese: "我妈妈正在做晚饭。", spanish: "Mi madre está cocinando la cena.", tier: 14, point: "进行时第三人称：está + cocinando" },
            { english: "What are you doing now?", chinese: "你现在在做什么？", spanish: "¿Qué estás haciendo ahora?", tier: 14, point: "进行时疑问：estás haciendo" },
            { english: "Don't eat so much sugar.", chinese: "别吃那么多糖。", spanish: "No comas tanto azúcar.", tier: 11, point: "否定命令式 -er 动词：no comas" },
            { english: "I am not working today.", chinese: "我今天没在上班。", spanish: "Hoy no estoy trabajando.", tier: 14, point: "进行时否定：no estoy trabajando" },
            { english: "The children are playing football in the park.", chinese: "孩子们正在公园里踢足球。", spanish: "Los niños están jugando al fútbol en el parque.", tier: 14, point: "进行时复数：están jugando（jugar u→ue）" },
            { english: "He says that he is preparing dinner.", chinese: "他说他正在准备晚饭。", spanish: "Él dice que está preparando la cena.", tier: 14, point: "Dice que + 进行时" },
            { english: "Don't open the window, it's cold.", chinese: "别开窗户，冷。", spanish: "No abras la ventana, hace frío.", tier: 11, point: "否定命令式 abrir → no abras" },
            { english: "Are you still waiting for me?", chinese: "你还在等我吗？", spanish: "¿Todavía me estás esperando?", tier: 14, point: "进行时 + todavía 还" },
            { english: "I have already finished my homework.", chinese: "我已经做完作业了。", spanish: "Ya he terminado los deberes.", tier: 13, point: "ya + 现在完成时入门（he terminado）" }
        ]
    },
    {
        id: 35,
        group: 'main',
        title: "教材第12课：方式与请求",
        summary: "副动词表方式、querer + 原形、agradecer/conocer 变位",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "副动词表示方式",
                    explain: "副动词可以表示「以…方式」：Caminando por la calle, encontré a mi amigo.（走在街上时，我遇到了朋友）。也常和 seguir（继续）连用：sigue lloviendo（还在下雨）。",
                    examples: [
                        { es: "Él sigue trabajando en la misma empresa.", zh: "他还在同一家公司工作。" },
                        { es: "Voy al trabajo caminando todos los días.", zh: "我每天走路去上班。" }
                    ]
                },
                {
                    title: "QUERER + 动词原形（意愿）",
                    explain: "querer + 动词原形表示「想做某事」：Quiero aprender español.（我想学西语）。委婉请求时用 querría 或 quisiera（我想请您…）。",
                    examples: [
                        { es: "Quiero aprender a tocar la guitarra.", zh: "我想学弹吉他。" },
                        { es: "Quisiera hacer una pregunta.", zh: "我想提一个问题。" }
                    ]
                },
                {
                    title: "AGRADECER 和 CONOCER 的变位",
                    explain: "以 -cer 结尾的动词第一人称变 -zco：agradecer → agradezco（感谢）、conocer → conozco（认识/了解）。其他人都正常。",
                    examples: [
                        { es: "Te agradezco mucho tu ayuda.", zh: "我非常感谢你的帮助。" },
                        { es: "Conozco muy bien esta ciudad.", zh: "我很了解这座城市。" }
                    ]
                },
                {
                    title: "客气的提出请求",
                    explain: "几种递进的客气说法：Quisiera…（我想…）＞ ¿Puede…?（您能…吗？）＞ Por favor + 命令式（请…）。对不熟的人优先用前两种。",
                    examples: [
                        { es: "Quisiera un vaso de agua, por favor.", zh: "请给我一杯水。" },
                        { es: "¿Me puede decir la hora, por favor?", zh: "您能告诉我几点了吗？" }
                    ]
                }
            ],
            vocab: [
                { es: "seguir", pos: "动词", zh: "继续；跟随" },
                { es: "agradecer", pos: "动词", zh: "感谢" },
                { es: "conocer", pos: "动词", zh: "认识；了解" },
                { es: "aprender", pos: "动词", zh: "学习，学会" },
                { es: "tocar", pos: "动词", zh: "弹（乐器）；触碰" },
                { es: "guitarra", pos: "名词(阴)", zh: "吉他" },
                { es: "pregunta", pos: "名词(阴)", zh: "问题" },
                { es: "vaso", pos: "名词(阳)", zh: "杯子" },
                { es: "agua", pos: "名词(阴)", zh: "水" },
                { es: "mismo, misma", pos: "形容词", zh: "相同的" },
                { es: "empresa", pos: "名词(阴)", zh: "公司" },
                { es: "ayuda", pos: "名词(阴)", zh: "帮助" },
                { es: "hora", pos: "名词(阴)", zh: "小时；时间" },
                { es: "quisiera", pos: "动词(条件式)", zh: "我想要（客气）" }
            ]
        },
        sentences: [
            { english: "He continues working at the same company.", chinese: "他还在同一家公司工作。", spanish: "Él sigue trabajando en la misma empresa.", tier: 14, point: "seguir + 副动词（继续做某事）" },
            { english: "I walk to work every day.", chinese: "我每天走路去上班。", spanish: "Voy al trabajo caminando todos los días.", tier: 14, point: "副动词表方式：caminando" },
            { english: "I want to learn to play the guitar.", chinese: "我想学弹吉他。", spanish: "Quiero aprender a tocar la guitarra.", tier: 4, point: "querer + aprender a + 原形" },
            { english: "I would like to ask a question.", chinese: "我想提一个问题。", spanish: "Quisiera hacer una pregunta.", tier: 4, point: "quisiera 客气请求 + hacer una pregunta" },
            { english: "I thank you very much for your help.", chinese: "我非常感谢你的帮助。", spanish: "Te agradezco mucho tu ayuda.", tier: 3, point: "agradecer 第一人称 agradezco + te" },
            { english: "I know this city very well.", chinese: "我很了解这座城市。", spanish: "Conozco muy bien esta ciudad.", tier: 3, point: "conocer 第一人称 conozco" },
            { english: "I would like a glass of water, please.", chinese: "请给我一杯水。", spanish: "Quisiera un vaso de agua, por favor.", tier: 4, point: "quisiera + 名词（点餐/请求必用）" },
            { english: "Can you tell me the time, please?", chinese: "您能告诉我几点了吗？", spanish: "¿Me puede decir la hora, por favor?", tier: 6, point: "客气请求：¿Me puede decir…?" },
            { english: "It is still raining.", chinese: "还在下雨。", spanish: "Sigue lloviendo.", tier: 14, point: "seguir + lloviendo（天气持续）" },
            { english: "I am learning to cook Spanish food.", chinese: "我正在学做西班牙菜。", spanish: "Estoy aprendiendo a cocinar comida española.", tier: 14, point: "进行时 + aprender a + 原形" },
            { english: "Do you know my brother?", chinese: "你认识我哥哥吗？", spanish: "¿Conoces a mi hermano?", tier: 6, point: "conocer 第二人称 conoces + a 人称宾语" },
            { english: "I don't know this word.", chinese: "我不认识这个词。", spanish: "No conozco esta palabra.", tier: 7, point: "否定 no conozco" },
            { english: "He continues studying in the library.", chinese: "他继续在图书馆学习。", spanish: "Él sigue estudiando en la biblioteca.", tier: 14, point: "sigue + estudiando" },
            { english: "What do you want to drink?", chinese: "你想喝点什么？", spanish: "¿Qué quieres beber?", tier: 6, point: "qué quieres + 原形 beber" },
            { english: "I always go home by bus.", chinese: "我总是坐公交车回家。", spanish: "Siempre vuelvo a casa en autobús.", tier: 3, point: "volver 词干变化 vuelvo + en autobús" },
            { english: "Thank you for your visit.", chinese: "感谢你的来访。", spanish: "Gracias por tu visita.", tier: 1, point: "gracias por + 名词" }
        ]
    },
    {
        id: 36,
        group: 'main',
        title: "教材第13课：比较与转述",
        summary: "虚拟式变位入门、间接引语、比较级、连词 y/e·o/u·ni",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "虚拟式现在时的变位（入门）",
                    explain: "虚拟式是西语特有的一种动词形式，表示愿望、建议等「不一定是事实」的内容。变位规律：-ar 动词词尾变 -e/-es/-e/-emos/-éis/-en；-er/-ir 动词变 -a/-as/-a/-amos/-áis/-an（正好和陈述式对调）。如 hablar → hable、comer → coma。",
                    examples: [
                        { es: "Espero que hables con el profesor.", zh: "我希望你和老师谈谈。（hables 是虚拟式）" },
                        { es: "Ojalá comamos juntos mañana.", zh: "希望咱们明天一起吃饭。" }
                    ]
                },
                {
                    title: "直接引语与间接引语",
                    explain: "直接引语原样引用别人的话；间接引语用 que 转述：Dice que…（他说…）、Me preguntó si…（他问我是否…）。",
                    examples: [
                        { es: "Ella dice que mañana no viene.", zh: "她说她明天不来。" },
                        { es: "Me pregunta si me gusta el fútbol.", zh: "他问我喜不喜欢足球。" }
                    ]
                },
                {
                    title: "形容词比较级",
                    explain: "比较级用 más + 形容词 + que（比…更…），否定用 menos…que（不如…）。bueno 的比较级是不规则的 mejor，malo 是 peor。",
                    examples: [
                        { es: "Este coche es más rápido que aquel.", zh: "这辆车比那辆快。" },
                        { es: "Tu idea es mejor que la mía.", zh: "你的主意比我的好。" }
                    ]
                },
                {
                    title: "连词 Y/E、O/U 和 NI",
                    explain: "y（和）在 i、hi 开头的词前变 e（padres e hijos）；o（或）在 o、ho 开头的词前变 u（siete u ocho）；ni（也不）用于否定并列：no…ni…。",
                    examples: [
                        { es: "Somos ocho o nueve personas.", zh: "我们是八九个人。" },
                        { es: "No como carne ni pescado.", zh: "我既不吃肉也不吃鱼。" }
                    ]
                }
            ],
            vocab: [
                { es: "esperar", pos: "动词", zh: "希望；等待" },
                { es: "ojalá", pos: "感叹词", zh: "但愿，希望（+虚拟式）" },
                { es: "más…que", pos: "比较结构", zh: "比…更…" },
                { es: "menos…que", pos: "比较结构", zh: "不如…" },
                { es: "mejor / peor", pos: "形容词", zh: "更好 / 更差" },
                { es: "e", pos: "连词", zh: "和（i/hi 前用）" },
                { es: "u", pos: "连词", zh: "或（o/ho 前用）" },
                { es: "ni", pos: "连词", zh: "也不（否定并列）" },
                { es: "nadie", pos: "不定代词", zh: "没有人" },
                { es: "rápido, rápida", pos: "形容词", zh: "快的" },
                { es: "lento, lenta", pos: "形容词", zh: "慢的" },
                { es: "caro, cara", pos: "形容词", zh: "贵的" },
                { es: "barato, barata", pos: "形容词", zh: "便宜的" },
                { es: "preguntar", pos: "动词", zh: "询问" }
            ]
        },
        sentences: [
            { english: "I hope you talk with the teacher.", chinese: "我希望你和老师谈谈。", spanish: "Espero que hables con el profesor.", tier: 12, point: "espero que + 虚拟式 hables" },
            { english: "I hope we eat together tomorrow.", chinese: "希望咱们明天一起吃饭。", spanish: "Ojalá comamos juntos mañana.", tier: 12, point: "ojalá + 虚拟式 comamos" },
            { english: "She says that she is not coming tomorrow.", chinese: "她说她明天不来。", spanish: "Ella dice que mañana no viene.", tier: 3, point: "间接引语 dice que + 陈述式" },
            { english: "He asks me if I like football.", chinese: "他问我喜不喜欢足球。", spanish: "Me pregunta si me gusta el fútbol.", tier: 4, point: "间接疑问 me pregunta si…" },
            { english: "This car is faster than that one.", chinese: "这辆车比那辆快。", spanish: "Este coche es más rápido que aquel.", tier: 2, point: "比较级 más + 形容词 + que" },
            { english: "Your idea is better than mine.", chinese: "你的主意比我的好。", spanish: "Tu idea es mejor que la mía.", tier: 2, point: "不规则比较级 mejor；la mía 物主代词" },
            { english: "There are eight or nine of us.", chinese: "我们是八九个人。", spanish: "Somos ocho o nueve personas.", tier: 2, point: "o 在 o 开头数字前变 u" },
            { english: "I drink neither coffee nor tea at night.", chinese: "我晚上既不喝咖啡也不喝茶。", spanish: "No bebo café ni té por la noche.", tier: 7, point: "否定并列 no…ni…" },
            { english: "I want you to study more.", chinese: "我希望你多学习。", spanish: "Quiero que estudies más.", tier: 12, point: "quiero que + 虚拟式 estudies" },
            { english: "I hope it does not rain tomorrow.", chinese: "希望明天不下雨。", spanish: "Espero que no llueva mañana.", tier: 12, point: "espero que + 虚拟式否定 no llueva" },
            { english: "Nobody knows the answer.", chinese: "没有人知道答案。", spanish: "Nadie sabe la respuesta.", tier: 7, point: "nadie + 动词单数第三人称" },
            { english: "This street is less noisy than the other one.", chinese: "这条街不如那条吵。", spanish: "Esta calle es menos ruidosa que la otra.", tier: 2, point: "menos + 形容词 + que（不如）" },
            { english: "My house is smaller than yours.", chinese: "我的房子比你的小。", spanish: "Mi casa es más pequeña que la tuya.", tier: 2, point: "más + 形容词 + la tuya" },
            { english: "He says that the exam is very difficult.", chinese: "他说考试很难。", spanish: "Él dice que el examen es muy difícil.", tier: 3, point: "间接引语 + 形容词 difícil" },
            { english: "I hope you can come to my party.", chinese: "我希望你能来我的聚会。", spanish: "Espero que puedas venir a mi fiesta.", tier: 12, point: "espero que + 虚拟式 puedas" },
            { english: "She asks me where the bank is.", chinese: "她问我银行在哪里。", spanish: "Ella me pregunta dónde está el banco.", tier: 6, point: "间接疑问 dónde + 陈述式语序" }
        ]
    },
    {
        id: 37,
        group: 'main',
        title: "教材第14课：愿望与情感",
        summary: "虚拟式用法（愿望/建议）、夺格人称代词、介词综合",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "虚拟式表示愿望（核心用法）",
                    explain: "表达「我希望/但愿别人做某事」时，从句用虚拟式：Espero que…（我希望…）、Quiero que…（我要…）、Ojalá…（但愿…）。注意主从句主语不同时必须用虚拟式。",
                    examples: [
                        { es: "Quiero que me ayudes con la mudanza.", zh: "我要你帮我搬家。" },
                        { es: "Ojalá tengas mucha suerte.", zh: "祝你好运。" }
                    ]
                },
                {
                    title: "虚拟式表示建议和必要性",
                    explain: "建议类结构后接虚拟式：Es importante que…（…很重要）、Es mejor que…（最好…）、Te recomiendo que…（我建议你…）。",
                    examples: [
                        { es: "Es importante que descanses bien.", zh: "你好好休息很重要。" },
                        { es: "Te recomiendo que veas esta película.", zh: "我建议你看这部电影。" }
                    ]
                },
                {
                    title: "夺格人称代词",
                    explain: "介词后面要用夺格代词：para mí（为了我）、para ti（为了你）、conmigo（和我）、contigo（和你）。注意 con + mí/ti 要连写。",
                    examples: [
                        { es: "Este regalo es para ti.", zh: "这件礼物是给你的。" },
                        { es: "¿Quieres venir conmigo al cine?", zh: "你想和我一起去看电影吗？" }
                    ]
                },
                {
                    title: "常用介词小结",
                    explain: "a（到/向）、de（的/来自）、en（在）、con（和/用）、para（为了/给）、por（因为/通过）、desde（从…起）、hasta（直到）、sin（没有）、sobre（关于）。",
                    examples: [
                        { es: "Estudio español desde hace dos años.", zh: "我学西语两年了。" },
                        { es: "No puedo vivir sin música.", zh: "没有音乐我活不下去。" }
                    ]
                }
            ],
            vocab: [
                { es: "mudanza", pos: "名词(阴)", zh: "搬家" },
                { es: "importante", pos: "形容词", zh: "重要的" },
                { es: "recomendar", pos: "动词", zh: "推荐，建议" },
                { es: "conmigo / contigo", pos: "夺格代词", zh: "和我 / 和你" },
                { es: "para mí / para ti", pos: "夺格代词", zh: "为了我 / 为了你" },
                { es: "desde", pos: "介词", zh: "从…起" },
                { es: "hasta", pos: "介词", zh: "直到" },
                { es: "sin", pos: "介词", zh: "没有" },
                { es: "sobre", pos: "介词", zh: "关于；在…上面" },
                { es: "descansar", pos: "动词", zh: "休息" },
                { es: "mudarse", pos: "代词式动词", zh: "搬家" },
                { es: "vacaciones", pos: "名词(阴复)", zh: "假期" },
                { es: "noticia", pos: "名词(阴)", zh: "消息，新闻" },
                { es: "tener razón", pos: "短语", zh: "有道理，是对的" }
            ]
        },
        sentences: [
            { english: "I want you to help me with the move.", chinese: "我要你帮我搬家。", spanish: "Quiero que me ayudes con la mudanza.", tier: 12, point: "quiero que + 虚拟式 ayudes" },
            { english: "I wish you lots of luck.", chinese: "祝你好运。", spanish: "Ojalá tengas mucha suerte.", tier: 12, point: "ojalá + 虚拟式 tengas" },
            { english: "It is important that you rest well.", chinese: "你好好休息很重要。", spanish: "Es importante que descanses bien.", tier: 12, point: "es importante que + 虚拟式" },
            { english: "I recommend that you watch this movie.", chinese: "我建议你看这部电影。", spanish: "Te recomiendo que veas esta película.", tier: 12, point: "recomiendo que + 虚拟式 veas" },
            { english: "This present is for you.", chinese: "这件礼物是给你的。", spanish: "Este regalo es para ti.", tier: 2, point: "夺格代词 ti（para + ti）" },
            { english: "Do you want to come to the cinema with me?", chinese: "你想和我一起去看电影吗？", spanish: "¿Quieres venir conmigo al cine?", tier: 6, point: "夺格代词 conmigo（con+mí 连写）" },
            { english: "I have been studying Spanish for two years.", chinese: "我学西语两年了。", spanish: "Estudio español desde hace dos años.", tier: 3, point: "desde hace + 时间段（从…前起一直）" },
            { english: "I cannot live without music.", chinese: "没有音乐我活不下去。", spanish: "No puedo vivir sin música.", tier: 7, point: "sin + 名词；no puedo + 原形" },
            { english: "I hope you like the new house.", chinese: "我希望你喜欢新房子。", spanish: "Espero que te guste la casa nueva.", tier: 12, point: "espero que + 虚拟式 guste" },
            { english: "The teacher asks that we arrive early.", chinese: "老师要求我们早点到。", spanish: "La profesora pide que lleguemos temprano.", tier: 12, point: "pedir que + 虚拟式 lleguemos" },
            { english: "It is better that you wait here.", chinese: "你最好在这里等。", spanish: "Es mejor que esperes aquí.", tier: 12, point: "es mejor que + 虚拟式 esperes" },
            { english: "We work from nine until six.", chinese: "我们从九点工作到六点。", spanish: "Trabajamos desde las nueve hasta las seis.", tier: 3, point: "desde…hasta…（从…到…）" },
            { english: "This book is about Spanish history.", chinese: "这本书是关于西班牙历史的。", spanish: "Este libro es sobre la historia de España.", tier: 2, point: "sobre 关于" },
            { english: "I want you to tell me the truth.", chinese: "我要你对我说实话。", spanish: "Quiero que me digas la verdad.", tier: 12, point: "quiero que + 虚拟式 digas（decir 不规则）" },
            { english: "You are right, the plan is very good.", chinese: "你说得对，这个计划很好。", spanish: "Tienes razón, el plan es muy bueno.", tier: 4, point: "tener razón 有道理" },
            { english: "We are going to the mountains in the holidays.", chinese: "我们假期去山里。", spanish: "En las vacaciones vamos a la montaña.", tier: 4, point: "en las vacaciones + ir a" }
        ]
    },
    {
        id: 38,
        group: 'main',
        title: "教材第15课：无人称与被动",
        summary: "虚拟式用法（情感）、自复被动句、无人称句、llevar + 副动词",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "虚拟式表示情感和评价",
                    explain: "表达对某事的感受和评价时，从句用虚拟式：Me alegro de que…（我很高兴…）、Me sorprende que…（我惊讶…）、Es una pena que…（可惜…）。",
                    examples: [
                        { es: "Me alegro de que estés bien.", zh: "我很高兴你一切都好。" },
                        { es: "Es una pena que no puedas venir.", zh: "可惜你不能来。" }
                    ]
                },
                {
                    title: "自复被动句",
                    explain: "se + 动词第三人称可以表示被动含义「被…」：Se habla español aquí.（这里说西语）。主语是物，不强调动作的执行者。",
                    examples: [
                        { es: "Aquí se venden verduras frescas.", zh: "这里卖新鲜蔬菜。" },
                        { es: "Se hablan muchos idiomas en esta ciudad.", zh: "这座城市说很多种语言。" }
                    ]
                },
                {
                    title: "无人称句",
                    explain: "se + 第三人称单数可以表示「人们、大家」：Se vive bien aquí.（这里生活舒适）。没有具体主语，泛指所有人。",
                    examples: [
                        { es: "En este barrio se vive muy tranquilo.", zh: "这个街区住着很安静。" },
                        { es: "¿Cómo se dice esto en español?", zh: "这个用西语怎么说？" }
                    ]
                },
                {
                    title: "LLEVAR + 副动词",
                    explain: "llevar + 时间 + 副动词表示「做某事已有…时间」：Llevo dos años estudiando español.（我学西语两年了）。",
                    examples: [
                        { es: "Llevo tres meses viviendo en Madrid.", zh: "我在马德里住了三个月了。" },
                        { es: "Ella lleva una hora esperando.", zh: "她已经等了一个小时。" }
                    ]
                }
            ],
            vocab: [
                { es: "alegrarse de", pos: "动词短语", zh: "为…高兴（+虚拟式）" },
                { es: "sorprender", pos: "动词", zh: "使惊讶" },
                { es: "pena", pos: "名词(阴)", zh: "遗憾；难过" },
                { es: "se habla / se vende", pos: "自复被动", zh: "说（被说）/ 卖（被卖）" },
                { es: "se dice", pos: "无人称", zh: "（人们）说" },
                { es: "llevar + 时间 + gerundio", pos: "动词短语", zh: "做…已有…时间" },
                { es: "verdura", pos: "名词(阴)", zh: "蔬菜" },
                { es: "fresco, fresca", pos: "形容词", zh: "新鲜的" },
                { es: "barrio", pos: "名词(阳)", zh: "街区" },
                { es: "tranquilo, tranquila", pos: "形容词", zh: "安静的" },
                { es: "idioma", pos: "名词(阳)", zh: "语言" },
                { es: "mes", pos: "名词(阳)", zh: "月份" },
                { es: "una hora", pos: "短语", zh: "一个小时" },
                { es: "alegre", pos: "形容词", zh: "开心的" }
            ]
        },
        sentences: [
            { english: "I am glad that you are well.", chinese: "我很高兴你一切都好。", spanish: "Me alegro de que estés bien.", tier: 12, point: "me alegro de que + 虚拟式 estés" },
            { english: "It is a pity that you cannot come.", chinese: "可惜你不能来。", spanish: "Es una pena que no puedas venir.", tier: 12, point: "es una pena que + 虚拟式" },
            { english: "Fresh vegetables are sold here.", chinese: "这里卖新鲜蔬菜。", spanish: "Aquí se venden verduras frescas.", tier: 13, point: "自复被动 se venden（物作主语复数）" },
            { english: "Many languages are spoken in this city.", chinese: "这座城市说很多种语言。", spanish: "Se hablan muchos idiomas en esta ciudad.", tier: 13, point: "自复被动 se hablan + 复数" },
            { english: "Life is very peaceful in this neighborhood.", chinese: "这个街区住着很安静。", spanish: "En este barrio se vive muy tranquilo.", tier: 13, point: "无人称 se vive" },
            { english: "How do you say this in Spanish?", chinese: "这个用西语怎么说？", spanish: "¿Cómo se dice esto en español?", tier: 13, point: "无人称疑问 ¿Cómo se dice…?" },
            { english: "I have been living in Madrid for three months.", chinese: "我在马德里住了三个月了。", spanish: "Llevo tres meses viviendo en Madrid.", tier: 14, point: "llevar + 时间 + 副动词" },
            { english: "She has been waiting for an hour.", chinese: "她已经等了一个小时。", spanish: "Ella lleva una hora esperando.", tier: 14, point: "lleva + 时间 + esperando" },
            { english: "It surprises me that you are so fast.", chinese: "你这么快让我很惊讶。", spanish: "Me sorprende que seas tan rápido.", tier: 12, point: "me sorprende que + 虚拟式 seas" },
            { english: "Spanish is spoken in many countries.", chinese: "很多国家都说西语。", spanish: "Se habla español en muchos países.", tier: 13, point: "自复被动 se habla + 单数" },
            { english: "I am glad that you like the food.", chinese: "我很高兴你喜欢这些菜。", spanish: "Me alegro de que te guste la comida.", tier: 12, point: "me alegro de que + 虚拟式 guste" },
            { english: "How long have you been studying Spanish?", chinese: "你学西语多长时间了？", spanish: "¿Cuánto tiempo llevas estudiando español?", tier: 14, point: "llevas + 时间 + 副动词疑问" },
            { english: "The shop opens at nine.", chinese: "商店九点开门。", spanish: "La tienda se abre a las nueve.", tier: 13, point: "自复被动 se abre（开门）" },
            { english: "It is a pity that it is raining.", chinese: "真可惜下雨了。", spanish: "Es una pena que llueva.", tier: 12, point: "es una pena que + 虚拟式 llueva" },
            { english: "One eats very well in this restaurant.", chinese: "这家餐厅吃得很不错。", spanish: "En este restaurante se come muy bien.", tier: 13, point: "无人称 se come + muy bien" },
            { english: "I have been learning guitar for a year.", chinese: "我学吉他一年了。", spanish: "Llevo un año aprendiendo a tocar la guitarra.", tier: 14, point: "llevo + 时间 + 副动词" }
        ]
    },
    {
        id: 39,
        group: 'main',
        title: "教材第16课：状态与完成",
        summary: "过去分词、ser/estar 区别、llevar + 过去分词、hace falta",
        difficulty: "进阶",
        length: "16 句",
        teaching: {
            points: [
                {
                    title: "过去分词（入门）",
                    explain: "过去分词由动词构成：-ar → -ado（hablado 说过）、-er/-ir → -ido（comido 吃过、vivido 住过）。常用不规则：hecho（做）、dicho（说）、escrito（写）、visto（看）、puesto（放）、abierto（开）。",
                    examples: [
                        { es: "La puerta está abierta.", zh: "门开着。（过去分词 abierto 表状态）" },
                        { es: "El trabajo está terminado.", zh: "工作做完了。" }
                    ]
                },
                {
                    title: "SER 和 ESTAR 的区别（总结）",
                    explain: "ser 表本质、身份、来源、时间等不变特征；estar 表位置、临时状态、正在进行的动作。同一个形容词配两个动词意思不同：ser bueno（人好）、estar bueno（味道好/身体健康）。",
                    examples: [
                        { es: "La sopa está muy buena hoy.", zh: "今天的汤很好喝。（味道，estar）" },
                        { es: "Mi abuela es muy buena con los niños.", zh: "我奶奶对孩子们很好。（人品，ser）" }
                    ]
                },
                {
                    title: "LLEVAR + 过去分词",
                    explain: "llevar + 数量 + 过去分词表示「已经完成的数量」：Llevo leídos tres capítulos.（我已经读了三章）。过去分词与名词性数一致。",
                    examples: [
                        { es: "Llevo escritas dos cartas.", zh: "我已经写了两封信。" },
                        { es: "Ya llevamos visitadas cinco ciudades.", zh: "我们已经参观了五座城市。" }
                    ]
                },
                {
                    title: "HACER FALTA（需要）",
                    explain: "hace falta + 名词/原形表示「需要」：Hace falta tiempo.（需要时间）。和 tener que（个人义务）不同，它更客观。",
                    examples: [
                        { es: "Hace falta practicar todos los días.", zh: "需要每天练习。" },
                        { es: "No hace falta traer nada.", zh: "什么都不用带。" }
                    ]
                }
            ],
            vocab: [
                { es: "abierto, abierta", pos: "过去分词", zh: "开着的" },
                { es: "terminado, terminada", pos: "过去分词", zh: "完成了的" },
                { es: "hecho / dicho / escrito", pos: "过去分词(不规则)", zh: "做了的 / 说了的 / 写了的" },
                { es: "visto / puesto", pos: "过去分词(不规则)", zh: "看了的 / 放了的" },
                { es: "hace falta", pos: "无人称短语", zh: "需要" },
                { es: "practicar", pos: "动词", zh: "练习" },
                { es: "capítulo", pos: "名词(阳)", zh: "章节" },
                { es: "nada", pos: "不定代词", zh: "没有任何东西" },
                { es: "todo, toda", pos: "不定形容词", zh: "所有的，整个" },
                { es: "nadie", pos: "不定代词", zh: "没有人" },
                { es: "cerrado, cerrada", pos: "过去分词", zh: "关着的" },
                { es: "cansado, cansada", pos: "形容词", zh: "累的" },
                { es: "contento, contenta", pos: "形容词", zh: "高兴的" },
                { es: "preocupado, preocupada", pos: "形容词", zh: "担心的" }
            ]
        },
        sentences: [
            { english: "The door is open.", chinese: "门开着。", spanish: "La puerta está abierta.", tier: 13, point: "过去分词 abierto 作状态形容词（与阴性一致）" },
            { english: "The work is finished.", chinese: "工作做完了。", spanish: "El trabajo está terminado.", tier: 13, point: "过去分词 terminado + estar 表状态" },
            { english: "The soup is very good today.", chinese: "今天的汤很好喝。", spanish: "La sopa está muy buena hoy.", tier: 2, point: "estar bueno 表味道好（临时状态）" },
            { english: "My grandmother is very good with children.", chinese: "我奶奶对孩子们很好。", spanish: "Mi abuela es muy buena con los niños.", tier: 2, point: "ser bueno 表人品好（本质特征）" },
            { english: "I have already written two letters.", chinese: "我已经写了两封信。", spanish: "Llevo escritas dos cartas.", tier: 13, point: "llevar + 过去分词 escritas（性数一致）" },
            { english: "We have already visited five cities.", chinese: "我们已经参观了五座城市。", spanish: "Ya llevamos visitadas cinco ciudades.", tier: 13, point: "llevar + 过去分词 visitadas" },
            { english: "It is necessary to practice every day.", chinese: "需要每天练习。", spanish: "Hace falta practicar todos los días.", tier: 13, point: "hace falta + 动词原形" },
            { english: "You don't need to bring anything.", chinese: "什么都不用带。", spanish: "No hace falta traer nada.", tier: 13, point: "no hace falta + 原形 + nada" },
            { english: "The windows are closed.", chinese: "窗户关着。", spanish: "Las ventanas están cerradas.", tier: 13, point: "过去分词 cerradas 复数阴性" },
            { english: "I am very tired today.", chinese: "我今天很累。", spanish: "Hoy estoy muy cansado.", tier: 2, point: "estar + 状态形容词 cansado" },
            { english: "Are you worried about the exam?", chinese: "你担心考试吗？", spanish: "¿Estás preocupado por el examen?", tier: 6, point: "estar + preocupado por" },
            { english: "She is very happy with her new job.", chinese: "她对新工作很满意。", spanish: "Ella está muy contenta con su nuevo trabajo.", tier: 2, point: "estar contento con（对…满意）" },
            { english: "The letter is written in Spanish.", chinese: "这封信是用西语写的。", spanish: "La carta está escrita en español.", tier: 13, point: "不规则过去分词 escrita + en 语言" },
            { english: "We need more time.", chinese: "我们需要更多时间。", spanish: "Hace falta más tiempo.", tier: 13, point: "hace falta + 名词" },
            { english: "The shop is closed on Mondays.", chinese: "商店周一关门。", spanish: "La tienda está cerrada los lunes.", tier: 13, point: "过去分词 cerrada 表状态 + 星期复数" },
            { english: "I am not tired, I am just sleepy.", chinese: "我不累，只是困。", spanish: "No estoy cansado, solo tengo sueño.", tier: 7, point: "否定 + tener sueño 困" }
        ]
    }
];
