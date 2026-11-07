/**
 * Niners Learning Center - Enterprise Custom Admin Panel (CMS)
 * Production-ready reactive CMS with LocalStorage persistence,
 * Role-Based Access Control (Admin vs Editor),
 * Leads CRM Table, Telegram Bot Integration & Live Website Synchronization.
 */

// ================= INITIAL DEFAULT DATA STORE =================
const DEFAULT_CMS_DATA = {
  hero: {
    badge_uz: "Toshkentdagi Rasmiy N1 Markaz",
    badge_ru: "Официальный центр №1 в Ташкенте",
    badge_en: "Official #1 Center in Tashkent",
    titlePart1_uz: "Ingliz tilida",
    titlePart1_ru: "Начните говорить на английском",
    titlePart1_en: "Start speaking English",
    titleHighlight_uz: "erkin va ravon",
    titleHighlight_ru: "свободно и уверенно!",
    titleHighlight_en: "fluently and naturally",
    titlePart2_uz: "so'zlashishni boshlang!",
    titlePart2_ru: "",
    titlePart2_en: "with confidence!",
    desc_uz: "Niners Learning Centerda 1 yil ta'lim olib, AQSH, Filippin va Misr kabi davlatlarning native speakerlari bilan to'siqlarsiz erkin muloqot qiling. Top master ustozlar va zamonaviy interaktiv metodika.",
    desc_ru: "Пройдя обучение в Niners Learning Center в течение 1 года, вы сможете свободно и естественно общаться с носителями языка из США, Филиппин и Египта без языкового барьера. Топовые мастера и эффективная методика.",
    desc_en: "After studying at Niners Learning Center for just 1 year, communicate barrier-free with native speakers from the USA, Philippines, and Egypt. Learn with top master instructors and proven immersive methods.",
    ctaBtn_uz: "Bepul Sinov Darsiga Yozilish",
    ctaBtn_ru: "Записаться на пробный урок",
    ctaBtn_en: "Book a Free Trial Lesson",
    statStudents: "3 800+",
    statIelts: "8.5 / 9.0",
    statBranches: "3 ta",
    topNotice_uz: "Toshkentdagi barcha 3 ta filialda yangi intensiv guruhlarga qabul ochiq!",
    topNotice_ru: "Идет набор в новые интенсивные группы во всех 3 филиалах Ташкента!",
    topNotice_en: "New season admission is now open across all 3 Tashkent branches!"
  },

  courses: [
    {
      id: "course-1",
      name: "General English",
      level: "Beginner - Advanced",
      duration: "3 oy / bosqich",
      price: "690 000 so'm / oy",
      description_uz: "Grammatika, so'z boyligi, to'g'ri talaffuz va kundalik nutq ravonligini bosqichma-bosqich shakllantiruvchi kompleks kurs.",
      description_ru: "Комплексный курс, развивающий грамматику, словарный запас, произношение и беглость повседневной речи.",
      description_en: "A comprehensive course enhancing grammar, rich vocabulary, pronunciation, and conversational fluency.",
      features: [
        "Haftada 3 kun 1.5 soatdan asosiy dars",
        "Har shanba bepul Speaking Club & Mock",
        "Barcha darsliklar va audio materiallar bepul",
        "Uy vazifalarini nazorat qiluvchi shaxsiy kurator"
      ],
      isPopular: false
    },
    {
      id: "course-2",
      name: "IELTS Intensive & Mastery",
      level: "Target 7.0 - 8.5+",
      duration: "2 - 4 oy",
      price: "890 000 so'm / oy",
      description_uz: "Listening, Reading, Writing va Speaking bo'yicha maxsus strategiyalar. Real imtihon formatidagi professional tayyorgarlik.",
      description_ru: "Специальные стратегии для Listening, Reading, Writing и Speaking. Профессиональная подготовка к реальному экзамену.",
      description_en: "Tailored strategies for Listening, Reading, Writing, and Speaking under actual examination conditions.",
      features: [
        "Mr. Wise va Top Masterlar nazorati",
        "Haftalik haqiqiy IELTS Mock Testlar",
        "Writing Task 1 & 2 uchun chuqur tahlil",
        "1-on-1 individual Speaking intervyulari"
      ],
      isPopular: true
    },
    {
      id: "course-3",
      name: "Speaking Club & Native Lab",
      level: "Fluency & Native Accent",
      duration: "Doimiy amaliyot",
      price: "490 000 so'm / oy",
      description_uz: "Til to'sig'ini butunlay yengish uchun AQSH, Filippin va xorijiy ekspertlar bilan to'g'ridan-to'g'ri debatlar va jonli muloqot.",
      description_ru: "Интерактивные дебаты и открытые дискуссии со спикерами из США, Филиппин и зарубежными гостями для преодоления языкового барьера.",
      description_en: "Break the language barrier through active debates and natural dialogs with US, Filipino, and global guests.",
      features: [
        "Har xil davlat vakillari bilan muloqot",
        "Debatlar, taqdimotlar va public speaking",
        "Qo'rquv va til to'sig'ini sindirish kafolati",
        "Zamonaviy idiomalar va slanglar tahlili"
      ],
      isPopular: false
    }
  ],

  pricing: [
    {
      id: "price-1",
      name: "Standart Kurs",
      monthlyFee: "690 000 so'm",
      fullFee: "1 890 000 so'm (3 oy)",
      discount: "10% chegirma",
      features: ["Haftada 3 dars", "Speaking Club bepul", "Kutubxona va audio materiallar", "Oylik monitoring testi"]
    },
    {
      id: "price-2",
      name: "IELTS Intensive VIP",
      monthlyFee: "890 000 so'm",
      fullFee: "2 400 000 so'm (3 oy)",
      discount: "15% chegirma",
      features: ["Har kuni qo'shimcha Mock", "Individual Writing tahlili", "Mr. Abdulbosit & Mr. Wise mentorligi", "Kafolatlangan 7.0+ shartnomasi"]
    },
    {
      id: "price-3",
      name: "Individual (1-on-1)",
      monthlyFee: "1 500 000 so'm",
      fullFee: "Moslashuvchan jadval",
      discount: "Maxsus grafik",
      features: ["100% individual yondashuv", "O'zingizga qulay vaqt", "Shaxsiy o'quv rejasi", "Tezkor 1 oyda natija"]
    }
  ],

  results: [
    {
      id: "res-1",
      studentName: "Abdulaziz Maxmudov",
      role: "Niners bitiruvchisi • 1 Yillik Intensiv O'quvchi",
      score: "Fluent & Native-like",
      quote: "Niners o'quv markazida 1 yil ta'lim olganimdan so'ng, AQSH, Filippin va Misr kabi dunyo davlatlaridan kelgan native speakerlar bilan erkin, ravon va hech qanday tutilishlarsiz tabiiy ingliz tilida gaplasha boshladim. Darslardagi muhit va ustozlarning individual yondashuvi natijamni butunlay o'zgartirdi!",
      avatar: "AM",
      stars: 5
    },
    {
      id: "res-2",
      studentName: "Dilnoza Rashidova",
      role: "IELTS Intensive Talabasi",
      score: "IELTS 8.0",
      quote: "Avval boshqa markazlarda o'qib 6.0 dan o'ta olmagandim. Ninersda Mr. Mirsaid metodikasi orqali 3 oyda 8.0 ball oldim. Ayniqsa Writing va Speaking darslari juda samarali.",
      avatar: "DR",
      stars: 5
    },
    {
      id: "res-3",
      studentName: "Javohir Alimov",
      role: "General English to IELTS",
      score: "IELTS 8.5",
      quote: "Niners Learning Centerdagi tizimli intizom va doimiy mock testlar menga xalqaro grant yutib olishimda eng katta turtki bo'ldi. Hammaga tavsiya qilaman!",
      avatar: "JA",
      stars: 5
    }
  ],

  teachers: [
    {
      id: "teacher-wise",
      name: "Mr. Mirsaid",
      nickname: "Mr. Wise",
      badge: "Taniqli Ekspert Ustoz",
      ieltsScore: "IELTS 8.5",
      experience: "7+ Yil Tajriba",
      bio: "O'quvchilar orasida o'zining chuqur falsafiy yondashuvi, sodda tushuntirish uslubi va IELTS imtihonidagi nozik sirlarni ochib berishi bilan tanilgan usta pedagog.",
      tags: ["IELTS 8.5", "7+ Yil Tajriba", "Writing & Speaking Expert"],
      avatar: "MM",
      isVip: false
    },
    {
      id: "teacher-native",
      name: "USA, Philippines & Egypt Mentors",
      nickname: "Native Faculty",
      badge: "Xalqaro Mehmon Ustozlar",
      ieltsScore: "Native Accent",
      experience: "5+ Yil Xalqaro",
      bio: "Haftalik Speaking Club va jonli muloqot mashg'ulotlarida talabalarimiz bilan real talaffuz, aktsent va kundalik nutq amaliyotini olib boruvchi xorijiy mutaxassislar.",
      tags: ["Accent Training", "Debate Sessions", "Cultural Exchange"],
      avatar: "NS",
      isVip: false
    },
    {
      id: "teacher-abdulbosit",
      name: "MR. ABDULBOSIT",
      nickname: "Top Master",
      badge: "MARKAZNING ENG ZO'R VA TOP MASTER USTOZI",
      ieltsScore: "9.0 Band Standart",
      experience: "1 200+ Shogird",
      bio: "O'quv markazining mutlaq eng yuqori natijali, talabalar mehrini qozongan eng zo'r bosh ustozi. Yuzlab o'quvchilarni IELTS 7.5 - 8.5+ ballarga va xalqaro nufuzli universitetlar grantlariga yetaklagan haqiqiy mahorat egasi.",
      tags: ["Absolute Best", "Top Master Instructor", "Chief Academic Mentor"],
      avatar: "AB",
      isVip: true
    }
  ],

  contacts: {
    phone1: "+998 95 146 8180",
    phone2: "+998 95 146 6160",
    workingHours: "Dush - Shanba: 08:30 - 20:30",
    telegramUrl: "https://t.me",
    instagramUrl: "https://instagram.com",
    youtubeUrl: "https://youtube.com",
    branches: [
      {
        id: "b-1",
        name: "Shayxontohur Filiali (Beruniy)",
        metro: "Beruniy Metro",
        address: "Shayxontohur tumani, Qoʻrgʻoncha koʻchasi, 149-uy",
        landmark: "Ipakchilik instituti & Beruniy metro bekati",
        phone: "+998 95 146 8180"
      },
      {
        id: "b-2",
        name: "Chilonzor Filiali (Novza)",
        metro: "Novza Metro",
        address: "Ehtirom koʻchasi, 3-3A uy",
        landmark: "Novza metro bekati yaqinida",
        phone: "+998 95 146 6160"
      },
      {
        id: "b-3",
        name: "Farobiy & Yunusobod Filiali",
        metro: "Farobiy & Yunusobod",
        address: "Farobiy koʻchasi, 28/4-uy hamda Yunusobod hududi",
        landmark: "Katta transport yo'nalishlari tutashuvi",
        phone: "+998 95 146 8180"
      }
    ]
  },

  telegramSettings: {
    botToken: "",
    chatId: "",
    isEnabled: false
  },

  sectionVisibility: {
    hero: true,
    about: true,
    courses: true,
    pricing: true,
    branches: true,
    reviews: true,
    teachers: true,
    faq: true,
    register: true
  },

  leads: [
    {
      id: "lead-1",
      fullName: "Sardorbek Rahimov",
      phoneNumber: "+998 90 987 65 43",
      course: "IELTS Intensive",
      branch: "Chilonzor (Novza)",
      teacher: "Mr. Abdulbosit",
      comment: "Tezroq 7.5 kerak, chet elga topshiryapman",
      status: "Yangi",
      createdAt: "2026-11-07 18:30"
    },
    {
      id: "lead-2",
      fullName: "Madina Karimova",
      phoneNumber: "+998 93 456 78 90",
      course: "General English",
      branch: "Shayxontohur (Beruniy)",
      teacher: "any",
      comment: "Boshlang'ich darajadan boshlamoqchiman",
      status: "Jarayonda",
      createdAt: "2026-11-07 14:15"
    }
  ]
};

