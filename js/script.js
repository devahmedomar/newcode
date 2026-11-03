(function () {
  var $ = function (s, r) {
      return (r || document).querySelector(s);
    },
    $$ = function (s, r) {
      return [].slice.call((r || document).querySelectorAll(s));
    };
  var cl = function (v) {
    return Math.max(0, Math.min(1, v));
  };
  var H = document.documentElement;
  /* ---------- translations ---------- */
  var EN = {
    say0: "<b>Every product</b> starts with one line.",
    say1: "This isn’t just a logo.<br><b>It’s a door.</b>",
    say2: "Come, let us tell you <b>the story.</b>",
    hint: "Scroll to begin the story ↓",
    mq: "IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ IDEA ✦ DESIGN ✦ CODE ✦ CREATIVITY ✦ PRODUCT ✦ ",
    "about.h": "Before the code, there are people.",
    "about.l":
      "New Code is a team of engineers and designers, founded in [year], building software that solves real problems. Our mission: [company mission in one line].",
    "culture.h": "How do we work together?",
    "culture.c0h": "// We test before we ship",
    "culture.c0p":
      "Nothing reaches the client until we’ve tried to break it first.",
    "culture.c1h": "// Honesty first",
    "culture.c1p":
      "If there’s a problem, the client hears it from us before they find it.",
    "culture.c2h": "// We learn every day",
    "culture.c2p":
      "One hour a week to try a new technology, with no delivery pressure.",
    "culture.c3h": "// Code gets reviewed",
    "culture.c3p":
      "Every line is reviewed by a teammate before merging. No lone heroes.",
    "process.h": "Every project takes the same road.",
    "services.h": "And this is what we can build for you.",
    "exp.h": "The numbers speak.",
    "exp.p0": "Projects delivered",
    "exp.p1": "Years of experience",
    "exp.p2": "Engineers and designers",
    "exp.p3": "% of clients came back",
    "clients.h": "People who trusted us.",
    "clients.q0": "“[Client quote about delivery quality and communication].”",
    "clients.n0": "[Client name] — [Title]",
    "clients.q1": "“[Second quote about the impact on the client’s business].”",
    "clients.n1": "[Client name] — [Title]",
    "acad.h":
      'We don’t just build products. <span style="color:var(--am)">We build programmers.</span>',
    "acad.c0h": "Programming Basics",
    "acad.c0p": "8 weeks · Beginner",
    "acad.c1h": "Web Development",
    "acad.c1p": "12 weeks · Intermediate",
    "acad.c2h": "Mobile Apps",
    "acad.c2p": "10 weeks · Intermediate",
    "acad.grads": "Academy graduates",
    "work.h": "UI/UX design projects we’ve shaped.",
    "work.l":
      "Mobile apps and web platforms across fintech, food, education, HR, e-commerce and on-demand services, designed Arabic-first for Saudi Arabia and Egypt.",
    "end.h": "This story is still being written.",
    "end.l": "And the next line could be your project.",
    "end.btn": "Write the new code with us",
    foot: "© New Code · All data on this page is placeholder",
  };
  var ST = { ar: {}, en: EN };
  $$("[data-i18n]").forEach(function (e) {
    ST.ar[e.dataset.i18n] = e.innerHTML;
  });
  var D = {
    ar: {
      title: "نيو كود — كل منتج بيبدأ بسطر واحد",
      team: [
        ["أ", "أحمد س.", "قائد تقني"],
        ["م", "مريم ع.", "مصممة منتجات"],
        ["ي", "يوسف ه.", "مهندس موبايل"],
        ["ن", "نور ك.", "مهندسة جودة"],
      ],
      tl: [
        ["فهم", "نسمع قبل ما نكتب"],
        ["تصميم", "نماذج تجربها بإيدك"],
        ["بناء", "إصدار كل أسبوعين"],
        ["اختبار", "نكسر قبل ما تكسر"],
        ["إطلاق", "ودعم بعد الإطلاق"],
      ],
      svc: [
        ["تطبيقات الموبايل", "iOS وAndroid بكود واحد."],
        ["مواقع ومتاجر", "سريعة وبلغتين."],
        ["أنظمة وداشبورد", "بياناتك في مكان واحد."],
        ["ذكاء اصطناعي", "أتمتة حقيقية مش دعاية."],
      ],
      net: [
        "شركة نور",
        "مطاعم الأصيل",
        "بنك الدلتا",
        "تجارة المنصورة",
        "عيادات الشفاء",
        "لوجستيك السريع",
      ],
      term: [
        "✓ تطبيق iOS وAndroid جاهز",
        "✓ موقع سريع بلغتين",
        "✓ بياناتك في مكان واحد",
        "✓ الحكاية بدأت ▮",
      ],
      cats: ["الكل", "تطبيقات الموبايل", "مواقع ومنصات"],
      fl: "تصنيف المشاريع",
      wk: [
        {
          c: 1,
          n: "ميزان — تطبيق صافي الثروة والخدمات المصرفية المفتوحة",
          s: "تقنية مالية · السعودية",
          a: "لوحة صافي الثروة مع أرصدة البنوك والذهب والعقارات",
          d: "تطبيق لتجميع الحسابات البنكية (عبر الخدمات المصرفية المفتوحة) والأصول مثل العقارات والذهب والفضة في لوحة واحدة مع تتبّع صافي الثروة.",
          t: ["تصميم UI/UX", "Open Banking", "لوحة تحكم"],
          m: [],
        },
        {
          c: 1,
          n: "سالدويتش — تطبيق طلب المطاعم",
          s: "توصيل طعام · السعودية",
          a: "تطبيق طلب طعام مع القائمة والسلة و25 فرعاً",
          d: "تطبيق Flutter لطلب الطعام لسلسلة مطاعم من 25 فرعاً، يغطي الرحلة كاملة من تصفح القائمة حتى إتمام الدفع.",
          t: ["تصميم UI/UX", "Flutter", "25 فرعاً"],
          m: [],
        },
        {
          c: 2,
          n: "سوقنا مصري — سوق إلكتروني مصري",
          s: "تجارة إلكترونية · مصر",
          a: "سوق إلكتروني ثنائي اللغة مع تصنيفات المنتجات والشحن المجاني",
          d: "سوق ثنائي اللغة (عربي/إنجليزي ويدعم RTL) لدعم المشروعات المصرية الصغيرة: تصفح التصنيفات، المفضلة، السلة، تسجيل الدخول، برنامج شراكة البائعين، وصفحات سياسات الشحن والإرجاع والخصوصية والشروط. يبيع الملابس والمستلزمات المنزلية والمكياج والإلكترونيات مع شحن مجاني وإرجاع سهل ودفع آمن.",
          t: ["تصميم UI/UX", "RTL", "عربي / English"],
          m: [],
        },
        {
          c: 1,
          n: "وقّت — منصة التعريف والتحقق من الموظفين",
          s: "موارد بشرية · موبايل وديسكتوب",
          a: "لوحة الحضور على الديسكتوب والتحقق من هوية الموظف على الموبايل",
          d: "منصة لتعريف الموظفين والتحقق منهم مع تتبّع الحضور ورؤى الإنتاجية وحماية آمنة للبيانات.",
          t: ["تصميم UI/UX", "موبايل", "ديسكتوب"],
          m: [],
        },
        {
          c: 1,
          n: "إنفانسيا — تطبيق إدارة الحضانات",
          s: "تعليم · إدارة الحضانات",
          a: "ثلاث واجهات للمدير والمعلمة وولي الأمر",
          d: "تطبيق متعدد الأدوار: يدير المسؤولون العمليات، وترفع المعلمات تقارير عن تقدّم الأطفال، ويتابع أولياء الأمور يوم طفلهم.",
          t: ["تصميم UI/UX", "متعدد الأدوار", "موبايل"],
          m: [],
        },
        {
          c: 2,
          n: "تربل بي — موقع مطعم برجر",
          s: "هوية مطعم · الرياض",
          a: "صفحة هبوط داكنة لمطعم برجر مع صورة رئيسية جريئة",
          d: "صفحة هبوط ثنائية اللغة (عربي/إنجليزي ويدعم RTL) لمطعم برجر: هوية داكنة جريئة وصور رئيسية، رابط للقائمة، محدد فروع الرياض، روابط تطبيقات التوصيل وحسابات التواصل الاجتماعي.",
          t: ["تصميم UI/UX", "RTL", "صفحة هبوط"],
          m: [],
        },
        {
          c: 1,
          n: "آي هوني هيرب — متجر منتجات طبيعية",
          s: "تجارة إلكترونية",
          a: "تطبيق متجر منتجات طبيعية مع توصيات ودفع آمن",
          d: "متجر منتجات طبيعية مع توصيات مخصّصة ودفع آمن وتوصيل.",
          t: ["تصميم UI/UX", "موبايل", "تجارة إلكترونية"],
          m: [],
        },
        {
          c: 2,
          n: "سبورتيانو — منصة رياضية رقمية",
          s: "رياضة · منصة ويب",
          a: "موقع رياضي يضم كتالوج المواهب والأكاديميات والملاعب",
          d: "منصة ويب تعمل كمركز لمحتوى الرياضة، مع كتالوج إلكتروني للمواهب والأكاديميات الرياضية والملاعب.",
          t: ["تصميم UI/UX", "ويب", "كتالوج"],
          m: [],
        },
        {
          c: 1,
          n: "الفيروز — تطبيق نقل طلاب الجامعة",
          s: "نقل ومواصلات",
          a: "اختيار المسار مع إيصال الدفع وإشعار الموافقة",
          d: "تطبيق لنقل طلاب الجامعة: اختيار المسار، إدارة الاشتراك، إيصالات الدفع الرقمية، وإشعارات الموافقة.",
          t: ["تصميم UI/UX", "موبايل", "اشتراكات"],
          m: [],
        },
        {
          c: 1,
          n: "نتشرال سوليوشنز — تطبيق خدمات المغسلة",
          s: "خدمات عند الطلب",
          a: "تطبيق مغسلة لغسيل الملابس والسجاد وتنظيف السيارات",
          d: "تطبيق مغسلة لخدمات الملابس والسجاد وتنظيف السيارات.",
          t: ["تصميم UI/UX", "موبايل", "عند الطلب"],
          m: [],
        },
        {
          c: 1,
          n: "غسّال وليندريا — تطبيقا تنظيف المنزل والسيارة",
          s: "خدمات عند الطلب",
          a: "تطبيقان لتنظيف المنزل والسيارة مع خطوات تقدّم الطلب",
          d: "تطبيقا تنظيف للمنازل والسيارات يغطيان الطلب حتى إتمام الخدمة.",
          t: ["تصميم UI/UX", "موبايل", "عند الطلب"],
          m: [],
        },
      ],
      sec: {
        work: "مشاريعنا",
        hero: "البداية",
        about: "نحن مين",
        culture: "ثقافتنا",
        process: "كيف نعمل",
        services: "خدماتنا",
        exp: "خبرتنا",
        clients: "عملاؤنا",
        acad: "الأكاديمية",
        end: "النهاية",
      },
      lb: "EN",
      sb: "موسيقى",
    },
    en: {
      title: "New Code — Every product starts with one line",
      team: [
        ["A", "Ahmed S.", "Tech Lead"],
        ["M", "Maryam A.", "Product Designer"],
        ["Y", "Youssef H.", "Mobile Engineer"],
        ["N", "Nour K.", "QA Engineer"],
      ],
      tl: [
        ["Understand", "We listen before we write"],
        ["Design", "Prototypes you can touch"],
        ["Build", "A release every two weeks"],
        ["Test", "We break it before you do"],
        ["Launch", "And support after launch"],
      ],
      svc: [
        ["Mobile apps", "iOS and Android from one codebase."],
        ["Websites & stores", "Fast, and bilingual."],
        ["Systems & dashboards", "Your data in one place."],
        ["Artificial intelligence", "Real automation, not hype."],
      ],
      net: [
        "Nour Co.",
        "Al-Aseel Restaurants",
        "Delta Bank",
        "Mansoura Trading",
        "Shifa Clinics",
        "Fast Logistics",
      ],
      term: [
        "✓ iOS and Android app ready",
        "✓ Fast bilingual website",
        "✓ Your data in one place",
        "✓ The story has begun ▮",
      ],
      cats: ["All", "Mobile Apps", "Websites & Platforms"],
      fl: "Project categories",
      wk: [
        {
          c: 1,
          n: "Mizan — Net Worth & Open Banking App",
          s: "FinTech · Saudi Arabia",
          a: "Dashboard showing net worth with bank, gold and real estate balances",
          d: "Financial aggregation app that brings bank accounts (via Open Banking) and assets like real estate, gold and silver into one dashboard with net worth tracking.",
          t: ["UI/UX Design", "Open Banking", "Dashboard"],
          m: [],
        },
        {
          c: 1,
          n: "Saldwich — Restaurant Ordering App",
          s: "Food delivery · Saudi Arabia",
          a: "Food ordering app with a menu, cart and 25 branches",
          d: "Flutter ordering app for a restaurant chain with 25 branches, covering the full journey from browsing the menu to checkout.",
          t: ["UI/UX Design", "Flutter", "25 branches"],
          m: [],
        },
        {
          c: 2,
          n: "Soukna Masry — Egyptian Marketplace",
          s: "E-commerce · Egypt",
          a: "Bilingual online marketplace with product categories and free shipping",
          d: "Bilingual (Arabic/English, RTL-aware) marketplace supporting small Egyptian businesses: category browsing, favourites, a cart, login, a seller partnership program, and policy pages for shipping, returns, privacy and terms. Sells clothing, home goods, makeup and electronics, with free shipping, easy returns and secure payment.",
          t: ["UI/UX Design", "RTL", "Arabic / English"],
          m: [],
        },
        {
          c: 1,
          n: "Wakkt — Employee Verification Platform",
          s: "HR tech · Mobile & desktop",
          a: "Attendance dashboard on desktop and employee ID verification on mobile",
          d: "Employee identification and verification platform with attendance tracking, productivity insights, and secure data protection.",
          t: ["UI/UX Design", "Mobile", "Desktop"],
          m: [],
        },
        {
          c: 1,
          n: "Infancia — Nursery Management App",
          s: "Education · Nursery management",
          a: "Three role views for admin, teacher and parent",
          d: "Multi-role app where admins manage operations, teachers report on children’s progress, and parents follow their child’s day.",
          t: ["UI/UX Design", "Multi-role", "Mobile"],
          m: [],
        },
        {
          c: 2,
          n: "Triple B — Burger Restaurant Website",
          s: "Restaurant brand · Riyadh",
          a: "Dark burger restaurant landing page with a bold hero",
          d: "Bilingual (Arabic/English, RTL) landing page for a burger restaurant: a bold dark brand identity with hero imagery, a menu link, a Riyadh branch locator, links to delivery apps, and social media links.",
          t: ["UI/UX Design", "RTL", "Landing page"],
          m: [],
        },
        {
          c: 1,
          n: "I Hony Herb — Natural Products Store",
          s: "E-commerce",
          a: "Natural products store app with recommendations and secure checkout",
          d: "Natural products store with personalized recommendations, secure payments, and delivery.",
          t: ["UI/UX Design", "Mobile", "E-commerce"],
          m: [],
        },
        {
          c: 2,
          n: "Sportyano — Sports Digital Platform",
          s: "Sports · Web platform",
          a: "Sports hub website with talents, academies and playgrounds catalog",
          d: "Web platform that acts as a central hub for sports content, with an online catalog for talents, sports academies, and sports playgrounds.",
          t: ["UI/UX Design", "Web", "Catalog"],
          m: [],
        },
        {
          c: 1,
          n: "El Fayrouz — University Transportation App",
          s: "Transportation",
          a: "Route selection with a payment receipt and approval notification",
          d: "University student transportation app for route selection, subscription management, digital payment receipts, and approval notifications.",
          t: ["UI/UX Design", "Mobile", "Subscriptions"],
          m: [],
        },
        {
          c: 1,
          n: "Natural Solutions — Laundry Service App",
          s: "On-demand services",
          a: "Laundry app with clothes, carpet and car cleaning services",
          d: "Laundry service app for clothes, carpets, and car cleaning.",
          t: ["UI/UX Design", "Mobile", "On-demand"],
          m: [],
        },
        {
          c: 1,
          n: "Ghassal & Lundria — Home & Car Cleaning Apps",
          s: "On-demand services",
          a: "Two cleaning apps for home and car with order progress steps",
          d: "Home and car cleaning apps that cover ordering through service completion.",
          t: ["UI/UX Design", "Mobile", "On-demand"],
          m: [],
        },
      ],
      sec: {
        work: "Projects",
        hero: "Start",
        about: "Who we are",
        culture: "Culture",
        process: "How we work",
        services: "Services",
        exp: "Expertise",
        clients: "Clients",
        acad: "Academy",
        end: "End",
      },
      lb: "عربي",
      sb: "Music",
    },
  };
  var lang = "ar";
  try {
    lang = localStorage.getItem("nc-lang") || "ar";
  } catch (e) {}
  var nets = [
    [-300, -110],
    [300, -110],
    [-330, 60],
    [330, 60],
    [-150, 125],
    [150, 125],
  ];
  var flt = 0,
    secs = [],
    dots = [],
    first = true,
    termDone = false;
  var card = function (col, inner) {
    return (
      '<div class="' +
      col +
      '"><div class="nc-card rv">' +
      inner +
      "</div></div>"
    );
  };
  function render() {
    var d = D[lang];
    $("#team").innerHTML = d.team
      .map(function (t) {
        return card(
          "col-12 col-sm-6 col-lg-3",
          '<div class="av">' +
            t[0] +
            "</div><h3>" +
            t[1] +
            "</h3><p>" +
            t[2] +
            "</p>",
        );
      })
      .join("");
    $("#tl").innerHTML = d.tl
      .map(function (s) {
        return (
          '<div class="st rv"><i></i><b>' +
          s[0] +
          "</b><span>" +
          s[1] +
          "</span></div>"
        );
      })
      .join("");
    $("#svc").innerHTML = d.svc
      .map(function (s) {
        return card("col-12", "<h3>" + s[0] + "</h3><p>" + s[1] + "</p>");
      })
      .join("");
    $("#net").innerHTML =
      '<svg viewBox="-400 -160 800 320" preserveAspectRatio="none">' +
      nets
        .map(function (n) {
          return (
            '<line x1="0" y1="0" x2="' +
            n[0] * 0.9 +
            '" y2="' +
            n[1] * 0.9 +
            '"/>'
          );
        })
        .join("") +
      '</svg><div class="hub mono">NC</div>' +
      nets
        .map(function (n, i) {
          return (
            '<div class="n" style="--x:' +
            n[0] +
            "px;--y:" +
            n[1] +
            'px">' +
            d.net[i] +
            "</div>"
          );
        })
        .join("");
    renderWork();
    var t = $("#term");
    t.innerHTML = "";
    if (termDone) fill(t);
    if (!first)
      $$("#team .rv,#tl .rv,#svc .rv,#net").forEach(function (e) {
        e.classList.add("in");
      });
    else
      $$("#team .rv,#tl .rv,#svc .rv,#net").forEach(function (e) {
        io.observe(e);
      });
    collect();
  }
  function renderWork() {
    var d = D[lang],
      f = $("#flt");
    f.setAttribute("aria-label", d.fl);
    f.innerHTML = d.cats
      .map(function (c, i) {
        return (
          '<button type="button" data-f="' +
          i +
          '" aria-pressed="' +
          (i === flt) +
          '"' +
          (i === flt ? ' class="on"' : "") +
          ">" +
          c +
          "</button>"
        );
      })
      .join("");
    $("#wk").innerHTML = d.wk
      .map(function (w, n) {
        return { w: w, n: n + 1 };
      })
      .filter(function (o) {
        return !flt || o.w.c === flt;
      })
      .map(function (o, i) {
        var w = o.w;
        return (
          '<div class="col-12 col-md-6"><article class="wk" style="--i:' +
          i +
          '"><div class="wk-img"><img src="images/p' +
          o.n +
          '.svg" alt="' +
          w.a +
          '" width="800" height="500" loading="lazy"><span class="wk-cat">' +
          d.cats[w.c] +
          "</span></div>" +
          '<div class="wk-b"><div class="wk-sec">' +
          w.s +
          "</div><h3>" +
          w.n +
          "</h3><p>" +
          w.d +
          '</p><div class="wk-tags mono">' +
          w.t
            .map(function (t) {
              return "<span>" + t + "</span>";
            })
            .join("") +
          "</div>" +
          (w.m && w.m.length
            ? '<div class="res">' +
              w.m
                .map(function (r) {
                  return (
                    '<div><b class="mono">' +
                    r[0] +
                    "</b><span>" +
                    r[1] +
                    "</span></div>"
                  );
                })
                .join("") +
              "</div>"
            : "") +
          "</div></article></div>"
        );
      })
      .join("");
  }
  function collect() {
    secs = $$("[data-t]");
    var nav = $("#nav");
    nav.innerHTML = secs
      .map(function (s, i) {
        if (!s.id) s.id = "s" + i;
        var n = s.dataset["t" + lang] || s.dataset.t;
        return (
          '<a href="#' +
          s.id +
          '" aria-label="' +
          n +
          '"><span>' +
          n +
          "</span></a>"
        );
      })
      .join("");
    dots = $$("a", nav);
  }
  function setSecNames() {
    secs.forEach(function (s) {
      var n = D[lang].sec[s.id];
      if (n) s.dataset.t = n;
    });
  }
  function applyStatic() {
    $$("[data-i18n]").forEach(function (e) {
      e.innerHTML = ST[lang][e.dataset.i18n];
    });
  }
  var tlines = function () {
    return [
      "$ build --app mobile",
      D[lang].term[0],
      "$ build --web --lang ar,en",
      D[lang].term[1],
      "$ build --dashboard",
      D[lang].term[2],
      "$ deploy --prod",
      D[lang].term[3],
    ];
  };
  function fill(t) {
    tlines().forEach(function (l, i) {
      var s = document.createElement("span");
      s.className = i % 2 ? "o" : "c";
      s.style.display = "block";
      s.textContent = l;
      t.appendChild(s);
    });
  }
  function type(t) {
    var L = tlines(),
      i = 0,
      j = 0,
      el = null;
    termDone = true;
    (function step() {
      if (i >= L.length) return;
      if (j === 0) {
        el = document.createElement("span");
        el.className = i % 2 ? "o" : "c";
        el.style.display = "block";
        t.appendChild(el);
      }
      if (i % 2) {
        el.textContent = L[i];
        i++;
        j = 0;
        return setTimeout(step, 450);
      }
      el.textContent = L[i].slice(0, ++j);
      if (j >= L[i].length) {
        i++;
        j = 0;
        setTimeout(step, 350);
      } else setTimeout(step, 45);
    })();
  }
  function setLang(l) {
    lang = l;
    H.lang = l;
    H.dir = l === "ar" ? "rtl" : "ltr";
    $("#bs").href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap" +
      (l === "ar" ? ".rtl" : "") +
      ".min.css";
    applyStatic();
    render();
    setSecNames();
    collect();
    document.title = D[l].title;
    $("#lb").textContent = D[l].lb;
    $("#sb span").textContent = D[l].sb;
    try {
      localStorage.setItem("nc-lang", l);
    } catch (e) {}
    tick();
  }
  /* ---------- observers ---------- */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var t = e.target;
        t.classList.add("in");
        io.unobserve(t);
        var c = $("[data-n]", t);
        if (c) count(c);
        if (t.id === "term" && !termDone) {
          t.innerHTML = "";
          type(t);
        }
      });
    },
    { threshold: 0.25 },
  );
  $$(".rv,.net").forEach(function (e) {
    io.observe(e);
  });
  function count(c) {
    var n = +c.dataset.n,
      s = null;
    function f(ts) {
      s = s || ts;
      var p = cl((ts - s) / 1400);
      c.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }
  /* ---------- scroll ---------- */
  var hero = $("#hero"),
    cc = $("#cc"),
    tg = $("#tg"),
    mk = $("#mk"),
    bar = $("#bar"),
    len = 2 * Math.PI * 70,
    lp = null;
  function tick() {
    var says = $$(".say div"),
      vh = innerHeight,
      r = hero.getBoundingClientRect(),
      p = cl(-r.top / (hero.offsetHeight - vh));
    var g = 0.1 + 0.34 * cl(p / 0.5);
    cc.setAttribute("stroke-dasharray", len * (1 - g) + " " + len * g);
    cc.setAttribute("transform", "rotate(" + g * 180 + " 250 100)");
    var q = cl((p - 0.25) / 0.5);
    tg.setAttribute(
      "transform",
      "translate(" + q * 34 + " 0) scale(" + (1 + q * 0.6) + ")",
    );
    tg.setAttribute(
      "style",
      "transform-origin:250px 112px;font-family:JetBrains Mono,monospace",
    );
    mk.style.transform = "scale(" + (1 + cl(p / 0.5) * 0.15) + ")";
    mk.style.transformOrigin = "50% 50%";
    var si = p < 0.3 ? 0 : p < 0.72 ? 1 : 2;
    says.forEach(function (s, i) {
      s.classList.toggle("on", i === si);
    });
    var sp = cl(scrollY / (document.body.scrollHeight - vh));
    bar.style.transform = "scaleX(" + sp + ")";
    var cur = 0;
    secs.forEach(function (s, i) {
      if (s.getBoundingClientRect().top < vh * 0.5) cur = i;
    });
    dots.forEach(function (d, i) {
      d.classList.toggle("on", i === cur);
    });
    if (lp && ac)
      lp.frequency.setTargetAtTime(700 + 2600 * sp, ac.currentTime, 0.4);
  }
  var tk = false;
  addEventListener(
    "scroll",
    function () {
      if (!tk) {
        tk = true;
        requestAnimationFrame(function () {
          tick();
          tk = false;
        });
      }
    },
    { passive: true },
  );
  addEventListener("resize", tick);
  /* ---------- generative ambient music (Web Audio, no files) ---------- */
  var ac = null,
    master = null,
    mt = null,
    playing = false;
  var CH = [
      [220, 261.63, 329.63],
      [174.61, 220, 261.63],
      [261.63, 329.63, 392],
      [196, 246.94, 293.66],
    ],
    SC = [440, 523.25, 587.33, 659.25, 783.99, 880];
  function pad(fs, t) {
    fs.forEach(function (f) {
      [-7, 7].forEach(function (dt) {
        var o = ac.createOscillator(),
          g = ac.createGain();
        o.type = "triangle";
        o.frequency.value = f;
        o.detune.value = dt;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.05, t + 2);
        g.gain.linearRampToValueAtTime(0, t + 6.5);
        o.connect(g);
        g.connect(lp);
        o.start(t);
        o.stop(t + 7);
      });
    });
  }
  function pluck(f, t) {
    var o = ac.createOscillator(),
      g = ac.createGain();
    o.type = "sine";
    o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.1, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    o.connect(g);
    g.connect(lp);
    o.start(t);
    o.stop(t + 1.7);
  }
  function musicOn() {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    ac.resume();
    if (!master) {
      master = ac.createGain();
      master.gain.value = 0;
      master.connect(ac.destination);
      lp = ac.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 900;
      var dl = ac.createDelay(2),
        fb = ac.createGain();
      dl.delayTime.value = 0.45;
      fb.gain.value = 0.42;
      lp.connect(master);
      lp.connect(dl);
      dl.connect(fb);
      fb.connect(dl);
      dl.connect(master);
    }
    master.gain.cancelScheduledValues(ac.currentTime);
    master.gain.setTargetAtTime(0.9, ac.currentTime, 1.2);
    var i = 0;
    (function loop() {
      var t = ac.currentTime + 0.1;
      pad(CH[i % 4], t);
      for (var k = 0; k < 4; k++)
        if (Math.random() < 0.7)
          pluck(
            SC[Math.floor(Math.random() * SC.length)],
            t + k * 1.5 + Math.random() * 0.3,
          );
      i++;
      mt = setTimeout(loop, 6000);
    })();
    playing = true;
    tick();
  }
  function musicOff() {
    clearTimeout(mt);
    if (master) master.gain.setTargetAtTime(0, ac.currentTime, 0.5);
    playing = false;
  }
  $("#sb").addEventListener("click", function () {
    this.classList.remove("nudge");
    if (playing) musicOff();
    else musicOn();
    this.classList.toggle("on", playing);
    this.setAttribute("aria-pressed", playing);
  });
  $("#lb").addEventListener("click", function () {
    setLang(lang === "ar" ? "en" : "ar");
  });
  $("#flt").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-f]");
    if (!b) return;
    flt = +b.dataset.f;
    renderWork();
  });
  /* ---------- start ---------- */
  setLang(lang);
  first = false;
})();
