interface Command {
  cmd: string;
  desc: string;
}

interface Lesson {
  id: string;
  title: string;
  desc: string;
  commands?: Command[];
  doc?: string;
}

interface Content {
  [key: string]: {
    title: string;
    lessons: Lesson[];
  };
}
const content: Content = {
  basics: {
    title: 'Vim asoslari',
    lessons: [
      {
        id: 'b1',
        title: 'Vim nima?',
        desc: 'Vim - bu kuchli matn muharriri bo\'lib, terminal va IDE larda ishlaydi',
        commands: [
          { cmd: 'vim', desc: 'Vim ni ishga tushirish' },
          { cmd: 'vim fayl.txt', desc: 'Faylni ochish' }
        ],
        doc: 'Vim (Vi IMproved) 1991 yilda Bram Moolenaar tomonidan yaratilgan. U terminal asosida ishlaydigan va juda tez, kuchli matn muharriri hisoblanadi.'
      },
      {
        id: 'b2',
        title: 'Vim dan chiqish',
        desc: 'Eng muhim buyruq - chiqish!',
        commands: [
          { cmd: ':q', desc: 'Chiqish (agar o\'zgarishlar bo\'lmasa)' },
          { cmd: ':q!', desc: 'Majburiy chiqish (o\'zgarishlarni saqlamasdan)' },
          { cmd: ':wq', desc: 'Saqlash va chiqish' },
          { cmd: ':x', desc: 'Saqlash va chiqish (qisqa yo\'l)' },
          { cmd: 'ZZ', desc: 'Saqlash va chiqish (normal rejimda)' }
        ],
        doc: 'Vim dan chiqish - bu yangi boshlovchilar uchun eng keng tarqalgan muammo. Esda tuting: ESC tugmasini bosing, keyin :q yozing!'
      },
      {
        id: 'b3',
        title: 'Yordam tizimi',
        desc: 'Vim ning o\'rnatilgan yordam tizimi juda kuchli',
        commands: [
          { cmd: ':help', desc: 'Asosiy yordam' },
          { cmd: ':help dd', desc: 'Buyruq haqida yordam' },
          { cmd: ':help modes', desc: 'Mavzu bo\'yicha yordam' },
          { cmd: 'Ctrl+]', desc: 'Havolaga o\'tish (yordam ichida)' },
          { cmd: 'Ctrl+o', desc: 'Orqaga qaytish' }
        ],
        doc: 'Vim ning yordam tizimi hyperlink lar bilan to\'la. Har qanday buyruq yoki mavzu haqida :help <mavzu> orqali o\'rganishingiz mumkin.'
      },
      {
        id: 'b4',
        title: 'Konfiguratsiya fayli',
        desc: 'Vim ni sozlash uchun .vimrc faylidan foydalaning',
        commands: [
          { cmd: ':e ~/.vimrc', desc: 'Konfiguratsiya faylini ochish' },
          { cmd: ':source ~/.vimrc', desc: 'Konfiguratsiyani qayta yuklash' },
          { cmd: 'set number', desc: 'Qator raqamlarini ko\'rsatish' },
          { cmd: 'set relativenumber', desc: 'Nisbiy raqamlarni yoqish' },
          { cmd: 'syntax on', desc: 'Sintaksis ranglashni yoqish' }
        ],
        doc: 'Linux/Mac da ~/.vimrc, Windows da ~/_vimrc fayli Vim sozlamalarini saqlaydi. Bu faylda barcha shaxsiy sozlamalaringizni yozishingiz mumkin.'
      }
    ]
  },
  modes: {
    title: 'Vim rejimlari',
    lessons: [
      {
        id: 'm1',
        title: 'Normal rejim',
        desc: 'Default rejim - kursorni harakatlantirish va buyruqlar',
        commands: [
          { cmd: 'ESC', desc: 'Normal rejimga qaytish' },
          { cmd: 'i', desc: 'Insert rejimga o\'tish' },
          { cmd: 'v', desc: 'Visual rejimga o\'tish' },
          { cmd: ':', desc: 'Command rejimga o\'tish' }
        ],
        doc: 'Normal rejim - Vim ning asosiy rejimi. Bu yerda siz kursorni harakatlantirasiz va buyruqlarni bajarasiz. Matn kiritish uchun emas!'
      },
      {
        id: 'm2',
        title: 'Insert rejim',
        desc: 'Matn kiritish rejimi',
        commands: [
          { cmd: 'i', desc: 'Kursor oldidan kiritish' },
          { cmd: 'a', desc: 'Kursor keyin kiritish' },
          { cmd: 'I', desc: 'Qator boshidan kiritish' },
          { cmd: 'A', desc: 'Qator oxiridan kiritish' },
          { cmd: 'o', desc: 'Pastda yangi qator ochish' },
          { cmd: 'O', desc: 'Yuqorida yangi qator ochish' }
        ],
        doc: 'Insert rejimda Vim oddiy matn muharririga o\'xshaydi. ESC bilan normal rejimga qaytasiz.'
      },
      {
        id: 'm3',
        title: 'Visual rejim',
        desc: 'Matnni belgilash va ustida amallar bajarish',
        commands: [
          { cmd: 'v', desc: 'Belgidan-belgiga belgilash' },
          { cmd: 'V', desc: 'Qatordan-qatorga belgilash' },
          { cmd: 'Ctrl+v', desc: 'Blok rejimda belgilash' },
          { cmd: 'gv', desc: 'Oldingi belgilanganini qayta tanlash' }
        ],
        doc: 'Visual rejimda matnni belgilab, keyin ustida turli amallar (o\'chirish, nusxa olish, o\'zgartirish) bajarishingiz mumkin.'
      },
      {
        id: 'm4',
        title: 'Command rejim',
        desc: 'Ex buyruqlarini bajarish',
        commands: [
          { cmd: ':w', desc: 'Faylni saqlash' },
          { cmd: ':q', desc: 'Chiqish' },
          { cmd: ':wq', desc: 'Saqlash va chiqish' },
          { cmd: ':e fayl.txt', desc: 'Faylni ochish' },
          { cmd: ':%s/old/new/g', desc: 'Matnni almashtirish' }
        ],
        doc: 'Command rejim : belgisi bilan boshlanadi. Bu yerda fayl operatsiyalari, sozlamalar va boshqa buyruqlarni bajarasiz.'
      }
    ]
  },
  navigation: {
    title: 'Navigatsiya',
    lessons: [
      {
        id: 'n1',
        title: 'Asosiy harakatlar',
        desc: 'Klaviatura bilan tez harakatlanish',
        commands: [
          { cmd: 'h', desc: 'Chapga' },
          { cmd: 'j', desc: 'Pastga' },
          { cmd: 'k', desc: 'Yuqoriga' },
          { cmd: 'l', desc: 'O\'ngga' },
          { cmd: '5j', desc: '5 qator pastga' },
          { cmd: '10k', desc: '10 qator yuqoriga' }
        ],
        doc: 'hjkl - Vim ning asosiy navigatsiya tugmalari. Raqam + buyruq bilan harakatni takrorlashingiz mumkin.'
      },
      {
        id: 'n2',
        title: 'So\'zlar bo\'yicha',
        desc: 'So\'zlar orasida tez sakrash',
        commands: [
          { cmd: 'w', desc: 'Keyingi so\'z boshiga' },
          { cmd: 'b', desc: 'Oldingi so\'z boshiga' },
          { cmd: 'e', desc: 'So\'z oxiriga' },
          { cmd: 'W', desc: 'Keyingi katta so\'zga (whitespace ajratadi)' },
          { cmd: 'B', desc: 'Oldingi katta so\'zga' }
        ],
        doc: 'So\'zlar bo\'yicha harakatlanish juda tez. w/b - oddiy so\'zlar, W/B - belgilar bilan ajratilgan so\'zlar.'
      },
      {
        id: 'n3',
        title: 'Qator bo\'yicha',
        desc: 'Qator ichida navigatsiya',
        commands: [
          { cmd: '0', desc: 'Qator boshiga' },
          { cmd: '$', desc: 'Qator oxiriga' },
          { cmd: '^', desc: 'Birinchi bo\'sh bo\'lmagan belgiga' },
          { cmd: 'g_', desc: 'Oxirgi bo\'sh bo\'lmagan belgiga' },
          { cmd: 'f<char>', desc: 'Keyingi <char> belgiga' },
          { cmd: 't<char>', desc: '<char> dan oldingi belgiga' }
        ],
        doc: 'Qator ichida tez harakatlanish uchun 0, $, ^ va f/t buyruqlaridan foydalaning.'
      },
      {
        id: 'n4',
        title: 'Fayl bo\'yicha',
        desc: 'Fayl bo\'ylab tez sakrash',
        commands: [
          { cmd: 'gg', desc: 'Fayl boshiga' },
          { cmd: 'G', desc: 'Fayl oxiriga' },
          { cmd: '50G', desc: '50-qatorga' },
          { cmd: ':50', desc: '50-qatorga (command rejim)' },
          { cmd: 'Ctrl+u', desc: 'Yarim sahifa yuqoriga' },
          { cmd: 'Ctrl+d', desc: 'Yarim sahifa pastga' },
          { cmd: 'Ctrl+f', desc: 'To\'liq sahifa oldinga' },
          { cmd: 'Ctrl+b', desc: 'To\'liq sahifa orqaga' }
        ],
        doc: 'Katta fayllarda navigatsiya uchun gg/G va Ctrl bilan birgalikda foydalaning.'
      }
    ]
  },
  editing: {
    title: 'Tahrirlash',
    lessons: [
      {
        id: 'e1',
        title: 'O\'chirish',
        desc: 'Matn o\'chirish buyruqlari',
        commands: [
          { cmd: 'x', desc: 'Belgi o\'chirish' },
          { cmd: 'dd', desc: 'Qatorni o\'chirish' },
          { cmd: 'dw', desc: 'So\'zni o\'chirish' },
          { cmd: 'd$', desc: 'Qator oxirigacha o\'chirish' },
          { cmd: 'D', desc: 'Qator oxirigacha o\'chirish (qisqa)' },
          { cmd: '5dd', desc: '5 ta qatorni o\'chirish' }
        ],
        doc: 'd - delete buyruqi. Harakat buyruqlari bilan birgalikda ishlatiladi: dw (so\'zni o\'chir), dd (qatorni o\'chir).'
      },
      {
        id: 'e2',
        title: 'Nusxa olish va joylashtirish',
        desc: 'Copy-paste operatsiyalari',
        commands: [
          { cmd: 'yy', desc: 'Qatorni nusxa olish' },
          { cmd: 'yw', desc: 'So\'zni nusxa olish' },
          { cmd: 'y$', desc: 'Qator oxirigacha nusxa' },
          { cmd: 'p', desc: 'Kursor keyin joylashtirish' },
          { cmd: 'P', desc: 'Kursor oldin joylashtirish' },
          { cmd: '"ayy', desc: 'Qatorni a registeriga nusxa' },
          { cmd: '"ap', desc: 'a registeridan joylashtirish' }
        ],
        doc: 'y - yank (nusxa), p - paste (joylashtirish). Visual rejimda belgilab y bosing, keyin p bilan joylashtiring.'
      },
      {
        id: 'e3',
        title: 'O\'zgartirish',
        desc: 'Matnni o\'zgartirish',
        commands: [
          { cmd: 'cw', desc: 'So\'zni o\'zgartirish' },
          { cmd: 'cc', desc: 'Qatorni o\'zgartirish' },
          { cmd: 'C', desc: 'Qator oxirigacha o\'zgartirish' },
          { cmd: 'r', desc: 'Bitta belgini almashtirish' },
          { cmd: 'R', desc: 'Replace rejimi' },
          { cmd: '~', desc: 'Katta/kichik harfga o\'zgartirish' }
        ],
        doc: 'c - change buyruqi. O\'chiradi va insert rejimga o\'tadi. cw - so\'zni o\'zgartirish, cc - qatorni o\'zgartirish.'
      },
      {
        id: 'e4',
        title: 'Bekor qilish va qaytarish',
        desc: 'Undo va redo operatsiyalari',
        commands: [
          { cmd: 'u', desc: 'Bekor qilish (undo)' },
          { cmd: 'Ctrl+r', desc: 'Qaytarish (redo)' },
          { cmd: 'U', desc: 'Qatorni asl holatiga qaytarish' },
          { cmd: '.', desc: 'Oxirgi o\'zgarishni takrorlash' },
          { cmd: '10.', desc: 'Oxirgi o\'zgarishni 10 marta takrorlash' }
        ],
        doc: '. (nuqta) - Vim ning eng kuchli xususiyatlaridan biri. Oxirgi o\'zgarishni takrorlaydi.'
      }
    ]
  },
  search: {
    title: 'Qidiruv va almashtirish',
    lessons: [
      {
        id: 's1',
        title: 'Qidiruv',
        desc: 'Faylda qidiruv',
        commands: [
          { cmd: '/matn', desc: 'Oldinga qidirish' },
          { cmd: '?matn', desc: 'Orqaga qidirish' },
          { cmd: 'n', desc: 'Keyingi natija' },
          { cmd: 'N', desc: 'Oldingi natija' },
          { cmd: '*', desc: 'Kursor ostidagi so\'zni qidirish (oldinga)' },
          { cmd: '#', desc: 'Kursor ostidagi so\'zni qidirish (orqaga)' }
        ],
        doc: 'Qidiruvda regex (regular expressions) ishlatishingiz mumkin. /\\<word\\> - faqat to\'liq so\'zni topadi.'
      },
      {
        id: 's2',
        title: 'Almashtirish',
        desc: 'Matnni topish va almashtirish',
        commands: [
          { cmd: ':%s/old/new/g', desc: 'Barcha faylda almashtirish' },
          { cmd: ':s/old/new/g', desc: 'Joriy qatorda almashtirish' },
          { cmd: ':%s/old/new/gc', desc: 'Tasdiqlash bilan almashtirish' },
          { cmd: ':10,20s/old/new/g', desc: '10-20 qatorlarda almashtirish' },
          { cmd: ":'<,'>s/old/new/g", desc: 'Belgilangan joyda almashtirish' }
        ],
        doc: 's - substitute buyruqi. g - global (qatordagi barcha), c - confirm (tasdiqlash bilan).'
      },
      {
        id: 's3',
        title: 'Belgi qidirish',
        desc: 'Qator ichida belgi topish',
        commands: [
          { cmd: 'f<char>', desc: 'Keyingi <char> belgiga' },
          { cmd: 'F<char>', desc: 'Oldingi <char> belgiga' },
          { cmd: 't<char>', desc: '<char> dan oldingi belgiga' },
          { cmd: 'T<char>', desc: '<char> dan keyingi belgiga (orqaga)' },
          { cmd: ';', desc: 'Harakatni takrorlash' },
          { cmd: ',', desc: 'Harakatni teskari takrorlash' }
        ],
        doc: 'f/t buyruqlari qator ichida juda tez navigatsiya imkonini beradi. ; bilan takrorlang.'
      }
    ]
  },
  files: {
    title: 'Fayl bilan ishlash',
    lessons: [
      {
        id: 'f1',
        title: 'Saqlash va ochish',
        desc: 'Fayl operatsiyalari',
        commands: [
          { cmd: ':w', desc: 'Faylni saqlash' },
          { cmd: ':w fayl.txt', desc: 'Yangi nom bilan saqlash' },
          { cmd: ':w!', desc: 'Majburiy saqlash' },
          { cmd: ':e fayl.txt', desc: 'Faylni ochish' },
          { cmd: ':e!', desc: 'Qayta yuklash (o\'zgarishlarni bekor qilish)' },
          { cmd: ':r fayl.txt', desc: 'Fayl mazmunini qo\'shish' }
        ],
        doc: 'w - write (saqlash), e - edit (ochish). ! belgisi majburiy bajarishni bildiradi.'
      },
      {
        id: 'f2',
        title: 'Buffer lar',
        desc: 'Ochiq fayllar bilan ishlash',
        commands: [
          { cmd: ':ls', desc: 'Barcha bufferlarni ko\'rsatish' },
          { cmd: ':b<n>', desc: 'n-bufferga o\'tish' },
          { cmd: ':bn', desc: 'Keyingi bufferga' },
          { cmd: ':bp', desc: 'Oldingi bufferga' },
          { cmd: ':bd', desc: 'Bufferni yopish' },
          { cmd: ':ball', desc: 'Barcha bufferlarni ochish' }
        ],
        doc: 'Bufferlar - bu xotirada ochiq fayllar. Bir vaqtning o\'zida ko\'plab fayllar bilan ishlashingiz mumkin.'
      },
      {
        id: 'f3',
        title: 'Oynalar (Windows)',
        desc: 'Ekranni bo\'lish',
        commands: [
          { cmd: ':split', desc: 'Gorizontal bo\'lish' },
          { cmd: ':vsplit', desc: 'Vertikal bo\'lish' },
          { cmd: 'Ctrl+w w', desc: 'Keyingi oynaga o\'tish' },
          { cmd: 'Ctrl+w h/j/k/l', desc: 'Yo\'nalish bo\'yicha o\'tish' },
          { cmd: 'Ctrl+w q', desc: 'Oynani yopish' },
          { cmd: 'Ctrl+w =', desc: 'Oynalarni teng qilish' }
        ],
        doc: 'Oynalar ekranni bo\'lib, bir vaqtda bir nechta fayllarni ko\'rishga imkon beradi.'
      },
      {
        id: 'f4',
        title: 'Tab lar',
        desc: 'Tab larda ishlash',
        commands: [
          { cmd: ':tabnew', desc: 'Yangi tab ochish' },
          { cmd: ':tabedit fayl.txt', desc: 'Faylni yangi tabda ochish' },
          { cmd: 'gt', desc: 'Keyingi tabga' },
          { cmd: 'gT', desc: 'Oldingi tabga' },
          { cmd: ':tabclose', desc: 'Tabni yopish' },
          { cmd: ':tabonly', desc: 'Faqat joriy tabni qoldirish' }
        ],
        doc: 'Tab lar - bu alohida ish joylar. Browser tab lariga o\'xshaydi.'
      }
    ]
  },
  advanced: {
    title: 'Ilg\'or imkoniyatlar',
    lessons: [
      {
        id: 'a1',
        title: 'Makrolar',
        desc: 'Harakatlarni yozish va takrorlash',
        commands: [
          { cmd: 'qa', desc: 'a registeriga makro yozishni boshlash' },
          { cmd: 'q', desc: 'Yozishni to\'xtatish' },
          { cmd: '@a', desc: 'a makrosini bajarish' },
          { cmd: '@@', desc: 'Oxirgi makroni takrorlash' },
          { cmd: '100@a', desc: 'Makroni 100 marta bajarish' }
        ],
        doc: 'Makrolar - takrorlanadigan vazifalarni avtomatlashtirish uchun eng kuchli vosita. Bir marta yozib, ko\'p marta ishlating!'
      },
      {
        id: 'a2',
        title: 'Registers',
        desc: 'Ma\'lumotlarni saqlash joylari',
        commands: [
          { cmd: '"ayy', desc: 'Qatorni a registeriga nusxa olish' },
          { cmd: '"ap', desc: 'a registeridan joylashtirish' },
          { cmd: ':reg', desc: 'Barcha registerlarni ko\'rish' },
          { cmd: '"+y', desc: 'Sistema clipboard ga nusxa' },
          { cmd: '"+p', desc: 'Sistema clipboard dan joylashtirish' }
        ],
        doc: 'Vim da 26 ta nomlangan register (a-z) va maxsus registerlar bor. "+ - sistema clipboard.'
      },
      {
        id: 'a3',
        title: 'Marks',
        desc: 'Joylarga belgi qo\'yish',
        commands: [
          { cmd: 'ma', desc: 'a belgisini qo\'yish' },
          { cmd: '\'a', desc: 'a belgisiga o\'tish (qator boshi)' },
          { cmd: '`a', desc: 'a belgisiga o\'tish (aniq joy)' },
          { cmd: ':marks', desc: 'Barcha belgilarni ko\'rish' },
          { cmd: '\'\'', desc: 'Oldingi joyga qaytish' }
        ],
        doc: 'Marks - fayl ichida muhim joylarga belgi qo\'yish. Kichik harflar - joriy fayl, katta harflar - global.'
      },
      {
        id: 'a4',
        title: 'Tashqi buyruqlar',
        desc: 'Shell buyruqlarini bajarish',
        commands: [
          { cmd: ':!ls', desc: 'ls buyrug\'ini bajarish' },
          { cmd: ':r!date', desc: 'date natijasini faylga qo\'shish' },
          { cmd: ':.!sh', desc: 'Joriy qatorni shell da bajarish' },
          { cmd: ':10,20!sort', desc: '10-20 qatorlarni sort qilish' }
        ],
        doc: '! belgisi bilan tashqi shell buyruqlarini bajarishingiz va natijalarni Vim ga olib kirishingiz mumkin.'
      }
    ]
  },
  neovim: {
    title: 'Neovim - zamonaviy Vim',
    lessons: [
      {
        id: 'nv1',
        title: 'Neovim nima?',
        desc: 'Vim ning zamonaviy versiyasi',
        commands: [
          { cmd: 'nvim', desc: 'Neovim ni ishga tushirish' },
          { cmd: ':checkhealth', desc: 'Tizimni tekshirish' },
          { cmd: ':version', desc: 'Versiyani ko\'rish' }
        ],
        doc: 'Neovim - Vim ning refaktorlangan versiyasi. Lua konfiguratsiyasi, LSP support, yanada yaxshi API va zamonaviy plugin lar.'
      },
      {
        id: 'nv2',
        title: 'Konfiguratsiya (Lua)',
        desc: 'Lua bilan sozlash',
        commands: [
          { cmd: 'vim.opt.number = true', desc: 'Qator raqamlarini yoqish' },
          { cmd: 'vim.opt.relativenumber = true', desc: 'Nisbiy raqamlar' },
          { cmd: 'vim.g.mapleader = " "', desc: 'Leader tugmasini o\'rnatish' },
          { cmd: 'vim.keymap.set("n", "<C-s>", ":w<CR>")', desc: 'Keymap qo\'shish' }
        ],
        doc: 'Neovim da Lua orqali konfiguratsiya yanada qulay. ~/.config/nvim/init.lua - asosiy fayl.'
      },
      {
        id: 'nv3',
        title: 'LSP (Language Server Protocol)',
        desc: 'Zamonaviy IDE xususiyatlari',
        commands: [
          { cmd: 'gd', desc: 'Go to definition' },
          { cmd: 'K', desc: 'Hover hujjat' },
          { cmd: 'gr', desc: 'Go to references' },
          { cmd: '<leader>rn', desc: 'Rename' },
          { cmd: '<leader>ca', desc: 'Code action' }
        ],
        doc: 'LSP orqali Neovim da autocomplete, go to definition, linting va boshqa IDE xususiyatlari mavjud.'
      },
      {
        id: 'nv4',
        title: 'Plugin Manager',
        desc: 'Plugin larni boshqarish',
        commands: [
          { cmd: ':Lazy', desc: 'Lazy.nvim UI ni ochish' },
          { cmd: ':Lazy install', desc: 'Plugin larni o\'rnatish' },
          { cmd: ':Lazy update', desc: 'Yangilash' },
          { cmd: ':Lazy clean', desc: 'Tozalash' }
        ],
        doc: 'Lazy.nvim - mashhur plugin manager. Tez, lazy loading va qulay UI bilan.'
      }
    ]
  },
  cheatsheet: {
    title: 'Cheatsheet - Tez havolalar',
    lessons: [
      {
        id: 'cs1',
        title: 'Eng zarur buyruqlar',
        desc: 'Har kuni ishlatiladigan buyruqlar',
        commands: [
          { cmd: 'i / a / o', desc: 'Insert rejimga o\'tish' },
          { cmd: 'ESC', desc: 'Normal rejimga qaytish' },
          { cmd: 'dd', desc: 'Qatorni o\'chirish' },
          { cmd: 'yy', desc: 'Qatorni nusxa olish' },
          { cmd: 'p', desc: 'Joylashtirish' },
          { cmd: 'u', desc: 'Bekor qilish' },
          { cmd: ':w', desc: 'Saqlash' },
          { cmd: ':q', desc: 'Chiqish' }
        ],
        doc: 'Bu buyruqlar bilan 80% vazifalarni bajarishingiz mumkin. Bularni yoddan bilib oling!'
      },
      {
        id: 'cs2',
        title: 'Kombinatsiyalar',
        desc: 'Kuchli buyruq kombinatsiyalari',
        commands: [
          { cmd: 'ci"', desc: 'Qo\'shtirnoq ichidagi matnni o\'zgartirish' },
          { cmd: 'di{', desc: 'Qavslar ichidagi matnni o\'chirish' },
          { cmd: 'yi(', desc: 'Qavslar ichidagi matnni nusxa olish' },
          { cmd: 'va"', desc: 'Qo\'shtirnoq bilan birga belgilash' },
          { cmd: 'gUiw', desc: 'So\'zni katta harfga' },
          { cmd: 'guiw', desc: 'So\'zni kichik harfga' }
        ],
        doc: 'Operator + Text Object kombinatsiyalari - Vim ning eng kuchli xususiyati. Masalan: ci" - change inside quotes.'
      },
      {
        id: 'cs3',
        title: 'Tezlik maslahatlari',
        desc: 'Samaradorlikni oshirish',
        commands: [
          { cmd: '.', desc: 'Oxirgi o\'zgarishni takrorlash' },
          { cmd: '*', desc: 'Kursor ostidagi so\'zni qidirish' },
          { cmd: 'Ctrl+n', desc: 'So\'zni avtomatik to\'ldirish' },
          { cmd: '%', desc: 'Mos keluvchi qavs/qatnov ga sakrash' },
          { cmd: 'zt / zz / zb', desc: 'Ekranni yuqori/o\'rta/pastga o\'tkazish' }
        ],
        doc: 'Bu buyruqlarni o\'rganish ish tezligingizni sezilarli darajada oshiradi!'
      }
    ]
  }
};

export default content;