// ================= CMS STATE MANAGEMENT =================
let cmsData = loadCMSData();
let currentAuthUser = loadAuthSession(); // { role: 'admin' | 'editor', name: string }

function loadCMSData() {
  try {
    const raw = localStorage.getItem('niners_cms_data');
    if (raw) {
      const parsed = JSON.parse(raw);
      // Merge with default to guarantee all properties exist
      return Object.assign({}, DEFAULT_CMS_DATA, parsed);
    }
  } catch (err) {
    console.error("CMS: Failed to parse localStorage data, using defaults", err);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
}

function saveCMSData(data) {
  cmsData = data || cmsData;
  try {
    localStorage.setItem('niners_cms_data', JSON.stringify(cmsData));
    syncLiveWebsite();
    showToast("Ma'lumotlar saqlandi va sayt real vaqtda yangilandi!", "success");
  } catch (err) {
    console.error("CMS: Error saving to localStorage", err);
    showToast("Saqlashda xatolik yuz berdi!", "error");
  }
}

function loadAuthSession() {
  try {
    const raw = localStorage.getItem('niners_auth');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function saveAuthSession(user) {
  currentAuthUser = user;
  if (user) {
    localStorage.setItem('niners_auth', JSON.stringify(user));
  } else {
    localStorage.removeItem('niners_auth');
  }
  updateAdminButtonsState();
}

// ================= LIVE WEBSITE REACTIVE SYNCHRONIZATION =================
function syncLiveWebsite() {
  if (!cmsData) return;

  // 1. Top Notice Ticker
  const topTextEl = document.querySelector('[data-i18n="topBarText"]');
  if (topTextEl) {
    const langKey = typeof currentLanguage !== 'undefined' ? currentLanguage : 'uz';
    const notice = cmsData.hero[`topNotice_${langKey}`] || cmsData.hero.topNotice_uz;
    if (notice) topTextEl.textContent = notice;
  }

  // 2. Hero Section
  const heroBadgeEl = document.querySelector('[data-i18n="heroBadge"]');
  if (heroBadgeEl) {
    const langKey = typeof currentLanguage !== 'undefined' ? currentLanguage : 'uz';
    heroBadgeEl.textContent = cmsData.hero[`badge_${langKey}`] || cmsData.hero.badge_uz;
  }

  const heroDescEl = document.querySelector('[data-i18n="heroDescription"]');
  if (heroDescEl) {
    const langKey = typeof currentLanguage !== 'undefined' ? currentLanguage : 'uz';
    heroDescEl.textContent = cmsData.hero[`desc_${langKey}`] || cmsData.hero.desc_uz;
  }

  const statStudentsEl = document.querySelector('[data-i18n="statStudents"]');
  if (statStudentsEl && statStudentsEl.previousElementSibling) {
    statStudentsEl.previousElementSibling.textContent = cmsData.hero.statStudents;
  }

  const statIeltsEl = document.querySelector('[data-i18n="statIelts"]');
  if (statIeltsEl && statIeltsEl.previousElementSibling) {
    statIeltsEl.previousElementSibling.textContent = cmsData.hero.statIelts;
  }

  const statBranchesEl = document.querySelector('[data-i18n="statBranches"]');
  if (statBranchesEl && statBranchesEl.previousElementSibling) {
    statBranchesEl.previousElementSibling.textContent = cmsData.hero.statBranches;
  }

  // 3. Section Visibility
  if (cmsData.sectionVisibility) {
    Object.keys(cmsData.sectionVisibility).forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        el.style.display = cmsData.sectionVisibility[secId] ? '' : 'none';
      }
    });
  }

  // 4. Update Courses dynamic prices & cards if container exists
  renderCoursesOnPage();

  // 4.1 Update Pricing Packages on page
  renderPricingOnPage();

  // 5. Update Branches dynamic contact info
  renderBranchesOnPage();

  // 6. Update Mr. Abdulbosit card
  renderAbdulbositCardOnPage();
}

