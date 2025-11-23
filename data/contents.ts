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
    editor: boolean;
  };
}

const content: Content = {
  basics: {
    title: 'Vim asoslari',
    editor: true,
    lessons: [
      {
        id: 'b1',
        title: 'Vim nima?',
        desc: 'Terminalda ishlaydigan eng tezkor va kuchli matn muharriri',
        commands: [
          { cmd: 'vim', desc: 'Vimni ishga tushirish' },
          { cmd: 'vim fayl.txt', desc: 'Fayl ochish' }
        ],
        doc: 'Vim – oddiy Notepad emas. Bu klaviatura bilan boshqariladigan super qurol. 1991-yilda Bram Moolenaar yaratgan va hali ham millionlab dasturchilarning asosiy vositasi.'
      },
      {
        id: 'b2',
        title: 'Vimdan chiqish (hayotni saqlab qoluvchi dars)',
        desc: 'Chiqa olmasang – hech narsa o‘rganmaysan',
        commands: [
          { cmd: ':q', desc: 'Oddiy chiqish' },
          { cmd: ':q!', desc: 'Majburan chiqish (hammasini tashlab)' },
          { cmd: ':wq', desc: 'Saqlab chiqish' },
          { cmd: ':x', desc: 'Saqlab chiqish (qisqacha)' },
          { cmd: 'ZZ', desc: 'Saqlab chiqish (Shift+Z+Z)' }
        ],
        doc: 'Yangi odamlarning 99% birinchi marta ochib, chiqa olmay qoladi. ESC → :q → Enter. Mana shu bilan hayoting osonlashadi!'
      },
      {
        id: 'b3',
        title: 'Yordam tizimi – :help',
        desc: 'Vim o‘zida to‘liq qo‘llanma olib yuradi',
        commands: [
          { cmd: ':help', desc: 'Umumiy yordam' },
          { cmd: ':help dd', desc: 'Muayyan buyruq haqida' },
          { cmd: ':help navigation', desc: 'Mavzu bo‘yicha' },
          { cmd: 'Ctrl+]', desc: 'Havolaga o‘tish' },
          { cmd: 'Ctrl+o', desc: 'Orqaga qaytish' }
        ],
        doc: 'Vimning :help’i – dunyodagi eng yaxshi darslik. Har narsani shu yerda topasan.'
      },
      {
        id: 'b4',
        title: '.vimrc – shaxsiy sozlamalaring',
        desc: 'Vimni o‘zingga moslashtirish',
        commands: [
          { cmd: ':e ~/.vimrc', desc: 'Sozlamalar faylini ochish' },
          { cmd: ':source ~/.vimrc', desc: 'Sozlamalarni qayta yuklash' },
          { cmd: 'set number', desc: 'Qator raqamlari' },
          { cmd: 'set relativenumber', desc: 'Nisbiy raqamlar' },
          { cmd: 'syntax on', desc: 'Kod ranglashi' }
        ],
        doc: 'Linux/Mac → ~/.vimrc, Windows → ~/_vimrc. Bu faylda Vimni o‘zingga qulay qilib sozlab olasan.'
      }
    ]
  },

  neovim: {
    title: "Neovim – Zamonaviy Vim (Birinchi qadam!)",
    editor: false,
    lessons: [
      {
        id: "neo1",
        title: "Neovim nima va nega 2025-yilda faqat shuni o‘rganamiz?",
        desc: "VS Code’dan 10 baravar tezroq va kuchliroq muharrir",
        doc: "Neovim – Vimning yangi avlodi. 2014-yilda boshlangan, hozir butun dunyoda eng mashhur muharrir. Lua bilan sozlash, LSP (avto-to‘ldirish, xato ko‘rsatish), Tree-sitter (to‘g‘ri kod ranglashi), async ishlaydi. O‘zbek dasturchilarning 95%+ faqat Neovim ishlatadi. VS Code sekinlashganda – hammasi Neovimga o‘tadi!"
      },
      {
        id: "neo2",
        title: "NitroVim – Tayyor, chiroyli Neovim (2 daqiqada IDE tayyor!)",
        desc: "Bitta buyruq – to‘liq zamonaviy IDE",
        commands: [
          { cmd: "winget install Neovim.Neovim", desc: "Windows – Neovim o‘rnatish" },
          { cmd: "git clone https://github.com/usmonovshohruxmirzo/nitrovim \"$env:LOCALAPPDATA\\nvim\"", desc: "Windows PowerShell" },
          { cmd: "git clone https://github.com/usmonovshohruxmirzo/nitrovim ~/.config/nvim", desc: "Linux / macOS" },
          { cmd: "nvim", desc: "Birinchi marta och – pluginlar avto o‘rnatiladi" }
        ],
        doc: "Birinchi ochganda Lazy 2-3 daqiqada hamma narsani o‘rnatadi: LSP, Telescope, Tree-sitter, Git belgilari, chiroyli statusline, avto-to‘ldirish – hammasi tayyor! Keyin faqat kod yozasan."
      },
      {
        id: "neo3",
        title: "LSP – VS Code kabi funksiyalar Neovimda",
        desc: "Endi xato yozib bo‘lmaydi",
        commands: [
          { cmd: "gd", desc: "Funksiya/o‘zgaruvchi ta’rifiga o‘tish" },
          { cmd: "K", desc: "Hover – hujjat ko‘rish" },
          { cmd: "gr", desc: "Bu nom qayerda ishlatilgan?" },
          { cmd: "<leader>rn", desc: "O‘zgaruvchi nomini o‘zgartirish" },
          { cmd: "<leader>ca", desc: "Avto-tuzatish takliflari" }
        ],
        doc: "JavaScript, TypeScript, Python, Go, Rust – hammasida ishlaydi. NitroVim’da hammasi oldindan sozlangan!"
      }
    ]
  },

  nitrovim: {
    title: 'NitroVim o‘rnatish',
    editor: false,
    lessons: [
      {
        id: 'i1',
        title: 'NitroVim nima?',
        desc: 'Tez, zamonaviy va chiroyli Vim konfiguratsiyasi',
        doc: 'NitroVim – men shaxsiy ishlatadigan, eng tezkor va qulay Vim/Neovim sozlamasi. Tayyor pluginlar, LSP, Tree-sitter va chiroyli ko‘rinish – hammasi bir joyda.'
      },
      {
        id: 'i2',
        title: 'O‘rnatish (2 daqiqada)',
        desc: 'Bitta buyruq bilan tayyor',
        commands: [
          { cmd: 'winget install Neovim.Neovim', desc: 'Windows – Neovim o‘rnatish' },
          { cmd: 'git clone https://github.com/usmonovshohruxmirzo/nitrovim "$env:LOCALAPPDATA\\nvim"', desc: 'Windows (PowerShell)' },
          { cmd: 'git clone https://github.com/usmonovshohruxmirzo/nitrovim ~/.config/nvim', desc: 'Linux / macOS' },
          { cmd: 'nvim', desc: 'Ishga tushirish – birinchi marta pluginlar o‘rnatiladi' }
        ],
        doc: 'O‘rnatgandan keyin bir marta nvim och – Lazy avtomatik barcha pluginlarni o‘rnating. Keyin endi faqat ishla!'
      }
    ]
  },

  modes: {
    title: 'Vim rejimlari',
    editor: false,
    lessons: [
      {
        id: 'm1',
        title: 'Normal rejim – asosiy rejim',
        desc: 'Bu yerda matn yozmaysan, buyruq berasan',
        commands: [
          { cmd: 'ESC', desc: 'Har doim Normal rejimga qaytish' },
          { cmd: 'i', desc: 'Insert rejimga kirish' },
          { cmd: 'v', desc: 'Visual rejim' },
          { cmd: ':', desc: 'Command rejim' }
        ],
        doc: 'Normal rejim – Vimning yuragi. Bu yerda klaviatura sehrli bo‘lib qoladi.'
      },
      {
        id: 'm2',
        title: 'Insert rejim – oddiy yozish',
        desc: 'Bu yerda oddiy Notepad kabi yozasan',
        commands: [
          { cmd: 'i', desc: 'Kursor oldidan' },
          { cmd: 'a', desc: 'Kursor keyin' },
          { cmd: 'I', desc: 'Qator boshi' },
          { cmd: 'A', desc: 'Qator oxiri' },
          { cmd: 'o', desc: 'Pastda yangi qator' },
          { cmd: 'O', desc: 'Yuqorida yangi qator' }
        ],
        doc: 'Insert rejimda bo‘lganingda – oddiy odam bo‘lasan. Normal rejimda – superqahramon.'
      },
      {
        id: 'm3',
        title: 'Visual rejim – matn belgilash',
        desc: 'Matnni kursormi sichqoncha kabi belgilaysan',
        commands: [
          { cmd: 'v', desc: 'Belgidan belgiga' },
          { cmd: 'V', desc: 'To‘liq qatorlar' },
          { cmd: 'Ctrl+v', desc: 'Blok (ustun) belgilash' },
          { cmd: 'gv', desc: 'Oldin belgilagan joyni qayta tanlash' }
        ],
        doc: 'Visual rejimda belgilab, keyin d, y, c kabi buyruqlar berasan.'
      },
      {
        id: 'm4',
        title: 'Command rejim – Ex buyruqlar',
        desc: ': bilan boshlanadigan kuchli buyruqlar',
        commands: [
          { cmd: ':w', desc: 'Saqlash' },
          { cmd: ':q', desc: 'Chiqish' },
          { cmd: ':e fayl.js', desc: 'Yangi fayl ochish' },
          { cmd: ':%s/esa/ham/g', desc: 'Hammasini almashtirish' }
        ],
        doc: 'Bu rejimda Vim to‘liq terminal buyruq interpretatoriga aylanadi.'
      }
    ]
  },

  navigation: {
    title: 'Navigatsiya – kursorni uchar qilish',
    editor: true,
    lessons: [
      {
        id: 'n1',
        title: 'Asosiy harakat – hjkl',
        desc: 'Sichqonchani unut!',
        commands: [
          { cmd: 'h', desc: 'Chap' },
          { cmd: 'j', desc: 'Past' },
          { cmd: 'k', desc: 'Yuqori' },
          { cmd: 'l', desc: 'O‘ng' },
          { cmd: '5j', desc: '5 qator pastga' },
          { cmd: '10k', desc: '10 qator yuqoriga' }
        ],
        doc: 'Birinchi haftada hjkl ni yodla, keyin sichqonchani tashlab yuborasan.'
      },
      {
        id: 'n2',
        title: 'So‘zlar orasida sakrash',
        desc: 'w b e – eng tez harakat',
        commands: [
          { cmd: 'w', desc: 'Keyingi so‘z boshi' },
          { cmd: 'b', desc: 'Oldingi so‘z boshi' },
          { cmd: 'e', desc: 'So‘z oxiri' },
          { cmd: 'W B E', desc: 'Katta so‘zlar (vergul, nuqta bilan ajratilgan)' }
        ],
        doc: 'Kod yozganda 90% harakat w va b bilan bo‘ladi.'
      },
      {
        id: 'n3',
        title: 'Qator ichida sakrash',
        desc: '0 $ ^ f t – qator ichidagi ninja harakatlar',
        commands: [
          { cmd: '0', desc: 'Qator boshi' },
          { cmd: '$', desc: 'Qator oxiri' },
          { cmd: '^', desc: 'Birinchi harf' },
          { cmd: 'f)', desc: 'Keyingi ) ga sakrash' },
          { cmd: 't"', desc: '" dan oldinga' },
          { cmd: ';', desc: 'f/t ni takrorlash' },
          { cmd: ',', desc: 'Teskarisiga' }
        ],
        doc: 'f va t – qator ichidagi eng kuchli qurol. ; bilan takrorla – 1 soniyada 50 belgi o‘tib ketasan.'
      },
      {
        id: 'n4',
        title: 'Fayl bo‘ylab sakrash',
        desc: 'gg G Ctrl+u/d – katta fayllar uchun',
        commands: [
          { cmd: 'gg', desc: 'Fayl boshi' },
          { cmd: 'G', desc: 'Fayl oxiri' },
          { cmd: '50G', desc: '50-qatorga' },
          { cmd: 'Ctrl+u', desc: 'Yarim sahifa yuqori' },
          { cmd: 'Ctrl+d', desc: 'Yarim sahifa past' }
        ],
        doc: '10000 qatorlik faylda ham 1 soniyada kerakli joyga yetib borasan.'
      }
    ]
  },

  editing: {
    title: 'Tahrirlash – Vimning sehrli joyi',
    editor: true,
    lessons: [
      {
        id: 'e1',
        title: 'O‘chirish – delete',
        desc: 'x dd dw D – hammasi o‘chadi',
        commands: [
          { cmd: 'x', desc: 'Bitta belgi' },
          { cmd: 'dd', desc: 'To‘liq qator' },
          { cmd: 'dw', desc: 'So‘z' },
          { cmd: 'd$', desc: 'Qator oxirigacha' },
          { cmd: 'D', desc: 'Qator oxirigacha (qisqa)' },
          { cmd: '5dd', desc: '5 qator' }
        ],
        doc: 'd + harakat = o‘chirish. dw, db, d$, d^, df), dt) – hammasi ishlaydi!'
      },
      {
        id: 'e2',
        title: 'Nusxa olish va joylashtirish',
        desc: 'yy p P – copy-paste Vim uslubida',
        commands: [
          { cmd: 'yy', desc: 'Qator nusxa' },
          { cmd: 'yw', desc: 'So‘z nusxa' },
          { cmd: 'y$', desc: 'Qator oxirigacha' },
          { cmd: 'p', desc: 'Kursor keyin' },
          { cmd: 'P', desc: 'Kursor oldin' }
        ],
        doc: 'Visual rejimda belgilab y bos → nusxa ol. p bilan joylashtir.'
      },
      {
        id: 'e3',
        title: 'O‘zgartirish – change',
        desc: 'c + harakat = o‘chir + insert',
        commands: [
          { cmd: 'cw', desc: 'So‘zni o‘zgartir' },
          { cmd: 'cc', desc: 'To‘liq qator' },
          { cmd: 'ciw', desc: 'Kursor ostidagi so‘z (joyidan qatʼiy nazar)' },
          { cmd: 'ci"', desc: 'Qo‘shtirnoq ichidagi matn' },
          { cmd: 'ci(', desc: 'Qavs ichidagi matn' },
          { cmd: 'r', desc: 'Bitta belgi almashtirish' },
          { cmd: '~', desc: 'Katta/kichik harf' }
        ],
        doc: 'ciw – eng sevgan buyruqlarimdan biri. So‘z o‘rtasida tursang ham ishlaydi!'
      },
      {
        id: 'e4',
        title: 'Undo/Redo va nuqta (.)',
        desc: 'u Ctrl+r . – Vimning eng kuchli 3 tugmasi',
        commands: [
          { cmd: 'u', desc: 'Bekor qilish' },
          { cmd: 'Ctrl+r', desc: 'Qaytarish' },
          { cmd: '.', desc: 'Oxirgi o‘zgarishni takrorlash' },
          { cmd: '5.', desc: '5 marta takrorlash' }
        ],
        doc: 'Nuqta (.) – Vimning haqiqiy super quroli. Bir marta to‘g‘ri qil, keyin . bosaver!'
      }
    ]
  },

  search: {
    title: 'Qidiruv va almashtirish',
    editor: true,
    lessons: [
      {
        id: 's1',
        title: 'Oddiy qidiruv',
        desc: '/ va ? – faylda izlash',
        commands: [
          { cmd: '/salom', desc: 'Oldinga qidirish' },
          { cmd: '?salom', desc: 'Orqaga qidirish' },
          { cmd: 'n', desc: 'Keyingi' },
          { cmd: 'N', desc: 'Oldingi' },
          { cmd: '*', desc: 'Kursor ostidagi so‘zni qidir' },
          { cmd: '#', desc: 'Orqaga qidir' }
        ],
        doc: '* – eng qulay buyruq. So‘z ustida tur → * bos → hamma joyda topadi.'
      },
      {
        id: 's2',
        title: 'Almashtirish',
        desc: ':%s – global almashtirish',
        commands: [
          { cmd: ':%s/esa/ham/g', desc: 'Hammasini almashtir' },
          { cmd: ':s/esa/ham/g', desc: 'Faqat joriy qatorda' },
          { cmd: ':%s/esa/ham/gc', desc: 'Tasdiqlab almashtir' }
        ],
        doc: 'gc – confirm. Har bir o‘zgarishni ko‘rib, y/n bosasan.'
      },
      {
        id: 's3',
        title: 'f t – qator ichida ninja',
        desc: 'Eng tez navigatsiya',
        commands: [
          { cmd: 'f)', desc: 'Keyingi ) ga' },
          { cmd: 't)', desc: ') dan oldinga' },
          { cmd: 'F(', desc: 'Oldingi (' },
          { cmd: ';', desc: 'Takrorlash' },
          { cmd: ',', desc: 'Teskarisiga' }
        ],
        doc: 'Bir qator ichida 50 belgi o‘tish uchun 0.3 soniya yetadi.'
      }
    ]
  },

  files: {
    title: 'Fayl va bufferlar bilan ishlash',
    editor: false,
    lessons: [
      {
        id: 'f1',
        title: 'Saqlash va ochish',
        desc: ':w :e :q – asosiy fayl buyruqlari',
        commands: [
          { cmd: ':w', desc: 'Saqlash' },
          { cmd: ':w yangi.txt', desc: 'Yangi nom bilan' },
          { cmd: ':e fayl.js', desc: 'Yangi fayl ochish' },
          { cmd: ':e!', desc: 'O‘zgarishlarni bekor qilib qayta yuklash' }
        ],
        doc: '! – majburiy bajarish belgisi.'
      },
      {
        id: 'f2',
        title: 'Bufferlar – ochiq fayllar',
        desc: 'Bir vaqtda 50 ta fayl ochib ishla!',
        commands: [
          { cmd: ':ls', desc: 'Barcha bufferlar' },
          { cmd: ':b 5', desc: '5-buffer' },
          { cmd: ':bn', desc: 'Keyingi' },
          { cmd: ':bp', desc: 'Oldingi' },
          { cmd: ':bd', desc: 'Yopish' }
        ],
        doc: 'Tablar emas, bufferlar – Vimning haqiqiy kuchi.'
      },
      {
        id: 'f3',
        title: 'Oynalar (split)',
        desc: 'Ekranni bo‘lib ishla',
        commands: [
          { cmd: ':split', desc: 'Gorizontal' },
          { cmd: ':vsplit', desc: 'Vertikal' },
          { cmd: 'Ctrl+w h/j/k/l', desc: 'Oynalar orasida harakat' },
          { cmd: 'Ctrl+w q', desc: 'Oynani yopish' }
        ],
        doc: 'Bir ekranda ikkita fayl – taqqoslash uchun ideal.'
      }
    ]
  },

  advanced: {
    title: 'Ilg‘or imkoniyatlar',
    editor: true,
    lessons: [
      {
        id: 'a1',
        title: 'Makrolar – avtomatlashtirish',
        desc: 'Takrorlanadigan ishni bir marta yoz, ming marta ishlat',
        commands: [
          { cmd: 'qa', desc: 'a registriga yozishni boshlash' },
          { cmd: 'q', desc: 'To‘xtatish' },
          { cmd: '@a', desc: 'Bajarish' },
          { cmd: '@@', desc: 'Oxirgi makroni takrorlash' },
          { cmd: '50@a', desc: '50 marta bajarish' }
        ],
        doc: 'Makrolar – Vimning eng katta sirlari biri.'
      },
      {
        id: 'a2',
        title: 'Registers – nusxalash joylari',
        desc: '"a "b "+ – turli xil buferlar',
        commands: [
          { cmd: '"ayy', desc: 'a registriga nusxa' },
          { cmd: '"ap', desc: 'a registridan joylashtirish' },
          { cmd: '"+yy', desc: 'Sistema clipboard' },
          { cmd: ':reg', desc: 'Barcha registerlarni ko‘rish' }
        ],
        doc: '"+ – Windows/Linux clipboard bilan aloqa.'
      },
      {
        id: 'a3',
        title: 'Text Objects – aqlli tanlash',
        desc: 'ci" di{ yi( va h.k.',
        commands: [
          { cmd: 'ci"', desc: 'Qo‘shtirnoq ichidagi matnni o‘zgartir' },
          { cmd: 'di{', desc: 'Juft qavs ichidagi matnni o‘chir' },
          { cmd: 'yi(', desc: 'Qavs ichidagi matnni nusxa' },
          { cmd: 'vi"', desc: 'Qo‘shtirnoq ichidagi matnni belgilash' },
          { cmd: 'ciw', desc: 'Kursor ostidagi so‘z (joyidan qatʼiy nazar)' }
        ],
        doc: 'Bu kombinatsiyalarni bilgan odam – haqiqiy Vim foydalanuvchisi.'
      }
    ]
  },

  cheatsheet: {
    title: 'Cheatsheet – Tez eslatma',
    editor: true,
    lessons: [
      {
        id: 'cs1',
        title: 'Eng keraklı 10 buyruq',
        desc: 'Bularni yodla – 90% ish bitadi',
        commands: [
          { cmd: 'i a o', desc: 'Yozish rejimiga kirish' },
          { cmd: 'ESC', desc: 'Normal rejimga qaytish' },
          { cmd: 'dd yy p', desc: 'O‘chir, nusxa, joylashtir' },
          { cmd: 'u Ctrl+r', desc: 'Undo / Redo' },
          { cmd: '.', desc: 'Oxirgi amalni takrorlash' },
          { cmd: ':w :q', desc: 'Saqlash va chiqish' },
          { cmd: '*', desc: 'So‘zni qidirish' },
          { cmd: 'ciw', desc: 'So‘zni o‘zgartirish' }
        ],
        doc: 'Shu 10 tasini bil – Vimchi bo‘l!'
      },
      {
        id: 'cs2',
        title: 'Ninja kombinatsiyalar',
        desc: 'Buni bilsang – hammaga ustunlik qilasan',
        commands: [
          { cmd: 'ci"', desc: 'Qo‘shtirnoq ichidagi matn' },
          { cmd: 'di{', desc: 'Qavs ichidagi matn' },
          { cmd: 'ciw', desc: 'So‘z o‘zgartirish' },
          { cmd: 'gUiw', desc: 'So‘zni katta harfga' },
          { cmd: 'guiw', desc: 'So‘zni kichik harfga' },
          { cmd: '%', desc: 'Mos qavs ga sakrash' }
        ],
        doc: 'Bularni 1 haftada o‘rgan – ish tezliging 3 baravar oshadi.'
      }
    ]
  }
};

export default content;
