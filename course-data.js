// 西语每日练 · 课程数据（内容版 v1.1.0）
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
    }
];