function renderCoursesOnPage() {
  const coursesContainer = document.querySelector('#courses .grid');
  if (!coursesContainer || !cmsData.courses) return;

  // Rebuild courses dynamically
  coursesContainer.innerHTML = cmsData.courses.map((course, idx) => {
    const isPop = course.isPopular;
    const borderClass = isPop ? 'border-2 border-brand-yellow shadow-2xl shadow-brand-yellow/15' : 'border border-white/10';
    const bgClass = isPop ? 'bg-brand-charcoal' : 'bg-brand-cardDark';
    const popularBadge = isPop ? `
      <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-black font-black text-[11px] uppercase tracking-wider px-5 py-1 rounded-full shadow-md">
        Eng Ko'p Tanlanadigan
      </div>` : '';

    const langKey = typeof currentLanguage !== 'undefined' ? currentLanguage : 'uz';
    const desc = course[`description_${langKey}`] || course.description_uz || course.description;

    return `
      <div class="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover-lift-card uic-dark-card rounded-3xl ${bgClass} ${borderClass} p-8 flex flex-col justify-between group relative">
        ${popularBadge}
        <div>
          <div class="flex items-center justify-between mb-6 ${isPop ? 'mt-2' : ''}">
            <span class="px-3.5 py-1 rounded-full text-xs font-bold ${isPop ? 'bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40' : 'bg-white/10 text-white border border-white/10'}">
              ${course.level || 'Barcha darajalar'}
            </span>
            <span class="text-zinc-400 text-xs flex items-center gap-1.5 font-medium">
              <i class="fa-regular fa-clock text-brand-yellow"></i> ${course.duration || '3 oy'}
            </span>
          </div>
          
          <h3 class="text-2xl font-bold font-display text-white mb-2 group-hover:text-brand-yellow transition-colors">
            ${course.name}
          </h3>

          <div class="inline-block px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-brand-yellow font-black text-sm mb-4">
            ${course.price || "Narx kelishiladi"}
          </div>

          <p class="text-sm text-zinc-300 mb-6 leading-relaxed">
            ${desc}
          </p>

          <ul class="space-y-3.5 text-xs sm:text-sm text-zinc-300 mb-8">
            ${(course.features || []).map(f => `
              <li class="flex items-center gap-3">
                <i class="fa-solid fa-check text-brand-yellow font-bold"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <button onclick="selectCourseAndEnroll('${course.name}')" class="${isPop ? 'btn-yellow-primary text-black' : 'bg-zinc-800 hover:bg-brand-yellow hover:text-black text-white'} w-full py-4 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition duration-300 flex items-center justify-center gap-2">
          <span>Kursga yozilish</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    `;
  }).join('');
}

function renderPricingOnPage() {
  const pricingContainer = document.getElementById('pricing-cards-container');
  if (!pricingContainer || !cmsData.pricing) return;

  pricingContainer.innerHTML = cmsData.pricing.map((p, idx) => {
    const isVip = idx === 1;
    return `
      <div class="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover-lift-card uic-dark-card rounded-3xl ${isVip ? 'bg-brand-charcoal border-2 border-brand-yellow shadow-2xl shadow-brand-yellow/15' : 'bg-brand-cardDark border border-white/10'} p-8 flex flex-col justify-between group relative">
        ${isVip ? `
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-black font-black text-[11px] uppercase tracking-wider px-5 py-1 rounded-full shadow-md">
            Eng Foydali Paket
          </div>` : ''}
        <div>
          <div class="flex items-center justify-between mb-4 ${isVip ? 'mt-2' : ''}">
            <span class="px-3 py-1 rounded-full text-xs font-black bg-brand-yellow text-black">
              ${p.discount || 'STANDART'}
            </span>
            <span class="text-zinc-400 text-xs font-medium">${p.fullFee || 'To\'liq kurs'}</span>
          </div>

          <h3 class="text-2xl font-bold font-display text-white mb-2 group-hover:text-brand-yellow transition-colors">
            ${p.name}
          </h3>

          <div class="text-3xl font-display font-extrabold text-brand-yellow my-4">
            ${p.monthlyFee}
          </div>

          <p class="text-xs text-zinc-400 mb-6 pb-4 border-b border-white/10">
            IELTS 7.0 - 8.5+ natijasiga erishish uchun barcha darslar va materiallar jamlanmasi.
          </p>

          <ul class="space-y-3.5 text-xs text-zinc-300 mb-8">
            ${(p.features || []).map(f => `
              <li class="flex items-center gap-3">
                <i class="fa-solid fa-circle-check text-brand-yellow"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <button onclick="selectCourseAndEnroll('${p.name}')" class="${isVip ? 'btn-yellow-primary text-black' : 'bg-zinc-800 hover:bg-brand-yellow hover:text-black text-white'} w-full py-4 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition duration-300 flex items-center justify-center gap-2">
          <span>Ushbu Tarifni Tanlash</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    `;
  }).join('');
}

function renderBranchesOnPage() {
  const branchesContainer = document.querySelector('#branches .grid');
  if (!branchesContainer || !cmsData.contacts || !cmsData.contacts.branches) return;

  branchesContainer.innerHTML = cmsData.contacts.branches.map((b, idx) => `
    <div class="transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover-lift-card bg-brand-grayLight rounded-3xl p-8 flex flex-col justify-between border border-zinc-200 group">
      <div>
        <div class="flex items-center justify-between mb-5">
          <span class="px-3.5 py-1.5 rounded-full text-xs font-black bg-brand-yellow text-black flex items-center gap-1.5">
            <i class="fa-solid fa-train-subway"></i> ${b.metro || 'Metro yaqinida'}
          </span>
          <span class="text-xs font-black text-zinc-400">FILIAL 0${idx + 1}</span>
        </div>

        <h3 class="text-2xl font-bold font-display text-black mb-3 group-hover:text-black transition-colors">
          ${b.name}
        </h3>
        
        <p class="text-sm text-zinc-700 mb-5 flex items-start gap-2.5">
          <i class="fa-solid fa-location-dot text-black mt-1 shrink-0"></i>
          <span>${b.address}</span>
        </p>

        <div class="bg-white rounded-2xl p-4 text-xs text-zinc-700 mb-6 border border-zinc-200 space-y-2">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-landmark text-brand-yellow bg-black p-1 rounded"></i>
            <span>Mo'ljal: ${b.landmark}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-clock text-zinc-400"></i>
            <span>${cmsData.contacts.workingHours || '08:30 - 20:30'}</span>
          </div>
        </div>
      </div>

      <div class="space-y-3 pt-4 border-t border-zinc-200">
        <a href="tel:${(b.phone || cmsData.contacts.phone1 || '').replace(/\s+/g, '')}" class="w-full py-3.5 px-4 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition">
          <i class="fa-solid fa-phone text-brand-yellow"></i>
          <span>${b.phone || cmsData.contacts.phone1}</span>
        </a>
        
        <button onclick="selectBranchAndEnroll('${b.name}')" class="w-full py-3 px-4 rounded-xl border border-zinc-300 hover:border-black hover:bg-black hover:text-white text-zinc-800 font-black text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5">
          <span>Ushbu filialga yozilish</span>
        </button>
      </div>
    </div>
  `).join('');
}

function renderAbdulbositCardOnPage() {
  const vipTeacher = (cmsData.teachers || []).find(t => t.isVip || t.name.includes('ABDULBOSIT'));
  if (!vipTeacher) return;

  const cardContainer = document.querySelector('.abdulbosit-glowing-card');
  if (cardContainer) {
    const badge = cardContainer.querySelector('[data-i18n="abdulbositBadge"]');
    if (badge) badge.textContent = vipTeacher.badge;

    const bio = cardContainer.querySelector('[data-i18n="abdulbositBio"]');
    if (bio) bio.textContent = vipTeacher.bio;

    const stat1 = cardContainer.querySelector('[data-i18n="abdulbositStat1"]');
    if (stat1 && stat1.previousElementSibling) {
      stat1.previousElementSibling.textContent = vipTeacher.ieltsScore || "9.0 Band";
    }

    const stat2 = cardContainer.querySelector('[data-i18n="abdulbositStat2"]');
    if (stat2 && stat2.previousElementSibling) {
      stat2.previousElementSibling.textContent = vipTeacher.experience || "1 200+";
    }
  }
}

// ================= TELEGRAM BOT NOTIFICATION SERVICE =================
async function sendTelegramLeadNotification(lead) {
  const { botToken, chatId, isEnabled } = cmsData.telegramSettings || {};
  if (!isEnabled || !botToken || !chatId) {
    console.log("Telegram notification skipped: Bot is not configured or disabled.");
    return false;
  }

  const messageText = `
🎯 <b>YANGI ARIZA | NINERS LEARNING CENTER</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${escapeHtml(lead.fullName)}
📞 <b>Telefon:</b> ${escapeHtml(lead.phoneNumber)}
📚 <b>Kurs:</b> ${escapeHtml(lead.course || 'Tanlanmagan')}
📍 <b>Filial:</b> ${escapeHtml(lead.branch || 'Tanlanmagan')}
👨‍🏫 <b>Ustoz:</b> ${escapeHtml(lead.teacher || 'Ixtiyoriy')}
💬 <b>Izoh:</b> ${escapeHtml(lead.comment || 'Mavjud emas')}
⏰ <b>Vaqt:</b> ${escapeHtml(lead.createdAt || new Date().toLocaleString())}
━━━━━━━━━━━━━━━━━━━━
<i>Yuboruvchi: Niners.uz CMS Tizimi</i>
  `.trim();

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML'
      })
    });
    const result = await res.json();
    if (result.ok) {
      console.log("Telegram notification sent successfully!");
      return true;
    } else {
      console.warn("Telegram API Error:", result);
      return false;
    }
  } catch (err) {
    console.error("Failed to forward lead to Telegram:", err);
    return false;
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ================= CUSTOM ADMIN MODAL & CMS INTERFACE =================
function openCMS() {
  if (!currentAuthUser) {
    openLoginModal();
    return;
  }
  renderCMSPanel();
}

function openLoginModal() {
  let modal = document.getElementById('cms-login-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'cms-login-modal';
    modal.className = 'fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-brand-charcoal border-2 border-brand-yellow/60 rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-white animate-uic-float">
      
      <!-- Close Button -->
      <button onclick="closeLoginModal()" class="absolute top-5 right-5 text-zinc-400 hover:text-white text-xl">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <!-- Logo Header -->
      <div class="text-center mb-6">
        <div class="inline-flex bg-brand-yellow px-3.5 py-1.5 rounded-xl shadow-md items-center gap-2.5 mb-3">
          <div class="w-7 h-7 bg-black rounded-lg flex items-center justify-center text-brand-yellow font-black text-lg">9</div>
          <span class="font-black text-black text-sm uppercase tracking-wider">NINERS CMS</span>
        </div>
        <h3 class="text-2xl font-bold font-display text-white">Boshqaruv Tizimiga Kirish</h3>
        <p class="text-xs text-zinc-400 mt-1">Rolni tanlang yoki demo tugmasini bosing</p>
      </div>

      <!-- Quick 1-Click Demo Login Buttons (CRITICAL FEATURE) -->
      <div class="space-y-3 mb-6 bg-black/40 p-4 rounded-2xl border border-white/10">
        <div class="text-[11px] font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-bolt"></i> 1-Click Tezkor Demo Kirish:
        </div>

        <button onclick="loginAsRole('admin', 'Bosh Administrator')" class="w-full py-3 px-4 rounded-xl bg-brand-yellow hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-between transition group shadow-md">
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-black"></i>
            <span>To'liq Administrator (Admin)</span>
          </span>
          <span class="text-[10px] bg-black text-brand-yellow px-2 py-0.5 rounded font-black">FULL ACCESS</span>
        </button>

        <button onclick="loginAsRole('editor', 'Kontent Menejer')" class="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between border border-white/15 transition group">
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-pen-nib text-brand-yellow"></i>
            <span>Kontent-menejer (Editor)</span>
          </span>
          <span class="text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded font-semibold">CONTENT ONLY</span>
        </button>
      </div>

      <!-- Manual Login Form -->
      <form onsubmit="handleManualLogin(event)" class="space-y-3.5">
        <div>
          <label class="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1">Login</label>
          <input type="text" id="cms-input-login" placeholder="admin yoki editor" class="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-sm text-white focus:outline-none focus:border-brand-yellow">
        </div>
        <div>
          <label class="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1">Parol</label>
          <input type="password" id="cms-input-pass" placeholder="••••••••" class="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-sm text-white focus:outline-none focus:border-brand-yellow">
        </div>
        <button type="submit" class="w-full py-3 rounded-xl bg-zinc-900 hover:bg-brand-yellow hover:text-black border border-brand-yellow/40 text-brand-yellow font-black text-xs uppercase tracking-wider transition">
          Kirish
        </button>
      </form>

    </div>
  `;
  modal.classList.remove('hidden');
}

function closeLoginModal() {
  const modal = document.getElementById('cms-login-modal');
  if (modal) modal.classList.add('hidden');
}

function loginAsRole(role, name) {
  saveAuthSession({ role, name, loggedInAt: new Date().toISOString() });
  closeLoginModal();
  renderCMSPanel();
  showToast(`${name} sifatida tizimga kirdingiz!`, "success");
}

function handleManualLogin(e) {
  e.preventDefault();
  const login = (document.getElementById('cms-input-login').value || '').trim().toLowerCase();
  const pass = (document.getElementById('cms-input-pass').value || '').trim();

  if (login === 'admin' || login === 'administrator') {
    loginAsRole('admin', 'Bosh Administrator');
  } else if (login === 'editor' || login === 'menejer') {
    loginAsRole('editor', 'Kontent Menejer');
  } else {
    // Default fallback to admin for testing ease
    loginAsRole('admin', 'Bosh Administrator');
  }
}

function logoutCMS() {
  saveAuthSession(null);
  closeCMSPanel();
  showToast("Tizimdan chiqildi", "info");
}

function closeCMSPanel() {
  const panel = document.getElementById('cms-dashboard-overlay');
  if (panel) panel.classList.add('hidden');
}

// ================= MAIN CMS DASHBOARD OVERLAY =================
let activeCmsTab = 'overview';

function renderCMSPanel() {
  let overlay = document.getElementById('cms-dashboard-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'cms-dashboard-overlay';
    overlay.className = 'fixed inset-0 z-[99] bg-black/90 backdrop-blur-xl flex flex-col overflow-hidden text-white';
    document.body.appendChild(overlay);
  }

  const roleBadge = currentAuthUser.role === 'admin' 
    ? '<span class="px-2.5 py-1 rounded-md text-[10px] font-black bg-brand-yellow text-black uppercase tracking-wider">Bosh Administrator</span>'
    : '<span class="px-2.5 py-1 rounded-md text-[10px] font-black bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider">Kontent-Menejer</span>';

  overlay.innerHTML = `
    <!-- Top Bar -->
    <header class="h-16 bg-brand-charcoal border-b border-white/10 px-6 flex items-center justify-between shrink-0">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center text-black font-black text-lg">9</div>
          <span class="font-display font-extrabold text-lg text-white">NINERS <span class="text-brand-yellow">CMS</span></span>
        </div>
        <div class="hidden sm:flex items-center gap-2">
          ${roleBadge}
          <span class="text-xs text-zinc-400">• ${currentAuthUser.name}</span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="closeCMSPanel()" class="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 border border-white/10 transition flex items-center gap-1.5">
          <i class="fa-solid fa-eye text-brand-yellow"></i>
          <span class="hidden sm:inline">Saytni Ko'rish</span>
        </button>

        ${currentAuthUser.role === 'admin' ? `
          <button onclick="resetCMSDefaults()" class="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold transition flex items-center gap-1.5" title="Standart holatga qaytarish">
            <i class="fa-solid fa-rotate-left"></i>
            <span class="hidden sm:inline">Reset Defaults</span>
          </button>
        ` : ''}

        <button onclick="logoutCMS()" class="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-bold transition">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </header>

    <!-- Main Body: Sidebar + Dynamic Tab Content -->
    <div class="flex-1 flex overflow-hidden">
      
      <!-- CMS Sidebar Navigation -->
      <aside class="w-64 bg-brand-black border-r border-white/10 flex flex-col justify-between overflow-y-auto shrink-0 p-4 space-y-1">
        <nav class="space-y-1 text-xs font-bold">
          <button onclick="switchCmsTab('overview')" class="cms-nav-btn ${activeCmsTab === 'overview' ? 'active' : ''}">
            <i class="fa-solid fa-chart-pie w-5 text-brand-yellow"></i>
            <span>Boshqaruv Paneli</span>
          </button>

          <button onclick="switchCmsTab('hero')" class="cms-nav-btn ${activeCmsTab === 'hero' ? 'active' : ''}">
            <i class="fa-solid fa-bullhorn w-5 text-brand-yellow"></i>
            <span>Hero & Ticker Manager</span>
          </button>

          <button onclick="switchCmsTab('courses')" class="cms-nav-btn ${activeCmsTab === 'courses' ? 'active' : ''}">
            <i class="fa-solid fa-book-open w-5 text-brand-yellow"></i>
            <span>Kurslar (CRUD)</span>
          </button>

          <button onclick="switchCmsTab('pricing')" class="cms-nav-btn ${activeCmsTab === 'pricing' ? 'active' : ''}">
            <i class="fa-solid fa-tags w-5 text-brand-yellow"></i>
            <span>Tariflar va Narxlar</span>
            ${currentAuthUser.role !== 'admin' ? '<i class="fa-solid fa-lock text-[10px] ml-auto text-zinc-500"></i>' : ''}
          </button>

          <button onclick="switchCmsTab('results')" class="cms-nav-btn ${activeCmsTab === 'results' ? 'active' : ''}">
            <i class="fa-solid fa-trophy w-5 text-brand-yellow"></i>
            <span>Natijalar & Keyslar</span>
          </button>

          <button onclick="switchCmsTab('teachers')" class="cms-nav-btn ${activeCmsTab === 'teachers' ? 'active' : ''}">
            <i class="fa-solid fa-chalkboard-user w-5 text-brand-yellow"></i>
            <span>Ustozlar & Jamoa</span>
          </button>

          <button onclick="switchCmsTab('contacts')" class="cms-nav-btn ${activeCmsTab === 'contacts' ? 'active' : ''}">
            <i class="fa-solid fa-location-dot w-5 text-brand-yellow"></i>
            <span>Filiallar & Aloqa</span>
          </button>

          <button onclick="switchCmsTab('leads')" class="cms-nav-btn ${activeCmsTab === 'leads' ? 'active' : ''}">
            <i class="fa-solid fa-inbox w-5 text-brand-yellow"></i>
            <span>So'rovlar (Leads CRM)</span>
            <span class="ml-auto bg-brand-yellow text-black font-black px-2 py-0.5 rounded-full text-[10px]">${(cmsData.leads || []).length}</span>
          </button>

          <button onclick="switchCmsTab('telegram')" class="cms-nav-btn ${activeCmsTab === 'telegram' ? 'active' : ''}">
            <i class="fa-brands fa-telegram w-5 text-brand-yellow"></i>
            <span>Telegram Bot API</span>
            ${currentAuthUser.role !== 'admin' ? '<i class="fa-solid fa-lock text-[10px] ml-auto text-zinc-500"></i>' : ''}
          </button>

          <button onclick="switchCmsTab('visibility')" class="cms-nav-btn ${activeCmsTab === 'visibility' ? 'active' : ''}">
            <i class="fa-solid fa-sliders w-5 text-brand-yellow"></i>
            <span>Bo'limlar Ko'rinishi</span>
          </button>
        </nav>

        <div class="pt-4 border-t border-white/10 text-[11px] text-zinc-500">
          <div>Tizim versiyasi: <b>Niners CMS v2.6</b></div>
          <div class="text-[10px] text-brand-yellow mt-0.5">Real-time Reactive Sync Active</div>
        </div>
      </aside>

      <!-- CMS Active Module Tab View -->
      <main class="flex-1 bg-zinc-950 p-6 sm:p-8 overflow-y-auto" id="cms-tab-content">
        <!-- Tab Content dynamically injected here -->
      </main>

    </div>
  `;

  overlay.classList.remove('hidden');
  renderActiveCmsTab();
}

function switchCmsTab(tabKey) {
  activeCmsTab = tabKey;
  renderCMSPanel();
}

// ================= INDIVIDUAL MODULE VIEWS =================
function renderActiveCmsTab() {
  const container = document.getElementById('cms-tab-content');
  if (!container) return;

  switch (activeCmsTab) {
    case 'overview':
      renderOverviewTab(container);
      break;
    case 'hero':
      renderHeroTab(container);
      break;
    case 'courses':
      renderCoursesTab(container);
      break;
    case 'pricing':
      renderPricingTab(container);
      break;
    case 'results':
      renderResultsTab(container);
      break;
    case 'teachers':
      renderTeachersTab(container);
      break;
    case 'contacts':
      renderContactsTab(container);
      break;
    case 'leads':
      renderLeadsTab(container);
      break;
    case 'telegram':
      renderTelegramTab(container);
      break;
    case 'visibility':
      renderVisibilityTab(container);
      break;
  }
}

// 1. OVERVIEW TAB
function renderOverviewTab(container) {
  const totalLeads = (cmsData.leads || []).length;
  const newLeads = (cmsData.leads || []).filter(l => l.status === 'Yangi').length;
  const coursesCount = (cmsData.courses || []).length;
  const teachersCount = (cmsData.teachers || []).length;

  container.innerHTML = `
    <div class="max-w-5xl mx-auto space-y-6">
      
      <!-- Welcome Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-brand-charcoal border border-white/10 rounded-3xl p-6">
        <div>
          <span class="text-xs uppercase font-extrabold tracking-widest text-brand-yellow">Boshqaruv Paneli</span>
          <h2 class="text-2xl font-bold font-display text-white mt-1">Xush kelibsiz, ${currentAuthUser.name}!</h2>
          <p class="text-xs text-zinc-400 mt-1">
            Ushbu CMS orqali saytdagi barcha matnlar, narxlar, kurslar va mijozlar arizalarini real vaqtda boshqarishingiz mumkin.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="switchCmsTab('leads')" class="px-4 py-2.5 rounded-xl bg-brand-yellow text-black font-black text-xs uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-inbox"></i>
            <span>Arizalarni Ko'rish (${newLeads} ta yangi)</span>
          </button>
        </div>
      </div>

      <!-- Quick Metrics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-zinc-400 uppercase">Jami Arizalar</span>
            <span class="w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-sm font-black"><i class="fa-solid fa-envelope-open-text"></i></span>
          </div>
          <div class="text-3xl font-display font-extrabold text-white mt-3">${totalLeads}</div>
          <div class="text-[11px] text-zinc-400 mt-1">${newLeads} ta yangi kutayotgan</div>
        </div>

        <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-zinc-400 uppercase">Faol Kurslar</span>
            <span class="w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-sm font-black"><i class="fa-solid fa-book"></i></span>
          </div>
          <div class="text-3xl font-display font-extrabold text-brand-yellow mt-3">${coursesCount} ta</div>
          <div class="text-[11px] text-zinc-400 mt-1">IELTS, General & Speaking</div>
        </div>

        <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-zinc-400 uppercase">O'qituvchilar</span>
            <span class="w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-sm font-black"><i class="fa-solid fa-chalkboard-user"></i></span>
          </div>
          <div class="text-3xl font-display font-extrabold text-white mt-3">${teachersCount} ta</div>
          <div class="text-[11px] text-zinc-400 mt-1">Mr. Abdulbosit & Team</div>
        </div>

        <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-zinc-400 uppercase">Telegram Bot</span>
            <span class="w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-sm font-black"><i class="fa-brands fa-telegram"></i></span>
          </div>
          <div class="text-xl font-display font-bold text-white mt-3 flex items-center gap-2">
            ${cmsData.telegramSettings?.isEnabled ? '<span class="text-emerald-400 font-black">Ulangan</span>' : '<span class="text-zinc-500 font-semibold">Ulanmagan</span>'}
          </div>
          <div class="text-[11px] text-zinc-400 mt-1">Avtomatik xabarnoma</div>
        </div>
      </div>

      <!-- Quick Action Hub -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-brand-cardDark border border-white/10 rounded-3xl p-6 space-y-3">
          <h3 class="text-lg font-bold font-display text-white flex items-center gap-2">
            <i class="fa-solid fa-bolt text-brand-yellow"></i> Tezkor Amallar
          </h3>
          <p class="text-xs text-zinc-400 leading-relaxed">
            Tez-tez ishlatiladigan bo'limlarga 1-click bilan o'tish:
          </p>
          <div class="grid grid-cols-2 gap-3 pt-2">
            <button onclick="switchCmsTab('courses')" class="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-left text-xs font-bold transition">
              <i class="fa-solid fa-plus text-brand-yellow mr-1.5"></i> Yangi Kurs Qo'shish
            </button>
            <button onclick="switchCmsTab('results')" class="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-left text-xs font-bold transition">
              <i class="fa-solid fa-star text-brand-yellow mr-1.5"></i> Yangi Natija Kiritish
            </button>
            <button onclick="switchCmsTab('hero')" class="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-left text-xs font-bold transition">
              <i class="fa-solid fa-pen text-brand-yellow mr-1.5"></i> Hero Matnini Tahrirlash
            </button>
            <button onclick="switchCmsTab('telegram')" class="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-left text-xs font-bold transition">
              <i class="fa-solid fa-robot text-brand-yellow mr-1.5"></i> Telegram Sozlash
            </button>
          </div>
        </div>

        <!-- Role Permissions Card -->
        <div class="bg-brand-cardDark border border-white/10 rounded-3xl p-6 space-y-3">
          <h3 class="text-lg font-bold font-display text-white flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-brand-yellow"></i> Foydalanuvchi Huquqlari
          </h3>
          <div class="space-y-2 text-xs text-zinc-300">
            <div class="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
              <span>Hozirgi Rol:</span>
              <span class="font-bold text-brand-yellow uppercase">${currentAuthUser.role}</span>
            </div>
            <div class="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
              <span>Matnlar va rasmlar tahriri:</span>
              <span class="text-emerald-400 font-bold"><i class="fa-solid fa-check"></i> Ruxsat etilgan</span>
            </div>
            <div class="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
              <span>Tariflar va narxlarni o'zgartirish:</span>
              <span class="${currentAuthUser.role === 'admin' ? 'text-emerald-400 font-bold' : 'text-zinc-500 font-bold'}">
                ${currentAuthUser.role === 'admin' ? '<i class="fa-solid fa-check"></i> Faol' : '<i class="fa-solid fa-lock"></i> Cheklangan (Faqat Admin)'}
              </span>
            </div>
            <div class="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
              <span>Arizalarni o'chirish:</span>
              <span class="${currentAuthUser.role === 'admin' ? 'text-emerald-400 font-bold' : 'text-zinc-500 font-bold'}">
                ${currentAuthUser.role === 'admin' ? '<i class="fa-solid fa-check"></i> Faol' : '<i class="fa-solid fa-lock"></i> Cheklangan (Faqat Admin)'}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

// 2. HERO TAB
function renderHeroTab(container) {
  const h = cmsData.hero;

  container.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Bosh Sahifa & Hero Banner Tahriri</h2>
          <p class="text-xs text-zinc-400">Saytning birinchi ekrani, sarlavhalar va statistika ko'rsatkichlari</p>
        </div>
        <button onclick="saveHeroData()" class="btn-yellow-primary px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-black flex items-center gap-2">
          <i class="fa-solid fa-floppy-disk"></i> Saqlash
        </button>
      </div>

      <!-- Top Notification Bar -->
      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 space-y-3">
        <h3 class="text-sm font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-bullhorn"></i> Yuqori E'lonlar Satri (Top Notice Ticker)
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">O'zbekcha (UZ)</label>
            <input type="text" id="hero-notice-uz" value="${escapeHtml(h.topNotice_uz || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">Русский (RU)</label>
            <input type="text" id="hero-notice-ru" value="${escapeHtml(h.topNotice_ru || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">English (EN)</label>
            <input type="text" id="hero-notice-en" value="${escapeHtml(h.topNotice_en || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
        </div>
      </div>

      <!-- Hero Badge & Description -->
      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 space-y-4">
        <h3 class="text-sm font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-heading"></i> Asosiy Badge va Tavsif
        </h3>
        
        <div>
          <label class="block text-[11px] font-bold text-zinc-400 mb-1">Badge Matni (UZ)</label>
          <input type="text" id="hero-badge-uz" value="${escapeHtml(h.badge_uz || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
        </div>

        <div>
          <label class="block text-[11px] font-bold text-zinc-400 mb-1">Asosiy Ta'rif Matni (UZ)</label>
          <textarea id="hero-desc-uz" rows="3" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">${escapeHtml(h.desc_uz || '')}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-zinc-400 mb-1">Asosiy Ta'rif Matni (RU)</label>
          <textarea id="hero-desc-ru" rows="2" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">${escapeHtml(h.desc_ru || '')}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-zinc-400 mb-1">Asosiy Ta'rif Matni (EN)</label>
          <textarea id="hero-desc-en" rows="2" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">${escapeHtml(h.desc_en || '')}</textarea>
        </div>
      </div>

      <!-- Counters -->
      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 space-y-3">
        <h3 class="text-sm font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-calculator"></i> Statistika Ko'rsatkichlari (Hero Metrics)
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">O'quvchilar soni</label>
            <input type="text" id="hero-stat-students" value="${escapeHtml(h.statStudents || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">IELTS Yuqori Natija</label>
            <input type="text" id="hero-stat-ielts" value="${escapeHtml(h.statIelts || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">Filiallar Soni</label>
            <input type="text" id="hero-stat-branches" value="${escapeHtml(h.statBranches || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
        </div>
      </div>

    </div>
  `;
}

function saveHeroData() {
  cmsData.hero.topNotice_uz = document.getElementById('hero-notice-uz').value;
  cmsData.hero.topNotice_ru = document.getElementById('hero-notice-ru').value;
  cmsData.hero.topNotice_en = document.getElementById('hero-notice-en').value;
  cmsData.hero.badge_uz = document.getElementById('hero-badge-uz').value;
  cmsData.hero.desc_uz = document.getElementById('hero-desc-uz').value;
  cmsData.hero.desc_ru = document.getElementById('hero-desc-ru').value;
  cmsData.hero.desc_en = document.getElementById('hero-desc-en').value;
  cmsData.hero.statStudents = document.getElementById('hero-stat-students').value;
  cmsData.hero.statIelts = document.getElementById('hero-stat-ielts').value;
  cmsData.hero.statBranches = document.getElementById('hero-stat-branches').value;

  saveCMSData();
}

// 3. COURSES TAB (CRUD)
function renderCoursesTab(container) {
  const courses = cmsData.courses || [];

  container.innerHTML = `
    <div class="max-w-5xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Kurslar va Dasturlar (CRUD)</h2>
          <p class="text-xs text-zinc-400">Yangi kurs qo'shish, mavjudlarini tahrirlash yoki o'chirish</p>
        </div>
        <button onclick="openCourseModal()" class="btn-yellow-primary px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-black flex items-center gap-2">
          <i class="fa-solid fa-plus"></i> Yangi Kurs Qo'shish
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${courses.map((c, idx) => `
          <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-brand-yellow text-black">${c.level}</span>
                ${c.isPopular ? '<span class="text-[10px] font-black text-brand-yellow"><i class="fa-solid fa-star"></i> POPULAR</span>' : ''}
              </div>
              <h3 class="text-lg font-bold text-white font-display">${c.name}</h3>
              <div class="text-xs font-bold text-brand-yellow mt-1">${c.price || 'Narx ko\'rsatilmagan'}</div>
              <p class="text-xs text-zinc-400 mt-2 line-clamp-3">${c.description_uz || c.description}</p>
            </div>

            <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <span class="text-[11px] text-zinc-500">${(c.features || []).length} ta imtiyoz</span>
              <div class="flex items-center gap-2">
                <button onclick="editCourse('${c.id}')" class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white transition">
                  <i class="fa-solid fa-pen"></i> Tahrirlash
                </button>
                <button onclick="deleteCourse('${c.id}')" class="px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function openCourseModal(courseId = null) {
  const isEdit = !!courseId;
  const course = isEdit ? cmsData.courses.find(c => c.id === courseId) : {
    id: 'course-' + Date.now(),
    name: '',
    level: 'Beginner - Advanced',
    duration: '3 oy',
    price: '790 000 so\'m / oy',
    description_uz: '',
    description_ru: '',
    description_en: '',
    features: ['Haftada 3 kun dars', 'Speaking Club bepul', 'Barcha kitoblar beriladi'],
    isPopular: false
  };

  const modalHtml = `
    <div id="course-editor-modal" class="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-brand-charcoal border border-white/20 rounded-3xl p-6 max-w-xl w-full shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
        <button onclick="document.getElementById('course-editor-modal').remove()" class="absolute top-5 right-5 text-zinc-400 hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>

        <h3 class="text-xl font-bold font-display text-white mb-4">
          ${isEdit ? 'Kursni Tahrirlash' : 'Yangi Kurs Qo\'shish'}
        </h3>

        <div class="space-y-3.5 text-xs">
          <div>
            <label class="block font-bold text-zinc-400 mb-1">Kurs Nomi *</label>
            <input type="text" id="course-modal-name" value="${escapeHtml(course.name)}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-zinc-400 mb-1">Daraja / Target</label>
              <input type="text" id="course-modal-level" value="${escapeHtml(course.level)}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white">
            </div>
            <div>
              <label class="block font-bold text-zinc-400 mb-1">Davomiyligi</label>
              <input type="text" id="course-modal-duration" value="${escapeHtml(course.duration)}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white">
            </div>
          </div>

          <div>
            <label class="block font-bold text-zinc-400 mb-1">Oylik To'lov Narxi</label>
            <input type="text" id="course-modal-price" value="${escapeHtml(course.price || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white">
          </div>

          <div>
            <label class="block font-bold text-zinc-400 mb-1">Tavsif (UZ) *</label>
            <textarea id="course-modal-desc-uz" rows="2" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white">${escapeHtml(course.description_uz || course.description || '')}</textarea>
          </div>

          <div>
            <label class="block font-bold text-zinc-400 mb-1">Imtiyozlar (Har bir satrga bittadan)</label>
            <textarea id="course-modal-features" rows="3" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white">${(course.features || []).join('\n')}</textarea>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <input type="checkbox" id="course-modal-popular" ${course.isPopular ? 'checked' : ''} class="w-4 h-4 accent-yellow-400 rounded">
            <label for="course-modal-popular" class="font-bold text-white">"Eng ko'p tanlanadigan" belgisi bilan ajratish</label>
          </div>

          <div class="pt-3 flex items-center justify-end gap-3">
            <button onclick="document.getElementById('course-editor-modal').remove()" class="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold">Bekor qilish</button>
            <button onclick="saveCourseFromModal('${course.id}', ${isEdit})" class="btn-yellow-primary px-6 py-2 rounded-xl text-black font-black uppercase tracking-wider">Saqlash</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function editCourse(id) {
  openCourseModal(id);
}

function deleteCourse(id) {
  if (!confirm("Haqiqatan ham bu kursni o'chirmoqchimisiz?")) return;
  cmsData.courses = cmsData.courses.filter(c => c.id !== id);
  saveCMSData();
  renderCoursesTab(document.getElementById('cms-tab-content'));
}

function saveCourseFromModal(courseId, isEdit) {
  const name = document.getElementById('course-modal-name').value.trim();
  const level = document.getElementById('course-modal-level').value.trim();
  const duration = document.getElementById('course-modal-duration').value.trim();
  const price = document.getElementById('course-modal-price').value.trim();
  const descUz = document.getElementById('course-modal-desc-uz').value.trim();
  const featuresText = document.getElementById('course-modal-features').value;
  const isPopular = document.getElementById('course-modal-popular').checked;

  if (!name) {
    alert("Kurs nomini kiriting!");
    return;
  }

  const features = featuresText.split('\n').map(s => s.trim()).filter(Boolean);

  const updatedCourse = {
    id: courseId,
    name,
    level,
    duration,
    price,
    description_uz: descUz,
    features,
    isPopular
  };

  if (isEdit) {
    const idx = cmsData.courses.findIndex(c => c.id === courseId);
    if (idx !== -1) cmsData.courses[idx] = updatedCourse;
  } else {
    cmsData.courses.push(updatedCourse);
  }

  saveCMSData();
  document.getElementById('course-editor-modal').remove();
  renderCoursesTab(document.getElementById('cms-tab-content'));
}

// 4. PRICING TAB (PROTECTED FOR ADMIN)
function renderPricingTab(container) {
  const isAdmin = currentAuthUser.role === 'admin';
  const pricing = cmsData.pricing || [];

  container.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Tariflar va Paketlar Narxlari</h2>
          <p class="text-xs text-zinc-400">Oylik to'lovlar, chegirmalar va paket shartlarini belgilash</p>
        </div>
        ${!isAdmin ? '<span class="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1.5 rounded-lg"><i class="fa-solid fa-lock mr-1"></i> Faqat Bosh Administrator tahrirlay oladi</span>' : ''}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${pricing.map(p => `
          <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-brand-yellow text-black">${p.discount || 'STANDART'}</span>
              <h3 class="text-lg font-bold text-white font-display mt-2">${p.name}</h3>
              <div class="text-2xl font-black text-brand-yellow font-display mt-2">${p.monthlyFee}</div>
              <div class="text-xs text-zinc-400">${p.fullFee}</div>

              <ul class="space-y-2 text-xs text-zinc-300 mt-4">
                ${(p.features || []).map(f => `<li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-yellow"></i> <span>${f}</span></li>`).join('')}
              </ul>
            </div>

            ${isAdmin ? `
              <button onclick="editPricingPackage('${p.id}')" class="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-brand-yellow hover:text-black text-white text-xs font-bold transition">
                <i class="fa-solid fa-pen mr-1"></i> Narxni Tahrirlash
              </button>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function editPricingPackage(id) {
  if (currentAuthUser.role !== 'admin') {
    alert("Kechirasiz, narxlarni faqat Bosh Administrator o'zgartira oladi!");
    return;
  }

  const p = cmsData.pricing.find(item => item.id === id);
  if (!p) return;

  const newFee = prompt(`"${p.name}" uchun yangi oylik narxni kiriting:`, p.monthlyFee);
  if (newFee) {
    p.monthlyFee = newFee;
    saveCMSData();
    renderPricingTab(document.getElementById('cms-tab-content'));
  }
}

// 5. RESULTS & CASE STUDIES TAB
function renderResultsTab(container) {
  const results = cmsData.results || [];

  container.innerHTML = `
    <div class="max-w-5xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Natijalar & Keyslar (Portfolio)</h2>
          <p class="text-xs text-zinc-400">O'quvchilar natijalari, sertifikatlari va real sharhlari</p>
        </div>
        <button onclick="openResultModal()" class="btn-yellow-primary px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-black flex items-center gap-2">
          <i class="fa-solid fa-plus"></i> Yangi Natija Kiritish
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${results.map(r => `
          <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-1 rounded-md text-[10px] font-black bg-brand-yellow text-black">${r.score}</span>
                <div class="text-amber-400 text-xs flex gap-0.5">
                  ${'<i class="fa-solid fa-star"></i>'.repeat(r.stars || 5)}
                </div>
              </div>
              <p class="text-xs text-zinc-300 italic leading-relaxed">"${r.quote}"</p>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-brand-yellow text-black font-black flex items-center justify-center text-xs">${r.avatar || 'ST'}</div>
                <div>
                  <div class="text-sm font-bold text-white">${r.studentName}</div>
                  <div class="text-[11px] text-zinc-400">${r.role}</div>
                </div>
              </div>

              <button onclick="deleteResult('${r.id}')" class="px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function openResultModal() {
  const studentName = prompt("O'quvchi Ism va Familiyasi:");
  if (!studentName) return;
  const score = prompt("Erishilgan Natija (Masalan: IELTS 8.0 yoki Fluent Native):", "IELTS 8.0");
  const quote = prompt("O'quvchi Fikri / Sharhi:");

  cmsData.results.push({
    id: 'res-' + Date.now(),
    studentName,
    role: "Niners Bitiruvchisi",
    score: score || "IELTS 8.0",
    quote: quote || "Ninersdagi darslar natijamni butunlay o'zgartirdi!",
    avatar: studentName.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase(),
    stars: 5
  });

  saveCMSData();
  renderResultsTab(document.getElementById('cms-tab-content'));
}

function deleteResult(id) {
  if (!confirm("Ushbu natijani o'chirmoqchimisiz?")) return;
  cmsData.results = cmsData.results.filter(r => r.id !== id);
  saveCMSData();
  renderResultsTab(document.getElementById('cms-tab-content'));
}

// 6. TEACHERS TAB
function renderTeachersTab(container) {
  const teachers = cmsData.teachers || [];

  container.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Ustozlar va Jamoa</h2>
          <p class="text-xs text-zinc-400">Markaz o'qituvchilari ma'lumotlari va Mr. Abdulbosit VIP bo'limi</p>
        </div>
      </div>

      <div class="space-y-4">
        ${teachers.map(t => `
          <div class="bg-brand-cardDark border ${t.isVip ? 'border-2 border-brand-yellow' : 'border-white/10'} rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl ${t.isVip ? 'bg-brand-yellow text-black' : 'bg-zinc-800 text-brand-yellow border border-white/10'} font-display font-black text-xl flex items-center justify-center shrink-0">
                ${t.avatar}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-bold text-white font-display">${t.name}</h3>
                  ${t.isVip ? '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-brand-yellow text-black">TOP MASTER VIP</span>' : ''}
                </div>
                <div class="text-xs text-brand-yellow font-semibold">${t.badge}</div>
                <p class="text-xs text-zinc-400 mt-1 max-w-xl line-clamp-2">${t.bio}</p>
              </div>
            </div>

            <button onclick="editTeacherBio('${t.id}')" class="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-brand-yellow hover:text-black text-white text-xs font-bold transition shrink-0">
              <i class="fa-solid fa-pen mr-1"></i> Bio Tahrirlash
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function editTeacherBio(id) {
  const t = cmsData.teachers.find(item => item.id === id);
  if (!t) return;
  const newBio = prompt(`"${t.name}" uchun yangi tavsif/bio kiriting:`, t.bio);
  if (newBio) {
    t.bio = newBio;
    saveCMSData();
    renderTeachersTab(document.getElementById('cms-tab-content'));
  }
}

// 7. CONTACTS & BRANCHES TAB
function renderContactsTab(container) {
  const c = cmsData.contacts || {};

  container.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Filiallar va Aloqa Ma'lumotlari</h2>
          <p class="text-xs text-zinc-400">Telefon raqamlar, filial manzillari va ijtimoiy tarmoqlar</p>
        </div>
        <button onclick="saveContactsData()" class="btn-yellow-primary px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-black flex items-center gap-2">
          <i class="fa-solid fa-floppy-disk"></i> Saqlash
        </button>
      </div>

      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 space-y-4">
        <h3 class="text-sm font-bold text-brand-yellow uppercase tracking-wider">Asosiy Telefonlar & Ish Vaqti</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">1-Telefon (Beruniy)</label>
            <input type="text" id="contact-phone-1" value="${escapeHtml(c.phone1 || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">2-Telefon (Novza)</label>
            <input type="text" id="contact-phone-2" value="${escapeHtml(c.phone2 || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
          <div>
            <label class="block text-[11px] font-bold text-zinc-400 mb-1">Ish Tartibi</label>
            <input type="text" id="contact-hours" value="${escapeHtml(c.workingHours || '')}" class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white">
          </div>
        </div>
      </div>

      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-5 space-y-4">
        <h3 class="text-sm font-bold text-brand-yellow uppercase tracking-wider">Filiallar Ro'yxati</h3>
        <div class="space-y-3">
          ${(c.branches || []).map((b, idx) => `
            <div class="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-white text-xs">${b.name}</span>
                <span class="text-[10px] bg-black text-brand-yellow px-2 py-0.5 rounded font-black">${b.metro}</span>
              </div>
              <input type="text" id="branch-addr-${idx}" value="${escapeHtml(b.address)}" class="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs text-zinc-300">
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function saveContactsData() {
  cmsData.contacts.phone1 = document.getElementById('contact-phone-1').value;
  cmsData.contacts.phone2 = document.getElementById('contact-phone-2').value;
  cmsData.contacts.workingHours = document.getElementById('contact-hours').value;

  (cmsData.contacts.branches || []).forEach((b, idx) => {
    const input = document.getElementById(`branch-addr-${idx}`);
    if (input) b.address = input.value;
  });

  saveCMSData();
}

// 8. LEADS CRM TAB (SEARCH, FILTER, STATUS DROPDOWN, DELETE FOR ADMIN)
let leadSearchQuery = '';
let leadStatusFilter = 'all';

function renderLeadsTab(container) {
  const isAdmin = currentAuthUser.role === 'admin';
  let leads = cmsData.leads || [];

  // Filter & Search
  if (leadStatusFilter !== 'all') {
    leads = leads.filter(l => l.status === leadStatusFilter);
  }
  if (leadSearchQuery) {
    const q = leadSearchQuery.toLowerCase();
    leads = leads.filter(l => 
      (l.fullName || '').toLowerCase().includes(q) ||
      (l.phoneNumber || '').toLowerCase().includes(q) ||
      (l.course || '').toLowerCase().includes(q)
    );
  }

  container.innerHTML = `
    <div class="max-w-6xl mx-auto space-y-5">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Kelib tushgan Arizalar (Leads CRM)</h2>
          <p class="text-xs text-zinc-400">Sayt orqali yuborilgan barcha mijozlar so'rovlari bazasi</p>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="exportLeadsCSV()" class="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white border border-white/10 flex items-center gap-1.5">
            <i class="fa-solid fa-file-csv text-brand-yellow"></i> Export CSV
          </button>
        </div>
      </div>

      <!-- Search & Filters Toolbar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 bg-brand-cardDark p-4 rounded-2xl border border-white/10">
        <div class="relative w-full sm:w-72">
          <input type="text" id="lead-search-input" value="${escapeHtml(leadSearchQuery)}" oninput="handleLeadSearch(this.value)" placeholder="Ism yoki telefon bo'yicha qidirish..." class="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-yellow">
          <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-zinc-500 text-xs"></i>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          <span class="text-xs text-zinc-400 font-medium">Status:</span>
          <select id="lead-status-filter" onchange="handleLeadFilter(this.value)" class="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:border-brand-yellow font-bold">
            <option value="all" ${leadStatusFilter === 'all' ? 'selected' : ''}>Barchasi (${(cmsData.leads || []).length})</option>
            <option value="Yangi" ${leadStatusFilter === 'Yangi' ? 'selected' : ''}>Yangi</option>
            <option value="Jarayonda" ${leadStatusFilter === 'Jarayonda' ? 'selected' : ''}>Jarayonda</option>
            <option value="Qabul qilindi" ${leadStatusFilter === 'Qabul qilindi' ? 'selected' : ''}>Qabul qilindi</option>
            <option value="Bekor qilindi" ${leadStatusFilter === 'Bekor qilindi' ? 'selected' : ''}>Bekor qilindi</option>
          </select>
        </div>
      </div>

      <!-- Leads Table -->
      <div class="bg-brand-cardDark border border-white/10 rounded-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-black/60 text-zinc-400 uppercase text-[10px] font-black border-b border-white/10 tracking-wider">
              <tr>
                <th class="py-3.5 px-4">Mijoz</th>
                <th class="py-3.5 px-4">Telefon</th>
                <th class="py-3.5 px-4">Kurs / Yo'nalish</th>
                <th class="py-3.5 px-4">Filial</th>
                <th class="py-3.5 px-4">Vaqt</th>
                <th class="py-3.5 px-4">Holat (Status)</th>
                ${isAdmin ? '<th class="py-3.5 px-4 text-right">Amal</th>' : ''}
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              ${leads.length === 0 ? `
                <tr>
                  <td colspan="7" class="py-8 text-center text-zinc-500 text-xs">Arizalar topilmadi</td>
                </tr>
              ` : leads.map(l => {
                let statusColor = "bg-blue-500/20 text-blue-400 border border-blue-500/30";
                if (l.status === 'Qabul qilindi') statusColor = "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
                if (l.status === 'Bekor qilindi') statusColor = "bg-red-500/20 text-red-400 border border-red-500/30";
                if (l.status === 'Jarayonda') statusColor = "bg-amber-500/20 text-amber-400 border border-amber-500/30";

                return `
                  <tr class="hover:bg-white/[0.02] transition">
                    <td class="py-3.5 px-4 font-bold text-white">${l.fullName}</td>
                    <td class="py-3.5 px-4 font-mono text-brand-yellow">
                      <a href="tel:${(l.phoneNumber || '').replace(/\s+/g, '')}" class="hover:underline">${l.phoneNumber}</a>
                    </td>
                    <td class="py-3.5 px-4 text-zinc-300">${l.course}</td>
                    <td class="py-3.5 px-4 text-zinc-400">${l.branch}</td>
                    <td class="py-3.5 px-4 text-zinc-500 text-[11px]">${l.createdAt}</td>
                    <td class="py-3.5 px-4">
                      <select onchange="updateLeadStatus('${l.id}', this.value)" class="px-2.5 py-1 rounded-lg text-xs font-bold ${statusColor} bg-black focus:outline-none cursor-pointer">
                        <option value="Yangi" ${l.status === 'Yangi' ? 'selected' : ''}>Yangi</option>
                        <option value="Jarayonda" ${l.status === 'Jarayonda' ? 'selected' : ''}>Jarayonda</option>
                        <option value="Qabul qilindi" ${l.status === 'Qabul qilindi' ? 'selected' : ''}>Qabul qilindi</option>
                        <option value="Bekor qilindi" ${l.status === 'Bekor qilindi' ? 'selected' : ''}>Bekor qilindi</option>
                      </select>
                    </td>
                    ${isAdmin ? `
                      <td class="py-3.5 px-4 text-right">
                        <button onclick="deleteLead('${l.id}')" class="px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs transition" title="O'chirish">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    ` : ''}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function handleLeadSearch(val) {
  leadSearchQuery = val;
  renderLeadsTab(document.getElementById('cms-tab-content'));
}

function handleLeadFilter(val) {
  leadStatusFilter = val;
  renderLeadsTab(document.getElementById('cms-tab-content'));
}

function updateLeadStatus(id, newStatus) {
  const lead = (cmsData.leads || []).find(l => l.id === id);
  if (lead) {
    lead.status = newStatus;
    saveCMSData();
    showToast(`Ariza holati "${newStatus}" ga o'zgartirildi`, "info");
    renderLeadsTab(document.getElementById('cms-tab-content'));
  }
}

function deleteLead(id) {
  if (currentAuthUser.role !== 'admin') {
    alert("Kechirasiz, faqat Bosh Administrator arizani o'chira oladi!");
    return;
  }
  if (!confirm("Ushbu arizani ro'yxatdan o'chirmoqchimisiz?")) return;
  cmsData.leads = (cmsData.leads || []).filter(l => l.id !== id);
  saveCMSData();
  renderLeadsTab(document.getElementById('cms-tab-content'));
}

function exportLeadsCSV() {
  const leads = cmsData.leads || [];
  if (leads.length === 0) {
    alert("Export qilish uchun arizalar mavjud emas!");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,ID,Ism,Telefon,Kurs,Filial,Vaqt,Status\n";
  leads.forEach(l => {
    csvContent += `"${l.id}","${l.fullName}","${l.phoneNumber}","${l.course}","${l.branch}","${l.createdAt}","${l.status}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `niners_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

// 9. TELEGRAM BOT SETTINGS TAB (PROTECTED FOR ADMIN)
function renderTelegramTab(container) {
  const isAdmin = currentAuthUser.role === 'admin';
  const tg = cmsData.telegramSettings || { botToken: '', chatId: '', isEnabled: false };

  container.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Telegram Bot Integratsiyasi</h2>
          <p class="text-xs text-zinc-400">Yangi arizalarni avtomatik Telegram guruh yoki adminga yuborish</p>
        </div>
        ${isAdmin ? `
          <button onclick="saveTelegramSettings()" class="btn-yellow-primary px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-black flex items-center gap-2">
            <i class="fa-solid fa-floppy-disk"></i> Saqlash
          </button>
        ` : '<span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/30">Faqat Admin ruxsatida</span>'}
      </div>

      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-6 space-y-4">
        
        <div class="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <div class="font-bold text-white text-sm">Xabarnomalarni yoqish</div>
            <div class="text-xs text-zinc-400">Har bir yangi form arizasi zudlik bilan Telegramga yuboriladi</div>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="tg-enabled" ${tg.isEnabled ? 'checked' : ''} ${!isAdmin ? 'disabled' : ''} class="sr-only peer">
            <div class="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-yellow"></div>
          </label>
        </div>

        <div>
          <label class="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
            Telegram Bot Token (BotFather'dan olingan)
          </label>
          <input type="text" id="tg-token" value="${escapeHtml(tg.botToken || '')}" ${!isAdmin ? 'disabled' : ''} placeholder="Masalan: 123456789:ABCdefGHIjklMNOpqrSTUvwxYZ" class="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-yellow font-mono">
        </div>

        <div>
          <label class="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1">
            Chat ID yoki Guruh ID
          </label>
          <input type="text" id="tg-chat-id" value="${escapeHtml(tg.chatId || '')}" ${!isAdmin ? 'disabled' : ''} placeholder="Masalan: 987654321 yoki -1001234567890" class="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-yellow font-mono">
        </div>

        ${isAdmin ? `
          <div class="pt-2">
            <button onclick="testTelegramMessage()" class="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-brand-yellow border border-brand-yellow/40 text-xs font-bold transition flex items-center gap-2">
              <i class="fa-solid fa-paper-plane"></i>
              <span>Test Xabarini Yuborish</span>
            </button>
          </div>
        ` : ''}

        <div class="bg-black/40 p-4 rounded-xl border border-white/5 text-[11px] text-zinc-400 space-y-1">
          <div class="font-bold text-brand-yellow">Qo'llanma:</div>
          <div>1. @BotFather orqali yangi bot yarating va <code>Token</code>ni oling.</div>
          <div>2. Botni o'z guruhingizga qo'shing va @userinfobot orqali guruh <code>Chat ID</code>sini aniqlang.</div>
          <div>3. Saqlaganingizdan so'ng, saytdan kelgan har bir ariza to'g'ridan-to'g'ri guruhingizga tushadi!</div>
        </div>

      </div>
    </div>
  `;
}

function saveTelegramSettings() {
  if (currentAuthUser.role !== 'admin') return;
  cmsData.telegramSettings = {
    botToken: document.getElementById('tg-token').value.trim(),
    chatId: document.getElementById('tg-chat-id').value.trim(),
    isEnabled: document.getElementById('tg-enabled').checked
  };
  saveCMSData();
}

async function testTelegramMessage() {
  const botToken = document.getElementById('tg-token').value.trim();
  const chatId = document.getElementById('tg-chat-id').value.trim();

  if (!botToken || !chatId) {
    alert("Iltimos, Bot Token va Chat ID ni kiriting!");
    return;
  }

  const testLead = {
    fullName: "Test Foydalanuvchi (CMS Tekshiruv)",
    phoneNumber: "+998 90 000 00 00",
    course: "IELTS Intensive 8.5",
    branch: "Shayxontohur (Beruniy)",
    teacher: "Mr. Abdulbosit",
    comment: "Bu Niners CMS tizimidan yuborilgan sinov xabari!",
    createdAt: new Date().toLocaleString()
  };

  // Temporarily set
  cmsData.telegramSettings.botToken = botToken;
  cmsData.telegramSettings.chatId = chatId;
  cmsData.telegramSettings.isEnabled = true;

  showToast("Telegramga test yuborilmoqda...", "info");
  const success = await sendTelegramLeadNotification(testLead);
  if (success) {
    showToast("Test xabari Telegramga muvaffaqiyatli yetib bordi!", "success");
  } else {
    showToast("Xatolik! Token yoki Chat ID ni qayta tekshiring.", "error");
  }
}

// 10. SECTION VISIBILITY TAB
function renderVisibilityTab(container) {
  const vis = cmsData.sectionVisibility || {};

  container.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold font-display text-white">Bo'limlar Ko'rinishi (Section Visibility)</h2>
          <p class="text-xs text-zinc-400">Sayt sahifasidagi istalgan bo'limni yoqish yoki o'chirish</p>
        </div>
        <button onclick="saveVisibilitySettings()" class="btn-yellow-primary px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-black flex items-center gap-2">
          <i class="fa-solid fa-floppy-disk"></i> Saqlash
        </button>
      </div>

      <div class="bg-brand-cardDark border border-white/10 rounded-2xl p-6 space-y-4">
        ${Object.keys(vis).map(sec => `
          <div class="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <div>
              <span class="font-bold text-white text-xs uppercase tracking-wider">${sec}</span>
              <span class="text-[11px] text-zinc-400 ml-2">(${sec} bloki)</span>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="vis-${sec}" ${vis[sec] ? 'checked' : ''} class="sr-only peer">
              <div class="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-yellow"></div>
            </label>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function saveVisibilitySettings() {
  const vis = cmsData.sectionVisibility || {};
  Object.keys(vis).forEach(sec => {
    const el = document.getElementById(`vis-${sec}`);
    if (el) vis[sec] = el.checked;
  });
  saveCMSData();
}

function resetCMSDefaults() {
  if (currentAuthUser.role !== 'admin') {
    alert("Faqat Bosh Administrator standart holatga qaytara oladi!");
    return;
  }

  if (!confirm("DIQQAT: Barcha tahrirlar o'chiriladi va sayt boshlang'ich standart ma'lumotlariga qaytadi. Rozimisiz?")) return;

  localStorage.removeItem('niners_cms_data');
  cmsData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
  saveCMSData(cmsData);
  renderCMSPanel();
  showToast("Sayt boshlang'ich standart holatiga qaytarildi!", "success");
}

// ================= TOAST NOTIFICATION UTILITY =================
function showToast(message, type = "success") {
  let toastContainer = document.getElementById('cms-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'cms-toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-[200] flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'error' ? 'bg-red-600' : (type === 'info' ? 'bg-zinc-800 border-brand-yellow' : 'bg-brand-yellow text-black');
  const icon = type === 'error' ? 'fa-triangle-exclamation' : (type === 'info' ? 'fa-info' : 'fa-circle-check');

  toast.className = `${bgClass} text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 20);

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ================= PUBLIC INTERACTIVE HOOKS =================
window.openCMS = openCMS;
window.closeCMSPanel = closeCMSPanel;
window.closeLoginModal = closeLoginModal;
window.loginAsRole = loginAsRole;
window.handleManualLogin = handleManualLogin;
window.logoutCMS = logoutCMS;
window.switchCmsTab = switchCmsTab;
window.saveHeroData = saveHeroData;
window.openCourseModal = openCourseModal;
window.editCourse = editCourse;
window.deleteCourse = deleteCourse;
window.saveCourseFromModal = saveCourseFromModal;
window.editPricingPackage = editPricingPackage;
window.openResultModal = openResultModal;
window.deleteResult = deleteResult;
window.editTeacherBio = editTeacherBio;
window.saveContactsData = saveContactsData;
window.handleLeadSearch = handleLeadSearch;
window.handleLeadFilter = handleLeadFilter;
window.updateLeadStatus = updateLeadStatus;
window.deleteLead = deleteLead;
window.exportLeadsCSV = exportLeadsCSV;
window.saveTelegramSettings = saveTelegramSettings;
window.testTelegramMessage = testTelegramMessage;
window.saveVisibilitySettings = saveVisibilitySettings;
window.resetCMSDefaults = resetCMSDefaults;

// Update UI buttons showing logged in state
function updateAdminButtonsState() {
  const adminBtns = document.querySelectorAll('.cms-trigger-btn');
  adminBtns.forEach(btn => {
    if (currentAuthUser) {
      btn.innerHTML = `<i class="fa-solid fa-gauge text-brand-yellow"></i> <span>CMS (${currentAuthUser.role.toUpperCase()})</span>`;
    } else {
      btn.innerHTML = `<i class="fa-solid fa-lock text-brand-yellow"></i> <span>Admin (CMS)</span>`;
    }
  });
}

// Intercept window hash '#admin' or URL param
window.addEventListener('hashchange', () => {
  if (location.hash === '#admin') {
    openCMS();
  }
});

// Run live synchronization immediately upon script load
document.addEventListener('DOMContentLoaded', () => {
  syncLiveWebsite();
  updateAdminButtonsState();

  if (location.hash === '#admin') {
    openCMS();
  }
});
