// 西语每日练 · 离线词典数据（内容版）
// 铁律：已发布词条的 w 永不改名；释义课程语境优先，每条 1-3 个义项。
// conj 字段 = 指向 VERBS_DATA 里的动词原形（自动展示变位表）。
// DICT_FORMS_DATA = 变形 → 原形（20 个核心动词的变形由 index.html 从 VERBS_DATA
// 自动生成，这里只补其他动词和分词/副动词等）。
//
// 富词条（可选字段，有 senses 即走新渲染路径）：
//   senses[]  —— 义项以 RAE/DLE 为准划分，2-4 项；每项 { zh 释义(≤20字), ex[] 例句0-2条{es,zh},
//                src? 释义来源 rae(默认)/orig, w? 义项只归属词头某逗号词形 }
//   phrases[] —— 常用搭配 1-3 个 {es, zh}
//   note      —— 用法提示（≤30字，只写真易错点）
//   emoji     —— 词头前助记图（只给能无歧义助记的实义词，全批 ≤ 一半词条）
//   zh 重写为单元素首义项速览：zh[0] === senses[0].zh（全部义项带 w 归属时斜杠连接）。
// 无 senses 的词条 = 旧格式，渲染走原路径。
var DICT_DATA = [
    { w: "a", pos: "prep.", zh: ["到，向；在（时间点）"] },
    { w: "abierto, abierta", pos: "adj.", zh: ["开着的"] },
    { w: "abril", pos: "m.", zh: ["四月"] },
    { w: "abrir", pos: "v.", zh: ["打开，开"], conj: "abrir",
        senses: [
            { zh: "打开，开", ex: [{ es: "Abro la ventana porque hace calor.", zh: "我打开窗户，因为天热。" }] },
            { zh: "开门（营业）", ex: [{ es: "La tienda abre a las nueve.", zh: "商店九点开门。" }] },
            { zh: "开启，开办", ex: [{ es: "Van a abrir un restaurante nuevo.", zh: "他们要开一家新餐馆。" }] }
        ],
        phrases: [
            { es: "abrir la puerta", zh: "开门" },
            { es: "abrir la ventana", zh: "开窗" }
        ] },
    { w: "abuela", pos: "f.", zh: ["奶奶，外婆"] },
    { w: "abuelo, abuela", pos: "m./f.", zh: ["爷爷，外公 / 奶奶，外婆"],
        senses: [
            { w: "abuelo", zh: "爷爷，外公", ex: [{ es: "Mi abuelo tiene ochenta años.", zh: "我爷爷八十岁了。" }] },
            { w: "abuela", zh: "奶奶，外婆", ex: [{ es: "Mi abuela vive con nosotros.", zh: "我奶奶和我们住在一起。" }] }
        ],
        phrases: [
            { es: "los abuelos", zh: "祖父母，外祖父母" }
        ] },
    { w: "aburrido, aburrida", pos: "adj.", zh: ["无聊的，枯燥的"] },
    { w: "acostarse", pos: "v.", zh: ["上床睡觉"],
        senses: [
            { zh: "上床睡觉", ex: [{ es: "Me acuesto a las once.", zh: "我十一点上床睡觉。" }] },
            { zh: "躺下", ex: [{ es: "Se acostó en el sofá.", zh: "他躺到沙发上。" }] }
        ],
        phrases: [
            { es: "acostarse temprano", zh: "早睡" },
            { es: "hora de acostarse", zh: "睡觉时间" }
        ],
        note: "acostarse 是自复动词：me acuesto, te acuestas…" },
    { w: "agradecer", pos: "v.", zh: ["感谢"] },
    { w: "agua", pos: "f.", zh: ["水"] },
    { w: "ahora", pos: "adv.", zh: ["现在"],
        senses: [
            { zh: "现在", ex: [{ es: "Ahora estoy en casa.", zh: "我现在在家。" }] },
            { zh: "马上，这就", ex: [{ es: "Voy ahora mismo.", zh: "我马上就去。" }] }
        ],
        phrases: [
            { es: "ahora mismo", zh: "马上" },
            { es: "hasta ahora", zh: "回头见" }
        ] },
    { w: "al", pos: "prep.", zh: ["（a + el 的缩合）到…（阳性单数名词前）"] },
    { w: "alcohol", pos: "m.", zh: ["酒精，酒"] },
    { w: "alegrarse", pos: "v.", zh: ["感到高兴"] },
    { w: "alegre", pos: "adj.", zh: ["快乐的，高兴的"] },
    { w: "algo", pos: "pron.", zh: ["某事物，一些东西"] },
    { w: "allí", pos: "adv.", zh: ["那里"] },
    { w: "almuerzo", pos: "m.", zh: ["午餐"] },
    { w: "alto, alta", pos: "adj.", zh: ["高的；大声的"] },
    { w: "amable", pos: "adj.", zh: ["和蔼的，友善的"] },
    { w: "amiga", pos: "f.", zh: ["女性朋友"] },
    { w: "amigo, amiga", pos: "m./f.", zh: ["朋友"],
        senses: [
            { zh: "朋友", ex: [{ es: "Ana es mi mejor amiga.", zh: "安娜是我最好的朋友。" }] },
            { zh: "男朋友 / 女朋友（口语）", ex: [{ es: "Viene a la fiesta con su amiga.", zh: "他带着女朋友来参加聚会。" }] }
        ],
        phrases: [
            { es: "mejor amigo / amiga", zh: "最好的朋友" },
            { es: "hacer amigos", zh: "交朋友" }
        ] },
    { w: "Ana", pos: "人名", zh: ["安娜"] },
    { w: "anoche", pos: "adv.", zh: ["昨晚"] },
    { w: "antiguo, antigua", pos: "adj.", zh: ["古老的，旧的"] },
    { w: "año", pos: "m.", zh: ["年"], emoji: "🗓️",
        senses: [
            { zh: "年", ex: [{ es: "El año tiene doce meses.", zh: "一年有十二个月。" }] },
            { zh: "…岁（tener … años）", ex: [{ es: "Tengo veinte años.", zh: "我二十岁。" }] }
        ],
        phrases: [
            { es: "el año pasado", zh: "去年" },
            { es: "el año que viene", zh: "明年" },
            { es: "tener … años", zh: "…岁" }
        ],
        note: "「…岁」用复数：tengo 20 años。" },
    { w: "aeropuerto", pos: "m.", zh: ["机场"] },
    { w: "antes", pos: "adv.", zh: ["之前（antes de … 在…之前）"] },
    { w: "aprender", pos: "v.", zh: ["学习，学会"], conj: "aprender",
        senses: [
            { zh: "学习，学会", ex: [{ es: "Aprendo español con esta aplicación.", zh: "我用这个应用学西班牙语。" }] },
            { zh: "学会做…（a + 动词原形）", ex: [{ es: "Aprendí a nadar cuando era niño.", zh: "我小时候学会了游泳。" }] }
        ],
        phrases: [
            { es: "aprender a + inf.", zh: "学会做…" },
            { es: "aprender de memoria", zh: "背下来" }
        ],
        note: "aprender a + 动词原形：学会做某事。" },
    { w: "aquel, aquella", pos: "pron.", zh: ["那个（离双方都远）"] },
    { w: "aquí", pos: "adv.", zh: ["这里"],
        senses: [
            { zh: "这里", ex: [{ es: "Aquí está mi casa.", zh: "这里是我的家。" }] }
        ],
        phrases: [
            { es: "aquí mismo", zh: "就在这里" },
            { es: "por aquí", zh: "在这附近" }
        ],
        note: "aquí（这里）离说话人近，allí（那里）离得远。" },
    { w: "autobús", pos: "m.", zh: ["公交车"] },
    { w: "avión", pos: "m.", zh: ["飞机"] },
    { w: "ayer", pos: "adv.", zh: ["昨天"],
        senses: [
            { zh: "昨天", ex: [{ es: "Ayer llovió todo el día.", zh: "昨天下了一整天雨。" }, { es: "Ayer fui al cine con Ana.", zh: "昨天我和安娜去了电影院。" }] }
        ],
        phrases: [
            { es: "ayer por la tarde", zh: "昨天下午" },
            { es: "ayer por la noche", zh: "昨天晚上" }
        ] },
    { w: "ayuda", pos: "f.", zh: ["帮助"] },
    { w: "ayudar", pos: "v.", zh: ["帮助"],
        senses: [
            { zh: "帮助", ex: [{ es: "¿Puedes ayudarme, por favor?", zh: "你能帮帮我吗？" }] },
            { zh: "有帮助，有用", ex: [{ es: "Este diccionario me ayuda mucho.", zh: "这本词典对我帮助很大。" }] }
        ],
        phrases: [
            { es: "ayudar a alguien", zh: "帮助某人" },
            { es: "¿Puedes ayudarme?", zh: "你能帮我吗？" }
        ],
        note: "ayudar a + 人：帮助某人（记得加 a）。" },
    { w: "azúcar", pos: "m.", zh: ["糖"] },
    { w: "bailar", pos: "v.", zh: ["跳舞"] },
    { w: "baloncesto", pos: "m.", zh: ["篮球（运动）"] },
    { w: "banco", pos: "m.", zh: ["银行"], emoji: "🏦",
        senses: [
            { zh: "银行", ex: [{ es: "Voy al banco a sacar dinero.", zh: "我去银行取钱。" }] },
            { zh: "长椅", ex: [{ es: "Están sentados en un banco del parque.", zh: "他们坐在公园的长椅上。" }] }
        ],
        phrases: [
            { es: "ir al banco", zh: "去银行" },
            { es: "banco del parque", zh: "公园长椅" }
        ],
        note: "银行和长椅同形异义，看上下文区分。" },
    { w: "barato, barata", pos: "adj.", zh: ["便宜的"] },
    { w: "Barcelona", pos: "地名", zh: ["巴塞罗那"] },
    { w: "barrio", pos: "m.", zh: ["街区，社区"] },
    { w: "beber", pos: "v.", zh: ["喝，饮"], conj: "beber",
        senses: [
            { zh: "喝，饮", ex: [{ es: "Bebo agua después de correr.", zh: "跑步后我喝水。" }] },
            { zh: "喝酒", ex: [{ es: "Él bebe demasiado los fines de semana.", zh: "他周末喝得太多。" }] }
        ],
        phrases: [
            { es: "beber agua", zh: "喝水" },
            { es: "algo de beber", zh: "喝的东西" }
        ] },
    { w: "biblioteca", pos: "f.", zh: ["图书馆"] },
    { w: "bien", pos: "adv.", zh: ["好，很好地"],
        senses: [
            { zh: "好，很好地", ex: [{ es: "Hablas español muy bien.", zh: "你西语说得很好。" }] },
            { zh: "（身体/情况）好", ex: [{ es: "Estoy bien, gracias.", zh: "我很好，谢谢。" }] },
            { zh: "同意，行", ex: [{ es: "Está bien, vamos al cine.", zh: "好吧，我们去看电影。" }] }
        ],
        phrases: [
            { es: "estar bien", zh: "身体好 / 行" },
            { es: "muy bien", zh: "很好" },
            { es: "¿Está bien?", zh: "可以吗？" }
        ],
        note: "bien 修饰动词，bueno 修饰名词：Hablas bien。" },
    { w: "boda", pos: "f.", zh: ["婚礼"] },
    { w: "bonito, bonita", pos: "adj.", zh: ["漂亮的，好看的"], emoji: "🌸",
        senses: [
            { zh: "漂亮的，好看的", ex: [{ es: "Qué bonita es tu casa.", zh: "你家真漂亮。" }] },
            { zh: "（天气等）好的，宜人的", ex: [{ es: "Hace un día muy bonito.", zh: "今天天气很好。" }] }
        ],
        phrases: [
            { es: "¡Qué bonito!", zh: "真漂亮！" }
        ],
        note: "bonito 多形容好看，也可形容天气好。" },
    { w: "buen", pos: "adj.", zh: ["好的（bueno 在阳性名词前的短尾形式）"] },
    { w: "bueno, buena", pos: "adj.", zh: ["好的，不错的"],
        senses: [
            { zh: "好的，不错的", ex: [{ es: "Es un buen libro.", zh: "这是本好书。" }] },
            { zh: "善良的", ex: [{ es: "Mi abuela es muy buena.", zh: "我奶奶很善良。" }] }
        ],
        phrases: [
            { es: "¡Buenos días!", zh: "早上好！" },
            { es: "estar bueno", zh: "好吃（口语）" }
        ],
        note: "bueno 在阳性名词前缩写为 buen：buen libro。" },
    { w: "cabeza", pos: "f.", zh: ["头"] },
    { w: "cada", pos: "adj.", zh: ["每，每个"] },
    { w: "café", pos: "m.", zh: ["咖啡"], emoji: "☕",
        senses: [
            { zh: "咖啡", ex: [{ es: "Tomo un café con leche.", zh: "我喝一杯牛奶咖啡。" }] },
            { zh: "咖啡馆", ex: [{ es: "Quedamos en un café del centro.", zh: "我们约在市中心一家咖啡馆。" }] }
        ],
        phrases: [
            { es: "café con leche", zh: "牛奶咖啡" },
            { es: "tomar un café", zh: "喝杯咖啡" }
        ],
        note: "café con leche＝牛奶咖啡，点单常用。" },
    { w: "calle", pos: "f.", zh: ["街道"] },
    { w: "calor", pos: "m.", zh: ["热（hace calor 天气热）"] },
    { w: "cama", pos: "f.", zh: ["床"] },
    { w: "caminar", pos: "v.", zh: ["走路，步行"] },
    { w: "camisa", pos: "f.", zh: ["衬衫"] },
    { w: "campo", pos: "m.", zh: ["乡村，田野"] },
    { w: "cansado, cansada", pos: "adj.", zh: ["累的，疲倦的"] },
    { w: "capítulo", pos: "m.", zh: ["章节"] },
    { w: "cara", pos: "f.", zh: ["脸"] },
    { w: "carne", pos: "f.", zh: ["肉"] },
    { w: "caro, cara", pos: "adj.", zh: ["贵的"] },
    { w: "carta", pos: "f.", zh: ["信，书信"], emoji: "✉️",
        senses: [
            { zh: "信，书信", ex: [{ es: "Escribo una carta a mi abuela.", zh: "我给奶奶写信。" }] },
            { zh: "菜单（餐厅）", ex: [{ es: "Camarero, la carta, por favor.", zh: "服务员，请给我菜单。" }] },
            { zh: "扑克牌", ex: [{ es: "Jugamos a las cartas.", zh: "我们打牌。" }] }
        ],
        phrases: [
            { es: "escribir una carta", zh: "写信" },
            { es: "jugar a las cartas", zh: "打牌" }
        ],
        note: "餐厅里 la carta＝菜单，el menú 指当日套餐。" },
    { w: "casa", pos: "f.", zh: ["房子，房屋"], emoji: "🏠",
        senses: [
            { zh: "房子，房屋", ex: [{ es: "Mi casa tiene tres habitaciones.", zh: "我家有三个房间。" }] },
            { zh: "家，家里", ex: [{ es: "Vuelvo a casa a las seis.", zh: "我六点回家。" }] }
        ],
        phrases: [
            { es: "en casa", zh: "在家" },
            { es: "ir a casa", zh: "回家" }
        ],
        note: "「回家」说 ir a casa / volver a casa，不加冠词。" },
    { w: "casco", pos: "m.", zh: ["头盔"] },
    { w: "casi", pos: "adv.", zh: ["几乎，差不多"] },
    { w: "castillo", pos: "m.", zh: ["城堡"] },
    { w: "celebrar", pos: "v.", zh: ["庆祝"] },
    { w: "cena", pos: "f.", zh: ["晚餐"] },
    { w: "cenar", pos: "v.", zh: ["吃晚餐"] },
    { w: "centro", pos: "m.", zh: ["中心"] },
    { w: "cerca", pos: "adv.", zh: ["近（cerca de … 在…附近）"] },
    { w: "cerrado, cerrada", pos: "adj.", zh: ["关着的，关闭的"] },
    { w: "cerrar", pos: "v.", zh: ["关，关闭"],
        senses: [
            { zh: "关，关闭", ex: [{ es: "Cierro la ventana porque hace frío.", zh: "我关上窗户，因为天冷。" }] },
            { zh: "打烊，关门（营业结束）", ex: [{ es: "La tienda cierra a las ocho.", zh: "商店八点打烊。" }] }
        ],
        phrases: [
            { es: "cerrar la puerta", zh: "关门" },
            { es: "cerrar la ventana", zh: "关窗" }
        ],
        note: "开店＝abrir，打烊＝cerrar，是一对反义词。" },
    { w: "chaqueta", pos: "f.", zh: ["夹克，外套"] },
    { w: "chica", pos: "f.", zh: ["女孩"] },
    { w: "chico, chica", pos: "m./f.", zh: ["男孩 / 女孩"] },
    { w: "Chile", pos: "地名", zh: ["智利"] },
    { w: "China", pos: "地名", zh: ["中国"] },
    { w: "chino, china", pos: "adj./m./f.", zh: ["中国的 / 中国人"] },
    { w: "cien", pos: "num.", zh: ["一百"] },
    { w: "cinco", pos: "num.", zh: ["五"] },
    { w: "cincuenta", pos: "num.", zh: ["五十"] },
    { w: "cine", pos: "m.", zh: ["电影院；电影"] },
    { w: "cita", pos: "f.", zh: ["约会；预约"] },
    { w: "ciudad", pos: "f.", zh: ["城市"], emoji: "🏙️",
        senses: [
            { zh: "城市", ex: [{ es: "Madrid es una ciudad muy bonita.", zh: "马德里是一座很漂亮的城市。" }] }
        ],
        phrases: [
            { es: "el centro de la ciudad", zh: "市中心" },
            { es: "en la ciudad", zh: "在城里" }
        ] },
    { w: "claro", pos: "interj./adj.", zh: ["当然；清楚的"] },
    { w: "clase", pos: "f.", zh: ["课，课程"], emoji: "🏫",
        senses: [
            { zh: "课，课程", ex: [{ es: "La clase de español es a las nueve.", zh: "西语课九点上。" }] },
            { zh: "班级", ex: [{ es: "Tengo veinte compañeros en mi clase.", zh: "我们班有二十个同学。" }] },
            { zh: "种类，类型", ex: [{ es: "Me gusta esta clase de música.", zh: "我喜欢这类音乐。" }] }
        ],
        phrases: [
            { es: "dar clase", zh: "上课" },
            { es: "clase de + 学科", zh: "…课" }
        ] },
    { w: "coche", pos: "m.", zh: ["汽车"] },
    { w: "cocinar", pos: "v.", zh: ["做饭"] },
    { w: "color", pos: "m.", zh: ["颜色"] },
    { w: "comer", pos: "v.", zh: ["吃"], conj: "comer",
        senses: [
            { zh: "吃", ex: [{ es: "Como fruta todos los días.", zh: "我每天吃水果。" }] },
            { zh: "吃午饭（一天的正餐）", ex: [{ es: "En España comen a las dos.", zh: "在西班牙，人们两点吃午饭。" }] },
            { zh: "吃饭", ex: [{ es: "Hoy comemos en un restaurante.", zh: "今天我们在餐馆吃饭。" }] }
        ],
        phrases: [
            { es: "comer fuera", zh: "在外面吃" },
            { es: "ir a comer", zh: "去吃饭" }
        ],
        note: "西语里 comer 常特指吃午饭（正餐）。" },
    { w: "comida", pos: "f.", zh: ["食物；饭"] },
    { w: "cómodo, cómoda", pos: "adj.", zh: ["舒服的"] },
    { w: "compañero, compañera", pos: "m./f.", zh: ["同学，同事，同伴"] },
    { w: "comprar", pos: "v.", zh: ["买，购买"], conj: "comprar",
        senses: [
            { zh: "买，购买", ex: [{ es: "Voy a comprar pan en la tienda.", zh: "我要去商店买面包。" }] },
            { zh: "给某人买（algo a alguien）", ex: [{ es: "Le compré un regalo a mi madre.", zh: "我给妈妈买了一件礼物。" }] }
        ],
        phrases: [
            { es: "ir de compras", zh: "去购物" },
            { es: "comprar algo a alguien", zh: "给某人买某物" }
        ] },
    { w: "con", pos: "prep.", zh: ["和，跟，用，带着"] },
    { w: "conmigo", pos: "pron.", zh: ["和我（con + mí）"] },
    { w: "conocer", pos: "v.", zh: ["认识，结识（人）"],
        senses: [
            { zh: "认识，结识（人）", ex: [{ es: "Conocí a Ana en la universidad.", zh: "我在大学里认识了安娜。" }] },
            { zh: "了解，熟悉（地方等）", ex: [{ es: "Conozco muy bien esta ciudad.", zh: "我很熟悉这座城市。" }] },
            { zh: "第一次去/见（目的地）", ex: [{ es: "Quiero conocer España.", zh: "我想去西班牙看看。" }] }
        ],
        phrases: [
            { es: "conocer a alguien", zh: "认识某人" },
            { es: "mucho gusto en conocerte", zh: "很高兴认识你" }
        ],
        note: "conocer a + 人：认识某人（记得加 a）。" },
    { w: "contar", pos: "v.", zh: ["讲述；数数"] },
    { w: "contento, contenta", pos: "adj.", zh: ["高兴的，满意的"] },
    { w: "contestar", pos: "v.", zh: ["回答"] },
    { w: "contigo", pos: "pron.", zh: ["和你（con + ti）"] },
    { w: "comenzar", pos: "v.", zh: ["开始"] },
    { w: "acuerdo", pos: "m.", zh: ["同意（de acuerdo 同意，好）"] },
    { w: "divertirse", pos: "v.", zh: ["玩得开心"] },
    { w: "Li", pos: "人名", zh: ["李（姓）"] },
    { w: "Ming", pos: "人名", zh: ["明（名）"] },
    { w: "ninguno, ninguna", pos: "pron.", zh: ["没有一个（no … ninguno 一个也不）"] },
    { w: "correr", pos: "v.", zh: ["跑步"] },
    { w: "costar", pos: "v.", zh: ["值（多少钱）；费力"] },
    { w: "creer", pos: "v.", zh: ["相信；认为"] },
    { w: "cuál, cuáles", pos: "pron.", zh: ["哪一个，哪些"] },
    { w: "cuando, cuándo", pos: "conj./pron.", zh: ["当…时候", "什么时候（cuándo，重音不同）"] },
    { w: "como, cómo", pos: "conj./pron.", zh: ["像，如同", "怎么，怎样（¿cómo? 怎么样？）"] },
    { w: "cuánto, cuánta", pos: "pron.", zh: ["多少"] },
    { w: "cuarenta", pos: "num.", zh: ["四十"] },
    { w: "cumpleaños", pos: "m.", zh: ["生日"], emoji: "🎂",
        senses: [
            { zh: "生日", ex: [{ es: "Hoy es el cumpleaños de mi madre.", zh: "今天是我妈妈生日。" }] }
        ],
        phrases: [
            { es: "¡Feliz cumpleaños!", zh: "生日快乐！" },
            { es: "regalo de cumpleaños", zh: "生日礼物" },
            { es: "fiesta de cumpleaños", zh: "生日聚会" }
        ] },
    { w: "cumplir", pos: "v.", zh: ["完成；满（…岁）"] },
    { w: "dar", pos: "v.", zh: ["给"], conj: "dar",
        senses: [
            { zh: "给", ex: [{ es: "Le doy un regalo a mi madre.", zh: "我送给妈妈一份礼物。" }] },
            { zh: "举办，上演（课/聚会等）", ex: [{ es: "La profesora da clase de español.", zh: "老师上西语课。" }] }
        ],
        phrases: [
            { es: "dar un paseo", zh: "散步" },
            { es: "dar las gracias", zh: "道谢" },
            { es: "dar clase", zh: "上课" }
        ],
        note: "dar 搭配极多：dar un paseo（散步）、dar las gracias（道谢）。" },
    { w: "de", pos: "prep.", zh: ["的；从；关于"] },
    { w: "deber", pos: "m.", zh: ["必须，应该（+ 动词原形）"],
        senses: [
            { zh: "必须，应该（+ 动词原形）", ex: [{ es: "Debes estudiar más.", zh: "你应该多学习。" }] },
            { zh: "欠（钱、人情）", ex: [{ es: "Me debes diez euros.", zh: "你欠我十欧元。" }] },
            { zh: "作业（m.，常复数 deberes）", ex: [{ es: "Hago los deberes después de cenar.", zh: "我晚饭后做作业。" }] }
        ],
        phrases: [
            { es: "deber + inf.", zh: "应该做…" },
            { es: "hacer los deberes", zh: "做作业" }
        ],
        note: "名词 deber（常复数 deberes）＝作业，与动词同形。" },
    { w: "decidir", pos: "v.", zh: ["决定"] },
    { w: "decir", pos: "v.", zh: ["说，告诉"], conj: "decir",
        senses: [
            { zh: "说，告诉", ex: [{ es: "Dice que viene mañana.", zh: "他说他明天来。" }] },
            { zh: "告诉，对…说", ex: [{ es: "Te digo la verdad.", zh: "我跟你说实话。" }] },
            { zh: "（怎么）说，念", ex: [{ es: "¿Cómo se dice «gracias» en español?", zh: "「谢谢」用西语怎么说？" }] }
        ],
        phrases: [
            { es: "¿Cómo se dice…?", zh: "…怎么说？" },
            { es: "es decir", zh: "也就是说" }
        ],
        note: "「¿Cómo se dice…?」是学语言最常用的句子。" },
    { w: "del", pos: "prep.", zh: ["（de + el 的缩合）…的（阳性单数名词前）"] },
    { w: "demasiado, demasiada", pos: "adj./adv.", zh: ["太多的；太，过于"] },
    { w: "derecho, derecha", pos: "adj./adv.", zh: ["右的；直走（todo derecho 一直走）"] },
    { w: "desayunar", pos: "v.", zh: ["吃早餐"] },
    { w: "desayuno", pos: "m.", zh: ["早餐"] },
    { w: "descansar", pos: "v.", zh: ["休息"],
        senses: [
            { zh: "休息", ex: [{ es: "Descanso un poco después de comer.", zh: "午饭后我休息一会儿。" }] }
        ],
        phrases: [
            { es: "descansar un poco", zh: "休息一下" },
            { es: "día de descanso", zh: "休息日" }
        ] },
    { w: "desde", pos: "prep.", zh: ["从…起，自"] },
    { w: "despacio", pos: "adv.", zh: ["慢慢地"] },
    { w: "despedirse", pos: "v.", zh: ["告别，告辞"] },
    { w: "devolver", pos: "v.", zh: ["归还，退回"] },
    { w: "día", pos: "m.", zh: ["天，日子"], emoji: "📅",
        senses: [
            { zh: "天，日子", ex: [{ es: "Trabajo cinco días a la semana.", zh: "我一周工作五天。" }] },
            { zh: "白天", ex: [{ es: "Duerme de día y trabaja de noche.", zh: "他白天睡觉，晚上工作。" }] }
        ],
        phrases: [
            { es: "buenos días", zh: "早上好" },
            { es: "todos los días", zh: "每天" },
            { es: "¿Qué día es hoy?", zh: "今天星期几？" }
        ] },
    { w: "diario, diaria", pos: "adj.", zh: ["每天的"] },
    { w: "diccionario", pos: "m.", zh: ["词典"] },
    { w: "diez", pos: "num.", zh: ["十"] },
    { w: "difícil", pos: "adj.", zh: ["困难的"] },
    { w: "dime", pos: "fr.", zh: ["告诉我（decir 命令式 + me）"] },
    { w: "dirección", pos: "f.", zh: ["地址；方向"] },
    { w: "doler", pos: "v.", zh: ["疼，痛（me duele … 我…疼）"] },
    { w: "domingo", pos: "m.", zh: ["星期天"], emoji: "☀️",
        senses: [
            { zh: "星期天", ex: [{ es: "Los domingos descanso en casa.", zh: "星期天我在家休息。" }] }
        ],
        phrases: [
            { es: "el domingo pasado", zh: "上周日" },
            { es: "los domingos", zh: "每个星期天" }
        ] },
    { w: "dónde", pos: "pron.", zh: ["哪里"] },
    { w: "dormir", pos: "v.", zh: ["睡觉"] },
    { w: "dos", pos: "num.", zh: ["二"] },
    { w: "doscientos, doscientas", pos: "num.", zh: ["二百"] },
    { w: "durante", pos: "prep.", zh: ["在…期间"] },
    { w: "edificio", pos: "m.", zh: ["大楼，建筑物"] },
    { w: "el, la, los, las, él", pos: "art./pron.", zh: ["定冠词：这（那）个，这些", "他（él，重音不同）"] },
    { w: "ella", pos: "pron.", zh: ["她"] },
    { w: "ellos, ellas", pos: "pron.", zh: ["他们，她们"] },
    { w: "empezar", pos: "v.", zh: ["开始"],
        senses: [
            { zh: "开始", ex: [{ es: "La clase empieza a las nueve.", zh: "九点开始上课。" }] },
            { zh: "开始做…（a + 动词原形）", ex: [{ es: "Empiezo a estudiar español.", zh: "我开始学西班牙语。" }] }
        ],
        phrases: [
            { es: "empezar a + inf.", zh: "开始做…" },
            { es: "para empezar", zh: "首先" }
        ],
        note: "empezar 变位时 e 变 ie：empiezo, empiezas…" },
    { w: "empresa", pos: "f.", zh: ["公司"] },
    { w: "en", pos: "prep.", zh: ["在…里；在（地点/时间）"] },
    { w: "encantado, encantada", pos: "adj.", zh: ["很高兴（encantado de conocerte 很高兴认识你）"] },
    { w: "encantar", pos: "v.", zh: ["使非常喜欢（me encanta … 我非常喜欢…）"] },
    { w: "enfrente", pos: "adv.", zh: ["对面（enfrente de … 在…对面）"] },
    { w: "enseñar", pos: "v.", zh: ["教；给…看"] },
    { w: "entender", pos: "v.", zh: ["理解，听懂"] },
    { w: "escribir", pos: "v.", zh: ["写"], conj: "escribir",
        senses: [
            { zh: "写", ex: [{ es: "Escribo una carta a mi amiga.", zh: "我给朋友写信。" }] },
            { zh: "写作", ex: [{ es: "A mi padre le gusta escribir.", zh: "我爸爸喜欢写作。" }] }
        ],
        phrases: [
            { es: "escribir un mensaje", zh: "写消息" },
            { es: "escribir una carta", zh: "写信" }
        ] },
    { w: "escuchar", pos: "v.", zh: ["听"] },
    { w: "escuela", pos: "f.", zh: ["学校"] },
    { w: "ese, esa", pos: "pron.", zh: ["那个"] },
    { w: "España", pos: "地名", zh: ["西班牙"] },
    { w: "español, española", pos: "adj./m./f.", zh: ["西班牙的"],
        senses: [
            { zh: "西班牙的", ex: [{ es: "La comida española es muy buena.", zh: "西班牙菜很好吃。" }] },
            { zh: "西班牙人（m./f.）", ex: [{ es: "Mis amigos son españoles.", zh: "我的朋友们是西班牙人。" }] },
            { w: "español", zh: "西班牙语（m.）", ex: [{ es: "Estudio español todos los días.", zh: "我每天学习西班牙语。" }] }
        ],
        phrases: [
            { es: "clase de español", zh: "西语课" },
            { es: "hablar español", zh: "说西语" }
        ] },
    { w: "esperar", pos: "v.", zh: ["等待，等候"],
        senses: [
            { zh: "等待，等候", ex: [{ es: "Espero el autobús en la parada.", zh: "我在车站等公交车。" }] },
            { zh: "希望，期望", ex: [{ es: "Espero verte pronto.", zh: "我希望很快见到你。" }] }
        ],
        phrases: [
            { es: "esperar a alguien", zh: "等人" },
            { es: "esperar el autobús", zh: "等公交" }
        ],
        note: "esperar a + 人：等人（记得加 a）。" },
    { w: "esposa", pos: "f.", zh: ["妻子"] },
    { w: "esquina", pos: "f.", zh: ["街角"] },
    { w: "estación", pos: "f.", zh: ["车站；季节"] },
    { w: "estar", pos: "v.", zh: ["在（某处）"], conj: "estar",
        senses: [
            { zh: "在（某处）", ex: [{ es: "El libro está en la mesa.", zh: "书在桌子上。" }] },
            { zh: "处于（某种状态）", ex: [{ es: "Estoy cansado hoy.", zh: "我今天很累。" }] },
            { zh: "正在做…（+ 副动词）", ex: [{ es: "Estoy estudiando español.", zh: "我正在学西班牙语。" }] }
        ],
        phrases: [
            { es: "estar bien / mal", zh: "身体好 / 不舒服" },
            { es: "¿Cómo estás?", zh: "你好吗？" }
        ],
        note: "位置、状态、正在做 → estar；身份、本质 → ser。" },
    { w: "este, esta", pos: "pron.", zh: ["这个（esta 也可是 estar 的重音变形 → 在）"] },
    { w: "esto", pos: "pron.", zh: ["这个（中性，指代不明确事物）"] },
    { w: "estudiante", pos: "m./f.", zh: ["学生（男女同形）"], emoji: "🧑‍🎓",
        senses: [
            { zh: "学生（男女同形）", ex: [{ es: "Soy estudiante de español.", zh: "我是西语学生。" }] }
        ],
        phrases: [
            { es: "estudiante de español", zh: "西语学生" },
            { es: "estudiante de medicina", zh: "医学生" }
        ],
        note: "estudiante 男女同形：el / la estudiante。" },
    { w: "estudiar", pos: "v.", zh: ["学习"], conj: "estudiar",
        senses: [
            { zh: "学习", ex: [{ es: "Estudio español todos los días.", zh: "我每天学习西班牙语。" }] },
            { zh: "上学，就读", ex: [{ es: "Mi hermana estudia en la universidad.", zh: "我姐姐在大学读书。" }] },
            { zh: "研究，仔细看", ex: [{ es: "Los médicos estudian el problema.", zh: "医生们在研究这个问题。" }] }
        ],
        phrases: [
            { es: "estudiar en la universidad", zh: "上大学" },
            { es: "estudiar para el examen", zh: "备考" }
        ] },
    { w: "examen", pos: "m.", zh: ["考试"], emoji: "📝",
        senses: [
            { zh: "考试", ex: [{ es: "Mañana tengo un examen de español.", zh: "明天我有西语考试。" }] }
        ],
        phrases: [
            { es: "hacer un examen", zh: "参加考试" },
            { es: "aprobar el examen", zh: "通过考试" },
            { es: "suspender el examen", zh: "考试不及格" }
        ],
        note: "复数写成 exámenes，重音位置会变。" },
    { w: "explicar", pos: "v.", zh: ["解释，讲解"] },
    { w: "faltar", pos: "v.", zh: ["缺少，缺"],
        senses: [
            { zh: "缺少，缺", ex: [{ es: "Me falta dinero para el regalo.", zh: "我买礼物的钱不够。" }] },
            { zh: "缺席", ex: [{ es: "Hoy faltan dos estudiantes.", zh: "今天有两名学生缺席。" }] },
            { zh: "还有…（时间、距离）", ex: [{ es: "Faltan diez minutos para la clase.", zh: "还有十分钟上课。" }] }
        ],
        phrases: [
            { es: "me falta", zh: "我缺少…" },
            { es: "hace falta", zh: "需要" }
        ],
        note: "faltar 的主语是缺的东西：Me falta tiempo.（我缺时间）" },
    { w: "familia", pos: "f.", zh: ["家庭"] },
    { w: "famoso, famosa", pos: "adj.", zh: ["著名的"] },
    { w: "fantástico, fantástica", pos: "adj.", zh: ["极好的，棒极了的"] },
    { w: "farmacia", pos: "f.", zh: ["药店"] },
    { w: "favor", pos: "m.", zh: ["帮忙，恩惠"], emoji: "🤝",
        senses: [
            { zh: "帮忙，恩惠", ex: [{ es: "¿Me haces un favor?", zh: "你能帮我一个忙吗？" }] },
            { zh: "利益，好处（en favor de）", ex: [{ es: "La decisión es en favor de los estudiantes.", zh: "这个决定对学生们有利。" }] }
        ],
        phrases: [
            { es: "por favor", zh: "请" },
            { es: "hacer un favor", zh: "帮个忙" }
        ] },
    { w: "favorito, favorita", pos: "adj.", zh: ["最喜欢的"], emoji: "⭐",
        senses: [
            { zh: "最喜欢的", ex: [{ es: "El fútbol es mi deporte favorito.", zh: "足球是我最喜欢的运动。" }] }
        ],
        phrases: [
            { es: "mi libro favorito", zh: "我最喜欢的书" },
            { es: "mi comida favorita", zh: "我最喜欢的食物" }
        ] },
    { w: "felicidades", pos: "interj.", zh: ["祝贺！恭喜！"] },
    { w: "felicitar", pos: "v.", zh: ["祝贺"] },
    { w: "fiebre", pos: "f.", zh: ["发烧"] },
    { w: "fiesta", pos: "f.", zh: ["聚会，派对"], emoji: "🎉",
        senses: [
            { zh: "聚会，派对", ex: [{ es: "El sábado hay una fiesta en casa de Ana.", zh: "周六安娜家有个聚会。" }] },
            { zh: "节日，假日", ex: [{ es: "El día de Año Nuevo es fiesta.", zh: "元旦是节日。" }] }
        ],
        phrases: [
            { es: "ir a una fiesta", zh: "参加聚会" },
            { es: "día de fiesta", zh: "节日，假日" },
            { es: "hacer una fiesta", zh: "办聚会" }
        ] },
    { w: "fin", pos: "m.", zh: ["结束，结尾（fin de semana 周末）"] },
    { w: "final", pos: "m.", zh: ["结束；决赛"] },
    { w: "flor", pos: "f.", zh: ["花"] },
    { w: "foto", pos: "f.", zh: ["照片"] },
    { w: "fresco, fresca", pos: "adj.", zh: ["新鲜的；凉爽的"] },
    { w: "frío", pos: "m./adj.", zh: ["冷（hace frío 天气冷）/ 冷的"] },
    { w: "fruta", pos: "f.", zh: ["水果"] },
    { w: "fumar", pos: "v.", zh: ["吸烟"] },
    { w: "fútbol", pos: "m.", zh: ["足球"] },
    { w: "gerundio", pos: "m.", zh: ["副动词（-ando / -iendo 形式）"] },
    { w: "gracias", pos: "f./interj.", zh: ["谢谢（gracias a … 多亏…）"] },
    { w: "gracioso, graciosa", pos: "adj.", zh: ["有趣的，好笑的"] },
    { w: "grande", pos: "adj.", zh: ["大的"] },
    { w: "guapo, guapa", pos: "adj.", zh: ["漂亮的，帅的"] },
    { w: "guardar", pos: "v.", zh: ["保存；留着"] },
    { w: "guitarra", pos: "f.", zh: ["吉他"] },
    { w: "gustar", pos: "v.", zh: ["使喜欢（me gusta…）"],
        senses: [
            { zh: "使喜欢（me gusta…）", ex: [{ es: "Me gusta el café.", zh: "我喜欢咖啡。" }] },
            { zh: "喜欢做…（+ 动词原形）", ex: [{ es: "Me gusta escuchar música.", zh: "我喜欢听音乐。" }] }
        ],
        phrases: [
            { es: "me gusta / me gustan", zh: "我喜欢…" },
            { es: "¿Te gusta?", zh: "你喜欢吗？" }
        ],
        note: "gustar 的主语是喜欢的东西：Me gusta el café.＝咖啡让我喜欢。" },
    { w: "gusto", pos: "m.", zh: ["口味；高兴（mucho gusto 很高兴认识你）"] },
    { w: "haber", pos: "v.", zh: ["有，存在（无人称 hay）"],
        senses: [
            { zh: "有，存在（无人称 hay）", ex: [{ es: "Hay un parque cerca de mi casa.", zh: "我家附近有一个公园。" }] },
            { zh: "已经做…（助动词 + 过去分词）", ex: [{ es: "He comido ya, gracias.", zh: "我已经吃过了，谢谢。" }] },
            { zh: "得做…（hay que + 动词原形）", ex: [{ es: "Hay que estudiar todos los días.", zh: "每天都要学习。" }] }
        ],
        phrases: [
            { es: "hay", zh: "有，存在" },
            { es: "hay que + inf.", zh: "必须做…" }
        ],
        note: "hay 是 haber 的无人称现在时，没有主语。" },
    { w: "hablar", pos: "v.", zh: ["说话，讲话"], conj: "hablar",
        senses: [
            { zh: "说话，讲话", ex: [{ es: "Hablo español y un poco de inglés.", zh: "我会说西班牙语和一点英语。" }] },
            { zh: "交谈（con 和某人）", ex: [{ es: "Ayer hablé con mi madre por teléfono.", zh: "昨天我和妈妈通了电话。" }] },
            { zh: "会讲（某种语言）", ex: [{ es: "Ella habla tres idiomas.", zh: "她会讲三种语言。" }] }
        ],
        phrases: [
            { es: "hablar por teléfono", zh: "打电话" },
            { es: "hablar más despacio", zh: "说慢一点" }
        ],
        note: "¿Puedes hablar más despacio?（请说慢一点）——问路常用。" },
    { w: "hacer", pos: "v.", zh: ["做，干"], conj: "hacer",
        senses: [
            { zh: "做，干", ex: [{ es: "¿Qué haces? Hago la cena.", zh: "你在做什么？我在做晚饭。" }] },
            { zh: "（天气）hace + 名词", ex: [{ es: "Hace calor en verano.", zh: "夏天天热。" }] },
            { zh: "（时间）hace…：…之前", ex: [{ es: "Hace dos años que vivo aquí.", zh: "我住在这里两年了。" }] }
        ],
        phrases: [
            { es: "hacer calor / frío", zh: "天热 / 天冷" },
            { es: "hacer la cama", zh: "铺床" },
            { es: "hacer ejercicio", zh: "锻炼" }
        ],
        note: "天气和时间都用 hace：hace sol（出太阳）。" },
    { w: "Halloween", pos: "m.", zh: ["万圣节"] },
    { w: "hasta", pos: "prep.", zh: ["直到"] },
    { w: "hermana", pos: "f.", zh: ["姐妹"] },
    { w: "hermano, hermana", pos: "m./f.", zh: ["兄弟，哥哥/弟弟 / 姐妹，姐姐/妹妹"],
        senses: [
            { w: "hermano", zh: "兄弟，哥哥/弟弟", ex: [{ es: "Tengo dos hermanos y una hermana.", zh: "我有两个兄弟和一个姐妹。" }] },
            { w: "hermana", zh: "姐妹，姐姐/妹妹", ex: [{ es: "Mi hermana estudia en la universidad.", zh: "我姐姐在上大学。" }] }
        ],
        phrases: [
            { es: "hermano mayor", zh: "哥哥" },
            { es: "hermana menor", zh: "妹妹" }
        ],
        note: "mayor＝年长的，menor＝年幼的。" },
    { w: "hija", pos: "f.", zh: ["女儿"] },
    { w: "hijo, hija", pos: "m./f.", zh: ["儿子 / 女儿"] },
    { w: "historia", pos: "f.", zh: ["历史；故事"] },
    { w: "hola", pos: "interj.", zh: ["你好"] },
    { w: "hora", pos: "f.", zh: ["小时"],
        senses: [
            { zh: "小时", ex: [{ es: "Trabajo ocho horas al día.", zh: "我每天工作八小时。" }] },
            { zh: "点钟，时刻", ex: [{ es: "¿Qué hora es? Son las tres.", zh: "几点了？三点。" }] },
            { zh: "时候，时间", ex: [{ es: "Es hora de comer.", zh: "该吃饭了。" }] }
        ],
        phrases: [
            { es: "¿Qué hora es?", zh: "几点了？" },
            { es: "¿A qué hora?", zh: "几点？" }
        ],
        note: "¿Qué hora es?（几点了）——回答 son las + 数字。" },
    { w: "hospital", pos: "m.", zh: ["医院"] },
    { w: "hotel", pos: "m.", zh: ["酒店"] },
    { w: "hoy", pos: "adv.", zh: ["今天"],
        senses: [
            { zh: "今天", ex: [{ es: "Hoy es mi cumpleaños.", zh: "今天是我的生日。" }] },
            { zh: "如今，当今（hoy en día）", ex: [{ es: "Hoy en día todos usan el móvil.", zh: "如今人人都用手机。" }] }
        ],
        phrases: [
            { es: "hoy en día", zh: "如今" },
            { es: "hoy por la tarde", zh: "今天下午" }
        ] },
    { w: "idea", pos: "f.", zh: ["主意，想法"] },
    { w: "idioma", pos: "m.", zh: ["语言"] },
    { w: "iglesia", pos: "f.", zh: ["教堂"] },
    { w: "importante", pos: "adj.", zh: ["重要的"] },
    { w: "ingeniería", pos: "f.", zh: ["工程学"] },
    { w: "interesante", pos: "adj.", zh: ["有趣的，有意思的"], emoji: "🤩",
        senses: [
            { zh: "有趣的，有意思的", ex: [{ es: "Este libro es muy interesante.", zh: "这本书很有意思。" }] }
        ],
        phrases: [
            { es: "una película interesante", zh: "一部有趣的电影" },
            { es: "parece interesante", zh: "看起来很有意思" }
        ] },
    { w: "internet", pos: "m.", zh: ["互联网"] },
    { w: "invierno", pos: "m.", zh: ["冬天"] },
    { w: "invitar", pos: "v.", zh: ["邀请"], emoji: "💌",
        senses: [
            { zh: "邀请", ex: [{ es: "Te invito a mi fiesta de cumpleaños.", zh: "我邀请你来我的生日聚会。" }] },
            { zh: "请客，招待", ex: [{ es: "Te invito a un café.", zh: "我请你喝咖啡。" }] }
        ],
        phrases: [
            { es: "invitar a alguien", zh: "邀请某人" },
            { es: "invitar a cenar", zh: "请吃晚饭" }
        ],
        note: "te invito＝我请你（客），口语极常用。" },
    { w: "ir", pos: "v.", zh: ["去"], conj: "ir",
        senses: [
            { zh: "去", ex: [{ es: "Voy al supermercado.", zh: "我去超市。" }] },
            { zh: "打算做…（a + 动词原形）", ex: [{ es: "Vamos a cenar fuera esta noche.", zh: "我们今晚出去吃晚饭。" }] },
            { zh: "进展，过得（怎么样）", ex: [{ es: "¿Cómo te va? Me va bien.", zh: "你怎么样？我挺好的。" }] }
        ],
        phrases: [
            { es: "ir a + lugar", zh: "去某处" },
            { es: "ir a + inf.", zh: "打算做…" },
            { es: "¿Cómo te va?", zh: "你过得怎么样？" }
        ],
        note: "变位不规则：voy, vas, va, vamos, vais, van。" },
    { w: "jugar", pos: "v.", zh: ["玩；踢（球）"] },
    { w: "jueves", pos: "m.", zh: ["星期四"] },
    { w: "junto, juntos", pos: "adj./adv.", zh: ["一起的；一起（junto a … 在…旁边）"] },
    { w: "lado", pos: "m.", zh: ["边，侧（al lado de … 在…旁边）"] },
    { w: "largo, larga", pos: "adj.", zh: ["长的"] },
    { w: "lavar", pos: "v.", zh: ["洗"] },
    { w: "le, les", pos: "pron.", zh: ["他/她/您（宾格或与格，第三人称间接宾语）"] },
    { w: "leer", pos: "v.", zh: ["读，阅读"], emoji: "📚",
        senses: [
            { zh: "读，阅读", ex: [{ es: "Leo un poco antes de dormir.", zh: "睡觉前我读一会儿书。" }] }
        ],
        phrases: [
            { es: "leer un libro", zh: "读书" },
            { es: "leer el periódico", zh: "读报纸" }
        ] },
    { w: "lejos", pos: "adv.", zh: ["远（lejos de … 离…远）"] },
    { w: "lento, lenta", pos: "adj.", zh: ["慢的"] },
    { w: "levantarse", pos: "v.", zh: ["起床"],
        senses: [
            { zh: "起床", ex: [{ es: "Me levanto a las siete.", zh: "我七点起床。" }] },
            { zh: "站起来", ex: [{ es: "Los estudiantes se levantan cuando entra el profesor.", zh: "老师进来时学生们起立。" }] }
        ],
        phrases: [
            { es: "levantarse temprano", zh: "早起" },
            { es: "levantarse de la cama", zh: "起床（从床上起来）" }
        ],
        note: "levantarse 是自复动词：me levanto, te levantas…" },
    { w: "Li Ming", pos: "人名", zh: ["李明"] },
    { w: "libro", pos: "m.", zh: ["书，书籍"], emoji: "📖",
        senses: [
            { zh: "书，书籍", ex: [{ es: "Leo un libro en español.", zh: "我在读一本西语书。" }] },
            { zh: "课本（libro de texto）", ex: [{ es: "Abrid el libro por la página diez.", zh: "请把课本翻到第十页。" }] }
        ],
        phrases: [
            { es: "leer un libro", zh: "读书" },
            { es: "libro de texto", zh: "课本" }
        ] },
    { w: "llamar", pos: "v.", zh: ["打电话"],
        senses: [
            { zh: "打电话", ex: [{ es: "Te llamo esta noche.", zh: "我今晚给你打电话。" }] },
            { zh: "叫，喊（某人）", ex: [{ es: "Mi madre me llama desde la cocina.", zh: "妈妈在厨房叫我。" }] },
            { zh: "叫…名字（llamarse）", ex: [{ es: "¿Cómo te llamas? Me llamo Ana.", zh: "你叫什么名字？我叫安娜。" }] }
        ],
        phrases: [
            { es: "¿Cómo te llamas?", zh: "你叫什么名字？" },
            { es: "llamar por teléfono", zh: "打电话" }
        ],
        note: "「我叫…」＝ Me llamo…（字面：我把自己叫…）。" },
    { w: "llave", pos: "f.", zh: ["钥匙"] },
    { w: "llegar", pos: "v.", zh: ["到达（a 某处）"],
        senses: [
            { zh: "到达（a 某处）", ex: [{ es: "El tren llega a las ocho.", zh: "火车八点到。" }] },
            { zh: "及时赶到（a tiempo）", ex: [{ es: "Llegamos a tiempo al cine.", zh: "我们准时到了电影院。" }] }
        ],
        phrases: [
            { es: "llegar a casa", zh: "到家" },
            { es: "llegar tarde", zh: "迟到" },
            { es: "llegar a tiempo", zh: "准时到" }
        ],
        note: "llegar a + 地点：到达某处。" },
    { w: "llevar", pos: "v.", zh: ["带着，携带"],
        senses: [
            { zh: "带着，携带", ex: [{ es: "Llevo el paraguas porque va a llover.", zh: "我带着伞，因为要下雨。" }] },
            { zh: "穿，戴", ex: [{ es: "Hoy lleva una camisa blanca.", zh: "他今天穿白衬衫。" }] },
            { zh: "送（人到某处）", ex: [{ es: "Llevo a los niños al colegio.", zh: "我送孩子们去学校。" }] },
            { zh: "花（时间）", ex: [{ es: "El viaje lleva dos horas.", zh: "路程要花两个小时。" }] }
        ],
        phrases: [
            { es: "llevar puesto", zh: "穿着" },
            { es: "llevarse bien", zh: "相处得好" }
        ],
        note: "traer＝带来（朝说话人），llevar＝带走（离说话人）。" },
    { w: "llamarse", pos: "v.", zh: ["名叫…（me llamo … 我叫…）"] },
    { w: "llover", pos: "v.", zh: ["下雨"],
        senses: [
            { zh: "下雨", ex: [{ es: "Hoy llueve todo el día.", zh: "今天下了一整天雨。" }] }
        ],
        phrases: [
            { es: "va a llover", zh: "要下雨了" },
            { es: "está lloviendo", zh: "正在下雨" }
        ],
        note: "llover 只用于第三人称：llueve（下雨）。" },
    { w: "lo, la, los, las", pos: "pron.", zh: ["他/她/它/他们（直接宾语代词）"] },
    { w: "luego", pos: "adv.", zh: ["然后，之后"] },
    { w: "lugar", pos: "m.", zh: ["地方"] },
    { w: "lunes", pos: "m.", zh: ["星期一"] },
    { w: "madre", pos: "f.", zh: ["母亲，妈妈"], emoji: "👩",
        senses: [
            { zh: "母亲，妈妈", ex: [{ es: "Mi madre trabaja en un hospital.", zh: "我妈妈在医院工作。" }] }
        ],
        phrases: [
            { es: "mi madre y mi padre", zh: "我的妈妈和爸爸" }
        ] },
    { w: "Madrid", pos: "地名", zh: ["马德里"] },
    { w: "madrugar", pos: "v.", zh: ["早起"] },
    { w: "mal", pos: "adv.", zh: ["坏，不好（mal tiempo 坏天气）"] },
    { w: "mañana", pos: "f./adv.", zh: ["上午，早晨（f.）"],
        senses: [
            { zh: "上午，早晨（f.）", ex: [{ es: "Estudio español por la mañana.", zh: "我上午学西班牙语。" }] },
            { zh: "明天（adv.）", ex: [{ es: "Mañana es sábado.", zh: "明天是周六。" }] }
        ],
        phrases: [
            { es: "por la mañana", zh: "在上午" },
            { es: "mañana por la mañana", zh: "明天早上" },
            { es: "hasta mañana", zh: "明天见" }
        ],
        note: "名词＝上午，副词＝明天：mañana por la mañana（明天早上）。" },
    { w: "mandar", pos: "v.", zh: ["命令；寄"] },
    { w: "mar", pos: "m./f.", zh: ["大海"] },
    { w: "María", pos: "人名", zh: ["玛丽亚"] },
    { w: "marisco", pos: "m.", zh: ["海鲜"] },
    { w: "martes", pos: "m.", zh: ["星期二"] },
    { w: "más", pos: "adv.", zh: ["更，更多（más … que 比…更）"] },
    { w: "mayor", pos: "adj.", zh: ["更大的；年长的"] },
    { w: "me", pos: "pron.", zh: ["我（宾格/与格代词）"] },
    { w: "media", pos: "f.", zh: ["半小时（y media …点半）"] },
    { w: "medicina", pos: "f.", zh: ["药；医学"] },
    { w: "médico, médica", pos: "m./f.", zh: ["医生"] },
    { w: "mediodía", pos: "m.", zh: ["中午"] },
    { w: "mejor", pos: "adj./adv.", zh: ["更好的（adj.）"], emoji: "🥇",
        senses: [
            { zh: "更好的（adj.）", ex: [{ es: "Este libro es mejor que el otro.", zh: "这本书比那本好。" }] },
            { zh: "更好地（adv.）", ex: [{ es: "Hoy me siento mejor.", zh: "我今天感觉好多了。" }] }
        ],
        phrases: [
            { es: "mejor que", zh: "比…好" },
            { es: "el mejor / la mejor", zh: "最好的" },
            { es: "¡Mejor!", zh: "更好！/ 那更好！" }
        ],
        note: "mejor 是 bueno/bien 的比较级：更好（的）。" },
    { w: "menos", pos: "adv.", zh: ["更少（menos … que 比…少）"] },
    { w: "mensaje", pos: "m.", zh: ["消息，短信"] },
    { w: "menudo, menuda", pos: "adj.", zh: ["小的（a menudo 经常）"] },
    { w: "mercado", pos: "m.", zh: ["市场"] },
    { w: "mes", pos: "m.", zh: ["月份"] },
    { w: "mesa", pos: "f.", zh: ["桌子"] },
    { w: "metro", pos: "m.", zh: ["地铁；米"] },
    { w: "mexicano, mexicana", pos: "adj.", zh: ["墨西哥的 / 墨西哥人"] },
    { w: "México", pos: "地名", zh: ["墨西哥"] },
    { w: "mi, mis, mí", pos: "adj./pron.", zh: ["我的", "我（介词后用 mí，para mí 对我来说）"] },
    { w: "miércoles", pos: "m.", zh: ["星期三"] },
    { w: "mil", pos: "num.", zh: ["一千"] },
    { w: "mío, mía", pos: "pron.", zh: ["我的（el libro es mío 这书是我的）"] },
    { w: "mirar", pos: "v.", zh: ["看"] },
    { w: "mismo, misma", pos: "adj.", zh: ["相同的，同一个"],
        senses: [
            { zh: "相同的，同一个", ex: [{ es: "Tenemos el mismo profesor.", zh: "我们有同一个老师。" }] },
            { zh: "本身，自己（名词后）", ex: [{ es: "Lo hice yo misma.", zh: "这是我自己做的。" }] }
        ],
        phrases: [
            { es: "lo mismo", zh: "一样的东西 / 同样" },
            { es: "yo mismo / yo misma", zh: "我自己" },
            { es: "el mismo día", zh: "同一天" }
        ],
        note: "mismo 在名词前＝同一个，在名词后＝本身。" },
    { w: "mochila", pos: "f.", zh: ["背包"] },
    { w: "momento", pos: "m.", zh: ["时刻，时候"], emoji: "⏳",
        senses: [
            { zh: "时刻，时候", ex: [{ es: "Este es un momento importante para mí.", zh: "这对我来说是重要时刻。" }] },
            { zh: "一会儿", ex: [{ es: "Espera un momento, por favor.", zh: "请等一会儿。" }] }
        ],
        phrases: [
            { es: "un momento", zh: "一会儿，稍等" },
            { es: "en este momento", zh: "此刻" }
        ] },
    { w: "montaña", pos: "f.", zh: ["山"] },
    { w: "mucho, mucha", pos: "adj./adv.", zh: ["很多的（形容词）"],
        senses: [
            { zh: "很多的（形容词）", ex: [{ es: "Hay mucha gente en la calle.", zh: "街上有很多人。" }] },
            { zh: "非常，很（副词）", ex: [{ es: "Me gusta mucho esta ciudad.", zh: "我很喜欢这座城市。" }] }
        ],
        phrases: [
            { es: "mucho gusto", zh: "很高兴认识你" },
            { es: "muchas gracias", zh: "非常感谢" },
            { es: "mucho tiempo", zh: "很久" }
        ],
        note: "mucho gusto（很高兴认识你）是见面常用语。" },
    { w: "mudanza", pos: "f.", zh: ["搬家"] },
    { w: "mudarse", pos: "v.", zh: ["搬家"] },
    { w: "museo", pos: "m.", zh: ["博物馆"] },
    { w: "música", pos: "f.", zh: ["音乐"], emoji: "🎶",
        senses: [
            { zh: "音乐", ex: [{ es: "Escucho música mientras estudio.", zh: "我学习时听音乐。" }] }
        ],
        phrases: [
            { es: "escuchar música", zh: "听音乐" },
            { es: "música clásica", zh: "古典音乐" }
        ] },
    { w: "muy", pos: "adv.", zh: ["非常，很"] },
    { w: "nada", pos: "pron.", zh: ["没有什么（no … nada 什么都不）"] },
    { w: "nadie", pos: "pron.", zh: ["没有人（no … nadie 谁也不）"] },
    { w: "Navidad", pos: "f.", zh: ["圣诞节"] },
    { w: "necesitar", pos: "v.", zh: ["需要"] },
    { w: "nevar", pos: "v.", zh: ["下雪"] },
    { w: "ni", pos: "conj.", zh: ["也不（no … ni … 既不…也不…）"] },
    { w: "niño, niña", pos: "m./f.", zh: ["孩子，小孩"] },
    { w: "no", pos: "adv.", zh: ["不；没有"] },
    { w: "noche", pos: "f.", zh: ["夜晚，晚上"], emoji: "🌙",
        senses: [
            { zh: "夜晚，晚上", ex: [{ es: "Por la noche veo la tele.", zh: "晚上我看电视。" }] }
        ],
        phrases: [
            { es: "buenas noches", zh: "晚上好 / 晚安" },
            { es: "esta noche", zh: "今晚" },
            { es: "de noche", zh: "夜里" }
        ],
        note: "buenas noches 见面打招呼和告别都能用。" },
    { w: "nombre", pos: "m.", zh: ["名字"] },
    { w: "nos", pos: "pron.", zh: ["我们（宾格/与格代词）"] },
    { w: "nosotros, nosotras", pos: "pron.", zh: ["我们"] },
    { w: "noticia", pos: "f.", zh: ["新闻，消息"] },
    { w: "nuestro, nuestra", pos: "adj./pron.", zh: ["我们的"] },
    { w: "nueve", pos: "num.", zh: ["九"] },
    { w: "nuevo, nueva", pos: "adj.", zh: ["新的"], emoji: "✨",
        senses: [
            { zh: "新的", ex: [{ es: "Tengo un teléfono nuevo.", zh: "我有一部新手机。" }] },
            { zh: "新来的，初到的", ex: [{ es: "Hay un estudiante nuevo en la clase.", zh: "班里来了一个新同学。" }] }
        ],
        phrases: [
            { es: "Año Nuevo", zh: "新年" },
            { es: "¿Qué hay de nuevo?", zh: "有什么新鲜事？" }
        ] },
    { w: "número", pos: "m.", zh: ["数字，号码"] },
    { w: "obra", pos: "f.", zh: ["作品；工程"] },
    { w: "ochenta", pos: "num.", zh: ["八十"] },
    { w: "ocho", pos: "num.", zh: ["八"] },
    { w: "ocupado, ocupada", pos: "adj.", zh: ["忙的；被占用的"] },
    { w: "oficina", pos: "f.", zh: ["办公室"], emoji: "🏢",
        senses: [
            { zh: "办公室", ex: [{ es: "Mi oficina está en el centro.", zh: "我的办公室在市中心。" }] }
        ],
        phrases: [
            { es: "ir a la oficina", zh: "去办公室上班" },
            { es: "oficina de correos", zh: "邮局" }
        ],
        note: "oficina de correos＝邮局。" },
    { w: "oír", pos: "v.", zh: ["听见"] },
    { w: "ojalá", pos: "interj.", zh: ["但愿（后接虚拟式：ojalá + subj. 希望…）"] },
    { w: "once", pos: "num.", zh: ["十一"] },
    { w: "opinión", pos: "f.", zh: ["意见，看法"] },
    { w: "organizar", pos: "v.", zh: ["组织"] },
    { w: "orilla", pos: "f.", zh: ["河岸，岸边"] },
    { w: "otro, otra", pos: "adj./pron.", zh: ["另一个（otra vez 再一次）"] },
    { w: "paciente", pos: "m./f./adj.", zh: ["病人 / 有耐心的"] },
    { w: "padre", pos: "m.", zh: ["父亲，爸爸"], emoji: "👨",
        senses: [
            { zh: "父亲，爸爸", ex: [{ es: "Mi padre trabaja en un banco.", zh: "我爸爸在银行工作。" }] }
        ],
        phrases: [
            { es: "padre y madre", zh: "父亲和母亲" }
        ] },
    { w: "padres", pos: "m.pl.", zh: ["父母"] },
    { w: "paella", pos: "f.", zh: ["海鲜饭（西班牙特色菜）"] },
    { w: "país", pos: "m.", zh: ["国家"] },
    { w: "palabra", pos: "f.", zh: ["词，单词"] },
    { w: "pan", pos: "m.", zh: ["面包"] },
    { w: "panadería", pos: "f.", zh: ["面包店"] },
    { w: "para", pos: "prep.", zh: ["为了；给；到（para + inf. 为了做…）"] },
    { w: "parecer", pos: "v.", zh: ["好像，看起来"] },
    { w: "parque", pos: "m.", zh: ["公园"] },
    { w: "parte", pos: "f.", zh: ["部分"] },
    { w: "pasado, pasada", pos: "adj./m.", zh: ["过去的，上次的（adj.）"],
        senses: [
            { zh: "过去的，上次的（adj.）", ex: [{ es: "El año pasado viajé a España.", zh: "去年我去西班牙旅行。" }] },
            { zh: "过去（m.）", ex: [{ es: "En el pasado vivíamos en el campo.", zh: "过去我们住在乡下。" }] }
        ],
        phrases: [
            { es: "el año pasado", zh: "去年" },
            { es: "la semana pasada", zh: "上周" }
        ],
        note: "el año pasado 去年（pasado 放在名词后面）。" },
    { w: "pasar", pos: "v.", zh: ["经过；度过；发生"] },
    { w: "pasear", pos: "v.", zh: ["散步"] },
    { w: "pasta", pos: "f.", zh: ["面食，意面"] },
    { w: "pedir", pos: "v.", zh: ["请求；点（菜）"] },
    { w: "Pekín", pos: "地名", zh: ["北京"] },
    { w: "película", pos: "f.", zh: ["电影"], emoji: "🎬",
        senses: [
            { zh: "电影", ex: [{ es: "Vamos a ver una película esta noche.", zh: "我们今晚去看电影。" }] }
        ],
        phrases: [
            { es: "ver una película", zh: "看电影" },
            { es: "una película de amor", zh: "爱情片" }
        ] },
    { w: "pena", pos: "f.", zh: ["遗憾（es una pena 真可惜）"] },
    { w: "peor", pos: "adj./adv.", zh: ["更差的，更糟"] },
    { w: "pequeño, pequeña", pos: "adj.", zh: ["小的"],
        senses: [
            { zh: "小的", ex: [{ es: "Vivo en un piso pequeño.", zh: "我住在一套小公寓里。" }] },
            { zh: "年幼的", ex: [{ es: "Tengo un hermano pequeño.", zh: "我有一个弟弟。" }] }
        ],
        phrases: [
            { es: "hermano pequeño", zh: "弟弟" },
            { es: "hermana pequeña", zh: "妹妹" }
        ],
        note: "hermano pequeño＝弟弟，hermana pequeña＝妹妹。" },
    { w: "perder", pos: "v.", zh: ["失去；输掉；错过"] },
    { w: "perdón", pos: "interj.", zh: ["对不起，请原谅"] },
    { w: "periódico", pos: "m.", zh: ["报纸"] },
    { w: "pero", pos: "conj.", zh: ["但是"] },
    { w: "persona", pos: "f.", zh: ["人"] },
    { w: "Perú", pos: "地名", zh: ["秘鲁"] },
    { w: "pescado", pos: "m.", zh: ["鱼（食物）"] },
    { w: "plan", pos: "m.", zh: ["计划"] },
    { w: "playa", pos: "f.", zh: ["海滩，海边"], emoji: "🏖️",
        senses: [
            { zh: "海滩，海边", ex: [{ es: "En verano vamos a la playa.", zh: "夏天我们去海边。" }] }
        ],
        phrases: [
            { es: "ir a la playa", zh: "去海边" },
            { es: "playa de arena", zh: "沙滩" }
        ] },
    { w: "plaza", pos: "f.", zh: ["广场"] },
    { w: "poco, poca", pos: "adj./adv.", zh: ["少的；一点儿（un poco 一点儿）"] },
    { w: "poder", pos: "v.", zh: ["能，可以"], conj: "poder",
        senses: [
            { zh: "能，可以", ex: [{ es: "¿Puedo entrar?", zh: "我可以进来吗？" }] },
            { zh: "可能", ex: [{ es: "Puede llover esta tarde.", zh: "今天下午可能下雨。" }] }
        ],
        phrases: [
            { es: "¿Puedo…?", zh: "我可以…吗？" },
            { es: "no poder + inf.", zh: "不能做…" }
        ],
        note: "礼貌请求用 ¿Puedo…? 或 ¿Podría…?（更客气）。" },
    { w: "policía", pos: "m./f.", zh: ["警察"] },
    { w: "pollo", pos: "m.", zh: ["鸡肉；鸡"] },
    { w: "poner", pos: "v.", zh: ["放，放置"] },
    { w: "por", pos: "prep.", zh: ["因为；为了；通过；每（por la mañana 在上午）"] },
    { w: "porque", pos: "conj.", zh: ["因为"] },
    { w: "postal", pos: "f.", zh: ["明信片"] },
    { w: "practicar", pos: "v.", zh: ["练习"] },
    { w: "pregunta", pos: "f.", zh: ["问题"] },
    { w: "preguntar", pos: "v.", zh: ["问，询问"] },
    { w: "preocuparse", pos: "v.", zh: ["担心（no te preocupes 别担心）"] },
    { w: "preparar", pos: "v.", zh: ["准备"] },
    { w: "primavera", pos: "f.", zh: ["春天"] },
    { w: "primaria", pos: "f.", zh: ["（escuela primaria）小学"] },
    { w: "primero, primera", pos: "adj./adv.", zh: ["第一的；首先"] },
    { w: "primo, prima", pos: "m./f.", zh: ["堂/表兄弟姐妹"] },
    { w: "profesor, profesora", pos: "m./f.", zh: ["老师，教师"],
        senses: [
            { zh: "老师，教师", ex: [{ es: "La profesora de español es muy amable.", zh: "西语老师很和蔼。" }] },
            { zh: "教授（大学）", ex: [{ es: "Mi profesor en la universidad es de España.", zh: "我的大学教授来自西班牙。" }] }
        ],
        phrases: [
            { es: "profesor de español", zh: "西语老师" },
            { es: "profesora de música", zh: "音乐老师" }
        ] },
    { w: "puerta", pos: "f.", zh: ["门"] },
    { w: "que, qué", pos: "conj./pron.", zh: ["（关系词/连词）…的；比（más … que）", "什么（¿qué? 什么？¡qué + adj.! 多么…！）"] },
    { w: "quedar", pos: "v.", zh: ["剩下；约定（quedarse 留下，待在）"] },
    { w: "quedarse", pos: "v.", zh: ["留下，待在（me quedo en casa 我待在家）"] },
    { w: "querer", pos: "v.", zh: ["想要"], conj: "querer",
        senses: [
            { zh: "想要", ex: [{ es: "Quiero aprender español.", zh: "我想学西班牙语。" }] },
            { zh: "爱，喜欢（人）", ex: [{ es: "Te quiero mucho.", zh: "我很爱你。" }] }
        ],
        phrases: [
            { es: "querer + inf.", zh: "想做…" },
            { es: "Te quiero.", zh: "我爱你。" }
        ],
        note: "点餐常用 Quisiera…（我想点…），比 Quiero 更礼貌。" },
    { w: "queso", pos: "m.", zh: ["奶酪"] },
    { w: "quién, quiénes", pos: "pron.", zh: ["谁"] },
    { w: "quisiera", pos: "v.", zh: ["我想要（querer 的委婉过去式，点餐常用）"] },
    { w: "ramo", pos: "m.", zh: ["花束"] },
    { w: "rápido, rápida", pos: "adj./adv.", zh: ["快的（adj.）"], emoji: "⚡",
        senses: [
            { zh: "快的（adj.）", ex: [{ es: "El tren es muy rápido.", zh: "火车很快。" }] },
            { zh: "快速地（adv.）", ex: [{ es: "Hablas demasiado rápido.", zh: "你说得太快了。" }] }
        ],
        phrases: [
            { es: "rápidamente", zh: "快速地" },
            { es: "más rápido", zh: "更快" }
        ] },
    { w: "razón", pos: "f.", zh: ["道理，理由（tener razón 说得对）"] },
    { w: "recibir", pos: "v.", zh: ["收到；接待"] },
    { w: "recomendar", pos: "v.", zh: ["推荐"],
        senses: [
            { zh: "推荐", ex: [{ es: "Te recomiendo este restaurante.", zh: "我向你推荐这家餐馆。" }] },
            { zh: "建议", ex: [{ es: "El médico recomienda descansar más.", zh: "医生建议多休息。" }] }
        ],
        phrases: [
            { es: "te recomiendo", zh: "我推荐你…" },
            { es: "recomendar algo a alguien", zh: "向某人推荐某物" }
        ],
        note: "recomendar 变位时 e 变 ie：recomiendo。" },
    { w: "regalo", pos: "m.", zh: ["礼物"], emoji: "🎁",
        senses: [
            { zh: "礼物", ex: [{ es: "Este regalo es para ti.", zh: "这份礼物是给你的。" }] }
        ],
        phrases: [
            { es: "hacer un regalo", zh: "送礼物" },
            { es: "regalo de cumpleaños", zh: "生日礼物" }
        ] },
    { w: "repetir", pos: "v.", zh: ["重复"] },
    { w: "reseña", pos: "f.", zh: ["评论，评价"] },
    { w: "respuesta", pos: "f.", zh: ["回答，答案"] },
    { w: "restaurante", pos: "m.", zh: ["餐馆，餐厅"], emoji: "🍽️",
        senses: [
            { zh: "餐馆，餐厅", ex: [{ es: "Cenamos en un restaurante chino.", zh: "我们在一家中餐馆吃晚饭。" }] }
        ],
        phrases: [
            { es: "ir al restaurante", zh: "去餐馆" },
            { es: "en el restaurante", zh: "在餐馆里" }
        ] },
    { w: "reunión", pos: "f.", zh: ["会议"] },
    { w: "río", pos: "m.", zh: ["河流"] },
    { w: "rojo, roja", pos: "adj.", zh: ["红色的"] },
    { w: "ropa", pos: "f.", zh: ["衣服"] },
    { w: "ruidoso, ruidosa", pos: "adj.", zh: ["吵闹的"] },
    { w: "rutina", pos: "f.", zh: ["日常习惯，规律"] },
    { w: "sábado", pos: "m.", zh: ["星期六"], emoji: "🎵",
        senses: [
            { zh: "星期六", ex: [{ es: "El sábado vamos de compras.", zh: "周六我们去购物。" }] }
        ],
        phrases: [
            { es: "el sábado pasado", zh: "上周六" },
            { es: "los sábados", zh: "每个星期六" }
        ] },
    { w: "saber", pos: "v.", zh: ["知道；会（做某事）"] },
    { w: "salir", pos: "v.", zh: ["出去，离开（de 某处）"],
        senses: [
            { zh: "出去，离开（de 某处）", ex: [{ es: "Salgo de casa a las ocho.", zh: "我八点出门。" }] },
            { zh: "外出（玩）", ex: [{ es: "Esta noche salimos con unos amigos.", zh: "今晚我们和朋友出去玩。" }] },
            { zh: "出来，升起（太阳）", ex: [{ es: "El sol sale a las seis.", zh: "太阳六点升起。" }] }
        ],
        phrases: [
            { es: "salir de casa", zh: "出门" },
            { es: "salir con amigos", zh: "和朋友出去玩" },
            { es: "salir el sol", zh: "日出" }
        ],
        note: "salir de＝从…出来；salir con＝和…出去玩。" },
    { w: "sano, sana", pos: "adj.", zh: ["健康的"] },
    { w: "se", pos: "pron.", zh: ["（反身代词）自己；（无人称）人们（se habla 人们说）"] },
    { w: "seguir", pos: "v.", zh: ["继续（+ 副动词）"],
        senses: [
            { zh: "继续（+ 副动词）", ex: [{ es: "Sigue estudiando, no pares.", zh: "继续学习，别停。" }] },
            { zh: "跟随", ex: [{ es: "El perro sigue a su dueño.", zh: "狗跟着它的主人。" }] },
            { zh: "仍然，还是（+ 形容词）", ex: [{ es: "Sigo cansado hoy.", zh: "我今天还是很累。" }] }
        ],
        phrases: [
            { es: "seguir + 副动词", zh: "继续做…" },
            { es: "seguir adelante", zh: "继续前进" }
        ],
        note: "seguir + 副动词＝继续做…：Sigo estudiando." },
    { w: "seis", pos: "num.", zh: ["六"] },
    { w: "semana", pos: "f.", zh: ["星期，周"],
        senses: [
            { zh: "星期，周", ex: [{ es: "Trabajo cinco días a la semana.", zh: "我一周工作五天。" }] }
        ],
        phrases: [
            { es: "la semana que viene", zh: "下周" },
            { es: "el fin de semana", zh: "周末" },
            { es: "todas las semanas", zh: "每周" }
        ],
        note: "fin de semana＝周末，注意用 de。" },
    { w: "sentar", pos: "v.", zh: ["使坐下（sentarse 坐下）"] },
    { w: "sentir", pos: "v.", zh: ["感觉（sentirse 觉得）"] },
    { w: "señora", pos: "f.", zh: ["女士，夫人"] },
    { w: "septiembre", pos: "m.", zh: ["九月"] },
    { w: "ser", pos: "v.", zh: ["是（本质、身份）"], conj: "ser",
        senses: [
            { zh: "是（本质、身份）", ex: [{ es: "Soy estudiante de español.", zh: "我是西语学生。" }] },
            { zh: "是（时间、日期）", ex: [{ es: "Hoy es lunes. Son las tres.", zh: "今天是周一。现在三点。" }] },
            { zh: "来自…（de）", ex: [{ es: "¿De dónde eres? Soy de China.", zh: "你是哪里人？我是中国人。" }] },
            { zh: "是（性格特点）", ex: [{ es: "Mi hermana es muy amable.", zh: "我姐姐很和蔼。" }] }
        ],
        phrases: [
            { es: "ser de", zh: "来自…" },
            { es: "es que", zh: "（解释原因）是因为…" }
        ],
        note: "本质、身份用 ser；位置、状态用 estar。" },
    { w: "servir", pos: "v.", zh: ["服务；上（菜）"] },
    { w: "setenta", pos: "num.", zh: ["七十"] },
    { w: "Shanghai", pos: "地名", zh: ["上海"] },
    { w: "si, sí", pos: "conj./adv.", zh: ["如果", "是，对（sí，表示肯定，重音不同）"] },
    { w: "siempre", pos: "adv.", zh: ["总是"] },
    { w: "siete", pos: "num.", zh: ["七"] },
    { w: "silencio", pos: "m.", zh: ["安静，沉默"] },
    { w: "simpático, simpática", pos: "adj.", zh: ["可爱的，讨人喜欢的"] },
    { w: "simple", pos: "adj.", zh: ["简单的"] },
    { w: "sin", pos: "prep.", zh: ["没有，无"] },
    { w: "sobre", pos: "prep.", zh: ["关于；在…上面"] },
    { w: "sol", pos: "m.", zh: ["太阳"] },
    { w: "solo, sola", pos: "adj./adv.", zh: ["独自的；只有，仅仅"] },
    { w: "sopa", pos: "f.", zh: ["汤"] },
    { w: "sorprender", pos: "v.", zh: ["使惊讶"] },
    { w: "su, sus", pos: "adj.", zh: ["他/她/您/他们的"] },
    { w: "sueño", pos: "m.", zh: ["睡眠；梦（tener sueño 困了）"] },
    { w: "suerte", pos: "f.", zh: ["运气（buena suerte 祝好运）"] },
    { w: "sur", pos: "m.", zh: ["南方"] },
    { w: "Susana", pos: "人名", zh: ["苏珊娜"] },
    { w: "suyo, suya", pos: "pron.", zh: ["他/她/您/他们的（物主代词）"] },
    { w: "talla", pos: "f.", zh: ["（衣服）尺码"] },
    { w: "tan", pos: "adv.", zh: ["如此，那么（tan … como 和…一样）"] },
    { w: "tanto, tanta", pos: "adj./adv.", zh: ["那么多的（tanto … como 和…一样多）"] },
    { w: "tapas", pos: "f.pl.", zh: ["西班牙小吃拼盘"] },
    { w: "tarde", pos: "f./adv.", zh: ["下午（f.）"], emoji: "🌇",
        senses: [
            { zh: "下午（f.）", ex: [{ es: "Por la tarde estudio español.", zh: "下午我学西班牙语。" }] },
            { zh: "晚，迟（adv.）", ex: [{ es: "Es tarde, tengo que irme.", zh: "很晚了，我得走了。" }] }
        ],
        phrases: [
            { es: "buenas tardes", zh: "下午好" },
            { es: "por la tarde", zh: "在下午" },
            { es: "llegar tarde", zh: "迟到" }
        ],
        note: "llegar tarde = 迟到；buenas tardes = 下午好。" },
    { w: "tarta", pos: "f.", zh: ["蛋糕，派"] },
    { w: "taxi", pos: "m.", zh: ["出租车"] },
    { w: "te", pos: "pron.", zh: ["你（宾格/与格代词）"] },
    { w: "teatro", pos: "m.", zh: ["剧院"] },
    { w: "teléfono", pos: "m.", zh: ["电话"] },
    { w: "tema", pos: "m.", zh: ["主题，话题"] },
    { w: "temprano", pos: "adv.", zh: ["早（时间早）"], emoji: "🌅",
        senses: [
            { zh: "早（时间早）", ex: [{ es: "Me levanto temprano los lunes.", zh: "我周一早起。" }] },
            { zh: "提早，提前", ex: [{ es: "Llegué temprano a la cita.", zh: "我提前到了约会地点。" }] }
        ],
        phrases: [
            { es: "por la mañana temprano", zh: "一大早" },
            { es: "llegar temprano", zh: "早到" }
        ],
        note: "反义词：tarde（晚）：llegar temprano / tarde。" },
    { w: "tener", pos: "v.", zh: ["有，拥有"], conj: "tener",
        senses: [
            { zh: "有，拥有", ex: [{ es: "Tengo dos hermanos.", zh: "我有两个兄弟姐妹。" }] },
            { zh: "感到（饿/渴/冷/热）", ex: [{ es: "Tengo hambre. ¿Comemos algo?", zh: "我饿了。我们吃点东西吗？" }] },
            { zh: "（年龄）…岁", ex: [{ es: "Mi hijo tiene ocho años.", zh: "我儿子八岁了。" }] },
            { zh: "必须做…（que + 动词原形）", ex: [{ es: "Tengo que estudiar para el examen.", zh: "我必须为考试学习。" }] }
        ],
        phrases: [
            { es: "tener que + inf.", zh: "必须做…" },
            { es: "tener hambre / sed", zh: "饿 / 渴" },
            { es: "tener frío / calor", zh: "冷 / 热" },
            { es: "tener … años", zh: "…岁" }
        ],
        note: "tener 表示感觉和年龄，不要直译成「有」。" },
    { w: "terminar", pos: "v.", zh: ["结束，完成"],
        senses: [
            { zh: "结束，完成", ex: [{ es: "Termino el trabajo a las seis.", zh: "我六点结束工作。" }] },
            { zh: "做完…（de + 动词原形）", ex: [{ es: "Terminé de leer el libro.", zh: "我读完了这本书。" }] }
        ],
        phrases: [
            { es: "terminar el trabajo", zh: "完成工作" },
            { es: "terminar de + inf.", zh: "做完…" }
        ],
        note: "terminar de + 动词原形＝做完某事。" },
    { w: "texto", pos: "m.", zh: ["课文，文本"] },
    { w: "ti", pos: "pron.", zh: ["你（介词后使用，para ti 给你的）"] },
    { w: "tía", pos: "f.", zh: ["阿姨；姑姑"] },
    { w: "tiempo", pos: "m.", zh: ["时间"], emoji: "⏰",
        senses: [
            { zh: "时间", ex: [{ es: "No tengo tiempo hoy.", zh: "我今天没有时间。" }] },
            { zh: "天气", ex: [{ es: "¿Qué tiempo hace? Hace buen tiempo.", zh: "天气怎么样？天气很好。" }] },
            { zh: "时期，时代", ex: [{ es: "En el tiempo de mis abuelos no había móviles.", zh: "在我祖父母那个时代没有手机。" }] }
        ],
        phrases: [
            { es: "¿Qué tiempo hace?", zh: "天气怎么样？" },
            { es: "a tiempo", zh: "准时" },
            { es: "todo el tiempo", zh: "一直" }
        ],
        note: "tiempo 既指「时间」也指「天气」。" },
    { w: "tienda", pos: "f.", zh: ["商店"] },
    { w: "tocar", pos: "v.", zh: ["弹奏；触摸（tocar la guitarra 弹吉他）"] },
    { w: "todavía", pos: "adv.", zh: ["还，仍然"] },
    { w: "todo, toda", pos: "adj./pron.", zh: ["全部的；一切（todos los días 每天）"] },
    { w: "tomar", pos: "v.", zh: ["拿；喝，吃（tomar café 喝咖啡）"] },
    { w: "trabajar", pos: "v.", zh: ["工作"], conj: "trabajar",
        senses: [
            { zh: "工作", ex: [{ es: "Mi padre trabaja en un banco.", zh: "我爸爸在银行工作。" }] },
            { zh: "在…用功，下功夫", ex: [{ es: "Tengo que trabajar más en matemáticas.", zh: "我得多下功夫学数学。" }] }
        ],
        phrases: [
            { es: "trabajar en", zh: "在…工作" },
            { es: "trabajar de camarero", zh: "当服务员" }
        ] },
    { w: "trabajo", pos: "m.", zh: ["工作，职业"], emoji: "💼",
        senses: [
            { zh: "工作，职业", ex: [{ es: "Mi trabajo empieza a las ocho.", zh: "我的工作八点开始。" }] },
            { zh: "活儿，任务", ex: [{ es: "Tengo mucho trabajo esta semana.", zh: "我这周有很多活儿。" }] }
        ],
        phrases: [
            { es: "buscar trabajo", zh: "找工作" },
            { es: "ir al trabajo", zh: "去上班" }
        ] },
    { w: "traer", pos: "v.", zh: ["带来"] },
    { w: "tranquilo, tranquila", pos: "adj.", zh: ["安静的，平静的"],
        senses: [
            { zh: "安静的，平静的", ex: [{ es: "Es un barrio muy tranquilo.", zh: "这是个很安静的街区。" }] },
            { zh: "放心的，安心的", ex: [{ es: "¡Tranquilo! No pasa nada.", zh: "别担心！没事。" }] }
        ],
        phrases: [
            { es: "¡Tranquilo! / ¡Tranquila!", zh: "别担心！" },
            { es: "estar tranquilo", zh: "安心" }
        ],
        note: "¡Tranquilo! 对男生说，¡Tranquila! 对女生说。" },
    { w: "treinta", pos: "num.", zh: ["三十"] },
    { w: "tren", pos: "m.", zh: ["火车"] },
    { w: "tres", pos: "num.", zh: ["三"] },
    { w: "trozo", pos: "m.", zh: ["块，片"] },
    { w: "tu, tus, tú", pos: "adj./pron.", zh: ["你的", "你（tú，重音不同）"] },
    { w: "tuyo, tuya", pos: "pron.", zh: ["你的（物主代词）"] },
    { w: "un, una", pos: "art.", zh: ["一个（不定冠词）"] },
    { w: "universidad", pos: "f.", zh: ["大学"], emoji: "🎓",
        senses: [
            { zh: "大学", ex: [{ es: "Estudio medicina en la universidad.", zh: "我在大学学医。" }] }
        ],
        phrases: [
            { es: "ir a la universidad", zh: "上大学" },
            { es: "la universidad de Pekín", zh: "北京大学" }
        ] },
    { w: "uno, unos, unas", pos: "num./art.", zh: ["一；一些"] },
    { w: "usted, ustedes", pos: "pron.", zh: ["您 / 诸位（正式称呼）"] },
    { w: "vacaciones", pos: "f.pl.", zh: ["假期（常为复数）"] },
    { w: "vale", pos: "interj.", zh: ["好的，行（¿vale? 好吗？）"] },
    { w: "valer", pos: "v.", zh: ["值，价值（valer la pena 值得）"] },
    { w: "vaso", pos: "m.", zh: ["杯子，玻璃杯"] },
    { w: "veinte", pos: "num.", zh: ["二十"] },
    { w: "veinticinco", pos: "num.", zh: ["二十五"] },
    { w: "veintinueve", pos: "num.", zh: ["二十九"] },
    { w: "veintitrés", pos: "num.", zh: ["二十三"] },
    { w: "veintiuno", pos: "num.", zh: ["二十一"] },
    { w: "vender", pos: "v.", zh: ["卖"] },
    { w: "venir", pos: "v.", zh: ["来"], conj: "venir",
        senses: [
            { zh: "来", ex: [{ es: "¿Vienes a la fiesta?", zh: "你来参加聚会吗？" }] },
            { zh: "（从…）来（de）", ex: [{ es: "Vengo de la oficina.", zh: "我从办公室来。" }] }
        ],
        phrases: [
            { es: "venir de", zh: "来自…" },
            { es: "venir a + lugar", zh: "来某处" }
        ],
        note: "变位不规则：vengo, vienes, viene…" },
    { w: "ventana", pos: "f.", zh: ["窗户"] },
    { w: "ver", pos: "v.", zh: ["看见，看到"],
        senses: [
            { zh: "看见，看到", ex: [{ es: "Veo un pájaro en el árbol.", zh: "我看见树上有一只鸟。" }] },
            { zh: "观看（电影、电视等）", ex: [{ es: "Vamos a ver una película.", zh: "我们去看电影吧。" }] },
            { zh: "看望", ex: [{ es: "Voy a ver a mis abuelos el domingo.", zh: "周日我去看望祖父母。" }] }
        ],
        phrases: [
            { es: "ver la tele", zh: "看电视" },
            { es: "a ver", zh: "让我看看" }
        ],
        note: "ver a + 人：看望 / 见某人（记得加 a）。" },
    { w: "verano", pos: "m.", zh: ["夏天"] },
    { w: "verdad", pos: "f.", zh: ["事实，真话（¿verdad? 对吧？）"] },
    { w: "verdura", pos: "f.", zh: ["蔬菜（常作 verduras）"] },
    { w: "vestido", pos: "m.", zh: ["连衣裙"] },
    { w: "vez", pos: "f.", zh: ["次，回（otra vez 再一次）"] },
    { w: "viajar", pos: "v.", zh: ["旅行"] },
    { w: "viaje", pos: "m.", zh: ["旅行"] },
    { w: "vida", pos: "f.", zh: ["生活；生命"] },
    { w: "viento", pos: "m.", zh: ["风"] },
    { w: "viernes", pos: "m.", zh: ["星期五"] },
    { w: "visita", pos: "f.", zh: ["拜访；参观"] },
    { w: "visitar", pos: "v.", zh: ["参观，拜访"] },
    { w: "vivir", pos: "v.", zh: ["居住"], conj: "vivir",
        senses: [
            { zh: "居住", ex: [{ es: "Vivo en Pekín con mi familia.", zh: "我和家人住在北京。" }] },
            { zh: "生活，活着", ex: [{ es: "Vivimos muy felices aquí.", zh: "我们在这里生活得很幸福。" }] }
        ],
        phrases: [
            { es: "vivir en", zh: "住在…" },
            { es: "¿Dónde vives?", zh: "你住在哪里？" }
        ] },
    { w: "volver", pos: "v.", zh: ["返回，回去"],
        senses: [
            { zh: "返回，回去", ex: [{ es: "Vuelvo a casa a las seis.", zh: "我六点回家。" }] },
            { zh: "再次做…（a + 动词原形）", ex: [{ es: "Vuelvo a leer el libro.", zh: "我重新读这本书。" }] }
        ],
        phrases: [
            { es: "volver a casa", zh: "回家" },
            { es: "volver a + inf.", zh: "再次做…" }
        ],
        note: "volver a + 动词原形＝再做一次：Vuelvo a intentarlo." },
    { w: "ya", pos: "adv.", zh: ["已经；马上（ya no 不再）"] },
    { w: "yo", pos: "pron.", zh: ["我"] },
    { w: "zapato", pos: "m.", zh: ["鞋子"] },
];

