/**
 * Niners Learning Center - Official Interactive JavaScript
 * Multi-language Support (UZ, RU, EN), Form Interactivity & UIC Group-style Micro-interactions
 */

// ================= MULTI-LANGUAGE DICTIONARY =================
const translations = {
  uz: {
    topBarBadge: "QABUL 2026",
    topBarText: "Toshkentdagi barcha 3 ta filialda yangi intensiv guruhlarga qabul boshlandi!",
    logoSub: "Learning Center",
    navAbout: "Biz haqimizda",
    navCourses: "Kurslar",
    navBranches: "Filiallar",
    navReviews: "Sharhlar",
    navTeachers: "Ustozlar",
    navFaq: "FAQ",
    selectLang: "Tilni tanlang:",
    ctaButton: "Kursga yozilish",
    
    // Hero
    heroBadge: "Toshkentdagi Rasmiy N1 Markaz",
    heroTitlePart1: "Ingliz tilida",
    heroTitleGradient: "erkin va ravon",
    heroTitlePart2: "so'zlashishni boshlang!",
    heroDescription: "Niners Learning Centerda 1 yil ta'lim olib, AQSH, Filippin va Misr kabi davlatlarning native speakerlari bilan to'siqlarsiz erkin muloqot qiling. Top master ustozlar va zamonaviy interaktiv metodika.",
    heroBtnEnroll: "Bepul Sinov Darsiga Yozilish",
    heroBtnBranches: "Filiallarni Ko'rish",
    statStudents: "Muvaffaqiyatli o'quvchilar",
    statIelts: "Eng yuqori natijalar",
    statBranches: "Toshkentdagi filial",
    heroCardTitle: "Speaking Club & Native Lab",
    heroCardSub: "AQSH va chet ellik spikerlar bilan",
    heroAbdulazizQuote: '"Ninersda 1 yil o\'qib, AQSH, Filippin va Misrdan kelgan native speakerlar bilan bemalol suhbatlasha oldim!"',
    speakingClubTitle: "Har hafta jonli Speaking Club:",
    speakingClubSub: "AQSH va xalqaro spikerlar bilan jonli debatlar",
    heroFloatTitle: "Hozirda 45+ guruh",
    heroFloatSub: "Qo'shilish uchun o'rinlar ochiq",

    // Why Niners
    whyNinersTag: "NIMA UCHUN NINERS?",
    whyNinersTitle: "Ingliz tilini o'rganishdagi eng ishonchli hamkoringiz",
    whyNinersSubtitle: "Biz shunchaki grammatika o'rgatmaymiz, balki o'quvchilarda tildan real hayotda qo'rqmasdan foydalanish va erkin so'zlashish ko'nikmasini shakllantiramiz.",
    benefit1Title: "Native Speaker Muloqotlari",
    benefit1Desc: "AQSH, Filippin va Misrdan kelgan xalqaro mehmonlar bilan jonli muloqot va real speaking darslari.",
    benefit1Sub: "Har hafta bepul club",
    benefit2Title: "Katta Tajribali Ustozlar",
    benefit2Desc: "Mr. Wise (Mirsaid) va afsonaviy Top Master Mr. Abdulbosit kabi yuqori natijali, sertifikatlangan mutaxassislar.",
    benefit2Sub: "IELTS 8.5+ instruktorlar",
    benefit3Title: "Metroga Yaqin Filiallar",
    benefit3Desc: "Beruniy va Novza metrolariga piyoda bir necha daqiqalik masofa hamda Farobiy/Yunusobod hududlarida qulay lokatsiyalar.",
    benefit3Sub: "3 ta faol filial",
    benefit4Title: "Kafolatlangan Natija",
    benefit4Desc: "Har oy Mock Testlar, individual ko'mak va maxsus nazorat tizimi orqali yuqori ball va erkin til bilish darajasiga erishing.",
    benefit4Sub: "Shaxsiy mentorlik",

    // Courses
    coursesTag: "O'quv Dasturlari",
    coursesTitle: "Maqsadingizga mos kursni tanlang",
    coursesSubtitle: "Boshlang'ich darajadan to xalqaro IELTS sertifikatigacha bo'lgan bosqichma-bosqich tizimli ta'lim.",
    allCoursesConsult: "Individual Maslahat Olish",
    courseEnrollBtn: "Kursga yozilish",
    c1Title: "General English",
    c1Desc: "Grammatika, so'z boyligi, to'g'ri talaffuz va kundalik nutq ravonligini bosqichma-bosqich shakllantiruvchi kompleks kurs.",
    c1f1: "Haftada 3 kun 1.5 soatdan asosiy dars",
    c1f2: "Har shanba bepul Speaking Club & Mock",
    c1f3: "Barcha darsliklar va audio materiallar bepul",
    c1f4: "Uy vazifalarini nazorat qiluvchi shaxsiy kurator",
    c2Title: "IELTS Intensive & Mastery",
    c2Desc: "Listening, Reading, Writing va Speaking bo'yicha maxsus strategiyalar. Real imtihon formatidagi professional tayyorgarlik.",
    c2f1: "Mr. Wise va Top Masterlar nazorati",
    c2f2: "Haftalik haqiqiy IELTS Mock Testlar",
    c2f3: "Writing Task 1 & 2 uchun chuqur tahlil",
    c2f4: "1-on-1 individual Speaking intervyulari",
    c3Title: "Speaking Club & Native Lab",
    c3Desc: "Til to'sig'ini butunlay yengish uchun AQSH, Filippin va xorijiy ekspertlar bilan to'g'ridan-to'g'ri debatlar va jonli muloqot.",
    c3f1: "Har xil davlat vakillari bilan muloqot",
    c3f2: "Debatlar, taqdimotlar va public speaking",
    c3f3: "Qo'rquv va til to'sig'ini sindirish kafolati",
    c3f4: "Zamonaviy idiomalar va slanglar tahlili",

    // Branches
    branchesTag: "Filiallar Tarmog'i",
    branchesTitle: "Toshkent bo'ylab sizga eng yaqin Niners filiali",
    branchesSubtitle: "Metro bekatlari va markaziy transport chorrahalarida joylashgan zamonaviy o'quv xonalari va barcha qulayliklar.",
    branch1Name: "Shayxontohur Filiali (Beruniy)",
    branch1Address: "Shayxontohur tumani, Qoʻrgʻoncha koʻchasi, 149-uy",
    branch1Landmark: "Mo'ljal: Ipakchilik instituti & Beruniy metro bekati",
    branch2Name: "Chilonzor Filiali (Novza)",
    branch2Address: "Ehtirom koʻchasi, 3-3A uy",
    branch2Landmark: "Mo'ljal: Novza metro bekati yaqinida",
    branch3Name: "Farobiy & Yunusobod Filiali",
    branch3Address: "Farobiy koʻchasi, 28/4-uy hamda Yunusobod hududi",
    branch3Landmark: "Mo'ljal: Katta transport yo'nalishlari tutashuvi",
    branchSelectBtn: "Ushbu filialga yozilish",

    // Reviews & Teachers
    reviewsTag: "Haqiqiy Fikrlar va Tajriba",
    reviewsTitle: "O'quvchilarimiz qanday natijaga erishmoqda?",
    reviewsSubtitle: "Ninersda o'qish - bu faqat darslik emas, balki real xalqaro muloqot va orzudagi IELTS natijasiga tezroq chiqish yo'li.",
    reviewVerified: "Tasdiqlangan O'quvchi Fikri",
    abdulazizFullQuote: '"Niners o\'quv markazida 1 yil ta\'lim olganimdan so\'ng, AQSH, Filippin va Misr kabi dunyo davlatlaridan kelgan native speakerlar bilan erkin, ravon va hech qanday tutilishlarsiz tabiiy ingliz tilida gaplasha boshladim. Darslardagi muhit va ustozlarning individual yondashuvi natijamni butunlay o\'zgartirdi!"',
    abdulazizBio: "Niners bitiruvchisi • 1 Yillik Intensiv O'quvchi",
    review2Quote: '"Avval boshqa markazlarda o\'qib 6.0 dan o\'ta olmagandim. Ninersda Mr. Mirsaid metodikasi orqali 3 oyda 8.0 ball oldim. Ayniqsa Writing va Speaking darslari juda samarali."',
    teachersTag: "Professional Jamoa",
    teachersTitle: "Sizga ta'lim beradigan ustozlar",
    mrWiseNick: "Taniqli Ekspert Ustoz",
    mrWiseDesc: "O'quvchilar orasida o'zining chuqur falsafiy yondashuvi, sodda tushuntirish uslubi va IELTS imtihonidagi nozik sirlarni ochib berishi bilan tanilgan usta pedagog.",
    nativeSpeakersTag: "Xalqaro Mehmon Ustozlar",
    nativeSpeakersTitle: "USA, Philippines & Egypt Mentors",
    nativeSpeakersDesc: "Haftalik Speaking Club va jonli muloqot mashg'ulotlarida talabalarimiz bilan real talaffuz, aktsent va kundalik nutq amaliyotini olib boruvchi xorijiy mutaxassislar.",

    // Special Highlight: Mr Abdulbosit
    abdulbositBadge: "MARKAZNING ENG ZO'R VA TOP MASTER USTOZI",
    abdulbositRole: "Absolute Best & Top Master Instructor • Chief Academic Mentor",
    abdulbositBio: "O'quv markazining mutlaq eng yuqori natijali, talabalar mehrini qozongan eng zo'r bosh ustozi. Yuzlab o'quvchilarni IELTS 7.5 - 8.5+ ballarga va xalqaro nufuzli universitetlar grantlariga yetaklagan haqiqiy mahorat egasi.",
    abdulbositStat1: "Metodika standarti",
    abdulbositStat2: "Muvaffaqiyatli shogird",
    abdulbositCta: "Mr. Abdulbosit guruhiga yozilish",

    // Form
    formPreTag: "Qulay Ro'yxatdan O'tish",
    formTitle: "Birinchi bepul sinov darsiga hoziroq yoziling",
    formDesc: "Formani to'ldiring. Administratorlarimiz 15 daqiqa ichida siz bilan bog'lanib, darajangizni aniqlash va qulay dars vaqtini tanlashda yordam beradi.",
    g1Title: "100% Bepul Birinchi Dars",
    g1Desc: "Dars muhiti va o'qitish metodikamizni to'liq sinab ko'ring.",
    g2Title: "Bepul Daraja Aniqlash Testi",
    g2Desc: "Grammar & Speaking bo'yicha aniq darajangiz belgilanadi.",
    g3Title: "Natija Kafolati",
    g3Desc: "Darslarni to'liq qatnashgan talabalarga maqsadli natija ta'minlanadi.",
    formCardTitle: "Ro'yxatdan O'tish",
    formCardSubtitle: "Joylar soni chegaralangan",
    formOnlineStatus: "Qabul ochiq",
    formLabelName: "To'liq Ism va Familiyangiz *",
    formLabelPhone: "Telefon Raqamingiz *",
    formLabelCourse: "Qiziqqan Kursingiz *",
    formLabelBranch: "Qulay Filial *",
    formLabelTeacher: "Afzal Ko'rgan Ustozingiz (Ixtiyoriy)",
    optCourseGeneral: "General English (Boshlang'ich - Ilg'or)",
    optCourseIelts: "IELTS Intensive (Target 7.0 - 8.5+)",
    optCourseSpeaking: "Speaking Club & Native Lab",
    optCourseKids: "Bolalar uchun ingliz tili",
    optCourseIndiv: "Individual Darslar",
    optBranch1: "1-Filial: Shayxontohur (Beruniy metro)",
    optBranch2: "2-Filial: Chilonzor (Novza metro)",
    optBranch3: "3-Filial: Farobiy & Yunusobod",
    optTeacherAny: "Eng mos bo'sh guruhga yo'naltirish",
    formSubmitBtn: "Ariza Yuborish & Sinov Darsiga Yozilish",
    formPrivacy: "Ma'lumotlaringiz xavfsizligi kafolatlanadi. Spamsiz, faqat rasmiy aloqa.",
    successTitle: "Arizangiz Qabul Qilindi!",
    successDesc: "Rahmat! Administratorlarimiz tez orada siz ko'rsatgan telefon raqamiga qo'ng'iroq qilib, dars jadvalini tasdiqlashadi.",
    successNewBtn: "Yana yangi ariza to'ldirish",

    // FAQ
    faqTag: "Ko'p Beriladigan Savollar",
    faqTitle: "Sizni qiziqtirgan savollarga javoblar",
    faq1Q: "Birinchi dars haqiqatan ham bepulmi?",
    faq1A: "Ha, birinchi sinov darsi mutlaqo bepul. Siz darsga kelib metodika, o'quv muhiti va ustozlarimiz bilan bevosita tanishishingiz mumkin.",
    faq2Q: "Native speakerlar qaysi davlatlardan va qachon dars o'tadi?",
    faq2A: "Bizda AQSH, Filippin va Misrdan kelgan tajribali xalqaro spikerlar doimiy Speaking Club va masterklasslar o'tkazadi. Har hafta maxsus muloqot mashg'ulotlari tashkil etiladi.",
    faq3Q: "Mr. Abdulbosit guruhiga qanday yozilish mumkin?",
    faq3A: "Mr. Abdulbosit markazimizning bosh top master ustozi bo'lgani sababli, guruhlar tez to'ladi. Ro'yxatdan o'tish formasi orqali tanlab ariza qoldiring, administratorlarimiz sizni eng yaqin bo'sh qabulga kiritishadi.",
    faq4Q: "Filiallar qayerda joylashgan va metroga yaqinmi?",
    faq4A: "Barcha filiallarimiz juda qulay joylashgan: Shayxontohur filiali Beruniy metrosi va Ipakchilik instituti oldida, Chilonzor filiali Novza metrosiga yaqin, shuningdek Farobiy va Yunusobod filialimiz mavjud.",

    // Footer
    footerDesc: "Toshkent shahrida professional ingliz tili, IELTS va xorijiy ekspertlar bilan ravon muloqot ta'limini taklif etuvchi yetakchi o'quv markazi.",
    footerNavTitle: "Bo'limlar",
    footerCoursesTitle: "Dasturlar",
    footerContactTitle: "Aloqa & Filiallar",
    footerBranchesSum: "Toshkent: Beruniy, Novza, Farobiy & Yunusobod",
    footerTerms: "Foydalanish qoidalari",
    footerPrivacy: "Maxfiylik siyosati"
  },

  ru: {
    topBarBadge: "НАБОР 2026",
    topBarText: "Идет набор в новые интенсивные группы во всех 3 филиалах Ташкента!",
    logoSub: "Learning Center",
    navAbout: "О нас",
    navCourses: "Курсы",
    navBranches: "Филиалы",
    navReviews: "Отзывы",
    navTeachers: "Преподаватели",
    navFaq: "FAQ",
    selectLang: "Выберите язык:",
    ctaButton: "Записаться на курс",

    // Hero
    heroBadge: "Официальный центр №1 в Ташкенте",
    heroTitlePart1: "Начните говорить на английском",
    heroTitleGradient: "свободно и уверенно!",
    heroTitlePart2: "",
    heroDescription: "Пройдя обучение в Niners Learning Center в течение 1 года, вы сможете свободно и естественно общаться с носителями языка из США, Филиппин и Египта без языкового барьера. Топовые мастера и эффективная методика.",
    heroBtnEnroll: "Записаться на пробный урок",
    heroBtnBranches: "Посмотреть филиалы",
    statStudents: "Успешных студентов",
    statIelts: "Максимальные баллы",
    statBranches: "Филиала в Ташкенте",
    heroCardTitle: "Speaking Club & Native Lab",
    heroCardSub: "Спикеры из США и зарубежья",
    heroAbdulazizQuote: '"Отучившись в Niners 1 год, я начал свободно и естественно общаться с носителями языка из США, Филиппин и Египта!"',
    speakingClubTitle: "Каждую неделю живой Speaking Club:",
    speakingClubSub: "Прямая разговорная практика с экспертами из США и зарубежья",
    heroFloatTitle: "Более 45+ групп",
    heroFloatSub: "Есть свободные места для записи",

    // Why Niners
    whyNinersTag: "ПОЧЕМУ NINERS?",
    whyNinersTitle: "Ваш надежный партнер в изучении английского языка",
    whyNinersSubtitle: "Мы не просто преподаем грамматику, а формируем практический навык свободного общения в реальной жизни без страха.",
    benefit1Title: "Общение с Native Speakers",
    benefit1Desc: "Регулярные занятия и Speaking Club с гостями и преподавателями из США, Филиппин и Египта.",
    benefit1Sub: "Еженедельный бесплатный клуб",
    benefit2Title: "Опытные Преподаватели",
    benefit2Desc: "Известный эксперт Mr. Wise (Мирсаид) и легендарный Топ Мастер Mr. Abdulbosit — сертифицированные наставники.",
    benefit2Sub: "Инструкторы с IELTS 8.5+",
    benefit3Title: "Филиалы возле Метро",
    benefit3Desc: "Пешая доступность от станций метро Беруни и Новза, а также удобные локации Фараби и Юнусабад.",
    benefit3Sub: "3 активных филиала",
    benefit4Title: "Гарантия Результата",
    benefit4Desc: "Ежемесячные Mock тесты, персональный куратор и системный контроль каждого пройденного этапа.",
    benefit4Sub: "Персональное наставничество",

    // Courses
    coursesTag: "Программы обучения",
    coursesTitle: "Выберите курс, подходящий вашей цели",
    coursesSubtitle: "Системное обучение от начального уровня до международного сертификата IELTS.",
    allCoursesConsult: "Получить консультацию",
    courseEnrollBtn: "Записаться на курс",
    c1Title: "General English",
    c1Desc: "Комплексный курс, развивающий грамматику, словарный запас, произношение и беглость повседневной речи.",
    c1f1: "3 раза в неделю по 1.5 часа основные уроки",
    c1f2: "Каждую субботу бесплатный Speaking Club и Mock",
    c1f3: "Все учебники и аудиоматериалы включены",
    c1f4: "Личный куратор для проверки заданий",
    c2Title: "IELTS Intensive & Mastery",
    c2Desc: "Специальные стратегии для Listening, Reading, Writing и Speaking. Профессиональная подготовка к реальному экзамену.",
    c2f1: "Кураторство от Mr. Wise и топ мастеров",
    c2f2: "Еженедельные реальные IELTS Mock тесты",
    c2f3: "Глубокий разбор Writing Task 1 & 2",
    c2f4: "Индивидуальные Speaking интервью 1-на-1",
    c3Title: "Speaking Club & Native Lab",
    c3Desc: "Интерактивные дебаты и открытые дискуссии со спикерами из США, Филиппин и зарубежными гостями для преодоления языкового барьера.",
    c3f1: "Практика с представителями разных стран",
    c3f2: "Дебаты, презентации и публичные выступления",
    c3f3: "Гарантированное преодоление страха общения",
    c3f4: "Разбор современных идиом и сленга",

    // Branches
    branchesTag: "Сеть филиалов",
    branchesTitle: "Ближайший филиал Niners в Ташкенте",
    branchesSubtitle: "Современные комфортные аудитории рядом с центральными станциями метро и транспортными развязками.",
    branch1Name: "Филиал Шайхантахур (Беруни)",
    branch1Address: "Шайхантахурский район, ул. Курганча, 149",
    branch1Landmark: "Ориентир: Институт шелководства и метро Беруни",
    branch2Name: "Филиал Чиланзар (Новза)",
    branch2Address: "ул. Эхтиром, 3-3А",
    branch2Landmark: "Ориентир: рядом со станцией метро Новза",
    branch3Name: "Филиал Фараби & Юнусабад",
    branch3Address: "ул. Фараби, 28/4 и район Юнусабад",
    branch3Landmark: "Ориентир: удобная транспортная развязка",
    branchSelectBtn: "Записаться в этот филиал",

    // Reviews & Teachers
    reviewsTag: "Реальные отзывы и опыт",
    reviewsTitle: "Каких результатов достигают наши студенты?",
    reviewsSubtitle: "Обучение в Niners — это не просто учебники, а путь к уверенному международному общению и высокому баллу IELTS.",
    reviewVerified: "Подтвержденный отзыв студента",
    abdulazizFullQuote: '"После 1 года обучения в учебном центре Niners я начал свободно, бегло и без каких-либо запинок говорить на английском языке с носителями языка из США, Филиппин и Египта. Атмосфера и индивидуальный подход полностью изменили мой уровень!"',
    abdulazizBio: "Выпускник Niners • 1 год интенсивного обучения",
    review2Quote: '"Раньше я не могла набрать больше 6.0 в других центрах. В Niners благодаря методике Mr. Mirsaid за 3 месяца сдала IELTS на 8.0!"',
    teachersTag: "Команда преподавателей",
    teachersTitle: "Наставники, которые приведут вас к успеху",
    mrWiseNick: "Признанный эксперт",
    mrWiseDesc: "Преподаватель, известный своим философским подходом, простым и понятным объяснением сложных правил и секретов IELTS.",
    nativeSpeakersTag: "Международные спикеры",
    nativeSpeakersTitle: "USA, Philippines & Egypt Mentors",
    nativeSpeakersDesc: "Приглашенные эксперты, которые ведут практические разговорные клубы и тренируют естественное произношение.",

    // Special Highlight: Mr Abdulbosit
    abdulbositBadge: "САМЫЙ ЛУЧШИЙ ВЕДУЩИЙ ТОП-МАСТЕР ЦЕНТРА",
    abdulbositRole: "Absolute Best & Top Master Instructor • Chief Academic Mentor",
    abdulbositBio: "Абсолютно лучший ведущий наставник центра с высочайшими результатами. Мастер, подготовивший сотни студентов на баллы IELTS 7.5 - 8.5+ и к поступлению в престижные мировые университеты.",
    abdulbositStat1: "Стандарт методики",
    abdulbositStat2: "Успешных учеников",
    abdulbositCta: "Записаться в группу Mr. Abdulbosit",

    // Form
    formPreTag: "Быстрая регистрация",
    formTitle: "Запишитесь на первый бесплатный пробный урок",
    formDesc: "Заполните форму, и наши администраторы свяжутся с вами в течение 15 минут, чтобы определить ваш уровень и подобрать удобное время.",
    g1Title: "100% Бесплатный первый урок",
    g1Desc: "Оцените атмосферу и методику преподавания без каких-либо оплат.",
    g2Title: "Бесплатное тестирование",
    g2Desc: "Точное определение уровня Grammar & Speaking.",
    g3Title: "Гарантия прогресса",
    g3Desc: "Системное доведение до целевого результата.",
    formCardTitle: "Регистрация на обучение",
    formCardSubtitle: "Количество мест ограничено",
    formOnlineStatus: "Набор открыт",
    formLabelName: "Ваше имя и фамилия *",
    formLabelPhone: "Номер телефона *",
    formLabelCourse: "Интересующий курс *",
    formLabelBranch: "Удобный филиал *",
    formLabelTeacher: "Желаемый преподаватель (необязательно)",
    optCourseGeneral: "General English (От Beginner до Advanced)",
    optCourseIelts: "IELTS Intensive (Target 7.0 - 8.5+)",
    optCourseSpeaking: "Speaking Club & Native Lab",
    optCourseKids: "Английский для детей",
    optCourseIndiv: "Индивидуальные уроки",
    optBranch1: "1-й филиал: Шайхантахур (метро Беруни)",
    optBranch2: "2-й филиал: Чиланзар (метро Новза)",
    optBranch3: "3-й филиал: Фараби & Юнусабад",
    optTeacherAny: "Определить в ближайшую свободную группу",
    formSubmitBtn: "Отправить заявку на пробный урок",
    formPrivacy: "Конфиденциальность данных гарантирована. Без спама.",
    successTitle: "Ваша заявка принята!",
    successDesc: "Спасибо! Администратор свяжется с вами по указанному телефону для подтверждения расписания.",
    successNewBtn: "Заполнить новую заявку",

    // FAQ
    faqTag: "Часто задаваемые вопросы",
    faqTitle: "Ответы на популярные вопросы",
    faq1Q: "Первый урок действительно бесплатный?",
    faq1A: "Да, первый пробный урок абсолютно бесплатный. Вы сможете познакомиться с преподавателем, методикой и группой.",
    faq2Q: "Откуда носители языка и когда проходят занятия?",
    faq2A: "У нас преподают спикеры из США, Филиппин и Египта. Еженедельно организуются разговорные клубы и интенсивные занятия.",
    faq3Q: "Как записаться именно к Mr. Abdulbosit?",
    faq3A: "Так как Mr. Abdulbosit является топ-мастером центра, группы к нему формируются заранее. Оставьте заявку в форме выше, выбрав его имя.",
    faq4Q: "Где находятся филиалы и близко ли метро?",
    faq4A: "Все филиалы находятся в минутах ходьбы от метро: Шайхантахур (метро Беруни), Чиланзар (метро Новза), а также филиалы Фараби и Юнусабад.",

    // Footer
    footerDesc: "Ведущий образовательный центр в Ташкенте по изучению английского языка, подготовке к IELTS и разговорной практике с зарубежными экспертами.",
    footerNavTitle: "Разделы",
    footerCoursesTitle: "Курсы",
    footerContactTitle: "Контакты & Филиалы",
    footerBranchesSum: "Ташкент: Беруни, Новза, Фараби & Юнусабад",
    footerTerms: "Условия использования",
    footerPrivacy: "Политика конфиденциальности"
  },

  en: {
    topBarBadge: "ENROLLMENT 2026",
    topBarText: "New season admission is now open across all 3 Tashkent branches!",
    logoSub: "Learning Center",
    navAbout: "About Us",
    navCourses: "Courses",
    navBranches: "Branches",
    navReviews: "Reviews",
    navTeachers: "Instructors",
    navFaq: "FAQ",
    selectLang: "Select language:",
    ctaButton: "Enroll Now",

    // Hero
    heroBadge: "Official #1 Center in Tashkent",
    heroTitlePart1: "Start speaking English",
    heroTitleGradient: "fluently and naturally",
    heroTitlePart2: "with confidence!",
    heroDescription: "After studying at Niners Learning Center for just 1 year, communicate barrier-free with native speakers from the USA, Philippines, and Egypt. Learn with top master instructors and proven immersive methods.",
    heroBtnEnroll: "Book a Free Trial Lesson",
    heroBtnBranches: "Explore Branches",
    statStudents: "Successful students",
    statIelts: "Top scores achieved",
    statBranches: "Tashkent branches",
    heroCardTitle: "Speaking Club & Native Lab",
    heroCardSub: "Live lessons with US and native speakers",
    heroAbdulazizQuote: '"After studying at Niners for 1 year, I started speaking fluently and naturally with native speakers from the USA, Philippines, and Egypt!"',
    speakingClubTitle: "Weekly Live Speaking Club:",
    speakingClubSub: "Direct conversation practice with US and international experts",
    heroFloatTitle: "45+ active cohorts",
    heroFloatSub: "Limited seats available for enrollment",

    // Why Niners
    whyNinersTag: "WHY NINERS?",
    whyNinersTitle: "Your most trusted partner in mastering English",
    whyNinersSubtitle: "We don't just teach grammar rules; we empower students to communicate fearlessly and naturally in real-world situations.",
    benefit1Title: "Native Speaker Interaction",
    benefit1Desc: "Engaging conversations and immersive speaking sessions with guests from the USA, Philippines, and Egypt.",
    benefit1Sub: "Weekly free speaking club",
    benefit2Title: "Highly Experienced Instructors",
    benefit2Desc: "Learn from renowned experts like Mr. Wise (Mirsaid) and our legendary Top Master Mr. Abdulbosit.",
    benefit2Sub: "IELTS 8.5+ certified mentors",
    benefit3Title: "Branches Near Metro Stations",
    benefit3Desc: "Walking distance from Beruniy and Novza metro stations, plus central locations in Farobiy & Yunusobod.",
    benefit3Sub: "3 active branches",
    benefit4Title: "Guaranteed Measurable Results",
    benefit4Desc: "Monthly mock exams, personal mentor tracking, and a systematic framework for guaranteed score improvements.",
    benefit4Sub: "1-on-1 mentorship",

    // Courses
    coursesTag: "Study Programs",
    coursesTitle: "Choose the perfect course for your goals",
    coursesSubtitle: "From beginner fundamentals to international IELTS certification with structured step-by-step guidance.",
    allCoursesConsult: "Get Personalized Consultation",
    courseEnrollBtn: "Enroll in Course",
    c1Title: "General English",
    c1Desc: "A comprehensive course enhancing grammar, rich vocabulary, pronunciation, and conversational fluency.",
    c1f1: "3 sessions weekly (1.5 hours each)",
    c1f2: "Free Saturday Speaking Club & Mock exams",
    c1f3: "All coursebooks and audio resources included",
    c1f4: "Dedicated personal curator for homework review",
    c2Title: "IELTS Intensive & Mastery",
    c2Desc: "Tailored strategies for Listening, Reading, Writing, and Speaking under actual examination conditions.",
    c2f1: "Direct supervision by Mr. Wise & Top Masters",
    c2f2: "Weekly authentic IELTS mock tests",
    c2f3: "Deep analysis for Writing Task 1 & 2",
    c2f4: "1-on-1 individual Speaking interviews",
    c3Title: "Speaking Club & Native Lab",
    c3Desc: "Break the language barrier through active debates and natural dialogs with US, Filipino, and global guests.",
    c3f1: "Conversations with speakers worldwide",
    c3f2: "Debates, presentations, and public speaking",
    c3f3: "Guaranteed reduction of speech anxiety",
    c3f4: "Modern idioms, slang, and cultural nuances",

    // Branches
    branchesTag: "Branch Network",
    branchesTitle: "Find your nearest Niners branch in Tashkent",
    branchesSubtitle: "Modern, high-tech classrooms located directly beside major metro stations and transportation hubs.",
    branch1Name: "Shayxontohur Branch (Beruniy)",
    branch1Address: "Shayxontohur district, Qoʻrgʻoncha street, 149",
    branch1Landmark: "Landmark: Near Silk Research Institute & Beruniy metro",
    branch2Name: "Chilonzor Branch (Novza)",
    branch2Address: "Ehtirom street, 3-3A",
    branch2Landmark: "Landmark: Near Novza metro station",
    branch3Name: "Farobiy & Yunusobod Branch",
    branch3Address: "Farobiy street, 28/4 & Yunusobod district",
    branch3Landmark: "Landmark: Convenient central transit junction",
    branchSelectBtn: "Enroll at this branch",

    // Reviews & Teachers
    reviewsTag: "Real Reviews & Success Stories",
    reviewsTitle: "What our students achieve with Niners",
    reviewsSubtitle: "Studying at Niners goes beyond traditional textbooks — it opens real global communication and fast-tracks top IELTS scores.",
    reviewVerified: "Verified Student Testimonial",
    abdulazizFullQuote: '"After studying English at Niners for 1 year, I began speaking fluently and naturally with native speakers from the USA, Philippines, Egypt, and beyond without hesitation. The immersive atmosphere and personal guidance completely transformed my skills!"',
    abdulazizBio: "Niners Graduate • 1-Year Intensive Student",
    review2Quote: '"I was stuck at 6.0 in other centers. Thanks to Mr. Mirsaid\'s methodology at Niners, I scored an 8.0 in just 3 months! Writing and Speaking were outstanding."',
    teachersTag: "Professional Faculty",
    teachersTitle: "Learn from Tashkent's premier educators",
    mrWiseNick: "Distinguished Senior Mentor",
    mrWiseDesc: "Renowned among students for his philosophical clarity, insightful explanations, and deep mastery of IELTS exam intricacies.",
    nativeSpeakersTag: "International Mentors",
    nativeSpeakersTitle: "USA, Philippines & Egypt Mentors",
    nativeSpeakersDesc: "Visiting native and international speakers facilitating weekly live speaking clubs, pronunciation labs, and real conversational mastery.",

    // Special Highlight: Mr Abdulbosit
    abdulbositBadge: "THE ABSOLUTE BEST & TOP MASTER INSTRUCTOR",
    abdulbositRole: "Absolute Best & Top Master Instructor • Chief Academic Mentor",
    abdulbositBio: "Recognized as the absolute best and highest-achieving master instructor of Niners Learning Center. Beloved by students, having guided hundreds of learners to IELTS 7.5 - 8.5+ and full scholarships at premier global universities.",
    abdulbositStat1: "Curriculum Standard",
    abdulbositStat2: "Successful Alumni",
    abdulbositCta: "Join Mr. Abdulbosit's Class",

    // Form
    formPreTag: "Seamless Enrollment",
    formTitle: "Book your first free trial lesson today",
    formDesc: "Submit your details below. Our administrators will contact you within 15 minutes to evaluate your level and schedule your preferred class.",
    g1Title: "100% Free First Lesson",
    g1Desc: "Experience our classroom energy and teaching methodology with zero commitment.",
    g2Title: "Free Placement Test",
    g2Desc: "Accurate evaluation of your Grammar and Speaking fluency.",
    g3Title: "Guaranteed Progress",
    g3Desc: "Structured guidance ensuring you hit your target score.",
    formCardTitle: "Course Registration",
    formCardSubtitle: "Limited seats per cohort",
    formOnlineStatus: "Enrollment Open",
    formLabelName: "Full Name *",
    formLabelPhone: "Phone Number *",
    formLabelCourse: "Desired Course *",
    formLabelBranch: "Preferred Branch *",
    formLabelTeacher: "Preferred Teacher (Optional)",
    optCourseGeneral: "General English (Beginner to Advanced)",
    optCourseIelts: "IELTS Intensive (Target 7.0 - 8.5+)",
    optCourseSpeaking: "Speaking Club & Native Lab",
    optCourseKids: "Kids English Foundation",
    optCourseIndiv: "Individual 1-on-1 Lessons",
    optBranch1: "Branch 1: Shayxontohur (Beruniy metro)",
    optBranch2: "Branch 2: Chilonzor (Novza metro)",
    optBranch3: "Branch 3: Farobiy & Yunusobod",
    optTeacherAny: "Assign to next available matching cohort",
    formSubmitBtn: "Submit Application & Book Free Trial",
    formPrivacy: "Your personal data is strictly protected. No spam, official updates only.",
    successTitle: "Application Received Successfully!",
    successDesc: "Thank you! Our admissions coordinator will call your phone shortly to confirm your schedule and trial lesson details.",
    successNewBtn: "Submit another application",

    // FAQ
    faqTag: "Frequently Asked Questions",
    faqTitle: "Answers to common inquiries",
    faq1Q: "Is the first trial lesson truly 100% free?",
    faq1A: "Yes, the trial session is completely free. You can experience our modern classroom, meet the teacher, and assess the methodology with no obligation.",
    faq2Q: "Where are the native speakers from and how often do they teach?",
    faq2A: "We host certified native and fluent international speakers from the USA, Philippines, and Egypt for weekly speaking clubs and interactive workshops.",
    faq3Q: "How do I secure a spot in Mr. Abdulbosit's cohort?",
    faq3A: "Because Mr. Abdulbosit is our top master instructor, cohorts fill up quickly. Choose his name in the registration form above, and our staff will prioritize your seat.",
    faq4Q: "Where are the branches located and are they close to metro stations?",
    faq4A: "All branches are centrally located: Shayxontohur branch near Beruniy metro, Chilonzor branch near Novza metro, and our Farobiy & Yunusobod branches.",

    // Footer
    footerDesc: "Tashkent's premier education center dedicated to advanced English fluency, IELTS excellence, and live native speaker communication.",
    footerNavTitle: "Navigation",
    footerCoursesTitle: "Courses",
    footerContactTitle: "Contact & Branches",
    footerBranchesSum: "Tashkent: Beruniy, Novza, Farobiy & Yunusobod",
    footerTerms: "Terms of Service",
    footerPrivacy: "Privacy Policy"
  }
};

