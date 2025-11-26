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
    title: "Vim asoslari — Birinchi qadamlar",
    editor: true,
    lessons: [
      {
        id: "b1",
        title: "Vim nima va nega uni o‘rganish kerak?",
        desc: "Terminaldagi eng tezkor va kuchli matn muharriri",
        commands: [
          { cmd: "vim", desc: "Vimni ishga tushirish" },
          { cmd: "vim fayl.js", desc: "Muayyan faylni ochish" },
          { cmd: "vim +100 fayl.js", desc: "Faylni ochib 100-qatorga o‘tish" },
          { cmd: "vimtutor", desc: "Rasmiy interaktiv darslik — majburiy!" }
        ],
        doc: "Vim 1991-yilda yaratilgan, lekin 2025-yilda ham millionlab dasturchilarning asosiy quroli. Klaviatura bilan 100% boshqariladi, sichqoncha deyarli kerak emas. Neovim bilan birga VS Code’dan 5-10 baravar tez ishlaydi."
      },
      {
        id: "b2",
        title: "Vimdan chiqish — Hayotni saqlab qoluvchi bilim",
        desc: "99% yangi odamlar shu yerda tiqilib qoladi",
        commands: [
          { cmd: ":q", desc: "O‘zgarish bo‘lmasa oddiy chiqish" },
          { cmd: ":q!", desc: "Barcha o‘zgarishlarni tashlab majburan chiqish" },
          { cmd: ":wq", desc: "Faylni saqlab chiqish" },
          { cmd: ":x", desc: "Saqlab chiqish (qisqacha versiya)" },
          { cmd: "ZZ", desc: "Normal rejimda tez saqlab chiqish (Shift+Z+Z)" },
          { cmd: "ZQ", desc: "Normal rejimda saqlamay chiqish" }
        ],
        doc: "Eng muhimi: ESC → :q → Enter. Shu bilan birinchi jangda g‘alaba qozoniladi!"
      },
      {
        id: "b3",
        title: ":help — Vimning ichidagi eng zo‘r kitob",
        desc: "Internet kerak emas, hamma narsa ichida",
        commands: [
          { cmd: ":help", desc: "Umumiy yordam sahifasini ochish" },
          { cmd: ":help dd", desc: "Muayyan buyruq haqida ma’lumot" },
          { cmd: ":help navigation", desc: "Mavzu bo‘yicha qidirish" },
          { cmd: "Ctrl+]", desc: "Hujjat ichidagi havolaga o‘tish" },
          { cmd: "Ctrl+o", desc: "Oldingi sahifaga qaytish" },
          { cmd: "Ctrl+t", desc: "Oldinga qaytish (tag stack)" },
          { cmd: ":helpgrep makro", desc: "Butun hujjat bo‘yicha qidirish" }
        ],
        doc: "Vimning :help tizimi dunyodagi eng mukammal hujjatlashtirilgan dasturlardan biri. Har bir savolga javob bor."
      },
      {
        id: "b4",
        title: "Sozlamalar — .vimrc va init.lua",
        desc: "Vimni o‘zingga 100% moslashtir",
        commands: [
          { cmd: ":e ~/.vimrc", desc: "Klassik Vim sozlamalar faylini ochish" },
          { cmd: ":e ~/.config/nvim/init.lua", desc: "Neovim uchun zamonaviy Lua sozlamalari" },
          { cmd: "set number relativenumber", desc: "Qator raqamlari + nisbiy raqamlar" },
          { cmd: "set mouse=a", desc: "Sichqonchani yoqish (istagan bo‘lsa)" },
          { cmd: "set clipboard=unnamedplus", desc: "Sistema buferi bilan avto aloqa" },
          { cmd: "set ignorecase smartcase", desc: "Katta-kichik harfni aqliy qidirish" }
        ],
        doc: "Neovimda endi Lua tilida sozlanadi — bu to‘liq dasturlash tili, Vimscriptdan ming marta kuchliroq."
      }
    ]
  },

  neovim: {
    title: "Neovim — 2025-yilda faqat shuni o‘rganamiz",
    editor: false,
    lessons: [
      {
        id: "neo1",
        title: "Neovim nima",
        desc: "Vimning zamonaviy, tez va kengaytiriladigan avlodi",
        doc: "Neovim (2014-yildan) — Vimning to‘liq qayta yozilgan versiyasi.\n\nAsosiy afzalliklari:\n• Lua bilan sozlash (init.lua)\n• O‘rnatilgan LSP, Tree-sitter, Terminal\n• Asinxron pluginlar (hech qachon sekinlashmaydi)\n• Floating windows, pop-up menyular\n• 2025-yilda 95%+ professional dasturchilar Neovim ishlatadi\nVS Code sekinlashganda — hammasi shu yerga keladi!"
      },
      {
        id: "neo2",
        title: "LSP — VS Code kabi aqlli funksiyalar",
        desc: "Endi xato yozish deyarli imkonsiz",
        commands: [
          { cmd: "gd", desc: "Funksiya/o‘zgaruvchi ta’rifiga o‘tish" },
          { cmd: "gD", desc: "Tur ta’rifiga o‘tish (declaration)" },
          { cmd: "gr", desc: "Barcha ishlatilgan joylarni ko‘rish (references)" },
          { cmd: "gi", desc: "Implementatsiyaga o‘tish" },
          { cmd: "K", desc: "Hover — hujjat va tur ma’lumotini ko‘rish" },
          { cmd: "<leader>rn", desc: "Nomni o‘zgartirish (rename)" },
          { cmd: "<leader>ca", desc: "Kod amallari (quick fix, refactor)" },
          { cmd: "<leader>f", desc: "Faylni avto formatlash" },
          { cmd: "[d", desc: "Oldingi diagnostik xatoga o‘tish" },
          { cmd: "]d", desc: "Keyingi diagnostik xatoga o‘tish" }
        ],
        doc: "TypeScript, Python, Go, Rust, Zig — hammasida ishlaydi. Neovim + LSP = to‘liq IDE, lekin 50 MB emas, 50 KB!"
      },
      {
        id: "neo3",
        title: "Tree-sitter — Kodni haqiqatdan tushunadigan ranglash",
        desc: "Endi JavaScript ichidagi HTML/CSS ham to‘g‘ri ranglanadi",
        doc: "Tree-sitter — kodning haqiqiy tuzilishini (AST) tahlil qiladi:\n• To‘g‘ri sintaksis ranglashi\n• To‘g‘ri kod katlash (folding)\n• Text objects (ci), di{ va h.k.)\n• Incremental parsing — juda tez\nNatija: 10 yillik regex xatolari yo‘q!"
      },
      {
        id: "neo4",
        title: "Lua bilan sozlash — init.lua",
        desc: "Endi Vimscript emas, to‘liq dasturlash tili",
        doc: "Neovimda sozlamalar Lua tilida yoziladi:\n\nvim.opt.number = true\nvim.g.mapleader = \" \"\nrequire(\"lazy\").setup(\"plugins\")\n\nBu yerda o‘z funksiyalaringizni yozasiz, pluginlarni boshqarasiz, avtomatlashtirasiz."
      }
    ]
  },

  nitrovim: {
    title: "NitroVim — Tayyor, eng tezkor Neovim konfiguratsiyasi",
    editor: false,
    lessons: [
      {
        id: "i1",
        title: "NitroVim nima?",
        desc: "Men shaxsiy ishlatadigan, dunyodagi eng tezkor Neovim sozlamasi",
        doc: "NitroVim — 2025-yilda o‘zbek dasturchilar orasida eng mashhur tayyor konfiguratsiya.\n\nNimalar bor?\n• Lazy.nvim (eng tez plugin menejeri)\n• LSP + Mason (avto o‘rnatish)\n• Tree-sitter (to‘g‘ri ranglash)\n• Telescope (tezkor qidiruv)\n• LuaLine, WhichKey, AutoPairs, Comment.nvim\n• Chiroyli TokyoNight tema\n• <leader> bilan boshqariladigan 100+ qo‘shimcha buyruq\nBir so‘z bilan aytganda: o‘rnatding va darrov professional IDE olding!"
      },
      {
        id: "i2",
        title: "O‘rnatish (2 daqiqada tayyor!)",
        desc: "Bitta buyruq bilan hammasi o‘rnatiladi",
        commands: [
          { cmd: "winget install Neovim.Neovim", desc: "Windows — Neovim o‘rnatish" },
          { cmd: "brew install neovim", desc: "macOS — Neovim o‘rnatish" },
          { cmd: "sudo apt install neovim", desc: "Ubuntu/Debian — Neovim o‘rnatish" },
          { cmd: "git clone https://github.com/usmonovshohruxmirzo/nitrovim.git \"$env:LOCALAPPDATA\\nvim\" --depth 1", desc: "Windows PowerShell" },
          { cmd: "git clone https://github.com/usmonovshohruxmirzo/nitrovim.git ~/.config/nvim --depth 1", desc: "Linux/macOS" },
          { cmd: "nvim", desc: "Birinchi marta och → Lazy avto barcha pluginlarni o‘rnatadi" }
        ],
        doc: "O‘rnatgandan keyin bir marta nvim ochasan → 30-60 soniyada barcha pluginlar o‘rnatiladi → endi faqat ishla!\nGitHub: github.com/usmonovshohruxmirzo/nitrovim"
      }
    ]
  },

  modes: {
    title: "Vim rejimlari — Vimning yuragi",
    editor: false,
    lessons: [
      {
        id: "m1",
        title: "Normal rejim — Buyruq berish markazi",
        desc: "Bu yerda matn yozmaysan, buyruq berasan",
        commands: [
          { cmd: "ESC", desc: "Har qanday rejimdan Normal rejimga qaytish" },
          { cmd: "Ctrl+[", desc: "ESC o‘rniga (tezroq bosiladi)" },
          { cmd: "i", desc: "Insert rejimga kirish (kursor oldidan)" },
          { cmd: "v", desc: "Visual rejim (belgi bo‘yicha)" },
          { cmd: "V", desc: "Visual Line rejim (qator bo‘yicha)" },
          { cmd: "Ctrl+v", desc: "Visual Block rejim (ustun bo‘yicha)" },
          { cmd: ":", desc: "Command-line rejimga kirish" }
        ],
        doc: "Normal rejim — Vimning 90% kuchi shu yerda. Bu oddiy matn kiritish emas, bu buyruq berish rejimi."
      },
      {
        id: "m2",
        title: "Insert rejim — Oddiy yozish",
        desc: "Bu yerda Notepad kabi yozasan",
        commands: [
          { cmd: "i", desc: "Kursor turgan joydan oldinga yozish" },
          { cmd: "a", desc: "Kursor turgan joydan keyin yozish" },
          { cmd: "I", desc: "Qatorning birinchi belgidan yozish" },
          { cmd: "A", desc: "Qator oxiridan yozish" },
          { cmd: "o", desc: "Joriy qator ostida yangi qator ochib yozish" },
          { cmd: "O", desc: "Joriy qator ustida yangi qator ochib yozish" },
          { cmd: "s", desc: "Kursor ostidagi belgini o‘chirib insert rejimga kirish" },
          { cmd: "C", desc: "Kursor joyidan qator oxirigacha o‘chirib insert rejimga kirish" }
        ],
        doc: "Insert rejimda bo‘lganingda — oddiy odam. Normal rejimda — ninja."
      },
      {
        id: "m3",
        title: "Visual rejim — Matn belgilash",
        desc: "Sichqoncha o‘rniga klaviatura bilan",
        commands: [
          { cmd: "v", desc: "Belgidan belgiga belgilash" },
          { cmd: "V", desc: "To‘liq qatorlarni belgilash" },
          { cmd: "Ctrl+v", desc: "Ustun (blok) shaklida belgilash" },
          { cmd: "gv", desc: "Oldin belgilangan joyni qayta tanlash" },
          { cmd: "o", desc: "Belgilashning ikkinchi uchiga (boshqa burchakka) o‘tish" }
        ],
        doc: "Visual rejimda d (o‘chir), y (nusxa), c (o‘zgartir), > (indent oshir), < (indent kamaytir), = (avto indent), gU (katta harf), gu (kichik harf) ishlatiladi."
      }
    ]
  },

  navigation: {
    title: "Navigatsiya — Kursorni uchar qilish",
    editor: true,
    lessons: [
      {
        id: "n1",
        title: "Asosiy harakat — hjkl",
        desc: "Sichqonchani unut!",
        commands: [
          { cmd: "h", desc: "Kursorni chapga harakatlantirish" },
          { cmd: "j", desc: "Kursorni pastga harakatlantirish" },
          { cmd: "k", desc: "Kursorni yuqoriga harakatlantirish" },
          { cmd: "l", desc: "Kursorni o‘ngga harakatlantirish" },
          { cmd: "w", desc: "Keyingi so‘z boshiga o‘tish" },
          { cmd: "b", desc: "Oldingi so‘z boshiga o‘tish" },
          { cmd: "e", desc: "Joriy yoki keyingi so‘z oxiriga o‘tish" },
          { cmd: "W B E", desc: "Bo‘shliq yoki belgi bilan ajratilgan katta so‘zlar" },
          { cmd: "0", desc: "Qatorning mutlaq boshiga o‘tish" },
          { cmd: "^", desc: "Qatorning birinchi belgiga o‘tish (indentdan keyin)" },
          { cmd: "$", desc: "Qator oxiriga o‘tish" },
          { cmd: "gg", desc: "Faylning eng boshiga o‘tish" },
          { cmd: "G", desc: "Faylning eng oxiriga o‘tish" }
        ],
        doc: "Birinchi 2 haftada hjkl ni o‘rgan — keyin sichqonchani butunlay tashlaysan."
      },
      {
        id: "n2",
        title: "Qator ichida ninja harakatlar — f t ; ,",
        desc: "1 soniyada 100 belgi o‘tish",
        commands: [
          { cmd: "f)", desc: "Keyingi ) belgiga to‘g‘ridan sakrash" },
          { cmd: "t)", desc: "Keyingi ) belgidan oldinga turish" },
          { cmd: "F{", desc: "Oldingi { belgiga sakrash" },
          { cmd: "T,", desc: "Oldingi , belgidan keyinga turish" },
          { cmd: ";", desc: "Oldingi f yoki t buyruqni takrorlash" },
          { cmd: ",", desc: "f yoki t buyruqni teskari yo‘nalishda takrorlash" },
          { cmd: "%", desc: "Mos qavs, tag yoki blokka sakrash" }
        ],
        doc: "f va t — qator ichidagi eng kuchli qurol. ; va , bilan 0.3 soniyada istalgan joyga yetasan."
      },
      {
        id: "n3",
        title: "Fayl bo‘ylab katta sakrashlar",
        desc: "10000 qatorlik faylda ham yo‘qotmaysan",
        commands: [
          { cmd: "gg", desc: "Faylning eng birinchi qatoriga" },
          { cmd: "G", desc: "Faylning eng oxirgi qatoriga" },
          { cmd: "42G", desc: "42-qatorga o‘tish" },
          { cmd: ":42", desc: "42-qatorga o‘tish (command rejimda)" },
          { cmd: "Ctrl+u", desc: "Yarim sahifa yuqoriga" },
          { cmd: "Ctrl+d", desc: "Yarim sahifa pastga" },
          { cmd: "Ctrl+f", desc: "To‘liq sahifa oldinga" },
          { cmd: "Ctrl+b", desc: "To‘liq sahifa orqaga" },
          { cmd: "zz", desc: "Joriy qatorni ekran o‘rtasiga keltirish" },
          { cmd: "zt", desc: "Joriy qatorni ekran tepasiga keltirish" },
          { cmd: "zb", desc: "Joriy qatorni ekran pastiga keltirish" },
          { cmd: "H", desc: "Ekran tepasidagi birinchi qatorga" },
          { cmd: "M", desc: "Ekran o‘rtasidagi qatorga" },
          { cmd: "L", desc: "Ekran pastidagi oxirgi qatorga" }
        ],
        doc: "Katta loyihalarda bu buyruqlar hayotni osonlashtiradi."
      }
    ]
  },

  editing: {
    title: "Tahrirlash — Vimning sehrli joyi",
    editor: true,
    lessons: [
      {
        id: "e1",
        title: "O‘chirish — d (delete)",
        desc: "d + harakat = kerakli joyni o‘chir",
        commands: [
          { cmd: "x", desc: "Kursor ostidagi bitta belgini o‘chirish" },
          { cmd: "dd", desc: "To‘liq qatorni o‘chirish" },
          { cmd: "dw", desc: "Kursor joyidan so‘z oxirigacha o‘chirish" },
          { cmd: "db", desc: "Kursor joyidan so‘z boshigacha o‘chirish" },
          { cmd: "de", desc: "So‘z oxirigacha o‘chirish (to‘liq so‘z)" },
          { cmd: "daw", desc: "So‘z va atrofidagi bo‘shliqni o‘chirish" },
          { cmd: "diw", desc: "Kursor ostidagi so‘zni (joyidan qat’iy nazar) o‘chirish" },
          { cmd: "di(", desc: "Qavs ichidagi matnni o‘chirish" },
          { cmd: "ci(", desc: "Qavs ichidagini o‘chirib insert rejimga kirish" },
          { cmd: "di\"", desc: "Qo‘shtirnoq ichidagi matnni o‘chirish" },
          { cmd: "ci\"", desc: "Qo‘shtirnoq ichidagini o‘chirib insert rejimga kirish" },
          { cmd: "d$", desc: "Qator oxirigacha o‘chirish" },
          { cmd: "D", desc: "Qator oxirigacha o‘chirish (tezroq)" }
        ],
        doc: "d + istalgan harakat = o‘chirish. Eng kuchli kombinatsiya!"
      },
      {
        id: "e2",
        title: "Nusxa olish va joylashtirish — y p",
        desc: "Copy-paste Vim uslubida",
        commands: [
          { cmd: "yy", desc: "To‘liq qatorni nusxa olish" },
          { cmd: "yiw", desc: "Kursor ostidagi so‘zni nusxa olish" },
          { cmd: "yaw", desc: "So‘z + atrofidagi bo‘shliqni nusxa olish" },
          { cmd: "yi(", desc: "Qavs ichidagi matnni nusxa olish" },
          { cmd: "ya(", desc: "Qavs va ichidagini nusxa olish" },
          { cmd: "p", desc: "Kursor keyin joylashtirish (qator uchun pastga)" },
          { cmd: "P", desc: "Kursor oldin joylashtirish (qator uchun yuqoriga)" },
          { cmd: "]p", desc: "Indentni to‘g‘ri saqlab joylashtirish" },
          { cmd: "[p", desc: "Indentni to‘g‘ri saqlab yuqoriga joylashtirish" },
          { cmd: '"+y', desc: "Sistema clipboard’iga nusxa olish" }
        ],
        doc: "Visual rejimda belgilab y bos → nusxa olasan."
      },
      {
        id: "e3",
        title: "O‘zgartirish — c (change)",
        desc: "c + harakat = o‘chir + insert rejimi",
        commands: [
          { cmd: "cw", desc: "So‘z oxirigacha o‘chirib yozish rejimiga kirish" },
          { cmd: "ciw", desc: "Kursor ostidagi so‘zni o‘chirib yozish" },
          { cmd: "caw", desc: "So‘z + bo‘shliqni o‘chirib yozish" },
          { cmd: "cc", desc: "To‘liq qatorni o‘chirib yozish" },
          { cmd: "C", desc: "Qator oxirigacha o‘chirib yozish" },
          { cmd: "ci\"", desc: "Qo‘shtirnoq ichidagini o‘chirib yozish" },
          { cmd: "di\"", desc: "Qo‘shtirnoq ichidagini faqat o‘chirish" },
          { cmd: "vi\"", desc: "Qo‘shtirnoq ichidagini belgilash" },
          { cmd: "ci(", desc: "Qavs ichidagini o‘chirib yozish" },
          { cmd: "di(", desc: "Qavs ichidagini faqat o‘chirish" },
          { cmd: "vi(", desc: "Qavs ichidagini belgilash" },
          { cmd: "ci{", desc: "Juft qavs ichidagini o‘chirib yozish" },
          { cmd: "di{", desc: "Juft qavs ichidagini o‘chirish" },
          { cmd: "r", desc: "Bitta belgini almashtirish (insertsiz)" },
          { cmd: "~", desc: "Kursor ostidagi belgini katta/kichik qilish" },
          { cmd: "g~iw", desc: "Kursor ostidagi so‘z harflarini o‘zgartirish" }
        ],
        doc: "ciw, ci\", ci( — eng ko‘p ishlatiladigan 3 buyruq!"
      },
      {
        id: "e4",
        title: "Nuqta (.) — Vimning haqiqiy super quroli",
        desc: "Bir marta to‘g‘ri qil → ming marta takrorla",
        commands: [
          { cmd: ".", desc: "Oxirgi o‘zgarishni (c, d, y, ~ va b.) takrorlash" },
          { cmd: "5.", desc: "Oxirgi o‘zgarishni 5 marta takrorlash" },
          { cmd: "u", desc: "Undo — oxirgi o‘zgarishni bekor qilish" },
          { cmd: "Ctrl+r", desc: "Redo — bekor qilingan o‘zgarishni qaytarish" },
          { cmd: "U", desc: "Oxirgi o‘zgartirilgan qatorni to‘liq tiklash" }
        ],
        doc: "Nuqta tugmasi — professional Vim foydalanuvchilarining asosiy quroli. To‘g‘ri ishlatgan odam kuniga 10 000 tugma bosishdan qutulasan."
      }
    ]
  },

  search: {
    title: "Qidiruv va almashtirish",
    editor: true,
    lessons: [
      {
        id: "s1",
        title: "Oddiy qidiruv",
        desc: "/ va ? — faylda izlash",
        commands: [
          { cmd: "/pattern", desc: "Oldinga qidirish" },
          { cmd: "?pattern", desc: "Orqaga qidirish" },
          { cmd: "n", desc: "Keyingi mos kelishga o‘tish" },
          { cmd: "N", desc: "Oldingi mos kelishga o‘tish" },
          { cmd: "*", desc: "Kursor ostidagi so‘zni oldinga to‘liq qidirish" },
          { cmd: "#", desc: "Kursor ostidagi so‘zni orqaga to‘liq qidirish" },
          { cmd: "g*", desc: "Qisman mos kelish (oldinga)" },
          { cmd: "g#", desc: "Qisman mos kelish (orqaga)" }
        ],
        doc: "* — eng qulay buyruq. So‘z ustida tur → * bos → hamma joyda topadi."
      },
      {
        id: "s2",
        title: "Global almashtirish — :%s",
        desc: "Eng kuchli text o‘zgartirish vositasi",
        commands: [
          { cmd: ":%s/old/new/g", desc: "Butun faylda almashtirish" },
          { cmd: ":s/old/new/g", desc: "Faqat joriy qatorda almashtirish" },
          { cmd: ":%s/old/new/gc", desc: "Tasdiqlab (confirm) almashtirish" },
          { cmd: ":%s/\\v(.*)function/\\1funksiya/g", desc: "Very magic regex bilan murakkab almashtirish" },
          { cmd: ":.,+5s/old/new/g", desc: "Joriy qatordan keyingi 5 qatorgacha almashtirish" }
        ],
        doc: "gc — har bir o‘zgarishni ko‘rib, y (ha) / n (yo‘q) bosasan. Juda xavfsiz."
      }
    ]
  },

  files: {
    title: "Fayl va bufferlar bilan ishlash",
    editor: false,
    lessons: [
      {
        id: "f1",
        title: "Buffer, Window, Tab — 3 muhim tushuncha",
        desc: "Vimning haqiqiy kuchi shu yerda",
        commands: [
          { cmd: ":ls", desc: "Barcha ochiq bufferlarni ko‘rish" },
          { cmd: ":b partial", desc: "Nomi bo‘yicha buffer topish (fuzzy)" },
          { cmd: ":bn", desc: "Keyingi buffer’ga o‘tish" },
          { cmd: ":bp", desc: "Oldingi buffer’ga o‘tish" },
          { cmd: ":bd", desc: "Joriy buffer’ni yopish" },
          { cmd: ":sp", desc: "Gorizontal split (yuqori-past)" },
          { cmd: ":vs", desc: "Vertikal split (chap-o‘ng)" },
          { cmd: "Ctrl+w w", desc: "Oynalar orasida aylanish" },
          { cmd: "Ctrl+w h/j/k/l", desc: "Oynalar orasida harakat (chap/past/yuqori/o‘ng)" },
          { cmd: ":tabnew", desc: "Yangi tab ochish" },
          { cmd: ":tabclose", desc: "Joriy tab’ni yopish" }
        ],
        doc: "Buffer ≠ Window ≠ Tab. Buni tushungan odam Vimning 50% kuchini ishlatadi."
      }
    ]
  },

  advanced: {
    title: "Ilg‘or imkoniyatlar",
    editor: true,
    lessons: [
      {
        id: "a1",
        title: "Makrolar — Avtomatlashtirish",
        desc: "Takrorlanadigan ishni bir marta yoz, ming marta ishlat",
        commands: [
          { cmd: "qa", desc: "a registriga makro yozishni boshlash" },
          { cmd: "q", desc: "Makro yozishni to‘xtatish" },
          { cmd: "@a", desc: "a makroni bajarish" },
          { cmd: "@@", desc: "Oxirgi ishlatilgan makroni takrorlash" },
          { cmd: "10@a", desc: "a makroni 10 marta bajarish" },
          { cmd: ":normal @a", desc: "Visual belgilangan joylarda makroni qo‘llash" }
        ],
        doc: "Makrolar — Vimning eng katta sirlari biri. To‘g‘ri ishlatgan odam kuniga soatlab vaqt tejasan."
      },
      {
        id: "a2",
        title: "Registers — Nusxalash joylari",
        desc: "26 ta nomli + sistema buferi",
        commands: [
          { cmd: '"ayy', desc: "Joriy qatorni a registriga nusxa olish" },
          { cmd: '"ap', desc: "a registridagi matnni joylashtirish" },
          { cmd: '"+yy', desc: "Qatorni sistema clipboard’iga nusxa olish" },
          { cmd: '"0p', desc: "Oxirgi yank qilingan matnni joylashtirish" },
          { cmd: ":reg", desc: "Barcha registerlar tarkibini ko‘rish" }
        ],
        doc: '"+ — Windows/Linux clipboard, "* — macOS clipboard.'
      },
      {
        id: "a3",
        title: "Text Objects — Aqliy tanlash",
        desc: "Eng kuchli Vim buyruqlari",
        commands: [
          { cmd: "ciw", desc: "So‘z ichidagini o‘zgartirish" },
          { cmd: "diw", desc: "So‘z ichidagini o‘chirish" },
          { cmd: "yiw", desc: "So‘z ichidagini nusxa olish" },
          { cmd: "caw", desc: "So‘z + bo‘shliqni o‘zgartirish" },
          { cmd: "daw", desc: "So‘z + bo‘shliqni o‘chirish" },
          { cmd: "yaw", desc: "So‘z + bo‘shliqni nusxa olish" },
          { cmd: "ci\"", desc: "Qo‘shtirnoq ichidagini o‘zgartirish" },
          { cmd: "di\"", desc: "Qo‘shtirnoq ichidagini o‘chirish" },
          { cmd: "yi\"", desc: "Qo‘shtirnoq ichidagini nusxa olish" },
          { cmd: "ci(", desc: "Qavs ichidagini o‘zgartirish" },
          { cmd: "di(", desc: "Qavs ichidagini o‘chirish" },
          { cmd: "yi(", desc: "Qavs ichidagini nusxa olish" },
          { cmd: "ci{", desc: "Juft qavs ichidagini o‘zgartirish" },
          { cmd: "cit", desc: "HTML tag ichidagini o‘zgartirish" },
          { cmd: "dit", desc: "HTML tag ichidagini o‘chirish" },
          { cmd: "yit", desc: "HTML tag ichidagini nusxa olish" },
          { cmd: "gUiw", desc: "So‘zni katta harfga o‘zgartirish" },
          { cmd: "guiw", desc: "So‘zni kichik harfga o‘zgartirish" }
        ],
        doc: "Bu kombinatsiyalarni bilgan odam — haqiqiy Vim master."
      }
    ]
  },

  cheatsheet: {
    title: "Cheatsheet — Tez eslatma",
    editor: true,
    lessons: [
      {
        id: "cs1",
        title: "Top-20 eng kerakli buyruq (90% ishni qamrab oladi)",
        desc: "Shularni yodla → professional bo‘l",
        commands: [
          { cmd: "i", desc: "Kursor oldidan yozish" },
          { cmd: "a", desc: "Kursor keyin yozish" },
          { cmd: "o", desc: "Yangi qator pastda ochish" },
          { cmd: "O", desc: "Yangi qator yuqorida ochish" },
          { cmd: "ESC", desc: "Normal rejimga qaytish" },
          { cmd: "h j k l", desc: "Harakatlantirish" },
          { cmd: "w b e", desc: "So‘z bo‘ylab harakat" },
          { cmd: "dd", desc: "Qator o‘chirish" },
          { cmd: "yy", desc: "Qator nusxa olish" },
          { cmd: "p", desc: "Kursor keyin joylashtirish" },
          { cmd: "P", desc: "Kursor oldin joylashtirish" },
          { cmd: "u", desc: "Undo" },
          { cmd: "Ctrl+r", desc: "Redo" },
          { cmd: ".", desc: "Oxirgi amalni takrorlash" },
          { cmd: "ciw", desc: "So‘zni o‘zgartirish" },
          { cmd: "ci\"", desc: "Qo‘shtirnoq ichidagini o‘zgartirish" },
          { cmd: "ci(", desc: "Qavs ichidagini o‘zgartirish" },
          { cmd: "*", desc: "So‘zni fayl bo‘ylab qidirish" },
          { cmd: "gg", desc: "Fayl boshi" },
          { cmd: "G", desc: "Fayl oxiri" },
          { cmd: "ZZ", desc: "Saqlab chiqish" },
          { cmd: ":w", desc: "Saqlash" },
          { cmd: ":q", desc: "Chiqish" }
        ],
        doc: "Shu 23 buyruq bilan 95% ishni bajarish mumkin!"
      }
    ]
  }
};

export default content;