// 变形 → 原形索引（normalize 键）。
// 20 个核心动词的变形由 index.html 从 VERBS_DATA 自动生成，这里补：
// 其他动词的变位、副动词（-ando/-iendo）、过去分词、带宾格代词的形式。
var DICT_FORMS_DATA = {
    // ---- 副动词（gerundio） ----
    "aprendiendo": "aprender", "caminando": "caminar", "cocinando": "cocinar",
    "esperando": "esperar", "estudiando": "estudiar", "haciendo": "hacer",
    "jugando": "jugar", "lloviendo": "llover", "preparando": "preparar",
    "siguiendo": "seguir", "trabajando": "trabajar", "viviendo": "vivir",
    // ---- 过去分词 ----
    "abierto": "abrir", "abierta": "abrir", "abiertas": "abrir",
    "cerrado": "cerrar", "cerrada": "cerrar", "cerradas": "cerrar",
    "dicho": "decir", "escrito": "escribir", "escrita": "escribir", "escritas": "escribir",
    "hecho": "hacer", "ocupado": "ocupar", "ocupada": "ocupar",
    "organizado": "organizar", "pasada": "pasar", "preocupado": "preocuparse",
    "preocupada": "preocuparse", "puesto": "poner", "terminado": "terminar",
    "terminada": "terminar", "visitadas": "visitar", "visto": "ver",
    // ---- 不规则/其他动词变位 ----
    "acoste": "acostarse", "acuestas": "acostarse", "acuesta": "acostarse",
    "acuestan": "acostarse", "alegro": "alegrarse", "acuerdo": "acordar", "agradezco": "agradecer",
    "ayudas": "ayudar", "ayuda": "ayudar", "ayudes": "ayudar", "ayudo": "ayudar",
    "ayudame": "ayudar", "ayudarme": "ayudar", "ayudarte": "ayudar",
    "bebe": "beber", "bebemos": "beber", "bebo": "beber",
    "camine": "caminar", "caminamos": "caminar",
    "celebramos": "celebrar", "celebran": "celebrar",
    "cierra": "cerrar", "comienza": "comenzar", "conoceros": "conocer",
    "conocerte": "conocer", "conoces": "conocer", "conoci": "conocer",
    "conocimos": "conocer", "conozco": "conocer", "contestaste": "contestar",
    "corro": "correr", "creo": "creer", "cuenta": "contar", "cuentan": "contar",
    "cuesta": "costar", "cumple": "cumplir", "cumplio": "cumplir",
    "debo": "deber", "decidio": "decidir", "desayunamos": "desayunar",
    "descanses": "descansar", "descanso": "descansar", "devuelvo": "devolver",
    "dice": "decir", "digas": "decir", "divertiste": "divertirse",
    "dormimos": "dormir", "duele": "doler", "empecemos": "empezar",
    "empieza": "empezar", "empiezan": "empezar", "empezo": "empezar",
    "encanta": "encantar", "ensenarme": "enseñar", "entiendo": "entender",
    "escribe": "escribir", "escribimos": "escribir", "escribio": "escribir",
    "escribo": "escribir", "escucho": "escuchar", "espera": "esperar",
    "espere": "esperar", "esperes": "esperar", "espero": "esperar",
    "estudia": "estudiar", "estudian": "estudiar", "estudiamos": "estudiar",
    "estudie": "estudiar", "estudies": "estudiar", "estudio": "estudiar",
    "estuviste": "estar", "explico": "explicar", "falta": "faltar",
    "fumo": "fumar", "guardes": "guardar", "gusta": "gustar", "gustan": "gustar",
    "guste": "gustar", "habla": "hablar", "hable": "hablar", "hablemos": "hablar",
    "hables": "hablar", "hablamos": "hablar", "hablan": "hablar", "hablas": "hablar",
    "hablo": "hablar", "hace": "hacer", "haces": "hacer", "haga": "hacer",
    "hago": "hacer", "hay": "haber", "hazlo": "hacer", "he": "haber", "hiciste": "hacer",
    "invitamos": "invitar", "invitarte": "invitar", "invito": "invitar",
    "juegan": "jugar", "jugue": "jugar", "lavo": "lavar", "lee": "leer",
    "leo": "leer", "levanto": "levantarse", "levantas": "levantarse",
    "levantarme": "levantarse", "llama": "llamar", "llamas": "llamar",
    "llame": "llamar", "llamo": "llamar", "llega": "llegar", "llegamos": "llegar",
    "llegan": "llegar", "llego": "llegar", "lleguemos": "llegar",
    "lleva": "llevar", "llevamos": "llevar", "llevas": "llevar", "llevo": "llevar",
    "llovio": "llover", "llueva": "llover", "llueve": "llover",
    "manda": "mandar", "mira": "mirar", "necesito": "necesitar", "nieva": "nevar",
    "oigo": "oír", "organizo": "organizar", "parece": "parecer",
    "pase": "pasar", "paseamos": "pasear", "pasen": "pasar",
    "pedimos": "pedir", "pide": "pedir", "perdimos": "perder",
    "practico": "practicar", "preparamos": "preparar", "preocupe": "preocuparse",
    "quedamos": "quedar", "quede": "quedar", "quedo": "quedar",
    "quisiera": "querer", "recibe": "recibir", "recibimos": "recibir",
    "recomienda": "recomendar", "recomiendo": "recomendar",
    "repitamelo": "repetir", "sabe": "saber", "sabes": "saber",
    "sale": "salir", "salgo": "salir", "salio": "salir", "pon": "poner",
    "sientese": "sentar", "sientes": "sentir", "siga": "seguir",
    "sigo": "seguir", "sigue": "seguir", "sirven": "servir",
    "sorprende": "sorprender", "termine": "terminar", "termino": "terminar",
    "toca": "tocar", "tome": "tomar", "tomo": "tomar", "trae": "traer",
    "traigo": "traer", "trabaja": "trabajar", "trabajamos": "trabajar",
    "trabajan": "trabajar", "trabaje": "trabajar", "trabajo": "trabajar",
    "vale": "valer", "ve": "ver", "veas": "ver", "veces": "vez", "estos": "este",
    "vende": "vender", "venden": "vender", "veo": "ver", "ves": "ver",
    "viajamos": "viajar", "viene": "venir", "vienen": "venir", "vienes": "venir",
    "vimos": "ver", "vinieron": "venir", "visite": "visitar",
    "visitamos": "visitar", "vive": "vivir", "viven": "vivir",
    "vivimos": "vivir", "vivio": "vivir", "volvemos": "volver",
    "volvimos": "volver", "vuelve": "volver", "vuelvo": "volver",
    "verme": "ver", "comemos": "comer", "comimos": "comer", "come": "comer",
    "comas": "comer", "comamos": "comer", "comieron": "comer", "comiste": "comer",
    "compre": "comprar", "compramos": "comprar", "compro": "comprar",
};


