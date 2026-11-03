/**
 * Language-specific content that JavaScript renders into the page
 * (cards, timeline, client names, terminal lines, section names...).
 * Each language must define the same keys.
 */
window.NC = window.NC || {};

NC.content = {
  ar: {
    title: "نيو كود — كل منتج يبدأ بسطر واحد",
    langToggleLabel: "EN",
    musicLabel: "موسيقى",
    sectionNames: {
      work: "مشاريعنا",
      hero: "البداية",
      culture: "ثقافتنا",
      process: "كيف نعمل",
      services: "خدماتنا",
      exp: "خبرتنا",
      clients: "عملاؤنا",
      acad: "الأكاديمية",
      end: "النهاية",
    },
    timeline: [
      ["فهم", "نسمع قبل ما نكتب"],
      ["تصميم", "نماذج تجرّبها بيدك"],
      ["بناء", "إصدار كل أسبوعين"],
      ["اختبار", "نكسر قبل ما تكسر"],
      ["إطلاق", "ودعم بعد الإطلاق"],
    ],
    services: [
      ["تطبيقات الجوال", "iOS وAndroid بكود واحد."],
      ["مواقع ومتاجر", "سريعة وبلغتين."],
      ["أنظمة وداشبورد", "بياناتك في مكان واحد."],
      ["ذكاء اصطناعي", "أتمتة حقيقية مو دعاية."],
    ],
    clients: [
      "منصات التعليم الجامعي",
      "ميزان",
      "ديفاوي POS",
      "فينتور للتسويق",
      "تربل بي",
      "سبورتيانو",
    ],
    terminal: [
      "✓ تطبيق iOS وAndroid جاهز",
      "✓ موقع سريع بلغتين",
      "✓ بياناتك في مكان واحد",
      "✓ القصة بدأت ▮",
    ],
    form: {
      sending: "لحظة، نرسل رسالتك...",
      sent: "وصلتنا رسالتك، ونرد عليك قريب بإذن الله.",
      sentWhatsapp: "فتحنا لك واتساب ورسالتك جاهزة، اضغط إرسال هناك.",
      error: "صار خطأ في الإرسال. جرّب مرة ثانية أو كلمنا على واتساب.",
      intro: "رسالة جديدة من موقع نيو كود",
      name: "الاسم",
      phone: "الجوال",
      email: "الإيميل",
      service: "الخدمة",
      message: "الرسالة",
    },
    projectFilterLabel: "تصنيف المشاريع",
  },
  en: {
    title: "New Code — Every product starts with one line",
    langToggleLabel: "عربي",
    musicLabel: "Music",
    sectionNames: {
      work: "Projects",
      hero: "Start",
      culture: "Culture",
      process: "How we work",
      services: "Services",
      exp: "Expertise",
      clients: "Clients",
      acad: "Academy",
      end: "End",
    },
    timeline: [
      ["Understand", "We listen before we write"],
      ["Design", "Prototypes you can touch"],
      ["Build", "A release every two weeks"],
      ["Test", "We break it before you do"],
      ["Launch", "And support after launch"],
    ],
    services: [
      ["Mobile apps", "iOS and Android from one codebase."],
      ["Websites & stores", "Fast, and bilingual."],
      ["Systems & dashboards", "Your data in one place."],
      ["Artificial intelligence", "Real automation, not hype."],
    ],
    clients: [
      "University Education Platforms",
      "Mizan",
      "Devawy POS",
      "Fintor Marketing",
      "Triple B",
      "Sportyano",
    ],
    terminal: [
      "✓ iOS and Android app ready",
      "✓ Fast bilingual website",
      "✓ Your data in one place",
      "✓ The story has begun ▮",
    ],
    form: {
      sending: "Sending your message...",
      sent: "We got your message. We’ll reply soon.",
      sentWhatsapp: "We opened WhatsApp with your message ready. Press send there.",
      error: "Something went wrong. Try again or message us on WhatsApp.",
      intro: "New message from the New Code website",
      name: "Name",
      phone: "Mobile",
      email: "Email",
      service: "Service",
      message: "Message",
    },
    projectFilterLabel: "Project categories",
  },
};

/** Positions (px) of the client-name bubbles around the "NC" hub on wide screens. */
NC.clientNetworkPositions = [
  [-300, -110],
  [300, -110],
  [-330, 60],
  [330, 60],
  [-150, 125],
  [150, 125],
];