let currentLanguage = 'uz';

// Initialize Language Switcher
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update labels
  const langLabel = document.getElementById('current-lang-label');
  const mobileLangLabel = document.getElementById('mobile-lang-label');
  if (langLabel) langLabel.textContent = lang.toUpperCase();
  if (mobileLangLabel) mobileLangLabel.textContent = lang.toUpperCase();

  // Find all elements with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders according to language
  const nameInput = document.getElementById('fullName');
  if (nameInput) {
    if (lang === 'uz') nameInput.placeholder = "Masalan: Abdulaziz Maxmudov";
    else if (lang === 'ru') nameInput.placeholder = "Например: Абдулазиз Махмудов";
    else nameInput.placeholder = "E.g. Abdulaziz Makhmudov";
  }

  // Close dropdown if open
  const dropdown = document.getElementById('lang-dropdown-menu');
  const chevron = document.getElementById('lang-chevron');
  if (dropdown) dropdown.classList.add('hidden');
  if (chevron) chevron.classList.remove('rotate-180');
}

// Global branch selection router
window.selectBranchAndEnroll = function(branchName) {
  const branchSelect = document.getElementById('branchSelect');
  if (branchSelect) {
    for (let i = 0; i < branchSelect.options.length; i++) {
      if (branchSelect.options[i].value === branchName) {
        branchSelect.selectedIndex = i;
        break;
      }
    }
  }
  const registerSection = document.getElementById('register');
  if (registerSection) {
    registerSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Global course selection router
window.selectCourseAndEnroll = function(courseName) {
  const courseSelect = document.getElementById('courseSelect');
  if (courseSelect) {
    for (let i = 0; i < courseSelect.options.length; i++) {
      if (courseSelect.options[i].value === courseName) {
        courseSelect.selectedIndex = i;
        break;
      }
    }
  }
  const registerSection = document.getElementById('register');
  if (registerSection) {
    registerSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Global teacher pre-selection router
window.enrollWithTeacher = function(teacherName) {
  const teacherSelect = document.getElementById('teacherSelect');
  if (teacherSelect) {
    for (let i = 0; i < teacherSelect.options.length; i++) {
      if (teacherSelect.options[i].value === teacherName) {
        teacherSelect.selectedIndex = i;
        break;
      }
    }
  }
  const registerSection = document.getElementById('register');
  if (registerSection) {
    registerSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Handle Form Submission with interactive state
window.handleFormSubmit = function(e) {
  e.preventDefault();

  const nameVal = document.getElementById('fullName').value.trim();
  const phoneVal = document.getElementById('phoneNumber').value.trim();
  const courseVal = document.getElementById('courseSelect').value;
  const branchVal = document.getElementById('branchSelect').value;
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');

  if (!nameVal || !phoneVal) {
    alert("Iltimos, ismingiz va telefon raqamingizni to'ldiring!");
    return;
  }

  // Simulate loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75');
    if (submitText) submitText.textContent = currentLanguage === 'uz' ? "Yuborilmoqda..." : (currentLanguage === 'ru' ? "Отправка..." : "Sending...");
  }

  setTimeout(() => {
    // Populate summary card
    const sName = document.getElementById('summary-name');
    const sPhone = document.getElementById('summary-phone');
    const sCourse = document.getElementById('summary-course');
    const sBranch = document.getElementById('summary-branch');

    if (sName) sName.textContent = nameVal;
    if (sPhone) sPhone.textContent = phoneVal;
    if (sCourse) sCourse.textContent = courseVal;
    if (sBranch) sBranch.textContent = branchVal;

    // Show success state
    const formElement = document.getElementById('enrollment-form');
    const successElement = document.getElementById('form-success-state');
    if (formElement && successElement) {
      formElement.classList.add('hidden');
      successElement.classList.remove('hidden');
    }

    // Reset button
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-75');
      if (submitText) submitText.textContent = translations[currentLanguage].formSubmitBtn;
    }
  }, 650);
};

// Reset form back to interactive entry
window.resetFormState = function() {
  const formElement = document.getElementById('enrollment-form');
  const successElement = document.getElementById('form-success-state');
  if (formElement && successElement) {
    formElement.reset();
    formElement.classList.remove('hidden');
    successElement.classList.add('hidden');
  }
};

// ================= DOM CONTENT LOADED EVENT LISTENERS =================
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Language Dropdown Toggle
  const langMenuBtn = document.getElementById('lang-menu-btn');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');
  const langChevron = document.getElementById('lang-chevron');

  if (langMenuBtn && langDropdownMenu) {
    langMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = langDropdownMenu.classList.toggle('hidden');
      if (langChevron) {
        langChevron.classList.toggle('rotate-180', !isHidden);
      }
    });

    document.addEventListener('click', (e) => {
      if (!langMenuBtn.contains(e.target) && !langDropdownMenu.contains(e.target)) {
        langDropdownMenu.classList.add('hidden');
        if (langChevron) langChevron.classList.remove('rotate-180');
      }
    });
  }

  // Language Option Click Listeners
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Mobile Language cycle button
  const mobileLangCycleBtn = document.getElementById('mobile-lang-cycle-btn');
  if (mobileLangCycleBtn) {
    mobileLangCycleBtn.addEventListener('click', () => {
      const cycle = ['uz', 'ru', 'en'];
      const nextIdx = (cycle.indexOf(currentLanguage) + 1) % cycle.length;
      setLanguage(cycle[nextIdx]);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isClosed = mobileMenu.classList.toggle('hidden');
      if (menuIcon) {
        menuIcon.className = isClosed ? "fa-solid fa-bars text-xl" : "fa-solid fa-xmark text-xl";
      }
    });

    // Close mobile menu on clicking any navigation link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.className = "fa-solid fa-bars text-xl";
      });
    });
  }

  // 3. FAQ Accordion functionality
  const faqAccordion = document.getElementById('faq-accordion');
  if (faqAccordion) {
    const triggers = faqAccordion.querySelectorAll('.faq-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('.fa-chevron-down');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other accordions for clean single-open feel
        triggers.forEach(otherTrigger => {
          if (otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherTrigger.nextElementSibling) otherTrigger.nextElementSibling.classList.add('hidden');
            const otherIcon = otherTrigger.querySelector('.fa-chevron-down');
            if (otherIcon) otherIcon.classList.remove('rotate-180');
          }
        });

        // Toggle clicked
        if (isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          content.classList.add('hidden');
          if (icon) icon.classList.remove('rotate-180');
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
  }

  // 4. Phone input formatting mask helper (+998 ...)
  const phoneInput = document.getElementById('phoneNumber');
  if (phoneInput) {
    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value.startsWith('+998')) {
        phoneInput.value = '+998 ';
      }
    });

    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^\d+]/g, '');
      if (!val.startsWith('+998')) {
        val = '+998' + val.replace(/^\+?998?/, '');
      }

      // Format +998 XX XXX XX XX
      const digits = val.slice(4);
      let formatted = '+998';
      if (digits.length > 0) formatted += ' ' + digits.substring(0, 2);
      if (digits.length > 2) formatted += ' ' + digits.substring(2, 5);
      if (digits.length > 5) formatted += ' ' + digits.substring(5, 7);
      if (digits.length > 7) formatted += ' ' + digits.substring(7, 9);

      phoneInput.value = formatted;
    });
  }

});
