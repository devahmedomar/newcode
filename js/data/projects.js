/**
 * Portfolio data. One entry per project, with every translatable field holding
 * an { ar, en } pair so a project can be edited in a single place.
 *
 * To add a project:
 *   1. Drop its cover image (800x500) into /images, e.g. images/my-app.svg
 *   2. Add an entry below (set `image` to the file name without the extension)
 *   3. Use one of the category ids from NC.projectCategories
 * Projects are displayed in the order listed here (most important first).
 * `url` is the project link: clicking the card opens it in a new tab (empty = card is not clickable).
 *
 * Optional: add `metrics: [{ value: "+85%", label: { ar: "...", en: "Sales" } }]`
 * to a project to show a row of big numbers under its description.
 */
window.NC = window.NC || {};

NC.projectCategories = [
  {
    id: "all",
    label: {
      ar: "الكل",
      en: "All",
    },
  },
  {
    id: "mobile",
    label: {
      ar: "تطبيقات الجوال",
      en: "Mobile Apps",
    },
  },
  {
    id: "web",
    label: {
      ar: "مواقع ومنصات",
      en: "Websites & Platforms",
    },
  },
];

NC.projects = [
  {
    id: "umis",
    url: "https://umis.devawy.com/",
    image: "umis",
    category: "web",
    name: {
      ar: "منصة مصر للخدمات التعليمية (UMIS)",
      en: "Egypt Educational Services Platform (UMIS)",
    },
    sector: {
      ar: "تعليم · نظام جامعي",
      en: "Education · University system",
    },
    imageAlt: {
      ar: "ثلاث بوابات للطلاب وأعضاء هيئة التدريس ومديري النظام",
      en: "Three portals for students, faculty and system admins",
    },
    description: {
      ar: "نظام جامعي متكامل بثلاث بوابات منفصلة: بوابة الطلاب، وبوابة أعضاء هيئة التدريس، وبوابة مديري النظام، لكل منها صلاحياتها وتجربتها.",
      en: "An end-to-end university system with three separate portals: students, faculty members and system administrators, each with its own permissions and experience.",
    },
    tags: {
      ar: ["تطوير ويب", "ثلاث بوابات", "نظام جامعي"],
      en: ["Web Development", "3 portals", "University system"],
    },
  },
  {
    id: "mizan",
    url: "",
    image: "mizan",
    category: "mobile",
    name: {
      ar: "ميزان — تطبيق صافي الثروة والخدمات المصرفية المفتوحة",
      en: "Mizan — Net Worth & Open Banking App",
    },
    sector: {
      ar: "تقنية مالية · السعودية",
      en: "FinTech · Saudi Arabia",
    },
    imageAlt: {
      ar: "لوحة صافي الثروة مع أرصدة البنوك والذهب والعقارات",
      en: "Dashboard showing net worth with bank, gold and real estate balances",
    },
    description: {
      ar: "تطبيق لتجميع الحسابات البنكية (عبر الخدمات المصرفية المفتوحة) والأصول مثل العقارات والذهب والفضة في لوحة واحدة مع تتبّع صافي الثروة.",
      en: "Financial aggregation app that brings bank accounts (via Open Banking) and assets like real estate, gold and silver into one dashboard with net worth tracking.",
    },
    tags: {
      ar: ["تصميم UI/UX", "Open Banking", "لوحة تحكم"],
      en: ["UI/UX Design", "Open Banking", "Dashboard"],
    },
  },
  {
    id: "pos",
    url: "https://pos.devawy.com/",
    image: "pos",
    category: "web",
    name: {
      ar: "ديفاوي POS — نظام إدارة المبيعات",
      en: "Devawy POS — Sales Management System",
    },
    sector: {
      ar: "نقاط البيع · إدارة أعمال",
      en: "Point of sale · Business management",
    },
    imageAlt: {
      ar: "شاشة نقطة بيع بشبكة منتجات وفاتورة وزر دفع",
      en: "Point-of-sale screen with a product grid, receipt and charge button",
    },
    description: {
      ar: "نظام لإدارة المبيعات يسجّل فيه الموظف بالبريد الإلكتروني أو اسم المستخدم أو رقم الهاتف ليتابع عمله بسرعة وسهولة.",
      en: "A sales management system where staff sign in with an email, username or phone number to keep working quickly and easily.",
    },
    tags: {
      ar: ["تطوير ويب", "نقاط البيع", "إدارة المبيعات"],
      en: ["Web Development", "POS", "Sales management"],
    },
  },
  {
    id: "saldwich",
    url: "",
    image: "saldwich",
    category: "mobile",
    name: {
      ar: "سالدويتش — تطبيق طلب المطاعم",
      en: "Saldwich — Restaurant Ordering App",
    },
    sector: {
      ar: "توصيل طعام · السعودية",
      en: "Food delivery · Saudi Arabia",
    },
    imageAlt: {
      ar: "تطبيق طلب طعام مع القائمة والسلة و25 فرعاً",
      en: "Food ordering app with a menu, cart and 25 branches",
    },
    description: {
      ar: "تطبيق Flutter لطلب الطعام لسلسلة مطاعم من 25 فرعاً، يغطي الرحلة كاملة من تصفح القائمة حتى إتمام الدفع.",
      en: "Flutter ordering app for a restaurant chain with 25 branches, covering the full journey from browsing the menu to checkout.",
    },
    tags: {
      ar: ["تصميم UI/UX", "Flutter", "25 فرعاً"],
      en: ["UI/UX Design", "Flutter", "25 branches"],
    },
  },
  {
    id: "lms-bsu",
    url: "https://www.lms-bsnu.bsu.edu.eg/",
    image: "lms-bsu",
    category: "web",
    name: {
      ar: "منصة الكتاب الإلكتروني (BSU)",
      en: "E-Book Platform (BSU)",
    },
    sector: {
      ar: "تعليم · تعلّم إلكتروني",
      en: "Education · E-learning",
    },
    imageAlt: {
      ar: "منصة قراءة كتب جامعية رقمية مع شريط تقدّم",
      en: "Digital university book reader with a progress bar",
    },
    description: {
      ar: "منصة تعليمية إلكترونية لقراءة الكتب الجامعية رقمياً وإتاحتها للطلاب في أي وقت.",
      en: "An e-learning platform for reading university books digitally and making them available to students at any time.",
    },
    tags: {
      ar: ["تطوير ويب", "تعلّم إلكتروني", "كتب رقمية"],
      en: ["Web Development", "E-learning", "Digital books"],
    },
  },
  {
    id: "wakkt",
    url: "",
    image: "wakkt",
    category: "mobile",
    name: {
      ar: "وقّت — منصة التعريف والتحقق من الموظفين",
      en: "Wakkt — Employee Verification Platform",
    },
    sector: {
      ar: "موارد بشرية · جوال وديسكتوب",
      en: "HR tech · Mobile & desktop",
    },
    imageAlt: {
      ar: "لوحة الحضور على الديسكتوب والتحقق من هوية الموظف على الجوال",
      en: "Attendance dashboard on desktop and employee ID verification on mobile",
    },
    description: {
      ar: "منصة لتعريف الموظفين والتحقق منهم مع تتبّع الحضور ورؤى الإنتاجية وحماية آمنة للبيانات.",
      en: "Employee identification and verification platform with attendance tracking, productivity insights, and secure data protection.",
    },
    tags: {
      ar: ["تصميم UI/UX", "جوال", "ديسكتوب"],
      en: ["UI/UX Design", "Mobile", "Desktop"],
    },
  },
  {
    id: "fintor",
    url: "https://fintor-markting.com/",
    image: "fintor",
    category: "web",
    name: {
      ar: "فينتور للتسويق — وكالة المتاجر الإلكترونية",
      en: "Fintor Marketing — E-commerce Agency",
    },
    sector: {
      ar: "تسويق إلكتروني · مصر",
      en: "Digital marketing · Egypt",
    },
    imageAlt: {
      ar: "موقع وكالة متاجر إلكترونية مع بانر رئيسي وكروت منتجات",
      en: "E-commerce agency website with a hero banner and product cards",
    },
    description: {
      ar: "موقع وكالة تسويق يعرض ثلاث خدمات: متجر مخصص، ووكومرس، ومتجر سلة، مع صفحة تفاصيل لكل خدمة وقسم أعمال ومدونة ونموذج تواصل وزر واتساب مباشر.",
      en: "A marketing agency website presenting three services: custom store, WooCommerce and Salla store, with a detail page per service, a works section, a blog, a contact form and a direct WhatsApp button.",
    },
    tags: {
      ar: ["تطوير ويب", "تجارة إلكترونية", "موقع شركة"],
      en: ["Web Development", "E-commerce", "Company site"],
    },
  },
  {
    id: "infancia",
    url: "",
    image: "infancia",
    category: "mobile",
    name: {
      ar: "إنفانسيا — تطبيق إدارة الحضانات",
      en: "Infancia — Nursery Management App",
    },
    sector: {
      ar: "تعليم · إدارة الحضانات",
      en: "Education · Nursery management",
    },
    imageAlt: {
      ar: "ثلاث واجهات للمدير والمعلمة وولي الأمر",
      en: "Three role views for admin, teacher and parent",
    },
    description: {
      ar: "تطبيق متعدد الأدوار: يدير المسؤولون العمليات، وترفع المعلمات تقارير عن تقدّم الأطفال، ويتابع أولياء الأمور يوم طفلهم.",
      en: "Multi-role app where admins manage operations, teachers report on children’s progress, and parents follow their child’s day.",
    },
    tags: {
      ar: ["تصميم UI/UX", "متعدد الأدوار", "جوال"],
      en: ["UI/UX Design", "Multi-role", "Mobile"],
    },
  },
  {
    id: "soukna-masry",
    url: "",
    image: "soukna-masry",
    category: "web",
    name: {
      ar: "سوقنا مصري — سوق إلكتروني مصري",
      en: "Soukna Masry — Egyptian Marketplace",
    },
    sector: {
      ar: "تجارة إلكترونية · مصر",
      en: "E-commerce · Egypt",
    },
    imageAlt: {
      ar: "سوق إلكتروني ثنائي اللغة مع تصنيفات المنتجات والشحن المجاني",
      en: "Bilingual online marketplace with product categories and free shipping",
    },
    description: {
      ar: "سوق ثنائي اللغة (عربي/إنجليزي ويدعم RTL) لدعم المشروعات المصرية الصغيرة: تصفح التصنيفات، المفضلة، السلة، تسجيل الدخول، برنامج شراكة البائعين، وصفحات سياسات الشحن والإرجاع والخصوصية والشروط. يبيع الملابس والمستلزمات المنزلية والمكياج والإلكترونيات مع شحن مجاني وإرجاع سهل ودفع آمن.",
      en: "Bilingual (Arabic/English, RTL-aware) marketplace supporting small Egyptian businesses: category browsing, favourites, a cart, login, a seller partnership program, and policy pages for shipping, returns, privacy and terms. Sells clothing, home goods, makeup and electronics, with free shipping, easy returns and secure payment.",
    },
    tags: {
      ar: ["تصميم UI/UX", "RTL", "عربي / English"],
      en: ["UI/UX Design", "RTL", "Arabic / English"],
    },
  },
  {
    id: "arabic-app",
    url: "https://github.com/OsamaMahmaud/arabic_app",
    image: "arabic-app",
    category: "mobile",
    name: {
      ar: "Arabic App — تطبيق جوال",
      en: "Arabic App — Mobile App",
    },
    sector: {
      ar: "تطبيق جوال · كود مفتوح",
      en: "Mobile app · Open source",
    },
    imageAlt: {
      ar: "شاشتا تطبيق جوال بواجهة عربية",
      en: "Two screens of a mobile app with an Arabic interface",
    },
    description: {
      ar: "تطبيق جوال بواجهة عربية. الكود المصدري متاح على GitHub.",
      en: "A mobile app with an Arabic interface. The source code is available on GitHub.",
    },
    tags: {
      ar: ["تطبيق جوال", "GitHub", "كود مفتوح"],
      en: ["Mobile app", "GitHub", "Open source"],
    },
  },
  {
    id: "triple-b",
    url: "https://triple-b-olive.vercel.app/",
    image: "triple-b",
    category: "web",
    name: {
      ar: "تربل بي — موقع مطعم برجر",
      en: "Triple B — Burger Restaurant Website",
    },
    sector: {
      ar: "هوية مطعم · الرياض",
      en: "Restaurant brand · Riyadh",
    },
    imageAlt: {
      ar: "صفحة هبوط داكنة لمطعم برجر مع صورة رئيسية جريئة",
      en: "Dark burger restaurant landing page with a bold hero",
    },
    description: {
      ar: "صفحة هبوط ثنائية اللغة (عربي/إنجليزي ويدعم RTL) لمطعم برجر: هوية داكنة جريئة وصور رئيسية، رابط للقائمة، محدد فروع الرياض، روابط تطبيقات التوصيل وحسابات التواصل الاجتماعي.",
      en: "Bilingual (Arabic/English, RTL) landing page for a burger restaurant: a bold dark brand identity with hero imagery, a menu link, a Riyadh branch locator, links to delivery apps, and social media links.",
    },
    tags: {
      ar: ["تصميم UI/UX", "RTL", "صفحة هبوط"],
      en: ["UI/UX Design", "RTL", "Landing page"],
    },
  },
  {
    id: "el-fayrouz",
    url: "",
    image: "el-fayrouz",
    category: "mobile",
    name: {
      ar: "الفيروز — تطبيق نقل طلاب الجامعة",
      en: "El Fayrouz — University Transportation App",
    },
    sector: {
      ar: "نقل ومواصلات",
      en: "Transportation",
    },
    imageAlt: {
      ar: "اختيار المسار مع إيصال الدفع وإشعار الموافقة",
      en: "Route selection with a payment receipt and approval notification",
    },
    description: {
      ar: "تطبيق لنقل طلاب الجامعة: اختيار المسار، إدارة الاشتراك، إيصالات الدفع الرقمية، وإشعارات الموافقة.",
      en: "University student transportation app for route selection, subscription management, digital payment receipts, and approval notifications.",
    },
    tags: {
      ar: ["تصميم UI/UX", "جوال", "اشتراكات"],
      en: ["UI/UX Design", "Mobile", "Subscriptions"],
    },
  },
  {
    id: "sportyano",
    url: "",
    image: "sportyano",
    category: "web",
    name: {
      ar: "سبورتيانو — منصة رياضية رقمية",
      en: "Sportyano — Sports Digital Platform",
    },
    sector: {
      ar: "رياضة · منصة ويب",
      en: "Sports · Web platform",
    },
    imageAlt: {
      ar: "موقع رياضي يضم كتالوج المواهب والأكاديميات والملاعب",
      en: "Sports hub website with talents, academies and playgrounds catalog",
    },
    description: {
      ar: "منصة ويب تعمل كمركز لمحتوى الرياضة، مع كتالوج إلكتروني للمواهب والأكاديميات الرياضية والملاعب.",
      en: "Web platform that acts as a central hub for sports content, with an online catalog for talents, sports academies, and sports playgrounds.",
    },
    tags: {
      ar: ["تصميم UI/UX", "ويب", "كتالوج"],
      en: ["UI/UX Design", "Web", "Catalog"],
    },
  },
  {
    id: "i-hony-herb",
    url: "",
    image: "i-hony-herb",
    category: "mobile",
    name: {
      ar: "آي هوني هيرب — متجر منتجات طبيعية",
      en: "I Hony Herb — Natural Products Store",
    },
    sector: {
      ar: "تجارة إلكترونية",
      en: "E-commerce",
    },
    imageAlt: {
      ar: "تطبيق متجر منتجات طبيعية مع توصيات ودفع آمن",
      en: "Natural products store app with recommendations and secure checkout",
    },
    description: {
      ar: "متجر منتجات طبيعية مع توصيات مخصّصة ودفع آمن وتوصيل.",
      en: "Natural products store with personalized recommendations, secure payments, and delivery.",
    },
    tags: {
      ar: ["تصميم UI/UX", "جوال", "تجارة إلكترونية"],
      en: ["UI/UX Design", "Mobile", "E-commerce"],
    },
  },
  {
    id: "natural-solutions",
    url: "",
    image: "natural-solutions",
    category: "mobile",
    name: {
      ar: "نتشرال سوليوشنز — تطبيق خدمات المغسلة",
      en: "Natural Solutions — Laundry Service App",
    },
    sector: {
      ar: "خدمات عند الطلب",
      en: "On-demand services",
    },
    imageAlt: {
      ar: "تطبيق مغسلة لغسيل الملابس والسجاد وتنظيف السيارات",
      en: "Laundry app with clothes, carpet and car cleaning services",
    },
    description: {
      ar: "تطبيق مغسلة لخدمات الملابس والسجاد وتنظيف السيارات.",
      en: "Laundry service app for clothes, carpets, and car cleaning.",
    },
    tags: {
      ar: ["تصميم UI/UX", "جوال", "عند الطلب"],
      en: ["UI/UX Design", "Mobile", "On-demand"],
    },
  },
  {
    id: "ghassal-lundria",
    url: "",
    image: "ghassal-lundria",
    category: "mobile",
    name: {
      ar: "غسّال وليندريا — تطبيقا تنظيف المنزل والسيارة",
      en: "Ghassal & Lundria — Home & Car Cleaning Apps",
    },
    sector: {
      ar: "خدمات عند الطلب",
      en: "On-demand services",
    },
    imageAlt: {
      ar: "تطبيقان لتنظيف المنزل والسيارة مع خطوات تقدّم الطلب",
      en: "Two cleaning apps for home and car with order progress steps",
    },
    description: {
      ar: "تطبيقا تنظيف للمنازل والسيارات يغطيان الطلب حتى إتمام الخدمة.",
      en: "Home and car cleaning apps that cover ordering through service completion.",
    },
    tags: {
      ar: ["تصميم UI/UX", "جوال", "عند الطلب"],
      en: ["UI/UX Design", "Mobile", "On-demand"],
    },
  },
];