// 过去未完成时（imperfecto）：20 个核心动词的 6 人称形式（用于变形反查与长按解析）
var DICT_IMPERFECT = {
    hablar: { yo:'hablaba', tu:'hablabas', el:'hablaba', nosotros:'hablábamos', vosotros:'hablabais', ellos:'hablaban' },
    trabajar: { yo:'trabajaba', tu:'trabajabas', el:'trabajaba', nosotros:'trabajábamos', vosotros:'trabajabais', ellos:'trabajaban' },
    estudiar: { yo:'estudiaba', tu:'estudiabas', el:'estudiaba', nosotros:'estudiábamos', vosotros:'estudiabais', ellos:'estudiaban' },
    comprar: { yo:'compraba', tu:'comprabas', el:'compraba', nosotros:'comprábamos', vosotros:'comprabais', ellos:'compraban' },
    comer: { yo:'comía', tu:'comías', el:'comía', nosotros:'comíamos', vosotros:'comíais', ellos:'comían' },
    beber: { yo:'bebía', tu:'bebías', el:'bebía', nosotros:'bebíamos', vosotros:'bebíais', ellos:'bebían' },
    aprender: { yo:'aprendía', tu:'aprendías', el:'aprendía', nosotros:'aprendíamos', vosotros:'aprendíais', ellos:'aprendían' },
    vivir: { yo:'vivía', tu:'vivías', el:'vivía', nosotros:'vivíamos', vosotros:'vivíais', ellos:'vivían' },
    escribir: { yo:'escribía', tu:'escribías', el:'escribía', nosotros:'escribíamos', vosotros:'escribíais', ellos:'escribían' },
    abrir: { yo:'abría', tu:'abrías', el:'abría', nosotros:'abríamos', vosotros:'abríais', ellos:'abrían' },
    ser: { yo:'era', tu:'eras', el:'era', nosotros:'éramos', vosotros:'erais', ellos:'eran' },
    estar: { yo:'estaba', tu:'estabas', el:'estaba', nosotros:'estábamos', vosotros:'estabais', ellos:'estaban' },
    tener: { yo:'tenía', tu:'tenías', el:'tenía', nosotros:'teníamos', vosotros:'teníais', ellos:'tenían' },
    hacer: { yo:'hacía', tu:'hacías', el:'hacía', nosotros:'hacíamos', vosotros:'hacíais', ellos:'hacían' },
    ir: { yo:'iba', tu:'ibas', el:'iba', nosotros:'íbamos', vosotros:'ibais', ellos:'iban' },
    querer: { yo:'quería', tu:'querías', el:'quería', nosotros:'queríamos', vosotros:'queríais', ellos:'querían' },
    poder: { yo:'podía', tu:'podías', el:'podía', nosotros:'podíamos', vosotros:'podíais', ellos:'podían' },
    venir: { yo:'venía', tu:'venías', el:'venía', nosotros:'veníamos', vosotros:'veníais', ellos:'venían' },
    decir: { yo:'decía', tu:'decías', el:'decía', nosotros:'decíamos', vosotros:'decíais', ellos:'decían' },
    dar: { yo:'daba', tu:'dabas', el:'daba', nosotros:'dábamos', vosotros:'dabais', ellos:'daban' },
};
